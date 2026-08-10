/* Prints one invitation link per party, ready to paste into messages.
   Usage: node scripts/print-invite-links.mjs https://your-site.com */
import { GUESTS } from '../src/guests.js'

const base = (process.argv[2] ?? 'http://localhost:5173').replace(/\/$/, '')

for (const [code, guest] of Object.entries(GUESTS)) {
  console.log(`${guest.names} (${guest.seats} seat${guest.seats > 1 ? 's' : ''})`)
  console.log(`  ${base}/?inv=${code}\n`)
}
console.log(`${Object.keys(GUESTS).length} invitation links.`)
