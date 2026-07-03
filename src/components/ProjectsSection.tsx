import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import SectionHeading from './SectionHeading'
import { portfolio } from '../data/portfolio'

export default function ProjectsSection() {
  const [filter, setFilter] = useState<'All' | 'Backend' | 'AI & ML' | 'Research'>('All')

  const filteredProjects = portfolio.projects.filter(
    (project) => filter === 'All' || project.category === filter
  )

  return (
    <section id="projects" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Projects"
          title="Selected systems and research-driven products."
          description="Each project emphasizes product quality, technical depth, and the ability to ship reliable solutions in real-world contexts."
        />

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {(['All', 'Backend', 'AI & ML', 'Research'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                filter === cat
                  ? 'bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 text-white shadow-lg shadow-blue-500/20 scale-105'
                  : 'bg-white/80 border border-slate-200/60 text-slate-650 hover:bg-slate-50 dark:bg-slate-900/60 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-800/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid gap-6 md:grid-cols-2"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -8 }}
                key={project.title}
                className="group overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white/80 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-all duration-300 dark:border-slate-800 dark:bg-slate-900/70 flex flex-col justify-between"
              >
                <div>
                  <div className={`relative h-36 overflow-hidden bg-gradient-to-r ${project.accent}`}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.28),_transparent_40%)]" />
                    <div className="absolute bottom-4 left-6 rounded-full border border-white/30 bg-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-white backdrop-blur-sm">
                      {project.category}
                    </div>
                  </div>
                  <div className="p-8 pb-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white leading-tight">{project.title}</h3>
                        {project.publication ? (
                          <span className="mt-3 inline-flex rounded-full border border-amber-400/40 bg-amber-450/10 px-3 py-1 text-xs font-semibold text-amber-650 dark:text-amber-300">
                            IEEE Access Publication
                          </span>
                        ) : null}
                      </div>
                      <div className="flex gap-2 shrink-0">
                        <a href={project.githubUrl} target="_blank" rel="noreferrer" className="group rounded-full border border-blue-500/30 bg-blue-50/50 p-2.5 text-blue-600 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-500 dark:border-blue-800/40 dark:from-blue-950/50 dark:to-blue-900/50 dark:text-blue-300" aria-label={`View ${project.title} on GitHub`}>
                          <FaGithub className="group-hover:scale-110 transition" size={18} />
                        </a>
                        {project.liveUrl ? (
                          <a href={project.liveUrl} target="_blank" rel="noreferrer" className="group rounded-full border border-violet-500/30 bg-violet-50/50 p-2.5 text-violet-600 shadow-sm transition hover:-translate-y-0.5 hover:border-violet-500 dark:border-violet-800/40 dark:from-violet-950/50 dark:to-violet-900/50 dark:text-violet-300" aria-label={`View live demo for ${project.title}`}>
                            <FaExternalLinkAlt className="group-hover:scale-110 transition" size={16} />
                          </a>
                        ) : null}
                      </div>
                    </div>
                    <p className="mt-6 text-base leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>
                  </div>
                </div>
                <div className="p-8 pt-0">
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="rounded-full border border-slate-200 bg-slate-100/50 px-3.5 py-1.5 text-xs font-semibold text-slate-700 dark:border-slate-800 dark:bg-slate-950/50 dark:text-slate-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
