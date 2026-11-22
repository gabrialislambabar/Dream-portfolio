# Images

Every image slot in this portfolio resolves **automatically** from this folder.
Drop a file in with the right name and it appears — no code changes needed.
Until a file exists, the slot renders an art-directed placeholder in the
project's own visual language.

## Expected filenames

| File | Slot | Suggested crop |
| --- | --- | --- |
| `images/about.jpg` | About portrait | Portrait, 4:5 (e.g. 1200×1500) |
| `images/education.jpg` | Education / study image | Portrait, 4:5 (e.g. 1200×1500) |
| `projects/dribbble-clone.jpg` | Project 01 (lead) | 4:3 (e.g. 1600×1200) |
| `projects/leads-tracker.jpg` | Project 02 (lead) | 4:3 (e.g. 1600×1200) |

`.webp`, `.png`, `.jpeg` and `.avif` are accepted alongside `.jpg` and are
resolved in that order.

## Notes

- Images are lazy-loaded and fade in when ready; the placeholder prevents any
  layout shift while the file downloads.
- The rendered placeholders are intentionally abstract (no fake screenshots or
  invented product UI). Replace them with real screenshots only.
