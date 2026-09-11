import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { ArticlePage } from './pages/Article'
import { ChapterPage } from './pages/Chapter'
import { GlossaryPage } from './pages/Glossary'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { SearchPage } from './pages/Search'
import { ToolsPage } from './pages/Tools'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/chapter/:slug" element={<ChapterPage />} />
          <Route path="/article/:slug" element={<ArticlePage />} />
          <Route path="/tools" element={<ToolsPage />} />
          <Route path="/glossary" element={<GlossaryPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
