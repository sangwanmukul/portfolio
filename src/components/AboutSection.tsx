import { motion, useInView } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import { FaAward, FaGraduationCap, FaProjectDiagram, FaRocket } from 'react-icons/fa'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { portfolio } from '../data/portfolio'

const statIcons = [FaGraduationCap, FaAward, FaRocket, FaProjectDiagram]

function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const [displayVal, setDisplayVal] = useState('0')

  useEffect(() => {
    if (!inView) return
    
    const numericPart = parseInt(value.replace(/[^0-9]/g, ''), 10) || 0
    const suffix = value.replace(/[0-9]/g, '')
    
    if (numericPart === 0) {
      setDisplayVal(value)
      return
    }

    const duration = 1200
    const startTime = performance.now()

    const updateNumber = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const easeProgress = progress * (2 - progress) // easeOutQuad
      const current = Math.floor(easeProgress * numericPart)
      
      setDisplayVal(`${current}${suffix}`)

      if (progress < 1) {
        requestAnimationFrame(updateNumber)
      } else {
        setDisplayVal(value)
      }
    }

    requestAnimationFrame(updateNumber)
  }, [inView, value])

  return <span ref={ref}>{displayVal}</span>
}

export default function AboutSection() {
  return (
    <section id="about" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About"
          title="Building software that blends engineering depth with research rigor."
          description="I am Mukul Sangwan, a Computer Science and Engineering graduate from VIT Chennai with strong interests in backend development, artificial intelligence, machine learning, and enterprise software development."
        />

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-[2rem] border border-slate-200/70 bg-white/80 p-8 shadow-xl shadow-slate-900/5 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/70"
            >
              <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
                {portfolio.about}
              </p>
              <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
                I am especially motivated by systems that sit at the intersection of reliability, performance, and intelligent decision-making. My published research in IEEE Access reflects that same curiosity for building practical, high-impact technology.
              </p>

              {/* Education Timeline */}
              <h3 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Education</h3>
              <div className="mt-6 relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 pl-6 space-y-8">
                {portfolio.education.map((item) => (
                  <div key={item.institution} className="relative">
                    {/* Circle dot marker */}
                    <div className="absolute -left-[35px] top-1.5 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-xs text-white shadow-md border-2 border-white dark:border-slate-950">
                      🎓
                    </div>
                    <div className="rounded-[1.5rem] border border-slate-200/70 bg-slate-50/80 p-5 dark:border-slate-800 dark:bg-slate-950/70 hover:shadow-md transition duration-300">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-slate-200/70 bg-white p-2 shadow-sm dark:border-slate-800 dark:bg-slate-950">
                          <img src={item.logo} alt={item.alt} className="h-full w-full object-contain" />
                        </div>
                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-cyan-600 dark:text-cyan-400">Institution</p>
                          <h4 className="text-base font-bold text-slate-900 dark:text-white">{item.institution}</h4>
                        </div>
                      </div>
                      <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                        <span className="font-semibold text-slate-800 dark:text-slate-200">{item.degree}</span><br />
                        {item.details ? `${item.details} • ` : ''}{item.duration}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </Reveal>

          <div className="space-y-6">
            <div className="rounded-[1.75rem] border border-slate-200/70 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 p-6 text-white shadow-[0_20px_45px_rgba(15,23,42,0.16)] dark:border-slate-850">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-cyan-300">Quick snapshot</p>
              <p className="mt-2 text-xl font-bold">A few metrics that define the work so far.</p>
              <p className="mt-2 text-sm text-slate-350 leading-6">Translating academic principles into enterprise execution and published research results.</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {portfolio.stats.map((stat, index) => {
                const Icon = statIcons[index % statIcons.length]
                return (
                  <Reveal key={stat.label}>
                    <motion.div
                      whileHover={{ y: -4, scale: 1.01 }}
                      className="relative overflow-hidden rounded-[1.5rem] border border-slate-200/70 bg-white/80 p-6 shadow-lg shadow-slate-900/5 backdrop-blur-xl transition-all duration-300 dark:border-slate-800 dark:bg-slate-900/70"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10" />
                      <div className="relative">
                        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-sm text-white shadow-lg shadow-cyan-500/20">
                          <Icon />
                        </div>
                        <p className="text-3xl font-bold leading-none text-slate-900 dark:text-white">
                          <CountUp value={stat.value} />
                        </p>
                        <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">{stat.label}</p>
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
