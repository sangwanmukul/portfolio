export const portfolio = {
  name: 'Mukul Sangwan',
  title: 'Software Developer',
  subtitle: 'Backend Engineer | AI Researcher | Machine Learning Engineer',
  heroDescription:
    'Final-year Computer Science student at VIT Chennai with enterprise software development experience and published AI research. Passionate about building scalable backend systems, machine learning applications, and impactful software solutions.',
  location: 'Gurugram, India',
  email: 'sangwanmukul123@gmail.com',
  phone: '+91 74198 22000',
  github: 'https://github.com/sangwanmukul',
  linkedin: 'https://www.linkedin.com/in/mukul-sangwan-268131261',
  resumeUrl: '/Mukul_Resume.pdf',
  about:
    'I am Mukul Sangwan, a Computer Science and Engineering graduate from VIT Chennai with strong interests in Backend Development, Artificial Intelligence, Machine Learning, and Enterprise Software Development. Currently working as Development Intern at Decimal Technologies on enterprise banking applications for Federal Bank.',
  stats: [
    { label: 'Internships', value: '2' },
    { label: 'Publication', value: '1' },
    { label: 'Projects', value: '5+' },
    { label: 'Technologies', value: '20+' },
  ],
  education: [
    {
      institution: 'Vellore Institute of Technology, Chennai',
      degree: 'Bachelor of Technology in Computer Science and Engineering',
      details: 'CGPA: 9.04',
      duration: 'Aug. 2022 – Jul. 2026',
      logo: '/vitcc.png',
      alt: 'VIT Chennai',
    },
    {
      institution: 'RPS Senior Secondary School, Mohindergarh, Haryana ',
      degree: 'CBSE • Class XII: 94.2% • Class X: 95.8%',
      duration: 'Apr. 2018 – Jul. 2022',
      logo: '/rps.png',
      alt: 'RPS Senior Secondary School',
    },
  ],
  experience: [
    {
      company: 'Decimal Technologies Pvt. Ltd.',
      role: 'Development Intern',
      location: 'Gurugram, Haryana',
      duration: 'May 2026 – Present',
      client: 'Federal Bank',
      description:
        'Designed and built enterprise backend solutions for federal banking workflows using Java Spring Boot and Python. Developed resilient RESTful APIs, configurable rule engines, loan processing services, scheduler-driven workflows, and SQL performance enhancements. Collaborated with cross-functional teams to implement secure transaction flows, automated validation logic, and production monitoring.',
      technologies: ['Java', 'Spring Boot', 'Python', 'MySQL', 'Git', 'Maven', 'Linux', 'DBeaver', 'Antigravity IDE'],
    },
    {
      company: 'Infosys Springboard',
      role: 'AI Intern',
      location: 'Remote',
      duration: 'Aug. 2025 – Oct. 2025',
      client: 'Virtual Internship',
      description:
        'Developed an end-to-end AI AudioBook Generator converting PDF, DOCX, and TXT documents into speech using LLM-based text enrichment and text-to-speech models. Implemented document parsing using PyPDF2, pdfplumber, and python-docx with OCR fallback, and integrated LLM APIs to improve narration quality. Built a Streamlit application integrating Coqui TTS, Tortoise TTS, and pyttsx3 with an automated workflow for streamlined audio production.',
      technologies: ['Python', 'Streamlit', 'PyPDF2', 'pdfplumber', 'python-docx', 'OCR', 'LLM', 'Coqui TTS', 'Tortoise TTS', 'pyttsx3'],
    },
  ],
  projects: [
    {
      title: 'Federal Bank FTR Gatekeeping Validator',
      description:
        'An enterprise-grade validation platform for banking workflows, combining configurable rule engines with resilient APIs and processing pipelines.',
      technologies: ['Java', 'Spring Boot', 'REST APIs', 'MySQL', 'Rule Engine', 'Scheduler'],
      githubUrl: 'https://github.com/sangwanmukul',
      liveUrl: '',
      featured: true,
      publication: false,
      accent: 'from-blue-600 via-indigo-600 to-cyan-500',
      category: 'Backend',
    },
    {
      title: 'L-MACD',
      description:
        'A learning-based multi-modal CAPTCHA defense framework designed to counter multimodal AI attacks and published in IEEE Access.',
      technologies: ['Python', 'Random Forest', 'SHAP', 'Machine Learning'],
      githubUrl: 'https://github.com/sangwanmukul',
      liveUrl: '',
      featured: true,
      publication: true,
      accent: 'from-fuchsia-600 via-violet-600 to-indigo-500',
      category: 'Research',
    },
    {
      title: 'Generative Data Augmentation with MARL',
      description:
        'A reinforcement learning-based framework for data augmentation in low-sample scenarios, combining GANs with RLlib for robust synthetic generation.',
      technologies: ['PyTorch', 'TensorFlow', 'GANs', 'RLlib'],
      githubUrl: 'https://github.com/sangwanmukul/MARL-Generative-Data-Augmentation',
      liveUrl: '',
      featured: false,
      publication: false,
      accent: 'from-emerald-500 via-teal-500 to-cyan-500',
      category: 'AI & ML',
    },
    {
      title: 'AI AudioBook Generator',
      description:
        'An end-to-end audio content generator that turns text into polished voice narrations using OCR and LLM-based pipelines.',
      technologies: ['Python', 'Streamlit', 'OCR', 'LLM', 'Coqui TTS'],
      githubUrl: 'https://github.com/Springboard429/Audiobook_generator_-Infosys_Internship_Aug2025/tree/Mukul-Sangwan',
      liveUrl: '',
      featured: false,
      publication: false,
      accent: 'from-amber-500 via-orange-500 to-rose-500',
      category: 'AI & ML',
    },
    {
      title: 'Multimodal Ozone Layer Prediction',
      description:
        'A research-driven forecasting pipeline that combines graph neural networks and tree-based models for environmental predictions.',
      technologies: ['PyTorch', 'Graph Neural Networks', 'Random Forest', 'XGBoost'],
      githubUrl: 'https://github.com/sangwanmukul/Multimodal-Ozone-Prediction-AI',
      liveUrl: '',
      featured: false,
      publication: false,
      accent: 'from-rose-500 via-pink-500 to-purple-500',
      category: 'Research',
    },
  ],
  research: {
    title: 'L-MACD: Learning-Based Adaptive CAPTCHA Defense Against Multimodal AI Attacks',
    journal: 'IEEE Access',
    year: '2026',
    doi: 'https://doi.org/10.1109/ACCESS.2026.3663400',
    paper: '/L-MACD_ Learning-Based Adaptive CAPTCHA Defense Against Multimodal AI Attacks.pdf',
    abstract:
      'This publication introduces an adaptive defense framework that combines multimodal reasoning with explainable machine learning to improve resilience against AI-driven attacks.',
    highlights: ['Adaptive multimodal defense', 'Explainable AI integration', 'Practical security application'],
  },
  skills: [
    {
      category: 'Programming',
      items: ['Java', 'Python', 'C++', 'SQL', 'JavaScript'],
      levels: [95, 94, 84, 90, 88],
    },
    {
      category: 'Backend',
      items: ['Spring Boot', 'REST APIs', 'Hibernate', 'Maven'],
      levels: [95, 94, 84, 88],
    },
    {
      category: 'Frontend',
      items: ['React', 'TypeScript', 'Tailwind'],
      levels: [91, 90, 92],
    },
    {
      category: 'Machine Learning',
      items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'XGBoost', 'SHAP'],
      levels: [86, 88, 90, 87, 85],
    },
    {
      category: 'Databases & Tools',
      items: ['MySQL', 'Git', 'Docker', 'Linux', 'VS Code'],
      levels: [92, 93, 87, 89, 95],
    },
  ],
  achievements: [
    {
      title: 'IEEE Access Publication',
      description: 'Published research on adaptive CAPTCHA defense in a high-impact journal.',
      type: 'publication',
    },
    {
      title: 'Sir C. V. Raman Award',
      description: 'Recognized for academic excellence and impactful technical contributions.',
      type: 'academic',
    },
    {
      title: 'Microsoft DP-900',
      description: 'Certified in Microsoft Azure data fundamentals and cloud data concepts.',
      type: 'certification',
    },
    {
      title: 'Meta Android Development',
      description: 'Completed structured mobile development learning focused on Android fundamentals.',
      type: 'certification',
    },
    {
      title: 'SQL for Data Science',
      description: 'Strengthened analytics and database fluency for modern data workflows.',
      type: 'certification',
    },
  ],
  navItems: ['Home', 'About', 'Experience', 'Projects', 'Research', 'Skills', 'Achievements', 'Contact'],
  web3formsKey: '0c253df6-a77d-419b-9492-f1c00d1791a6',
}
