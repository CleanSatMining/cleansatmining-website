import ProductImage from '@/app/_shared/_components/_product/ProductImage'
import Box from '@/app/_shared/_components/_utils/Box'
import { ErrorPage } from '@/app/_shared/_components/_utils/ErrorPage'
import { BackLink } from '@/app/_shared/_components/_utils/_buttons/BackLink'
import getProductBySlug from '@/app/_shared/_services/_product/getProductBySlug'
import { SaleStatus } from '@/models/Product'
import AddToCartBanner from '../_components/AddToCartBanner'
import MainInformationCard from '../_components/MainInformationCard'
import ProductTabs from '../_components/ProductTabs'

type ProductPageProps = {
  params: {
    slug: string
  }
}

export default async function ProductPage({
  params: { slug },
}: ProductPageProps) {
  const { product, loading } = await getProductBySlug(slug)

  // TODO : Add loader and Error message on request failure
  if (loading) return <>...Loading</>

  if (!product)
    return (
      <ErrorPage
        additionalText={"Ce produit n'existe pas"}
        statusCode={'404'}
      />
    )

  const { assets, name } = product

  const {
    saleStatus,
    secondaryProductName,
    locationName,
    locationCountry,
    minInvestmentAmount,
    maxInvestmentAmount,
  } = product.customFields

  return (
    <div className="flex flex-col gap-7 xl:py-7">
      <BackLink href="/" messageKey="homeLink" />
      <Box className="mb-7 overflow-hidden">
        <ProductImage
          size="banner"
          imageUrl={assets[0].source}
          status={saleStatus as SaleStatus}
          name={name}
          secondaryProductName={secondaryProductName}
          locationName={locationName}
          locationCountry={locationCountry}
        />
      </Box>
      <div className="grid w-full grid-cols-1 gap-7 lg:grid-cols-5">
        <ProductTabs className="lg:col-span-3" product={product} />
        <MainInformationCard className="lg:col-span-2" product={product} />
      </div>
      <AddToCartBanner
        salesStatus={'open'}
        productVariantId={product.variants[0].id}
        minInvestmentAmount={minInvestmentAmount}
        maxInvestmentAmount={maxInvestmentAmount}
      />
    </div>
  )
}
