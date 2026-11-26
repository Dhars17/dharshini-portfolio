import photo from '../assets/photo.jpg';

export default function About() {
  return (
    <section className="sec" id="about" aria-labelledby="h-about">
      <div className="wrap">
        <h2 id="h-about" className="sticky">About</h2>
        <div className="about">
          <div>
            <p>I’m studying B.E. Computer Science and Engineering at Kongunadu College of Engineering and Technology (2023 to present), with a CGPA of 8.39.</p>
            <p>My start in web development was an internship, where I learned HTML and CSS and built static websites. From there I moved to Java and MySQL, then to working with the Gmail and Google Drive APIs and adding user authentication.</p>
            <p>Alongside projects, I practise data structures and algorithms on LeetCode in Java. I also completed IIT Spoken Tutorial training in Java and RDBMS. My goal is an entry-level Java or software developer role where I can keep growing towards full-stack work.</p>
          </div>
          <figure>
            <img src={photo} alt="Portrait of Dharshini S" width="230" loading="lazy" decoding="async" />
            <figcaption>Dharshini S, Tiruchirappalli</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
