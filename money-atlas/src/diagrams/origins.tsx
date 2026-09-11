import { Board, C, L } from './frame'

export function Coincidence() {
  return (
    <Board title="Coincidence of wants: two people, two missing goods">
      <circle cx="150" cy="130" r="54" fill="none" stroke={C.ink} strokeWidth="2" />
      <circle cx="490" cy="130" r="54" fill="none" stroke={C.ink} strokeWidth="2" />
      <path d="M150 100c8 8 18 12 18 28s-10 22-18 28" fill="none" stroke={C.ink} strokeWidth="2" />
      <path d="M490 100c8 8 18 12 18 28s-10 22-18 28" fill="none" stroke={C.ink} strokeWidth="2" />
      <circle cx="150" cy="108" r="4" fill={C.ink} />
      <circle cx="490" cy="108" r="4" fill={C.ink} />
      <rect x="70" y="200" width="70" height="36" rx="2" fill={C.teal} />
      <L x="105" y="223" fill={C.paper} size={11}>GOAT</L>
      <rect x="500" y="200" width="70" height="36" rx="2" fill={C.copper} />
      <L x="535" y="223" fill={C.paper} size={11}>GRAIN</L>
      <path d="M140 185 L105 200" stroke={C.teal} strokeWidth="2" markerEnd="url(#arrT)" />
      <path d="M500 185 L535 200" stroke={C.copper} strokeWidth="2" />
      <path d="M210 130 H300" stroke={C.crimson} strokeWidth="2" strokeDasharray="6 6" />
      <path d="M430 130 H340" stroke={C.crimson} strokeWidth="2" strokeDasharray="6 6" />
      <circle cx="320" cy="130" r="22" fill={C.paper} stroke={C.crimson} strokeWidth="2" />
      <L x="320" y="135" fill={C.crimson} size={18} weight={700}>×</L>
      <L x="150" y="42" size={13} weight={600}>Has goat · wants grain</L>
      <L x="490" y="42" size={13} weight={600}>Has grain · wants goat</L>
      <L x="320" y="268" fill={C.muted} size={12}>Wants miss. No deal. A token would split this into two sales.</L>
    </Board>
  )
}

export function ThreeJobs() {
  return (
    <Board title="Three jobs of money">
      {[
        { x: 80, t: 'HANDSHAKE', s: 'Medium of exchange', d: 'Closes a trade with strangers.' },
        { x: 250, t: 'YARDSTICK', s: 'Unit of account', d: 'Prices and debts share a unit.' },
        { x: 420, t: 'PANTRY', s: 'Store of value', d: 'Carries power into tomorrow.' },
      ].map((j) => (
        <g key={j.t}>
          <rect x={j.x} y="48" width="150" height="190" fill={C.paper} stroke={C.ink} strokeWidth="1.5" />
          <rect x={j.x} y="48" width="150" height="8" fill={C.copper} />
          <L x={j.x + 75} y="92" size={11} fill={C.copper} weight={600}>{j.t}</L>
          <L x={j.x + 75} y="130" size={13} weight={600}>{j.s}</L>
          <L x={j.x + 75} y="168" size={12} fill={C.muted}>{j.d}</L>
        </g>
      ))}
    </Board>
  )
}

export function MetalPaper() {
  return (
    <Board title="From metal to paper to ledger">
      <circle cx="90" cy="130" r="40" fill={C.copper} />
      <L x="90" y="135" fill={C.paper} weight={700}>Æ</L>
      <L x="90" y="190" size={12}>COIN</L>
      <path d="M140 130 H200" stroke={C.ink} strokeWidth="2" />
      <rect x="210" y="90" width="70" height="80" fill={C.paper} stroke={C.ink} strokeWidth="1.5" />
      <L x="245" y="135" size={11} weight={600}>NOTE</L>
      <path d="M290 130 H350" stroke={C.ink} strokeWidth="2" />
      <rect x="360" y="78" width="220" height="104" fill={C.ink} />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x="378" y={96 + i * 20} width={i % 2 ? 160 : 120} height="8" fill={C.teal} opacity={0.8} />
      ))}
      <L x="470" y="210" fill={C.paper} size={12}>LEDGER</L>
      <L x="320" y="255" fill={C.muted} size={12}>The object thinned. The promise thickened. Settlement became a row.</L>
    </Board>
  )
}

export function InterestClock() {
  return (
    <Board title="Interest as rent on time">
      <circle cx="200" cy="140" r="88" fill="none" stroke={C.ink} strokeWidth="3" />
      <circle cx="200" cy="140" r="6" fill={C.copper} />
      <line x1="200" y1="140" x2="200" y2="78" stroke={C.ink} strokeWidth="3" />
      <line x1="200" y1="140" x2="250" y2="160" stroke={C.copper} strokeWidth="3" />
      <L x="200" y="42" size={13} weight={600}>NOW → LATER</L>
      <rect x="360" y="70" width="220" height="150" fill={C.paper} stroke={C.rule} />
      <L x="470" y="100" size={12} weight={600}>A quoted rate bundles</L>
      <L x="470" y="128" size={12} anchor="middle">1. delay (time value)</L>
      <L x="470" y="154" size={12}>2. expected inflation</L>
      <L x="470" y="180" size={12}>3. chance of no repayment</L>
    </Board>
  )
}

export function Yardstick() {
  return (
    <Board title="Inflation shrinks the yardstick">
      <line x1="60" y1="80" x2="580" y2="80" stroke={C.ink} strokeWidth="3" />
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <line key={i} x1={60 + i * 65} y1="70" x2={60 + i * 65} y2="90" stroke={C.ink} strokeWidth="2" />
      ))}
      <L x="320" y="58" size={12} weight={600}>THEN — a long stick</L>
      <line x1="60" y1="170" x2="360" y2="170" stroke={C.crimson} strokeWidth="3" />
      {[0, 1, 2, 3, 4].map((i) => (
        <line key={i} x1={60 + i * 60} y1="160" x2={60 + i * 60} y2="180" stroke={C.crimson} strokeWidth="2" />
      ))}
      <L x="210" y="148" size={12} weight={600} fill={C.crimson}>NOW — same unit, shorter reach</L>
      <L x="320" y="230" fill={C.muted} size={12}>A loaf did not grow a personality. The unit lost command over loaves.</L>
    </Board>
  )
}

export function ThreeMaps() {
  return (
    <Board title="Three maps of the same hills" h={300}>
      {[
        { x: 30, t: 'CLASSICAL', d: 'Prices clear. Money is a veil. Wait.' },
        { x: 225, t: 'KEYNESIAN', d: 'Demand jams. Idle hands. Steer.' },
        { x: 420, t: 'MONETARIST', d: 'Watch the quantity. Guard the unit.' },
      ].map((m, i) => (
        <g key={m.t}>
          <rect x={m.x} y="40" width="185" height="220" fill={C.paper} stroke={C.ink} />
          <path
            d={`M${m.x + 20} 180 C ${m.x + 50} ${120 - i * 10}, ${m.x + 110} ${150 + i * 8}, ${m.x + 165} 130`}
            fill="none"
            stroke={[C.ink, C.teal, C.copper][i]}
            strokeWidth="2"
          />
          <L x={m.x + 92} y="70" size={12} weight={600}>{m.t}</L>
          <L x={m.x + 92} y="230" size={11} fill={C.muted}>{m.d}</L>
        </g>
      ))}
    </Board>
  )
}
