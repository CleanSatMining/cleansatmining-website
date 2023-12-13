import { NavLink } from '@/models/NavLink'
import classNames from 'classnames'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { useMemo } from 'react'
import SignInButton from './components/SignInButton'

const headerLinks: NavLink[] = [
  {
    href: '/',
    label: 'links.marketplace',
    external: false,
  },
  {
    href: 'https://cleansatmining.com/',
    label: 'links.CSM',
    external: true,
  },
]

export default function HeaderComponent() {
  const t = useTranslations('Header')

  const headerLinksElements = useMemo(
    () =>
      headerLinks.map((link, index) => {
        return (
          <li key={link.label} className="hidden lg:block">
            <Link
              href={link.href}
              className={classNames(
                'border-b-[1px] py-1',
                index === 0 ? 'border-green' : 'border-transparent',
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
    [t],
  )

  return (
    <header className="flex items-center justify-between gap-4 rounded-b-[48px] border-b-[1px] border-green/20 px-12 py-8">
      <Link href="https://cleansatmining.com/">
        <Image src="/CSM-logo.svg" width={226} height={80} alt={t('logo')} />
      </Link>
      <nav aria-label={t('nav')}>
        <ul className="flex items-center gap-12">
          {headerLinksElements}
          <li>
            <SignInButton />
          </li>
        </ul>
      </nav>
    </header>
  )
}
