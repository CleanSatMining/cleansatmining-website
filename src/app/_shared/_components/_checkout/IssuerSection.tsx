import { useTranslations } from 'next-intl'
import ProductSection from '../_product/ProductSection'

interface IssuerSectionProps {
  issuerName: string
  issuerID: string
}

export function IssuerSection({ issuerName, issuerID }: IssuerSectionProps) {
  const t = useTranslations('InvestmentSummaryPage.text')

  return (
    <ProductSection
      className="px-9 py-4"
      classNameTitle="text-xs font-normal text-white/70 leading-tight"
      title={t('offerIssuer')}
      spacing="small"
    >
      <div className="text-sm font-semibold leading-tight">{issuerName}</div>
      <div className="text-xs leading-tight">{issuerID}</div>
    </ProductSection>
  )
}
