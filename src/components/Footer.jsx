import { Shield, Heart, Terminal } from 'lucide-react'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="footer-inner section-container">
        <div className="footer-brand">
          <Shield size={18} />
          <span className="footer-name">
            <span className="green">sec</span>analyst
          </span>
        </div>

        <p className="footer-copy">
          <Terminal size={13} /> Built with React · &copy; {year} Alex Morgan
        </p>

        <p className="footer-motto">
          "Hack the planet — responsibly."
        </p>
      </div>
    </footer>
  )
}
