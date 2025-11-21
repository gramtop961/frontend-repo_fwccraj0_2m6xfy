import { useState } from 'react'
import { ShoppingBag, Search, Menu } from 'lucide-react'

export default function Navbar({ onSearch }) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')

  const submit = (e) => {
    e.preventDefault()
    onSearch?.(query)
  }

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button className="p-2 sm:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
              <Menu className="w-6 h-6 text-slate-700" />
            </button>
            <a href="/" className="font-extrabold tracking-tight text-xl text-slate-900">Auré</a>
          </div>

          <form onSubmit={submit} className="hidden md:flex items-center gap-2 w-full max-w-md bg-white/80 border border-slate-200 rounded-full px-3 py-2 shadow-sm">
            <Search className="w-5 h-5 text-slate-500" />
            <input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search scents, kits, decor..." className="w-full bg-transparent outline-none text-slate-700 placeholder:text-slate-400" />
          </form>

          <div className="flex items-center gap-4">
            <button className="relative p-2">
              <ShoppingBag className="w-6 h-6 text-slate-700" />
              <span className="absolute -top-1 -right-1 bg-slate-900 text-white text-[10px] rounded-full px-1.5">0</span>
            </button>
          </div>
        </div>

        {open && (
          <div className="pb-4 md:hidden">
            <form onSubmit={submit} className="flex items-center gap-2 w-full bg-white border border-slate-200 rounded-xl px-3 py-2 shadow-sm">
              <Search className="w-5 h-5 text-slate-500" />
              <input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search" className="w-full bg-transparent outline-none text-slate-700 placeholder:text-slate-400" />
            </form>
          </div>
        )}
      </div>
    </header>
  )
}
