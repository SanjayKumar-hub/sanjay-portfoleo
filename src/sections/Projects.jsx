import { useCallback, useEffect, useRef, useState } from 'react';
import SectionHeader from '../components/SectionHeader.jsx';
import FloodVisual from '../components/FloodVisual.jsx';
import SwarmVisual from '../components/SwarmVisual.jsx';
import RollText from '../components/RollText.jsx';
import { projects } from '../data/content.js';

export default function Projects() {
  const scroller = useRef(null);
  const drag = useRef({ down: false, x: 0, left: 0, moved: false });
  const [progress, setProgress] = useState(0);
  const [index, setIndex] = useState(0);

  const update = useCallback(() => {
    const el = scroller.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
    const first = el.querySelector('.proj');
    if (first) {
      const step = first.offsetWidth + parseFloat(getComputedStyle(el).columnGap || 0);
      setIndex(Math.min(projects.length - 1, Math.round(el.scrollLeft / step)));
    }
  }, []);

  useEffect(() => {
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [update]);

  const go = (dir) => {
    const el = scroller.current;
    const first = el.querySelector('.proj');
    const step = first.offsetWidth + parseFloat(getComputedStyle(el).columnGap || 0);
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  // Mouse-drag to scroll (touch uses native scrolling + snap).
  const onDown = (e) => {
    if (e.pointerType !== 'mouse') return;
    const el = scroller.current;
    drag.current = { down: true, x: e.clientX, left: el.scrollLeft, moved: false };
    el.classList.add('is-dragging');
  };
  const onMove = (e) => {
    const d = drag.current;
    if (!d.down) return;
    const dx = e.clientX - d.x;
    if (Math.abs(dx) > 3) d.moved = true;
    scroller.current.scrollLeft = d.left - dx;
  };
  const onUp = () => {
    drag.current.down = false;
    scroller.current.classList.remove('is-dragging');
  };

  return (
    <section id="projects" className="section projects">
      <SectionHeader no="03" label="Selected work" lines={['Selected', 'work']} />

      <div className="projects__controls">
        <span className="projects__hint">Scroll sideways</span>
        <span className="projects__count">
          {String(index + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
        </span>
        <div className="projects__btns">
          <button type="button" className="round" onClick={() => go(-1)} aria-label="Previous project" disabled={index === 0}>
            <RollText>←</RollText>
          </button>
          <button
            type="button"
            className="round"
            onClick={() => go(1)}
            aria-label="Next project"
            disabled={index === projects.length - 1}
          >
            <RollText>→</RollText>
          </button>
        </div>
      </div>

      <div
        className="projects__scroller"
        ref={scroller}
        onScroll={update}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerLeave={onUp}
        data-cursor="Drag"
        tabIndex={0}
        aria-label="Projects, scroll horizontally"
      >
        {projects.map((p) => (
          <article className={`proj proj--${p.kind}`} key={p.no}>
            <div className="proj__visual">
              <span className="proj__badge">{p.badge}</span>
              <span className="proj__year">{p.year}</span>
              {p.kind === 'flood' ? <FloodVisual /> : <SwarmVisual />}
            </div>

            <div className="proj__text">
              <span className="proj__no display">№{p.no}</span>
              <div>
                <h3 className="proj__title display">{p.title}</h3>
                <p className="proj__sub">{p.subtitle}</p>
              </div>
              <p className="proj__desc">{p.description}</p>
              <ul className="proj__tags">
                {p.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <p className="proj__inst">{p.institution}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="projects__progress" aria-hidden="true">
        <span style={{ transform: `scaleX(${0.2 + progress * 0.8})` }} />
      </div>
    </section>
  );
}
