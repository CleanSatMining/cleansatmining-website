'use client'
import { NavLink } from '@/models/NavLink'
import { At } from '@phosphor-icons/react/dist/ssr/At'
import { Package } from '@phosphor-icons/react/dist/ssr/Package'
import { PresentationChart } from '@phosphor-icons/react/dist/ssr/PresentationChart'
import { User } from '@phosphor-icons/react/dist/ssr/User'
import LogoutButton from '../_utils/_buttons/LogoutButton'
import { AccountPageLink } from './AccountPageLink'

export function AccountNav() {
  const links: NavLink[] = [
    {
      label: 'personalInformations',
      href: 'user',
      icon: User,
      external: false,
    },
    {
      label: 'dividendAddress',
      href: 'dividend-address',
      icon: At,
      external: false,
    },
    {
      label: 'tokenAddress',
      href: 'token-address',
      icon: At,
      external: false,
    },
    {
      label: 'order',
      href: 'order',
      icon: Package,
      external: false,
    },
    {
      label: 'dashboard',
      href: 'dashboard',
      icon: PresentationChart,
      external: false,
    },
  ]

  return (
    <nav aria-label={'Account Navigation'} className="h-full  w-[50%]">
      <ul className="flex h-full flex-col justify-between gap-3 rounded-2xl border border-grey-400 p-3">
        <div className="flex flex-col gap-3">
          {links.map((link) => {
            return (
              <AccountPageLink
                className={`w-full rounded-2xl text-sm font-semibold text-white`}
                key={link.label}
                link={link}
              />
            )
          })}
        </div>
        <LogoutButton />
      </ul>
    </nav>
  )
}
