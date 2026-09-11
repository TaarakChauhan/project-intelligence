import { HashRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Course from './pages/Course';
import ModulePage from './pages/ModulePage';
import Glossary from './pages/Glossary';
import About from './pages/About';
import SearchPage from './pages/SearchPage';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="course" element={<Course />} />
          <Route path="module/:slug" element={<ModulePage />} />
          <Route path="glossary" element={<Glossary />} />
          <Route path="about" element={<About />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
