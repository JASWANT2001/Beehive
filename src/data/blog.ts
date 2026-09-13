import { IMG } from './site'

export const POSTS = [
  {
    img: `${IMG}/image/bccbanner1.jpeg`,
    meta: 'FOR TEACHERS',
    title: 'Grouping a class by level, not by age',
    body: 'Why a baseline assessment before the first session changes the outcome of an entire year-long programme.',
  },
  {
    img: `${IMG}/image/bccbanner2.jpeg`,
    meta: 'INTERVIEW PREPARATION',
    title: 'Answering the HR question you did not prepare for',
    body: 'A simple three-part structure our Aspirant Q learners use when the question is unfamiliar.',
  },
  {
    img: `${IMG}/image/bccbanner3.jpeg`,
    meta: 'CLASSROOM PRACTICE',
    title: 'Correcting a learner without shutting them down',
    body: 'In-the-moment correction works only if the learner keeps speaking afterwards. How our trainers manage it.',
  },
  {
    img: `${IMG}/image/bccbanner4.jpeg`,
    meta: 'CERTIFICATION',
    title: 'What a Cambridge English result actually tells a recruiter',
    body: 'Reading the levels, and why an external credential carries weight that an internal certificate does not.',
  },
  {
    img: `${IMG}/image/bccbanner5.jpeg`,
    meta: 'PUBLIC SPEAKING',
    title: 'Gavel Clubs: giving young speakers a real audience',
    body: 'Practice without an audience is rehearsal. What changes when students speak in front of their peers weekly.',
  },
  {
    img: `${IMG}/image/bccbanner6.jpeg`,
    meta: 'FROM BUZZ 11.0',
    title: 'What eleven years of Buzz taught us about student writing',
    body: 'Patterns we see repeatedly in contest entries, and the two habits that separate the finalists.',
  },
] as const
