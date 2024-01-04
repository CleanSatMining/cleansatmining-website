import Box from '@/app/_shared/_components/_utils/Box'
import Divider from '@/app/_shared/_components/_utils/Divider'
import { Product } from '@/graphql/common/generated-types'
import { SaleStatus } from '@/models/Product'
import classNames from 'classnames'
import ProductImage from '../_product/ProductImage'
import { InvestmentAmountSection } from './InvestmentAmountSection'
import { IssuerSection } from './IssuerSection'

interface ProductMiniCardProps {
  product: Product
  quantity: number
  extend?: boolean
  withImage?: boolean
  className?: string
}

export function ProductMiniCard({
  product,
  quantity,
  extend = true,
  withImage = true,
  className,
}: ProductMiniCardProps) {
  const {
    saleStatus,
    locationName,
    locationCountry,
    issuerName,
    issuerID,
    tokenPrice,
    tokenName,
  } = product.customFields

  return (
    <Box
      bgColor="dark:bg-grey-600"
      className={classNames('flex flex-col overflow-hidden', className)}
    >
      {withImage && product.featuredAsset?.source && (
        <ProductImage
          size={extend ? 'extendedMiniCard' : 'miniCard'}
          imageUrl={product.featuredAsset?.source}
          status={saleStatus as SaleStatus}
          name={product.name}
          locationName={locationName}
          locationCountry={locationCountry}
        />
      )}
      {extend && (
        <>
          <IssuerSection issuerName={issuerName} issuerID={issuerID} />
          <Divider />
          <InvestmentAmountSection
            quantity={quantity}
            tokenPrice={tokenPrice}
            tokenName={tokenName}
          />
        </>
      )}
    </Box>
  )
}
