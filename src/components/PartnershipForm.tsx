import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

export function PartnershipForm() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center py-12"
      >
        <div className="w-20 h-20 rounded-full bg-sage/20 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-sage" aria-hidden="true" />
        </div>
        <h3 className="text-2xl font-display font-normal text-charcoal mb-3">
          Inquiry Received
        </h3>
        <p className="text-muted max-w-md mx-auto">
          Thank you for your partnership interest. Our partnerships team will
          reach out within five business days.
        </p>
      </motion.div>
    )
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        setSubmitted(true)
      }}
      className="space-y-5"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="p-org" className="block text-sm font-sans font-medium text-charcoal mb-2">
            Organization Name *
          </label>
          <input id="p-org" type="text" className="w-full px-4 py-3 border-2 border-stone rounded text-sm font-sans focus:outline-none focus:ring-2 focus:ring-earth focus:border-earth" />
        </div>
        <div>
          <label htmlFor="p-contact" className="block text-sm font-sans font-medium text-charcoal mb-2">
            Contact Person *
          </label>
          <input id="p-contact" type="text" className="w-full px-4 py-3 border-2 border-stone rounded text-sm font-sans focus:outline-none focus:ring-2 focus:ring-earth focus:border-earth" />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="p-email" className="block text-sm font-sans font-medium text-charcoal mb-2">
            Email *
          </label>
          <input id="p-email" type="email" className="w-full px-4 py-3 border-2 border-stone rounded text-sm font-sans focus:outline-none focus:ring-2 focus:ring-earth focus:border-earth" />
        </div>
        <div>
          <label htmlFor="p-phone" className="block text-sm font-sans font-medium text-charcoal mb-2">
            Phone
          </label>
          <input id="p-phone" type="tel" className="w-full px-4 py-3 border-2 border-stone rounded text-sm font-sans focus:outline-none focus:ring-2 focus:ring-earth focus:border-earth" />
        </div>
      </div>
      <div>
        <label htmlFor="p-type" className="block text-sm font-sans font-medium text-charcoal mb-2">
          Partnership Type *
        </label>
        <select id="p-type" className="w-full px-4 py-3 border-2 border-stone rounded text-sm font-sans focus:outline-none focus:ring-2 focus:ring-earth focus:border-earth bg-ivory">
          <option value="">Select a type</option>
          <option>Corporate Partnership</option>
          <option>Community Partnership</option>
          <option>Institutional Partnership</option>
          <option>Volunteer Partnership</option>
          <option>Resource Partnership</option>
        </select>
      </div>
      <div>
        <label htmlFor="p-message" className="block text-sm font-sans font-medium text-charcoal mb-2">
          Partnership Proposal / Message *
        </label>
        <textarea id="p-message" rows={5} className="w-full px-4 py-3 border-2 border-stone rounded text-sm font-sans focus:outline-none focus:ring-2 focus:ring-earth focus:border-earth resize-y" />
      </div>
      <button type="submit" className="btn-primary w-full sm:w-auto">
        Submit Inquiry
      </button>
    </form>
  )
}