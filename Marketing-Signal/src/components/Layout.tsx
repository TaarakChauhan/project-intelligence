import { Link, NavLink } from 'react-router-dom';
import { BookOpen, Home, Info, Menu, Moon, Search, Sun, X } from 'lucide-react';
import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';
import { useProgress } from '../hooks/useProgress';
import { modules } from '../content';
import PageTransition from './PageTransition';

export default function Layout() {
  const { theme, toggle } = useTheme();
  const { progress } = useProgress();
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const done = progress.completedModules.length;
  const pct = Math.round((done / modules.length) * 100);

  const nav = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/course', label: 'Course', icon: BookOpen },
    { to: '/glossary', label: 'Glossary', icon: BookOpen },
    { to: '/search', label: 'Search', icon: Search },
    { to: '/about', label: 'About', icon: Info },
  ];

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `rounded-lg px-3 py-2 text-sm font-medium transition ${
      isActive
        ? 'bg-[var(--color-accent-soft)] text-[var(--color-accent)]'
        : 'text-[var(--color-ink-muted)] hover:bg-[var(--color-sand)] hover:text-[var(--color-ink)]'
    }`;

  return (
    <div className="min-h-screen flex flex-col">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:m-2 focus:rounded-lg focus:bg-[var(--color-accent)] focus:px-3 focus:py-2 focus:text-white">
        Skip to content
      </a>
      <header className="sticky top-0 z-40 border-b border-[var(--color-border)] bg-[var(--color-paper)]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
          <Link to="/" className="flex items-center gap-2 min-w-0">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[var(--color-accent)] text-white font-display text-lg" aria-hidden>
              M
            </span>
            <div className="min-w-0">
              <div className="font-display text-base font-semibold leading-tight truncate">Marketing Signal</div>
              <div className="text-xs text-[var(--color-ink-muted)]">{done}/{modules.length} modules · {pct}%</div>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-1" aria-label="Main">
            {nav.map((n) => (
              <NavLink key={n.to} to={n.to} end={n.to === '/'} className={linkClass}>
                {n.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggle}
              className="rounded-lg border border-[var(--color-border)] p-2 text-[var(--color-ink-muted)] hover:bg-[var(--color-sand)]"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              type="button"
              className="md:hidden rounded-lg border border-[var(--color-border)] p-2"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label="Menu"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
        {open && (
          <nav className="md:hidden border-t border-[var(--color-border)] px-4 py-3 flex flex-col gap-1" aria-label="Mobile">
            {nav.map((n) => (
              <NavLink key={n.to} to={n.to} end={n.to === '/'} className={linkClass} onClick={() => setOpen(false)}>
                {n.label}
              </NavLink>
            ))}
          </nav>
        )}
        <div className="h-1 bg-[var(--color-sand)]" aria-hidden>
          <motion.div
            className="h-full bg-[var(--color-accent)]"
            initial={false}
            animate={{ width: `${pct}%` }}
            transition={{ duration: reduceMotion ? 0 : 0.45, ease: 'easeOut' }}
          />
        </div>
      </header>
      <main id="main" className="flex-1">
        <PageTransition />
      </main>
      <footer className="border-t border-[var(--color-border)] bg-[var(--color-paper-elevated)]">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-[var(--color-ink-muted)] flex flex-col gap-2 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} Marketing Signal — free OER. Content CC BY 4.0 · Code MIT.</p>
          <p>
            <Link to="/about" className="text-[var(--color-accent)] hover:underline">About & License</Link>
            {' · '}
            Independent educational resource — not affiliated with any commercial textbook publisher.
          </p>
        </div>
      </footer>
    </div>
  );
}
