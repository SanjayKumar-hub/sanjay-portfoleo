import SectionHeader from '../components/SectionHeader.jsx';
import Reveal from '../components/Reveal.jsx';
import { experience } from '../data/content.js';

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <SectionHeader no="02" label="Experience" lines={['Where I’ve', 'interned']} />

      <ol className="xp">
        {experience.map((e, i) => (
          <Reveal as="li" key={e.no} className="xp__item" delay={i * 80}>
            <span className="xp__no display">{e.no}</span>
            <div className="xp__main">
              <h3 className="xp__title display">{e.title}</h3>
              <p className="xp__org">
                {e.org}
                {e.place ? `, ${e.place}` : ''}
              </p>
            </div>
            <p className="xp__dates">{e.dates}</p>
            <div className="xp__detail">
              {e.intro && <p className="xp__intro">{e.intro}</p>}
              <ul>
                {e.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
