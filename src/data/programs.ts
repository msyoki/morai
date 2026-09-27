/**
 * Program data - verified Moirai activities only.
 * Source: https://moirai.odoo.com/
 * Each program includes: what we do, who it serves, why it matters, how supporters can help.
 */
export const programs = [
  {
    id: 'dignity-health',
    name: 'Dignity & Health',
    description:
      'Providing essential hygiene, sanitation, and restorative support for women navigating life behind bars.',
    icon: 'Droplets',
    whatWeDo:
      'We directly deliver monthly hygiene and sanitation kits to women incarcerated at Langata Maximum Women\'s Prison. Each kit contains essential personal care items, sanitization materials, and basic wellness essentials that are often inaccessible inside prison facilities.',
    whoWeServe: 'Women incarcerated at Langata Maximum Women\'s Prison and other facilities where Moirai operates.',
    whyItMatters:
      'Access to basic hygiene and sanitation is a fundamental human right. Inside prison environments, the lack of these essentials compounds the loss of dignity and contributes to isolation and poor health. By restoring access to these basics, we affirm the humanity of every woman we serve.',
    howSupportersHelp:
      'A monthly contribution of $15 covers one complete hygiene kit, ensuring a woman receives consistent, dignified support throughout the year.',
    ctaLabel: 'Support Hygiene Kits',
    ctaAmount: 15,
  },
  {
    id: 'hope-tomorrow',
    name: 'Hope for Tomorrow',
    description:
      'Delivering holistic supplies and educational materials to support innocent children affected by parental incarceration.',
    icon: 'Sun',
    whatWeDo:
      'We provide comprehensive care packages to children whose parents are incarcerated. These packages include nutritional support, learning materials, and developmental supplies designed to offer stability during a difficult period.',
    whoWeServe: 'Children affected by parental incarceration in communities where Moirai operates.',
    whyItMatters:
      'Children should not suffer the consequences of their parents\' incarceration. Without support, these children face stigma, material hardship, and emotional trauma. Our holistic approach ensures they receive the care, nutrition, and educational resources needed for healthy development.',
    howSupportersHelp:
      'A monthly contribution of $45 funds a complete holistic child pack, covering nutrition, learning materials, and developmental resources.',
    ctaLabel: 'Support a Child',
    ctaAmount: 45,
  },
  {
    id: 'care-compassion',
    name: 'Care & Compassion',
    description:
      'Offering specialized self-care supplies and comfort resources to vulnerable elderly individuals in maximum security.',
    icon: 'HeartHandshake',
    whatWeDo:
      'We deliver specialized comfort supplies and self-care resources to elderly inmates in maximum security facilities. Recognizing that older incarcerated individuals face unique challenges, we provide items that support health, comfort, and dignity in aging.',
    whoWeServe: 'Vulnerable elderly individuals incarcerated in maximum security prisons.',
    whyItMatters:
      'Elderly incarcerated individuals are among the most isolated populations within prison systems. Many lack family support on the outside and face declining health with limited access to appropriate care. Our program ensures they are not forgotten in their final years.',
    howSupportersHelp:
      'A monthly contribution of $25 provides premium self-care supplies, health and comfort resources, and flexible emergency funding for seniors.',
    ctaLabel: 'Support Seniors',
    ctaAmount: 25,
  },
] as const;