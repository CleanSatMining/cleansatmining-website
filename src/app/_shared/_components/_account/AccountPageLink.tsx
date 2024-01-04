'use client'
import { NavLink } from '@/models/NavLink'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import LabelWithIcon from '../_utils/LabelWithIcon'
import ButtonLink from '../_utils/_buttons/ButtonLink'

interface AccountPageLink {
  className: string
  link: NavLink
}

type AccountTranslationLabel =
  | 'personalInformations'
  | 'dividendAddress'
  | 'tokenAddress'
  | 'order'
  | 'dashboard'

export function AccountPageLink({ className, link }: AccountPageLink) {
  const t = useTranslations('AccountPage')
  const actualPathname = usePathname()

  return (
    <ButtonLink
      href={link.href}
      center={false}
      animation={false}
      className={`border border-opacity-60 ${
        link.href ===
        actualPathname.substring(actualPathname.lastIndexOf('/') + 1)
          ? 'border-grey-800 bg-grey-800'
          : 'border-grey-400 bg-transparent hover:opacity-60'
      } ${className}`}
    >
      <LabelWithIcon
        className="gap-3"
        label={t(link.label as AccountTranslationLabel)}
        Icon={link.icon!}
        sizeIcon={24}
      />
    </ButtonLink>
  )
}
