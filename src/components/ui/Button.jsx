import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',   // 'primary' | 'outline' | 'ghost'
  size = 'md',           // 'sm' | 'md' | 'lg'
  className = '',
  ...props
}) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  }

  const baseStyle = {
    primary: {
      background: 'linear-gradient(135deg, var(--color-accent), var(--color-accentGold))',
      color: '#fff',
      border: 'none',
    },
    outline: {
      background: 'transparent',
      color: 'var(--color-accent)',
      border: '2px solid var(--color-accent)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--color-textMuted)',
      border: 'none',
    },
  }

  const cls = `inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 cursor-pointer ${sizeClasses[size]} ${className}`

  const motionProps = {
    whileHover: { scale: 1.04 },
    whileTap:   { scale: 0.97 },
  }

  if (to) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link to={to} className={cls} style={baseStyle[variant]} {...props}>
          {children}
        </Link>
      </motion.div>
    )
  }

  if (href) {
    return (
      <motion.a href={href} {...motionProps} className={cls} style={baseStyle[variant]} {...props}>
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button onClick={onClick} {...motionProps} className={cls} style={baseStyle[variant]} {...props}>
      {children}
    </motion.button>
  )
}
