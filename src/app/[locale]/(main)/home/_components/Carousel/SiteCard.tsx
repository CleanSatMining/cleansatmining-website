import Button from '@/app/_shared/_components/_utils/_buttons/Button'
import { Card, CardHeader } from '@nextui-org/react'
import { useTranslations } from 'next-intl'
import { ResponsiveImageSrc } from '../../../../../_shared/_components/_utils/ResponsiveImage'
import './SiteCard.module.css'
import styles from './SiteCard.module.css'

interface Props {
  src: string
  status: string
  title: string
  subtitle: string
  alt: string
  selected?: boolean
}

export function SiteCard({
  status = 'status',
  src = 'img',
  title = 'title',
  subtitle = 'subtitle',
  alt = 'icon',
  selected = false,
}: Props) {
  const t = useTranslations('HomePage.signedOut')
  const background = '/assets/alpha-cover.jpg'

  return (
    <Card
      radius="lg"
      className={`${styles.card} relative m-2 h-[200px] overflow-hidden border-none sm:h-[300px] lg:h-[400px]`}
    >
      <CardHeader className="absolute top-2 z-10 ml-1 w-[calc(100%_-_8px)] justify-center overflow-hidden  py-1 sm:top-5 lg:top-10">
        <div className="flex flex-col items-center justify-center">
          <Button
            data-testid="submitAddToCartForm"
            type="submit"
            className="m-2 h-[30px] min-w-[100px] max-w-[200px] bg-blue text-xs sm:text-sm"
            style={{ cursor: 'default' }}
          >
            {status}
          </Button>
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
        containerClassName="h-[200px] sm:h-[300px] lg:h-[400px]"
      />
      <CardHeader
        className="absolute bottom-2 z-10 ml-1 w-[calc(100%_-_8px)] justify-center overflow-hidden  py-1 sm:bottom-5 lg:bottom-10"
        style={{ cursor: 'pointer' }}
      >
        <Button
          data-testid="submitAddToCartForm"
          type="submit"
          theme="white"
          className="m-2 h-[30px] max-w-[200px] text-xs sm:h-[40px] sm:text-sm lg:w-1/2 lg:min-w-[100px]"
          style={{ cursor: 'pointer' }}
        >
          {"Plus d'informations"}
        </Button>
      </CardHeader>
    </Card>
  )
}
