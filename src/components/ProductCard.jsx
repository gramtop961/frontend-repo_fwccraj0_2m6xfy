import { Star } from 'lucide-react'

export default function ProductCard({ item }) {
  return (
    <div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
      <div className="aspect-[4/3] overflow-hidden bg-slate-100">
        <img src={`${item.image_url}?auto=format&fit=crop&w=900&q=60`} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-semibold text-slate-900 line-clamp-1">{item.title}</h3>
            <p className="text-sm text-slate-500 line-clamp-2">{item.description}</p>
          </div>
          <div className="flex items-center gap-1 text-amber-500">
            <Star className="w-4 h-4 fill-amber-400/70" />
            <span className="text-sm font-medium text-slate-700">{item.rating?.toFixed(1)}</span>
          </div>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-lg font-bold text-slate-900">${item.price.toFixed(2)}</span>
          <button className="rounded-full px-4 py-2 bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800">Add to bag</button>
        </div>
      </div>
    </div>
  )
}
