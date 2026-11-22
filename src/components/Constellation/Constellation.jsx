import './Constellation.css';

/* Formation cadence (seconds). Stars appear outward from the centre,
   each link draws as its target star lands. Exit runs the same order
   in reverse, a little quicker. */
const IN_STEP = 0.075;
const OUT_STEP = 0.045;
const LINE_LEAD = 0.05;
/* Offset between stars so some glow while others dim. */
const GLOW_PHASE = 0.6;

/**
 * Decorative constellation overlay for a card.
 *
 * @param {Array<{x:number,y:number,r?:number}>} stars  Points in the
 *   320×220 viewBox, in drawing order.
 * @param {Array<[number, number]>} lines  Star-index pairs to connect.
 * @param {boolean} active  Whether to trace the constellation.
 *
 * Purely decorative: hidden from assistive tech and never interactive.
 */
export default function Constellation({ stars = [], lines = [], active = false, className = '' }) {
  const last = Math.max(stars.length - 1, 0);

  return (
    <svg
      className={`constellation${active ? ' is-active' : ''}${className ? ` ${className}` : ''}`}
      viewBox="0 0 320 220"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      <g className="constellation__links">
        {lines.map(([from, to]) => {
          const start = stars[from];
          const end = stars[to];
          if (!start || !end) return null;

          return (
            <line
              key={`${from}-${to}`}
              className="constellation__link"
              x1={start.x}
              y1={start.y}
              x2={end.x}
              y2={end.y}
              pathLength="1"
              style={{
                '--delay': `${(to * IN_STEP + LINE_LEAD).toFixed(3)}s`,
                /* Reverse of the draw order: last link fades first. */
                '--delay-out': `${((last - to) * OUT_STEP).toFixed(3)}s`,
              }}
            />
          );
        })}
      </g>

      <g className="constellation__stars">
        {stars.map((star, index) => (
          <circle
            key={`${star.x}-${star.y}`}
            className="constellation__star"
            cx={star.x}
            cy={star.y}
            r={star.r ?? 1.5}
            style={{
              '--delay': `${(index * IN_STEP).toFixed(3)}s`,
              '--delay-out': `${((last - index) * OUT_STEP).toFixed(3)}s`,
              '--phase': `${(index * GLOW_PHASE).toFixed(2)}s`,
            }}
          />
        ))}
      </g>
    </svg>
  );
}
