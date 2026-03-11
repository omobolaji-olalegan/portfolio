import { useEffect, useRef, useState } from 'react'
import { Terminal, ChevronDown, Github, Linkedin, Twitter } from 'lucide-react'
import './Hero.css'

const TITLES = [
  'Cybersecurity Analyst',
  'SOC Analyst',
  'Threat Hunter',
  'SIEM Engineer',
  'Digital Forensics Analyst',
  'Incident Responder',
]

const MATRIX_CHARS = '01アイウエオカキクケコサシスセソタチツテトABCDEFGHIJKLMNOP0123456789<>/{}[]'

function useTypewriter(words, speed = 80, pause = 1800) {
  const [displayed, setDisplayed] = useState('')
  const [wordIdx,   setWordIdx]   = useState(0)
  const [charIdx,   setCharIdx]   = useState(0)
  const [deleting,  setDeleting]  = useState(false)

  useEffect(() => {
    const current = words[wordIdx]
    let timeout

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx(c => c + 1), speed)
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx(c => c - 1), speed / 2)
    } else {
      setDeleting(false)
      setWordIdx(w => (w + 1) % words.length)
    }

    setDisplayed(current.slice(0, charIdx))
    return () => clearTimeout(timeout)
  }, [charIdx, deleting, wordIdx, words, speed, pause])

  return displayed
}

function MatrixCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx    = canvas.getContext('2d')
    let animId

    const resize = () => {
      canvas.width  = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const cols    = Math.floor(canvas.width / 18)
    const drops   = Array(cols).fill(1)

    const draw = () => {
      ctx.fillStyle = 'rgba(10, 14, 23, 0.06)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.font      = '14px JetBrains Mono, monospace'

      drops.forEach((y, i) => {
        const char = MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)]
        const x    = i * 18

        // bright leading char
        ctx.fillStyle = '#00ff41'
        ctx.fillText(char, x, y * 18)

        // trail fades to dim
        if (Math.random() > 0.98) drops[i] = 0
        drops[i]++
      })

      animId = requestAnimationFrame(draw)
    }

    // slight delay so canvas is sized
    const t = setTimeout(() => { draw() }, 100)

    return () => {
      clearTimeout(t)
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="matrix-canvas" />
}

export default function Hero() {
  const title = useTypewriter(TITLES)

  const scroll = () =>
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="hero" className="hero">
      <MatrixCanvas />

      <div className="hero-content">
        {/* Terminal badge */}
        <div className="hero-badge">
          <Terminal size={14} />
          <span>Available for opportunities</span>
          <span className="badge-dot" />
        </div>

        {/* Greeting */}
        <p className="hero-greeting">
          <span className="prompt">root@kali:~$</span> whoami
        </p>

        {/* Name */}
        <h1 className="hero-name">
          Omobolaji<span className="name-accent"> Victoria Olalegan</span>
        </h1>

        {/* Animated title */}
        <p className="hero-title">
          <span className="prompt-arrow">&gt;&gt;</span>{' '}
          <span className="typed">{title}</span>
          <span className="cursor">█</span>
        </p>

        {/* Summary */}
        <p className="hero-summary">
          Aspiring <span className="hl">Cybersecurity Analyst</span> with hands-on experience in
          threat detection, digital forensics, SIEM monitoring, and vulnerability management.
          Trained via{' '}
          <span className="hl">Cybersafe Foundation · Cybersoc Organization</span>.
        </p>

        {/* Stats row */}
        <div className="hero-stats">
          {[
            { label: 'SIEM Platforms', value: '3' },
            { label: 'Security Tools', value: '7+' },
            { label: 'Practical Projects', value: '5' },
            { label: 'Focus Areas', value: '7' },
          ].map(s => (
            <div key={s.label} className="stat">
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="hero-ctas">
          <a href="#projects" className="btn-primary" onClick={e => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}>
            View Projects
          </a>
          <a href="#contact" className="btn-secondary" onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
            Hire Me
          </a>
        </div>

        {/* Socials */}
        <div className="hero-socials">
          {[
            { icon: <Github size={18} />,   href: 'https://github.com',    label: 'GitHub'   },
            { icon: <Linkedin size={18} />, href: 'https://linkedin.com',  label: 'LinkedIn' },
            { icon: <Twitter size={18} />,  href: 'https://twitter.com',   label: 'Twitter'  },
          ].map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="social-link" aria-label={s.label}>
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      <button className="scroll-indicator" onClick={scroll} aria-label="Scroll down">
        <ChevronDown size={24} />
      </button>
    </section>
  )
}
