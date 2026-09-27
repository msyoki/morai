import { useState } from 'react'
import { SectionHeader } from '../components/SectionHeader'
import { DonationCard } from '../components/DonationCard'
import { DonationModal } from '../components/DonationModal'
import { donationPackages, suggestedCustomAmounts, currencies } from '../data/donationPackages'
import { DonationPackage } from '../data/donationPackages'
import { DollarSign, Heart, Shield, RefreshCw } from 'lucide-react'
import { FadeIn } from '../components/AnimatedSection'

export default function Donate() {
  const [selectedPkg, setSelectedPkg] = useState<DonationPackage | null>(null)
  const [currency, setCurrency] = useState('USD')

  const symbol = currencies.find((c) => c.code === currency)?.symbol || '$'

  return (
    <>
      <section className="pt-32 sm:pt-40 lg:pt-48 pb-16 bg-lavender-light">
        <div className="container-custom text-center">
          <span className="inline-block text-xs font-sans font-medium uppercase tracking-[0.2em] text-gold-alt mb-4">
            Give With Purpose
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-normal text-navy leading-tight mb-6">
            Support the Mission
          </h1>
          <p className="text-lg sm:text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
            Choose a giving package to directly restore dignity, provide
            essential care, and bring hope to someone who needs it most.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-28 lg:py-36 bg-white" aria-labelledby="donate-heading">
        <div className="container-custom">
          {/* Currency selector */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            <span className="text-sm text-text-muted font-sans mr-2">Currency:</span>
            {currencies.map((c) => (
              <button
                key={c.code}
                onClick={() => setCurrency(c.code)}
                className={`
                  px-4 py-2 rounded-full text-sm font-sans font-medium transition-all
                  ${currency === c.code
                    ? 'bg-navy text-white'
                    : 'bg-white text-navy/70 hover:bg-lavender-light border border-border'
                  }
                `}
              >
                {c.code}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {donationPackages.map((pkg, index) => (
              <DonationCard
                key={pkg.id}
                pkg={pkg}
                index={index}
                onDonate={setSelectedPkg}
              />
            ))}
          </div>

          {/* Custom amount option */}
          <FadeIn delay={0.3}>
            <div className="max-w-md mx-auto mt-12 bg-lavender-light rounded-xl p-6 border border-lavender text-center">
              <h3 className="text-lg font-display font-normal text-navy mb-2">
                Custom Amount
              </h3>
              <p className="text-sm text-text-muted mb-4">
                Choose an amount that resonates with you.
              </p>
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-xl text-navy">{symbol}</span>
                <input
                  type="number"
                  min="1"
                  placeholder="Enter amount"
                  className="w-32 px-4 py-3 border-2 border-border rounded-lg text-sm font-sans focus:outline-none focus:ring-2 focus:ring-navy focus:border-navy"
                />
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {suggestedCustomAmounts.map((amt) => (
                  <button
                    key={amt}
                    className="px-4 py-2 rounded-full bg-white border border-border text-sm font-sans text-text-muted hover:border-gold-alt hover:text-gold-alt transition-colors"
                  >
                    {symbol}{amt}
                  </button>
                ))}
              </div>
              <button className="btn-accent mt-6">
                <Heart className="w-4 h-4" aria-hidden="true" />
                Give With Purpose
              </button>
            </div>
          </FadeIn>

          {/* Trust indicators */}
          <FadeIn delay={0.4}>
            <div className="flex flex-wrap justify-center gap-8 mt-16 pt-10 border-t border-border">
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-gold-alt" aria-hidden="true" />
                <span className="text-sm text-text-muted">Secure Payments</span>
              </div>
              <div className="flex items-center gap-3">
                <RefreshCw className="w-6 h-6 text-gold-alt" aria-hidden="true" />
                <span className="text-sm text-text-muted">Cancel Anytime</span>
              </div>
              <div className="flex items-center gap-3">
                <DollarSign className="w-6 h-6 text-gold-alt" aria-hidden="true" />
                <span className="text-sm text-text-muted">100% Transparent</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <DonationModal
        pkg={selectedPkg}
        onClose={() => setSelectedPkg(null)}
      />
    </>
  )
}