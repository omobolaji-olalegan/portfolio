import { Award, CheckCircle, Clock } from 'lucide-react'
import './Certifications.css'

const CERTS = [
  {
    name:   'Microsoft Certified: Security Operations Analyst Associate',
    short:  'SC-200',
    issuer: 'Microsoft',
    date:   'Jun 2025',
    expires:'Jun 2026',
    status: 'active',
    id:     '334DBDF88D8D112',
    color:  'cyan',
    desc:   'Validates skills in threat investigation, hunting, and response using Microsoft Sentinel, Defender XDR, and related security tools.',
  },
  {
    name:   'ISO/IEC 27001:2022 Lead Auditor',
    short:  'ISO 27001',
    issuer: 'Mastermind Assurance',
    date:   'Mar 2025',
    expires:'Mar 2028',
    status: 'active',
    id:     '8wrmettx3y',
    color:  'green',
    desc:   'Certified to plan, conduct, and lead information security management system audits to the ISO/IEC 27001:2022 standard.',
  },
  {
    name:   'Foundation Level Threat Intelligence Analyst',
    short:  'CTI Analyst',
    issuer: 'arcX',
    date:   'Feb 2025',
    status: 'active',
    id:     '92e7e92d2cdd9ccf67f4661794066a571ab9dfb7',
    color:  'yellow',
    desc:   'Foundation-level credential covering threat intelligence frameworks, collection, analysis, and reporting for SOC environments.',
  },
  {
    name:   'Junior Cybersecurity Analyst Career Path',
    short:  'Jr. SOC Analyst',
    issuer: 'Cisco',
    date:   '—',
    status: 'active',
    id:     '—',
    color:  'cyan',
    desc:   'Comprehensive SOC analyst pathway covering networking fundamentals, threat analysis, incident handling, and security monitoring.',
  },
  {
    name:   'Cyber Threat Management',
    short:  'CTM',
    issuer: 'Cisco',
    date:   '—',
    status: 'active',
    id:     '—',
    color:  'red',
    desc:   'Covers cyber threat management lifecycle including risk assessment, vulnerability identification, and threat mitigation strategies.',
  },
  {
    name:   'Endpoint Security',
    short:  'Endpoint Sec',
    issuer: 'Cisco',
    date:   '—',
    status: 'active',
    id:     '—',
    color:  'green',
    desc:   'Endpoint protection principles including OS security hardening, malware defence, and endpoint detection and response (EDR) concepts.',
  },
  {
    name:   'Network Defense',
    short:  'Net Defense',
    issuer: 'Cisco',
    date:   '—',
    status: 'active',
    id:     '—',
    color:  'yellow',
    desc:   'Network security monitoring, access control, firewall implementation, and intrusion detection techniques for defensive operations.',
  },
]

export default function Certifications() {
  return (
    <section id="certs" className="certs-section">
      <div className="section-container">
        <h2 className="section-title">
          <span>// </span>certifications
        </h2>
        <p className="section-subtitle">Professional credentials and industry qualifications</p>

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
                {c.date !== '—' && <span className="cert-date">Issued {c.date}</span>}
                {c.expires && <span className="cert-date">Expires {c.expires}</span>}
              </div>

              {c.id !== '—' && (
                <div className="cert-id">
                  <span className="prompt">ID:</span> {c.id}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
