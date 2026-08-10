import { useEffect, useRef } from 'react'

/** Wraps content in a fade-up reveal triggered when it scrolls into view.
 *  delay: stagger step 0-3 (maps to .d1/.d2/.d3). as: wrapper element type. */
export default function Reveal({ children, delay = 0, as: Tag = 'div', className = '', ...rest }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.18 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const delayClass = delay > 0 ? ` d${delay}` : ''
  return (
    <Tag ref={ref} className={`reveal${delayClass} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  )
}
