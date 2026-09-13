import type { FaqItem } from '../components/Faq'
import type { Pillar } from '../components/Pillars'

export type Programme = { tag: string; title: string; body: string; cta: string }

export const SCHOOL_PROGRAMMES: readonly Programme[] = [
  {
    tag: 'SCHOOL STUDENTS · YEAR LONG',
    title: 'Odyssey',
    body: 'Our flagship year-long communicative English programme for school students. Delivered on campus across a full academic calendar, with baseline assessment, term-wise reporting and an optional Cambridge assessment at the close.',
    cta: 'Enquire about Odyssey',
  },
  {
    tag: 'TEACHING FACULTY',
    title: 'Vista',
    body: 'Faculty coaching and facilitation on communication skills for school teaching staff. Built for teachers who deliver in English every day and want their own delivery to be sharper.',
    cta: 'Enquire about Vista',
  },
  {
    tag: 'FREE · 3 DAYS',
    title: 'Project Punch',
    body: 'A free three-day spoken English programme for teachers and student teachers. Our contribution to the teaching community, run at no cost to the institution or the participant.',
    cta: 'Enquire about Project Punch',
  },
  {
    tag: 'SCHOOL CHILDREN · ONLINE OR ON-CAMPUS',
    title: 'Nurture',
    body: 'A specialised English course designed exclusively for school children, focused on building comfort and confidence with the language early, through activity rather than instruction.',
    cta: 'Enquire about Nurture',
  },
  {
    tag: 'TRAINER DEVELOPMENT',
    title: 'Train the Trainers',
    body: 'A dedicated stream that develops teaching faculty into confident communication trainers, so institutions can sustain the practice internally after our programme ends.',
    cta: 'Enquire about this',
  },
  {
    tag: 'LEADERSHIP',
    title: 'Train the Leaders',
    body: 'Communication and presentation coaching for principals, heads of department and senior school leadership who present to parents, boards and the wider community.',
    cta: 'Enquire about this',
  },
]

export const INDIVIDUAL_PROGRAMMES: readonly Programme[] = [
  {
    tag: 'JOB ASPIRANTS · ONLINE OR OFFLINE',
    title: 'Aspirant Q',
    body: 'Targeted English coaching for students and professionals preparing for interviews and placements. Covers HR interview practice, impromptu speaking, spot-the-error and written responses.',
    cta: 'Join this course',
  },
  {
    tag: 'ADULTS · ONLINE OR OFFLINE',
    title: 'Proficient Communicator',
    body: 'A dedicated spoken English course for adults who want to hold their own in meetings, on calls and in front of a room — regardless of where their schooling left off.',
    cta: 'Join this course',
  },
  {
    tag: 'WORKING PROFESSIONALS',
    title: 'Project Elite',
    body: 'Professional English skills for career progression. Business writing, presentation structure, meeting language and the confidence to speak up when it matters.',
    cta: 'Join this course',
  },
  {
    tag: 'ALL AGES',
    title: 'In-house courses',
    body: 'Courses crafted to meet the needs of learners at every stage of life, run at our own centre in small batches with a fixed start date each month.',
    cta: 'See upcoming batches',
  },
  {
    tag: 'CORPORATE TEAMS',
    title: 'Corporate sessions',
    body: 'Customised training designed around the goals, roles and vocabulary of your team. Scheduled around your working hours, on site or over video.',
    cta: 'Request a proposal',
  },
  {
    tag: 'CERTIFICATION',
    title: 'Cambridge English assessment',
    body: 'Preparation and assessment through Cambridge English, giving learners a credential recognised by universities and employers internationally.',
    cta: 'Ask about certification',
  },
]

export const ENGAGEMENT: readonly Pillar[] = [
  {
    num: '01',
    title: 'Enquiry',
    body: 'You share the batch size, year group and calendar. We respond with a written proposal within two working days.',
  },
  {
    num: '02',
    title: 'Baseline',
    body: 'Learners are assessed on speaking and writing before session one, so batches are grouped by level, not by age.',
  },
  {
    num: '03',
    title: 'Delivery',
    body: 'Trainers run sessions on your campus, inside your timetable, with attendance and progress logged each session.',
  },
  {
    num: '04',
    title: 'Report',
    body: 'A closing report covers level movement against the baseline, with individual learner notes for your records.',
  },
]

export const FAQ: readonly FaqItem[] = [
  {
    q: 'How long is a typical programme?',
    a: 'Odyssey runs across a full academic year. In-house and individual courses commonly run 50 hours. Crash courses run three days to two weeks depending on the target.',
  },
  {
    q: 'What does a session actually look like?',
    a: 'Sessions are built on speaking time. Learners work through role-plays, impromptu speaking, structured presentations and written tasks, with correction given in the moment rather than at the end.',
  },
  {
    q: 'Do you provide materials?',
    a: 'Yes. Workbooks and session material are provided as part of the programme fee, and are written for the level of the batch rather than pulled from a generic textbook.',
  },
  {
    q: 'What are the fees?',
    a: 'Fees depend on batch size, duration and location. Institutional pricing is quoted per learner. Send an enquiry and we will provide a written quotation.',
  },
  {
    q: 'Do you travel outside Tamil Nadu?',
    a: 'We deliver across Tamil Nadu on campus, and anywhere in India or abroad over video. Travel outside the state is possible for larger institutional engagements.',
  },
]
