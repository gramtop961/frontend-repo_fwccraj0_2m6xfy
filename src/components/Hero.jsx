import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[520px] md:h-[640px] bg-gradient-to-br from-purple-100 via-violet-100 to-indigo-100">
        <Spline scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent"></div>
      </div>

      <div className="absolute inset-0 flex items-end">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-10">
          <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-6 sm:p-8 border border-white/60">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">The Fragrance of Creativity</h1>
                <p className="mt-2 text-slate-600 max-w-2xl">A curated marketplace for modern beauty, grooming, and decor. Discover pieces that elevate rituals and spaces with minimalist elegance.</p>
              </div>
              <div className="flex gap-3">
                <a href="#catalog" className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white px-6 py-3 font-semibold shadow-md hover:shadow-lg transition">Shop Now</a>
                <a href="#featured" className="inline-flex items-center justify-center rounded-full bg-white text-slate-900 border border-slate-200 px-6 py-3 font-semibold hover:bg-slate-50 transition">Explore</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
