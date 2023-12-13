import classNames from 'classnames'
import Link, { LinkProps } from 'next/link'

interface ButtonLinkProps extends LinkProps {
  minWidth?: boolean
  theme?: 'green' | 'yellow' | 'white'
  block?: boolean
  disabled?: boolean
  isExternal?: boolean
  className?: string
  children: React.ReactNode
}

export default function ButtonLink({
  minWidth = false,
  theme = 'green',
  block = false,
  disabled = false,
  isExternal = false,
  className,
  children,
  ...rest
}: ButtonLinkProps) {
  const buttonBG = {
    green: 'bg-green',
    yellow: 'bg-yellow',
    white: 'bg-white',
  }
  return (
    <Link
      className={classNames(
        block ? 'block' : 'inline-block',
        minWidth ? 'min-w-[200px]' : '',
        disabled ? 'bg-grey-300' : `${buttonBG[theme]} hover:font-bold`,
        'inline-flex items-center justify-center gap-2 rounded-2xl p-3 text-center font-semibold text-grey-800 transition ease-in-out',
        className,
      )}
      target={isExternal ? '_blank' : '_self'}
      {...rest}
    >
      {children}
    </Link>
  )
}
