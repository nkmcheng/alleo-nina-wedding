import Nav from './components/Nav.jsx'
import Petals from './components/Petals.jsx'
import Hero from './components/Hero.jsx'
import Details from './components/Details.jsx'
import Venues from './components/Venues.jsx'
import Flowers from './components/Flowers.jsx'
import Attire from './components/Attire.jsx'
import Entourage from './components/Entourage.jsx'
import Interlude from './components/Interlude.jsx'
import Rsvp from './components/Rsvp.jsx'
import Footer from './components/Footer.jsx'
import { MOTIFS } from './theme.js'

/* Motif locked July 2026: Ocean Teal. The base palette lives in index.css;
   MOTIFS.teal supplies the art, guest palette, florals, and copy. */
const motif = MOTIFS.teal

export default function App() {
  return (
    <>
      <Petals colors={motif.petals} />
      <Nav />
      <Hero motif={motif} />
      <Details />
      <Venues />
      <Flowers motif={motif} />
      <Attire motif={motif} />
      <Entourage motif={motif} />
      <Interlude />
      <Rsvp />
      <Footer />
    </>
  )
}
