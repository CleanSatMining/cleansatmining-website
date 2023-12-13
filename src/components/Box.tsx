interface BoxProps {
  className?: string
  children: React.ReactNode
}

export default function Box({ className, children }: BoxProps) {
  return (
    <div
      className={`rounded-3xl dark:bg-grey-800 dark:text-white ${className}`}
    >
      {children}
    </div>
  )
}
