import { useMemo, useState } from 'react'
import { US_2026_SINGLE_BRACKETS, taxByBracket } from '../lib/finance'
import { money, pct } from '../lib/format'
import { Field, Stat, ToolChrome } from './chrome'

const COLORS = ['#1F7A6B', '#2d9a88', '#C4783A', '#d08a4a', '#B42318', '#7a1c16', '#0B1F33']

export function TaxBrackets() {
  const [income, setIncome] = useState(90000)
  const r = useMemo(() => taxByBracket(income), [income])
  const total = Math.max(income, 1)

  return (
    <ToolChrome title="Tax brackets" id="tax">
      <p className="disclaimer" style={{ marginTop: '-0.4rem' }}>
        U.S. federal income tax, tax year 2026, unmarried filers, on taxable income. Thresholds from
        IRS Revenue Procedure 2025-32. Ignores the standard deduction, credits, payroll tax, and other
        filing statuses. Not a filing tool, not advice.
      </p>
      <div className="controls">
        <Field label={`Taxable income (${money(income, 0)})`}>
          <input
            type="range"
            min={0}
            max={800000}
            step={1000}
            value={income}
            onChange={(e) => setIncome(Number(e.target.value))}
          />
        </Field>
      </div>
      <div className="stat-row">
        <Stat label="Tax on extra dollars stacked" value={money(r.tax, 0)} />
        <Stat label="Income tax ÷ this taxable income" value={pct(r.effective * 100)} />
        <Stat label="Marginal rate" value={pct(r.marginal * 100, 0)} />
      </div>
      <div className="bracket-stack" role="img" aria-label="Stacked bar of income by bracket">
        {r.slices.map((s, i) => (
          <div
            key={s.name}
            style={{ width: `${(s.amount / total) * 100}%`, background: COLORS[i] ?? '#0B1F33' }}
            title={`${s.name}: ${money(s.amount, 0)}`}
          />
        ))}
      </div>
      <ul className="legend">
        {US_2026_SINGLE_BRACKETS.map((b, i) => {
          const slice = r.slices[i]
          const cap = Number.isFinite(b.upTo) ? `up to ${money(b.upTo, 0)}` : 'above'
          return (
            <li key={b.name}>
              <span className="swatch" style={{ background: COLORS[i] }} />
              {b.name} {cap}
              {slice ? ` — ${money(slice.amount, 0)} taxed at ${b.name}` : ''}
            </li>
          )
        })}
      </ul>
      <p>
        Only the dollars in each slice pay that slice’s rate. Crossing a line does not restyle the whole loaf.
        Income tax divided by this taxable income ({pct(r.effective * 100)}) sits below your marginal sticker ({pct(r.marginal * 100, 0)})
        for that reason.
      </p>
    </ToolChrome>
  )
}
