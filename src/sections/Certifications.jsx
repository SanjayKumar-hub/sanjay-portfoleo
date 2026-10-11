import SectionHeader from '../components/SectionHeader.jsx';
import Reveal from '../components/Reveal.jsx';
import { certifications } from '../data/content.js';

export default function Certifications() {
  return (
    <section id="certifications" className="section certs">
      <SectionHeader no="07" label="Certifications" lines={['Certifications', '& training']} />

      <ul className="certs__grid">
        {certifications.map((c, i) => (
          <Reveal as="li" className="cert" key={`${c.title}-${c.issuer}`} delay={i * 90}>
            <span className="cert__issuer">{c.issuer}</span>
            <h3 className="cert__title display">{c.title}</h3>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
