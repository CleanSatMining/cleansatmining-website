import { ORDER_FRAGMENT } from '@/api/common/fragments.graphql'
import { gql } from '@apollo/client'

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
