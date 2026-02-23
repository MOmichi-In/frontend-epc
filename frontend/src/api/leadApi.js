import client from './client'

export const leadApi = {
  // Admin
  getAll: () =>
    client.get('/admin/leads'),

  markAsRead: (id) =>
    client.patch(`/admin/leads/${id}/read`),

  delete: (id) =>
    client.delete(`/admin/leads/${id}`),

  // Público
  store: (data) =>
    client.post('/public/leads', data),
}