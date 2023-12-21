export default function Layout({
  signedIn,
  signedOut,
  children,
}: {
  signedIn: React.ReactNode
  signedOut: React.ReactNode
  children: React.ReactNode
  params: { locale: string }
}) {
  const isSignedIn = false

  return (
    <div className="container mx-auto flex flex-col gap-14 p-4 lg:p-8 xl:p-14">
      {children}
      {isSignedIn ? signedIn : signedOut}
    </div>
  )
}
