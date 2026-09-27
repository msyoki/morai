import { useState } from 'react'
import { X, Heart, DollarSign } from 'lucide-react'
import { DonationPackage } from '../data/donationPackages'

interface DonationModalProps {
  pkg: DonationPackage | null
  onClose: () => void
}

export function DonationModal({ pkg, onClose }: DonationModalProps) {
  const [amount, setAmount] = useState(pkg ? String(pkg.amount) : '25')
  const [customAmount, setCustomAmount] = useState('')
  const [isCustom, setIsCustom] = useState(false)
  const [cadence, setCadence] = useState<'monthly' | 'one-time'>('monthly')

  if (!pkg) return null

  const suggestedAmounts = [15, 25, 50, 100]

  const handleAmountSelect = (val: number) => {
    setAmount(String(val))
    setCustomAmount('')
    setIsCustom(false)
  }

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value)
    setIsCustom(true)
    setAmount(e.target.value)
  }

  const displayAmount = isCustom ? customAmount : amount

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="donate-modal-title"
    >
      <div
        className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative bg-ivory rounded-lg shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-stone transition-colors focus:outline-none focus:ring-2 focus:ring-charcoal"
          aria-label="Close donation modal"
        >
          <X className="w-5 h-5 text-charcoal" aria-hidden="true" />
        </button>

        <div className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-earth/20 flex items-center justify-center">
              <Heart className="w-6 h-6 text-earth" aria-hidden="true" />
            </div>
            <div>
              <h2 id="donate-modal-title" className="text-xl font-display font-normal text-charcoal">
                {pkg.name}
              </h2>
              <p className="text-sm text-muted">{pkg.description}</p>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-sans font-medium text-charcoal mb-3">
              Select Amount
            </label>
            <div className="grid grid-cols-4 gap-2 mb-3">
              {suggestedAmounts.map((val) => (
                <button
                  key={val}
                  onClick={() => handleAmountSelect(val)}
                  className={`
                    py-3 px-2 rounded border-2 text-sm font-sans font-medium transition-all
                    ${!isCustom && amount === String(val)
                      ? 'border-earth bg-earth/5 text-earth'
                      : 'border-stone text-charcoal/70 hover:border-earth/50'
                    }
                  `}
                >
                  ${val}
                </button>
              ))}
            </div>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" aria-hidden="true" />
              <input
                type="number"
                min="1"
                value={customAmount}
                onChange={handleCustomChange}
                placeholder="Custom amount"
                className="w-full pl-8 pr-4 py-3 border-2 border-stone rounded text-sm font-sans focus:outline-none focus:ring-2 focus:ring-earth focus:border-earth"
                aria-label="Custom donation amount"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-sans font-medium text-charcoal mb-3">
              Donation Type
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setCadence('monthly')}
                className={`
                  py-3 rounded border-2 text-sm font-sans font-medium transition-all
                  ${cadence === 'monthly'
                    ? 'border-earth bg-earth/5 text-earth'
                    : 'border-stone text-charcoal/70 hover:border-earth/50'
                  }
                `}
              >
                Monthly
              </button>
              <button
                onClick={() => setCadence('one-time')}
                className={`
                  py-3 rounded border-2 text-sm font-sans font-medium transition-all
                  ${cadence === 'one-time'
                    ? 'border-earth bg-earth/5 text-earth'
                    : 'border-stone text-charcoal/70 hover:border-earth/50'
                  }
                `}
              >
                One-time
              </button>
            </div>
          </div>

          <div className="bg-ivory-warm rounded-lg p-4 mb-6">
            <div className="flex items-baseline justify-between">
              <span className="text-sm text-muted">Total</span>
              <div className="text-right">
                <span className="text-2xl font-display font-normal text-charcoal">
                  ${displayAmount || '0'}
                </span>
                <span className="text-sm text-muted ml-1">
                  / {cadence === 'monthly' ? 'month' : 'once'}
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              alert(
                `Development mode: Would initiate payment of $${displayAmount} (${cadence}). Production credentials needed for M-Pesa/PayPal.`
              )
            }}
            disabled={!displayAmount || Number(displayAmount) < 1}
            className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Heart className="w-4 h-4" aria-hidden="true" />
            Give With Purpose
          </button>

          <p className="text-xs text-muted text-center mt-4">
            Your donation is secure and transparent. You can cancel recurring
            donations at any time.
          </p>
        </div>
      </div>
    </div>
  )
}