import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { Download, Github, Linkedin } from 'lucide-react'

// Hero section with Spline background and primary actions
export default function Hero({ t, lang, onLangChange, links }) {
  return (
    <section id="home" className="relative h-[85vh] min-h-[560px] w-full overflow-hidden">
      {/* 3D cover background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay for readability (does not block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/90" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
        >
          {t.hero.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 max-w-2xl text-base text-gray-700 sm:text-lg"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* Primary actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800"
            aria-label={t.hero.cvAria}
          >
            <Download className="h-4 w-4" /> {t.hero.cv}
          </a>

          {/* Social icons */}
          <div className="flex items-center gap-2">
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-3 text-sm font-medium text-gray-700 shadow-sm ring-1 ring-gray-200 transition hover:bg-white"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-3 text-sm font-medium text-gray-700 shadow-sm ring-1 ring-gray-200 transition hover:bg-white"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </motion.div>

        {/* Language toggle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 flex items-center gap-2"
        >
          <button
            onClick={() => onLangChange('en')}
            className={`rounded-full px-3 py-1 text-sm font-medium transition ${lang === 'en' ? 'bg-gray-900 text-white' : 'bg-white/70 text-gray-700 ring-1 ring-gray-200 hover:bg-white'}`}
          >
            EN
          </button>
          <button
            onClick={() => onLangChange('sv')}
            className={`rounded-full px-3 py-1 text-sm font-medium transition ${lang === 'sv' ? 'bg-gray-900 text-white' : 'bg-white/70 text-gray-700 ring-1 ring-gray-200 hover:bg-white'}`}
          >
            SV
          </button>
        </motion.div>
      </div>
    </section>
  )
}
