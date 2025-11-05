import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Realtime Dashboard',
    description:
      'A live analytics dashboard with streaming charts, role-based access, and dark mode.',
    tech: ['React', 'FastAPI', 'WebSockets', 'Tailwind'],
    link: '#',
  },
  {
    title: 'E-commerce Starter',
    description:
      'Headless storefront with product search, cart, checkout, and Stripe integration.',
    tech: ['React', 'FastAPI', 'Stripe', 'MongoDB'],
    link: '#',
  },
  {
    title: 'Portfolio Engine',
    description:
      'Ultra-fast static + dynamic personal site with CMS hooks and animations.',
    tech: ['Vite', 'Framer Motion', 'MDX'],
    link: '#',
  },
]

function ProjectCard({ title, description, tech, link }) {
  return (
    <div className="group relative rounded-2xl bg-white/70 backdrop-blur border border-black/5 p-6 shadow-sm hover:shadow-lg transition-all">
      <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-indigo-500/20 via-fuchsia-500/20 to-emerald-500/20 pointer-events-none" />
      <div className="relative">
        <div className="h-36 w-full rounded-xl bg-gradient-to-br from-indigo-100 via-fuchsia-100 to-emerald-100 mb-5" />
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-700">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((t) => (
            <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-black/5 text-gray-700">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-5">
          <a
            href={link}
            className="inline-flex items-center gap-2 text-indigo-700 hover:text-indigo-900"
          >
            View project <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 bg-gradient-to-b from-white to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured projects</h2>
          <p className="mt-3 text-gray-700 max-w-2xl">
            A selection of work focused on performance, delightful UX, and solid engineering.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}
