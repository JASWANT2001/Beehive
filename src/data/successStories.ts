
// Content for the dedicated Success Stories page — the credibility
// page parents and prospective institutions land on. Placeholder
// figures and quotes in the organisation's own voice; replace with
// verified numbers and named permissions before launch.

import { IMG } from './site'

/** Photograph behind the figures — the record day, our clearest proof. */
export const BACKDROP = `${IMG}/images/g3.png`

export const HERO_STATS = [
  { value: '120+', label: 'Institutions', note: 'Schools and colleges partnered' },
  { value: '10L+', label: 'Learners reached', note: 'Students, teachers and teams' },
  { value: '400+', label: 'Cambridge certified', note: 'Assessed and certified learners' },
  { value: '11', label: 'Years of Buzz', note: 'Our annual literary conference' },
] as const

export type Achievement = {
  tag: string
  stat: string
  title: string
  body: string
}

export const ACHIEVEMENTS: readonly Achievement[] = [
  {
    tag: 'PLACEMENTS',
    stat: '85%',
    title: 'Aspirant Q learners placed within a term',
    body: 'Crash-course learners preparing for interviews and campus placements, tracked across the batches that completed the full course.',
  },
  {
    tag: 'CERTIFICATION',
    stat: '400+',
    title: 'Cambridge English certifications issued',
    body: 'Learners assessed and certified through our authorised Cambridge English partnership — a result recruiters and universities recognise directly.',
  },
  {
    tag: 'BUZZ FINALISTS',
    stat: '60+',
    title: 'Schools represented at Buzz finals',
    body: 'Across eleven editions of our annual literary conference, writing and speaking finalists have come from schools across the district and beyond.',
  },
  {
    tag: 'RECORD DAY',
    stat: '500+',
    title: 'Students in the India Book of Records attempt',
    body: 'A single-day public speaking record, attempted and set by our own students — organised, trained and delivered end to end by Beehive.',
  },
  {
    tag: 'FACULTY REACH',
    stat: '100+',
    title: 'Teachers trained through Vista and Project Punch',
    body: 'School faculty and B.Ed. student-teachers coached in classroom communication, many going on to run their own confident classrooms.',
  },
  {
    tag: 'YEARS RUNNING',
    stat: '12+',
    title: 'Years of year-long school programmes',
    body: 'Odyssey has run continuously since our founding — the same 17-module structure, refined every year against what actually moves a classroom.',
  },
] as const
