import Image from 'next/image'
import { Link } from '@nextui-org/link'
import { useState } from 'react'
import Box from '@/components/Box'
import { ArrowRight } from '@phosphor-icons/react/dist/ssr/index'
import { useTranslations } from 'next-intl'

interface DescriptionTabProps {
  descriptionPicture?: string
  descriptionText: string
  siteUrl: string
}

export default function DescriptionTab({
  descriptionPicture,
  descriptionText,
  siteUrl,
}: DescriptionTabProps) {
  const t = useTranslations('ProductPage.ProductTab')
  const [showFullText, setShowFullText] = useState(false)
  const maxNumCharacters = descriptionPicture ? 1100 : 2000

  return (
    <Box className="flex h-full flex-col gap-12 p-9">
      {descriptionPicture && (
        <div className="relative h-64 w-full rounded-2xl overflow-hidden">
          <Image
            src={descriptionPicture}
            layout="fill"
            objectFit="cover"
            alt={t('descriptionPicture')}
          />
        </div>
      )}
      <div className="flex flex-col">
        <div
          className={`text-justify text-sm  ${
            showFullText
              ? descriptionPicture
                ? 'max-h-96 lg:max-h-56'
                : 'max-h-[800px] lg:max-h-[500px]'
              : descriptionPicture
              ? 'max-h-36'
              : 'max-h-[600px] lg:max-h-[500px]'
          }  ${
            showFullText
              ? '::-webkit-scrollbar-track-grey-800  overflow-y-scroll overflow-ellipsis pr-2'
              : 'overflow-clip'
          }`}
        >
          {showFullText || descriptionText.length < maxNumCharacters
            ? descriptionText
            : descriptionText.slice(0, maxNumCharacters) + '...'}
        </div>
        <div
          className={`cursor-pointer py-2 text-white/70`}
          onClick={() => setShowFullText(!showFullText)}
        >
          {descriptionText.length > maxNumCharacters &&
            (showFullText ? t('seeLess') : t('seeMore'))}
        </div>
      </div>
      <Link
        className="flex w-fit items-center gap-2 font-semibold text-white hover:text-green"
        isExternal
        showAnchorIcon
        href={siteUrl}
        title={`${siteUrl} - ${t('externalTab')}`}
        anchorIcon={<ArrowRight size={20} />}
      >
        {t('visitSite')}
      </Link>
    </Box>
  )
}
