import { motion } from 'framer-motion'
import { FaAward, FaGraduationCap, FaProjectDiagram, FaRocket } from 'react-icons/fa'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { portfolio } from '../data/portfolio'

const statIcons = [FaGraduationCap, FaAward, FaRocket, FaProjectDiagram]

export default function AboutSection() {
  return (
    <section id="about" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About"
          title="Building software that blends engineering depth with research rigor."
          description="I am Mukul Sangwan, a Computer Science and Engineering graduate from VIT Chennai with strong interests in backend development, artificial intelligence, machine learning, and enterprise software development."
        />

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <motion.div
              whileHover={{ y: -6, scale: 1.01 }}
              className="rounded-[2rem] border border-slate-200/70 bg-white/80 p-8 shadow-xl shadow-slate-900/5 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/70"
            >
              <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
                {portfolio.about}
              </p>
              <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
                I am especially motivated by systems that sit at the intersection of reliability, performance, and intelligent decision-making. My published research in IEEE Access reflects that same curiosity for building practical, high-impact technology.
              </p>
              <div className="mt-8 space-y-4">
                {portfolio.education.map((item) => (
                  <div key={item.institution} className="rounded-[1.5rem] border border-slate-200/70 bg-slate-50/80 p-6 dark:border-slate-800 dark:bg-slate-950/70">
                    <div className="flex items-center gap-3">
                      <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-slate-200/70 bg-white p-2 shadow-sm dark:border-slate-800 dark:bg-slate-950">
                        <img src={item.logo} alt={item.alt} className="h-full w-full object-contain" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600 dark:text-cyan-300">Education</p>
                        <p className="text-lg font-semibold text-slate-900 dark:text-white">{item.institution}</p>
                      </div>
                    </div>
                    <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
                      {item.degree}<br />
                      {item.details} • {item.duration}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </Reveal>

          <div className="space-y-3">
            <div className="rounded-[1.5rem] border border-slate-200/70 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 p-4 text-white shadow-[0_20px_45px_rgba(15,23,42,0.16)] dark:border-slate-700">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-cyan-300">Quick snapshot</p>
              <p className="mt-1 text-lg font-semibold">A few metrics that define the work so far.</p>
            </div>

            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
              {portfolio.stats.map((stat, index) => {
                const Icon = statIcons[index % statIcons.length]
                return (
                  <Reveal key={stat.label}>
                    <motion.div
                      whileHover={{ y: -4, scale: 1.01 }}
                      className="relative overflow-hidden rounded-[1.25rem] border border-slate-200/70 bg-white/80 p-4 shadow-lg shadow-slate-900/5 backdrop-blur-xl transition-all duration-300 dark:border-slate-800 dark:bg-slate-900/70"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10" />
                      <div className="relative">
                        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-sm text-white shadow-lg shadow-cyan-500/20">
                          <Icon />
                        </div>
                        <p className="text-2xl font-semibold leading-none text-slate-900 dark:text-white">{stat.value}</p>
                        <p className="mt-1 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">{stat.label}</p>
                      </div>
                    </motion.div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
