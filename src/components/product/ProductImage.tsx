import { SaleStatus } from '@/models/Product'
import classNames from 'classnames'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import ProductStatusChip from './ProductStatus'
import CSMChip from '../chip/Chip'

interface ProductImageProps {
  image: string
  productName: string
  secondaryProductName?: string
  locationName?: string
  locationCountry?: string
  status: SaleStatus
  size: 'banner' | 'card'
  className?: string
}

export default function ProductImage({
  image,
  productName,
  secondaryProductName,
  locationName,
  locationCountry,
  status,
  size,
  className,
}: ProductImageProps) {
  const t = useTranslations('Product')
  // TODO: Calculate with product infos
  const countdown = '3h 20min 25s'

  return (
    <div
      className={classNames(
        'relative flex w-full flex-col items-center justify-center text-white',
        {
          'h-52': size === 'card',
          'h-[540px]': size === 'banner',
          className,
        },
      )}
    >
      {status === 'lastOpportunity' && (
        <div
          className={classNames(
            'absolute left-1/2 top-0 z-20 -translate-x-1/2 whitespace-nowrap rounded-b-3xl bg-grey-800 px-5 py-1',
            {
              'text-sm': size === 'card',
              'text-2xl': size === 'banner',
            },
          )}
          data-testid="productCountdown"
        >
          {t('closeIn')}{' '}
          <span className="font-semibold text-yellow">{countdown}</span>
        </div>
      )}
      {status === 'incoming' && (
        <div
          className={classNames(
            'absolute left-1/2 top-0 z-20 -translate-x-1/2 whitespace-nowrap rounded-b-3xl bg-grey-800 px-5 py-1',
            {
              'text-sm': size === 'card',
              'text-2xl': size === 'banner',
            },
          )}
          data-testid="productCountdown"
        >
          {t('openIn')}{' '}
          <span className="font-semibold text-blue">{countdown}</span>
        </div>
      )}
      <div className="absolute z-10 h-full w-full opacity-30 dark:bg-gradient-to-b dark:from-transparent dark:to-black"></div>
      <Image
        src={image}
        alt=""
        className="absolute z-0 h-full w-full object-cover"
        width={size === 'banner' ? 1340 : 608}
        height={size === 'banner' ? 540 : 208}
      />
      <div
        className={classNames(
          'relative z-20 flex flex-col items-center justify-center gap-2',
          {
            'gap-2': size === 'card',
            'gap-6': size === 'banner',
          },
        )}
      >
        <ProductStatusChip
          status={status}
          data-testid="productStatus"
          classNames={{
            content: classNames({
              'text-2xl': size === 'banner',
            }),
          }}
        />
        <h2
          className={classNames('font-title text-3xl font-extrabold', {
            'text-3xl': size === 'card',
            'text-6xl': size === 'banner',
          })}
        >
          {productName}
        </h2>
        {locationName && (
          <p
            className={classNames('font-title font-semibold', {
              'text-2xl': size === 'banner',
            })}
          >
            {locationName} {locationCountry && <>({locationCountry})</>}
          </p>
        )}
        {secondaryProductName && (
          <CSMChip
            customColor="grey-800"
            classNames={{ base: 'px-3 py-2', content: 'font-normal' }}
          >
            {secondaryProductName}
          </CSMChip>
        )}
      </div>
    </div>
  )
}
