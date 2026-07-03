import { motion } from 'framer-motion'
import { FaAward, FaBookOpen, FaCertificate, FaMedal } from 'react-icons/fa'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { portfolio } from '../data/portfolio'

const iconMap = {
  publication: FaBookOpen,
  academic: FaAward,
  certification: FaCertificate,
}

export default function AchievementsSection() {
  return (
    <section id="achievements" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Achievements"
          title="Recognition that complements strong technical execution."
          description="Beyond coursework and internships, I have pursued opportunities that sharpen both technical depth and professional credibility."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {portfolio.achievements.map((achievement) => {
            const Icon = iconMap[achievement.type as keyof typeof iconMap] || FaMedal
            return (
              <Reveal key={achievement.title}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="rounded-[2rem] border border-slate-200/70 bg-white/80 p-8 shadow-xl shadow-slate-900/5 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/70"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/20 text-lg">
                    <Icon />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-white leading-tight">{achievement.title}</h3>
                  <p className="mt-4 text-base leading-7 text-slate-650 dark:text-slate-350">{achievement.description}</p>
                </motion.div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
