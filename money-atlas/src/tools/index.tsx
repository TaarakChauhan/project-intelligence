import type { ComponentType } from 'react'
import { CompoundPlayground } from './CompoundPlayground'
import { InflationTimeMachine } from './InflationTimeMachine'
import { LoanExtra } from './LoanExtra'
import { RuleOf72 } from './RuleOf72'
import { TaxBrackets } from './TaxBrackets'

export const tools: Record<string, ComponentType> = {
  compound: CompoundPlayground,
  inflation: InflationTimeMachine,
  loan: LoanExtra,
  tax: TaxBrackets,
  rule72: RuleOf72,
}

export const toolMeta = [
  { id: 'compound', title: 'Compound playground', blurb: 'Principal, rate, years, monthly feeding. Watch the curve.' },
  { id: 'inflation', title: 'Inflation time machine', blurb: 'Move a sum across official U.S. CPI-U annual averages, 1970–2025.' },
  { id: 'loan', title: 'Loan extra', blurb: 'See months and interest saved by extra principal.' },
  { id: 'tax', title: 'Tax brackets', blurb: '2026 U.S. single-filer federal brackets. Extra dollars, not the whole loaf.' },
  { id: 'rule72', title: 'Rule of 72', blurb: 'A napkin for years to double, with the logarithm beside it.' },
]

export function EmbeddedTool({ id }: { id: string }) {
  const Cmp = tools[id]
  if (!Cmp) return null
  return <Cmp />
}

export { CompoundPlayground, InflationTimeMachine, LoanExtra, TaxBrackets, RuleOf72 }
