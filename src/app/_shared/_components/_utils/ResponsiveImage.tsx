interface ResponsiveImageSrcProps {
  src: string
  alt: string
  className?: string
  containerClassName?: string
}

export function ResponsiveImageSrc({
  src,
  alt,
  className,
  containerClassName,
}: ResponsiveImageSrcProps) {
  return (
    <picture className={containerClassName}>
      <source media="(max-width: 779px)" src={src} />
      <source media="(min-width: 780px)" src={src} />
      <img alt={alt} src={src} className={className} />
    </picture>
  )
}
