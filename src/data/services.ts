/* ----------------------------------------------------------------
   The five services. The services page lists them one line each;
   each has a short spec-sheet page at /services/<id>.
   Kept deliberately tight — a page should read in under a minute.
   ---------------------------------------------------------------- */

export type Service = {
  id: string
  name: string
  kicker: string
  /** One line. Used on the list page and as the page's standfirst. */
  lead: string
  /** Spec rows shown beside the title. */
  facts: readonly { label: string; value: string }[]
  /** One short paragraph. That is the whole body. */
  summary: string
  points: readonly string[]
}

export const SERVICES: readonly Service[] = [
  {
    id: 'one-on-one',
    name: 'One-on-one coaching',
    kicker: 'PERSONAL COACHING',
    lead: 'A dedicated trainer for a single learner.',
    facts: [
      { label: 'Format', value: 'One-to-one' },
      { label: 'Mode', value: 'Online or offline' },
      { label: 'Pace', value: 'Set by you' },
      { label: 'For', value: 'Students, aspirants, professionals' },
    ],
    summary:
      'One learner, one trainer, and a plan built around the gaps that actually matter for you. We assess where you are first, then build every session around that — online, or at our Virudhunagar centre.',
    points: [
      'A trainer assigned to you alone',
      'A starting assessment, so we teach the gap',
      'Scheduling that fits around work or school',
    ],
  },
  {
    id: 'group-coaching',
    name: 'Group coaching',
    kicker: 'SMALL BATCHES',
    lead: 'Small batches, and a live audience to speak in front of.',
    facts: [
      { label: 'Format', value: 'Small batches' },
      { label: 'Practice', value: 'Live audience' },
      { label: 'Mode', value: 'Online or offline' },
      { label: 'For', value: 'Batches, teams, clubs' },
    ],
    summary:
      'Speaking improves fastest when there are people in the room. Batches stay small enough that everybody speaks in every session, with peer feedback built into the format.',
    points: [
      'Small batches — everyone speaks, every session',
      'Peer feedback built into the format',
      'Gavel Club format for public speaking',
    ],
  },
  {
    id: 'year-long',
    name: 'Year-long training programmes',
    kicker: 'FOR INSTITUTIONS',
    lead: 'Full academic-year programmes inside schools and colleges.',
    facts: [
      { label: 'Runs for', value: 'One academic year' },
      { label: 'Modules', value: '17' },
      { label: 'Activities', value: '25+' },
      { label: 'For', value: 'Schools and colleges' },
    ],
    summary:
      'We run the programme on your campus across the whole academic year. Communication improves when it is practised every week, for long enough that the nervousness wears off.',
    points: [
      '17 modules across the academic year',
      '25+ classroom activities',
      'A written closing report for the institution',
    ],
  },
  {
    id: 'crash-courses',
    name: 'Crash courses',
    kicker: 'INTENSIVE PREP',
    lead: 'Short, intensive preparation when the date is already fixed.',
    facts: [
      { label: 'Length', value: 'Days to weeks' },
      { label: 'Built for', value: 'A fixed date' },
      { label: 'Mode', value: 'Online or offline' },
      { label: 'For', value: 'Students, aspirants, teachers' },
    ],
    summary:
      'Placement season, an interview next month, a competition already on the calendar. Crash formats compress the essentials into a few focused weeks.',
    points: [
      'Interview and placement preparation',
      'Grammar and academic English intensives',
      'Mock rounds with feedback',
    ],
  },
  {
    id: 'certification',
    name: 'Cambridge English certification',
    kicker: 'ASSESSMENT & CERTIFICATION',
    lead: 'Internationally recognised assessment and certification.',
    facts: [
      { label: 'Partner', value: 'Cambridge English' },
      { label: 'Status', value: 'Authorised training partner' },
      { label: 'Recognition', value: 'Worldwide' },
      { label: 'For', value: 'Students and professionals' },
    ],
    summary:
      'A certificate that recruiters and universities already know how to read. We prepare learners for the assessments and certify the level they actually reach — not a number we invented.',
    points: [
      'Authorised Cambridge English training partner',
      'Preparation mapped to the assessment',
      'Can be added to any Beehive course',
    ],
  },
]

export const SERVICE_BY_ID: Record<string, Service> = Object.fromEntries(
  SERVICES.map((s) => [s.id, s]),
)
