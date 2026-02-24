import { Outlet, NavLink, useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../../store/authStore'

const navItems = [
  { to: '/admin',          label: '📊 Dashboard',  end: true },
  { to: '/admin/contents', label: '📝 Contenido'            },
  { to: '/admin/gallery',  label: '🖼️  Galería'              },
  { to: '/admin/leads',    label: '📬 Leads'                 },
]

export default function AdminLayout() {
  const logout   = useAuthStore((state) => state.logout)
  const user     = useAuthStore((state) => state.user)
  const navigate = useNavigate()

  const handleLogout = async () => {
    await logout()
    navigate('/admin/login')
  }

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <aside className="w-64 bg-primary-900 flex flex-col">

        {/* Logo */}
        <div className="px-6 py-6 border-b border-blue-800">
          <h1 className="text-white font-bold text-xl">⚙ Panel Admin</h1>
          <p className="text-blue-300 text-xs mt-1">{user?.name || 'Administrador'}</p>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-4 py-6 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `flex items-center px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-accent text-white'
                    : 'text-blue-200 hover:bg-blue-800 hover:text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Logout */}
        <div className="px-4 py-4 border-t border-blue-800">
          <button
            onClick={handleLogout}
            className="w-full text-left px-4 py-2.5 text-sm text-blue-300 hover:text-white hover:bg-blue-800 rounded-lg transition-colors"
          >
            🚪 Cerrar sesión
          </button>
        </div>

      </aside>

      {/* Main */}
      <main className="flex-1 flex flex-col">

        {/* Topbar */}
        <header className="bg-white shadow-sm px-8 py-4 flex items-center justify-between">
          <h2 className="text-gray-700 font-semibold text-lg">Bienvenido</h2>
          <span className="text-sm text-gray-500">{user?.email}</span>
        </header>

        {/* Content */}
        <div className="flex-1 p-8">
          <Outlet />
        </div>

      </main>

    </div>
  )
}