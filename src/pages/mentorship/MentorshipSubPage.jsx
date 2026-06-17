import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  FaCheckCircle, FaArrowRight, FaStar, FaCertificate,
  FaClock, FaVideo, FaLaptopCode, FaBriefcase,
  FaAward, FaMedal, FaQuoteLeft, FaChevronDown,
  FaUsers, FaGraduationCap, FaRocket, FaShieldAlt,
} from 'react-icons/fa'
import AnimatedSection from '../../components/ui/AnimatedSection'

const ACCENT  = '#2563eb'
const ACCENT2 = '#38bdf8'
const GRAD    = `linear-gradient(135deg, ${ACCENT}, ${ACCENT2})`

const card = {
  background: 'var(--color-card)',
  border: '1px solid var(--color-border)',
  borderRadius: '1rem',
  boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
}

const mentorAvatars = [
  { name: 'Arjun Sharma',  role: 'Senior Engineer, 8 yrs exp',  img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80', company: 'Ex-TCS' },
  { name: 'Priya Mehta',   role: 'Product Designer, 6 yrs exp', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80', company: 'Ex-Infosys' },
  { name: 'Rahul Verma',   role: 'Lead DevOps, 10 yrs exp',     img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80', company: 'Ex-Wipro' },
  { name: 'Sneha Patel',   role: 'Data Scientist, 7 yrs exp',   img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80', company: 'Ex-Accenture' },
]

const testimonials = [
  { name: 'Karthik R.', role: 'Now at TCS', text: 'The mentorship was life-changing. I landed my first tech job within 2 months of completing the program.', rating: 5 },
  { name: 'Divya S.',   role: 'Now at Infosys', text: 'Live 1-on-1 sessions were incredibly effective. My mentor guided me through every concept patiently.', rating: 5 },
  { name: 'Aakash M.', role: 'Now at Wipro', text: 'Real projects, real skills. The certificate helped me stand out in interviews. Highly recommended!', rating: 5 },
]

const faqs = [
  { q: 'Do I need prior experience to join this program?', a: 'No prior experience is required. This program is designed for beginners and professionals looking to upskill. Your mentor will tailor the pace and content to your current level.' },
  { q: 'How are the live sessions conducted?', a: 'All sessions are live 1-on-1 via Google Meet or Zoom, scheduled at a time that works for you. Sessions are typically 60–90 minutes, 2–3 times per week.' },
  { q: 'What happens if I miss a session?', a: 'All sessions are recorded and shared with you. You can reschedule sessions with 24 hours notice. Your mentor will also share notes and resources after every session.' },
  { q: 'Will I get a certificate at the end?', a: 'Yes! Upon successful completion you receive a verified MentorHub Certificate of Completion. It is shareable on LinkedIn and recognised by our 500+ hiring partners.' },
  { q: 'Is placement assistance included?', a: 'Yes. Placement support is included — resume review, mock interviews, LinkedIn optimisation, and referrals to our hiring partner network are all part of the program.' },
  { q: 'What is the fee and payment options?', a: 'We offer flexible payment plans. Contact us for current pricing. EMI options are available with no-cost EMI for up to 6 months.' },
]

// ── Certificate Mockup ────────────────────────────────────────────────────────
function CertificateMockup({ title }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{ background: `linear-gradient(145deg, #0f172a, #1e3a5f)`, borderRadius: '1.5rem', padding: 3, boxShadow: `0 32px 80px rgba(37,99,235,0.25)`, maxWidth: 580, margin: '0 auto' }}
    >
      <div style={{ background: 'linear-gradient(145deg, #fff9f0, #fefefe)', borderRadius: '1.35rem', padding: '2.5rem', position: 'relative', overflow: 'hidden' }}>
        {[{ top:12,left:12 },{ top:12,right:12 },{ bottom:12,left:12 },{ bottom:12,right:12 }].map((pos,i)=>(
          <div key={i} style={{ position:'absolute', width:28, height:28, borderTop: i<2?`3px solid ${ACCENT}`:'none', borderBottom:i>=2?`3px solid ${ACCENT}`:'none', borderLeft:i%2===0?`3px solid ${ACCENT}`:'none', borderRight:i%2===1?`3px solid ${ACCENT}`:'none', ...pos }} />
        ))}
        <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center', opacity:0.04, pointerEvents:'none' }}>
          <FaMedal size={200} style={{ color: ACCENT }} />
        </div>
        <div style={{ textAlign:'center', marginBottom:'1.25rem' }}>
          <div style={{ width:48, height:48, borderRadius:12, margin:'0 auto 8px', background:GRAD, display:'flex', alignItems:'center', justifyContent:'center' }}>
            <FaAward size={22} style={{ color:'#fff' }} />
          </div>
          <p style={{ fontSize:'0.68rem', fontWeight:800, letterSpacing:'0.2em', textTransform:'uppercase', color:ACCENT }}>MentorHub</p>
          <p style={{ fontSize:'0.58rem', letterSpacing:'0.14em', color:'#94a3b8', textTransform:'uppercase' }}>Certificate of Completion</p>
        </div>
        <div style={{ height:1, background:`linear-gradient(90deg,transparent,${ACCENT}40,transparent)`, marginBottom:'1.25rem' }} />
        <div style={{ textAlign:'center', marginBottom:'1.25rem' }}>
          <p style={{ fontSize:'0.72rem', color:'#64748b', marginBottom:6 }}>This certifies that</p>
          <p style={{ fontSize:'1.5rem', fontWeight:900, background:GRAD, WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text', fontFamily:'Georgia,serif', marginBottom:6 }}>Your Full Name</p>
          <p style={{ fontSize:'0.72rem', color:'#64748b', marginBottom:4 }}>has successfully completed</p>
          <p style={{ fontSize:'0.95rem', fontWeight:800, color:'#0f172a', marginBottom:3 }}>{title}</p>
          <p style={{ fontSize:'0.7rem', color:'#94a3b8' }}>Mentorship Program · MentorHub</p>
        </div>
        <div style={{ height:1, background:`linear-gradient(90deg,transparent,${ACCENT}40,transparent)`, marginBottom:'1.25rem' }} />
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end' }}>
          <div style={{ textAlign:'center' }}><div style={{ width:80, height:1, background:'#cbd5e1', marginBottom:4 }} /><p style={{ fontSize:'0.58rem', color:'#94a3b8' }}>Program Director</p></div>
          <div style={{ width:48, height:48, borderRadius:'50%', background:GRAD, display:'flex', alignItems:'center', justifyContent:'center', boxShadow:`0 8px 20px ${ACCENT}40` }}><FaMedal size={20} style={{ color:'#fff' }} /></div>
          <div style={{ textAlign:'center' }}><div style={{ width:80, height:1, background:'#cbd5e1', marginBottom:4 }} /><p style={{ fontSize:'0.58rem', color:'#94a3b8' }}>Date of Completion</p></div>
        </div>
      </div>
    </motion.div>
  )
}

// ── FAQ Item ──────────────────────────────────────────────────────────────────
function FAQItem({ q, a, index }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      style={{ borderBottom: '1px solid var(--color-border)' }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
      >
        <span style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--color-text)', lineHeight: 1.5 }}>{q}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }} style={{ flexShrink: 0 }}>
          <FaChevronDown size={14} style={{ color: ACCENT }} />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{ overflow: 'hidden' }}
          >
            <p style={{ fontSize: '0.9rem', color: 'var(--color-textMuted)', lineHeight: 1.8, paddingBottom: '1.25rem' }}>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function MentorshipSubPage({ program }) {
  const { title, description, tools, learnings } = program
  const heroImg = program.heroImg || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1400&q=80'

  return (
    <div className="overflow-x-hidden" style={{ background: 'var(--color-primary)' }}>

      {/* ── HERO — full-width image with overlay ────────────────────────── */}
      <section style={{ position: 'relative', minHeight: '92vh', display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
        {/* Background image */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
          <img src={heroImg} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
          {/* Gradient overlay */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(10,15,30,0.35) 0%, rgba(10,15,30,0.6) 55%, rgba(10,15,30,0.92) 100%)' }} />
        </div>

        {/* Hero content — lower position */}
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 lg:pt-[145px] pb-14">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="font-black leading-[1.1] mb-5 text-white lg:whitespace-nowrap" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.75rem)' }}>
              {title}
            </h1>

            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.75, marginBottom: '2rem', maxWidth: 640 }}>
              {description}
            </p>

            {/* Star rating */}
            <div className="flex items-center gap-2 mb-6">
              {[...Array(5)].map((_, i) => <FaStar key={i} size={12} style={{ color: '#fbbf24' }} />)}
              <span className="text-sm font-bold text-white ml-1">4.9</span>
              <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>(200+ students)</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white text-sm"
                  style={{ background: GRAD, boxShadow: `0 8px 28px rgba(37,99,235,0.5)` }}>
                  Enroll Now <FaArrowRight size={12} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm"
                  style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', border: '1px solid rgba(255,255,255,0.25)', backdropFilter: 'blur(8px)' }}>
                  Request Syllabus
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* ── Program details bar — inside hero at the bottom ── */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { icon: FaClock,       label: 'Duration',    value: '8–12 Weeks'        },
              { icon: FaVideo,       label: 'Format',      value: 'Live 1-on-1 Online' },
              { icon: FaLaptopCode,  label: 'Projects',    value: '3+ Real Projects'   },
              { icon: FaCertificate, label: 'Certificate', value: 'On Completion'      },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-3 py-4 px-4 rounded-xl"
                style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.15)' }}>
                <div style={{ width: 34, height: 34, borderRadius: 9, background: 'rgba(56,189,248,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon size={15} style={{ color: ACCENT2 }} />
                </div>
                <div>
                  <p style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.5)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{label}</p>
                  <p style={{ fontSize: '0.82rem', fontWeight: 800, color: '#f1f5f9' }}>{value}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── OVERVIEW ─────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: 'var(--color-primary)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 items-start">

            {/* Left — about text */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <span style={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: ACCENT, display: 'block', marginBottom: 10 }}>About This Program</span>
                <h2 className="text-3xl sm:text-4xl font-black mb-5" style={{ color: 'var(--color-text)' }}>
                  Launch Your Career in <span style={{ background: GRAD, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{title}</span>
                </h2>
                <p style={{ fontSize: '1rem', color: 'var(--color-textMuted)', lineHeight: 1.85, marginBottom: '1.5rem' }}>
                  {description}
                </p>
                <p style={{ fontSize: '1rem', color: 'var(--color-textMuted)', lineHeight: 1.85 }}>
                  Every session is live, personalised, and guided by industry professionals who have worked at top tech companies. You will build real projects, grow your portfolio, and get full placement support to land your dream role.
                </p>
              </AnimatedSection>

              {/* 4 benefit pills */}
              <AnimatedSection className="grid grid-cols-2 gap-4 mt-10">
                {[
                  { icon: FaUsers,       text: 'Live 1-on-1 Mentorship'  },
                  { icon: FaRocket,      text: 'Real Project Portfolio'   },
                  { icon: FaShieldAlt,   text: 'Placement Support'        },
                  { icon: FaGraduationCap, text: 'Verified Certificate'   },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3 p-4 rounded-2xl" style={card}>
                    <div style={{ width: 36, height: 36, borderRadius: 10, background: '#dbeafe', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon size={14} style={{ color: ACCENT }} />
                    </div>
                    <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-text)' }}>{text}</span>
                  </div>
                ))}
              </AnimatedSection>
            </div>

            {/* Right — enroll card */}
            <AnimatedSection variant="fadeRight">
              <div className="rounded-3xl overflow-hidden" style={{ boxShadow: '0 20px 60px rgba(37,99,235,0.12)', border: `2px solid ${ACCENT}20`, position: 'sticky', top: 100 }}>
                {/* Card header */}
                <div style={{ background: GRAD, padding: '1.5rem' }}>
                  <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: 4 }}>Mentorship Program</p>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 900, color: '#fff' }}>{title}</h3>
                </div>
                {/* Card body */}
                <div style={{ background: 'var(--color-card)', padding: '1.5rem' }}>
                  {[
                    ['Duration',    '8–12 Weeks'         ],
                    ['Format',      'Live 1-on-1 Online'  ],
                    ['Sessions',    '2–3 per Week'        ],
                    ['Projects',    '3+ Real Projects'    ],
                    ['Certificate', 'On Completion'       ],
                    ['Placement',   'Fully Supported'     ],
                  ].map(([label, value]) => (
                    <div key={label} className="flex justify-between items-center py-3" style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <span style={{ fontSize: '0.85rem', color: 'var(--color-textMuted)' }}>{label}</span>
                      <span style={{ fontSize: '0.85rem', fontWeight: 700, color: ACCENT }}>{value}</span>
                    </div>
                  ))}
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="mt-5">
                    <Link to="/contact" className="flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-sm text-white w-full"
                      style={{ background: GRAD, boxShadow: `0 8px 24px rgba(37,99,235,0.35)` }}>
                      Enroll Now <FaArrowRight size={12} />
                    </Link>
                  </motion.div>
                  <Link to="/contact" className="flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm mt-3 w-full"
                    style={{ border: `1.5px solid ${ACCENT}`, color: ACCENT }}>
                    Request Free Syllabus
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── CURRICULUM ───────────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ background: 'var(--color-primary)' }}>
        <div className="max-w-7xl mx-auto">

          {/* Section Header */}
          <AnimatedSection className="text-center mb-14">
            <span style={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase', color: ACCENT, display: 'block', marginBottom: 12 }}>Curriculum</span>
            <h2 className="text-3xl sm:text-4xl font-black mb-4" style={{ color: 'var(--color-text)' }}>
              What You'll <span style={{ background: GRAD, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Learn</span>
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-textMuted)', maxWidth: 480, margin: '0 auto' }}>
              {learnings.length} carefully structured modules — from fundamentals to industry-ready skills.
            </p>
          </AnimatedSection>

          {/* Module Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {learnings.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 6) * 0.07 }}
                className="group relative rounded-2xl overflow-hidden cursor-default"
                style={{ background: 'var(--color-card)', border: '1.5px solid var(--color-border)' }}
                whileHover={{ y: -6 }}
              >
                {/* Gradient top border */}
                <div style={{ height: 3, background: GRAD }} />

                <div className="p-6">
                  {/* Number + glow circle */}
                  <div className="flex items-center justify-between mb-5">
                    <div style={{ position: 'relative' }}>
                      <div style={{ width: 44, height: 44, borderRadius: 12, background: GRAD, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 6px 18px ${ACCENT}35` }}>
                        <span style={{ color: '#fff', fontWeight: 900, fontSize: '0.9rem', letterSpacing: '-0.02em' }}>{String(i + 1).padStart(2, '0')}</span>
                      </div>
                    </div>
                    <span style={{ fontSize: '0.68rem', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Module</span>
                  </div>

                  {/* Topic title */}
                  <h3 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.4, marginBottom: '0.5rem' }}>
                    {item}
                  </h3>

                  {/* Short subtitle */}
                  <p style={{ fontSize: '0.82rem', color: 'var(--color-textMuted)', lineHeight: 1.6 }}>
                    Hands-on practice with live mentor guidance and real projects.
                  </p>

                  {/* Bottom row */}
                  <div className="flex items-center justify-between mt-5 pt-4" style={{ borderTop: '1px solid var(--color-border)' }}>
                    <span style={{ fontSize: '0.72rem', fontWeight: 700, color: ACCENT, background: '#eff6ff', padding: '3px 10px', borderRadius: 20, border: `1px solid #bfdbfe` }}>
                      ~1 Week
                    </span>
                    <FaCheckCircle size={14} style={{ color: '#22c55e' }} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Download CTA */}
          <AnimatedSection className="mt-12 text-center">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-block">
              <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white"
                style={{ background: GRAD, boxShadow: `0 8px 24px ${ACCENT}30` }}>
                Download Full Syllabus <FaArrowRight size={12} />
              </Link>
            </motion.div>
          </AnimatedSection>

        </div>
      </section>

      {/* ── TOOLS & TECH ─────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: 'var(--color-primary)' }}>
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-12">
            <span style={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: ACCENT, display: 'block', marginBottom: 10 }}>Tech Stack</span>
            <h2 className="text-3xl sm:text-4xl font-black" style={{ color: 'var(--color-text)' }}>
              Tools & <span style={{ background: GRAD, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Technologies</span>
            </h2>
          </AnimatedSection>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool, i) => (
              <AnimatedSection key={tool} delay={i * 0.04} variant="scaleIn">
                <motion.span
                  className="px-5 py-2.5 rounded-xl text-sm font-semibold cursor-default inline-block"
                  style={{ background: 'var(--color-card)', border: '1.5px solid var(--color-border)', color: 'var(--color-text)' }}
                  whileHover={{ scale: 1.06, color: ACCENT, borderColor: `${ACCENT}60`, background: '#eff6ff', boxShadow: `0 6px 20px ${ACCENT}15` }}
                  transition={{ duration: 0.15 }}
                >
                  {tool}
                </motion.span>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATE ──────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(150deg, #0f172a 0%, #1e3a5f 100%)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <AnimatedSection variant="fadeLeft">
              <span style={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: ACCENT2, display: 'block', marginBottom: 10 }}>Industry Recognised</span>
              <h2 className="text-3xl sm:text-4xl font-black leading-tight mb-5 text-white">
                Earn a Verified <span style={{ background: `linear-gradient(135deg,${ACCENT2},#60a5fa)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Certificate</span>
              </h2>
              <p style={{ color: '#94a3b8', lineHeight: 1.8, marginBottom: '2rem', fontSize: '1rem' }}>
                Upon successful completion, receive a verified MentorHub Certificate recognised by 500+ hiring partners. Showcase your achievement on LinkedIn and your resume with confidence.
              </p>
              <ul className="space-y-3 mb-8">
                {['Shareable directly on LinkedIn & resume','Verified by MentorHub instructors','Recognised by 500+ hiring partners','Includes course completion details','Digital + printable format'].map(pt => (
                  <li key={pt} className="flex items-center gap-3">
                    <FaCheckCircle size={14} style={{ color: ACCENT2, flexShrink: 0 }} />
                    <span style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>{pt}</span>
                  </li>
                ))}
              </ul>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white"
                  style={{ background: `linear-gradient(135deg,${ACCENT2},#60a5fa)` }}>
                  Get Certified <FaArrowRight size={12} />
                </Link>
              </motion.div>
            </AnimatedSection>
            <AnimatedSection variant="fadeRight">
              <CertificateMockup title={title} />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── MENTORS ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: 'var(--color-secondary)' }}>
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-12">
            <span style={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: ACCENT, display: 'block', marginBottom: 10 }}>Expert Guidance</span>
            <h2 className="text-3xl sm:text-4xl font-black" style={{ color: 'var(--color-text)' }}>
              Meet Your <span style={{ background: GRAD, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Mentors</span>
            </h2>
            <p className="mt-3 max-w-xl" style={{ color: 'var(--color-textMuted)' }}>Learn from working professionals with years of real-world experience at top tech companies.</p>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {mentorAvatars.map((m, i) => (
              <AnimatedSection key={m.name} delay={i * 0.1} variant="scaleIn">
                <motion.div className="rounded-2xl p-6 text-center" style={card}
                  whileHover={{ y: -6, boxShadow: `0 16px 40px ${ACCENT}15`, borderColor: `${ACCENT}30` }}>
                  <div className="relative inline-block mb-4">
                    <img src={m.img} alt={m.name} className="w-16 h-16 rounded-full object-cover mx-auto" style={{ border: `3px solid #bfdbfe` }} />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center" style={{ background: GRAD }}>
                      <FaAward size={8} style={{ color: '#fff' }} />
                    </div>
                  </div>
                  <p className="text-sm font-bold" style={{ color: 'var(--color-text)' }}>{m.name}</p>
                  <p className="text-xs mt-1" style={{ color: 'var(--color-textMuted)' }}>{m.role}</p>
                  <span className="inline-block mt-2 px-2 py-0.5 rounded-full text-xs font-semibold" style={{ background: '#dbeafe', color: ACCENT }}>{m.company}</span>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: 'var(--color-primary)' }}>
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-12">
            <span style={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: ACCENT, display: 'block', marginBottom: 10 }}>Success Stories</span>
            <h2 className="text-3xl sm:text-4xl font-black" style={{ color: 'var(--color-text)' }}>
              What Our <span style={{ background: GRAD, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Students Say</span>
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.1} variant="scaleIn">
                <motion.div className="rounded-2xl p-6 h-full flex flex-col" style={card}
                  whileHover={{ y: -5, boxShadow: `0 16px 40px ${ACCENT}12` }}>
                  <div className="flex mb-4">
                    {[...Array(t.rating)].map((_, j) => <FaStar key={j} size={13} style={{ color: '#fbbf24' }} />)}
                  </div>
                  <FaQuoteLeft size={18} style={{ color: ACCENT, opacity: 0.3, marginBottom: 10 }} />
                  <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: 'var(--color-textMuted)' }}>{t.text}</p>
                  <div className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid var(--color-border)' }}>
                    <div className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-white text-sm flex-shrink-0" style={{ background: GRAD }}>{t.name[0]}</div>
                    <div>
                      <p className="text-sm font-bold" style={{ color: 'var(--color-text)' }}>{t.name}</p>
                      <p className="text-xs" style={{ color: ACCENT }}>{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: 'var(--color-secondary)' }}>
        <div className="max-w-3xl mx-auto">
          <AnimatedSection className="mb-12">
            <span style={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: ACCENT, display: 'block', marginBottom: 10 }}>FAQ</span>
            <h2 className="text-3xl sm:text-4xl font-black" style={{ color: 'var(--color-text)' }}>
              Frequently Asked <span style={{ background: GRAD, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Questions</span>
            </h2>
          </AnimatedSection>
          <div style={card}>
            <div style={{ padding: '0 1.5rem' }}>
              {faqs.map((faq, i) => <FAQItem key={i} q={faq.q} a={faq.a} index={i} />)}
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: GRAD }}>
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-black mb-4 text-white">
              Ready to Start Your Journey?
            </h2>
            <p className="mb-8 text-lg" style={{ color: 'rgba(255,255,255,0.8)' }}>
              Limited seats available each cohort. Enrol today and take the first step toward your dream tech career.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm text-blue-600"
                  style={{ background: '#fff', boxShadow: '0 8px 24px rgba(0,0,0,0.2)' }}>
                  Enroll Now <FaArrowRight />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm text-white"
                  style={{ border: '2px solid rgba(255,255,255,0.5)', background: 'rgba(255,255,255,0.1)' }}>
                  Book a Free Demo
                </Link>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

    </div>
  )
}
