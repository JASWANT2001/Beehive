import { IMG } from './site'

// Content from beehivecommunicationclub.com/contactus.php.

export const FORM_TO = 'hr@beehivecommunicationclub.com'

export const WAYS = [
  {
    kind: 'CALL',
    lines: [
      { text: '+91 87785 93044', href: 'tel:+918778593044' },
      { text: '+91 97502 07464', href: 'tel:+919750207464' },
    ],
  },
  {
    kind: 'EMAIL',
    lines: [
      { text: 'a.shyamaraj@beehivecommunicationclub.com', href: 'mailto:a.shyamaraj@beehivecommunicationclub.com' },
      { text: 'hr@beehivecommunicationclub.com', href: 'mailto:hr@beehivecommunicationclub.com' },
    ],
  },
  {
    kind: 'VISIT',
    lines: [
      { text: 'Church Road, Sivagami Puram,', href: 'https://maps.google.com/?q=Church+Road,+Sivagami+Puram,+Virudhunagar,+Tamil+Nadu' },
      { text: 'Virudhunagar, Tamil Nadu, India', href: 'https://maps.google.com/?q=Church+Road,+Sivagami+Puram,+Virudhunagar,+Tamil+Nadu' },
    ],
  },
  {
    kind: 'WEB',
    lines: [{ text: 'www.beehivecommunicationclub.com', href: 'https://beehivecommunicationclub.com' }],
  },
] as const

export const MAP_EMBED =
  'https://www.google.com/maps?q=Church+Road,+Sivagami+Puram,+Virudhunagar,+Tamil+Nadu,+India&output=embed'

export const VIDEO = {
  href: 'https://www.youtube.com/watch?v=MdP8MuSdZhY&t=67s',
  img: `${IMG}/images/contact980.png`,
} as const
