'use client'
import { useEffect, useState } from 'react'

interface TimerReservationProps {
  durationInSeconds: number
}

export default function TimerReservation({
  durationInSeconds,
}: TimerReservationProps) {
  const [timer, setTimer] = useState(durationInSeconds)

  useEffect(() => {
    const interval = setInterval(() => setTimer(timer - 1), 1000)
    return () => {
      clearInterval(interval)
    }
  })

  return (
    <span>
      {Math.floor(timer / 60)}m {timer % 60}s
    </span>
  )
}
