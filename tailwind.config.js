/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // These map to CSS variables set from theme.js
        // Change theme.js → changes everything automatically
        'th-primary':   'var(--color-primary)',
        'th-secondary': 'var(--color-secondary)',
        'th-card':      'var(--color-card)',
        'th-accent':    'var(--color-accent)',
        'th-gold':      'var(--color-accentGold)',
        'th-text':      'var(--color-text)',
        'th-muted':     'var(--color-textMuted)',
        'th-border':    'var(--color-border)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        ticker: 'ticker 30s linear infinite',
      },
      keyframes: {
        ticker: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
