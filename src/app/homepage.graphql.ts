import { ASSET_FRAGMENT } from '@/graphql/common/fragments/globalFragments.graphql'
import { gql } from '@apollo/client'

export const SEARCH_PRODUCTS = gql`
  query SearchProducts($input: SearchInput!) {
    search(input: $input) {
      items {
        productId
        slug
        productName
        description
        priceWithTax {
          ... on PriceRange {
            min
            max
          }
        }
        productAsset {
          id
          preview
          focalPoint {
            x
            y
          }
        }
      }
      totalItems
      facetValues {
        count
        facetValue {
          id
          name
          facet {
            id
            name
          }
        }
      }
    }
  }
`

export const GET_PRODUCTS = gql`
  query GetProducts($options: ProductListOptions) {
    products(options: $options) {
      items {
        id
        slug
        name
        variants {
          id
          name
        }
        assets {
          ...Asset
        }
        customFields {
          availablePower
          blockchainNetwork
          energySources
          estimatedNetApy
          locationCountry
          locationName
          maxInvestmentAmount
          minInvestmentAmount
          operatorLogo {
            source
          }
          operatorName
          operatorUrl
          saleStatus
          secondaryProductName
          siteUrl
        }
      }
      totalItems
    }
  }
  ${ASSET_FRAGMENT}
`

export const GET_COLLECTION = gql`
  query GetCollection($id: ID, $slug: String) {
    collection(id: $id, slug: $slug) {
      id
      name
      slug
      description
      featuredAsset {
        ...Asset
      }
      breadcrumbs {
        id
        slug
        name
      }
      children {
        id
        slug
        featuredAsset {
          ...Asset
        }
        name
      }
    }
  }
  ${ASSET_FRAGMENT}
`
