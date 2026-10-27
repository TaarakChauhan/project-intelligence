import { useState, type FormEvent } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

import { chapters } from '../data/chapters'

export function Nav() {
  const [q, setQ] = useState('')
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const onSearch = (e: FormEvent) => {
    e.preventDefault()
    const query = q.trim()
    navigate(query ? `/search?q=${encodeURIComponent(query)}` : '/search')
    setOpen(false)
  }

  return (
    <header className={`site-nav${open ? ' is-open' : ''}`}>
      <a
        className="skip"
        href="#main"
        onClick={(e) => {
          e.preventDefault()
          document.getElementById('main')?.focus()
        }}
      >
        Skip to content
      </a>
      <div className="site-nav__inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <svg className="brand__mark" viewBox="0 0 64 64" aria-hidden="true">
            <rect width="64" height="64" rx="8" fill="#16161c" />
            <circle cx="32" cy="32" r="20" fill="none" stroke="#c9a96e" strokeWidth="1.5" />
            <ellipse cx="32" cy="32" rx="8" ry="20" fill="none" stroke="#c9a96e" strokeWidth="1.2" />
            <line x1="12" y1="32" x2="52" y2="32" stroke="#c9a96e" strokeWidth="1.2" />
            <circle cx="32" cy="32" r="3" fill="#e7c48a" />
          </svg>
          <span>
            <span className="brand__name">Money Atlas</span>
            <span className="brand__sub">A visual encyclopedia</span>
          </span>
        </Link>
        <button className="menu-toggle" type="button" aria-controls="atlas-nav-links" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
          {open ? 'Close' : 'Menu'}
        </button>
        <ul className="nav-links" id="atlas-nav-links">
          {chapters.map((c) => (
            <li key={c.id}>
              <NavLink to={`/chapter/${c.slug}`} onClick={() => setOpen(false)}>
                {c.title}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink to="/tools" onClick={() => setOpen(false)}>Tools</NavLink>
          </li>
          <li>
            <NavLink to="/glossary" onClick={() => setOpen(false)}>Glossary</NavLink>
          </li>
        </ul>
        <form className="search-field" onSubmit={onSearch} role="search">
          <span aria-hidden="true">⌕</span>
          <input
            type="search"
            name="q"
            placeholder="Search the atlas"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            aria-label="Search articles and glossary"
          />
        </form>
      </div>
    </header>
  )
}
