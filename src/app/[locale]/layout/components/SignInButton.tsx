'use client'

import ButtonLink from '@/components/button/ButtonLink'
import { useSession } from 'next-auth/react'
import { useTranslations } from 'next-intl'

export default function SignInButton() {
  const t = useTranslations('Header.buttons')
  const session = useSession()

  return (
    <ButtonLink
      href={session.status === 'authenticated' ? '/account' : '/sign-in'}
      className="lg:w-48"
    >
      {session.status === 'authenticated' ? t('account') : t('login')}
    </ButtonLink>
  )
}
