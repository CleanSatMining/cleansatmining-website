'use client'
import Footer from '@/app/_shared/_components/_mainLayout/Footer'
import Header from '@/app/_shared/_components/_mainLayout/Header'
import Main from '@/app/_shared/_components/_mainLayout/Main'
import { intlFormats } from '@/app/_shared/_format/format'
import { ApolloWrapper } from '@/config/ApolloProvider'
import { AuthProvider } from '@/config/AuthProvider'
import ToastProvider from '@/config/ToastProvider'
import { NextIntlClientProvider } from 'next-intl'
import { useState } from 'react'

export default function HtmlLayout({
  children,
  locale,
  messages,
  poppins,
  cairo,
}: {
  children: React.ReactNode
  locale: string
  messages: any
  cairo: any
  poppins: any
}) {
  const [darkMode, setDarkMode] = useState(false) // Mode clair par défaut

  return (
    <html
      lang={locale}
      className={
        darkMode
          ? `h-full dark ${poppins} ${cairo}`
          : `h-full ${poppins} ${cairo}`
      }
    >
      <body
        className={
          darkMode
            ? 'flex min-h-screen flex-col dark:bg-grey-600 dark:text-white'
            : 'flex min-h-screen flex-col bg-grey-100 text-black'
        }
      >
        <ApolloWrapper>
          <NextIntlClientProvider
            locale={locale}
            messages={messages}
            formats={intlFormats}
          >
            <AuthProvider>
              <div>
                <Header />
                <Main>{children}</Main>
                <Footer />
              </div>
            </AuthProvider>
            <ToastProvider />
          </NextIntlClientProvider>
        </ApolloWrapper>
      </body>
    </html>
  )
}
