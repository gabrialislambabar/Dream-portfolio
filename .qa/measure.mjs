import { chromium } from 'playwright';
const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width: 1512, height: 950 } });
const page = await context.newPage();
await page.goto('http://127.0.0.1:5174/', { waitUntil: 'networkidle' });
const r = await page.evaluate(() => {
  const about = document.getElementById('about');
  const cs = getComputedStyle(about);
  const nav = document.querySelector('.nav');
  const secHead = document.querySelector('.sec-head');
  return {
    aboutPaddingTop: cs.paddingTop,
    aboutPaddingBottom: cs.paddingBottom,
    navHeight: nav.getBoundingClientRect().height,
    aboutTop: about.getBoundingClientRect().top,
    secHeadPaddingTop: getComputedStyle(secHead).paddingTop,
    bodyBg: getComputedStyle(document.body).backgroundColor,
  };
});
console.log(JSON.stringify(r, null, 2));
await browser.close();
