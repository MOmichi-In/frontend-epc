import { useEffect, useState } from 'react'
import { contentApi } from '../../api/contentApi'
import { galleryApi } from '../../api/galleryApi'
import { leadApi }    from '../../api/leadApi'

function StatCard({ label, value, icon, color }) {
  return (
    <div className={`bg-white rounded-xl shadow-sm p-6 border-l-4 ${color}`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">{label}</p>
          <p className="text-3xl font-bold text-gray-800 mt-1">{value}</p>
        </div>
        <span className="text-4xl">{icon}</span>
      </div>
    </div>
  )
}

export default function DashboardPage() {
  const [stats, setStats] = useState({
    contents: 0,
    gallery:  0,
    leads:    0,
  })

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [contents, gallery, leads] = await Promise.all([
          contentApi.getAll(),
          galleryApi.getAllAdmin(),
          leadApi.getAll(),
        ])
        setStats({
          contents: contents.data.length,
          gallery:  gallery.data.length,
          leads:    leads.data.length,
        })
      } catch (err) {
        console.error('Error cargando stats:', err)
      }
    }
    fetchStats()
  }, [])

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          label="Bloques de Contenido"
          value={stats.contents}
          icon="📝"
          color="border-accent"
        />
        <StatCard
          label="Imágenes en Galería"
          value={stats.gallery}
          icon="🖼️"
          color="border-green-500"
        />
        <StatCard
          label="Leads Recibidos"
          value={stats.leads}
          icon="📬"
          color="border-purple-500"
        />
      </div>
    </div>
  )
}