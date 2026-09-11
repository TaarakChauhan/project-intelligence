import type { ModuleContent } from '../../types/module';

const module: ModuleContent = {
  "slug": "personal-communications",
  "number": 22,
  "part": 7,
  "partTitle": "How you talk",
  "title": "Direct mail, data, and salespeople",
  "subtitle": "Using addressable messages and human sales conversations to build profitable relationships.",
  "readTimeMinutes": 22,
  "objectives": [
    "Design direct marketing systems with measurable response",
    "Use customer databases and CRM responsibly",
    "Structure personal selling processes and enablement",
    "Align sales and marketing (SMarketing)",
    "Respect privacy, consent, and fairness in addressable media"
  ],
  "sections": [
    {
      "id": "s1",
      "title": "Direct Marketing Logic",
      "content": "<p>Direct marketing communicates with identifiable audiences to obtain a measurable response and/or maintain relationships—via email, SMS, direct mail, telemarketing, and targeted digital. Its strength is accountability; its risk is spammy volume that trains ignoring.</p>\n<p>Offer, creative, list/audience, and timing drive results. Test structured variables. Cedar & Salt’s replenishment reminders worked when timed to observed consumption, not generic weekly blasts.</p>\n<p>Offline direct mail still performs in some categories when creative and targeting are sharp—especially where digital clutter is high or audiences are less online.</p>\n<p>Compliance—consent, suppression lists, accurate claims—is non-negotiable. Build preference centers people can trust.</p>"
    },
    {
      "id": "s2",
      "title": "Databases and CRM",
      "content": "<p>Customer databases store identities, behaviors, preferences, and permissions. CRM processes use that information to personalize service and lifecycle marketing. Data quality—deduping, consent flags, recency—determines usefulness.</p>\n<p>Segmentation in CRM should map to value and needs: onboarding, upsell, win-back, loyalty recognition. Over-messaging high-value customers is a common failure mode.</p>\n<p>Integrate service history so marketing does not cheerfully upsell an angry customer mid-outage. Harborlight suppressed promo emails during open complaint tickets—raising long-term trust.</p>\n<p>Govern access and retention. Collect only what you need. Security incidents are marketing crises.</p>"
    },
    {
      "id": "s3",
      "title": "Personal Selling Excellence",
      "content": "<p>Personal selling is interpersonal commercial conversation—critical in complex, high-risk, or customized purchases. Stages include prospecting, qualifying, discovering needs, presenting, handling concerns, closing, and aftercare. Modern selling is insight-led problem solving more than scripted pressure.</p>\n<p>Sales enablement provides content, tools, training, and coaching aligned to buyer stages. Marketing should equip narratives and proof, not dump unused slideware.</p>\n<p>Ethics: no deceptive scarcity, no bribery, no misrepresenting capabilities. Long sales cycles in B2B make reputation durable.</p>\n<p>Measure leading indicators: multi-threaded coverage, stage conversion, win/loss reasons—not only revenue rearview mirrors.</p>"
    },
    {
      "id": "s4",
      "title": "Aligning Sales and Marketing",
      "content": "<p>Misalignment shows up as lead quality fights, conflicting messages, and blamed handoffs. Shared definitions of lifecycle stages, SLAs for follow-up, closed-loop reporting, and joint planning fix more than pep talks.</p>\n<p>Account-based approaches coordinate plays on target accounts. Content and ads support human outreach rather than random spray.</p>\n<p>Compensation systems must not reward sales for deals that marketing must then unsell via refunds and brand damage.</p>"
    },
    {
      "id": "s5",
      "title": "Privacy and the Future of Addressability",
      "content": "<p>Regulations and platform policies constrain tracking and outreach. Win with consented relationships and useful messaging. Contextual and first-party strategies grow.</p>\n<p>Fairness audits matter: do models exclude or exploit certain groups unjustly? Review targeting criteria.</p>\n<p>Human selling augmented by AI tools can improve prep and CRM hygiene—but keep humans accountable for customer commitments.</p>"
    }
  ],
  "definitionCallouts": [
    {
      "term": "Direct marketing",
      "definition": "Addressable communications aimed at obtaining a measurable response and building relationships."
    },
    {
      "term": "CRM",
      "definition": "Processes and systems for managing customer data and interactions across the lifecycle."
    },
    {
      "term": "Sales enablement",
      "definition": "Content, training, and tools that help sellers engage buyers effectively."
    }
  ],
  "miniCase": {
    "title": "Northline’s Lead Blame Game",
    "company": "Northline Outdoors (B2B wholesale)",
    "scenario": "Marketing generates trade-show leads. Sales says leads are tire-kickers. Marketing says sales never calls within SLA. CRM notes are empty. A big specialty chain is an open opportunity with conflicting emails from both teams.",
    "questions": [
      "Define a shared lead lifecycle and SLA.",
      "What enablement assets would improve sales discovery?",
      "How should CRM hygiene be enforced?"
    ]
  },
  "keyTerms": [
    {
      "term": "Preference center",
      "definition": "An interface where customers manage communication channels and topics."
    },
    {
      "term": "Lead qualification",
      "definition": "Assessing whether a prospect fits targeting and readiness criteria."
    },
    {
      "term": "Closed-loop reporting",
      "definition": "Feedback from sales outcomes back to marketing for learning."
    },
    {
      "term": "Account-based marketing",
      "definition": "Coordinated marketing and sales focus on named accounts."
    },
    {
      "term": "Suppression list",
      "definition": "Contacts excluded from outreach due to opt-out or other rules."
    },
    {
      "term": "Win/loss analysis",
      "definition": "Structured learning from deals won and lost."
    }
  ],
  "quiz": [
    {
      "id": "pc1",
      "question": "Direct marketing’s distinctive strength is:",
      "options": [
        "Unmeasurable vibes",
        "Accountability to measurable response",
        "Avoiding all consent rules",
        "Replacing products"
      ],
      "correctIndex": 1,
      "explanation": "Response measurability is core."
    },
    {
      "id": "pc2",
      "question": "Messaging angry customers with upsells during outages shows:",
      "options": [
        "Great CRM integration",
        "Poor integration of service and marketing data",
        "Perfect timing",
        "Legal best practice"
      ],
      "correctIndex": 1,
      "explanation": "Integrate service status."
    },
    {
      "id": "pc3",
      "question": "Insight-led selling emphasizes:",
      "options": [
        "Pressure scripts only",
        "Diagnosing customer problems and fitting solutions",
        "Hiding price forever",
        "Ignoring aftercare"
      ],
      "correctIndex": 1,
      "explanation": "Solve problems, don’t just pitch."
    },
    {
      "id": "pc4",
      "question": "Shared lead definitions help:",
      "options": [
        "Increase blame",
        "Align marketing and sales handoffs",
        "Delete CRM",
        "End personal selling"
      ],
      "correctIndex": 1,
      "explanation": "Shared language reduces conflict."
    },
    {
      "id": "pc5",
      "question": "Preference centers build trust by:",
      "options": [
        "Hiding opt-outs",
        "Giving control over communication",
        "Forcing daily emails",
        "Selling emails to spammers"
      ],
      "correctIndex": 1,
      "explanation": "Control earns permission."
    },
    {
      "id": "pc6",
      "question": "Sales enablement should provide:",
      "options": [
        "Random outdated decks only",
        "Stage-right content, tools, and coaching",
        "Competitor private data illegally",
        "No training"
      ],
      "correctIndex": 1,
      "explanation": "Enablement matches buyer stages."
    },
    {
      "id": "pc7",
      "question": "Addressable marketing’s future leans on:",
      "options": [
        "Secret third-party surveillance only",
        "Consented first-party relationships and usefulness",
        "Ignoring regulation",
        "Deleting ethics"
      ],
      "correctIndex": 1,
      "explanation": "Consent and value exchange."
    }
  ],
  "applyIt": {
    "title": "SMarketing Alignment Plan",
    "instructions": "Write original analysis (1–2 pages).",
    "prompts": [
      "Write operational definitions for MQL and SQL for a business.",
      "Draft a follow-up SLA.",
      "List three enablement assets by buyer stage.",
      "Propose two privacy-safe personalization rules."
    ]
  }
};

export default module;
