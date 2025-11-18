import { motion } from 'framer-motion'

function Progress() {
  return (
    <section id="progress" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold text-white mb-3 font-medieval">System Rang i Osiągnięć</h2>
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
                <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .45, delay: i * .08 }} className="rounded-xl border border-slate-700/60 bg-slate-900/60 p-4 shine">
                  <div className="text-white font-semibold">{b.t}</div>
                  <div className="text-slate-300/85 text-sm">{b.d}</div>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div initial={{ scale: .96, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: .5 }} className="rounded-2xl overflow-hidden border border-slate-700/60 bg-slate-900 shine">
            <img src="https://images.unsplash.com/photo-1597808384145-4c5d48759943?auto=format&fit=crop&w=1600&q=80" alt="Rangi" className="w-full h-80 object-cover opacity-90" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Progress
