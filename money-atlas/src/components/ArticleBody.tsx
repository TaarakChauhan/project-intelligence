import { Diagram } from '../diagrams'
import { RichText } from '../lib/richtext'
import { EmbeddedTool } from '../tools'
import type { Block } from '../types'

export function ArticleBody({ body }: { body: Block[] }) {
  return (
    <div className="prose">
      {body.map((b, i) => {
        switch (b.type) {
          case 'p':
            return (
              <p key={i}>
                <RichText text={b.text} />
              </p>
            )
          case 'h2':
            return (
              <h2 key={i} id={slugify(b.text)}>
                {b.text}
              </h2>
            )
          case 'h3':
            return <h3 key={i}>{b.text}</h3>
          case 'pullquote':
            return (
              <blockquote className="pullquote" key={i}>
                {b.text}
              </blockquote>
            )
          case 'callout':
            return (
              <aside className={`callout callout--${b.tone ?? 'copper'}`} key={i}>
                <p className="callout__title">{b.title}</p>
                <p>
                  <RichText text={b.body} />
                </p>
              </aside>
            )
          case 'diagram':
            return <Diagram key={i} id={b.id} />
          case 'tool':
            return <EmbeddedTool key={i} id={b.id} />
          case 'ul':
            return (
              <ul key={i}>
                {b.items.map((it) => (
                  <li key={it}>
                    <RichText text={it} />
                  </li>
                ))}
              </ul>
            )
          case 'ol':
            return (
              <ol key={i}>
                {b.items.map((it) => (
                  <li key={it}>
                    <RichText text={it} />
                  </li>
                ))}
              </ol>
            )
          case 'steps':
            return (
              <ol className="steps" key={i}>
                {b.items.map((s) => (
                  <li key={s.n}>
                    <span className="n">{s.n}</span>
                    <div>
                      <strong>{s.title}</strong>
                      <p>{s.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            )
          default:
            return null
        }
      })}
    </div>
  )
}

export function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export function headingsOf(body: Block[]): { id: string; text: string }[] {
  return body
    .filter((b): b is Extract<Block, { type: 'h2' }> => b.type === 'h2')
    .map((b) => ({ id: slugify(b.text), text: b.text }))
}
