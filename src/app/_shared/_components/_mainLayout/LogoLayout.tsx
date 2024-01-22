import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../../../../tailwind.config'

export function LogoLayout({
  children,
  theme = 'light',
  backgroundSize = '70%',
  id = 'LogoLayoutRoot',
  className = '',
}: {
  children: React.ReactNode
  theme: 'light' | 'dark'
  backgroundSize?: string
  id?: string
  className?: string
}) {
  const fullConfig = resolveConfig(tailwindConfig)
  const background =
    theme === 'light'
      ? '/assets/background-logo.svg'
      : '/assets/background-logo-dark.svg'

  const backgroundColor =
    theme === 'light'
      ? fullConfig.theme.colors.white
      : (fullConfig.theme.colors as any).grey['600']
  const combinedClassName = `bg-no-repeat bg-blend-normal ${className}`

  return (
    <div
      id={id}
      className={combinedClassName}
      style={{
        background: `url(${background}) no-repeat center center, ${backgroundColor}`,
        backgroundSize: `${backgroundSize}`,
      }}
    >
      {children}
    </div>
  )
}
