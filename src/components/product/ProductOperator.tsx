import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

interface ProductOperatorProps {
  operatorUrl?: string
  operatorName: string
  operatorLogo?: string
  className?: string
}

export default function ProductOperator({
  operatorUrl,
  operatorName,
  operatorLogo,
  className,
}: ProductOperatorProps) {
  const t = useTranslations('Product')

  return (
    <div
      className={`flex flex-nowrap items-end justify-between gap-4 border-b-1 border-grey-600 px-4 py-2 xl:px-9 xl:py-4 ${className}`}
    >
      <div className="flex flex-col gap-4">
        <h3 className="text-sm text-white/70">{t('operator.title')}</h3>
        {operatorUrl && (
          <Link
            href={operatorUrl}
            target="_blank"
            title={`${operatorName} - ${t('externalLink')}`}
            className="font-semibold"
          >
            {operatorName}
          </Link>
        )}
        {!operatorUrl && <span className="font-semibold">{operatorName}</span>}
      </div>
      {operatorUrl && operatorLogo && (
        <Link
          href={operatorUrl}
          target="_blank"
          title={`${operatorName} - ${t('externalLink')}`}
        >
          <Image
            src={operatorLogo}
            alt={`Logo ${operatorName}`}
            width={60}
            height={60}
          />
        </Link>
      )}
      {!operatorUrl && operatorLogo && (
        <Image
          src={operatorLogo}
          alt={`Logo ${operatorName}`}
          width={60}
          height={60}
        />
      )}
    </div>
  )
}
