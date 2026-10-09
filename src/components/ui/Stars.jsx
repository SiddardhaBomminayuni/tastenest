import { FaStar } from 'react-icons/fa'

export default function Stars({ size = 18, gap = 4, className = '' }) {
  return (
    <div className={`flex text-sun ${className}`} style={{ gap }} aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }, (_, i) => (
        <FaStar key={i} size={size} />
      ))}
    </div>
  )
}
