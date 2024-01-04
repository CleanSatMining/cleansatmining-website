import { getClient } from '@/config/client'
import {
  GetCollectionQuery,
  GetCollectionQueryVariables,
} from '@/graphql/common/generated-types'
import { GET_COLLECTION } from './DataFetchingExample.graphql'

// This component is an exemple on how to fetch data with a React Server Component
// It is an async component that uses the Apollo client initialized in lib/client.
// Query Types are generated with graphql-codegen (npm run generate) once the query is written
// You can't use hooks with RSC. Hooks are only for client components.
// If you need to combine both, create a first function like this one that fetches data, then
// create a ComponentContent taking the fetched data as props, and return it in your RSC.
export default async function DataFetchingExample() {
  try {
    const { data } = await getClient().query<
      GetCollectionQuery,
      GetCollectionQueryVariables
    >({
      query: GET_COLLECTION,
      variables: { id: '1' },
    })

    const { collection } = data

    if (!collection) return 'loading'

    return (
      <div>
        <p>collection Name : {collection.name}</p>
        <p>collection Id : {collection.id}</p>
      </div>
    )
  } catch (error) {
    console.error('GraphQL Error:', error)
  }
}
