import { Link } from 'react-router-dom';
import { CheckCircle2, Clock } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import type { ModuleContent } from '../types/module';

const MotionLink = motion.create(Link);

export default function ModuleCard({
  module: m,
  complete,
  index = 0,
}: {
  module: ModuleContent;
  complete?: boolean;
  index?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <MotionLink
      to={`/module/${m.slug}`}
      className="group flex flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-paper-elevated)] p-5 shadow-sm hover:border-[var(--color-accent)]"
      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.35, delay: reduceMotion ? 0 : index * 0.04, ease: 'easeOut' }}
      whileHover={reduceMotion ? undefined : { y: -4, boxShadow: '0 10px 24px -8px rgba(13, 122, 111, 0.25)' }}
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
    >
      <div className="flex items-start justify-between gap-2">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-accent-soft)] text-sm font-semibold text-[var(--color-accent)]">
          {m.number}
        </span>
        {complete && <CheckCircle2 className="text-[var(--color-success)]" size={20} aria-label="Completed" />}
      </div>
      <h3 className="mt-3 font-display text-lg font-semibold leading-snug group-hover:text-[var(--color-accent)]">{m.title}</h3>
      <p className="mt-2 flex-1 text-sm text-[var(--color-ink-muted)] line-clamp-3">{m.subtitle}</p>
      <div className="mt-4 flex items-center gap-2 text-xs text-[var(--color-ink-muted)]">
        <Clock size={14} /> {m.readTimeMinutes} min · Part {m.part}
      </div>
    </MotionLink>
  );
}
