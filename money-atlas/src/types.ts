export type ChapterId = 'metal' | 'origins' | 'firms' | 'markets' | 'state' | 'ledger'

export type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'pullquote'; text: string }
  | { type: 'callout'; title: string; body: string; tone?: 'ink' | 'teal' | 'copper' | 'crimson' }
  | { type: 'diagram'; id: string }
  | { type: 'tool'; id: 'compound' | 'inflation' | 'loan' | 'tax' | 'rule72' }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'steps'; items: { n: string; title: string; body: string }[] }

export type Article = {
  slug: string
  title: string
  chapter: ChapterId
  summary: string
  readMinutes: number
  tags: string[]
  diagram: string
  body: Block[]
}

export type Chapter = {
  id: ChapterId
  slug: string
  roman: string
  title: string
  kicker: string
  blurb: string
  color: string
}

export type GlossaryTerm = {
  slug: string
  term: string
  seeAlso?: string[]
  body: string
}
