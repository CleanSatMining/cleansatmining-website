'use client'
import { NavLink } from '@/models/NavLink'
import { LinkedinLogo, TwitterLogo } from '@phosphor-icons/react'
import classNames from 'classnames'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useMemo } from 'react'

export const footerLinks: NavLink[] = [
  {
    href: 'https://cleansatmining.com/', // TODO: change to actual page
    label: 'links.blog',
    external: true,
  },
  {
    href: 'https://cleansatmining.com/', // TODO: change to actual page
    label: 'links.contact',
    external: true,
  },
  {
    href: 'https://cleansatmining.com/', // TODO: change to actual page
    label: 'links.legalNotices',
    external: true,
  },
  {
    href: 'https://cleansatmining.com/', // TODO: change to actual page
    label: 'links.TCS',
    external: true,
  },
  {
    href: 'https://cleansatmining.com/', // TODO: change to actual page
    label: 'links.privacy',
    external: true,
  },
]

export const socialLinks: NavLink[] = [
  {
    href: 'https://linkedin.com',
    label: 'socialMedia.linkedin',
    external: true,
    icon: LinkedinLogo,
  },
  {
    href: 'https://twitter.com',
    label: 'socialMedia.twitter',
    external: true,
    icon: TwitterLogo,
  },
]

export default function Footer() {
  const t = useTranslations('Footer')
  const tUrl = useTranslations('externalUrl')
  const pathname = usePathname()

  const footerLinksElements = useMemo(
    () =>
      footerLinks.map((link, index) => {
        const isActiveLink = !link.external && pathname === link.href
        return (
          <li
            key={link.label}
            className={`lg:px-3 ${
              index !== 0 ? 'lg:border-l-[1px] lg:border-green' : ''
            }`}
          >
            <Link
              href={link.href}
              className={classNames(
                'border-b-[1px] py-1',
                isActiveLink ? 'border-green' : 'border-transparent',
                'font-semibold leading-5 hover:text-green',
              )}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              title={
                link.external
                  ? `${t(link.label)} - ${t('externalLink')}`
                  : undefined
              }
            >
              {t(link.label)}
            </Link>
          </li>
        )
      }),
    [t, pathname],
  )

  const socialLinksElements = useMemo(
    () =>
      socialLinks.map((link) => {
        return (
          <li key={link.label}>
            <Link
              href={link.href}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-green p-2 leading-5 hover:bg-green/90 dark:text-grey-800"
              target={link.external ? '_blank' : ''}
              rel={link.external ? 'noopener noreferrer' : ''}
              title={
                link.external
                  ? `${t(link.label)} - ${t('externalLink')}`
                  : undefined
              }
            >
              <span className={classNames(link.icon ? 'sr-only' : '')}>
                {t(link.label)}
              </span>
              {link.icon && <link.icon size={24} role="img" />}
            </Link>
          </li>
        )
      }),
    [t],
  )

  return (
    <footer className="flex flex-col gap-16 rounded-t-[48px] border-t-[1px] border-green/20 px-12 py-8">
      <div className="flex flex-wrap items-center justify-between gap-8 lg:gap-4">
        <Link href={tUrl('csmHome')}>
          <Image src="/CSM-logo.svg" width={226} height={80} alt={t('logo')} />
        </Link>
        <nav aria-label={t('nav')}>
          <ul className="flex flex-col flex-wrap gap-y-2 lg:flex-row lg:items-center lg:justify-center">
            {footerLinksElements}
          </ul>
        </nav>
        <ul className="flex items-center gap-6">{socialLinksElements}</ul>
      </div>
      <div className="flex flex-col items-center text-center dark:text-grey-300">
        <p className="mb-3 text-sm font-semibold">{t('copyright')}</p>
        <p className="text-xs">{t('legal')}</p>
      </div>
    </footer>
  )
}
