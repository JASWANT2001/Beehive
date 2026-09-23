// Content from beehivecommunicationclub.com/programmesoffered.php and each programme's own page.

/** Used by ProgrammeGrid. */
export type Programme = { tag: string; title: string; body: string; cta: string }

export type Point = { title: string; body?: string }

export type Course = {
  id: string
  name: string
  /** Short labels shown beside the name: audience, mode, duration. */
  facts: readonly string[]
  tagline: string
  paras: readonly string[]
  lists?: readonly { heading: string; items: readonly Point[] }[]
  closing?: string
}

export type Group = {
  id: string
  kicker: string
  title: string
  intro?: readonly string[]
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
        facts: ['School students', 'Also for college students', 'Year-long'],
        tagline: 'A year-long communicative English programme for school students.',
        paras: [
          'Odyssey is designed to empower students to become independent listeners, readers, and speakers through a structured and immersive learning experience.',
          'With 17 comprehensive modules (including Phonetics, Public Speaking, etc.) and 25+ engaging activities (both inside and outside the classroom), the programme has been highly appreciated by client institutions and the parent community.',
          'The programme is also available for college students, with additional professional skill development in Interview Techniques, Emotional Intelligence, Presentation Skills, and more.',
        ],
      },
      {
        id: 'vista',
        name: 'Vista',
        facts: ['School teachers', 'Daily training', 'Personalised coaching'],
        tagline: 'Faculty coaching and facilitation on communication skills for schools.',
        paras: [
          'VISTA is designed to empower teachers with confidence, fluency, and command in communication, enabling them to engage effectively with students.',
          'Through daily training in English, Effective Communication, Presentation Skills, and more, along with personalized coaching, VISTA helps teachers grow and transform.',
          'The empowerment of teachers through VISTA leads to student excellence and parent satisfaction.',
        ],
      },
      {
        id: 'project-punch',
        name: 'Project Punch',
        facts: ['Teachers & B.Ed. students', 'Free', '3 days'],
        tagline: 'A free 3-day spoken English programme for teachers and student teachers.',
        paras: [
          'Named after the renowned English professor, Mahaguru Prof. Panchanathan (Trichy), Project Punch is a 3-day Spoken English programme conducted by Beehive in collaboration with IDHAYAM Edible Oils and Rotary Club of Virudhunagar.',
          'Designed for teachers and B.Ed. students, the programme is held three times a month, delivering highly effective results. With over 100 successful Project Punch programmes conducted, it has been recognized as a high-impact and celebrated Rotary initiative, making a significant difference across Rotary International Districts in Tamil Nadu.',
        ],
      },
    ],
  },
  {
    id: 'in-house',
    kicker: 'BEEHIVE IN-HOUSE COURSES',
    title: 'Customised English programmes for every stage of life',
    intro: [
      'Our in-house courses are meticulously crafted to meet the unique needs of learners at every stage — whether you’re a young student starting your English journey, a college aspirant preparing for academic and professional success, or a working professional seeking career advancement.',
      'With expert instructors, personalized training, and engaging lessons, our courses make mastering English an enjoyable and rewarding experience.',
    ],
    courses: [
      {
        id: 'nurture',
        name: 'Nurture',
        facts: ['School students', 'Online / Offline', '50 hours'],
        tagline: 'Building strong foundations in English for young learners.',
        paras: [
          'Nurture is a fun, engaging, and interactive English foundation course designed exclusively for school children. This program focuses on developing core language skills in a structured yet enjoyable way, ensuring that young learners build a strong linguistic foundation that supports their academic and personal growth.',
        ],
        lists: [
          {
            heading: 'What Nurture offers',
            items: [
              { title: 'Phonetics & Pronunciation', body: 'Helping students understand and master the sounds of English for clear and confident speech.' },
              { title: 'Reading & Comprehension', body: 'Strengthening reading fluency and comprehension skills to improve vocabulary and understanding.' },
              { title: 'Speaking & Listening', body: 'Encouraging active participation in conversations, storytelling, and discussions to boost verbal communication.' },
              { title: 'Grammar & Sentence Formation', body: 'Introducing key grammar concepts in a simple and engaging manner to enhance writing and speaking abilities.' },
              { title: 'Confidence Building Activities', body: 'Interactive exercises, games, and role-plays designed to develop communication confidence in students.' },
            ],
          },
          {
            heading: 'Why choose Nurture',
            items: [
              { title: 'Customized Learning Approach', body: 'The course is tailored to match the child’s learning pace and style, ensuring effective progress.' },
              { title: 'Engaging & Interactive Methods', body: 'Fun-filled activities, storytelling, and interactive exercises make learning enjoyable.' },
              { title: 'Encourages Lifelong Learning', body: 'The program not only strengthens English skills but also instills a lasting love for the language.' },
            ],
          },
        ],
        closing: 'Give your child the gift of confidence and effective communication with Nurture!',
      },
      {
        id: 'aspirant-q',
        name: 'Aspirant Q',
        facts: ['College students', 'Online / Offline', '50 hours'],
        tagline: 'Master grammar, interviews & academic communication.',
        paras: [
          'Aspirant Q is a specialized course designed for college students and aspiring professionals looking to enhance their grammar, interview skills, and academic communication. This program equips learners with the tools they need to communicate effectively, present themselves confidently, and succeed in academic and professional environments.',
        ],
        lists: [
          {
            heading: 'What Aspirant Q offers',
            items: [
              { title: 'Grammar Mastery', body: 'Strengthening foundational and advanced grammar skills for clear and precise communication.' },
              { title: 'Interview Preparation', body: 'Training in self-introduction, resume-based discussions, mock interviews, and body language to ace job and academic interviews.' },
              { title: 'Public Speaking & Presentation Skills', body: 'Enhancing confidence in delivering speeches, presentations, and classroom discussions.' },
              { title: 'Professional & Academic Writing', body: 'Guidance on formal emails, reports, essays, and statements of purpose (SOPs).' },
              { title: 'Soft Skills & Communication Etiquette', body: 'Developing essential interpersonal and workplace communication skills.' },
            ],
          },
          {
            heading: 'Why choose Aspirant Q',
            items: [
              { title: 'Customized for College & Job Aspirants', body: 'Covers all aspects of English needed for higher education and professional success.' },
              { title: 'Practical & Engaging Approach', body: 'Includes mock interviews, real-world scenarios, and interactive exercises.' },
              { title: 'Boosts Confidence for Career & Academics', body: 'Helps students make a strong impression in interviews, internships, and networking opportunities.' },
            ],
          },
        ],
        closing: 'Take the next step towards success — speak confidently, write effectively, and stand out in interviews with Aspirant Q!',
      },
      {
        id: 'proficient-communicator',
        name: 'Proficient Communicator',
        facts: ['Adults', 'Online / Offline', '50 hours'],
        tagline: 'Speak fluently, communicate confidently, and express yourself with ease.',
        paras: [
          'Proficient Communicator is a dedicated spoken English program designed for adults who want to improve their fluency, pronunciation, and conversational confidence for both personal and professional interactions. Whether you’re looking to speak more clearly at work, engage in social conversations with ease, or boost your overall communication skills, this program provides the right training and support.',
        ],
        lists: [
          {
            heading: 'What Proficient Communicator offers',
            items: [
              { title: 'Fluency Training', body: 'Structured exercises to help you speak naturally and confidently.' },
              { title: 'Pronunciation & Accent Neutralization', body: 'Techniques to improve clarity and articulation.' },
              { title: 'Conversational English', body: 'Real-life dialogues and discussions for everyday and workplace communication.' },
              { title: 'Vocabulary Expansion', body: 'Learn commonly used words, phrases, and expressions for effective communication.' },
              { title: 'Confidence Building Activities', body: 'Role-plays, group discussions, and interactive sessions to enhance spontaneity in speaking.' },
            ],
          },
          {
            heading: 'Why choose Proficient Communicator',
            items: [
              { title: 'Practical & Engaging Approach', body: 'Learn through real-world scenarios, role-plays, and interactive exercises.' },
              { title: 'Personalized Guidance', body: 'Individual feedback and coaching to address specific language challenges.' },
              { title: 'Empowers You for Professional & Social Success', body: 'Helps you communicate effectively in meetings, presentations, interviews, and daily interactions.' },
            ],
          },
        ],
        closing: 'Speak with confidence, connect effortlessly, and become a proficient communicator!',
      },
      {
        id: 'project-elite',
        name: 'Project Elite',
        facts: ['Working professionals', 'Online only'],
        tagline: 'Elevate your career: professional English skills for success.',
        paras: [
          'An advanced business English course for working professionals aiming to enhance their business communication, negotiation, presentation, and writing skills.',
        ],
        lists: [
          {
            heading: 'Course modules',
            items: [
              { title: 'Business Communication Essentials' },
              { title: 'Effective Presentation Skills' },
              { title: 'Negotiation and Conflict Resolution' },
              { title: 'Meeting and Discussion Strategies' },
              { title: 'Industry-Specific Vocabulary and Terminology' },
              { title: 'Writing for Business (emails, reports, proposals)' },
            ],
          },
          {
            heading: 'Course benefits',
            items: [
              { title: 'Flexible Online Learning' },
              { title: 'Expert Instruction & Personalized Feedback' },
              { title: 'Interactive Lessons & Industry-Specific Content' },
            ],
          },
        ],
        closing: 'Join us and unlock endless possibilities through the power of language!',
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
        tagline: 'Customised training sessions designed to meet the needs of your corporate team.',
        paras: [
          'At Beehive Communication Club, we offer comprehensive corporate training programs designed to elevate professional skills and foster a positive workplace environment. Our training modules cover a wide range of essential topics.',
        ],
        lists: [
          {
            heading: 'Training modules',
            items: [
              { title: 'Effective Communication' },
              { title: 'Public Speaking' },
              { title: 'Business Storytelling' },
              { title: 'Presentation Skills' },
              { title: 'Personality Development' },
              { title: 'Behavioural Training' },
              { title: 'Leadership & Managerial Development' },
              { title: 'Diversity, Equity, and Inclusion' },
              { title: 'Human Rights' },
            ],
          },
        ],
        closing:
          "Join us to empower your workforce with the skills they need to thrive in today's dynamic business landscape.",
      },
    ],
  },
]
