import { Order } from '@/graphql/common/generated-types'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

interface CheckoutHeaderProps {
  activeOrder?: Order
}

export default function CheckoutHeader({ activeOrder }: CheckoutHeaderProps) {
  const t = useTranslations('Header')

  function displayHeaderTitle() {
    if (activeOrder && activeOrder.lines.length > 0) {
      const { name, customFields } = activeOrder.lines[0].productVariant.product
      const { locationName, locationCountry } = customFields

      return (
        <h1 className="flex flex-col gap-1 text-4xl leading-none">
          <span className="font-title font-extrabold">{name}</span>
          {(locationName || locationCountry) && (
            <small className="flex gap-1 text-xl">
              {locationName && <>{locationName}</>}
              {locationCountry && <span>({locationCountry})</span>}
            </small>
          )}
        </h1>
      )
    }
  }

  return (
    <header className="flex flex-wrap items-center justify-center gap-4 px-12 py-8 xl:pb-0">
      <Image src="/CSM-logo.svg" width={226} height={80} alt={t('logo')} />
      {displayHeaderTitle()}
    </header>
  )
}
