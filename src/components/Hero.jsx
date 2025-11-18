import { useState } from 'react'

function copy(text) {
  navigator.clipboard.writeText(text)
}

function Hero() {
  const [copied, setCopied] = useState(false)
  const address = 'play.myheroalbion.pl'

  const onCopy = () => {
    copy(address)
    setCopied(true)
    setTimeout(() => setCopied(false), 1600)
  }

  return (
    <section id="hero" className="relative min-h-[95vh] flex items-center">
      {/* Background with Minecraft vibes */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM0MTE5NzJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center opacity-25" />
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_10%,rgba(2,6,23,0)_0%,rgba(2,6,23,0.85)_60%,rgba(2,6,23,1)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/30 to-slate-950" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-200 text-sm mb-6 pixel-corners">
            <span className="text-lg">🛡️</span> Polski serwer Minecraft RPG • PvP • PvE
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight font-medieval">
            Relic Crafts
          </h1>
          <p className="mt-4 text-lg text-slate-200/90 max-w-2xl">
            Otwarty Świat PvP / PvE, areny, eventy i dungeony z bossami. Rozwijaj specjalizacje broni,
            twórz buildy i rywalizuj z innymi graczami.
          </p>

          {/* Copyable address as main callout */}
          <div className="mt-8">
            <div className="relic-border shine rounded-2xl bg-slate-900/60 backdrop-blur px-4 py-3 inline-flex items-center gap-3 pixel-shadow">
              <img alt="grass block" className="w-8 h-8" src="https://images.unsplash.com/photo-1630008861693-c7284c1c5f82?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxncmFzcyUyMGJsb2NrfGVufDB8MHx8fDE3NjM0Mjc4NDF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" />
              <code className="font-mono text-emerald-300 text-lg sm:text-xl">{address}</code>
              <button onClick={onCopy} className="ml-2 px-3 py-1.5 rounded-md bg-emerald-600 text-white text-sm hover:bg-emerald-500 transition">
                {copied ? 'Skopiowano!' : 'Kopiuj'}
              </button>
            </div>
            <div className="text-xs text-slate-400 mt-2">Kliknij, aby skopiować i dołącz od razu w grze</div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#features" className="px-5 py-3 rounded-lg bg-emerald-500 text-white font-semibold shadow-md shadow-emerald-500/30 hover:shadow-emerald-500/50 transition">
              Zobacz funkcje
            </a>
            <a href="#news" className="px-5 py-3 rounded-lg bg-slate-800/70 text-slate-100 border border-slate-700/60 hover:bg-slate-800 transition">
              Aktualności
            </a>
          </div>
        </div>
      </div>

      {/* Floating decorative items */}
      <div className="pointer-events-none absolute left-4 sm:left-10 bottom-20 animate-[float_6s_ease-in-out_infinite]">
        <img src="https://images.unsplash.com/photo-1585717100767-8790792eae51?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNaWVjenxlbnwwfDB8fHwxNzYzNDI3ODQxfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Miecz" className="w-16 h-16 drop-shadow-xl" />
      </div>
      <div className="pointer-events-none absolute right-6 sm:right-16 top-24 animate-[float_7s_ease-in-out_infinite]">
        <img src="https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/0e/Shield_%28item%29_JE2_BE1.png" alt="Tarcza" className="w-16 h-16 drop-shadow-xl" />
      </div>
      <div className="pointer-events-none absolute right-24 bottom-10 hidden sm:block animate-[float_5.5s_ease-in-out_infinite]">
        <img src="https://images.unsplash.com/photo-1749408363180-1e45e3ee6f0b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxaJUM1JTgyb3RlJTIwamFiJUM1JTgya298ZW58MHwwfHx8MTc2MzQyNzg0M3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Złote jabłko" className="w-12 h-12 drop-shadow-xl" />
      </div>
    </section>
  )
}

export default Hero
