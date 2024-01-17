import {
  ImageProps,
  StaticImageData,
  unstable_getImgProps as getImgProps,
} from 'next/image'

interface ResponsiveImageProps extends ImageProps {
  mobileImg: StaticImageData
  desktopImg: StaticImageData
  alt: string
  className?: string
}

export default function ResponsiveImage({
  mobileImg,
  desktopImg,
  alt,
  className,
  ...rest
}: ResponsiveImageProps) {
  const common = { alt, ...rest }
  const { srcSet: desktop } = getImgProps({
    ...common,
    src: desktopImg,
  }).props
  const { srcSet: mobile, ...props } = getImgProps({
    ...common,
    src: mobileImg,
  }).props
  return (
    <picture className={className}>
      <source media="(max-width: 779px)" srcSet={mobile} />
      <source media="(min-width: 780px)" srcSet={desktop} />
      <img {...props} alt={alt} width="100%" height="auto" />
    </picture>
  )
}

interface ResponsiveImageSrcProps {
  src: string
  alt: string
  className?: string
}

export function ResponsiveImageSrc({
  src,
  alt,
  className,
}: ResponsiveImageSrcProps) {
  return (
    <picture className={className}>
      <source media="(max-width: 779px)" src={src} />
      <source media="(min-width: 780px)" src={src} />
      <img alt={alt} src={src} className={className} />
    </picture>
  )
}
