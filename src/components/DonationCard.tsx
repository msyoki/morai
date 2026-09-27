import { useState } from 'react'
import { motion } from 'framer-motion'
import { DollarSign, Heart } from 'lucide-react'
import { DonationPackage } from '../data/donationPackages'

interface DonationCardProps {
  pkg: DonationPackage
  index: number
  onDonate: (pkg: DonationPackage) => void
}

export function DonationCard({ pkg, index, onDonate }: DonationCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -60px 0px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`
        relative bg-ivory border rounded-lg p-8 transition-all duration-300 cursor-pointer
        ${pkg.highlight
          ? 'border-earth shadow-lg hover:shadow-xl lg:-translate-y-2'
          : 'border-stone hover:shadow-lg hover:-translate-y-1'
        }
      `}
      onClick={() => onDonate(pkg)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onDonate(pkg)
        }
      }}
      aria-label={`Donate to ${pkg.name} - $${pkg.amount} per month`}
    >
      {pkg.highlight && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-earth text-ivory text-xs font-sans font-semibold uppercase tracking-wider px-4 py-1 rounded-full">
          Most Impactful
        </span>
      )}

      <div className="flex items-start justify-between mb-6">
        <div
          className={`
            w-12 h-12 rounded-full flex items-center justify-center
            ${pkg.highlight ? 'bg-earth/20' : 'bg-charcoal/5'}
          `}
        >
          <Heart
            className={`w-6 h-6 ${pkg.highlight ? 'text-earth' : 'text-charcoal/70'}`}
            aria-hidden="true"
          />
        </div>
        <div className="text-right">
          <div className="flex items-start">
            <DollarSign className="w-5 h-5 text-muted mt-1" aria-hidden="true" />
            <span className="text-3xl font-display font-normal text-charcoal">
              {pkg.amount}
            </span>
          </div>
          <span className="text-xs text-muted font-sans">/ month</span>
        </div>
      </div>

      <h3 className="text-xl font-display font-normal text-charcoal mb-2">
        {pkg.name}
      </h3>
      <p className="text-sm text-muted leading-relaxed mb-6">
        {pkg.description}
      </p>

      <ul className="space-y-2 mb-6">
        {pkg.items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm text-charcoal/80">
            <span className="text-earth mt-0.5" aria-hidden="true">
              ✓
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="pt-6 border-t border-stone">
        <span
          className={`
            inline-flex items-center gap-2 text-sm font-sans font-medium transition-colors
            ${pkg.highlight ? 'text-earth' : 'text-charcoal group-hover:text-earth'}
          `}
        >
          Give With Purpose
          <motion.span
            animate={{ x: isHovered ? 4 : 0 }}
            transition={{ duration: 0.2 }}
          >
            →
          </motion.span>
        </span>
      </div>
    </motion.div>
  )
}