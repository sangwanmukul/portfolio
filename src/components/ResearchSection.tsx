import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaBookOpen, FaFileAlt, FaLink, FaCopy, FaCheck } from 'react-icons/fa'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { portfolio } from '../data/portfolio'

export default function ResearchSection() {
  const [copied, setCopied] = useState(false)

  const handleCopyBib = () => {
    const bib = `@article{sangwan2026lmacd,
  title={L-MACD: Learning-Based Adaptive CAPTCHA Defense Against Multimodal AI Attacks},
  author={Sangwan, Mukul and others},
  journal={IEEE Access},
  year={2026},
  publisher={IEEE}
}`
    navigator.clipboard.writeText(bib)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

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
            whileHover={{ y: -4 }}
            className="rounded-[2.5rem] border border-slate-200/70 bg-gradient-to-br from-white via-slate-50/50 to-cyan-50/20 p-8 md:p-10 shadow-2xl shadow-slate-900/5 backdrop-blur-xl dark:border-slate-800 dark:from-slate-900/60 dark:via-slate-900 dark:to-slate-950/70"
          >
            <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
              {/* Left Column: Abstract & Metadata */}
              <div className="space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-md">
                    <FaBookOpen size={18} />
                  </div>
                  <div>
                    <span className="rounded-full bg-cyan-100 dark:bg-cyan-950/60 border border-cyan-300/30 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-400">
                      IEEE Access
                    </span>
                    <span className="ml-2 text-xs font-mono font-semibold text-slate-400 dark:text-slate-500">Year: {portfolio.research.year}</span>
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white leading-tight">
                  {portfolio.research.title}
                </h3>

                <div className="border-t border-slate-200/60 dark:border-slate-800/80 pt-6">
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 mb-3">Abstract</h4>
                  <p className="text-base md:text-lg leading-8 text-slate-600 dark:text-slate-300">
                    {portfolio.research.abstract}
                  </p>
                </div>

                <div className="grid gap-3 pt-4 sm:grid-cols-3">
                  {portfolio.research.highlights.map((item) => (
                    <div key={item} className="flex items-center gap-2 rounded-2xl border border-slate-200/40 bg-white/50 p-4 text-xs font-bold text-slate-700 shadow-sm dark:border-slate-850 dark:bg-slate-950/40 dark:text-slate-300">
                      <span className="text-cyan-500 text-base">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Citation & Quick Actions */}
              <div className="flex flex-col justify-between rounded-[2rem] border border-slate-200/70 bg-white/90 p-6 md:p-8 shadow-md dark:border-slate-800 dark:bg-slate-950/70">
                <div className="space-y-6">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400 dark:text-slate-500">Citation Info</p>
                    <p className="mt-3 font-semibold text-base text-slate-900 dark:text-white">
                      M. Sangwan et al., <span className="text-slate-500 dark:text-slate-400 font-normal">{portfolio.research.journal} (2026)</span>
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4 font-mono text-[10px] text-slate-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 leading-5 select-all relative overflow-x-auto">
                    <p className="text-slate-400">// BibTeX Citation</p>
                    <p>@article{'{'}sangwan2026lmacd,</p>
                    <p className="ml-3">title={'{'}L-MACD: Learning-Based...{'}'},</p>
                    <p className="ml-3">author={'{'}Sangwan, Mukul and others{'}'},</p>
                    <p className="ml-3">journal={'{'}IEEE Access{'}'}, year={'{'}2026{'}'}</p>
                    <p>{'}'}</p>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-3">
                  <button
                    onClick={handleCopyBib}
                    className="flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white hover:bg-slate-50 py-3 text-sm font-bold text-slate-700 shadow-sm transition hover:-translate-y-0.5 dark:border-slate-800 dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-slate-200"
                  >
                    {copied ? (
                      <>
                        <FaCheck className="text-emerald-500" /> Copied!
                      </>
                    ) : (
                      <>
                        <FaCopy /> Copy BibTeX
                      </>
                    )}
                  </button>

                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href={portfolio.research.doi}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 hover:shadow-xl"
                    >
                      <FaLink size={12} /> DOI
                    </a>
                    <a
                      href={portfolio.research.paper}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 rounded-full border-2 border-blue-600 py-2.5 text-sm font-bold text-blue-650 shadow-md transition hover:-translate-y-0.5 hover:bg-blue-50 dark:border-blue-500 dark:text-blue-300 dark:hover:bg-blue-950/20"
                    >
                      <FaFileAlt size={12} /> Paper PDF
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  )
}
