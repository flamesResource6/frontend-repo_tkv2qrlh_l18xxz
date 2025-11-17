import Navbar from './components/Navbar'
import Hero from './components/Hero'
import RequestForm from './components/RequestForm'
import HowItWorks from './components/HowItWorks'

function App() {
  const scrollToForm = () => {
    const el = document.getElementById('solicitud')
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <Navbar />
      <Hero onScrollToForm={scrollToForm} />
      <RequestForm onSuccess={() => {}} />
      <HowItWorks />
      <footer id="contacto" className="py-12 border-t border-white/10 bg-slate-950/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-slate-400">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} Direct Transport ES — Sin intermediarios</p>
            <a href="/test" className="hover:text-white">Estado del sistema</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
