import { useEffect, useState } from 'react';
import prefersReducedMotion from '../hooks/usePrefersReducedMotion.js';
import { profile } from '../data/content.js';

/** Page-load curtain. Calls onDone() when the curtain starts lifting so the hero can reveal. */
export default function Loader({ onDone }) {
  const [phase, setPhase] = useState('in'); // in → out → gone

  useEffect(() => {
    const reduce = prefersReducedMotion();
    const root = document.documentElement;
    root.classList.add('is-loading');
    const t1 = setTimeout(
      () => {
        setPhase('out');
        root.classList.remove('is-loading');
        onDone();
      },
      reduce ? 0 : 1200
    );
    const t2 = setTimeout(() => setPhase('gone'), reduce ? 0 : 2100);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      root.classList.remove('is-loading');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (phase === 'gone') return null;

  return (
    <div className={`loader loader--${phase}`} aria-hidden="true">
      <div className="loader__name display">{profile.name}</div>
      <div className="loader__bar">
        <span />
      </div>
    </div>
  );
}
