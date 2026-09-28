import Reveal from './Reveal.jsx'
import Flourish from './Flourish.jsx'
import { ANNOUNCED, COMING_SOON } from '../siteConfig.js'

export default function ComingSoon() {
  const pending = COMING_SOON.filter((item) => item.keys.some((k) => !ANNOUNCED[k]))
  if (pending.length === 0) return null
  const single = pending.length === 1

  return (
    <section id="coming-soon" className="band">
      <div className="wrap">
        <Reveal as="p" className="sec-label">Still in the works</Reveal>
        <Reveal as="h2">{single ? 'Almost there' : 'A few things we’re saving for later'}</Reveal>
        <Flourish />
        <div className={`detail-grid${single ? ' tba-single' : ''}`}>
          {pending.map((item, i) => (
            <Reveal className="detail-card tba-card" key={item.title} delay={Math.min(i + 1, 3)}>
              <p className="detail-when">To be announced</p>
              <h3>{item.title}</h3>
              <p>{item.note}</p>
            </Reveal>
          ))}
        </div>
        {!single && (
          <Reveal as="p" className="tba-foot">
            We’re finalizing these with our coordinator, dress maker, and stylists.
            <br />
            Check back soon!
          </Reveal>
        )}
      </div>
    </section>
  )
}
