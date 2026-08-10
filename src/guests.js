/* The guest list. Each key is an invitation code — the part after ?inv= in the
   link each party receives, e.g. https://your-site.com/?inv=delacruz2

   names: how the party is addressed on their RSVP
   seats: how many seats are reserved for that party (caps the form)

   Codes appear in links people share around, so keep them hard to guess for
   other parties: lowercase, no spaces, with a couple of random characters.
   Run `node scripts/print-invite-links.mjs https://your-site.com` to print
   every link ready for sending.

   The three entries below are SAMPLES — replace them with the real list. */
export const GUESTS = {
  'delacruz2-x7': { names: 'Juan & Maria Dela Cruz', seats: 2 },
  'santos4-p3': { names: 'The Santos Family', seats: 4 },
  'reyes1-m9': { names: 'Anna Reyes', seats: 1 },
}

export function findGuest(code) {
  if (!code) return null
  return GUESTS[code.toLowerCase().trim()] ?? null
}
