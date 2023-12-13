import classNames from 'classnames'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  minWidth?: boolean
  theme?: 'green' | 'yellow' | 'white'
  block?: boolean
  className?: string
  children: React.ReactNode
}

export default function Button({
  minWidth = false,
  theme = 'green',
  block = false,
  className,
  children,
  ...rest
}: ButtonProps) {
  const buttonBG = {
    green: 'bg-green',
    yellow: 'bg-yellow',
    white: 'bg-white',
  }
  return (
    <button
      className={classNames(
        `bg-${theme}`,
        minWidth ? 'min-w-[200px]' : '',
        rest.disabled ? 'bg-grey-300' : `${buttonBG[theme]} hover:font-bold`,
        'inline-flex items-center justify-center gap-2 rounded-2xl p-3 text-center font-semibold text-grey-800 transition ease-in-out',
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  )
}
