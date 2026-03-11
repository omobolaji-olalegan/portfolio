import { useState } from 'react'
import { Shield, Sword, Eye, Code, Database, Network } from 'lucide-react'
import './Skills.css'

const CATEGORIES = [
  {
    id:    'siem',
    label: 'SIEM & Monitoring',
    icon:  <Shield size={18} />,
    color: 'cyan',
    skills: [
      { name: 'Splunk',                  level: 85 },
      { name: 'ArcSight',               level: 75 },
      { name: 'IBM QRadar',             level: 75 },
      { name: 'Log Analysis & Correlation', level: 80 },
      { name: 'Alert Creation',         level: 78 },
      { name: 'Security Event Investigation', level: 82 },
    ],
  },
  {
    id:    'network',
    label: 'Network Security',
    icon:  <Eye size={18} />,
    color: 'green',
    skills: [
      { name: 'Wireshark',              level: 80 },
      { name: 'Suricata IDS/IPS',       level: 78 },
      { name: 'Network Traffic Inspection', level: 75 },
      { name: 'Packet Analysis',        level: 77 },
      { name: 'Threat Hunting',         level: 72 },
      { name: 'Intrusion Detection',    level: 76 },
    ],
  },
  {
    id:    'vulnmgmt',
    label: 'Vulnerability Mgmt',
    icon:  <Sword size={18} />,
    color: 'red',
    skills: [
      { name: 'Rapid7',                 level: 78 },
      { name: 'Vulnerability Scanning', level: 80 },
      { name: 'Risk Prioritization',    level: 75 },
      { name: 'CVSS Analysis',          level: 73 },
      { name: 'Remediation Planning',   level: 72 },
      { name: 'Security Posture Eval',  level: 70 },
    ],
  },
  {
    id:    'forensics',
    label: 'Forensics & Endpoint',
    icon:  <Code size={18} />,
    color: 'yellow',
    skills: [
      { name: 'CrowdStrike Falcon XDR', level: 75 },
      { name: 'Digital Forensics',      level: 78 },
      { name: 'Mobile Device Analysis', level: 75 },
      { name: 'Evidence Acquisition',   level: 73 },
      { name: 'Timeline Reconstruction',level: 72 },
      { name: 'Incident Response',      level: 78 },
    ],
  },
]

const TOOLS = [
  { name: 'Splunk',              cat: 'SIEM' },
  { name: 'ArcSight',           cat: 'SIEM' },
  { name: 'IBM QRadar',         cat: 'SIEM' },
  { name: 'Wireshark',          cat: 'Network' },
  { name: 'Suricata',           cat: 'IDS/IPS' },
  { name: 'Rapid7',             cat: 'Vuln Mgmt' },
  { name: 'CrowdStrike Falcon', cat: 'Endpoint' },
  { name: 'Log Analysis',       cat: 'Detection' },
  { name: 'Threat Detection',   cat: 'SOC' },
  { name: 'Incident Response',  cat: 'SOC' },
  { name: 'Digital Forensics',  cat: 'Forensics' },
  { name: 'Mobile Forensics',   cat: 'Forensics' },
  { name: 'Email Analysis',     cat: 'Phishing' },
  { name: 'Packet Analysis',    cat: 'Network' },
  { name: 'CVSS Scoring',       cat: 'Vuln Mgmt' },
  { name: 'Threat Hunting',     cat: 'SOC' },
]

function SkillBar({ name, level, color }) {
  return (
    <div className="skill-bar">
      <div className="skill-bar-top">
        <span className="skill-name">{name}</span>
        <span className={`skill-pct pct-${color}`}>{level}%</span>
      </div>
      <div className="skill-track">
        <div
          className={`skill-fill fill-${color}`}
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const [active, setActive] = useState('siem')
  const cat = CATEGORIES.find(c => c.id === active)

  return (
    <section id="skills" className="skills-section">
      <div className="section-container">
        <h2 className="section-title">
          <span>// </span>skills<span>_matrix</span>
        </h2>
        <p className="section-subtitle">Technical capabilities and tool proficiency</p>

        {/* Category tabs */}
        <div className="skill-tabs">
          {CATEGORIES.map(c => (
            <button
              key={c.id}
              className={`skill-tab ${active === c.id ? 'active ' + c.color : ''}`}
              onClick={() => setActive(c.id)}
            >
              {c.icon}
              {c.label}
            </button>
          ))}
        </div>

        {/* Bars */}
        <div className="skills-bars card">
          <h3 className="skills-bars-heading">
            <span className="prompt">$</span> skill-assess --category {cat.label.toLowerCase().replace(' ', '-')}
          </h3>
          <div className="bars-grid">
            {cat.skills.map(s => (
              <SkillBar key={s.name} name={s.name} level={s.level} color={cat.color} />
            ))}
          </div>
        </div>

        {/* Tools cloud */}
        <div className="tools-section">
          <h3 className="tools-heading">
            <Network size={16} />
            <span>Tools & Frameworks</span>
          </h3>
          <div className="tools-cloud">
            {TOOLS.map(t => (
              <div key={t.name} className="tool-chip">
                <span className="tool-name">{t.name}</span>
                <span className="tool-cat tag cyan">{t.cat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
