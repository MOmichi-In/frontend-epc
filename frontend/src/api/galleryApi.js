import client from './client'

export const galleryApi = {
  // Público
  getAll: () =>
    client.get('/public/gallery'),

  // Admin
  getAllAdmin: () =>
    client.get('/admin/gallery'),

  upload: (formData) =>
    client.post('/admin/gallery', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    }),
    upload2: (id, formData) =>
  client.post(`/admin/gallery/${id}`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  }),
update: (id, formData) =>
  client.post(`/admin/gallery/${id}/update`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  }),

  delete: (id) =>
    client.delete(`/admin/gallery/${id}`),
}