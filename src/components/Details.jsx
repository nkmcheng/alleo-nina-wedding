import Reveal from './Reveal.jsx'
import Flourish from './Flourish.jsx'
import cocktailImg from '../assets/cocktail-garden-teal.jpg'
import { ANNOUNCED } from '../siteConfig.js'

export default function Details() {
  return (
    <section id="details">
      <div className="wrap">
        <Reveal as="p" className="sec-label">The Celebration</Reveal>
        <Reveal as="h2">One day, two beautiful places</Reveal>
        <Flourish />
        <div className="detail-grid">
          <Reveal className="detail-card" delay={1}>
            <p className="detail-when">Eleven o'clock</p>
            <h3>The Ceremony</h3>
            <p className="detail-where">
              Chapel on the Hill
              <br />
              Tagaytay City
            </p>
            <p className="detail-note">
              Kindly be seated by 10:30 AM — the chapel doors open to morning mist and pine.
            </p>
          </Reveal>
          <Reveal className="detail-card" delay={2}>
            <p className="detail-when">Lunch to follow</p>
            <h3>The Reception</h3>
            <p className="detail-where">
              Hillcreek Gardens
              <br />
              Tagaytay City
            </p>
            <p className="detail-note">
              A garden lunch among the murals and arched windows, with music by Acsions.
            </p>
          </Reveal>
          <Reveal className="detail-card" delay={3}>
            <p className="detail-when">With all our love</p>
            <h3>The Company</h3>
            <p className="detail-note">
              Our families, our ninongs and ninangs, and the friends who carried us here — you.
            </p>
          </Reveal>
        </div>
        {ANNOUNCED.theme && (
          <Reveal className="attire-board cocktail-board">
            <img
              src={cocktailImg}
              alt="Watercolor of Hillcreek's sunken garden lawn dressed for cocktail hour — ivory booths, cocktail tables with teal runners, and string lights between the trees"
              loading="lazy"
            />
            <p className="board-caption">The garden lawn at Hillcreek, dressed for cocktail hour</p>
          </Reveal>
        )}
      </div>
    </section>
  )
}
