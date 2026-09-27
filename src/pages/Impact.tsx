import ImpactSection from '../components/ImpactSection'
import { SectionHeader } from '../components/SectionHeader'
import { impactFigures, impactNotes } from '../data/impact'
import { FadeIn } from '../components/AnimatedSection'

export default function Impact() {
  return (
    <>
      <section className="pt-32 sm:pt-40 lg:pt-48 pb-16 bg-lavender-light">
        <div className="container-custom text-center">
          <span className="inline-block text-xs font-sans font-medium uppercase tracking-[0.2em] text-gold-alt mb-4">
            Measurable Change
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-normal text-navy leading-tight mb-6">
            Our Impact
          </h1>
          <p className="text-lg sm:text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
            Every figure represents a person, a family, and a community we
            serve with dignity.
          </p>
        </div>
      </section>

      <ImpactSection />

      <section className="py-20 sm:py-28 lg:py-36 bg-white">
        <div className="container-custom max-w-3xl">
          <SectionHeader
            eyebrow="Transparency"
            title="Our Commitment to You"
            subtitle="We believe in honest reporting and transparent stewardship of every contribution."
          />
          <FadeIn>
            <div className="bg-lavender-light rounded-xl p-8 sm:p-10 border border-lavender">
              <div className="space-y-4 text-text-muted leading-relaxed">
                <p>
                  Moirai operates with a simple promise: every contribution
                  goes directly to the programs that need it most. We do not
                  hide behind complex financial structures or vague promises.
                </p>
                <p>
                  Our impact figures are based on Moirai's current reported
                  program figures and are updated regularly as our work grows.
                  We welcome questions about how funds are used and encourage
                  open dialogue with our supporters and partners.
                </p>
                <p className="text-navy font-medium">
                  {impactNotes}
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}