import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-16 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-accent)]">404</p>
      <h1 className="mt-3 font-display text-3xl font-bold">This lesson is not on the map</h1>
      <p className="mt-3 text-[var(--color-ink-muted)]">
        That address does not match a module, glossary page, or course view.
      </p>
      <p className="mt-6 flex flex-wrap justify-center gap-3">
        <Link to="/" className="rounded-xl bg-[var(--color-accent)] px-4 py-2 text-sm font-semibold text-white">
          Home
        </Link>
        <Link to="/course" className="rounded-xl border border-[var(--color-border)] px-4 py-2 text-sm font-semibold">
          Course overview
        </Link>
      </p>
    </div>
  );
}
