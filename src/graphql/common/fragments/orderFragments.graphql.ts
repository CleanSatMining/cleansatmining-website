import { gql } from '@apollo/client'
import { ASSET_FRAGMENT } from './globalFragments.graphql'
import {
  PRODUCT_CUSTOM_FIELDS_CARD,
  PRODUCT_CUSTOM_FIELDS_LOCATION,
} from './productFragments.graphql'

export const CART_FRAGMENT = gql`
  fragment Cart on Order {
    id
    code
    state
    active
    updatedAt
    orderPlacedAt
    lines {
      id
      featuredAsset {
        ...Asset
      }
      unitPrice
      unitPriceWithTax
      quantity
      linePriceWithTax
      discountedLinePriceWithTax
      productVariant {
        id
        name
        product {
          id
          featuredAsset {
            ...Asset
          }
          name
          customFields {
            ...ProductCustomFieldsCard
          }
        }
      }
      discounts {
        amount
        amountWithTax
        description
        adjustmentSource
        type
      }
    }
    totalQuantity
    subTotal
    subTotalWithTax
    total
    totalWithTax
    shipping
    shippingWithTax
    shippingLines {
      priceWithTax
      shippingMethod {
        id
        code
        name
        description
      }
    }
    discounts {
      amount
      amountWithTax
      description
      adjustmentSource
      type
    }
  }
  ${ASSET_FRAGMENT}
  ${PRODUCT_CUSTOM_FIELDS_CARD}
`

export const CART_SUMMARY_FRAGMENT = gql`
  fragment CartSummary on Order {
    id
    lines {
      id
      quantity
      productVariant {
        id
        name
        product {
          id
          featuredAsset {
            ...Asset
          }
          name
          customFields {
            ...ProductCustomFieldsCard
          }
        }
      }
    }
    customFields {
      endReservationDate
    }
  }
  ${ASSET_FRAGMENT}
  ${PRODUCT_CUSTOM_FIELDS_CARD}
`

export const CART_LITE_FRAGMENT = gql`
  fragment CartLite on Order {
    id
    lines {
      id
      productVariant {
        id
        product {
          id
          name
          customFields {
            ...ProductCustomFieldsLocation
          }
        }
      }
    }
  }
  ${PRODUCT_CUSTOM_FIELDS_LOCATION}
`

export const ORDER_FRAGMENT = gql`
  fragment Order on Order {
    id
    createdAt
    updatedAt
    type
    orderPlacedAt
    code
    state
    active
    customer {
      id
      firstName
      lastName
      phoneNumber
      emailAddress
    }
    shippingAddress {
      streetLine1
      city
      postalCode
      country
      countryCode
    }
    billingAddress {
      streetLine1
      city
      postalCode
      country
      countryCode
    }
    shippingLines {
      id
      shippingMethod {
        id
        code
        name
      }
    }
  }
`

export const ORDER_ADDRESS_FRAGMENT = gql`
  fragment OrderAddress on OrderAddress {
    fullName
    company
    streetLine1
    streetLine2
    city
    province
    postalCode
    country
    phoneNumber
  }
`
