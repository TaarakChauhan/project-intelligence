import { Board, C, L } from './frame'

export function Teeter() {
  return (
    <Board title="Net worth as a teeter of assets and claims">
      <rect x="70" y="70" width="180" height="90" fill={C.teal} />
      <L x="160" y="122" fill={C.paper} size={13} weight={600}>ASSETS</L>
      <rect x="390" y="70" width="180" height="90" fill={C.crimson} />
      <L x="480" y="122" fill={C.paper} size={13} weight={600}>CLAIMS</L>
      <polygon points="320,180 80,230 560,230" fill={C.paper} stroke={C.ink} />
      <circle cx="320" cy="188" r="10" fill={C.copper} />
      <L x="320" y="260" size={13} weight={600}>remainder = net worth</L>
    </Board>
  )
}

export function Cushion() {
  return (
    <Board title="Cash cushion under a longer bet">
      <rect x="80" y="160" width="480" height="70" fill={C.teal} />
      <L x="320" y="200" fill={C.paper} size={14} weight={700}>CASH CUSHION</L>
      <rect x="140" y="50" width="360" height="90" fill={C.ink} />
      <L x="320" y="90" fill={C.paper} size={14} weight={700}>LONGER BET</L>
      <L x="320" y="112" fill={C.copper} size={12}>haystack · time · weather</L>
      <L x="320" y="250" fill={C.muted} size={12}>The lower block exists so a cliff day does not force a sale of the upper.</L>
    </Board>
  )
}

export function Haystack() {
  return (
    <Board title="A haystack of many stems versus one stalk">
      {[...Array(40)].map((_, i) => {
        const x = 40 + (i % 10) * 28
        const y = 40 + Math.floor(i / 10) * 40
        return <rect key={i} x={x} y={y} width="18" height="28" fill={i === 22 ? C.crimson : C.copper} opacity={0.7 + (i % 3) * 0.1} />
      })}
      <rect x="400" y="50" width="180" height="160" fill={C.paper} stroke={C.ink} />
      <rect x="470" y="70" width="40" height="120" fill={C.crimson} />
      <L x="490" y="230" size={12}>one stalk</L>
      <L x="180" y="230" size={12}>haystack</L>
      <L x="320" y="265" size={12} fill={C.muted}>Diversification is a refusal to need the perfect stem.</L>
    </Board>
  )
}

export function CompoundCurve() {
  const pts = [...Array(12)].map((_, i) => {
    const x = 50 + i * 48
    const y = 230 - (1.07 ** i - 1) * 28
    return `${x},${y}`
  })
  return (
    <Board title="Compounding as a curve">
      <polyline points={pts.join(' ')} fill="none" stroke={C.copper} strokeWidth="3" />
      <line x1="50" y1="230" x2="590" y2="230" stroke={C.rule} />
      <line x1="50" y1="40" x2="50" y2="230" stroke={C.rule} />
      <L x="320" y="50" size={13} weight={600}>A rate, reinvested, stops being a line</L>
      <L x="320" y="260" size={12} fill={C.muted}>Interruptions flatten it. Time restores the bend.</L>
    </Board>
  )
}

export function Mortgage() {
  return (
    <Board title="Amortization: interest first, then principal">
      {[...Array(12)].map((_, i) => {
        const hI = 140 - i * 10
        const hP = 20 + i * 10
        const x = 50 + i * 48
        return (
          <g key={i}>
            <rect x={x} y={220 - hI} width="28" height={hI} fill={C.copper} />
            <rect x={x} y={220 - hI - hP} width="28" height={hP} fill={C.teal} />
          </g>
        )
      })}
      <L x="160" y="50" size={12} fill={C.copper} weight={600}>interest</L>
      <L x="280" y="50" size={12} fill={C.teal} weight={600}>principal</L>
      <L x="320" y="255" size={12} fill={C.muted}>Extra principal cuts bars off the right-hand end of the story.</L>
    </Board>
  )
}

export function GoodBadDebt() {
  return (
    <Board title="Debt with a job versus debt as a weight">
      <rect x="40" y="50" width="270" height="180" fill={C.paper} stroke={C.teal} strokeWidth="2" />
      <L x="175" y="90" fill={C.teal} size={14} weight={700}>HAS A JOB</L>
      <L x="175" y="130" size={12}>buys an engine</L>
      <L x="175" y="158" size={12}>schedule survives a dip</L>
      <L x="175" y="186" size={12}>rate does not outrun the job</L>
      <rect x="330" y="50" width="270" height="180" fill={C.paper} stroke={C.crimson} strokeWidth="2" />
      <L x="465" y="90" fill={C.crimson} size={14} weight={700}>IS A WEIGHT</L>
      <L x="465" y="130" size={12}>bought a memory</L>
      <L x="465" y="158" size={12}>rate outruns the memory</L>
      <L x="465" y="186" size={12}>service crowds the cushion</L>
    </Board>
  )
}

export function LaterYou() {
  return (
    <Board title="A wrapper around a pile, opened later">
      <rect x="180" y="50" width="280" height="180" fill="none" stroke={C.copper} strokeWidth="3" strokeDasharray="8 6" />
      <L x="320" y="80" fill={C.copper} size={12} weight={600}>WRAPPER · tax & access rules</L>
      <rect x="230" y="100" width="180" height="90" fill={C.ink} />
      <L x="320" y="140" fill={C.paper} size={13}>CONTENTS</L>
      <L x="320" y="162" fill={C.copper} size={12}>haystack, not the box</L>
      <L x="320" y="255" size={12} fill={C.muted}>Later-you opens the box. The box is not the plan.</L>
    </Board>
  )
}

export function CardsCoins() {
  return (
    <Board title="Card rails, coins, and public chains">
      <rect x="30" y="60" width="170" height="140" fill={C.ink} />
      <L x="115" y="120" fill={C.paper} size={13} weight={600}>CARD RAIL</L>
      <L x="115" y="148" fill={C.copper} size={11}>bank ledger, nicer skin</L>
      <rect x="230" y="60" width="170" height="140" fill={C.copper} />
      <L x="315" y="120" fill={C.paper} size={13} weight={600}>CASH</L>
      <L x="315" y="148" fill={C.paper} size={11}>final, heavy, quiet</L>
      <rect x="430" y="60" width="180" height="140" fill={C.teal} />
      <L x="520" y="120" fill={C.paper} size={13} weight={600}>CHAIN</L>
      <L x="520" y="148" fill={C.paper} size={11}>public ledger, loud price</L>
    </Board>
  )
}

export function Hook() {
  return (
    <Board title="A hook baited with urgency">
      <path d="M180 40 C180 140, 180 160, 260 180 S 360 200, 360 240" fill="none" stroke={C.crimson} strokeWidth="8" strokeLinecap="round" />
      <circle cx="360" cy="248" r="14" fill="none" stroke={C.crimson} strokeWidth="8" />
      <rect x="420" y="70" width="180" height="120" fill={C.paper} stroke={C.ink} />
      <L x="510" y="110" size={12} weight={600}>URGENT</L>
      <L x="510" y="138" size={12}>borrowed name</L>
      <L x="510" y="166" size={12} fill={C.crimson}>asks you to move</L>
      <L x="220" y="40" size={12} fill={C.muted}>bait</L>
    </Board>
  )
}

