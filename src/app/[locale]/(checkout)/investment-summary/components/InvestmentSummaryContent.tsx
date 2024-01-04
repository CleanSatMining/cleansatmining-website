import { ProductMiniCard } from '@/app/_shared/_components/_checkout/ProductMiniCard'
import { Order } from '@/graphql/common/generated-types'
import { useTranslations } from 'next-intl'

interface InvestmentSummaryContentProps {
  activeOrder: Order
}

export default function InvestmentSummaryContent({
  activeOrder,
}: InvestmentSummaryContentProps) {
  const t = useTranslations('InvestmentSummaryPage')

  return (
    <>
      {activeOrder.lines.length > 0 ? (
        <ProductMiniCard
          extend={true}
          withImage={false}
          product={activeOrder.lines[0].productVariant.product}
          quantity={activeOrder.lines[0].quantity}
        />
      ) : (
        t('text.emptyCart')
      )}
    </>
  )
}
