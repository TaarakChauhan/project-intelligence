import type { ComponentType } from 'react'
import { Coincidence, ThreeJobs, MetalPaper, InterestClock, Yardstick, ThreeMaps } from './origins'
import { RevenueProfit, Pipeline, Leverage, ShareBond, BondLadder, HedgeBet, ThreeStatements } from './firms'
import { MarketMatch, PrimarySecondary, FxCross, PriceJump, TwoBanks, InsurancePool, Corridor } from './markets'
import { MoneyCreation, Toolkit, Brackets, GovBorrow, StockFlow, Recession } from './state'
import { Teeter, Cushion, Haystack, CompoundCurve, Mortgage, GoodBadDebt, LaterYou, CardsCoins, Hook } from './ledger'

export const diagrams: Record<string, ComponentType> = {
  coincidence: Coincidence,
  threeJobs: ThreeJobs,
  metalPaper: MetalPaper,
  interestClock: InterestClock,
  yardstick: Yardstick,
  threeMaps: ThreeMaps,
  revenueProfit: RevenueProfit,
  pipeline: Pipeline,
  leverage: Leverage,
  shareBond: ShareBond,
  bondLadder: BondLadder,
  hedgeBet: HedgeBet,
  threeStatements: ThreeStatements,
  marketMatch: MarketMatch,
  primarySecondary: PrimarySecondary,
  fxCross: FxCross,
  priceJump: PriceJump,
  twoBanks: TwoBanks,
  insurancePool: InsurancePool,
  corridor: Corridor,
  moneyCreation: MoneyCreation,
  toolkit: Toolkit,
  brackets: Brackets,
  govBorrow: GovBorrow,
  stockFlow: StockFlow,
  recession: Recession,
  teeter: Teeter,
  cushion: Cushion,
  haystack: Haystack,
  compoundCurve: CompoundCurve,
  mortgage: Mortgage,
  goodBadDebt: GoodBadDebt,
  laterYou: LaterYou,
  cardsCoins: CardsCoins,
  hook: Hook,
}

export const diagramCaptions: Record<string, string> = {
  coincidence: 'Two wants that refuse to occupy the same afternoon.',
  threeJobs: 'Handshake, yardstick, pantry — one object, three tests.',
  metalPaper: 'Coin, note, row: money getting lighter.',
  interestClock: 'A rate is rent on the interval between now and later.',
  yardstick: 'Inflation is a shorter stick, not a moodier loaf.',
  threeMaps: 'Three sketches of the same hills, drawn for different weather.',
  revenueProfit: 'A waterfall from applause to remainder.',
  pipeline: 'Cash still in the pipes while profit poses in the middle.',
  leverage: 'The same assets, a thinner residual, a louder ride.',
  shareBond: 'Owner versus creditor. Residual versus schedule.',
  bondLadder: 'Price and yield share a board. Duration is how hard it tips.',
  hedgeBet: 'Same contract, opposite jobs. Ask what would hurt without it.',
  threeStatements: 'Movie, still, plumbing. One camera is a style.',
  marketMatch: 'Bids, asks, a trade, and the gap between the stacks.',
  primarySecondary: 'The factory door and the aftermarket.',
  fxCross: 'Two units laid across each other.',
  priceJump: 'A gap is a skipped argument, often an empty book.',
  twoBanks: 'Two hats. One creates everyday money. One births paper.',
  insurancePool: 'Many pay. Few draw. Luck must be scattered.',
  corridor: 'Bank-like jobs without the branch light.',
  moneyCreation: 'A loan writes two lines. Spendable money appears.',
  toolkit: 'Rate, book, emergency. Name the tool.',
  brackets: 'Extra dollars, extra rate. The loaf is not restyled.',
  govBorrow: 'Spend minus tax is a gap with a job to name.',
  stockFlow: 'A pile is not a river.',
  recession: 'The music slows. Chairs go. Doom is a literary choice.',
  teeter: 'Stuff versus claims. The remainder is the household.',
  cushion: 'Dull cash under the weather-taking pile.',
  haystack: 'Many stems. One fire does not take the field.',
  compoundCurve: 'A reinvested rate stops being a line.',
  mortgage: 'Interest-heavy bars give way to principal-heavy bars.',
  goodBadDebt: 'A job description, or a weight.',
  laterYou: 'A wrapper is not the plan. Contents are.',
  cardsCoins: 'Skin, cash, chain. Different failure modes.',
  hook: 'Urgency plus a borrowed name is the bait.',
}

export function Diagram({ id }: { id: string }) {
  const Cmp = diagrams[id]
  if (!Cmp) return null
  const caption = diagramCaptions[id]
  return (
    <figure className="diagram-frame">
      <Cmp />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  )
}
