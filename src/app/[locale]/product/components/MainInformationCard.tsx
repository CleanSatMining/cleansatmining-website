import Box from '@/components/Box'
import Divider from '@/components/Divider'
import ProductApy from '@/components/product/ProductApy'
import ProductCardEnergy from '@/components/product/ProductEnergy'
import ProductEngine from '@/components/product/ProductEngine'
import ProductFunding from '@/components/product/ProductFunding'
import ProductInvestment from '@/components/product/ProductInvestment'
import ProductOperator from '@/components/product/ProductOperator'
import ProductSection from '@/components/product/ProductSection'
import { Product } from '@/models/Product'
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

  return (
    <Box className={`flex grow-[1] flex-col py-2 ${className}`}>
      {/* // TODO : to remove when we'll have real data */}
      <ProductSection>
        <p className="font-title text-lg font-semibold">( {product.name} )</p>
      </ProductSection>
      {product.estimatedNetApy && (
        <>
          <ProductApy estimatedNetApy={product.estimatedNetApy} />
          <Divider />
        </>
      )}
      <ProductInvestment
        minInvestmentAmount={product.minInvestmentAmount}
        maxInvestmentAmount={product.maxInvestmentAmount}
      />
      <Divider />
      <ProductFunding
        minProjectValue={product.minProjectValue}
        currentProjectInvestmentAmount={product.currentProjectInvestmentAmount}
        totalInvestment={product.totalInvestment}
      />
      <Divider />
      <ProductCardEnergy
        energySources={product.energySources}
        availablePower={product.availablePower}
        contractDuration={product.contractDuration}
        electricityPrice={product.electricityPrice}
      />
      <Divider />
      <ProductOperator
        operatorName={product.operatorName}
        operatorLogo={product.operatorLogo}
        operatorUrl={product.operatorUrl}
      />
      <Divider />
      <ProductEngine
        engineType={product.engineType}
        engineQuantity={product.engineQuantity}
        estimatedDeliveryDate={product.estimatedDeliveryDate}
        estimatedLaunchDate={product.estimatedLaunchDate}
      ></ProductEngine>
    </Box>
  )
}
