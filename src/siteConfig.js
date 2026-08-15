/* ── Launch-phase switches ─────────────────────────────────────────────────
   The first version of the site announces only what's locked in: the date,
   the times, and the venues (with the map). Everything still being
   coordinated shows in the "to be announced" section until its flag below
   is flipped to true.

   Flip a flag → its real section reappears (and its nav link with it), and
   its card drops out of the Coming Soon list. Nothing else to touch. */

export const ANNOUNCED = {
  theme: false, // motif, colors & flowers — hero art and petals stay neutral until true
  delights: false, // cocktail-hour delights list + garden board in The Celebration
  attire: false, // what to wear — waiting on the dress maker & stylists
  entourage: false, // roles & names
  gallery: false, // the ceremony/reception look portraits (reveals the gowns)
  rsvp: false, // opens once invitations with personal links go out
}

/* Cards shown in the Coming Soon section, in page order. Each disappears
   automatically once its flag above turns true. */
export const COMING_SOON = [
  {
    key: 'theme',
    title: 'Theme & Colors',
    note: 'Our motif, palette, and flowers — revealed once we lock them in with our coordinator and stylists.',
  },
  {
    key: 'delights',
    title: 'Cocktail Hour Delights',
    note: 'Little surprises waiting between the ceremony and lunch. We’re keeping these under wraps for now.',
  },
  {
    key: 'attire',
    title: 'What to Wear',
    note: 'A guest dress guide with colors and inspiration — coming after our fittings with the dress maker.',
  },
  {
    key: 'entourage',
    title: 'The Entourage',
    note: 'The dear ones standing with us — names and roles to follow.',
  },
  {
    key: 'rsvp',
    title: 'RSVP',
    note: 'Invitations with your personal RSVP link are on their way — please wait for ours before replying.',
  },
]
