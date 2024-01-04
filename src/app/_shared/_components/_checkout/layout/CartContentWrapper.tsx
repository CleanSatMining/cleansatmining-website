import { ProductMiniCard } from '@/app/_shared/_components/_checkout/ProductMiniCard'
import { OrderLine } from '@/graphql/common/generated-types'
import CartCountdown from './CartCountdown'

interface CartContentWrapperProps {
  className?: string
  extendMinicart: boolean
  children: React.ReactNode
  orderLine: OrderLine
  endReservation: Date
}

export default function CartContentWrapper({
  className,
  extendMinicart,
  children,
  orderLine,
  endReservation,
}: CartContentWrapperProps) {
  return (
    <div className={`grid grid-cols-7 gap-8 ${className}`}>
      <div className="col-span-2 flex flex-col gap-6">
        <CartCountdown expiringDate={endReservation} />
        <ProductMiniCard
          quantity={orderLine.quantity}
          product={orderLine.productVariant.product}
          extend={extendMinicart}
        />
      </div>
      <div className="col-span-5 flex flex-col gap-7">{children}</div>
    </div>
  )
}
