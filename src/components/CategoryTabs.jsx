export default function CategoryTabs({ active, onChange }) {
  const tabs = [
    { key: 'all', label: 'All' },
    { key: 'women', label: 'Women Beauty' },
    { key: 'men', label: 'Men Grooming' },
    { key: 'home', label: 'Home Decor' },
  ]

  return (
    <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
      {tabs.map(t => (
        <button key={t.key} onClick={() => onChange?.(t.key)} className={`px-4 py-2 rounded-full border text-sm font-medium transition ${active === t.key ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'}`}>
          {t.label}
        </button>
      ))}
    </div>
  )
}
