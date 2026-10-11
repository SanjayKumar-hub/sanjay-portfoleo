// ─────────────────────────────────────────────────────────────
//  All site content lives here. Edit this file to update the site.
//  Only information from the resume is used — nothing is invented.
// ─────────────────────────────────────────────────────────────

// ▼▼ REPLACE THESE WITH YOUR REAL URLS (leave '' to show a "link to add" placeholder) ▼▼
export const LINKS = {
  portfolio: '', // e.g. 'https://your-portfolio.com'
  linkedin: '', // e.g. 'https://www.linkedin.com/in/your-handle'
  hackerrank: '', // e.g. 'https://www.hackerrank.com/profile/your-handle'
};
// ▲▲ ─────────────────────────────────────────────────────── ▲▲

export const profile = {
  name: 'Sanjay Kumar S',
  email: 'sanjaykumar03022006@gmail.com',
  phone: '+91 7810027588',
  phoneHref: 'tel:+917810027588',
  college: 'Panimalar Engineering College',
  city: 'Chennai',
  roleLines: ['Computer Science & Business Systems', 'Engineering Student'],
  intro:
    'Engineering student exploring technology, data, AI, IoT and problem-solving through projects, research and industry experience.',
};

export const socialLinks = [
  { label: 'Portfolio', url: LINKS.portfolio },
  { label: 'LinkedIn', url: LINKS.linkedin },
  { label: 'HackerRank', url: LINKS.hackerrank },
];

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'research', label: 'Research' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export const tickerItems = [
  'Software & Technology',
  'Data',
  'Problem Solving',
  'Business Systems',
  'AI',
  'IoT',
  'Enterprise Technology',
];

export const about = {
  lead: [
    'I’m a B.Tech student in Computer Science and Business Systems at Panimalar Engineering College, Chennai.',
    'I’m drawn to the place where technology meets how organisations run: software, data, AI, IoT and enterprise platforms.',
  ],
  body: 'So far that has meant two internships, a flood-surveillance project, an undergraduate research paper on swarm robotics, and editorial and entrepreneurship roles on campus. My objective is to apply what I know, contribute to organisational goals, gain industry experience, and keep growing my technical and interpersonal skills.',
  interests: [
    'Software & Technology',
    'Data',
    'Problem Solving',
    'Business / Management Systems',
    'AI',
    'IoT',
    'Enterprise Technology',
  ],
  facts: [
    { k: 'Degree', v: 'B.Tech CSBS' },
    { k: 'Batch', v: '2023–2027' },
    { k: 'CGPA', v: '8.217' },
    { k: 'Internships', v: '2' },
  ],
};

export const experience = [
  {
    no: '01',
    title: 'ServiceNow Virtual Internship',
    org: 'AICTE – SmartBridge',
    place: '',
    dates: 'Aug 2025 – Oct 2025',
    intro: 'Hands-on experience in:',
    points: [
      'ServiceNow administration',
      'Workflow automation',
      'Flow Designer',
      'Reporting',
      'ATF',
      'Agentic AI for intelligent enterprise solutions',
    ],
  },
  {
    no: '02',
    title: 'Data Processing Intern',
    org: 'Bharat Head Hunters Pvt. Ltd.',
    place: 'Bangalore',
    dates: 'Dec 9 – Jan 15',
    intro: '',
    points: [
      'Extracting data from PST files using Python',
      'Contributing to frontend web development',
      'Collaborating in real-world software projects',
    ],
  },
];

export const projects = [
  {
    no: '01',
    kind: 'flood',
    year: '2025–2026',
    title: 'Smart Flood Surveillance Framework',
    subtitle: 'With IoT Sensing And GSM Alerts',
    institution: 'Panimalar Engineering College, Chennai',
    description:
      'Developed a Smart Flood Surveillance System using IoT sensors and GSM technology for real-time water level monitoring and automated flood alerts.',
    tags: ['IoT sensing', 'GSM alerts', 'Water-level monitoring', 'Real-time alerts'],
    badge: 'Featured project',
  },
  {
    no: '02',
    kind: 'swarm',
    year: '2024–2025',
    title: 'AI Swarm Robotics in Fluid Environments',
    subtitle: 'Undergraduate research paper',
    institution: 'Panimalar Engineering College, Chennai',
    description:
      'Presented research on AI-driven swarm robotics for navigation in dynamic fluid environments, targeting underwater exploration and disaster response.',
    tags: ['AI', 'Swarm robotics', 'Underwater exploration', 'Disaster response'],
    badge: 'Research',
  },
];

export const skills = [
  {
    label: 'Programming',
    items: [
      { name: 'Java' },
      { name: 'C', note: 'Basic' },
      { name: 'Python', note: 'Basic' },
    ],
  },
  { label: 'Database', items: [{ name: 'MySQL' }] },
  {
    label: 'Tools',
    items: [
      { name: 'Eclipse' },
      { name: 'VS Code' },
      { name: 'MS Word' },
      { name: 'MS Excel' },
      { name: 'Git' },
      { name: 'Canva' },
    ],
  },
  { label: 'Concepts', items: [{ name: 'Data Structures & Algorithms' }] },
  { label: 'Operating systems', items: [{ name: 'Windows' }, { name: 'Mac' }] },
];

export const softSkills = ['Communication', 'Teamwork', 'Problem Solving', 'Time Management'];

export const research = {
  type: 'Undergraduate Research Paper',
  years: '2024–2025',
  title: 'AI Swarm Robotics in Fluid Environments',
  institution: 'Panimalar Engineering College, Chennai',
  focus:
    'AI-driven swarm robotics for navigation in dynamic fluid environments, with applications targeting underwater exploration and disaster response.',
  keywords: ['AI', 'Swarm robotics', 'Navigation', 'Dynamic fluid environments', 'Underwater exploration', 'Disaster response'],
};

export const education = [
  {
    years: '2023–2027',
    title: 'B.Tech — Computer Science and Business Systems',
    school: 'Panimalar Engineering College, Chennai',
    score: 'CGPA 8.217',
  },
  {
    years: '2022–2023',
    title: 'Class XII — CBSE',
    school: 'Aristo Public School',
    score: '58%',
  },
  {
    years: '2020–2021',
    title: 'Class X — CBSE',
    school: 'Aristo Public School',
    score: '63%',
  },
];

export const certifications = [
  { title: 'Generative AI', issuer: 'Oracle' },
  { title: 'Cloud Data Management', issuer: 'Oracle' },
  { title: 'Generative AI', issuer: 'PSG College of Technology' },
];

export const extracurricular = [
  { role: 'Core Member', org: 'PEC Media Team' },
  { role: 'Newsletter Coordinator & Editor', org: '' },
  { role: 'Editorial Head', org: 'PecHacks 4.0', note: 'International Hackathon' },
  { role: 'Member', org: 'Entrepreneurship Development Cell' },
];
