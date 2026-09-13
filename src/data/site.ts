export const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
] as const

export const CONTACT = {
  phones: ['97502 07464', '87785 93044'],
  email: 'hr@beehivecommunicationclub.com',
  address: ['Church Road, Sivagami Puram,', 'Virudhunagar, Tamil Nadu, India'],
} as const

export const SOCIALS = ['Fb', 'Ig', 'In', 'Yt'] as const

export const STATS = [
  { value: '120+', label: 'Institutions partnered' },
  { value: '50+', label: 'Active client organisations' },
  { value: '100+', label: 'Trainers on roll' },
  { value: '10L+', label: 'Learners reached' },
] as const

export const FORMATS = [
  { title: 'One-on-one coaching', body: 'A trainer assigned to a single learner, built around their specific gaps.' },
  { title: 'Group coaching', body: 'Small batches that give every learner a live audience to practise in front of.' },
  { title: 'Year-long training', body: 'Structured programmes running across a full academic year inside schools.' },
  { title: 'Crash courses', body: 'Short, intensive blocks for interviews, placements and close deadlines.' },
  { title: 'Cambridge certification', body: 'Internationally recognised assessment through Cambridge English.' },
] as const

export const CLIENT_LOGOS = [1, 2, 3, 4, 5].map(
  (n) => `https://beehivecommunicationclub.com/assets/images/logo-${n}.jpeg`,
)

/** Image host for the existing site's media library. */
export const IMG = 'https://beehivecommunicationclub.com/assets'
