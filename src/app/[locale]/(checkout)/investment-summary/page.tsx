import { getActiveOrder } from '@/app/_shared/_services/_order/getActiveOrder'
import { Order } from '@/graphql/common/generated-types'
import { CheckoutEmpty } from '../../../_shared/_components/_checkout/layout/CheckoutEmpty'
import { CheckoutLayout } from '../../../_shared/_components/_checkout/layout/CheckoutLayout'
import InvestmentSummaryContent from './components/InvestmentSummaryContent'

export default async function CartPage() {
  const activeOrder: Order = await getActiveOrder()

  return !activeOrder || activeOrder.lines.length === 0 ? (
    <CheckoutEmpty />
  ) : (
    <CheckoutLayout
      translationPath="InvestmentSummaryPage"
      currentStep={1}
      orderLine={activeOrder.lines[0]}
      endReservation={activeOrder.customFields.endReservationDate}
    >
      <InvestmentSummaryContent activeOrder={activeOrder} />
    </CheckoutLayout>
  )
}
