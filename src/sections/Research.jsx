import SectionHeader from '../components/SectionHeader.jsx';
import Reveal from '../components/Reveal.jsx';
import FluidLines from '../components/FluidLines.jsx';
import { research } from '../data/content.js';

export default function Research() {
  return (
    <section id="research" className="section research">
      <FluidLines />
      <SectionHeader no="05" label="Research" lines={['Research', '& publication']} inverted />

      <Reveal as="article" className="paper">
        <div className="paper__meta">
          <span>{research.type}</span>
          <span>{research.years}</span>
          <span>{research.institution}</span>
        </div>

        <h3 className="paper__title">{research.title}</h3>

        <div className="paper__body">
          <div>
            <h4 className="paper__h">Research focus</h4>
            <p className="paper__text">{research.focus}</p>
          </div>
          <div>
            <h4 className="paper__h">Keywords</h4>
            <ul className="paper__kw">
              {research.keywords.map((k) => (
                <li key={k}>{k}</li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
