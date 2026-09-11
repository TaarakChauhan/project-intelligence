import { Link } from 'react-router-dom'
import { chapters } from '../data/chapters'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div>
          <p className="kicker" style={{ color: '#e7c9a4' }}>Money Atlas</p>
          <p>An original visual encyclopedia of how money works in firms, markets, states, and a household ledger.</p>
        </div>
        <ul className="footer-nav">
          {chapters.map((c) => (
            <li key={c.id}><Link to={`/chapter/${c.slug}`}>{c.roman}. {c.title}</Link></li>
          ))}
        </ul>
        <ul className="footer-nav">
          <li><Link to="/tools">Tools</Link></li>
          <li><Link to="/glossary">Glossary</Link></li>
          <li><Link to="/search">Search</Link></li>
        </ul>
        <p className="legal">Original educational work. Not financial advice. Not affiliated with any publisher.</p>
      </div>
    </footer>
  )
}
