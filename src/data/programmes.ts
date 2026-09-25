import { IMG } from './site'

// Detail pages for each programme. Copy is taken from the matching
// beehivecommunicationclub.com/programmesoffered-*.php page.

export type ProgrammeItem = { label?: string; text: string }

export type ProgrammeSection = {
  title: string
  /** 'cards' shows numbered cards, 'checks' a tick list, 'chips' short tags. */
  style: 'cards' | 'checks' | 'chips'
  items: readonly ProgrammeItem[]
}

export type ProgrammePage = {
  /** URL slug — matches the course / group id in data/services.ts. */
  slug: string
  name: string
  kicker: string
  tagline: string
  banner: string
  img: string
  intro: readonly string[]
  /** Quick facts shown in the side panel. */
  facts: readonly { label: string; value: string }[]
  highlights?: readonly { value: string; label: string }[]
  sections?: readonly ProgrammeSection[]
  /** Slugs of the courses this page leads to (in-house hub). */
  courses?: readonly string[]
  closing?: string
  source: string
}

export const PROGRAMME_PAGES: readonly ProgrammePage[] = [
  {
    slug: 'odyssey',
    name: 'Odyssey',
    kicker: 'FOR SCHOOL & COLLEGE STUDENTS',
    tagline: 'A Year-Long Communicative English Programme for School Students',
    banner: `${IMG}/image/odyssey_banner.jpg`,
    img: `${IMG}/image/odyssey_profile_picture.jpg`,
    intro: [
      'Odyssey is designed to empower students to become independent listeners, readers, and speakers through a structured and immersive learning experience.',
      'With 17 comprehensive modules (including Phonetics, Public Speaking, etc.) and 25+ engaging activities (both inside and outside the classroom), the programme has been highly appreciated by client institutions and the parent community.',
      'The programme is also available for college students, with additional professional skill development in Interview Techniques, Emotional Intelligence, Presentation Skills, and more.',
    ],
    facts: [
      { label: 'For', value: 'School students (also for colleges)' },
      { label: 'Duration', value: 'Year-long' },
      { label: 'Structure', value: '17 modules · 25+ activities' },
    ],
    highlights: [
      { value: '17', label: 'Comprehensive modules' },
      { value: '25+', label: 'Activities inside and outside the classroom' },
      { value: '1 yr', label: 'Structured, immersive programme' },
    ],
    sections: [
      {
        title: 'For college students, additionally',
        style: 'chips',
        items: [
          { text: 'Interview Techniques' },
          { text: 'Emotional Intelligence' },
          { text: 'Presentation Skills' },
          { text: 'and more' },
        ],
      },
    ],
    source: 'programmesoffered-odyssy.php',
  },
  {
    slug: 'vista',
    name: 'VISTA',
    kicker: 'FOR SCHOOL FACULTY',
    tagline: 'Faculty Coaching and Facilitation on Communication Skills for Schools.',
    banner: `${IMG}/image/vista_banner.png`,
    img: `${IMG}/images/news-vista.png`,
    intro: [
      'VISTA is designed to empower teachers with confidence, fluency, and command in communication, enabling them to engage effectively with students.',
      'Through daily training in English, Effective Communication, Presentation Skills, and more, along with personalized coaching, VISTA helps teachers grow and transform.',
    ],
    facts: [
      { label: 'For', value: 'School teachers' },
      { label: 'Format', value: 'Daily training + personalised coaching' },
    ],
    sections: [
      {
        title: 'Daily training in',
        style: 'chips',
        items: [
          { text: 'English' },
          { text: 'Effective Communication' },
          { text: 'Presentation Skills' },
          { text: 'Personalised coaching' },
        ],
      },
    ],
    closing: 'The empowerment of teachers through VISTA leads to student excellence and parent satisfaction.',
    source: 'programmesoffered-VISTA.php',
  },
  {
    slug: 'project-punch',
    name: 'Project Punch',
    kicker: 'FOR TEACHERS & STUDENT TEACHERS',
    tagline: 'A Free 3-Day Spoken English Programme for Teachers and Student Teachers.',
    banner: `${IMG}/image/projectpunch_banner.jpg`,
    img: `${IMG}/image/project_punch_profile_picture.jpg`,
    intro: [
      'Named after the renowned English professor, Mahaguru Prof. Panchanathan (Trichy), Project Punch is a 3-day Spoken English programme conducted by Beehive in collaboration with IDHAYAM Edible Oils and Rotary Club of Virudhunagar.',
      'Designed for teachers and B.Ed. students, the programme is held three times a month, delivering highly effective results. With over 100 successful Project Punch programmes conducted, it has been recognized as a high-impact and celebrated Rotary initiative, making a significant difference across Rotary International Districts in Tamil Nadu.',
    ],
    facts: [
      { label: 'For', value: 'Teachers & B.Ed. students' },
      { label: 'Duration', value: '3 days' },
      { label: 'Fee', value: 'Free' },
      { label: 'With', value: 'IDHAYAM Edible Oils & Rotary Club of Virudhunagar' },
    ],
    highlights: [
      { value: '3', label: 'Days of spoken English' },
      { value: '3×', label: 'Held every month' },
      { value: '100+', label: 'Programmes conducted' },
    ],
    source: 'programmesoffered-PROJECTPUNCH.php',
  },
  {
    slug: 'in-house',
    name: 'In-House Courses',
    kicker: 'BEEHIVE IN-HOUSE COURSES',
    tagline: 'Customised English Programs for Every Stage of Life',
    banner: `${IMG}/images/bg-inhouse.png`,
    img: `${IMG}/images/inhouse750.png`,
    intro: [
      'Our in-house courses are meticulously crafted to meet the unique needs of learners at every stage—whether you’re a young student starting your English journey, a college aspirant preparing for academic and professional success, or a working professional seeking career advancement.',
      'With expert instructors, personalized training, and engaging lessons, our courses make mastering English an enjoyable and rewarding experience.',
    ],
    facts: [
      { label: 'For', value: 'Students, college aspirants, adults & professionals' },
      { label: 'Mode', value: 'Online / Offline' },
      { label: 'Courses', value: '4' },
    ],
    courses: ['nurture', 'aspirant-q', 'proficient-communicator', 'project-elite'],
    source: 'programmesoffered-IN-HOUSE.php',
  },
  {
    slug: 'nurture',
    name: 'Nurture',
    kicker: 'FOR SCHOOL STUDENTS · ONLINE / OFFLINE',
    tagline: 'Building Strong Foundations in English for Young Learners',
    banner: `${IMG}/images/bg-1.jpg`,
    img: `${IMG}/images/Nuture750.png`,
    intro: [
      'Nurture is a fun, engaging, and interactive English foundation course designed exclusively for school children. This program focuses on developing core language skills in a structured yet enjoyable way, ensuring that young learners build a strong linguistic foundation that supports their academic and personal growth.',
    ],
    facts: [
      { label: 'For', value: 'School students' },
      { label: 'Mode', value: 'Online / Offline' },
      { label: 'Duration', value: '50 hours' },
    ],
    sections: [
      {
        title: 'What Nurture offers',
        style: 'cards',
        items: [
          { label: 'Phonetics & Pronunciation', text: 'Helping students understand and master the sounds of English for clear and confident speech.' },
          { label: 'Reading & Comprehension', text: 'Strengthening reading fluency and comprehension skills to improve vocabulary and understanding.' },
          { label: 'Speaking & Listening', text: 'Encouraging active participation in conversations, storytelling, and discussions to boost verbal communication.' },
          { label: 'Grammar & Sentence Formation', text: 'Introducing key grammar concepts in a simple and engaging manner to enhance writing and speaking abilities.' },
          { label: 'Confidence Building Activities', text: 'Interactive exercises, games, and role-plays designed to develop communication confidence in students.' },
        ],
      },
      {
        title: 'Why choose Nurture?',
        style: 'checks',
        items: [
          { label: 'Customized Learning Approach', text: 'The course is tailored to match the child’s learning pace and style, ensuring effective progress.' },
          { label: 'Engaging & Interactive Methods', text: 'Fun-filled activities, storytelling, and interactive exercises make learning enjoyable.' },
          { label: 'Encourages Lifelong Learning', text: 'The program not only strengthens English skills but also instills a lasting love for the language.' },
        ],
      },
    ],
    closing: 'Give your child the gift of confidence and effective communication with Nurture!',
    source: 'programmesoffered-NURTURE.php',
  },
  {
    slug: 'aspirant-q',
    name: 'Aspirant Q',
    kicker: 'FOR COLLEGE STUDENTS · ONLINE / OFFLINE',
    tagline: 'Master Grammar, Interviews & Academic Communication',
    banner: `${IMG}/images/bg-asp.jpg`,
    img: `${IMG}/images/Asp750.png`,
    intro: [
      'Aspirant Q is a specialized course designed for college students and aspiring professionals looking to enhance their grammar, interview skills, and academic communication. This program equips learners with the tools they need to communicate effectively, present themselves confidently, and succeed in academic and professional environments.',
    ],
    facts: [
      { label: 'For', value: 'College students & aspiring professionals' },
      { label: 'Mode', value: 'Online / Offline' },
      { label: 'Duration', value: '50 hours' },
    ],
    sections: [
      {
        title: 'What Aspirant Q offers',
        style: 'cards',
        items: [
          { label: 'Grammar Mastery', text: 'Strengthening foundational and advanced grammar skills for clear and precise communication.' },
          { label: 'Interview Preparation', text: 'Training in self-introduction, resume-based discussions, mock interviews, and body language to ace job and academic interviews.' },
          { label: 'Public Speaking & Presentation Skills', text: 'Enhancing confidence in delivering speeches, presentations, and classroom discussions.' },
          { label: 'Professional & Academic Writing', text: 'Guidance on formal emails, reports, essays, and statements of purpose (SOPs).' },
          { label: 'Soft Skills & Communication Etiquette', text: 'Developing essential interpersonal and workplace communication skills.' },
        ],
      },
      {
        title: 'Why choose Aspirant Q?',
        style: 'checks',
        items: [
          { label: 'Customized for College & Job Aspirants', text: 'Covers all aspects of English needed for higher education and professional success.' },
          { label: 'Practical & Engaging Approach', text: 'Includes mock interviews, real-world scenarios, and interactive exercises.' },
          { label: 'Boosts Confidence for Career & Academics', text: 'Helps students make a strong impression in interviews, internships, and networking opportunities.' },
        ],
      },
    ],
    closing: 'Take the next step towards success—speak confidently, write effectively, and stand out in interviews with Aspirant Q!',
    source: 'programmesoffered-ASPIRANT-Q.php',
  },
  {
    slug: 'proficient-communicator',
    name: 'Proficient Communicator',
    kicker: 'FOR ADULTS · ONLINE / OFFLINE',
    tagline: 'Speak Fluently, Communicate Confidently, and Express Yourself with Ease',
    banner: `${IMG}/images/bg-com.png`,
    img: `${IMG}/images/Profcian750.png`,
    intro: [
      'Proficient Communicator is a dedicated spoken English program designed for adults who want to improve their fluency, pronunciation, and conversational confidence for both personal and professional interactions. Whether you’re looking to speak more clearly at work, engage in social conversations with ease, or boost your overall communication skills, this program provides the right training and support.',
    ],
    facts: [
      { label: 'For', value: 'Adults' },
      { label: 'Mode', value: 'Online / Offline' },
      { label: 'Duration', value: '50 hours' },
    ],
    sections: [
      {
        title: 'What Proficient Communicator offers',
        style: 'cards',
        items: [
          { label: 'Fluency Training', text: 'Structured exercises to help you speak naturally and confidently.' },
          { label: 'Pronunciation & Accent Neutralization', text: 'Techniques to improve clarity and articulation.' },
          { label: 'Conversational English', text: 'Real-life dialogues and discussions for everyday and workplace communication.' },
          { label: 'Vocabulary Expansion', text: 'Learn commonly used words, phrases, and expressions for effective communication.' },
          { label: 'Confidence Building Activities', text: 'Role-plays, group discussions, and interactive sessions to enhance spontaneity in speaking.' },
        ],
      },
      {
        title: 'Why choose Proficient Communicator?',
        style: 'checks',
        items: [
          { label: 'Practical & Engaging Approach', text: 'Learn through real-world scenarios, role-plays, and interactive exercises.' },
          { label: 'Personalized Guidance', text: 'Individual feedback and coaching to address specific language challenges.' },
          { label: 'Empowers You for Professional & Social Success', text: 'Helps you communicate effectively in meetings, presentations, interviews, and daily interactions.' },
        ],
      },
    ],
    closing: 'Speak with confidence, connect effortlessly, and become a proficient communicator!',
    source: 'programmesoffered-PROFICIENT-COMMUNICATOR.php',
  },
  {
    slug: 'project-elite',
    name: 'Project Elite',
    kicker: 'FOR PROFESSIONALS · ONLINE ONLY',
    tagline: 'Advanced Business English for Working Professionals',
    banner: `${IMG}/images/bg-Eli.png`,
    img: `${IMG}/images/Elite750.png`,
    intro: [
      'An advanced business English course for working professionals aiming to enhance their business communication, negotiation, presentation, and writing skills.',
    ],
    facts: [
      { label: 'For', value: 'Working professionals' },
      { label: 'Mode', value: 'Online only' },
      { label: 'Level', value: 'Advanced' },
    ],
    sections: [
      {
        title: 'Course modules',
        style: 'cards',
        items: [
          { text: 'Business Communication Essentials' },
          { text: 'Effective Presentation Skills' },
          { text: 'Negotiation and Conflict Resolution' },
          { text: 'Meeting and Discussion Strategies' },
          { text: 'Industry-Specific Vocabulary and Terminology' },
          { text: 'Writing for Business (emails, reports, proposals)' },
        ],
      },
      {
        title: 'Course benefits',
        style: 'checks',
        items: [
          { text: 'Flexible Online Learning' },
          { text: 'Expert Instruction & Personalized Feedback' },
          { text: 'Interactive Lessons & Industry-Specific Content' },
        ],
      },
    ],
    closing: 'Join us and unlock endless possibilities through the power of language!',
    source: 'programmesoffered-PROJECT-ELITE.php',
  },
  {
    slug: 'corporate-sessions',
    name: 'Corporate Sessions',
    kicker: 'FOR CORPORATE TEAMS',
    tagline: 'Training that elevates professional skills and fosters a positive workplace',
    banner: `${IMG}/image/corporate.jpg`,
    img: `${IMG}/images/news-3.png`,
    intro: [
      'At Beehive Communication Club, we offer comprehensive corporate training programs designed to elevate professional skills and foster a positive workplace environment. Our training modules cover a wide range of essential topics.',
    ],
    facts: [
      { label: 'For', value: 'Corporate teams' },
      { label: 'Format', value: 'Customised sessions' },
      { label: 'Modules', value: '9 topics' },
    ],
    sections: [
      {
        title: 'Training modules',
        style: 'cards',
        items: [
          { text: 'Effective Communication' },
          { text: 'Public Speaking' },
          { text: 'Business Storytelling' },
          { text: 'Presentation Skills' },
          { text: 'Personality Development' },
          { text: 'Behavioural Training' },
          { text: 'Leadership & Managerial Development' },
          { text: 'Diversity, Equity, and Inclusion' },
          { text: 'Human Rights' },
        ],
      },
    ],
    closing: 'Join us to empower your workforce with the skills they need to thrive in today’s dynamic business landscape.',
    source: 'programmesoffered-corporate.php',
  },
]

export const PROGRAMME_BY_SLUG: Record<string, ProgrammePage> = Object.fromEntries(
  PROGRAMME_PAGES.map((p) => [p.slug, p]),
)
