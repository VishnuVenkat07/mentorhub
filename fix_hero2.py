import sys
sys.stdout.reconfigure(encoding='utf-8')

new_hero = '''\
// ─────────────────────────────────────────────────────────────────────────────
// SECTION 1: HERO  — AppVenture exact layout with MentorHub blue theme
// ─────────────────────────────────────────────────────────────────────────────
function HeroSection() {
  const avatars = [
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=60&q=80',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=60&q=80',
  ]

  return (
    <section style={{
      position: 'relative',
      height: '90vh',
      minHeight: 600,
      maxHeight: 920,
      background: '#ffffff',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
    }}>

      {/* ═══════════════════════════════════════════════════════════
          SVG BACKGROUND SHAPE
          - Full top (left→right)
          - Full left (top→bottom)
          - Right side curves INWARD
          - Bottom: big S-wave from bottom-left UP to center, back DOWN to right
          - Bottom-right corner = WHITE
          ═══════════════════════════════════════════════════════════ */}
      <svg
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}
        viewBox="0 0 1440 820"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#0f172a" />
            <stop offset="42%"  stopColor="#1e3a8a" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
        </defs>
        {/*
          Path (clockwise):
            M0,0          — top-left
            L1440,0       — full top edge → top-right
            L1440,270     — down right edge (30% of height)
            C ...         — right side curves inward + S-wave begins
            C ...         — S-wave: rises from right toward center
            (0,820)       — arrives at bottom-left  (full left coverage)
            Z             — closes back up left edge to (0,0)
        */}
        <path
          d="M0,0 L1440,0 L1440,270 C1100,410 650,500 500,430 C350,360 180,430 0,820 Z"
          fill="url(#heroGrad)"
        />

        {/* Subtle decorative circles on the blue area */}
        <circle cx="420" cy="120" r="80"  fill="rgba(255,255,255,0.05)" />
        <circle cx="280" cy="300" r="48"  fill="rgba(255,255,255,0.04)" />
        <circle cx="700" cy="80"  r="36"  fill="rgba(255,255,255,0.04)" />
      </svg>

      {/* ══ Content grid ══ */}
      <div style={{
        position: 'relative', zIndex: 2,
        width: '100%', maxWidth: 1200,
        margin: '0 auto', padding: '0 3.5rem',
        paddingTop: '5.5rem',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '52% 48%',
          alignItems: 'center',
          gap: '1.5rem',
        }}>

          {/* ───────── LEFT: Text (on blue shape) ───────── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75 }}
          >
            {/* Brand */}
            <h1 style={{
              fontSize: 'clamp(2.8rem, 4.5vw, 4.8rem)',
              fontWeight: 900,
              color: '#ffffff',
              lineHeight: 1.08,
              marginBottom: '0.85rem',
              letterSpacing: '-0.02em',
            }}>
              Mentor<span style={{ color: '#93c5fd' }}>Hub</span>
            </h1>

            {/* Tagline */}
            <p style={{
              fontSize: 'clamp(1rem, 1.8vw, 1.35rem)',
              fontWeight: 700,
              color: 'rgba(255,255,255,0.9)',
              marginBottom: '1rem',
              lineHeight: 1.35,
            }}>
              Expert-Led Tech Mentorship Platform
            </p>

            {/* Description */}
            <p style={{
              fontSize: '0.97rem',
              color: 'rgba(255,255,255,0.68)',
              lineHeight: 1.8,
              marginBottom: '2.4rem',
              maxWidth: 430,
            }}>
              Embark on a new journey of innovation and possibilities with MentorHub,
              the perfect platform to launch your tech career with live 1-on-1 mentorship,
              real projects, and guaranteed placement support.
            </p>

            {/* Buttons — AppVenture exact style */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>

              {/* Ghost outlined button */}
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
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
                >
                  Explore Programs
                </Link>
              </motion.div>

              {/* Circle play + text (no box around it) */}
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/about"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.85rem',
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
          </motion.div>

          {/* ───────── RIGHT: Two overlapping phones ───────── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ position: 'relative', height: 460 }}
          >

            {/* ── Phone 1 (left / dark blue) — the dashboard phone ── */}
            <motion.div
              animate={{ y: [0, -11, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                left: '3%',
                top: '50%',
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
                top: '50%',
                transform: 'translateY(-52%)',
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
'''

with open(r'E:\Project v1\src\pages\Home.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

s1 = content.index('// SECTION 1: HERO')
s2 = content.index('// SECTION 2: STATS BAR')

new_content = content[:s1] + new_hero + '\n' + content[s2:]

with open(r'E:\Project v1\src\pages\Home.jsx', 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f'Done. Lines: {new_content.count(chr(10))}')
