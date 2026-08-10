import { useMemo, useState } from 'react'
import Reveal from './Reveal.jsx'
import { findGuest } from '../guests.js'

/* TODO: replace with the couple's real RSVP inbox, and the real contact number. */
const RSVP_EMAIL = 'rsvp.alleoandnina@gmail.com'
const RSVP_PHONE = '09XX · XXX · XXXX'

export default function Rsvp() {
  /* Personalized invitations: each party's link carries ?inv=<code>. The name
     and reserved seats are printed on the card; only the response boxes and
     the number attending are editable. */
  const invite = useMemo(() => {
    const code = new URLSearchParams(window.location.search).get('inv')
    const guest = findGuest(code)
    return guest ? { code, ...guest } : null
  }, [])

  const [name, setName] = useState(invite?.names ?? '')
  const [attending, setAttending] = useState('Joyfully accepts')
  const [count, setCount] = useState(invite?.seats ?? 1)

  const choose = (value) => {
    setAttending(value)
    if (value === 'Regretfully declines') setCount(0)
    else if (count === 0) setCount(invite?.seats ?? 1)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const body = [
      'RSVP — Alleo & Nina, 06 Feb 2027',
      '',
      `Name(s): ${name}`,
      invite ? `Invitation code: ${invite.code} (${invite.seats} reserved)` : null,
      `Response: ${attending}`,
      `Number attending: ${count}`,
    ]
      .filter(Boolean)
      .join('\n')
    window.location.href = `mailto:${RSVP_EMAIL}?subject=${encodeURIComponent(
      `RSVP — ${name}`,
    )}&body=${encodeURIComponent(body)}`
  }

  return (
    <section id="rsvp" className="band">
      <div className="wrap">
        <Reveal as="form" className="ink-card" onSubmit={onSubmit}>
          <p className="ink-eyebrow">Kindly Respond</p>
          <p className="ink-title">RSVP</p>
          <div className="ink-rule" />
          <p className="ink-serif">Please reply by January 6, 2027</p>

          <p className="ink-line">
            <span className="ink-label">Name</span>{' '}
            {invite ? (
              <span className="ink-fill">{invite.names}</span>
            ) : (
              <input
                className="ink-input ink-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                aria-label="Name(s) in your party"
                required
              />
            )}
          </p>

          <p className="ink-line">
            We have reserved <span className="ink-fill ink-num">{invite?.seats ?? ' '}</span>{' '}
            seat{(invite?.seats ?? 2) > 1 ? 's' : ''} in your honor
          </p>

          <div className="ink-choices" role="radiogroup" aria-label="Will you be joining us?">
            <label className="ink-check">
              <input
                type="radio"
                name="attending"
                value="Joyfully accepts"
                checked={attending === 'Joyfully accepts'}
                onChange={() => choose('Joyfully accepts')}
              />
              <span className="box" aria-hidden="true" />
              Joyfully accepts
            </label>
            <label className="ink-check">
              <input
                type="radio"
                name="attending"
                value="Regretfully declines"
                checked={attending === 'Regretfully declines'}
                onChange={() => choose('Regretfully declines')}
              />
              <span className="box" aria-hidden="true" />
              Regretfully declines
            </label>
          </div>

          <p className="ink-line">
            <span className="ink-label">Number attending</span>{' '}
            <input
              className="ink-input ink-count"
              type="number"
              min="0"
              max={invite?.seats ?? 10}
              value={count}
              onChange={(e) => setCount(Number(e.target.value))}
              aria-label="Number attending"
            />
          </p>

          <button className="ink-submit" type="submit">
            Send Our Response
          </button>
          <p className="ink-foot">
            Opens your mail app with this card filled in,
            <br />
            or message {RSVP_PHONE}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
