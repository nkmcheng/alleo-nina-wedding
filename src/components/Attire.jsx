import Reveal from './Reveal.jsx'
import Flourish from './Flourish.jsx'
import ladiesImg from '../assets/guests-ladies-garden.jpg'
import gentsImg from '../assets/guests-gents-garden.jpg'
import couplesImg from '../assets/guests-couples-garden.jpg'

/* Garden dressy casual. Kept deliberately short — the boards do the
   explaining. The palette is a suggestion; the only firm ask is no bridal white. */
export default function Attire({ motif }) {

  return (
    <section id="attire">
      <div className="wrap">
        <Reveal as="p" className="sec-label">What to Wear</Reveal>
        <Reveal as="h2">Garden Dressy Casual</Reveal>
        <Flourish />
        <Reveal as="p" className="center-lede">
          Come looking your best: <strong>polished and put-together</strong>, but{' '}
          <mark>no suits or gowns needed</mark>.
        </Reveal>

        <div className="attire-boards">
          <Reveal className="attire-board" delay={1}>
            <img
              src={ladiesImg}
              alt="Watercolor style board: five women in a knee-length dress, blouse with trousers, tea-length dress, jumpsuit, and blouse with midi skirt"
              loading="lazy"
            />
            <p className="board-caption">Ladies</p>
          </Reveal>
          <Reveal className="attire-board" delay={2}>
            <img
              src={gentsImg}
              alt="Watercolor style board: four men in a knit polo with chinos, linen shirt, short-sleeve barong, and rolled-sleeve shirt with sneakers"
              loading="lazy"
            />
            <p className="board-caption">Gentlemen</p>
          </Reveal>
        </div>

        <Reveal className="attire-board couples-board">
          <img
            src={couplesImg}
            alt="Watercolor style board: three guest couples: short-sleeve shirt with a knee-length dress, knit polo with a midi wrap dress, and a barong with a blouse and midi skirt"
            loading="lazy"
          />
          <p className="board-caption">Guest looks</p>
        </Reveal>

        <Reveal as="h3" className="attire-sub">Suggested colors</Reveal>
        <Reveal as="p" className="palette-note">Optional. Wear what you love!</Reveal>
        <Reveal className="swatches palette" key={motif.key}>
          {motif.guests.map((s) => (
            <div className="sw" key={s.name}>
              <div className="dot" style={{ background: s.hex }} />
              <span>{s.name}</span>
            </div>
          ))}
        </Reveal>
        <Reveal as="p" className="avoid-note">
          Please avoid <strong>white, ivory, cream &amp; champagne</strong>, since those are for the bride.
        </Reveal>
      </div>
    </section>
  )
}
