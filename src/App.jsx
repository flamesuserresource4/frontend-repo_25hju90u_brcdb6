import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        {/* About could be added later. For now sections flow from hero to projects to contact. */}
        <Contact />
      </main>
      <footer className="border-t border-black/5 py-10">
        <div className="max-w-7xl mx-auto px-6 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <p className="text-gray-500">Built with React, Tailwind, and a playful 3D touch.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
