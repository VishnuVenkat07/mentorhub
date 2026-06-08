/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║              GLOBAL THEME CONFIGURATION                      ║
 * ║                                                              ║
 * ║  Edit this file to change colors across the ENTIRE site.     ║
 * ║  All CSS variables are injected from here via main.jsx.      ║
 * ║  Tailwind classes (th-accent, th-card, etc.) read these.     ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

export const theme = {
  colors: {
    // ── Backgrounds ──────────────────────────────────────────────
    primary:      '#ffffff',   // Main page bg  (white)
    secondary:    '#f1f5f9',   // Alt section bg (light gray)
    card:         '#ffffff',   // Card surfaces  (white)
    gradientFrom: '#eff6ff',   // Hero gradient start (soft blue-white)
    gradientTo:   '#dbeafe',   // Hero gradient end   (light blue)

    // ── Accent / Brand ───────────────────────────────────────────
    accent:       '#2563eb',   // Primary accent  — buttons, badges, highlights  (blue-600)
    accentGold:   '#38bdf8',   // Secondary accent — gradient tail, hover glow   (sky-400)

    // ── Typography ───────────────────────────────────────────────
    text:         '#0f172a',   // Primary text   (near black)
    textMuted:    '#64748b',   // Muted / secondary text (slate-500)

    // ── Borders ──────────────────────────────────────────────────
    border:       '#e2e8f0',   // Card borders, dividers (light)
  },

  // ── Company Info ─────────────────────────────────────────────
  company: {
    name:    'MentorHub',
    tagline: 'Empowering Careers Through Expert Mentorship',
    email:   'hello@mentorhub.com',
    phone:   '+1 (555) 123-4567',
    address: '123 Innovation Drive, Tech City, TC 10001',
    hours:   'Mon–Fri: 9:00 AM – 6:00 PM',
  },

  // ── Social Links ─────────────────────────────────────────────
  social: {
    linkedin:  'https://linkedin.com',
    instagram: 'https://instagram.com',
    twitter:   'https://twitter.com',
    youtube:   'https://youtube.com',
  },
}
