import { GET_PRODUCT_DETAIL } from '@/app/[locale]/(main)/product/[slug]/product.graphql'
import { getClient } from '@/config/client'
import { GET_ACTIVE_CUSTOMER_BLOCKED_STATUS } from '@/graphql/common/documents.graphql'
import { Product } from '@/graphql/common/generated-types'

export default async function getProductBySlug(slug: string) {
  let product: Product | undefined
  let loadingProduct = false
  let isCustomerBlocked = false
  let loadingStatus = false
  try {
    const statusResult = await getClient().query({
      query: GET_ACTIVE_CUSTOMER_BLOCKED_STATUS,
    })
    isCustomerBlocked = statusResult.data.activeCustomer.customFields.isBlocked
    loadingStatus = statusResult.loading

    if (!isCustomerBlocked) {
      const productResult = await getClient().query({
        query: GET_PRODUCT_DETAIL,
        variables: { slug: slug },
      })
      product = productResult.data.product
      loadingProduct = productResult.loading
    }

    return {
      product: product,
      loading: loadingStatus || loadingProduct,
    }
  } catch (error) {
    console.error('GraphQL Error:', error)
  }

  return { product: undefined, loading: false }
}
