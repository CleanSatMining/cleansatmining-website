import Box from '@/app/_shared/_components/_utils/Box'
import { useTranslations } from 'next-intl'

interface NoProductsProps {
  className?: string
}

export function NoProducts({ className }: NoProductsProps) {
  const t = useTranslations('HomePage.signedIn')
  return (
    <Box className={className ? className : 'rounded-3xl px-9 py-6'}>
      <p data-testid="emptyList">{t('empty')}</p>
    </Box>
  )
}
