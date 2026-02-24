import React from 'react'
import { Navbar, Footer, CTASection } from '../../components/public/PublicComponents'

const timeline = [
  { year: '2008', title: 'Fundación',           desc: 'Inicio de operaciones enfocados en consultoría técnica y gestión de proyectos civiles.' },
  { year: '2013', title: 'Expansión Industrial', desc: 'Entrega de nuestra primera planta industrial de gran escala, consolidando nuestra presencia en el sector productivo.' },
  { year: '2019', title: 'Certificación Gold',   desc: 'Obtención de certificaciones internacionales de calidad y seguridad, elevando nuestros estándares operativos.' },
  { year: '2024', title: 'Liderazgo Regional',   desc: 'Proyección de nuevos megaproyectos de infraestructura portuaria y energética para la próxima década.' },
]

const valores = [
  { icon: 'verified_user',    title: 'Integridad',  desc: 'Operamos con total transparencia y ética profesional, construyendo relaciones de confianza duraderas con nuestros aliados y clientes.' },
  { icon: 'workspace_premium',title: 'Excelencia',  desc: 'La calidad no es un objetivo, es nuestro estándar mínimo. Buscamos la perfección técnica en cada detalle de la obra.' },
  { icon: 'engineering',      title: 'Seguridad',   desc: 'Protegemos nuestro capital más valioso: las personas. Mantenemos protocolos de seguridad rigurosos en todos nuestros frentes de trabajo.' },
]

const directiva = [
  { name: 'Arq. Roberto Valdés',    role: 'Director General / CEO',   img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0Bq78suMjl7wI6pulMwtUcbx36pjzXhFceGaiZyR25EF88zZoNOeq0VG3J1WqLClyQ5kgzMRKAS63KtDYR38H4o63Zy_yXnP6C5x58voIKyoqyfRnnY38Wpzc7eSEbpUy3FsR36mNm980Nl6nfNubGN7DRt8yZEJ12xgGt7_ZAiHc1wlCHxn--2qLvzX0gx9BYVq-1ceejjtLvQVduoMtn4_DugQ7bP2V3UOFyRtTQkZNVnIjpaKeoesaQD6DAgY0DXS-k37ySoE' },
  { name: 'Ing. Elena Sotomayor',   role: 'Directora de Operaciones',  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAn6QVlEbJVpWnqgsvkc70RDD7lin2Qyi3XKTi_vF_IsEWKq6L1ixqFbg9JeUye31mfT7lg69zFlRR0wA-_PYm-zyu7gVXhVgE3SbB3k2BejsyBuiSwiU-VY3dgPY_tI1UEAyFHCtZqNHkPRSLZjcXsqAmGz0Gy_wWsIJ_8gvC2-Z7OA2j8U4vfg3Q-dUjiS5IVsMI-egfilKvTZF4QxvZauTs2FtKiQCXb-nsoMjAGT1mJGUPKQjQy3qD_o3Rm_2yFa49OLWLqGo' },
  { name: 'Ing. Carlos Mendoza',    role: 'Director Técnico',          img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6DldrdQRa6EBIIAseGaYDshiffRBFvbSrJ-0VZ-8ZPzEu5QzsPUHmv96tOpwMj4-zGjTGGUpOX-ciADNVVHbfAxXiYu9E1Fqz7OBlehf9QoDQk_Soo52QL24WIMvMo2qMVDNRoXm9gpnkRCsQSibV9HOjecgP6HhfUWI5aDKhUWcpHXT90Ftrt1b2YFcQrKnaBVIYq2JP3cI4Xws3vGj_znrPohWigFZhuvD2VW3pgHYPJ_ODIvYJW5RG5PSXC-Y9rNZAvvK4Y8c' },
  { name: 'Arq. Lucía Fernández',   role: 'Gerente de Proyectos',      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDY4qzPLcWS7-PxekUAWeAMaBAIOKZJdP7Gtcio5yLE7xJfxUWvAFIY1JWXqYTsL755tyqjDr6ci3xQLcHtMu8IlQ3A3Z7lO09n4gMkoBc9ZTcW3BhdcH93eycegZiCqdgmHQug6mXXGZYh-HHiA3B-Ll3pCczSCq85rgn9AHLJoxj5-DOCzTa5Avzi3-rc7sYusxQE3IZeIRpkw99MiC4bnK8LON9G5Z3T6ge5nUhTCdYEa2wbAyBdCYwWwsREpSODoXpzcAxHoRU' },
]

export default function NosotrosPage() {
  return (
    <div className="bg-[#F9F6F0] dark:bg-[#1A1A1A] text-[#222222] dark:text-gray-100 transition-colors duration-300 font-sans">
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />

      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDX_nBBvKNo850jMOzHoB6SVOd9yihE7h_EzhXMLktnwaAZVO75Bz2HK2PhjcTf6OuLcSMF4yCIe-Opk2D6yE7KS5tt-JQhp0_eoWJiBWXJdexu-CVHCKaUOiSUxSf2C08Mlv4Z0VoLtEip19bv5PYhpUKtfAkpKRG74dLrbHYdDueVHw-gnnAJlTt68rMxT_4AZz--z6pasJeI3AtSvUUYKE86QnlMoLMRAg6v2yrAzILlHIcwID5M1PLSoq0l03IS2LIZczE_yv4"
          alt="Obra arquitectónica"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(26,26,26,0.8) 0%, rgba(26,26,26,0.4) 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <h2 className="text-[#D4AF37] uppercase tracking-[0.4em] mb-4 text-sm font-semibold font-sans">
            Sobre Grupo EPC
          </h2>
          <h1 className="text-5xl md:text-7xl text-white font-display font-bold mb-6 leading-tight">
            Nuestra <br />
            <span className="italic font-normal">Trayectoria</span>
          </h1>
          <p className="text-white/80 max-w-xl text-lg font-light leading-relaxed font-sans">
            Más de quince años definiendo el horizonte industrial mediante ingeniería de precisión y un compromiso inquebrantable con la solidez técnica.
          </p>
        </div>
      </section>

      {/* Misión & Visión */}
      <section className="py-24 px-6 lg:px-12 bg-white dark:bg-[#222222]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-24">
          {[
            {
              title: 'Nuestra Misión',
              text:  'Transformar la visión de nuestros clientes en infraestructuras tangibles de alto rendimiento, empleando metodologías innovadoras que garantizan la seguridad, la eficiencia de recursos y el desarrollo sostenible en cada m² construido.',
            },
            {
              title: 'Nuestra Visión',
              text:  'Consolidarnos como el referente panamericano en ingeniería civil e industrial, siendo reconocidos por nuestra integridad ética, la excelencia operativa y nuestra capacidad para resolver los desafíos estructurales más complejos del sector.',
            },
          ].map(({ title, text }) => (
            <div key={title} className="space-y-6">
              <div className="inline-block border-l-4 border-[#D4AF37] pl-6">
                <h3 className="text-3xl md:text-4xl font-display font-bold text-[#222222] dark:text-white">
                  {title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed font-light font-sans">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Valores */}
      <section className="py-24 px-6 lg:px-12 bg-[#F9F6F0] dark:bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-[#D4AF37] uppercase tracking-widest text-sm font-semibold mb-2 font-sans">
              Fundamentos
            </h3>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#222222] dark:text-white">
              Nuestros Valores
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {valores.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-white dark:bg-[#222222] p-12 text-center border-b-4 border-[#D4AF37] shadow-sm hover:-translate-y-2 transition-transform duration-300"
              >
                <span className="material-symbols-outlined text-[#D4AF37] text-5xl mb-6 block">
                  {icon}
                </span>
                <h4 className="text-2xl mb-4 uppercase tracking-wider font-display font-bold text-[#222222] dark:text-white">
                  {title}
                </h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed font-sans font-light">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6 lg:px-12 bg-white dark:bg-[#222222] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-[#D4AF37] uppercase tracking-widest text-sm font-semibold mb-2 font-sans">
              Nuestra Historia
            </h3>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#222222] dark:text-white">
              Hitos del Camino
            </h2>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[#D4AF37]/30 -translate-x-1/2" />
            <div className="space-y-16">
              {timeline.map(({ year, title, desc }, i) => {
                const isLeft = i % 2 === 0
                return (
                  <div
                    key={year}
                    className={`relative flex flex-col md:flex-row ${!isLeft ? 'md:flex-row-reverse' : ''} items-center`}
                  >
                    <div className={`md:w-1/2 ${isLeft ? 'md:pr-12 text-center md:text-right' : 'md:pl-12 text-center md:text-left'}`}>
                      <span className="text-[#D4AF37] text-4xl font-display font-bold mb-2 block">{year}</span>
                      <h4 className="text-xl font-bold mb-3 uppercase tracking-widest font-display text-[#222222] dark:text-white">{title}</h4>
                      <p className="text-gray-500 text-sm font-sans font-light">{desc}</p>
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-[#D4AF37] rounded-full hidden md:block" />
                    <div className="md:w-1/2" />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Directiva */}
      <section className="py-24 px-6 lg:px-12 bg-[#F9F6F0] dark:bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h3 className="text-[#D4AF37] uppercase tracking-widest text-sm font-semibold mb-2 font-sans">Liderazgo</h3>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#222222] dark:text-white">Nuestra Directiva</h2>
            <p className="text-gray-500 mt-4 font-sans font-light">
              Un equipo multidisciplinario con visión estratégica, comprometido con la excelencia y la innovación constante.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {directiva.map(({ name, role, img }) => (
              <div key={name} className="group">
                <div className="relative overflow-hidden mb-6 aspect-[3/4]">
                  <img
                    src={img}
                    alt={name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 border-4 border-[#D4AF37]/0 group-hover:border-[#D4AF37]/20 transition-all" />
                </div>
                <h4 className="text-xl uppercase tracking-widest font-display font-bold text-[#222222] dark:text-white">{name}</h4>
                <p className="text-[#D4AF37] text-xs font-semibold tracking-wider uppercase mt-1 font-sans">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="¿Busca un aliado sólido para su construcción?"
        subtitle="Nuestra trayectoria es el aval de su inversión. Hablemos de su próximo proyecto."
        btnText="Agendar Consultoría"
      />

      <Footer />
    </div>
  )
}
