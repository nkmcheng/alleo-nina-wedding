import Reveal from './Reveal.jsx'
import coupleImg from '../assets/couple.jpg'
import alineImg from '../assets/portrait-aline.jpg'
import mermaidImg from '../assets/portrait-mermaid.jpg'

export default function Interlude() {
  return (
    <div className="interlude">
      <Reveal className="frame">
        <img
          src={coupleImg}
          alt="Watercolor illustration of Alleo in a barong and Niña in her wedding gown, in a garden"
          loading="lazy"
        />
      </Reveal>
      <div className="frame-row">
        <Reveal className="frame small tilt-l">
          <img src={alineImg} alt="Niña and Alleo at the altar in the ceremony look" loading="lazy" />
          <p className="frame-caption">The Ceremony</p>
        </Reveal>
        <Reveal className="frame small tilt-r" delay={1}>
          <img src={mermaidImg} alt="Niña and Alleo at the altar in the reception look" loading="lazy" />
          <p className="frame-caption">The Reception</p>
        </Reveal>
      </div>
      <Reveal as="blockquote">
        “Once and for all, in the hills where the air is cool
        <br />
        and the coffee is strong.”
      </Reveal>
      <Reveal as="cite">#NewBeginNINSWithLeo</Reveal>
    </div>
  )
}
