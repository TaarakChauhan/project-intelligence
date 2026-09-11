import type { ModuleContent } from '../types/module';

import definingMarketing from './modules/defining-marketing';
import strategiesAndPlans from './modules/strategies-and-plans';
import informationAndForecasting from './modules/information-and-forecasting';
import marketingResearch from './modules/marketing-research';
import loyaltyRelationships from './modules/loyalty-relationships';
import consumerMarkets from './modules/consumer-markets';
import businessMarkets from './modules/business-markets';
import globalMarkets from './modules/global-markets';
import segmentationTargeting from './modules/segmentation-targeting';
import brandPositioning from './modules/brand-positioning';
import brandEquity from './modules/brand-equity';
import competitionGrowth from './modules/competition-growth';
import productStrategy from './modules/product-strategy';
import servicesMarketing from './modules/services-marketing';
import newOfferings from './modules/new-offerings';
import pricing from './modules/pricing';
import channels from './modules/channels';
import retailLogistics from './modules/retail-logistics';
import imc from './modules/imc';
import massCommunications from './modules/mass-communications';
import digitalCommunications from './modules/digital-communications';
import personalCommunications from './modules/personal-communications';
import holisticOrganization from './modules/holistic-organization';

export const modules: ModuleContent[] = [
  definingMarketing,
  strategiesAndPlans,
  informationAndForecasting,
  marketingResearch,
  loyaltyRelationships,
  consumerMarkets,
  businessMarkets,
  globalMarkets,
  segmentationTargeting,
  brandPositioning,
  brandEquity,
  competitionGrowth,
  productStrategy,
  servicesMarketing,
  newOfferings,
  pricing,
  channels,
  retailLogistics,
  imc,
  massCommunications,
  digitalCommunications,
  personalCommunications,
  holisticOrganization,
].sort((a, b) => a.number - b.number);

export const parts = Array.from(
  modules.reduce((map, m) => {
    if (!map.has(m.part)) map.set(m.part, { part: m.part, title: m.partTitle, modules: [] as ModuleContent[] });
    map.get(m.part)!.modules.push(m);
    return map;
  }, new Map<number, { part: number; title: string; modules: ModuleContent[] }>())
).map(([, v]) => v).sort((a, b) => a.part - b.part);

export function getModule(slug: string): ModuleContent | undefined {
  return modules.find((m) => m.slug === slug);
}

export function getAdjacent(slug: string): { prev?: ModuleContent; next?: ModuleContent } {
  const i = modules.findIndex((m) => m.slug === slug);
  if (i < 0) return {};
  return { prev: modules[i - 1], next: modules[i + 1] };
}

export function buildGlossary(): { term: string; definition: string; moduleSlug: string; moduleTitle: string }[] {
  const items: { term: string; definition: string; moduleSlug: string; moduleTitle: string }[] = [];
  const seen = new Set<string>();
  for (const m of modules) {
    for (const t of [...m.keyTerms, ...m.definitionCallouts]) {
      const key = t.term.toLowerCase();
      if (seen.has(key)) continue;
      seen.add(key);
      items.push({ term: t.term, definition: t.definition, moduleSlug: m.slug, moduleTitle: m.title });
    }
  }
  return items.sort((a, b) => a.term.localeCompare(b.term));
}
