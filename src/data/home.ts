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
    'In the last 3 years, I have been attracted by speakers with pauses. Fluency, according to many non-native speakers of English, means speaking fast. I had that understanding on fluency too. Later, I realized that fluency is not connected to the speed of delivery.',
    'Experts state that fluency is the result of the effective handling of 3 components termed accuracy, rate and prosody. Accuracy is the using of right words. Rate refers to the right speed in which every word uttered is heard and identified by the listeners. Prosody often indicates the expression used to speak. Paradoxically, to conduct these components beautifully and to bring in fluency, powerful speakers use pauses extraordinarily.',
    'I read that we tend to avoid pauses, because we feel that the audience would think that we had forgotten something. We may not be comfortable hearing the heart pounding when we pause. The very look of the audience when we go silent disturbs us. When we realize that our rightly timed intentional pauses truly make the audience feel that we are thoughtful and credible, we would change our minds.',
    'We all may need to learn that pauses can help us when we enter something distinctively important in the speech, when we want the message to sink in, when we move to a new topic/segment and particularly, when we expect the audience to accept and reflect.',
    'Great messages are conveyed between words. Let us practise and try bringing in meaningful pauses to our speeches. Best wishes!',
  ],
} as const

export const SERVICES = [
  { title: 'One-on-one coaching', body: 'A trainer assigned to a single learner, built around their specific gaps.' },
  { title: 'Group coaching', body: 'Small batches that give every learner a live audience to practise in front of.' },
  { title: 'Year-long training programmes', body: 'Structured programmes running across a full academic year inside schools.' },
  { title: 'Crash courses', body: 'Short, intensive blocks for interviews, placements and close deadlines.' },
  { title: 'Certification through Cambridge English Assessments', body: 'Internationally recognised assessment through Cambridge English.' },
] as const

export const VIDEO = {
  href: 'https://www.youtube.com/watch?v=MdP8MuSdZhY&t=67s',
  img: `${IMG}/images/about-2.png`,
} as const

export const PROGRAMMES = [
  { tag: 'SCHOOL STUDENTS', title: 'Odyssey', to: '/services#odyssey', body: 'Our year-long programme on communicative English for school students.' },
  { tag: 'FOR SCHOOLS', title: 'Vista', to: '/services#vista', body: 'Faculty coaching and facilitation on communication skills (for schools).' },
  { tag: 'FREE · 3 DAYS', title: 'Project Punch', to: '/services#project-punch', body: 'A free 3-day spoken English programme for teachers and student teachers.' },
  { tag: 'EVERY STAGE OF LIFE', title: 'In-house courses', to: '/services#in-house', body: 'Our in-house courses are meticulously crafted to meet the unique needs of learners at every stage of life.' },
  { tag: 'ONLINE / OFFLINE', title: 'Nurture', to: '/services#nurture', body: 'Nurture is our specialised English course designed exclusively for school kids — a fun, engaging and interactive English foundation course.' },
  { tag: 'ONLINE / OFFLINE', title: 'Aspirant Q', to: '/services#aspirant-q', body: 'Aspirant Q is our targeted English course designed for aspiring professionals and students gearing up to enhance their grammar, interview skills and academic communication.' },
  { tag: 'ONLINE / OFFLINE', title: 'Proficient Communicator', to: '/services#proficient-communicator', body: 'Our dedicated spoken English course designed specifically for adults seeking to improve their fluency, pronunciation and conversational confidence.' },
  { tag: 'PROFESSIONALS', title: 'Project Elite', to: '/services#project-elite', body: 'Elevate your career: professional English skills for success.' },
  { tag: 'CORPORATE TEAMS', title: 'Corporate sessions', to: '/services#corporate', body: 'Customised training sessions designed to meet the needs of your corporate team.' },
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
    body: 'Beehive is an Official Training Partner of Cambridge English. We facilitate Gavel Clubs, a global public speaking platform for young speakers.',
  },
  {
    img: `${IMG}/images/world300.png`,
    title: 'World records in public speaking & communication',
    body: 'Beehive hosts an annual World or Indian Record aiming to motivate language skills, facilitate English learning and inspire students to push beyond their limits.',
  },
  {
    img: `${IMG}/images/buzz300.png`,
    title: 'BUZZ — the annual literary conference of Beehive',
    body: 'A premier event that brings together students, educators, and industry experts for contests, sessions, and awards. Empowering students to become champion writers and speakers.',
  },
] as const

export const TESTIMONIALS = [
  {
    img: `${IMG}/images/testimonials_man1.png`,
    name: 'Mr. Sundar',
    place: 'Kanchipuram',
    body: 'Thank you for the wonderful session, the story writing activity was a good learning experience for me. We created the on spot assignment with your help. The entire package including interview preparation, spot the error and impromptu speech was very helpful.',
  },
  {
    img: `${IMG}/images/testimonials_man1.png`,
    name: 'Mr. Riyaz',
    place: 'Dubai',
    body: "Dear Beehive team, I have gotten the most valuable time and wonderful support from you & Mr. Manickavasagam. I have learned a lot. He is so responsive & always conscious of my improvement. He didn't hesitate to correct my mistakes. He has given 100% effort for all classes & given easy examples to understand & speak. Mainly, he never fails to encourage me, always. All your training is so useful for me. I will try to keep practising this. I'm so grateful to the Beehive Team & Mr. Manickavasagam.",
  },
  {
    img: `${IMG}/images/testimonials_woman3.png`,
    name: 'Ms. Deepalakshmi',
    place: '50-hour course',
    body: 'In the 50-hour Beehive Communication Club class, I learned many things, like words and idioms, grammar etc. which will help me for now and in the future also. My trainer, Sowmiya ma’am, was kind and friendly to the students. She taught with great patience and trained me personally for two days on the HR interview process. Thanks to her training, I performed well in my interview and was selected. Thank you, Shyam sir, for arranging this valuable class, and many thanks to my trainer. Have a blissful day.',
  },
] as const
