import { Board, C, L } from './frame'

export function RevenueProfit() {
  const rows = [
    { y: 50, w: 520, fill: C.ink, t: 'REVENUE  100' },
    { y: 100, w: 360, fill: C.teal, t: 'AFTER DIRECT COSTS  64' },
    { y: 150, w: 220, fill: C.copper, t: 'OPERATING  28' },
    { y: 200, w: 110, fill: C.crimson, t: 'NET  9' },
  ]
  return (
    <Board title="Revenue waterfall down to profit">
      {rows.map((r) => (
        <g key={r.t}>
          <rect x="60" y={r.y} width={r.w} height="36" fill={r.fill} />
          <L x="80" y={r.y + 24} fill={C.paper} size={13} anchor="start" weight={600}>{r.t}</L>
        </g>
      ))}
      <L x="320" y="255" size={11} fill={C.muted}>Cartoon firm, not a sector average</L>
    </Board>
  )
}

export function Pipeline() {
  return (
    <Board title="Cash-flow pipeline versus profit posing">
      <rect x="40" y="90" width="120" height="70" fill={C.ink} />
      <L x="100" y="130" fill={C.paper} size={12}>CUSTOMER</L>
      <rect x="260" y="90" width="120" height="70" fill={C.teal} />
      <L x="320" y="122" fill={C.paper} size={12}>FIRM</L>
      <L x="320" y="140" fill={C.paper} size={11}>books profit</L>
      <rect x="480" y="90" width="120" height="70" fill={C.copper} />
      <L x="540" y="130" fill={C.paper} size={12}>SUPPLIER</L>
      <path d="M160 125 H260" stroke={C.ink} strokeWidth="3" className="flow-line" fill="none" />
      <path d="M380 125 H480" stroke={C.copper} strokeWidth="3" className="flow-line" fill="none" />
      <L x="210" y="80" size={11} fill={C.muted}>invoice: 60 days</L>
      <L x="430" y="80" size={11} fill={C.muted}>pay: 7 days</L>
      <L x="320" y="210" size={12} fill={C.crimson} weight={600}>SPONGE: cash has not yet arrived</L>
      <L x="320" y="250" size={12} fill={C.muted}>Profit poses in the middle. Cash is still in the pipes.</L>
    </Board>
  )
}

export function Leverage() {
  return (
    <Board title="Leverage enlarges the equity residual">
      <rect x="80" y="70" width="200" height="160" fill={C.paper} stroke={C.ink} />
      <rect x="80" y="150" width="200" height="80" fill={C.copper} />
      <L x="180" y="120" size={12} weight={600}>ASSETS 100</L>
      <L x="180" y="195" fill={C.paper} size={12}>DEBT 40</L>
      <rect x="360" y="70" width="200" height="160" fill={C.paper} stroke={C.ink} />
      <rect x="360" y="110" width="200" height="120" fill={C.crimson} />
      <L x="460" y="96" size={12} weight={600}>ASSETS 100</L>
      <L x="460" y="175" fill={C.paper} size={12}>DEBT 80</L>
      <L x="180" y="250" size={12}>equity 60 · quiet</L>
      <L x="460" y="250" size={12} fill={C.crimson}>equity 20 · loud</L>
    </Board>
  )
}

export function ShareBond() {
  return (
    <Board title="Share versus bond">
      <rect x="50" y="50" width="250" height="190" fill={C.paper} stroke={C.teal} strokeWidth="2" />
      <L x="175" y="90" size={16} weight={700} fill={C.teal}>SHARE</L>
      <L x="175" y="130" size={12}>residual owner</L>
      <L x="175" y="158" size={12}>no promised coupon</L>
      <L x="175" y="186" size={12}>last in a wreck</L>
      <rect x="340" y="50" width="250" height="190" fill={C.paper} stroke={C.copper} strokeWidth="2" />
      <L x="465" y="90" size={16} weight={700} fill={C.copper}>BOND</L>
      <L x="465" y="130" size={12}>named creditor</L>
      <L x="465" y="158" size={12}>coupon + principal</L>
      <L x="465" y="186" size={12}>ahead of owners</L>
    </Board>
  )
}

export function BondLadder() {
  return (
    <Board title="Bond price and yield see-saw">
      <polygon points="120,80 280,80 200,200" fill={C.paper} stroke={C.ink} />
      <circle cx="160" cy="90" r="18" fill={C.copper} />
      <L x="160" y="95" size={11} fill={C.paper}>PRICE</L>
      <circle cx="240" cy="90" r="18" fill={C.teal} />
      <L x="240" y="95" size={11} fill={C.paper}>YIELD</L>
      <line x1="80" y1="210" x2="320" y2="210" stroke={C.ink} strokeWidth="4" />
      <L x="460" y="110" size={13} weight={600}>Rates up → old bonds cheapen</L>
      <L x="460" y="150" size={13} weight={600}>Rates down → old bonds rich</L>
      <L x="460" y="200" size={12} fill={C.muted}>Duration: how hard the board tips</L>
    </Board>
  )
}

export function HedgeBet() {
  return (
    <Board title="Hedge versus speculate">
      <rect x="40" y="50" width="270" height="190" fill={C.paper} stroke={C.teal} strokeWidth="2" />
      <L x="175" y="88" size={14} weight={700} fill={C.teal}>HEDGE</L>
      <path d="M80 160 H160" stroke={C.ink} strokeWidth="3" />
      <path d="M80 190 H160" stroke={C.crimson} strokeWidth="3" />
      <L x="210" y="155" size={11} anchor="start">crop already owned</L>
      <L x="210" y="185" size={11} anchor="start">future sold to cancel</L>
      <rect x="330" y="50" width="270" height="190" fill={C.paper} stroke={C.crimson} strokeWidth="2" />
      <L x="465" y="88" size={14} weight={700} fill={C.crimson}>BET</L>
      <path d="M370 175 H510" stroke={C.crimson} strokeWidth="3" />
      <L x="465" y="160" size={11}>no crop</L>
      <L x="465" y="200" size={11}>same future, a view</L>
    </Board>
  )
}

export function ThreeStatements() {
  return (
    <Board title="Three financial statements as camera angles" h={300}>
      <rect x="20" y="40" width="190" height="230" fill={C.ink} />
      <L x="115" y="70" fill={C.copper} size={12} weight={600}>INCOME</L>
      <L x="115" y="100" fill={C.paper} size={11}>movie of a period</L>
      <L x="115" y="140" fill={C.paper} size={11}>revenue − costs</L>
      <L x="115" y="170" fill={C.paper} size={11}>= profit (posed)</L>
      <rect x="225" y="40" width="190" height="230" fill={C.teal} />
      <L x="320" y="70" fill={C.paper} size={12} weight={600}>BALANCE</L>
      <L x="320" y="100" fill={C.paper} size={11}>still photograph</L>
      <L x="320" y="140" fill={C.paper} size={11}>assets</L>
      <L x="320" y="170" fill={C.paper} size={11}>= liabilities + equity</L>
      <rect x="430" y="40" width="190" height="230" fill={C.copper} />
      <L x="525" y="70" fill={C.paper} size={12} weight={600}>CASH FLOW</L>
      <L x="525" y="100" fill={C.paper} size={11}>plumbing</L>
      <L x="525" y="140" fill={C.paper} size={11}>operate · invest</L>
      <L x="525" y="170" fill={C.paper} size={11}>finance</L>
    </Board>
  )
}
