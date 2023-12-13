'use client'
import { ApolloLink, HttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import {
  ApolloNextAppProvider,
  NextSSRApolloClient,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from '@apollo/experimental-nextjs-app-support/ssr'
import { getSession } from 'next-auth/react'


const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_VENDURE_SHOP_API_URL,
  credentials: 'include',
})

const authLink = setContext(async (_req, { headers, ...context }) => {
  const session = await getSession()
  // @ts-ignore
  const authToken = session?.vendure_auth_token
  if (authToken) {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${authToken}`,
      },
      ...context,
    }
  } else return {}
})

function makeClient() {
  return new NextSSRApolloClient({
    connectToDevTools: true,
    cache: new NextSSRInMemoryCache(),
    link:
      typeof window === 'undefined'
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            authLink,
            httpLink,
          ])
        : ApolloLink.from([authLink, httpLink]),
  })
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  )
}
