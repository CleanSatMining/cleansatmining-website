'use client'
import { NextUIProvider } from '@nextui-org/react'

export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider className="mx-auto flex grow flex-col">
      <main className="flex grow flex-col gap-14">{children}</main>
    </NextUIProvider>
  )
}
