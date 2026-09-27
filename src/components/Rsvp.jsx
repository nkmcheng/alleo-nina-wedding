import { useEffect, useState } from 'react'
import Reveal from './Reveal.jsx'
import { RSVP_ENDPOINT } from '../siteConfig.js'

/* TODO: replace with the couple's real contact number. */
const RSVP_PHONE = '09XX · XXX · XXXX'
/* Seats a party may ask for beyond its reservation — mirrors MAX_EXTRA in rsvp-sheet/Code.gs. */
const MAX_EXTRA = 2

/* A personal line and the right dress guide for each Role in the sheet.
   Roles are matched case-insensitively; anything else gets the guest version. */
const ROLE_CARDS = {
  'principal sponsor': {
    line: 'Thank you for standing with us as one of our principal sponsors.',
    link: { href: '#entourage', label: 'Your attire colors' },
  },
  'secondary sponsor': {
    line: 'Thank you for taking part in our ceremony.',
    link: { href: '#entourage', label: 'Your attire colors' },
  },
  entourage: {
    line: 'We can’t wait to have you beside us.',
    link: { href: '#entourage', label: 'Your attire colors' },
  },
  family: {
    line: 'It wouldn’t be the same without you.',
    link: { href: '#attire', label: 'What to wear' },
  },
  guest: {
    line: null,
    link: { href: '#attire', label: 'What to wear' },
  },
}
const roleCard = (role) => ROLE_CARDS[String(role || '').trim().toLowerCase()] ?? ROLE_CARDS.guest

/* Personalized invitations: each party's link carries ?inv=<code>. The card
   looks the code up in the RSVP Google Sheet (rsvp-sheet/Code.gs), greets the party
   by name, and lets them say how many are coming — fewer than reserved, or a
   few more as a request the couple confirms — with a name for each person.
   Replying again updates the same row. */
export default function Rsvp() {
  const [code] = useState(() => new URLSearchParams(window.location.search).get('inv'))
  const [status, setStatus] = useState(code && RSVP_ENDPOINT ? 'loading' : 'nolink')
  const [party, setParty] = useState(null)
  const [attending, setAttending] = useState(true)
  const [names, setNames] = useState([])
  const [notes, setNotes] = useState('')
  const [result, setResult] = useState(null)

  useEffect(() => {
    if (status !== 'loading') return
    fetch(`${RSVP_ENDPOINT}?inv=${encodeURIComponent(code)}`)
      .then((r) => r.json())
      .then((data) => {
        if (!data.ok) return setStatus('nolink')
        setParty(data)
        const reserved = 1 + data.additional
        const earlier = data.reply?.guestNames ? data.reply.guestNames.split(/,\s*/) : []
        const count = data.reply?.response === 'Accepts' ? data.reply.total || reserved : reserved
        setNames(
          Array.from({ length: count }, (_, i) => earlier[i] ?? (i === 0 && !data.reply ? data.name : '')),
        )
        if (data.reply) {
          setAttending(data.reply.response === 'Accepts')
          setNotes(data.reply.notes ?? '')
        }
        setStatus('form')
      })
      .catch(() => setStatus('error'))
  }, [status, code])

  const onSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    fetch(RSVP_ENDPOINT, {
      method: 'POST',
      /* text/plain keeps this a "simple" request, which Apps Script accepts cross-origin. */
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({
        inv: code,
        attending,
        count: attending ? names.length : 0,
        guests: attending ? names : [],
        notes,
      }),
    })
      .then((r) => r.json())
      .then((data) => {
        if (!data.ok) throw new Error(data.error)
        setResult(data)
        setStatus('sent')
      })
      .catch(() => setStatus('error'))
  }

  const seats = 1 + (party?.additional ?? 0)
  const card = roleCard(party?.role)

  return (
    <section id="rsvp" className="band">
      <div className="wrap">
        <Reveal className="ink-card">
          <p className="ink-eyebrow">Kindly Respond</p>
          <p className="ink-title">RSVP</p>
          <div className="ink-rule" />
          <p className="ink-serif">Please reply by January 6, 2027</p>

          {status === 'loading' && <p className="ink-line ink-muted">Finding your invitation…</p>}

          {status === 'nolink' && (
            <p className="ink-line">
              Please open the personal link from your invitation to reply.
              <br />
              <span className="ink-muted">Trouble with it? Message us at {RSVP_PHONE}.</span>
            </p>
          )}

          {status === 'error' && (
            <p className="ink-line">
              Something went wrong on our side — please try again in a moment,
              <br />
              or message us at {RSVP_PHONE}.
            </p>
          )}

          {status === 'sent' && (
            <>
              <p className="ink-line ink-thanks">Thank you, {party.name}!</p>
              <p className="ink-line">
                {result.response === 'Accepts'
                  ? `We can’t wait to celebrate with you — ${result.total} seat${result.total > 1 ? 's' : ''} noted.` +
                    (result.extra
                      ? ` We’ll get back to you about the extra seat${result.extra > 1 ? 's' : ''}.`
                      : '')
                  : 'We’ll miss you, and we’re grateful you let us know.'}
              </p>
              <button className="ink-submit" type="button" onClick={() => setStatus('form')}>
                Change my reply
              </button>
            </>
          )}

          {(status === 'form' || status === 'sending') && (
            <form className="ink-form" onSubmit={onSubmit}>
              <div className="ink-greet">
                <p className="ink-party">{party.name}</p>
                {party.role && party.role.toLowerCase() !== 'guest' && (
                  <p className="ink-role">{party.role}</p>
                )}
                {card.line && <p className="ink-role-line">{card.line}</p>}
                <p className="ink-reserved">
                  We have reserved <strong>{seats}</strong> seat{seats > 1 ? 's' : ''} in your honor
                </p>
                {party.reply && (
                  <p className="ink-muted ink-small">We have your reply — feel free to update it below.</p>
                )}
              </div>

              <div className="ink-choices" role="radiogroup" aria-label="Will you be joining us?">
                {[
                  [true, 'Joyfully accepts'],
                  [false, 'Regretfully declines'],
                ].map(([value, label]) => (
                  <label className={`ink-choice${attending === value ? ' is-on' : ''}`} key={label}>
                    <input
                      type="radio"
                      name="attending"
                      checked={attending === value}
                      onChange={() => setAttending(value)}
                    />
                    <span className="ink-choice-mark" aria-hidden="true" />
                    {label}
                  </label>
                ))}
              </div>

              {attending && (
                <div className="ink-field">
                  <div className="ink-field-head">
                    <span className="ink-field-label">Number attending</span>
                    <span className="ink-stepper">
                      <button
                        type="button"
                        aria-label="One fewer"
                        disabled={names.length <= 1}
                        onClick={() => setNames((list) => list.slice(0, -1))}
                      >
                        −
                      </button>
                      <span className="ink-count" aria-live="polite">
                        {names.length}
                      </span>
                      <button
                        type="button"
                        aria-label="One more"
                        disabled={names.length >= seats + MAX_EXTRA}
                        onClick={() => setNames((list) => [...list, ''])}
                      >
                        +
                      </button>
                    </span>
                  </div>
                  {names.length > seats && (
                    <p className="ink-extra">
                      That’s more than we reserved — we’ll get back to you about the extra seat
                      {names.length - seats > 1 ? 's' : ''}.
                    </p>
                  )}
                  <ol className="ink-names">
                    {names.map((n, i) => (
                      <li key={i}>
                        <span className="ink-names-num" aria-hidden="true">
                          {i + 1}
                        </span>
                        <input
                          className="ink-input"
                          type="text"
                          value={n}
                          maxLength={80}
                          placeholder={i === 0 ? 'Your name' : 'Guest’s name'}
                          onChange={(e) =>
                            setNames((list) => list.map((v, j) => (j === i ? e.target.value : v)))
                          }
                          aria-label={`Name of guest ${i + 1}`}
                        />
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              <label className="ink-field">
                <span className="ink-field-label">Notes &amp; requests</span>
                <textarea
                  className="ink-textarea"
                  rows={3}
                  maxLength={500}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Dietary needs, questions, or requests — optional"
                />
              </label>

              <button className="ink-submit ink-primary" type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Send Our Response'}
              </button>
              <p className="ink-foot">
                <a href={card.link.href}>{card.link.label} →</a>
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
