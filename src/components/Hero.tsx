import { Link } from 'react-router-dom'
import { ArrowDown, Heart } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-navy/90 via-navy/70 to-navy/50"
      aria-labelledby="hero-heading"
    >
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />
      {/* Radial gradient accent */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(circle at 70% 30%, rgba(251,177,67,0.15), transparent 50%)',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="container-custom relative z-10 text-center px-5 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-sans font-medium uppercase tracking-[0.25em] text-gold-alt/80 mb-8">
            <Heart className="w-4 h-4 text-gold-alt" aria-hidden="true" />
            Restoring Dignity in Kenya
          </span>
        </motion.div>

        <motion.h1
          id="hero-heading"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-normal text-white leading-tight mb-6"
        >
          Restoring Dignity.
          <br />
          <span className="text-gold-alt">Rebuilding Lives.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-lg sm:text-xl text-white/80 leading-relaxed mb-10"
        >
          Moirai restores dignity, provides care, and supports vulnerable
          incarcerated communities and families affected by incarceration across
          Kenya. Every contribution delivers essential support where it is most
          needed.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/donate"
            className="btn-primary w-full sm:w-auto"
          >
            Support the Mission
            <Heart className="w-4 h-4" aria-hidden="true" />
          </Link>
          <Link
            to="/impact"
            className="btn-secondary w-full sm:w-auto border-gold-alt text-gold-alt hover:bg-gold-alt hover:text-navy"
          >
            See Our Impact
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <button
            onClick={() => {
              window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
            }}
            className="flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors focus:outline-none"
            aria-label="Scroll to next section"
          >
            <span className="text-xs font-sans uppercase tracking-widest">Scroll</span>
            <svg className="w-5 h-5 animate-bounce" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  )
}