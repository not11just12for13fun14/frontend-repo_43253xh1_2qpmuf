import { motion } from 'framer-motion'
import { Github } from 'lucide-react'

// Projects grid with placeholders and links
export default function Projects({ t }) {
  const projects = [
    {
      title: t.projects.items[0].title,
      desc: t.projects.items[0].desc,
      img: 'https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&w=1200&auto=format&fit=crop',
      url: 'https://github.com/yourname/project-1'
    },
    {
      title: t.projects.items[1].title,
      desc: t.projects.items[1].desc,
      img: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=1200&auto=format&fit=crop',
      url: 'https://github.com/yourname/project-2'
    },
    {
      title: t.projects.items[2].title,
      desc: t.projects.items[2].desc,
      img: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
      url: 'https://github.com/yourname/project-3'
    }
  ]

  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">{t.projects.title}</h2>
          <p className="mt-2 max-w-2xl text-gray-600">{t.projects.subtitle}</p>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
          >
            <div className="aspect-[16/10] overflow-hidden">
              <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{p.desc}</p>
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                <Github className="h-4 w-4" /> {t.projects.viewCode}
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
