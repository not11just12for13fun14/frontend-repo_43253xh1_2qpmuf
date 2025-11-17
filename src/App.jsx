import { useEffect, useMemo, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

// Simple i18n dictionary (EN default, SV alternative)
const DICT = {
  en: {
    brand: 'Your Name',
    nav: { home: 'Home', projects: 'Projects', about: 'About', contact: 'Contact' },
    hero: {
      title: 'Designer & Frontend Developer',
      subtitle: 'I build clear, purposeful interfaces with a calm aesthetic. Scroll down to see selected work and get in touch.',
      cv: 'Download CV',
      cvAria: 'Download my CV as PDF'
    },
    projects: {
      title: 'Selected Projects',
      subtitle: 'A snapshot of work and experiments. Each piece includes a short description and a link to the code.',
      viewCode: 'View on GitHub',
      items: [
        { title: 'Interface Exploration', desc: 'A clean, modular UI system focused on typography and motion.' },
        { title: 'Data Dashboard', desc: 'Lightweight charts and cards for quick, calm insights.' },
        { title: 'Micro Interactions', desc: 'Subtle animations that enhance clarity without clutter.' },
      ]
    },
    about: {
      title: 'About Me',
      p1: 'I love turning ideas into elegant, accessible products. My process is guided by clarity, empathy, and craft.',
      p2: 'Outside of work, you’ll find me exploring design systems, fine-tuning animations, and learning new tools.',
      highlights: [
        'Strong focus on accessibility and performance',
        'Comfortable across design and code',
        'Collaboration-first mindset'
      ]
    },
    contact: {
      title: 'Let’s talk',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      namePh: 'Your name',
      emailPh: 'you@example.com',
      messagePh: 'How can I help?',
      send: 'Send message',
      sending: 'Sending…',
      sent: 'Thanks! Your message has been sent.'
    },
    footer: '© ' + new Date().getFullYear() + ' Your Name. All rights reserved.'
  },
  sv: {
    brand: 'Ditt Namn',
    nav: { home: 'Hem', projects: 'Projekt', about: 'Om mig', contact: 'Kontakt' },
    hero: {
      title: 'Designer & Frontendutvecklare',
      subtitle: 'Jag bygger tydliga och genomtänkta gränssnitt med ett lugnt uttryck. Bläddra ned för utvalda projekt och kontakt.',
      cv: 'Ladda ner CV',
      cvAria: 'Ladda ner mitt CV som PDF'
    },
    projects: {
      title: 'Utvalda projekt',
      subtitle: 'Ett urval av arbete och experiment. Varje projekt har en kort beskrivning och en länk till koden.',
      viewCode: 'Se på GitHub',
      items: [
        { title: 'Gränssnittsutforskning', desc: 'Ett modulärt UI-system med fokus på typografi och rörelse.' },
        { title: 'Dataöversikt', desc: 'Lätta diagram och kort för snabba, lugna insikter.' },
        { title: 'Mikrointeraktioner', desc: 'Subtila animationer som förtydligar utan att störa.' },
      ]
    },
    about: {
      title: 'Om mig',
      p1: 'Jag gillar att omvandla idéer till eleganta och tillgängliga produkter. Mitt arbete drivs av tydlighet, empati och hantverk.',
      p2: 'Utanför jobbet utforskar jag designsystem, finjusterar animationer och lär mig nya verktyg.',
      highlights: [
        'Stort fokus på tillgänglighet och prestanda',
        'Bekväm i både design och kod',
        'Samarbetsinriktat arbetssätt'
      ]
    },
    contact: {
      title: 'Hör av dig',
      name: 'Namn',
      email: 'E-post',
      message: 'Meddelande',
      namePh: 'Ditt namn',
      emailPh: 'du@example.com',
      messagePh: 'Hur kan jag hjälpa till?',
      send: 'Skicka meddelande',
      sending: 'Skickar…',
      sent: 'Tack! Ditt meddelande har skickats.'
    },
    footer: '© ' + new Date().getFullYear() + ' Ditt Namn. Alla rättigheter förbehållna.'
  }
}

export default function App() {
  // Language state with localStorage persistence; English default
  const [lang, setLang] = useState(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem('lang') : null
    return stored || 'en'
  })

  useEffect(() => {
    localStorage.setItem('lang', lang)
  }, [lang])

  const t = useMemo(() => DICT[lang], [lang])

  // Social links (replace with your real profiles)
  const links = {
    github: 'https://github.com/yourname',
    linkedin: 'https://www.linkedin.com/in/yourprofile/'
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-rose-50/50 text-gray-900">
      {/* Top navigation with smooth anchors */}
      <Navbar t={t} />

      {/* Hero with Spline background and actions */}
      <Hero t={t} lang={lang} onLangChange={setLang} links={links} />

      {/* Projects grid */}
      <Projects t={t} />

      {/* About me */}
      <About t={t} />

      {/* Contact form */}
      <Contact t={t} />

      {/* Footer */}
      <Footer t={t} />
    </div>
  )
}
