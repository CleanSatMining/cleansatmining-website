'use client'
import { KeepInformedSection } from '@/app/_shared/_components/_mainLayout/KeepInformed'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import { IntroSection } from './_components/IntroSection'
import { SitesSection } from './_components/SitesSection'

export default function SiteDefault() {
  const t = useTranslations('HomePage')
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

  return (
    <div className={` ${isDarkMode ? 'bg-dark-color' : 'bg-light-color'}`}>
      <IntroSection></IntroSection>
      <SitesSection></SitesSection>
      <KeepInformedSection></KeepInformedSection>
    </div>
  )
}
