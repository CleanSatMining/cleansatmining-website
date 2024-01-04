import { useTranslations } from 'next-intl'
import ButtonLink from './_buttons/ButtonLink'

interface ErrorPageProps {
  statusCode: '404' | '403'
  additionalText?: string
  hrefButton?: string
  textButton?: string
}

export function ErrorPage({
  statusCode,
  additionalText,
  hrefButton,
  textButton,
}: ErrorPageProps) {
  const t = useTranslations('ErrorPage')
  return (
    <div className="flex flex-col items-center justify-center gap-16 p-40">
      <div className="flex w-full flex-col items-center justify-center gap-5">
        <div className="text-9xl font-bold">{statusCode}</div>
        <div className="text-6xl font-bold">{t(statusCode)}</div>
      </div>
      {additionalText && (
        <div className="text-center text-3xl"> {additionalText} </div>
      )}
      {hrefButton && textButton && (
        <ButtonLink href={hrefButton} minWidth>
          {textButton}
        </ButtonLink>
      )}
    </div>
  )
}
