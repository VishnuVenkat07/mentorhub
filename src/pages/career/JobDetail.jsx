import { useParams, Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaBriefcase, FaMapMarkerAlt, FaClock, FaMoneyBillWave,
  FaArrowLeft, FaArrowRight, FaCheckCircle, FaBuilding,
  FaCalendarAlt, FaTimes, FaUpload, FaStar,
} from 'react-icons/fa'
import { jobs, internships } from '../../data/jobs'

const all = [...jobs, ...internships]

export default function JobDetail() {
  const { id }       = useParams()
  const navigate     = useNavigate()
  const item         = all.find(j => j.id === id)
  const isInternship = item?.duration !== undefined

  const [applying, setApplying] = useState(false)

  if (!item) return (
    <div className="min-h-screen flex flex-col items-center justify-center" style={{ background: '#f8fafc' }}>
      <p className="text-xl font-bold mb-4" style={{ color: '#0f172a' }}>Position not found.</p>
      <Link to="/career" className="text-blue-600 underline">← Back to Careers</Link>
    </div>
  )

  return (
    <div style={{ background: '#f8fafc', minHeight: '100vh' }}>

      {/* ── HERO ── */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#0f172a 0%,#1e3a8a 55%,#2563eb 100%)' }}>
        <div style={{ position:'absolute', top:-60, right:-60, width:320, height:320, borderRadius:'50%', background:'rgba(255,255,255,0.04)', zIndex:0 }} />
        <div style={{ position:'absolute', bottom:-40, left:80, width:200, height:200, borderRadius:'50%', background:'rgba(255,255,255,0.03)', zIndex:0 }} />

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div initial={{ opacity:0, y:-20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6 }}>

            {/* Back button */}
            <button onClick={() => navigate('/career')}
              className="inline-flex items-center gap-2 mb-6 text-sm font-semibold px-4 py-2 rounded-full transition-all"
              style={{ background:'rgba(255,255,255,0.1)', color:'#93c5fd', border:'1px solid rgba(255,255,255,0.2)' }}
              onMouseEnter={e => e.currentTarget.style.background='rgba(255,255,255,0.18)'}
              onMouseLeave={e => e.currentTarget.style.background='rgba(255,255,255,0.1)'}>
              <FaArrowLeft size={11} /> Back to Careers
            </button>

            {/* Type badge */}
            <div className="mb-3">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest"
                style={{ background: isInternship ? 'rgba(34,197,94,0.15)' : 'rgba(37,99,235,0.25)', color: isInternship ? '#86efac' : '#93c5fd', border:`1px solid ${isInternship ? 'rgba(34,197,94,0.3)' : 'rgba(37,99,235,0.4)'}` }}>
                {isInternship ? '🎓 Internship' : '💼 Full-Time'} · {item.code}
              </span>
            </div>

            <h1 className="font-black text-white mb-2" style={{ fontSize:'clamp(1.8rem,4vw,3rem)', lineHeight:1.1 }}>
              {item.title}
            </h1>
            <p className="font-semibold mb-6" style={{ fontSize:'1.1rem', color:'#93c5fd' }}>
              <FaBuilding size={13} style={{ display:'inline', marginRight:6, marginBottom:2 }} />
              {item.company}
            </p>

            {/* Meta badges */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: FaMapMarkerAlt, label: item.location },
                { icon: FaBriefcase,   label: item.experience },
                { icon: FaMoneyBillWave, label: item.salary || item.stipend, yellow: true },
                ...(isInternship ? [{ icon: FaClock, label: item.duration }] : []),
                { icon: FaCalendarAlt, label: `Posted ${item.postedAt}` },
              ].map((b, i) => (
                <span key={i} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                  style={{ background:'rgba(255,255,255,0.12)', color: b.yellow ? '#fbbf24' : '#e2e8f0' }}>
                  <b.icon size={10} /> {b.label}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6">

          {/* Description + Tags */}
          <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
            className="rounded-2xl p-7" style={{ background:'#fff', border:'1px solid #e2e8f0', boxShadow:'0 2px 12px rgba(0,0,0,0.05)' }}>
            <h2 className="font-black mb-4" style={{ fontSize:'1.2rem', color:'#0f172a' }}>About this Role</h2>
            <p style={{ fontSize:'0.97rem', color:'#475569', lineHeight:1.8 }}>{item.description}</p>
            <div className="flex flex-wrap gap-2 mt-5">
              {item.tags.map(t => (
                <span key={t} className="px-3 py-1 rounded-full text-xs font-semibold"
                  style={{ background:'#eff6ff', color:'#2563eb', border:'1px solid #bfdbfe' }}>{t}</span>
              ))}
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {/* Skills */}
            <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:0.05 }}
              className="rounded-2xl p-7" style={{ background:'#fff', border:'1px solid #e2e8f0', boxShadow:'0 2px 12px rgba(0,0,0,0.05)' }}>
              <h2 className="font-black mb-4" style={{ fontSize:'1.1rem', color:'#0f172a' }}>Required Skills</h2>
              <ul className="space-y-3">
                {item.skills.map((s, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background:'#eff6ff', border:'1px solid #bfdbfe' }}>
                      <FaCheckCircle size={9} style={{ color:'#2563eb' }} />
                    </div>
                    <span style={{ fontSize:'0.9rem', color:'#334155', lineHeight:1.6 }}>{s}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Responsibilities */}
            <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:0.1 }}
              className="rounded-2xl p-7" style={{ background:'#fff', border:'1px solid #e2e8f0', boxShadow:'0 2px 12px rgba(0,0,0,0.05)' }}>
              <h2 className="font-black mb-4" style={{ fontSize:'1.1rem', color:'#0f172a' }}>Key Responsibilities</h2>
              <ul className="space-y-3">
                {item.responsibilities.map((r, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-2 rounded-full"
                      style={{ width:7, height:7, background:'#1e3a8a', display:'block' }} />
                    <span style={{ fontSize:'0.9rem', color:'#334155', lineHeight:1.6 }}>{r}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Apply CTA */}
          <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:0.15 }}
            className="rounded-2xl p-8 text-center relative overflow-hidden"
            style={{ background:'linear-gradient(135deg,#0f172a 0%,#1e3a8a 55%,#2563eb 100%)' }}>
            <div style={{ position:'absolute', inset:0, backgroundImage:'radial-gradient(circle,rgba(255,255,255,0.05) 1px,transparent 1px)', backgroundSize:'24px 24px' }} />
            <div className="relative z-10">
              <div className="flex justify-center gap-1 mb-3">
                {[...Array(5)].map((_,i) => <FaStar key={i} size={13} style={{ color:'#fbbf24' }} />)}
              </div>
              <h3 className="font-black text-white mb-2" style={{ fontSize:'1.4rem' }}>Interested in this role?</h3>
              <p style={{ fontSize:'0.95rem', color:'rgba(255,255,255,0.7)', marginBottom:20 }}>
                Submit your application and our team will get back to you within 3–5 business days.
              </p>
              <motion.button whileHover={{ scale:1.04 }} whileTap={{ scale:0.97 }}
                onClick={() => setApplying(true)}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-blue-900"
                style={{ background:'#fff', fontSize:'0.95rem', boxShadow:'0 6px 20px rgba(0,0,0,0.2)' }}>
                Apply Now <FaArrowRight size={12} />
              </motion.button>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── APPLY MODAL ── */}
      <AnimatePresence>
        {applying && <ApplyModal item={item} onClose={() => setApplying(false)} />}
      </AnimatePresence>

    </div>
  )
}

// ── Apply Modal ────────────────────────────────────────────────────────────────
function ApplyModal({ item, onClose }) {
  const [form, setForm]           = useState({ name:'', email:'', phone:'', note:'', file:null })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading]     = useState(false)

  const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const onFile   = e => setForm(f => ({ ...f, file: e.target.files[0] }))
  const onSubmit = e => { e.preventDefault(); setLoading(true); setTimeout(() => { setLoading(false); setSubmitted(true) }, 1400) }

  const inputStyle = {
    background:'#f8fafc', border:'1px solid #e2e8f0', color:'#1e293b',
    borderRadius:'0.75rem', padding:'0.875rem 1rem', width:'100%',
    fontSize:'0.875rem', outline:'none', transition:'border-color 0.2s',
  }

  return (
    <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
      onClick={onClose} style={{ background:'rgba(0,0,0,0.65)', backdropFilter:'blur(6px)' }}>
      <motion.div initial={{ scale:0.88, opacity:0 }} animate={{ scale:1, opacity:1 }} exit={{ scale:0.88, opacity:0 }}
        transition={{ duration:0.25 }} onClick={e => e.stopPropagation()}
        className="w-full max-w-lg rounded-3xl p-8 relative"
        style={{ background:'#fff', maxHeight:'90vh', overflowY:'auto', boxShadow:'0 32px 80px rgba(0,0,0,0.22)' }}>
        <button onClick={onClose} className="absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center"
          style={{ background:'#f1f5f9', color:'#64748b' }}>
          <FaTimes size={13} />
        </button>
        {submitted ? (
          <div className="text-center py-8">
            <FaCheckCircle size={52} style={{ color:'#2563eb' }} className="mx-auto mb-5" />
            <h3 className="text-2xl font-bold mb-3" style={{ color:'#0f172a' }}>Application Submitted!</h3>
            <p className="text-sm" style={{ color:'#64748b' }}>
              Your application for <strong style={{ color:'#2563eb' }}>{item?.title}</strong> has been received.
              Our team will review and get back to you within 3–5 business days.
            </p>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <h2 className="text-xl font-bold" style={{ color:'#0f172a' }}>Apply for Position</h2>
              <p className="text-sm mt-1" style={{ color:'#2563eb' }}>{item?.title} · {item?.code}</p>
            </div>
            <form onSubmit={onSubmit} className="space-y-4">
              {[
                { label:'Full Name *', name:'name',  type:'text',  ph:'Your full name' },
                { label:'Email *',     name:'email', type:'email', ph:'you@example.com' },
                { label:'Phone *',     name:'phone', type:'tel',   ph:'+91 9000 000 000' },
              ].map(f => (
                <div key={f.name}>
                  <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wider" style={{ color:'#64748b' }}>{f.label}</label>
                  <input type={f.type} name={f.name} value={form[f.name]} onChange={onChange} required placeholder={f.ph} style={inputStyle}
                    onFocus={e => { e.target.style.borderColor='#2563eb' }}
                    onBlur={e  => { e.target.style.borderColor='#e2e8f0' }} />
                </div>
              ))}
              <div>
                <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wider" style={{ color:'#64748b' }}>Resume (PDF) *</label>
                <label className="flex items-center gap-3 cursor-pointer rounded-xl p-4"
                  style={{ background:'#f8fafc', border:'2px dashed #cbd5e1' }}>
                  <FaUpload style={{ color:'#2563eb' }} />
                  <span className="text-sm" style={{ color: form.file ? '#0f172a' : '#94a3b8' }}>
                    {form.file ? form.file.name : 'Click to upload PDF resume'}
                  </span>
                  <input type="file" accept=".pdf" onChange={onFile} className="hidden" required />
                </label>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wider" style={{ color:'#64748b' }}>Cover Note</label>
                <textarea name="note" value={form.note} onChange={onChange} rows={3}
                  placeholder="Why are you a great fit for this role?"
                  style={{ ...inputStyle, resize:'vertical' }}
                  onFocus={e => { e.target.style.borderColor='#2563eb' }}
                  onBlur={e  => { e.target.style.borderColor='#e2e8f0' }} />
              </div>
              <button type="submit" disabled={loading}
                className="w-full py-3.5 rounded-xl text-sm font-bold text-white transition-opacity"
                style={{ background:'linear-gradient(135deg,#2563eb,#1d4ed8)', opacity: loading ? 0.7 : 1 }}>
                {loading ? 'Submitting…' : 'Submit Application'}
              </button>
            </form>
          </>
        )}
      </motion.div>
    </motion.div>
  )
}
