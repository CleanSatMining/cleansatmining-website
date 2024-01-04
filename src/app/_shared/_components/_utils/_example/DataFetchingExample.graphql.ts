import { ASSET_FRAGMENT } from '@/graphql/common/fragments/globalFragments.graphql'
import { gql } from '@apollo/client'

export const GET_COLLECTION = gql`
  query GetCollectionByIdOrSlug($id: ID, $slug: String) {
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
      productVariants {
        totalItems
      }
    }
  }
  ${ASSET_FRAGMENT}
`
