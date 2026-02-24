import { createBrowserRouter } from 'react-router-dom'

// Layouts
import AdminLayout   from './components/admin/layout/AdminLayout'

// Páginas públicas
import HomePage       from './pages/public/HomePage'
import NosotrosPage   from './pages/public/NosotrosPage'
import PortafolioPage from './pages/public/PortafolioPage'
import { ServiciosPage, ContactoPage } from './pages/public/ServiciosContactoPages'

// Páginas admin
import LoginPage        from './pages/admin/LoginPage'
import DashboardPage    from './pages/admin/DashboardPage'
import ContentsPage     from './pages/admin/ContentsPage'
import GalleryAdminPage from './pages/admin/GalleryAdminPage'
import LeadsPage        from './pages/admin/LeadsPage'

// Guard
import ProtectedRoute from './components/shared/ProtectedRoute'

export const router = createBrowserRouter([
  // ==================
  // RUTAS PÚBLICAS
  // ==================
  { path: '/',           element: <HomePage /> },
  { path: '/nosotros',   element: <NosotrosPage /> },
  { path: '/portafolio', element: <PortafolioPage /> },
  { path: '/servicios',  element: <ServiciosPage /> },
  { path: '/contacto',   element: <ContactoPage /> },

  // ==================
  // AUTH
  // ==================
  { path: '/admin/login', element: <LoginPage /> },

  // ==================
  // RUTAS ADMIN
  // ==================
  {
    path: '/admin',
    element: (
      <ProtectedRoute>
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true,      element: <DashboardPage /> },
      { path: 'contents', element: <ContentsPage /> },
      { path: 'gallery',  element: <GalleryAdminPage /> },
      { path: 'leads',    element: <LeadsPage /> },
    ]
  }
])