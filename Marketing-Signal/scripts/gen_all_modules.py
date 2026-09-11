#!/usr/bin/env python3
"""Generate all 23 Marketing Signal module TS files with original content."""
import json
import os

OUT = "/workspace/marketing-management-academy/src/content/modules"
os.makedirs(OUT, exist_ok=True)

def p(*paras):
    return "\n".join(f"<p>{t}</p>" for t in paras)

def ul(items):
    return "<ul>" + "".join(f"<li>{i}</li>" for i in items) + "</ul>"

def ol(items):
    return "<ol>" + "".join(f"<li>{i}</li>" for i in items) + "</ol>"

def q(qid, question, options, correct, explanation):
    return {
        "id": qid,
        "question": question,
        "options": options,
        "correctIndex": correct,
        "explanation": explanation,
    }

def write(m):
    path = os.path.join(OUT, f"{m['slug']}.ts")
    body = "import type { ModuleContent } from '../../types/module';\n\nconst module: ModuleContent = "
    body += json.dumps(m, indent=2, ensure_ascii=False)
    body += ";\n\nexport default module;\n"
    with open(path, "w", encoding="utf-8") as f:
        f.write(body)
    print("Wrote", m["slug"], "sections=", len(m["sections"]), "quiz=", len(m["quiz"]))

MODULES = []

# ===================== 1 =====================
MODULES.append({
  "slug": "defining-marketing",
  "number": 1,
  "part": 1,
  "partTitle": "Understanding Marketing Management",
  "title": "Defining Marketing for the New Realities",
  "subtitle": "What marketing is, why it matters, and how value creation sits at the center of modern practice.",
  "readTimeMinutes": 18,
  "objectives": [
    "Define marketing as a value-creation and exchange process, not merely advertising",
    "Distinguish needs, wants, and demands and explain why the distinction matters for strategy",
    "Describe the marketing mix and how managers coordinate decisions across it",
    "Explain how digital channels, data, and societal expectations reshape marketing work",
    "Identify core orientations (production, product, selling, marketing, societal) and when each appears",
  ],
  "sections": [
    {"id": "what-is-marketing", "title": "What Marketing Really Is", "content": p(
      "Marketing is the disciplined practice of understanding people and organizations, shaping offerings that solve real problems, and enabling exchanges that create mutual value. It is not a synonym for advertising, promotions, or social media posts—though those tactics often sit inside a broader marketing system. When Cedar & Salt Foods launches a new line of ready-to-eat grain bowls, every choice about recipe, packaging size, retail placement, price point, and how shoppers first hear about the product is a marketing decision.",
      "At its core, marketing connects three ideas: (1) someone has a need or job-to-be-done; (2) an organization can create an offering that addresses that job better than alternatives; and (3) an exchange can take place under terms both sides find acceptable. Marketing management is the ongoing work of researching those needs, designing the offering and its path to market, communicating clearly, and learning from results so the next cycle improves.",
      "A useful mental model treats marketing as a continuous loop: sense → design → deliver → measure → adapt. Teams that skip sensing jump straight to campaigns and often waste budget on messages that miss what customers actually care about. Teams that sense well but never adapt after launch leave value on the table because markets change, competitors move, and early assumptions harden into habits.",
      "Marketing also operates at multiple levels. Brand marketing builds long-term meaning and preference. Performance marketing optimizes near-term responses such as trial or purchase. Product marketing clarifies who the offering is for and why it wins. Channel marketing ensures the product is available and supported where buyers prefer to shop. Strong organizations align these layers rather than treating them as rival budgets.",
    )},
    {"id": "needs-wants-demands", "title": "Needs, Wants, and Demands", "content": p(
      "Needs are fundamental states of felt deprivation—nutrition, safety, belonging, competence, status, and so on. Wants are the culturally and personally shaped ways people prefer to satisfy needs. Demands are wants backed by willingness and ability to pay. A traveler needs rest and reliability; they may want a boutique hotel with quiet rooms; they demand that option only if the price, location, and booking friction fit their constraints.",
      "Confusing these layers leads to classic mistakes. Building features customers “want” in interviews but will not pay for creates inventory and burn. Ignoring latent needs that people cannot yet articulate leaves room for disruptive offerings. Northline Outdoors discovered that many weekend hikers did not ask for “lighter tents”; they complained about sore backs and late starts. Translating that into a modular pack system addressed the underlying need (comfort and speed) rather than copying competitor feature checklists.",
      "Marketers translate needs into value propositions: clear statements of who the customer is, what outcome they seek, and why this offering is the best path. A crisp value proposition guides product priorities, messaging, and channel choices. Vague slogans such as “quality you can trust” rarely help a team decide what to build next.",
    ) + ul([
      "Need: reliable weekday lunches with decent nutrition",
      "Want: grab-and-go bowls that taste homemade",
      "Demand: bowls priced under a lunch budget and stocked near offices",
    ])},
    {"id": "exchange-and-markets", "title": "Exchange, Markets, and Stakeholders", "content": p(
      "An exchange occurs when two parties give something of value to obtain something they prefer more. Money-for-goods is the obvious case, but exchanges also include time-for-content, data-for-service, and loyalty-for-preferential treatment. Ethical marketing makes the terms of exchange transparent and respects consent, especially when personal data is involved.",
      "A market is the set of actual and potential buyers for an offering. Markets can be defined geographically, demographically, by behavior, by industry, or by job-to-be-done. Modern marketers often think in terms of addressable segments and micro-segments rather than one mass market, because digital channels allow more tailored communication and product variants.",
      "Marketing managers also navigate stakeholders beyond buyers: employees who deliver the brand promise, partners who distribute or co-create, regulators who set boundaries, communities affected by operations, and investors who expect sustainable returns. Holistic practice weighs these relationships instead of optimizing short-term sales at any cost.",
    )},
    {"id": "marketing-mix", "title": "The Marketing Mix as a Decision System", "content": p(
      "The classic marketing mix—product, price, place, and promotion—remains a practical checklist for coordinating decisions. Product covers the core offering, features, quality, branding, packaging, and services that surround it. Price includes list price, discounts, payment terms, and perceived value. Place (channels) addresses how customers access the offering. Promotion spans advertising, sales promotion, public relations, personal selling, and digital communications.",
      "Many teams expand the mix for services and experiences: people, processes, and physical evidence matter when the offering is intangible or highly interactive. Others emphasize customer experience journeys mapping moments of truth from awareness through advocacy. The specific framework matters less than disciplined alignment—price signals that contradict product positioning confuse buyers, and promotions that pull traffic to empty shelves destroy trust.",
      "In digital environments, the mix becomes more fluid. “Place” may be an app store ranking or a marketplace search result. “Promotion” and “product” blur when content itself is the product. Managers still benefit from asking whether each lever supports the same value story.",
    )},
    {"id": "orientations", "title": "Company Orientations Toward the Market", "content": p(
      "Organizations drift into default philosophies about how to win. A production orientation prioritizes efficiency and availability—“make it cheap and plentiful.” A product orientation obsesses over features and engineering excellence, sometimes past the point customers will pay for. A selling orientation assumes that aggressive persuasion can move whatever inventory exists. A marketing orientation starts with target customers and designs the firm’s activities around delivering superior value profitably. A societal marketing orientation adds long-term welfare of customers and society to the equation.",
      "None of these is purely historical. Startups under cash pressure can slide into selling orientation. Engineering-led firms can over-index on product orientation. Commodity manufacturers may still live in production logic. The practical question for managers is whether the dominant orientation fits the competitive context—and whether it systematically listens to customers.",
      "Marketing for new realities also means acknowledging power shifts: customers compare options instantly, review brands publicly, and expect personalization without creepy surveillance. Climate concerns, privacy rules, and inclusive representation reshape what “good marketing” looks like. Successful teams treat these not as side constraints but as design inputs.",
    )},
    {"id": "new-realities", "title": "New Realities Shaping Practice", "content": p(
      "Several forces redefine day-to-day marketing work. First, data abundance: clickstreams, CRM records, and third-party signals enable finer targeting—and raise ethical and legal obligations. Second, media fragmentation: attention is split across search, social, streaming, retail media, and offline experiences, so integrated planning beats single-channel hero campaigns. Third, platform intermediaries: marketplaces and app ecosystems control discovery, taking fees and setting rules marketers must navigate.",
      "Fourth, co-creation: customers participate in reviews, communities, and user-generated content that can amplify or damage brands faster than paid media. Fifth, globalization and localization in tension: brands scale playbooks while adapting to local culture, regulation, and payment norms. Sixth, purpose and proof: audiences increasingly ask what a brand stands for and whether claims are credible.",
      "For learners, the implication is clear. Master foundational concepts—value, segments, positioning, mix decisions—then practice applying them in contexts where digital tools, ethics, and rapid feedback loops are normal. The modules ahead build that toolkit step by step.",
    )},
  ],
  "definitionCallouts": [
    {"term": "Marketing", "definition": "The organizational process of creating, communicating, delivering, and exchanging offerings that have value for customers, clients, partners, and society at large."},
    {"term": "Value proposition", "definition": "A clear statement of the benefits a specific customer segment receives from an offering and why those benefits beat relevant alternatives."},
    {"term": "Marketing mix", "definition": "The coordinated set of controllable decisions—typically product, price, place, and promotion—used to implement a market strategy."},
  ],
  "miniCase": {
    "title": "Northline Outdoors Reconsiders “What We Sell”",
    "company": "Northline Outdoors",
    "scenario": "Northline Outdoors sells hiking apparel and gear through its website and specialty retailers. Sales of traditional tents are flat. Customer support tickets repeatedly mention bulky packs and wasted morning setup time on short trips. The product team wants to fund a lighter tent fabric R&D project. The marketing lead argues the company should redefine its offer around “faster trail-ready systems,” possibly bundling a modular pack, quick-pitch shelter, and guided packing checklist app. Retail partners worry that a system approach will confuse shelf layouts. Leadership asks marketing to clarify the need, the market, and which orientation the firm should adopt for the next two years.",
    "questions": [
      "Separate the hikers’ needs, wants, and likely demands in this situation.",
      "How would a product orientation versus a marketing orientation change Northline’s next investment?",
      "Which marketing-mix decisions would need to change together if Northline shifts to a “trail-ready system” offer?",
    ],
  },
  "keyTerms": [
    {"term": "Need", "definition": "A basic human requirement or job-to-be-done that motivates seeking solutions."},
    {"term": "Want", "definition": "A culturally and personally shaped preference for how to satisfy a need."},
    {"term": "Demand", "definition": "A want backed by purchasing power and willingness to buy."},
    {"term": "Exchange", "definition": "A voluntary trade of value between parties."},
    {"term": "Market", "definition": "Actual and potential buyers who share a need or want that can be satisfied through exchange."},
    {"term": "Customer value", "definition": "The customer’s perceived benefits minus perceived costs of an offering relative to alternatives."},
  ],
  "quiz": [
    q("d1", "Which statement best describes marketing?", ["Paid advertising only", "Creating and enabling value-creating exchanges", "Maximizing discounts each quarter", "Manufacturing at lowest cost"], 1, "Marketing centers on value creation and exchange, not solely on ads or cost cutting."),
    q("d2", "A customer says they “need a luxury watch.” In marketing terms this is best classified as a:", ["Pure physiological need", "Want (and possibly a demand if they can pay)", "Market forecast", "Channel strategy"], 1, "Luxury watches express wants shaped by culture and status; ability to pay turns them into demand."),
    q("d3", "Which orientation starts with target customers and designs activities to deliver superior value profitably?", ["Production orientation", "Selling orientation", "Marketing orientation", "Pure engineering orientation"], 2, "A marketing orientation begins with customers and builds the business around delivering value."),
    q("d4", "Price promotions that drive traffic to out-of-stock products primarily illustrate:", ["Perfect place strategy", "Misalignment within the marketing mix", "Societal marketing success", "Latent need discovery"], 1, "Promotion and place (availability) must align; empty shelves break the exchange."),
    q("d5", "Which force most directly increases both targeting power and privacy obligations?", ["Factory overtime", "Data abundance from digital interactions", "Longer print catalogs", "Uniform global packaging laws only"], 1, "Digital data enables finer targeting while raising ethical and legal duties."),
    q("d6", "A value proposition should primarily clarify:", ["Internal org chart titles", "Who the offer is for, what outcome it delivers, and why it wins", "Only the advertising slogan font", "Warehouse SKU counts"], 1, "Value propositions guide product, messaging, and channel choices around customer outcomes."),
    q("d7", "Co-creation in modern marketing often refers to:", ["Customers shaping brand meaning via reviews, communities, and content", "Only government subsidies", "Eliminating all research", "Setting list prices by lottery"], 0, "Customers participate in brand narratives through UGC, reviews, and communities."),
  ],
  "applyIt": {
    "title": "Map a Local Offering Through the Marketing Lens",
    "instructions": "Pick a real product or service you use weekly (coffee shop, transit app, grocery brand, gym). Write a one-page brief using only original analysis.",
    "prompts": [
      "State the core need, the want your chosen brand addresses, and what turns that want into demand for you.",
      "Draft a one-sentence value proposition for that brand’s primary segment.",
      "List one decision under product, price, place, and promotion that either supports or undermines that proposition.",
      "Note one “new reality” (data, platforms, purpose, media fragmentation) that shapes how that brand markets today.",
    ],
  },
})

print("Defined module 1, writing remainder in parts...")
# Save partial and continue in next script invocation via import
with open("/tmp/mma_mod1.json", "w") as f:
    json.dump(MODULES, f)
print("ok")
