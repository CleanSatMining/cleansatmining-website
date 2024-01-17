'use client'
import { useSession } from 'next-auth/react'
import { useTranslations } from 'next-intl'
import ButtonLink from '../_utils/_buttons/ButtonLink'

interface MarketplaceButtonProps {
  colorScheme: 'dark' | 'light'
}

const MarketplaceButton: React.FC<MarketplaceButtonProps> = ({
  colorScheme,
  ...otherProps
}) => {
  const t = useTranslations('Header.buttons')
  const session = useSession()

  return (
    <ButtonLink
      href={session.status === 'authenticated' ? '/account/user' : '/sign-in'}
      className="lg:w-48"
    >
      {t('marketplace')}
    </ButtonLink>
  )
}

export default MarketplaceButton
