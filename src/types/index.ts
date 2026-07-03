export type ThemeMode = 'dark' | 'light'

export interface NavItem {
  label: string
  href: string
}

export interface StatItem {
  label: string
  value: string
}

export interface ExperienceItem {
  company: string
  location: string
  duration: string
  role: string
  client: string
  description: string[]
  technologies: string[]
}

export interface ProjectItem {
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  accent: string
  publication?: boolean
}

export interface SkillGroup {
  title: string
  skills: Array<{ name: string; level: number }>
}

export interface AchievementItem {
  title: string
  description: string
}

export interface ContactInfoItem {
  label: string
  value: string
  href?: string
}
