import { useEffect, useRef } from 'react'
import useReducedMotion from '../hooks/useReducedMotion.js'

const DEFAULT_COLORS = [
  'rgba(154,163,126,0.55)',
  'rgba(233,223,201,0.75)',
  'rgba(107,36,52,0.30)',
  'rgba(185,155,95,0.35)',
]

/* Full-viewport petal drift — a fixed, click-through layer over the whole page. */
export default function Petals({ colors }) {
  const ref = useRef(null)
  const reduced = useReducedMotion()
  const COLORS = colors && colors.length ? colors : DEFAULT_COLORS

  useEffect(() => {
    if (reduced) return
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    let raf

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const spawn = (initial) => ({
      x: Math.random() * canvas.width,
      y: initial ? Math.random() * canvas.height : -12,
      r: 3 + Math.random() * 5,
      vy: 0.35 + Math.random() * 0.7,
      vx: -0.25 + Math.random() * 0.5,
      rot: Math.random() * Math.PI * 2,
      vr: -0.01 + Math.random() * 0.02,
      sway: Math.random() * Math.PI * 2,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    })

    const petals = Array.from({ length: 42 }, () => spawn(true))

    const frame = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      petals.forEach((p, i) => {
        p.sway += 0.012
        p.x += p.vx + Math.sin(p.sway) * 0.4
        p.y += p.vy
        p.rot += p.vr
        if (p.y > canvas.height + 14 || p.x < -20 || p.x > canvas.width + 20) petals[i] = spawn(false)
        ctx.save()
        ctx.translate(p.x, p.y)
        ctx.rotate(p.rot)
        ctx.fillStyle = p.color
        ctx.beginPath()
        ctx.ellipse(0, 0, p.r, p.r * 0.62, 0, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      })
      raf = requestAnimationFrame(frame)
    }
    frame()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [reduced, COLORS.join('|')])

  if (reduced) return null
  return <canvas ref={ref} className="petals" aria-hidden="true" />
}
