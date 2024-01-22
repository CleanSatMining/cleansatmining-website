import { useTranslations } from 'next-intl'
import { FilterSort } from './Filter/FilterSort'
import { SitesList } from './Filter/SitesList'

export function SitesSection() {
  const t = useTranslations('HomePage.signedOut')

  return (
    <div className="relative flex w-full flex-col items-center justify-center gap-[56px] bg-white px-[52px] py-[60px]">
      <FilterSort></FilterSort>
      <SitesList></SitesList>
    </div>
  )
}
