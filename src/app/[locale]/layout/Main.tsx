'use client'
import { NextUIProvider } from '@nextui-org/system'

export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider className="flex grow flex-col">
      <main className="flex grow flex-col py-4 md:p-8">{children}</main>
    </NextUIProvider>
  )
}
