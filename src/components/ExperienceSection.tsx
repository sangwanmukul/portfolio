import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { portfolio } from '../data/portfolio'

export default function ExperienceSection() {
  return (
    <section id="experience" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Experience"
          title="Enterprise software work with a strong product mindset."
          description="My internships and projects have focused on building reliable systems that support real-world banking and research workflows."
        />

        <div className="space-y-6">
          {portfolio.experience.map((item, index) => (
            <Reveal key={`${item.company}-${index}`}>
              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                className="rounded-[2rem] border border-slate-200/70 bg-white/80 p-8 shadow-xl shadow-slate-900/5 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/70"
              >
                <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-slate-200/70 bg-white p-2 shadow-sm dark:border-slate-800 dark:bg-slate-950">
                        {item.company === 'Decimal Technologies Pvt. Ltd.' ? (
                          <img src="/decimal.jpeg" alt="Decimal Technologies" className="h-full w-full object-contain" />
                        ) : item.company === 'Infosys Springboard' ? (
                          <img src="/infosys.png" alt="Infosys Springboard" className="h-full w-full object-contain" />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-sm font-semibold text-white">
                            {item.company.charAt(0)}
                          </div>
                        )}
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">{item.role}</h3>
                        <p className="text-lg font-medium text-cyan-600 dark:text-cyan-300">{item.company}</p>
                      </div>
                    </div>
                    <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">{item.location} • {item.duration}</p>
                    <p className="mt-2 text-base font-medium text-slate-500 dark:text-slate-400">Client: {item.client}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <span key={tech} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-950/80 dark:text-slate-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <ul className="mt-6 space-y-3 text-lg leading-8 text-slate-600 dark:text-slate-300">
                  {item.description.split('. ').map((description) => (
                    <li key={description} className="flex gap-3">
                      <span className="mt-3 h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" />
                      <span>{description}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
