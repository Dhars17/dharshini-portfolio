import { timeline } from '../data';
import hackathon from '../assets/hackathon.jpg';

export default function Experience() {
  return (
    <section className="sec" id="experience" aria-labelledby="h-exp">
      <div className="wrap">
        <h2 id="h-exp" className="sticky">Experience and achievements</h2>
        <ol className="tl">
          {timeline.map(([kind, title, text, hasPhoto]) => (
            <li key={title}>
              <span className="k">{kind}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
                {hasPhoto && (
                  <figure className="tlimg">
                    <img src={hackathon} alt="Participants working on laptops in a large hall during the hackathon" loading="lazy" decoding="async" />
                    <figcaption>At the hackathon</figcaption>
                  </figure>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
