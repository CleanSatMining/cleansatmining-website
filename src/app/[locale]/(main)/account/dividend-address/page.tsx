import Box from '@/app/_shared/_components/_utils/Box'
import { Icon } from '@phosphor-icons/react'

export interface CustomerTab {
  label: string
  icon: Icon
  content: JSX.Element
}

export default async function UserPage() {
  return (
    <Box className="h-full w-full p-8">
      Adresses de réception des dividendes
    </Box>
  )
}
