import client from './client'

export const contentApi = {
  // Admin
  getAll: () =>
    client.get('/admin/contents'),

  create: (data) =>
    client.post('/admin/contents', data),

  update: (id, data) =>
    client.put(`/admin/contents/${id}`, data),

  delete: (id) =>
    client.delete(`/admin/contents/${id}`),

  // Público
  getBySection: (section) =>
    client.get(`/public/contents/${section}`),
}