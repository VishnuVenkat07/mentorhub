import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaArrowRight, FaCode, FaMobileAlt, FaPalette, FaChartBar,
  FaServer, FaReact, FaGraduationCap, FaFileAlt, FaBrain,
  FaLayerGroup, FaCheckCircle, FaStar, FaUsers, FaRocket,
  FaShieldAlt, FaHandshake, FaLightbulb, FaAward,
  FaQuoteLeft, FaLinkedin, FaArrowLeft, FaPlay,
} from 'react-icons/fa'
import AnimatedSection from '../components/ui/AnimatedSection'
import Counter from '../components/ui/Counter'
import Button from '../components/ui/Button'
import { mentorships } from '../data/mentorships'
import { services } from '../data/services'

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────
const iconMap = {
  FaLayerGroup, FaMobileAlt, FaPalette, FaChartBar,
  FaServer, FaReact, FaGraduationCap, FaFileAlt, FaBrain, FaCode,
}

const stats = [
  { icon: FaUsers,       label: 'Students Mentored', value: 2400, suffix: '+' },
  { icon: FaAward,       label: 'Expert Mentors',     value: 85,   suffix: '+' },
  { icon: FaLayerGroup,  label: 'Programs',            value: 9,    suffix: '' },
  { icon: FaRocket,      label: 'Placements',          value: 1800, suffix: '+' },
]

const techTabs = [
  { label: 'Frontend',  items: ['React', 'Next.js', 'TypeScript', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'Redux'] },
  { label: 'Backend',   items: ['Node.js', 'NestJS', 'Express.js', 'Java', 'Python', 'REST APIs', 'GraphQL', 'JWT'] },
  { label: 'Mobile',    items: ['React Native', 'Flutter', 'Dart', 'Firebase', 'App Store', 'Play Store', 'Expo', 'Android'] },
  { label: 'Database',  items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Redis', 'Mongoose', 'Prisma', 'Supabase'] },
  { label: 'DevOps',    items: ['Docker', 'Kubernetes', 'AWS', 'GitHub Actions', 'Jenkins', 'Terraform', 'Linux', 'Nginx'] },
  { label: 'AI Tools',  items: ['ChatGPT', 'GitHub Copilot', 'Midjourney', 'Claude', 'Gemini', 'Cursor', 'Notion AI', 'Zapier'] },
]

const processSteps = [
  { step: '01', title: 'Apply & Discover',      desc: 'Fill out a quick form about your background, goals, and the program you want to join.' },
  { step: '02', title: 'Initial Assessment',     desc: 'A short 30-min call with our team to understand your level and map the right path.' },
  { step: '03', title: 'Mentor Matching',        desc: 'We pair you with the perfect mentor from our vetted expert network.' },
  { step: '04', title: 'Live Learning Sessions', desc: 'Start 1-on-1 live sessions — hands-on coding, designing, and building real things.' },
  { step: '05', title: 'Build Real Projects',    desc: 'Work on portfolio-ready projects under your mentor\'s direct guidance.' },
  { step: '06', title: 'Get Placed',             desc: 'Resume review, mock interviews, and referrals to our 200+ hiring partner companies.' },
]

const whyUs = [
  { icon: FaShieldAlt, title: 'Industry Experts',    color: '#2563eb', desc: 'Every mentor is a working professional with 5–15 years of real-world industry experience.' },
  { icon: FaRocket,    title: 'Fast Career Growth',  color: '#10b981', desc: 'Structured paths designed to get you job-ready 3× faster than traditional bootcamps.' },
  { icon: FaHandshake, title: 'Placement Support',   color: '#f59e0b', desc: 'Dedicated placement cell with 200+ company partnerships and alumni referrals.' },
  { icon: FaLightbulb, title: 'Flexible Learning',   color: '#8b5cf6', desc: 'Flexible session scheduling that fits around your college, job, or personal commitments.' },
]

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'Full Stack Developer',
    company: 'Google',
    avatar: 'RS',
    color: '#3b82f6',
    quote: 'MentorHub completely changed my career trajectory. My mentor helped me go from knowing nothing about React to landing a job at Google in just 4 months. The live sessions and real project feedback were invaluable.',
    stars: 5,
  },
  {
    name: 'Priya Mehta',
    role: 'UI/UX Designer',
    company: 'Swiggy',
    avatar: 'PM',
    color: '#ec4899',
    quote: 'I had zero design experience. After 3 months with my design mentor, I had a portfolio of 5 projects and landed a role at Swiggy. The 1-on-1 attention you get here is unlike anything else available.',
    stars: 5,
  },
  {
    name: 'Karan Verma',
    role: 'DevOps Engineer',
    company: 'Amazon',
    avatar: 'KV',
    color: '#f59e0b',
    quote: 'The DevOps mentorship covered everything from Docker to AWS to CI/CD pipelines. My mentor gave me real interview questions from top companies. Highly recommend for anyone serious about DevOps.',
    stars: 5,
  },
]

const blogPosts = [
  {
    img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=500&q=80',
    category: 'Full Stack',
    title: 'The Complete 2024 Roadmap to Becoming a Full Stack Developer',
    excerpt: 'Learn the exact step-by-step path from zero to a full stack dev role — tools, timeline, and expert tips.',
    date: 'May 12, 2025',
    readTime: '8 min read',
  },
  {
    img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=500&q=80',
    category: 'UI/UX Design',
    title: 'How to Build a UI/UX Portfolio That Gets You Hired in 2024',
    excerpt: 'A practical guide on what projects to include, how to present them, and what hiring managers actually look for.',
    date: 'Apr 28, 2025',
    readTime: '6 min read',
  },
  {
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=80',
    category: 'Data Analytics',
    title: 'Power BI vs Tableau: Which One Should You Learn First?',
    excerpt: 'We break down the differences, job market demand, and which tool gives you the best ROI in 2024.',
    date: 'Apr 15, 2025',
    readTime: '5 min read',
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// STYLE HELPERS
// ─────────────────────────────────────────────────────────────────────────────
const card = {
  background: 'var(--color-card)',
  border: '1px solid var(--color-border)',
  borderRadius: '1rem',
  boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
}

const Eyebrow = ({ children }) => (
  <span className="inline-block text-xs font-bold uppercase tracking-[0.15em] mb-3" style={{ color: 'var(--color-accent)' }}>
    {children}
  </span>
)

const SectionTitle = ({ children, className = '' }) => (
  <h2 className={`text-3xl sm:text-4xl font-black leading-tight mb-4 ${className}`} style={{ color: 'var(--color-text)' }}>
    {children}
  </h2>
)

const StarRow = ({ count = 5 }) => (
  <div className="flex gap-0.5 mb-3">
    {Array.from({ length: count }).map((_, i) => (
      <FaStar key={i} size={14} style={{ color: '#f59e0b' }} />
    ))}
  </div>
)


// ─────────────────────────────────────────────────────────────────────────────
// ─────────────────────────────────────────────────────────────────────────────
// ─────────────────────────────────────────────────────────────────────────────
// SECTION 1: HERO  — AppVenture exact layout with MentorHub blue theme
// ─────────────────────────────────────────────────────────────────────────────
function HeroSection() {
  const avatars = [
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=60&q=80',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=60&q=80',
  ]

  return (
    <section
      className="relative flex items-center md:items-start overflow-hidden"
      style={{ minHeight: '100vh', background: '#ffffff' }}
    >

      {/* ── Mobile only: full solid blue gradient (no wave shape) ── */}
      <div
        className="absolute inset-0 md:hidden"
        style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 55%, #2563eb 100%)', zIndex: 0 }}
      />

      {/* ── Tablet + Desktop: AppVenture S-wave SVG shape ── */}
      <svg
        className="hidden md:block"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#0f172a" />
            <stop offset="42%"  stopColor="#1e3a8a" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
        </defs>
        <path
          d="M0,0 L1440,0 L1440,290 C1300,470 1000,580 800,565 C580,548 100,858 0,900 Z"
          fill="url(#heroGrad)"
        />
        <circle cx="380" cy="130" r="85"  fill="rgba(255,255,255,0.05)" />
        <circle cx="220" cy="320" r="50"  fill="rgba(255,255,255,0.04)" />
        <circle cx="680" cy="90"  r="38"  fill="rgba(255,255,255,0.04)" />
      </svg>

      {/* ══ Content grid ══ */}
      <div
        className="relative z-[2] w-full mx-auto px-5 pt-[76px] md:pt-[86px] min-[1000px]:pt-[83px] pb-8 min-[1000px]:pl-[15px]"
        style={{ maxWidth: 1200 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-[52%_48%] items-center gap-6 md:gap-4">

          {/* ───────── LEFT: Text (on blue shape) ───────── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75 }}
            className="text-center md:text-left"
            style={{ paddingLeft: '4px' }}
          >
            {/* Brand */}
            <h1 style={{
              fontSize: 'clamp(2.3rem, 5vw, 4.6rem)',
              fontWeight: 900,
              color: '#ffffff',
              lineHeight: 1.08,
              marginBottom: '0.6rem',
              letterSpacing: '-0.02em',
            }}>
              Mentor<span style={{ color: '#93c5fd' }}>Hub</span>
            </h1>

            {/* Tagline */}
            <p style={{
              fontSize: 'clamp(0.9rem, 1.8vw, 1.25rem)',
              fontWeight: 700,
              color: 'rgba(255,255,255,0.9)',
              marginBottom: '0.75rem',
              lineHeight: 1.35,
            }}>
              Expert-Led Tech Mentorship Platform
            </p>

            {/* Description */}
            <p
              className="mx-auto md:mx-0"
              style={{
                fontSize: '0.93rem',
                color: 'rgba(255,255,255,0.68)',
                lineHeight: 1.75,
                marginBottom: '1.5rem',
                maxWidth: 420,
              }}
            >
              Embark on a new journey of innovation and possibilities with MentorHub,
              the perfect platform to launch your tech career with live 1-on-1 mentorship,
              real projects, and guaranteed placement support.
            </p>

            {/* Explore Programs button — moved up via tighter description margin */}
            <div className="flex justify-center md:justify-start">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/mentorship"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                    padding: '0.55rem 1.5rem',
                    background: 'transparent',
                    color: '#ffffff',
                    border: '2px solid #ffffff',
                    borderRadius: '3rem',
                    fontWeight: 600,
                    fontSize: '0.9375rem',
                    textDecoration: 'none',
                    transition: 'background 0.2s',
                    outline: '2px solid rgba(255,255,255,0.25)',
                    outlineOffset: '3px',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
                >
                  Explore Programs
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* ───────── RIGHT: Two overlapping phones — hidden on mobile only ───────── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block"
            style={{ position: 'relative', height: 460 }}
          >

            {/* ── Phone 1 (left / dark blue) — the dashboard phone ── */}
            <motion.div
              animate={{ y: [0, -11, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                left: '3%',
                top: 'calc(40% - 30px)',
                transform: 'translateY(-50%)',
                width: 218,
                background: 'linear-gradient(160deg, #1e3a8a 0%, #1e40af 50%, #2563eb 100%)',
                borderRadius: '2.5rem',
                boxShadow: '0 28px 65px rgba(0,0,0,0.32)',
                border: '6px solid rgba(255,255,255,0.18)',
                overflow: 'hidden',
                zIndex: 2,
              }}
            >
              {/* Notch */}
              <div style={{ height: 9, background: 'rgba(0,0,0,0.28)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: 42, height: 3, background: 'rgba(255,255,255,0.22)', borderRadius: 999 }} />
              </div>

              {/* Header area */}
              <div style={{ padding: '0.75rem 1rem 0.5rem' }}>
                {/* Mini bar chart */}
                <div style={{ display: 'flex', gap: 3, alignItems: 'flex-end', height: 22, marginBottom: '0.5rem' }}>
                  {[55, 80, 38, 92, 48, 72].map((h, i) => (
                    <div key={i} style={{ width: 5, height: `${h}%`, background: 'rgba(255,255,255,0.55)', borderRadius: 2 }} />
                  ))}
                </div>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.58rem', marginBottom: '0.1rem' }}>Welcome back 👋</p>
                <p style={{ color: '#ffffff', fontSize: '0.92rem', fontWeight: 800, lineHeight: 1.2 }}>Hi Student!</p>
                <p style={{ color: 'rgba(255,255,255,0.58)', fontSize: '0.58rem', marginTop: '0.1rem' }}>6 Tasks are pending</p>
              </div>

              {/* Task row */}
              <div style={{ padding: '0.55rem 1rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <p style={{ fontSize: '0.5rem', color: 'rgba(255,255,255,0.48)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '0.38rem' }}>
                  Mobile App Design
                </p>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  {avatars.map((img, i) => (
                    <img key={i} src={img} alt="a"
                      style={{ width: 22, height: 22, borderRadius: '50%', border: '2px solid rgba(255,255,255,0.3)', objectFit: 'cover', marginLeft: i > 0 ? -6 : 0 }} />
                  ))}
                  <span style={{ fontSize: '0.47rem', color: 'rgba(255,255,255,0.52)', marginLeft: 7 }}>Nike and Andy</span>
                </div>
              </div>

              {/* Monthly Review */}
              <div style={{ padding: '0.6rem 1rem' }}>
                <p style={{ fontSize: '0.5rem', color: 'rgba(255,255,255,0.48)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '0.45rem' }}>
                  Monthly Review
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.4rem' }}>
                  {[{ val: '22', label: 'Done' }, { val: '10', label: 'Ongoing' }].map(s => (
                    <div key={s.label} style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '0.8rem', padding: '0.55rem 0.6rem' }}>
                      <p style={{ fontSize: '1.35rem', fontWeight: 900, color: '#ffffff', lineHeight: 1 }}>{s.val}</p>
                      <p style={{ fontSize: '0.49rem', color: 'rgba(255,255,255,0.5)', marginTop: '0.15rem' }}>{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom nav */}
              <div style={{ display: 'flex', justifyContent: 'space-around', padding: '0.58rem', borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '0.25rem' }}>
                {['🏠', '📁', '👤', '🔔'].map(icon => (
                  <span key={icon} style={{ fontSize: '0.8rem', opacity: 0.62 }}>{icon}</span>
                ))}
              </div>
            </motion.div>

            {/* ── Phone 2 (right / light card with blue shapes) ── */}
            <motion.div
              animate={{ y: [0, 11, 0] }}
              transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut', delay: 0.85 }}
              style={{
                position: 'absolute',
                right: '2%',
                top: 'calc(40% - 30px)',
                transform: 'translateY(-50%)',
                width: 198,
                background: '#dbeafe',
                borderRadius: '2.5rem',
                boxShadow: '0 22px 55px rgba(0,0,0,0.18)',
                overflow: 'hidden',
                zIndex: 3,
                border: '6px solid rgba(255,255,255,0.92)',
              }}
            >
              {/* Blue geometric shapes area */}
              <div style={{
                height: 165,
                background: 'linear-gradient(140deg, #bfdbfe 0%, #dbeafe 55%, #eff6ff 100%)',
                position: 'relative',
                overflow: 'hidden',
              }}>
                {/* Large circle top-right */}
                <div style={{ position: 'absolute', top: -20, right: -14, width: 92, height: 92, borderRadius: '50%', background: '#60a5fa', opacity: 0.78 }} />
                {/* Medium dark circle */}
                <div style={{ position: 'absolute', top: 18, right: 40, width: 62, height: 62, borderRadius: '50%', background: '#1d4ed8', opacity: 0.84 }} />
                {/* Small cyan dot */}
                <div style={{ position: 'absolute', top: 60, right: 7, width: 38, height: 38, borderRadius: '50%', background: '#0ea5e9', opacity: 0.72 }} />
                {/* Bottom-left circle */}
                <div style={{ position: 'absolute', bottom: 14, left: 11, width: 48, height: 48, borderRadius: '50%', background: '#2563eb', opacity: 0.68 }} />
                {/* Tiny accent dot */}
                <div style={{ position: 'absolute', bottom: 26, left: 52, width: 20, height: 20, borderRadius: '50%', background: '#93c5fd', opacity: 0.82 }} />
                {/* Grey/neutral circle */}
                <div style={{ position: 'absolute', top: 80, left: 25, width: 30, height: 30, borderRadius: '50%', background: '#94a3b8', opacity: 0.45 }} />
                {/* Wavy decorative lines (SVG) */}
                <svg style={{ position: 'absolute', bottom: 6, left: 5, opacity: 0.32 }} width="88" height="52" viewBox="0 0 88 52">
                  <path d="M0,26 Q22,8 44,26 Q66,44 88,26" stroke="#1e40af" strokeWidth="3.5" fill="none" strokeLinecap="round" />
                  <path d="M0,38 Q22,20 44,38 Q66,56 88,38" stroke="#1e40af" strokeWidth="3.5" fill="none" strokeLinecap="round" />
                  <path d="M0,14 Q22,-4 44,14 Q66,32 88,14" stroke="#1e40af" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                </svg>
              </div>

              {/* White card text area */}
              <div style={{ padding: '1rem 1.1rem 1.25rem', background: '#ffffff' }}>
                <p style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.28, marginBottom: '0.45rem' }}>
                  Manage your<br />daily tasks
                </p>
                <p style={{ fontSize: '0.6rem', color: '#64748b', lineHeight: 1.6, marginBottom: '0.88rem' }}>
                  Team and Project management with solution providing App
                </p>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Link
                    to="/contact"
                    style={{
                      display: 'inline-flex', alignItems: 'center',
                      padding: '0.42rem 1.15rem',
                      background: '#f1f5f9',
                      color: '#0f172a',
                      borderRadius: '999px',
                      fontSize: '0.67rem',
                      fontWeight: 700,
                      border: '1px solid #e2e8f0',
                      textDecoration: 'none',
                    }}
                  >
                    Get Started
                  </Link>
                </motion.div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}

// SECTION 2: STATS BAR
// ─────────────────────────────────────────────────────────────────────────────
function StatsSection() {
  return (
    <section style={{ background: 'linear-gradient(135deg, #1e1b4b, #1e3a8a)', padding: '3.5rem 1.5rem' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <AnimatedSection key={s.label} delay={i * 0.1} variant="fadeUp" className="text-center">
              <div className="flex items-center justify-center mb-3">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.12)' }}>
                  <s.icon size={22} className="text-white" />
                </div>
              </div>
              <div className="text-4xl font-black text-white mb-1">
                <Counter target={s.value} suffix={s.suffix} />
              </div>
              <p className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.65)' }}>{s.label}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 3: WHO WE ARE
// ─────────────────────────────────────────────────────────────────────────────
function AboutSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: 'var(--color-primary)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Image side */}
          <AnimatedSection variant="fadeLeft" className="relative">
            <div className="rounded-3xl overflow-hidden" style={{ boxShadow: '0 20px 60px rgba(37,99,235,0.12)' }}>
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80"
                alt="Mentoring session"
                className="w-full h-[440px] object-cover"
              />
            </div>
            {/* Achievement card overlay */}
            <div
              className="absolute -bottom-6 -right-6 rounded-2xl p-5 flex items-center gap-4"
              style={{ background: 'white', boxShadow: '0 16px 40px rgba(0,0,0,0.12)', border: '1px solid #e2e8f0' }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: '#eff6ff' }}>
                <FaAward size={22} style={{ color: '#2563eb' }} />
              </div>
              <div>
                <p className="text-2xl font-black" style={{ color: '#0f172a' }}>Top Rated</p>
                <p className="text-sm" style={{ color: '#64748b' }}>Mentorship Platform 2024</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Content side */}
          <AnimatedSection variant="fadeRight">
            <Eyebrow>Who We Are</Eyebrow>
            <SectionTitle>Bridging the Gap Between <span className="gradient-text">Education & Employment</span></SectionTitle>
            <p className="leading-relaxed mb-5" style={{ color: 'var(--color-textMuted)', fontSize: '1.05rem' }}>
              MentorHub was founded in 2020 with one bold mission: make world-class tech mentorship accessible
              to every student and professional — regardless of their location or background.
            </p>
            <p className="leading-relaxed mb-8" style={{ color: 'var(--color-textMuted)' }}>
              We connect you with working professionals who bring real codebases, real client problems, and
              real-world interview experience to every live session. No pre-recorded videos. No generic curricula.
              Just genuine 1-on-1 guidance that moves your career forward.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                'Live 1-on-1 sessions', 'Real project portfolio',
                'ATS-ready resume help', 'Mock interview coaching',
                '200+ hiring partners', 'Alumni network access',
              ].map(item => (
                <div key={item} className="flex items-center gap-2.5 text-sm" style={{ color: 'var(--color-textMuted)' }}>
                  <FaCheckCircle size={14} className="flex-shrink-0" style={{ color: 'var(--color-accent)' }} />
                  {item}
                </div>
              ))}
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 font-bold text-sm"
              style={{ color: 'var(--color-accent)' }}
            >
              Learn More About Us <FaArrowRight size={12} />
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 4: TRUSTED BY
// ─────────────────────────────────────────────────────────────────────────────
const partnerBrands = ['Google', 'Amazon', 'Microsoft', 'Swiggy', 'Zomato', 'Flipkart', 'Infosys', 'Wipro', 'TCS', 'HCL', 'Accenture', 'Cognizant']
const tickerItems = [...partnerBrands, ...partnerBrands]

function TrustedBySection() {
  return (
    <section className="py-16" style={{ background: 'var(--color-secondary)', borderTop: '1px solid var(--color-border)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
        <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: 'var(--color-textMuted)' }}>
          Our Alumni Now Work At
        </p>
      </div>
      <div className="ticker-wrapper">
        <div className="ticker-track">
          {tickerItems.map((brand, i) => (
            <div
              key={i}
              className="mx-4 px-8 py-3 rounded-xl flex items-center justify-center font-bold text-sm whitespace-nowrap"
              style={{
                background: 'var(--color-card)',
                border: '1px solid var(--color-border)',
                color: 'var(--color-textMuted)',
                minWidth: 130,
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              }}
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 5: PROGRAMS
// ─────────────────────────────────────────────────────────────────────────────
function ProgramsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: 'var(--color-primary)' }}>
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-14">
          <Eyebrow>Our Programs</Eyebrow>
          <SectionTitle>9 Specialised Mentorship <span className="gradient-text">Programs</span></SectionTitle>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--color-textMuted)' }}>
            Each program is led by industry professionals and designed to get you hired — not just educated.
          </p>
        </AnimatedSection>

        {/* Top 3 featured cards */}
        <div className="grid md:grid-cols-3 gap-7 mb-7">
          {mentorships.slice(0, 3).map((m, i) => {
            const Icon = iconMap[m.icon] || FaCode
            return (
              <AnimatedSection key={m.id} delay={i * 0.1} variant="fadeUp">
                <motion.div
                  className="rounded-2xl overflow-hidden h-full flex flex-col"
                  style={card}
                  whileHover={{ y: -8, boxShadow: `0 24px 48px rgba(37,99,235,0.14)` }}
                  transition={{ duration: 0.25 }}
                >
                  {/* Coloured top band */}
                  <div className="h-2 w-full" style={{ background: `linear-gradient(90deg, ${m.color}, ${m.color}99)` }} />
                  <div className="p-7 flex flex-col flex-1">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ background: `${m.color}18`, border: `1px solid ${m.color}30` }}>
                      <Icon size={26} style={{ color: m.color }} />
                    </div>
                    <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--color-text)' }}>{m.title}</h3>
                    <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: 'var(--color-textMuted)' }}>{m.shortDesc}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {m.tools.slice(0, 3).map(t => (
                        <span key={t} className="px-3 py-1 rounded-lg text-xs font-medium" style={{ background: `${m.color}12`, color: m.color }}>
                          {t}
                        </span>
                      ))}
                    </div>
                    <Link
                      to={m.path}
                      className="inline-flex items-center gap-2 text-sm font-bold transition-all hover:gap-3"
                      style={{ color: m.color }}
                    >
                      View Details <FaArrowRight size={11} />
                    </Link>
                  </div>
                </motion.div>
              </AnimatedSection>
            )
          })}
        </div>

        {/* Remaining 6 smaller cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {mentorships.slice(3).map((m, i) => {
            const Icon = iconMap[m.icon] || FaCode
            return (
              <AnimatedSection key={m.id} delay={i * 0.07} variant="fadeUp">
                <motion.div
                  className="rounded-xl p-5 flex items-center gap-4 cursor-pointer"
                  style={card}
                  whileHover={{ y: -4, boxShadow: '0 16px 32px rgba(0,0,0,0.1)' }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${m.color}15` }}>
                    <Icon size={20} style={{ color: m.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-sm mb-0.5 truncate" style={{ color: 'var(--color-text)' }}>{m.title}</h4>
                    <p className="text-xs truncate" style={{ color: 'var(--color-textMuted)' }}>{m.tools.slice(0, 3).join(' · ')}</p>
                  </div>
                  <FaArrowRight size={12} style={{ color: m.color, flexShrink: 0 }} />
                </motion.div>
              </AnimatedSection>
            )
          })}
        </div>

        <div className="text-center mt-10">
          <Button to="/mentorship" variant="outline" size="md">
            View All Programs <FaArrowRight />
          </Button>
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 6: SERVICES
// ─────────────────────────────────────────────────────────────────────────────
function ServicesSection() {
  const serviceIconMap = {
    FaGlobe: FaCode, FaMobileAlt, FaPalette, FaChartBar, FaServer,
    FaRobot: FaBrain, FaCloud: FaServer, FaChartPie: FaChartBar,
  }
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: 'var(--color-secondary)' }}>
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-14">
          <Eyebrow>Development Services</Eyebrow>
          <SectionTitle>We Also <span className="gradient-text">Build Products</span> for Businesses</SectionTitle>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--color-textMuted)' }}>
            Beyond mentorship, our expert team delivers full-cycle software development services.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const DynIcons = { FaGlobe: FaCode, FaMobileAlt, FaPalette, FaChartPie: FaChartBar, FaCloud: FaServer, FaRobot: FaBrain }
            const Icon = DynIcons[s.icon] || FaCode
            return (
              <AnimatedSection key={s.id} delay={i * 0.08} variant="scaleIn">
                <motion.div
                  className="rounded-2xl p-7 h-full flex flex-col"
                  style={card}
                  whileHover={{ y: -6, boxShadow: `0 20px 40px rgba(0,0,0,0.1)` }}
                  transition={{ duration: 0.22 }}
                >
                  <div className="w-13 h-13 w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ background: `${s.color}15`, border: `1px solid ${s.color}30` }}>
                    <Icon size={24} style={{ color: s.color }} />
                  </div>
                  <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--color-text)' }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: 'var(--color-textMuted)' }}>{s.shortDesc}</p>
                  <Link to={s.path} className="inline-flex items-center gap-2 text-sm font-bold hover:gap-3 transition-all" style={{ color: s.color }}>
                    View Details <FaArrowRight size={11} />
                  </Link>
                </motion.div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 7: TECH STACK (TABBED)
// ─────────────────────────────────────────────────────────────────────────────
function TechStackSection() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: 'var(--color-primary)' }}>
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <Eyebrow>Technology Stack</Eyebrow>
          <SectionTitle>Tools & Technologies <span className="gradient-text">We Teach</span></SectionTitle>
          <p className="text-lg max-w-xl mx-auto" style={{ color: 'var(--color-textMuted)' }}>
            Every program covers the most in-demand, industry-standard tools.
          </p>
        </AnimatedSection>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {techTabs.map((tab, i) => (
            <motion.button
              key={tab.label}
              onClick={() => setActiveTab(i)}
              className="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              style={{
                background: activeTab === i
                  ? 'linear-gradient(135deg, var(--color-accent), var(--color-accentGold))'
                  : 'var(--color-card)',
                color: activeTab === i ? '#fff' : 'var(--color-textMuted)',
                border: `1px solid ${activeTab === i ? 'transparent' : 'var(--color-border)'}`,
                boxShadow: activeTab === i ? '0 4px 16px rgba(37,99,235,0.25)' : 'none',
              }}
            >
              {tab.label}
            </motion.button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22 }}
            className="flex flex-wrap gap-3 justify-center"
          >
            {techTabs[activeTab].items.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.04 }}
                className="px-5 py-3 rounded-xl text-sm font-semibold cursor-default"
                style={card}
                whileHover={{ y: -3, boxShadow: '0 8px 24px rgba(37,99,235,0.12)', color: 'var(--color-accent)', borderColor: 'var(--color-accent)' }}
              >
                <span style={{ color: 'var(--color-text)' }}>{tech}</span>
              </motion.span>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 8: OUR PROCESS
// ─────────────────────────────────────────────────────────────────────────────
function ProcessSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: 'var(--color-secondary)' }}>
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-14">
          <Eyebrow>How It Works</Eyebrow>
          <SectionTitle>Your Journey from <span className="gradient-text">Zero to Hired</span></SectionTitle>
          <p className="text-lg max-w-xl mx-auto" style={{ color: 'var(--color-textMuted)' }}>
            A structured, 6-step mentorship journey designed to get you job-ready as fast as possible.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((p, i) => (
            <AnimatedSection key={p.step} delay={i * 0.1} variant="fadeUp">
              <motion.div
                className="rounded-2xl p-7 h-full relative overflow-hidden"
                style={card}
                whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(37,99,235,0.1)' }}
                transition={{ duration: 0.22 }}
              >
                {/* Big step number as watermark */}
                <div
                  className="absolute -top-3 -right-3 text-8xl font-black select-none pointer-events-none"
                  style={{ color: 'var(--color-accent)', opacity: 0.06 }}
                >
                  {p.step}
                </div>
                <div
                  className="inline-flex items-center justify-center w-11 h-11 rounded-xl font-black text-sm mb-5 text-white"
                  style={{ background: 'linear-gradient(135deg, var(--color-accent), var(--color-accentGold))' }}
                >
                  {p.step}
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--color-text)' }}>{p.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-textMuted)' }}>{p.desc}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 9: WHY CHOOSE US
// ─────────────────────────────────────────────────────────────────────────────
function WhyUsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: 'var(--color-primary)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Image */}
          <AnimatedSection variant="fadeLeft">
            <div className="relative rounded-3xl overflow-hidden" style={{ boxShadow: '0 20px 60px rgba(37,99,235,0.12)' }}>
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
                alt="Why choose MentorHub"
                className="w-full h-[420px] object-cover"
              />
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection variant="fadeRight">
            <Eyebrow>Why MentorHub</Eyebrow>
            <SectionTitle>What Makes Us <span className="gradient-text">Different</span></SectionTitle>
            <div className="grid grid-cols-1 gap-5 mt-8">
              {whyUs.map((w, i) => (
                <AnimatedSection key={w.title} delay={i * 0.1} variant="fadeUp">
                  <motion.div
                    className="flex items-start gap-5 rounded-2xl p-5"
                    style={card}
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${w.color}18` }}>
                      <w.icon size={22} style={{ color: w.color }} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1" style={{ color: 'var(--color-text)' }}>{w.title}</h4>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--color-textMuted)' }}>{w.desc}</p>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 10: TESTIMONIALS
// ─────────────────────────────────────────────────────────────────────────────
function TestimonialsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: 'var(--color-secondary)' }}>
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-14">
          <Eyebrow>Success Stories</Eyebrow>
          <SectionTitle>What Our <span className="gradient-text">Students Say</span></SectionTitle>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-7">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.12} variant="fadeUp">
              <motion.div
                className="rounded-2xl p-7 h-full flex flex-col"
                style={card}
                whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                transition={{ duration: 0.22 }}
              >
                <FaQuoteLeft size={28} className="mb-4" style={{ color: 'var(--color-accent)', opacity: 0.4 }} />
                <StarRow />
                <p className="text-sm leading-relaxed flex-1 mb-6 italic" style={{ color: 'var(--color-textMuted)' }}>
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-4 pt-4" style={{ borderTop: '1px solid var(--color-border)' }}>
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                    style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}99)` }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-sm" style={{ color: 'var(--color-text)' }}>{t.name}</p>
                    <p className="text-xs" style={{ color: 'var(--color-textMuted)' }}>{t.role} · {t.company}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 11: BLOG
// ─────────────────────────────────────────────────────────────────────────────
function BlogSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: 'var(--color-primary)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <Eyebrow>Latest Insights</Eyebrow>
            <SectionTitle className="mb-0">From Our <span className="gradient-text">Blog</span></SectionTitle>
          </div>
          <Link to="/contact" className="text-sm font-bold flex items-center gap-1.5" style={{ color: 'var(--color-accent)' }}>
            View All Articles <FaArrowRight size={11} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-7">
          {blogPosts.map((b, i) => (
            <AnimatedSection key={b.title} delay={i * 0.1} variant="fadeUp">
              <motion.div
                className="rounded-2xl overflow-hidden flex flex-col h-full cursor-pointer"
                style={card}
                whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                transition={{ duration: 0.22 }}
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={b.img}
                    alt={b.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <span
                    className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white"
                    style={{ background: 'var(--color-accent)' }}
                  >
                    {b.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-bold text-base leading-snug mb-3" style={{ color: 'var(--color-text)' }}>
                    {b.title}
                  </h3>
                  <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: 'var(--color-textMuted)' }}>
                    {b.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs" style={{ color: 'var(--color-textMuted)', borderTop: '1px solid var(--color-border)', paddingTop: '1rem' }}>
                    <span>{b.date}</span>
                    <span>{b.readTime}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 12: CTA BAND
// ─────────────────────────────────────────────────────────────────────────────
function CTASection() {
  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #1e3a8a 100%)' }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <p className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Limited Seats Available
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-5">
            Ready to Start Your{' '}
            <span style={{
              background: 'linear-gradient(135deg, #38bdf8, #a78bfa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Tech Journey?
            </span>
          </h2>
          <p className="text-lg mb-10" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Book a free 30-minute consultation. No commitment. Just clarity on your path forward.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm bg-white"
                style={{ color: '#1e1b4b' }}
              >
                Get Expert Consultation <FaArrowRight />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/mentorship"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm text-white"
                style={{ border: '2px solid rgba(255,255,255,0.35)' }}
              >
                Explore Programs
              </Link>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// PAGE EXPORT
// ─────────────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <TrustedBySection />
      <ProgramsSection />
      <ServicesSection />
      <TechStackSection />
      <ProcessSection />
      <WhyUsSection />
      <TestimonialsSection />
      <BlogSection />
      <CTASection />
    </div>
  )
}
