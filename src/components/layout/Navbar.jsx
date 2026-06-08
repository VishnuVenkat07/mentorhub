import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes, FaGraduationCap, FaChevronDown, FaArrowRight } from 'react-icons/fa'

// ─── Nav config ───────────────────────────────────────────────────────────────
const NAV = [
  { label: 'Home',  path: '/' },
  { label: 'About', path: '/about' },
  {
    label: 'Mentorship',
    path: '/mentorship',
    cols: 3,
    headline: '9 expert-led programs available',
    dropdown: [
      { label: 'Full Stack Dev',    path: '/mentorship/full-stack',        desc: 'React, Node.js & MongoDB' },
      { label: 'Mobile App Dev',    path: '/mentorship/mobile-app',        desc: 'React Native & Flutter' },
      { label: 'UI/UX Design',      path: '/mentorship/design',            desc: 'Figma & design systems' },
      { label: 'Data Analytics',    path: '/mentorship/data-analytics',    desc: 'Power BI, SQL & Python' },
      { label: 'DevOps & Cloud',    path: '/mentorship/devops',            desc: 'Docker, AWS & CI/CD' },
      { label: 'MERN Stack',        path: '/mentorship/mern',              desc: 'Full MERN development' },
      { label: 'College Placement', path: '/mentorship/college-placement', desc: 'Campus recruitment prep' },
      { label: 'Resume Building',   path: '/mentorship/resume-building',   desc: 'ATS-ready resumes & LinkedIn' },
      { label: 'AI Tools',          path: '/mentorship/ai-tools',          desc: 'ChatGPT, Copilot & more' },
    ],
  },
  {
    label: 'Career',
    path: '/career',
    cols: 2,
    headline: 'Jobs, internships & prep resources',
    dropdown: [
      { label: 'Job Openings',   path: '/career',                       desc: 'Full-time positions at top tech companies' },
      { label: 'Internships',    path: '/career',                       desc: 'Paid internship programs for students' },
      { label: 'Resume Tips',    path: '/mentorship/resume-building',   desc: 'Build an ATS-ready resume' },
      { label: 'Interview Prep', path: '/mentorship/college-placement', desc: 'Mock interviews & coding rounds' },
    ],
  },
  {
    label: 'Services',
    path: '/services',
    cols: 2,
    headline: '6 professional services for businesses',
    dropdown: [
      { label: 'Web Development',    path: '/services/web-development',    desc: 'Custom web apps & websites' },
      { label: 'Mobile Development', path: '/services/mobile-development', desc: 'iOS & Android applications' },
      { label: 'UI/UX Design',       path: '/services/ui-ux-design',       desc: 'User-centered design solutions' },
      { label: 'Data Analytics',     path: '/services/data-analytics',     desc: 'Insights & dashboards' },
      { label: 'DevOps & Cloud',     path: '/services/devops-cloud',       desc: 'Infrastructure & CI/CD' },
      { label: 'AI Automation',      path: '/services/ai-automation',      desc: 'AI-powered workflows' },
    ],
  },
  { label: 'Contact', path: '/contact' },
]

// ─────────────────────────────────────────────────────────────────────────────
export default function Navbar() {
  const [open, setOpen]                     = useState(false)
  const [scrolled, setScrolled]             = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileExpanded, setMobileExpanded] = useState(null)
  const { pathname }                        = useLocation()
  const closeTimer                          = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setActiveDropdown(null)
    setMobileExpanded(null)
  }, [pathname])

  const openDD  = (label) => { clearTimeout(closeTimer.current); setActiveDropdown(label) }
  const closeDD = ()      => { closeTimer.current = setTimeout(() => setActiveDropdown(null), 150) }

  const currentDD = NAV.find(n => n.label === activeDropdown)

  const isActive = (link) =>
    pathname === link.path ||
    (link.dropdown && link.dropdown.some(d => pathname === d.path)) ||
    (link.path !== '/' && pathname.startsWith(link.path + '/'))

  return (
    <>
      {/* ── Floating Pill Navbar ──────────────────────────────────────────── */}
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
      >
        {/* Desktop pill */}
        <div
          className="hidden md:flex items-center w-full max-w-5xl px-5 py-2.5 rounded-full"
          style={{
            background:
              'linear-gradient(var(--color-primary), var(--color-primary)) padding-box, ' +
              'linear-gradient(135deg, var(--color-accent), var(--color-accentGold), #a78bfa) border-box',
            border: '1.5px solid transparent',
            boxShadow: scrolled
              ? '0 8px 32px rgba(37,99,235,0.15), 0 2px 8px rgba(0,0,0,0.08)'
              : '0 4px 20px rgba(0,0,0,0.07)',
            backdropFilter: 'blur(14px)',
            transition: 'box-shadow 0.3s ease',
          }}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, var(--color-accent), var(--color-accentGold))' }}
            >
              <FaGraduationCap className="text-white text-sm" />
            </div>
            <span className="text-base font-bold" style={{ color: 'var(--color-text)' }}>
              Mentor<span style={{ color: 'var(--color-accent)' }}>Hub</span>
            </span>
          </Link>

          <div className="w-px h-5 mx-5 flex-shrink-0" style={{ background: 'var(--color-border)' }} />

          {/* Nav links — no active background, text colour only */}
          <nav className="flex items-center gap-1 flex-1">
            {NAV.map(link => {
              const active = isActive(link)
              const hasDD  = !!link.dropdown
              const ddOpen = activeDropdown === link.label

              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => hasDD && openDD(link.label)}
                  onMouseLeave={() => hasDD && closeDD()}
                >
                  <Link
                    to={link.path}
                    className="flex items-center gap-1 px-3.5 py-1.5 text-sm font-medium rounded-full transition-all duration-200"
                    style={{
                      color: active || ddOpen ? 'var(--color-accent)' : 'var(--color-textMuted)',
                      background: 'transparent',
                    }}
                    onMouseEnter={e => {
                      if (!active && !ddOpen) {
                        e.currentTarget.style.color = 'var(--color-text)'
                        e.currentTarget.style.background = 'rgba(0,0,0,0.04)'
                      }
                    }}
                    onMouseLeave={e => {
                      if (!active && !ddOpen) {
                        e.currentTarget.style.color = 'var(--color-textMuted)'
                        e.currentTarget.style.background = 'transparent'
                      }
                    }}
                  >
                    {link.label}
                    {hasDD && (
                      <motion.span
                        animate={{ rotate: ddOpen ? 180 : 0 }}
                        transition={{ duration: 0.22 }}
                        style={{ display: 'inline-flex', marginLeft: 1, opacity: 0.7 }}
                      >
                        <FaChevronDown size={9} />
                      </motion.span>
                    )}
                  </Link>
                </div>
              )
            })}
          </nav>

          {/* Get in Touch button */}
          <div className="flex items-center flex-shrink-0 ml-3">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/contact"
                className="flex items-center gap-1.5 px-5 py-2 rounded-full text-sm font-semibold text-white"
                style={{
                  background: 'linear-gradient(135deg, #2563eb, var(--color-accentGold))',
                  boxShadow: '0 2px 12px rgba(37,99,235,0.25)',
                  transition: 'box-shadow 0.2s, opacity 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.opacity = '0.9'
                  e.currentTarget.style.boxShadow = '0 4px 18px rgba(37,99,235,0.38)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.opacity = '1'
                  e.currentTarget.style.boxShadow = '0 2px 12px rgba(37,99,235,0.25)'
                }}
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Mobile pill header */}
        <div
          className="flex md:hidden items-center justify-between w-full px-4 py-3 rounded-full"
          style={{
            background:
              'linear-gradient(var(--color-primary), var(--color-primary)) padding-box, ' +
              'linear-gradient(135deg, var(--color-accent), var(--color-accentGold)) border-box',
            border: '1.5px solid transparent',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          }}
        >
          <Link to="/" className="flex items-center gap-2">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, var(--color-accent), var(--color-accentGold))' }}
            >
              <FaGraduationCap className="text-white text-xs" />
            </div>
            <span className="text-sm font-bold" style={{ color: 'var(--color-text)' }}>
              Mentor<span style={{ color: 'var(--color-accent)' }}>Hub</span>
            </span>
          </Link>
          <button
            onClick={() => setOpen(v => !v)}
            className="p-2 rounded-full"
            style={{ color: 'var(--color-textMuted)', background: 'rgba(0,0,0,0.04)' }}
          >
            {open ? <FaTimes size={16} /> : <FaBars size={16} />}
          </button>
        </div>
      </motion.div>

      {/* ── Desktop Mega-Menu Dropdown ─────────────────────────────────────── */}
      <AnimatePresence>
        {activeDropdown && currentDD && (
          <motion.div
            key={activeDropdown}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.17, ease: 'easeOut' }}
            className="fixed z-40 left-0 right-0 hidden md:flex justify-center px-4"
            style={{ top: 70 }}
            onMouseEnter={() => openDD(activeDropdown)}
            onMouseLeave={closeDD}
          >
            <div
              style={{
                width: '100%',
                maxWidth: 860,
                background: '#ffffff',
                border: '1px solid var(--color-border)',
                borderRadius: '1.5rem',
                boxShadow: '0 24px 64px rgba(0,0,0,0.11), 0 4px 16px rgba(0,0,0,0.05)',
                padding: '1.5rem',
              }}
            >
              <div
                className="flex items-center justify-between mb-4 pb-3"
                style={{ borderBottom: '1px solid var(--color-border)' }}
              >
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--color-accent)' }}>
                    Browse {activeDropdown}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--color-textMuted)' }}>
                    {currentDD.headline}
                  </p>
                </div>
                <Link
                  to={currentDD.path}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full"
                  style={{
                    color: 'var(--color-accent)',
                    background: 'rgba(37,99,235,0.08)',
                    border: '1px solid rgba(37,99,235,0.18)',
                  }}
                >
                  View all <FaArrowRight size={9} />
                </Link>
              </div>

              <div
                className="grid gap-0.5"
                style={{ gridTemplateColumns: `repeat(${currentDD.cols}, 1fr)` }}
              >
                {currentDD.dropdown.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.02, duration: 0.18 }}
                  >
                    <Link
                      to={item.path}
                      className="block px-3 py-2.5 rounded-xl transition-all"
                      style={{ background: 'transparent' }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = 'rgba(37,99,235,0.06)'
                        e.currentTarget.querySelector('.dd-label').style.color = 'var(--color-accent)'
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = 'transparent'
                        e.currentTarget.querySelector('.dd-label').style.color = 'var(--color-text)'
                      }}
                    >
                      <p className="dd-label text-sm font-semibold leading-tight transition-colors" style={{ color: 'var(--color-text)' }}>
                        {item.label}
                      </p>
                      <p className="text-xs mt-0.5" style={{ color: 'var(--color-textMuted)' }}>
                        {item.desc}
                      </p>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div
                className="mt-4 pt-3 flex items-center justify-between"
                style={{ borderTop: '1px solid var(--color-border)' }}
              >
                <p className="text-xs" style={{ color: 'var(--color-textMuted)' }}>
                  {activeDropdown === 'Mentorship' && '🎓 Free first session on all programs'}
                  {activeDropdown === 'Career'     && '💼 New openings added every week'}
                  {activeDropdown === 'Services'   && '🚀 Free consultation call available'}
                </p>
                <Link
                  to="/contact"
                  className="text-xs font-semibold flex items-center gap-1"
                  style={{ color: 'var(--color-accent)' }}
                >
                  Talk to an expert <FaArrowRight size={9} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Mobile Menu ───────────────────────────────────────────────────────  */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[72px] left-3 right-3 z-40 md:hidden rounded-2xl overflow-y-auto"
            style={{
              background: '#f8fafc',
              border: '1px solid var(--color-border)',
              boxShadow: '0 16px 48px rgba(0,0,0,0.12)',
              maxHeight: 'calc(100vh - 96px)',
            }}
          >
            <div className="py-3 px-3">

              {NAV.map((link) => (
                <div key={link.label}>
                  {link.dropdown ? (
                    /* Accordion section — header + card items */
                    <div className="mb-1">
                      {/* Section header row */}
                      <button
                        onClick={() => setMobileExpanded(p => p === link.label ? null : link.label)}
                        className="w-full flex items-center justify-between px-3 py-3"
                      >
                        <span
                          className="text-xs font-bold uppercase tracking-widest"
                          style={{ color: 'var(--color-textMuted)', letterSpacing: '0.1em' }}
                        >
                          {link.label}
                        </span>
                        <motion.span
                          animate={{ rotate: mobileExpanded === link.label ? 180 : 0 }}
                          transition={{ duration: 0.22 }}
                          style={{ display: 'inline-flex', color: 'var(--color-textMuted)' }}
                        >
                          <FaChevronDown size={12} />
                        </motion.span>
                      </button>

                      {/* Expandable sub-items as cards */}
                      <AnimatePresence>
                        {mobileExpanded === link.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: 'easeInOut' }}
                            style={{ overflow: 'hidden' }}
                          >
                            <div className="flex flex-col gap-2 pb-2">
                              {link.dropdown.map((sub) => (
                                <Link
                                  key={sub.label}
                                  to={sub.path}
                                  className="block px-4 py-3.5 rounded-xl"
                                  style={{
                                    background: pathname === sub.path ? 'rgba(37,99,235,0.07)' : '#ffffff',
                                    border: '1px solid',
                                    borderColor: pathname === sub.path ? 'rgba(37,99,235,0.2)' : 'var(--color-border)',
                                  }}
                                >
                                  <p
                                    className="text-sm font-semibold"
                                    style={{ color: pathname === sub.path ? '#2563eb' : 'var(--color-text)' }}
                                  >
                                    {sub.label}
                                  </p>
                                  <p
                                    className="text-xs mt-0.5"
                                    style={{ color: 'var(--color-textMuted)', lineHeight: 1.5 }}
                                  >
                                    {sub.desc}
                                  </p>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Divider */}
                      <div style={{ height: 1, background: 'var(--color-border)', margin: '2px 0 6px' }} />
                    </div>
                  ) : (
                    /* Simple top-level link */
                    <Link
                      to={link.path}
                      className="flex items-center px-3 py-3 text-sm font-semibold mb-0.5 transition-all"
                      style={{
                        color: pathname === link.path ? '#2563eb' : 'var(--color-text)',
                      }}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}

              {/* Get in Touch CTA */}
              <div className="pt-2 pb-1">
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-bold text-white"
                  style={{
                    background: 'linear-gradient(135deg, #2563eb, var(--color-accentGold))',
                    boxShadow: '0 4px 14px rgba(37,99,235,0.28)',
                  }}
                >
                  Get in Touch <FaArrowRight size={11} />
                </Link>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
