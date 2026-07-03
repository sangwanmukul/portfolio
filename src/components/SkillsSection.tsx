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

        <div className="grid gap-6 md:grid-cols-2">
          {portfolio.skills.map((group) => (
            <Reveal key={group.category}>
              <motion.div
                whileHover={{ y: -4 }}
                className="rounded-[2.2rem] border border-slate-200/70 bg-white/80 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/70"
              >
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4 mb-6">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{group.category}</h3>
                  <div className="h-1 w-12 rounded-full bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-400" />
                </div>
                
                <div className="flex flex-wrap gap-2.5">
                  {group.items.map((skill) => (
                    <motion.div
                      key={skill}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="cursor-default rounded-full border border-slate-200/60 bg-slate-50/50 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:border-cyan-400/50 hover:bg-white hover:text-slate-900 hover:shadow-md dark:border-slate-800 dark:bg-slate-950/40 dark:text-slate-300 dark:hover:border-cyan-500/50 dark:hover:bg-slate-900/60 dark:hover:text-white"
                    >
                      <span className="mr-1.5 text-[10px] text-cyan-500 font-bold">✦</span>
                      {skill}
                    </motion.div>
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
