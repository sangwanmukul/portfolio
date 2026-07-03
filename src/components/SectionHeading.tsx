import { motion } from 'framer-motion'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description: string
}

export default function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="mb-10 max-w-3xl"
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-500">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">{title}</h2>
      <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">{description}</p>
    </motion.div>
  )
}
