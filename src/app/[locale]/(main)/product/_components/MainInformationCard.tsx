import ProductApy from '@/app/_shared/_components/_product/ProductApy'
import ProductEnergy from '@/app/_shared/_components/_product/ProductEnergy'
import ProductEngine from '@/app/_shared/_components/_product/ProductEngine'
import ProductFunding from '@/app/_shared/_components/_product/ProductFunding'
import ProductInvestment from '@/app/_shared/_components/_product/ProductInvestment'
import ProductOperator from '@/app/_shared/_components/_product/ProductOperator'
import Box from '@/app/_shared/_components/_utils/Box'
import Divider from '@/app/_shared/_components/_utils/Divider'
import { Product } from '@/graphql/common/generated-types'
import { EnergySource } from '@/models/Energy'
import { useTranslations } from 'next-intl'

interface MainInformationCardProps {
  product: Product
  className?: string
}

export default function MainInformationCard({
  product,
  className,
}: MainInformationCardProps) {
  const t = useTranslations('ProductPage.MainInformationCard') // Initialisez le hook de traduction ici

  const {
    minInvestmentAmount,
    maxInvestmentAmount,
    estimatedNetApy,
    minProjectValue,
    currentProjectInvestmentAmount,
    currentProjectInvestmentProgress,
    availablePower,
    contractDuration,
    electricityPrice,
    operatorName,
    operatorLogo,
    operatorUrl,
    engineType,
    engineQuantity,
    estimatedDeliveryDate,
    estimatedLaunchDate,
    energySources,
  } = product.customFields

  return (
    <Box className={`flex grow-[1] flex-col py-2 ${className}`}>
      {!!estimatedNetApy && (
        <>
          <ProductApy estimatedNetApy={estimatedNetApy} />
          <Divider />
        </>
      )}
      <ProductInvestment
        minInvestmentAmount={minInvestmentAmount}
        maxInvestmentAmount={maxInvestmentAmount}
      />
      <Divider />
      <ProductFunding
        minProjectValue={minProjectValue}
        currentProjectInvestmentAmount={currentProjectInvestmentAmount}
        currentProjectInvestmentProgress={currentProjectInvestmentProgress}
      />
      <Divider />
      <ProductEnergy
        energySources={energySources as EnergySource[]}
        availablePower={availablePower}
        contractDuration={contractDuration}
        electricityPrice={electricityPrice}
      />
      <Divider />
      <ProductOperator
        operatorName={operatorName}
        operatorLogoUrl={operatorLogo?.source}
        operatorUrl={operatorUrl}
      />
      <Divider />
      <ProductEngine
        engineType={engineType}
        engineQuantity={engineQuantity}
        estimatedDeliveryDate={estimatedDeliveryDate}
        estimatedLaunchDate={estimatedLaunchDate}
      ></ProductEngine>
    </Box>
  )
}
