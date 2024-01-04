import {
  GET_ACTIVE_ORDER,
  GET_ACTIVE_ORDER_LITE,
} from '@/app/[locale]/(checkout)/checkout.graphql'
import { getClient } from '@/config/client'

export async function getActiveOrder() {
  try {
    const { data } = await getClient().query({
      query: GET_ACTIVE_ORDER,
    })
    return data.activeOrder
  } catch (error) {
    console.error('GraphQL Error:', error)
  }
}

export async function getActiveOrderLite() {
  try {
    const { data } = await getClient().query({
      query: GET_ACTIVE_ORDER_LITE,
    })
    return data.activeOrder
  } catch (error) {
    console.error('GraphQL Error:', error)
  }
}
