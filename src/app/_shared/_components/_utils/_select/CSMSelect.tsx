import { Select, SelectItem, SelectProps } from '@nextui-org/select'
import classNames from 'classnames'

interface CSMSelectProps extends Omit<SelectProps, 'children'> {
  dataSelect: Array<{ key: string; value: string }>
  className?: string
}

export default function CSMSelect({
  className,
  dataSelect,
  label,
  ...rest
}: CSMSelectProps) {
  const customLabel = () => <span className="text-grey-200">{label}</span>

  return (
    <Select
      {...rest}
      variant="bordered"
      label={customLabel()}
      scrollShadowProps={{ hideScrollBar: false }}
      className={classNames('', className)}
    >
      {dataSelect.map((entry) => (
        <SelectItem key={entry.key} value={entry.key}>
          {entry.value}
        </SelectItem>
      ))}
    </Select>
  )
}
