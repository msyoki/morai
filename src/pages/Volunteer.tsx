import { SectionHeader } from '../components/SectionHeader'
import { VolunteerForm } from '../components/VolunteerForm'
import { FadeIn } from '../components/AnimatedSection'
import { HandHeart, Clock, Users, Heart } from 'lucide-react'

const benefits = [
  { icon: HandHeart, title: 'Make a Difference', desc: 'Directly support communities affected by incarceration.' },
  { icon: Users, title: 'Join a Community', desc: 'Work alongside a team driven by lived experience.' },
  { icon: Clock, title: 'Flexible Roles', desc: 'Opportunities for various time commitments and skills.' },
  { icon: Heart, title: 'Restoring Dignity', desc: 'Be part of a mission that restores humanity.' },
]

export default function Volunteer() {
  return (
    <>
      <section className="pt-32 sm:pt-40 lg:pt-48 pb-16 bg-lavender-light">
        <div className="container-custom text-center">
          <span className="inline-block text-xs font-sans font-medium uppercase tracking-[0.2em] text-gold-alt mb-4">
            Volunteer With Us
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-normal text-navy leading-tight mb-6">
            Share Your Time
          </h1>
          <p className="text-lg sm:text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
            Join a team driven by lived experience and a shared commitment to
            restoring humanity to incarcerated communities.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-28 lg:py-36 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-1">
              <SectionHeader
                eyebrow="Why Volunteer"
                title="Join Our Mission"
                align="left"
              />
              <div className="space-y-6">
                {benefits.map((benefit) => {
                  const Icon = benefit.icon
                  return (
                    <FadeIn key={benefit.title} delay={0.1}>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-navy" aria-hidden="true" />
                        </div>
                        <div>
                          <h3 className="text-base font-display font-normal text-navy">
                            {benefit.title}
                          </h3>
                          <p className="text-sm text-text-muted leading-relaxed">
                            {benefit.desc}
                          </p>
                        </div>
                      </div>
                    </FadeIn>
                  )
                })}
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-lavender-light rounded-xl p-8 sm:p-10 border border-lavender">
                <VolunteerForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}