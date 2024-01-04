import { useTranslations } from 'next-intl'
import ProgressBar from '../_utils/ProgressBar'
import ProductSection from './ProductSection'

interface ProductFundingProps {
  minProjectValue: number
  currentProjectInvestmentAmount: number
  currentProjectInvestmentProgress: number
  className?: string
}

export default function ProductFunding({
  minProjectValue,
  currentProjectInvestmentAmount,
  currentProjectInvestmentProgress,
  className,
}: ProductFundingProps) {
  const t = useTranslations('Product.funding')

  return (
    <ProductSection title={t('title')} className={className}>
      <ProgressBar
        minProjectValue={minProjectValue}
        currentProjectInvestmentAmount={currentProjectInvestmentAmount}
        currentProjectInvestmentProgress={currentProjectInvestmentProgress}
      />
    </ProductSection>
  )
}
