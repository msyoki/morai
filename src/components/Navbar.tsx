import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Heart, ArrowRight } from 'lucide-react'
import { navLinks, siteName } from '../data/navigation'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-border'
          : 'bg-transparent'
        }
      `}
    >
      <div className="container-custom flex items-center justify-between h-16 sm:h-20">
        <Link
          to="/"
          className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2 rounded"
          aria-label="Moirai - Home"
        >
          <img
            src="/images/moirai-logo-no-bg.png"
            alt="Moirai"
            className="h-14 sm:h-16 w-auto max-w-[240px] object-contain"
            loading="eager"
            width="240"
            height="60"
          />
        </Link>

        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Primary"
        >
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href
            return (
              <Link
                key={link.href}
                to={link.href}
                className={`
                  relative text-sm font-sans font-medium transition-colors duration-200
                  py-1
                  ${isActive ? 'text-gold-alt' : 'text-navy/80 hover:text-gold-alt'}
                `}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-gold-alt" aria-hidden="true" />
                )}
              </Link>
            )
          })}
        </nav>

        <div className="hidden md:block">
          <Link to="/donate" className="btn-primary">
            Donate
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden p-2 rounded text-navy hover:bg-navy/5 transition-colors focus:outline-none focus:ring-2 focus:ring-navy"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" aria-hidden="true" />
          ) : (
            <Menu className="w-6 h-6" aria-hidden="true" />
          )}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`
          md:hidden fixed inset-0 top-16 sm:top-20 bg-white z-40
          transform transition-transform duration-300 ease-out
          ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
        aria-hidden={!isMobileMenuOpen}
      >
        <nav className="container-custom py-8 flex flex-col gap-2" aria-label="Mobile">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href
            return (
              <Link
                key={link.href}
                to={link.href}
                className={`
                  flex items-center justify-between py-4 px-2 text-lg font-display
                  border-b border-border
                  ${isActive ? 'text-gold-alt' : 'text-navy'}
                `}
              >
                {link.label}
                <ArrowRight className="w-5 h-5 text-text-muted" aria-hidden="true" />
              </Link>
            )
          })}

          <div className="mt-6 flex flex-col gap-3">
            <Link to="/donate" className="btn-primary w-full">
              Donate
            </Link>
            <Link to="/volunteer" className="btn-secondary w-full">
              Volunteer
            </Link>
            <Link to="/partnerships" className="btn-ghost w-full">
              Partner With Us
            </Link>
          </div>

          <div className="mt-8 pt-6 border-t border-border">
            <a
              href="mailto:moiraicom2021@gmail.com"
              className="block text-sm text-text-muted hover:text-gold-alt transition-colors"
            >
              moiraicom2021@gmail.com
            </a>
            <a
              href="tel:+254793770755"
              className="block text-sm text-text-muted hover:text-gold-alt transition-colors mt-1"
            >
              (+254) 793 770 755
            </a>
            <p className="text-sm text-text-muted mt-2">
              4584-00523 Nairobi, Kenya
            </p>
          </div>
        </nav>
      </div>
    </header>
  )
}