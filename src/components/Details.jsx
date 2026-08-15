import Reveal from './Reveal.jsx'
import Flourish from './Flourish.jsx'
import cocktailImg from '../assets/cocktail-garden-teal.jpg'
import { ANNOUNCED } from '../siteConfig.js'

const DELIGHTS = [
  'Massage Pop-Up Lounge',
  'Coffee & Matcha Bar',
  'Street Food & Kakanin',
  'Donut Wall',
  'Tequila Shot Wall',
  'Shakes — Spiked & Sweet',
  'Dimsum Bar',
  'Fortune Cookie Wall',
  'DIY Brick Keychains',
  'Photo Booth & Prints',
  'Pizza Corner',
]

export default function Details() {
  return (
    <section id="details">
      <div className="wrap">
        <Reveal as="p" className="sec-label">The Celebration</Reveal>
        <Reveal as="h2">One day, two beautiful places</Reveal>
        <Flourish />
        <div className="detail-grid">
          <Reveal className="detail-card" delay={1}>
            <p className="detail-when">Eleven o'clock in the morning</p>
            <h3>The Ceremony</h3>
            <p>
              Chapel on the Hill
              <br />
              Tagaytay City
              <br />
              <br />
              Kindly be seated by 10:30 AM — the chapel doors open to morning mist and pine.
            </p>
          </Reveal>
          <Reveal className="detail-card" delay={2}>
            <p className="detail-when">Lunch to follow</p>
            <h3>The Reception</h3>
            <p>
              Hillcreek Gardens
              <br />
              Tagaytay City
              <br />
              <br />
              A garden lunch among the murals and arched windows, with music by Acsions.
            </p>
          </Reveal>
          <Reveal className="detail-card" delay={3}>
            <p className="detail-when">Two hundred fifty dear guests</p>
            <h3>The Company</h3>
            <p>Our families, our ninongs and ninangs, and the friends who carried us here — you.</p>
          </Reveal>
        </div>
        {ANNOUNCED.delights && (
          <>
            <Reveal className="delights">
              <h3>Cocktail hour — little delights waiting for you</h3>
              <div className="delight-row">
                {DELIGHTS.map((d) => (
                  <span className="delight" key={d}>
                    {d}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal className="attire-board cocktail-board">
              <img
                src={cocktailImg}
                alt="Watercolor of Hillcreek's sunken garden lawn dressed for cocktail hour — ivory booths, cocktail tables with teal runners, and string lights between the trees"
                loading="lazy"
              />
              <p className="board-caption">The garden lawn at Hillcreek, dressed for cocktail hour</p>
            </Reveal>
          </>
        )}
      </div>
    </section>
  )
}
