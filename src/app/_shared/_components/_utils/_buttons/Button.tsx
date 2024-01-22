import classNames from 'classnames'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  minWidth?: boolean
  theme?: 'green' | 'yellow' | 'white' | 'dark' | 'blue' | 'grey' | 'red'
  block?: boolean
  center?: boolean
  className?: string
  colorSheme?: 'light' | 'dark'
  children: React.ReactNode
}

export default function Button({
  minWidth = false,
  theme = 'green',
  center = true,
  block = false,
  colorSheme = 'light',
  className,
  children,
  ...rest
}: ButtonProps) {
  const buttonBG = {
    green: 'bg-green',
    yellow: 'bg-yellow',
    white: 'bg-white',
    dark: 'bg-grey-800',
    grey: 'bg-grey-300',
    blue: 'bg-blue',
    red: 'bg-red-500',
  }
  return (
    <button
      className={classNames(
        `bg-${theme}`,
        minWidth ? 'min-w-[200px]' : '',
        center ? 'justify-center' : '',
        rest.disabled
          ? 'bg-grey-300'
          : colorSheme === 'light'
            ? theme === 'dark'
              ? `${buttonBG[theme]} transition  ease-in-out hover:opacity-80`
              : `${buttonBG[theme]} transition  ease-in-out hover:brightness-90`
            : `${buttonBG[theme]} hover:font-bold`,
        'inline-flex items-center gap-2 rounded-2xl p-3 text-center font-semibold transition ease-in-out',
        theme === 'dark' ? 'text-white' : 'text-grey-800',

        className,
      )}
      {...rest}
    >
      {children}
    </button>
  )
}
