interface ProductSectionProps {
  title?: string
  className?: string
  spacing?: 'none' | 'small' | 'medium' | 'large'
  children: React.ReactNode
}

export default function ProductSection({
  title,
  className,
  spacing = 'medium',
  children,
}: ProductSectionProps) {
  return (
    <div
      className={`flex flex-col 
      ${spacing === 'medium' && 'gap-4 px-4 py-2 xl:px-9 xl:py-4'} 
      ${spacing === 'small' && 'gap-1'}
      ${className}`}
    >
      {title && <h3 className="text-sm font-normal text-white/70">{title}</h3>}
      {children}
    </div>
  )
}
