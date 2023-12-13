import { useTranslations } from 'next-intl'
import ProductSection from './ProductSection'
import ProgressBar from '../ProgressBar'

interface ProductFundingProps {
  minProjectValue: number
  currentProjectInvestmentAmount: number
  totalInvestment: number
  className?: string
}

export default function ProductFunding({
  minProjectValue,
  currentProjectInvestmentAmount,
  totalInvestment,
  className,
}: ProductFundingProps) {
  const t = useTranslations('Product.funding')

  return (
    <ProductSection title={t('title')} className={className}>
      <ProgressBar
        minProjectValue={minProjectValue}
        currentProjectInvestmentAmount={currentProjectInvestmentAmount}
        totalInvestment={totalInvestment}
      />
    </ProductSection>
  )
}
