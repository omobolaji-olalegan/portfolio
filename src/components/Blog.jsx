import { BookOpen, Clock, ArrowRight, Tag } from 'lucide-react'
import './Blog.css'

const ARTICLES = [
  {
    title:   'Exploiting JWT Algorithm Confusion: RS256 to HS256',
    excerpt: 'A deep-dive into JWT algorithm confusion attacks — how they work, how to detect them, and how to defend your applications against this critical vulnerability class.',
    tags:    ['Web Security', 'JWT', 'Authentication'],
    date:    'Feb 12, 2026',
    readTime:'8 min read',
    color:   'red',
    featured: true,
  },
  {
    title:   'BloodHound for Blue Teams: Defending Active Directory',
    excerpt: 'Most AD attack paths are well-known. Learn how defenders can leverage BloodHound to proactively find and close attack paths before adversaries do.',
    tags:    ['Active Directory', 'BloodHound', 'Defense'],
    date:    'Jan 28, 2026',
    readTime:'11 min read',
    color:   'cyan',
    featured: true,
  },
  {
    title:   'Building a Home Threat Intelligence Platform on a Budget',
    excerpt: 'Step-by-step guide to deploying MISP, OpenCTI, and TheHive in your home lab to process and correlate threat intelligence feeds.',
    tags:    ['Threat Intel', 'MISP', 'Home Lab'],
    date:    'Jan 5, 2026',
    readTime:'15 min read',
    color:   'green',
    featured: false,
  },
  {
    title:   'HTB Sherlock: "Brutus" — Full Forensics Walkthrough',
    excerpt: 'Complete forensics walkthrough of the HackTheBox Sherlock challenge "Brutus", covering log analysis, timeline reconstruction, and attacker attribution.',
    tags:    ['Forensics', 'HTB', 'DFIR'],
    date:    'Dec 18, 2025',
    readTime:'6 min read',
    color:   'yellow',
    featured: false,
  },
  {
    title:   'Reverse Engineering a Golang Malware Sample',
    excerpt: 'Analyzing a Go-based dropper using Ghidra and x64dbg. We unpack its obfuscation techniques, C2 communication protocol, and persistence mechanisms.',
    tags:    ['Malware Analysis', 'Reverse Engineering', 'Golang'],
    date:    'Nov 30, 2025',
    readTime:'20 min read',
    color:   'red',
    featured: false,
  },
  {
    title:   'Writing Effective Sigma Rules for Modern SOCs',
    excerpt: 'From concept to detection: how to write high-fidelity Sigma rules that minimize alert fatigue while catching real threats in Splunk and Elastic environments.',
    tags:    ['Sigma', 'SIEM', 'Detection Engineering'],
    date:    'Nov 14, 2025',
    readTime:'9 min read',
    color:   'cyan',
    featured: false,
  },
]

export default function Blog() {
  const featured = ARTICLES.filter(a => a.featured)
  const rest     = ARTICLES.filter(a => !a.featured)

  return (
    <section id="blog">
      <div className="section-container">
        <h2 className="section-title">
          <span>// </span>articles<span>_&_writeups</span>
        </h2>
        <p className="section-subtitle">
          Technical deep-dives, CTF writeups, and security research
        </p>

        {/* Featured */}
        <div className="blog-featured">
          {featured.map((a, i) => (
            <ArticleCard key={i} article={a} featured />
          ))}
        </div>

        {/* Rest */}
        <div className="blog-grid">
          {rest.map((a, i) => (
            <ArticleCard key={i} article={a} />
          ))}
        </div>

        <div className="blog-more">
          <a href="#" className="btn-secondary">
            <BookOpen size={16} />
            View All Articles
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  )
}

function ArticleCard({ article: a, featured }) {
  return (
    <article className={`article-card card ${featured ? 'article-featured' : ''} border-t-${a.color}`}>
      {featured && <span className={`featured-badge fb-${a.color}`}>Featured</span>}

      <div className="article-meta">
        <span className="article-date"><Clock size={12} /> {a.date}</span>
        <span className="article-rt">{a.readTime}</span>
      </div>

      <h3 className="article-title">{a.title}</h3>
      <p className="article-excerpt">{a.excerpt}</p>

      <div className="article-footer">
        <div className="article-tags">
          <Tag size={12} />
          {a.tags.map(t => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
        <a href="#" className={`read-more rm-${a.color}`}>
          Read <ArrowRight size={13} />
        </a>
      </div>
    </article>
  )
}
