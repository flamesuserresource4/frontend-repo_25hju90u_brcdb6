import Spline from '@splinetool/react-spline'
import { ArrowRight, Rocket } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative h-[92vh] md:h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle light gradient on top so text is readable; doesn't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto h-full px-6 flex items-center">
        <div className="w-full md:w-[60%] lg:w-[50%]">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 shadow-sm ring-1 ring-black/5 backdrop-blur">
            <Rocket className="h-4 w-4 text-indigo-600" />
            <span className="text-xs font-medium text-gray-700">Web Developer • React • FastAPI • UX</span>
          </div>

          <h1 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            Building modern, playful, and interactive web experiences
          </h1>
          <p className="mt-4 text-gray-700 text-lg md:text-xl leading-relaxed">
            I craft fast, accessible interfaces and solid backends. Explore selected projects below or get in touch to collaborate.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-white bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-emerald-500 hover:opacity-95 shadow-lg shadow-fuchsia-500/20"
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-5 py-3 rounded-lg text-indigo-700 bg-white/90 ring-1 ring-black/5 hover:bg-white"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
