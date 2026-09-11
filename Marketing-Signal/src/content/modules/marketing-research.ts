import type { ModuleContent } from '../../types/module';

const module: ModuleContent = {
  "slug": "marketing-research",
  "number": 4,
  "part": 2,
  "partTitle": "What you need to know",
  "title": "Research that changes a decision",
  "subtitle": "Designing research that answers real decisions—without confusing noise for truth.",
  "readTimeMinutes": 22,
  "objectives": [
    "Frame research around decisions and hypotheses, not vague curiosity",
    "Choose among exploratory, descriptive, and causal research designs",
    "Compare qualitative and quantitative methods and sampling basics",
    "Critique questionnaires, experiments, and common validity threats",
    "Turn findings into recommendations stakeholders can act on"
  ],
  "sections": [
    {
      "id": "s1",
      "title": "Start With the Decision, Not the Method",
      "content": "<p>Marketing research is the systematic design, collection, analysis, and reporting of data relevant to a specific marketing situation. The most expensive research is research that answers the wrong question elegantly. Begin by writing the decision: Should we launch flavor X nationally? Should we cut price 8% in region Y? Should we reposition toward professionals rather than students?</p>\n<p>Translate the decision into research questions and hypotheses. If we launch flavor X, trial among current buyers will exceed 15% within eight weeks at a contribution margin above Z. Hypotheses make methods testable and prevent fishing expeditions through data until a flattering pattern appears.</p>\n<p>Also define what evidence would change your mind. If leadership has already decided and only wants confirmation theater, save the budget. Good research culture tolerates unwelcome findings. Cedar & Salt Foods killed a packaging redesign after shelf tests showed shoppers overlooked the new carton despite higher production cost.</p>\n<p>Scope constraints early: timeline, budget, required precision, and access to respondents. A rough directional study this month may beat a perfect study after the launch window closes. Match rigor to irreversible commitment: factory tooling deserves more certainty than a social caption test.</p>"
    },
    {
      "id": "s2",
      "title": "Research Design Types",
      "content": "<p>Exploratory research clarifies problems and generates hypotheses. Methods include depth interviews, ethnography, freelisting, and open-ended social listening. Use exploration when you do not yet know what to measure. Northline Outdoors used trail ethnography to learn that “setup time” meant both physical pitching and mental packing decisions—changing how they wrote survey items later.</p>\n<p>Descriptive research measures who, what, when, where, and how often. Cross-sectional surveys, panels, and observational audits fit here. Descriptive work estimates awareness, usage, satisfaction, and segment sizes. It does not, by itself, prove that changing X causes Y.</p>\n<p>Causal research tests whether changing an independent variable causes change in a dependent variable, typically via experiments. Online A/B tests, in-store shelf experiments, and controlled market tests are common. Causal designs need careful attention to randomization, controls, and external validity—what works in one app screen may not work in a retail endcap.</p>\n<p>Many projects sequence designs: explore, describe, then experiment. Skipping to a national survey of poorly understood language wastes sample. Skipping experiments and inferring causality from correlations misleads strategy.</p>"
    },
    {
      "id": "s3",
      "title": "Data Sources and Methods",
      "content": "<p>Secondary data already exist—government statistics, syndicated panels, web analytics, prior studies. Always check secondary first for cost and speed, then assess fit, recency, and bias. Primary data are collected for your purpose: qualitative interviews, focus groups (used carefully), surveys, observation, and experiments.</p>\n<p>Qualitative methods deepen understanding of language, rituals, and motivations. They are not miniature quantitative samples; avoid claiming “60% of interviewees said” as if it were population inference. Quantitative methods estimate magnitudes and test differences when sampling is sound.</p>\n<p>Sampling choices shape credibility. Probability samples support statistical generalization; nonprobability samples (convenience, quota, panels) are common in practice but require humility about representativeness. Online panels may skew digitally fluent. Retail intercepts miss online-only buyers. Define the target population clearly—current category users versus all adults—and sample accordingly.</p>\n<p>Measurement quality matters. Ambiguous questions, double-barreled items, leading wording, and mismatched scales inject error. Pilot questionnaires. For behavioral outcomes, prefer observed behavior or validated records over aspirational self-reports when stakes are high.</p>"
    },
    {
      "id": "s4",
      "title": "Experiments and Validity",
      "content": "<p>Experiments assign units to treatments to estimate causal effects. Digital channels make experimentation cheaper, but not automatic. Interference between users, seasonality, novelty effects, and underpowered samples threaten conclusions. Pre-register primary metrics to reduce p-hacking.</p>\n<p>Internal validity asks whether the estimated effect is truly caused by the treatment. External validity asks whether it generalizes. A winning ad in a cold northern city may fail in a hot coastal market. Harborlight Home Finance learned that a fear-based refinance message raised clicks but lowered qualified applications—optimizing the wrong metric.</p>\n<p>When true experiments are impossible, quasi-experiments and careful observational designs with controls can help, but communicate uncertainty. Managers should ask: What else could explain this pattern? What would falsify our interpretation?</p>"
    },
    {
      "id": "s5",
      "title": "From Findings to Action",
      "content": "<p>Reports should open with the decision, headline findings, and recommended actions, then support with evidence. Separate facts from interpretations. Include limitations and next measurements. Visualize simply; chartjunk does not equal rigor.</p>\n<p>Build a research repository so teams do not repeat studies unknowingly. Share stimulus materials and questionnaires for reproducibility. Close the loop: track whether decisions informed by research produced the expected outcomes, refining both products and research craft.</p>\n<p>Ethics remain non-negotiable: informed consent where required, honest disclosure of sponsorship when appropriate, protection of personal data, and no fabrication. Trustworthy research is a brand asset with respondents, partners, and regulators.</p>"
    }
  ],
  "definitionCallouts": [
    {
      "term": "Marketing research",
      "definition": "Systematic design, collection, analysis, and reporting of data relevant to a marketing decision."
    },
    {
      "term": "Exploratory research",
      "definition": "Flexible inquiry used to clarify problems and generate hypotheses."
    },
    {
      "term": "Causal research",
      "definition": "Designs, often experimental, that test whether changes in one variable produce changes in another."
    }
  ],
  "miniCase": {
    "title": "Northline’s Pack Survey Trap",
    "company": "Northline Outdoors",
    "scenario": "A product manager surveys Instagram followers asking if they would buy a $280 modular pack. Eighty percent say yes. Leadership greenlights tooling. A researcher objects: the sample is brand-loving and price-insensitive; the question is hypothetical; and no competitive set was shown. She proposes a descriptive study of category buyers plus a causal pricing test on the website with waitlist deposits.",
    "questions": [
      "What decision is at stake, and what hypothesis should be tested?",
      "Why is the Instagram poll weak evidence?",
      "Which sequence of exploratory, descriptive, and causal steps would you recommend?"
    ]
  },
  "keyTerms": [
    {
      "term": "Primary data",
      "definition": "Data collected specifically for the research purpose at hand."
    },
    {
      "term": "Secondary data",
      "definition": "Existing data collected for another purpose, reused for the current question."
    },
    {
      "term": "Sampling frame",
      "definition": "The list or process from which a sample is drawn."
    },
    {
      "term": "Internal validity",
      "definition": "Confidence that an observed effect is caused by the treatment."
    },
    {
      "term": "External validity",
      "definition": "Confidence that results generalize to other people, places, or times."
    },
    {
      "term": "A/B test",
      "definition": "An experiment comparing two or more variants on a primary outcome metric."
    }
  ],
  "quiz": [
    {
      "id": "r1",
      "question": "Research should start with:",
      "options": [
        "A favorite survey tool",
        "The decision and hypotheses",
        "The longest questionnaire possible",
        "Ignoring secondary data"
      ],
      "correctIndex": 1,
      "explanation": "Decisions and hypotheses focus methods."
    },
    {
      "id": "r2",
      "question": "Exploratory research is most useful when:",
      "options": [
        "You already know exact effect sizes needed for a factory",
        "The problem is unclear and hypotheses need generating",
        "You must prove causality tomorrow",
        "Legal forbids interviews"
      ],
      "correctIndex": 1,
      "explanation": "Exploration clarifies problems."
    },
    {
      "id": "r3",
      "question": "Descriptive research primarily:",
      "options": [
        "Proves causality alone",
        "Measures characteristics and patterns such as usage or awareness",
        "Replaces all experiments",
        "Deletes qualitative insight"
      ],
      "correctIndex": 1,
      "explanation": "Description measures who/what/how often."
    },
    {
      "id": "r4",
      "question": "A key risk of convenience samples is:",
      "options": [
        "They are always illegal",
        "Limited representativeness of the target population",
        "They produce zero insights ever",
        "They require infinite budget"
      ],
      "correctIndex": 1,
      "explanation": "Convenience samples limit generalization."
    },
    {
      "id": "r5",
      "question": "Optimizing clicks while applications fall illustrates:",
      "options": [
        "Perfect metric choice",
        "A validity/metric alignment problem",
        "That experiments never work",
        "That secondary data is useless"
      ],
      "correctIndex": 1,
      "explanation": "Choose metrics tied to the real decision outcome."
    },
    {
      "id": "r6",
      "question": "Secondary data should be checked for:",
      "options": [
        "Fit, recency, and bias",
        "Only font size",
        "Whether competitors like it",
        "Nothing; always trust it"
      ],
      "correctIndex": 0,
      "explanation": "Fit, recency, and bias determine usability."
    },
    {
      "id": "r7",
      "question": "Pre-registering primary metrics in experiments helps reduce:",
      "options": [
        "Sample size",
        "Selective reporting and p-hacking",
        "Randomization",
        "External validity automatically"
      ],
      "correctIndex": 1,
      "explanation": "Pre-registration curbs fishing for significance."
    },
    {
      "id": "r8",
      "question": "Qualitative interviews are best used to:",
      "options": [
        "Estimate population percentages precisely",
        "Understand meanings, language, and motivations",
        "Replace financial forecasts",
        "Set national prices alone"
      ],
      "correctIndex": 1,
      "explanation": "Qualitative deepens understanding, not population % estimates."
    }
  ],
  "applyIt": {
    "title": "Write a Research Brief",
    "instructions": "Complete this exercise in writing (1–2 pages). Use original analysis; do not copy external textbooks.",
    "prompts": [
      "State a marketing decision and two competing options.",
      "Write research questions and one falsifiable hypothesis.",
      "Propose a design sequence (exploratory/descriptive/causal) with methods.",
      "List threats to validity and how you would mitigate them."
    ]
  }
};

export default module;
