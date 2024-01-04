import { intlFormats } from '@/app/_shared/_format/format'
import { useFormatter, useTranslations } from 'next-intl'
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
  const format = useFormatter()

  return (
    <ProductSection title={t('title')} className={className}>
      <div className="font-semibold">
        {`${t('minInvestmentAmount')} ${format.number(
          minInvestmentAmount,
          intlFormats.number.dollarRounded,
        )}`}
        {maxInvestmentAmount &&
          ` - ${t('maxInvestmentAmount')} ${format.number(
            maxInvestmentAmount,
            intlFormats.number.dollarRounded,
          )}`}
      </div>
    </ProductSection>
  )
}
