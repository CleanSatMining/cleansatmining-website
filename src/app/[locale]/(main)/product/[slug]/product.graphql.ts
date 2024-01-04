import {
  ASSET_FRAGMENT,
  ERROR_RESULT_FRAGMENT,
} from '@/graphql/common/fragments/globalFragments.graphql'
import { CART_FRAGMENT } from '@/graphql/common/fragments/orderFragments.graphql'
import { gql } from '@apollo/client'

export const GET_PRODUCT_DETAIL = gql`
  query GetProductDetail($slug: String!) {
    product(slug: $slug) {
      id
      name
      description
      variants {
        id
        name
        options {
          code
          name
        }
        price
        priceWithTax
        sku
      }
      featuredAsset {
        ...Asset
      }
      assets {
        ...Asset
      }
      collections {
        id
        slug
        breadcrumbs {
          id
          name
          slug
        }
      }
      customFields {
        asics
        availablePower
        blockchainNetwork
        csmOperationalFees
        currentProjectInvestmentAmount
        currentProjectInvestmentProgress
        descriptionPicture {
          source
        }
        downloadableDocuments {
          name
          fileSize
          source
        }
        electricityCost
        electricityDeposit
        electricityPrice
        energySources
        engineQuantity
        engineType
        estimatedDeliveryDate
        estimatedGrossApy
        estimatedLaunchDate
        estimatedNetApy
        financeHelpPageUrl
        ipfsDocumentUrl
        is
        locationCountry
        locationName
        maxInvestmentAmount
        minInvestmentAmount
        minProjectValue
        miscellaneousEquipment
        minedBtc
        operatorLogo {
          source
        }
        operatorName
        operatorUrl
        operatingCosts
        otherCosts
        otherIncome
        otherInvestment
        saleStatus
        secondaryProductName
        shareOfTokenizedCompany
        siteUrl
        smartContractAddress
        smartContractAddressUrl
        tokenName
        tokenQuantity
        tokenSymbolName
        tokenSymbolUrl
        transportation
        vat
      }
    }
  }
  ${ASSET_FRAGMENT}
`

export const ADD_TO_CART = gql`
  mutation AddToCart($variantId: ID!, $qty: Int!) {
    addItemToOrder(productVariantId: $variantId, quantity: $qty) {
      ...Cart
      ...ErrorResult
      ... on InsufficientStockError {
        order {
          ...Cart
        }
      }
    }
  }
  ${CART_FRAGMENT}
  ${ERROR_RESULT_FRAGMENT}
`
