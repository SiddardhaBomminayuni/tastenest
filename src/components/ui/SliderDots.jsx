export default function SliderDots({ count, active, onChange, className = '', label = 'slide' }) {
  return (
    <div className={`flex gap-[20px] ${className}`}>
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          type="button"
          aria-label={`Go to ${label} ${i + 1}`}
          aria-current={i === active}
          onClick={() => onChange(i)}
          className={`size-[15px] rounded-full transition-colors ${
            i === active ? 'border-[5px] border-brand bg-white' : 'bg-[#b5b5b5] hover:bg-brand/60'
          }`}
        />
      ))}
    </div>
  )
}
