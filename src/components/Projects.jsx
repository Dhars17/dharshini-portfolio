import { DATA, projects } from '../data';

function Diagram() {
  return (
    <svg className="diagram" viewBox="0 0 360 150" role="img" aria-label="Gmail and Google Drive both feed into one search">
      <rect x="1" y="10" width="110" height="44" fill="none" stroke="#1E1D1B" />
      <text x="56" y="37" textAnchor="middle">Gmail</text>
      <rect x="1" y="96" width="110" height="44" fill="none" stroke="#1E1D1B" />
      <text x="56" y="123" textAnchor="middle">Google Drive</text>
      <path d="M111 32 C170 32 170 75 229 75 M111 118 C170 118 170 75 229 75" fill="none" stroke="#BF3A21" strokeWidth="1.5" />
      <rect x="229" y="53" width="130" height="44" fill="#1E1D1B" />
      <text x="294" y="80" textAnchor="middle" style={{ fill: '#F6F1E7' }}>One search</text>
    </svg>
  );
}

function Crud() {
  return (
    <div className="crud" aria-hidden="true">
      <span>C</span><span>R</span><span>U</span><span>D</span>
    </div>
  );
}

function Facts({ items }) {
  return (
    <dl className="facts">
      {items.map(([k, v]) => (
        <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
      ))}
    </dl>
  );
}

export default function Projects() {
  return (
    <section className="projects" id="projects" aria-labelledby="h-proj">
      <div className="wrap">
        <h2 id="h-proj">Projects</h2>
        {projects.map((p, i) => (
          <article key={p.title} className={`proj${i % 2 ? ' flip' : ''}`}>
            <div className="pl">
              <h3>{p.title}</h3>
              <p className="year">{p.meta}</p>
              {p.visual === 'diagram' ? <Diagram /> : <Crud />}
            </div>
            <Facts items={p.facts} />
          </article>
        ))}
        <p className="plinks" style={{ borderTop: '1px solid var(--rule)', padding: '24px 0 8px', margin: 0 }}>
          <a href={`${DATA.github}?tab=repositories`} target="_blank" rel="noopener noreferrer">Source code on GitHub</a>
        </p>
      </div>
    </section>
  );
}
