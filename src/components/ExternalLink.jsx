import RollText from './RollText.jsx';

/**
 * Renders a real link when `url` is set, otherwise a clearly marked placeholder
 * so the layout is final but nothing points at an invented address.
 */
export default function ExternalLink({ label, url, className = '' }) {
  if (!url) {
    return (
      <span className={`xlink xlink--pending ${className}`.trim()} title="Placeholder — add the URL in src/data/content.js">
        <span className="xlink__label">{label}</span>
        <span className="xlink__tag">link to add</span>
      </span>
    );
  }
  return (
    <a className={`xlink ${className}`.trim()} href={url} target="_blank" rel="noopener noreferrer">
      <span className="xlink__label">
        <RollText>{label}</RollText>
      </span>
      <span className="xlink__tag" aria-hidden="true">
        ↗
      </span>
    </a>
  );
}
