import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { faqItems } from '../data/faq'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white" aria-labelledby="faq-heading">
      <div className="container-custom max-w-3xl">
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            id="faq-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-normal text-navy mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={item.id}
                className="border border-border rounded-xl overflow-hidden bg-white"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between text-left p-5 sm:p-6 focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                >
                  <span className="text-base sm:text-lg font-display font-normal text-navy pr-4">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`
                      w-5 h-5 text-gold-alt flex-shrink-0 transition-transform duration-300
                      ${isOpen ? 'rotate-180' : ''}
                    `}
                    aria-hidden="true"
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${item.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-text-muted leading-relaxed">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}