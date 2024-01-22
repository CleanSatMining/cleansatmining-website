'use client'
import { Hero } from '@/app/[locale]/(main)/home/_components/Hero/Hero'
import { KeepInformedSection } from '@/app/_shared/_components/_mainLayout/KeepInformed'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import { CountersSection } from './_components/CountersSection'
import { HowToSection } from './_components/HowToSection'
import { SitesSection } from './_components/SitesSection'
import { Why } from './_components/WhySection'

export default function HomeDefault() {
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
      <Hero></Hero>
      <CountersSection></CountersSection>
      <Why></Why>
      <SitesSection></SitesSection>
      <HowToSection></HowToSection>
      <KeepInformedSection></KeepInformedSection>
    </div>
  )
}
