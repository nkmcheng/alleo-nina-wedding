/* ── Launch-phase switches ─────────────────────────────────────────────────
   The first version of the site announces only what's locked in: the date,
   the times, and the venues (with the map). Everything still being
   coordinated shows in the "to be announced" section until its flag below
   is flipped to true.

   Flip a flag → its real section reappears (and its nav link with it), and
   its card drops out of the Coming Soon list. Nothing else to touch. */

export const ANNOUNCED = {
  theme: false, // motif, colors & flowers — petals stay neutral until true; also the cocktail-lawn board
  attire: false, // what to wear — waiting on the dress maker & stylists
  entourage: false, // roles & names
  gallery: false, // the ceremony/reception look portraits (reveals the gowns)
  rsvp: false, // opens once invitations with personal links go out
}

/* Cards shown in the Coming Soon section, in page order. A card stays up
   while any of its keys is still false, and disappears once all are true. */
export const COMING_SOON = [
  {
    keys: ['theme', 'attire'],
    title: 'Theme & What to Wear',
    note: 'Our motif, palette, and flowers — with a guest dress guide to match — revealed once we lock them in with our coordinator, stylists, and dress maker.',
  },
  {
    keys: ['entourage'],
    title: 'The Entourage',
    note: 'The dear ones standing with us — names and roles to follow.',
  },
  {
    keys: ['rsvp'],
    title: 'RSVP',
    note: 'Invitations with your personal RSVP link are on their way — please wait for ours before replying.',
  },
]
