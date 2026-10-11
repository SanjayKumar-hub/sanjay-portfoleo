import MaskLines from './MaskLines.jsx';

/** Numbered section opener: thin rule, "(03)" marker, label, then a large title. */
export default function SectionHeader({ no, label, lines, inverted = false }) {
  return (
    <header className={`sh ${inverted ? 'sh--inverted' : ''}`.trim()}>
      <div className="sh__bar">
        <span className="sh__no">({no})</span>
        <span className="sh__label">{label}</span>
      </div>
      <MaskLines lines={lines} className="sh__title display" />
    </header>
  );
}
