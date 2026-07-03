import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { portfolio } from '../data/portfolio'

export default function ExperienceSection() {
  const [activeIdx, setActiveIdx] = useState(0)
  const activeExperience = portfolio.experience[activeIdx]

  return (
    <section id="experience" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Experience"
          title="Enterprise software work with a strong product mindset."
          description="My internships and projects have focused on building reliable systems that support real-world banking and research workflows."
        />

        <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr] lg:grid-cols-[0.75fr_1.25fr] items-start">
          {/* Vertical Stepper Selector */}
          <div className="flex flex-col gap-1 border-l-2 border-slate-200 dark:border-slate-800 py-2">
            {portfolio.experience.map((item, idx) => (
              <button
                key={`${item.company}-${idx}`}
                onClick={() => setActiveIdx(idx)}
                className={`relative py-4 pl-6 pr-4 text-left transition duration-300 outline-none ${
                  activeIdx === idx
                    ? 'text-cyan-600 dark:text-cyan-400'
                    : 'text-slate-500 hover:text-slate-800 hover:pl-7 dark:text-slate-400 dark:hover:text-slate-200'
                }`}
              >
                {activeIdx === idx && (
                  <motion.div
                    layoutId="activeCompanyIndicator"
                    className="absolute left-[-2px] inset-y-0 w-[2px] bg-gradient-to-b from-blue-600 via-violet-600 to-cyan-400"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <h4 className="font-bold text-base md:text-lg leading-tight">{item.company}</h4>
                <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 mt-1">{item.duration}</p>
              </button>
            ))}
          </div>

          {/* Details Panel */}
          <div className="min-h-[380px] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="rounded-[2rem] border border-slate-200/70 bg-white/80 p-8 shadow-xl shadow-slate-900/5 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/70"
              >
                <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-slate-200/70 bg-white p-2 shadow-sm dark:border-slate-800 dark:bg-slate-950">
                      {activeExperience.company === 'Decimal Technologies Pvt. Ltd.' ? (
                        <img src="/decimal.jpeg" alt="Decimal Technologies" className="h-full w-full object-contain" />
                      ) : activeExperience.company === 'Infosys Springboard' ? (
                        <img src="/infosys.png" alt="Infosys Springboard" className="h-full w-full object-contain" />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-sm font-semibold text-white">
                          {activeExperience.company.charAt(0)}
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white leading-tight">{activeExperience.role}</h3>
                      <p className="text-base font-semibold text-cyan-600 dark:text-cyan-400 mt-1">{activeExperience.company}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 lg:max-w-[45%]">
                    {activeExperience.technologies.map((tech) => (
                      <span key={tech} className="rounded-full border border-blue-200/50 bg-blue-100/30 px-3 py-1 text-xs font-semibold text-blue-700 dark:border-blue-900/40 dark:bg-blue-950/40 dark:text-blue-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-2 border-t border-slate-100 dark:border-slate-800/60 pt-6">
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    <span className="font-semibold text-slate-700 dark:text-slate-350">Location:</span> {activeExperience.location}
                  </p>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    <span className="font-semibold text-slate-700 dark:text-slate-350">Client:</span> {activeExperience.client}
                  </p>
                </div>

                <ul className="mt-6 space-y-3.5 text-base leading-8 text-slate-650 dark:text-slate-300">
                  {activeExperience.description.split('. ').map((desc, i) => {
                    const sentence = desc.trim()
                    if (!sentence) return null
                    const formatted = sentence.endsWith('.') ? sentence : `${sentence}.`
                    return (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-3.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" />
                        <span>{formatted}</span>
                      </li>
                    )
                  })}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
