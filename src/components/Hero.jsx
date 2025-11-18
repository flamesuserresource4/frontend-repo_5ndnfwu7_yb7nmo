function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1520975661595-6453be3f7070?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/80 to-slate-950" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-200 text-sm mb-6">
            <span className="text-lg">🛡️</span> Polski serwer Minecraft RPG • PvP • PvE
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Relic Crafts
          </h1>
          <p className="mt-4 text-lg text-slate-200/90">
            Otwarty Świat PvP / PvE, areny, eventy i dungeony z bossami. Rozwijaj specjalizacje broni,
            twórz buildy i rywalizuj z innymi graczami.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#connect" className="px-5 py-3 rounded-lg bg-emerald-500 text-white font-semibold shadow-md shadow-emerald-500/30 hover:shadow-emerald-500/50 transition">
              Dołącz teraz
            </a>
            <a href="#features" className="px-5 py-3 rounded-lg bg-slate-800/70 text-slate-100 border border-slate-700/60 hover:bg-slate-800 transition">
              Zobacz funkcje
            </a>
          </div>
          <div className="mt-6 text-slate-300/80 text-sm">
            Adres serwera: <span className="font-mono text-emerald-300">play.myheroalbion.pl</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
