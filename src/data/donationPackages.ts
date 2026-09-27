/**
 * Donation packages - verified from Moirai's existing website.
 * Source: https://moirai.odoo.com/
 */
export const donationPackages = [
  {
    id: 'hygiene-pack',
    name: 'Hygiene Pack',
    amount: 15,
    cadence: 'monthly' as const,
    description:
      'Essential sanitation and basic wellness supplies for one woman at Langata Prison.',
    items: [
      'Monthly Hygiene kits',
      'Sanitization materials',
      'Basic wellness essentials',
      'Core prison outreach',
    ],
    icon: 'Droplets',
    highlight: false,
  },
  {
    id: 'senior-care-pack',
    name: 'Senior Care Pack',
    amount: 25,
    cadence: 'monthly' as const,
    description:
      'Flexible funding for critical self-care, comfort items, and medical aids for senior citizens.',
    items: [
      'Premium self-care supplies',
      'Health & comfort resources',
      'Flexible emergency funding',
      'Dedicated volunteer backing',
    ],
    icon: 'Heart',
    highlight: false,
  },
  {
    id: 'holistic-child-pack',
    name: 'Holistic Child Pack',
    amount: 45,
    cadence: 'monthly' as const,
    description:
      'Comprehensive nutrition, learning materials, and developmental supplies for a child.',
    items: [
      'Holistic child resources',
      'Education & learning tools',
      'Long-term growth support',
      'Deep community advocacy',
    ],
    icon: 'Baby',
    highlight: true,
  },
] as const;

export const suggestedCustomAmounts = [15, 25, 50, 100] as const;

export const currencies = [
  { code: 'USD', symbol: '$', name: 'US Dollar' },
  { code: 'KES', symbol: 'KSh', name: 'Kenyan Shilling' },
  { code: 'EUR', symbol: '€', name: 'Euro' },
  { code: 'GBP', symbol: '£', name: 'British Pound' },
] as const;