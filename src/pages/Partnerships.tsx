import { SectionHeader } from '../components/SectionHeader'
import { PartnershipForm } from '../components/PartnershipForm'
import { FadeIn } from '../components/AnimatedSection'
import { Building2, Users, Handshake, Heart, Package, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const partnershipTypes = [
  { icon: Building2, title: 'Corporate Partnerships', desc: 'Align your company with a mission of dignity and restoration through shared values and strategic support.' },
  { icon: Users, title: 'Community Partnerships', desc: 'Join forces with local organizations to expand reach and deepen impact in communities we serve.' },
  { icon: Handshake, title: 'Institutional Partnerships', desc: 'Collaborate with government, academic, and faith-based institutions to create systemic change.' },
  { icon: Heart, title: 'Volunteer Partnerships', desc: 'Mobilize teams of volunteers to support programs through structured engagement.' },
  { icon: Package, title: 'Resource Partnerships', desc: 'Contribute in-kind resources including supplies, materials, and expertise that directly serve our programs.' },
]

export default function Partnerships() {
  return (
    <>
      <section className="pt-32 sm:pt-40 lg:pt-48 pb-16 bg-lavender-light">
        <div className="container-custom text-center">
          <span className="inline-block text-xs font-sans font-medium uppercase tracking-[0.2em] text-gold-alt mb-4">
            Work With Us
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-normal text-navy leading-tight mb-6">
            Partnerships
          </h1>
          <p className="text-lg sm:text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
            Organizations can work with Moirai to amplify impact and restore
            dignity across Kenya.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-28 lg:py-36 bg-white" aria-labelledby="partnerships-heading">
        <div className="container-custom">
          <SectionHeader
            eyebrow="How We Partner"
            title="Pathways to Collaborate"
            subtitle="We believe that lasting change happens through shared commitment and coordinated effort."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnershipTypes.map((type, index) => {
              const Icon = type.icon
              return (
                <FadeIn key={type.title} delay={index * 0.1}>
                  <div className="bg-white rounded-xl p-8 border border-border h-full hover:shadow-xl transition-shadow duration-300">
                    <div className="w-14 h-14 rounded-full bg-navy/10 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-navy" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-display font-normal text-navy mb-3">
                      {type.title}
                    </h3>
                    <p className="text-text-muted leading-relaxed">
                      {type.desc}
                    </p>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 lg:py-36 bg-lavender-light">
        <div className="container-custom max-w-3xl">
          <SectionHeader
            eyebrow="Inquiry Form"
            title="Start a Conversation"
            subtitle="Tell us about your organization and your partnership interests. Our team will reach out within five business days."
          />
          <div className="bg-white rounded-xl p-8 sm:p-10 border border-lavender">
            <PartnershipForm />
          </div>
        </div>
      </section>
    </>
  )
}