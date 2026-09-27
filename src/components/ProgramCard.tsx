import { motion } from 'framer-motion'
import { Heart, Droplets, Sun, Baby } from 'lucide-react'
import { Program } from '../data/programs'

const iconMap: Record<string, any> = {
  Droplets,
  Sun,
  Baby,
  Heart,
}

interface ProgramCardProps {
  program: Program
  index: number
}

export function ProgramCard({ program, index }: ProgramCardProps) {
  const Icon = iconMap[program.icon] || Heart

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -60px 0px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative bg-ivory border border-stone rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-500"
    >
      {/* Icon header */}
      <div className="bg-charcoal text-ivory p-8 flex items-start justify-between">
        <div className="w-14 h-14 rounded-full bg-earth/20 flex items-center justify-center">
          <Icon className="w-7 h-7 text-earth" aria-hidden="true" />
        </div>
        <span className="text-xs font-sans font-medium uppercase tracking-wider text-ivory/50">
          Program
        </span>
      </div>

      <div className="p-8">
        <h3 className="text-2xl sm:text-3xl font-display font-normal text-charcoal mb-3">
          {program.name}
        </h3>
        <p className="text-muted leading-relaxed mb-6">
          {program.description}
        </p>

        <div className="space-y-4 mb-8">
          <div>
            <h4 className="text-xs font-sans font-semibold uppercase tracking-wider text-earth mb-1">
              What We Do
            </h4>
            <p className="text-sm text-charcoal/80 leading-relaxed">
              {program.whatWeDo}
            </p>
          </div>
          <div>
            <h4 className="text-xs font-sans font-semibold uppercase tracking-wider text-earth mb-1">
              Who We Serve
            </h4>
            <p className="text-sm text-charcoal/80 leading-relaxed">
              {program.whoWeServe}
            </p>
          </div>
          <div>
            <h4 className="text-xs font-sans font-semibold uppercase tracking-wider text-earth mb-1">
              Why It Matters
            </h4>
            <p className="text-sm text-charcoal/80 leading-relaxed">
              {program.whyItMatters}
            </p>
          </div>
          <div>
            <h4 className="text-xs font-sans font-semibold uppercase tracking-wider text-earth mb-1">
              How Supporters Help
            </h4>
            <p className="text-sm text-charcoal/80 leading-relaxed">
              {program.howSupportersHelp}
            </p>
          </div>
        </div>

        <a
          href="/donate"
          className="inline-flex items-center gap-2 text-sm font-sans font-medium text-earth hover:text-soil transition-colors group/link"
        >
          {program.ctaLabel}
          <span className="inline-block transition-transform group-hover/link:translate-x-1">
            →
          </span>
        </a>
      </div>
    </motion.div>
  )
}