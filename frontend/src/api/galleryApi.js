import client from './client'

export const galleryApi = {
  // Admin
  getAll: () =>
    client.get('/admin/gallery'),

  upload: (formData) =>
    client.post('/admin/gallery', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),

  update: (id, formData) =>
    client.post(`/admin/gallery/${id}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
      params: { _method: 'PUT' },
    }),

  delete: (id) =>
    client.delete(`/admin/gallery/${id}`),

  // Público
  getPublic: () =>
    client.get('/admin/gallery'),
}