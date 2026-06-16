import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaBriefcase, FaMapMarkerAlt, FaClock, FaMoneyBillWave,
  FaTimes, FaUpload, FaCheckCircle, FaChevronDown,
  FaArrowRight, FaUsers, FaRocket, FaHandshake, FaStar,
} from 'react-icons/fa'
import { internships } from '../../data/jobs'

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
    background: '#f8fafc', border: '1px solid #e2e8f0', color: '#1e293b',
    borderRadius: '0.75rem', padding: '0.875rem 1rem', width: '100%',
    fontSize: '0.875rem', outline: 'none', transition: 'border-color 0.2s',
  }

  return (
    <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
      onClick={onClose} style={{ background:'rgba(0,0,0,0.65)', backdropFilter:'blur(6px)' }}>
      <motion.div initial={{ scale:0.88, opacity:0 }} animate={{ scale:1, opacity:1 }}
        exit={{ scale:0.88, opacity:0 }} transition={{ duration:0.25 }}
        onClick={e => e.stopPropagation()} className="w-full max-w-lg rounded-3xl p-8 relative"
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
              <h2 className="text-xl font-bold" style={{ color:'#0f172a' }}>Apply for Internship</h2>
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
                  <input type={f.type} name={f.name} value={form[f.name]} onChange={onChange}
                    required placeholder={f.ph} style={inputStyle}
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
                  placeholder="Why are you interested in this internship?"
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

// ─── Internship Row ────────────────────────────────────────────────────────────
function InternRow({ item, open, onToggle, onApply }) {
  return (
    <div style={{ background:'#fff', borderBottom:'1px solid #e2e8f0', overflow:'hidden' }}>
      <button onClick={onToggle}
        className="w-full flex items-center justify-between px-5 py-4 text-left"
        style={{ background: open ? '#f0f6ff' : '#fff', transition:'background 0.2s' }}>
        <span className="font-semibold" style={{ fontSize: '1rem', color:'#0f172a' }}>
          {item.title} &nbsp;–&nbsp; ({item.experience})
        </span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration:0.22 }}
          className="ml-4 flex-shrink-0" style={{ color: open ? '#2563eb' : '#94a3b8' }}>
          <FaChevronDown size={14} />
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height:0, opacity:0 }} animate={{ height:'auto', opacity:1 }}
            exit={{ height:0, opacity:0 }} transition={{ duration:0.28, ease:'easeInOut' }}
            style={{ overflow:'hidden' }}>
            <div className="px-5 pb-6 pt-1" style={{ borderTop:'1px solid #e2e8f0' }}>
              <div className="flex flex-wrap gap-2 mt-4 mb-3">
                <span className="flex items-center gap-1 text-xs px-2.5 py-1 rounded-full" style={{ background:'#eff6ff', color:'#2563eb' }}>
                  <FaMapMarkerAlt size={9} /> {item.location}
                </span>
                <span className="flex items-center gap-1 text-xs px-2.5 py-1 rounded-full" style={{ background:'#f0fdf4', color:'#16a34a' }}>
                  <FaClock size={9} /> {item.duration}
                </span>
                <span className="flex items-center gap-1 text-xs px-2.5 py-1 rounded-full" style={{ background:'#fefce8', color:'#ca8a04' }}>
                  <FaMoneyBillWave size={9} /> {item.stipend}
                </span>
                <span className="text-xs px-2.5 py-1 rounded-full" style={{ background:'#f1f5f9', color:'#64748b' }}>
                  {item.code}
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {item.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-md text-xs font-medium"
                    style={{ background:'#eff6ff', color:'#2563eb', border:'1px solid #bfdbfe' }}>{tag}</span>
                ))}
              </div>
              <p className="mb-5" style={{ fontSize: '0.95rem', color:'#475569', lineHeight:1.8 }}>{item.description}</p>
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="font-bold uppercase tracking-widest mb-3" style={{ fontSize: '0.78rem', color:'#2563eb' }}>Skills Required</p>
                  <ul className="space-y-2">
                    {item.skills.map((s, i) => (
                      <li key={i} className="flex items-start gap-2" style={{ fontSize: '0.95rem', color:'#475569' }}>
                        <span style={{ width:6, height:6, borderRadius:'50%', background:'#2563eb', flexShrink:0, marginTop:6 }} />{s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-bold uppercase tracking-widest mb-3" style={{ fontSize: '0.78rem', color:'#2563eb' }}>Key Responsibilities</p>
                  <ul className="space-y-2">
                    {item.responsibilities.map((r, i) => (
                      <li key={i} className="flex items-start gap-2" style={{ fontSize: '0.95rem', color:'#475569' }}>
                        <span style={{ width:6, height:6, borderRadius:'50%', background:'#1e3a8a', flexShrink:0, marginTop:6 }} />{r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex items-center justify-between pt-4" style={{ borderTop:'1px dashed #e2e8f0' }}>
                <span className="text-xs" style={{ color:'#94a3b8' }}>Posted {item.postedAt}</span>
                <motion.button whileHover={{ scale:1.04 }} whileTap={{ scale:0.97 }}
                  onClick={() => onApply(item)}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white"
                  style={{ background:'linear-gradient(135deg,#2563eb,#1d4ed8)', boxShadow:'0 4px 14px rgba(37,99,235,0.3)' }}>
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

const WHY = [
  { icon: FaRocket,    title: 'Real Project Experience', desc: 'Work on live projects with mentors guiding you every step of the way.' },
  { icon: FaUsers,     title: 'Learn From the Best',     desc: 'Get mentored by experienced professionals in your field.' },
  { icon: FaHandshake, title: 'Full-Time Conversion',    desc: 'Top interns are offered full-time roles at our hiring partner companies.' },
  { icon: FaStar,      title: 'Certificate & LOR',       desc: 'Receive a certificate of completion and a letter of recommendation.' },
]

export default function Internships() {
  const [applying, setApplying] = useState(null)
  const [openId, setOpenId]     = useState(null)

  const toggle = (id) => setOpenId(prev => prev === id ? null : id)

  return (
    <div style={{ background:'#f8fafc', minHeight:'100vh' }}>

      {/* ── Hero ── */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{ background:'linear-gradient(135deg,#0f172a 0%,#1e3a8a 55%,#2563eb 100%)' }}>
        <div style={{ position:'absolute', top:-60, right:-60, width:320, height:320, borderRadius:'50%', background:'rgba(255,255,255,0.04)', zIndex:0 }} />
        <div style={{ position:'absolute', bottom:-40, left:80, width:200, height:200, borderRadius:'50%', background:'rgba(255,255,255,0.03)', zIndex:0 }} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity:0, y:-24 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
              style={{ background:'rgba(255,255,255,0.12)', color:'#86efac', border:'1px solid rgba(255,255,255,0.2)' }}>
              🎓 Internships at MentorHub
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4" style={{ lineHeight:1.1 }}>
              Kickstart Your<br /><span style={{ color:'#86efac' }}>Career Journey</span>
            </h1>
            <p className="text-lg max-w-2xl mx-auto mb-8" style={{ color:'rgba(255,255,255,0.72)', lineHeight:1.7 }}>
              Hands-on internships with mentorship, real projects, and possible full-time conversion at top companies.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              {[{ n:'50+', l:'Partner Companies' }, { n:`${internships.length}`, l:'Open Internships' }, { n:'3–6', l:'Month Duration' }, { n:'80%', l:'Full-Time Conversion' }].map(s => (
                <div key={s.l} className="text-center">
                  <p className="text-2xl font-black text-white">{s.n}</p>
                  <p className="text-xs" style={{ color:'rgba(255,255,255,0.55)' }}>{s.l}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Why Intern ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-black" style={{ fontSize: '1.6rem', color:'#0f172a' }}>
              Why Intern With <span style={{ color:'#2563eb' }}>Us?</span>
            </h2>
            <p className="mt-2 max-w-xl mx-auto" style={{ fontSize: '1rem', color:'#64748b' }}>
              Our internships are designed to give you real experience, real mentors, and real results.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHY.map((w, i) => (
              <motion.div key={w.title} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }} transition={{ delay:i*0.08, duration:0.45 }}
                className="p-5 rounded-2xl" style={{ background:'#fff', border:'1px solid #e2e8f0', boxShadow:'0 1px 4px rgba(0,0,0,0.04)' }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background:'#f0fdf4' }}>
                  <w.icon size={18} style={{ color:'#16a34a' }} />
                </div>
                <p className="font-bold mb-1" style={{ fontSize: '0.95rem', color:'#0f172a' }}>{w.title}</p>
                <p className="leading-relaxed" style={{ fontSize: '0.875rem', color:'#64748b' }}>{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Internships List ── */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6">
            <h2 className="font-black" style={{ fontSize: '1.6rem', color:'#0f172a' }}>Internship Opportunities</h2>
            <p className="mt-1" style={{ fontSize: '1rem', color:'#64748b' }}>
              Hands-on internships with mentorship, real projects, and possible full-time conversion.
            </p>
          </div>
          <div style={{ border: '1px solid #e2e8f0', borderRadius: '1rem', overflow: 'hidden', background: '#fff', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
            {internships.map(item => <InternRow key={item.id} item={item} open={openId === item.id} onToggle={() => toggle(item.id)} onApply={setApplying} />)}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-3xl overflow-hidden relative"
            style={{ background: 'linear-gradient(120deg, #1e40af 0%, #2563eb 50%, #38bdf8 100%)', boxShadow: '0 24px 64px rgba(37,99,235,0.28)', minHeight: 220 }}>
            <div style={{ position:'absolute', inset:0, backgroundImage:'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize:'32px 32px', zIndex:0 }} />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 px-10 py-10">
              {/* Left */}
              <div className="flex-1">
                <h2 className="font-black text-white mb-6" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', lineHeight: 1.2 }}>
                  Ready to Kickstart Your<br />Career Journey Today!
                </h2>
                <div className="flex flex-wrap gap-3">
                  <motion.a href="https://wa.me/919000000000" target="_blank" rel="noreferrer"
                    whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold"
                    style={{ background: '#fff', color: '#2563eb', boxShadow: '0 2px 12px rgba(0,0,0,0.15)' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    Connect on WhatsApp
                  </motion.a>
                  <motion.a href="/contact"
                    whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white"
                    style={{ background: '#0f172a', boxShadow: '0 2px 12px rgba(0,0,0,0.25)' }}>
                    Get in Touch <FaArrowRight size={11} />
                  </motion.a>
                </div>
              </div>
              {/* Right — person image */}
              <div className="flex-shrink-0 hidden md:block">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80&auto=format&fit=crop"
                  alt="Career expert"
                  style={{ height: 220, width: 'auto', objectFit: 'cover', objectPosition: 'top', borderRadius: '1rem', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {applying && <ApplyModal item={applying} onClose={() => setApplying(null)} />}
      </AnimatePresence>
    </div>
  )
}
