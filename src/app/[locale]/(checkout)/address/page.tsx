import CheckoutAddressContent from '@/app/[locale]/(checkout)/address/_components/CheckoutAddressContent'
import { getActiveOrder } from '@/app/_shared/_services/_order/getActiveOrder'
import { Order } from '@/graphql/common/generated-types'
import { CheckoutEmpty } from '../../../_shared/_components/_checkout/layout/CheckoutEmpty'
import { CheckoutLayout } from '../../../_shared/_components/_checkout/layout/CheckoutLayout'

export default async function CartAddressPage() {
  const activeOrder: Order = await getActiveOrder()

  return !activeOrder || activeOrder.lines.length === 0 ? (
    <CheckoutEmpty />
  ) : (
    <CheckoutLayout
      translationPath="CartAddressPage"
      currentStep={2}
      orderLine={activeOrder.lines[0]}
      endReservation={activeOrder.customFields.endReservationDate}
    >
      <CheckoutAddressContent />
    </CheckoutLayout>
  )
}
