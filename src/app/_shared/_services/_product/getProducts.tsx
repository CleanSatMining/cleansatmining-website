import { GET_PRODUCTS } from '@/app/homepage.graphql'
import { getClient } from '@/config/client'
import { GET_ACTIVE_CUSTOMER_BLOCKED_STATUS } from '@/graphql/common/documents.graphql'
import { Product, ProductListOptions } from '@/graphql/common/generated-types'

export default async function getProducts(
  productListOptions: ProductListOptions,
) {
  let products: Product[] = []
  let loadingProducts = false
  let isCustomerBlocked = false
  let loadingStatus = false
  try {
    const statusResult = await getClient().query({
      query: GET_ACTIVE_CUSTOMER_BLOCKED_STATUS,
      variables: { options: productListOptions },
    })
    isCustomerBlocked = statusResult.data.activeCustomer?.customFields.isBlocked
    loadingStatus = statusResult.loading

    if (!isCustomerBlocked) {
      const productResult = await getClient().query({
        query: GET_PRODUCTS,
        variables: { options: productListOptions },
      })
      products = productResult.data.products.items
      loadingProducts = productResult.loading
    }

    return {
      products: products,
      loading: loadingStatus || loadingProducts,
      isCustomerBlocked: isCustomerBlocked,
    }
  } catch (error) {
    console.error('GraphQL Error:', error)
  }
  return { products: [], loading: false, isCustomerBlocked: isCustomerBlocked }
}
