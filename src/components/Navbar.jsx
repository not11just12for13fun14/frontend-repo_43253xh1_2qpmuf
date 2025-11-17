import { useEffect, useState } from 'react'
import { Menu } from 'lucide-react'

export default function Navbar({ t }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#home', label: t.nav.home },
    { href: '#projects', label: t.nav.projects },
    { href: '#about', label: t.nav.about },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <header className={`fixed inset-x-0 top-0 z-30 transition ${scrolled ? 'backdrop-blur bg-white/70 shadow-sm' : 'bg-transparent'}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-lg font-semibold tracking-tight text-gray-900">{t.brand}</a>

        <nav className="hidden gap-6 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-gray-700 hover:text-gray-900">{l.label}</a>
          ))}
        </nav>

        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          <Menu className="h-6 w-6 text-gray-900" />
        </button>
      </div>

      {open && (
        <div className="mx-auto max-w-6xl px-6 pb-4 md:hidden">
          <nav className="grid gap-2 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-lg px-2 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
