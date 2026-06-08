import { Link } from 'react-router-dom'
import { FaGraduationCap, FaLinkedin, FaInstagram, FaTwitter, FaYoutube,
         FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import { theme } from '../../config/theme'

const quickLinks = [
  { label: 'Home',       path: '/' },
  { label: 'About',      path: '/about' },
  { label: 'Mentorship', path: '/mentorship' },
  { label: 'Career',     path: '/career' },
  { label: 'Services',   path: '/services' },
  { label: 'Contact',    path: '/contact' },
]

const mentorshipLinks = [
  { label: 'Full Stack Dev',    path: '/mentorship/full-stack' },
  { label: 'Mobile App Dev',   path: '/mentorship/mobile-app' },
  { label: 'UI/UX Design',     path: '/mentorship/design' },
  { label: 'Data Analytics',   path: '/mentorship/data-analytics' },
  { label: 'DevOps',           path: '/mentorship/devops' },
  { label: 'AI Tools',         path: '/mentorship/ai-tools' },
]

const socials = [
  { icon: FaLinkedin,  href: theme.social.linkedin,  label: 'LinkedIn' },
  { icon: FaInstagram, href: theme.social.instagram, label: 'Instagram' },
  { icon: FaTwitter,   href: theme.social.twitter,   label: 'Twitter' },
  { icon: FaYoutube,   href: theme.social.youtube,   label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer style={{ background: 'var(--color-secondary)', borderTop: `1px solid var(--color-border)` }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Col 1 — Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, var(--color-accent), var(--color-accentGold))' }}
              >
                <FaGraduationCap className="text-white text-lg" />
              </div>
              <span className="text-xl font-bold" style={{ color: 'var(--color-text)' }}>
                Mentor<span style={{ color: 'var(--color-accent)' }}>Hub</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--color-textMuted)' }}>
              {theme.company.tagline}. Building the next generation of tech professionals through expert-led mentorship.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{ background: 'var(--color-card)', border: `1px solid var(--color-border)`, color: 'var(--color-textMuted)' }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'var(--color-accent)'; e.currentTarget.style.borderColor = 'var(--color-accent)' }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--color-textMuted)'; e.currentTarget.style.borderColor = 'var(--color-border)' }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-5" style={{ color: 'var(--color-accent)' }}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map(link => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm transition-colors duration-200 hover:translate-x-1 inline-block"
                    style={{ color: 'var(--color-textMuted)' }}
                    onMouseEnter={e => { e.currentTarget.style.color = 'var(--color-text)' }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'var(--color-textMuted)' }}
                  >
                    → {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Mentorship */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-5" style={{ color: 'var(--color-accent)' }}>
              Programs
            </h4>
            <ul className="space-y-3">
              {mentorshipLinks.map(link => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm transition-colors duration-200 inline-block"
                    style={{ color: 'var(--color-textMuted)' }}
                    onMouseEnter={e => { e.currentTarget.style.color = 'var(--color-text)' }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'var(--color-textMuted)' }}
                  >
                    → {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-5" style={{ color: 'var(--color-accent)' }}>
              Contact
            </h4>
            <ul className="space-y-4">
              {[
                { icon: FaPhone,         text: theme.company.phone },
                { icon: FaEnvelope,      text: theme.company.email },
                { icon: FaMapMarkerAlt,  text: theme.company.address },
                { icon: FaClock,         text: theme.company.hours },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <Icon size={14} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--color-accent)' }} />
                  <span className="text-sm leading-snug" style={{ color: 'var(--color-textMuted)' }}>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{ borderTop: `1px solid var(--color-border)`, color: 'var(--color-textMuted)' }}
        >
          <span>© {new Date().getFullYear()} {theme.company.name}. All rights reserved.</span>
          <span>Built with ❤️ for aspiring tech professionals.</span>
        </div>
      </div>
    </footer>
  )
}
