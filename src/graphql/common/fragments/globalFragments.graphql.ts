import { gql } from '@apollo/client'

export const ASSET_FRAGMENT = gql`
  fragment Asset on Asset {
    id
    width
    height
    name
    preview
    mimeType
    source
    focalPoint {
      x
      y
    }
  }
`

export const COUNTRY_FRAGMENT = gql`
  fragment Country on Country {
    id
    code
    name
    enabled
  }
`

export const ADDRESS_FRAGMENT = gql`
  fragment Address on Address {
    id
    fullName
    company
    streetLine1
    streetLine2
    city
    province
    postalCode
    country {
      id
      code
      name
    }
    phoneNumber
    defaultShippingAddress
    defaultBillingAddress
  }
`

export const ERROR_RESULT_FRAGMENT = gql`
  fragment ErrorResult on ErrorResult {
    errorCode
    message
  }
`
