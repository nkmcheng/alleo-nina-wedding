import Reveal from './Reveal.jsx'
import Flourish from './Flourish.jsx'

/* Ivory heroes and greenery are constant across motifs — only the accent
   blooms and the styling note follow the selected motif. */
const HEROES = ['Ivory roses', 'Casablanca lilies', 'White chrysanthemums', "Baby's breath", 'White carnations']
const GREENERY = ['Silver-dollar eucalyptus', 'Italian ruscus', 'Ferns']

export default function Flowers({ motif }) {
  return (
    <section id="flowers">
      <div className="wrap">
        <Reveal as="p" className="sec-label">The Blooms</Reveal>
        <Reveal as="h2">Flowers That Follow the Motif</Reveal>
        <Flourish />
        <Reveal as="p" className="center-lede">
          Every version keeps the same ivory backbone and fresh greenery — only the accent blooms
          change with the motif.
        </Reveal>
        <div className="detail-grid">
          <Reveal className="detail-card" delay={1}>
            <p className="detail-when">Always</p>
            <h3>Ivory Heroes</h3>
            <ul className="bloom-list">
              {HEROES.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="detail-card" delay={2} key={motif.key}>
            <p className="detail-when">{motif.label} accents</p>
            <h3>Motif Accents</h3>
            <ul className="bloom-list">
              {motif.flowers.accents.map((f) => (
                <li key={f.name}>
                  <span className="chip" style={{ background: f.hex }} />
                  {f.name}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="detail-card" delay={3}>
            <p className="detail-when">Always</p>
            <h3>Greenery</h3>
            <ul className="bloom-list">
              {GREENERY.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </Reveal>
        </div>
        {motif.art?.flowers && (
          <Reveal className="attire-board bloom-board" key={`bloomart-${motif.key}`}>
            <img
              src={motif.art.flowers}
              alt={`Watercolor floral study for the ${motif.label} motif — ivory blooms with motif accents and greenery`}
              loading="lazy"
            />
            <p className="board-caption">The {motif.label} arrangement</p>
          </Reveal>
        )}
        <Reveal as="p" className="bloom-note" key={`note-${motif.key}`}>
          {motif.flowers.note}
        </Reveal>
        <Reveal as="p" className="bloom-warning">
          Whichever motif wins: the date is one week before Valentine's, when flower prices surge —
          book the florist early with a locked price list.
        </Reveal>
      </div>
    </section>
  )
}
