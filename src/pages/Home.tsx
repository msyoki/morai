import Hero from '../components/Hero'
import { SectionHeader } from '../components/SectionHeader'
import { programs } from '../data/programs'
import { ProgramCard } from '../components/ProgramCard'
import { donationPackages } from '../data/donationPackages'
import { DonationCard } from '../components/DonationCard'
import { useState } from 'react'
import { DonationModal } from '../components/DonationModal'
import { DonationPackage } from '../data/donationPackages'

export default function Home() {
  const [selectedPkg, setSelectedPkg] = useState<DonationPackage | null>(null)

  return (
    <>
      <Hero />

      {/* Story transition */}
      <section className="py-20 sm:py-28 lg:py-36 bg-lavender-light">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-block text-xs font-sans font-medium uppercase tracking-[0.2em] text-gold-alt mb-4">
                Our Story
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-normal text-navy leading-tight mb-6">
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
                  and Nairobi West Men's Prison.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/5] bg-navy rounded-lg overflow-hidden">
                <img
                  src="/images/team/clarice-wambui.jpg"
                  alt="Moirai founder Clarice Wambui"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-navy/70 to-navy/20"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs preview */}
      <section className="py-20 sm:py-28 lg:py-36 bg-white" aria-labelledby="programs-heading">
        <div className="container-custom">
          <SectionHeader
            eyebrow="What We Do"
            title="Our Programs"
            subtitle="Targeted initiatives designed to restore dignity, provide care, and rebuild lives."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <ProgramCard key={program.id} program={program} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Transparent Giving preview */}
      <section className="py-20 sm:py-28 lg:py-36 bg-lavender-light" aria-labelledby="giving-heading">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Give With Purpose"
            title="Transparent Giving"
            subtitle="Choose a giving package to directly restore dignity, provide essential care, and bring hope to someone who needs it most."
          />
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {donationPackages.map((pkg, index) => (
              <DonationCard
                key={pkg.id}
                pkg={pkg}
                index={index}
                onDonate={setSelectedPkg}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-navy relative overflow-hidden" aria-labelledby="cta-heading">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(251,177,67,0.15) 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }} aria-hidden="true" />
        <div className="container-custom relative text-center px-5 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 id="cta-heading" className="text-3xl sm:text-4xl lg:text-5xl font-display font-normal text-white mb-4">
              Join Us in Restoring Dignity
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-8 leading-relaxed">
              Whether through giving, volunteering, or partnering, your
              participation creates real change for vulnerable communities across
              Kenya.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/donate" className="btn-primary w-full sm:w-auto">
                Support the Mission
              </a>
              <a href="/get-involved" className="btn-secondary w-full sm:w-auto border-gold-alt text-gold-alt hover:bg-gold-alt hover:text-navy">
                Get Involved
              </a>
            </div>
          </div>
        </div>
      </section>

      <DonationModal
        pkg={selectedPkg}
        onClose={() => setSelectedPkg(null)}
      />
    </>
  )
}