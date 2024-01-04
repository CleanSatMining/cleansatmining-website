import { getServerSession } from 'next-auth'

export default async function Layout({
  signedIn,
  signedOut,
  children,
}: {
  signedIn: React.ReactNode
  signedOut: React.ReactNode
  children: React.ReactNode
  params: { locale: string }
}) {
  const isSignedIn = await getServerSession()

  return (
    <>
      {children}
      {isSignedIn ? signedIn : signedOut}
    </>
  )
}
