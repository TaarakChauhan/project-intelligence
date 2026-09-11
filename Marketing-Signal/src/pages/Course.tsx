import { motion, useReducedMotion } from 'framer-motion';
import { parts } from '../content';
import ModuleCard from '../components/ModuleCard';
import { useProgress } from '../hooks/useProgress';

export default function Course() {
  const { isComplete, progress } = useProgress();
  const reduceMotion = useReducedMotion();

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <motion.h1
        className="font-display text-3xl font-bold"
        initial={reduceMotion ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.35 }}
      >
        Course overview
      </motion.h1>
      <p className="mt-3 max-w-2xl text-[var(--color-ink-muted)]">
        Eight parts · 23 modules. Progress is stored locally in your browser ({progress.completedModules.length} completed).
      </p>
      <div className="mt-10 space-y-12">
        {parts.map((p) => (
          <section key={p.part} aria-labelledby={`part-${p.part}`}>
            <h2 id={`part-${p.part}`} className="font-display text-xl font-semibold">
              <span className="text-[var(--color-accent)]">Part {p.part}</span> · {p.title}
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {p.modules.map((m, i) => (
                <ModuleCard key={m.slug} module={m} complete={isComplete(m.slug)} index={i} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
