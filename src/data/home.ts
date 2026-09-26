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
  { title: 'One-on-one coaching', body: 'A dedicated trainer for one learner.', to: '/services/one-on-one' },
  { title: 'Group coaching', body: 'Small batches with a live audience.', to: '/services/group-coaching' },
  { title: 'Year-long training programmes', body: 'Full academic-year programmes in schools.', to: '/services/year-long' },
  { title: 'Crash courses', body: 'Short, intensive prep for interviews and placements.', to: '/services/crash-courses' },
  { title: 'Cambridge English certification', body: 'Internationally recognised certification.', to: '/services/certification' },
] as const

export const VIDEO = {
  href: 'https://www.youtube.com/watch?v=MdP8MuSdZhY&t=67s',
  img: `${IMG}/images/about-2.png`,
} as const

export const EVENTS = [
  { img: `${IMG}/images/Corp-event5.jpg`, meta: '31 JAN 2025 · VIRUDHUNAGAR', title: 'India Book of Record' },
  { img: `${IMG}/images/Corp-event4.jpg`, meta: 'NOV 2024 · VIRUDHUNAGAR', title: 'Buzz 11.0' },
  { img: `${IMG}/images/Corporate.jpg`, meta: 'BCC', title: 'Award of Excellence' },
  { img: `${IMG}/images/Corp-event3.jpg`, meta: 'BCC', title: 'Train the Leaders' },
  { img: `${IMG}/images/Corp-event2.jpg`, meta: 'BCC', title: 'Train the Trainers' },
  { img: `${IMG}/images/Corp-event1.jpg`, meta: 'BCC', title: 'Spotlight' },
] as const

export const SUCCESS = [
  { value: '120+', label: 'Institutions', note: 'Schools and colleges partnered' },
  { value: '50+', label: 'Current clients', note: 'Running programmes today' },
  { value: '100+', label: 'Trainers', note: 'Across our network' },
  { value: '10L+', label: 'Beneficiaries reached', note: 'Learners, teachers and teams' },
] as const

export const AWARD = {
  img: `${IMG}/images/g3.png`,
  kicker: 'WORLD RECORD',
  title: 'India Book of Records',
  note: '31 January 2025 · Virudhunagar',
  badge: 'Official training partner of Cambridge English',
} as const

// Five curated frames for the home page mosaic. The first is the feature tile.
export const GALLERY = [
  { img: `${IMG}/images/g1.png`, tag: 'Events', title: 'Buzz 11.0', caption: 'Annual literary conference · Virudhunagar' },
  { img: `${IMG}/images/g3.png`, tag: 'Records', title: 'World record holders', caption: 'India Book of Records · 2025' },
  { img: `${IMG}/images/g2.png`, tag: 'Corporate', title: 'N Care', caption: 'Dr. Rela Institute · Chennai' },
  { img: `${IMG}/image/bccbanner3.jpeg`, tag: 'Sessions', title: 'Train the Trainers', caption: 'Faculty development cohort' },
  { img: `${IMG}/image/bccbanner5.jpeg`, tag: 'Sessions', title: 'Spotlight', caption: 'Learner showcase' },
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
    img: `${IMG}/images/testimonials_man2.png`,
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
  {
    img: `${IMG}/images/testimonials_woman1.png`,
    name: 'Mrs. Kalpana',
    place: 'Parent, Virudhunagar',
    body: 'My daughter went from refusing to speak in class to representing her school at Buzz. I did not expect a year-long programme to change her this much — it changed how she carries herself, not just how she speaks.',
  },
  {
    img: `${IMG}/images/testimonials_woman2.png`,
    name: 'Priya S.',
    place: 'Odyssey, Class XI',
    body: 'I used to write my speech and read it out. Now I can stand up with just a topic and speak for two minutes without panicking. The impromptu speech sessions did that.',
  },
] as const
