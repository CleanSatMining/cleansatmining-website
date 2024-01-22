import Button from '@/app/_shared/_components/_utils/_buttons/Button'

interface Props {
  status: string
  statusCode:
    | 'OPERATIONAL'
    | 'FUNDING'
    | 'INACTIVE'
    | 'CLOSED'
    | 'UNKNOWN'
    | 'MAINTENANCE'
    | 'COMING SOON'
}

export function Status({
  status = 'status',
  statusCode = 'OPERATIONAL',
}: Props) {
  return (
    <Button
      data-testid="submitAddToCartForm"
      theme={getButtonTheme(statusCode)}
      type="submit"
      className="m-2 h-[30px] min-w-[100px] max-w-[200px] bg-blue text-xs sm:text-sm"
      style={{ cursor: 'default' }}
    >
      {status}
    </Button>
  )
}

const getButtonTheme = (
  statusCode:
    | 'OPERATIONAL'
    | 'FUNDING'
    | 'INACTIVE'
    | 'CLOSED'
    | 'UNKNOWN'
    | 'MAINTENANCE'
    | 'COMING SOON',
) => {
  switch (statusCode) {
    case 'OPERATIONAL':
      return 'green'
    case 'CLOSED':
      return 'red'
    case 'COMING SOON':
      return 'blue'
    case 'FUNDING':
      return 'yellow'
    default:
      return 'grey'
  }
}
