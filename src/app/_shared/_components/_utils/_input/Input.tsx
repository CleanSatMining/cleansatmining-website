'use client'
import { Input, InputProps } from '@nextui-org/input'
import classNames from 'classnames'

interface CSMInputProps extends InputProps {
  className?: string
}

export default function CSMInput({ className, ...rest }: CSMInputProps) {
  return (
    <Input {...rest} variant="bordered" className={classNames('', className)} />
  )
}
