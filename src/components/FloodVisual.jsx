/**
 * Illustrative (not literal) graphic: water-level gauge → sensing node → GSM signal → alert.
 * It deliberately avoids depicting any specific hardware.
 */
export default function FloodVisual() {
  const ticks = Array.from({ length: 10 }, (_, i) => 90 + i * 24);
  return (
    <svg className="fv" viewBox="0 0 600 380" role="img" aria-label="Illustration: water-level monitoring with a sensing node sending a GSM alert">
      <defs>
        <pattern id="fv-hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="8" stroke="currentColor" strokeWidth="1" opacity="0.45" />
        </pattern>
        <clipPath id="fv-clip">
          <rect x="0" y="0" width="600" height="380" />
        </clipPath>
      </defs>

      {/* faint grid */}
      <g stroke="currentColor" opacity="0.12">
        {[60, 120, 180, 240, 300].map((y) => (
          <line key={y} x1="0" x2="600" y1={y} y2={y} />
        ))}
        {[100, 200, 300, 400, 500].map((x) => (
          <line key={x} y1="0" y2="380" x1={x} x2={x} />
        ))}
      </g>

      {/* water body */}
      <g clipPath="url(#fv-clip)">
        <g className="fv__rise">
          <g className="fv__wave">
            <path
              d="M-300 262 q37.5 -16 75 0 t75 0 t75 0 t75 0 t75 0 t75 0 t75 0 t75 0 t75 0 t75 0 t75 0 t75 0 V420 H-300 Z"
              fill="url(#fv-hatch)"
            />
            <path
              d="M-300 262 q37.5 -16 75 0 t75 0 t75 0 t75 0 t75 0 t75 0 t75 0 t75 0 t75 0 t75 0 t75 0 t75 0"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
          </g>
          {/* level marker rides the waterline */}
          <g transform="translate(138 262)">
            <path d="M0 0 l16 -9 v18 z" fill="currentColor" />
            <text x="24" y="4" className="fv__txt">
              WATER LEVEL
            </text>
          </g>
        </g>
      </g>

      {/* gauge post */}
      <g stroke="currentColor" strokeWidth="2">
        <line x1="120" y1="64" x2="120" y2="372" />
        {ticks.map((y, i) => (
          <line key={y} x1="120" x2={i % 3 === 0 ? 138 : 130} y1={y + 60} y2={y + 60} strokeWidth="1.5" />
        ))}
      </g>

      {/* sensing node */}
      <g>
        <circle className="fv__pulse" cx="120" cy="52" r="10" fill="none" stroke="currentColor" />
        <circle className="fv__pulse fv__pulse--2" cx="120" cy="52" r="10" fill="none" stroke="currentColor" />
        <circle cx="120" cy="52" r="9" fill="currentColor" />
        <text x="140" y="46" className="fv__txt">
          SENSOR
        </text>
      </g>

      {/* link to tower */}
      <line x1="132" y1="52" x2="418" y2="92" stroke="currentColor" strokeDasharray="4 6" className="fv__dash" />

      {/* GSM mast */}
      <g stroke="currentColor" strokeWidth="2" fill="none">
        <path d="M430 100 L416 190 M430 100 L444 190 M419 160 L441 160" />
        <circle cx="430" cy="96" r="5" fill="currentColor" />
        <path className="fv__arc fv__arc--1" d="M418 84 a16 16 0 0 1 24 0" />
        <path className="fv__arc fv__arc--2" d="M410 74 a28 28 0 0 1 40 0" />
        <path className="fv__arc fv__arc--3" d="M402 64 a40 40 0 0 1 56 0" />
      </g>
      <text x="458" y="100" className="fv__txt">
        GSM
      </text>

      {/* alert */}
      <line x1="430" y1="190" x2="430" y2="216" stroke="currentColor" strokeDasharray="3 5" className="fv__dash" />
      <g transform="translate(372 216)">
        <rect width="150" height="46" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle className="fv__blink" cx="20" cy="23" r="6" fill="currentColor" />
        <text x="36" y="28" className="fv__txt fv__txt--lg">
          FLOOD ALERT
        </text>
      </g>
    </svg>
  );
}
