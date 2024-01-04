import { getClient } from '@/config/client'
import { GET_ACTIVE_CUSTOMER } from '@/graphql/common/documents.graphql'

export async function getActiveCustomer() {
  try {
    const { data } = await getClient().query({
      query: GET_ACTIVE_CUSTOMER,
    })
    return data.activeCustomer
  } catch (error) {
    console.error('GraphQL Error:', error)
  }
}
