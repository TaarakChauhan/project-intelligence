import { toolMeta, tools } from '../tools'
import { onInPageClick } from '../lib/scroll'

export function ToolsPage() {

  return (
    <article className="wrap" style={{ padding: '2.4rem 1.25rem 4rem' }}>
      <p className="kicker">Workshop</p>
      <h1>Tools</h1>
      <p className="manifesto">
        Five calculators that actually compute. They are toys for seeing a shape — compounding, a shrinking
        yardstick, extra principal, extra dollars in a tax bracket, years to double. Illustrative. Not advice.
      </p>
      <div className="tools-grid" style={{ margin: '1.5rem 0 2rem' }}>
        {toolMeta.map((t) => (
          <a className="tool-card" href={`#${t.id}`} key={t.id} onClick={(e) => onInPageClick(e, t.id)}>
            <h3>{t.title}</h3>
            <p>{t.blurb}</p>
          </a>
        ))}
      </div>
      {toolMeta.map((t) => {
        const Cmp = tools[t.id]
        return Cmp ? <Cmp key={t.id} /> : null
      })}
    </article>
  )
}
