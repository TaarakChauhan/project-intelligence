import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 prose-lesson">
      <h1 className="font-display text-3xl font-bold !mt-0">About & License</h1>
      <p>
        <strong>Marketing Signal</strong> is an independent, free open educational resource. It covers the usual ground of a marketing-management course — value, research, buyers, brands, offers, channels, and communications — because those are the decisions marketers actually make.
      </p>
      <p>
        The lessons, quizzes, and fictional cases (Northline Outdoors, Cedar &amp; Salt Foods, Harborlight Home Finance) were written for this site. A commercial textbook such as Kotler &amp; Keller’s <em>Marketing Management</em> treats a similar map of topics; this course is a separate teaching text, not a substitute for that book and not affiliated with its authors or publisher.
      </p>
      <h2>Optional companion reading</h2>
      <p>
        If you want a standard textbook beside this course, widely used titles exist and can be bought separately. You do not need one to finish these modules.
      </p>
      <h2>Affiliation</h2>
      <p>
        This project is not affiliated with, endorsed by, or sponsored by Philip Kotler, Kevin Lane Keller, Pearson, or any other textbook author or publisher.
      </p>
      <h2>Licenses</h2>
      <ul>
        <li><strong>Educational content</strong> (lesson text, quizzes, cases, glossary): licensed under <a className="text-[var(--color-accent)] underline" href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noreferrer">Creative Commons Attribution 4.0 International (CC BY 4.0)</a>. You may share and adapt with attribution.</li>
        <li><strong>Software code</strong> (React app, components, tooling): licensed under the <strong>MIT License</strong>. See the LICENSE file in the project repository.</li>
      </ul>
      <h2>Attribution suggestion</h2>
      <p>
        “Marketing Signal (CC BY 4.0 content; MIT code) — free open educational resource.”
      </p>
      <h2>Privacy</h2>
      <p>
        Progress and quiz scores are stored in your browser’s localStorage only. No account is required. Clearing site data resets progress.
      </p>
      <p>
        <Link to="/course" className="text-[var(--color-accent)] underline">Browse the course</Link>
      </p>
    </div>
  );
}
