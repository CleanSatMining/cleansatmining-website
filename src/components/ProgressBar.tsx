import { Progress } from '@nextui-org/progress'
import { Info } from '@phosphor-icons/react/dist/ssr/Info'

interface ProgressBarProps {
  currentProjectInvestmentAmount: number
  totalInvestment: number
  minProjectValue: number
}

export default function ProgressBar({
  currentProjectInvestmentAmount,
  totalInvestment,
  minProjectValue,
}: ProgressBarProps) {
  return (
    <div className="relative w-full flex-col">
      <div
        className="absolute bottom-0 top-0 z-20 flex -translate-x-1/2 transform flex-col items-center"
        style={{ left: `${(minProjectValue / totalInvestment) * 100}%` }}
      >
        <div className="flex pb-[10px] text-lg font-semibold">
          {`${(minProjectValue / 1000000).toFixed(0)}M $`}
          <Info size={15} className="m-1" />
        </div>
        <div className="h-6 w-[2px] bg-light-green" />
      </div>
      <div className="flex w-full justify-end pb-3">
        <div className="text-lg font-semibold ">
          {`${(totalInvestment / 1000000).toFixed(0)}M $`}
        </div>
      </div>
      <Progress
        aria-label="funding"
        value={currentProjectInvestmentAmount}
        maxValue={totalInvestment}
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
