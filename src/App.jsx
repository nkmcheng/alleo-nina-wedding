import Nav from './components/Nav.jsx'
import Petals from './components/Petals.jsx'
import Hero from './components/Hero.jsx'
import Details from './components/Details.jsx'
import Venues from './components/Venues.jsx'
import GoodToKnow from './components/GoodToKnow.jsx'
import Flowers from './components/Flowers.jsx'
import Attire from './components/Attire.jsx'
import Entourage from './components/Entourage.jsx'
import Interlude from './components/Interlude.jsx'
import ComingSoon from './components/ComingSoon.jsx'
import Rsvp from './components/Rsvp.jsx'
import Footer from './components/Footer.jsx'
import { MOTIFS } from './theme.js'
import { ANNOUNCED } from './siteConfig.js'

/* Motif locked July 2026: Ocean Teal. The base palette lives in index.css;
   MOTIFS.teal supplies the art, guest palette, florals, and copy. The petals
   use the motif colors now that the entourage colors are public; the hero
   still waits for ANNOUNCED.theme. */
const motif = MOTIFS.teal

export default function App() {
  return (
    <>
      <Petals colors={motif.petals} />
      <Nav />
      <Hero motif={ANNOUNCED.theme ? motif : null} />
      <Details />
      <Venues />
      {ANNOUNCED.guide && <GoodToKnow />}
      {ANNOUNCED.theme && <Flowers motif={motif} />}
      {ANNOUNCED.attire && <Attire motif={motif} />}
      {ANNOUNCED.entourage && <Entourage motif={motif} />}
      <ComingSoon />
      {ANNOUNCED.gallery && <Interlude />}
      {ANNOUNCED.rsvp && <Rsvp />}
      <Footer />
    </>
  )
}
