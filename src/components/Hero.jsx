import { DATA } from '../data';

export default function Hero() {
  const ext = { target: '_blank', rel: 'noopener noreferrer' };
  return (
    <header className="hero" id="top">
      <div className="wrap">
        <h1 className="rise">Dharshini S.</h1>
        <div className="hero-grid">
          <div className="rise d1">
            <p className="role">Aspiring Software Developer</p>
            <p>I’m a computer science student in Tiruchirappalli. I work mostly in Java and MySQL, and I’ve built a student records app and a tool that searches Gmail and Google Drive in one place. I like breaking problems into small steps, and I practise that on LeetCode.</p>
          </div>
          <ul className="links rise d2" aria-label="Profiles">
            <li><a href={DATA.github} {...ext}>GitHub</a></li>
            <li><a href={DATA.linkedin} {...ext}>LinkedIn</a></li>
            <li><a href={DATA.leetcode} {...ext}>LeetCode</a></li>
            <li><a href={`mailto:${DATA.email}`}>Email</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
}
