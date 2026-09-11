import type { Chapter } from '../types'

export const chapters: Chapter[] = [
  {
    id: 'metal',
    slug: 'metal',
    roman: 'Intro',
    title: 'Metal',
    kicker: 'The short history first',
    blurb: 'From weighed metal to paper and pixels — gold, silver, coinage, the gold standard, and fiat. Start here, then open the rest of the atlas.',
    color: '#C4783A',
  },
  {
    id: 'origins',
    slug: 'origins',
    roman: 'I',
    title: 'Origins',
    kicker: 'What money is for',
    blurb: 'Barter’s snag, the three jobs of money, ledgers, interest, inflation, and the maps economists draw.',
    color: '#0B1F33',
  },
  {
    id: 'firms',
    slug: 'firms',
    roman: 'II',
    title: 'Firms',
    kicker: 'How a company is a machine',
    blurb: 'Revenue, cash, borrowing, shares, bonds, hedges, and the three statements that keep score.',
    color: '#1F7A6B',
  },
  {
    id: 'markets',
    slug: 'markets',
    roman: 'III',
    title: 'Markets',
    kicker: 'Where prices are argued into being',
    blurb: 'Matching, primary versus secondary, currencies, banks, insurance, and the unlit corridor of nonbank finance.',
    color: '#C4783A',
  },
  {
    id: 'state',
    slug: 'state',
    roman: 'IV',
    title: 'The state',
    kicker: 'Public books, public tools',
    blurb: 'Who creates money, what a central bank actually does, tax brackets, borrowing, debt, and recessions.',
    color: '#B42318',
  },
  {
    id: 'ledger',
    slug: 'ledger',
    roman: 'V',
    title: 'Your ledger',
    kicker: 'A household, mapped',
    blurb: 'Net worth, cushions, haystacks, compounding, houses, debt, later-you, digital money, and not getting hooked.',
    color: '#16324D',
  },
]

export function chapterBySlug(slug: string): Chapter | undefined {
  return chapters.find((c) => c.slug === slug)
}
