import { useState } from 'react'
import { motion } from 'framer-motion'

// Contact form with basic client-side validation
export default function Contact({ t }) {
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  async function onSubmit(e) {
    e.preventDefault()
    setStatus('')
    setLoading(true)
    // Placeholder: simulate send
    await new Promise(r => setTimeout(r, 800))
    setLoading(false)
    setStatus(t.contact.sent)
    e.target.reset()
  }

  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center text-3xl font-semibold text-gray-900 sm:text-4xl"
      >
        {t.contact.title}
      </motion.h2>

      <form onSubmit={onSubmit} className="mt-10 grid gap-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">{t.contact.name}</label>
          <input required name="name" type="text" className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 shadow-sm focus:border-gray-900 focus:outline-none" placeholder={t.contact.namePh} />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">{t.contact.email}</label>
          <input required name="email" type="email" className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 shadow-sm focus:border-gray-900 focus:outline-none" placeholder={t.contact.emailPh} />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">{t.contact.message}</label>
          <textarea required name="message" rows="5" className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 shadow-sm focus:border-gray-900 focus:outline-none" placeholder={t.contact.messagePh} />
        </div>
        <div className="mt-2 flex items-center justify-between">
          <button type="submit" disabled={loading} className="rounded-full bg-gray-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800 disabled:opacity-60">
            {loading ? t.contact.sending : t.contact.send}
          </button>
          <p className="text-sm text-gray-600">{status}</p>
        </div>
      </form>
    </section>
  )
}
