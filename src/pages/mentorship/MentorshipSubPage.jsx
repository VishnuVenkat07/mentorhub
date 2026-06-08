import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaCheckCircle, FaArrowRight, FaArrowLeft, FaStar, FaQuoteLeft } from 'react-icons/fa'
import AnimatedSection from '../../components/ui/AnimatedSection'
import Button from '../../components/ui/Button'

const card = {
  background: 'var(--color-card)',
  border: '1px solid var(--color-border)',
  borderRadius: '1rem',
  boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
}

const Eyebrow = ({ children, color }) => (
  <span className="inline-block text-xs font-bold uppercase tracking-[0.15em] mb-3" style={{ color: color || 'var(--color-accent)' }}>
    {children}
  </span>
)

const heroImages = {
  'full-stack':        'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=700&q=80',
  'mobile-app':        'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=700&q=80',
  design:              'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=700&q=80',
  'data-analytics':    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80',
  devops:              'https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=700&q=80',
  mern:                'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=700&q=80',
  'college-placement': 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=700&q=80',
  'resume-building':   'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=700&q=80',
  'ai-tools':          'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=700&q=80',
}

const mentorAvatars = [
  { name: 'Arjun Sharma',  role: 'Senior Engineer',   img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80', color: '#3b82f6' },
  { name: 'Priya Mehta',   role: 'Product Designer',  img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80', color: '#ec4899' },
  { name: 'Rahul Verma',   role: 'Lead DevOps',       img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80', color: '#f59e0b' },
  { name: 'Sneha Patel',   role: 'Data Scientist',    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80', color: '#8b5cf6' },
]

export default function MentorshipSubPage({ program }) {
  const { id, title, description, tools, learnings, color } = program
  const heroImg = heroImages[id] || heroImages['full-stack']

  return (
    <div className="overflow-x-hidden">

      {/* Back */}
      <div className="pt-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/mentorship"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
            style={{ color: 'var(--color-textMuted)' }}
            onMouseEnter={e => { e.currentTarget.style.color = color }}
            onMouseLeave={e => { e.currentTarget.style.color = 'var(--color-textMuted)' }}
          >
            <FaArrowLeft size={12} /> All Programs
          </Link>
        </div>
      </div>

      {/* ── HERO ── */}
      <section className="py-14 px-4 sm:px-6 lg:px-8" style={{ background: `linear-gradient(150deg, ${color}10, #ffffff 60%)` }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-5" style={{ background: `${color}18`, color, border: `1px solid ${color}30` }}>
                Mentorship Program
              </span>
              <h1 className="text-4xl sm:text-5xl font-black leading-[1.1] mb-5" style={{ color: 'var(--color-text)' }}>{title}</h1>
              <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--color-textMuted)' }}>{description}</p>
              <div className="flex flex-wrap gap-4">
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white text-sm" style={{ background: `linear-gradient(135deg, ${color}, ${color}cc)` }}>
                    Enroll Now <FaArrowRight size={13} />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm" style={{ border: `2px solid ${color}`, color }}>
                    Book a Free Call
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="hidden lg:block relative">
              <div className="rounded-3xl overflow-hidden" style={{ boxShadow: `0 24px 64px ${color}30` }}>
                <img src={heroImg} alt={title} className="w-full h-[420px] object-cover" />
                <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, transparent 60%, ${color}25 100%)` }} />
              </div>
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-6 bottom-12 rounded-2xl px-5 py-4 flex items-center gap-3"
                style={{ background: 'white', boxShadow: '0 12px 40px rgba(0,0,0,0.12)', border: '1px solid #e2e8f0' }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${color}18` }}>
                  <FaStar style={{ color }} />
                </div>
                <div>
                  <p className="text-xs font-semibold" style={{ color: '#64748b' }}>Program Rating</p>
                  <p className="text-lg font-black" style={{ color: '#0f172a' }}>4.9 / 5.0</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TOOLS ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ background: 'var(--color-secondary)' }}>
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-10">
            <Eyebrow color={color}>Tech Stack</Eyebrow>
            <h2 className="text-3xl font-black" style={{ color: 'var(--color-text)' }}>
              Tools & <span style={{ background: `linear-gradient(135deg, ${color}, ${color}88)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Technologies</span>
            </h2>
          </AnimatedSection>
          <div className="flex flex-wrap gap-3 justify-center">
            {tools.map((tool, i) => (
              <AnimatedSection key={tool} delay={i * 0.04} variant="scaleIn">
                <motion.span
                  className="px-5 py-3 rounded-xl text-sm font-semibold cursor-default"
                  style={{ ...card, color: 'var(--color-text)' }}
                  whileHover={{ scale: 1.06, color, borderColor: color, boxShadow: `0 8px 24px ${color}25` }}
                  transition={{ duration: 0.15 }}
                >
                  {tool}
                </motion.span>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEARNINGS + HIGHLIGHTS ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ background: 'var(--color-primary)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <AnimatedSection variant="fadeLeft">
              <Eyebrow color={color}>Curriculum</Eyebrow>
              <h2 className="text-3xl font-black mb-8" style={{ color: 'var(--color-text)' }}>What You'll <span style={{ background: `linear-gradient(135deg, ${color}, ${color}88)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Learn</span></h2>
              <ul className="space-y-3">
                {learnings.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-4 p-4 rounded-xl"
                    style={card}
                  >
                    <FaCheckCircle size={16} style={{ color, flexShrink: 0, marginTop: 2 }} />
                    <span className="text-sm" style={{ color: 'var(--color-text)' }}>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection variant="fadeRight">
              <div className="rounded-2xl p-8" style={card}>
                <h3 className="text-xl font-bold mb-6" style={{ color: 'var(--color-text)' }}>Program Highlights</h3>
                {[
                  ['Duration',    '8–12 Weeks'],
                  ['Sessions',    '2–3 per week'],
                  ['Format',      'Live 1-on-1'],
                  ['Projects',    '3+ real projects'],
                  ['Certificate', 'Yes, on completion'],
                  ['Placement',   'Supported'],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between py-3" style={{ borderBottom: '1px solid var(--color-border)' }}>
                    <span className="text-sm" style={{ color: 'var(--color-textMuted)' }}>{label}</span>
                    <span className="text-sm font-bold" style={{ color }}>{value}</span>
                  </div>
                ))}
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="mt-6">
                  <Link to="/contact" className="flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm text-white w-full" style={{ background: `linear-gradient(135deg, ${color}, ${color}cc)` }}>
                    Enroll Now <FaArrowRight size={12} />
                  </Link>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── MENTORS ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ background: 'var(--color-secondary)' }}>
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <Eyebrow color={color}>Your Guides</Eyebrow>
            <h2 className="text-3xl font-black" style={{ color: 'var(--color-text)' }}>
              Meet Your <span style={{ background: `linear-gradient(135deg, ${color}, ${color}88)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Mentors</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {mentorAvatars.map((m, i) => (
              <AnimatedSection key={m.name} delay={i * 0.1} variant="scaleIn">
                <motion.div className="rounded-2xl p-6 text-center" style={card} whileHover={{ y: -6, borderColor: m.color, boxShadow: `0 16px 32px ${m.color}20` }} transition={{ duration: 0.2 }}>
                  <img src={m.img} alt={m.name} className="w-16 h-16 rounded-full object-cover mx-auto mb-3" style={{ border: `3px solid ${m.color}40` }} />
                  <p className="text-sm font-bold" style={{ color: 'var(--color-text)' }}>{m.name}</p>
                  <p className="text-xs mt-1" style={{ color: 'var(--color-textMuted)' }}>{m.role}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ background: `linear-gradient(135deg, ${color}18, ${color}06)`, borderTop: `1px solid ${color}20` }}>
        <div className="max-w-2xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-black mb-4" style={{ color: 'var(--color-text)' }}>
              Ready to start your <span style={{ color }}>{title}</span> journey?
            </h2>
            <p className="mb-8" style={{ color: 'var(--color-textMuted)' }}>
              Limited seats available. Join today and take the first step toward your dream career.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm text-white" style={{ background: `linear-gradient(135deg, ${color}, ${color}cc)` }}>
                  Enroll Now <FaArrowRight />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm" style={{ border: `2px solid ${color}`, color }}>
                  Book a Free Call
                </Link>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

    </div>
  )
}
