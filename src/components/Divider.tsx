interface DividerProps {
  className?: string
}

export default function Divider({ className }: DividerProps) {
  return <div className={`h-px w-full bg-grey-400 ${className}`}></div>
}
