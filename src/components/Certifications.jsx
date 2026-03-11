import { Award, CheckCircle, Clock } from 'lucide-react'
import './Certifications.css'

const CERTS = [
  {
    name:    'Offensive Security Certified Professional',
    short:   'OSCP',
    issuer:  'Offensive Security',
    date:    'Jan 2023',
    status:  'active',
    id:      'OS-101-XXXXX',
    color:   'red',
    desc:    'Hands-on 24-hour exam requiring exploitation of real machines in an isolated lab environment.',
  },
  {
    name:    'Certified Ethical Hacker',
    short:   'CEH',
    issuer:  'EC-Council',
    date:    'Jun 2022',
    status:  'active',
    id:      'ECC-XXXXXXX',
    color:   'green',
    desc:    'Comprehensive knowledge of ethical hacking phases, attack vectors, and countermeasures.',
  },
  {
    name:    'CompTIA Security+',
    short:   'Sec+',
    issuer:  'CompTIA',
    date:    'Mar 2021',
    status:  'active',
    id:      'COMP001021XXXXXX',
    color:   'cyan',
    desc:    'Core cybersecurity skills covering threat analysis, cryptography, identity management, and more.',
  },
  {
    name:    'Certified Cloud Security Professional',
    short:   'CCSP',
    issuer:  '(ISC)²',
    date:    'Sep 2023',
    status:  'active',
    id:      'CCSP-XXXXXXX',
    color:   'cyan',
    desc:    'Advanced cloud security architecture, design, operations, and compliance expertise.',
  },
  {
    name:    'GIAC Penetration Tester',
    short:   'GPEN',
    issuer:  'GIAC / SANS',
    date:    'Nov 2022',
    status:  'active',
    id:      'GPEN-XXXXXXX',
    color:   'yellow',
    desc:    'Comprehensive penetration testing methodology covering reconnaissance to post-exploitation.',
  },
  {
    name:    'Offensive Security Web Expert',
    short:   'OSWE',
    issuer:  'Offensive Security',
    date:    'In Progress',
    status:  'pending',
    id:      '—',
    color:   'red',
    desc:    'Advanced web application whiteBox testing with a focus on source code review and exploitation.',
  },
]

const BADGES = [
  { platform: 'HackTheBox',    rank: 'Pro Hacker',     color: 'green' },
  { platform: 'TryHackMe',     rank: 'Top 1%',          color: 'cyan' },
  { platform: 'Bug Crowd',     rank: 'Trusted Researcher', color: 'yellow' },
  { platform: 'HackerOne',     rank: 'Reputation 1500+', color: 'red' },
  { platform: 'VulnHub',       rank: '40+ Machines',    color: 'green' },
  { platform: 'CTFtime',       rank: 'Rating 1800+',    color: 'cyan' },
]

export default function Certifications() {
  return (
    <section id="certs" className="certs-section">
      <div className="section-container">
        <h2 className="section-title">
          <span>// </span>certifications<span>_&_badges</span>
        </h2>
        <p className="section-subtitle">Professional credentials and platform achievements</p>

        <div className="certs-grid">
          {CERTS.map((c, i) => (
            <div key={i} className={`cert-card card border-l-${c.color}`}>
              <div className="cert-header">
                <div className={`cert-badge cb-${c.color}`}>
                  <Award size={20} />
                </div>
                <div className="cert-status">
                  {c.status === 'active' ? (
                    <span className="status-active">
                      <CheckCircle size={13} /> Active
                    </span>
                  ) : (
                    <span className="status-pending">
                      <Clock size={13} /> In Progress
                    </span>
                  )}
                </div>
              </div>

              <div className="cert-short">{c.short}</div>
              <h3 className="cert-name">{c.name}</h3>
              <p className="cert-desc">{c.desc}</p>

              <div className="cert-meta">
                <span className="cert-issuer">{c.issuer}</span>
                <span className="cert-date">{c.date}</span>
              </div>

              {c.id !== '—' && (
                <div className="cert-id">
                  <span className="prompt">ID:</span> {c.id}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Platform badges */}
        <div className="badges-section">
          <h3 className="badges-heading">
            <span className="prompt">$</span> ls platform-achievements/
          </h3>
          <div className="badges-grid">
            {BADGES.map((b, i) => (
              <div key={i} className={`platform-badge pb-${b.color}`}>
                <span className="pb-platform">{b.platform}</span>
                <span className="pb-rank">{b.rank}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
