import SectionHeader from '../components/SectionHeader.jsx';
import Reveal from '../components/Reveal.jsx';
import { extracurricular } from '../data/content.js';

export default function Extracurricular() {
  return (
    <section id="beyond" className="section beyond">
      <SectionHeader no="08" label="Beyond the classroom" lines={['Beyond the', 'classroom']} />

      <ul className="bey">
        {extracurricular.map((x, i) => (
          <Reveal as="li" className="bey__row" key={x.role} delay={i * 70}>
            <span className="bey__no">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="bey__role display">{x.role}</h3>
            <p className="bey__org">
              {x.org}
              {x.note && <span className="bey__note">{x.note}</span>}
            </p>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
