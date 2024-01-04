import Box from '@/app/_shared/_components/_utils/Box'
import Divider from '@/app/_shared/_components/_utils/Divider'
import { Link } from '@nextui-org/link'
import { Question } from '@phosphor-icons/react/dist/ssr/Question'
import { useTranslations } from 'next-intl'
import { DisplayFinanceData } from './DisplayFinanceData'
import { ExtendableFinancesSection } from './ExtendableFinancesSection'
import { FinancialProductData } from '@/models/productData'

interface FinancesTabProps {
  financialProductData: FinancialProductData
}

export default function FinancesTab({
  financialProductData: {
    minedBtc,
    otherIncome,
    electricityCost,
    operatingCosts,
    csmOperationalFees,
    otherCosts,
    equipmentDepreciationCost,
    is,
    asics,
    vat,
    miscellaneousEquipment,
    transportation,
    electricityDeposit,
    otherInvestment,
    estimatedNetApy,
    estimatedGrossApy,
    financeHelpPageUrl,
  },
}: FinancesTabProps) {
  const t = useTranslations('ProductPage.ProductTab.FinancesTab')
  const grossProfitContent = [
    {
      className:
        'text-sm text-white leading-tight px-5 pt-2 flex flex-col font-normal',
      name: t('totalIncome'),
      contents: [
        { name: t('minedBtc'), value: minedBtc },
        { name: t('otherIncome'), value: otherIncome },
      ],
    },
    {
      className:
        'text-sm text-white leading-tight px-5 pt-2 flex flex-col font-normal',
      name: t('totalCost'),
      contents: [
        { name: t('electricityCost'), value: electricityCost },
        { name: t('operatingCosts'), value: operatingCosts },
        { name: t('csmOperationalFees'), value: csmOperationalFees },
        { name: t('otherCosts'), value: otherCosts },
      ],
    },
  ]

  const netProfitContent = [
    {
      className: 'text-sm font-semibold leading-[16.8px] text-white/70',
      name: t('grossProfit'),
      contents: grossProfitContent,
      isExtendable: true,
    },
    {
      className: 'text-sm font-semibold leading-[16.8px] text-white/70',
      name: t('equipmentDepreciationCost'),
      value: equipmentDepreciationCost,
    },
    {
      className: 'text-sm font-semibold leading-[16.8px] text-white/70',
      name: t('is'),
      value: is,
    },
  ]

  const totalInvestmentContent = [
    { name: t('asics'), value: asics },
    { name: t('vat'), value: vat },
    { name: t('miscellaneousEquipment'), value: miscellaneousEquipment },
    { name: t('transportation'), value: transportation },
    { name: t('electricityDeposit'), value: electricityDeposit || 0 },
    { name: t('other'), value: otherInvestment || 0 },
  ]

  return (
    <Box className="flex h-full flex-col items-center gap-7 p-9">
      {financeHelpPageUrl && (
        <Link
          className="flex flex-row-reverse gap-1 text-xs font-light leading-[14.4px] text-white/70 hover:text-green"
          isExternal
          showAnchorIcon
          href={financeHelpPageUrl}
          title={`${financeHelpPageUrl} - ${t('externalTab')}`}
          anchorIcon={<Question size={14} />}
        >
          {t('clickForMoreInfo')}
        </Link>
      )}
      <div className="flex w-full flex-col gap-4 text-sm font-semibold leading-[16.8px]">
        <ExtendableFinancesSection
          className="flex flex-col gap-2 text-white"
          name={t('netProfit')}
          contents={netProfitContent}
          isExtendable
        />
        <Divider />
        <ExtendableFinancesSection
          className="flex flex-col gap-2 font-semibold text-white"
          name={t('totalInvestment')}
          classNameContents="gap-1"
          contents={totalInvestmentContent}
          isExtendable
        />
        <Divider />
        <div className="flex flex-col gap-4 text-base font-bold leading-tight">
          <DisplayFinanceData
            name={t('estimatedGrossApy')}
            value={estimatedGrossApy}
            unit={'percent'}
          />
          <DisplayFinanceData
            name={t('estimatedNetApy')}
            value={estimatedNetApy}
            unit={'percent'}
          />
        </div>
      </div>
      <div className="w-full text-xs font-light italic leading-[14.4px] text-white/70">
        {t('capitalGainsNotIncluded')}
      </div>
    </Box>
  )
}
