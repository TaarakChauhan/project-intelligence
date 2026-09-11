import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { searchAll } from '../lib/search'

export function SearchPage() {
  const [params, setParams] = useSearchParams()
  const initial = params.get('q') ?? ''
  const [q, setQ] = useState(initial)
  const hits = useMemo(() => searchAll(q), [q])
  const articles = hits.filter((h) => h.kind === 'article')
  const terms = hits.filter((h) => h.kind === 'term')

  return (
    <article className="wrap search-page" style={{ padding: '2.4rem 1.25rem 4rem' }}>
      <p className="kicker">Find a page or a word</p>
      <h1>Search</h1>
      <input
        type="search"
        value={q}
        autoFocus
        placeholder="Interest, inflation, haystack…"
        aria-label="Search the atlas"
        onChange={(e) => {
          const v = e.target.value
          setQ(v)
          setParams(v ? { q: v } : {}, { replace: true })
        }}
      />
      {!q.trim() ? <p>Type a word. We filter titles, summaries, tags, and glossary terms on this machine.</p> : null}
      {q.trim() && hits.length === 0 ? <p>No matches. Try a plainer word — “bond”, “tax”, “cash”.</p> : null}

      {articles.length > 0 ? (
        <>
          <p className="kicker" style={{ marginTop: '2rem' }}>Articles</p>
          <div className="search-results">
            {articles.map((h) =>
              h.kind === 'article' ? (
                <Link className="article-card" to={`/article/${h.article.slug}`} key={h.article.slug}>
                  <p className="meta">{h.article.chapter} · {h.article.readMinutes} min</p>
                  <h3>{h.article.title}</h3>
                  <p>{h.article.summary}</p>
                </Link>
              ) : null,
            )}
          </div>
        </>
      ) : null}

      {terms.length > 0 ? (
        <>
          <p className="kicker" style={{ marginTop: '2rem' }}>Glossary</p>
          <div className="search-results">
            {terms.map((h) =>
              h.kind === 'term' ? (
                <Link className="term-card" to={`/glossary#${h.term.slug}`} key={h.term.slug}>
                  <h3>{h.term.term}</h3>
                  <p>{h.term.body.replace(/\[\[|\]\]/g, '')}</p>
                </Link>
              ) : null,
            )}
          </div>
        </>
      ) : null}
    </article>
  )
}
