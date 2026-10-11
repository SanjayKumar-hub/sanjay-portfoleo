import { useState } from 'react';
import Loader from './components/Loader.jsx';
import Cursor from './components/Cursor.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Experience from './sections/Experience.jsx';
import Projects from './sections/Projects.jsx';
import Skills from './sections/Skills.jsx';
import Research from './sections/Research.jsx';
import Education from './sections/Education.jsx';
import Certifications from './sections/Certifications.jsx';
import Extracurricular from './sections/Extracurricular.jsx';
import Contact from './sections/Contact.jsx';

export default function App() {
  const [ready, setReady] = useState(false);

  return (
    <>
      <Loader onDone={() => setReady(true)} />
      <Cursor />
      <Navbar />
      <main id="top">
        <Hero ready={ready} />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Research />
        <Education />
        <Certifications />
        <Extracurricular />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
