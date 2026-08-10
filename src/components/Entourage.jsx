import Reveal from './Reveal.jsx'
import Flourish from './Flourish.jsx'
import { capitalize } from '../theme.js'

export default function Entourage({ motif }) {
  const { mid, light } = motif.names
  const roles = [
    { chips: [motif.deep], title: 'Maid of Honor', text: `Deep ${mid} gown — one shade richer than the bridesmaids.`, delay: 1 },
    { chips: [motif.mid], title: 'Bridesmaids', text: `${capitalize(mid)}-to-${light} chiffon gowns, each in her own silhouette.`, delay: 2 },
    { chips: ['#EFE4CD'], title: 'Groomsmen & Fathers', text: 'Long-sleeve ecru barong with black trousers and shoes.', delay: 3 },
    { chips: [motif.light], title: 'Mothers', text: `${capitalize(light)} beaded Filipiniana — same color family, each her own cut.`, delay: 1 },
    { chips: ['#B08D4F', '#99A0A8'], title: 'Ninangs', text: 'Antique gold or silver grey, in any style she loves — gown, formal dress, or Filipiniana. Only the color is asked; the silhouette is hers.', delay: 2 },
    { chips: ['#EFE4CD'], title: 'Ninongs', text: 'Long-sleeve barong, black slacks, and an optional gold or silver pocket square.', delay: 3 },
  ]

  return (
    <section id="entourage" className="band">
      <div className="wrap">
        <Reveal as="p" className="sec-label">The Bridal Party</Reveal>
        <Reveal as="h2">Entourage Colors</Reveal>
        <Flourish />
        {motif.art?.entourage && (
          <Reveal className="attire-board ent-board" key={`ent-${motif.key}`}>
            <img
              src={motif.art.entourage}
              alt={`Watercolor style board: the entourage in ${motif.names.mid} — maid of honor, bridesmaids, mother in Filipiniana, and ninangs in antique gold and silver grey`}
              loading="lazy"
            />
            <p className="board-caption">
              Maid of honor · bridesmaids · mothers · ninang
            </p>
          </Reveal>
        )}
        <div className="ent-grid">
          {roles.map((r) => (
            <Reveal className="ent-card" delay={r.delay} key={r.title}>
              <h3>
                {r.chips.map((c) => (
                  <span className="chip" style={{ background: c }} key={c} />
                ))}
                {r.title}
              </h3>
              <p>{r.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
