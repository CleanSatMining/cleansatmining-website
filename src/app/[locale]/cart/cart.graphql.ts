import {
  CART_FRAGMENT,
  ERROR_RESULT_FRAGMENT,
} from '@/graphql/common/fragments.graphql'
import { gql } from '@apollo/client'

export const ADJUST_ITEM_QUANTITY = gql`
  mutation AdjustItemQuantity($id: ID!, $qty: Int!) {
    adjustOrderLine(orderLineId: $id, quantity: $qty) {
      ...Cart
      ...ErrorResult
    }
  }
  ${CART_FRAGMENT}
  ${ERROR_RESULT_FRAGMENT}
`

export const REMOVE_ITEM_FROM_CART = gql`
  mutation RemoveItemFromCart($id: ID!) {
    removeOrderLine(orderLineId: $id) {
      ...Cart
      ...ErrorResult
    }
  }
  ${CART_FRAGMENT}
  ${ERROR_RESULT_FRAGMENT}
`

export const GET_CART_TOTALS = gql`
  query GetCartTotals {
    activeOrder {
      id
      active
      totalQuantity
      totalWithTax
    }
  }
`

export const GET_ACTIVE_ORDER = gql`
  query GetActiveOrder {
    activeOrder {
      ...Cart
    }
  }
  ${CART_FRAGMENT}
`
