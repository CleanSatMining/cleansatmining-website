import Box from '@/app/_shared/_components/_utils/Box'
import { HourglassHigh } from '@phosphor-icons/react/dist/ssr/HourglassHigh'
import moment from 'moment'
import { useFormatter, useTranslations } from 'next-intl'
import TimerReservation from '../TimerReservation'

interface CartCountdownProps {
  expiringDate: Date
  className?: string
}

export default function CartCountdown({
  expiringDate,
  className,
}: CartCountdownProps) {
  const t = useTranslations('CartAddressPage')
  const format = useFormatter()

  return (
    <Box
      bgColor="dark:bg-grey-600"
      className={`flex items-center gap-4 border border-green px-5 py-3 ${className}`}
    >
      <HourglassHigh size={40} className="text-green" />
      <div className="flex flex-col gap-1">
        <div className="text-xs leading-tight">{t('countdown')}</div>
        <div className="text-lg font-bold leading-5 text-green">
          <TimerReservation
            durationInSeconds={moment(moment().add(20, 'minute')).diff(
              moment(),
              'seconds',
            )}
          />
          {/* TODO: create reusable component that takes the expiringDate as props to calculate time remaining and update it each sec */}
          {/* format.dateTime(expiringDate, intlFormats.dateTime.numeric) */}
        </div>
      </div>
    </Box>
  )
}
