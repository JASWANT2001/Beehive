import { IMG } from './site'

export const DOORS = [
  {
    to: '/services#schools',
    who: 'FOR SCHOOLS & COLLEGES',
    title: 'Institutional programmes',
    body: 'Delivered on your campus, inside your timetable, with baseline assessment and a written closing report.',
    items: [
      'Odyssey — year-long, school students',
      'Nurture — school children',
      'Vista — teaching faculty',
      'Project Punch — free, three days',
    ],
    go: 'SEE INSTITUTIONAL PROGRAMMES',
  },
  {
    to: '/services#individuals',
    who: 'FOR INDIVIDUALS',
    title: 'Courses you can join',
    body: 'Small batches at our Virudhunagar centre or online, with a fixed start date each month.',
    items: [
      'Aspirant Q — interviews and placements',
      'Proficient Communicator — adults',
      'Project Elite — working professionals',
      'Cambridge English certification',
    ],
    go: 'SEE OPEN COURSES',
  },
  {
    to: '/contact',
    who: 'FOR COMPANIES',
    title: 'Corporate training',
    body: "Sessions written around your team's roles and vocabulary, scheduled around your working hours.",
    items: [
      'Customised syllabus',
      'On site or over video',
      'Batches of 8 to 15',
      'Progress reported to L&D',
    ],
    go: 'REQUEST A PROPOSAL',
  },
] as const

export const RIBBON = [
  { title: 'Cambridge English', note: 'Authorised training partner' },
  { title: 'Gavel Clubs', note: 'Global public speaking platform' },
  { title: '120+ institutions', note: 'Schools, colleges and companies' },
  { title: 'India Book of Records', note: 'Recognised record attempt, 2025' },
] as const

export const PROGRAMME_INDEX = [
  { no: '01', name: 'Odyssey', aud: 'School students', fmt: 'Year-long, on campus' },
  { no: '02', name: 'Vista', aud: 'Teaching faculty', fmt: 'Coaching & facilitation' },
  { no: '03', name: 'Project Punch', aud: 'Teachers & student teachers', fmt: 'Three days, free of cost' },
  { no: '04', name: 'Nurture', aud: 'School children', fmt: 'Online or on campus' },
  { no: '05', name: 'In-house courses', aud: 'Learners of all ages', fmt: 'At our centre, small batches' },
  { no: '06', name: 'Aspirant Q', aud: 'Job aspirants', fmt: 'Online or offline' },
  { no: '07', name: 'Proficient Communicator', aud: 'Adults', fmt: 'Online or offline' },
  { no: '08', name: 'Project Elite', aud: 'Working professionals', fmt: 'Career-focused' },
  { no: '09', name: 'Corporate sessions', aud: 'Company teams', fmt: 'Customised, on site or video' },
] as const

export const CREDENTIALS = [
  {
    img: `${IMG}/images/certifi300.png`,
    title: 'International certification',
    body: 'An official training partner of Cambridge English. We also facilitate Gavel Clubs, a global public speaking platform for young speakers.',
  },
  {
    img: `${IMG}/images/world300.png`,
    title: 'Record-setting attempts',
    body: 'An annual World or Indian record attempt, built to motivate language skills and push students past their own limits.',
  },
  {
    img: `${IMG}/images/buzz300.png`,
    title: 'Buzz literary conference',
    body: 'Students, educators and industry experts together for contests, sessions and awards that build champion writers and speakers.',
  },
] as const

export const EDIT_FIGS = [
  { value: '120+', label: 'Institutions partnered' },
  { value: '50+', label: 'Active client organisations' },
  { value: '100+', label: 'Trainers on roll' },
  { value: '10L+', label: 'Learners reached' },
] as const

export const LATEST = [
  {
    img: `${IMG}/image/bccbanner1.jpeg`,
    meta: "DIRECTOR'S COLUMN",
    title: 'Beyond words: why the pause is the hardest thing to teach',
    body: 'Fluency is not speed. A note on why we resist silence, and what changes when we stop resisting it.',
  },
  {
    img: `${IMG}/image/bccbanner3.jpeg`,
    meta: 'FOR TEACHERS',
    title: 'Grouping a class by level, not by age',
    body: 'Why a baseline assessment before session one changes the outcome of an entire year-long programme.',
  },
] as const
