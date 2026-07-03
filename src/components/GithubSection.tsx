import { motion } from 'framer-motion'
import { SiGithub } from 'react-icons/si'
import Reveal from './Reveal'

const metrics = [
  { label: 'Repositories', value: '12+' },
  { label: 'Contributions', value: '150+' },
  { label: 'Languages', value: '8' },
  { label: 'Stars', value: '40+' },
]

export default function GithubSection() {
  return (
    <section id="github" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <motion.div
            whileHover={{ y: -6, scale: 1.01 }}
            className="rounded-[2rem] border border-slate-200/70 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 text-white shadow-2xl shadow-slate-900/20 dark:border-slate-800"
          >
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-2xl">
                    <SiGithub />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">GitHub</p>
                    <h2 className="text-3xl font-semibold">Open-source curiosity with production-minded execution.</h2>
                  </div>
                </div>
                <p className="mt-6 text-lg leading-8 text-slate-300">
                  I enjoy building tools, experiments, and backend systems that are useful, readable, and easy to extend. GitHub is a place where I keep that momentum visible and collaborative.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {metrics.map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                    <p className="text-3xl font-semibold">{metric.value}</p>
                    <p className="mt-1 text-sm uppercase tracking-[0.25em] text-slate-300">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  )
}
