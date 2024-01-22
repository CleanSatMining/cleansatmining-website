import { withAuth } from 'next-auth/middleware'
import createMiddleware from 'next-intl/middleware'
import { NextRequest } from 'next/server'
import { locales, publicPages } from './navigation'

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale: 'fr',
  // pathnames,
})

const authMiddleware = withAuth(
  // Note that this callback is only invoked if
  // the `authorized` callback has returned `true`
  // and not for pages listed in `pages`.
  function onSuccess(req) {
    const response = intlMiddleware(req)

    return response
  },
  {
    callbacks: {
      authorized: async ({ token }) => {
        return !!token
      },
    },
  },
)

export default async function middleware(req: NextRequest) {
  const publicPathnameRegex = RegExp(
    `^(/(${locales.join('|')}))?(${publicPages.join('|')})?/?$`,
    'i',
  )
  //const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname)

  const isPublicPage = true
  if (isPublicPage) {
    return intlMiddleware(req)
  } else {
    return (authMiddleware as any)(req)
  }
}
export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|.*\\..*).*)'],
}
