import type { Article, ChapterId } from '../types'
import { metalArticles } from './articles-metal'
import { originArticles } from './articles-origins'
import { firmArticles } from './articles-firms'
import { marketArticles } from './articles-markets'
import { stateArticles } from './articles-state'
import { ledgerArticles } from './articles-ledger'

export const articles: Article[] = [
  ...metalArticles,
  ...originArticles,
  ...firmArticles,
  ...marketArticles,
  ...stateArticles,
  ...ledgerArticles,
]

export function articleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug)
}

export function articlesByChapter(id: ChapterId): Article[] {
  return articles.filter((a) => a.chapter === id)
}

export function relatedArticles(article: Article, n = 3): Article[] {
  const same = articles.filter(
    (a) => a.chapter === article.chapter && a.slug !== article.slug,
  )
  return same.slice(0, n)
}
