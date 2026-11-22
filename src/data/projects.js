export const projects = [
  {
    id: '01',
    slug: 'dribbble-clone',
    name: 'Dribbble Clone',
    kind: 'Design-sharing platform',
    year: '2025',
    poster: 'clay',
    image: 'dribble-project.jpg',
    imageAlt:
      'Dribbble Clone wordmark set in a dark serif on a warm cream background.',
    mediaSpan: 6,
    flip: false,
    emphasis: 'lead',
    status: 'Completed and deployed',
    description:
      'A design-sharing platform inspired by Dribbble. I worked on the UI and frontend development, alongside Supabase integration for real-time functionality, authentication, and security.',
    note: {
      label: 'Development consideration',
      text: 'Handling Supabase and network failures with useful user-facing messages and safe server-side logs.',
    },
    attribution: 'Forked project — presented here with my own contributions described honestly.',
    tech: ['TypeScript', 'Supabase', 'Frontend development'],
    repo: 'https://github.com/gabrialislambabar/DribbbleClone',
    live: null,
  },
  {
    id: '02',
    slug: 'leads-tracker',
    name: 'Leads Tracker',
    kind: 'Chrome extension',
    year: '2025',
    poster: 'moss',
    image: 'leadTracker-project.jpg',
    imageAlt:
      'LeadTracker extension popup on a dark desk scene, showing a URL field, Save button, and one saved link.',
    mediaSpan: 6,
    flip: true,
    emphasis: 'lead',
    status: 'Personal tool',
    description:
      'A Chrome extension that tracks the time spent on websites and saves website links for later reference.',
    note: null,
    attribution: null,
    tech: ['JavaScript', 'Chrome extension development', 'Browser APIs'],
    repo: 'https://github.com/gabrialislambabar/leads-tracker-chrome-extension',
    live: null,
  },
];
