import { createBrowserRouter } from 'react-router-dom'

// Layouts
import PublicLayout  from './components/public/PublicLayout'
import AdminLayout   from './components/admin/layout/AdminLayout'

// Páginas públicas
import HomePage      from './pages/public/HomePage'
import GalleryPage   from './pages/public/GalleryPage'
import ContactPage   from './pages/public/ContactPage'

// Páginas admin
import LoginPage     from './pages/admin/LoginPage'
import DashboardPage from './pages/admin/DashboardPage'
import ContentsPage  from './pages/admin/ContentsPage'
import GalleryAdminPage from './pages/admin/GalleryAdminPage'
import LeadsPage     from './pages/admin/LeadsPage'

// Guard
import ProtectedRoute from './components/shared/ProtectedRoute'

export const router = createBrowserRouter([
  // ==================
  // RUTAS PÚBLICAS
  // ==================
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      { index: true,       element: <HomePage /> },
      { path: 'galeria',   element: <GalleryPage /> },
      { path: 'contacto',  element: <ContactPage /> },
    ]
  },

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
      { index: true,          element: <DashboardPage /> },
      { path: 'contents',     element: <ContentsPage /> },
      { path: 'gallery',      element: <GalleryAdminPage /> },
      { path: 'leads',        element: <LeadsPage /> },
    ]
  }
])