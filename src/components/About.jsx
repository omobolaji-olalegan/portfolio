import { User, MapPin, Coffee, Cpu } from 'lucide-react'
import './About.css'

const TIMELINE = [
  {
    year: 'Training',
    role: 'Cybergirls Fellow',
    org:  'Cybersafe Foundation',
    desc: 'Cybersecurity training focused on security operations, threat detection, incident response workflows, SIEM deployment and monitoring, and threat intelligence analysis.',
    tag:  'Fellowship',
    color: 'cyan',
  },
  {
    year: 'Training',
    role: 'Security Analyst Trainee',
    org:  'Cybersoc Organization',
    desc: 'Hands-on training in network monitoring, threat detection, digital forensics, and security tool deployment using industry-standard platforms.',
    tag:  'Training',
    color: 'green',
  },
  {
    year: 'Practical',
    role: 'SIEM & Threat Detection',
    org:  'Self-directed Lab Work',
    desc: 'Designed and executed threat detection workflows using Splunk, Suricata IDS/IPS, and Rapid7. Conducted digital forensics and email phishing investigations.',
    tag:  'Lab Projects',
    color: 'yellow',
  },
]

const FACTS = [
  { icon: <MapPin size={16} />,  label: 'Location',  value: 'Nigeria (Open to Remote)' },
  { icon: <Coffee size={16} />,  label: 'Fuel',      value: 'Continuous learning & lab work' },
  { icon: <Cpu size={16} />,     label: 'Focus',     value: 'SOC Analysis · Threat Detection' },
  { icon: <User size={16} />,    label: 'Status',    value: 'Open to entry-level cyber roles' },
]

export default function About() {
  return (
    <section id="about">
      <div className="section-container">
        <h2 className="section-title">
          <span>// </span>about<span>_me</span>
        </h2>
        <p className="section-subtitle">Who I am and how I got here</p>

        <div className="about-grid">
          {/* Left – bio */}
          <div className="about-left">
            <div className="about-photo-wrapper">
              <div className="about-photo">
                <div className="photo-initials">OVO</div>
              </div>
              <div className="photo-ring" />
            </div>

            <div className="about-bio card">
              <p>
                I'm an aspiring <span className="hl-green">Cybersecurity Analyst</span> with
                hands-on experience in threat detection, digital forensics, SIEM monitoring,
                and vulnerability management. My work focuses on identifying security threats,
                analyzing attack patterns, and implementing detection strategies.
              </p>
              <p>
                Through intensive training with the{' '}
                <span className="hl-cyan">Cybersafe Foundation Cybergirls Fellowship</span> and
                Cybersoc Organization, I've built practical skills using industry-standard tools
                like Splunk, Wireshark, Suricata, Rapid7, and CrowdStrike Falcon XDR.
              </p>

              <div className="facts-grid">
                {FACTS.map(f => (
                  <div key={f.label} className="fact">
                    <span className="fact-icon">{f.icon}</span>
                    <div>
                      <span className="fact-label">{f.label}</span>
                      <span className="fact-value">{f.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right – timeline */}
          <div className="about-right">
            <h3 className="timeline-heading">
              <span className="prompt">$</span> cat experience.log
            </h3>
            <div className="timeline">
              {TIMELINE.map((item, i) => (
                <div key={i} className="timeline-item">
                  <div className="timeline-dot" />
                  <div className="timeline-body card">
                    <div className="tl-header">
                      <span className={`tag ${item.color}`}>{item.tag}</span>
                      <span className="tl-year">{item.year}</span>
                    </div>
                    <h4 className="tl-role">{item.role}</h4>
                    <p className="tl-org">{item.org}</p>
                    <p className="tl-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
              <div className="timeline-line" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
