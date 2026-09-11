import { useCallback, useEffect, useState } from 'react';
import type { ProgressState } from '../types/module';
import { loadProgress, markComplete, saveQuizScore, setLastVisited } from '../lib/progress';

export function useProgress() {
  const [progress, setProgress] = useState<ProgressState>({ completedModules: [], quizScores: {} });

  useEffect(() => {
    setProgress(loadProgress());
  }, []);

  const complete = useCallback((slug: string) => {
    setProgress(markComplete(slug));
  }, []);

  const recordQuiz = useCallback((slug: string, score: number, total: number) => {
    setProgress(saveQuizScore(slug, score, total));
  }, []);

  const visit = useCallback((slug: string) => {
    setLastVisited(slug);
    setProgress(loadProgress());
  }, []);

  const isComplete = useCallback(
    (slug: string) => progress.completedModules.includes(slug),
    [progress]
  );

  return { progress, complete, recordQuiz, visit, isComplete };
}
