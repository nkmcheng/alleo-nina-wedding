# Alleo & Nina — Wedding Website

One-page wedding site for **February 6, 2027** · Chapel on the Hill (ceremony, 11 AM) → Hillcreek Gardens Tagaytay (reception).

Vite + React, no UI libraries. Watercolor illustrations in `src/assets/` were generated with Codex CLI image generation.

## Run

```bash
npm install
npm run dev      # local dev server
npm run build    # production build in dist/
```

## Personalized invitations

Each party gets its own link: `https://your-site.com/?inv=<code>`. Codes live in `src/guests.js` with the party's names and reserved seats — the RSVP form greets them by name, pre-fills it, and caps "number attending" at their reservation. A link without a valid code falls back to the generic form.

- Add every party to `src/guests.js` (the three entries there are samples)
- Print all links for sending: `node scripts/print-invite-links.mjs https://your-site.com`
- Codes are visible in shared links — keep them unguessable (a couple of random characters at the end)

## Before going live

- **Guest list** — replace the sample entries in `src/guests.js` with the real 250-guest list.
- **RSVP inbox** — `src/components/Rsvp.jsx` sends responses via `mailto:` to a placeholder address (`RSVP_EMAIL`). Replace it with the real wedding inbox, or swap the form for a Google Form link. Also replace the placeholder contact number (`RSVP_PHONE`).
- **Hillcreek stay discount** — the stay card in `src/components/Venues.jsx` says "discounted rate" without a number; once Hillcreek confirms (10% or 15%), put the figure in the copy. Also confirm their preferred booking link (currently the Google Maps search) and verify the Airbnb search URL lands near the venue.
- **Hashtag** — `#NINAkawAngPusoNiLEO` in `src/components/Interlude.jsx`.
- **Deploy** — `dist/` is fully static; drop it on Vercel, Netlify, or GitHub Pages.

## Motif — locked: Ocean Teal

Locked July 2026. Deep `#265D64` (maid of honor) · medium ocean teal `#457E7C` (bridesmaids, mothers) · seafoam `#93BAB4` (accents) — hard-coded in `src/index.css` (the `--olive*`/`--sage` variable names are kept from the first draft). `src/theme.js` `MOTIFS.teal` supplies the guest palette, florals, copy, and teal art set; the other motif entries remain for reference only. The couple's peg photos are in `design/pegs-teal/`.

## Project extras

- `design/style-guide.html` — the full wedding style guide & RSVP wording suite (motif, entourage attire, florals, cocktail-hour delights, printable RSVP card wording). Kept out of `public/` on purpose so it is never deployed — open it directly in a browser.
- `design/art-source/` — original full-resolution Codex-generated watercolor PNGs (the site uses optimized JPEGs from `src/assets/`).

## Design notes

- Palette and typography follow the wedding style guide (olive/sage motif, maroon for principal sponsors, ecru barong, ivory ground, gold accents).
- Guest palette deliberately excludes champagne — both bridal gowns are champagne-toned.
- Single committed light theme (invitation aesthetic); `prefers-reduced-motion` disables petals and animations.
