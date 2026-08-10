import Reveal from './Reveal.jsx'
import Flourish from './Flourish.jsx'
import chapelImg from '../assets/chapel.jpg'
import receptionImg from '../assets/reception.jpg'
import mapImg from '../assets/map-teal.jpg'

export default function Venues() {
  return (
    <section id="venues" className="band">
      <div className="wrap">
        <Reveal as="p" className="sec-label">Where</Reveal>
        <Reveal as="h2">The Venues</Reveal>
        <Flourish />

        <Reveal className="venue">
          <div className="pic">
            <img
              src={chapelImg}
              alt="Watercolor illustration of Chapel on the Hill, an octagonal wooden chapel among pines"
              loading="lazy"
            />
          </div>
          <div className="info">
            <p className="detail-when">Ceremony · 11:00 AM</p>
            <h3>Chapel on the Hill</h3>
            <p>
              A beloved octagonal chapel in a quiet garden courtyard — terracotta roof, open
              verandas, and a brick path to its doors. Mornings here are cool and misty; bring a
              light wrap.
            </p>
            <a
              className="btn"
              href="https://www.google.com/maps/search/Chapel+on+the+Hill+Tagaytay"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in Maps
            </a>
          </div>
        </Reveal>

        <Reveal className="venue flip">
          <div className="pic">
            <img
              src={receptionImg}
              alt="Watercolor illustration of the Hillcreek Gardens reception hall with teal mural walls"
              loading="lazy"
            />
          </div>
          <div className="info">
            <p className="detail-when">Reception · Lunch</p>
            <h3>Hillcreek Gardens Tagaytay</h3>
            <p>
              A garden estate of arched windows, painted murals, and chandeliers — ten minutes from
              the chapel. Lunch, toasts, and dancing follow the ceremony.
            </p>
            <a
              className="btn"
              href="https://www.google.com/maps/search/Hillcreek+Gardens+Tagaytay"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in Maps
            </a>
          </div>
        </Reveal>

        <Reveal className="venue-map">
          <div className="map-frame">
            <img
              src={mapImg}
              alt="Illustrated watercolor map: a winding teal road from Chapel on the Hill to Hillcreek Gardens, with Taal lake in the corner"
            />
            <span className="map-label chapel">
              <span className="map-dot" />
              Chapel on the Hill
            </span>
            <span className="map-label venue">
              <span className="map-dot" />
              Hillcreek Gardens
            </span>
          </div>
          <p className="board-caption">
            From “I do” to the first dance — 8.6 km, about 13 minutes of scenic drive
          </p>
        </Reveal>

        <Reveal className="stay-card">
          <p className="detail-when">Staying the night?</p>
          <h3>Stay where the celebration is</h3>
          <p>
            <strong>Hillcreek Gardens has rooms right on the estate</strong> — wake up steps from
            the reception, with the gardens to yourselves in the morning. Our guests enjoy a{' '}
            <strong>discounted rate</strong>; just mention the Alleo &amp; Nina wedding when you
            book. Prefer your own space? There are lovely Airbnbs minutes away.
          </p>
          <div className="stay-actions">
            {/* TODO: confirm Hillcreek's booking page + final guest discount (10–15%). */}
            <a
              className="btn"
              href="https://www.google.com/maps/search/Hillcreek+Gardens+Tagaytay"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Room at Hillcreek
            </a>
            <a
              className="btn"
              href="https://www.airbnb.com/s/Hillcreek-Gardens-Tagaytay--Alfonso--Cavite--Philippines/homes"
              target="_blank"
              rel="noopener noreferrer"
            >
              Browse Airbnbs Nearby
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
