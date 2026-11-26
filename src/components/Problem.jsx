import { DATA } from '../data';
import shot from '../assets/leetcode.jpg';

export default function Problem() {
  const s = DATA.leetcodeStats;
  const parts = [['Easy', s.easy], ['Medium', s.medium], ['Hard', s.hard]].filter(([, n]) => n != null);
  const ext = { target: '_blank', rel: 'noopener noreferrer' };
  return (
    <section className="sec" aria-labelledby="h-lc">
      <div className="wrap">
        <h2 id="h-lc" className="sticky">Problem solving</h2>
        <div>
          <div className="lc">
            <div><span className="big">{s.total}</span><small>LeetCode problems solved in Java</small></div>
            {parts.map(([k, n]) => (
              <div key={k}>{k} <strong>{n}</strong></div>
            ))}
          </div>
          <p style={{ marginTop: 16 }}><a href={DATA.leetcode} {...ext}>View my LeetCode profile</a></p>
          <figure className="lcshot">
            <a href={DATA.leetcode} {...ext}>
              <img src={shot} alt="Screenshot of my LeetCode profile: 226 problems solved, 176 easy, 48 medium, 2 hard" loading="lazy" decoding="async" />
            </a>
            <figcaption>Screenshot of my LeetCode profile</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
