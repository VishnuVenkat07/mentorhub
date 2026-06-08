import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGraduationCap } from 'react-icons/fa'

/**
 * GlobalPageLoader
 * ─────────────────────────────────────────────────────────────────
 * Shows a full-screen branded loading overlay on EVERY page change.
 * Reads theme CSS vars so it automatically matches your color scheme.
 * Duration: 650ms — long enough to feel intentional, short enough to stay snappy.
 */
export default function PageLoader() {
  const location          = useLocation()
  const [visible, setVisible] = useState(false)
  const [key, setKey]     = useState(0)

  useEffect(() => {
    // Flash the loader on every route change
    setVisible(true)
    setKey(k => k + 1)
    const t = setTimeout(() => setVisible(false), 650)
    return () => clearTimeout(t)
  }, [location.pathname])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key={key}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          style={{
            background: 'var(--color-primary)',
            backdropFilter: 'blur(6px)',
          }}
        >
          {/* Brand icon — pulses while loading */}
          <motion.div
            animate={{ scale: [1, 1.12, 1] }}
            transition={{ duration: 0.7, repeat: Infinity, ease: 'easeInOut' }}
            className="w-16 h-16 rounded-2xl flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, var(--color-accent), var(--color-accentGold))',
              boxShadow: '0 0 32px rgba(37,99,235,0.35)',
            }}
          >
            <FaGraduationCap size={30} className="text-white" />
          </motion.div>

          {/* Spinning gradient ring */}
          <div className="relative w-14 h-14">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 0.9, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, transparent 60%, var(--color-accent) 100%)',
                WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 4px), #000 0)',
                mask: 'radial-gradient(farthest-side, transparent calc(100% - 4px), #000 0)',
              }}
            />
            {/* Inner glow dot */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 0.9, repeat: Infinity, ease: 'linear' }}
              className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full"
              style={{ background: 'var(--color-accent)', marginTop: '-1px' }}
            />
          </div>

          {/* Animated dots */}
          <div className="flex items-center gap-2">
            {[0, 1, 2].map(i => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full"
                style={{ background: 'var(--color-accent)' }}
                animate={{ opacity: [0.25, 1, 0.25], y: [0, -4, 0] }}
                transition={{
                  duration: 0.7,
                  repeat: Infinity,
                  delay: i * 0.15,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>

          {/* Top progress bar */}
          <motion.div
            className="fixed top-0 left-0 h-[3px]"
            style={{
              background: 'linear-gradient(90deg, var(--color-accent), var(--color-accentGold))',
            }}
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
