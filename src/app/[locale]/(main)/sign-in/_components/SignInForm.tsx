'use client'
import { EMAIL_REGEX } from '@/app/_shared/_constants/constants'
import { useFormik } from 'formik'
import { signIn } from 'next-auth/react'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import { useCallback, useMemo, useState } from 'react'
import { toast } from 'react-toastify'

import Button from '@/app/_shared/_components/_utils/_buttons/Button'
import CSMInput from '@/app/_shared/_components/_utils/_input/Input'
import { ErrorMessageKey } from '@/models/ErrorMessageKey'
import { WarningCircle } from '@phosphor-icons/react/dist/ssr/WarningCircle'
import ErrorMessage from './ErrorMessage'

export default function SignInForm({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  const t = useTranslations('SignInPage.form')
  let errors = useTranslations('errors')

  const router = useRouter()
  const [displayErrorMessage, setDisplayErrorMessage] = useState<string | null>(
    null,
  )

  const errorMessages: Record<string, ErrorMessageKey[]> = useMemo(
    () => ({
      InvalidCredentialsError: [
        'invalidCredentialsError',
        'invalidCredentialsError2',
      ],
      NotVerifiedError: ['notVerifiedError'],
    }),
    [],
  )

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    onSubmit: async (values) => {
      try {
        const response = await signIn('credentials', {
          username: values.email,
          password: values.password,
          redirect: false,
        })
        if (response?.error) {
          setDisplayErrorMessage(response.error)
        } else {
          setDisplayErrorMessage(null)
          router.refresh()
          if (searchParams?.callbackUrl) {
            router.push(searchParams.callbackUrl.toString())
          } else {
            router.push('/')
          }
        }
      } catch (e) {
        toast.error(errors('defaultServerErrorMessage'))
      }
    },
  })

  const errorMessage = useCallback(
    (titleKey: ErrorMessageKey, contentKeys: ErrorMessageKey[]) => (
      <ErrorMessage
        IconName={WarningCircle}
        titleKey={titleKey}
        contentKeys={contentKeys}
      />
    ),
    [],
  )

  const { handleChange, values, handleSubmit } = formik

  const form = useMemo(
    () => (
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {displayErrorMessage &&
          errorMessages[displayErrorMessage] &&
          errorMessage('connexionError', errorMessages[displayErrorMessage])}

        <CSMInput
          isRequired
          id="email"
          type="email"
          label={t('email')}
          onChange={handleChange}
          value={values.email}
          pattern={EMAIL_REGEX.toString()}
        />
        <CSMInput
          isRequired
          id="password"
          type="password"
          label={t('password')}
          onChange={handleChange}
          value={values.password}
        />
        <Button type="submit" className="w-full">
          {t('submit')}
        </Button>
      </form>
    ),
    [
      handleSubmit,
      displayErrorMessage,
      errorMessages,
      errorMessage,
      t,
      handleChange,
      values.email,
      values.password,
    ],
  )

  return form
}
