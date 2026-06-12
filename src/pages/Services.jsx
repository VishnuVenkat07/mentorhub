import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  FaGlobe, FaMobileAlt, FaPalette, FaChartPie, FaCloud, FaRobot,
  FaArrowRight, FaCheckCircle, FaLightbulb, FaCogs, FaRocket, FaHandshake,
} from 'react-icons/fa'
import AnimatedSection from '../components/ui/AnimatedSection'
import { services } from '../data/services'

import { FaSearch, FaBullhorn, FaPen, FaPaintBrush } from 'react-icons/fa'

const iconMap = { FaGlobe, FaMobileAlt, FaPalette, FaChartPie, FaCloud, FaRobot, FaSearch, FaBullhorn, FaPen, FaPaintBrush }

/* ── Service card images ──────────────────────────────────────── */
const serviceImages = {
  'web-development':    'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80&auto=format&fit=crop',
  'mobile-development': 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80&auto=format&fit=crop',
  'ui-ux-design':       'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80&auto=format&fit=crop',
  'data-analytics':     'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80&auto=format&fit=crop',
  'devops-cloud':       'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80&auto=format&fit=crop',
  'ai-automation':      'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80&auto=format&fit=crop',
  'seo':                'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=600&q=80&auto=format&fit=crop',
  'digital-marketing':  'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80&auto=format&fit=crop',
  'content-writing':    'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&q=80&auto=format&fit=crop',
  'graphic-design':     'https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&q=80&auto=format&fit=crop',
}

/* ── Workflow steps ─────────────────────────────────────────── */
const steps = [
  { icon: FaLightbulb, title: 'Discovery',       desc: 'We understand your business goals, target audience, and technical requirements through in-depth consultation.' },
  { icon: FaPalette,   title: 'Design & Plan',   desc: 'Our team crafts wireframes, system architecture, and a detailed project roadmap tailored to your needs.' },
  { icon: FaCogs,      title: 'Development',     desc: "Agile sprints, clean code, and regular demos ensure you're always in the loop during the build phase." },
  { icon: FaRocket,    title: 'Launch & Support', desc: 'We deploy, test thoroughly, and provide ongoing maintenance so your product stays fast and reliable.' },
]

/* ── Why Choose Us items ──────────────────────────────────────── */
const whyUs = [
  { q: 'Why choose MentorHub for your tech project?',          a: 'We combine mentorship expertise with professional development — our team has trained 200+ students and built real-world products for clients across multiple industries.' },
  { q: 'How quickly can we get started?',                       a: 'After a free consultation call, we can begin discovery within 48 hours. Most projects kick off within one week of signing.' },
  { q: 'Do you offer post-launch support?',                     a: 'Yes. Every project comes with a 30-day free support window. We also offer flexible monthly maintenance packages.' },
  { q: 'Can you work with my existing codebase or team?',       a: 'Absolutely. We regularly collaborate with in-house dev teams, audit legacy code, and build on top of existing platforms.' },
]

export default function Services() {
  return (
    <div style={{ background: 'var(--color-bg)' }}>

      {/* ══════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden pt-28 pb-20 px-4 sm:px-6 lg:px-8"
        style={{ background: '#0a0f2e' }}
      >
        {/* Background image — tech circuit board, clearly visible */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }} />
        {/* Dark blue overlay — makes image visible but text stays readable */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: 'linear-gradient(160deg, rgba(10,15,46,0.75) 0%, rgba(15,23,42,0.70) 50%, rgba(30,58,138,0.72) 100%)',
        }} />
        {/* dot grid on top */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 2,
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }} />
        {/* glow orbs */}
        <div style={{ position: 'absolute', top: -80, right: -80, width: 340, height: 340,
          background: 'radial-gradient(circle, rgba(37,99,235,0.22) 0%, transparent 70%)', borderRadius: '50%', zIndex: 2 }} />
        <div style={{ position: 'absolute', bottom: -60, left: -60, width: 260, height: 260,
          background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)', borderRadius: '50%', zIndex: 2 }} />

        <div className="relative max-w-3xl mx-auto text-center" style={{ zIndex: 10 }}>
          <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1
              className="font-black text-white"
              style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4rem)', lineHeight: 1.1, marginBottom: '1.2rem' }}
            >
              Professional
              <span style={{ color: '#93c5fd' }}> Tech Services</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.62)', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: 560, margin: '0 auto 2.4rem' }}>
              From web apps to AI automation — we deliver end-to-end solutions backed by
              years of real-world expertise and mentorship.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-white"
                  style={{ background: 'linear-gradient(135deg,#2563eb,#1d4ed8)', boxShadow: '0 6px 20px rgba(37,99,235,0.4)' }}
                >
                  Get Free Consultation <FaArrowRight size={12} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <a
                  href="#services-grid"
                  onClick={e => { e.preventDefault(); document.getElementById('services-grid')?.scrollIntoView({ behavior: 'smooth' }) }}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold"
                  style={{ background: 'transparent', color: '#fff', border: '2px solid rgba(255,255,255,0.45)' }}
                >
                  Explore Services
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          NUMBERED SERVICES GRID  (scriptingspider style)
      ══════════════════════════════════════════════════════ */}
      <section id="services-grid" className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: 'var(--color-bg)' }}>
        <div className="max-w-7xl mx-auto">

          {/* Section header */}
          <AnimatedSection variant="fadeUp">
            <div className="text-center mb-14">
              <span
                className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
                style={{ background: 'rgba(37,99,235,0.12)', color: '#2563eb', border: '1px solid rgba(37,99,235,0.25)' }}
              >
                Our Services
              </span>
              <h2 className="text-3xl sm:text-4xl font-black mb-3" style={{ color: 'var(--color-text)' }}>
                Everything You <span style={{ color: '#2563eb' }}>Need</span>
              </h2>
              <p className="text-base max-w-xl mx-auto" style={{ color: 'var(--color-textMuted)' }}>
                Full-cycle development services from idea to deployment, backed by years of real-world expertise.
              </p>
            </div>
          </AnimatedSection>

          {/* Numbered cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((s, i) => {
              const Icon = iconMap[s.icon] || FaGlobe
              const num  = String(i + 1).padStart(2, '0')
              return (
                <AnimatedSection key={s.id} delay={i * 0.07} variant="fadeUp">
                  <motion.div
                    className="group relative rounded-2xl h-full flex flex-col overflow-hidden"
                    style={{
                      background: 'var(--color-card)',
                      border: '1px solid var(--color-border)',
                    }}
                    whileHover={{ y: -6, boxShadow: '0 24px 48px rgba(37,99,235,0.18), 0 0 0 1.5px #2563eb55' }}
                    transition={{ duration: 0.25 }}
                  >
                    {/* Service image at top */}
                    <div className="relative overflow-hidden" style={{ height: 180 }}>
                      <img
                        src={serviceImages[s.id]}
                        alt={s.title}
                        style={{
                          width: '100%', height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.4s ease',
                        }}
                        className="group-hover:scale-105"
                      />
                      {/* Blue overlay on image */}
                      <div style={{
                        position: 'absolute', inset: 0,
                        background: 'linear-gradient(180deg, rgba(37,99,235,0.25) 0%, rgba(15,23,42,0.55) 100%)',
                      }} />
                      {/* Number badge on image */}
                      <span
                        className="absolute top-3 left-3 text-xs font-black px-2.5 py-1 rounded-lg"
                        style={{ background: 'rgba(255,255,255,0.18)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)', backdropFilter: 'blur(8px)', letterSpacing: 1 }}
                      >
                        {num}
                      </span>
                      {/* Icon badge on image */}
                      <div
                        className="absolute bottom-3 right-3 w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ background: 'rgba(37,99,235,0.85)', backdropFilter: 'blur(8px)' }}
                      >
                        <Icon size={17} style={{ color: '#fff' }} />
                      </div>
                    </div>

                    {/* Card body */}
                    <div className="p-6 flex flex-col flex-1 relative">
                      {/* Large background number */}
                      <span
                        className="absolute top-2 right-4 font-black select-none pointer-events-none"
                        style={{ fontSize: '4rem', lineHeight: 1, color: 'rgba(37,99,235,0.06)' }}
                      >
                        {num}
                      </span>

                    {/* Title */}
                    <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--color-text)' }}>
                      {s.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: 'var(--color-textMuted)' }}>
                      {s.description}
                    </p>

                    {/* Feature bullets */}
                    <ul className="space-y-2 mb-6">
                      {s.features.slice(0, 3).map(f => (
                        <li key={f} className="flex items-start gap-2 text-xs" style={{ color: 'var(--color-textMuted)' }}>
                          <FaCheckCircle size={11} className="flex-shrink-0 mt-0.5" style={{ color: '#2563eb' }} />
                          {f}
                        </li>
                      ))}
                    </ul>

                    {/* Read More link */}
                    <Link
                      to={s.path}
                      className="inline-flex items-center gap-2 text-sm font-bold group-hover:gap-3 transition-all duration-200"
                      style={{ color: '#2563eb' }}
                    >
                      Read More <FaArrowRight size={11} />
                    </Link>

                    </div>{/* end card body */}
                  </motion.div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          OUR WORKFLOW  (4-step process)
      ══════════════════════════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: 'var(--color-secondary)' }}>
        <div className="max-w-6xl mx-auto">
          <AnimatedSection variant="fadeUp">
            <div className="text-center mb-14">
              <span
                className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
                style={{ background: 'rgba(37,99,235,0.12)', color: '#2563eb', border: '1px solid rgba(37,99,235,0.25)' }}
              >
                How We Work
              </span>
              <h2 className="text-3xl sm:text-4xl font-black mb-3" style={{ color: 'var(--color-text)' }}>
                Our <span style={{ color: '#2563eb' }}>Workflow</span>
              </h2>
              <p className="text-base max-w-lg mx-auto" style={{ color: 'var(--color-textMuted)' }}>
                A transparent, structured process that keeps you informed at every stage.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connector line (desktop) */}
            <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px" style={{ background: 'linear-gradient(90deg,#2563eb55,#6366f155)', zIndex: 0 }} />

            {steps.map((step, i) => (
              <AnimatedSection key={step.title} delay={i * 0.1} variant="fadeUp">
                <motion.div
                  className="relative flex flex-col items-center text-center p-7 rounded-2xl z-10"
                  style={{ background: 'var(--color-card)', border: '1px solid var(--color-border)' }}
                  whileHover={{ y: -5, boxShadow: '0 16px 40px rgba(37,99,235,0.15)' }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Step number circle */}
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-4 font-black text-white text-sm"
                    style={{ background: 'linear-gradient(135deg,#1e3a8a,#2563eb)', boxShadow: '0 4px 14px rgba(37,99,235,0.4)' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: 'rgba(37,99,235,0.1)' }}
                  >
                    <step.icon size={18} style={{ color: '#2563eb' }} />
                  </div>
                  <h4 className="font-bold mb-2" style={{ color: 'var(--color-text)' }}>{step.title}</h4>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--color-textMuted)' }}>{step.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          WHY CHOOSE US  (FAQ / accordion style)
      ══════════════════════════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: 'var(--color-bg)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-14 items-start">

            {/* Left — heading + stats */}
            <AnimatedSection variant="fadeLeft">
              <span
                className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5"
                style={{ background: 'rgba(37,99,235,0.12)', color: '#2563eb', border: '1px solid rgba(37,99,235,0.25)' }}
              >
                Why Choose Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-black mb-5" style={{ color: 'var(--color-text)' }}>
                Why Businesses<br />
                <span style={{ color: '#2563eb' }}>Trust MentorHub</span>
              </h2>
              <p className="text-sm leading-relaxed mb-8" style={{ color: 'var(--color-textMuted)' }}>
                We're not just developers — we're mentors, problem-solvers, and long-term partners
                committed to your success at every stage.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { n: '200+', l: 'Projects Delivered' },
                  { n: '50+',  l: 'Business Partners'  },
                  { n: '95%',  l: 'Client Satisfaction' },
                  { n: '5+',   l: 'Years Experience'    },
                ].map(s => (
                  <div key={s.l} className="p-5 rounded-2xl text-center" style={{ background: 'var(--color-card)', border: '1px solid var(--color-border)' }}>
                    <p className="text-2xl font-black" style={{ color: '#2563eb' }}>{s.n}</p>
                    <p className="text-xs mt-1" style={{ color: 'var(--color-textMuted)' }}>{s.l}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Right — FAQ accordion */}
            <AnimatedSection variant="fadeRight">
              <div className="space-y-3">
                {whyUs.map((item, i) => (
                  <WhyItem key={i} q={item.q} a={item.a} />
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CTA  BANNER
      ══════════════════════════════════════════════════════ */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)' }}
      >
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }} />
        <AnimatedSection variant="fadeUp">
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <FaHandshake size={40} className="mx-auto mb-5" style={{ color: 'rgba(255,255,255,0.7)' }} />
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-lg mb-8" style={{ color: 'rgba(255,255,255,0.72)' }}>
              Let's discuss your project. Get a free consultation with our expert team today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm"
                  style={{ background: '#fff', color: '#1e3a8a', boxShadow: '0 6px 20px rgba(0,0,0,0.25)' }}
                >
                  Get Free Consultation <FaArrowRight size={13} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/career"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm text-white"
                  style={{ background: 'rgba(255,255,255,0.15)', border: '2px solid rgba(255,255,255,0.45)' }}
                >
                  View Careers
                </Link>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </section>

    </div>
  )
}

/* ── Why Choose Us accordion item ─────────────────────────────── */
import { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import { AnimatePresence } from 'framer-motion'

function WhyItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      className="rounded-2xl overflow-hidden cursor-pointer"
      style={{ background: 'var(--color-card)', border: `1px solid ${open ? '#2563eb55' : 'var(--color-border)'}`, transition: 'border-color 0.2s' }}
      onClick={() => setOpen(o => !o)}
    >
      <div className="flex items-center justify-between gap-4 px-6 py-4">
        <p className="text-sm font-semibold" style={{ color: 'var(--color-text)' }}>{q}</p>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }} className="flex-shrink-0">
          <FaChevronDown size={13} style={{ color: '#2563eb' }} />
        </motion.span>
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28 }}
            style={{ overflow: 'hidden' }}
          >
            <div className="px-6 pb-5">
              <div className="h-px mb-4" style={{ background: 'var(--color-border)' }} />
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-textMuted)' }}>{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
