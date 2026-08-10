import Reveal from './Reveal.jsx'
import Flourish from './Flourish.jsx'
import ladiesImg from '../assets/guests-ladies.jpg'
import gentsImg from '../assets/guests-gentlemen.jpg'
import separatesImg from '../assets/guests-separates-teal.jpg'

/* Guest swatches come from the selected motif (src/theme.js) so they always
   stay clear of that motif's entourage family, the bride's champagne, and
   the ninangs' maroon. */
export default function Attire({ motif }) {
  return (
    <section id="attire">
      <div className="wrap">
        <Reveal as="p" className="sec-label">What to Wear</Reveal>
        <Reveal as="h2">Guest Attire — Smart Casual, Warm Neutrals</Reveal>
        <Flourish />
        <Reveal as="p" className="center-lede">
          Think polished, not stiff. <strong>Ladies:</strong> a dress is lovely but not required —
          a dressy top with a skirt or trousers is just as perfect (no plain tees, please).{' '}
          <strong>Gentlemen:</strong> barong — long or short sleeve — or a polo shirt with
          trousers. No suit needed; Tagaytay mornings are for being comfortable.
        </Reveal>
        <div className="attire-boards three">
          <Reveal className="attire-board" delay={1} key={`ladies-${motif.key}`}>
            <img
              src={motif.art?.guestsLadies ?? ladiesImg}
              alt="Watercolor style board: four guest dresses in warm muted tones"
              loading="lazy"
            />
            <p className="board-caption">Ladies — dresses, long or midi</p>
          </Reveal>
          <Reveal className="attire-board" delay={2}>
            <img
              src={separatesImg}
              alt="Watercolor style board: smart-casual separates — dressy tops with skirts, trousers, and a jumpsuit"
              loading="lazy"
            />
            <p className="board-caption">Ladies — dressy top + skirt or trousers</p>
          </Reveal>
          <Reveal className="attire-board" delay={3}>
            <img
              src={gentsImg}
              alt="Watercolor style board: guest looks for men — long-sleeve barong, short-sleeve barong, and polo with chinos"
              loading="lazy"
            />
            <p className="board-caption">Gentlemen — barong or polo, no suit</p>
          </Reveal>
        </div>
        <Reveal className="swatches" key={motif.key}>
          {motif.guests.map((s) => (
            <div className="sw" key={s.name}>
              <div className="dot" style={{ background: s.hex }} />
              <span>{s.name}</span>
            </div>
          ))}
        </Reveal>
        <Reveal as="p" className="avoid-note">
          {motif.key === 'maroon' ? (
            <>
              Kindly reserve <strong>white, ivory &amp; champagne</strong> for the bride, and{' '}
              <strong>maroons &amp; burgundies</strong> for the entourage and our principal
              sponsors.
            </>
          ) : (
            <>
              Kindly reserve <strong>white, ivory &amp; champagne</strong> for the bride,{' '}
              <strong>{motif.family}</strong> for the entourage, and{' '}
              <strong>antique gold &amp; silver</strong> for our principal sponsors.
            </>
          )}
        </Reveal>
      </div>
    </section>
  )
}
