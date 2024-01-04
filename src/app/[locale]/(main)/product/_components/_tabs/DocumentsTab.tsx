import Box from '@/app/_shared/_components/_utils/Box'
import ButtonLink from '@/app/_shared/_components/_utils/_buttons/ButtonLink'
import { Asset } from '@/graphql/common/generated-types'
import { Files } from '@phosphor-icons/react/dist/ssr/Files'
import { useFormatter, useTranslations } from 'next-intl'

interface DocumentsTabProps {
  downloadableDocuments: Array<Asset>
}

export default function DocumentsTab({
  downloadableDocuments,
}: DocumentsTabProps) {
  const format = useFormatter()
  const t = useTranslations('ProductPage.ProductTab.DocumentsTab')

  return (
    <Box className="flex h-full flex-col gap-4 p-9">
      {downloadableDocuments.length > 0 ? (
        <>
          {downloadableDocuments.map((downloadableDocument, index) => {
            return (
              <ButtonLink
                key={index}
                className="relative w-full"
                href={downloadableDocument.source}
                isExternal
                theme={'grey600'}
              >
                <div className="flex items-center gap-2 font-semibold leading-tight text-white">
                  {downloadableDocument.name}
                  <Files size={20} />
                  <div className="text-sm font-normal text-white/70 sm:absolute sm:right-4">{`
                    ${format.number(
                      downloadableDocument.fileSize,
                      'byteCompact',
                    )}
                    - PDF`}</div>
                </div>
              </ButtonLink>
            )
          })}
        </>
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          {t('noDocumentsMessage')}
        </div>
      )}
    </Box>
  )
}
