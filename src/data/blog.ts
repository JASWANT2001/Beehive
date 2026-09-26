import { IMG } from './site'

export const POSTS = [
  {
    img: `${IMG}/image/bccbanner1.jpeg`,
    meta: 'FOR TEACHERS',
    title: 'Grouping a class by level, not by age',
    body: [
      'Why a baseline assessment before the first session changes the outcome of an entire year-long programme.',
      'Two students in the same grade can be years apart in spoken English. Teach them together at one pace and one of them is bored while the other is lost — and neither improves much. Before Odyssey begins in a school, we run every student through a short spoken assessment and group the batches by what we find, not by the class register.',
      'It costs us an extra week at the start of the year. It is the single biggest reason the programme works by the end of it.',
    ],
  },
  {
    img: `${IMG}/image/bccbanner2.jpeg`,
    meta: 'INTERVIEW PREPARATION',
    title: 'Answering the HR question you did not prepare for',
    body: [
      'A simple three-part structure our Aspirant Q learners use when the question is unfamiliar.',
      'Most interview coaching prepares you for the ten questions everyone expects. The one that actually derails candidates is the eleventh — the one nobody rehearsed. We teach a structure instead of a script: state the situation in one line, say what you did about it, say what it changed. It fits almost any question, and it stops the long silence while you search for a memorised answer that does not exist.',
    ],
  },
  {
    img: `${IMG}/image/bccbanner3.jpeg`,
    meta: 'CLASSROOM PRACTICE',
    title: 'Correcting a learner without shutting them down',
    body: [
      'In-the-moment correction works only if the learner keeps speaking afterwards. How our trainers manage it.',
      'Correct every error as it happens and a nervous speaker stops talking within a minute — the fear of the next correction becomes louder than whatever they were trying to say. We train our staff to let the sentence finish, note what needs fixing, and address it after the thought is complete. The correction still happens. It just does not happen mid-sentence, where it costs the most.',
    ],
  },
  {
    img: `${IMG}/image/bccbanner4.jpeg`,
    meta: 'CERTIFICATION',
    title: 'What a Cambridge English result actually tells a recruiter',
    body: [
      'Reading the levels, and why an external credential carries weight that an internal certificate does not.',
      'A certificate we issue ourselves says a learner met our standard. A Cambridge English result says they met an international one, measured the same way for every candidate everywhere. That difference is exactly what a recruiter or an admissions officer is looking for — a number they did not have to take our word for. It is why we became an authorised training partner rather than building our own scale.',
    ],
  },
  {
    img: `${IMG}/image/bccbanner5.jpeg`,
    meta: 'PUBLIC SPEAKING',
    title: 'Gavel Clubs: giving young speakers a real audience',
    body: [
      'Practice without an audience is rehearsal. What changes when students speak in front of their peers weekly.',
      'A speech read alone in a room teaches memorisation, not communication. The Gavel Club format gives every speaker a timer, a real audience of peers, and a structured evaluation after — the same three things a professional speaker deals with, just at a smaller scale. Students who go through it stop treating a room full of people as something to survive.',
    ],
  },
  {
    img: `${IMG}/image/bccbanner6.jpeg`,
    meta: 'FROM BUZZ 11.0',
    title: 'What eleven years of Buzz taught us about student writing',
    body: [
      'Patterns we see repeatedly in contest entries, and the two habits that separate the finalists.',
      'Across eleven editions of Buzz, the entries that reach the final round almost always share two habits: the writer read their own piece aloud before submitting it, and they cut at least one paragraph they were proud of because it did not serve the piece. Neither is a talent. Both are teachable, and both show up in our writing modules now.',
    ],
  },
] as const
