function Regions() {
  return (
    <section id="regions" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold text-white mb-3">Regiony i Strefy PvP</h2>
            <p className="text-slate-300/85 mb-4">
              Mapa podzielona na regiony o zróżnicowanym ryzyku i nagrodach. Walcz o kontrolę, poluj na przeciwników,
              zbieraj cenne surowce w otwartym świecie i uważaj na zasadzki.
            </p>
            <ul className="space-y-2 text-slate-300/85">
              <li>• Zielone strefy – bezpieczne dla początkujących</li>
              <li>• Żółte strefy – umiarkowane ryzyko, lepsze nagrody</li>
              <li>• Czerwone strefy – pełne PvP, najwyższe nagrody</li>
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden border border-slate-700/60 bg-slate-900">
            <img src="https://images.unsplash.com/photo-1619468129361-605ebea04b44?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNYXBhfGVufDB8MHx8fDE3NjM0MjczMDN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Mapa" className="w-full h-80 object-cover opacity-90" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Economy() {
  return (
    <section id="economy" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="rounded-2xl overflow-hidden border border-slate-700/60 bg-slate-900 order-last lg:order-first">
            <img src="https://images.unsplash.com/photo-1633544664393-e6e6512e6e25?ixid=M3w3OTkxMTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjM0MjczMDR8&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Ekonomia" className="w-full h-80 object-cover opacity-90" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white mb-3">Ekonomia i Handel</h2>
            <p className="text-slate-300/85 mb-4">
              Rozbudowany system ekonomiczny z walutą, sklepami graczy i aukcjami. Handluj przedmiotami, zakładaj własne
              sklepy i buduj imperium handlowe.
            </p>
            <ul className="space-y-2 text-slate-300/85">
              <li>• Sklepy graczy i stoiska</li>
              <li>• Aukcje i wymiany</li>
              <li>• Misje i kontrakty gospodarcze</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Regions, Economy }
