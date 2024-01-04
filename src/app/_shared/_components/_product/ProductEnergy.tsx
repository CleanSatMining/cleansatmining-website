import LabelWithIcon from '@/app/_shared/_components/_utils/LabelWithIcon'
import { intlFormats } from '@/app/_shared/_format/format'
import { EnergySource } from '@/models/Energy'
import { Drop } from '@phosphor-icons/react/dist/ssr/Drop'
import { Fire } from '@phosphor-icons/react/dist/ssr/Fire'
import { Radioactive } from '@phosphor-icons/react/dist/ssr/Radioactive'
import { Sun } from '@phosphor-icons/react/dist/ssr/Sun'
import { Wind } from '@phosphor-icons/react/dist/ssr/Wind'
import { useFormatter, useTranslations } from 'next-intl'
import ProductSection from './ProductSection'

interface ProductEnergyProps {
  energySources: EnergySource[]
  electricityPrice?: string
  availablePower: number
  contractDuration?: string
  className?: string
}

export default function ProductEnergy({
  energySources,
  electricityPrice,
  availablePower,
  contractDuration,
  className,
}: ProductEnergyProps) {
  const t = useTranslations('Product.energy')
  const format = useFormatter()
  const iconSize = 24

  return (
    <ProductSection title={t('title')} className={className}>
      <div className="flex flex-col gap-3">
        <div className="flex gap-2">
          {energySources?.map(
            (source) =>
              t(source) && (
                <div key={source}>
                  {source === 'solar' && (
                    <LabelWithIcon
                      label={t(source)}
                      Icon={Sun}
                      sizeIcon={iconSize}
                    />
                  )}
                  {source === 'wind' && (
                    <LabelWithIcon
                      label={t(source)}
                      Icon={Wind}
                      sizeIcon={iconSize}
                    />
                  )}
                  {source === 'nuclear' && (
                    <LabelWithIcon
                      label={t(source)}
                      Icon={Radioactive}
                      sizeIcon={24}
                    />
                  )}
                  {source === 'flaring' && (
                    <LabelWithIcon
                      label={t(source)}
                      Icon={Fire}
                      sizeIcon={iconSize}
                    />
                  )}
                  {source === 'hydro' && (
                    <LabelWithIcon
                      label={t(source)}
                      Icon={Drop}
                      sizeIcon={iconSize}
                    />
                  )}
                </div>
              ),
          )}
        </div>
        {electricityPrice && (
          <p className="flex items-center gap-1">
            <span>{t('electricityPrice')}</span>
            <span className="font-semibold text-green">{electricityPrice}</span>
          </p>
        )}
        <p className="flex items-center gap-1">
          <span>{t('availablePower')}</span>
          <span className="font-semibold">
            {format.number(
              availablePower,
              intlFormats.number.roundedTwoFractionDigit,
            )}
            {' MW'}
          </span>
        </p>
        {contractDuration && (
          <p className="flex items-center gap-1">
            <span>{t('contractDuration')}</span>
            <span className="font-semibold">{contractDuration}</span>
          </p>
        )}
      </div>
    </ProductSection>
  )
}
