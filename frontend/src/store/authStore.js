import { create } from 'zustand'
import { authApi } from '../api/authApi'

export const useAuthStore = create((set) => ({
  user:  null,
  token: localStorage.getItem('auth_token'),

  isAuthenticated: () => !!localStorage.getItem('auth_token'),

  login: async (email, password) => {
    const { data } = await authApi.login(email, password)
    localStorage.setItem('auth_token', data.token)
    set({ user: data.user, token: data.token })
    return data
  },

  logout: async () => {
    try {
      await authApi.logout()
    } finally {
      localStorage.removeItem('auth_token')
      set({ user: null, token: null })
    }
  },

  fetchMe: async () => {
    const { data } = await authApi.me()
    set({ user: data })
  },
}))