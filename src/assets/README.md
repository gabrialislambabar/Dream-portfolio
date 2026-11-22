# Images

Every image slot resolves automatically from this folder. Drop a file in
with the right name and it appears — no code changes needed. Until a file
exists, the slot renders an art-directed placeholder.

## Slots

| File | Slot | Crop |
| --- | --- | --- |
| `images/about.jpg` | About portrait | 4:5 (e.g. 1200×1500) |
| `images/education.jpg` | Education / study image | 4:5 (e.g. 1200×1500) |
| `images/dribble-project.jpg` | Project 01 — Dribbble Clone | 4:3 (e.g. 1800×1000) |
| `images/leadTracker-project.jpg` | Project 02 — Leads Tracker | 4:3 (e.g. 1800×1000) |

Project filenames are declared by each project's `image` field in
`src/data/projects.js`, because the supplied names do not always match the
project slug. To add a project image, drop the file in `images/` and set
`image: 'your-file.jpg'` on that project.

## Format preference

`webp` → `avif` → `jpg`/`jpeg` → `png`. If two files share a basename, the
more modern one wins.

## Keep files small

This folder is bundled at build time, so every file here ships. Keep each
image under roughly 200 KB. The current set is resized to ~1800 px wide at
quality 82 (~90–170 KB each) — a 2.4 MB camera export is 25× the bytes for
no visible gain at display size.

## Notes

- Images are lazy-loaded and fade in when ready; the fixed aspect ratio
  prevents layout shift while they download.
- Placeholders are intentionally abstract — no fake screenshots or invented
  product UI.
