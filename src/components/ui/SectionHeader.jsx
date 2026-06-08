import AnimatedSection from './AnimatedSection'

export default function SectionHeader({ badge, title, highlight, subtitle, center = false }) {
  return (
    <AnimatedSection className={`mb-12 ${center ? 'text-center' : ''}`}>
      {badge && (
        <span
          className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
          style={{
            background: 'rgba(249,115,22,0.12)',
            color: 'var(--color-accent)',
            border: '1px solid rgba(249,115,22,0.3)',
          }}
        >
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4" style={{ color: 'var(--color-text)' }}>
        {title}{' '}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className="text-base md:text-lg max-w-2xl leading-relaxed" style={{ color: 'var(--color-textMuted)', margin: center ? '0 auto' : undefined }}>
          {subtitle}
        </p>
      )}
    </AnimatedSection>
  )
}
