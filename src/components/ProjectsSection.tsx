import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { portfolio } from '../data/portfolio'

export default function ProjectsSection() {
  return (
    <section id="projects" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Projects"
          title="Selected systems and research-driven products."
          description="Each project emphasizes product quality, technical depth, and the ability to ship reliable solutions in real-world contexts."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {portfolio.projects.map((project) => (
            <Reveal key={project.title}>
              <motion.article
                whileHover={{ y: -8, scale: 1.01 }}
                className="group overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white/80 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-all duration-300 dark:border-slate-800 dark:bg-slate-900/70"
              >
                <div className={`relative h-36 overflow-hidden bg-gradient-to-r ${project.accent}`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.28),_transparent_40%)]" />
                  <div className="absolute bottom-4 left-6 rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-sm">
                    Featured work
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
                      {project.publication ? (
                        <span className="mt-3 inline-flex rounded-full border border-amber-400/40 bg-amber-400/10 px-3 py-1 text-sm font-medium text-amber-600 dark:text-amber-300">
                          IEEE Access Publication
                        </span>
                      ) : null}
                    </div>
                    <div className="flex gap-2">
                      <a href={project.githubUrl} target="_blank" rel="noreferrer" className="rounded-full border border-slate-200 bg-slate-50 p-3 text-slate-700 transition hover:-translate-y-0.5 dark:border-slate-700 dark:bg-slate-950/80 dark:text-slate-100" aria-label={`View ${project.title} on GitHub`}>
                        <FaGithub />
                      </a>
                      {project.liveUrl ? (
                        <a href={project.liveUrl} target="_blank" rel="noreferrer" className="rounded-full border border-slate-200 bg-slate-50 p-3 text-slate-700 transition hover:-translate-y-0.5 dark:border-slate-700 dark:bg-slate-950/80 dark:text-slate-100" aria-label={`View live demo for ${project.title}`}>
                          <FaExternalLinkAlt />
                        </a>
                      ) : null}
                    </div>
                  </div>
                  <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-950/80 dark:text-slate-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
