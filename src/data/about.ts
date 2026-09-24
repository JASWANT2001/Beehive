import { IMG } from './site'

// Content from beehivecommunicationclub.com/aboutus.php, arranged for our own layout.

export const ABOUT_FACTS = [
  { label: 'Started', value: 'August 2012' },
  { label: 'We train', value: 'Students & professionals' },
  { label: 'We teach', value: 'English & soft skills' },
] as const

export const FOUNDER = {
  img: `${IMG}/image/aboutus_profile_picture.jpg`,
  name: 'Mr. A. Shyamraj',
  role: 'Proprietor & Head – Training and Development',
  belief: 'Everybody can speak and make an impact in this World.',
  body: 'A passion for language and language-based training drives him to lead Beehive.',
} as const

export const MISSION =
  'To bring effective communication to everyone and help each person express themselves with confidence.'

// The three "independent" outcomes named in the mission.
export const MISSION_OUTCOMES = ['Independent thinkers', 'Independent writers', 'Independent speakers'] as const

export const VISION = [
  'Make communication skills a tasty dish for all.',
  'Build every participant’s confidence and conversation skills.',
] as const
