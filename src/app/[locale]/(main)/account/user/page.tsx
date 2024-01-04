import { getActiveCustomer } from '@/api/customer/getActiveCustomer'
import Box from '@/app/_shared/_components/_utils/Box'
import { Icon } from '@phosphor-icons/react'

export interface CustomerTab {
  label: string
  icon: Icon
  content: JSX.Element
}

export default async function UserPage() {
  const activeCustomer = await getActiveCustomer()
  
  return (
    <Box className="h-full w-full p-8">
      <p>id: {activeCustomer.id}</p>
      <p>mail: {activeCustomer.emailAddress}</p>
      <p>lastName: {activeCustomer.lastName}</p>
      <p>firstName: {activeCustomer.firstName}</p>
    </Box>
  )
}
