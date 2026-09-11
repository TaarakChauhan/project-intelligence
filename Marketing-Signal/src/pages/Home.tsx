import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, GraduationCap, Sparkles } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { modules, parts } from '../content';
import { useProgress } from '../hooks/useProgress';
import ModuleCard from '../components/ModuleCard';

export default function Home() {
  const { progress, isComplete } = useProgress();
  const continueSlug = progress.lastVisited || modules[0].slug;
  const featured = modules.slice(0, 3);
  const reduceMotion = useReducedMotion();

  const fadeUp = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 14 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.4, delay, ease: 'easeOut' as const },
        };

  return (
    <div>
      <section className="relative overflow-hidden border-b border-[var(--color-border)]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-accent-soft),_transparent_55%),radial-gradient(ellipse_at_bottom_left,_var(--color-coral-soft),_transparent_50%)]" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-24">
          <motion.p
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-paper-elevated)] px-3 py-1 text-xs font-medium text-[var(--color-accent)]"
            {...fadeUp(0)}
          >
            <Sparkles size={14} /> Free forever · Open educational resource
          </motion.p>
          <motion.h1
            className="mt-5 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl"
            {...fadeUp(0.06)}
          >
            Marketing Signal
          </motion.h1>
          <motion.p
            className="mt-5 max-w-2xl text-lg text-[var(--color-ink-muted)] leading-relaxed"
            {...fadeUp(0.12)}
          >
            A free course on the work of marketing — value, research, buyers, brands, offers, channels, and communications — with original lessons, quizzes, and fictional cases. Built as an open educational resource for self-learners, students, and practitioners.
          </motion.p>
          <motion.div className="mt-8 flex flex-wrap gap-3" {...fadeUp(0.18)}>
            <Link
              to={`/module/${continueSlug}`}
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-white hover:bg-[var(--color-accent-hover)]"
            >
              {progress.lastVisited ? 'Continue learning' : 'Start module 1'} <ArrowRight size={16} />
            </Link>
            <Link
              to="/course"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-paper-elevated)] px-5 py-3 text-sm font-semibold hover:bg-[var(--color-sand)]"
            >
              <BookOpen size={16} /> Course overview
            </Link>
          </motion.div>
          <dl className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              ['23', 'Full modules'],
              ['8', 'Curriculum parts'],
              ['100%', 'Original lessons'],
              ['CC BY', 'Content license'],
            ].map(([k, v], i) => (
              <motion.div
                key={v}
                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-paper-elevated)]/80 p-4"
                {...fadeUp(0.22 + i * 0.05)}
              >
                <dt className="text-2xl font-display font-bold text-[var(--color-accent)]">{k}</dt>
                <dd className="text-sm text-[var(--color-ink-muted)]">{v}</dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h2 className="font-display text-2xl font-semibold">How it works</h2>
            <p className="mt-2 text-[var(--color-ink-muted)] max-w-xl">Each module includes objectives, substantial lessons, definition callouts, a fictional mini-case, key terms, a scored quiz, and an apply-it exercise. Progress and quiz scores save in your browser.</p>
          </div>
          <GraduationCap className="text-[var(--color-coral)]" size={36} aria-hidden />
        </div>
        <ol className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            ['Learn', 'Read original teaching sections written for clarity—not paraphrased from commercial texts.'],
            ['Practice', 'Work through mini-cases and apply-it prompts with fictional companies like Northline Outdoors.'],
            ['Check', 'Take 6–8 question quizzes with explanations; mark modules complete as you go.'],
          ].map(([t, d], i) => (
            <li key={t} className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-paper-elevated)] p-5">
              <span className="text-xs font-semibold uppercase tracking-wide text-[var(--color-accent)]">Step {i + 1}</span>
              <h3 className="mt-1 font-display text-lg font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-[var(--color-ink-muted)]">{d}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-y border-[var(--color-border)] bg-[var(--color-paper-elevated)]">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="font-display text-2xl font-semibold">Curriculum map</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {parts.map((p) => (
              <Link key={p.part} to="/course" className="rounded-xl border border-[var(--color-border)] bg-[var(--color-paper)] px-4 py-3 hover:border-[var(--color-accent)]">
                <div className="text-xs font-semibold text-[var(--color-accent)]">Part {p.part}</div>
                <div className="font-medium">{p.title}</div>
                <div className="text-xs text-[var(--color-ink-muted)]">{p.modules.length} modules</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="font-display text-2xl font-semibold">Start here</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {featured.map((m, i) => (
            <ModuleCard key={m.slug} module={m} complete={isComplete(m.slug)} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
