import { SectionHeader } from '../components/SectionHeader'
import { TeamCard } from '../components/TeamCard'
import { VideoPlayer } from '../components/VideoPlayer'
import { team } from '../data/team'
import { missionStatement } from '../data/navigation'
import { FadeIn, AnimatedSection } from '../components/AnimatedSection'

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 sm:pt-40 lg:pt-48 pb-16 bg-lavender-light">
        <div className="container-custom text-center">
          <span className="inline-block text-xs font-sans font-medium uppercase tracking-[0.2em] text-gold mb-4">
            About Moirai
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-normal text-navy leading-tight mb-6">
            Restoring Dignity,
            <br />
            <span className="text-gold">Rebuilding Lives</span>
          </h1>
          <p className="text-lg sm:text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
            {missionStatement}
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section id="story" className="py-20 sm:py-28 lg:py-36 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <FadeIn>
              <span className="inline-block text-xs font-sans font-medium uppercase tracking-[0.2em] text-gold mb-4">
                Our Story
              </span>
              <h2 className="text-4xl sm:text-5xl font-display font-normal text-navy leading-tight mb-6">
                Born from a sister's love
              </h2>
              <div className="space-y-4 text-text-muted leading-relaxed">
                <p>
                  Moirai was born out of a sister's love and a profound calling
                  to bring hope where it is often forgotten.
                </p>
                <p>
                  After visiting her brother in prison, founder Clarice Wambui
                  witnessed firsthand the severe loss of basic human dignity
                  experienced by incarcerated individuals. Believing that every
                  human being deserves respect and care, she started Moirai to
                  provide a lifeline of support to those navigating life inside
                  maximum security facilities.
                </p>
                <p>
                  Over the last five years, our mission has grown into a powerful
                  movement of restoration across Langata Maximum Women's Prison
                  and Nairobi West Men's Prison. By directly delivering
                  essential hygiene products to women, specialized comfort
                  supplies to elderly inmates, and holistic care kits to innocent
                  children affected by parental incarceration, we are breaking
                  cycles of isolation and rebuilding broken spirits.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="relative max-h-[520px] max-w-full">
                <VideoPlayer
                  src="/videos/moirai-story.mp4"
                  title="Moirai: Restoring Dignity, Rebuilding Lives"
                  ariaLabel="Moirai story video"
                  maxHeight={520}
                  className="w-full"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section id="mission" className="py-20 sm:py-28 lg:py-36 bg-lavender-light">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <FadeIn>
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-gold/15 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-display font-normal text-navy mb-3">
                  Our Mission
                </h3>
                <p className="text-text-muted leading-relaxed">
                  To restore dignity, provide care, and support vulnerable
                  incarcerated communities and families affected by
                  incarceration through targeted, compassionate programs.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-periwinkle/15 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-periwinkle" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542 7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-display font-normal text-navy mb-3">
                  Our Vision
                </h3>
                <p className="text-text-muted leading-relaxed">
                  A Kenya where every person, regardless of incarceration status,
                  is treated with dignity and given the support to rebuild a
                  meaningful life.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-periwinkle/15 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-periwinkle" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-display font-normal text-navy mb-3">
                  Our Values
                </h3>
                <p className="text-text-muted leading-relaxed">
                  Dignity, compassion, transparency, community, restoration,
                  and unwavering commitment to those we serve.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-20 sm:py-28 lg:py-36 bg-white">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Our Team"
            title="Led by Lived Experience"
            subtitle="Driven by lived experience and a shared commitment to restoring humanity to incarcerated communities."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10">
            {team.map((member, index) => (
              <TeamCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}