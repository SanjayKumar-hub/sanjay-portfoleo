import { tickerItems } from '../data/content.js';

export default function Marquee() {
  const row = tickerItems.map((t) => (
    <span className="marquee__item" key={t}>
      {t}
      <i aria-hidden="true">✳</i>
    </span>
  ));
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        <div className="marquee__row">{row}</div>
        <div className="marquee__row">{row}</div>
      </div>
    </div>
  );
}
