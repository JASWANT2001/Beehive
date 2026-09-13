import { IMG } from './site'
import type { FaqItem } from '../components/Faq'
import type { Pillar } from '../components/Pillars'

export const AT_A_GLANCE = [
  { label: 'Founded', value: '2016' },
  { label: 'Head office', value: 'Virudhunagar' },
  { label: 'Trainers on roll', value: '100+' },
  { label: 'Institutions served', value: '120+' },
  { label: 'Learners reached', value: '10 lakh+' },
  { label: 'Delivery', value: 'On-campus & online' },
  { label: 'Assessment partner', value: 'Cambridge English' },
] as const

export const STAGES: readonly Pillar[] = [
  {
    num: '01',
    title: 'Assess',
    body: 'Every learner is placed through a spoken and written baseline before the first session, so the batch is grouped by level rather than by age.',
  },
  {
    num: '02',
    title: 'Design',
    body: 'The syllabus is written for that batch — the vocabulary, situations and role-plays reflect what those learners actually need to say.',
  },
  {
    num: '03',
    title: 'Deliver',
    body: 'Sessions are built on speaking time, not lecture time. Every learner speaks in every session, with correction given in the moment.',
  },
  {
    num: '04',
    title: 'Certify',
    body: 'Progress is re-measured against the baseline, and learners can sit a Cambridge English assessment for an external credential.',
  },
]

export const MILESTONES = [
  {
    year: '2016',
    title: 'Beehive is founded',
    body: 'The organisation begins in Virudhunagar with a single spoken English batch and one trainer.',
  },
  {
    year: '2019',
    title: 'Odyssey enters schools',
    body: 'The year-long communicative English programme is adopted as part of the academic calendar by partner schools.',
  },
  {
    year: '2021',
    title: 'Cambridge partnership',
    body: 'Beehive becomes an authorised training partner of Cambridge English Assessment, enabling internationally recognised certification.',
  },
  {
    year: '2023',
    title: 'Train the Trainers',
    body: 'A dedicated stream is launched to develop teaching faculty, extending our reach from students to the people who teach them.',
  },
  {
    year: '2024',
    title: 'Buzz 11.0',
    body: 'The eleventh edition of our annual literary conference brings together students, educators and industry experts.',
  },
  {
    year: '2025',
    title: 'India Book of Records',
    body: 'A record attempt in public speaking is recognised, with participation drawn from across our partner institutions.',
  },
] as const

export const LEADERSHIP = [
  {
    img: `${IMG}/image/aboutus_profile_picture.jpg`,
    name: 'A. Shyamraj',
    role: 'Founder & Director',
    body: "Leads programme design and the organisation's training philosophy.",
  },
  {
    img: `${IMG}/images/testimonials_man1.png`,
    name: 'Name',
    role: 'Head of Training',
    body: 'Oversees trainer development and quality across all live batches.',
  },
  {
    img: `${IMG}/images/testimonials_woman3.png`,
    name: 'Name',
    role: 'Academic Coordinator',
    body: 'Owns curriculum, assessment design and Cambridge examination readiness.',
  },
  {
    img: `${IMG}/images/testimonials_man1.png`,
    name: 'Name',
    role: 'Institutional Partnerships',
    body: 'Single point of contact for schools, colleges and corporate clients.',
  },
] as const

export const FAQ: readonly FaqItem[] = [
  {
    q: 'Do you deliver on our campus or at your centre?',
    a: 'Both. School and college programmes are almost always delivered on campus, inside the timetable. Individual and adult courses run at our Virudhunagar centre or online, whichever suits the learner.',
  },
  {
    q: 'What batch sizes do you work with?',
    a: 'Group sessions typically run at 20 to 40 learners for school programmes and 8 to 15 for corporate batches. One-on-one coaching is available where a learner needs focused attention.',
  },
  {
    q: 'Is the Cambridge certification compulsory?',
    a: 'No. It is offered as an optional external credential at the end of a programme. Many institutions choose it because it gives parents and recruiters an independent measure of progress.',
  },
  {
    q: 'How is progress reported back to the institution?',
    a: 'Every batch begins with a baseline assessment and closes with a re-assessment. Institutions receive a written report covering attendance, level movement and individual learner notes.',
  },
  {
    q: 'Can the syllabus be customised?',
    a: "Yes. Corporate sessions and in-house courses are written around your team's roles and vocabulary. School programmes follow the Odyssey or Nurture structure, adapted to the year group.",
  },
]
