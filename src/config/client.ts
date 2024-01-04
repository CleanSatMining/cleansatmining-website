import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc'
import { getServerSession } from './auth'

export let authToken = ''

const afterwareLink = new ApolloLink((operation, forward) => {
  return forward(operation).map((response) => {
    const context = operation.getContext()
    authToken = context.response.headers.get('vendure-auth-token')

    return response
  })
})

const authLink = setContext(async (_req, { headers, ...context }) => {
  const session = await getServerSession()
  // @ts-expect-error
  const token = session?.vendure_auth_token
  return {
    headers: {
      ...headers,
      ...(token ? { authorization: `Bearer ${token}` } : {}),
    },
    ...context,
  }
})

export const { getClient } = registerApolloClient(() => {
  const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_VENDURE_SHOP_API_URL,
  })

  return new ApolloClient({
    connectToDevTools: true,
    cache: new InMemoryCache(),
    link: ApolloLink.from([authLink, afterwareLink, httpLink]),
  })
})
