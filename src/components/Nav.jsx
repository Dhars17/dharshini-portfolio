import { DATA } from '../data';

export default function Nav() {
  return (
    <nav aria-label="Main">
      <div className="wrap">
        <a className="mark" href="#top">Dharshini S.</a>
        <ul>
          <li className="hide"><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li className="hide"><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a className="res" href={DATA.resume} download>Resume (PDF)</a></li>
        </ul>
      </div>
    </nav>
  );
}
