'use client'
import Button from '@/app/_shared/_components/_utils/_buttons/Button'
import CSMInput from '@/app/_shared/_components/_utils/_input/Input'
import CSMSelect from '@/app/_shared/_components/_utils/_select/CSMSelect'
import { EMAIL_REGEX } from '@/app/_shared/_constants/constants'
import {
  LanguageCode,
  RegisterMutation,
  RegisterMutationVariables,
} from '@/graphql/common/generated-types'
import {
  citizenshipOptions,
  residenceCountryOptions,
} from '@/models/all_countries_and_citizenships.option'
import { useMutation } from '@apollo/client'
import { Checkbox } from '@nextui-org/checkbox'
import { useFormik } from 'formik'
import { useTranslations } from 'next-intl'
import { useEffect, useMemo, useState } from 'react'
import { toast } from 'react-toastify'
import * as Yup from 'yup'
import { SIGN_UP } from '../sign-up.graphql'

type SelectOptionData = Array<{
  value: string
  label: Array<{ languageCode: string; value: string }>
}>

export default function SignUpForm() {
  const t = useTranslations('SignUpPage.form')
  const tUrl = useTranslations('externalUrl')

  const errorMessage = useTranslations('errors')

  const [signUp, { data, loading, error }] = useMutation<
    RegisterMutation,
    RegisterMutationVariables
  >(SIGN_UP)

  const [selectCountryOptions, setSelectCountryOptions] = useState<
    Array<{ key: string; value: string }>
  >([])
  const [selectCitizenshipOptions, setSelectCitizenshipOptions] = useState<
    Array<{ key: string; value: string }>
  >([])

  useEffect(() => {
    setSelectCountryOptions(generateSelectOptions(residenceCountryOptions))
    setSelectCitizenshipOptions(generateSelectOptions(citizenshipOptions))
  }, [])

  function generateSelectOptions(selectOption: SelectOptionData) {
    let listCountries: Array<{ key: string; value: string }> = []

    selectOption.forEach((option) => {
      const doesFrenchLabelExists = option.label.some(
        (optionLabel) => optionLabel.languageCode === LanguageCode.fr,
      )
      const isSameKeyPresentInList = listCountries.some(
        (c2) => c2.key === option.value,
      )
      if (doesFrenchLabelExists && !isSameKeyPresentInList) {
        listCountries.push({
          key: option.value,
          value: option.label.find(
            (optionLabel) => optionLabel.languageCode == LanguageCode.fr,
          )!.value,
        })
      }
    })

    return listCountries.sort((a, b) => a.value.localeCompare(b.value))
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      passwordConfirmation: '',
      country: '',
      citizenship: '',
      termsAndConditions: false,
    },
    validateOnMount: false,
    validationSchema: Yup.object({
      email: Yup.string()
        .required(t('errors.required'))
        .matches(EMAIL_REGEX, t('errors.emailFormat')),
      password: Yup.string().required(t('errors.required')),
      passwordConfirmation: Yup.string()
        .required(t('errors.required'))
        .oneOf([Yup.ref('password')], t('errors.passwordConfirmation')),
      country: Yup.string()
        .oneOf(selectCountryOptions.map((c) => c.key))
        .required(t('errors.required')),
      citizenship: Yup.string()
        .oneOf(selectCitizenshipOptions.map((c) => c.key))
        .required(t('errors.required')),
      termsAndConditions: Yup.boolean().isTrue(t('errors.required')),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await signUp({
          variables: {
            input: {
              emailAddress: values.email,
              password: values.password,
              customFields: {
                residenceCountry: values.country,
                citizenship: values.citizenship,
                termsAndConditions: values.termsAndConditions,
              },
            },
          },
        })

        if (response.data) {
          resetForm()
          toast.success(t('successMessage'))
        }
      } catch (e) {
        toast.error(errorMessage('defaultServerErrorMessage'))
      }
    },
  })

  const {
    errors,
    touched,
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    isValid,
    setFieldValue,
    dirty,
  } = formik

  const form = useMemo(
    () => (
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <CSMInput
          isRequired
          id="email"
          type="email"
          data-testid="email"
          label={t('email')}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          pattern={EMAIL_REGEX.toString()}
          errorMessage={!!touched.email && errors.email}
          isInvalid={!!touched.email && !!errors.email}
        />
        <CSMInput
          isRequired
          id="password"
          type="password"
          data-testid="password"
          label={t('password')}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          errorMessage={!!touched.password && errors.password}
          isInvalid={!!touched.password && !!errors.password}
        />
        <CSMInput
          isRequired
          id="passwordConfirmation"
          data-testid="passwordConfirmation"
          type="password"
          label={t('passwordConfirmation')}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.passwordConfirmation}
          isInvalid={
            !!touched.passwordConfirmation && !!errors.passwordConfirmation
          }
          errorMessage={
            !!touched.passwordConfirmation && errors.passwordConfirmation
          }
        />
        <CSMSelect
          isRequired
          id="country"
          data-testid="country"
          label={t('country')}
          selectedKeys={values.country !== '' ? [values.country] : []}
          onSelectionChange={(e: any) => setFieldValue('country', e.currentKey)}
          dataSelect={selectCountryOptions}
          onBlur={handleBlur}
          isInvalid={!!touched.country && !!errors.country}
          errorMessage={!!touched.country && errors.country}
        />
        <CSMSelect
          isRequired
          id="citizenship"
          data-testid="citizenship"
          label={t('citizenship')}
          selectedKeys={values.citizenship !== '' ? [values.citizenship] : []}
          onSelectionChange={(e: any) =>
            setFieldValue('citizenship', e.currentKey)
          }
          dataSelect={selectCitizenshipOptions}
          onBlur={handleBlur}
          isInvalid={!!touched.citizenship && !!errors.citizenship}
          errorMessage={!!touched.citizenship && errors.citizenship}
        />
        <Checkbox
          id="termsAndConditions"
          data-testid="termsAndConditions"
          isSelected={values.termsAndConditions}
          isRequired
          onValueChange={(e: any) => {
            setFieldValue('termsAndConditions', e)
          }}
          onBlur={handleBlur}
          isInvalid={
            !!touched.termsAndConditions && !!errors.termsAndConditions
          }
        >
          <span className="text-xs">
            {t('termsConditions.label')}
            <a href={tUrl('csmHome')} target="_blank" className="underline">
              {t('termsConditions.link')}
            </a>
          </span>
        </Checkbox>
        <Button
          type="submit"
          className="w-full"
          disabled={!dirty || isSubmitting || !isValid}
          data-testid="submitSignUpForm"
        >
          {t('submit')}
        </Button>
      </form>
    ),
    [
      handleSubmit,
      t,
      handleChange,
      handleBlur,
      values.email,
      values.password,
      values.passwordConfirmation,
      values.country,
      values.citizenship,
      values.termsAndConditions,
      touched.email,
      touched.password,
      touched.passwordConfirmation,
      touched.country,
      touched.citizenship,
      touched.termsAndConditions,
      errors.email,
      errors.password,
      errors.passwordConfirmation,
      errors.country,
      errors.citizenship,
      errors.termsAndConditions,
      selectCountryOptions,
      selectCitizenshipOptions,
      tUrl,
      dirty,
      isSubmitting,
      isValid,
      setFieldValue,
    ],
  )

  return form
}
