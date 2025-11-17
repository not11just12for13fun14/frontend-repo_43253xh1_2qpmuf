import { motion } from 'framer-motion'

// About section with balanced layout
export default function About({ t }) {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="absolute -inset-4 -z-0 rounded-3xl bg-gradient-to-br from-rose-100 to-rose-50" />
          <div className="relative z-10 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-900">{t.about.title}</h3>
            <p className="mt-3 text-gray-700 leading-relaxed">{t.about.p1}</p>
            <p className="mt-3 text-gray-700 leading-relaxed">{t.about.p2}</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <ul className="grid gap-3">
            {t.about.highlights.map((h, i) => (
              <li key={i} className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <p className="text-gray-800">{h}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
