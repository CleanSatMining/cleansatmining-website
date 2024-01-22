import { Card, CardHeader } from '@nextui-org/react'
import { useTranslations } from 'next-intl'
import { ResponsiveImageSrc } from '../_utils/ResponsiveImage'
import styles from './Card.module.css'

interface Props {
  src: string
  title: string
  subtitle: string
  alt: string
  selected?: boolean
  containerClassName?: string
}

export function LightCard({
  src = 'img',
  title = 'title',
  subtitle = 'subtitle',
  alt = 'icon',
  selected = false,
  containerClassName = '',
}: Props) {
  const t = useTranslations('HomePage.signedOut')

  return (
    <Card
      radius="lg"
      className={`${styles.card} relative m-2  overflow-hidden border-none ${containerClassName}`}
    >
      <CardHeader className="absolute top-2 z-10 ml-1 w-[calc(100%_-_8px)] justify-center overflow-hidden  py-1 sm:top-5 lg:top-10">
        <div className="flex flex-col items-center justify-center">
          <div
            className="font-cairo mt-2 flex flex-col items-stretch justify-center rounded-xl pl-1 pr-1 text-center text-xl font-bold text-white sm:text-2xl"
            style={{
              backdropFilter: 'blur(2px)',
            }}
          >
            {title}
          </div>
          <div
            className="font-cairo flex flex-col items-stretch justify-center text-center text-xs text-white sm:text-sm"
            style={{
              backdropFilter: 'blur(2px)',
            }}
          >
            {subtitle}
          </div>
        </div>
      </CardHeader>

      <ResponsiveImageSrc
        src={src}
        alt={alt}
        className={`${selected ? styles['zoom-animation'] : styles['zoom-animation']} h-full w-full object-cover object-center`}
        containerClassName={containerClassName}
      />
    </Card>
  )
}
