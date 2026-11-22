import { chromium } from 'playwright';

const URL = 'http://127.0.0.1:5174/';
const browser = await chromium.launch();

const parse = `(c) => c.match(/[\\d.]+/g).slice(0,3).map(Number)`;
const lum = `(rgb) => { const [r,g,b] = rgb.map(v=>{const s=v/255; return s<=0.03928? s/12.92 : ((s+0.055)/1.055)**2.4}); return .2126*r+.7152*g+.0722*b }`;

for (const theme of ['light', 'dark']) {
  const context = await browser.newContext({ viewport: { width: 1512, height: 950 }, colorScheme: theme });
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message));
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
  await page.addInitScript((t) => window.localStorage.setItem('theme', t), theme);
  await page.goto(URL, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.evaluate(async () => {
    const step = Math.round(window.innerHeight * 0.55);
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 80));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(700);

  const result = await page.evaluate(new Function(`
    const parseColor = ${parse};
    const relLum = ${lum};
    const ratio = (a,b) => { const [l1,l2] = [relLum(a), relLum(b)].sort((x,y)=>y-x); return +((l1+0.05)/(l2+0.05)).toFixed(2) };
    const bg = parseColor(getComputedStyle(document.body).backgroundColor);
    const out = {};
    const probes = {
      'heading (big)': '.display__line:not(.display__line--accent)',
      'accent display': '.display__line--accent',
      'body paragraph': '.about__paragraph',
      'secondary copy': '.contact__copy',
      'eyebrow label': '.sec-head__top .label',
      'mono meta': '.sec-head__meta',
      'stack code': '.stack__code',
      'stack chip': '.stack__chip',
      'stack count': '.stack__count',
      'project status': '.project__status',
      'project desc': '.project__description',
      'source button': '.source-btn__label',
      'contact channel label': '.contact__channel-label',
      'contact channel value': '.contact__channel-value',
      'note meta': '.contact__note-meta',
      'footer copy': '.footer__copyright',
    };
    for (const [k, sel] of Object.entries(probes)) {
      const el = document.querySelector(sel);
      if (!el) { out[k] = 'MISSING'; continue; }
      out[k] = ratio(parseColor(getComputedStyle(el).color), bg);
    }
    return out;
  `));

  console.log(`\n=== ${theme.toUpperCase()} ===`);
  for (const [k, v] of Object.entries(result)) {
    const flag = typeof v === 'number' && v < 3 ? '  <-- LOW' : '';
    console.log(`  ${k.padEnd(24)} ${v}${flag}`);
  }
  console.log('  errors:', errors.join('; ') || '(none)');
  await context.close();
}

// reduced motion + no hidden content
{
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: 'reduce' });
  const page = await context.newPage();
  await page.goto(URL, { waitUntil: 'networkidle' });
  await page.waitForTimeout(400);
  const hidden = await page.evaluate(() => {
    const bad = [];
    document.querySelectorAll('section, article, ul, li, p, h2, h3, div').forEach((el) => {
      const cs = getComputedStyle(el);
      if (parseFloat(cs.opacity) < 0.9 && el.textContent.trim().length > 0) {
        bad.push(`${el.tagName}.${String(el.className).split(' ')[0]}=${cs.opacity}`);
      }
    });
    return bad.slice(0, 6);
  });
  console.log('\nreduced-motion hidden:', hidden.length ? hidden : '(none)');
  await context.close();
}

// theme persistence
{
  const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const page = await context.newPage();
  await page.goto(URL, { waitUntil: 'networkidle' });
  const first = await page.evaluate(() => document.documentElement.dataset.theme);
  await page.locator('.theme-toggle').click();
  await page.waitForTimeout(700);
  const toggled = await page.evaluate(() => document.documentElement.dataset.theme);
  await page.reload({ waitUntil: 'networkidle' });
  const afterReload = await page.evaluate(() => document.documentElement.dataset.theme);
  console.log(`\ntheme: first=${first} toggled=${toggled} reload=${afterReload} stored=${await page.evaluate(() => localStorage.getItem('theme'))}`);
  await context.close();
}

// heading outline + h1 count
{
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();
  await page.goto(URL, { waitUntil: 'networkidle' });
  const outline = await page.evaluate(() => ({
    h1s: [...document.querySelectorAll('h1')].map((h) => h.textContent.trim()),
    headings: [...document.querySelectorAll('h2,h3')].map((h) => h.tagName + ': ' + h.textContent.trim().slice(0, 46)),
    imgsNoAlt: [...document.images].filter((i) => !i.alt).length,
    btnNoName: [...document.querySelectorAll('button')].filter((b) => !b.textContent.trim() && !b.getAttribute('aria-label')).length,
  }));
  console.log('\nH1 count:', outline.h1s.length, outline.h1s);
  console.log('images missing alt:', outline.imgsNoAlt, '| unnamed buttons:', outline.btnNoName);
  console.log('headings:\n' + outline.headings.map((h) => '  ' + h).join('\n'));
  await context.close();
}

await browser.close();
