import MaskLines from '../components/MaskLines.jsx';
import RollText from '../components/RollText.jsx';
import Marquee from '../components/Marquee.jsx';
import { profile } from '../data/content.js';

export default function Hero({ ready }) {
  return (
    <section className={`hero ${ready ? 'is-ready' : ''}`.trim()} aria-label="Introduction">
      <div className="hero__top">
        <span>
          {profile.college}, {profile.city}
        </span>
        <span>B.Tech · 2023–2027</span>
      </div>

      {/* Name + Photo side-by-side */}
      <div className="hero__main">
        <h1 className="hero__name display" aria-label={profile.name}>
          <span className="mask" style={{ '--i': 0 }}>
            <span>Sanjay</span>
          </span>
          <span className="mask" style={{ '--i': 1 }}>
            <span>
              Kumar<em className="hero__initial">S</em>
            </span>
          </span>
        </h1>

        <div className="hero__photo-wrap">
          <img
            src="/sanjay-photo.jpg"
            alt="Sanjay Kumar S"
            className="hero__photo"
          />
        </div>
      </div>

      <div className="hero__bottom">
        <MaskLines as="p" className="hero__role" lines={profile.roleLines} active={ready} delay={500} />
        <p className="hero__intro">{profile.intro}</p>
        <div className="hero__cta">
          <a className="btn btn--solid" href="#projects">
            <RollText>View my work</RollText>
          </a>
          <a className="btn" href="#contact">
            <RollText>Let's connect</RollText>
          </a>
        </div>
      </div>

      <Marquee />
    </section>
  );
}
