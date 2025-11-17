import { useState } from 'react'
import { motion } from 'framer-motion'

const initialState = {
  name: '',
  whatsapp: '',
  pickup_city: '',
  dropoff_city: '',
  item_type: 'Paquete',
  date_iso: '',
}

export default function RequestForm({ onSuccess }) {
  const [form, setForm] = useState(initialState)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`${backend}/api/bookings/intent`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          phone: form.whatsapp,
          whatsapp_number: form.whatsapp,
          pickup_city: form.pickup_city,
          dropoff_city: form.dropoff_city,
          item_type: form.item_type,
          date_iso: form.date_iso,
        }),
      })
      if (!res.ok) throw new Error('No se pudo crear la solicitud')
      const data = await res.json()
      onSuccess?.(data.id)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const waText = encodeURIComponent(`Hola, soy ${form.name}. Necesito transporte para ${form.item_type} de ${form.pickup_city} a ${form.dropoff_city} el ${form.date_iso}. ¿Disponibilidad?`)
  const waLink = form.whatsapp ? `https://wa.me/${form.whatsapp.replace('+','').replace(/\s/g,'')}?text=${waText}` : '#'

  return (
    <section id="solicitud" className="relative py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white/95 rounded-2xl shadow-xl p-6">
          <h2 className="text-2xl font-semibold text-slate-900">Solicita tu transporte</h2>
          <p className="text-slate-600 text-sm mt-1">Conecta directo con el transportista por WhatsApp</p>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div className="sm:col-span-2">
              <label className="block text-sm text-slate-700">Nombre</label>
              <input required name="name" value={form.name} onChange={handleChange} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm text-slate-700">WhatsApp</label>
              <input required name="whatsapp" value={form.whatsapp} onChange={handleChange} placeholder="+34 600 000 000" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm text-slate-700">Tipo de carga</label>
              <select name="item_type" value={form.item_type} onChange={handleChange} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Paquete</option>
                <option>Muebles</option>
                <option>Moto</option>
                <option>Palet</option>
                <option>Electrodoméstico</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-slate-700">Fecha</label>
              <input required type="date" name="date_iso" value={form.date_iso} onChange={handleChange} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm text-slate-700">Ciudad de origen</label>
              <input required name="pickup_city" value={form.pickup_city} onChange={handleChange} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm text-slate-700">Ciudad de destino</label>
              <input required name="dropoff_city" value={form.dropoff_city} onChange={handleChange} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            {error && <p className="sm:col-span-2 text-sm text-red-600">{error}</p>}
            <div className="sm:col-span-2 flex flex-wrap gap-3 items-center">
              <button disabled={loading} className="px-5 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-500 disabled:opacity-60">
                {loading ? 'Enviando...' : 'Guardar solicitud'}
              </button>
              <a target="_blank" rel="noreferrer" href={waLink} className="px-5 py-3 rounded-lg bg-green-600 text-white hover:bg-green-500">
                Abrir WhatsApp
              </a>
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  )
}
