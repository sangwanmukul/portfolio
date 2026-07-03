import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { send } from 'emailjs-com'

const serviceId = 'service_demo'
const templateId = 'template_demo'
const publicKey = 'demo_key'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('loading')

    const form = event.currentTarget
    const data = new FormData(form)

    try {
      await send(serviceId, templateId, {
        from_name: data.get('name'),
        reply_to: data.get('email'),
        message: data.get('message'),
      }, publicKey)
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
          Name
          <input name="name" required className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-cyan-500 dark:border-slate-700 dark:bg-slate-900" placeholder="Your name" />
        </label>
        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
          Email
          <input name="email" type="email" required className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-cyan-500 dark:border-slate-700 dark:bg-slate-900" placeholder="you@example.com" />
        </label>
      </div>
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
        Message
        <textarea name="message" required rows={6} className="mt-2 min-h-36 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-cyan-500 dark:border-slate-700 dark:bg-slate-900" placeholder="Tell me about the role, product, or idea you have in mind." />
      </label>
      <div className="flex flex-wrap items-center gap-4">
        <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} type="submit" disabled={status === 'loading'} className="rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/20 transition disabled:opacity-70">
          {status === 'loading' ? 'Sending...' : 'Send Message'}
        </motion.button>
        {status === 'success' ? <span className="text-sm font-medium text-emerald-500">Message sent successfully.</span> : null}
        {status === 'error' ? <span className="text-sm font-medium text-rose-500">Something went wrong. Please try again.</span> : null}
      </div>
    </form>
  )
}
