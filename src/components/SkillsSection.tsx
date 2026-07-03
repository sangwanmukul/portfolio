import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { portfolio } from '../data/portfolio'

export default function SkillsSection() {
  return (
    <section id="skills" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills"
          title="A modern toolkit for backend systems, AI, and product engineering."
          description="I focus on practical fluency across the full stack of systems engineering, data science, and modern product development."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {portfolio.skills.map((group) => (
            <Reveal key={group.category}>
              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                className="rounded-[2rem] border border-slate-200/70 bg-white/80 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/70"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{group.category}</h3>
                  <div className="h-2 w-16 rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400" />
                </div>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {group.items.map((skill) => (
                    <div key={skill} className="group rounded-3xl border border-slate-200/70 bg-gradient-to-br from-slate-50 to-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-lg dark:border-slate-800 dark:from-slate-950/70 dark:to-slate-900/80">
                      <div className="flex items-center gap-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-sm font-semibold text-white">✦</span>
                        <p className="text-sm font-semibold text-slate-900 dark:text-white">{skill}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
