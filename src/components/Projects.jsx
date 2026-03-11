import { useState } from 'react'
import { ExternalLink, Github, Trophy, Target, Bug, Lock, Shield } from 'lucide-react'
import './Projects.css'

const FILTERS = ['All', 'SIEM', 'Network', 'Forensics', 'Vulnerability']

const PROJECTS = [
  {
    title:   'SIEM Logon Detection with Splunk',
    summary: 'Designed a threat detection workflow to monitor Windows authentication events and identify suspicious login behavior using Splunk.',
    tags:    ['Splunk', 'SIEM', 'Threat Detection'],
    category:'SIEM',
    icon:    <Shield size={22} />,
    color:   'cyan',
    links: {},
    highlights: ['Windows event log ingestion', 'Brute-force detection', 'SOC investigation workflow'],
  },
  {
    title:   'Splunk + Suricata IDS/IPS Integration',
    summary: 'Configured a security monitoring environment integrating Splunk Enterprise with Suricata IDS/IPS to detect and investigate network-based attacks.',
    tags:    ['Splunk', 'Suricata', 'IDS/IPS'],
    category:'Network',
    icon:    <Target size={22} />,
    color:   'green',
    links: {},
    highlights: ['IDS alert ingestion into SIEM', 'Network intrusion analysis', 'Security monitoring architecture'],
  },
  {
    title:   'Email Header Analysis Investigation',
    summary: 'Performed forensic analysis of email headers to detect spoofing and phishing attempts by examining sender paths, IPs, and authentication anomalies.',
    tags:    ['Email Forensics', 'Phishing', 'Investigation'],
    category:'Forensics',
    icon:    <Bug size={22} />,
    color:   'yellow',
    links: {},
    highlights: ['Spoofing technique detection', 'IP header investigation', 'Email authentication analysis'],
  },
  {
    title:   'Mobile Forensics Investigation',
    summary: 'Conducted a mobile device forensic investigation to extract and analyze digital evidence, including artifact examination and timeline reconstruction.',
    tags:    ['Mobile Forensics', 'Evidence', 'Digital Forensics'],
    category:'Forensics',
    icon:    <Lock size={22} />,
    color:   'yellow',
    links: {},
    highlights: ['Mobile data acquisition', 'Artifact examination', 'Evidence documentation'],
  },
  {
    title:   'Vulnerability Management Assessment',
    summary: 'Performed vulnerability scanning and risk prioritization using Rapid7, analyzing CVSS severity scores and recommending remediation strategies.',
    tags:    ['Rapid7', 'Vulnerability Scanning', 'Risk Management'],
    category:'Vulnerability',
    icon:    <Trophy size={22} />,
    color:   'red',
    links: {},
    highlights: ['CVSS severity analysis', 'Critical vulnerability identification', 'Remediation planning'],
  },
]

export default function Projects() {
  const [filter, setFilter] = useState('All')

  const visible = filter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === filter)

  return (
    <section id="projects">
      <div className="section-container">
        <h2 className="section-title">
          <span>// </span>projects<span>_&_research</span>
        </h2>
        <p className="section-subtitle">
          Notable work, CTF achievements, and security research
        </p>

        {/* Filter bar */}
        <div className="filter-bar">
          {FILTERS.map(f => (
            <button
              key={f}
              className={`filter-btn ${filter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="projects-grid">
          {visible.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project: p }) {
  return (
    <div className={`project-card card border-${p.color}`}>
      <div className="pc-header">
        <div className={`pc-icon icon-${p.color}`}>{p.icon}</div>
        <div className="pc-links">
          {p.links.github && (
            <a href={p.links.github} target="_blank" rel="noreferrer" className="pc-link" aria-label="GitHub">
              <Github size={16} />
            </a>
          )}
          {p.links.live && (
            <a href={p.links.live} target="_blank" rel="noreferrer" className="pc-link" aria-label="Live">
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      <h3 className="pc-title">{p.title}</h3>
      <p className="pc-summary">{p.summary}</p>

      <ul className="pc-highlights">
        {p.highlights.map((h, i) => (
          <li key={i}><span className="bullet">▸</span>{h}</li>
        ))}
      </ul>

      <div className="pc-tags">
        {p.tags.map(t => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>
    </div>
  )
}
