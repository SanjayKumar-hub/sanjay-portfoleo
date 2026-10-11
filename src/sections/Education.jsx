import SectionHeader from '../components/SectionHeader.jsx';
import Reveal from '../components/Reveal.jsx';
import { education } from '../data/content.js';

export default function Education() {
  return (
    <section id="education" className="section education">
      <SectionHeader no="06" label="Education" lines={['Where I', 'studied']} />

      <ol className="edu">
        {education.map((e, i) => (
          <Reveal as="li" className="edu__row" key={e.years} delay={i * 80}>
            <span className="edu__years display">{e.years}</span>
            <div className="edu__main">
              <h3 className="edu__title">{e.title}</h3>
              <p className="edu__school">{e.school}</p>
            </div>
            <span className="edu__score">{e.score}</span>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
