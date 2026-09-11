import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, Clock, Lightbulb } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { getAdjacent, getModule } from '../content';
import { useProgress } from '../hooks/useProgress';
import Quiz from '../components/Quiz';

export default function ModulePage() {
  const { slug = '' } = useParams();
  const m = getModule(slug);
  const { prev, next } = getAdjacent(slug);
  const { complete, recordQuiz, visit, isComplete, progress } = useProgress();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (slug) visit(slug);
  }, [slug, visit]);

  if (!m) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 text-center">
        <h1 className="font-display text-2xl font-bold">Module not found</h1>
        <Link to="/course" className="mt-4 inline-block text-[var(--color-accent)] underline">Back to course</Link>
      </div>
    );
  }

  const quizResult = progress.quizScores[m.slug];

  const sectionMotion = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-48px' as const },
        transition: { duration: 0.35, ease: 'easeOut' as const },
      };

  return (
    <article className="mx-auto max-w-3xl px-4 py-8 sm:py-10">
      <nav className="text-sm text-[var(--color-ink-muted)]">
        <Link to="/course" className="hover:text-[var(--color-accent)]">Course</Link>
        <span aria-hidden> / </span>
        <span>Part {m.part}</span>
      </nav>
      <header className="mt-3">
        <p className="text-sm font-semibold text-[var(--color-accent)]">Module {m.number} · {m.partTitle}</p>
        <h1 className="mt-1 font-display text-3xl font-bold leading-tight sm:text-4xl">{m.title}</h1>
        <p className="mt-3 text-lg text-[var(--color-ink-muted)]">{m.subtitle}</p>
        <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-[var(--color-ink-muted)]">
          <span className="inline-flex items-center gap-1.5"><Clock size={16} /> {m.readTimeMinutes} min read</span>
          {isComplete(m.slug) && (
            <span className="inline-flex items-center gap-1.5 text-[var(--color-success)]"><CheckCircle2 size={16} /> Completed</span>
          )}
          {quizResult && (
            <span>Quiz: {quizResult.score}/{quizResult.total}</span>
          )}
        </div>
      </header>

      <section className="mt-8 rounded-2xl border border-[var(--color-border)] bg-[var(--color-accent-soft)] p-5">
        <h2 className="font-display text-lg font-semibold">Learning objectives</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
          {m.objectives.map((o) => (
            <li key={o}>{o}</li>
          ))}
        </ul>
      </section>

      <div className="prose-lesson mt-2">
        {m.sections.map((s, i) => (
          <motion.section key={s.id} id={s.id} className="scroll-mt-24" {...sectionMotion}>
            <h2>{s.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: s.content }} />
            {m.definitionCallouts[i] && (
              <aside className="my-6 rounded-2xl border-l-4 border-[var(--color-accent)] bg-[var(--color-paper-elevated)] p-4 shadow-sm">
                <div className="text-xs font-semibold uppercase tracking-wide text-[var(--color-accent)]">Definition</div>
                <div className="mt-1 font-semibold">{m.definitionCallouts[i].term}</div>
                <p className="mt-1 mb-0 text-sm text-[var(--color-ink-muted)]">{m.definitionCallouts[i].definition}</p>
              </aside>
            )}
          </motion.section>
        ))}
      </div>

      {m.definitionCallouts.length > m.sections.length && (
        <div className="mt-6 space-y-3">
          {m.definitionCallouts.slice(m.sections.length).map((d) => (
            <aside key={d.term} className="rounded-2xl border-l-4 border-[var(--color-accent)] bg-[var(--color-paper-elevated)] p-4">
              <div className="text-xs font-semibold uppercase tracking-wide text-[var(--color-accent)]">Definition</div>
              <div className="mt-1 font-semibold">{d.term}</div>
              <p className="mt-1 text-sm text-[var(--color-ink-muted)]">{d.definition}</p>
            </aside>
          ))}
        </div>
      )}

      <motion.section className="mt-12 rounded-2xl border border-[var(--color-border)] bg-[var(--color-coral-soft)] p-5 sm:p-6" {...sectionMotion}>
        <h2 className="font-display text-xl font-semibold">Mini-case: {m.miniCase.title}</h2>
        <p className="mt-1 text-sm font-medium text-[var(--color-coral)]">{m.miniCase.company}</p>
        <p className="mt-3 text-sm leading-relaxed">{m.miniCase.scenario}</p>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm">
          {m.miniCase.questions.map((q) => (
            <li key={q}>{q}</li>
          ))}
        </ol>
      </motion.section>

      <motion.section className="mt-12" {...sectionMotion}>
        <h2 className="font-display text-xl font-semibold">Key terms</h2>
        <dl className="mt-4 grid gap-3 sm:grid-cols-2">
          {m.keyTerms.map((t) => (
            <div key={t.term} className="rounded-xl border border-[var(--color-border)] bg-[var(--color-paper-elevated)] p-3">
              <dt className="font-semibold text-sm">{t.term}</dt>
              <dd className="mt-1 text-xs text-[var(--color-ink-muted)]">{t.definition}</dd>
            </div>
          ))}
        </dl>
      </motion.section>

      <motion.section className="mt-12" {...sectionMotion}>
        <h2 className="font-display text-xl font-semibold">Quiz</h2>
        <p className="mt-2 text-sm text-[var(--color-ink-muted)]">Score 70% or higher to auto-mark this module complete.</p>
        <div className="mt-4">
          <Quiz
            questions={m.quiz}
            onComplete={(score, total) => {
              recordQuiz(m.slug, score, total);
            }}
          />
        </div>
      </motion.section>

      <motion.section className="mt-12 rounded-2xl border border-[var(--color-border)] bg-[var(--color-paper-elevated)] p-5 sm:p-6" {...sectionMotion}>
        <h2 className="font-display text-xl font-semibold inline-flex items-center gap-2">
          <Lightbulb className="text-[var(--color-warning)]" size={22} /> Apply it: {m.applyIt.title}
        </h2>
        <p className="mt-2 text-sm text-[var(--color-ink-muted)]">{m.applyIt.instructions}</p>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm">
          {m.applyIt.prompts.map((pr) => (
            <li key={pr}>{pr}</li>
          ))}
        </ol>
      </motion.section>

      <div className="mt-10 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => complete(m.slug)}
          className="rounded-xl border border-[var(--color-border)] px-4 py-2.5 text-sm font-medium hover:bg-[var(--color-sand)]"
        >
          Mark module complete
        </button>
      </div>

      <nav className="mt-12 flex flex-col gap-3 border-t border-[var(--color-border)] pt-8 sm:flex-row sm:justify-between">
        {prev ? (
          <Link to={`/module/${prev.slug}`} className="inline-flex items-center gap-2 rounded-xl border border-[var(--color-border)] px-4 py-3 text-sm hover:border-[var(--color-accent)]">
            <ArrowLeft size={16} />
            <span>
              <span className="block text-xs text-[var(--color-ink-muted)]">Previous</span>
              {prev.title}
            </span>
          </Link>
        ) : <span />}
        {next ? (
          <Link to={`/module/${next.slug}`} className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-accent)] px-4 py-3 text-sm font-semibold text-white hover:bg-[var(--color-accent-hover)] sm:ml-auto">
            <span>
              <span className="block text-xs text-white/80">Next</span>
              {next.title}
            </span>
            <ArrowRight size={16} />
          </Link>
        ) : null}
      </nav>
    </article>
  );
}
