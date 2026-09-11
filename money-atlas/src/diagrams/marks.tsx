import type { ReactNode } from 'react'
import { C } from './frame'

function Base({ children, title }: { children: ReactNode; title: string }) {
  return (
    <svg viewBox="0 0 64 64" className="inline-svg" role="img" aria-label={title}>
      <rect width="64" height="64" fill="none" />
      {children}
    </svg>
  )
}

export function MarkMetal() {
  return (
    <Base title="Metal">
      <circle cx="32" cy="32" r="18" fill="none" stroke={C.copper} strokeWidth="2" />
      <circle cx="32" cy="32" r="10" fill="none" stroke={C.ink} strokeWidth="1.5" />
      <path d="M32 18 V46 M22 28 H42" stroke={C.teal} strokeWidth="1.5" />
    </Base>
  )
}

export function MarkOrigins() {
  return (
    <Base title="Origins">
      <circle cx="32" cy="32" r="22" fill="none" stroke={C.copper} strokeWidth="2" />
      <path d="M32 14 V50 M14 32 H50" stroke={C.ink} strokeWidth="1.5" />
      <ellipse cx="32" cy="32" rx="8" ry="22" fill="none" stroke={C.teal} strokeWidth="1.5" />
    </Base>
  )
}

export function MarkFirms() {
  return (
    <Base title="Firms">
      <rect x="12" y="28" width="40" height="24" fill="none" stroke={C.ink} strokeWidth="2" />
      <polygon points="32,10 52,28 12,28" fill="none" stroke={C.copper} strokeWidth="2" />
      <rect x="28" y="36" width="8" height="16" fill={C.teal} />
    </Base>
  )
}

export function MarkMarkets() {
  return (
    <Base title="Markets">
      <path d="M10 44 L22 28 L32 36 L46 16 L54 22" fill="none" stroke={C.copper} strokeWidth="2" />
      <circle cx="22" cy="28" r="3" fill={C.teal} />
      <circle cx="46" cy="16" r="3" fill={C.ink} />
      <path d="M10 50 H54" stroke={C.rule} strokeWidth="2" />
    </Base>
  )
}

export function MarkState() {
  return (
    <Base title="The state">
      <rect x="18" y="14" width="28" height="36" fill="none" stroke={C.ink} strokeWidth="2" />
      <path d="M18 22 H46 M18 42 H46" stroke={C.copper} strokeWidth="2" />
      <circle cx="32" cy="32" r="5" fill={C.teal} />
    </Base>
  )
}

export function MarkLedger() {
  return (
    <Base title="Your ledger">
      <rect x="16" y="12" width="32" height="40" fill="none" stroke={C.ink} strokeWidth="2" />
      <path d="M22 22 H42 M22 32 H38 M22 42 H34" stroke={C.copper} strokeWidth="2" />
    </Base>
  )
}

export const chapterMarks = {
  metal: MarkMetal,
  origins: MarkOrigins,
  firms: MarkFirms,
  markets: MarkMarkets,
  state: MarkState,
  ledger: MarkLedger,
}
