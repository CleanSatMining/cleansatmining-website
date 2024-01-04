import { OrderLine } from '@/graphql/common/generated-types'
import { useTranslations } from 'next-intl'
import React from 'react'
import Button from '../../_utils/_buttons/Button'
import ButtonLink from '../../_utils/_buttons/ButtonLink'
import CheckoutStepper from '../CheckoutStepper'
import CartContentWrapper from './CartContentWrapper'
import CenteredHeading from './CenteredHeading'

interface CheckoutLayoutProps {
  children: React.ReactNode | React.ReactNode[]
  currentStep: number
  translationPath: 'CartAddressPage' | 'InvestmentSummaryPage'
  orderLine: OrderLine
  endReservation: Date
}

export function CheckoutLayout({
  children,
  translationPath,
  currentStep,
  orderLine,
  endReservation,
}: CheckoutLayoutProps) {
  const t = useTranslations(translationPath)

  return (
    <>
      <CheckoutStepper currentStep={currentStep} />
      <CenteredHeading title={t('title')} intro={t('intro')} />
      <CartContentWrapper
        extendMinicart={currentStep !== 1}
        orderLine={orderLine}
        endReservation={endReservation}
      >
        {children}
      </CartContentWrapper>
      <div className="flex justify-between gap-6">
        <div className="flex flex-col items-center gap-2 text-center">
          {/* TODO: set link */}
          {currentStep !== 1 && (
            <>
              <Button theme="white" minWidth>
                {t('prev.title')}
              </Button>
              <p className="text-xs">{t('prev.detail')}</p>
            </>
          )}
        </div>
        <div className="flex flex-col items-center gap-2 text-center">
          {/* TODO: set link */}
          <ButtonLink theme="green" minWidth href="/address">
            {t('next.title')}
          </ButtonLink>
          <p className="text-xs">{t('next.detail')}</p>
        </div>
      </div>
    </>
  )
}
