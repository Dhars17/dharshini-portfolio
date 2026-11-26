import { DATA } from '../data';

export default function Contact() {
  const ext = { target: '_blank', rel: 'noopener noreferrer' };
  return (
    <section className="sec contact" id="contact" aria-labelledby="h-contact">
      <div className="wrap" style={{ display: 'block' }}>
        <h2 id="h-contact">Let’s talk about software.</h2>
        <p style={{ marginTop: 24 }}>I’m looking for an entry-level role and always happy to hear from developers and recruiters. A short message is welcome.</p>
        <ul>
          <li><a href={`mailto:${DATA.email}`}>{DATA.email}</a></li>
          <li><a href={DATA.github} {...ext}>github.com/Dhars17</a></li>
          <li><a href={DATA.linkedin} {...ext}>linkedin.com/in/dharshini-s-559a03325</a></li>
        </ul>
      </div>
    </section>
  );
}
