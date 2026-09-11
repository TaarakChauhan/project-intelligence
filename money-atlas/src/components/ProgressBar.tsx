import { useEffect, useState } from 'react'

export function ProgressBar() {
  const [p, setP] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const el = document.getElementById('main')
      const height = (el?.scrollHeight ?? document.body.scrollHeight) - window.innerHeight
      const y = window.scrollY
      setP(height <= 0 ? 0 : Math.min(100, Math.max(0, (y / height) * 100)))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <div className="progress" aria-hidden="true">
      <span style={{ width: `${p}%` }} />
    </div>
  )
}
