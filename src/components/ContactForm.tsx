import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { portfolio } from '../data/portfolio'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('loading')

    const form = event.currentTarget
    const formData = new FormData(form)
    
    // Add Web3Forms access key
    const accessKey = portfolio.web3formsKey || 'YOUR_WEB3FORMS_ACCESS_KEY'
    formData.append('access_key', accessKey)
    formData.append('subject', `New Message from Portfolio - ${formData.get('name')}`)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()
      if (data.success) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
          Name
          <input name="name" required className="mt-2 w-full rounded-2xl border-2 border-blue-200/50 bg-blue-50/50 px-4 py-3 font-medium text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-blue-700/50 dark:bg-blue-950/30 dark:text-white dark:focus:ring-blue-400/20" placeholder="Your name" />
        </label>
        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
          Email
          <input name="email" type="email" required className="mt-2 w-full rounded-2xl border-2 border-blue-200/50 bg-blue-50/50 px-4 py-3 font-medium text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-blue-700/50 dark:bg-blue-950/30 dark:text-white dark:focus:ring-blue-400/20" placeholder="you@example.com" />
        </label>
      </div>
      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">
        Message
        <textarea name="message" required rows={6} className="mt-2 min-h-36 w-full rounded-2xl border-2 border-blue-200/50 bg-blue-50/50 px-4 py-3 font-medium text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-blue-700/50 dark:bg-blue-950/30 dark:text-white dark:focus:ring-blue-400/20" placeholder="Tell me about the role, product, or idea you have in mind." />
      </label>
      <div className="flex flex-wrap items-center gap-4">
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} type="submit" disabled={status === 'loading'} className="group relative overflow-hidden rounded-full bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 px-8 py-3 font-bold text-white shadow-lg shadow-blue-500/40 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/60 disabled:opacity-70">
          <span className="relative">{status === 'loading' ? 'Sending...' : 'Send Message'}</span>
        </motion.button>
        {status === 'success' ? <span className="text-sm font-semibold text-emerald-500">✓ Message sent successfully.</span> : null}
        {status === 'error' ? <span className="text-sm font-semibold text-rose-500">✗ Something went wrong. Please check your access key.</span> : null}
      </div>
    </form>
  )
}
