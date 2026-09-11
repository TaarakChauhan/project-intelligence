export function compoundAnnual(principal: number, rate: number, years: number): number {
  return principal * (1 + rate) ** years
}

export function futureValueMonthly(opts: {
  principal: number
  annualRate: number
  years: number
  monthlyContribution: number
  compounding: 'annual' | 'monthly'
}): { series: number[]; final: number; interest: number; contributed: number } {
  const { principal, annualRate, years, monthlyContribution, compounding } = opts
  const months = Math.max(0, Math.round(years * 12))
  const contributed = monthlyContribution * months
  const series: number[] = [principal]

  if (compounding === 'annual') {
    let bal = principal
    const yrs = Math.max(0, Math.round(years))
    for (let y = 1; y <= yrs; y++) {
      bal = (bal + monthlyContribution * 12) * (1 + annualRate)
      series.push(bal)
    }
    const final = series[series.length - 1] ?? principal
    return { series, final, interest: final - principal - monthlyContribution * 12 * yrs, contributed: monthlyContribution * 12 * yrs }
  }

  const mr = annualRate / 12
  let bal = principal
  for (let m = 1; m <= months; m++) {
    bal = bal * (1 + mr) + monthlyContribution
    if (m % 12 === 0 || m === months) series.push(bal)
  }
  const final = months === 0 ? principal : bal
  return { series, final, interest: final - principal - contributed, contributed }
}

export function yearsToDouble(ratePct: number): { rule72: number; exact: number } {
  if (ratePct <= 0) return { rule72: Infinity, exact: Infinity }
  return {
    rule72: 72 / ratePct,
    exact: Math.log(2) / Math.log(1 + ratePct / 100),
  }
}

export function amortize(opts: {
  principal: number
  annualRate: number
  termYears: number
  extraMonthly: number
}): {
  payment: number
  baseMonths: number
  extraMonths: number
  monthsSaved: number
  baseInterest: number
  extraInterest: number
  interestSaved: number
} {
  const { principal, annualRate, termYears, extraMonthly } = opts
  const n = Math.max(1, Math.round(termYears * 12))
  const r = annualRate / 12
  const payment =
    r === 0 ? principal / n : (principal * r * (1 + r) ** n) / ((1 + r) ** n - 1)

  const run = (extra: number) => {
    let bal = principal
    let interest = 0
    let months = 0
    const max = n + 1
    while (bal > 0.01 && months < max * 2) {
      const i = bal * r
      interest += i
      const pay = Math.min(bal + i, payment + extra)
      bal = bal + i - pay
      months += 1
      if (pay <= i && extra === 0 && r > 0) break
    }
    return { months, interest }
  }

  const base = run(0)
  const withExtra = extraMonthly > 0 ? run(extraMonthly) : base
  return {
    payment,
    baseMonths: base.months,
    extraMonths: withExtra.months,
    monthsSaved: Math.max(0, base.months - withExtra.months),
    baseInterest: base.interest,
    extraInterest: withExtra.interest,
    interestSaved: Math.max(0, base.interest - withExtra.interest),
  }
}

export type Bracket = { upTo: number; rate: number; name: string }

/** U.S. federal income tax, tax year 2026, unmarried individuals (other than surviving
 *  spouses and heads of household). Thresholds from IRS Rev. Proc. 2025-32 / IR-2025-103.
 *  Applied to taxable income. Ignores deductions, credits, payroll tax, and other statuses.
 */
export const US_2026_SINGLE_BRACKETS: Bracket[] = [
  { upTo: 12400, rate: 0.1, name: '10%' },
  { upTo: 50400, rate: 0.12, name: '12%' },
  { upTo: 105700, rate: 0.22, name: '22%' },
  { upTo: 201775, rate: 0.24, name: '24%' },
  { upTo: 256225, rate: 0.32, name: '32%' },
  { upTo: 640600, rate: 0.35, name: '35%' },
  { upTo: Infinity, rate: 0.37, name: '37%' },
]

export function taxByBracket(income: number, brackets = US_2026_SINGLE_BRACKETS) {
  let remainingPrev = 0
  const slices: { name: string; rate: number; amount: number; tax: number }[] = []
  let tax = 0
  for (const b of brackets) {
    const amount = Math.max(0, Math.min(income, b.upTo) - remainingPrev)
    const t = amount * b.rate
    slices.push({ name: b.name, rate: b.rate, amount, tax: t })
    tax += t
    remainingPrev = b.upTo
    if (income <= b.upTo) break
  }
  const effective = income > 0 ? tax / income : 0
  const marginal = slices[slices.length - 1]?.rate ?? 0
  return { slices, tax, effective, marginal }
}
