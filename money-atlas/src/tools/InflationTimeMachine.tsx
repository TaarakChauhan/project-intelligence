import { useMemo, useState } from 'react'
import { CPI, CPI_YEARS, inflate } from '../data/cpi'
import { money, num } from '../lib/format'
import { Field, Stat, ToolChrome } from './chrome'

export function InflationTimeMachine() {
  const [amount, setAmount] = useState(100)
  const [from, setFrom] = useState(1970)
  const [to, setTo] = useState(2025)

  const eq = useMemo(() => inflate(amount, from, to), [amount, from, to])
  const ratio = CPI[to] && CPI[from] ? CPI[to] / CPI[from] : null

  return (
    <ToolChrome title="Inflation time machine" id="inflation">
      <p className="disclaimer" style={{ marginTop: '-0.4rem' }}>
        U.S. CPI-U annual averages, 1970–2025 (1982–84 = 100), from the BLS series. A basket, not
        anyone’s exact shopping list. 2025 is BLS’s published annual average (built from 11 months; October 2025 was not collected). 2026 is omitted because the year is not complete.
      </p>
      <div className="controls">
        <Field label="Amount">
          <input type="number" min={0} value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
        </Field>
        <Field label="From year">
          <select value={from} onChange={(e) => setFrom(Number(e.target.value))}>
            {CPI_YEARS.map((y) => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
        </Field>
        <Field label="To year">
          <select value={to} onChange={(e) => setTo(Number(e.target.value))}>
            {CPI_YEARS.map((y) => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
        </Field>
      </div>
      <div className="stat-row">
        <Stat label={`${from} amount`} value={money(amount, 0)} />
        <Stat label={`${to} equivalent`} value={eq == null ? '—' : money(eq, 0)} />
        <Stat label="Index ratio" value={ratio == null ? '—' : `${num(ratio, 2)}×`} />
      </div>
      <p>
        A sum that bought a certain basket in {from} would need about{' '}
        <strong>{eq == null ? '—' : money(eq, 0)}</strong> in {to} to command the same
        CPI-U basket. The yardstick moved; the loaf did not grow a personality.
      </p>
    </ToolChrome>
  )
}
