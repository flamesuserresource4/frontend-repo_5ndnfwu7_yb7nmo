function Progress() {
  return (
    <section id="progress" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold text-white mb-3">System Rang i Osiągnięć</h2>
            <p className="text-slate-300/85 mb-4">
              Zdobywaj rangi, odblokuj osiągnięcia i ekskluzywne nagrody. System progresji pozwala na rozwój postaci w
              unikalny sposób. Pokaż swoje osiągnięcia i zdobywaj szacunek społeczności!
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { t: 'Rangi', d: 'Od Nowicjusza po Legendę.' },
                { t: 'Osiągnięcia', d: 'Wyzwania dzienne i sezonowe.' },
                { t: 'Nagrody', d: 'Kosmetyki, tytuły i bonusy.' },
                { t: 'Sezony', d: 'Rywalizuj w rankingach.' },
              ].map((b, i) => (
                <div key={i} className="rounded-xl border border-slate-700/60 bg-slate-900/60 p-4">
                  <div className="text-white font-semibold">{b.t}</div>
                  <div className="text-slate-300/85 text-sm">{b.d}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-slate-700/60 bg-slate-900">
            <img src="https://images.unsplash.com/photo-1597808384145-4c5d48759943?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxSYW5naXxlbnwwfDB8fHwxNzYzNDI3MzA1fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Rangi" className="w-full h-80 object-cover opacity-90" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Progress
