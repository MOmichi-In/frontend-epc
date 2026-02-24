export default function Badge({ value, trueLabel = 'Activo', falseLabel = 'Inactivo' }) {
  return value ? (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
      {trueLabel}
    </span>
  ) : (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
      {falseLabel}
    </span>
  )
}