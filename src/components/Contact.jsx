import { useState } from 'react'
import { profile, contactFormEndpoint } from '../data/content'
import Reveal from './Reveal'

export default function Contact() {
  const [status, setStatus] = useState('idle')

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)

    if (!contactFormEndpoint) {
      const subject = encodeURIComponent(data.get('subject') || 'Hello Ganesh')
      const body = encodeURIComponent(`${data.get('message')}\n\n— ${data.get('name')} (${data.get('email')})`)
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
      return
    }
    try {
      setStatus('sending')
      const res = await fetch(contactFormEndpoint, {
        method: 'POST', body: data, headers: { Accept: 'application/json' },
      })
      if (res.ok) { setStatus('sent'); form.reset() } else setStatus('error')
    } catch { setStatus('error') }
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="chapter">
          <span className="kicker">Contact</span>
        </div>

        <div className="contact-grid">
          <div className="contact-left">
            <Reveal>
              <h2 className="display contact-title">Let’s build<br />something <em>together</em>.</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="contact-lead muted">
                Open to AI/ML &amp; full-stack internships, collaborations, or a good conversation
                about building with AI.
              </p>
            </Reveal>

            <Reveal delay={0.14} className="contact-details">
              <a className="contact-line" href={`mailto:${profile.email}`}>
                <span className="kicker">Email</span><span className="contact-val">{profile.email}</span>
              </a>
              <div className="contact-line">
                <span className="kicker">Based in</span><span className="contact-val">{profile.location}</span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="contact-right">
            <form className="contact-form" onSubmit={onSubmit}>
              <label className="field">
                <span className="field-label kicker">Name</span>
                <input type="text" name="name" required placeholder="your name" />
              </label>
              <label className="field">
                <span className="field-label kicker">Email</span>
                <input type="email" name="email" required placeholder="you@email.com" />
              </label>
              <label className="field">
                <span className="field-label kicker">Subject</span>
                <input type="text" name="subject" required placeholder="what's this about?" />
              </label>
              <label className="field">
                <span className="field-label kicker">Message</span>
                <textarea name="message" rows="3" required placeholder="tell me a little…" />
              </label>
              <button type="submit" className="contact-send" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Sent — thank you ✓' : 'Send message →'}
              </button>
              {status === 'error' && <p className="form-note terra">Something broke — email me directly instead.</p>}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
