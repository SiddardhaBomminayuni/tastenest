import { useEffect, useState } from 'react'

// Number of slider cards visible for the current screen width.
export default function useItemsPerView() {
  const getCount = () => {
    if (typeof window === 'undefined') return 3
    if (window.matchMedia('(min-width: 1024px)').matches) return 3
    if (window.matchMedia('(min-width: 640px)').matches) return 2
    return 1
  }

  const [count, setCount] = useState(getCount)

  useEffect(() => {
    const onResize = () => setCount(getCount())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return count
}
