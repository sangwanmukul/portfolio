import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import ContactForm from './ContactForm'
import { portfolio } from '../data/portfolio'

export default function ContactSection() {
  return (
    <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s build something ambitious together."
          description="I’m always interested in thoughtful collaborations, impactful engineering challenges, and opportunities to contribute to meaningful products."
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <motion.div
              whileHover={{ y: -6, scale: 1.01 }}
              className="rounded-[2rem] border border-slate-200/70 bg-white/80 p-8 shadow-xl shadow-slate-900/5 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/70"
            >
              <div className="space-y-5">
                <a href={`mailto:${portfolio.email}`} className="flex items-center gap-4 rounded-2xl border border-slate-200/70 bg-slate-50/80 p-4 transition hover:-translate-y-0.5 hover:bg-white dark:border-slate-800 dark:bg-slate-950/70 dark:hover:bg-slate-900">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white"><FaEnvelope /></div>
                  <div><p className="text-sm uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">Email</p><p className="mt-1 font-medium text-slate-900 dark:text-white">{portfolio.email}</p></div>
                </a>
                <a href={`tel:${portfolio.phone}`} className="flex items-center gap-4 rounded-2xl border border-slate-200/70 bg-slate-50/80 p-4 transition hover:-translate-y-0.5 hover:bg-white dark:border-slate-800 dark:bg-slate-950/70 dark:hover:bg-slate-900">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white"><FaPhoneAlt /></div>
                  <div><p className="text-sm uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">Phone</p><p className="mt-1 font-medium text-slate-900 dark:text-white">{portfolio.phone}</p></div>
                </a>
                <a href={portfolio.github} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-2xl border border-slate-200/70 bg-slate-50/80 p-4 transition hover:-translate-y-0.5 hover:bg-white dark:border-slate-800 dark:bg-slate-950/70 dark:hover:bg-slate-900">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white"><FaGithub /></div>
                  <div><p className="text-sm uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">GitHub</p><p className="mt-1 font-medium text-slate-900 dark:text-white">github.com</p></div>
                </a>
                <a href={portfolio.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-2xl border border-slate-200/70 bg-slate-50/80 p-4 transition hover:-translate-y-0.5 hover:bg-white dark:border-slate-800 dark:bg-slate-950/70 dark:hover:bg-slate-900">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white"><FaLinkedin /></div>
                  <div><p className="text-sm uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">LinkedIn</p><p className="mt-1 font-medium text-slate-900 dark:text-white">linkedin.com</p></div>
                </a>
                <div className="flex items-center gap-4 rounded-2xl border border-slate-200/70 bg-slate-50/80 p-4 dark:border-slate-800 dark:bg-slate-950/70">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white"><FaMapMarkerAlt /></div>
                  <div><p className="text-sm uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">Location</p><p className="mt-1 font-medium text-slate-900 dark:text-white">{portfolio.location}</p></div>
                </div>
              </div>
            </motion.div>
          </Reveal>

          <Reveal>
            <motion.div
              whileHover={{ y: -6, scale: 1.01 }}
              className="rounded-[2rem] border border-slate-200/70 bg-white/80 p-8 shadow-xl shadow-slate-900/5 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/70"
            >
              <ContactForm />
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
