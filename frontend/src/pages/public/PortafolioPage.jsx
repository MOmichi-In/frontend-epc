import React, { useEffect, useState } from 'react'
import { Navbar, Footer, CTASection } from '../../components/public/PublicComponents'
import { galleryApi } from '../../api/galleryApi'

const fallbackItems = [
  { id: 1, image_url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAn6QVlEbJVpWnqgsvkc70RDD7lin2Qyi3XKTi_vF_IsEWKq6L1ixqFbg9JeUye31mfT7lg69zFlRR0wA-_PYm-zyu7gVXhVgE3SbB3k2BejsyBuiSwiU-VY3dgPY_tI1UEAyFHCtZqNHkPRSLZjcXsqAmGz0Gy_wWsIJ_8gvC2-Z7OA2j8U4vfg3Q-dUjiS5IVsMI-egfilKvTZF4QxvZauTs2FtKiQCXb-nsoMjAGT1mJGUPKQjQy3qD_o3Rm_2yFa49OLWLqGo', title: 'Terminal de Carga Norte',        category: 'Infraestructura Portuaria', location: 'Barranquilla, Colombia', span: 'tall' },
  { id: 2, image_url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6DldrdQRa6EBIIAseGaYDshiffRBFvbSrJ-0VZ-8ZPzEu5QzsPUHmv96tOpwMj4-zGjTGGUpOX-ciADNVVHbfAxXiYu9E1Fqz7OBlehf9QoDQk_Soo52QL24WIMvMo2qMVDNRoXm9gpnkRCsQSibV9HOjecgP6HhfUWI5aDKhUWcpHXT90Ftrt1b2YFcQrKnaBVIYq2JP3cI4Xws3vGj_znrPohWigFZhuvD2VW3pgHYPJ_ODIvYJW5RG5PSXC-Y9rNZAvvK4Y8c', title: 'Planta de Energía Sostenible', category: 'Industrial',                location: 'Bogotá, Colombia',       span: '' },
  { id: 3, image_url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDY4qzPLcWS7-PxekUAWeAMaBAIOKZJdP7Gtcio5yLE7xJfxUWvAFIY1JWXqYTsL755tyqjDr6ci3xQLcHtMu8IlQ3A3Z7lO09n4gMkoBc9ZTcW3BhdcH93eycegZiCqdgmHQug6mXXGZYh-HHiA3B-Ll3pCczSCq85rgn9AHLJoxj5-DOCzTa5Avzi3-rc7sYusxQE3IZeIRpkw99MiC4bnK8LON9G5Z3T6ge5nUhTCdYEa2wbAyBdCYwWwsREpSODoXpzcAxHoRU',    title: 'Refinería Fase III',           category: 'Industrial',                location: 'Medellín, Colombia',     span: '' },
  { id: 4, image_url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-bGXiAhp36DGW6o7gNZRFXdNC9T0T5zV279FPQlBw6locG2IZ5uJabzonm6E97K5eGrRFvvV29HAiF_QSPd17pOxuaIliRCPGtwVtRBskpHxij1k5nTfA4K-EsyR_KFiwUX0PgyX5vderhv7WzrEPJJrJKoyx1GCnxE01UY90Z1p0z2aw8rRCJpXUqewNCMv0LFuxRPbzQwCHwgGcc4MJQoOfC3jkRH2lFEhDc7qD8nsj90vFuOwQrLio8olRpUCCcmvtpmr_FY8',    title: 'Centro de Distribución',       category: 'Civil & Logística',         location: 'Cali, Colombia',         span: 'wide' },
  { id: 5, image_url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0Bq78suMjl7wI6pulMwtUcbx36pjzXhFceGaiZyR25EF88zZoNOeq0VG3J1WqLClyQ5kgzMRKAS63KtDYR38H4o63Zy_yXnP6C5x58voIKyoqyfRnnY38Wpzc7eSEbpUy3FsR36mNm980Nl6nfNubGN7DRt8yZEJ12xgGt7_ZAiHc1wlCHxn--2qLvzX0gx9BYVq-1ceejjtLvQVduoMtn4_DugQ7bP2V3UOFyRtTQkZNVnIjpaKeoesaQD6DAgY0DXS-k37ySoE',    title: 'Modernización Vial Sector 4',  category: 'Infraestructura',           location: 'Bucaramanga, Colombia',  span: '' },
  { id: 6, image_url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDX_nBBvKNo850jMOzHoB6SVOd9yihE7h_EzhXMLktnwaAZVO75Bz2HK2PhjcTf6OuLcSMF4yCIe-Opk2D6yE7KS5tt-JQhp0_eoWJiBWXJdexu-CVHCKaUOiSUxSf2C08Mlv4Z0VoLtEip19bv5PYhpUKtfAkpKRG74dLrbHYdDueVHw-gnnAJlTt68rMxT_4AZz--z6pasJeI3AtSvUUYKE86QnlMoLMRAg6v2yrAzILlHIcwID5M1PLSoq0l03IS2LIZczE_yv4',    title: 'Desarrollo Corporativo Elipse', category: 'Civil',                    location: 'Bogotá, Colombia',       span: 'tall' },
  { id: 7, image_url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAn6QVlEbJVpWnqgsvkc70RDD7lin2Qyi3XKTi_vF_IsEWKq6L1ixqFbg9JeUye31mfT7lg69zFlRR0wA-_PYm-zyu7gVXhVgE3SbB3k2BejsyBuiSwiU-VY3dgPY_tI1UEAyFHCtZqNHkPRSLZjcXsqAmGz0Gy_wWsIJ_8gvC2-Z7OA2j8U4vfg3Q-dUjiS5IVsMI-egfilKvTZF4QxvZauTs2FtKiQCXb-nsoMjAGT1mJGUPKQjQy3qD_o3Rm_2yFa49OLWLqGo',    title: 'Planta Metalúrgica',           category: 'Industrial',                location: 'Manizales, Colombia',    span: '' },
]

const categories = ['Todos', 'Industrial', 'Civil', 'Infraestructura']

export default function PortafolioPage() {
  const [items,    setItems]    = useState([])
  const [filter,   setFilter]   = useState('Todos')
  const [loading,  setLoading]  = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const res = await galleryApi.getAll()
        const data = res.data
        if (data && data.length > 0) {
          setItems(data.map((item, i) => ({
            ...item,
            location: '',
            span: i === 0 ? 'tall' : i === 3 ? 'wide' : i === 5 ? 'tall' : '',
          })))
        } else {
          setItems(fallbackItems)
        }
      } catch {
        setItems(fallbackItems)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  const getImageSrc = (url) => {
    if (!url) return ''
    return url.startsWith('http') ? url : `http://127.0.0.1:8000${url}`
  }

  const filtered = filter === 'Todos'
    ? items
    : items.filter(i => i.category?.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div className="bg-[#F9F6F0] dark:bg-[#1A1A1A] text-[#222222] dark:text-gray-100 transition-colors duration-300 font-sans">
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />

      <Navbar />

      {/* Header */}
      <section className="pt-40 pb-20 px-6 lg:px-12 bg-white dark:bg-[#222222]">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-[#D4AF37] uppercase tracking-[0.4em] mb-4 text-sm font-semibold font-sans">
            Excelencia Ejecutada
          </h3>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-12 text-[#222222] dark:text-white">
            Nuestro <span className="italic font-normal">Portafolio</span>
          </h1>

          {/* Filtros */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-4 text-xs md:text-sm tracking-widest uppercase font-medium font-sans">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 border-b-2 transition-colors ${
                  filter === cat
                    ? 'border-[#D4AF37] text-[#D4AF37]'
                    : 'border-transparent text-gray-500 hover:border-[#D4AF37]/50 hover:text-[#222222] dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid masonry */}
      <section className="pb-32 px-6 lg:px-12 bg-[#F9F6F0] dark:bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="text-center py-20 text-gray-400 font-sans">Cargando proyectos...</div>
          ) : (
            <div
              className="grid gap-4"
              style={{
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gridAutoRows: '250px',
              }}
            >
              {filtered.map((item) => (
                <div
                  key={item.id}
                  className="group relative overflow-hidden bg-white dark:bg-[#222222] border border-transparent hover:border-[#D4AF37] transition-all duration-500"
                  style={{
                    gridRow:   item.span === 'tall' ? 'span 2' : 'span 1',
                    gridColumn: item.span === 'wide' ? 'span 2' : 'span 1',
                  }}
                >
                  <img
                    src={getImageSrc(item.image_url)}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6 md:p-8">
                    {item.category && (
                      <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-bold mb-2 font-sans">
                        {item.category}
                      </span>
                    )}
                    <h5 className="text-white text-xl md:text-2xl font-display font-semibold">{item.title}</h5>
                    {item.location && (
                      <p className="text-white/60 text-xs mt-2 italic font-display">{item.location}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-20 text-center">
            <button className="px-10 py-4 border border-[#222222] dark:border-white text-xs tracking-[0.3em] uppercase font-bold hover:bg-[#222222] hover:text-white dark:hover:bg-white dark:hover:text-[#222222] transition-all font-sans">
              Cargar Más Proyectos
            </button>
          </div>
        </div>
      </section>

      <CTASection
        title="¿Listo para iniciar su próximo gran proyecto?"
        subtitle="Permita que nuestra experiencia y compromiso con la calidad impulsen sus metas estructurales."
        btnText="Solicitar Cotización"
      />

      <Footer />
    </div>
  )
}
