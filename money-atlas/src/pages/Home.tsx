import { Link } from 'react-router-dom'
import { articles } from '../data/articles'
import { chapters } from '../data/chapters'
import { chapterMarks } from '../diagrams/marks'
import { CompoundPlayground } from '../tools/CompoundPlayground'

const START = [
  'why-money-at-all',
  'why-we-stopped-swapping-goats',
  'three-jobs-of-money',
  'revenue-is-not-profit',
  'net-worth-vs-paycheck',
  'dont-get-hooked',
]

export function Home() {
  const start = START.map((s) => articles.find((a) => a.slug === s)).filter(Boolean)
  return (
    <>
      <section className="hero wrap">
        <div className="hero__grid">
          <div>
            <p className="kicker">Volume one · a public atlas</p>
            <div className="nameplate">
              <h1>Money Atlas</h1>
            </div>
            <p className="manifesto">
              Money is a social technology for trading with people who do not want your goat today.
              This atlas maps that technology — firms, markets, the state, and a household ledger —
              in original language and original pictures. It is not advice, and it is not a publisher’s reprint.
            </p>
          </div>
          <div className="stamp">
            Original work
            <br />
            Not advice
            <br />
            Not a reprint
          </div>
        </div>
      </section>

      <section className="wrap">
        <p className="kicker">The map</p>
        <div className="chapter-grid">
          {chapters.map((c) => {
            const Mark = chapterMarks[c.id]
            return (
              <Link className="chapter-card" to={`/chapter/${c.slug}`} key={c.id}>
                <span className="roman">{c.roman}</span>
                <Mark />
                <h2>{c.title}</h2>
                <p>{c.blurb}</p>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="band band--paper2">
        <div className="wrap start-grid">
          <div>
            <p className="kicker">Start here</p>
            <h2>If you are new to the map</h2>
            <p>
              If you want the short history first, open Metal. Then barter’s snag, the three jobs of money,
              a firm’s remainder, your own stock versus your paycheck. End by not getting hooked.
            </p>
            <div className="related">
              {start.map((a) =>
                a ? (
                  <Link className="article-card" to={`/article/${a.slug}`} key={a.slug}>
                    <p className="meta">{a.readMinutes} min</p>
                    <h3>{a.title}</h3>
                    <p>{a.summary}</p>
                  </Link>
                ) : null,
              )}
            </div>
          </div>
          <div>
            <p className="kicker">Featured toy</p>
            <h2>The quiet multiplier</h2>
            <p>
              Ten thousand at 7% for ten years, untouched, is about $19,672 on annual compounding.
              Move the dials. The curve is the lesson.
            </p>
            <CompoundPlayground />
          </div>
        </div>
      </section>
    </>
  )
}
