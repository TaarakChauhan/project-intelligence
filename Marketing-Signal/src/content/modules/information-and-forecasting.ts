import type { ModuleContent } from '../../types/module';

const module: ModuleContent = {
  "slug": "information-and-forecasting",
  "number": 3,
  "part": 2,
  "partTitle": "What you need to know",
  "title": "Seeing demand before you bet",
  "subtitle": "Building marketing information systems and turning signals into credible demand forecasts.",
  "readTimeMinutes": 22,
  "objectives": [
    "Describe components of a marketing information system (MIS)",
    "Differentiate internal data, marketing intelligence, and formal research",
    "Select forecasting methods appropriate to data availability and decision stakes",
    "Interpret leading indicators and scenario ranges rather than single-point forecasts",
    "Spot common forecasting biases and improve judgment with structured processes"
  ],
  "sections": [
    {
      "id": "s1",
      "title": "Why Information Advantage Matters",
      "content": "<p>Marketing decisions are bets under uncertainty. Better information does not eliminate risk, but it improves the quality of bets: which segment to enter, how much inventory to build, whether a price change will expand or shrink contribution, and when a campaign is truly working. Firms that treat information as a byproduct of operations fall behind firms that deliberately design sensing systems.</p>\n<p>A marketing information system (MIS) is the people, processes, and technology that gather, sort, analyze, and distribute information managers need. It typically blends three streams: internal records (orders, service tickets, web analytics, CRM), marketing intelligence (ongoing scanning of competitors, reviews, trade press, salesforce notes), and marketing research projects that answer specific questions. Cedar & Salt Foods improved promotion ROI after linking retailer sell-out data with coupon redemptions and weather—revealing that rain depressed foot traffic more than creative quality on certain weeks.</p>\n<p>Information advantage is temporary. Competitors can buy similar panel data or scrape similar public signals. Sustainable advantage comes from proprietary behavioral data, faster interpretation cycles, and the organizational habit of acting on insight. Northline Outdoors’ repair-log database became a unique window into failure modes that surveys never surfaced.</p>\n<p>Managers should also distinguish data from insight. Dashboards full of charts can create an illusion of control. Insight is a decision-relevant interpretation: because repeat buyers cluster around Tuesday restocks, we should shift retail media toward Monday evening rather than weekend blasts.</p>"
    },
    {
      "id": "s2",
      "title": "Internal Records and Marketing Intelligence",
      "content": "<p>Internal records are often the cheapest and most underused asset. Order histories reveal purchase frequency and basket composition. Support transcripts reveal friction. Website funnels reveal drop-offs. Sales pipelines reveal where deals stall. The challenge is integration: different systems use different customer IDs, product codes, and time zones. Investing in a shared customer key and clean product taxonomy pays dividends across forecasting, personalization, and research.</p>\n<p>Marketing intelligence is continuous and largely qualitative-plus-secondary. Train sales and customer success teams to capture structured competitive notes. Monitor review sites, app stores, patent filings, hiring pages, and regulatory dockets. Assign ownership so scanning is not everyone’s vague job and therefore no one’s real job. Intelligence briefs should highlight implications, not dump links.</p>\n<p>Ethical and legal boundaries matter. Do not infiltrate competitor private systems, misrepresent identity, or misuse personal data. Public information and consented first-party data are the durable foundation. Privacy regulations also shape what you may store and how long you may retain it—design MIS with compliance as a first-class requirement.</p>\n<p>Harborlight Home Finance created a weekly intelligence ritual: five bullets on competitor rate promotions, three customer-verbatims from call listening, and one recommended experiment. The ritual’s brevity increased actual use by executives.</p>"
    },
    {
      "id": "s3",
      "title": "Demand Forecasting Basics",
      "content": "<p>Demand forecasting estimates how much of an offering customers will buy in a future period under assumed conditions of price, distribution, marketing support, and environment. Forecasts feed production, staffing, cash planning, and media buying. Overforecasting creates inventory and markdowns; underforecasting creates stockouts and lost trust.</p>\n<p>Break demand into components when possible: baseline demand, seasonality, trend, promotional lift, distribution effects, and one-time shocks. A national forecast that ignores regional seasonality for outdoor gear will mis-buy inventory. Northline Outdoors separates shoulder-season apparel from peak summer shelter demand and models promotional lift separately from organic search growth.</p>\n<p>Always document assumptions: price held constant, two new retail doors, competitor launches delayed, and so on. When reality diverges, you can diagnose whether the model or the world changed. Single-number forecasts without ranges invite false precision; prefer base, upside, and downside scenarios tied to explicit drivers.</p>"
    },
    {
      "id": "s4",
      "title": "Forecasting Methods Toolbox",
      "content": "<p>Methods span judgmental and quantitative families. Judgmental approaches include salesforce composites, expert panels, and intention surveys. They help when history is thin—new products, new markets—or when structural breaks invalidate past patterns. Biases include optimism from sales teams paid on targets and anchoring on last year’s number.</p>\n<p>Time-series methods extrapolate patterns in historical demand: moving averages, exponential smoothing, and seasonal decomposition. Causal or associative models relate demand to drivers such as price, advertising, distribution points, income, or weather. Machine learning models can capture complex interactions when data volume is large, but they still require human oversight for concept drift and fairness.</p>\n<p>Market tests and early indicator tracking complement models. Pre-orders, waitlists, search trends, and pilot-store sell-through provide reality checks. For truly new offerings, analogies to similar past launches—adjusted carefully—beat pure guesswork. Combine methods: use models for baseline, judgment for adjustments, and tests for calibration.</p>\n<p>Choose method by decision stakes and data quality. A small email subject-line test needs little forecasting rigor. A factory capacity commitment needs transparent models, sensitivity analysis, and executive challenge sessions.</p>"
    },
    {
      "id": "s5",
      "title": "Judgment Biases and Process Quality",
      "content": "<p>Humans systematically misforecast. Optimism bias inflates launches. Anchoring sticks teams to an initial number. Availability bias overweight recent vivid events. Groupthink suppresses dissenting scenarios. Mitigations include reference-class forecasting (how did similar projects perform?), pre-mortems (imagine failure and list reasons), and separating forecasting from target-setting so people are not punished for honest estimates.</p>\n<p>Create a forecast calendar with clear owners, freeze dates, and variance reviews. Celebrate accurate forecasting and learning, not only beating stretch targets by heroic last-minute discounts that poison the next period’s baseline.</p>\n<p>Finally, connect forecasts to leading indicators you can monitor weekly. If trial rate or retail velocity diverges early, update the forecast before the quarter is lost. Information systems and forecasting are one craft: sense continuously, update deliberately, decide with ranges.</p>"
    }
  ],
  "definitionCallouts": [
    {
      "term": "Marketing information system (MIS)",
      "definition": "People, processes, and tools that collect, analyze, and distribute information for marketing decisions."
    },
    {
      "term": "Marketing intelligence",
      "definition": "Ongoing collection and interpretation of publicly and internally available signals about customers, competitors, and the environment."
    },
    {
      "term": "Demand forecast",
      "definition": "An estimate of future purchases of an offering under stated assumptions about marketing and market conditions."
    }
  ],
  "miniCase": {
    "title": "Harborlight’s Spring Volume Bet",
    "company": "Harborlight Home Finance",
    "scenario": "Harborlight Home Finance expects refinance inquiries to rise if rates dip. The growth team wants to pre-buy large amounts of search ads and hire contract underwriters based on a single bullish forecast from an external macro newsletter. The analytics lead proposes a three-scenario forecast using internal inquiry elasticities, competitor rate-watch alerts, and a capped test budget that expands only if weekly leading indicators clear thresholds. Operations worries that under-hiring will create service failures if the bullish case hits.",
    "questions": [
      "Which MIS components should Harborlight strengthen before peak season?",
      "What leading indicators would justify expanding ad spend and staffing?",
      "How should Harborlight separate forecast honesty from aggressive sales targets?"
    ]
  },
  "keyTerms": [
    {
      "term": "Internal records",
      "definition": "Operational data such as orders, service logs, and web analytics used for marketing decisions."
    },
    {
      "term": "Time-series forecasting",
      "definition": "Projecting future values from patterns in historical data over time."
    },
    {
      "term": "Causal forecasting",
      "definition": "Modeling demand as a function of explanatory drivers such as price or distribution."
    },
    {
      "term": "Reference-class forecasting",
      "definition": "Improving estimates by comparing to outcomes of a class of similar past cases."
    },
    {
      "term": "Leading indicator",
      "definition": "A measurable signal that tends to move before the outcome you care about."
    },
    {
      "term": "Scenario planning",
      "definition": "Preparing multiple plausible futures with explicit drivers rather than one point estimate."
    }
  ],
  "quiz": [
    {
      "id": "i1",
      "question": "An MIS typically combines:",
      "options": [
        "Only focus groups",
        "Internal records, intelligence, and research projects",
        "Factory maintenance logs alone",
        "Competitor passwords"
      ],
      "correctIndex": 1,
      "explanation": "MIS blends internal data, intelligence, and research."
    },
    {
      "id": "i2",
      "question": "Marketing intelligence is best described as:",
      "options": [
        "A one-off survey every five years",
        "Continuous scanning and interpretation of market signals",
        "Ignoring public reviews",
        "Setting list prices randomly"
      ],
      "correctIndex": 1,
      "explanation": "Intelligence is ongoing sensing."
    },
    {
      "id": "i3",
      "question": "Documenting forecast assumptions matters because:",
      "options": [
        "It fills pages",
        "It enables diagnosis when reality diverges",
        "Regulators ban numbers",
        "It replaces all data"
      ],
      "correctIndex": 1,
      "explanation": "Assumptions make variance review possible."
    },
    {
      "id": "i4",
      "question": "Salesforce composite forecasts often risk:",
      "options": [
        "Excessive pessimism only",
        "Optimism bias tied to incentives",
        "Perfect accuracy",
        "Zero usefulness ever"
      ],
      "correctIndex": 1,
      "explanation": "Incentive-linked optimism is common."
    },
    {
      "id": "i5",
      "question": "A pre-mortem helps teams:",
      "options": [
        "Delete all forecasts",
        "Surface failure modes before committing",
        "Guarantee success",
        "Avoid metrics"
      ],
      "correctIndex": 1,
      "explanation": "Pre-mortems improve judgment quality."
    },
    {
      "id": "i6",
      "question": "Prefer forecast ranges when:",
      "options": [
        "You want false precision",
        "Uncertainty is material to decisions",
        "Finance forbids scenarios",
        "History is infinite and stable forever"
      ],
      "correctIndex": 1,
      "explanation": "Ranges communicate uncertainty."
    },
    {
      "id": "i7",
      "question": "Proprietary behavioral data can create advantage because:",
      "options": [
        "It is illegal for others by definition",
        "It may be unique, refreshed, and actionable faster",
        "Public data never helps",
        "It removes ethics duties"
      ],
      "correctIndex": 1,
      "explanation": "Unique consented data plus speed matters."
    }
  ],
  "applyIt": {
    "title": "Design a Mini MIS + Forecast Brief",
    "instructions": "Complete this exercise in writing (1–2 pages). Use original analysis; do not copy external textbooks.",
    "prompts": [
      "Pick a product and list three internal data sources and three intelligence sources you would monitor.",
      "Propose a base/upside/downside demand scenario for next quarter with two drivers each.",
      "Name two leading indicators and thresholds that would trigger a plan change.",
      "Identify one bias that might distort your forecast and a process fix."
    ]
  }
};

export default module;
