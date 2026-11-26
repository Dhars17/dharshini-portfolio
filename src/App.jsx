import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Problem from './components/Problem.jsx';
import Experience from './components/Experience.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  return (
    <>
      <a className="skip" href="#about">Skip to content</a>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Problem />
        <Experience />
        <Contact />
      </main>
      <footer><div className="wrap">Dharshini S, Tiruchirappalli, Tamil Nadu</div></footer>
    </>
  );
}
