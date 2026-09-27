import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Heart } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-charcoal relative overflow-hidden" aria-labelledby="cta-heading">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(250,248,243,0.4) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />
      <div className="container-custom relative text-center px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Heart className="w-10 h-10 text-earth mx-auto mb-6" aria-hidden="true" />
          <h2 id="cta-heading" className="text-3xl sm:text-4xl lg:text-5xl font-display font-normal text-ivory mb-4">
            Join Us in Restoring Dignity
          </h2>
          <p className="text-ivory/70 max-w-2xl mx-auto mb-8 leading-relaxed">
            Whether through giving, volunteering, or partnering, your
            participation creates real change for vulnerable communities across
            Kenya.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/donate" className="btn-primary w-full sm:w-auto">
              <Heart className="w-4 h-4" aria-hidden="true" />
              Support the Mission
            </Link>
            <Link to="/get-involved" className="btn-secondary w-full sm:w-auto border-ivory/40 text-ivory hover:bg-ivory hover:text-charcoal">
              Get Involved
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}