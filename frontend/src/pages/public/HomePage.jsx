import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { contentApi } from '../../api/contentApi'
import { galleryApi } from '../../api/galleryApi'
import { leadApi }    from '../../api/leadApi'

// ─── Navbar ──────────────────────────────────────────────────────────────────
function Navbar({ dark, toggleDark }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'shadow-sm' : ''
    } bg-[#F9F6F0]/95 dark:bg-[#1A1A1A]/95 backdrop-blur-md border-b border-[#D4AF37]/20`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">

        {/* Logo → inicio */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#D4AF37] flex items-center justify-center rounded-sm">
            <span className="text-white text-2xl font-bold">A</span>
          </div>
          <div>
            <span className="block text-xl font-bold tracking-widest text-[#222222] dark:text-white leading-none">
              GRUPO EPC
            </span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#D4AF37] font-bold">
              Construcción
            </span>
          </div>
        </Link>

        {/* Nav links */}
        <div className="hidden md:flex gap-10 items-center uppercase text-xs tracking-widest font-bold">
          {/* Anclas internas (misma página) */}
          <a href="#inicio"    className="hover:text-[#D4AF37] transition-colors text-[#222222] dark:text-gray-200">Inicio</a>

          {/* Links a otras páginas */}
          <Link to="/nosotros"   className="hover:text-[#D4AF37] transition-colors text-[#222222] dark:text-gray-200">Nosotros</Link>
          <Link to="/portafolio" className="hover:text-[#D4AF37] transition-colors text-[#222222] dark:text-gray-200">Proyectos</Link>
          <Link to="/servicios"  className="hover:text-[#D4AF37] transition-colors text-[#222222] dark:text-gray-200">Servicios</Link>

          <button
            onClick={toggleDark}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
          >
            <span className="material-icons text-sm">{dark ? 'light_mode' : 'brightness_medium'}</span>
          </button>

          <Link
            to="/contacto"
            className="bg-[#D4AF37] text-white px-6 py-2.5 hover:bg-[#B8860B] transition-all text-xs tracking-widest font-bold"
          >
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero({ content }) {
  const hero = content?.find(c => c.section === 'hero')

  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      <img
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDX_nBBvKNo850jMOzHoB6SVOd9yihE7h_EzhXMLktnwaAZVO75Bz2HK2PhjcTf6OuLcSMF4yCIe-Opk2D6yE7KS5tt-JQhp0_eoWJiBWXJdexu-CVHCKaUOiSUxSf2C08Mlv4Z0VoLtEip19bv5PYhpUKtfAkpKRG74dLrbHYdDueVHw-gnnAJlTt68rMxT_4AZz--z6pasJeI3AtSvUUYKE86QnlMoLMRAg6v2yrAzILlHIcwID5M1PLSoq0l03IS2LIZczE_yv4"
        alt="Obra de construcción"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/50" />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h2 className="text-[#D4AF37] uppercase tracking-[0.4em] mb-4 text-sm font-bold">
          Estableciendo el Estándar
        </h2>
        <h1
          className="text-5xl md:text-8xl text-white font-bold mb-8 leading-tight"
          style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.4)' }}
        >
          {hero?.title || 'CONSTRUIMOS CON'} <br />
          <span className="text-[#D4AF37]">CONFIANZA</span>
        </h1>
        <p className="text-white/90 max-w-xl mx-auto mb-10 text-lg leading-relaxed">
          {hero?.body || 'No prometemos perfección, prometemos confianza. El valor más fuerte del sector construcción en cada proyecto que entregamos.'}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* CTA hero → portafolio */}
          <Link
            to="/portafolio"
            className="bg-[#D4AF37] text-white px-10 py-4 text-sm tracking-widest uppercase font-bold hover:bg-[#B8860B] transition-all"
          >
            Ver Proyectos
          </Link>
          {/* CTA hero → nosotros */}
          <Link
            to="/nosotros"
            className="border border-white text-white px-10 py-4 text-sm tracking-widest uppercase font-bold hover:bg-white hover:text-[#222222] transition-all"
          >
            Conócenos
          </Link>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white">
        <span className="material-icons">expand_more</span>
      </div>
    </section>
  )
}

// ─── Nosotros ─────────────────────────────────────────────────────────────────
function Nosotros({ content }) {
  const about = content?.find(c => c.section === 'nosotros')

  return (
    <section id="nosotros" className="py-24 px-6 lg:px-12 bg-white dark:bg-[#222222]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0Bq78suMjl7wI6pulMwtUcbx36pjzXhFceGaiZyR25EF88zZoNOeq0VG3J1WqLClyQ5kgzMRKAS63KtDYR38H4o63Zy_yXnP6C5x58voIKyoqyfRnnY38Wpzc7eSEbpUy3FsR36mNm980Nl6nfNubGN7DRt8yZEJ12xgGt7_ZAiHc1wlCHxn--2qLvzX0gx9BYVq-1ceejjtLvQVduoMtn4_DugQ7bP2V3UOFyRtTQkZNVnIjpaKeoesaQD6DAgY0DXS-k37ySoE"
            alt="Equipo de ingeniería"
            className="w-full h-[600px] object-cover shadow-2xl"
          />
          <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#D4AF37]/10 -z-10" />
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-[#D4AF37] uppercase tracking-widest text-sm font-bold mb-2">
              Filosofía Grupo EPC
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-[#222222] dark:text-white">
              {about?.title || 'Solidez, Profesionalismo y Excelencia'}
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            {about?.body || 'Nuestro estilo visual cálido y minimalista refleja la esencia de nuestra operación: simplicidad en la ejecución, robustez en los resultados.'}
          </p>
          <div className="grid grid-cols-2 gap-8 pt-6">
            <div>
              <span className="text-4xl font-bold text-[#D4AF37]">15+</span>
              <p className="text-sm uppercase tracking-wider font-bold text-gray-500 mt-2">Años de Experiencia</p>
            </div>
            <div>
              <span className="text-4xl font-bold text-[#D4AF37]">200+</span>
              <p className="text-sm uppercase tracking-wider font-bold text-gray-500 mt-2">Proyectos Exitosos</p>
            </div>
          </div>
          {/* "Nuestra Historia" → página nosotros */}
          <Link
            to="/nosotros"
            className="inline-flex items-center gap-2 text-[#D4AF37] font-bold tracking-widest uppercase text-xs border-b-2 border-[#D4AF37] pb-1 hover:gap-4 transition-all"
          >
            Nuestra Historia
            <span className="material-icons text-xs">arrow_forward</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

// ─── Servicios ────────────────────────────────────────────────────────────────
function Servicios({ content }) {
  const servicios = content?.filter(c => c.section === 'servicio') || []

  const defaultServicios = [
    { icon: 'architecture',            title: 'Ingeniería Civil',        body: 'Desarrollo de infraestructura robusta y duradera, utilizando los más altos estándares de calidad técnica y seguridad.' },
    { icon: 'precision_manufacturing', title: 'Construcción Industrial', body: 'Especialistas en naves industriales, plantas de procesamiento y estructuras de gran escala para el sector productivo.' },
    { icon: 'engineering',             title: 'Gestión de Proyectos',    body: 'Supervisión integral de obra, asegurando el cumplimiento de tiempos, presupuestos y normativas vigentes.' },
  ]

  const items = servicios.length > 0
    ? servicios.map(s => ({ icon: 'engineering', title: s.title, body: s.body }))
    : defaultServicios

  return (
    <section id="servicios" className="py-24 px-6 lg:px-12 bg-[#F9F6F0] dark:bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-[#D4AF37] uppercase tracking-widest text-sm font-bold mb-2">
            Capacidades Especializadas
          </h3>
          <h2 className="text-4xl font-bold uppercase text-[#222222] dark:text-white">
            Nuestros Servicios
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div key={i} className="bg-white dark:bg-[#222222] p-10 border-t-4 border-[#D4AF37] shadow-sm hover:shadow-xl transition-shadow group">
              <span className="material-icons text-[#D4AF37] text-4xl mb-6 block group-hover:scale-110 transition-transform">
                {item.icon}
              </span>
              <h4 className="text-2xl font-bold mb-4 uppercase text-[#222222] dark:text-white">{item.title}</h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>

        {/* "Ver todos" → página servicios */}
        <div className="text-center mt-12">
          <Link
            to="/servicios"
            className="inline-block border-b-2 border-[#D4AF37] text-[#D4AF37] uppercase tracking-widest text-xs font-bold pb-1 hover:opacity-80 transition-opacity"
          >
            Ver todos los servicios →
          </Link>
        </div>
      </div>
    </section>
  )
}

// ─── Proyectos / Galería ──────────────────────────────────────────────────────
function Proyectos({ gallery }) {
  const items = gallery?.slice(0, 4) || []

  const fallback = [
    { image_url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAn6QVlEbJVpWnqgsvkc70RDD7lin2Qyi3XKTi_vF_IsEWKq6L1ixqFbg9JeUye31mfT7lg69zFlRR0wA-_PYm-zyu7gVXhVgE3SbB3k2BejsyBuiSwiU-VY3dgPY_tI1UEAyFHCtZqNHkPRSLZjcXsqAmGz0Gy_wWsIJ_8gvC2-Z7OA2j8U4vfg3Q-dUjiS5IVsMI-egfilKvTZF4QxvZauTs2FtKiQCXb-nsoMjAGT1mJGUPKQjQy3qD_o3Rm_2yFa49OLWLqGo', title: 'Terminal de Carga Norte',     category: 'Infraestructura Portuaria' },
    { image_url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6DldrdQRa6EBIIAseGaYDshiffRBFvbSrJ-0VZ-8ZPzEu5QzsPUHmv96tOpwMj4-zGjTGGUpOX-ciADNVVHbfAxXiYu9E1Fqz7OBlehf9QoDQk_Soo52QL24WIMvMo2qMVDNRoXm9gpnkRCsQSibV9HOjecgP6HhfUWI5aDKhUWcpHXT90Ftrt1b2YFcQrKnaBVIYq2JP3cI4Xws3vGj_znrPohWigFZhuvD2VW3pgHYPJ_ODIvYJW5RG5PSXC-Y9rNZAvvK4Y8c', title: 'Planta de Energía Sostenible', category: '' },
    { image_url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDY4qzPLcWS7-PxekUAWeAMaBAIOKZJdP7Gtcio5yLE7xJfxUWvAFIY1JWXqYTsL755tyqjDr6ci3xQLcHtMu8IlQ3A3Z7lO09n4gMkoBc9ZTcW3BhdcH93eycegZiCqdgmHQug6mXXGZYh-HHiA3B-Ll3pCczSCq85rgn9AHLJoxj5-DOCzTa5Avzi3-rc7sYusxQE3IZeIRpkw99MiC4bnK8LON9G5Z3T6ge5nUhTCdYEa2wbAyBdCYwWwsREpSODoXpzcAxHoRU',    title: 'Refinería Fase III',           category: '' },
    { image_url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-bGXiAhp36DGW6o7gNZRFXdNC9T0T5zV279FPQlBw6locG2IZ5uJabzonm6E97K5eGrRFvvV29HAiF_QSPd17pOxuaIliRCPGtwVtRBskpHxij1k5nTfA4K-EsyR_KFiwUX0PgyX5vderhv7WzrEPJJrJKoyx1GCnxE01UY90Z1p0z2aw8rRCJpXUqewNCMv0LFuxRPbzQwCHwgGcc4MJQoOfC3jkRH2lFEhDc7qD8nsj90vFuOwQrLio8olRpUCCcmvtpmr_FY8',    title: 'Logística Central',           category: '' },
  ]

  const display = items.length >= 4 ? items : fallback

  const getImageSrc = (item) => {
    if (!item?.image_url) return ''
    return item.image_url.startsWith('http') ? item.image_url : `http://127.0.0.1:8000${item.image_url}`
  }

  return (
    <section id="proyectos" className="py-24 px-6 lg:px-12 bg-white dark:bg-[#222222] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h3 className="text-[#D4AF37] uppercase tracking-widest text-sm font-bold mb-2">Portafolio</h3>
            <h2 className="text-4xl font-bold uppercase text-[#222222] dark:text-white">Proyectos en Marcha</h2>
          </div>
          {/* "Ver todos" → página portafolio */}
          <Link
            to="/portafolio"
            className="uppercase tracking-widest text-xs font-bold border-b-2 border-[#D4AF37] pb-1 hover:text-[#D4AF37] transition-colors text-[#222222] dark:text-white"
          >
            Ver todos los proyectos
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-auto md:h-[700px]">
          <div className="md:col-span-2 group relative overflow-hidden h-64 md:h-auto">
            <img src={getImageSrc(display[0])} alt={display[0]?.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
              <div>
                {display[0]?.category && <span className="text-[#D4AF37] text-xs uppercase tracking-widest font-bold">{display[0].category}</span>}
                <h5 className="text-white text-2xl font-bold uppercase">{display[0]?.title}</h5>
              </div>
            </div>
          </div>

          <div className="md:col-span-1 group relative overflow-hidden h-64 md:h-auto">
            <img src={getImageSrc(display[1])} alt={display[1]?.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <h5 className="text-white text-xl font-bold uppercase">{display[1]?.title}</h5>
            </div>
          </div>

          <div className="md:col-span-1 grid grid-rows-2 gap-4">
            {[display[2], display[3]].map((item, i) => (
              <div key={i} className="group relative overflow-hidden h-48 md:h-auto">
                <img src={getImageSrc(item)} alt={item?.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <h5 className="text-white font-bold uppercase text-sm">{item?.title}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── CTA ──────────────────────────────────────────────────────────────────────
function CTA() {
  return (
    <section className="py-24 px-6 bg-[#222222] text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#D4AF37]/5 -skew-x-12 transform translate-x-20" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 uppercase tracking-tight">
          ¿Listo para iniciar su próximo gran proyecto?
        </h2>
        <p className="text-gray-400 mb-10 text-lg">
          Permita que nuestra experiencia y compromiso con la calidad impulsen sus metas estructurales.
        </p>
        {/* CTA → página contacto */}
        <Link
          to="/contacto"
          className="inline-block bg-[#D4AF37] text-white px-12 py-5 text-sm tracking-[0.2em] uppercase font-bold hover:bg-[#B8860B] transition-all shadow-xl"
        >
          Solicitar Cotización
        </Link>
      </div>
    </section>
  )
}

// ─── Contacto / Footer ────────────────────────────────────────────────────────
function Footer() {
  const [form, setForm]       = useState({ name: '', email: '', phone: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent]       = useState(false)
  const [error, setError]     = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setError('')
    try {
      await leadApi.store(form)
      setSent(true)
      setForm({ name: '', email: '', phone: '', message: '' })
    } catch {
      setError('Error al enviar. Intenta de nuevo.')
    } finally {
      setSending(false)
    }
  }

  return (
    <footer id="contacto" className="bg-[#F9F6F0] dark:bg-[#1A1A1A] py-16 px-6 lg:px-12 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Brand */}
        <div className="col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-[#D4AF37] flex items-center justify-center rounded-sm">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <span className="text-xl font-bold tracking-widest text-[#222222] dark:text-white uppercase">GRUPO EPC</span>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed mb-6">
            Líderes en ingeniería y construcción premium, enfocados en la solidez y la confianza técnica.
          </p>
          <div className="flex gap-4">
            {['facebook', 'share'].map((icon) => (
              <a key={icon} href="#" className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all group">
                <span className="material-icons text-sm group-hover:text-white">{icon}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Navegación — ahora con Link */}
        <div>
          <h6 className="uppercase tracking-widest text-xs font-bold mb-6 text-[#D4AF37]">Navegación</h6>
          <ul className="space-y-4 text-sm font-bold text-gray-600 dark:text-gray-400">
            <li><Link to="/"           className="hover:text-[#D4AF37] transition-colors">Inicio</Link></li>
            <li><Link to="/nosotros"   className="hover:text-[#D4AF37] transition-colors">Sobre Nosotros</Link></li>
            <li><Link to="/portafolio" className="hover:text-[#D4AF37] transition-colors">Portafolio</Link></li>
            <li><Link to="/servicios"  className="hover:text-[#D4AF37] transition-colors">Servicios</Link></li>
          </ul>
        </div>

        {/* Contacto info */}
        <div>
          <h6 className="uppercase tracking-widest text-xs font-bold mb-6 text-[#D4AF37]">Contacto</h6>
          <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
            <li className="flex items-start gap-3">
              <span className="material-icons text-sm mt-0.5 text-[#D4AF37]">place</span>
              <span>Av. Industrial No. 450,<br />Zona Empresarial, Ciudad</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-icons text-sm text-[#D4AF37]">phone</span>
              <span>+57 (1) 234 5678</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-icons text-sm text-[#D4AF37]">email</span>
              <span>info@grupoepc.com</span>
            </li>
          </ul>
        </div>

        {/* Formulario de contacto rápido */}
        <div>
          <h6 className="uppercase tracking-widest text-xs font-bold mb-6 text-[#D4AF37]">Escríbenos</h6>
          {sent ? (
            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded text-sm">
              ✅ Mensaje enviado. Nos pondremos en contacto pronto.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              {error && <p className="text-red-500 text-xs">{error}</p>}
              <input type="text"  placeholder="Nombre"   required value={form.name}    onChange={(e) => setForm({ ...form, name: e.target.value })}    className="w-full bg-white dark:bg-[#222222] border border-gray-300 dark:border-gray-700 px-4 py-2 text-xs focus:ring-1 focus:ring-[#D4AF37] outline-none" />
              <input type="email" placeholder="Email"    required value={form.email}   onChange={(e) => setForm({ ...form, email: e.target.value })}   className="w-full bg-white dark:bg-[#222222] border border-gray-300 dark:border-gray-700 px-4 py-2 text-xs focus:ring-1 focus:ring-[#D4AF37] outline-none" />
              <input type="tel"   placeholder="Teléfono"          value={form.phone}   onChange={(e) => setForm({ ...form, phone: e.target.value })}   className="w-full bg-white dark:bg-[#222222] border border-gray-300 dark:border-gray-700 px-4 py-2 text-xs focus:ring-1 focus:ring-[#D4AF37] outline-none" />
              <textarea placeholder="Mensaje" rows={3} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full bg-white dark:bg-[#222222] border border-gray-300 dark:border-gray-700 px-4 py-2 text-xs focus:ring-1 focus:ring-[#D4AF37] outline-none resize-none" />
              <button type="submit" disabled={sending} className="w-full bg-[#D4AF37] text-white py-2.5 text-xs tracking-widest uppercase font-bold hover:bg-[#B8860B] transition-colors disabled:opacity-60">
                {sending ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
              {/* Link completo → página contacto */}
              <p className="text-center">
                <Link to="/contacto" className="text-[10px] text-[#D4AF37] uppercase tracking-widest font-bold hover:underline">
                  Formulario completo →
                </Link>
              </p>
            </form>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
        <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">
          © 2024 GRUPO EPC. Todos los derechos reservados. |{' '}
          <a href="#" className="hover:text-[#D4AF37]">Política de Privacidad</a>
        </p>
      </div>
    </footer>
  )
}

// ─── HomePage ─────────────────────────────────────────────────────────────────
export default function HomePage() {
  const [content, setContent] = useState([])
  const [gallery, setGallery] = useState([])
  const [dark,    setDark]    = useState(false)

  useEffect(() => {
    const loadData = async () => {
      try {
        const [heroRes, nosotrosRes, servicioRes, galleryRes] = await Promise.allSettled([
          contentApi.getBySection('hero'),
          contentApi.getBySection('nosotros'),
          contentApi.getBySection('servicio'),
          galleryApi.getAll(),
        ])
        setContent([
          ...(heroRes.status     === 'fulfilled' ? heroRes.value.data     : []),
          ...(nosotrosRes.status === 'fulfilled' ? nosotrosRes.value.data : []),
          ...(servicioRes.status === 'fulfilled' ? servicioRes.value.data : []),
        ])
        if (galleryRes.status === 'fulfilled') setGallery(galleryRes.value.data)
      } catch (err) {
        console.error('Error cargando datos:', err)
      }
    }
    loadData()
  }, [])

  useEffect(() => {
    dark
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark')
  }, [dark])

  return (
    <div className="bg-[#F9F6F0] dark:bg-[#1A1A1A] text-[#222222] dark:text-gray-100 transition-colors duration-300">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      <Navbar dark={dark} toggleDark={() => setDark(!dark)} />
      <Hero      content={content} />
      <Nosotros  content={content} />
      <Servicios content={content} />
      <Proyectos gallery={gallery} />
      <CTA />
      <Footer />
    </div>
  )
}