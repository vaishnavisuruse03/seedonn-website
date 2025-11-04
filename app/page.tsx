export default function Page() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Wholesome grains, <span className="text-primary">freshly milled</span>.
          </h1>
          <p className="mt-6 text-lg text-slate-600">
            Seedonn brings you premium staples with transparent sourcing and uncompromised taste.
          </p>
          <div className="mt-8 flex gap-4">
            <a href="/products" className="px-6 py-3 rounded-2xl bg-primary text-white font-medium shadow">
              Shop Products
            </a>
            <a href="/about" className="px-6 py-3 rounded-2xl border border-slate-300">
              Learn More
            </a>
          </div>
        </div>
        <div className="rounded-2xl shadow-lg h-[360px] bg-slate-100 flex items-center justify-center">
          <span className="text-slate-400">Hero Image</span>
        </div>
      </div>
      <div className="bg-secondary/10 py-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          {[
            ["Stone-ground", "Traditional slow milling for better texture."],
            ["No additives", "Only pure grains. Nothing else."],
            ["Fast delivery", "Fresh packs to your doorstep."]
          ].map(([t,s],i)=> (
            <div key={i} className="bg-white rounded-2xl p-6 shadow">
              <h3 className="font-semibold text-lg">{t}</h3>
              <p className="text-slate-600 mt-2">{s}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
