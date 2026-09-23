import { IMG } from './site'

// Content from beehivecommunicationclub.com/aboutus.php, arranged for our own layout.

export const ABOUT_FACTS = [
  { label: 'Started', value: 'August 2012' },
  { label: 'We train', value: 'School students, college students & corporate resources' },
  { label: 'We teach', value: 'Communicative English & other Soft Skills' },
] as const

export const FOUNDER = {
  img: `${IMG}/image/aboutus_profile_picture.jpg`,
  name: 'Mr. A. Shyamraj',
  role: 'Proprietor & Head – Training and Development',
  belief: 'Everybody can speak and make an impact in this World.',
  body: 'With his enormous passion towards language and language-based training, Mr. A. Shyamraj leads Beehive in the belief that everybody can speak and make an impact in this World.',
} as const

export const MISSION =
  'To take the art of effective communication to every individual of the society, help him realize his abilities to express efficiently and to present independent thinkers, independent writers and independent speakers to the country.'

// The three "independent" outcomes named in the mission.
export const MISSION_OUTCOMES = ['Independent thinkers', 'Independent writers', 'Independent speakers'] as const

export const VISION = [
  'To take the practices of communication skills as a tasty dish to all and keep the minds open for exposures in that field.',
  'To create a positive difference in the confidence level and the conversational ability of the participants.',
] as const
