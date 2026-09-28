import Reveal from './Reveal.jsx'
import Flourish from './Flourish.jsx'
import journeyImg from '../assets/getting-there.jpg'
import { ANNOUNCED } from '../siteConfig.js'

/* The practical guide guests ask about: the drive up, the weather, gifts,
   and a short FAQ. Pictures first, one line each. */
const STEPS = [
  { title: 'Leave early', text: <>From Manila, allow <strong>2–3 hours</strong> on a Saturday.</> },
  { title: 'Head up SLEX', text: <>Then <strong>CALAX</strong> or the <strong>Sta. Rosa exit</strong> to Tagaytay.</> },
  { title: 'Chapel on the Hill', text: <>Kindly be seated by <mark>10:30 AM</mark>.</> },
  { title: 'Hillcreek Gardens', text: <>Lunch follows, <strong>about 30 minutes</strong> from the chapel.</> },
]

const FAQ = [
  {
    q: 'Can I bring a plus-one?',
    a: (
      <>
        Your invitation reserves a set number of seats for you, and{' '}
        <strong>reception seating is limited to those seats</strong>. Anyone traveling with you is
        welcome to enjoy Tagaytay or the hotel. If you need an extra seat,{' '}
        <strong>just ask in your RSVP</strong>.
      </>
    ),
  },
  {
    q: 'Are kids welcome?',
    a: (
      <>
        <strong>Yes, little ones are welcome!</strong> If they get restless, please{' '}
        <strong>step outside with them for a moment</strong> so the program can carry on.
      </>
    ),
  },
  {
    q: 'Can I take photos?',
    a: (
      <>
        <strong>Of course!</strong> Just <strong>mind our photographers</strong> and try not to block
        their view or step into the aisle.
      </>
    ),
  },
  { q: 'Is there a hashtag?', a: <strong>#NewBeginNINSWithLeo</strong> },
  {
    q: 'When do I RSVP?',
    a: ANNOUNCED.rsvp
      ? <>By <strong>January 6, 2027</strong>, using the personal link in your invitation.</>
      : <>Soon! We’re finalizing the details. Your invitation will include your <strong>personal RSVP link</strong>.</>,
  },
  {
    q: 'Where can we stay?',
    a: (
      <>
        At <strong>Hillcreek</strong> itself, or a <strong>nearby Airbnb</strong>. Tagaytay is small,
        and taxis are easy to find.
      </>
    ),
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
              Tagaytay is usually cool in February, but this year’s strong El Niño may bring a{' '}
              <strong>warmer, sunnier day</strong>. <strong>Breathable fabrics</strong>, and a light wrap
              for the breezy morning.
            </p>
          </Reveal>
          <Reveal className="detail-card" delay={2}>
            <p className="detail-when">Gifts</p>
            <h3>Your presence is enough</h3>
            <p className="detail-note">
              <strong>Celebrating with you is the greatest gift.</strong> Should you wish to bless us
              further, a <mark>monetary gift</mark> toward our first home would be received with so much
              gratitude.
            </p>
          </Reveal>
          <Reveal className="detail-card" delay={3}>
            <p className="detail-when">Getting around</p>
            <h3>Easy once you’re up</h3>
            <p className="detail-note">
              Tagaytay is small, and <strong>taxis are easy to find</strong>. Both venues are right in
              town.
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
