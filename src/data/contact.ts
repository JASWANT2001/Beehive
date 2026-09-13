import type { FaqItem } from '../components/Faq'

export const ENQUIRY_TYPES = [
  'School programme — Odyssey or Nurture',
  'Teacher training — Vista or Project Punch',
  'Job aspirants — Aspirant Q',
  'Adults — Proficient Communicator',
  'Professionals — Project Elite',
  'Corporate sessions',
  'Cambridge English certification',
  'Careers at Beehive',
  'Something else',
] as const

export const BATCH_SIZES = [
  'Individual learner',
  'Under 20',
  '20 – 50',
  '50 – 150',
  'More than 150',
] as const

export const DESKS = [
  {
    tag: 'INSTITUTIONS',
    title: 'Schools and colleges',
    body: 'Programme proposals, batch scheduling, on-campus delivery and closing reports.',
    contact: '97502 07464',
  },
  {
    tag: 'CORPORATE',
    title: 'Companies and teams',
    body: 'Customised sessions, timings around working hours, and on-site or online delivery.',
    contact: '87785 93044',
  },
  {
    tag: 'CAREERS',
    title: 'Join our trainer panel',
    body: 'We hire communication trainers across Tamil Nadu. Send your profile and a short speaking sample.',
    contact: 'hr@beehivecommunicationclub.com',
  },
] as const

export const FAQ: readonly FaqItem[] = [
  {
    q: 'How quickly will I hear back?',
    a: 'Enquiries are answered within one working day. If you have asked for a proposal, expect the written document within two working days of the first conversation.',
  },
  {
    q: 'Can we arrange a demonstration session?',
    a: 'Yes. For institutional enquiries we can run a demonstration session with one class or one batch before you commit to a full programme.',
  },
  {
    q: 'Do you work with institutions outside Tamil Nadu?',
    a: 'We deliver on campus across Tamil Nadu, and anywhere in India or overseas over video. Travel beyond the state is arranged for larger engagements.',
  },
  {
    q: 'I want to join a course as an individual. Where do I start?',
    a: 'Select your course under enquiry type above and send the form. We will share the next batch start date, timings and fee structure.',
  },
]
