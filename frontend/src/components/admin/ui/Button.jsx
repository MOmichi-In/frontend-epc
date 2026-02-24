const variants = {
  primary:   'bg-primary-900 hover:bg-primary-700 text-white',
  danger:    'bg-red-500 hover:bg-red-600 text-white',
  secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-700',
  success:   'bg-green-500 hover:bg-green-600 text-white',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  type = 'button',
}) {
  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${variants[variant]}
        ${sizes[size]}
        font-medium rounded-lg transition-colors
        disabled:opacity-50 disabled:cursor-not-allowed
      `}
    >
      {children}
    </button>
  )
}