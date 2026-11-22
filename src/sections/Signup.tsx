import { useState, type FormEvent } from 'react'

type State = 'idle' | 'busy' | 'ok' | 'err' | 'unset'

const MESSAGES: Record<State, string> = {
  idle: '',
  busy: '',
  ok: 'You’re on the list. We’ll be in touch.',
  err: 'Something went wrong. Please try again.',
  unset: 'Sign-up isn’t connected yet.',
}

/** Early-access form. POSTs `{ email }` as JSON to VITE_SIGNUP_URL (see .env.example). */
export function Signup() {
  const [s, setS] = useState<State>('idle')
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const email = String(new FormData(e.currentTarget).get('email') ?? '').trim()
    const url = import.meta.env.VITE_SIGNUP_URL as string | undefined
    if (!url) return setS('unset')
    setS('busy')
    fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify({ email }) })
      .then((r) => setS(r.ok ? 'ok' : 'err'))
      .catch(() => setS('err'))
  }
  return (
    <form className="signup" onSubmit={submit}>
      <label className="sr" htmlFor="email">Your email address</label>
      <input id="email" name="email" type="email" required autoComplete="email" placeholder="Your email address" disabled={s === 'ok'} />
      <button className="btn" disabled={s === 'busy' || s === 'ok'}>{s === 'busy' ? 'Sending…' : 'Notify me'}</button>
      <p className="msg" role="status" aria-live="polite">{MESSAGES[s]}</p>
    </form>
  )
}
