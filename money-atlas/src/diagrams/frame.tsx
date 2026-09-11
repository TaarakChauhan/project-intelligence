import type { ReactNode } from 'react'

export const C = {
  ink: '#0B1F33',
  copper: '#C4783A',
  teal: '#1F7A6B',
  crimson: '#B42318',
  paper: '#F6F1E8',
  cream: '#FFF8EE',
  rule: '#D9D0C3',
  muted: '#5C564C',
}

export function Board({
  children,
  title,
  h = 280,
}: {
  children: ReactNode
  title: string
  h?: number
}) {
  return (
    <svg
      viewBox={`0 0 640 ${h}`}
      className="inline-svg diagram-svg"
      role="img"
      aria-label={title}
    >
      <rect width="640" height={h} fill={C.cream} />
      {children}
    </svg>
  )
}

export function L({
  x,
  y,
  children,
  fill = C.ink,
  size = 12,
  anchor = 'middle',
  weight = 500,
}: {
  x: number | string
  y: number | string
  children: ReactNode
  fill?: string
  size?: number
  anchor?: 'middle' | 'start' | 'end'
  weight?: number
}) {
  return (
    <text
      x={x}
      y={y}
      fill={fill}
      fontSize={size}
      fontFamily="'IBM Plex Sans', sans-serif"
      fontWeight={weight}
      textAnchor={anchor}
    >
      {children}
    </text>
  )
}
