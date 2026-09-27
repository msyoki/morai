/**
 * Stories data structure.
 *
 * IMPORTANT: No beneficiary names, quotes, or success stories have been
 * fabricated. Where actual content is unavailable, clearly labelled
 * placeholders are used so real stories can be added later without
 * changing component logic.
 */
export const storyCategories = [
  { id: 'impact-stories', label: 'Impact Stories' },
  { id: 'community', label: 'Community' },
  { id: 'updates', label: 'Updates' },
  { id: 'events', label: 'Events' },
] as const;

export const stories = [
  {
    id: 'story-1',
    title: 'A Sister\'s Love: How Moirai Began',
    category: 'impact-stories',
    categoryLabel: 'Impact Stories',
    excerpt:
      'After visiting her brother in prison, founder Clarice Wambui witnessed firsthand the severe loss of basic human dignity experienced by incarcerated individuals. That moment sparked a movement.',
    body: 'Moirai was born out of a sister\'s love and a profound calling to bring hope where it is often forgotten. Believing that every human being deserves respect and care, Clarice started Moirai to provide a lifeline of support to those navigating life inside maximum security facilities. Over the last five years, our mission has grown into a powerful movement of restoration across Langata Maximum Women\'s Prison and Nairobi West Men\'s Prison.',
    status: 'published' as const,
    date: '2021',
    image: '/images/team/clarice-wambui.jpg',
    placeholder: false,
  },
  {
    id: 'story-2',
    title: 'Breaking Cycles of Isolation',
    category: 'impact-stories',
    categoryLabel: 'Impact Stories',
    excerpt: 'How monthly support is rebuilding broken spirits one kit at a time.',
    body: '[PLACEHOLDER: Impact story to be added. This section will feature a verified story about how specific support has restored dignity to individuals and families. No fabricated stories will be used.]',
    status: 'placeholder' as const,
    date: '',
    image: '/images/stories/placeholder.jpg',
    placeholder: true,
  },
  {
    id: 'story-3',
    title: 'Community Voices',
    category: 'community',
    categoryLabel: 'Community',
    excerpt: 'Updates and reflections from the communities Moirai serves.',
    body: '[PLACEHOLDER: Community story to be added. This section will feature verified voices and perspectives from the communities Moirai works alongside.]',
    status: 'placeholder' as const,
    date: '',
    image: '/images/stories/placeholder.jpg',
    placeholder: true,
  },
  {
    id: 'story-4',
    title: 'Program Updates',
    category: 'updates',
    categoryLabel: 'Updates',
    excerpt: 'Latest news and developments from Moirai\'s programs.',
    body: '[PLACEHOLDER: Program update to be added. This section will feature verified news about ongoing programs and their development.]',
    status: 'placeholder' as const,
    date: '',
    image: '/images/stories/placeholder.jpg',
    placeholder: true,
  },
  {
    id: 'story-5',
    title: 'Community Events',
    category: 'events',
    categoryLabel: 'Events',
    excerpt: 'Moments from gatherings, outreach, and community moments.',
    body: '[PLACEHOLDER: Event story to be added. This section will feature verified documentation of Moirai events and community gatherings.]',
    status: 'placeholder' as const,
    date: '',
    image: '/images/stories/placeholder.jpg',
    placeholder: true,
  },
] as const;