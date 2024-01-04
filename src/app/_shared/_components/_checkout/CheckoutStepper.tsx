import Stepper, { Step } from '@/app/_shared/_components/_utils/Stepper'
import { NumberFive } from '@phosphor-icons/react/dist/ssr/NumberFive'
import { NumberFour } from '@phosphor-icons/react/dist/ssr/NumberFour'
import { NumberOne } from '@phosphor-icons/react/dist/ssr/NumberOne'
import { NumberThree } from '@phosphor-icons/react/dist/ssr/NumberThree'
import { NumberTwo } from '@phosphor-icons/react/dist/ssr/NumberTwo'
import { useTranslations } from 'next-intl'

interface CheckoutStepperProps {
  currentStep: number
  className?: string
}

export default function CheckoutStepper({
  currentStep,
  className,
}: CheckoutStepperProps) {
  const t = useTranslations('checkout.stepper')

  const steps: Step[] = [
    {
      number: 1,
      icon: NumberOne,
      title: t('step1.title'),
      subTitle: t('step1.subTitle'),
    },
    {
      number: 2,
      icon: NumberTwo,
      title: t('step2.title'),
      subTitle: t('step2.subTitle'),
    },
    {
      number: 3,
      icon: NumberThree,
      title: t('step3.title'),
      subTitle: t('step3.subTitle'),
    },
    { number: 4, icon: NumberFour, title: t('step4.title') },
    { number: 5, icon: NumberFive, title: t('step5.title') },
  ]

  return (
    <Stepper
      steps={steps}
      currentStep={currentStep}
      className={`mx-3 my-2 ${className}`}
    />
  )
}
