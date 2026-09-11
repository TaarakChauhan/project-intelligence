import { articles } from '../data/articles'
import { glossary } from '../data/glossary'
import type { Article } from '../types'
import type { GlossaryTerm } from '../types'

export type SearchHit =
  | { kind: 'article'; article: Article; score: number }
  | { kind: 'term'; term: GlossaryTerm; score: number }

function hay(s: string): string {
  return s.toLowerCase()
}

function scoreText(q: string, fields: string[]): number {
  const nq = hay(q.trim())
  if (!nq) return 0
  let s = 0
  for (const f of fields) {
    const h = hay(f)
    if (h === nq) s += 8
    else if (h.startsWith(nq)) s += 5
    else if (h.includes(nq)) s += 3
    else {
      const parts = nq.split(/\s+/).filter(Boolean)
      if (parts.length > 1 && parts.every((p) => h.includes(p))) s += 2
    }
  }
  return s
}

export function searchAll(q: string): SearchHit[] {
  const query = q.trim()
  if (!query) return []
  const hits: SearchHit[] = []
  for (const article of articles) {
    const score = scoreText(query, [
      article.title,
      article.summary,
      article.tags.join(' '),
      article.slug.replace(/-/g, ' '),
    ])
    if (score > 0) hits.push({ kind: 'article', article, score })
  }
  for (const term of glossary) {
    const score = scoreText(query, [term.term, term.body, term.slug.replace(/-/g, ' ')])
    if (score > 0) hits.push({ kind: 'term', term, score })
  }
  hits.sort((a, b) => b.score - a.score || a.kind.localeCompare(b.kind))
  return hits
}
