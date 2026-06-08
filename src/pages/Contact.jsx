import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaArrowRight, FaCheckCircle } from 'react-icons/fa'
import AnimatedSection from '../components/ui/AnimatedSection'
import SectionHeader from '../components/ui/SectionHeader'
import Button from '../components/ui/Button'
import { theme } from '../config/theme'

const inputStyle = {
  background: 'var(--color-card)',
  border: `1px solid var(--color-border)`,
  color: 'var(--color-text)',
  borderRadius: '0.75rem',
  padding: '0.875rem 1rem',
  width: '100%',
  fontSize: '0.875rem',
  outline: 'none',
  transition: 'border-color 0.2s',
}

export default function Contact() {
  const [form, setForm]       = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = e => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 1400)
  }

  const contactItems = [
    { icon: FaPhone,        label: 'Phone',   value: theme.company.phone },
    { icon: FaEnvelope,     label: 'Email',   value: theme.company.email },
    { icon: FaMapMarkerAlt, label: 'Address', value: theme.company.address },
    { icon: FaClock,        label: 'Hours',   value: theme.company.hours },
  ]

  return (
    <div>
      {/* ── Hero ── */}
      <section
        className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 pattern-bg"
        style={{ background: 'linear-gradient(135deg, var(--color-gradientFrom) 0%, var(--color-gradientTo) 100%)' }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ background: 'rgba(249,115,22,0.15)', color: 'var(--color-accent)', border: '1px solid rgba(249,115,22,0.3)' }}
            >
              Get In Touch
            </span>
            <h1 className="text-4xl sm:text-5xl font-black mb-4" style={{ color: 'var(--color-text)' }}>
              Let's <span className="gradient-text">Start a Conversation</span>
            </h1>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--color-textMuted)' }}>
              Have a question about our programs, want to enroll, or need a custom mentorship plan? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Contact Section ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Contact Details */}
            <AnimatedSection variant="fadeLeft">
              <h2 className="text-3xl font-black mb-2" style={{ color: 'var(--color-text)' }}>
                Get in <span style={{ color: 'var(--color-accent)' }}>Touch</span>
              </h2>
              <p className="text-sm mb-8" style={{ color: 'var(--color-textMuted)' }}>
                Have a question or want to enroll? Reach out — we reply within 24 hours.
              </p>
              <div className="space-y-5 mb-8">
                {contactItems.map(({ icon: Icon, label, value }) => (
                  <div
                    key={label}
                    className="flex items-start gap-4 p-5 rounded-2xl"
                    style={{ background: 'var(--color-card)', border: `1px solid var(--color-border)` }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(249,115,22,0.15)' }}
                    >
                      <Icon size={16} style={{ color: 'var(--color-accent)' }} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color: 'var(--color-accent)' }}>{label}</p>
                      <p className="text-sm" style={{ color: 'var(--color-text)' }}>{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div
                className="rounded-2xl h-36 flex items-center justify-center mb-5"
                style={{ background: 'var(--color-card)', border: `1px solid var(--color-border)` }}
              >
                <div className="text-center">
                  <FaMapMarkerAlt size={28} style={{ color: 'var(--color-accent)' }} className="mx-auto mb-2" />
                  <p className="text-sm font-medium" style={{ color: 'var(--color-text)' }}>123 Innovation Drive</p>
                  <p className="text-xs mt-1" style={{ color: 'var(--color-textMuted)' }}>Tech City, TC 10001</p>
                </div>
              </div>

              {/* Blue CTA button */}
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="#contact-form"
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl text-sm font-bold text-white"
                  style={{ background: 'linear-gradient(135deg, var(--color-accent), #1d4ed8)', boxShadow: '0 8px 24px rgba(37,99,235,0.3)' }}
                >
                  Get in Touch <FaArrowRight size={13} />
                </Link>
              </motion.div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection variant="fadeRight">
              <div
                className="rounded-2xl p-8"
                style={{ background: 'var(--color-card)', border: `1px solid var(--color-border)` }}
              >
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center py-12"
                  >
                    <FaCheckCircle size={56} style={{ color: 'var(--color-accent)' }} className="mb-5" />
                    <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--color-text)' }}>Message Sent!</h3>
                    <p style={{ color: 'var(--color-textMuted)' }}>
                      Thank you for reaching out. Our team will get back to you within 24 hours.
                    </p>
                    <Button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', subject: '', message: '' }) }} variant="outline" size="md" className="mt-8">
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text)' }}>
                      Send a <span className="gradient-text">Message</span>
                    </h2>
                    <form onSubmit={onSubmit} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold mb-2 uppercase tracking-wider" style={{ color: 'var(--color-textMuted)' }}>Full Name *</label>
                          <input
                            name="name"
                            value={form.name}
                            onChange={onChange}
                            required
                            placeholder="John Doe"
                            style={inputStyle}
                            onFocus={e => { e.target.style.borderColor = 'var(--color-accent)' }}
                            onBlur={e => { e.target.style.borderColor = 'var(--color-border)' }}
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold mb-2 uppercase tracking-wider" style={{ color: 'var(--color-textMuted)' }}>Email *</label>
                          <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={onChange}
                            required
                            placeholder="you@example.com"
                            style={inputStyle}
                            onFocus={e => { e.target.style.borderColor = 'var(--color-accent)' }}
                            onBlur={e => { e.target.style.borderColor = 'var(--color-border)' }}
                          />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold mb-2 uppercase tracking-wider" style={{ color: 'var(--color-textMuted)' }}>Phone</label>
                          <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={onChange}
                            placeholder="+1 (555) 000-0000"
                            style={inputStyle}
                            onFocus={e => { e.target.style.borderColor = 'var(--color-accent)' }}
                            onBlur={e => { e.target.style.borderColor = 'var(--color-border)' }}
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold mb-2 uppercase tracking-wider" style={{ color: 'var(--color-textMuted)' }}>Subject *</label>
                          <input
                            name="subject"
                            value={form.subject}
                            onChange={onChange}
                            required
                            placeholder="Program inquiry"
                            style={inputStyle}
                            onFocus={e => { e.target.style.borderColor = 'var(--color-accent)' }}
                            onBlur={e => { e.target.style.borderColor = 'var(--color-border)' }}
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold mb-2 uppercase tracking-wider" style={{ color: 'var(--color-textMuted)' }}>Message *</label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={onChange}
                          required
                          rows={5}
                          placeholder="Tell us about yourself and what you're looking for..."
                          style={{ ...inputStyle, resize: 'vertical' }}
                          onFocus={e => { e.target.style.borderColor = 'var(--color-accent)' }}
                          onBlur={e => { e.target.style.borderColor = 'var(--color-border)' }}
                        />
                      </div>
                      <Button type="submit" size="lg" className="w-full" disabled={loading}>
                        {loading ? 'Sending…' : (<>Send Message <FaArrowRight /></>)}
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  )
}
