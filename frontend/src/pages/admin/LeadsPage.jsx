import React, { useEffect, useState } from 'react'
import { leadApi } from '../../api/leadApi'
import Table  from '../../components/admin/ui/Table'
import Button from '../../components/admin/ui/Button'
import Badge  from '../../components/admin/ui/Badge'
import Modal  from '../../components/admin/ui/Modal'

export default function LeadsPage() {
  const [leads,   setLeads]   = useState([])
  const [loading, setLoading] = useState(true)
  const [detail,  setDetail]  = useState(null)

  const fetchLeads = async () => {
    try {
      const res = await leadApi.getAll()
      setLeads(res.data)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { fetchLeads() }, [])

  const handleMarkAsRead = async (lead) => {
    await leadApi.markAsRead(lead.id)
    fetchLeads()
  }

  const handleDelete = async (lead) => {
    if (!confirm(`¿Eliminar lead de "${lead.name}"?`)) return
    await leadApi.delete(lead.id)
    fetchLeads()
  }

  const openDetail = async (lead) => {
    if (!lead.is_read) {
      await leadApi.markAsRead(lead.id)
      fetchLeads()
    }
    setDetail(lead)
  }

  const columns = [
    { key: 'name',  label: 'Nombre' },
    { key: 'email', label: 'Email' },
    { key: 'phone', label: 'Teléfono', render: (row) => row.phone || '—' },
    {
      key: 'is_read',
      label: 'Estado',
      render: (row) => (
        <Badge value={row.is_read} trueLabel="Leído" falseLabel="Nuevo" />
      ),
    },
  ]

  const unreadCount = leads.filter((l) => !l.is_read).length

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold text-gray-800">📬 Leads</h1>
          {unreadCount > 0 && (
            <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              {unreadCount} nuevos
            </span>
          )}
        </div>
      </div>

      {loading ? (
        <p className="text-gray-500">Cargando...</p>
      ) : (
        <Table
          columns={columns}
          data={leads}
          actions={(row) => (
            <>
              <Button size="sm" variant="secondary" onClick={() => openDetail(row)}>
                Ver
              </Button>
              {!row.is_read && (
                <Button size="sm" variant="success" onClick={() => handleMarkAsRead(row)}>
                  ✓ Leído
                </Button>
              )}
              <Button size="sm" variant="danger" onClick={() => handleDelete(row)}>
                Eliminar
              </Button>
            </>
          )}
        />
      )}

      {/* Modal detalle */}
      <Modal
        isOpen={!!detail}
        onClose={() => setDetail(null)}
        title="Detalle del Lead"
      >
        {detail && (
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-gray-500 uppercase font-medium">Nombre</p>
                <p className="text-gray-800 font-medium">{detail.name}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-medium">Email</p>
                <a href={`mailto:${detail.email}`} className="text-accent hover:underline">
                  {detail.email}
                </a>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-medium">Teléfono</p>
                <p className="text-gray-800">{detail.phone || '—'}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-medium">Fuente</p>
                <p className="text-gray-800">{detail.source}</p>
              </div>
            </div>

            {detail.message && (
              <div>
                <p className="text-xs text-gray-500 uppercase font-medium mb-1">Mensaje</p>
                <div className="bg-gray-50 rounded-lg px-4 py-3 text-sm text-gray-700">
                  {detail.message}
                </div>
              </div>
            )}

            <div className="flex justify-end pt-2">
              <Button variant="secondary" onClick={() => setDetail(null)}>
                Cerrar
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}