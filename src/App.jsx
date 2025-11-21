import { useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Featured from './components/Featured'
import Catalog from './components/Catalog'

function App() {
  const catalogRef = useRef(null)

  const handleSearch = (q) => {
    // Scroll to catalog; Catalog has own search field too
    const el = document.getElementById('catalog')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    // Catalog component handles live search internally
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <Navbar onSearch={handleSearch} />
      <Hero />
      <Featured />
      <Catalog />
      <footer className="border-t border-slate-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Auré Market. All rights reserved.</p>
          <nav className="flex items-center gap-6 text-sm text-slate-600">
            <a href="#featured" className="hover:text-slate-900">Featured</a>
            <a href="#catalog" className="hover:text-slate-900">Catalog</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default App
