'use client'
import CheckoutStepper from '@/app/_shared/_components/_checkout/CheckoutStepper'
import {
  CreateAddressInput,
  CreateCustomerInput,
} from '@/graphql/common/generated-types'
import { useMutation, useQuery } from '@apollo/client'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import {
  GET_ELIGIBLE_SHIPPING_METHODS_IDS,
  SET_CUSTOMER_FOR_ORDER,
  SET_ORDER_BILLING_ADDRESS,
  SET_ORDER_SHIPPING_ADDRESS,
  SET_ORDER_SHIPPING_METHOD,
} from '../checkout.graphql'

export default function ConfirmCartPage() {
  const t = useTranslations('ConfirmCartPage')

  const customer: CreateCustomerInput = {
    title: 'Monsieur',
    firstName: 'Laurent',
    lastName: 'ROCHE',
    emailAddress: 'laurent.roche@email.fr',
  }

  const customerAddress: CreateAddressInput = {
    city: 'LYON',
    countryCode: 'FR',
    defaultBillingAddress: true,
    defaultShippingAddress: true,
    postalCode: '69001',
    streetLine1: '10 Rue de la République',
  }

  useQuery(GET_ELIGIBLE_SHIPPING_METHODS_IDS, {
    onCompleted: (data) => {
      if (data && data.eligibleShippingMethods.length > 0) {
        setFirstShippingMethodId(data.eligibleShippingMethods[0]?.id)
        setIsShippingMethodIdFound(true)
      }
    },
  })

  const [firstShippingMethodId, setFirstShippingMethodId] = useState<Number>()
  const [isShippingMethodIdFound, setIsShippingMethodIdFound] = useState(false)
  const [idOrderCreated, setIdOrderCreated] = useState<Number>()
  const [isOrderValidated, setIsOrderValidated] = useState(false)

  const [setCustomerForOrder] = useMutation(SET_CUSTOMER_FOR_ORDER, {
    variables: { input: customer },
    onCompleted: (data) => {
      if (data?.setOrderShippingAddress?.errorCode) {
        console.log(
          'setOrderBillingAddress : ' + data.setOrderShippingAddress.message,
        )
      } else {
        setOrderBillingAddress()
      }
    },
  })

  const [setOrderBillingAddress] = useMutation(SET_ORDER_BILLING_ADDRESS, {
    variables: { input: customerAddress },
    onCompleted: (data) => {
      if (data?.setOrderShippingAddress?.errorCode) {
        console.log(
          'setOrderBillingAddress : ' + data.setOrderShippingAddress.message,
        )
      } else {
        setOrderShippingAddress()
      }
    },
  })

  const [setOrderShippingAddress] = useMutation(SET_ORDER_SHIPPING_ADDRESS, {
    variables: { input: customerAddress },
    onCompleted: (data) => {
      if (data?.setOrderShippingAddress?.errorCode) {
        console.log(
          'setOrderShippingAddress : ' + data.setOrderShippingAddress.message,
        )
      } else {
        if (isShippingMethodIdFound) {
          setOrderShippingMethod()
        } else {
          console.log('No shipping method found')
        }
      }
    },
  })

  const [setOrderShippingMethod] = useMutation(SET_ORDER_SHIPPING_METHOD, {
    variables: { shippingMethodId: firstShippingMethodId },
    onCompleted: (data) => {
      if (data?.setOrderShippingAddress?.errorCode) {
        console.log(
          'setOrderShippingMethod : ' + data.setOrderShippingAddress.message,
        )
      } else {
        console.log(data)
        setIsOrderValidated(true)
        setIdOrderCreated(data.setOrderShippingMethod.id)
      }
    },
  })

  useEffect(() => {
    setCustomerForOrder()
  }, [setCustomerForOrder])

  return (
    <>
      <CheckoutStepper currentStep={5} />
      <div>
        <h2 className="mb-4 text-lg font-semibold">{t('title')}</h2>
        {isOrderValidated &&
          `La commande a été créée avec l'id suivant : ${idOrderCreated}`}
      </div>
    </>
  )
}
