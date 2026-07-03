import type {
  AchievementItem,
  ContactInfoItem,
  ExperienceItem,
  NavItem,
  ProjectItem,
  SkillGroup,
  StatItem,
} from '../types'

export const navItems: NavItem[] = [
  { label: 'Home', href: 'home' },
  { label: 'About', href: 'about' },
  { label: 'Experience', href: 'experience' },
  { label: 'Projects', href: 'projects' },
  { label: 'Research', href: 'research' },
  { label: 'Skills', href: 'skills' },
  { label: 'Achievements', href: 'achievements' },
  { label: 'Contact', href: 'contact' },
]

export const heroWords = ['Backend Developer', 'Java Developer', 'AI Researcher', 'Machine Learning Engineer']

export const aboutStats: StatItem[] = [
  { label: 'CGPA', value: '9.04' },
  { label: 'IEEE Publication', value: '1' },
  { label: 'Internship', value: '1' },
  { label: 'Major Projects', value: '5+' },
  { label: 'Technologies', value: '20+' },
]

export const experience: ExperienceItem[] = [
  {
    company: 'Decimal Technologies Pvt. Ltd.',
    location: 'Gurugram, Haryana',
    duration: 'May 2026 – Present',
    role: 'Development Intern',
    client: 'Federal Bank',
    description: [
      'Developing enterprise backend applications using Java Spring Boot and Python.',
      'Working on loan processing systems, configurable rule engines, and REST APIs.',
      'Optimizing SQL queries and building scheduler-based processing workflows.',
    ],
    technologies: ['Java', 'Spring Boot', 'Python', 'MySQL', 'Git', 'Maven', 'Linux', 'DBeaver', 'Antigravity IDE'],
  },
]

export const projects: ProjectItem[] = [
  {
    title: 'Federal Bank FTR Gatekeeping Validator',
    description:
      'An enterprise-grade validation platform for banking workflows, combining configurable rule engines with resilient APIs and processing pipelines.',
    technologies: ['Java', 'Spring Boot', 'MySQL', 'REST API', 'Rule Engine', 'Scheduler'],
    githubUrl: 'https://github.com/mukulsangwan',
    accent: 'from-blue-500 via-indigo-500 to-cyan-500',
  },
  {
    title: 'L-MACD',
    description:
      'A learning-based multi-modal CAPTCHA defense framework designed to counter sophisticated multimodal AI attacks, published in IEEE Access.',
    technologies: ['Python', 'Random Forest', 'SHAP', 'Machine Learning'],
    githubUrl: 'https://github.com/mukulsangwan',
    publication: true,
    accent: 'from-fuchsia-500 via-violet-500 to-indigo-500',
  },
  {
    title: 'Multimodal Ozone Layer Depletion Prediction',
    description:
      'A research-driven forecasting pipeline that combines graph neural networks and tree-based models to predict environmental change.',
    technologies: ['PyTorch', 'Graph Neural Networks', 'Random Forest', 'XGBoost'],
    githubUrl: 'https://github.com/mukulsangwan',
    accent: 'from-emerald-500 via-teal-500 to-cyan-500',
  },
  {
    title: 'AI AudioBook Generator',
    description:
      'An end-to-end audio content generator that turns scanned text into polished voice narrations using OCR and LLM-backed pipelines.',
    technologies: ['Python', 'Streamlit', 'OCR', 'LLM', 'Coqui TTS'],
    githubUrl: 'https://github.com/mukulsangwan',
    accent: 'from-amber-500 via-orange-500 to-rose-500',
  },
  {
    title: 'Disaster Prediction Pipeline',
    description:
      'A scalable event-driven analytics pipeline for forecasting disaster events with streaming data processing and machine learning.',
    technologies: ['Kafka', 'Spark', 'Docker', 'Random Forest'],
    githubUrl: 'https://github.com/mukulsangwan',
    accent: 'from-rose-500 via-pink-500 to-purple-500',
  },
]

export const skillGroups: SkillGroup[] = [
  {
    title: 'Programming',
    skills: [
      { name: 'Java', level: 95 },
      { name: 'Python', level: 94 },
      { name: 'C++', level: 84 },
      { name: 'JavaScript', level: 88 },
      { name: 'SQL', level: 90 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Spring Boot', level: 95 },
      { name: 'REST APIs', level: 94 },
      { name: 'Hibernate', level: 84 },
      { name: 'Maven', level: 88 },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 91 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind', level: 92 },
    ],
  },
  {
    title: 'Machine Learning',
    skills: [
      { name: 'TensorFlow', level: 86 },
      { name: 'PyTorch', level: 88 },
      { name: 'Scikit-learn', level: 90 },
      { name: 'XGBoost', level: 87 },
      { name: 'SHAP', level: 85 },
    ],
  },
  {
    title: 'Databases & Tools',
    skills: [
      { name: 'MySQL', level: 92 },
      { name: 'Git', level: 93 },
      { name: 'Docker', level: 87 },
      { name: 'Linux', level: 89 },
      { name: 'VS Code', level: 95 },
    ],
  },
]

export const achievements: AchievementItem[] = [
  {
    title: 'IEEE Access Publication',
    description: 'Published research on adaptive CAPTCHA defense in a high-impact journal.',
  },
  {
    title: 'Sir C. V. Raman Award',
    description: 'Recognized for academic excellence and impactful technical contributions.',
  },
  {
    title: 'Microsoft DP-900',
    description: 'Certified in Microsoft Azure data fundamentals and cloud data concepts.',
  },
  {
    title: 'Meta Android Development',
    description: 'Completed structured mobile development learning focused on Android fundamentals.',
  },
  {
    title: 'SQL for Data Science',
    description: 'Strengthened analytics and database fluency for modern data workflows.',
  },
]

export const contactInfo: ContactInfoItem[] = [
  { label: 'Email', value: 'mukul.sangwan@example.com', href: 'mailto:mukul.sangwan@example.com' },
  { label: 'Phone', value: '+91 98765 43210', href: 'tel:+919876543210' },
  { label: 'LinkedIn', value: 'linkedin.com/in/mukul-sangwan', href: 'https://www.linkedin.com' },
  { label: 'GitHub', value: 'github.com/mukulsangwan', href: 'https://github.com' },
  { label: 'Location', value: 'Gurugram, India' },
]
