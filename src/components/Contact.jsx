import { Mail, Github, Linkedin, Twitter, Shield, Key } from 'lucide-react'
import './Contact.css'

const SOCIALS = [
  { icon: <Github size={20} />,   label: 'GitHub',    handle: '@omobolaji-olalegan',  href: '#', color: 'green' },
  { icon: <Linkedin size={20} />, label: 'LinkedIn',  handle: 'Omobolaji Olalegan', href: 'https://www.linkedin.com/in/omobolaji-olalegan', color: 'cyan'  },
  { icon: <Twitter size={20} />,  label: 'Twitter/X', handle: '@omobolaji_sec',  href: '#', color: 'cyan'  },
  { icon: <Mail size={20} />,     label: 'Email',     handle: 'bolajiolalegan@gmail.com', href: 'mailto:bolajiolalegan@gmail.com', color: 'green' },
]

export default function Contact() {
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

        </div>
      </div>
    </section>
  )
}
