import { ReactNode, useEffect, useRef } from 'react'
import { motion, useAnimation, Variants } from 'framer-motion'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  stagger?: boolean
  once?: boolean
}

export function AnimatedSection({
  children,
  className = '',
  stagger = false,
  once = true,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const controls = useAnimation()

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start('visible')
            if (once) observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [controls, once])

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger ? 0.12 : 0 },
    },
  }

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={container}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function FadeInUp({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -60px 0px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function FadeIn({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '0px 0px -60px 0px' }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}