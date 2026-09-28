import entourageTeal from './assets/entourage-teal.jpg'
import flowersTeal from './assets/flowers-teal.jpg'
import heroTeal from './assets/hero-teal.jpg'

/* The three motif candidates Niña & Alleo are weighing, plus the recommended olive.
   deep/mid/light fill the site's three motif slots (--olive-deep/--olive/--sage).
   Each motif carries its own guest palette: warm muted tones that stay clearly
   apart from that motif's entourage family, the mothers' colors, the bride's
   champagne, and the principal sponsors' colors. */
const GUEST_COLORS = {
  taupe: { name: 'Taupe', hex: '#B8A794' },
  dustyRose: { name: 'Dusty Rose', hex: '#C9A29B' },
  terracotta: { name: 'Terracotta', hex: '#B4715A' },
  dustyBlue: { name: 'Dusty Blue', hex: '#91A3B0' },
  warmGrey: { name: 'Warm Grey', hex: '#A9A49A' },
  camel: { name: 'Camel', hex: '#C19A6B' },
  softSage: { name: 'Sage', hex: '#A8AE9C' },
  mocha: { name: 'Mocha', hex: '#8A6F5E' },
  mauve: { name: 'Mauve', hex: '#9E7F8E' },
  blush: { name: 'Blush', hex: '#E3BFB6' },
  peach: { name: 'Peach', hex: '#E8B79A' },
  olive: { name: 'Olive', hex: '#7D7F55' },
  lavender: { name: 'Lavender', hex: '#B7A9CC' },
  dustyLilac: { name: 'Dusty Lilac', hex: '#A895AC' },
  powderBlue: { name: 'Powder Blue', hex: '#B3C7D9' },
  beige: { name: 'Beige', hex: '#D6C4A8' },
  chocolate: { name: 'Chocolate', hex: '#5C4033' },
}
const g = (...keys) => keys.map((k) => GUEST_COLORS[k])

export const MOTIFS = {
  olive: {
    key: 'olive',
    label: 'Olive & Sage',
    deep: '#4F5A38',
    mid: '#6D7752',
    light: '#9AA37E',
    family: 'greens',
    names: { mid: 'olive', light: 'sage' },
    guests: g('taupe', 'dustyRose', 'terracotta', 'dustyBlue', 'warmGrey'),
    flowers: {
      accents: [
        { name: 'Burgundy roses', hex: '#6B2434' },
        { name: 'Cockscomb celosia', hex: '#7A1F2B' },
        { name: 'Red anthurium', hex: '#8C2F39' },
      ],
      note: 'Maroon blooms thread through the ivory arrangements and echo the ninangs. The greens come from the foliage itself, so this motif needs no dyed flowers at all.',
    },
    petals: ['rgba(154,163,126,0.55)', 'rgba(233,223,201,0.75)', 'rgba(107,36,52,0.30)', 'rgba(185,155,95,0.35)'],
  },
  teal: {
    key: 'teal',
    label: 'Ocean Teal',
    /* Tuned to the couple's pegs: medium ocean teal gowns, deep teal MOH. */
    deep: '#265D64',
    mid: '#457E7C',
    light: '#93BAB4',
    family: 'teals',
    names: { mid: 'ocean teal', light: 'seafoam' },
    /* The mothers wear their own colors rather than the motif — hexes
       sampled from their peg gowns (Sep 2026). */
    mothers: [
      { name: 'Emerald green', hex: '#1C5440', who: 'mother of the bride' },
      { name: 'Steel blue', hex: '#56708F', who: 'mother of the groom' },
    ],
    /* Five suggested guest colors (Sep 2026) — one soft shade per family, all
       worn in the attire boards. Suggestions only; the site says so. */
    guests: g('dustyRose', 'softSage', 'lavender', 'dustyBlue', 'taupe'),
    art: { hero: heroTeal, entourage: entourageTeal, flowers: flowersTeal },
    flowers: {
      accents: [
        { name: 'Blue hydrangea', hex: '#6E93B8' },
        { name: 'Misty blue limonium', hex: '#A5B3CB' },
        { name: 'Eryngium thistle', hex: '#4C7480' },
      ],
      note: 'True teal blooms don’t exist in nature, so flowers stay ivory with dusty-blue accents, and the teal itself lives in ribbons, table runners, candles, and stationery.',
    },
    /* Ivory, seafoam, ocean teal, dusty-blue hydrangea, and a little gold. */
    petals: [
      'rgba(233,223,201,0.8)',
      'rgba(147,186,180,0.6)',
      'rgba(69,126,124,0.4)',
      'rgba(145,163,176,0.5)',
      'rgba(185,155,95,0.35)',
    ],
  },
  maroon: {
    key: 'maroon',
    label: 'Maroon',
    deep: '#571C2A',
    mid: '#7A2B3D',
    light: '#A9707F',
    family: 'maroons',
    names: { mid: 'maroon', light: 'mauve' },
    guests: g('taupe', 'dustyBlue', 'softSage', 'camel', 'warmGrey'),
    flowers: {
      accents: [
        { name: 'Burgundy roses', hex: '#571C2A' },
        { name: 'Deep-red carnations', hex: '#7A2B3D' },
        { name: 'Mauve carnations', hex: '#A9707F' },
      ],
      note: 'The richest floral option: burgundy roses, celosia, and deep-red carnations are abundant from Baguio supply, so the motif color can live fully in the flowers themselves.',
    },
    petals: ['rgba(169,112,127,0.50)', 'rgba(233,223,201,0.75)', 'rgba(87,28,42,0.32)', 'rgba(185,155,95,0.35)'],
  },
  navy: {
    key: 'navy',
    label: 'Royal Navy',
    deep: '#24325B',
    mid: '#33477A',
    light: '#8C9BB8',
    family: 'blues',
    names: { mid: 'navy', light: 'dusty blue' },
    guests: g('taupe', 'dustyRose', 'terracotta', 'softSage', 'warmGrey'),
    flowers: {
      accents: [
        { name: 'White anemones, inky centers', hex: '#33477A' },
        { name: 'Blue delphinium', hex: '#5B74A8' },
        { name: 'Blue statice', hex: '#8C9BB8' },
      ],
      note: 'Navy has no natural bloom. Anemones’ near-black centers plus delphinium give the deepest look nature allows, and the navy itself comes from ribbons, linens, and candle holders.',
    },
    petals: ['rgba(140,155,184,0.50)', 'rgba(233,223,201,0.75)', 'rgba(36,50,91,0.32)', 'rgba(185,155,95,0.35)'],
  },
}

export const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1)
