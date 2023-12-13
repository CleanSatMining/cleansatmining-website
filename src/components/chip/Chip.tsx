'use client'
import { Chip, ChipProps } from '@nextui-org/chip'
import classNames from 'classnames'

interface CSMChipProps extends ChipProps {
  customColor: 'green' | 'yellow' | 'blue' | 'grey-300' | 'grey-800'
  children: React.ReactNode
}

export default function CSMChip({
  customColor,
  children,
  ...rest
}: CSMChipProps) {
  const customColors = {
    green: 'bg-green',
    yellow: 'bg-yellow',
    blue: 'bg-blue',
    'grey-300': 'bg-grey-300',
    'grey-800': 'bg-grey-800',
  }
  return (
    <Chip
      {...rest}
      color="default"
      classNames={{
        base: classNames(
          'py-1',
          customColors[customColor],
          rest.classNames?.base,
        ),
        content: classNames(
          `${customColor === 'grey-800' ? 'text-white' : 'text-grey-800'}`,
          'font-semibold',
          rest.classNames?.content,
        ),
      }}
    >
      {children}
    </Chip>
  )
}
