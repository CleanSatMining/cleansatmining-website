import { Icon } from '@phosphor-icons/react'
import { Check } from '@phosphor-icons/react/dist/ssr/Check'

interface StepperProps {
  steps: Step[]
  currentStep: number
  className?: string
}

export interface Step {
  number: number
  icon: Icon
  title: string
  subTitle?: string
}

export default function Stepper({
  steps,
  currentStep,
  className,
}: StepperProps) {
  return (
    <ul
      className={`relative grid grid-cols-5 items-start justify-between ${className} before:absolute before:left-[10%] before:right-[10%] before:top-5 before:block before:h-px before:bg-grey-400/60`}
    >
      {steps.map((step) => {
        return (
          <li
            key={step.number}
            className={`flex flex-col items-center gap-2 text-center ${
              step.number === currentStep
                ? 'font-bold text-green'
                : 'text-white'
            }`}
          >
            <span
              className={`relative inline-flex h-10 w-10 items-center justify-center rounded-xl border bg-grey-800 ${
                step.number === currentStep
                  ? 'border-green'
                  : 'border-grey-400/60'
              }`}
            >
              <step.icon size={24} />
              {step.number < currentStep && (
                <span className="absolute right-0 top-0 inline-flex h-4 w-4 -translate-y-1/3 translate-x-1/3 items-center justify-center rounded-full bg-white text-grey-800">
                  <Check size={10} />
                </span>
              )}
            </span>
            <span className="hidden flex-col items-center gap-1 font-title leading-tight sm:flex">
              <span>{step.title}</span>
              {step.subTitle && (
                <span className="hidden lg:block">{step.subTitle}</span>
              )}
            </span>
          </li>
        )
      })}
    </ul>
  )
}
