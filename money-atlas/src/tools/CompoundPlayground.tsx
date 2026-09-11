import { useMemo, useState } from 'react'
import { futureValueMonthly } from '../lib/finance'
import { money } from '../lib/format'
import { Field, Stat, ToolChrome } from './chrome'

export function CompoundPlayground() {
  const [principal, setPrincipal] = useState(10000)
  const [rate, setRate] = useState(7)
  const [years, setYears] = useState(10)
  const [monthly, setMonthly] = useState(0)
  const [mode, setMode] = useState<'annual' | 'monthly'>('annual')

  const result = useMemo(
    () =>
      futureValueMonthly({
        principal,
        annualRate: rate / 100,
        years,
        monthlyContribution: monthly,
        compounding: mode,
      }),
    [principal, rate, years, monthly, mode],
  )

  const max = Math.max(...result.series, 1)
  const w = 640
  const h = 200
  const pad = 20
  const pts = result.series.map((v, i) => {
    const x = pad + (i / Math.max(result.series.length - 1, 1)) * (w - pad * 2)
    const y = h - pad - (v / max) * (h - pad * 2)
    return `${x},${y}`
  })

  return (
    <ToolChrome title="Compound playground" id="compound">
      <p className="disclaimer" style={{ marginTop: '-0.4rem' }}>
        7% here is a dial, not the market’s wage. Annual mode treats the year’s contributions as arriving
        before the year’s interest — a textbook sketch, not a bank’s APY. Monthly mode is closer to a real account.
      </p>
      <div className="controls">
        <Field label="Principal">
          <input type="number" min={0} value={principal} onChange={(e) => setPrincipal(Number(e.target.value))} />
        </Field>
        <Field label="Annual rate %">
          <input type="number" min={0} step={0.1} value={rate} onChange={(e) => setRate(Number(e.target.value))} />
        </Field>
        <Field label="Years">
          <input type="number" min={0} max={80} value={years} onChange={(e) => setYears(Number(e.target.value))} />
        </Field>
        <Field label="Monthly contribution">
          <input type="number" min={0} value={monthly} onChange={(e) => setMonthly(Number(e.target.value))} />
        </Field>
        <Field label="Compounding">
          <select value={mode} onChange={(e) => setMode(e.target.value as 'annual' | 'monthly')}>
            <option value="annual">Annual</option>
            <option value="monthly">Monthly</option>
          </select>
        </Field>
      </div>
      <div className="stat-row">
        <Stat label="Final value" value={money(result.final)} />
        <Stat label="Interest earned" value={money(result.interest)} />
        <Stat label="Contributed" value={money(result.contributed)} />
      </div>
      <svg viewBox={`0 0 ${w} ${h}`} className="inline-svg diagram-svg" role="img" aria-label="Balance over time">
        <rect width={w} height={h} fill="#FFF8EE" />
        <polyline points={pts.join(' ')} fill="none" stroke="#C4783A" strokeWidth="3" />
        <text x="20" y="16" fontSize="11" fill="#5C564C" fontFamily="IBM Plex Sans, sans-serif">
          Balance over time
        </text>
      </svg>
    </ToolChrome>
  )
}
