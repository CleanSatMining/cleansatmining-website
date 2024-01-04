import classNames from 'classnames'

interface ProductSectionProps {
  title?: string
  className?: string
  classNameTitle?: string
  spacing?: 'none' | 'small' | 'medium' | 'large'
  children: React.ReactNode
}

export default function ProductSection({
  title,
  className,
  classNameTitle,
  spacing = 'medium',
  children,
}: ProductSectionProps) {
  return (
    <div
      className={classNames(
        'flex flex-col',
        { 'gap-4 px-4 py-2 xl:px-9 xl:py-4': spacing === 'medium' },
        { 'gap-1': spacing === 'small' },
        className,
      )}
    >
      {title && (
        <h3
          className={`${
            classNameTitle
              ? classNameTitle
              : 'text-sm font-normal text-white/70'
          }`}
        >
          {title}
        </h3>
      )}
      {children}
    </div>
  )
}
