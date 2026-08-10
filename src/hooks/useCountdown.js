import { useEffect, useState } from 'react'

function diffParts(target) {
  const ms = target - Date.now()
  if (ms <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true }
  const s = Math.floor(ms / 1000)
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor(s / 3600) % 24,
    minutes: Math.floor(s / 60) % 60,
    seconds: s % 60,
    done: false,
  }
}

export default function useCountdown(isoDate) {
  const target = new Date(isoDate).getTime()
  const [parts, setParts] = useState(() => diffParts(target))

  useEffect(() => {
    const id = setInterval(() => setParts(diffParts(target)), 1000)
    return () => clearInterval(id)
  }, [target])

  return parts
}
