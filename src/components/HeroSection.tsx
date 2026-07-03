import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FaCode, FaDocker, FaGitAlt, FaGithub, FaJava, FaLinkedin, FaPython, FaReact, FaServer } from 'react-icons/fa'
import { SiTensorflow, SiPytorch, SiMysql } from 'react-icons/si'
import { ArrowRight, Mail, Sparkles } from 'lucide-react'
import { portfolio } from '../data/portfolio'

const floatingIcons = [
  { icon: FaJava, label: 'Java', color: 'text-orange-500' },
  { icon: FaPython, label: 'Python', color: 'text-blue-500' },
  { icon: FaServer, label: 'Spring Boot', color: 'text-emerald-500' },
  { icon: FaReact, label: 'React', color: 'text-cyan-500' },
  { icon: FaDocker, label: 'Docker', color: 'text-sky-500' },
  { icon: FaGitAlt, label: 'Git', color: 'text-rose-500' },
  { icon: SiMysql, label: 'MySQL', color: 'text-blue-600' },
  { icon: SiTensorflow, label: 'TensorFlow', color: 'text-orange-400' },
  { icon: SiPytorch, label: 'PyTorch', color: 'text-red-500' },
]

export default function HeroSection() {
  const [index, setIndex] = useState(0)
  const typingWords = ['Software Developer', 'Backend Engineer', 'AI Researcher', 'Machine Learning Engineer']

  useEffect(() => {
    const timer = window.setInterval(() => setIndex((current) => (current + 1) % typingWords.length), 2200)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <section id="home" className="relative isolate overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.18),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(6,182,212,0.16),_transparent_26%)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-300">
            <Sparkles size={14} />
            Available for impactful roles
          </div>
          <h1 className="text-4xl font-semibold leading-tight text-slate-900 dark:text-white sm:text-5xl lg:text-7xl">
            Hello, I’m <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent">{portfolio.name}</span>
          </h1>
          <div className="mt-5 flex min-h-[3rem] items-center text-2xl font-semibold text-slate-700 dark:text-slate-200 sm:text-3xl">
            <span className="mr-2">{typingWords[index]}</span>
            <span className="h-8 w-[3px] animate-pulse bg-cyan-500" />
          </div>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            {portfolio.heroDescription}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={portfolio.resumeUrl} className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 px-6 py-3 font-bold text-white shadow-lg shadow-blue-500/40 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/60">
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600 opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="relative flex items-center gap-2">
                Download Resume <ArrowRight size={18} className="transition group-hover:translate-x-1" />
              </span>
            </a>
            <a href="#projects" className="group relative inline-flex items-center justify-center rounded-full border-2 border-blue-600 bg-white/90 px-6 py-3 font-bold text-blue-600 shadow-md transition hover:-translate-y-1 hover:bg-blue-50 hover:shadow-lg dark:border-blue-400 dark:bg-slate-900/90 dark:text-blue-300 dark:hover:bg-slate-800">
              <span className="relative">View Projects</span>
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href={portfolio.github} target="_blank" rel="noreferrer" className="group relative rounded-full border-2 border-blue-500/50 bg-gradient-to-br from-blue-100 to-violet-100 p-3 text-blue-600 shadow-md transition hover:-translate-y-1 hover:shadow-lg hover:border-blue-600 dark:border-blue-600/50 dark:from-blue-950/50 dark:to-violet-950/50 dark:text-blue-300" aria-label="GitHub">
              <FaGithub size={20} className="group-hover:scale-110 transition" />
            </a>
            <a href={portfolio.linkedin} target="_blank" rel="noreferrer" className="group relative rounded-full border-2 border-cyan-500/50 bg-gradient-to-br from-cyan-100 to-blue-100 p-3 text-cyan-600 shadow-md transition hover:-translate-y-1 hover:shadow-lg hover:border-cyan-600 dark:border-cyan-600/50 dark:from-cyan-950/50 dark:to-blue-950/50 dark:text-cyan-300" aria-label="LinkedIn">
              <FaLinkedin size={20} className="group-hover:scale-110 transition" />
            </a>
            <a href={`mailto:${portfolio.email}`} className="group relative rounded-full border-2 border-violet-500/50 bg-gradient-to-br from-violet-100 to-pink-100 p-3 text-violet-600 shadow-md transition hover:-translate-y-1 hover:shadow-lg hover:border-violet-600 dark:border-violet-600/50 dark:from-violet-950/50 dark:to-pink-950/50 dark:text-violet-300" aria-label="Email">
              <Mail size={20} className="group-hover:scale-110 transition" />
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="relative">
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-blue-500/20 via-violet-500/20 to-cyan-400/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white/70 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.16)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/70">
            <div className="absolute left-6 top-6 flex gap-2">
              <span className="h-3 w-3 rounded-full bg-rose-400" />
              <span className="h-3 w-3 rounded-full bg-amber-400" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
            </div>
            <div className="mx-auto mb-6 flex h-28 w-28 overflow-hidden rounded-full border-4 border-white/80 bg-slate-100 shadow-xl shadow-slate-900/10 dark:border-slate-900 dark:bg-slate-800">
              <img src="/mukul.jpg" alt="Mukul Sangwan" className="h-full w-full object-cover" />
            </div>
            <div className="mt-8 rounded-[1.5rem] border border-slate-200/70 bg-slate-950 p-6 text-slate-100 dark:border-slate-800">
              <div className="mb-6 flex items-center gap-3 text-sm text-slate-400">
                <FaCode className="text-cyan-400" />
                <span>developer@portfolio:~</span>
              </div>
              <div className="space-y-2 font-mono text-sm leading-7">
                <p className="text-cyan-400">const skills = [</p>
                <p className="ml-4 text-slate-300">'Java', 'Spring Boot', 'Python', 'React'</p>
                <p className="ml-4 text-slate-300">'Machine Learning', 'Distributed Systems'</p>
                <p className="text-cyan-400">]</p>
                <p className="text-cyan-400">const impact = {'{'}</p>
                <p className="ml-4 text-slate-300">backend: true, research: true, scale: true</p>
                <p className="text-cyan-400">{' }'}</p>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3">
              {floatingIcons.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.label}
                    animate={{ y: [0, -8, 0], rotate: [0, 2, 0] }}
                    transition={{ duration: 3.2 + index * 0.2, repeat: Infinity, ease: 'easeInOut' }}
                    className="flex flex-col items-center gap-2 rounded-2xl border border-slate-200/70 bg-slate-50/80 p-3 text-sm font-medium text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-950/80 dark:text-slate-200"
                  >
                    <Icon className={`text-xl ${item.color}`} />
                    <span>{item.label}</span>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
