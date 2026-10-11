import SectionHeader from '../components/SectionHeader.jsx';
import Reveal from '../components/Reveal.jsx';
import { skills, softSkills } from '../data/content.js';

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <SectionHeader no="04" label="Skills" lines={['What I', 'work with']} />

      <div className="skills__groups">
        {skills.map((g, i) => (
          <Reveal as="div" className="sg" key={g.label} delay={i * 50}>
            <h3 className="sg__label">{g.label}</h3>
            <ul className="sg__items">
              {g.items.map((it) => (
                <li key={it.name} className="sg__item">
                  <span className="sg__name">{it.name}</span>
                  {it.note && <sup className="sg__note">{it.note}</sup>}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <Reveal as="div" className="soft">
        <h3 className="sg__label">Soft skills</h3>
        <ul className="soft__list">
          {softSkills.map((s) => (
            <li key={s} className="soft__item display">
              {s}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
