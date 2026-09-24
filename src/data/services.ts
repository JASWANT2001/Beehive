// Content from beehivecommunicationclub.com/programmesoffered.php and each programme's own page.

/** Used by ProgrammeGrid. */
export type Programme = { tag: string; title: string; body: string; cta: string }

export type Course = {
  id: string
  name: string
  /** Short labels shown beside the name: audience, mode, duration. */
  facts: readonly string[]
  summary: string
  /** Key modules or topics, shown as chips. */
  topics: readonly string[]
}

export type Group = {
  id: string
  kicker: string
  title: string
  intro?: string
  courses: readonly Course[]
}

export const GROUPS: readonly Group[] = [
  {
    id: 'schools',
    kicker: 'FOR SCHOOLS, COLLEGES & TEACHERS',
    title: 'Programmes for institutions',
    courses: [
      {
        id: 'odyssey',
        name: 'Odyssey',
        facts: ['School & college', 'Year-long'],
        summary: 'Year-long communicative English: 17 modules and 25+ activities.',
        topics: ['Phonetics', 'Public Speaking', 'Interview Techniques', 'Presentation Skills'],
      },
      {
        id: 'vista',
        name: 'Vista',
        facts: ['School teachers', 'Daily training'],
        summary: 'Daily training and personal coaching for teachers’ confidence and fluency.',
        topics: ['English', 'Effective Communication', 'Presentation Skills'],
      },
      {
        id: 'project-punch',
        name: 'Project Punch',
        facts: ['Teachers & B.Ed.', 'Free', '3 days'],
        summary: 'Free spoken English with IDHAYAM and Rotary Club of Virudhunagar. 100+ programmes run.',
        topics: ['Spoken English', 'Held 3× a month'],
      },
    ],
  },
  {
    id: 'in-house',
    kicker: 'BEEHIVE IN-HOUSE COURSES',
    title: 'English for every stage of life',
    intro: 'Expert instructors and personalised training, online or offline.',
    courses: [
      {
        id: 'nurture',
        name: 'Nurture',
        facts: ['School students', '50 hours'],
        summary: 'A fun, interactive English foundation course for kids.',
        topics: ['Phonetics', 'Reading', 'Speaking & Listening', 'Grammar', 'Confidence'],
      },
      {
        id: 'aspirant-q',
        name: 'Aspirant Q',
        facts: ['College students', '50 hours'],
        summary: 'Grammar, interviews and academic communication for aspirants.',
        topics: ['Grammar', 'Mock Interviews', 'Presentations', 'Academic Writing', 'Soft Skills'],
      },
      {
        id: 'proficient-communicator',
        name: 'Proficient Communicator',
        facts: ['Adults', '50 hours'],
        summary: 'Spoken English for fluency and confidence at work and in life.',
        topics: ['Fluency', 'Pronunciation', 'Conversation', 'Vocabulary'],
      },
      {
        id: 'project-elite',
        name: 'Project Elite',
        facts: ['Professionals', 'Online'],
        summary: 'Advanced business English to elevate your career.',
        topics: ['Business Communication', 'Presentations', 'Negotiation', 'Meetings', 'Business Writing'],
      },
    ],
  },
  {
    id: 'corporate',
    kicker: 'FOR COMPANIES',
    title: 'Corporate sessions',
    courses: [
      {
        id: 'corporate-sessions',
        name: 'Corporate Training',
        facts: ['Corporate teams', 'Customised'],
        summary: 'Customised sessions that build skills and a positive workplace.',
        topics: [
          'Communication',
          'Public Speaking',
          'Business Storytelling',
          'Presentations',
          'Personality Development',
          'Behavioural Training',
          'Leadership',
          'DEI',
          'Human Rights',
        ],
      },
    ],
  },
]
