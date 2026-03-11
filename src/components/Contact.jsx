import { useState } from 'react'
import { Mail, Github, Linkedin, Twitter, Send, Shield, Key, AlertTriangle } from 'lucide-react'
import './Contact.css'

const SOCIALS = [
  { icon: <Github size={20} />,   label: 'GitHub',    handle: '@omobolaji-olalegan',  href: '#', color: 'green' },
  { icon: <Linkedin size={20} />, label: 'LinkedIn',  handle: 'Omobolaji Victoria Olalegan', href: '#', color: 'cyan'  },
  { icon: <Twitter size={20} />,  label: 'Twitter/X', handle: '@omobolaji_sec',  href: '#', color: 'cyan'  },
  { icon: <Mail size={20} />,     label: 'Email',     handle: 'bolajiolalegan@gmail.com', href: 'mailto:bolajiolalegan@gmail.com', color: 'green' },
]

const INITIAL = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [form,   setForm]   = useState(INITIAL)
  const [status, setStatus] = useState(null) // 'sending' | 'sent' | 'error'

  const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = e => {
    e.preventDefault()
    setStatus('sending')
    // Simulate send — wire up to EmailJS / Formspree / backend in production
    setTimeout(() => {
      setStatus('sent')
      setForm(INITIAL)
    }, 1500)
  }

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <h2 className="section-title">
          <span>// </span>contact<span>_me</span>
        </h2>
        <p className="section-subtitle">
          Open to entry-level cybersecurity roles, SOC analyst positions, and security research collaborations
        </p>

        <div className="contact-grid">
          {/* Left panel */}
          <div className="contact-left">
            <div className="card contact-info-card">
              <div className="cic-header">
                <Shield size={22} className="cic-icon" />
                <div>
                  <h3 className="cic-title">Let's Connect</h3>
                  <p className="cic-sub">Secure communications preferred</p>
                </div>
              </div>

              <p className="cic-body">
                I'm open to entry-level cybersecurity roles, SOC analyst positions, and
                security research collaborations. Whether you have an opportunity or just
                want to connect — I'm always happy to chat. Response time is typically within 24 hours.
              </p>

              <div className="cic-pgp">
                <Key size={14} />
                <span>PGP key available on request for encrypted communication</span>
              </div>

              <div className="socials-list">
                {SOCIALS.map(s => (
                  <a key={s.label} href={s.href} className={`social-row sr-${s.color}`} target="_blank" rel="noreferrer">
                    <span className="sr-icon">{s.icon}</span>
                    <div className="sr-text">
                      <span className="sr-label">{s.label}</span>
                      <span className="sr-handle">{s.handle}</span>
                    </div>
                    <span className="sr-arrow">→</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability card */}
            <div className="card avail-card">
              <div className="avail-dot" />
              <div>
                <p className="avail-status">Available for new engagements</p>
                <p className="avail-types">SOC Analyst · Entry-level Cyber · Research Collaborations · Remote</p>
              </div>
            </div>
          </div>

          {/* Right – form */}
          <div className="card contact-form-card">
            <h3 className="form-heading">
              <span className="prompt">$</span> send --message
            </h3>

            {status === 'sent' ? (
              <div className="form-success">
                <Shield size={36} className="success-icon" />
                <p className="success-title">Message received!</p>
                <p className="success-body">
                  Transmission successful. I'll get back to you within 24 hours.
                </p>
                <button className="btn-primary" onClick={() => setStatus(null)}>
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="John Doe"
                      value={form.name}
                      onChange={onChange}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="john@company.com"
                      value={form.email}
                      onChange={onChange}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="subject">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    placeholder="Penetration Testing Engagement"
                    value={form.subject}
                    onChange={onChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Describe your project or inquiry..."
                    value={form.message}
                    onChange={onChange}
                    className="form-input form-textarea"
                  />
                </div>

                <div className="form-notice">
                  <AlertTriangle size={13} />
                  Do not share sensitive credentials or confidential data via this form.
                </div>

                <button
                  type="submit"
                  className="btn-primary form-submit"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? (
                    <>Transmitting<span className="sending-dots">...</span></>
                  ) : (
                    <><Send size={15} /> Send Message</>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
