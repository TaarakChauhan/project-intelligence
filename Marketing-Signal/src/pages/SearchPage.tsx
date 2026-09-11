import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { modules } from '../content';

export default function SearchPage() {
  const [q, setQ] = useState('');
  const results = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (!needle) return [];
    return modules
      .map((m) => {
        const hay = [
          m.title,
          m.subtitle,
          m.partTitle,
          ...m.objectives,
          ...m.keyTerms.map((t) => `${t.term} ${t.definition}`),
          ...m.sections.map((s) => s.title),
        ]
          .join(' ')
          .toLowerCase();
        const score = hay.includes(needle) ? 1 : 0;
        return { m, score };
      })
      .filter((r) => r.score > 0);
  }, [q]);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="font-display text-3xl font-bold">Search</h1>
      <label className="mt-6 block">
        <span className="sr-only">Search modules</span>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search titles, objectives, key terms…"
          autoFocus
          className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-paper-elevated)] px-4 py-3 text-sm outline-none focus:border-[var(--color-accent)]"
        />
      </label>
      <ul className="mt-8 space-y-3">
        {results.map(({ m }) => (
          <li key={m.slug}>
            <Link
              to={`/module/${m.slug}`}
              className="block rounded-xl border border-[var(--color-border)] bg-[var(--color-paper-elevated)] px-4 py-3 hover:border-[var(--color-accent)]"
            >
              <div className="text-xs text-[var(--color-accent)]">Module {m.number} · Part {m.part}</div>
              <div className="font-semibold">{m.title}</div>
              <div className="text-sm text-[var(--color-ink-muted)] line-clamp-2">{m.subtitle}</div>
            </Link>
          </li>
        ))}
      </ul>
      {q && results.length === 0 && <p className="mt-6 text-[var(--color-ink-muted)]">No modules matched.</p>}
      {!q && <p className="mt-6 text-[var(--color-ink-muted)]">Type to search across all 23 modules.</p>}
    </div>
  );
}
