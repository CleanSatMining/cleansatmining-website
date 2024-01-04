'use client'
import { NextUIProvider } from '@nextui-org/system'

export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider className="container mx-auto flex grow flex-col p-4 lg:p-8 xl:p-14">
      <main className="flex grow flex-col gap-14">{children}</main>
    </NextUIProvider>
  )
}
