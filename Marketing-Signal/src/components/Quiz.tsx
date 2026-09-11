import { useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import type { QuizQuestion } from '../types/module';
import { CheckCircle2, XCircle } from 'lucide-react';

interface Props {
  questions: QuizQuestion[];
  onComplete: (score: number, total: number) => void;
}

export default function Quiz({ questions, onComplete }: Props) {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const reduceMotion = useReducedMotion();

  const score = useMemo(() => {
    if (!submitted) return 0;
    return questions.reduce((s, q) => s + (answers[q.id] === q.correctIndex ? 1 : 0), 0);
  }, [submitted, answers, questions]);

  const submit = () => {
    if (Object.keys(answers).length < questions.length) return;
    setSubmitted(true);
    const sc = questions.reduce((s, q) => s + (answers[q.id] === q.correctIndex ? 1 : 0), 0);
    onComplete(sc, questions.length);
  };

  const reset = () => {
    setAnswers({});
    setSubmitted(false);
  };

  return (
    <div className="space-y-6">
      {questions.map((q, qi) => {
        const chosen = answers[q.id];
        const correct = submitted && chosen === q.correctIndex;
        const wrong = submitted && chosen !== undefined && chosen !== q.correctIndex;
        return (
          <fieldset key={q.id} className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-paper-elevated)] p-4 sm:p-5">
            <legend className="font-medium text-[var(--color-ink)] px-1">
              {qi + 1}. {q.question}
            </legend>
            <div className="mt-3 space-y-2">
              {q.options.map((opt, oi) => {
                const id = `${q.id}-${oi}`;
                const isSel = chosen === oi;
                let ring = 'border-[var(--color-border)]';
                if (submitted && oi === q.correctIndex) ring = 'border-[var(--color-success)] bg-[var(--color-accent-soft)]';
                else if (wrong && isSel) ring = 'border-[var(--color-coral)] bg-[var(--color-coral-soft)]';
                else if (isSel) ring = 'border-[var(--color-accent)] bg-[var(--color-accent-soft)]';
                return (
                  <label key={id} className={`flex gap-3 cursor-pointer rounded-xl border px-3 py-2.5 text-sm ${ring}`}>
                    <input
                      type="radio"
                      name={q.id}
                      className="mt-0.5"
                      disabled={submitted}
                      checked={isSel}
                      onChange={() => setAnswers((a) => ({ ...a, [q.id]: oi }))}
                    />
                    <span>{opt}</span>
                  </label>
                );
              })}
            </div>
            <AnimatePresence initial={false}>
              {submitted && (
                <motion.div
                  key="explain"
                  initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: reduceMotion ? 0 : 0.3, ease: 'easeOut' }}
                  className="overflow-hidden"
                >
                  <p className={`mt-3 text-sm flex gap-2 ${correct ? 'text-[var(--color-success)]' : 'text-[var(--color-ink-muted)]'}`}>
                    {correct ? <CheckCircle2 size={16} className="shrink-0 mt-0.5" /> : <XCircle size={16} className="shrink-0 mt-0.5 text-[var(--color-coral)]" />}
                    {q.explanation}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </fieldset>
        );
      })}
      <div className="flex flex-wrap gap-3 items-center">
        {!submitted ? (
          <button
            type="button"
            onClick={submit}
            disabled={Object.keys(answers).length < questions.length}
            className="rounded-xl bg-[var(--color-accent)] px-5 py-2.5 text-sm font-semibold text-white disabled:opacity-40 hover:bg-[var(--color-accent-hover)]"
          >
            Check answers
          </button>
        ) : (
          <>
            <p className="font-display text-lg font-semibold">
              Score: {score}/{questions.length} ({Math.round((score / questions.length) * 100)}%)
            </p>
            <button type="button" onClick={reset} className="rounded-xl border border-[var(--color-border)] px-4 py-2 text-sm hover:bg-[var(--color-sand)]">
              Retry quiz
            </button>
          </>
        )}
      </div>
    </div>
  );
}
