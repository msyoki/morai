import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle } from 'lucide-react'

interface ContactFormProps {
  onSubmit: (data: ContactFormData) => void
}

export interface ContactFormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export function ContactForm({ onSubmit }: ContactFormProps) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({})
  const [submitted, setSubmitted] = useState(false)

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {}
    if (!form.name.trim()) newErrors.name = 'Name is required'
    if (!form.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = 'Please enter a valid email'
    if (!form.subject.trim()) newErrors.subject = 'Subject is required'
    if (!form.message.trim()) newErrors.message = 'Message is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (validate()) {
      setSubmitted(true)
      onSubmit(form as ContactFormData)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (errors[e.target.name as keyof ContactFormData]) {
      setErrors({ ...errors, [e.target.name]: '' })
    }
  }

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
          Thank You
        </h3>
        <p className="text-muted max-w-md mx-auto">
          Your message has been received. The Moirai team will get back to you
          as soon as possible.
        </p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-sans font-medium text-charcoal mb-2"
          >
            Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-stone rounded text-sm font-sans focus:outline-none focus:ring-2 focus:ring-earth focus:border-earth transition-colors"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <p id="name-error" className="text-xs text-earth mt-1" role="alert">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-sans font-medium text-charcoal mb-2"
          >
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-stone rounded text-sm font-sans focus:outline-none focus:ring-2 focus:ring-earth focus:border-earth transition-colors"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className="text-xs text-earth mt-1" role="alert">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-sans font-medium text-charcoal mb-2"
          >
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-stone rounded text-sm font-sans focus:outline-none focus:ring-2 focus:ring-earth focus:border-earth transition-colors"
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-sans font-medium text-charcoal mb-2"
          >
            Subject *
          </label>
          <select
            id="subject"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-stone rounded text-sm font-sans focus:outline-none focus:ring-2 focus:ring-earth focus:border-earth transition-colors bg-ivory"
            aria-invalid={!!errors.subject}
          >
            <option value="">Select a topic</option>
            <option>Partnership Inquiry</option>
            <option>Volunteer Inquiry</option>
            <option>Media & Press</option>
            <option>General Inquiry</option>
            <option>Donation Question</option>
          </select>
          {errors.subject && (
            <p className="text-xs text-earth mt-1" role="alert">
              {errors.subject}
            </p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-sans font-medium text-charcoal mb-2"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border-2 border-stone rounded text-sm font-sans focus:outline-none focus:ring-2 focus:ring-earth focus:border-earth transition-colors resize-y"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <p id="message-error" className="text-xs text-earth mt-1" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      <button type="submit" className="btn-primary w-full sm:w-auto">
        <Send className="w-4 h-4" aria-hidden="true" />
        Send Message
      </button>
    </form>
  )
}