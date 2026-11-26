import { DATA, skills } from '../data';

export default function Skills() {
  const rows = DATA.learning.length ? [...skills, ['Learning now', DATA.learning.join(', ')]] : skills;
  return (
    <section className="sec" aria-labelledby="h-skills">
      <div className="wrap">
        <h2 id="h-skills" className="sticky">Skills</h2>
        <dl className="skills">
          {rows.map(([k, v]) => (
            <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
          ))}
        </dl>
      </div>
    </section>
  );
}
