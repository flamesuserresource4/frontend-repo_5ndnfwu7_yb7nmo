function Features() {
  const items = [
    { icon: '🎭', title: 'Elementy RPG', desc: 'Rozwijaj swoją postać i buduj unikalne buildy.' },
    { icon: '🧪', title: 'Zaawansowany crafting', desc: 'Twórz potężne przedmioty i relikty.' },
    { icon: '⛏️', title: 'Progresja w zbieractwie', desc: 'Odkrywaj, wydobywaj i ulepszaj narzędzia.' },
    { icon: '⚔️', title: 'Specjalizacje broni', desc: 'Wybierz styl walki i opanuj preferowaną broń.' },
    { icon: '🏹', title: 'PvP i PvE', desc: 'Zbalansowane starcia i wyzwania dla wszystkich.' },
    { icon: '🏰', title: 'Dungeony i Bossowie', desc: 'Współpracuj w wyprawach i poluj na skarby.' },
  ]

  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">Najważniejsze funkcje</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((f, i) => (
            <div key={i} className="relative rounded-2xl border border-slate-700/60 bg-slate-900/60 p-6 hover:border-emerald-400/40 transition group">
              <div className="text-2xl mb-3">{f.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-1">{f.title}</h3>
              <p className="text-slate-300/80">{f.desc}</p>
              <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/10 group-hover:to-transparent transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
