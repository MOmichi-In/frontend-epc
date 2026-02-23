import { Navigate } from 'react-router-dom'

export default function GuestRoute({ children }) {
  const token = localStorage.getItem('auth_token')

  if (token) {
    return <Navigate to="/admin" replace />
  }

  return children
}