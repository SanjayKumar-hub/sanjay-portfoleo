import useInView from '../hooks/useInView.js';

/**
 * Large headings revealed line-by-line from behind a mask.
 * Pass `active` to drive the reveal manually (used by the hero after the loader).
 */
export default function MaskLines({ lines, as: Tag = 'h2', className = '', active, delay = 0, children }) {
  const [ref, inView] = useInView({ threshold: 0.2 });
  const on = active !== undefined ? active : inView;
  return (
    <Tag ref={ref} className={`${className} ${on ? 'is-in' : ''}`.trim()} style={{ '--d': `${delay}ms` }}>
      {lines.map((line, i) => (
        <span className="mask" key={i} style={{ '--i': i }}>
          <span>{line}</span>
        </span>
      ))}
      {children}
    </Tag>
  );
}
