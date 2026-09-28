import Reveal from './Reveal.jsx'
import Flourish from './Flourish.jsx'
import journeyImg from '../assets/getting-there.jpg'
import { ANNOUNCED } from '../siteConfig.js'

/* The practical guide guests ask about: the drive up, the weather, gifts,
   and a short FAQ. Pictures first, one line each. */
const STEPS = [
  { title: 'Leave early', text: 'From Manila, allow 2–3 hours on a Saturday.' },
  { title: 'Head up SLEX', text: 'Then CALAX or the Sta. Rosa exit to Tagaytay.' },
  { title: 'Chapel on the Hill', text: 'Kindly be seated by 10:30 AM.' },
  { title: 'Hillcreek Gardens', text: 'Lunch follows right after the ceremony.' },
]

const FAQ = [
  {
    q: 'Can I bring a plus-one?',
    a: 'Your invitation reserves a set number of seats for you, and reception seating is limited to those seats. Anyone traveling with you is welcome to enjoy Tagaytay or the hotel. If you need an extra seat, just ask in your RSVP.',
  },
  {
    q: 'Are kids welcome?',
    a: 'Yes, little ones are welcome! If they get restless, please step outside with them for a moment so the program can carry on.',
  },
  {
    q: 'Can I take photos?',
    a: 'Of course! Just mind our photographers and try not to block their view or step into the aisle.',
  },
  { q: 'Is there a hashtag?', a: '#NewBeginNINSWithLeo' },
  {
    q: 'When do I RSVP?',
    a: ANNOUNCED.rsvp
      ? 'By January 6, 2027, using the personal link in your invitation.'
      : 'Soon! We’re finalizing the details. Your invitation will include your personal RSVP link.',
  },
  {
    q: 'Where can we stay?',
    a: 'At Hillcreek itself, or a nearby Airbnb. Tagaytay is small, and taxis are easy to find.',
  },
]

export default function GoodToKnow() {
  return (
    <section id="good-to-know" className="band">
      <div className="wrap">
        <Reveal as="p" className="sec-label">Good to Know</Reveal>
        <Reveal as="h2">Before you come up the hill</Reveal>
        <Flourish />

        <Reveal className="attire-board journey-board">
          <img
            src={journeyImg}
            alt="Watercolor journey: leaving Manila at sunrise, the expressway through green hills, arriving at Chapel on the Hill, and lunch at Hillcreek Gardens"
            loading="lazy"
          />
          <ol className="journey-steps">
            {STEPS.map((s, i) => (
              <li key={s.title}>
                <span className="journey-num">{i + 1}</span>
                <strong>{s.title}</strong>
                <span>{s.text}</span>
              </li>
            ))}
          </ol>
        </Reveal>

        <div className="detail-grid gtk-cards">
          <Reveal className="detail-card" delay={1}>
            <p className="detail-when">The weather</p>
            <h3>Sunny, likely warm</h3>
            <p className="detail-note">
              Tagaytay is usually cool in February, but this year’s strong El Niño may bring a
              warmer, sunnier day. Breathable fabrics, and a light wrap for the breezy morning.
            </p>
          </Reveal>
          <Reveal className="detail-card" delay={2}>
            <p className="detail-when">Gifts</p>
            <h3>Your presence is enough</h3>
            <p className="detail-note">
              Celebrating with you is the greatest gift. Should you wish to bless us further, a
              monetary gift toward our first home would be received with so much gratitude.
            </p>
          </Reveal>
          <Reveal className="detail-card" delay={3}>
            <p className="detail-when">Getting around</p>
            <h3>Easy once you’re up</h3>
            <p className="detail-note">
              Tagaytay is small, and taxis are easy to find. Both venues are right in town.
            </p>
          </Reveal>
        </div>

        <Reveal as="h3" className="attire-sub">Questions</Reveal>
        <dl className="faq">
          {FAQ.map((f) => (
            <Reveal className="faq-item" key={f.q}>
              <dt>{f.q}</dt>
              <dd>{f.a}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  )
}
