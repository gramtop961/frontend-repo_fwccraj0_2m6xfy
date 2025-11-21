import { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

export default function Featured() {
  const [items, setItems] = useState([])

  useEffect(() => {
    const load = async () => {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      try {
        const res = await fetch(`${baseUrl}/products/featured`)
        if (!res.ok) throw new Error('Failed to load featured products')
        const data = await res.json()
        setItems(data)
      } catch (e) {
        console.error(e)
      }
    }
    load()
  }, [])

  return (
    <section id="featured" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900">Featured Picks</h2>
          <p className="text-slate-600">Curated bestsellers across categories</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it, i) => (<ProductCard key={i} item={it} />))}
      </div>
    </section>
  )
}
