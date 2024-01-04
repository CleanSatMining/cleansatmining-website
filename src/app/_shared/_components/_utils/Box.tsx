interface BoxProps {
  className?: string
  children: React.ReactNode
  bgColor?: string
}

export default function Box({
  className,
  children,
  bgColor = 'dark:bg-grey-800',
}: BoxProps) {
  return (
    <div className={`rounded-3xl ${bgColor} dark:text-white ${className}`}>
      {children}
    </div>
  )
}
