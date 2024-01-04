import { useTranslations } from 'next-intl'

export function CheckoutEmpty({}) {
  const t = useTranslations('CartGlobal')

  return <div>{t('text.emptyCart')}</div>
}
