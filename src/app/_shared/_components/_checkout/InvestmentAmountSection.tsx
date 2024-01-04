import { intlFormats } from '@/app/_shared/_format/format'
import { useFormatter, useTranslations } from 'next-intl'
import ProductSection from '../_product/ProductSection'

interface InvestmentAmountSectionProps {
  quantity: number
  tokenPrice: number
  tokenName: string
}

export function InvestmentAmountSection({
  quantity,
  tokenPrice,
  tokenName,
}: InvestmentAmountSectionProps) {
  const format = useFormatter()
  const t = useTranslations('InvestmentSummaryPage.text')

  return (
    <ProductSection
      className="px-9 py-4"
      classNameTitle="text-xs font-normal text-white/70 leading-tight"
      title={t('investmentAmount', {
        numberToken: format.number(
          tokenPrice / quantity,
          intlFormats.number.roundedTwoFractionDigit,
        ),
        tokenName: tokenName,
      })}
      spacing="small"
    >
      <div className="font-bold leading-tight text-green">
        {format.number(quantity, intlFormats.number.dollarCompact)}
      </div>
      <div className="text-xs leading-tight">
        {t('summarySentence', {
          numberToken: format.number(
            tokenPrice / quantity,
            intlFormats.number.roundedTwoFractionDigit,
          ),
          tokenName: tokenName,
        })}
      </div>
    </ProductSection>
  )
}
