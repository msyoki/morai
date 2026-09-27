import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
}: SectionHeaderProps) {
  const alignClass = align === 'left' ? 'text-left' : 'text-center'

  return (
    <div className={`mx-auto max-w-3xl mb-14 sm:mb-16 ${alignClass} ${className}`}>
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs sm:text-sm font-sans font-medium uppercase tracking-[0.2em] text-earth mb-4"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl sm:text-5xl lg:text-6xl font-display font-normal text-charcoal leading-tight"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-muted leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}