import { useTranslations } from 'next-intl'
import { Info } from '@phosphor-icons/react/dist/ssr/Info'
import ProductSection from './ProductSection'
import { SaleStatus } from '@/models/Product'

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

  return (
    <ProductSection className={className}>
      <h3 className="flex items-baseline gap-1 text-lg font-bold">
        {t('title')} <Info size={16} /> :{' '}
        <span
          className={`ml-2 inline-block text-2xl ${
            status === 'closed' ? 'text-grey-300' : 'text-green'
          }`}
        >
          {`${(estimatedNetApy * 100).toFixed(1)}%`}
        </span>
      </h3>
    </ProductSection>
  )
}
