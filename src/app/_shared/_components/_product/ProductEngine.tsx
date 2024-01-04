import { intlFormats } from '@/app/_shared/_format/format'
import { CalendarBlank } from '@phosphor-icons/react/dist/ssr/CalendarBlank'
import { useFormatter, useTranslations } from 'next-intl'
import ProductSection from './ProductSection'

interface ProductEngineProps {
  engineType: string
  engineQuantity: number
  estimatedDeliveryDate: Date
  estimatedLaunchDate: Date
  className?: string
}

export default function ProductEngine({
  engineType,
  engineQuantity,
  estimatedDeliveryDate,
  estimatedLaunchDate,
  className,
}: ProductEngineProps) {
  const t = useTranslations('Product.engine')
  const format = useFormatter()

  return (
    <ProductSection title={t('title')} className={className}>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-1">
          <div>{t('engineType')}</div>
          <div className="font-semibold">{engineType}</div>
        </div>
        <div className="flex items-center gap-1">
          <div>{t('engineQuantity')}</div>
          <div className="font-semibold">{engineQuantity}</div>
        </div>
        <div className="flex items-center gap-2">
          <CalendarBlank className={'shrink-0'} size={24} />
          <div>{t('estimatedDeliveryDate')}</div>
          <div className="font-semibold">
            {format.dateTime(
              new Date(estimatedDeliveryDate),
              intlFormats.dateTime.numeric,
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <CalendarBlank className={'shrink-0'} size={24} />
          <div>{t('estimatedLaunchDate')}</div>
          <div className="font-semibold">
            {format.dateTime(
              new Date(estimatedLaunchDate),
              intlFormats.dateTime.numeric,
            )}
          </div>
        </div>
      </div>
    </ProductSection>
  )
}
