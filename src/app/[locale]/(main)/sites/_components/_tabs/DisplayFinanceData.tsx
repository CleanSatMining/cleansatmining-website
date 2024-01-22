import { Icon } from '@phosphor-icons/react'
import { useFormatter } from 'next-intl'

interface DisplayFinanceDataProps {
  name: string
  value: number
  Icon?: Icon | false
  unit?: 'dollarRounded' | 'percent'
  minimumFractionDigits?: number
}

export function DisplayFinanceData({
  name,
  value,
  Icon,
  unit = 'dollarRounded',
}: DisplayFinanceDataProps) {
  const format = useFormatter()

  return (
    <div className="flex justify-between">
      <div className="flex gap-1">
        {name}
        {Icon && <Icon size={16} />}
      </div>
      <div>{format.number(value, unit)}</div>
    </div>
  )
}
