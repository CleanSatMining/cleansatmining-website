'use client'
import Button from '@/app/_shared/_components/_utils/_buttons/Button'
import { useTranslations } from 'next-intl'
import React, { ReactNode, useEffect, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'

export function Title() {
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

  const text = t.rich('title', {
    span: (chunks) => (
      console.log(chunks),
      (
        <span
          className={`inline-block rounded-2xl bg-green px-4 text-grey-800 ${
            isDarkMode ? 'drop-shadow-green' : ''
          }`}
        >
          {chunks}
        </span>
      )
    ),
  })

  const nodes = text as ReactNode[]

  console.log(
    nodes.length,

    typeof nodes[0],
    typeof nodes[1],
    typeof nodes[2],
  )

  const parts: ReactNode[] = []
  for (const node of nodes) {
    if (typeof node === 'string') {
      const lines = node.split('\n')
      let i = 0
      for (const line of lines) {
        i++
        parts.push(line)
        if (i === lines.length) break
        parts.push(<br />)
      }
    } else {
      parts.push(node)
    }
  }

  return (
    <div
      className={`flex flex-col items-center gap-6 text-center  ${
        isDarkMode ? 'bg-dark-color' : 'bg-light-color'
      }`}
    >
      <h1 className="font-title text-5xl font-extrabold leading-loose lg:text-7xl xl:text-7xl">
        {parts.map((node, index) =>
          typeof node === 'string' ? (
            <span key={index} className="leading-snug">
              {node}
            </span>
          ) : (
            <React.Fragment key={index}>{node}</React.Fragment>
          ),
        )}
      </h1>
      <p className="text-xxl font-title lg:text-2xl xl:text-3xl">
        {t('description')}
      </p>
      <Button
        data-testid="submitAddToCartForm"
        theme="dark"
        type="submit"
        className="hover-group group flex h-12 w-full max-w-[230px] flex-row items-start justify-center gap-2 pt-3 "
        disabled={false}
      >
        <div
          id="Labeltext"
          className="text-center text-lg font-normal leading-[19.2px] text-white"
        >
          Découvrir les offres
        </div>
        <FaArrowRight className="group-hover:text-green" />
      </Button>
    </div>
  )
}
