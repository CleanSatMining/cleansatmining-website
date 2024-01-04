import ProductImage from '@/app/_shared/_components/_product/ProductImage'
import ProductSection from '@/app/_shared/_components/_product/ProductSection'
import Box from '@/app/_shared/_components/_utils/Box'
import Divider from '@/app/_shared/_components/_utils/Divider'
import ButtonLink from '@/app/_shared/_components/_utils/_buttons/ButtonLink'
import { Product } from '@/graphql/common/generated-types'
import { EnergySource } from '@/models/Energy'
import { SaleStatus } from '@/models/Product'
import { ArrowRight } from '@phosphor-icons/react/dist/ssr/ArrowRight'
import classNames from 'classnames'
import { useTranslations } from 'next-intl'
import ProductApy from '../../../../../_shared/_components/_product/ProductApy'
import ProductEnergy from '../../../../../_shared/_components/_product/ProductEnergy'
import ProductInvestment from '../../../../../_shared/_components/_product/ProductInvestment'
import ProductOperator from '../../../../../_shared/_components/_product/ProductOperator'

interface ProductCardProps {
  product: Product
  className?: string
}

export default function ProductCard({ product, className }: ProductCardProps) {
  const t = useTranslations('Product')
  const {
    saleStatus,
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
  } = product.customFields

  return (
    <Box
      className={classNames('flex flex-col overflow-hidden', className)}
      data-testid="productCard"
    >
      <ProductImage
        size="card"
        imageUrl={product.assets[0].source}
        status={saleStatus as SaleStatus}
        name={product.name}
        secondaryProductName={secondaryProductName}
        locationName={locationName}
        locationCountry={locationCountry}
      />
      {!!estimatedNetApy && (
        <>
          <ProductApy
            estimatedNetApy={estimatedNetApy}
            status={saleStatus as SaleStatus}
          />
          <Divider />
        </>
      )}
      <ProductInvestment
        minInvestmentAmount={minInvestmentAmount}
        maxInvestmentAmount={maxInvestmentAmount}
      />
      <Divider />
      <ProductEnergy
        energySources={energySources as EnergySource[]}
        availablePower={availablePower}
      />
      <Divider />
      <ProductOperator
        operatorName={operatorName}
        operatorLogoUrl={operatorLogo?.source}
        operatorUrl={operatorUrl}
      />
      <Divider />
      <ProductSection className="xl:py-5">
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
