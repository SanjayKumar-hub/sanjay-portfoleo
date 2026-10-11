import { useEffect, useRef } from 'react';
import prefersReducedMotion from '../hooks/usePrefersReducedMotion.js';

/**
 * A soft ring that trails the mouse and grows over links/buttons.
 * Elements with data-cursor="Drag" show that label inside the ring.
 * Only mounts behaviour on devices with a fine pointer; the native cursor is never hidden.
 */
export default function Cursor() {
  const ring = useRef(null);
  const label = useRef(null);

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!fine || prefersReducedMotion()) return undefined;

    const el = ring.current;
    let x = -100;
    let y = -100;
    let cx = -100;
    let cy = -100;
    let raf = 0;

    const onMove = (e) => {
      x = e.clientX;
      y = e.clientY;
      el.classList.add('is-visible');
    };
    const onOver = (e) => {
      const target = e.target.closest ? e.target.closest('a, button, [data-cursor]') : null;
      el.classList.toggle('is-active', Boolean(target));
      const text = target && target.dataset ? target.dataset.cursor : '';
      label.current.textContent = text || '';
      el.classList.toggle('has-label', Boolean(text));
    };
    const onLeave = () => el.classList.remove('is-visible');

    const loop = () => {
      cx += (x - cx) * 0.2;
      cy += (y - cy) * 0.2;
      el.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    loop();

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseover', onOver, { passive: true });
    document.documentElement.addEventListener('mouseleave', onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      document.documentElement.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <div className="cursor" ref={ring} aria-hidden="true">
      <span ref={label} className="cursor__label" />
    </div>
  );
}
