import { ArrowLeft } from '@phosphor-icons/react/dist/ssr/ArrowLeft'
import { MessageKeys, useTranslations } from 'next-intl'
import Link from 'next/link'

interface BackLinkProps {
  className?: string
  href: string
  messageKey?: string
}

export function BackLink({ className, href, messageKey }: BackLinkProps) {
  const t = useTranslations('ProductPage')
  return (
    <Link
      href={href}
      className={
        className
          ? className
          : 'inline-flex w-fit items-center gap-2 font-semibold hover:text-green'
      }
    >
      <ArrowLeft size={20} />
      {messageKey && t(messageKey as MessageKeys<any, any>)}
    </Link>
  )
}
