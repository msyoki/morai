import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { impactFigures, impactNotes, impactStats } from '../data/impact'

function useCountUp(
  target: number,
  inView: boolean,
  duration = 2,
  suffix = '',
) {
  const nodeRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!inView || !nodeRef.current) return

    const node = nodeRef.current
    const start = 0
    const end = target
    const startTime = performance.now()

    const animate = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.floor(start + (end - start) * eased)

      if (node) {
        node.textContent = current.toLocaleString() + suffix
      }

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else if (node) {
        node.textContent = end.toLocaleString() + suffix
      }
    }

    requestAnimationFrame(animate)
  }, [target, inView, duration, suffix])

  return nodeRef
}

interface ImpactCounterProps {
  value: number
  label: string
  suffix?: string
  inView: boolean
}

export function ImpactCounter({
  value,
  label,
  suffix = '',
  inView,
}: ImpactCounterProps) {
  const ref = useCountUp(value, inView, 2, suffix)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -60px 0px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="text-center"
    >
      <div className="text-4xl sm:text-5xl lg:text-6xl font-display font-normal text-earth leading-none mb-3">
        <span ref={ref}>0{suffix}</span>
      </div>
      <p className="text-sm sm:text-base text-muted font-sans font-medium uppercase tracking-wider">
        {label}
      </p>
    </motion.div>
  )
}

export default function ImpactSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-24 bg-ivory-warm"
      aria-labelledby="impact-heading"
    >
      <div className="container-custom">
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            id="impact-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-normal text-charcoal mb-4"
          >
            Our Impact
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted max-w-2xl mx-auto"
          >
            Measurable change, delivered with dignity.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-6">
          {impactStats.map((stat) => (
            <ImpactCounter
              key={stat.label}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              inView={inView}
            />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-xs sm:text-sm text-muted mt-12 italic"
        >
          {impactNotes}
        </motion.p>
      </div>
    </section>
  )
}