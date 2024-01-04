import { gql } from '@apollo/client'

export const PRODUCT_CUSTOM_FIELDS_LOCATION = gql`
  fragment ProductCustomFieldsLocation on ProductCustomFields {
    locationName
    locationCountry
  }
`

export const PRODUCT_CUSTOM_FIELDS_CARD = gql`
  fragment ProductCustomFieldsCard on ProductCustomFields {
    saleStatus
    secondaryProductName
    locationName
    locationCountry
    issuerName
    issuerID
    tokenPrice
    tokenName
  }
`
