import { useMemo, useState } from 'react'
import { amortize } from '../lib/finance'
import { money, num } from '../lib/format'
import { Field, Stat, ToolChrome } from './chrome'

export function LoanExtra() {
  const [principal, setPrincipal] = useState(300000)
  const [rate, setRate] = useState(6)
  const [years, setYears] = useState(30)
  const [extra, setExtra] = useState(200)

  const r = useMemo(
    () =>
      amortize({
        principal,
        annualRate: rate / 100,
        termYears: years,
        extraMonthly: extra,
      }),
    [principal, rate, years, extra],
  )

  return (
    <ToolChrome title="Loan extra" id="loan">
      <div className="controls">
        <Field label="Principal">
          <input type="number" min={0} value={principal} onChange={(e) => setPrincipal(Number(e.target.value))} />
        </Field>
        <Field label="Annual rate %">
          <input type="number" min={0} step={0.1} value={rate} onChange={(e) => setRate(Number(e.target.value))} />
        </Field>
        <Field label="Term (years)">
          <input type="number" min={1} max={50} value={years} onChange={(e) => setYears(Number(e.target.value))} />
        </Field>
        <Field label="Extra monthly">
          <input type="number" min={0} value={extra} onChange={(e) => setExtra(Number(e.target.value))} />
        </Field>
      </div>
      <div className="stat-row">
        <Stat label="Scheduled payment" value={money(r.payment, 0)} />
        <Stat label="Months saved" value={num(r.monthsSaved)} />
        <Stat label="Interest saved" value={money(r.interestSaved, 0)} />
        <Stat label="Payoff with extra" value={`${num(r.extraMonths)} mo`} />
      </div>
      <p>
        Without extra: {num(r.baseMonths)} months and {money(r.baseInterest, 0)} in interest.
        With extra: {num(r.extraMonths)} months and {money(r.extraInterest, 0)} in interest.
        Simple amortization loop — illustrative, not a lender’s quote.
      </p>
    </ToolChrome>
  )
}
