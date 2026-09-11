import { Link, Navigate, useParams } from 'react-router-dom'
import { articlesByChapter } from '../data/articles'
import { chapterBySlug } from '../data/chapters'
import { chapterMarks } from '../diagrams/marks'

export function ChapterPage() {
  const { slug } = useParams()
  const chapter = slug ? chapterBySlug(slug) : undefined
  if (!chapter) return <Navigate to="/404" replace />
  const list = articlesByChapter(chapter.id)
  const Mark = chapterMarks[chapter.id]
  return (
    <article className="chapter-landing wrap">
      <p className="kicker">{chapter.kicker}</p>
      <p className="roman-giant">{chapter.roman}</p>
      <div style={{ width: 72, margin: '0.4rem 0 1rem' }}>
        <Mark />
      </div>
      <h1>{chapter.title}</h1>
      <p className="manifesto">{chapter.blurb}</p>
      <ol className="chapter-list">
        {list.map((a, i) => (
          <li key={a.slug}>
            <Link to={`/article/${a.slug}`}>
              <span className="n">{String(i + 1).padStart(2, '0')}</span>
              <span>
                <strong>{a.title}</strong>
                <br />
                {a.summary}
              </span>
              <span className="meta">{a.readMinutes} min</span>
            </Link>
          </li>
        ))}
      </ol>
    </article>
  )
}
