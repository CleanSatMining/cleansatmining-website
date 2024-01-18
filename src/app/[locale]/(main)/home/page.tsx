'use client'
import { Hero } from '@/app/[locale]/(main)/home/_components/Hero'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import { Counters } from './_components/Counters'
import { HowTo } from './_components/HowTo'
import { KeepInformed } from './_components/KeepInformed'
import { Sites } from './_components/Sites'
import { Why } from './_components/Why'

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
      <Counters></Counters>
      <Why></Why>
      <Sites></Sites>
      <HowTo></HowTo>
      <KeepInformed></KeepInformed>
    </div>
  )
}
