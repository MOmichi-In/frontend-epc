// ─── NAVBAR (compartido entre todas las páginas públicas) ─────────────────────
import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [dark, setDark]         = useState(false)
  const location                = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    dark
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark')
  }, [dark])

  const links = [
    { to: '/',          label: 'Inicio' },
    { to: '/nosotros',  label: 'Nosotros' },
    { to: '/portafolio',label: 'Proyectos' },
    { to: '/servicios', label: 'Servicios' },
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 border-b border-[#D4AF37]/20
      ${scrolled ? 'shadow-sm' : ''}
      bg-[#F9F6F0]/95 dark:bg-[#1A1A1A]/95 backdrop-blur-md`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#D4AF37] flex items-center justify-center rounded-sm">
            <span className="text-white text-2xl font-bold font-display">A</span>
          </div>
          <div>
            <span className="block text-xl font-bold tracking-widest text-[#222222] dark:text-white leading-none font-display uppercase">
              Grupo EPC
            </span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#D4AF37] font-semibold font-sans">
              Construcción
            </span>
          </div>
        </Link>

        {/* Links */}
        <div className="hidden md:flex gap-10 items-center uppercase text-xs tracking-widest font-medium font-sans">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`transition-colors hover:text-[#D4AF37] ${
                location.pathname === to
                  ? 'text-[#D4AF37] border-b border-[#D4AF37]'
                  : 'text-[#222222] dark:text-gray-200'
              }`}
            >
              {label}
            </Link>
          ))}

          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
          >
            <span className="material-symbols-outlined text-xl">
              {dark ? 'light_mode' : 'contrast'}
            </span>
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

// ─── FOOTER (compartido) ──────────────────────────────────────────────────────
export function Footer() {
  return (
    <footer className="bg-[#F9F6F0] dark:bg-[#1A1A1A] py-16 px-6 lg:px-12 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-[#D4AF37] flex items-center justify-center rounded-sm">
              <span className="text-white font-bold text-xl font-display">A</span>
            </div>
            <span className="text-xl font-bold tracking-widest text-[#222222] dark:text-white uppercase font-display">
              GRUPO EPC
            </span>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed mb-6 font-sans font-light">
            Líderes en ingeniería y construcción premium, enfocados en la solidez y la confianza técnica desde 2008.
          </p>
          <div className="flex gap-4">
            {['language', 'share'].map((icon) => (
              <a
                key={icon}
                href="#"
                className="w-10 h-10 border border-gray-300 dark:border-gray-700 flex items-center justify-center hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all group"
              >
                <span className="material-symbols-outlined text-sm group-hover:text-white">{icon}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Navegación */}
        <div>
          <h6 className="uppercase tracking-widest text-xs font-bold mb-6 text-[#D4AF37] font-sans">Navegación</h6>
          <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400 font-sans">
            {[
              { to: '/',           label: 'Inicio' },
              { to: '/nosotros',   label: 'Sobre Nosotros' },
              { to: '/portafolio', label: 'Portafolio' },
              { to: '/servicios',  label: 'Servicios' },
            ].map(({ to, label }) => (
              <li key={to}>
                <Link to={to} className="hover:text-[#D4AF37] transition-colors">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h6 className="uppercase tracking-widest text-xs font-bold mb-6 text-[#D4AF37] font-sans">Contacto</h6>
          <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400 font-sans font-light">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-sm mt-0.5 text-[#D4AF37]">location_on</span>
              <span>Av. Industrial No. 450,<br />Zona Empresarial, Ciudad</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-sm text-[#D4AF37]">call</span>
              <span>+52 (55) 1234 5678</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-sm text-[#D4AF37]">mail</span>
              <span>info@grupoepc.com</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h6 className="uppercase tracking-widest text-xs font-bold mb-6 text-[#D4AF37] font-sans">Newsletter</h6>
          <p className="text-xs text-gray-500 mb-4 font-sans font-light leading-relaxed">
            Suscríbete para recibir actualizaciones sobre nuestros proyectos más recientes.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Su correo electrónico"
              className="bg-white dark:bg-[#222222] border border-gray-300 dark:border-gray-700 px-4 py-2 text-xs w-full focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37] outline-none font-sans"
            />
            <button className="bg-[#D4AF37] text-white px-3 flex items-center justify-center hover:bg-[#B8860B] transition-colors">
              <span className="material-symbols-outlined text-sm">send</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
        <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-sans">
          © 2024 GRUPO EPC. Todos los derechos reservados. |{' '}
          <a href="#" className="hover:text-[#D4AF37] transition-colors">Política de Privacidad</a>
        </p>
      </div>
    </footer>
  )
}

// ─── CTA SECTION (reutilizable) ───────────────────────────────────────────────
export function CTASection({ title, subtitle, btnText, btnHref = '/contacto' }) {
  return (
    <section className="py-20 px-6 bg-[#222222] text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#D4AF37]/5 -skew-x-12 transform translate-x-20" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 italic leading-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-gray-400 mb-10 text-lg font-sans font-light leading-relaxed">
            {subtitle}
          </p>
        )}
        <Link
          to={btnHref}
          className="inline-block bg-[#D4AF37] text-white px-12 py-5 text-sm tracking-[0.2em] uppercase font-bold hover:bg-[#B8860B] transition-all shadow-xl font-sans"
        >
          {btnText}
        </Link>
      </div>
    </section>
  )
}
