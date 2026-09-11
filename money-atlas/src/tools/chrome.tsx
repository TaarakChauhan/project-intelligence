import type { ReactNode } from 'react'

export function ToolChrome({
  title,
  children,
  id,
}: {
  title: string
  children: ReactNode
  id?: string
}) {
  return (
    <section className="tool-shell" id={id}>
      <h3>{title}</h3>
      <p className="disclaimer">Illustrative. Not advice.</p>
      {children}
    </section>
  )
}

export function Field({
  label,
  children,
}: {
  label: string
  children: ReactNode
}) {
  return (
    <label className="field">
      {label}
      {children}
    </label>
  )
}

export function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="stat">
      <b>{value}</b>
      <span>{label}</span>
    </div>
  )
}
