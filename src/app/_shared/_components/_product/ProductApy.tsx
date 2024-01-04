import { intlFormats } from '@/app/_shared/_format/format'
import { SaleStatus } from '@/models/Product'
import { Info } from '@phosphor-icons/react/dist/ssr/Info'
import { useFormatter, useTranslations } from 'next-intl'
import ProductSection from './ProductSection'

interface ProductApyProps {
  estimatedNetApy: number
  status?: SaleStatus
  className?: string
}

export default function ProductApy({
  estimatedNetApy,
  status = 'running',
  className,
}: ProductApyProps) {
  const t = useTranslations('Product.Apy')
  const format = useFormatter()

  return (
    <ProductSection className={className}>
      <h3 className="flex items-baseline gap-1 text-lg font-bold">
        {t('title')} <Info size={16} /> :{' '}
        <span
          className={`ml-2 inline-block text-2xl ${
            status === 'closed' ? 'text-grey-300' : 'text-green'
          }`}
        >
          {format.number(estimatedNetApy, intlFormats.number.percent)}
        </span>
      </h3>
    </ProductSection>
  )
}
