import { useEffect, useRef, useState } from 'react';
import prefersReducedMotion from '../hooks/usePrefersReducedMotion.js';
import { profile } from '../data/content.js';

const PANELS = 7;
const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&';

function scramble(el, finalText, duration = 700) {
  if (!el) return;
  let frame = 0;
  const total = Math.ceil(duration / 16);
  const run = () => {
    const ratio = frame / total;
    el.textContent = finalText
      .split('')
      .map((ch, i) => {
        if (ch === ' ') return ' ';
        if (i / finalText.length < ratio) return ch;
        return CHARS[Math.floor(Math.random() * CHARS.length)];
      })
      .join('');
    frame++;
    if (frame <= total) requestAnimationFrame(run);
    else el.textContent = finalText;
  };
  requestAnimationFrame(run);
}

export default function Loader({ onDone }) {
  const [phase, setPhase] = useState('in');   // in → split → gone
  const [count, setCount] = useState(0);
  const nameRef = useRef(null);
  const tagRef = useRef(null);
  const countRef = useRef(null);
  const reduce = prefersReducedMotion();

  /* ── counter animation ── */
  useEffect(() => {
    if (reduce) { setCount(100); return; }
    let start = null;
    const dur = 1800;
    const step = (ts) => {
      if (!start) start = ts;
      const pct = Math.min((ts - start) / dur, 1);
      setCount(Math.floor(pct * 100));
      if (pct < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [reduce]);

  /* ── text scramble ── */
  useEffect(() => {
    if (reduce) return;
    const t1 = setTimeout(() => scramble(nameRef.current, profile.name, 800), 100);
    const t2 = setTimeout(() => scramble(tagRef.current, 'CS & Business Systems · Panimalar Engineering College', 600), 500);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [reduce]);

  /* ── trigger exit phases ── */
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('is-loading');

    const exitDelay = reduce ? 0 : 2200;
    const goneDelay = reduce ? 0 : exitDelay + 900;

    const t1 = setTimeout(() => {
      setPhase('split');
      root.classList.remove('is-loading');
      onDone();
    }, exitDelay);

    const t2 = setTimeout(() => setPhase('gone'), goneDelay);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      root.classList.remove('is-loading');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (phase === 'gone') return null;

  return (
    <div className={`ldr ldr--${phase}`} aria-hidden="true">
      {/* Vertical split panels */}
      <div className="ldr__panels">
        {Array.from({ length: PANELS }).map((_, i) => (
          <div
            key={i}
            className="ldr__panel"
            style={{ '--pi': i, '--pt': PANELS }}
          />
        ))}
      </div>

      {/* Grid lines overlay */}
      <div className="ldr__grid" aria-hidden="true" />

      {/* Content */}
      <div className="ldr__body">
        <div className="ldr__eyebrow">
          <span className="ldr__dot" />
          <span>Portfolio</span>
          <span className="ldr__year">© 2025</span>
        </div>

        <div className="ldr__name display" ref={nameRef}>
          {profile.name}
        </div>

        <div className="ldr__tag" ref={tagRef}>
          &nbsp;
        </div>

        <div className="ldr__foot">
          <div className="ldr__bar-wrap">
            <div className="ldr__bar-track">
              <div
                className="ldr__bar-fill"
                style={{ '--pct': `${count}%` }}
              />
            </div>
          </div>
          <div className="ldr__count" ref={countRef}>
            {String(count).padStart(3, '0')}
            <span>%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
