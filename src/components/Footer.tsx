import { Link } from 'react-router-dom'
import { footerNav, contactInfo, socialLinks, siteName, missionStatement } from '../data/navigation'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy text-white" role="contentinfo">
      <div className="container-custom py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <img
                src="/images/moirai-logo.png"
                alt="Moirai"
                className="h-18 w-auto max-w-[260px] object-contain"
                loading="lazy"
                width="260"
                height="187"
              />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed max-w-sm mb-6">
              {missionStatement}
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-gold-alt hover:border-gold-alt/40 transition-colors focus:outline-none focus:ring-2 focus:ring-gold-alt"
                >
                  <span className="sr-only">{social.label}</span>
                  <span aria-hidden="true" className="text-xs font-sans font-medium">
                    {social.label.slice(0, 2)}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg mb-5 text-white">About</h4>
            <ul className="space-y-3">
              {footerNav.about.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/70 hover:text-gold-alt transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-5 text-white">Programs</h4>
            <ul className="space-y-3">
              {footerNav.programs.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/70 hover:text-gold-alt transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-5 text-white">Get Involved</h4>
            <ul className="space-y-3">
              {footerNav.getInvolved.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/70 hover:text-gold-alt transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-custom py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/60">
            <a href={`mailto:${contactInfo.email}`} className="hover:text-gold-alt transition-colors">
              {contactInfo.email}
            </a>
            <a href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-gold-alt transition-colors">
              {contactInfo.phone}
            </a>
            <span>{contactInfo.location}</span>
          </div>
          <div className="flex gap-4 text-sm">
            <Link to="/privacy" className="text-white/60 hover:text-gold-alt transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-white/60 hover:text-gold-alt transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-custom py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-sm text-white/50">
            &copy; {currentYear} {siteName}. All rights reserved.
          </p>
          <p className="text-sm text-white/50 flex items-center gap-1.5">
            Made with care in Kenya
          </p>
        </div>
      </div>
    </footer>
  )
}