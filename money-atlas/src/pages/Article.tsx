import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ArticleBody, headingsOf } from '../components/ArticleBody'
import { ProgressBar } from '../components/ProgressBar'
import { articleBySlug, relatedArticles } from '../data/articles'
import { chapterBySlug } from '../data/chapters'
import { onInPageClick } from '../lib/scroll'

export function ArticlePage() {
  const { slug } = useParams()
  const article = slug ? articleBySlug(slug) : undefined
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])
  if (!article) return <Navigate to="/404" replace />
  const chapter = chapterBySlug(article.chapter)
  const heads = headingsOf(article.body)
  const related = relatedArticles(article)
  return (
    <>
      <ProgressBar />
      <header className="article-hero wrap">
        <p className="kicker">
          <Link to={`/chapter/${article.chapter}`}>{chapter?.roman}. {chapter?.title}</Link>
          {' · '}
          {article.readMinutes} min read
        </p>
        <h1>{article.title}</h1>
        <p className="manifesto">{article.summary}</p>
      </header>
      <div className="article-layout wrap">
        <ArticleBody body={article.body} />
        <aside className="toc">
          <h2>On this page</h2>
          {heads.length === 0 ? <p>A single walk. No subheads.</p> : null}
          {heads.map((h) => (
            <a key={h.id} href={`#${h.id}`} onClick={(e) => onInPageClick(e, h.id)}>{h.text}</a>
          ))}
          <h2>Also in this chapter</h2>
          {related.map((r) => (
            <Link key={r.slug} to={`/article/${r.slug}`}>{r.title}</Link>
          ))}
        </aside>
      </div>
    </>
  )
}
