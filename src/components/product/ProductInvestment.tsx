import { useTranslations } from 'next-intl'
import ProductSection from './ProductSection'

interface ProductInvestmentProps {
  minInvestmentAmount: number
  maxInvestmentAmount?: number
  className?: string
}

export default function ProductInvestment({
  minInvestmentAmount,
  maxInvestmentAmount,
  className,
}: ProductInvestmentProps) {
  const t = useTranslations('Product.investment')

  return (
    <ProductSection title={t('title')} className={className}>
      <div className="font-semibold">
        {`${t('minInvestmentAmount')} ${minInvestmentAmount} $`}
        {maxInvestmentAmount &&
          ` - ${t('maxInvestmentAmount')} ${maxInvestmentAmount} $`}
      </div>
    </ProductSection>
  )
}
