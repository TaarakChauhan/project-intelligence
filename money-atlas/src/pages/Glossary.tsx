import { useEffect, useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { glossary, termsByLetter } from '../data/glossary'
import { RichText } from '../lib/richtext'
import { onInPageClick, scrollToId } from '../lib/scroll'

export function GlossaryPage() {
  const [q, setQ] = useState('')
  const [params] = useSearchParams()
  const grouped = useMemo(() => termsByLetter(), [])
  const letters = [...grouped.keys()]
  const filtered = useMemo(() => {
    const nq = q.trim().toLowerCase()
    if (!nq) return glossary
    return glossary.filter(
      (t) => t.term.toLowerCase().includes(nq) || t.body.toLowerCase().includes(nq) || t.slug.includes(nq),
    )
  }, [q])

  useEffect(() => {
    const target = params.get('t')
    if (target) scrollToId(target)
  }, [params])

  return (
    <article className="wrap" style={{ padding: '2.4rem 1.25rem 4rem' }}>
      <p className="kicker">{glossary.length} terms</p>
      <h1>Glossary</h1>
      <p className="manifesto">
        Short definitions written for this atlas. Words in dotted teal link here from the articles.
        Search, or jump by letter.
      </p>
      <form className="search-field" style={{ maxWidth: '28rem', margin: '1rem 0' }} onSubmit={(e) => e.preventDefault()}>
        <span aria-hidden="true">⌕</span>
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Filter terms"
          aria-label="Filter glossary"
        />
      </form>
      {!q ? (
        <nav className="alpha-nav" aria-label="Letters">
          {letters.map((Ltr) => (
            <a key={Ltr} href={`#letter-${Ltr}`} onClick={(e) => onInPageClick(e, `letter-${Ltr}`)}>{Ltr}</a>
          ))}
        </nav>
      ) : null}
      {q ? (
        <div className="glossary-list">
          {filtered.map((t) => (
            <Term key={t.slug} t={t} />
          ))}
          {filtered.length === 0 ? <p>Nothing in the word-hoard matches.</p> : null}
        </div>
      ) : (
        [...grouped.entries()].map(([letter, terms]) => (
          <section key={letter}>
            <h2 id={`letter-${letter}`} className="roman-giant" style={{ fontSize: '2.4rem' }}>{letter}</h2>
            <div className="glossary-list">
              {terms.map((t) => (
                <Term key={t.slug} t={t} />
              ))}
            </div>
          </section>
        ))
      )}
    </article>
  )
}

function Term({ t }: { t: (typeof glossary)[number] }) {
  return (
    <div className="glossary-item" id={t.slug}>
      <h2>{t.term}</h2>
      <p>
        <RichText text={t.body} />
      </p>
      {t.seeAlso?.length ? (
        <p className="meta">
          See also{' '}
          {t.seeAlso.map((s, i) => (
            <span key={s}>
              {i > 0 ? ' · ' : ''}
              <Link to={`/glossary?t=${encodeURIComponent(s)}`}>{s.replace(/-/g, ' ')}</Link>
            </span>
          ))}
        </p>
      ) : null}
    </div>
  )
}
