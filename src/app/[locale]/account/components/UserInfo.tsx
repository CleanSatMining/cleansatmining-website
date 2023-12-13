'use client' 
import { GET_ACTIVE_CUSTOMER } from '@/graphql/common/documents.graphql'
import {
  GetActiveCustomerQuery,
  GetActiveCustomerQueryVariables,
} from '@/graphql/common/generated-types'
import { useQuery } from '@apollo/client'

export default function UserInfo() {
  const { data } = useQuery<GetActiveCustomerQuery, GetActiveCustomerQueryVariables>(GET_ACTIVE_CUSTOMER)

  if (data && data.activeCustomer) {
    const { activeCustomer } = data

    return (
      <>
        <p>id: {activeCustomer.id}</p>
        <p>mail: {activeCustomer.emailAddress}</p>
        <p>lastName: {activeCustomer.lastName}</p>
        <p>firstName: {activeCustomer.firstName}</p>
      </>
    )
  }
}
