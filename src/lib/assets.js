/* ------------------------------------------------------------------
   Image resolution.

   Files are discovered by name, so dropping an image into
   src/assets/images or src/assets/projects is all that is needed.

   Only the formats in the glob below are bundled. Originals kept in
   the folder purely as source material (e.g. a 3 MB camera JPG) are
   not referenced and therefore not shipped, as long as a same-named
   .webp derivative exists — webp is preferred over jpg for exactly
   that reason.
   ------------------------------------------------------------------ */

const imageModules = import.meta.glob(
  '../assets/**/*.{webp,avif,jpg,jpeg,png}',
  { eager: true, query: '?url', import: 'default' }
);

/* Preference order: modern formats first, so an optimised derivative
   wins over the heavy original sitting next to it. */
const PREFERENCE = ['webp', 'avif', 'jpg', 'jpeg', 'png'];

function resolve(name) {
  const suffix = `/${name}`;
  const key = Object.keys(imageModules).find((path) => path.endsWith(suffix));
  return key ? imageModules[key] : null;
}

/* Try the same basename in every preferred format. */
function resolveWithFallbacks(name) {
  const base = name.replace(/\.(webp|avif|jpe?g|png)$/i, '');
  for (const ext of PREFERENCE) {
    const found = resolve(`${base}.${ext}`);
    if (found) return found;
  }
  return null;
}

/* Optional hero, kept for the masthead's optional backdrop. */
export const heroImage = resolveWithFallbacks('images/hero.jpg');

export const aboutPortrait = resolveWithFallbacks('images/about.jpg');

export const educationImage = resolveWithFallbacks('images/education.jpg');

/* Project images accept an explicit file name, because the supplied
   files do not always match the project slug (e.g. "dribble-project"). */
export function projectImage(project) {
  if (project.image) return resolveWithFallbacks(`images/${project.image}`);
  return resolveWithFallbacks(`projects/${project.slug}.jpg`);
}
