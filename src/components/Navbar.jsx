import { Menu, Search, User } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-slate-900/60 border-b border-white/10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="Logo" className="w-8 h-8" />
          <span className="text-white font-semibold">Sin Intermediarios</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#como-funciona" className="text-slate-300 hover:text-white">Cómo funciona</a>
          <a href="#precios" className="text-slate-300 hover:text-white">Precios</a>
          <a href="#contacto" className="text-slate-300 hover:text-white">Contacto</a>
        </div>
        <div className="flex items-center gap-3">
          <button className="hidden md:inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700">
            <Search size={16} /> Buscar
          </button>
          <button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-600 text-white hover:bg-blue-500">
            <User size={16} /> Acceder
          </button>
          <button className="md:hidden p-2 text-slate-200"><Menu /></button>
        </div>
      </div>
    </motion.header>
  )
}
