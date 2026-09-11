import type { ProgressState } from '../types/module';

const KEY = 'mma-progress-v1';

export function loadProgress(): ProgressState {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return { completedModules: [], quizScores: {} };
    return JSON.parse(raw) as ProgressState;
  } catch {
    return { completedModules: [], quizScores: {} };
  }
}

export function saveProgress(state: ProgressState): void {
  localStorage.setItem(KEY, JSON.stringify(state));
}

export function markComplete(slug: string): ProgressState {
  const p = loadProgress();
  if (!p.completedModules.includes(slug)) {
    p.completedModules.push(slug);
  }
  p.lastVisited = slug;
  saveProgress(p);
  return p;
}

export function saveQuizScore(slug: string, score: number, total: number): ProgressState {
  const p = loadProgress();
  p.quizScores[slug] = { score, total, at: new Date().toISOString() };
  if (score / total >= 0.7 && !p.completedModules.includes(slug)) {
    p.completedModules.push(slug);
  }
  saveProgress(p);
  return p;
}

export function setLastVisited(slug: string): void {
  const p = loadProgress();
  p.lastVisited = slug;
  saveProgress(p);
}
