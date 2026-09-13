import { IMG } from './site'

export const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'events', label: 'Events' },
  { id: 'records', label: 'Records' },
  { id: 'sessions', label: 'Sessions' },
  { id: 'corporate', label: 'Corporate' },
] as const

export type CategoryId = (typeof CATEGORIES)[number]['id']

export type Shot = {
  id: string
  cat: Exclude<CategoryId, 'all'>
  src: string
  alt: string
  title: string
  caption: string
}

export const SHOTS: readonly Shot[] = [
  { id: 'buzz-11', cat: 'events', src: `${IMG}/images/g1.png`, alt: 'Buzz 11.0', title: 'Buzz 11.0', caption: 'Annual literary conference · Virudhunagar · Nov 2024' },
  { id: 'n-care', cat: 'corporate', src: `${IMG}/images/g2.png`, alt: 'N Care programme', title: 'N Care', caption: 'Dr. Rela Institute and Medical Centre · Chennai' },
  { id: 'record-holders', cat: 'records', src: `${IMG}/images/g3.png`, alt: 'World record holders', title: 'Record holders', caption: 'India Book of Records · Jan 2025' },
  { id: 'odyssey-session', cat: 'sessions', src: `${IMG}/image/bccbanner1.jpeg`, alt: 'Session in progress', title: 'Odyssey session', caption: 'Partner school · Virudhunagar district' },
  { id: 'award', cat: 'events', src: `${IMG}/image/bccbanner2.jpeg`, alt: 'Award ceremony', title: 'Award for Excellence', caption: 'Beehive Communication Club · 2024' },
  { id: 'train-trainers', cat: 'sessions', src: `${IMG}/image/bccbanner3.jpeg`, alt: 'Train the Trainers', title: 'Train the Trainers', caption: 'Faculty development cohort · 2023' },
  { id: 'train-leaders', cat: 'events', src: `${IMG}/image/bccbanner4.jpeg`, alt: 'Train the Leaders', title: 'Train the Leaders', caption: 'School leadership cohort · 2024' },
  { id: 'spotlight', cat: 'sessions', src: `${IMG}/image/bccbanner5.jpeg`, alt: 'Spotlight', title: 'Spotlight', caption: 'Learner showcase · 2023' },
  { id: 'record-attempt', cat: 'records', src: `${IMG}/image/bccbanner6.jpeg`, alt: 'Record attempt', title: 'Record attempt', caption: 'Public speaking · Virudhunagar' },
  { id: 'corporate-session', cat: 'corporate', src: `${IMG}/image/bccbanner8.jpeg`, alt: 'Corporate session', title: 'Corporate session', caption: 'Customised team training' },
  { id: 'nurture-batch', cat: 'sessions', src: `${IMG}/image/bccbanner1.jpeg`, alt: 'Nurture batch', title: 'Nurture batch', caption: 'School children · on-campus' },
  { id: 'buzz-contests', cat: 'events', src: `${IMG}/images/buzz300.png`, alt: 'Buzz conference', title: 'Buzz contests', caption: 'Writing and speaking finals' },
]
