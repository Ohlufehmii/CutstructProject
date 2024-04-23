const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("C:\\Users\\olufemi.habib\\Custruct WebApplication\\cypress\\reports\\mochawesome_004.html", {waitUntil: 'networkidle0'});
  await page.pdf({
    path: 'report3.pdf',
    format: 'A4'
  });

  await browser.close();
})();