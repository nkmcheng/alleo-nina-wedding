import { useEffect, useState } from 'react'
import { ANNOUNCED } from '../siteConfig.js'

const LINKS = [
  { href: '#details', label: 'The Day' },
  { href: '#venues', label: 'Venues' },
  { href: '#good-to-know', label: 'Good to Know', flag: 'guide' },
  { href: '#flowers', label: 'Flowers', flag: 'theme' },
  { href: '#attire', label: 'Attire', flag: 'attire' },
  { href: '#entourage', label: 'Entourage', flag: 'entourage' },
  { href: '#rsvp', label: 'RSVP', flag: 'rsvp' },
].filter((l) => !l.flag || ANNOUNCED[l.flag])

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = LINKS.map((l) => document.querySelector(l.href)).filter(Boolean)
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive('#' + e.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <a className="nav-mono" href="#home" aria-label="Back to top">
        A·N
      </a>
      <div className="nav-links">
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} className={active === l.href ? 'active' : ''}>
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  )
}
