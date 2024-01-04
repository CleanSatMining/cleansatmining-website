import { ERROR_RESULT_FRAGMENT } from '@/graphql/common/fragments/globalFragments.graphql'
import { gql } from '@apollo/client'

export const SIGN_IN = gql`
  mutation SignIn(
    $emailAddress: String!
    $password: String!
    $rememberMe: Boolean!
  ) {
    login(
      username: $emailAddress
      password: $password
      rememberMe: $rememberMe
    ) {
      ... on CurrentUser {
        id
      }
      ...ErrorResult
    }
  }
  ${ERROR_RESULT_FRAGMENT}
`

export const LOGOUT = gql`
  mutation logout {
    success
  }
`
