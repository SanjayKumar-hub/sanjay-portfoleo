import SectionHeader from '../components/SectionHeader.jsx';
import Reveal from '../components/Reveal.jsx';
import { about } from '../data/content.js';

export default function About() {
  return (
    <section id="about" className="section about">
      <SectionHeader no="01" label="About" lines={['Who I', 'am']} />

      {/* Main 3-col grid: lead | side content | photo */}
      <div className="about__grid">
        <Reveal as="div" className="about__lead">
          {about.lead.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Reveal>

        <Reveal as="div" className="about__side" delay={120}>
          <p className="about__body">{about.body}</p>

          <dl className="about__facts">
            {about.facts.map((f) => (
              <div key={f.k}>
                <dt>{f.k}</dt>
                <dd>{f.v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* Photo column on the far right */}
        <Reveal as="div" className="about__photo-col" delay={200}>
          <div className="about__photo-frame">
            <img
              src="/sanjay-photo.jpg"
              alt="Sanjay Kumar S"
              className="about__photo"
            />
          </div>
        </Reveal>
      </div>

      <Reveal as="ul" className="about__interests" aria-label="Areas of interest">
        {about.interests.map((item, i) => (
          <li key={item} style={{ '--i': i }}>
            <span className="about__ix">{String(i + 1).padStart(2, '0')}</span>
            <span className="about__it">{item}</span>
          </li>
        ))}
      </Reveal>
    </section>
  );
}
