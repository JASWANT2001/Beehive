import { IMG } from './site'

export const PROGRAMMES = [
  { tag: 'SCHOOL STUDENTS', title: 'Odyssey', body: 'Our year-long communicative English programme, delivered inside schools across a full academic calendar.' },
  { tag: 'TEACHING FACULTY', title: 'Vista', body: 'Faculty coaching and facilitation on communication skills, designed for school teaching staff.' },
  { tag: 'FREE · 3 DAYS', title: 'Project Punch', body: 'A free three-day spoken English programme for teachers and student teachers.' },
  { tag: 'ALL AGES', title: 'In-house courses', body: 'Courses crafted around the needs of learners at every stage of life, run at our own centre.' },
  { tag: 'SCHOOL CHILDREN', title: 'Nurture', body: 'A specialised English course for school children, available both online and on-campus.' },
  { tag: 'JOB ASPIRANTS', title: 'Aspirant Q', body: 'Targeted coaching for students and professionals preparing for interviews and placements.' },
  { tag: 'ADULTS', title: 'Proficient Communicator', body: 'A dedicated spoken English course for adults who want to speak with confidence at work.' },
  { tag: 'PROFESSIONALS', title: 'Project Elite', body: 'Professional English skills for people who want communication to move their career forward.' },
  { tag: 'CORPORATE', title: 'Corporate sessions', body: 'Customised training built around the goals, roles and vocabulary of your own team.' },
] as const

export const ACCREDITATIONS = [
  {
    img: `${IMG}/images/certifi300.png`,
    alt: 'Cambridge English certification',
    title: 'International certification',
    body: 'An official training partner of Cambridge English. We also facilitate Gavel Clubs, a global public speaking platform for young speakers.',
  },
  {
    img: `${IMG}/images/world300.png`,
    alt: 'Record attempts',
    title: 'Record-setting attempts',
    body: 'An annual World or Indian record attempt, built to motivate language skills and push students past their own limits.',
  },
  {
    img: `${IMG}/images/buzz300.png`,
    alt: 'Buzz literary conference',
    title: 'Buzz — literary conference',
    body: 'Students, educators and industry experts together for contests, sessions and awards that build champion writers and speakers.',
  },
] as const

export const EVENTS = [
  { yr: 'Jan 2025', title: 'India Book of Records', place: 'Virudhunagar' },
  { yr: 'Nov 2024', title: 'Buzz 11.0', place: 'Virudhunagar' },
  { yr: '2024', title: 'Award for Excellence', place: 'Beehive Communication Club' },
  { yr: '2024', title: 'Train the Leaders', place: 'Leadership cohort' },
  { yr: '2023', title: 'Train the Trainers', place: 'Trainer development' },
  { yr: '2023', title: 'Spotlight', place: 'Beehive Communication Club' },
] as const

export const TESTIMONIALS = [
  {
    quote: 'The story writing activity was a real learning experience. The whole package — interview preparation, spot the error, impromptu speech — was genuinely useful.',
    img: `${IMG}/images/testimonials_man1.png`,
    name: 'Mr. Sundar',
    place: 'Kanchipuram',
  },
  {
    quote: 'My trainer was responsive and always conscious of my improvement. He never hesitated to correct my mistakes, gave easy examples, and never failed to encourage me.',
    img: `${IMG}/images/testimonials_man1.png`,
    name: 'Mr. Riyaz',
    place: 'Dubai',
  },
  {
    quote: 'In the 50-hour class I learned words, idioms and grammar. My trainer coached me personally on the HR interview process — I performed well and was selected.',
    img: `${IMG}/images/testimonials_woman3.png`,
    name: 'Ms. Deepalakshmi',
    place: 'Programme graduate',
  },
] as const

export const CREDBOX = [
  { label: 'Established', value: '2016' },
  { label: 'Delivery', value: 'On-campus & online' },
  { label: 'Learners', value: 'Age 8 to adult' },
  { label: 'Head office', value: 'Virudhunagar, TN' },
] as const
