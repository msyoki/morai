import { SectionHeader } from '../components/SectionHeader'
import { ContactForm } from '../components/ContactForm'
import { contactInfo } from '../data/navigation'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { FadeIn } from '../components/AnimatedSection'

export default function Contact() {
  return (
    <>
      <section className="pt-32 sm:pt-40 lg:pt-48 pb-16 bg-lavender-light">
        <div className="container-custom text-center">
          <span className="inline-block text-xs font-sans font-medium uppercase tracking-[0.2em] text-gold-alt mb-4">
            Get In Touch
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-normal text-navy leading-tight mb-6">
            Contact Us
          </h1>
          <p className="text-lg sm:text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
            We welcome partnerships, volunteer inquiries, and community outreach
            opportunities.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-28 lg:py-36 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact info */}
            <div className="lg:col-span-2">
              <SectionHeader
                eyebrow="Reach Out"
                title="Say Hello"
                align="left"
              />
              <div className="space-y-6">
                <FadeIn delay={0.1}>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-alt/20 transition-colors">
                      <Mail className="w-6 h-6 text-navy group-hover:text-gold-alt" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm font-sans font-medium text-navy">
                        Email
                      </p>
                      <p className="text-text-muted text-sm break-all">
                        {contactInfo.email}
                      </p>
                    </div>
                  </a>
                </FadeIn>
                <FadeIn delay={0.15}>
                  <a
                    href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, '')}`}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-alt/20 transition-colors">
                      <Phone className="w-6 h-6 text-navy group-hover:text-gold-alt" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm font-sans font-medium text-navy">
                        Phone
                      </p>
                      <p className="text-text-muted text-sm">
                        {contactInfo.phone}
                      </p>
                    </div>
                  </a>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-navy" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm font-sans font-medium text-navy">
                        Location
                      </p>
                      <p className="text-text-muted text-sm">
                        {contactInfo.location}
                      </p>
                    </div>
                  </div>
                </FadeIn>
                <FadeIn delay={0.25}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-navy" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm font-sans font-medium text-navy">
                        Response Time
                      </p>
                      <p className="text-text-muted text-sm">
                        Within 5 business days
                      </p>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-lavender-light rounded-xl p-8 sm:p-10 border border-lavender">
                <ContactForm
                  onSubmit={(data) => {
                    console.log('Contact form submitted:', data)
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}