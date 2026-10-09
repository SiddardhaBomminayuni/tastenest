const variants = {
  brand: { fill: 'bg-brand text-white', outline: 'border-brand' },
  sun: { fill: 'bg-sun text-black', outline: 'border-sun' },
}

// Solid button with the offset outline used across the design
// (the outline sits 15px in from the left, 7px past the right and 6px above/below).
export default function OutlineButton({ as: Tag = 'button', variant = 'brand', className = '', children, ...props }) {
  const { fill, outline } = variants[variant]

  return (
    <Tag
      className={`group relative inline-flex shrink-0 items-center justify-center rounded-[12px] font-display ${fill} ${className}`}
      {...props}
    >
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute -top-[6px] -bottom-[6px] left-[15px] -right-[7px] rounded-[12px] border-[3px] transition-transform duration-200 group-hover:-translate-x-[6px] ${outline}`}
      />
      <span className="relative">{children}</span>
    </Tag>
  )
}
