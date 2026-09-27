/**
 * Impact figures - single source of truth for all reported statistics.
 * Update values here to reflect changes across the entire website.
 * These figures are sourced from Moirai's existing website reporting.
 */
export const impactFigures = {
  prisonsReached: 2,
  womenEmpowered: 1000,
  seniorsSupported: 600,
  childrenImpacted: 500,
} as const;

export const impactNotes =
  'Impact figures shown are based on Moirai\'s current reported program figures.';

export const impactStats = [
  {
    value: impactFigures.prisonsReached,
    label: 'Prisons Reached',
    suffix: '',
    icon: 'Building2',
  },
  {
    value: impactFigures.womenEmpowered,
    label: 'Women Empowered',
    suffix: '+',
    icon: 'Users',
  },
  {
    value: impactFigures.seniorsSupported,
    label: 'Seniors Supported',
    suffix: '+',
    icon: 'Heart',
  },
  {
    value: impactFigures.childrenImpacted,
    label: 'Children Impacted',
    suffix: '+',
    icon: 'Baby',
  },
] as const;