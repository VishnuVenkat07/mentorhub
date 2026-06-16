import { Link } from 'react-router-dom'
import { FaGraduationCap, FaLinkedin, FaInstagram, FaTwitter, FaYoutube,
         FaPhone, FaEnvelope, FaArrowRight, FaMapMarkerAlt } from 'react-icons/fa'
import { theme } from '../../config/theme'

// ── Data ──────────────────────────────────────────────────────────────────────
const col2 = [
  {
    heading: 'Full Stack Dev',
    links: [
      { label: 'Java Full Stack',   path: '/mentorship/java-fullstack'   },
      { label: 'Python Full Stack', path: '/mentorship/python-fullstack' },
      { label: 'MERN Stack',        path: '/mentorship/mern'             },
      { label: 'MEAN Stack',        path: '/mentorship/mean-stack'       },
      { label: 'Mobile App Dev',    path: '/mentorship/mobile-app'       },
      { label: 'UI/UX Design',      path: '/mentorship/design'           },
    ],
  },
  {
    heading: 'DevOps',
    links: [
      { label: 'AWS Cloud',           path: '/mentorship/aws-cloud'          },
      { label: 'CI/CD Pipeline',      path: '/mentorship/cicd-pipeline'      },
      { label: 'Docker & Kubernetes', path: '/mentorship/docker-kubernetes'  },
      { label: 'Linux Fundamentals',  path: '/mentorship/linux-fundamentals' },
    ],
  },
]

const col3 = [
  {
    heading: 'Data Analytics',
    links: [
      { label: 'Power BI',           path: '/mentorship/power-bi'           },
      { label: 'Excel for Analysts', path: '/mentorship/excel-analytics'    },
      { label: 'SQL & Python',       path: '/mentorship/sql-python'         },
      { label: 'Data Visualization', path: '/mentorship/data-visualization' },
    ],
  },
  {
    heading: 'Generative AI',
    links: [
      { label: 'RAG Systems',    path: '/mentorship/rag-systems' },
      { label: 'AI Tools',       path: '/mentorship/ai-tools'    },
      { label: 'AI with Java',   path: '/mentorship/ai-java'     },
      { label: 'AI with Python', path: '/mentorship/ai-python'   },
    ],
  },
]

const col4 = [
  {
    heading: 'Placement',
    links: [
      { label: 'Resume Building',    path: '/mentorship/resume-building' },
      { label: 'Portfolio Building', path: '/mentorship/portfolio'       },
      { label: 'Career Practice',    path: '/mentorship/career-practice' },
      { label: 'Mock Interviews',    path: '/mentorship/mock-interviews' },
    ],
  },
  {
    heading: 'Quick Links',
    links: [
      { label: 'Home',        path: '/'                   },
      { label: 'About Us',    path: '/about'              },
      { label: 'Job Openings',path: '/career/jobs'        },
      { label: 'Internships', path: '/career/internships' },
      { label: 'Contact',     path: '/contact'            },
    ],
  },
]

const col5 = [
  {
    heading: 'Services',
    links: [
      { label: 'Web Development',    path: '/services/web-development'    },
      { label: 'Mobile App Dev',     path: '/services/mobile-development' },
      { label: 'UI/UX Design',       path: '/services/ui-ux-design'       },
      { label: 'DevOps & Cloud',     path: '/services/devops-cloud'       },
      { label: 'AI & Automation',    path: '/services/ai-automation'      },
      { label: 'SEO Optimization',   path: '/services/seo'                },
      { label: 'Digital Marketing',  path: '/services/digital-marketing'  },
      { label: 'Content Writing',    path: '/services/content-writing'    },
      { label: 'Graphic Design',     path: '/services/graphic-design'     },
    ],
  },
]

const socials = [
  { icon: FaLinkedin,  href: theme.social.linkedin,  label: 'LinkedIn'  },
  { icon: FaInstagram, href: theme.social.instagram, label: 'Instagram' },
  { icon: FaTwitter,   href: theme.social.twitter,   label: 'Twitter'   },
  { icon: FaYoutube,   href: theme.social.youtube,   label: 'YouTube'   },
]

// ── Sub-components ────────────────────────────────────────────────────────────
function Section({ heading, links }) {
  return (
    <div style={{ marginBottom: '2rem' }}>
      <h4 style={{
        fontSize: '0.72rem',
        fontWeight: 800,
        letterSpacing: '0.13em',
        textTransform: 'uppercase',
        color: '#f1f5f9',
        marginBottom: '0.85rem',
      }}>
        {heading}
      </h4>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
        {links.map(l => (
          <li key={l.path}>
            <Link
              to={l.path}
              style={{
                fontSize: '0.85rem',
                color: '#38bdf8',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                transition: 'color 0.15s',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = '#ffffff' }}
              onMouseLeave={e => { e.currentTarget.style.color = '#38bdf8' }}
            >
              <span style={{ fontSize: '0.75rem', opacity: 0.7 }}>»</span>
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

// ── Footer ────────────────────────────────────────────────────────────────────
export default function Footer() {
  return (
    <footer style={{ background: '#0a0f1e', color: '#94a3b8' }}>

      {/* ════════════════════════════════════════════════════
          MOBILE VIEW  (hidden on lg+)
      ════════════════════════════════════════════════════ */}
      <div className="lg:hidden px-5 py-10">

        {/* Logo */}
        <Link to="/" className="inline-flex items-center gap-2.5 mb-5" style={{ textDecoration: 'none' }}>
          <div style={{
            width: 38, height: 38, borderRadius: 10, flexShrink: 0,
            background: 'linear-gradient(135deg, #2563eb, #38bdf8)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <FaGraduationCap style={{ color: '#fff', fontSize: 17 }} />
          </div>
          <span style={{ fontSize: '1.15rem', fontWeight: 800, color: '#f8fafc' }}>
            Mentor<span style={{ color: '#38bdf8' }}>Hub</span>
          </span>
        </Link>

        {/* Tagline */}
        <p style={{ fontSize: '0.88rem', lineHeight: 1.75, color: '#64748b', marginBottom: '1.5rem' }}>
          {theme.company.tagline}.
        </p>

        {/* Contact info cards */}
        <div className="flex flex-col gap-3 mb-6">
          <a href={`tel:${theme.company.phone}`}
            className="flex items-center gap-3 px-4 py-3 rounded-xl"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', textDecoration: 'none' }}
          >
            <div style={{ width: 34, height: 34, borderRadius: 8, background: 'rgba(37,99,235,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <FaPhone size={13} style={{ color: '#60a5fa' }} />
            </div>
            <div>
              <p style={{ fontSize: '0.68rem', color: '#475569', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Phone</p>
              <p style={{ fontSize: '0.9rem', color: '#e2e8f0', fontWeight: 600 }}>{theme.company.phone}</p>
            </div>
          </a>

          <a href={`mailto:${theme.company.email}`}
            className="flex items-center gap-3 px-4 py-3 rounded-xl"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', textDecoration: 'none' }}
          >
            <div style={{ width: 34, height: 34, borderRadius: 8, background: 'rgba(56,189,248,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <FaEnvelope size={13} style={{ color: '#38bdf8' }} />
            </div>
            <div>
              <p style={{ fontSize: '0.68rem', color: '#475569', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Email</p>
              <p style={{ fontSize: '0.9rem', color: '#e2e8f0', fontWeight: 600 }}>{theme.company.email}</p>
            </div>
          </a>

          <div className="flex items-center gap-3 px-4 py-3 rounded-xl"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <div style={{ width: 34, height: 34, borderRadius: 8, background: 'rgba(16,185,129,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <FaMapMarkerAlt size={13} style={{ color: '#34d399' }} />
            </div>
            <div>
              <p style={{ fontSize: '0.68rem', color: '#475569', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Address</p>
              <p style={{ fontSize: '0.88rem', color: '#e2e8f0', fontWeight: 600, lineHeight: 1.4 }}>{theme.company.address}</p>
            </div>
          </div>
        </div>

        {/* Social icons */}
        <div className="flex gap-2.5 mb-6">
          {socials.map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
              style={{ width: 38, height: 38, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)', color: '#94a3b8', textDecoration: 'none' }}
            >
              <Icon size={15} />
            </a>
          ))}
        </div>

        {/* Quick pages */}
        <div className="flex flex-col gap-2 mb-6">
          {[
            { label: 'Job Openings',   path: '/career/jobs'        },
            { label: 'Internships',    path: '/career/internships' },
            { label: 'About Us',       path: '/about'              },
            { label: 'Get in Touch',   path: '/contact'            },
          ].map(l => (
            <Link key={l.path} to={l.path}
              className="flex items-center justify-between px-4 py-3 rounded-xl"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', textDecoration: 'none' }}
            >
              <span style={{ fontSize: '0.9rem', color: '#cbd5e1', fontWeight: 500 }}>{l.label}</span>
              <FaArrowRight size={11} style={{ color: '#38bdf8' }} />
            </Link>
          ))}
        </div>

        {/* Services */}
        <p style={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.13em', textTransform: 'uppercase', color: '#f1f5f9', marginBottom: '0.65rem' }}>
          Services
        </p>
        <div className="flex flex-col gap-2 mb-8">
          {col5[0].links.map(l => (
            <Link key={l.path} to={l.path}
              className="flex items-center justify-between px-4 py-3 rounded-xl"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', textDecoration: 'none' }}
            >
              <span style={{ fontSize: '0.9rem', color: '#cbd5e1', fontWeight: 500 }}>{l.label}</span>
              <FaArrowRight size={11} style={{ color: '#38bdf8' }} />
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <p style={{ fontSize: '0.78rem', color: '#334155', textAlign: 'center' }}>
          © {new Date().getFullYear()} {theme.company.name}. All Rights Reserved.
        </p>
      </div>

      {/* ════════════════════════════════════════════════════
          DESKTOP VIEW  (hidden below lg)
      ════════════════════════════════════════════════════ */}
      <div className="hidden lg:block">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-5 gap-8">

            {/* Col 1 — Brand */}
            <div>
              <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: '1.25rem', textDecoration: 'none' }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: 'linear-gradient(135deg, #2563eb, #38bdf8)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <FaGraduationCap style={{ color: '#fff', fontSize: 18 }} />
                </div>
                <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#f8fafc' }}>
                  Mentor<span style={{ color: '#38bdf8' }}>Hub</span>
                </span>
              </Link>
              <p style={{ fontSize: '0.88rem', lineHeight: 1.8, color: '#64748b', marginBottom: '1.75rem', maxWidth: 260 }}>
                {theme.company.tagline}. Building the next generation of tech professionals.
              </p>
              <p style={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.13em', textTransform: 'uppercase', color: '#f1f5f9', marginBottom: '0.75rem' }}>
                Let's Connect
              </p>
              <div className="flex gap-2.5" style={{ marginBottom: '1.5rem' }}>
                {socials.map(({ icon: Icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                    style={{ width: 36, height: 36, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)', color: '#94a3b8', textDecoration: 'none', transition: 'color 0.15s' }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#38bdf8'; e.currentTarget.style.background = 'rgba(56,189,248,0.12)' }}
                    onMouseLeave={e => { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.background = 'rgba(255,255,255,0.07)' }}
                  >
                    <Icon size={15} />
                  </a>
                ))}
              </div>

              {/* Contact info */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: '1.5rem' }}>
                <a href={`tel:${theme.company.phone}`} style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
                  <div style={{ width: 30, height: 30, borderRadius: 7, background: 'rgba(37,99,235,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <FaPhone size={11} style={{ color: '#60a5fa' }} />
                  </div>
                  <span style={{ fontSize: '0.82rem', color: '#94a3b8', transition: 'color 0.15s' }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#e2e8f0' }}
                    onMouseLeave={e => { e.currentTarget.style.color = '#94a3b8' }}
                  >{theme.company.phone}</span>
                </a>
                <a href={`mailto:${theme.company.email}`} style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
                  <div style={{ width: 30, height: 30, borderRadius: 7, background: 'rgba(56,189,248,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <FaEnvelope size={11} style={{ color: '#38bdf8' }} />
                  </div>
                  <span style={{ fontSize: '0.82rem', color: '#94a3b8', transition: 'color 0.15s' }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#e2e8f0' }}
                    onMouseLeave={e => { e.currentTarget.style.color = '#94a3b8' }}
                  >{theme.company.email}</span>
                </a>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <div style={{ width: 30, height: 30, borderRadius: 7, background: 'rgba(16,185,129,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                    <FaMapMarkerAlt size={11} style={{ color: '#34d399' }} />
                  </div>
                  <span style={{ fontSize: '0.82rem', color: '#94a3b8', lineHeight: 1.5 }}>{theme.company.address}</span>
                </div>
              </div>

              <p style={{ fontSize: '0.8rem', color: '#334155', lineHeight: 1.6 }}>
                © {new Date().getFullYear()} {theme.company.name}<br />All Rights Reserved
              </p>
            </div>

            {/* Col 2 */}
            <div>{col2.map(s => <Section key={s.heading} {...s} />)}</div>

            {/* Col 3 */}
            <div>{col3.map(s => <Section key={s.heading} {...s} />)}</div>

            {/* Col 4 */}
            <div>{col4.map(s => <Section key={s.heading} {...s} />)}</div>

            {/* Col 5 — Services */}
            <div>{col5.map(s => <Section key={s.heading} {...s} />)}</div>

          </div>

          {/* Bottom bar */}
          <div className="mt-10 pt-5 flex flex-wrap items-center justify-between gap-3"
            style={{ borderTop: '1px solid rgba(255,255,255,0.06)', fontSize: '0.78rem', color: '#334155' }}
          >
            <span>{theme.company.email} &nbsp;·&nbsp; {theme.company.phone}</span>
            <span>Built with ❤️ for aspiring tech professionals</span>
          </div>
        </div>
      </div>

    </footer>
  )
}
