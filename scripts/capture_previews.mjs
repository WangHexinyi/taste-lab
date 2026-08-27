#!/usr/bin/env node

import { mkdir } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');

const root = resolve(import.meta.dirname, '..');
const outputRoot = process.env.TASTE_PREVIEW_ROOT || join(tmpdir(), 'taste-lab-preview-frames');
const only = new Set(process.argv.slice(2));

const jobs = [
  { key: 'v05-gemini', source: 'docs/demos/v0.5/aman-kyoto-gemini.html', fps: 18, seconds: 30 },
  { key: 'v05-qwen', source: 'docs/demos/v0.5/aman-kyoto-qwen.html', fps: 18, seconds: 30 },
  { key: 'v06-gemini', source: 'docs/demos/v0.6/nomad-27-gemini.html', fps: 18, seconds: 30 },
  { key: 'v06-qwen', source: 'docs/demos/v0.6/nomad-27-qwen.html', fps: 18, seconds: 30 },
  { key: 'v07-gemini', source: 'docs/demos/v0.7/landscape-self-gemini.html', fps: 18, seconds: 30 },
  { key: 'v07-qwen-featured', source: 'docs/demos/v0.7/landscape-self-qwen.html', fps: 30, seconds: 60 },
].filter((job) => only.size === 0 || only.has(job.key));

const hideScrollbars = `
  html, body { scrollbar-width: none !important; -ms-overflow-style: none !important; }
  html::-webkit-scrollbar, body::-webkit-scrollbar, *::-webkit-scrollbar {
    width: 0 !important;
    height: 0 !important;
    display: none !important;
  }
  .chnav { display: none !important; }
`;

const ease = (value) => value < 0.5
  ? 2 * value * value
  : 1 - Math.pow(-2 * value + 2, 2) / 2;

function scrollRatio(frame, fps, seconds) {
  const segmentSeconds = seconds === 60 ? [4, 16, 4, 16, 4, 16] : [2, 8, 2, 8, 2, 8];
  const boundaries = [];
  let cursor = 0;
  for (const duration of segmentSeconds) {
    cursor += duration * fps;
    boundaries.push(cursor);
  }

  if (frame < boundaries[0]) return 0;
  if (frame < boundaries[1]) return 0.30 * ease((frame - boundaries[0]) / (boundaries[1] - boundaries[0] - 1));
  if (frame < boundaries[2]) return 0.30;
  if (frame < boundaries[3]) return 0.30 + 0.35 * ease((frame - boundaries[2]) / (boundaries[3] - boundaries[2] - 1));
  if (frame < boundaries[4]) return 0.65;
  return 0.65 + 0.35 * ease((frame - boundaries[4]) / (boundaries[5] - boundaries[4] - 1));
}

const browser = await chromium.launch({
  headless: true,
  executablePath: process.env.CHROMIUM_EXECUTABLE || chromium.executablePath(),
});
const page = await browser.newPage({ viewport: { width: 920, height: 562 }, deviceScaleFactor: 1 });

try {
  for (const job of jobs) {
    const frameCount = job.fps * job.seconds;
    const output = join(outputRoot, job.key);
    await mkdir(output, { recursive: true });
    await page.goto(pathToFileURL(resolve(root, job.source)).href, { waitUntil: 'domcontentloaded' });
    await page.addStyleTag({ content: hideScrollbars });
    await page.evaluate(() => document.querySelectorAll('img').forEach((image) => { image.loading = 'eager'; }));
    await page.waitForTimeout(4500);
    await page.evaluate(() => scrollTo(0, 0));
    await page.waitForTimeout(900);

    const maxScroll = await page.evaluate(() => Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
    ) - innerHeight);
    console.log(`START ${job.key} frames=${frameCount} fps=${job.fps} seconds=${job.seconds} maxScroll=${maxScroll}`);

    for (let frame = 0; frame < frameCount; frame += 1) {
      const y = Math.round(maxScroll * scrollRatio(frame, job.fps, job.seconds));
      await page.evaluate((scrollY) => scrollTo(0, scrollY), y);
      await page.evaluate(() => new Promise((resolveFrame) => requestAnimationFrame(() => resolveFrame())));
      await page.screenshot({
        path: join(output, `frame-${String(frame).padStart(4, '0')}.jpg`),
        type: 'jpeg',
        quality: 76,
      });
    }
    console.log(`DONE ${job.key} frames=${frameCount}`);
  }
} finally {
  await browser.close();
}
