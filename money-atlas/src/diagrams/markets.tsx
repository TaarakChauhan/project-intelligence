import { Board, C, L } from './frame'

export function MarketMatch() {
  return (
    <Board title="A market matches bids and asks">
      <rect x="60" y="50" width="200" height="180" fill={C.paper} stroke={C.teal} />
      <L x="160" y="80" fill={C.teal} weight={700} size={13}>BIDS</L>
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={80} y={100 + i * 28} width={140 - i * 16} height="18" fill={C.teal} opacity={0.85 - i * 0.15} />
      ))}
      <rect x="380" y="50" width="200" height="180" fill={C.paper} stroke={C.copper} />
      <L x="480" y="80" fill={C.copper} weight={700} size={13}>ASKS</L>
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={400 + i * 16} y={100 + i * 28} width={140 - i * 16} height="18" fill={C.copper} opacity={0.85 - i * 0.15} />
      ))}
      <rect x="270" y="115" width="100" height="50" fill={C.ink} />
      <L x="320" y="145" fill={C.paper} size={12}>TRADE</L>
      <L x="320" y="255" fill={C.muted} size={12}>The gap between the stacks is the bid–ask spread.</L>
    </Board>
  )
}

export function PrimarySecondary() {
  return (
    <Board title="Primary factory door and secondary aftermarket">
      <rect x="40" y="80" width="160" height="100" fill={C.ink} />
      <L x="120" y="125" fill={C.paper} size={13} weight={600}>ISSUER</L>
      <L x="120" y="148" fill={C.copper} size={11}>gets the cash</L>
      <rect x="250" y="70" width="140" height="120" fill={C.teal} />
      <L x="320" y="125" fill={C.paper} size={13} weight={600}>PRIMARY</L>
      <L x="320" y="150" fill={C.paper} size={11}>new paper</L>
      <rect x="440" y="50" width="160" height="160" fill={C.paper} stroke={C.copper} strokeWidth="2" />
      <L x="520" y="100" size={13} weight={600} fill={C.copper}>SECONDARY</L>
      <L x="520" y="130" size={12}>holders trade</L>
      <L x="520" y="158" size={12}>issuer not paid</L>
      <path d="M200 130 H250" stroke={C.ink} strokeWidth="2" />
      <path d="M390 130 H440" stroke={C.ink} strokeWidth="2" />
    </Board>
  )
}

export function FxCross() {
  return (
    <Board title="Two currencies as crossing yardsticks">
      <line x1="80" y1="220" x2="300" y2="60" stroke={C.ink} strokeWidth="3" />
      <line x1="340" y1="220" x2="560" y2="60" stroke={C.copper} strokeWidth="3" />
      <circle cx="320" cy="140" r="36" fill={C.paper} stroke={C.teal} strokeWidth="3" />
      <L x="320" y="145" size={12} weight={700} fill={C.teal}>FX</L>
      <L x="160" y="250" size={12}>HOME UNIT</L>
      <L x="480" y="250" size={12}>FOREIGN UNIT</L>
      <L x="320" y="42" size={12} fill={C.muted}>The cross is a price, not a verdict on national character.</L>
    </Board>
  )
}

export function PriceJump() {
  return (
    <Board title="A price gap when the argument skips">
      <polyline
        points="40,180 80,170 120,175 160,160 200,165 240,150 280,155"
        fill="none"
        stroke={C.ink}
        strokeWidth="3"
      />
      <polyline
        points="360,90 400,100 440,85 480,95 520,70 580,80"
        fill="none"
        stroke={C.crimson}
        strokeWidth="3"
      />
      <line x1="280" y1="155" x2="360" y2="90" stroke={C.crimson} strokeWidth="2" strokeDasharray="5 5" />
      <L x="320" y="70" fill={C.crimson} size={12} weight={600}>GAP · news or empty book</L>
      <L x="320" y="250" fill={C.muted} size={12}>Liquidity left the room. The next trade had to travel.</L>
    </Board>
  )
}

export function TwoBanks() {
  return (
    <Board title="Deposit-taking bank versus underwriter">
      <rect x="40" y="50" width="270" height="190" fill={C.ink} />
      <L x="175" y="90" fill={C.copper} size={14} weight={700}>DEPOSIT BANK</L>
      <L x="175" y="130" fill={C.paper} size={12}>loans create deposits</L>
      <L x="175" y="158" fill={C.paper} size={12}>payments plumbing</L>
      <L x="175" y="186" fill={C.paper} size={12}>run risk · public backstop</L>
      <rect x="330" y="50" width="270" height="190" fill={C.paper} stroke={C.copper} strokeWidth="2" />
      <L x="465" y="90" fill={C.copper} size={14} weight={700}>UNDERWRITER</L>
      <L x="465" y="130" size={12}>judges new paper</L>
      <L x="465" y="158" size={12}>stands behind an issue</L>
      <L x="465" y="186" size={12}>fees · warehouse risk</L>
    </Board>
  )
}

export function InsurancePool() {
  return (
    <Board title="Insurance as a pool of premiums and claims">
      <circle cx="320" cy="140" r="90" fill="none" stroke={C.teal} strokeWidth="3" />
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
        const a = (i / 8) * Math.PI * 2
        const x = 320 + Math.cos(a) * 90
        const y = 140 + Math.sin(a) * 90
        return <circle key={i} cx={x} cy={y} r="10" fill={i === 1 ? C.crimson : C.copper} />
      })}
      <L x="320" y="145" size={13} weight={600}>POOL</L>
      <L x="120" y="50" size={12}>many premiums</L>
      <L x="520" y="50" size={12} fill={C.crimson}>few claims</L>
      <L x="320" y="260" fill={C.muted} size={12}>Works when luck is scattered, not when everyone claims at once.</L>
    </Board>
  )
}

export function Corridor() {
  return (
    <Board title="The unlit corridor of nonbank finance">
      <rect x="40" y="40" width="180" height="200" fill={C.ink} />
      <L x="130" y="140" fill={C.paper} size={13} weight={600}>LIT BANKS</L>
      <rect x="260" y="40" width="340" height="200" fill="#13283d" />
      <L x="430" y="80" fill={C.copper} size={13} weight={600}>UNLIT CORRIDOR</L>
      {['money funds', 'finance cos', 'vehicles', 'private credit'].map((t, i) => (
        <L key={t} x="430" y={120 + i * 28} fill={C.paper} size={12}>{t}</L>
      ))}
    </Board>
  )
}
