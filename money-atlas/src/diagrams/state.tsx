import { Board, C, L } from './frame'

export function MoneyCreation() {
  return (
    <Board title="A loan creates a deposit">
      <rect x="50" y="70" width="240" height="140" fill={C.paper} stroke={C.ink} />
      <L x="170" y="100" size={13} weight={700}>BANK BOOK</L>
      <L x="170" y="140" size={12} fill={C.teal}>+ loan (asset)</L>
      <L x="170" y="170" size={12} fill={C.copper}>+ deposit (liability)</L>
      <rect x="360" y="90" width="220" height="100" fill={C.ink} />
      <L x="470" y="130" fill={C.paper} size={13}>BORROWER</L>
      <L x="470" y="158" fill={C.copper} size={12}>spendable balance</L>
      <path d="M290 140 H360" stroke={C.copper} strokeWidth="3" className="flow-line" fill="none" />
      <L x="320" y="250" fill={C.muted} size={12}>Two new rows. No locker of preexisting notes was unlocked.</L>
    </Board>
  )
}

export function Toolkit() {
  return (
    <Board title="Central bank toolkit">
      {[
        { x: 30, t: 'POLICY RATE', d: 'Overnight star other rates orbit.' },
        { x: 230, t: 'BALANCE SHEET', d: 'Buy assets, often when the star is near the floor.' },
        { x: 430, t: 'EMERGENCY', d: 'Lend to the solvent-but-dry.' },
      ].map((k) => (
        <g key={k.t}>
          <rect x={k.x} y="50" width="180" height="180" fill={C.paper} stroke={C.ink} />
          <rect x={k.x} y="50" width="180" height="10" fill={C.copper} />
          <L x={k.x + 90} y="110" size={12} weight={700}>{k.t}</L>
          <L x={k.x + 90} y="160" size={12} fill={C.muted}>{k.d}</L>
        </g>
      ))}
    </Board>
  )
}

export function Brackets() {
  const colors = [C.teal, '#2d9a88', C.copper, '#d08a4a', C.crimson, '#7a1c16', C.ink]
  const widths = [70, 90, 110, 90, 70, 80, 50]
  let x = 40
  return (
    <Board title="Progressive brackets tax extra dollars">
      {widths.map((w, i) => {
        const xx = x
        x += w
        return (
          <rect key={i} x={xx} y={200 - (i + 2) * 16} width={w - 4} height={(i + 2) * 16} fill={colors[i]} />
        )
      })}
      <L x="320" y="50" size={13} weight={600}>Each block is a slice of income, not the whole loaf</L>
      <L x="320" y="250" size={12} fill={C.muted}>The top color is the marginal sticker. Earlier slices keep their rates.</L>
    </Board>
  )
}

export function GovBorrow() {
  return (
    <Board title="Why a government issues bonds">
      <rect x="40" y="80" width="140" height="90" fill={C.crimson} />
      <L x="110" y="130" fill={C.paper} size={12}>SPEND</L>
      <L x="200" y="130" size={22} weight={700}>−</L>
      <rect x="230" y="80" width="140" height="90" fill={C.teal} />
      <L x="300" y="130" fill={C.paper} size={12}>TAX</L>
      <L x="390" y="130" size={22} weight={700}>=</L>
      <rect x="420" y="80" width="180" height="90" fill={C.ink} />
      <L x="510" y="120" fill={C.paper} size={12}>GAP</L>
      <L x="510" y="145" fill={C.copper} size={12}>issue bonds</L>
      <L x="320" y="220" size={12} fill={C.muted}>Lumpy uses, smoother tax. Or a slump. Or a war. Name the job.</L>
    </Board>
  )
}

export function StockFlow() {
  return (
    <Board title="Stock pile versus flow river">
      <ellipse cx="180" cy="150" rx="110" ry="70" fill={C.ink} />
      <L x="180" y="145" fill={C.paper} size={14} weight={700}>STOCK</L>
      <L x="180" y="168" fill={C.copper} size={12}>debt tonight</L>
      <path d="M360 80 C 420 80, 420 220, 560 220" fill="none" stroke={C.teal} strokeWidth="10" />
      <L x="500" y="90" size={14} weight={700} fill={C.teal}>FLOW</L>
      <L x="500" y="115" size={12}>deficit this year</L>
      <L x="320" y="255" size={12} fill={C.muted}>Do not compare a lake to a year’s rain without saying so.</L>
    </Board>
  )
}

export function Recession() {
  return (
    <Board title="When the music slows">
      <path d="M40 80 H200" stroke={C.ink} strokeWidth="6" />
      <path d="M200 80 C260 80, 280 160, 360 180 S 500 210, 600 200" fill="none" stroke={C.crimson} strokeWidth="6" />
      <circle cx="140" cy="80" r="10" fill={C.teal} />
      <circle cx="240" cy="95" r="8" fill={C.copper} />
      <circle cx="400" cy="188" r="8" fill={C.crimson} />
      <L x="140" y="55" size={11}>busy</L>
      <L x="400" y="165" size={11} fill={C.crimson}>stall</L>
      <L x="320" y="250" size={12} fill={C.muted}>Chairs disappear. Stabilizers lean. Doom is optional as a style.</L>
    </Board>
  )
}
