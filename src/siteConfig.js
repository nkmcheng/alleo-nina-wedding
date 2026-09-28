/* ── Launch-phase switches ─────────────────────────────────────────────────
   The first version of the site announces only what's locked in: the date,
   the times, and the venues (with the map). Everything still being
   coordinated shows in the "to be announced" section until its flag below
   is flipped to true.

   Flip a flag → its real section reappears (and its nav link with it), and
   its card drops out of the Coming Soon list. Nothing else to touch. */

export const ANNOUNCED = {
  theme: false, // motif, colors & flowers — petals stay neutral until true; also the cocktail-lawn board
  attire: true, // what to wear — published Sep 2026
  entourage: true, // entourage colors — published Sep 2026
  guide: true, // Good to Know: getting there, weather, gifts, FAQ
  gallery: false, // the ceremony/reception look portraits (reveals the gowns)
  rsvp: false, // opens once invitations with personal links go out
}

/* The RSVP Google Sheet's web-app URL (…/exec) — see rsvp-sheet/SETUP.md. Until
   it's set, the RSVP card asks guests to use their invitation link. */
export const RSVP_ENDPOINT =
  import.meta.env.VITE_RSVP_ENDPOINT ||
  'https://script.google.com/macros/s/AKfycbx9n3Ay0JjmBFLKc9wGs4fCbhrV9RekXKYTrZOT4Jv2r4G3xC4qrhWDFfpeNl8_q5B6/exec'

/* Cards shown in the Coming Soon section, in page order. A card stays up
   while any of its keys is still false, and disappears once all are true.
   Only things guests act on get a card — the motif, flowers, and entourage
   can appear whenever they're ready without being teased here. */
export const COMING_SOON = [
  {
    keys: ['attire'],
    title: 'What to Wear',
    note: 'A simple guest dress guide, with sample outfits and colors — coming soon.',
  },
  {
    keys: ['rsvp'],
    title: 'RSVP',
    note: 'Invitations with your personal RSVP link are on their way — please wait for ours before replying.',
  },
]
