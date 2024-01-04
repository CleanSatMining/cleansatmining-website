import { Icon } from '@phosphor-icons/react'

interface LabelWithIconProps {
  className?: string
  label: string
  Icon: Icon
  classNameIcon?: string
  sizeIcon: number
}

export default function LabelWithIcon({
  className,
  label,
  Icon,
  classNameIcon,
  sizeIcon,
}: LabelWithIconProps) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <Icon className={classNameIcon} size={sizeIcon} />
      <div>{label}</div>
    </div>
  )
}
