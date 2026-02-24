import React, { useEffect, useState } from 'react'
import { galleryApi } from '../../api/galleryApi'
import Modal  from '../../components/admin/ui/Modal'
import Button from '../../components/admin/ui/Button'
import Badge  from '../../components/admin/ui/Badge'

const emptyForm = {
  title:       '',
  description: '',
  category:    '',
  is_active:   true,
  order:       0,
}

export default function GalleryAdminPage() {
  const [items,   setItems]   = useState([])
  const [loading, setLoading] = useState(true)
  const [modal,   setModal]   = useState(false)
  const [editing, setEditing] = useState(null)
  const [form,    setForm]    = useState(emptyForm)
  const [image,   setImage]   = useState(null)
  const [preview, setPreview] = useState(null)
  const [saving,  setSaving]  = useState(false)
  const [error,   setError]   = useState('')

  const fetchItems = async () => {
    try {
      const res = await galleryApi.getAllAdmin()
      setItems(res.data)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { fetchItems() }, [])

  const openCreate = () => {
    setEditing(null)
    setForm(emptyForm)
    setImage(null)
    setPreview(null)
    setError('')
    setModal(true)
  }

  const openEdit = (item) => {
    setEditing(item)
    setForm({
      title:       item.title,
      description: item.description || '',
      category:    item.category || '',
      is_active:   item.is_active,
      order:       item.order,
    })
    setImage(null)
    setPreview(item.image_url)
    setError('')
    setModal(true)
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (!file) return
    setImage(file)
    setPreview(URL.createObjectURL(file))
  }

  const handleDelete = async (item) => {
    if (!confirm(`¿Eliminar "${item.title}"?`)) return
    await galleryApi.delete(item.id)
    fetchItems()
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!editing && !image) {
      setError('Debes seleccionar una imagen.')
      return
    }
    setSaving(true)
    setError('')

    try {
      const formData = new FormData()
      formData.append('title',       form.title)
      formData.append('description', form.description)
      formData.append('category',    form.category)
      formData.append('is_active',   form.is_active ? 1 : 0)
      formData.append('order',       form.order)
      if (image) formData.append('image', image)

if (editing) {
  await galleryApi.update(editing.id, formData)
} else {
  await galleryApi.upload(formData)
}

      setModal(false)
      fetchItems()
    } catch (err) {
      setError('Error al guardar. Verifica los datos.')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">🖼️ Galería</h1>
        <Button onClick={openCreate}>+ Nueva imagen</Button>
      </div>

      {/* Grid de imágenes */}
      {loading ? (
        <p className="text-gray-500">Cargando...</p>
      ) : items.length === 0 ? (
        <div className="text-center py-16 text-gray-400">
          <p className="text-5xl mb-4">🖼️</p>
          <p>No hay imágenes en la galería</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {items.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              {/* Imagen */}
              <div className="h-48 bg-gray-100 overflow-hidden">
                <img
                  src={`http://127.0.0.1:8000${item.image_url}`}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info */}
              <div className="p-3">
                <p className="font-medium text-gray-800 text-sm truncate">{item.title}</p>
                {item.category && (
                  <p className="text-xs text-gray-400 mt-0.5">{item.category}</p>
                )}
                <div className="mt-2">
                  <Badge value={item.is_active} />
                </div>
              </div>

              {/* Acciones */}
              <div className="px-3 pb-3 flex gap-2">
                <Button size="sm" variant="secondary" onClick={() => openEdit(item)}>
                  Editar
                </Button>
                <Button size="sm" variant="danger" onClick={() => handleDelete(item)}>
                  Eliminar
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      <Modal
        isOpen={modal}
        onClose={() => setModal(false)}
        title={editing ? 'Editar imagen' : 'Nueva imagen'}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-red-50 text-red-700 border border-red-200 px-4 py-2 rounded-lg text-sm">
              {error}
            </div>
          )}

          {/* Preview */}
          {preview && (
            <div className="w-full h-40 bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={preview.startsWith('http') ? preview : `http://127.0.0.1:8000${preview}`}
                alt="preview"
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {editing ? 'Nueva imagen (opcional)' : 'Imagen *'}
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-primary-900 file:text-white hover:file:bg-primary-700"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Título</label>
              <input
                type="text"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Categoría</label>
              <input
                type="text"
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Descripción</label>
            <textarea
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              rows={3}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent resize-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Orden</label>
              <input
                type="number"
                value={form.order}
                onChange={(e) => setForm({ ...form, order: parseInt(e.target.value) })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div className="flex items-end pb-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.is_active}
                  onChange={(e) => setForm({ ...form, is_active: e.target.checked })}
                  className="rounded"
                />
                <span className="text-sm text-gray-700">Activo</span>
              </label>
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <Button variant="secondary" onClick={() => setModal(false)}>
              Cancelar
            </Button>
            <Button type="submit" disabled={saving}>
              {saving ? 'Guardando...' : 'Guardar'}
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  )
}