import { IMG } from './site'

// Content mirrors the sections of beehivecommunicationclub.com/index.php, in order.

export const RIBBON = [
  { title: 'Cambridge English', note: 'Official training partner' },
  { title: 'Gavel Clubs', note: 'Global public speaking platform' },
  { title: '120+ institutions', note: 'Partnered with Beehive' },
  { title: 'India Book of Records', note: '31 January 2025, Virudhunagar' },
] as const

export const DIRECTOR = {
  name: 'A. Shyamraj',
  role: "Director's Message · Beehive Communication Club",
  title: 'Beyond Words',
  quote: '“The most precious things in speech are the pauses.” — Sir Ralph Richardson',
  img: `${IMG}/image/aboutus_profile_picture.jpg`,
  paras: [
    'Many of us think fluency means speaking fast. It doesn’t. Fluency comes from accuracy (the right words), rate (a pace listeners can follow) and prosody (expression) — and great speakers use pauses to hold all three together.',
    'We avoid pauses because silence feels uncomfortable. But well-timed pauses make us sound thoughtful and credible — especially before a key point, when a message needs to sink in, or when moving to a new topic.',
    'Let us practise bringing meaningful pauses to our speeches. Best wishes!',
  ],
} as const

export const SERVICES = [
  { title: 'One-on-one coaching', body: 'A dedicated trainer for one learner.' },
  { title: 'Group coaching', body: 'Small batches with a live audience.' },
  { title: 'Year-long training programmes', body: 'Full academic-year programmes in schools.' },
  { title: 'Crash courses', body: 'Short, intensive prep for interviews and placements.' },
  { title: 'Certification through Cambridge English Assessments', body: 'Internationally recognised certification.' },
] as const

export const VIDEO = {
  href: 'https://www.youtube.com/watch?v=MdP8MuSdZhY&t=67s',
  img: `${IMG}/images/about-2.png`,
} as const

export const PROGRAMMES = [
  { tag: 'SCHOOL STUDENTS', title: 'Odyssey', to: '/services#odyssey', body: 'Year-long communicative English for students.' },
  { tag: 'FOR SCHOOLS', title: 'Vista', to: '/services#vista', body: 'Communication coaching for school faculty.' },
  { tag: 'FREE · 3 DAYS', title: 'Project Punch', to: '/services#project-punch', body: 'Free spoken English for teachers and student teachers.' },
  { tag: 'EVERY STAGE OF LIFE', title: 'In-house courses', to: '/services#in-house', body: 'Courses crafted for learners at every stage of life.' },
  { tag: 'ONLINE / OFFLINE', title: 'Nurture', to: '/services#nurture', body: 'A fun, interactive English foundation course for kids.' },
  { tag: 'ONLINE / OFFLINE', title: 'Aspirant Q', to: '/services#aspirant-q', body: 'Grammar, interview and academic English for aspirants.' },
  { tag: 'ONLINE / OFFLINE', title: 'Proficient Communicator', to: '/services#proficient-communicator', body: 'Spoken English for adults: fluency and confidence.' },
  { tag: 'PROFESSIONALS', title: 'Project Elite', to: '/services#project-elite', body: 'Professional English to elevate your career.' },
  { tag: 'CORPORATE TEAMS', title: 'Corporate sessions', to: '/services#corporate', body: 'Customised training for your corporate team.' },
] as const

export const EVENTS = [
  { img: `${IMG}/images/Corp-event5.jpg`, meta: '31 JAN 2025 · VIRUDHUNAGAR', title: 'India Book of Record' },
  { img: `${IMG}/images/Corp-event4.jpg`, meta: 'NOV 2024 · VIRUDHUNAGAR', title: 'Buzz 11.0' },
  { img: `${IMG}/images/Corporate.jpg`, meta: 'BCC', title: 'Award of Excellence' },
  { img: `${IMG}/images/Corp-event3.jpg`, meta: 'BCC', title: 'Train the Leaders' },
  { img: `${IMG}/images/Corp-event2.jpg`, meta: 'BCC', title: 'Train the Trainers' },
  { img: `${IMG}/images/Corp-event1.jpg`, meta: 'BCC', title: 'Spotlight' },
] as const

export const SUCCESS = [
  { value: '120+', label: 'Institutions' },
  { value: '50+', label: 'Current clients' },
  { value: '100+', label: 'Trainers' },
  { value: '10L+', label: 'Beneficiaries reached' },
] as const

export const GALLERY = [
  { img: `${IMG}/images/g1.png`, title: 'Buzz 11.0', caption: 'Virudhunagar' },
  { img: `${IMG}/images/g2.png`, title: 'N Care', caption: 'Dr. Rela Institute and Medical Centre, Chennai' },
  { img: `${IMG}/images/g3.png`, title: 'World Record Holder', caption: 'India Book of Records' },
] as const

export const CREDENTIALS = [
  {
    img: `${IMG}/images/certifi300.png`,
    title: 'Beehive with international certifiers',
    body: 'Official Cambridge English training partner and Gavel Clubs facilitator.',
  },
  {
    img: `${IMG}/images/world300.png`,
    title: 'World records in public speaking & communication',
    body: 'An annual record event that inspires students to push their limits.',
  },
  {
    img: `${IMG}/images/buzz300.png`,
    title: 'BUZZ — the annual literary conference of Beehive',
    body: 'Contests, sessions and awards for students, educators and experts.',
  },
] as const

export const TESTIMONIALS = [
  {
    img: `${IMG}/images/testimonials_man1.png`,
    name: 'Mr. Sundar',
    place: 'Kanchipuram',
    body: 'The story writing activity was a good learning experience. The entire package including interview preparation, spot the error and impromptu speech was very helpful.',
  },
  {
    img: `${IMG}/images/testimonials_man1.png`,
    name: 'Mr. Riyaz',
    place: 'Dubai',
    body: "I have gotten the most valuable time and wonderful support from you & Mr. Manickavasagam. He has given 100% effort for all classes, and he never fails to encourage me. I'm so grateful to the Beehive Team.",
  },
  {
    img: `${IMG}/images/testimonials_woman3.png`,
    name: 'Ms. Deepalakshmi',
    place: '50-hour course',
    body: 'My trainer, Sowmiya ma’am, taught with great patience and trained me personally on the HR interview process. Thanks to her training, I performed well in my interview and was selected.',
  },
] as const
