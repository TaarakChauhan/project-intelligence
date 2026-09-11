import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { buildGlossary } from '../content';

export default function Glossary() {
  const all = useMemo(() => buildGlossary(), []);
  const [q, setQ] = useState('');
  const filtered = all.filter(
    (t) =>
      t.term.toLowerCase().includes(q.toLowerCase()) ||
      t.definition.toLowerCase().includes(q.toLowerCase())
  );
  const letters = [...new Set(filtered.map((t) => t.term[0].toUpperCase()))].sort();

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="font-display text-3xl font-bold">Glossary</h1>
      <p className="mt-2 text-[var(--color-ink-muted)]">{all.length} terms from across the curriculum.</p>
      <label className="mt-6 block">
        <span className="sr-only">Filter glossary</span>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Filter terms…"
          className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-paper-elevated)] px-4 py-3 text-sm outline-none focus:border-[var(--color-accent)]"
        />
      </label>
      <div className="mt-8 space-y-8">
        {letters.map((L) => (
          <section key={L} aria-labelledby={`letter-${L}`}>
            <h2 id={`letter-${L}`} className="font-display text-xl font-semibold text-[var(--color-accent)]">{L}</h2>
            <dl className="mt-3 space-y-4">
              {filtered
                .filter((t) => t.term[0].toUpperCase() === L)
                .map((t) => (
                  <div key={t.term} className="rounded-xl border border-[var(--color-border)] bg-[var(--color-paper-elevated)] p-4">
                    <dt className="font-semibold">{t.term}</dt>
                    <dd className="mt-1 text-sm text-[var(--color-ink-muted)]">{t.definition}</dd>
                    <dd className="mt-2 text-xs">
                      <Link to={`/module/${t.moduleSlug}`} className="text-[var(--color-accent)] hover:underline">
                        See: {t.moduleTitle}
                      </Link>
                    </dd>
                  </div>
                ))}
            </dl>
          </section>
        ))}
        {filtered.length === 0 && <p className="text-[var(--color-ink-muted)]">No matches.</p>}
      </div>
    </div>
  );
}
