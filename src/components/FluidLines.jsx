/** Decorative flowing lines used on the research section. */
export default function FluidLines() {
  const rows = Array.from({ length: 11 }, (_, i) => i);
  return (
    <svg className="fl" viewBox="0 0 800 300" preserveAspectRatio="none" aria-hidden="true">
      {rows.map((i) => (
        <path
          key={i}
          className="fl__line"
          style={{ '--i': i }}
          d={`M0 ${20 + i * 26} C 120 ${i * 26 - 10}, 240 ${60 + i * 26}, 400 ${20 + i * 26} S 680 ${i * 26 - 20}, 800 ${20 + i * 26}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
      ))}
    </svg>
  );
}
