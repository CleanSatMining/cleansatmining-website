import {
  Pathnames,
  createLocalizedPathnamesNavigation,
} from 'next-intl/navigation'

export const locales = ['fr', 'en'] as const

export const publicPages = ['/home', '/sign-up', '/sign-in']

export const pathnames = {
  '/': '/',
  '/investment-summary': {
    fr: '/resume-investissement',
    en: '/investment-summary',
  },
  '/confirm-cart': {
    fr: '/confirmation-panier',
    en: '/confirm-cart',
  },
  '/sign-in': {
    en: '/sign-in',
    fr: '/connexion',
  },
  '/sign-up': {
    en: '/sign-up',
    fr: '/inscription',
  },
} satisfies Pathnames<typeof locales>

export const { Link, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation({
    locales,
    pathnames,
  })
