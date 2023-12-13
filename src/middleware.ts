import createMiddleware from 'next-intl/middleware'
import { pathnames, locales } from './navigation'

export default createMiddleware({
  locales,
  defaultLocale: 'fr',
  pathnames,
})

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|.*\\..*).*)'],
}
