import { BlurredProductsList } from '@/app/[locale]/(main)/home/_components/Utils/BlurredProductsList'
import getProducts from '@/app/_shared/_services/_product/getProducts'
import { ProductListOptions } from '@/graphql/common/generated-types'
import { NoProducts } from './_components/NoProducts'
import ProductCard from './_components/ProductCard'

export default async function HomeSignedIn() {
  const productListOptions: ProductListOptions = {
    take: 6,
  }
  const { products, loading, isCustomerBlocked } =
    await getProducts(productListOptions)

  // TODO : Add loader and Error message on request failure
  if (loading) return <>...Loading</>

  if (isCustomerBlocked)
    return (
      <BlurredProductsList
        pathTranslateKey={'HomePage.signedIn'}
        enableLoginButton={false}
      />
    )

  return (
    <div className="flex flex-col gap-7" data-testid="signedInHome">
      {products && products.length > 0 ? (
        <>
          {/* <Box className="flex justify-between gap-4 px-9 py-6">
            <div>Filtres</div>
            <div>Tri</div>
          </Box> */}
          <div
            className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3"
            data-testid="productsList"
          >
            {products.map((product, index) => {
              return <ProductCard product={product} key={index} />
            })}
          </div>
        </>
      ) : (
        <NoProducts />
      )}
    </div>
  )
}
