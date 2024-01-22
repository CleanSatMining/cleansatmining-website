import { NavLink } from '@/models/NavLink'
import classNames from 'classnames'
import { MessageKeys, useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import DropdownMenu from './DropdownMenu'
import MarketplaceButton from './MarketplaceButton'

const headerLinks: NavLink[] = [
  {
    href: '/',
    label: 'links.home',
    external: false,
  },
  {
    href: '/sites',
    label: 'links.understand',
    external: false,
  },
  {
    href: '/sites',
    label: 'links.sites',
    external: false,
  },
  {
    href: '/',
    label: 'links.about',
    external: false,
  },
  {
    href: 'https://cleansatmining.com/',
    label: 'links.contact',
    external: true,
  },
]

export default function HeaderComponent() {
  const t = useTranslations('Header')
  const location = useLocation()
  const tUrl = useTranslations('externalUrl')
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const checkDarkMode = () => {
      const isDark = document.body.classList.contains('dark')
      setIsDarkMode(isDark)
    }

    window.addEventListener('DOMContentLoaded', checkDarkMode)
    window.addEventListener('classChange', checkDarkMode)

    return () => {
      window.removeEventListener('DOMContentLoaded', checkDarkMode)
      window.removeEventListener('classChange', checkDarkMode)
    }
  }, [])

  console.log('Header location', location.pathname)

  const headerLinksElements = useMemo(
    () =>
      headerLinks.map((link, index) => {
        return (
          <li key={link.label} className="hidden lg:block">
            <div className="flex items-center">
              {index !== 2 ? (
                <Link
                  href={link.href}
                  className={classNames(
                    'border-b-[1px] py-1',
                    index === 0 ? 'border-green' : 'border-transparent',
                    isDarkMode
                      ? 'font-semibold leading-5 hover:text-green'
                      : 'font-semibold leading-5 hover:border-green',
                  )}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  title={
                    link.external
                      ? `${t(link.label as MessageKeys<any, any>)} - ${t('externalLink')}`
                      : undefined
                  }
                >
                  {t(link.label as MessageKeys<any, any>)}
                </Link>
              ) : (
                <DropdownMenu navLink={link}></DropdownMenu>
              )}
            </div>
          </li>
        )
      }),
    [t, isDarkMode],
  )

  return (
    <header className={location.pathname.includes('site') ? 'bg-grey-600' : ''}>
      <div
        className={`flex items-center justify-between gap-4 rounded-b-[48px] border-b-[1px] bg-grey-100 ${
          isDarkMode ? 'border-green/20' : 'border-grey-300'
        } px-12 py-8`}
      >
        <Link href={tUrl('csmHome')}>
          <Image src="/CSM-logo.svg" width={226} height={80} alt={t('logo')} />
        </Link>
        <nav aria-label={t('nav')}>
          <ul className="flex items-center gap-12">
            {headerLinksElements}
            <li>
              <MarketplaceButton colorScheme={isDarkMode ? 'dark' : 'light'} />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
