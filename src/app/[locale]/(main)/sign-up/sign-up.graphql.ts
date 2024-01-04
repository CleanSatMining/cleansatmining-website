import { ERROR_RESULT_FRAGMENT } from '@/graphql/common/fragments/globalFragments.graphql'
import { gql } from '@apollo/client'

export const SIGN_UP = gql`
  mutation Register($input: RegisterCustomerInput!) {
    registerCustomerAccount(input: $input) {
      ... on Success {
        success
      }
      ...ErrorResult
    }
  }
  ${ERROR_RESULT_FRAGMENT}
`
