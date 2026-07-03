import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import { portfolio } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white/70 px-4 py-10 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/70 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-650 dark:text-slate-350">© 2026 {portfolio.name}. All rights reserved.</p>
        <div className="flex items-center gap-3">
          <a href={portfolio.github} target="_blank" rel="noreferrer" className="rounded-full border border-slate-200 bg-slate-50 p-3 text-slate-700 transition hover:-translate-y-0.5 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href={portfolio.linkedin} target="_blank" rel="noreferrer" className="rounded-full border border-slate-200 bg-slate-50 p-3 text-slate-700 transition hover:-translate-y-0.5 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href={`mailto:${portfolio.email}`} className="rounded-full border border-slate-200 bg-slate-50 p-3 text-slate-700 transition hover:-translate-y-0.5 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  )
}
