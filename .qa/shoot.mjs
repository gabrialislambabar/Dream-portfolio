import { chromium } from 'playwright';

const OUT = '.qa';
const browser = await chromium.launch();

async function run(theme, width, height, label) {
  const context = await browser.newContext({ viewport: { width, height }, colorScheme: theme });
  const page = await context.newPage();
  await page.addInitScript((t) => window.localStorage.setItem('theme', t), theme);
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message));
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });

  await page.goto('http://127.0.0.1:5174/', { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.evaluate(async () => {
    const step = Math.round(window.innerHeight * 0.55);
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 110));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(900);

  const total = await page.evaluate(() => document.body.scrollHeight);
  let i = 0;
  for (let y = 0; y < total; y += height) {
    await page.evaluate((t) => window.scrollTo(0, t), y);
    await page.waitForTimeout(320);
    await page.screenshot({ path: `${OUT}/${label}-${String(i).padStart(2, '0')}.png` });
    i++;
  }
  const overflow = await page.evaluate(() => ({
    scrollW: document.documentElement.scrollWidth,
    innerW: window.innerWidth,
  }));
  console.log(label, 'chunks', i, 'height', total, JSON.stringify(overflow), 'errors:', errors.join('; ') || '(none)');
  await context.close();
}

await run('light', 1512, 950, 'L');
await run('dark', 1512, 950, 'D');
await run('light', 390, 844, 'M');
await browser.close();
