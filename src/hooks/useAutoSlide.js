import { useEffect, useRef, useState } from 'react'

const SWIPE_DISTANCE = 40

// Slider state with autoplay, pause on hover and swipe/drag support.
export default function useAutoSlide(count, delay = 4000, { pauseOnHover = true } = {}) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const startX = useRef(null)

  const current = Math.min(index, Math.max(count - 1, 0))

  const go = (i) => setIndex(((i % count) + count) % count)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (paused || reduceMotion || count < 2) return
    // restarts whenever the slide changes, so a manual click gets a full delay
    const timer = setTimeout(() => setIndex((current + 1) % count), delay)
    return () => clearTimeout(timer)
  }, [paused, current, count, delay])

  const handlers = {
    onMouseEnter: () => pauseOnHover && setPaused(true),
    onMouseLeave: () => setPaused(false),
    onPointerDown: (e) => {
      startX.current = e.clientX
    },
    onPointerUp: (e) => {
      if (startX.current === null) return
      const distance = e.clientX - startX.current
      if (Math.abs(distance) > SWIPE_DISTANCE) go(current + (distance < 0 ? 1 : -1))
      startX.current = null
    },
    onPointerCancel: () => {
      startX.current = null
    },
    // stop the browser's native image drag so mouse dragging works as a swipe
    onDragStart: (e) => e.preventDefault(),
  }

  return { current, go, handlers }
}
