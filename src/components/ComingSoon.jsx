import Reveal from './Reveal.jsx'
import Flourish from './Flourish.jsx'
import { ANNOUNCED, COMING_SOON } from '../siteConfig.js'

export default function ComingSoon() {
  const pending = COMING_SOON.filter((item) => !ANNOUNCED[item.key])
  if (pending.length === 0) return null

  return (
    <section id="coming-soon" className="band">
      <div className="wrap">
        <Reveal as="p" className="sec-label">Still in the works</Reveal>
        <Reveal as="h2">A few things we’re saving for later</Reveal>
        <Flourish />
        <div className="detail-grid">
          {pending.map((item, i) => (
            <Reveal className="detail-card tba-card" key={item.key} delay={Math.min(i + 1, 3)}>
              <p className="detail-when">To be announced</p>
              <h3>{item.title}</h3>
              <p>{item.note}</p>
            </Reveal>
          ))}
        </div>
        <Reveal as="p" className="tba-foot">
          We’re finalizing these with our coordinator, dress maker, and stylists —
          <br />
          check back soon.
        </Reveal>
      </div>
    </section>
  )
}
