import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaBriefcase, FaMapMarkerAlt, FaClock, FaMoneyBillWave,
  FaTimes, FaUpload, FaCheckCircle, FaChevronDown,
  FaArrowRight, FaUsers, FaRocket, FaHandshake, FaStar,
} from 'react-icons/fa'
import { jobs, internships } from '../data/jobs'

// ─── Apply Modal ───────────────────────────────────────────────────────────────
function ApplyModal({ item, onClose }) {
  const [form, setForm]           = useState({ name: '', email: '', phone: '', note: '', file: null })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading]     = useState(false)

  const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const onFile   = e => setForm(f => ({ ...f, file: e.target.files[0] }))
  const onSubmit = e => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 1400)
  }

  const inputStyle = {
    background: '#f8fafc',
    border: '1px solid #e2e8f0',
    color: '#1e293b',
    borderRadius: '0.75rem',
    padding: '0.875rem 1rem',
    width: '100%',
    fontSize: '0.875rem',
    outline: 'none',
    transition: 'border-color 0.2s',
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{ background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(6px)' }}
    >
      <motion.div
        initial={{ scale: 0.88, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.88, opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={e => e.stopPropagation()}
        className="w-full max-w-lg rounded-3xl p-8 relative"
        style={{ background: '#fff', maxHeight: '90vh', overflowY: 'auto', boxShadow: '0 32px 80px rgba(0,0,0,0.22)' }}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center"
          style={{ background: '#f1f5f9', color: '#64748b' }}
        >
          <FaTimes size={13} />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <FaCheckCircle size={52} style={{ color: '#2563eb' }} className="mx-auto mb-5" />
            <h3 className="text-2xl font-bold mb-3" style={{ color: '#0f172a' }}>Application Submitted!</h3>
            <p className="text-sm" style={{ color: '#64748b' }}>
              Your application for <strong style={{ color: '#2563eb' }}>{item?.title}</strong> has been received.
              Our team will review and get back to you within 3–5 business days.
            </p>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <h2 className="text-xl font-bold" style={{ color: '#0f172a' }}>Apply for Position</h2>
              <p className="text-sm mt-1" style={{ color: '#2563eb' }}>{item?.title} · {item?.code}</p>
            </div>
            <form onSubmit={onSubmit} className="space-y-4">
              {[
                { label: 'Full Name *', name: 'name', type: 'text', ph: 'Your full name' },
                { label: 'Email *',     name: 'email', type: 'email', ph: 'you@example.com' },
                { label: 'Phone *',     name: 'phone', type: 'tel',   ph: '+91 9000 000 000' },
              ].map(f => (
                <div key={f.name}>
                  <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wider" style={{ color: '#64748b' }}>{f.label}</label>
                  <input
                    type={f.type} name={f.name} value={form[f.name]}
                    onChange={onChange} required placeholder={f.ph} style={inputStyle}
                    onFocus={e => { e.target.style.borderColor = '#2563eb' }}
                    onBlur={e =>  { e.target.style.borderColor = '#e2e8f0' }}
                  />
                </div>
              ))}
              <div>
                <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wider" style={{ color: '#64748b' }}>Resume (PDF) *</label>
                <label
                  className="flex items-center gap-3 cursor-pointer rounded-xl p-4"
                  style={{ background: '#f8fafc', border: '2px dashed #cbd5e1' }}
                >
                  <FaUpload style={{ color: '#2563eb' }} />
                  <span className="text-sm" style={{ color: form.file ? '#0f172a' : '#94a3b8' }}>
                    {form.file ? form.file.name : 'Click to upload PDF resume'}
                  </span>
                  <input type="file" accept=".pdf" onChange={onFile} className="hidden" required />
                </label>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wider" style={{ color: '#64748b' }}>Cover Note</label>
                <textarea
                  name="note" value={form.note} onChange={onChange} rows={3}
                  placeholder="Why are you a great fit for this role?"
                  style={{ ...inputStyle, resize: 'vertical' }}
                  onFocus={e => { e.target.style.borderColor = '#2563eb' }}
                  onBlur={e =>  { e.target.style.borderColor = '#e2e8f0' }}
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl text-sm font-bold text-white transition-opacity"
                style={{ background: 'linear-gradient(135deg, #2563eb, #1d4ed8)', opacity: loading ? 0.7 : 1 }}
              >
                {loading ? 'Submitting…' : 'Submit Application'}
              </button>
            </form>
          </>
        )}
      </motion.div>
    </motion.div>
  )
}

// ─── Accordion Job Row ─────────────────────────────────────────────────────────
function JobRow({ item, isInternship, onApply }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      style={{
        background: '#fff',
        border: '1px solid #e2e8f0',
        borderRadius: '1rem',
        overflow: 'hidden',
        boxShadow: open ? '0 8px 32px rgba(37,99,235,0.08)' : '0 1px 4px rgba(0,0,0,0.04)',
        transition: 'box-shadow 0.25s',
      }}
    >
      {/* ── Header row (always visible) ── */}
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between px-5 py-4 text-left"
        style={{ background: open ? '#f0f6ff' : '#fff', transition: 'background 0.2s' }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 min-w-0 flex-1">
          {/* Title + experience */}
          <div className="flex-1 min-w-0">
            <span className="block text-sm font-bold" style={{ color: '#0f172a' }}>
              {item.title}
            </span>
            <span className="text-xs" style={{ color: '#64748b' }}>
              {item.experience} · {item.code}
            </span>
          </div>

          {/* Badges row */}
          <div className="flex flex-wrap items-center gap-2 flex-shrink-0">
            <span className="flex items-center gap-1 text-xs px-2.5 py-1 rounded-full" style={{ background: '#eff6ff', color: '#2563eb' }}>
              <FaMapMarkerAlt size={9} /> {item.location}
            </span>
            {isInternship ? (
              <span className="flex items-center gap-1 text-xs px-2.5 py-1 rounded-full" style={{ background: '#f0fdf4', color: '#16a34a' }}>
                <FaClock size={9} /> {item.duration}
              </span>
            ) : null}
            <span className="flex items-center gap-1 text-xs px-2.5 py-1 rounded-full" style={{ background: '#fefce8', color: '#ca8a04' }}>
              <FaMoneyBillWave size={9} /> {item.salary || item.stipend}
            </span>
          </div>
        </div>

        {/* Chevron */}
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.22 }}
          className="ml-4 flex-shrink-0"
          style={{ color: open ? '#2563eb' : '#94a3b8' }}
        >
          <FaChevronDown size={14} />
        </motion.span>
      </button>

      {/* ── Expanded body ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <div
              className="px-5 pb-6 pt-1"
              style={{ borderTop: '1px solid #e2e8f0' }}
            >
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4 mb-4">
                {item.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-md text-xs font-medium"
                    style={{ background: '#eff6ff', color: '#2563eb', border: '1px solid #bfdbfe' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-sm mb-5" style={{ color: '#475569', lineHeight: 1.75 }}>
                {item.description}
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                {/* Skills */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#2563eb' }}>
                    Skills Required
                  </p>
                  <ul className="space-y-2">
                    {item.skills.map((s, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm" style={{ color: '#475569' }}>
                        <span
                          style={{
                            width: 6, height: 6, borderRadius: '50%',
                            background: '#2563eb', flexShrink: 0, marginTop: 6,
                          }}
                        />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Responsibilities */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#2563eb' }}>
                    Key Responsibilities
                  </p>
                  <ul className="space-y-2">
                    {item.responsibilities.map((r, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm" style={{ color: '#475569' }}>
                        <span
                          style={{
                            width: 6, height: 6, borderRadius: '50%',
                            background: '#1e3a8a', flexShrink: 0, marginTop: 6,
                          }}
                        />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer row */}
              <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px dashed #e2e8f0' }}>
                <span className="text-xs" style={{ color: '#94a3b8' }}>Posted {item.postedAt}</span>
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => onApply(item)}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white"
                  style={{ background: 'linear-gradient(135deg, #2563eb, #1d4ed8)', boxShadow: '0 4px 14px rgba(37,99,235,0.3)' }}
                >
                  Apply Now <FaArrowRight size={11} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ─── Why Join Us cards ─────────────────────────────────────────────────────────
const WHY = [
  { icon: FaRocket,    title: 'Fast-Track Your Growth',  desc: 'Work on real projects that matter and see your skills compound quickly with expert guidance.' },
  { icon: FaUsers,     title: 'Collaborative Culture',   desc: 'Join a team that values open communication, peer learning, and celebrating wins together.' },
  { icon: FaHandshake, title: 'Hiring Partner Network',  desc: 'Get connected with 50+ top tech companies actively looking for skilled talent like you.' },
  { icon: FaStar,      title: 'Placement Support',       desc: 'Our career team helps you prepare your resume, crack interviews, and land the right offer.' },
]

// ─── Main Page ─────────────────────────────────────────────────────────────────
export default function Career() {
  const [tab, setTab]       = useState('jobs')      // 'jobs' | 'internships'
  const [applying, setApplying] = useState(null)

  const data        = tab === 'jobs' ? jobs : internships
  const isInternship = tab === 'internships'

  return (
    <div style={{ background: '#f8fafc', minHeight: '100vh' }}>

      {/* ── Hero ── */}
      <section
        className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 55%, #2563eb 100%)' }}
      >
        {/* Background circles */}
        <div style={{ position: 'absolute', top: -60, right: -60, width: 320, height: 320, borderRadius: '50%', background: 'rgba(255,255,255,0.04)', zIndex: 0 }} />
        <div style={{ position: 'absolute', bottom: -40, left: 80, width: 200, height: 200, borderRadius: '50%', background: 'rgba(255,255,255,0.03)', zIndex: 0 }} />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: -24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
              style={{ background: 'rgba(255,255,255,0.12)', color: '#93c5fd', border: '1px solid rgba(255,255,255,0.2)' }}
            >
              <FaBriefcase size={10} /> Careers at MentorHub
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4" style={{ lineHeight: 1.1 }}>
              Build Your Future<br />
              <span style={{ color: '#93c5fd' }}>With Us</span>
            </h1>
            <p className="text-lg max-w-2xl mx-auto mb-8" style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.7 }}>
              Explore exciting job openings and internship opportunities with our partner companies.
              Whether you're a fresher or experienced professional, there's a place for you here.
            </p>
            {/* Stats row */}
            <div className="flex flex-wrap justify-center gap-8">
              {[
                { n: '50+',  l: 'Hiring Partners' },
                { n: '200+', l: 'Placements Done' },
                { n: '12',   l: 'Open Positions' },
                { n: '95%',  l: 'Offer Rate' },
              ].map(s => (
                <div key={s.l} className="text-center">
                  <p className="text-2xl font-black text-white">{s.n}</p>
                  <p className="text-xs" style={{ color: 'rgba(255,255,255,0.55)' }}>{s.l}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Why Join Us ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black" style={{ color: '#0f172a' }}>
              Are You a <span style={{ color: '#2563eb' }}>Good Fit?</span>
            </h2>
            <p className="mt-2 text-sm max-w-xl mx-auto" style={{ color: '#64748b' }}>
              We look for curious, driven people who love solving problems and growing with a team.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHY.map((w, i) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
                className="p-5 rounded-2xl"
                style={{ background: '#fff', border: '1px solid #e2e8f0', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: '#eff6ff' }}
                >
                  <w.icon size={18} style={{ color: '#2563eb' }} />
                </div>
                <p className="text-sm font-bold mb-1" style={{ color: '#0f172a' }}>{w.title}</p>
                <p className="text-xs leading-relaxed" style={{ color: '#64748b' }}>{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Openings ── */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">

          {/* Tab toggle */}
          <div className="flex gap-3 mb-8">
            {[
              { key: 'jobs',        label: `Current Openings (${jobs.length})` },
              { key: 'internships', label: `Internships (${internships.length})` },
            ].map(t => (
              <motion.button
                key={t.key}
                onClick={() => setTab(t.key)}
                whileTap={{ scale: 0.97 }}
                className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all"
                style={{
                  background: tab === t.key ? 'linear-gradient(135deg, #2563eb, #1d4ed8)' : '#fff',
                  color:      tab === t.key ? '#fff' : '#64748b',
                  border:     tab === t.key ? 'none' : '1px solid #e2e8f0',
                  boxShadow:  tab === t.key ? '0 4px 14px rgba(37,99,235,0.28)' : 'none',
                }}
              >
                {t.label}
              </motion.button>
            ))}
          </div>

          {/* Section heading */}
          <div className="mb-6">
            <h2 className="text-xl font-black" style={{ color: '#0f172a' }}>
              {isInternship ? 'Internship Opportunities' : 'Current Job Openings'}
            </h2>
            <p className="text-sm mt-1" style={{ color: '#64748b' }}>
              {isInternship
                ? 'Hands-on internships with mentorship, real projects, and possible full-time conversion.'
                : 'Full-time positions from our trusted hiring partner network. Click any role to view details.'}
            </p>
          </div>

          {/* Accordion list */}
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.22 }}
              className="flex flex-col gap-3"
            >
              {data.map((item) => (
                <JobRow
                  key={item.id}
                  item={item}
                  isInternship={isInternship}
                  onApply={setApplying}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div
            className="rounded-3xl px-8 py-12"
            style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)', boxShadow: '0 24px 64px rgba(37,99,235,0.22)' }}
          >
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
              Don't See the Right Role?
            </h2>
            <p className="mb-7 text-sm" style={{ color: 'rgba(255,255,255,0.75)', maxWidth: 480, margin: '0 auto 1.75rem' }}>
              We're always looking for talented people. Send us your profile and we'll reach out when the perfect opportunity comes up.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold"
              style={{ background: '#fff', color: '#2563eb', boxShadow: '0 4px 16px rgba(0,0,0,0.15)' }}
            >
              Get in Touch <FaArrowRight size={12} />
            </motion.a>
          </div>
        </div>
      </section>

      {/* Apply Modal */}
      <AnimatePresence>
        {applying && <ApplyModal item={applying} onClose={() => setApplying(null)} />}
      </AnimatePresence>
    </div>
  )
}
