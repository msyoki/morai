import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

export function VolunteerForm() {
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
          Application Received
        </h3>
        <p className="text-muted max-w-md mx-auto">
          Thank you for your interest in volunteering with Moirai. Our team will
          review your application and get back to you shortly.
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
          <label htmlFor="v-name" className="block text-sm font-sans font-medium text-charcoal mb-2">
            Name *
          </label>
          <input id="v-name" type="text" className="w-full px-4 py-3 border-2 border-stone rounded text-sm font-sans focus:outline-none focus:ring-2 focus:ring-earth focus:border-earth" />
        </div>
        <div>
          <label htmlFor="v-email" className="block text-sm font-sans font-medium text-charcoal mb-2">
            Email *
          </label>
          <input id="v-email" type="email" className="w-full px-4 py-3 border-2 border-stone rounded text-sm font-sans focus:outline-none focus:ring-2 focus:ring-earth focus:border-earth" />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="v-phone" className="block text-sm font-sans font-medium text-charcoal mb-2">
            Phone
          </label>
          <input id="v-phone" type="tel" className="w-full px-4 py-3 border-2 border-stone rounded text-sm font-sans focus:outline-none focus:ring-2 focus:ring-earth focus:border-earth" />
        </div>
        <div>
          <label htmlFor="v-location" className="block text-sm font-sans font-medium text-charcoal mb-2">
            Location *
          </label>
          <input id="v-location" type="text" className="w-full px-4 py-3 border-2 border-stone rounded text-sm font-sans focus:outline-none focus:ring-2 focus:ring-earth focus:border-earth" />
        </div>
      </div>
      <div>
        <label htmlFor="v-interest" className="block text-sm font-sans font-medium text-charcoal mb-2">
          Area of Interest *
        </label>
        <select id="v-interest" className="w-full px-4 py-3 border-2 border-stone rounded text-sm font-sans focus:outline-none focus:ring-2 focus:ring-earth focus:border-earth bg-ivory">
          <option value="">Select an area</option>
          <option>Community Outreach</option>
          <option>Program Support</option>
          <option>Youth Mentoring</option>
          <option>Event Coordination</option>
          <option>Resource Distribution</option>
          <option>Administration</option>
        </select>
      </div>
      <div>
        <label htmlFor="v-experience" className="block text-sm font-sans font-medium text-charcoal mb-2">
          Relevant Experience
        </label>
        <textarea id="v-experience" rows={3} className="w-full px-4 py-3 border-2 border-stone rounded text-sm font-sans focus:outline-none focus:ring-2 focus:ring-earth focus:border-earth resize-y" />
      </div>
      <div>
        <label htmlFor="v-availability" className="block text-sm font-sans font-medium text-charcoal mb-2">
          Availability
        </label>
        <textarea id="v-availability" rows={2} className="w-full px-4 py-3 border-2 border-stone rounded text-sm font-sans focus:outline-none focus:ring-2 focus:ring-earth focus:border-earth resize-y" />
      </div>
      <div>
        <label htmlFor="v-message" className="block text-sm font-sans font-medium text-charcoal mb-2">
          Message
        </label>
        <textarea id="v-message" rows={4} className="w-full px-4 py-3 border-2 border-stone rounded text-sm font-sans focus:outline-none focus:ring-2 focus:ring-earth focus:border-earth resize-y" />
      </div>
      <label className="flex items-start gap-3 text-sm text-charcoal/80">
        <input type="checkbox" className="mt-1 w-4 h-4 rounded border-stone text-earth focus:ring-earth" required />
        <span>
          I acknowledge that my personal data will be processed in accordance with
          Moirai's privacy policy for volunteer management purposes only.
        </span>
      </label>
      <button type="submit" className="btn-primary w-full sm:w-auto">
        Submit Application
      </button>
    </form>
  )
}