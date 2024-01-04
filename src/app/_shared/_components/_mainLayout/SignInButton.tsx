'use client'
import { useSession } from 'next-auth/react'
import { useTranslations } from 'next-intl'
import ButtonLink from '../_utils/_buttons/ButtonLink'

export default function SignInButton() {
  const t = useTranslations('Header.buttons')
  const session = useSession()

  return (
    <ButtonLink
      href={session.status === 'authenticated' ? '/account/user' : '/sign-in'}
      className="lg:w-48"
    >
      {session.status === 'authenticated' ? t('account') : t('login')}
    </ButtonLink>
  )
}