import { useEffect, useState, useMemo } from 'react'
import CategoryTabs from './CategoryTabs'
import ProductCard from './ProductCard'

export default function Catalog() {
  const [items, setItems] = useState([])
  const [active, setActive] = useState('all')
  const [q, setQ] = useState('')
  const [loading, setLoading] = useState(false)

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const load = async (params = {}) => {
    setLoading(true)
    const url = new URL(`${baseUrl}/products`)
    const p = new URLSearchParams()
    Object.entries(params).forEach(([k,v])=>{ if(v !== undefined && v !== null && v !== '' ) p.set(k, v) })
    url.search = p.toString()
    const res = await fetch(url)
    const data = await res.json()
    setItems(data)
    setLoading(false)
  }

  useEffect(() => { load({}) }, [])

  const onTab = (tab) => {
    setActive(tab)
    const category = tab === 'all' ? undefined : tab
    load({ category, q })
  }

  const onSearch = (query) => {
    setQ(query)
    const category = active === 'all' ? undefined : active
    load({ category, q: query })
  }

  return (
    <section id="catalog" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900">Browse Catalog</h2>
        <CategoryTabs active={active} onChange={onTab} />
      </div>

      <div className="mb-6">
        <input value={q} onChange={(e)=>onSearch(e.target.value)} placeholder="Search products, brands, tags..." className="w-full md:max-w-xl bg-white border border-slate-200 rounded-xl px-4 py-3 shadow-sm outline-none focus:ring-2 focus:ring-slate-900/10" />
      </div>

      {loading ? (
        <div className="py-20 text-center text-slate-500">Loading products…</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (<ProductCard key={i} item={it} />))}
        </div>
      )}
    </section>
  )
}
