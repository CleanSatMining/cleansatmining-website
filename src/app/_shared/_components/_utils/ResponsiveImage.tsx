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
    <picture className={`${className} bg-black`}>
      <source media="(max-width: 779px)" src={src} />
      <source media="(min-width: 780px)" src={src} />
      <div className="h-full w-full bg-gradient-to-b from-transparent to-black opacity-70">
        <img alt={alt} src={src} className={`${className} blur-[1px]`} />
      </div>
    </picture>
  )
}
