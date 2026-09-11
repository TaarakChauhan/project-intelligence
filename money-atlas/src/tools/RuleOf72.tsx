import { useMemo, useState } from 'react'
import { yearsToDouble } from '../lib/finance'
import { num } from '../lib/format'
import { Field, Stat, ToolChrome } from './chrome'

export function RuleOf72() {
  const [rate, setRate] = useState(8)
  const r = useMemo(() => yearsToDouble(rate), [rate])
  const finite = Number.isFinite(r.rule72)

  return (
    <ToolChrome title="Rule of 72" id="rule72">
      <div className="controls">
        <Field label="Annual rate %">
          <input type="number" min={0.1} step={0.1} value={rate} onChange={(e) => setRate(Number(e.target.value))} />
        </Field>
      </div>
      <div className="stat-row">
        <Stat label="Years to double (72 / r)" value={finite ? num(r.rule72, 1) : '—'} />
        <Stat label="Exact (ln 2 / ln(1+r))" value={finite ? num(r.exact, 1) : '—'} />
      </div>
      <p>
        At {rate}% a year, the napkin says a pile doubles in about {finite ? num(r.rule72, 1) : '∞'} years.
        The logarithm agrees more or less. It is a sketch of compounding, not a market forecast.
      </p>
    </ToolChrome>
  )
}
