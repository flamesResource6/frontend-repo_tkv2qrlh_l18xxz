import { motion } from 'framer-motion'

export default function HowItWorks() {
  const steps = [
    { title: 'Publica tu solicitud', desc: 'Indica origen, destino y tipo de carga. Es rápido y gratuito.' },
    { title: 'Conecta directo', desc: 'Recibe contacto de transportistas verificados sin comisiones.' },
    { title: 'Coordina por WhatsApp', desc: 'Ajusta detalles, hora y punto de encuentro fácilmente.' },
    { title: 'Seguimiento sencillo', desc: 'El transportista actualiza el estado y ubicación en tiempo real.' },
  ]
  return (
    <section id="como-funciona" className="relative py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-white">Cómo funciona</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {steps.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-slate-900/60 border border-white/10 rounded-xl p-5">
              <div className="text-slate-300 text-sm">Paso {i + 1}</div>
              <div className="mt-2 text-white font-medium">{s.title}</div>
              <div className="mt-1 text-slate-400 text-sm">{s.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
