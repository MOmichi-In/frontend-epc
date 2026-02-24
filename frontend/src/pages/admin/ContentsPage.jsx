import { useEffect, useState } from 'react'
import { contentApi } from '../../api/contentApi'
import Table   from '../../components/admin/ui/Table'
import Modal   from '../../components/admin/ui/Modal'
import Button  from '../../components/admin/ui/Button'
import Badge   from '../../components/admin/ui/Badge'

const emptyForm = {
  section:   '',
  title:     '',
  body:      '',
  image_url: '',
  is_active: true,
  order:     0,
}

export default function ContentsPage() {
  const [contents, setContents] = useState([])
  const [loading,  setLoading]  = useState(true)
  const [modal,    setModal]    = useState(false)
  const [editing,  setEditing]  = useState(null)
  const [form,     setForm]     = useState(emptyForm)
  const [saving,   setSaving]   = useState(false)
  const [error,    setError]    = useState('')

const fetchContents = async () => {
  try {
    const res = await contentApi.getAll()
    // Axios envuelve la respuesta en .data
    // pero el backend también devuelve .data por el Resource
    console.log('Response:', res.data) // agrega esto para ver qué llega
    setContents(res.data)
  } finally {
    setLoading(false)
  }
}

  useEffect(() => { fetchContents() }, [])

  const openCreate = () => {
    setEditing(null)
    setForm(emptyForm)
    setError('')
    setModal(true)
  }

  const openEdit = (item) => {
    setEditing(item)
    setForm({
      section:   item.section,
      title:     item.title,
      body:      item.body || '',
      image_url: item.image_url || '',
      is_active: item.is_active,
      order:     item.order,
    })
    setError('')
    setModal(true)
  }

  const handleDelete = async (item) => {
    if (!confirm(`¿Eliminar "${item.title}"?`)) return
    await contentApi.delete(item.id)
    fetchContents()
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSaving(true)
    setError('')
    try {
      if (editing) {
        await contentApi.update(editing.id, form)
      } else {
        await contentApi.create(form)
      }
      setModal(false)
      fetchContents()
    } catch (err) {
      setError('Error al guardar. Verifica los datos.')
    } finally {
      setSaving(false)
    }
  }

  const columns = [
    { key: 'section', label: 'Sección' },
    { key: 'title',   label: 'Título' },
    { key: 'order',   label: 'Orden' },
    {
      key: 'is_active',
      label: 'Estado',
      render: (row) => <Badge value={row.is_active} />,
    },
  ]

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">📝 Contenido</h1>
        <Button onClick={openCreate}>+ Nuevo bloque</Button>
      </div>

      {/* Tabla */}
      {loading ? (
        <p className="text-gray-500">Cargando...</p>
      ) : (
        <Table
          columns={columns}
          data={contents}
          actions={(row) => (
            <>
              <Button size="sm" variant="secondary" onClick={() => openEdit(row)}>
                Editar
              </Button>
              <Button size="sm" variant="danger" onClick={() => handleDelete(row)}>
                Eliminar
              </Button>
            </>
          )}
        />
      )}

      {/* Modal */}
      <Modal
        isOpen={modal}
        onClose={() => setModal(false)}
        title={editing ? 'Editar contenido' : 'Nuevo contenido'}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-red-50 text-red-700 border border-red-200 px-4 py-2 rounded-lg text-sm">
              {error}
            </div>
          )}

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Sección</label>
              <input
                type="text"
                value={form.section}
                onChange={(e) => setForm({ ...form, section: e.target.value })}
                required
                placeholder="hero, about, services..."
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Orden</label>
              <input
                type="number"
                value={form.order}
                onChange={(e) => setForm({ ...form, order: parseInt(e.target.value) })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
          </div>

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
            <label className="block text-sm font-medium text-gray-700 mb-1">Cuerpo</label>
            <textarea
              value={form.body}
              onChange={(e) => setForm({ ...form, body: e.target.value })}
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent resize-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">URL de imagen</label>
            <input
              type="text"
              value={form.image_url}
              onChange={(e) => setForm({ ...form, image_url: e.target.value })}
              placeholder="https://..."
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="is_active"
              checked={form.is_active}
              onChange={(e) => setForm({ ...form, is_active: e.target.checked })}
              className="rounded"
            />
            <label htmlFor="is_active" className="text-sm text-gray-700">Activo</label>
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