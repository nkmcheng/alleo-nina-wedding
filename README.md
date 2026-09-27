# Alleo & Nina — Wedding Website

One-page wedding site for **February 6, 2027** · Chapel on the Hill (ceremony, 11 AM) → Hillcreek Gardens Tagaytay (reception).

Vite + React, no UI libraries. Watercolor illustrations in `src/assets/` were generated with Codex CLI image generation.

## Run

```bash
npm install
npm run dev      # local dev server
npm run build    # production build in dist/
```

## Personalized invitations & RSVP

The guest list and replies live in a Google Sheet owned by the couple, not in this repo. Each invitation gets its own link, `…/?inv=<code>#rsvp`, which opens the RSVP section at the bottom of the main page (`…/rsvp/?inv=<code>` links are redirected there by `rsvp/index.html`). The RSVP card looks the code up through the sheet's Apps Script web app (`rsvp-sheet/Code.gs`), greets the party by name, offers a name field for each additional guest they may bring, and writes the reply back to their row. Replying again updates the same row; the Log tab keeps every submission.

- One-time setup and day-to-day use: `rsvp-sheet/SETUP.md`
- The web-app URL goes in `RSVP_ENDPOINT` (`src/siteConfig.js`); flip `ANNOUNCED.rsvp` to show the RSVP section and menu link

## Before going live

- **RSVP contact number** — replace the placeholder `RSVP_PHONE` in `src/components/Rsvp.jsx`.
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
