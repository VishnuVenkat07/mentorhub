import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  FaLayerGroup, FaMobileAlt, FaPalette, FaChartBar, FaServer,
  FaReact, FaGraduationCap, FaFileAlt, FaBrain, FaArrowRight,
} from 'react-icons/fa'
import AnimatedSection from '../components/ui/AnimatedSection'
import SectionHeader from '../components/ui/SectionHeader'
import { mentorships } from '../data/mentorships'

const iconMap = {
  FaLayerGroup, FaMobileAlt, FaPalette, FaChartBar, FaServer,
  FaReact, FaGraduationCap, FaFileAlt, FaBrain,
}

export default function Mentorship() {
  return (
    <div>
      {/* ── Hero ── */}
      <section
        className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 pattern-bg"
        style={{ background: 'linear-gradient(135deg, var(--color-gradientFrom) 0%, var(--color-gradientTo) 100%)' }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <span
                className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-5"
                style={{ background: 'rgba(249,115,22,0.15)', color: 'var(--color-accent)', border: '1px solid rgba(249,115,22,0.3)' }}
              >
                9 Programs Available
              </span>
              <h1 className="text-4xl sm:text-5xl font-black leading-tight mb-5" style={{ color: 'var(--color-text)' }}>
                Find the Perfect<br /><span className="gradient-text">Mentorship Program</span>
              </h1>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--color-textMuted)' }}>
                Structured, hands-on programs led by industry professionals — from beginner to job-ready in weeks, not years.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="hidden lg:grid grid-cols-3 gap-4"
            >
              {mentorships.slice(0, 6).map(m => {
                const Icon = iconMap[m.icon] || FaLayerGroup
                return (
                  <div
                    key={m.id}
                    className="rounded-xl p-4 flex flex-col items-center justify-center text-center"
                    style={{ background: 'var(--color-card)', border: `1px solid var(--color-border)` }}
                  >
                    <Icon size={22} style={{ color: m.color }} className="mb-2" />
                    <p className="text-xs font-medium" style={{ color: 'var(--color-textMuted)' }}>{m.title}</p>
                  </div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Programs Grid ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="All Programs" title="Choose Your" highlight="Path" subtitle="Every program includes live mentorship, real projects, and job placement support." center />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mentorships.map((m, i) => {
              const Icon = iconMap[m.icon] || FaLayerGroup
              return (
                <AnimatedSection key={m.id} delay={i * 0.07} variant="fadeUp">
                  <motion.div
                    className="rounded-2xl p-7 h-full flex flex-col"
                    style={{ background: 'var(--color-card)', border: `1px solid var(--color-border)` }}
                    whileHover={{ y: -6, boxShadow: `0 20px 40px rgba(0,0,0,0.4), 0 0 0 1px ${m.color}40` }}
                    transition={{ duration: 0.25 }}
                  >
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                      style={{ background: `${m.color}18`, border: `1px solid ${m.color}35` }}
                    >
                      <Icon size={26} style={{ color: m.color }} />
                    </div>
                    <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--color-text)' }}>{m.title}</h3>
                    <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: 'var(--color-textMuted)' }}>{m.shortDesc}</p>

                    {/* Tool chips */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {m.tools.slice(0, 4).map(tool => (
                        <span
                          key={tool}
                          className="px-2.5 py-1 rounded-md text-xs font-medium"
                          style={{ background: `${m.color}15`, color: m.color }}
                        >
                          {tool}
                        </span>
                      ))}
                      {m.tools.length > 4 && (
                        <span className="px-2.5 py-1 rounded-md text-xs font-medium" style={{ background: 'var(--color-secondary)', color: 'var(--color-textMuted)' }}>
                          +{m.tools.length - 4} more
                        </span>
                      )}
                    </div>

                    <Link
                      to={m.path}
                      className="inline-flex items-center gap-2 text-sm font-semibold py-2.5 px-5 rounded-xl transition-all duration-200 hover:gap-3"
                      style={{
                        background: `${m.color}20`,
                        color: m.color,
                        border: `1px solid ${m.color}40`,
                      }}
                    >
                      View Details <FaArrowRight size={12} />
                    </Link>
                  </motion.div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
