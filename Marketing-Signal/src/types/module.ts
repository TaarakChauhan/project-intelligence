export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface LessonSection {
  id: string;
  title: string;
  content: string; // HTML or markdown-like paragraphs joined
}

export interface KeyTerm {
  term: string;
  definition: string;
}

export interface DefinitionCallout {
  term: string;
  definition: string;
}

export interface ModuleContent {
  slug: string;
  number: number;
  part: number;
  partTitle: string;
  title: string;
  subtitle: string;
  readTimeMinutes: number;
  objectives: string[];
  sections: LessonSection[];
  definitionCallouts: DefinitionCallout[];
  miniCase: {
    title: string;
    company: string;
    scenario: string;
    questions: string[];
  };
  keyTerms: KeyTerm[];
  quiz: QuizQuestion[];
  applyIt: {
    title: string;
    instructions: string;
    prompts: string[];
  };
  glossaryTerms?: KeyTerm[];
}

export interface ProgressState {
  completedModules: string[];
  quizScores: Record<string, { score: number; total: number; at: string }>;
  lastVisited?: string;
}
