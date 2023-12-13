import { SIGN_IN } from '@/app/[locale]/sign-in/sign-in.graphql'
import {
  SignInMutation,
  SignInMutationVariables,
} from '@/graphql/common/generated-types'
import { authToken, getClient } from '@/lib/client'
import { NextApiRequest, NextApiResponse } from 'next'
import type { AuthOptions, User } from 'next-auth'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: AuthOptions = {
  pages: {
    signIn: '/sign-in',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        if (credentials?.username && credentials.password) {
          const res = await getClient().mutate<
            SignInMutation,
            SignInMutationVariables
          >({
            mutation: SIGN_IN,
            variables: {
              emailAddress: credentials.username,
              password: credentials.password,
              rememberMe: false,
            },
          })

          if (res.data) {
            const { login } = res.data
            if (login.__typename === 'InvalidCredentialsError') {
              throw new Error(res.data.login.__typename)
            }
            if (login.__typename === 'CurrentUser') {
              const user: User = {
                id: login.id,
              }
              return user
            }
          }
        }
        return null
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token = Object.assign({}, token, { vendure_token: authToken })
      }
      return token
    },
    async session({ session, token }) {
      if (session) {
        session = Object.assign({}, session, {
          vendure_auth_token: token.vendure_token,
        })
      }
      return session
    },
  },
  session: { strategy: 'jwt' },
}

const handler = (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, authOptions)

export { handler as GET, handler as POST }
