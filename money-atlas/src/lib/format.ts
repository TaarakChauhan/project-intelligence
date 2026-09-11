export function money(n: number, digits = 0): string {
  if (!Number.isFinite(n)) return '—'
  return n.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: digits,
    minimumFractionDigits: digits,
  })
}

export function pct(n: number, digits = 1): string {
  if (!Number.isFinite(n)) return '—'
  return `${n.toFixed(digits)}%`
}

export function num(n: number, digits = 0): string {
  if (!Number.isFinite(n)) return '—'
  return n.toLocaleString('en-US', {
    maximumFractionDigits: digits,
    minimumFractionDigits: digits,
  })
}

export function clamp(n: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, n))
}
