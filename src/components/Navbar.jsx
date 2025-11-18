import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/80 to-transparent" />
      <nav className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <a href="#hero" className="text-xl font-extrabold tracking-tight text-white">
          <span className="text-emerald-400">Relic</span> <span className="text-slate-200">Crafts</span>
        </a>

        <button
          className="sm:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800/60 text-slate-200 border border-slate-700/50"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        <div className="hidden sm:flex items-center gap-6">
          <a href="#features" className="text-slate-300 hover:text-white transition">Funkcje</a>
          <a href="#regions" className="text-slate-300 hover:text-white transition">Regiony</a>
          <a href="#economy" className="text-slate-300 hover:text-white transition">Ekonomia</a>
          <a href="#news" className="text-slate-300 hover:text-white transition">Aktualności</a>
        </div>

        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://discord.gg/your-link"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-lg bg-indigo-500/20 text-indigo-200 border border-indigo-400/30 hover:bg-indigo-500/30 transition"
          >
            Dołącz na Discord
          </a>
          <a
            href="https://sklep.twojserwer.pl"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-lg bg-emerald-500 text-white font-semibold shadow-md shadow-emerald-500/30 hover:shadow-emerald-500/50 transition"
          >
            Sklep
          </a>
        </div>
      </nav>

      {open && (
        <div className="sm:hidden bg-slate-900/95 border-t border-slate-800">
          <div className="px-4 py-4 space-y-3">
            <a href="#features" className="block text-slate-200">Funkcje</a>
            <a href="#regions" className="block text-slate-200">Regiony</a>
            <a href="#economy" className="block text-slate-200">Ekonomia</a>
            <a href="#news" className="block text-slate-200">Aktualności</a>
            <div className="flex gap-3 pt-2">
              <a href="https://discord.gg/your-link" target="_blank" rel="noreferrer" className="flex-1 text-center px-4 py-2 rounded-lg bg-indigo-500/20 text-indigo-200 border border-indigo-400/30">Discord</a>
              <a href="https://sklep.twojserwer.pl" target="_blank" rel="noreferrer" className="flex-1 text-center px-4 py-2 rounded-lg bg-emerald-500 text-white font-semibold">Sklep</a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
