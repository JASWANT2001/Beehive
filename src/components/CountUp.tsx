import { useEffect, useRef, useState } from 'react'

/**
 * Counts a figure like "120+" or "10L+" up from zero the first time it scrolls
 * into view. Text around the number is kept as-is; visitors who prefer reduced
 * motion see the final value straight away.
 */
export default function CountUp({ value, duration = 1400 }: { value: string; duration?: number }) {
  const match = value.match(/^(\D*)(\d+)(.*)$/)
  const target = match ? Number(match[2]) : 0
  const ref = useRef<HTMLSpanElement>(null)
  const [n, setN] = useState(target)

  useEffect(() => {
    const el = ref.current
    if (!match || !el || !('IntersectionObserver' in window)) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    setN(0)
    let raf = 0
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        const start = performance.now()
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1)
          setN(Math.round(target * (1 - Math.pow(1 - t, 3))))
          if (t < 1) raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, duration])

  if (!match) return <span>{value}</span>
  return (
    <span ref={ref} aria-label={value}>
      {match[1]}
      {n}
      {match[3]}
    </span>
  )
}
