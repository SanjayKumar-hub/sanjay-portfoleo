import { useEffect, useRef } from 'react';
import prefersReducedMotion from '../hooks/usePrefersReducedMotion.js';

/**
 * A small canvas simulation: agents drift through a moving flow field while loosely
 * staying together. Purely illustrative. Pauses off-screen; static under reduced motion.
 */
export default function SwarmVisual() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const reduce = prefersReducedMotion();
    const N = 64;
    let w = 0;
    let h = 0;
    let t = 0;
    let raf = 0;
    let visible = true;
    const agents = [];

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = r.width;
      h = r.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    for (let i = 0; i < N; i += 1) {
      agents.push({
        x: Math.random() * w,
        y: Math.random() * h,
        a: Math.random() * Math.PI * 2,
        s: 0.7 + Math.random() * 0.7,
      });
    }

    const step = () => {
      t += 0.012;
      let cx = 0;
      let cy = 0;
      agents.forEach((p) => {
        cx += p.x;
        cy += p.y;
      });
      cx /= N;
      cy /= N;
      agents.forEach((p) => {
        const flow = Math.sin(p.x * 0.011 + t) * 1.4 + Math.cos(p.y * 0.014 - t * 0.8) * 1.1;
        const toCentre = Math.atan2(cy - p.y, cx - p.x);
        const target = flow * 0.75 + toCentre * 0.25;
        let da = target - p.a;
        da = Math.atan2(Math.sin(da), Math.cos(da));
        p.a += da * 0.05;
        p.x += Math.cos(p.a) * p.s * 1.1;
        p.y += Math.sin(p.a) * p.s * 1.1;
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;
      });
    };

    const draw = () => {
      const ink = getComputedStyle(canvas).color;
      ctx.clearRect(0, 0, w, h);
      ctx.strokeStyle = ink;
      ctx.fillStyle = ink;

      // flowing water lines
      ctx.globalAlpha = 0.14;
      ctx.lineWidth = 1;
      for (let k = 0; k < 9; k += 1) {
        ctx.beginPath();
        for (let x = 0; x <= w; x += 12) {
          const y = (h / 9) * (k + 0.5) + Math.sin(x * 0.014 + t * 1.6 + k) * 14;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      // agents
      ctx.globalAlpha = 1;
      agents.forEach((p) => {
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.a);
        ctx.beginPath();
        ctx.moveTo(9, 0);
        ctx.lineTo(-6, 4.5);
        ctx.lineTo(-3, 0);
        ctx.lineTo(-6, -4.5);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      });
    };

    const frame = () => {
      if (visible) {
        step();
        draw();
      }
      raf = requestAnimationFrame(frame);
    };

    if (reduce) {
      for (let i = 0; i < 90; i += 1) step();
      draw();
    } else {
      frame();
    }

    let io;
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver(([e]) => {
        visible = e.isIntersecting;
      });
      io.observe(canvas);
    }
    let ro;
    if ('ResizeObserver' in window) {
      ro = new ResizeObserver(() => {
        resize();
        if (reduce) draw();
      });
      ro.observe(canvas);
    }

    return () => {
      cancelAnimationFrame(raf);
      if (io) io.disconnect();
      if (ro) ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="swarm"
      role="img"
      aria-label="Illustration: a swarm of agents moving through a flowing current"
    />
  );
}
