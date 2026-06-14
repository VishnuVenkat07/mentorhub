import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  FaCheckCircle, FaArrowRight,
  FaGlobe, FaMobileAlt, FaPalette, FaChartPie, FaCloud, FaRobot, FaStar,
  FaChevronDown, FaSearch, FaBullhorn, FaPen, FaPaintBrush,
} from 'react-icons/fa'
import AnimatedSection from '../../components/ui/AnimatedSection'
import { services } from '../../data/services'

const iconMap = { FaGlobe, FaMobileAlt, FaPalette, FaChartPie, FaCloud, FaRobot, FaSearch, FaBullhorn, FaPen, FaPaintBrush }

const serviceConfig = {
  'web-development': {
    g1: '#0a0f2e', g2: '#1e3a8a',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&q=80&auto=format&fit=crop',
    sideImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80&auto=format&fit=crop',
    overview: 'We build fast, scalable, and beautiful web applications tailored to your business. Whether you need a landing page, a corporate website, or a full enterprise portal — our team follows the latest coding standards to deliver pixel-perfect, SEO-optimized results that drive real business growth.',
    faqs: [
      { q: '01. How do you ensure my website ranks on Google?', a: 'We follow SEO best practices from the ground up — semantic HTML, optimized meta tags, fast load times, Core Web Vitals compliance, and schema markup — so your site is search-engine friendly from day one.' },
      { q: '02. What technologies do you use for web development?', a: 'We primarily use React, Next.js, Node.js, and modern CSS frameworks. For CMS-based projects we use WordPress or Strapi. The stack is always chosen based on your specific requirements.' },
      { q: '03. Why choose MentorHub for web development?', a: 'Our team combines mentorship experience with real-world delivery. We have built 50+ websites across industries. We are transparent, deadline-driven, and offer 30-day post-launch support on every project.' },
    ],
  },
  'mobile-development': {
    g1: '#0a0f2e', g2: '#1e3a8a',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80&auto=format&fit=crop',
    sideImage: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80&auto=format&fit=crop',
    overview: 'We create high-performance cross-platform mobile apps for iOS and Android using React Native and Flutter. From concept to App Store launch, our mobile team delivers smooth, feature-rich applications with beautiful native UI that your users will love.',
    faqs: [
      { q: '01. Do you build for both iOS and Android?', a: 'Yes. We use React Native and Flutter to build cross-platform apps that work seamlessly on both iOS and Android from a single codebase — saving time and cost without compromising quality.' },
      { q: '02. How long does it take to build a mobile app?', a: 'A typical MVP takes 6–10 weeks depending on complexity. We work in agile sprints with regular demos so you always know the progress. A full-featured app may take 3–5 months.' },
      { q: '03. Do you handle App Store & Google Play submission?', a: 'Absolutely. We manage the full submission process including screenshots, descriptions, compliance checks, and review responses. We have a 100% app approval track record.' },
    ],
  },
  'ui-ux-design': {
    g1: '#0a0f2e', g2: '#1e3a8a',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80&auto=format&fit=crop',
    sideImage: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80&auto=format&fit=crop',
    overview: 'Great products start with great design. Our UI/UX team applies research-driven methodologies to craft interfaces that are visually stunning, deeply intuitive, and built to convert. We go beyond aesthetics — every design decision is grounded in user psychology, behavior data, and business goals to deliver experiences your users will love and return to.',
    faqs: [
      { q: '01. What is your UI/UX design process?', a: 'We follow a 5-stage process: Discovery → User Research → Wireframing → Visual Design → Prototyping & Testing. Every decision is data-backed and user-validated before handoff to developers. We involve you at every stage so there are no surprises.' },
      { q: '02. What tools do you use for design?', a: 'Our primary tool is Figma for wireframing, prototyping, and design systems. We also use FigJam for collaborative workshops, Maze for usability testing, Hotjar for behavior analytics, and Zeplin for pixel-perfect developer handoff.' },
      { q: '03. Can you redesign an existing product?', a: 'Absolutely. We audit existing interfaces through heuristic evaluation, user interviews, and analytics. We then propose a prioritized redesign roadmap that improves usability and conversion rates without disrupting your existing user base.' },
      { q: '04. Do you create design systems?', a: 'Yes. We build scalable design systems with reusable components, typography scales, color tokens, spacing rules, and interaction patterns — documented in Figma so your product team can build consistently at speed.' },
    ],
  },
  'data-analytics': {
    g1: '#0a0f2e', g2: '#1e3a8a',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80&auto=format&fit=crop',
    sideImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop',
    overview: 'Stop guessing — start knowing. We transform your raw data into clear, actionable business intelligence using Power BI, Python, and SQL. Our dashboards give your leadership team real-time visibility into KPIs, trends, and opportunities hidden inside your data.',
    faqs: [
      { q: '01. What data sources can you connect to?', a: 'We connect to virtually any source — SQL/NoSQL databases, Excel/CSV files, Google Analytics, CRM systems, cloud storage, and REST APIs. We build automated pipelines to keep data fresh.' },
      { q: '02. How long does a dashboard project take?', a: 'A standard Power BI or Tableau dashboard typically takes 2–4 weeks. Complex multi-source pipelines with predictive models may take 6–8 weeks.' },
      { q: '03. Do you provide training on the dashboards?', a: 'Yes. Every dashboard delivery includes a training session for your team, documentation, and a 2-week support period so your team can use them confidently.' },
    ],
  },
  'devops-cloud': {
    g1: '#0a0f2e', g2: '#1e3a8a',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80&auto=format&fit=crop',
    sideImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80&auto=format&fit=crop',
    overview: 'We implement DevOps practices and cloud infrastructure that make your software delivery faster, more reliable, and secure. From CI/CD pipeline setup to full cloud migrations on AWS, GCP, or Azure — we handle infrastructure so your dev team can focus on building features.',
    faqs: [
      { q: '01. Which cloud providers do you work with?', a: 'We work with AWS, Google Cloud Platform, and Microsoft Azure. We are cloud-agnostic and recommend the best provider based on your workload, budget, and existing stack.' },
      { q: '02. What does a CI/CD setup typically include?', a: 'A standard setup includes automated build triggers, test runners, staging deployment, smoke tests, and production deployment with rollback capability wired into your GitHub workflow.' },
      { q: '03. How do you ensure security in cloud infrastructure?', a: 'We follow the principle of least privilege for IAM roles, enable encryption at rest and in transit, set up firewall rules, and configure monitoring alerts for anomalous activity.' },
    ],
  },
  'ai-automation': {
    g1: '#0a0f2e', g2: '#1e3a8a',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80&auto=format&fit=crop',
    sideImage: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80&auto=format&fit=crop',
    overview: 'We help businesses integrate cutting-edge AI capabilities — from intelligent chatbots to full business process automation. Using GPT, Claude, and open-source LLMs, we build custom AI solutions that reduce manual work, improve accuracy, and create real competitive advantages.',
    faqs: [
      { q: '01. What kind of AI solutions do you build?', a: 'We build custom chatbots, document processing pipelines, recommendation engines, RPA bots, LLM-powered internal tools, and AI-assisted workflows integrated with your existing business software.' },
      { q: '02. How do you choose the right AI model?', a: 'We evaluate your use case, latency requirements, cost constraints, and data privacy needs to recommend the right model — GPT-4, Claude, Gemini, or an open-source model running on-premise.' },
      { q: '03. Is our data safe when using AI services?', a: 'Yes. We implement strict data handling policies, use API calls without training on your data, offer on-premise deployment for sensitive workloads, and sign NDAs covering all shared data.' },
    ],
  },
  'seo': {
    g1: '#0a0f2e', g2: '#1e3a8a',
    image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=1200&q=80&auto=format&fit=crop',
    sideImage: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80&auto=format&fit=crop',
    overview: 'We help your business get found on Google with data-driven SEO strategies. From on-page optimization to link building and technical audits, we improve your rankings and drive sustainable organic traffic that converts visitors into customers.',
    faqs: [
      { q: '01. How long does it take to see SEO results?', a: 'SEO is a long-term investment. Most clients begin to see measurable improvements in rankings and traffic within 3–6 months. Competitive niches may take longer, but results are sustainable unlike paid ads.' },
      { q: '02. Do you work on local SEO?', a: 'Yes. We specialize in local SEO including Google My Business optimization, local citations, review management, and geo-targeted keyword strategies to help you dominate your local market.' },
      { q: '03. How do you measure SEO success?', a: 'We track keyword rankings, organic traffic, click-through rates, bounce rates, and conversion metrics. You receive a detailed monthly report showing progress across all key SEO KPIs.' },
    ],
  },
  'digital-marketing': {
    g1: '#0a0f2e', g2: '#1e3a8a',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&q=80&auto=format&fit=crop',
    sideImage: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=800&q=80&auto=format&fit=crop',
    overview: 'We plan and execute digital marketing campaigns that reach the right audience at the right time. From Google Ads to social media marketing, our strategies are built on data, creativity, and a deep understanding of your target customers to maximize ROI.',
    faqs: [
      { q: '01. Which platforms do you run ads on?', a: 'We manage campaigns on Google Ads, Meta (Facebook & Instagram), LinkedIn, YouTube, and Twitter/X. We recommend platforms based on where your target audience is most active and where your budget will go furthest.' },
      { q: '02. What is a typical ad campaign budget?', a: 'We work with budgets from ₹15,000/month upwards. We are transparent about what is achievable at each spend level and help you scale campaigns as you see returns.' },
      { q: '03. How do you measure campaign performance?', a: 'We track impressions, clicks, CTR, conversions, cost-per-acquisition (CPA), and ROAS (return on ad spend). You get a live dashboard and weekly performance summaries.' },
    ],
  },
  'content-writing': {
    g1: '#0a0f2e', g2: '#1e3a8a',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&q=80&auto=format&fit=crop',
    sideImage: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80&auto=format&fit=crop',
    overview: 'We craft compelling, SEO-optimized content that tells your brand story, educates your audience, and converts readers into customers. From blogs to website copy, our writers deliver quality content that ranks on Google and resonates with your audience.',
    faqs: [
      { q: '01. Do you write SEO-optimized content?', a: 'Yes. Every piece of content we write is optimized for target keywords, structured for readability, and follows on-page SEO best practices — headings, meta descriptions, internal linking, and proper keyword density.' },
      { q: '02. What industries do you write for?', a: 'We have writers with expertise across tech, education, healthcare, finance, e-commerce, real estate, and more. We research each topic deeply to ensure accuracy and authority in every article.' },
      { q: '03. What is the typical turnaround time?', a: 'A standard 1000-word blog post takes 2–3 business days. Website copy and longer-form content may take 5–7 days. We always deliver on time and include one round of free revisions.' },
    ],
  },
  'graphic-design': {
    g1: '#0a0f2e', g2: '#1e3a8a',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80&auto=format&fit=crop',
    sideImage: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80&auto=format&fit=crop',
    overview: 'We create stunning visual designs that communicate your brand message clearly and professionally. From logos to marketing materials, our designers blend creativity with strategy to make your brand stand out and leave a lasting impression on your audience.',
    faqs: [
      { q: '01. What design tools do you use?', a: 'We work in Adobe Illustrator, Photoshop, InDesign, and Figma. All files are delivered in print-ready and web-ready formats including AI, PSD, PNG, SVG, and PDF.' },
      { q: '02. How many revisions are included?', a: 'All projects include 2 rounds of free revisions. We work closely with you from the briefing stage so revisions are usually minimal. Additional revisions are available at a nominal cost.' },
      { q: '03. Can you match our existing brand guidelines?', a: 'Absolutely. We review your brand style guide, color palette, typography, and existing materials before starting. Consistency with your existing identity is our top priority.' },
    ],
  },
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      className="rounded-2xl overflow-hidden cursor-pointer"
      style={{ background: '#f8fafc', border: `1px solid ${open ? '#2563eb44' : '#e2e8f0'}`, transition: 'border-color 0.2s' }}
      onClick={() => setOpen(o => !o)}
    >
      <div className="flex items-center justify-between gap-4 px-5 py-4">
        <p className="font-bold" style={{ fontSize: '0.95rem', color: '#0f172a' }}>{q}</p>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }} className="flex-shrink-0">
          <FaChevronDown size={12} style={{ color: '#2563eb' }} />
        </motion.span>
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} style={{ overflow: 'hidden' }}>
            <div className="px-5 pb-4">
              <div className="h-px mb-3" style={{ background: '#e2e8f0' }} />
              <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#64748b' }}>{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function ServiceDetail({ service }) {
  const { title, description, features, icon, id } = service
  const Icon = iconMap[icon] || FaGlobe
  const cfg  = serviceConfig[id] || serviceConfig['web-development']

  // Sidebar sticks when its bottom reaches the viewport bottom
  const sidebarRef = useRef(null)
  const [stickyTop, setStickyTop] = useState(80)
  useEffect(() => {
    const calc = () => {
      if (sidebarRef.current) {
        const cardH = sidebarRef.current.offsetHeight
        const viewH = window.innerHeight
        const top = Math.max(80, viewH - cardH - 24)
        setStickyTop(top)
      }
    }
    calc()
    window.addEventListener('resize', calc)
    return () => window.removeEventListener('resize', calc)
  }, [])

  return (
    <div style={{ background: '#f8fafc' }}>

      {/* ── HERO ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden"
        style={{ background: cfg.g1, minHeight: 420, paddingTop: 130, paddingBottom: 60 }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, backgroundImage: `url(${cfg.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(160deg,rgba(10,15,46,0.82) 0%,rgba(15,23,42,0.78) 50%,rgba(30,58,138,0.80) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, zIndex: 2, backgroundImage: 'radial-gradient(circle,rgba(255,255,255,0.06) 1px,transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="relative mx-auto px-6 sm:px-12 lg:px-20 text-center" style={{ maxWidth: 780, zIndex: 10 }}>
          <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="font-black text-white mb-5 whitespace-nowrap"
              style={{ fontSize: 'clamp(1.6rem, 4vw, 3.2rem)', lineHeight: 1.08 }}>{title}</h1>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, maxWidth: 580, margin: '0 auto 1.8rem' }}>
              {description}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold"
                  style={{ background: '#fff', color: '#1e3a8a', boxShadow: '0 6px 20px rgba(0,0,0,0.2)' }}>
                  Get Started <FaArrowRight size={12} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold"
                  style={{ background: 'transparent', color: '#fff', border: '2px solid rgba(255,255,255,0.5)' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}>
                  Learn More
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── STATS ROW ──────────────────────────────────────── */}
      <section style={{ background: '#fff', borderBottom: '1px solid #e2e8f0' }}>
        <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
            {[{ n: '50+', l: 'Projects Delivered' }, { n: '98%', l: 'Client Satisfaction' }, { n: '24/7', l: 'Support Available' }, { n: '5★', l: 'Average Rating' }].map((s, i) => (
              <motion.div key={s.l} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="text-center py-6 px-4">
                <p className="text-2xl font-black" style={{ color: '#1e3a8a' }}>{s.n}</p>
                <p style={{ fontSize: '0.85rem', marginTop: 2, color: '#64748b' }}>{s.l}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT — sidebar left + content right ────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-10" style={{ background: '#f8fafc' }}>
        <div style={{ maxWidth: '100%', margin: '0 auto' }}>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 items-start">

            {/* ── LEFT SIDEBAR — All Services ── */}
            <div className="lg:col-span-1" style={{ alignSelf: 'flex-start', position: 'sticky', top: stickyTop }}>
              <AnimatedSection variant="fadeLeft">
                <div ref={sidebarRef} className="rounded-2xl overflow-hidden"
                  style={{ background: '#fff', border: '1px solid #e2e8f0', boxShadow: '0 8px 32px rgba(30,58,138,0.10)' }}>

                  {/* Header */}
                  <div className="px-5 py-3 relative overflow-hidden"
                    style={{ background: 'linear-gradient(135deg,#0a0f2e 0%,#1e3a8a 100%)' }}>
                    <div style={{ position:'absolute', inset:0, backgroundImage:'radial-gradient(circle,rgba(255,255,255,0.07) 1px,transparent 1px)', backgroundSize:'18px 18px' }} />
                    <div className="relative">
                      <h3 className="font-bold text-white" style={{ fontSize:'1.1rem', letterSpacing:'0.01em' }}>Our Services</h3>
                    </div>
                  </div>

                  {/* Services list */}
                  <ul>
                    {services.map((s, i) => {
                      const isActive = s.id === id
                      return (
                        <li key={s.id} style={{ borderBottom: i < services.length - 1 ? '1px solid #f1f5f9' : 'none' }}>
                          <Link to={s.path}
                            className="flex items-center justify-between transition-all duration-200"
                            style={{
                              padding: '13px 20px',
                              background: isActive ? '#2563eb' : 'transparent',
                              borderLeft: isActive ? '4px solid #93c5fd' : '4px solid transparent',
                            }}
                            onMouseEnter={e => { if (!isActive) { e.currentTarget.style.background = '#eff6ff'; e.currentTarget.style.borderLeft = '4px solid #2563eb' } }}
                            onMouseLeave={e => { if (!isActive) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderLeft = '4px solid transparent' } }}>
                            <span style={{ fontSize: '0.9rem', fontWeight: isActive ? 700 : 500, color: isActive ? '#fff' : '#334155', letterSpacing: '-0.01em' }}>
                              {s.title}
                            </span>
                            <FaArrowRight size={10} style={{ color: isActive ? '#bfdbfe' : '#cbd5e1', flexShrink: 0 }} />
                          </Link>
                        </li>
                      )
                    })}
                  </ul>

                  {/* Bottom CTA */}
                  <div className="mx-4 mb-4 mt-2 rounded-xl p-4 text-center"
                    style={{ background:'linear-gradient(135deg,#eff6ff,#dbeafe)', border:'1px solid #bfdbfe' }}>
                    <p style={{ fontSize:'0.78rem', fontWeight:600, color:'#1e3a8a', marginBottom:8 }}>Need help choosing?</p>
                    <Link to="/contact"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-white font-bold transition-all"
                      style={{ background:'linear-gradient(135deg,#1e3a8a,#2563eb)', fontSize:'0.78rem', boxShadow:'0 2px 8px rgba(37,99,235,0.3)' }}>
                      Free Consultation <FaArrowRight size={9} />
                    </Link>
                  </div>

                </div>
              </AnimatedSection>
            </div>

            {/* ── RIGHT MAIN CONTENT ── */}
            <div className="lg:col-span-3 space-y-12">

              {/* Overview + Image */}
              <AnimatedSection variant="fadeRight">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Text */}
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
                      style={{ background: 'rgba(37,99,235,0.1)', color: '#2563eb', border: '1px solid rgba(37,99,235,0.2)' }}>
                      Service Overview
                    </span>
                    <h2 className="font-black mb-4" style={{ fontSize: '1.6rem', color: '#0f172a', lineHeight: 1.25 }}>
                      What We Offer in <span style={{ color: '#2563eb' }}>{title}</span>
                    </h2>
                    <p className="leading-relaxed mb-6" style={{ fontSize: '1rem', color: '#64748b', lineHeight: 1.8 }}>{cfg.overview}</p>
                    <ul className="space-y-3">
                      {features.map((f, i) => (
                        <motion.li key={f} initial={{ opacity: 0, x: -14 }} whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                            style={{ background: '#eff6ff', border: '1px solid #bfdbfe' }}>
                            <FaCheckCircle size={10} style={{ color: '#2563eb' }} />
                          </div>
                          <span style={{ fontSize: '0.95rem', color: '#334155' }}>{f}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  {/* Image */}
                  <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}
                    className="rounded-2xl overflow-hidden"
                    style={{ boxShadow: '0 16px 40px rgba(37,99,235,0.12)', border: '1px solid #e2e8f0' }}>
                    <img src={cfg.sideImage} alt={title}
                      style={{ width: '100%', height: 320, objectFit: 'cover', display: 'block' }} />
                  </motion.div>
                </div>
              </AnimatedSection>

              {/* FAQ */}
              <AnimatedSection variant="fadeUp">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
                  style={{ background: 'rgba(37,99,235,0.1)', color: '#2563eb', border: '1px solid rgba(37,99,235,0.2)' }}>
                  FAQ
                </span>
                <h2 className="font-black mb-6" style={{ fontSize: '1.6rem', color: '#0f172a', lineHeight: 1.25 }}>
                  Frequently Asked <span style={{ color: '#2563eb' }}>Questions</span>
                </h2>
                <div className="space-y-3">
                  {cfg.faqs.map((faq, i) => <FaqItem key={i} q={faq.q} a={faq.a} />)}
                </div>
              </AnimatedSection>

              {/* CTA */}
              <AnimatedSection variant="fadeUp">
                <div className="rounded-2xl px-8 py-10 relative overflow-hidden text-center"
                  style={{ background: 'linear-gradient(135deg,#0a0f2e 0%,#1e3a8a 100%)' }}>
                  <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle,rgba(255,255,255,0.06) 1px,transparent 1px)', backgroundSize: '24px 24px' }} />
                  <div className="relative z-10">
                    <div className="flex justify-center mb-3">
                      {[...Array(5)].map((_, i) => <FaStar key={i} size={13} style={{ color: '#fbbf24', marginRight: 2 }} />)}
                    </div>
                    <h3 className="font-black text-white mb-2" style={{ fontSize: '1.5rem' }}>Ready to Get Started?</h3>
                    <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.7)', maxWidth: 400, margin: '0 auto 1.5rem' }}>
                      Get a free consultation with our {title} experts today.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                      <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                        <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold"
                          style={{ background: '#fff', color: '#1e3a8a' }}>
                          Free Consultation <FaArrowRight size={11} />
                        </Link>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                        <Link to="/services" className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold"
                          style={{ background: 'transparent', color: '#fff', border: '2px solid rgba(255,255,255,0.4)' }}
                          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)' }}
                          onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}>
                          All Services
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

            </div>{/* end right */}
          </div>
        </div>
      </section>

    </div>
  )
}
