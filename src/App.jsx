import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import { Regions, Economy } from './components/Sections'
import Progress from './components/Progress'
import NewsStatus from './components/NewsStatus'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Features />
        <Regions />
        <Progress />
        <Economy />
        <NewsStatus />
        <footer className="py-10 border-t border-slate-800/70 bg-slate-950/80">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-slate-400 text-sm">
            © {new Date().getFullYear()} Relic Crafts • Niezależny projekt społeczności
          </div>
        </footer>
      </main>
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(60vw_60vw_at_50%_-10%,rgba(16,185,129,0.08),transparent)]" />
    </div>
  )
}

export default App
