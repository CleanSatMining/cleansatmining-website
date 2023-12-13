'use client'
import { ChipProps } from '@nextui-org/chip'
import CSMChip from '@/components/chip/Chip'
import { SaleStatus } from '@/models/Product'
import { useTranslations } from 'next-intl'

interface ProductStatusChipProps extends ChipProps {
  status: SaleStatus
}

export default function ProductStatusChip({
  status,
  ...rest
}: ProductStatusChipProps) {
  const t = useTranslations('Product')
  const renderChip = () => {
    switch (status) {
      case 'running':
        return (
          <CSMChip customColor="green" {...rest}>
            {t(`statuses.${status}`)}
          </CSMChip>
        )
      case 'lastOpportunity':
        return (
          <CSMChip customColor="yellow" {...rest}>
            {t(`statuses.${status}`)}
          </CSMChip>
        )
      case 'incoming':
        return (
          <CSMChip customColor="blue" {...rest}>
            {t(`statuses.${status}`)}
          </CSMChip>
        )
      case 'closed':
        return (
          <CSMChip customColor="grey-300" {...rest}>
            {t(`statuses.${status}`)}
          </CSMChip>
        )
      default:
        return <></>
    }
  }

  return <>{renderChip()}</>
}
