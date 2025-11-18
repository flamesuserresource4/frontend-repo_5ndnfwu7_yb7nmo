import { useEffect, useState } from 'react'

function NewsStatus() {
  const [news, setNews] = useState([
    { date: '2025-11-01', title: 'Start sezonu zimowego', body: 'Nowe eventy, nagrody i balans broni.' },
    { date: '2025-10-20', title: 'Aktualizacja ekonomii', body: 'Aukcje i sklepy graczy usprawnione.' },
  ])
  const [status, setStatus] = useState('Sprawdzanie...')

  useEffect(() => {
    const check = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/status`)
        if (!res.ok) throw new Error('bad')
        const data = await res.json()
        setStatus(data.ok ? 'Online' : 'Offline')
      } catch {
        setStatus('Offline')
      }
    }
    check()
    const id = setInterval(check, 30000)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="news" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-white mb-4">Aktualności</h2>
            <div className="space-y-4">
              {news.map((n, i) => (
                <article key={i} className="rounded-xl border border-slate-700/60 bg-slate-900/60 p-5">
                  <div className="text-xs text-slate-400">{n.date}</div>
                  <h3 className="text-lg text-white font-semibold">{n.title}</h3>
                  <p className="text-slate-300/85">{n.body}</p>
                </article>
              ))}
            </div>
          </div>
          <aside>
            <h2 className="text-3xl font-bold text-white mb-4">Status</h2>
            <div className="rounded-xl border border-slate-700/60 bg-slate-900/60 p-6">
              <div className="text-slate-300/85">Status serwera</div>
              <div className={`mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-full border ${status === 'Online' ? 'bg-emerald-500/20 border-emerald-400/40 text-emerald-200' : 'bg-rose-500/10 border-rose-400/30 text-rose-200'}`}>
                <span className={`w-2.5 h-2.5 rounded-full ${status === 'Online' ? 'bg-emerald-400' : 'bg-rose-400'}`} />
                {status}
              </div>
              <div className="mt-6">
                <div className="text-slate-400 text-sm">Adres</div>
                <div className="font-mono text-emerald-300">play.myheroalbion.pl</div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default NewsStatus
