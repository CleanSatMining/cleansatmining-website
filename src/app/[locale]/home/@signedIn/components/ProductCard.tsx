import Box from '@/components/Box'
import Divider from '@/components/Divider'
import ButtonLink from '@/components/button/ButtonLink'
import ProductApy from '@/components/product/ProductApy'
import ProductCardEnergy from '@/components/product/ProductEnergy'
import ProductImage from '@/components/product/ProductImage'
import ProductInvestment from '@/components/product/ProductInvestment'
import ProductOperator from '@/components/product/ProductOperator'
import ProductSection from '@/components/product/ProductSection'
import { Product } from '@/models/Product'
import { ArrowRight } from '@phosphor-icons/react/dist/ssr/ArrowRight'
import classNames from 'classnames'
import { useTranslations } from 'next-intl'

interface ProductCardProps {
  product: Product
  className?: string
}

export default function ProductCard({ product, className }: ProductCardProps) {
  const t = useTranslations('Product')
  const {
    saleStatus,
    productName,
    secondaryProductName,
    locationName,
    locationCountry,
    estimatedNetApy,
    minInvestmentAmount,
    maxInvestmentAmount,
    energySources,
    availablePower,
    operatorName,
    operatorLogo,
    operatorUrl,
    siteUrl,
  } = product

  return (
    <Box
      className={classNames('flex flex-col overflow-hidden', className)}
      data-testid="productCard"
    >
      {/* TODO: get image infos from product */}
      <ProductImage
        size="card"
        image={'https://www.cleansatmining.com/data/files/activity-721-1.jpg'}
        status={saleStatus}
        productName={productName}
        secondaryProductName={secondaryProductName}
        locationName={locationName}
        locationCountry={locationCountry}
      />
      {estimatedNetApy && (
        <>
          <ProductApy estimatedNetApy={estimatedNetApy} status={saleStatus} />
          <Divider />
        </>
      )}
      <ProductInvestment
        minInvestmentAmount={minInvestmentAmount}
        maxInvestmentAmount={maxInvestmentAmount}
      />
      <Divider />
      <ProductCardEnergy
        energySources={energySources}
        availablePower={availablePower}
      />
      <Divider />
      <ProductOperator
        operatorName={operatorName}
        operatorLogo={operatorLogo}
        operatorUrl={operatorUrl}
      />
      <Divider />
      {/* TODO: get url from product */}
      <ProductSection className="xl:py-5">
        {/* TODO: use slug */}
        {saleStatus !== 'closed' && (
          <ButtonLink
            href={`/product/${product.slug}`}
            className="mx-auto"
            minWidth
            data-testid="productButton"
          >
            {t('ctaOpen')}
          </ButtonLink>
        )}
        {saleStatus === 'closed' && (
          <ButtonLink
            href={siteUrl}
            className="mx-auto"
            theme="white"
            minWidth
            data-testid="productButton"
            isExternal
          >
            {t('ctaClosed')} <ArrowRight size={20} />
          </ButtonLink>
        )}
      </ProductSection>
    </Box>
  )
}
