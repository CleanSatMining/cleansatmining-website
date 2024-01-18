import '@/app/globals.css'
import type { Metadata } from 'next'
import { useLocale } from 'next-intl'
import { Cairo, Poppins } from 'next/font/google'
import { notFound } from 'next/navigation'
import HtmlLayout from './HtmlLayout'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['300', '400', '600', '700'],
})

const cairo = Cairo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cairo',
  weight: ['400', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'CleanSat Mining',
  description: 'Le minage green de Bitcoin à impact positif',
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const locale = useLocale()
  let messages
  try {
    messages = (await import(`@/../messages/${locale}.json`)).default
  } catch (error) {
    notFound()
  }

  if (params.locale !== locale) {
    notFound()
  }

  return (
    <HtmlLayout
      locale={locale}
      messages={messages}
      cairo={cairo.variable}
      poppins={poppins.variable}
    >
      {children}
    </HtmlLayout>
  )
}
