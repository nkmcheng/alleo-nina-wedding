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
   MOTIFS.teal supplies the art, guest palette, florals, and copy. Until
   ANNOUNCED.theme is true the hero and petals stay neutral so the motif
   isn't revealed early. */
const motif = MOTIFS.teal

/* Ivory and gold only — no hint of the motif. */
const NEUTRAL_PETALS = ['rgba(233,223,201,0.75)', 'rgba(220,205,175,0.55)', 'rgba(185,155,95,0.35)']

export default function App() {
  return (
    <>
      <Petals colors={ANNOUNCED.theme ? motif.petals : NEUTRAL_PETALS} />
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
