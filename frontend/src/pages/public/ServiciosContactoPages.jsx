// ═══════════════════════════════════════════════════════════════════════════════
// SERVICIOS PAGE
// ═══════════════════════════════════════════════════════════════════════════════
import React, { useState } from 'react'
import { Navbar, Footer, CTASection } from '../../components/public/PublicComponents'
import { leadApi } from '../../api/leadApi'

const servicios = [
  {
    num: '01',
    title: 'Ingeniería Civil y Estructural',
    desc:  'Nuestro departamento de ingeniería combina precisión matemática con visión arquitectónica para desarrollar infraestructuras que desafían el tiempo. Nos especializamos en el cálculo y diseño de cimentaciones profundas, estructuras metálicas de alta complejidad y sistemas de drenaje a gran escala.',
    items: ['Diseño Sísmico y Análisis Estructural', 'Planificación de Infraestructura Vial', 'Auditoría de Estabilidad de Suelos'],
    img:   'https://lh3.googleusercontent.com/aida-public/AB6AXuB0Bq78suMjl7wI6pulMwtUcbx36pjzXhFceGaiZyR25EF88zZoNOeq0VG3J1WqLClyQ5kgzMRKAS63KtDYR38H4o63Zy_yXnP6C5x58voIKyoqyfRnnY38Wpzc7eSEbpUy3FsR36mNm980Nl6nfNubGN7DRt8yZEJ12xgGt7_ZAiHc1wlCHxn--2qLvzX0gx9BYVq-1ceejjtLvQVduoMtn4_DugQ7bP2V3UOFyRtTQkZNVnIjpaKeoesaQD6DAgY0DXS-k37ySoE',
    imgCornerTop: true,
  },
  {
    num: '02',
    title: 'Construcción Industrial',
    desc:  'Operamos con una capacidad logística superior para la ejecución de plantas industriales y centros logísticos. Nuestras metodologías de construcción acelerada garantizan la entrega en plazos récord sin comprometer la integridad estructural.',
    items: ['Montaje de Naves Industriales de Gran Claro', 'Instalación de Sistemas Electromecánicos', 'Pavimentación de Alta Resistencia (MR)'],
    img:   'https://lh3.googleusercontent.com/aida-public/AB6AXuDX_nBBvKNo850jMOzHoB6SVOd9yihE7h_EzhXMLktnwaAZVO75Bz2HK2PhjcTf6OuLcSMF4yCIe-Opk2D6yE7KS5tt-JQhp0_eoWJiBWXJdexu-CVHCKaUOiSUxSf2C08Mlv4Z0VoLtEip19bv5PYhpUKtfAkpKRG74dLrbHYdDueVHw-gnnAJlTt68rMxT_4AZz--z6pasJeI3AtSvUUYKE86QnlMoLMRAg6v2yrAzILlHIcwID5M1PLSoq0l03IS2LIZczE_yv4',
    imgCornerTop: false,
  },
  {
    num: '03',
    title: 'Gestión de Proyectos (EPC)',
    desc:  'Bajo el modelo Engineering, Procurement and Construction (EPC), ofrecemos una solución llave en mano para inversionistas. Desde el concepto inicial hasta la puesta en marcha, Grupo EPC centraliza la responsabilidad, optimizando recursos y mitigando riesgos financieros.',
    items: ['Control de Costos y Cronogramas (Value Engineering)', 'Gestión de Permisología e Impacto Ambiental', 'Supervisión Técnica y Control de Calidad Riguroso'],
    img:   'https://lh3.googleusercontent.com/aida-public/AB6AXuCAn6QVlEbJVpWnqgsvkc70RDD7lin2Qyi3XKTi_vF_IsEWKq6L1ixqFbg9JeUye31mfT7lg69zFlRR0wA-_PYm-zyu7gVXhVgE3SbB3k2BejsyBuiSwiU-VY3dgPY_tI1UEAyFHCtZqNHkPRSLZjcXsqAmGz0Gy_wWsIJ_8gvC2-Z7OA2j8U4vfg3Q-dUjiS5IVsMI-egfilKvTZF4QxvZauTs2FtKiQCXb-nsoMjAGT1mJGUPKQjQy3qD_o3Rm_2yFa49OLWLqGo',
    imgCornerTop: true,
  },
]

const capacidades = [
  { icon: 'precision_manufacturing', title: 'Maquinaria Propia',    items: ['Grúas de alta capacidad', 'Excavadoras articuladas', 'Equipo de pavimentación'] },
  { icon: 'security',               title: 'Seguridad Industrial', items: ['Certificación ISO 45001', 'Supervisores EHS en sitio', 'Planes de contingencia'] },
  { icon: 'verified',               title: 'Normatividad',         items: ['Estándares ASTM / ACI', 'Normas locales e int.', 'Garantía estructural 10 años'] },
  { icon: 'eco',                    title: 'Sostenibilidad',       items: ['Consultoría LEED', 'Gestión de residuos', 'Eficiencia energética'] },
]

export function ServiciosPage() {
  return (
    <div className="bg-[#F9F6F0] dark:bg-[#1A1A1A] text-[#222222] dark:text-gray-100 transition-colors duration-300 font-sans">
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />

      <Navbar />

      {/* Header */}
      <header className="pt-40 pb-20 bg-white dark:bg-[#222222]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h3 className="text-[#D4AF37] uppercase tracking-[0.4em] mb-4 text-sm font-semibold font-sans">
            Excelencia Técnica
          </h3>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-[#222222] dark:text-white">
            Nuestros Servicios
          </h1>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-8" />
        </div>
      </header>

      {/* Servicios detallados */}
      {servicios.map(({ num, title, desc, items, img, imgCornerTop }, i) => {
        const isEven = i % 2 === 0
        const bg     = isEven ? 'bg-[#F9F6F0] dark:bg-[#1A1A1A]' : 'bg-white dark:bg-[#222222]'

        return (
          <section key={num} className={`py-24 px-6 lg:px-12 ${bg}`}>
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
              {/* Texto */}
              <div className={`space-y-6 ${isEven ? 'order-2 md:order-1' : ''}`}>
                <span className="text-[#D4AF37] font-display text-5xl opacity-30">{num}</span>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-[#222222] dark:text-white">
                  {title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed font-light font-sans">
                  {desc}
                </p>
                <ul className="space-y-3 pt-4">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-medium tracking-wide font-sans">
                      <span className="material-symbols-outlined text-[#D4AF37]">check_circle</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Imagen */}
              <div className={`${isEven ? 'order-1 md:order-2' : ''}`}>
                <div className="relative group">
                  <img
                    src={img}
                    alt={title}
                    className="w-full aspect-[4/3] object-cover shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  {imgCornerTop ? (
                    <div className="absolute -top-4 -right-4 w-32 h-32 border-t-2 border-r-2 border-[#D4AF37]/40 pointer-events-none" />
                  ) : (
                    <div className="absolute -bottom-4 -left-4 w-32 h-32 border-b-2 border-l-2 border-[#D4AF37]/40 pointer-events-none" />
                  )}
                </div>
              </div>
            </div>
          </section>
        )
      })}

      {/* Capacidades técnicas */}
      <section className="py-24 px-6 lg:px-12 bg-white dark:bg-[#222222]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-[#D4AF37] uppercase tracking-widest text-sm font-semibold mb-2 font-sans">
              Soporte Técnico
            </h3>
            <h2 className="text-4xl font-display font-bold text-[#222222] dark:text-white">
              Capacidades Técnicas
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {capacidades.map(({ icon, title, items }) => (
              <div
                key={title}
                className="p-8 border border-gray-100 dark:border-gray-800 bg-[#F9F6F0]/50 dark:bg-[#1A1A1A]/50"
              >
                <span className="material-symbols-outlined text-[#D4AF37] text-4xl mb-4 block">{icon}</span>
                <h4 className="text-xl font-display font-bold mb-4 text-[#222222] dark:text-white">{title}</h4>
                <ul className="text-xs space-y-2 text-gray-500 font-sans tracking-wide">
                  {items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="¿Necesita una solución técnica a medida?"
        subtitle="Hable con nuestros ingenieros principales sobre los requerimientos técnicos de su obra."
        btnText="Solicitar Análisis de Proyecto"
      />

      <Footer />
    </div>
  )
}


// ═══════════════════════════════════════════════════════════════════════════════
// CONTACTO PAGE
// ═══════════════════════════════════════════════════════════════════════════════
export function ContactoPage() {
  const [form, setForm]       = useState({ name: '', email: '', phone: '', message: '' })
  const [company, setCompany] = useState('')
  const [type,    setType]    = useState('Ingeniería Civil')
  const [sending, setSending] = useState(false)
  const [sent,    setSent]    = useState(false)
  const [error,   setError]   = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setError('')
    try {
      await leadApi.store({
        ...form,
        message: `[${type}] ${company ? `Empresa: ${company}. ` : ''}${form.message}`,
        source: 'contacto',
      })
      setSent(true)
    } catch {
      setError('Error al enviar. Intenta de nuevo.')
    } finally {
      setSending(false)
    }
  }

  const contactInfo = [
    { icon: 'location_on', title: 'Ubicación',    lines: ['Av. Industrial No. 450,', 'Zona Empresarial, CP 54000', 'Colombia'] },
    { icon: 'call',        title: 'Llámenos',     lines: ['Oficina: +57 (1) 234 5678', 'Proyectos: +57 (1) 876 5432'] },
    { icon: 'mail',        title: 'Escríbanos',   lines: ['info@grupoepc.com', 'ventas@grupoepc.com'] },
    { icon: 'schedule',    title: 'Horario',      lines: ['Lunes a Viernes', '09:00 AM - 18:00 PM'] },
  ]

  return (
    <div className="bg-[#F9F6F0] dark:bg-[#1A1A1A] text-[#222222] dark:text-gray-100 min-h-screen flex flex-col transition-colors duration-300 font-sans">
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />

      <Navbar />

      <main className="flex-grow pt-32 pb-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h3 className="text-[#D4AF37] uppercase tracking-[0.3em] text-sm font-semibold mb-4 font-sans">
              Contacto Directo
            </h3>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight text-[#222222] dark:text-white">
              Hablemos de su Próximo Proyecto
            </h1>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Info + Mapa */}
            <div className="space-y-12">
              <div className="grid sm:grid-cols-2 gap-10">
                {contactInfo.map(({ icon, title, lines }) => (
                  <div key={title} className="space-y-4">
                    <div className="flex items-center gap-3 text-[#D4AF37]">
                      <span className="material-symbols-outlined">{icon}</span>
                      <h4 className="font-display text-xl font-bold uppercase tracking-wider text-[#222222] dark:text-white">
                        {title}
                      </h4>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed font-sans text-sm">
                      {lines.map((line, i) => (
                        <span key={i}>{line}{i < lines.length - 1 && <br />}</span>
                      ))}
                    </p>
                  </div>
                ))}
              </div>

              {/* Mapa decorativo */}
              <div className="relative h-[350px] bg-[#222222] overflow-hidden group">
                <div className="absolute inset-0 opacity-40 mix-blend-luminosity">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXx2n8XTMuPFmpCKJ_KWnldslLdlvCYzjYcBhXSpfTE_5m4yGqQ02NhEM0hBrpf01N0hQAnXSchwCMun-gVvir5Qfi1g5CIa6usN4z3T-7kM6HTx086QVlyfRjoOYgg6KN8mFmnSBej2R7RYv-PTVCp0E0zqKvQBEneSSYDTs6D3AVmGtPdmYpsUrQRMFGwI1I050G4UVF3cTxg9uZOxruHwRL_Cts-f8bdRHm9NlN9qefo3OL_xKKS6dwh6WSFkXMjMc4gf4p47o"
                    alt="Mapa"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/20 to-[#222222]/80" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center animate-pulse mb-3">
                      <span className="material-symbols-outlined text-white">push_pin</span>
                    </div>
                    <span className="text-white font-display text-lg tracking-widest font-bold">
                      SEDE CENTRAL EPC
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 text-[10px] text-white/50 uppercase tracking-[0.2em] font-sans">
                  Sistemas de Navegación Industrial
                </div>
              </div>
            </div>

            {/* Formulario */}
            <div className="bg-white dark:bg-[#222222] p-8 md:p-12 shadow-sm border-t-4 border-[#D4AF37]">
              {sent ? (
                <div className="text-center py-12">
                  <span className="material-symbols-outlined text-[#D4AF37] text-6xl mb-4 block">check_circle</span>
                  <h3 className="text-2xl font-display font-bold mb-3 text-[#222222] dark:text-white">
                    Mensaje Enviado
                  </h3>
                  <p className="text-gray-500 font-sans font-light">
                    Nos pondremos en contacto con usted a la brevedad posible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <p className="text-red-500 text-xs font-sans">{error}</p>
                  )}

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500 dark:text-gray-400 font-sans">
                        Nombre Completo
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ej. Juan Pérez"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full p-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1A1A1A] dark:text-white text-sm focus:border-[#D4AF37] focus:outline-none transition-colors font-sans"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500 dark:text-gray-400 font-sans">
                        Empresa
                      </label>
                      <input
                        type="text"
                        placeholder="Nombre de su organización"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full p-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1A1A1A] dark:text-white text-sm focus:border-[#D4AF37] focus:outline-none transition-colors font-sans"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500 dark:text-gray-400 font-sans">
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="email@empresa.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full p-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1A1A1A] dark:text-white text-sm focus:border-[#D4AF37] focus:outline-none transition-colors font-sans"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500 dark:text-gray-400 font-sans">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      placeholder="+57 300 000 0000"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full p-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1A1A1A] dark:text-white text-sm focus:border-[#D4AF37] focus:outline-none transition-colors font-sans"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500 dark:text-gray-400 font-sans">
                      Tipo de Proyecto
                    </label>
                    <select
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                      className="w-full p-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1A1A1A] dark:text-white text-sm focus:border-[#D4AF37] focus:outline-none transition-colors font-sans"
                    >
                      <option>Ingeniería Civil</option>
                      <option>Construcción Industrial</option>
                      <option>Gestión de Proyectos</option>
                      <option>Consultoría Técnica</option>
                      <option>Otros</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500 dark:text-gray-400 font-sans">
                      Detalles del Proyecto
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Cuéntenos más sobre los requerimientos de su obra..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full p-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1A1A1A] dark:text-white text-sm focus:border-[#D4AF37] focus:outline-none transition-colors resize-none font-sans"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full bg-[#D4AF37] text-white py-4 text-xs tracking-[0.3em] uppercase font-bold hover:bg-[#B8860B] transition-all shadow-lg disabled:opacity-60 font-sans"
                  >
                    {sending ? 'Enviando...' : 'Enviar Propuesta'}
                  </button>

                  <p className="text-[10px] text-gray-400 text-center uppercase tracking-wider font-sans">
                    Al enviar, acepta nuestra política de tratamiento de datos.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Footer simplificado para contacto */}
      <footer className="bg-white dark:bg-[#222222] py-12 px-6 lg:px-12 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#D4AF37] flex items-center justify-center rounded-sm">
              <span className="text-white font-bold text-xl font-display">A</span>
            </div>
            <span className="text-lg font-display font-bold tracking-widest text-[#222222] dark:text-white">
              GRUPO EPC
            </span>
          </div>
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] text-gray-500 font-sans">
            <a href="#" className="hover:text-[#D4AF37] transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Instagram</a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Privacidad</a>
          </div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-sans">
            © 2024 GRUPO EPC. SOLIDEZ EN CADA PROYECTO.
          </p>
        </div>
      </footer>
    </div>
  )
}
