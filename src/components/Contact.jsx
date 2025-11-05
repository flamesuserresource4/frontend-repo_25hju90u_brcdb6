import { Mail, Github, Linkedin } from 'lucide-react'

export default function Contact() {
  const email = 'you@example.com'
  return (
    <section id="contact" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Let’s build something</h2>
          <p className="mt-3 text-gray-700 max-w-2xl">
            I’m available for freelance and full-time opportunities. Tell me about your idea and I’ll get back within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                window.location.href = `mailto:${email}`
              }}
              className="rounded-2xl bg-white/70 backdrop-blur border border-black/5 p-6 shadow-sm"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-700">Name</label>
                  <input
                    type="text"
                    required
                    className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-700">Email</label>
                  <input
                    type="email"
                    required
                    className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="text-sm text-gray-700">Message</label>
                <textarea
                  rows="5"
                  required
                  className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <button
                type="submit"
                className="mt-5 inline-flex items-center gap-2 px-5 py-3 rounded-lg text-white bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-emerald-500 hover:opacity-95 shadow-lg shadow-fuchsia-500/20"
              >
                Send Email
                <Mail className="h-4 w-4" />
              </button>
            </form>
          </div>

          <div className="rounded-2xl bg-white/70 backdrop-blur border border-black/5 p-6 shadow-sm h-fit">
            <h3 className="font-semibold text-gray-900">Elsewhere</h3>
            <p className="mt-2 text-gray-700">Prefer platforms? Find me here:</p>
            <div className="mt-4 flex flex-col gap-2">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-gray-800 hover:text-gray-900"
              >
                <Github className="h-5 w-5" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-gray-800 hover:text-gray-900"
              >
                <Linkedin className="h-5 w-5" /> LinkedIn
              </a>
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 text-gray-800 hover:text-gray-900"
              >
                <Mail className="h-5 w-5" /> {email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
