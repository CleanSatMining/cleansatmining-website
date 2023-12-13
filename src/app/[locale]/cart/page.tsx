'use client'
import {
  GetActiveOrderQuery,
  GetActiveOrderQueryVariables,
  Order,
  OrderLine,
} from '@/api/common/generated-types'
import ButtonLink from '@/components/button/ButtonLink'
import { useQuery } from '@apollo/client'
import { useTranslations } from 'next-intl'
import { GET_ACTIVE_ORDER } from './cart.graphql'

export default function CartPage() {
  const t = useTranslations('CartPage')

  function displayCart(activeOrderLines: Array<OrderLine>) {
    if (!activeOrderLines || activeOrderLines.length === 0) {
      return t('text.cartEmpty')
    }
    return (
      <>
        <ul className="divide-gray-200 mb-6 w-96 divide-y">
          {activeOrderLines.map((orderLine) => (
            <li key={orderLine.id} className="my-2">
              <div className="flex items-center space-x-4">
                <div className="min-w-0 flex-1">
                  <p className="text-gray-900 truncate text-sm font-medium">
                    {orderLine.productVariant.name}
                  </p>
                </div>
                <div className="text-gray-900 inline-flex items-center text-base font-semibold">
                  {orderLine.quantity}
                </div>
              </div>
            </li>
          ))}
        </ul>
        <ButtonLink href="/confirm-cart">{t('buttons.validate')}</ButtonLink>
      </>
    )
  }

  const { data } = useQuery<GetActiveOrderQuery, GetActiveOrderQueryVariables>(
    GET_ACTIVE_ORDER,
  )

  const activeOrderLines = (data?.activeOrder as Order)?.lines

  return (
    <div className="p-8">
      <h1 className="mb-4 text-lg font-semibold">{t('title')}</h1>
      {!data ? '...loading' : displayCart(activeOrderLines)}
    </div>
  )
}
