import {
  createLocalizedPathnamesNavigation,
  Pathnames,
} from 'next-intl/navigation'

export const locales = ['fr', 'en'] as const

export const pathnames = {
  '/': '/',
  '/cart': {
    fr: '/panier',
    en: '/cart',
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
