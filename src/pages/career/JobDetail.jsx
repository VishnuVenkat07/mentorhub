import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  FaBriefcase, FaMapMarkerAlt, FaClock, FaMoneyBillWave,
  FaArrowLeft, FaArrowRight, FaCheckCircle, FaStar, FaBuilding,
  FaUsers, FaCalendarAlt, FaTag,
} from 'react-icons/fa'
import { useState } from 'react'
import { jobs, internships } from '../../data/jobs'

const all = [...jobs, ...internships]

export default function JobDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const item = all.find(j => j.id === id)
  const isInternship = item?.duration !== undefined
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading]     = useState(false)
  const [form, setForm]           = useState({ name: '', email: '', phone: '', note: '', file: null })

  if (!item) return (
    <div className="min-h-screen flex flex-col items-center justify-center" style={{ background: '#f8fafc' }}>
      <p className="text-xl font-bold mb-4" style={{ color: '#0f172a' }}>Position not found.</p>
      <Link to="/career" className="text-blue-600 underline">← Back to Careers</Link>
    </div>
  )

  const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const onFile   = e => setForm(f => ({ ...f, file: e.target.files[0] }))
  const onSubmit = e => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 1400)
  }

  const inputStyle = {
    background: '#f8fafc', border: '1px solid #e2e8f0', color: '#1e293b',
    borderRadius: '0.75rem', padding: '0.875rem 1rem', width: '100%',
    fontSize: '0.95rem', outline: 'none', transition: 'border-color 0.2s',
  }

  return (
    <div style={{ background: '#f8fafc', minHeight: '100vh' }}>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden pt-32 pb-14 px-4"
        style={{ background: 'linear-gradient(135deg,#0f172a 0%,#1e3a8a 60%,#2563eb 100%)' }}>
        <div style={{ position:'absolute', inset:0, backgroundImage:'radial-gradient(circle,rgba(255,255,255,0.05) 1px,transparent 1px)', backgroundSize:'28px 28px' }} />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div initial={{ opacity:0, y:-20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6 }}>
            {/* Back */}
            <button onClick={() => navigate('/career')}
              className="inline-flex items-center gap-2 mb-6 text-sm font-semibold px-4 py-2 rounded-full transition-all"
              style={{ background:'rgba(255,255,255,0.1)', color:'#93c5fd', border:'1px solid rgba(255,255,255,0.2)' }}
              onMouseEnter={e => e.currentTarget.style.background='rgba(255,255,255,0.18)'}
              onMouseLeave={e => e.currentTarget.style.background='rgba(255,255,255,0.1)'}>
              <FaArrowLeft size={11} /> Back to Careers
            </button>

            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
              style={{ background: isInternship ? 'rgba(34,197,94,0.15)' : 'rgba(37,99,235,0.25)', color: isInternship ? '#86efac' : '#93c5fd', border:`1px solid ${isInternship ? 'rgba(34,197,94,0.3)' : 'rgba(37,99,235,0.4)'}` }}>
              {isInternship ? '🎓 Internship' : '💼 Full-Time Job'} · {item.code}
            </span>

            <h1 className="font-black text-white mb-3" style={{ fontSize:'clamp(1.6rem,4vw,2.8rem)', lineHeight:1.1 }}>
              {item.title}
            </h1>
            <p className="font-semibold mb-6" style={{ fontSize:'1.05rem', color:'#93c5fd' }}>
              <FaBuilding size={13} style={{ display:'inline', marginRight:6, marginBottom:2 }} />
              {item.company}
            </p>

            {/* Meta badges */}
            <div className="flex flex-wrap gap-3">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                style={{ background:'rgba(255,255,255,0.12)', color:'#e2e8f0' }}>
                <FaMapMarkerAlt size={10} /> {item.location}
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                style={{ background:'rgba(255,255,255,0.12)', color:'#e2e8f0' }}>
                <FaBriefcase size={10} /> {item.experience}
              </span>
              {isInternship ? (
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                  style={{ background:'rgba(255,255,255,0.12)', color:'#e2e8f0' }}>
                  <FaClock size={10} /> {item.duration}
                </span>
              ) : null}
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                style={{ background:'rgba(255,255,255,0.12)', color:'#fbbf24' }}>
                <FaMoneyBillWave size={10} /> {item.salary || item.stipend}
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                style={{ background:'rgba(255,255,255,0.12)', color:'#e2e8f0' }}>
                <FaCalendarAlt size={10} /> Posted {item.postedAt}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

          {/* ── LEFT — Job Details ── */}
          <div className="lg:col-span-2 space-y-6">

            {/* Description */}
            <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.1 }}
              className="rounded-2xl p-7" style={{ background:'#fff', border:'1px solid #e2e8f0', boxShadow:'0 4px 20px rgba(0,0,0,0.05)' }}>
              <h2 className="font-black mb-4" style={{ fontSize:'1.15rem', color:'#0f172a' }}>About this Role</h2>
              <p style={{ fontSize:'0.97rem', color:'#475569', lineHeight:1.8 }}>{item.description}</p>
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-5">
                {item.tags.map(t => (
                  <span key={t} className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ background:'#eff6ff', color:'#2563eb', border:'1px solid #dbeafe' }}>
                    <FaTag size={9} /> {t}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.15 }}
              className="rounded-2xl p-7" style={{ background:'#fff', border:'1px solid #e2e8f0', boxShadow:'0 4px 20px rgba(0,0,0,0.05)' }}>
              <h2 className="font-black mb-4" style={{ fontSize:'1.15rem', color:'#0f172a' }}>
                Required Skills
              </h2>
              <ul className="space-y-3">
                {item.skills.map((s, i) => (
                  <motion.li key={i} initial={{ opacity:0, x:-12 }} animate={{ opacity:1, x:0 }}
                    transition={{ delay: 0.18 + i * 0.05 }} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background:'#eff6ff', border:'1px solid #bfdbfe' }}>
                      <FaCheckCircle size={9} style={{ color:'#2563eb' }} />
                    </div>
                    <span style={{ fontSize:'0.95rem', color:'#334155', lineHeight:1.6 }}>{s}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Responsibilities */}
            <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.2 }}
              className="rounded-2xl p-7" style={{ background:'#fff', border:'1px solid #e2e8f0', boxShadow:'0 4px 20px rgba(0,0,0,0.05)' }}>
              <h2 className="font-black mb-4" style={{ fontSize:'1.15rem', color:'#0f172a' }}>
                Key Responsibilities
              </h2>
              <ul className="space-y-3">
                {item.responsibilities.map((r, i) => (
                  <motion.li key={i} initial={{ opacity:0, x:-12 }} animate={{ opacity:1, x:0 }}
                    transition={{ delay: 0.22 + i * 0.05 }} className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-2 rounded-full"
                      style={{ width:7, height:7, background:'#1e3a8a', display:'block' }} />
                    <span style={{ fontSize:'0.95rem', color:'#334155', lineHeight:1.6 }}>{r}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* ── RIGHT — Apply Form ── */}
          <div className="lg:col-span-1">
            <motion.div initial={{ opacity:0, x:24 }} animate={{ opacity:1, x:0 }} transition={{ delay:0.2 }}
              className="rounded-2xl overflow-hidden sticky top-24"
              style={{ background:'#fff', border:'1px solid #e2e8f0', boxShadow:'0 8px 32px rgba(30,58,138,0.10)' }}>

              {/* Form header */}
              <div className="px-6 py-5 relative overflow-hidden"
                style={{ background:'linear-gradient(135deg,#0a0f2e,#1e3a8a)' }}>
                <div style={{ position:'absolute', inset:0, backgroundImage:'radial-gradient(circle,rgba(255,255,255,0.06) 1px,transparent 1px)', backgroundSize:'16px 16px' }} />
                <div className="relative">
                  <h3 className="font-black text-white" style={{ fontSize:'1rem' }}>Apply Now</h3>
                  <p style={{ fontSize:'0.78rem', color:'rgba(255,255,255,0.6)', marginTop:2 }}>{item.title} · {item.code}</p>
                </div>
              </div>

              <div className="p-5">
                {submitted ? (
                  <div className="text-center py-8">
                    <FaCheckCircle size={44} style={{ color:'#2563eb' }} className="mx-auto mb-4" />
                    <h3 className="font-black mb-2" style={{ fontSize:'1.05rem', color:'#0f172a' }}>Application Sent!</h3>
                    <p style={{ fontSize:'0.85rem', color:'#64748b', lineHeight:1.7 }}>
                      We'll review your application and get back within <strong>3–5 business days</strong>.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="space-y-3">
                    {[
                      { label:'Full Name *',  name:'name',  type:'text',  ph:'Your full name' },
                      { label:'Email *',      name:'email', type:'email', ph:'you@example.com' },
                      { label:'Phone',        name:'phone', type:'tel',   ph:'+91 00000 00000' },
                    ].map(f => (
                      <div key={f.name}>
                        <label style={{ fontSize:'0.8rem', fontWeight:600, color:'#374151', display:'block', marginBottom:4 }}>{f.label}</label>
                        <input name={f.name} type={f.type} placeholder={f.ph} value={form[f.name]}
                          onChange={onChange} required={f.label.includes('*')} style={inputStyle}
                          onFocus={e => e.target.style.borderColor='#2563eb'}
                          onBlur={e => e.target.style.borderColor='#e2e8f0'} />
                      </div>
                    ))}
                    <div>
                      <label style={{ fontSize:'0.8rem', fontWeight:600, color:'#374151', display:'block', marginBottom:4 }}>Cover Note</label>
                      <textarea name="note" rows={3} placeholder="Why are you a great fit for this role?" value={form.note}
                        onChange={onChange} style={{ ...inputStyle, resize:'none' }}
                        onFocus={e => e.target.style.borderColor='#2563eb'}
                        onBlur={e => e.target.style.borderColor='#e2e8f0'} />
                    </div>
                    <div>
                      <label style={{ fontSize:'0.8rem', fontWeight:600, color:'#374151', display:'block', marginBottom:4 }}>Resume (PDF/DOC)</label>
                      <input type="file" accept=".pdf,.doc,.docx" onChange={onFile}
                        style={{ ...inputStyle, padding:'0.6rem 1rem', cursor:'pointer' }} />
                    </div>
                    <motion.button type="submit" whileHover={{ scale:1.02 }} whileTap={{ scale:0.97 }}
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-white transition-all"
                      style={{ background:'linear-gradient(135deg,#1e3a8a,#2563eb)', fontSize:'0.9rem', boxShadow:'0 4px 14px rgba(37,99,235,0.3)', opacity: loading ? 0.7 : 1 }}>
                      {loading ? 'Submitting…' : <> Submit Application <FaArrowRight size={12} /> </>}
                    </motion.button>
                  </form>
                )}
              </div>

              {/* CTA bottom */}
              <div className="px-5 pb-5">
                <div className="rounded-xl p-4 text-center" style={{ background:'#f8fafc', border:'1px solid #e2e8f0' }}>
                  <div className="flex justify-center gap-0.5 mb-1">
                    {[...Array(5)].map((_,i) => <FaStar key={i} size={11} style={{ color:'#fbbf24' }} />)}
                  </div>
                  <p style={{ fontSize:'0.75rem', color:'#64748b' }}>95% placement success rate</p>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </section>

    </div>
  )
}
