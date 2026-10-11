import MaskLines from '../components/MaskLines.jsx';
import Reveal from '../components/Reveal.jsx';
import RollText from '../components/RollText.jsx';
import ExternalLink from '../components/ExternalLink.jsx';
import { profile, socialLinks } from '../data/content.js';

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="contact__bar">
        <span>Contact</span>
        <span>Let’s talk</span>
      </div>

      <MaskLines as="h2" className="contact__title display" lines={['Let’s build', 'something', 'meaningful.']} />

      <Reveal as="div" className="contact__grid">
        <div>
          <h3 className="contact__label">Email</h3>
          <a className="contact__big" href={`mailto:${profile.email}`} data-cursor="Write">
            <RollText>{profile.email}</RollText>
          </a>
        </div>
        <div>
          <h3 className="contact__label">Phone</h3>
          <a className="contact__big" href={profile.phoneHref}>
            <RollText>{profile.phone}</RollText>
          </a>
        </div>
        <div>
          <h3 className="contact__label">Elsewhere</h3>
          <ul className="contact__links">
            {socialLinks.map((l) => (
              <li key={l.label}>
                <ExternalLink label={l.label} url={l.url} />
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
