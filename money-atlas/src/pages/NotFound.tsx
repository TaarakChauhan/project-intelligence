import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <section className="not-found wrap">
      <p className="roman-giant">404</p>
      <h1>This square is blank</h1>
      <p>No article, chapter, or tool lives at this address. The atlas is finite on purpose.</p>
      <p>
        <Link to="/">Return to the nameplate</Link>
        {' · '}
        <Link to="/search">Search</Link>
        {' · '}
        <Link to="/glossary">Glossary</Link>
      </p>
    </section>
  )
}
