interface CenteredHeadingProps {
  title: string
  intro?: string
  className?: string
}

export default function CenteredHeading({
  title,
  intro,
  className,
}: CenteredHeadingProps) {
  return (
    <div className={`flex flex-col gap-3 text-center ${className}`}>
      <h2 className="font-title text-3xl font-extrabold leading-tight">
        {title}
      </h2>
      {intro && <p className="leading-5">{intro}</p>}
    </div>
  )
}
