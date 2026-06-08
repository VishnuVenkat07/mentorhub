import { FaCheckCircle, FaUsers, FaLightbulb, FaRocket, FaHeart, FaStar, FaQuoteLeft } from 'react-icons/fa'
import { motion } from 'framer-motion'
import AnimatedSection from '../components/ui/AnimatedSection'
import Counter from '../components/ui/Counter'
import Button from '../components/ui/Button'

const card = {
  background: 'var(--color-card)',
  border: '1px solid var(--color-border)',
  borderRadius: '1rem',
  boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
}

const Eyebrow = ({ children }) => (
  <span className="inline-block text-xs font-bold uppercase tracking-[0.15em] mb-3" style={{ color: 'var(--color-accent)' }}>
    {children}
  </span>
)

const stats = [
  { label: 'Students Mentored', value: 2400, suffix: '+' },
  { label: 'Expert Mentors',    value: 85,   suffix: '+' },
  { label: 'Programs Offered',  value: 9,    suffix: '' },
  { label: 'Placements',        value: 1800, suffix: '+' },
]

const team = [
  { name: 'Arjun Sharma',   role: 'Founder & CEO',          initials: 'AS', color: '#2563eb',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80' },
  { name: 'Priya Mehta',    role: 'Co-Founder & Design Lead', initials: 'PM', color: '#ec4899',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80' },
  { name: 'Rahul Verma',    role: 'CTO & DevOps Lead',       initials: 'RV', color: '#f59e0b',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80' },
  { name: 'Sneha Patel',    role: 'Head of Data Analytics',  initials: 'SP', color: '#8b5cf6',
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80' },
  { name: 'Karan Singh',    role: 'Mobile Dev Lead',         initials: 'KS', color: '#10b981',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80' },
  { name: 'Divya Nair',     role: 'AI & Automation Lead',    initials: 'DN', color: '#a855f7',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80' },
]

export default function About() {
  return (
    <div className="overflow-x-hidden">

      {/* ── HERO ── */}
      <section
        className="pt-32 pb-20 px-4 sm:px-6 lg:px-8"
        style={{ background: 'linear-gradient(150deg, #eff6ff 0%, #ffffff 60%, #f0fdf4 100%)' }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <Eyebrow>About MentorHub</Eyebrow>
              <h1 className="text-5xl font-black leading-[1.1] mb-6" style={{ color: 'var(--color-text)' }}>
                Empowering the Next Generation of{' '}
                <span style={{ background: 'linear-gradient(135deg, var(--color-accent), var(--color-accentGold))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Tech Leaders
                </span>
              </h1>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--color-textMuted)' }}>
                Founded in 2020, MentorHub has one mission: close the gap between education and employment
                in the tech industry through authentic, industry-backed mentorship — for everyone.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="hidden lg:block">
              <div className="relative rounded-3xl overflow-hidden" style={{ boxShadow: '0 24px 64px rgba(37,99,235,0.15)' }}>
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=700&q=80"
                  alt="MentorHub team"
                  className="w-full h-[360px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ background: 'linear-gradient(135deg, #1e1b4b, #1e3a8a)', padding: '3.5rem 1.5rem' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <AnimatedSection key={s.label} delay={i * 0.1} variant="fadeUp" className="text-center">
              <div className="text-4xl font-black text-white mb-1"><Counter target={s.value} suffix={s.suffix} /></div>
              <p className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.65)' }}>{s.label}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: 'var(--color-primary)' }}>
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <Eyebrow>Our Purpose</Eyebrow>
            <h2 className="text-4xl font-black mb-4" style={{ color: 'var(--color-text)' }}>
              Mission & <span style={{ background: 'linear-gradient(135deg, var(--color-accent), var(--color-accentGold))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Vision</span>
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: FaHeart, color: '#ef4444', label: 'Our Mission', text: 'To democratize access to quality tech mentorship by connecting ambitious learners with experienced industry professionals — making world-class career guidance affordable and accessible to everyone, regardless of background or location.' },
              { icon: FaLightbulb, color: '#f59e0b', label: 'Our Vision', text: 'To become the most trusted mentorship platform in Asia, producing 50,000+ successful tech professionals by 2030 — shaping a future where talent always finds its opportunity, no matter where it starts.' },
            ].map(({ icon: Icon, color, label, text }) => (
              <AnimatedSection key={label} variant="scaleIn">
                <motion.div className="rounded-2xl p-8 h-full" style={card} whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} transition={{ duration: 0.2 }}>
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ background: `${color}15` }}>
                    <Icon size={26} style={{ color }} />
                  </div>
                  <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>{label}</h3>
                  <p className="leading-relaxed" style={{ color: 'var(--color-textMuted)' }}>{text}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR STORY ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: 'var(--color-secondary)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <AnimatedSection variant="fadeLeft">
              <Eyebrow>Our Story</Eyebrow>
              <h2 className="text-4xl font-black mb-6" style={{ color: 'var(--color-text)' }}>
                What Makes Us <span style={{ background: 'linear-gradient(135deg, var(--color-accent), var(--color-accentGold))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Different</span>
              </h2>
              <p className="leading-relaxed mb-4" style={{ color: 'var(--color-textMuted)', fontSize: '1.05rem' }}>
                MentorHub was born from a simple frustration: there were millions of students eager to break into tech,
                but existing resources left a massive gap between learning and landing a job. Theory without practice.
                Certificates without confidence.
              </p>
              <p className="leading-relaxed mb-8" style={{ color: 'var(--color-textMuted)' }}>
                We built MentorHub differently. Every program pairs you with a working professional who brings
                real projects, real feedback, and real connections to every session.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {['Live 1-on-1 mentorship', 'Real-world projects', 'ATS-ready resumes', 'Mock interviews', 'Dedicated placement cell', 'Alumni in 200+ companies'].map(item => (
                  <div key={item} className="flex items-center gap-2.5 text-sm" style={{ color: 'var(--color-textMuted)' }}>
                    <FaCheckCircle size={13} className="flex-shrink-0" style={{ color: 'var(--color-accent)' }} />
                    {item}
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection variant="fadeRight" className="relative">
              <div className="rounded-3xl overflow-hidden" style={{ boxShadow: '0 20px 60px rgba(37,99,235,0.12)' }}>
                <img
                  src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=600&q=80"
                  alt="Our team working"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-2xl px-6 py-4" style={{ background: 'white', boxShadow: '0 16px 40px rgba(0,0,0,0.12)', border: '1px solid #e2e8f0' }}>
                <p className="text-2xl font-black" style={{ color: '#0f172a' }}>Since 2020</p>
                <p className="text-sm mt-0.5" style={{ color: '#64748b' }}>Building careers across India</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: 'var(--color-primary)' }}>
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <Eyebrow>Meet the Team</Eyebrow>
            <h2 className="text-4xl font-black mb-4" style={{ color: 'var(--color-text)' }}>
              Our Expert <span style={{ background: 'linear-gradient(135deg, var(--color-accent), var(--color-accentGold))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Mentors</span>
            </h2>
            <p className="text-lg max-w-xl mx-auto" style={{ color: 'var(--color-textMuted)' }}>
              Active industry professionals who bring real-world experience to every session.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {team.map((m, i) => (
              <AnimatedSection key={m.name} delay={i * 0.1} variant="fadeUp">
                <motion.div
                  className="rounded-2xl overflow-hidden text-center"
                  style={card}
                  whileHover={{ y: -6, boxShadow: `0 20px 40px rgba(0,0,0,0.1)` }}
                  transition={{ duration: 0.22 }}
                >
                  <div className="h-2 w-full" style={{ background: `linear-gradient(90deg, ${m.color}, ${m.color}88)` }} />
                  <div className="p-7">
                    <img
                      src={m.img}
                      alt={m.name}
                      className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
                      style={{ border: `3px solid ${m.color}40` }}
                    />
                    <h3 className="text-lg font-bold mb-1" style={{ color: 'var(--color-text)' }}>{m.name}</h3>
                    <p className="text-sm" style={{ color: m.color, fontWeight: 600 }}>{m.role}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
