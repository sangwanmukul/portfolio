import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white/70 px-4 py-10 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/70 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-600 dark:text-slate-300">© 2026 Mukul Sangwan.</p>
        <div className="flex items-center gap-3">
          <a href="https://github.com" className="rounded-full border border-slate-200 bg-slate-50 p-3 text-slate-700 transition hover:-translate-y-0.5 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com" className="rounded-full border border-slate-200 bg-slate-50 p-3 text-slate-700 transition hover:-translate-y-0.5 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="mailto:mukul.sangwan@example.com" className="rounded-full border border-slate-200 bg-slate-50 p-3 text-slate-700 transition hover:-translate-y-0.5 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  )
}
