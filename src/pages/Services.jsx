import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  FaGlobe, FaMobileAlt, FaPalette, FaChartPie, FaCloud, FaRobot, FaArrowRight,
} from 'react-icons/fa'
import AnimatedSection from '../components/ui/AnimatedSection'
import SectionHeader from '../components/ui/SectionHeader'
import Button from '../components/ui/Button'
import { services } from '../data/services'

const iconMap = { FaGlobe, FaMobileAlt, FaPalette, FaChartPie, FaCloud, FaRobot }

export default function Services() {
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
                What We Build
              </span>
              <h1 className="text-4xl sm:text-5xl font-black leading-tight mb-5" style={{ color: 'var(--color-text)' }}>
                Professional<br /><span className="gradient-text">Development Services</span>
              </h1>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--color-textMuted)' }}>
                Beyond mentorship, we deliver end-to-end product and software development for businesses
                of all sizes — from startups to enterprises.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="hidden lg:grid grid-cols-2 gap-4"
            >
              {services.slice(0, 4).map(s => {
                const Icon = iconMap[s.icon] || FaGlobe
                return (
                  <div
                    key={s.id}
                    className="rounded-2xl p-5 flex items-center gap-3"
                    style={{ background: 'var(--color-card)', border: `1px solid var(--color-border)` }}
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${s.color}20` }}>
                      <Icon size={18} style={{ color: s.color }} />
                    </div>
                    <span className="text-sm font-medium" style={{ color: 'var(--color-text)' }}>{s.title}</span>
                  </div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="Our Services" title="Everything You" highlight="Need" subtitle="Full-cycle development services from idea to deployment, backed by years of real-world expertise." center />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((s, i) => {
              const Icon = iconMap[s.icon] || FaGlobe
              return (
                <AnimatedSection key={s.id} delay={i * 0.08} variant="fadeUp">
                  <motion.div
                    className="rounded-2xl p-7 h-full flex flex-col"
                    style={{ background: 'var(--color-card)', border: `1px solid var(--color-border)` }}
                    whileHover={{ y: -6, boxShadow: `0 20px 40px rgba(0,0,0,0.4), 0 0 0 1px ${s.color}35` }}
                    transition={{ duration: 0.25 }}
                  >
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                      style={{ background: `${s.color}18`, border: `1px solid ${s.color}35` }}
                    >
                      <Icon size={26} style={{ color: s.color }} />
                    </div>
                    <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--color-text)' }}>{s.title}</h3>
                    <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: 'var(--color-textMuted)' }}>{s.shortDesc}</p>

                    <ul className="space-y-2 mb-6">
                      {s.features.slice(0, 3).map(f => (
                        <li key={f} className="flex items-start gap-2 text-xs" style={{ color: 'var(--color-textMuted)' }}>
                          <span className="mt-0.5 flex-shrink-0" style={{ color: s.color }}>✓</span> {f}
                        </li>
                      ))}
                    </ul>

                    <Link
                      to={s.path}
                      className="inline-flex items-center gap-2 text-sm font-semibold py-2.5 px-5 rounded-xl transition-all duration-200 hover:gap-3"
                      style={{ background: `${s.color}20`, color: s.color, border: `1px solid ${s.color}40` }}
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

      {/* ── CTA ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: 'var(--color-secondary)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
              Ready to Build Something <span className="gradient-text">Amazing?</span>
            </h2>
            <p className="text-lg mb-8" style={{ color: 'var(--color-textMuted)' }}>
              Let's discuss your project. Get a free consultation with our team.
            </p>
            <Button to="/contact" size="lg">
              Get a Free Consultation <FaArrowRight />
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
