import { ArrowLeft } from '@phosphor-icons/react/dist/ssr/ArrowLeft'
import { useTranslations } from 'next-intl'
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
          : 'inline-flex items-center gap-2 font-semibold hover:text-green w-fit'
      }
    >
      <ArrowLeft size={20} />
      {messageKey && t(messageKey)}
    </Link>
  )
}
