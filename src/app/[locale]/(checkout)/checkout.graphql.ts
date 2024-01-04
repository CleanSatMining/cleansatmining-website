import { ERROR_RESULT_FRAGMENT } from '@/graphql/common/fragments/globalFragments.graphql'
import {
  CART_FRAGMENT,
  CART_LITE_FRAGMENT,
  CART_SUMMARY_FRAGMENT,
  ORDER_FRAGMENT,
} from '@/graphql/common/fragments/orderFragments.graphql'
import { gql } from '@apollo/client'

export const GET_ACTIVE_ORDER_LITE = gql`
  query GetActiveOrderLite {
    activeOrder {
      ...CartLite
    }
  }
  ${CART_LITE_FRAGMENT}
`

export const GET_ACTIVE_ORDER = gql`
  query GetActiveOrder {
    activeOrder {
      ...CartSummary
    }
  }
  ${CART_SUMMARY_FRAGMENT}
`

export const SET_CUSTOMER_FOR_ORDER = gql`
  mutation SetCustomerForOrder($input: CreateCustomerInput!) {
    setCustomerForOrder(input: $input) {
      ...Order
      ... on ErrorResult {
        errorCode
        message
      }
    }
  }
  ${ORDER_FRAGMENT}
`

export const SET_ORDER_BILLING_ADDRESS = gql`
  mutation SetOrderBillingAddress($input: CreateAddressInput!) {
    setOrderBillingAddress(input: $input) {
      ...Order
      ... on ErrorResult {
        errorCode
        message
      }
    }
  }
  ${ORDER_FRAGMENT}
`

export const SET_ORDER_SHIPPING_ADDRESS = gql`
  mutation SetOrderShippingAddress($input: CreateAddressInput!) {
    setOrderShippingAddress(input: $input) {
      ...Order
      ... on ErrorResult {
        errorCode
        message
      }
    }
  }
  ${ORDER_FRAGMENT}
`

export const SET_ORDER_SHIPPING_METHOD = gql`
  mutation SetOrderShippingMethod($shippingMethodId: [ID!]!) {
    setOrderShippingMethod(shippingMethodId: $shippingMethodId) {
      ...Order
      ... on ErrorResult {
        errorCode
        message
      }
    }
  }
  ${ORDER_FRAGMENT}
`

export const GET_ELIGIBLE_SHIPPING_METHODS_IDS = gql`
  query GetEligibleShippingMethodsIds {
    eligibleShippingMethods {
      id
    }
  }
`

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
