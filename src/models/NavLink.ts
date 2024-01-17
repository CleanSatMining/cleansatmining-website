import { Icon } from '@phosphor-icons/react'

export type NavLink = {
  href: string
  label:
    | 'links.home'
    | 'links.understand'
    | 'links.sites'
    | 'links.about'
    | 'links.contact'
  external: boolean
  icon?: Icon
}
