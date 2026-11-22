/* ------------------------------------------------------------------
   Deterministic constellation geometry for the technology cards.

   Coordinates live in a fixed 320×220 viewBox that is scaled to each
   card. Star 0 is always the centre of the card (160, 110); the rest
   radiate outward, so the constellation reads as originating from the
   middle.

   Each card has exactly one star per skill (6 / 7 / 6 / 5 / 5 / 7) and
   its own silhouette: pentagon, hexagon, offset burst, diamond,
   asymmetric kite and spiral.

   Lines are [from, to] pairs of star indices, always ascending so a
   link is drawn when its later star appears.
   ------------------------------------------------------------------ */

export const constellations = {
  /* T.01 — 6 skills: centre + 5 points, pentagon with a partial ring */
  'T.01': {
    stars: [
      { x: 160, y: 110, r: 2.2 },
      { x: 160, y: 38, r: 1.3 },
      { x: 260, y: 88, r: 1.7 },
      { x: 222, y: 168, r: 1.2 },
      { x: 98, y: 168, r: 1.9 },
      { x: 60, y: 88, r: 1.1 },
    ],
    lines: [
      [0, 1],
      [0, 2],
      [0, 3],
      [0, 4],
      [0, 5],
      [1, 2],
      [3, 4],
    ],
  },

  /* T.02 — 7 skills: centre + 6 points, wide hexagon */
  'T.02': {
    stars: [
      { x: 160, y: 110, r: 2.2 },
      { x: 160, y: 34, r: 1.2 },
      { x: 262, y: 72, r: 1.6 },
      { x: 262, y: 148, r: 1.3 },
      { x: 160, y: 186, r: 1.8 },
      { x: 58, y: 148, r: 1.1 },
      { x: 58, y: 72, r: 1.5 },
    ],
    lines: [
      [0, 1],
      [0, 2],
      [0, 3],
      [0, 4],
      [0, 5],
      [0, 6],
      [1, 2],
      [3, 4],
      [5, 6],
    ],
  },

  /* T.03 — 6 skills: centre + 5 points, offset burst with cross links */
  'T.03': {
    stars: [
      { x: 160, y: 110, r: 2.1 },
      { x: 248, y: 46, r: 1.4 },
      { x: 252, y: 132, r: 1.8 },
      { x: 176, y: 186, r: 1.2 },
      { x: 66, y: 150, r: 1.6 },
      { x: 72, y: 58, r: 1.0 },
    ],
    lines: [
      [0, 1],
      [0, 2],
      [0, 3],
      [0, 4],
      [0, 5],
      [1, 5],
      [2, 3],
    ],
  },

  /* T.04 — 5 skills: centre + 4 points, a fully joined diamond */
  'T.04': {
    stars: [
      { x: 160, y: 110, r: 2.2 },
      { x: 160, y: 36, r: 1.5 },
      { x: 262, y: 110, r: 1.2 },
      { x: 160, y: 184, r: 1.8 },
      { x: 58, y: 110, r: 1.3 },
    ],
    lines: [
      [0, 1],
      [0, 2],
      [0, 3],
      [0, 4],
      [1, 2],
      [2, 3],
      [3, 4],
      [1, 4],
    ],
  },

  /* T.05 — 5 skills: centre + 4 points, an asymmetric kite */
  'T.05': {
    stars: [
      { x: 160, y: 110, r: 2.0 },
      { x: 238, y: 52, r: 1.6 },
      { x: 262, y: 150, r: 1.1 },
      { x: 120, y: 178, r: 1.7 },
      { x: 64, y: 86, r: 1.2 },
    ],
    lines: [
      [0, 1],
      [0, 2],
      [0, 3],
      [0, 4],
      [1, 2],
      [2, 3],
      [3, 4],
    ],
  },

  /* T.06 — 7 skills: centre + 6 points, a loose spiral of two arms */
  'T.06': {
    stars: [
      { x: 160, y: 110, r: 2.1 },
      { x: 160, y: 34, r: 1.1 },
      { x: 258, y: 76, r: 1.5 },
      { x: 240, y: 158, r: 1.2 },
      { x: 196, y: 184, r: 1.7 },
      { x: 92, y: 166, r: 1.0 },
      { x: 66, y: 84, r: 1.4 },
    ],
    lines: [
      [0, 1],
      [0, 2],
      [0, 3],
      [0, 4],
      [0, 5],
      [0, 6],
      [2, 3],
      [4, 5],
    ],
  },
};
