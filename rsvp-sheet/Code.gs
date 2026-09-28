/* Alleo & Niña — RSVP backend (Google Apps Script).

   Lives inside the RSVP Google Sheet (Extensions → Apps Script) and is
   deployed as a web app. The wedding site calls it to look up one party by
   their invitation code and to save their reply, so the guest list never
   appears in the site's public code. See rsvp-sheet/SETUP.md.

   Guests tab — one row per invitation:
     Name · Role · Additional guests · Contact · Code · Link · Sent? ·
     Response · Total attending · Extra seats requested · Guest names ·
     Notes · Replied on
   The couple fills Name, Role, Additional guests, and Contact (and ticks
   Sent?); the RSVP menu fills Code and Link; replies fill the last six.
   Guests may bring fewer people than reserved, or ask for up to
   MAX_EXTRA more — extras are only a request for the couple to confirm.
   Columns are found by their header, so they can be moved or new ones added.
   Log tab keeps every submission, including changed answers. */

const SITE_URL = 'https://nkmcheng.github.io/alleo-nina-wedding/'

const GUESTS_TAB = 'Guests'
const LOG_TAB = 'Log'
const GUEST_HEADERS = [
  'Name',
  'Role',
  'Additional guests',
  'Contact',
  'Code',
  'Link',
  'Sent?',
  'Response',
  'Total attending',
  'Extra seats requested',
  'Guest names',
  'Notes',
  'Replied on',
]
const LOG_HEADERS = [
  'Timestamp',
  'Code',
  'Name',
  'Response',
  'Total attending',
  'Guest names',
  'Notes',
  'Extra seats requested',
]
const MAX_EXTRA = 2
const ROLES = ['Principal Sponsor', 'Secondary Sponsor', 'Entourage', 'Family', 'Guest']

/* Header name → 0-based column index, read from the tab's first row. */
function columnsOf(sheet) {
  const width = Math.max(sheet.getLastColumn(), 1)
  const headers = sheet
    .getRange(1, 1, 1, width)
    .getValues()[0]
    .map((h) => String(h).trim().toLowerCase())
  const col = {}
  GUEST_HEADERS.forEach((h) => {
    const i = headers.indexOf(h.toLowerCase())
    if (i >= 0) col[h] = i
  })
  return col
}

/* ── Sheet menu ─────────────────────────────────────────────────────────── */

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('RSVP')
    .addItem('Set up tabs', 'setUpTabs')
    .addItem('Create missing codes & links', 'createMissingLinks')
    .addToUi()
}

function setUpTabs() {
  const ss = SpreadsheetApp.getActive()
  const guests = ss.getSheetByName(GUESTS_TAB) || ss.insertSheet(GUESTS_TAB)
  const log = ss.getSheetByName(LOG_TAB) || ss.insertSheet(LOG_TAB)
  addMissingHeaders(guests, GUEST_HEADERS)
  addMissingHeaders(log, LOG_HEADERS)

  const col = columnsOf(guests)
  const rows = guests.getMaxRows() - 1
  guests.getRange(2, col['Sent?'] + 1, rows, 1).insertCheckboxes()
  guests
    .getRange(2, col['Additional guests'] + 1, rows, 1)
    .setDataValidation(
      SpreadsheetApp.newDataValidation().requireNumberBetween(0, 20).setAllowInvalid(false).build(),
    )
  guests
    .getRange(2, col.Role + 1, rows, 1)
    .setDataValidation(
      SpreadsheetApp.newDataValidation().requireValueInList(ROLES, true).setAllowInvalid(true).build(),
    )
  const sheet1 = ss.getSheetByName('Sheet1')
  if (sheet1 && sheet1.getLastRow() === 0 && ss.getSheets().length > 2) ss.deleteSheet(sheet1)
}

/* Writes the headers on a fresh tab; on an existing one, appends only the
   missing headers at the end so nothing already filled in moves. */
function addMissingHeaders(sheet, headers) {
  const width = sheet.getLastColumn()
  const existing = width
    ? sheet.getRange(1, 1, 1, width).getValues()[0].map((h) => String(h).trim().toLowerCase())
    : []
  const missing = existing.some(Boolean)
    ? headers.filter((h) => !existing.includes(h.toLowerCase()))
    : headers
  const start = existing.some(Boolean) ? width + 1 : 1
  if (missing.length) sheet.getRange(1, start, 1, missing.length).setValues([missing])
  sheet.getRange(1, 1, 1, sheet.getLastColumn()).setFontWeight('bold')
  sheet.setFrozenRows(1)
}

/* Gives every named row without a code a hard-to-guess one, plus its link. */
function createMissingLinks() {
  const sheet = SpreadsheetApp.getActive().getSheetByName(GUESTS_TAB)
  const COL = columnsOf(sheet)
  const rows = sheet.getDataRange().getValues()
  const used = new Set(rows.slice(1).map((r) => String(r[COL.Code]).trim()).filter(Boolean))
  let made = 0
  for (let i = 1; i < rows.length; i++) {
    const name = String(rows[i][COL.Name]).trim()
    if (!name) continue
    let code = String(rows[i][COL.Code]).trim()
    if (!code) {
      do code = makeCode(name)
      while (used.has(code))
      used.add(code)
      sheet.getRange(i + 1, COL.Code + 1).setValue(code)
      made++
    }
    sheet.getRange(i + 1, COL.Link + 1).setValue(linkFor(code))
  }
  SpreadsheetApp.getActive().toast(`${made} new code${made === 1 ? '' : 's'} created.`, 'RSVP')
}

function makeCode(name) {
  const words = name.toLowerCase().replace(/[^a-z\s]/g, '').split(/\s+/).filter(Boolean)
  const word = (words[words.length - 1] || 'guest').slice(0, 10)
  const chars = 'abcdefghjkmnpqrstuvwxyz23456789'
  let tail = ''
  for (let i = 0; i < 4; i++) tail += chars[Math.floor(Math.random() * chars.length)]
  return `${word}-${tail}`
}

function linkFor(code) {
  return `${SITE_URL}?inv=${encodeURIComponent(code)}#rsvp`
}

/* ── Web app ────────────────────────────────────────────────────────────── */

/* GET ?inv=<code> → the party's name, allowance, and any earlier reply. */
function doGet(e) {
  const found = findParty(e && e.parameter && e.parameter.inv)
  if (!found) return json({ ok: false, error: 'not-found' })
  const { row: r, col: COL } = found
  const role = COL.Role === undefined ? '' : String(r[COL.Role] || '').trim()
  return json({
    ok: true,
    name: r[COL.Name],
    role,
    additional: Number(r[COL['Additional guests']]) || 0,
    reply: r[COL.Response]
      ? {
          response: r[COL.Response],
          total: Number(r[COL['Total attending']]) || 0,
          guestNames: String(r[COL['Guest names']] || ''),
          notes: COL.Notes === undefined ? '' : String(r[COL.Notes] || ''),
          repliedOn: isoOrNull(r[COL['Replied on']]),
        }
      : null,
  })
}

/* POST {inv, attending, count, guests: [names of everyone coming], notes}
   → saves the reply on the party's row. */
function doPost(e) {
  let data
  try {
    data = JSON.parse(e.postData.contents)
  } catch (err) {
    return json({ ok: false, error: 'bad-request' })
  }
  const lock = LockService.getScriptLock()
  lock.waitLock(10000)
  try {
    const found = findParty(data.inv)
    if (!found) return json({ ok: false, error: 'not-found' })
    const COL = found.col
    const reserved = 1 + (Number(found.row[COL['Additional guests']]) || 0)
    const attending = data.attending === true
    const names = (Array.isArray(data.guests) ? data.guests : [])
      .map((n) => String(n).trim().slice(0, 80))
      .filter(Boolean)
    const asked = Math.round(Number(data.count)) || names.length || 1
    const total = attending ? Math.min(Math.max(asked, 1), reserved + MAX_EXTRA) : 0
    const guestNames = names.slice(0, total).map(plainText)
    const extra = Math.max(0, total - reserved)
    const notes = plainText(String(data.notes || '').trim().slice(0, 500))
    const response = attending ? 'Accepts' : 'Declines'
    const now = new Date()
    const write = (header, value) => {
      if (COL[header] !== undefined) found.sheet.getRange(found.rowNumber, COL[header] + 1).setValue(value)
    }
    write('Response', response)
    write('Total attending', total)
    write('Extra seats requested', extra || '')
    write('Guest names', guestNames.join(', '))
    write('Notes', notes)
    write('Replied on', now)
    const log = SpreadsheetApp.getActive().getSheetByName(LOG_TAB)
    log.appendRow([
      now,
      found.row[COL.Code],
      found.row[COL.Name],
      response,
      total,
      guestNames.join(', '),
      notes,
      extra || '',
    ])
    return json({ ok: true, response, total, extra })
  } finally {
    lock.releaseLock()
  }
}

/* Guest-typed text starting with = + - @ would run as a formula; a leading
   apostrophe makes Sheets keep it as plain text (and hides the apostrophe). */
function plainText(text) {
  return /^[=+\-@]/.test(text) ? `'${text}` : text
}

function isoOrNull(value) {
  const d = value ? new Date(value) : null
  return d && !isNaN(d) ? d.toISOString() : null
}

function findParty(code) {
  const wanted = String(code || '').trim().toLowerCase()
  if (!wanted) return null
  const sheet = SpreadsheetApp.getActive().getSheetByName(GUESTS_TAB)
  const col = columnsOf(sheet)
  const rows = sheet.getDataRange().getValues()
  for (let i = 1; i < rows.length; i++) {
    if (String(rows[i][col.Code]).trim().toLowerCase() === wanted) {
      return { sheet, col, row: rows[i], rowNumber: i + 1 }
    }
  }
  return null
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON)
}
