'use client'
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

  return (
    <ButtonLink href={'/sign-in'} className="lg:w-48">
      {t('marketplace')}
    </ButtonLink>
  )
}

export default MarketplaceButton
