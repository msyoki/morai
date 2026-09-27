/**
 * Navigation configuration - single source of truth for all nav links.
 */
export const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Our Work', href: '/programs' },
  { label: 'Impact', href: '/impact' },
  { label: 'Stories', href: '/stories' },
  { label: 'Get Involved', href: '/get-involved' },
] as const;

export const footerNav = {
  about: [
    { label: 'Our Story', href: '/about#story' },
    { label: 'Mission & Vision', href: '/about#mission' },
    { label: 'Our Values', href: '/about#values' },
    { label: 'Team', href: '/about#team' },
  ],
  programs: [
    { label: 'Dignity & Health', href: '/programs#dignity-health' },
    { label: 'Hope for Tomorrow', href: '/programs#hope-tomorrow' },
    { label: 'Care & Compassion', href: '/programs#care-compassion' },
  ],
  getInvolved: [
    { label: 'Donate', href: '/donate' },
    { label: 'Volunteer', href: '/volunteer' },
    { label: 'Partner', href: '/partnerships' },
  ],
};

export const contactInfo = {
  email: 'moiraicom2021@gmail.com',
  phone: '(+254) 793 770 755',
  location: '4584-00523 Nairobi, Kenya',
};

export const socialLinks = [
  { label: 'Facebook', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'Twitter', href: '#' },
] as const;

export const missionStatement =
  'Restoring dignity, providing care, and supporting vulnerable incarcerated communities and families affected by incarceration.';

export const siteName = 'Moirai';