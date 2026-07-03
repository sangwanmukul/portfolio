import { motion } from 'framer-motion'
import { FaMoon, FaSun } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'
import type { NavItem } from '../types'

type NavbarProps = {
  activeSection: string
  navItems: NavItem[]
}

export default function Navbar({ activeSection, navItems }: NavbarProps) {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 border-b border-blue-200/40 bg-white/60 backdrop-blur-2xl shadow-sm dark:border-blue-900/40 dark:bg-slate-950/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3 rounded-full border border-blue-200/60 bg-gradient-to-r from-blue-50 to-violet-50 px-3 py-2 text-sm font-bold text-slate-900 shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:border-blue-300 dark:border-blue-900/60 dark:from-slate-900 dark:to-blue-900/40 dark:text-white">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 via-violet-600 to-cyan-500 font-bold text-white shadow-lg">MS</span>
          <span className="hidden sm:block">Mukul Sangwan</span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.href
            return (
              <a
                key={item.href}
                href={`#${item.href}`}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 via-violet-600 to-blue-600 text-white shadow-lg shadow-blue-500/30 scale-105'
                    : 'text-slate-700 hover:bg-blue-100/50 hover:text-slate-900 hover:shadow-md dark:text-slate-300 dark:hover:bg-blue-900/20 dark:hover:text-white'
                }`}
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="/Mukul_Resume.pdf"
            className="hidden rounded-full bg-gradient-to-r from-blue-600 via-blue-600 to-violet-600 px-5 py-2 text-sm font-bold text-white shadow-lg shadow-blue-500/30 transition hover:-translate-y-1 hover:shadow-xl hover:from-blue-700 hover:to-violet-700 sm:inline-flex"
          >
            Resume
          </a>
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-blue-300/50 bg-gradient-to-br from-blue-100 to-violet-100 text-blue-600 shadow-md transition hover:shadow-lg dark:border-blue-700/50 dark:from-slate-800 dark:to-blue-900 dark:text-yellow-300"
          >
            {theme === 'dark' ? <FaSun className="text-lg" /> : <FaMoon className="text-lg" />}
          </motion.button>
        </div>
      </div>
    </header>
  )
}
