'use client'
import Button from '@/components/button/Button'
import CSMInput from '@/components/input/Input'
import { useFormik } from 'formik'
import { signIn, useSession } from 'next-auth/react'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import { useMemo, useState } from 'react'
import { toast } from 'react-toastify'

export default function SignInForm() {
  const t = useTranslations('SignInPage.form')
  let errorMessage = useTranslations('errors')
  const session = useSession()

  const router = useRouter()
  const [displayErrorMessage, setDisplayErrorMessage] = useState(false)

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    onSubmit: async (values) => {
      try {
        setDisplayErrorMessage(false)
        const response = await signIn('credentials', {
          username: values.email,
          password: values.password,
          redirect: false,
        })
        if (response?.error) {
          if (response?.error === 'InvalidCredentialsError') {
            setDisplayErrorMessage(true)
          }
        }
        if (!response?.error) {
          router.push('/')
        }
      } catch (e) {
        console.error(e)
        toast.error(errorMessage('defaultServerErrorMessage'))
      }
    },
  })

  const form = useMemo(
    () => (
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
        {displayErrorMessage && (
          <>
            <p>{errorMessage('connexionError')}</p>
            <p>{errorMessage('invalidCredentialsError')}</p>
            <p>{errorMessage('invalidCredentialsError2')}</p>
          </>
        )}

        <CSMInput
          isRequired
          id="email"
          type="email"
          label={t('email')}
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <CSMInput
          isRequired
          id="password"
          type="password"
          label={t('password')}
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <Button type="submit" className="w-full">
          {t('submit')}
        </Button>
      </form>
    ),
    [
      displayErrorMessage,
      errorMessage,
      formik.handleChange,
      formik.handleSubmit,
      formik.values.email,
      formik.values.password,
      t,
    ],
  )

  return form
}
