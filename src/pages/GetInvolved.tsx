import { SectionHeader } from '../components/SectionHeader'
import { FadeIn, AnimatedSection } from '../components/AnimatedSection'
import { Heart, HandHeart, Building2, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const pathways = [
  {
    icon: Heart,
    title: 'Donate',
    description:
      'Your contribution directly funds hygiene packs, senior care supplies, and holistic child support. Choose a monthly giving package or make a one-time gift.',
    cta: 'Support the Mission',
    href: '/donate',
    iconColor: 'gold-alt',
    iconBg: 'bg-gold-alt/15',
  },
  {
    icon: HandHeart,
    title: 'Volunteer',
    description:
      'Give your time and skills to community outreach, program support, youth mentoring, and event coordination. Join a team driven by lived experience.',
    cta: 'Apply to Volunteer',
    href: '/volunteer',
    iconColor: 'navy',
    iconBg: 'bg-navy/15',
  },
  {
    icon: Building2,
    title: 'Partner',
    description:
      'Organizations can work with Moirai through corporate, community, institutional, volunteer, and resource partnerships to amplify impact.',
    cta: 'Explore Partnerships',
    href: '/partnerships',
    iconColor: 'periwinkle',
    iconBg: 'bg-periwinkle/15',
  },
]

export default function GetInvolved() {
  return (
    <>
      <section className="pt-32 sm:pt-40 lg:pt-48 pb-16 bg-lavender-light">
        <div className="container-custom text-center">
          <span className="inline-block text-xs font-sans font-medium uppercase tracking-[0.2em] text-gold-alt mb-4">
            Join the Movement
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-normal text-navy leading-tight mb-6">
            Get Involved
          </h1>
          <p className="text-lg sm:text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
            Three pathways to create real change for vulnerable communities
            across Kenya.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-28 lg:py-36 bg-white" aria-labelledby="pathways-heading">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {pathways.map((pathway, index) => {
              const Icon = pathway.icon
              return (
                <FadeIn key={pathway.title} delay={index * 0.1}>
                  <div className="bg-white rounded-xl p-8 border border-border h-full flex flex-col hover:shadow-xl transition-shadow duration-300">
                    <div className={`${pathway.iconBg} w-14 h-14 rounded-full flex items-center justify-center mb-6`}>
                      <Icon className={`w-7 h-7 text-${pathway.iconColor}`} aria-hidden="true" />
                    </div>
                    <h2 className="text-2xl font-display font-normal text-navy mb-3">
                      {pathway.title}
                    </h2>
                    <p className="text-text-muted leading-relaxed mb-6 flex-grow">
                      {pathway.description}
                    </p>
                    <Link
                      to={pathway.href}
                      className="inline-flex items-center gap-2 text-sm font-sans font-medium text-gold-alt hover:text-gold-alt/80 transition-colors group"
                    >
                      {pathway.cta}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </Link>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}