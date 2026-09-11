import { Link } from 'react-router-dom'
import { termBySlug } from '../data/glossary'

const TOKEN = /\[\[([^\]]+)\]\]/g

export function RichText({ text }: { text: string }) {
  const parts: Array<string | { slug: string; label: string }> = []
  let last = 0
  for (const m of text.matchAll(TOKEN)) {
    const idx = m.index ?? 0
    if (idx > last) parts.push(text.slice(last, idx))
    const inner = m[1] ?? ''
    const [slug, label] = inner.split('|')
    parts.push({ slug: slug?.trim() ?? '', label: (label ?? slug ?? '').trim() })
    last = idx + m[0].length
  }
  if (last < text.length) parts.push(text.slice(last))

  return (
    <>
      {parts.map((p, i) => {
        if (typeof p === 'string') return <span key={i}>{p}</span>
        const term = termBySlug(p.slug)
        const label = p.label || term?.term || p.slug
        return (
          <Link key={i} className="term-link" to={`/glossary?t=${encodeURIComponent(p.slug)}`} title={term?.term}>
            {label}
          </Link>
        )
      })}
    </>
  )
}
