import { SectionHeader } from '../components/SectionHeader'
import { ProgramCard } from '../components/ProgramCard'
import { programs } from '../data/programs'
import { FadeIn } from '../components/AnimatedSection'
import { Heart, Droplets, Sun, Baby } from 'lucide-react'

export default function Programs() {
  return (
    <>
      <section className="pt-32 sm:pt-40 lg:pt-48 pb-16 bg-lavender-light">
        <div className="container-custom text-center">
          <span className="inline-block text-xs font-sans font-medium uppercase tracking-[0.2em] text-gold-alt mb-4">
            Our Programs
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-normal text-navy leading-tight mb-6">
            What We Do
          </h1>
          <p className="text-lg sm:text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
            Targeted initiatives designed to restore dignity, provide care,
            and rebuild lives.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-28 lg:py-36 bg-white" aria-labelledby="programs-heading">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <ProgramCard key={program.id} program={program} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Approach Journey */}
      <section className="py-20 sm:py-28 lg:py-36 bg-navy" aria-labelledby="approach-heading">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-sans font-medium uppercase tracking-[0.2em] text-gold-alt mb-4">
              Our Approach
            </span>
            <h2 id="approach-heading" className="text-4xl sm:text-5xl lg:text-6xl font-display font-normal text-white leading-tight">
              A Journey of Restoration
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-4">
            {[
              { step: '01', title: 'Rescue', desc: 'Reach those in need' },
              { step: '02', title: 'Support', desc: 'Deliver essentials' },
              { step: '03', title: 'Restore', desc: 'Affirm dignity' },
              { step: '04', title: 'Empower', desc: 'Build capacity' },
              { step: '05', title: 'Reconnect', desc: 'Repair relationships' },
              { step: '06', title: 'Rebuild', desc: 'Transform futures' },
            ].map((item, index) => (
              <FadeIn key={item.step} delay={index * 0.1}>
                <div className="text-center group">
                  <div className="w-16 h-16 rounded-full border-2 border-gold-alt/40 flex items-center justify-center mx-auto mb-4 group-hover:border-gold-alt transition-colors">
                    <span className="text-gold-alt font-display text-lg">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-display font-normal text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/60">
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}