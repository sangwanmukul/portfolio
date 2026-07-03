import { motion } from 'framer-motion'
import { FaBookOpen, FaFileAlt, FaLink } from 'react-icons/fa'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { portfolio } from '../data/portfolio'

export default function ResearchSection() {
  return (
    <section id="research" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Research"
          title="A publication that reflects technical depth and real-world relevance."
          description="My research work focuses on robustness, explainability, and the practical use of machine learning in adversarial environments."
        />

        <Reveal>
          <motion.div
            whileHover={{ y: -8, scale: 1.01 }}
            className="rounded-[2rem] border border-slate-200/70 bg-gradient-to-br from-white via-slate-50 to-cyan-50/70 p-8 shadow-2xl shadow-slate-900/10 backdrop-blur-xl dark:border-slate-800 dark:from-slate-900/80 dark:via-slate-900 dark:to-slate-950"
          >
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 text-white">
                    <FaBookOpen />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-300">IEEE Access</p>
                    <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">{portfolio.research.title}</h3>
                  </div>
                </div>
                <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
                  {portfolio.research.abstract}
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-slate-200/70 bg-white/80 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950/70">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Citation</p>
                <p className="mt-3 text-lg font-medium text-slate-900 dark:text-white">M. Sangwan et al., {portfolio.research.year}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={portfolio.research.doi} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-2 text-sm font-bold text-white shadow-lg shadow-blue-500/30 transition hover:-translate-y-1 hover:shadow-xl">
                    <FaLink /> DOI
                  </a>
                  <a href={portfolio.research.paper} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 rounded-full border-2 border-blue-600 px-5 py-2 text-sm font-bold text-blue-600 shadow-md transition hover:-translate-y-1 hover:shadow-lg dark:border-blue-400 dark:text-blue-300">
                    <FaFileAlt /> Paper
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {portfolio.research.highlights.map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200/70 bg-white/70 p-4 text-sm font-medium text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-950/70 dark:text-slate-200">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  )
}
