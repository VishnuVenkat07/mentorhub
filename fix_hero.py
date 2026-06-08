import sys
sys.stdout.reconfigure(encoding='utf-8')

new_hero = """\
// ─────────────────────────────────────────────────────────────────────────────
// SECTION 1: HERO  — AppVenture layout, MentorHub blue theme
// ─────────────────────────────────────────────────────────────────────────────
function HeroSection() {
  const avatars = [
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=60&q=80',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=60&q=80',
  ]

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      background: 'linear-gradient(145deg, #0f172a 0%, #1e3a8a 45%, #2563eb 100%)',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
    }}>

      {/* ── Decorative background circles (like AppVenture) ── */}
      <div style={{ position: 'absolute', top: '-8%', right: '35%', width: 340, height: 340, borderRadius: '50%', background: 'rgba(255,255,255,0.04)', zIndex: 0 }} />
      <div style={{ position: 'absolute', top: '20%', right: '10%', width: 180, height: 180, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: '18%', left: '5%', width: 130, height: 130, borderRadius: '50%', background: 'rgba(255,255,255,0.04)', zIndex: 0 }} />

      {/* ── White wave at bottom (AppVenture signature shape) ── */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 1, lineHeight: 0 }}>
        <svg viewBox="0 0 1440 160" preserveAspectRatio="none" style={{ width: '100%', height: 160, display: 'block' }}>
          <path d="M0,100 C300,200 600,20 900,100 C1100,160 1300,60 1440,90 L1440,160 L0,160 Z" fill="white" />
        </svg>
      </div>

      {/* ── Main content grid ── */}
      <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: 1200, margin: '0 auto', padding: '0 3rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', gap: '3rem', paddingTop: '7rem', paddingBottom: '8rem' }}>

          {/* ─── LEFT: Text content (white on blue bg) ─── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75 }}
          >
            {/* Brand name */}
            <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: 900, color: '#ffffff', lineHeight: 1.08, marginBottom: '0.9rem', letterSpacing: '-0.02em' }}>
              Mentor<span style={{ color: '#93c5fd' }}>Hub</span>
            </h1>

            {/* Tagline */}
            <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', fontWeight: 700, color: 'rgba(255,255,255,0.92)', marginBottom: '1.1rem', lineHeight: 1.35 }}>
              Expert-Led Tech Mentorship Platform
            </p>

            {/* Description */}
            <p style={{ fontSize: '0.98rem', color: 'rgba(255,255,255,0.68)', lineHeight: 1.8, marginBottom: '2.6rem', maxWidth: 440 }}>
              Embark on a new journey of innovation and possibilities with MentorHub,
              the perfect platform to launch your tech career with live 1-on-1 mentorship,
              real projects, and guaranteed placement support.
            </p>

            {/* Buttons row — exactly like AppVenture */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.8rem', flexWrap: 'wrap', marginBottom: '3rem' }}>

              {/* Ghost outlined button ("Download App" style) */}
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/mentorship"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                    padding: '0.82rem 2.1rem',
                    background: 'transparent',
                    color: '#ffffff',
                    border: '2px solid rgba(255,255,255,0.65)',
                    borderRadius: '3rem',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; e.currentTarget.style.borderColor = '#fff' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.65)' }}
                >
                  Explore Programs
                </Link>
              </motion.div>

              {/* Circle play + text ("Watch Video" style) */}
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/about"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.8rem',
                    color: '#ffffff',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    textDecoration: 'none',
                  }}
                >
                  <span style={{
                    width: 44, height: 44, borderRadius: '50%',
                    border: '2px solid rgba(255,255,255,0.65)',
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                    background: 'rgba(255,255,255,0.1)',
                  }}>
                    <FaPlay size={12} style={{ color: '#fff', marginLeft: 3 }} />
                  </span>
                  Watch Demo
                </Link>
              </motion.div>
            </div>

            {/* Stats */}
            <div style={{ display: 'flex', gap: '2.8rem', flexWrap: 'wrap' }}>
              {[
                { value: '2,400+', label: 'Students Mentored' },
                { value: '85+',    label: 'Expert Mentors' },
                { value: '94%',    label: 'Placement Rate' },
              ].map((s, i) => (
                <motion.div key={s.label} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 + i * 0.1 }}>
                  <p style={{ fontSize: '1.7rem', fontWeight: 900, color: '#ffffff', lineHeight: 1 }}>{s.value}</p>
                  <p style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.55)', marginTop: '0.25rem', fontWeight: 500 }}>{s.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ─── RIGHT: Two overlapping phone mockups (AppVenture exact) ─── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ position: 'relative', height: 520 }}
          >

            {/* ── Phone 1 — LEFT (dark blue app UI, slightly behind) ── */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                left: '2%',
                top: '50%',
                transform: 'translateY(-50%)',
                width: 235,
                background: 'linear-gradient(160deg, #1e3a8a, #1e40af, #2563eb)',
                borderRadius: '2.8rem',
                boxShadow: '0 30px 70px rgba(0,0,0,0.35)',
                border: '6px solid rgba(255,255,255,0.15)',
                overflow: 'hidden',
                zIndex: 2,
              }}
            >
              {/* Notch */}
              <div style={{ height: 9, background: 'rgba(0,0,0,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: 44, height: 3, background: 'rgba(255,255,255,0.25)', borderRadius: 999 }} />
              </div>

              {/* Mini bar chart */}
              <div style={{ padding: '0.8rem 1rem 0.5rem' }}>
                <div style={{ display: 'flex', gap: 3, alignItems: 'flex-end', height: 22, marginBottom: '0.55rem' }}>
                  {[55, 75, 38, 88, 50, 70].map((h, i) => (
                    <div key={i} style={{ width: 5, height: `${h}%`, background: 'rgba(255,255,255,0.55)', borderRadius: 2 }} />
                  ))}
                </div>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.58rem', marginBottom: '0.1rem' }}>Welcome back 👋</p>
                <p style={{ color: '#ffffff', fontSize: '0.95rem', fontWeight: 800, lineHeight: 1.2 }}>Hi Student!</p>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.58rem', marginTop: '0.15rem' }}>6 Tasks are pending</p>
              </div>

              {/* Task row */}
              <div style={{ padding: '0.55rem 1rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <p style={{ fontSize: '0.5rem', color: 'rgba(255,255,255,0.5)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '0.38rem' }}>Mobile App Design</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                  {avatars.map((img, i) => (
                    <img key={i} src={img} alt="avatar" style={{ width: 24, height: 24, borderRadius: '50%', border: '2px solid rgba(255,255,255,0.3)', objectFit: 'cover', marginLeft: i > 0 ? -6 : 0 }} />
                  ))}
                  <span style={{ fontSize: '0.48rem', color: 'rgba(255,255,255,0.55)', marginLeft: 6 }}>You and Andy</span>
                </div>
              </div>

              {/* Monthly Review */}
              <div style={{ padding: '0.6rem 1rem' }}>
                <p style={{ fontSize: '0.5rem', color: 'rgba(255,255,255,0.5)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '0.45rem' }}>Monthly Review</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.4rem' }}>
                  {[
                    { val: '22', label: 'Done' },
                    { val: '10', label: 'Ongoing' },
                  ].map(s => (
                    <div key={s.label} style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '0.8rem', padding: '0.55rem 0.6rem' }}>
                      <p style={{ fontSize: '1.4rem', fontWeight: 900, color: '#ffffff', lineHeight: 1 }}>{s.val}</p>
                      <p style={{ fontSize: '0.5rem', color: 'rgba(255,255,255,0.52)', marginTop: '0.15rem' }}>{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom nav */}
              <div style={{ display: 'flex', justifyContent: 'space-around', padding: '0.6rem 0.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '0.3rem' }}>
                {['🏠','📁','👤','🔔'].map(icon => (
                  <span key={icon} style={{ fontSize: '0.82rem', opacity: 0.65 }}>{icon}</span>
                ))}
              </div>
            </motion.div>

            {/* ── Phone 2 — RIGHT (light card with blue geometric shapes, overlapping) ── */}
            <motion.div
              animate={{ y: [0, 11, 0] }}
              transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut', delay: 0.9 }}
              style={{
                position: 'absolute',
                right: '0%',
                top: '50%',
                transform: 'translateY(-52%)',
                width: 215,
                background: '#dbeafe',
                borderRadius: '2.5rem',
                boxShadow: '0 24px 60px rgba(0,0,0,0.22)',
                overflow: 'hidden',
                zIndex: 3,
                border: '6px solid rgba(255,255,255,0.9)',
              }}
            >
              {/* Geometric shapes area (blue theme) */}
              <div style={{ height: 175, background: 'linear-gradient(135deg, #bfdbfe 0%, #dbeafe 60%, #eff6ff 100%)', position: 'relative', overflow: 'hidden' }}>
                {/* Large circle top-right */}
                <div style={{ position: 'absolute', top: -20, right: -15, width: 95, height: 95, borderRadius: '50%', background: '#60a5fa', opacity: 0.75 }} />
                {/* Medium circle mid */}
                <div style={{ position: 'absolute', top: 18, right: 42, width: 65, height: 65, borderRadius: '50%', background: '#1d4ed8', opacity: 0.82 }} />
                {/* Small accent circle */}
                <div style={{ position: 'absolute', top: 60, right: 8, width: 40, height: 40, borderRadius: '50%', background: '#0ea5e9', opacity: 0.7 }} />
                {/* Bottom-left circle */}
                <div style={{ position: 'absolute', bottom: 15, left: 12, width: 50, height: 50, borderRadius: '50%', background: '#2563eb', opacity: 0.65 }} />
                {/* Tiny dot */}
                <div style={{ position: 'absolute', bottom: 28, left: 55, width: 22, height: 22, borderRadius: '50%', background: '#93c5fd', opacity: 0.8 }} />
                {/* Wavy lines (SVG) */}
                <svg style={{ position: 'absolute', bottom: 10, left: 8, opacity: 0.35 }} width="90" height="55" viewBox="0 0 90 55">
                  <path d="M0,28 Q22,8 45,28 Q68,48 90,28" stroke="#1e40af" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
                  <path d="M0,40 Q22,20 45,40 Q68,60 90,40" stroke="#1e40af" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
                  <path d="M0,16 Q22,-4 45,16 Q68,36 90,16" stroke="#1e40af" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                </svg>
              </div>

              {/* Card text area */}
              <div style={{ padding: '1rem 1.1rem 1.2rem', background: '#ffffff' }}>
                <p style={{ fontSize: '1.02rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.3, marginBottom: '0.45rem' }}>
                  Manage your<br />daily tasks
                </p>
                <p style={{ fontSize: '0.6rem', color: '#64748b', lineHeight: 1.6, marginBottom: '0.9rem' }}>
                  Team and Project management with solution providing App
                </p>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Link
                    to="/contact"
                    style={{
                      display: 'inline-flex', alignItems: 'center',
                      padding: '0.42rem 1.2rem',
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
"""

with open(r'E:\Project v1\src\pages\Home.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

s1 = content.index('// SECTION 1: HERO')
s2 = content.index('// SECTION 2: STATS BAR')

new_content = content[:s1] + new_hero + '\n' + content[s2:]

with open(r'E:\Project v1\src\pages\Home.jsx', 'w', encoding='utf-8') as f:
    f.write(new_content)

lines = new_content.count('\n')
print(f'Done. Total lines: {lines}')
