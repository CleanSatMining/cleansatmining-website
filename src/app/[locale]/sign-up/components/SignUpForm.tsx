'use client'
import {
  RegisterMutation,
  RegisterMutationVariables,
} from '@/graphql/common/generated-types'
import Button from '@/components/button/Button'
import CSMInput from '@/components/input/Input'
import { useMutation } from '@apollo/client'
import { useFormik } from 'formik'
import { useTranslations } from 'next-intl'
import { useMemo } from 'react'
import { toast } from 'react-toastify'
import * as Yup from 'yup'
import { SIGN_UP } from '../sign-up.graphql'

export default function SignUpForm() {
  const t = useTranslations('SignUpPage.form')
  const errorMessage = useTranslations('errors')

  const [signUp, { data, loading, error }] = useMutation<
    RegisterMutation,
    RegisterMutationVariables
  >(SIGN_UP)

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      passwordConfirmation: '',
    },
    validationSchema: Yup.object({
      passwordConfirmation: Yup.string().oneOf(
        [Yup.ref('password')],
        t('passwordConfirmationError'),
      ),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await signUp({
          variables: {
            input: {
              emailAddress: values.email,
              password: values.password,
            },
          },
        })

        if (response.data) {
          resetForm()
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
    handleSubmit,
    isSubmitting,
    isValid,
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
          value={values.email}
        />
        <CSMInput
          isRequired
          id="password"
          type="password"
          data-testid="password"
          label={t('password')}
          onChange={handleChange}
          value={values.password}
        />
        <CSMInput
          isRequired
          id="passwordConfirmation"
          data-testid="passwordConfirmation"
          type="password"
          label={t('passwordConfirmation')}
          onChange={handleChange}
          color={errors.passwordConfirmation ? 'danger' : undefined}
          value={values.passwordConfirmation}
          isInvalid={touched && !!errors.passwordConfirmation}
          errorMessage={errors.passwordConfirmation}
        />
        <Button
          type="submit"
          className="w-full"
          disabled={isSubmitting || !isValid}
          data-testid="submitSignUpForm"
        >
          {t('submit')}
        </Button>
      </form>
    ),
    [
      errors.passwordConfirmation,
      handleChange,
      handleSubmit,
      isSubmitting,
      isValid,
      t,
      touched,
      values.email,
      values.password,
      values.passwordConfirmation,
    ],
  )

  return form
}
