import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaCheckCircle, FaArrowRight, FaArrowLeft } from 'react-icons/fa'
import {
  FaGlobe, FaMobileAlt, FaPalette, FaChartPie, FaCloud, FaRobot,
} from 'react-icons/fa'
import AnimatedSection from '../../components/ui/AnimatedSection'
import SectionHeader from '../../components/ui/SectionHeader'
import Button from '../../components/ui/Button'

const iconMap = { FaGlobe, FaMobileAlt, FaPalette, FaChartPie, FaCloud, FaRobot }

export default function ServiceDetail({ service }) {
  const { title, description, features, shortDesc, color, accentColor, icon } = service
  const Icon = iconMap[icon] || FaGlobe
  const c = accentColor || color

  return (
    <div>
      {/* ── Back ── */}
      <div className="pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm transition-colors duration-200"
            style={{ color: 'var(--color-textMuted)' }}
            onMouseEnter={e => { e.currentTarget.style.color = c }}
            onMouseLeave={e => { e.currentTarget.style.color = 'var(--color-textMuted)' }}
          >
            <FaArrowLeft size={12} /> Back to Services
          </Link>
        </div>
      </div>

      {/* ── Hero ── */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8 pattern-bg"
        style={{ background: `linear-gradient(135deg, var(--color-gradientFrom) 0%, ${c}12 100%)` }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <span
                className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-5"
                style={{ background: `${c}20`, color: c, border: `1px solid ${c}40` }}
              >
                Our Service
              </span>
              <h1 className="text-4xl sm:text-5xl font-black leading-tight mb-5" style={{ color: 'var(--color-text)' }}>
                {title}
              </h1>
              <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--color-textMuted)' }}>
                {description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button to="/contact" size="lg" style={{ background: `linear-gradient(135deg, ${c}, ${c}bb)` }}>
                  Get Started <FaArrowRight />
                </Button>
                <Button to="/contact" variant="outline" size="lg">
                  Contact Us
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="hidden lg:flex items-center justify-center"
            >
              <div
                className="w-full aspect-square max-w-sm rounded-3xl flex items-center justify-center"
                style={{ background: `linear-gradient(135deg, ${c}18, ${c}06)`, border: `1px solid ${c}30` }}
              >
                <div className="text-center p-12">
                  <Icon size={80} style={{ color: c }} className="mx-auto mb-5" />
                  <h3 className="text-xl font-bold" style={{ color: 'var(--color-text)' }}>{title}</h3>
                  <p className="text-sm mt-2" style={{ color: 'var(--color-textMuted)' }}>Professional Service</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="Key Features" title="What's" highlight="Included" center />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {features.map((f, i) => (
              <AnimatedSection key={f} delay={i * 0.08} variant="fadeUp">
                <motion.div
                  className="rounded-2xl p-5 flex items-start gap-4"
                  style={{ background: 'var(--color-card)', border: `1px solid var(--color-border)` }}
                  whileHover={{ borderColor: c, y: -3 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaCheckCircle size={16} className="flex-shrink-0 mt-0.5" style={{ color: c }} />
                  <span className="text-sm leading-relaxed" style={{ color: 'var(--color-text)' }}>{f}</span>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ background: 'var(--color-secondary)' }}>
        <div className="max-w-2xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
              Interested in <span style={{ color: c }}>{title}</span>?
            </h2>
            <p className="mb-8" style={{ color: 'var(--color-textMuted)' }}>
              Let's discuss how we can help you achieve your goals. Get a free consultation today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button to="/contact" size="lg" style={{ background: `linear-gradient(135deg, ${c}, ${c}bb)` }}>
                Get a Free Consultation <FaArrowRight />
              </Button>
              <Button to="/services" variant="outline" size="lg">
                View All Services
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
