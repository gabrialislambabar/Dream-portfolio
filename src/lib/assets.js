const imageModules = import.meta.glob('../assets/**/*.{jpg,jpeg,png,webp,avif}', {
  eager: true,
  query: '?url',
  import: 'default',
});

function resolve(name) {
  const suffix = `/${name}`;
  const key = Object.keys(imageModules).find((path) => path.endsWith(suffix));
  return key ? imageModules[key] : null;
}

export const heroImage = resolve('images/hero.jpg') ?? resolve('images/hero.webp');

export const aboutPortrait = resolve('images/about.jpg') ?? resolve('images/about.webp');

export const educationImage = resolve('images/education.jpg') ?? resolve('images/education.webp');

export function projectImage(slug, index = 1) {
  const suffix = index === 1 ? `${slug}.jpg` : `${slug}-${index}.jpg`;
  return (
    resolve(`projects/${suffix}`) ??
    resolve(`projects/${suffix.replace('.jpg', '.webp')}`) ??
    (index === 1 ? resolve(`projects/${slug}.png`) : null)
  );
}
