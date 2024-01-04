import { intlFormats } from '@/app/_shared/_format/format'
import { Progress } from '@nextui-org/progress'
import { Info } from '@phosphor-icons/react/dist/ssr/Info'
import { useFormatter } from 'next-intl'

interface ProgressBarProps {
  currentProjectInvestmentAmount: number
  currentProjectInvestmentProgress: number
  minProjectValue: number
}

export default function ProgressBar({
  currentProjectInvestmentAmount,
  currentProjectInvestmentProgress,
  minProjectValue,
}: ProgressBarProps) {
  const format = useFormatter()
  const totalProjectValue =
    currentProjectInvestmentAmount / currentProjectInvestmentProgress

  return (
    <div className="relative w-full flex-col">
      <div
        className="absolute bottom-0 top-0 z-20 flex -translate-x-1/2 transform flex-col items-center"
        style={{ left: `${(minProjectValue / totalProjectValue) * 100}%` }}
      >
        <div className="flex pb-[10px] text-lg font-semibold">
          {format.number(minProjectValue, intlFormats.number.dollarCompact)}
          <Info size={15} className="m-1" />
        </div>
        <div className="h-6 w-[2px] bg-light-green" />
      </div>
      <div className="flex w-full justify-end pb-3">
        <div className="text-lg font-semibold ">
          {format.number(totalProjectValue, intlFormats.number.dollarCompact)}
        </div>
      </div>
      <Progress
        aria-label="funding"
        value={currentProjectInvestmentAmount}
        maxValue={totalProjectValue}
        showValueLabel={true}
        classNames={{
          base: 'w-full relative mb-1',
          track: 'bg-grey-400 h-5',
          indicator: '!bg-green',
          labelWrapper:
            'top-1/2 absolute transform -translate-y-1/2 left-5 z-10 text-grey-600 text-sm font-bold flex items-center',
        }}
      />
    </div>
  )
}
