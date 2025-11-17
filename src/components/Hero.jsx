import { motion } from 'framer-motion'

export default function Hero({ onScrollToForm }) {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(56,189,248,0.2),transparent_40%),radial-gradient(circle_at_90%_20%,rgba(59,130,246,0.25),transparent_40%),radial-gradient(circle_at_50%_90%,rgba(147,51,234,0.2),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Transporte directo. Sin intermediarios. Sin comisiones.
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-xl">
            Conecta con transportistas verificados en España y reserva en minutos. Paga directamente al profesional y coordina por WhatsApp.
          </p>
          <div className="mt-6 flex gap-3">
            <button onClick={onScrollToForm} className="px-5 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-500">
              Solicitar presupuesto
            </button>
            <a href="#como-funciona" className="px-5 py-3 rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700">Cómo funciona</a>
          </div>
          <div className="mt-6 text-slate-400 text-sm">
            Local a España • Mudanzas, paquetería, motos, palets y más
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="bg-slate-900/60 border border-white/10 rounded-2xl p-6">
          <div className="grid grid-cols-2 gap-4 text-slate-200 text-sm">
            <div className="p-4 rounded-lg bg-slate-800/60">Precios directos</div>
            <div className="p-4 rounded-lg bg-slate-800/60">Transportistas verificados</div>
            <div className="p-4 rounded-lg bg-slate-800/60">Reserva en minutos</div>
            <div className="p-4 rounded-lg bg-slate-800/60">Soporte por WhatsApp</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
