import Reveal from './Reveal.jsx'

/** Gold divider flourish whose stroke draws itself on reveal. */
export default function Flourish() {
  return (
    <Reveal className="flourish-wrap">
      <svg className="flourish" viewBox="0 0 140 18" aria-hidden="true">
        <path d="M4 9 C 30 9, 40 3, 70 9 C 100 15, 110 9, 136 9 M70 4 L70 14" />
      </svg>
    </Reveal>
  )
}
