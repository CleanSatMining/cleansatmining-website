export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="flex h-[70vh] w-full gap-4">{children}</div>
}
