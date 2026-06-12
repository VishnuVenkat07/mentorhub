import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaArrowRight, FaCheckCircle } from 'react-icons/fa'
import AnimatedSection from '../components/ui/AnimatedSection'
import { theme } from '../config/theme'

// ─── Input style ───────────────────────────────────────────────────────────────
const inp = {
  background: '#f8fafc',
  border: '1px solid #e2e8f0',
  color: '#0f172a',
  borderRadius: '0.75rem',
  padding: '0.875rem 1rem',
  width: '100%',
  fontSize: '0.875rem',
  outline: 'none',
  transition: 'border-color 0.2s',
}

// ─── Contact page ──────────────────────────────────────────────────────────────
export default function Contact() {
  const [form, setForm]           = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading]     = useState(false)

  const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const onSubmit = e => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 1400)
  }

  const contactItems = [
    { icon: FaPhone,        label: 'Phone',   value: theme.company.phone   },
    { icon: FaEnvelope,     label: 'Email',   value: theme.company.email   },
    { icon: FaMapMarkerAlt, label: 'Address', value: theme.company.address },
    { icon: FaClock,        label: 'Hours',   value: theme.company.hours   },
  ]

  return (
    <div style={{ background: '#f8fafc' }}>

      {/* ══════════════════════════════════════════════════
          HERO  — dark navy, two images + centered text
      ══════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{
          background: 'linear-gradient(160deg, #0a0f2e 0%, #0f172a 50%, #1e3a8a 100%)',
          paddingTop: 110,
          paddingBottom: 60,
          minHeight: 560,
        }}
      >
        {/* Dot-grid pattern */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }} />

        {/* Floating decorative shapes */}
        <motion.div
          animate={{ y: [0, -14, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position: 'absolute', top: 130, left: '4%', width: 16, height: 16,
            background: '#2563eb', borderRadius: 3, transform: 'rotate(45deg)', zIndex: 1 }}
        />
        <motion.div
          animate={{ y: [0, 12, 0], rotate: [0, -20, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          style={{ position: 'absolute', top: 150, right: '4%', width: 12, height: 12,
            background: '#22c55e', borderRadius: 3, transform: 'rotate(45deg)', zIndex: 1 }}
        />
        <motion.div
          animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          style={{ position: 'absolute', top: 220, left: '12%', width: 8, height: 8,
            background: '#60a5fa', borderRadius: '50%', zIndex: 1 }}
        />
        <motion.div
          animate={{ scale: [1, 1.4, 1], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          style={{ position: 'absolute', top: 200, right: '12%', width: 7, height: 7,
            background: '#a78bfa', borderRadius: '50%', zIndex: 1 }}
        />
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          style={{ position: 'absolute', top: 300, left: '7%', fontSize: 20, zIndex: 1, color: 'rgba(255,255,255,0.15)' }}
        >✦</motion.div>
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
          style={{ position: 'absolute', top: 280, right: '7%', fontSize: 18, zIndex: 1, color: 'rgba(255,255,255,0.12)' }}
        >✦</motion.div>

        {/* Main 3-column layout: Left image | Center text | Right image */}
        <div
          className="relative z-10 mx-auto px-4"
          style={{ maxWidth: 1200, display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: '2rem' }}
        >
          {/* LEFT IMAGE — m5.png */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex flex-shrink-0"
            style={{ width: 260, alignSelf: 'flex-end' }}
          >
            <img
              src="/m5.png"
              alt="Contact illustration"
              style={{
                width: '100%',
                objectFit: 'contain',
                filter: 'drop-shadow(0 20px 40px rgba(37,99,235,0.35))',
              }}
            />
          </motion.div>

          {/* CENTER — badge, title, subtitle, buttons */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center flex-1"
            style={{ maxWidth: 600, paddingBottom: 20 }}
          >
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
              style={{ background: 'rgba(255,255,255,0.1)', color: '#93c5fd', border: '1px solid rgba(255,255,255,0.18)' }}
            >
              📬 Contact Us
            </span>

            <h1
              className="font-black text-white"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', lineHeight: 1.1, marginBottom: '1.2rem' }}
            >
              Let's Build Something
              <span style={{ color: '#93c5fd' }}> Great Together</span>
            </h1>

            <p style={{ color: 'rgba(255,255,255,0.62)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2.2rem', maxWidth: 480, margin: '0 auto 2.2rem' }}>
              Have a project in mind? Want to enroll in a program? Or just want to say hello?
              We'd love to hear from you.
            </p>

            {/* Two buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <a
                  href="#contact-form"
                  onClick={e => { e.preventDefault(); document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' }) }}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold"
                  style={{ background: 'transparent', color: '#fff', border: '2px solid rgba(255,255,255,0.55)' }}
                >
                  Send a Message <FaArrowRight size={12} />
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <a
                  href={`tel:${theme.company.phone}`}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-white"
                  style={{ background: 'linear-gradient(135deg, #2563eb, #1d4ed8)', boxShadow: '0 6px 20px rgba(37,99,235,0.45)' }}
                >
                  <FaPhone size={13} /> Call Us Now
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE — m3.gif */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex flex-shrink-0"
            style={{ width: 260, alignSelf: 'flex-end' }}
          >
            <img
              src="/m3.gif"
              alt="Contact animation"
              style={{
                width: '100%',
                objectFit: 'contain',
                filter: 'drop-shadow(0 20px 40px rgba(37,99,235,0.3))',
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          CONTACT INFO + FORM
      ══════════════════════════════════════════════════ */}
      <section id="contact-form" className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: '#f8fafc' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Contact Details */}
            <AnimatedSection variant="fadeLeft">
              <h2 className="text-2xl font-black mb-2" style={{ color: '#0f172a' }}>
                Reach Us <span style={{ color: '#2563eb' }}>Directly</span>
              </h2>
              <p className="text-sm mb-8" style={{ color: '#64748b' }}>
                We reply within 24 hours on all channels.
              </p>

              <div className="space-y-4 mb-8">
                {contactItems.map(({ icon: Icon, label, value }) => (
                  <motion.div
                    key={label}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-start gap-4 p-5 rounded-2xl"
                    style={{ background: '#fff', border: '1px solid #e2e8f0', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: '#eff6ff' }}>
                      <Icon size={15} style={{ color: '#2563eb' }} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider mb-0.5" style={{ color: '#2563eb' }}>{label}</p>
                      <p className="text-sm" style={{ color: '#334155' }}>{value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { n: '< 24h', l: 'Response Time' },
                  { n: '200+',  l: 'Happy Students' },
                  { n: '4.9★',  l: 'Rating'         },
                ].map(s => (
                  <div key={s.l} className="text-center p-4 rounded-2xl" style={{ background: '#fff', border: '1px solid #e2e8f0' }}>
                    <p className="text-lg font-black" style={{ color: '#1e3a8a' }}>{s.n}</p>
                    <p className="text-xs" style={{ color: '#64748b' }}>{s.l}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection variant="fadeRight">
              <div className="rounded-3xl p-8" style={{ background: '#fff', border: '1px solid #e2e8f0', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-12"
                  >
                    <FaCheckCircle size={52} style={{ color: '#2563eb' }} className="mb-5" />
                    <h3 className="text-2xl font-bold mb-3" style={{ color: '#0f172a' }}>Message Sent!</h3>
                    <p style={{ color: '#64748b' }}>
                      Thank you! Our team will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', subject: '', message: '' }) }}
                      className="mt-8 px-6 py-3 rounded-full text-sm font-semibold"
                      style={{ background: '#eff6ff', color: '#2563eb', border: '1px solid #bfdbfe' }}
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <h2 className="text-xl font-black mb-6" style={{ color: '#0f172a' }}>
                      Send a <span style={{ color: '#2563eb' }}>Message</span>
                    </h2>
                    <form onSubmit={onSubmit} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        {[
                          { label: 'Full Name *', name: 'name',  type: 'text',  ph: 'John Doe'        },
                          { label: 'Email *',     name: 'email', type: 'email', ph: 'you@example.com' },
                        ].map(f => (
                          <div key={f.name}>
                            <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wider" style={{ color: '#64748b' }}>{f.label}</label>
                            <input type={f.type} name={f.name} value={form[f.name]} onChange={onChange} required placeholder={f.ph} style={inp}
                              onFocus={e => { e.target.style.borderColor = '#2563eb' }}
                              onBlur={e =>  { e.target.style.borderColor = '#e2e8f0' }}
                            />
                          </div>
                        ))}
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {[
                          { label: 'Phone',      name: 'phone',   type: 'tel',  ph: '+91 9000 000 000'  },
                          { label: 'Subject *',  name: 'subject', type: 'text', ph: 'Program inquiry'   },
                        ].map(f => (
                          <div key={f.name}>
                            <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wider" style={{ color: '#64748b' }}>{f.label}</label>
                            <input type={f.type} name={f.name} value={form[f.name]} onChange={onChange}
                              required={f.name === 'subject'} placeholder={f.ph} style={inp}
                              onFocus={e => { e.target.style.borderColor = '#2563eb' }}
                              onBlur={e =>  { e.target.style.borderColor = '#e2e8f0' }}
                            />
                          </div>
                        ))}
                      </div>
                      <div>
                        <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wider" style={{ color: '#64748b' }}>Message *</label>
                        <textarea name="message" value={form.message} onChange={onChange} required rows={5}
                          placeholder="Tell us about yourself and what you're looking for..."
                          style={{ ...inp, resize: 'vertical' }}
                          onFocus={e => { e.target.style.borderColor = '#2563eb' }}
                          onBlur={e =>  { e.target.style.borderColor = '#e2e8f0' }}
                        />
                      </div>
                      <motion.button
                        type="submit"
                        disabled={loading}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                        className="w-full py-4 rounded-xl text-sm font-bold text-white flex items-center justify-center gap-2"
                        style={{ background: 'linear-gradient(135deg, #1e3a8a, #2563eb)', boxShadow: '0 6px 20px rgba(37,99,235,0.3)', opacity: loading ? 0.7 : 1 }}
                      >
                        {loading ? 'Sending…' : <> Send Message <FaArrowRight size={13} /> </>}
                      </motion.button>
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
