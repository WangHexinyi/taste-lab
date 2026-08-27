#!/usr/bin/env node
/**
 * Taste Delivery Check — zero npm dependencies.
 * Requires: Node.js 20+ and Chrome / Edge / Chromium installed.
 * Usage: node taste-check.mjs index.html
 *        node taste-check.mjs https://example.com
 *
 * What it checks (mechanically):
 * - JS/runtime exceptions and console errors
 * - failed image/media loads
 * - hidden/non-painted primary heading
 * - first-viewport visual anchor
 * - visible primary CTA/control
 * - horizontal overflow
 * - desktop + mobile rendering
 * - reduced-motion survival of critical content
 * - screenshots + machine-readable report
 */

import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import http from 'node:http';
import { spawn, spawnSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';

const argv = process.argv.slice(2);
if (!argv.length || argv.includes('-h') || argv.includes('--help')) {
  console.log(`\nTaste Delivery Check\n\nUsage:\n  node taste-check.mjs <index.html | URL>\n\nOptional:\n  --out <folder>    report/screenshot output folder\n  --browser <path>  Chrome/Edge/Chromium executable\n\nNo npm install is required.\n`);
  process.exit(argv.length ? 0 : 2);
}

function takeArg(name) {
  const i = argv.indexOf(name);
  if (i >= 0 && argv[i + 1]) return argv[i + 1];
  return null;
}

const targetArg = argv.find((x, i) => !x.startsWith('--') && (i === 0 || argv[i - 1] !== '--out') && (i === 0 || argv[i - 1] !== '--browser'));
if (!targetArg) throw new Error('Missing HTML path or URL.');

const customOut = takeArg('--out');
const customBrowser = takeArg('--browser') || process.env.CHROME_PATH || null;
const isUrl = /^https?:\/\//i.test(targetArg);
const inputPath = isUrl ? null : path.resolve(targetArg);
if (!isUrl && !fs.existsSync(inputPath)) throw new Error(`File not found: ${inputPath}`);
const localSource = isUrl ? null : fs.readFileSync(inputPath, 'utf8');

const outDir = customOut
  ? path.resolve(customOut)
  : path.resolve(isUrl ? process.cwd() : path.dirname(inputPath), 'taste-check-output');
fs.mkdirSync(outDir, { recursive: true });

const sleep = ms => new Promise(r => setTimeout(r, ms));
const nowIso = () => new Date().toISOString();

function commandExists(name) {
  const cmd = process.platform === 'win32' ? 'where' : 'which';
  const r = spawnSync(cmd, [name], { encoding: 'utf8', windowsHide: true });
  if (r.status === 0) return r.stdout.split(/\r?\n/).map(x => x.trim()).find(Boolean) || null;
  return null;
}

function findBrowser() {
  const candidates = [];
  if (customBrowser) candidates.push(customBrowser);

  if (process.platform === 'win32') {
    const pf = process.env.PROGRAMFILES || 'C:\\Program Files';
    const pfx86 = process.env['PROGRAMFILES(X86)'] || 'C:\\Program Files (x86)';
    const local = process.env.LOCALAPPDATA || '';
    candidates.push(
      path.join(pf, 'Google', 'Chrome', 'Application', 'chrome.exe'),
      path.join(pfx86, 'Google', 'Chrome', 'Application', 'chrome.exe'),
      path.join(local, 'Google', 'Chrome', 'Application', 'chrome.exe'),
      path.join(pf, 'Microsoft', 'Edge', 'Application', 'msedge.exe'),
      path.join(pfx86, 'Microsoft', 'Edge', 'Application', 'msedge.exe'),
      path.join(local, 'Microsoft', 'Edge', 'Application', 'msedge.exe')
    );
  } else if (process.platform === 'darwin') {
    candidates.push(
      '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
      '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
      '/Applications/Chromium.app/Contents/MacOS/Chromium'
    );
  } else {
    candidates.push('/usr/bin/google-chrome', '/usr/bin/google-chrome-stable', '/usr/bin/chromium', '/usr/bin/chromium-browser');
  }

  for (const c of candidates) if (c && fs.existsSync(c)) return c;
  for (const n of ['google-chrome', 'google-chrome-stable', 'chromium', 'chromium-browser', 'msedge']) {
    const c = commandExists(n); if (c) return c;
  }
  return null;
}

function mimeFor(file) {
  const ext = path.extname(file).toLowerCase();
  return ({
    '.html':'text/html; charset=utf-8', '.htm':'text/html; charset=utf-8',
    '.js':'text/javascript; charset=utf-8', '.mjs':'text/javascript; charset=utf-8',
    '.css':'text/css; charset=utf-8', '.json':'application/json; charset=utf-8',
    '.svg':'image/svg+xml', '.png':'image/png', '.jpg':'image/jpeg', '.jpeg':'image/jpeg',
    '.webp':'image/webp', '.gif':'image/gif', '.avif':'image/avif',
    '.woff':'font/woff', '.woff2':'font/woff2', '.mp3':'audio/mpeg', '.wav':'audio/wav', '.mp4':'video/mp4'
  })[ext] || 'application/octet-stream';
}

async function startStaticServer(entry) {
  const root = path.dirname(entry);
  const entryName = path.basename(entry);
  const server = http.createServer((req, res) => {
    try {
      let u = decodeURIComponent((req.url || '/').split('?')[0]);
      if (u === '/') u = '/' + entryName;
      const requested = path.resolve(root, '.' + u);
      if (!requested.startsWith(root)) { res.writeHead(403); return res.end('Forbidden'); }
      fs.stat(requested, (err, st) => {
        if (err || !st.isFile()) { res.writeHead(404); return res.end('Not found'); }
        res.setHeader('Content-Type', mimeFor(requested));
        res.setHeader('Cache-Control', 'no-store');
        fs.createReadStream(requested).pipe(res);
      });
    } catch (e) { res.writeHead(500); res.end(String(e)); }
  });
  await new Promise((resolve, reject) => {
    server.once('error', reject);
    server.listen(0, '127.0.0.1', resolve);
  });
  const { port } = server.address();
  return { server, url: `http://127.0.0.1:${port}/${encodeURIComponent(entryName)}` };
}

class CDP {
  constructor(wsUrl) {
    this.ws = new WebSocket(wsUrl);
    this.id = 0;
    this.pending = new Map();
    this.listeners = new Map();
    this.ready = new Promise((resolve, reject) => {
      this.ws.addEventListener('open', resolve, { once: true });
      this.ws.addEventListener('error', reject, { once: true });
    });
    this.ws.addEventListener('message', e => {
      let msg; try { msg = JSON.parse(e.data); } catch { return; }
      if (msg.id && this.pending.has(msg.id)) {
        const { resolve, reject } = this.pending.get(msg.id); this.pending.delete(msg.id);
        if (msg.error) reject(new Error(msg.error.message || JSON.stringify(msg.error)));
        else resolve(msg.result || {});
      } else if (msg.method) {
        for (const fn of this.listeners.get(msg.method) || []) fn(msg.params || {});
      }
    });
  }
  on(method, fn) { if (!this.listeners.has(method)) this.listeners.set(method, []); this.listeners.get(method).push(fn); }
  async send(method, params = {}) {
    await this.ready;
    const id = ++this.id;
    const p = new Promise((resolve, reject) => this.pending.set(id, { resolve, reject }));
    this.ws.send(JSON.stringify({ id, method, params }));
    return p;
  }
  close() { try { this.ws.close(); } catch {} }
}

async function waitForDevtools(dir, timeout = 12000) {
  const p = path.join(dir, 'DevToolsActivePort');
  const t0 = Date.now();
  while (Date.now() - t0 < timeout) {
    if (fs.existsSync(p)) {
      const lines = fs.readFileSync(p, 'utf8').trim().split(/\r?\n/);
      if (lines[0]) return +lines[0];
    }
    await sleep(100);
  }
  throw new Error('Browser started but DevTools port did not become available.');
}

async function waitForPageTarget(port, timeout = 10000) {
  const t0 = Date.now();
  while (Date.now() - t0 < timeout) {
    try {
      const list = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json();
      const page = list.find(x => x.type === 'page');
      if (page?.webSocketDebuggerUrl) return page.webSocketDebuggerUrl;
    } catch {}
    await sleep(100);
  }
  throw new Error('Could not attach to browser page.');
}

const analysisExpression = `(() => {
  const vw = innerWidth, vh = innerHeight, vpArea = vw * vh;
  const css = el => getComputedStyle(el);
  const num = x => Number.parseFloat(x) || 0;
  const rectObj = r => ({x:r.x,y:r.y,left:r.left,top:r.top,width:r.width,height:r.height,right:r.right,bottom:r.bottom});
  const intersect = (a,b) => {
    const x1=Math.max(a.x,b.x), y1=Math.max(a.y,b.y), x2=Math.min(a.right,b.right), y2=Math.min(a.bottom,b.bottom);
    return {x:x1,y:y1,right:x2,bottom:y2,width:Math.max(0,x2-x1),height:Math.max(0,y2-y1)};
  };
  const viewport = {x:0,y:0,right:vw,bottom:vh,width:vw,height:vh};
  const clippedRect = el => {
    if (!el || !(el instanceof Element)) return {width:0,height:0,x:0,y:0,right:0,bottom:0};
    let s=css(el); if(s.display==='none'||s.visibility==='hidden'||Number(s.opacity)<0.03) return {width:0,height:0,x:0,y:0,right:0,bottom:0};
    let r=rectObj(el.getBoundingClientRect());
    if(r.width<1||r.height<1) return {...r,width:0,height:0};
    r=intersect(r,viewport);
    for(let p=el.parentElement;p && r.width>0 && r.height>0;p=p.parentElement){
      const ps=css(p); if(ps.display==='none'||ps.visibility==='hidden'||Number(ps.opacity)<0.03) return {...r,width:0,height:0};
      const ov=[ps.overflow,ps.overflowX,ps.overflowY].join(' ');
      if(/hidden|clip/.test(ov)) r=intersect(r,rectObj(p.getBoundingClientRect()));
    }
    return r;
  };
  const isPainted = el => { const r=clippedRect(el); return r.width*r.height>4 && css(el).pointerEvents!=='none'; };
  const textPainted = root => {
    if(!root) return false;
    const tw=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
    let n; while(n=tw.nextNode()){
      if(!n.textContent.trim()) continue;
      const el=n.parentElement; if(!el) continue;
      const r=clippedRect(el); if(r.width*r.height>4) return true;
    }
    return false;
  };
  const headings=[...document.querySelectorAll('h1')];
  const primary=headings[0] || document.querySelector('[role="heading"], h2');
  const primaryRect=primary?clippedRect(primary):{width:0,height:0};
  const primaryVisible=!!primary && textPainted(primary);
  const primaryStyle=primary?css(primary):null;
  const primaryInfo=primary?{
    tag:primary.tagName, text:(primary.textContent||'').trim().replace(/\\s+/g,' ').slice(0,160),
    visible:primaryVisible, rect:rectObj(primary.getBoundingClientRect()), clipped:primaryRect,
    fontSize:primaryStyle.fontSize, opacity:primaryStyle.opacity, transform:primaryStyle.transform,
    overflowChain:[...(()=>{let a=[],p=primary;while(p){let s=css(p);if(/hidden|clip/.test([s.overflow,s.overflowX,s.overflowY].join(' ')))a.push(p.tagName+'.'+p.className);p=p.parentElement;}return a;})()]
  }:null;

  const imgs=[...document.images];
  const brokenImgs=imgs.filter(i => i.complete && i.naturalWidth===0).map(i => ({src:i.currentSrc||i.src,alt:i.alt||''}));
  const loadedImgs=imgs.filter(i => i.complete && i.naturalWidth>0).length;
  const firstViewMedia=[...document.querySelectorAll('img,video,canvas,svg,[role="img"]')].map(el=>{
    const r=clippedRect(el); return {el,area:r.width*r.height,r};
  }).filter(x=>x.area>0 && x.r.y<vh && x.r.bottom>0).sort((a,b)=>b.area-a.area);
  const largestMedia=firstViewMedia[0];

  const anchorEls=[...document.querySelectorAll('h1,h2,img,video,canvas,svg,[role="img"]')];
  const anchors=anchorEls.map(el=>{
    const r=clippedRect(el), s=css(el), area=r.width*r.height;
    const isText=/^H[12]$/.test(el.tagName);
    const font=isText?num(s.fontSize):0;
    const score=Math.max(area/vpArea, isText?Math.min(.22,(font/80)*Math.max(.02,area/vpArea)):0);
    return {tag:el.tagName,cls:String(el.className||'').slice(0,100),score,areaRatio:area/vpArea,font,text:isText?(el.textContent||'').trim().replace(/\\s+/g,' ').slice(0,100):''};
  }).filter(x=>x.score>0).sort((a,b)=>b.score-a.score);
  const bestAnchor=anchors[0]||null;

  const ctaRx=/(book|reserve|buy|shop|start|explore|view|listen|play|search|submit|continue|查看|预订|预約|购买|購買|开始|開始|探索|了解|播放|搜索|提交|继续|繼續|下一步|入住|空房)/i;
  const controls=[...document.querySelectorAll('button,a[href],input[type="submit"],[role="button"]')];
  const visibleControls=controls.filter(isPainted).map(el=>({text:(el.innerText||el.value||el.getAttribute('aria-label')||'').trim().replace(/\\s+/g,' ').slice(0,100),tag:el.tagName,rect:rectObj(el.getBoundingClientRect())}));
  const ctas=visibleControls.filter(x=>ctaRx.test(x.text));
  const firstViewCtas=ctas.filter(x=>x.rect.top<vh && x.rect.bottom>0);

  const overflowX=document.documentElement.scrollWidth - vw;
  const tinyControls=controls.filter(isPainted).map(el=>{const r=el.getBoundingClientRect(); return {el,r};}).filter(x=>x.r.width<28||x.r.height<28).length;
  const hiddenCritical=[...document.querySelectorAll('h1, main h2, [data-primary], [data-hero-title]')].filter(el=>!textPainted(el)).map(el=>({tag:el.tagName,text:(el.textContent||'').trim().replace(/\\s+/g,' ').slice(0,100),class:String(el.className||'')}));

  return {
    url:location.href,title:document.title,readyState:document.readyState,
    viewport:{width:vw,height:vh,devicePixelRatio},document:{scrollWidth:document.documentElement.scrollWidth,scrollHeight:document.documentElement.scrollHeight},
    primaryHeading:primaryInfo,hiddenCritical,
    images:{total:imgs.length,loaded:loadedImgs,broken:brokenImgs},
    media:{firstViewportCount:firstViewMedia.length,largestAreaRatio:largestMedia?largestMedia.area/vpArea:0},
    anchor:{best:bestAnchor,top:anchors.slice(0,5)},
    controls:{visible:visibleControls.length,ctaCount:ctas.length,firstViewportCtaCount:firstViewCtas.length,tiny:tinyControls,firstViewportCtas:firstViewCtas.slice(0,8)},
    overflowX,
    bodyTextLength:(document.body?.innerText||'').trim().length
  };
})()`;

function sourceHeuristics(html) {
  const warnings = [];
  if (!html) return warnings;
  const h1 = html.match(/<h1\b[^>]*>[\s\S]*?<\/h1>/i)?.[0] || '';
  const styles = [...html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)].map(m=>m[1]).join('\n');
  if (h1 && styles) {
    const hiddenClasses = new Set();
    const ruleRx = /([^{}]+)\{([^{}]+)\}/g;
    let m;
    while ((m = ruleRx.exec(styles))) {
      const sel = m[1], decl = m[2];
      const hidden = /opacity\s*:\s*0(?:\D|$)/i.test(decl) || /visibility\s*:\s*hidden/i.test(decl) || /translate[XY]?\(\s*(?:10\d|1[1-9]\d|[2-9]\d\d)%/i.test(decl);
      if (!hidden) continue;
      for (const c of sel.matchAll(/\.([A-Za-z_-][\w-]*)/g)) hiddenClasses.add(c[1]);
    }
    const h1Classes = [...h1.matchAll(/class=["']([^"']+)["']/gi)].flatMap(m=>m[1].split(/\s+/));
    const suspects = [...new Set(h1Classes.filter(c=>hiddenClasses.has(c)))];
    if (suspects.length && !/(data-(?:rv|reveal|animate)|\brv-in\b|\bis-visible\b|\bvisible\b|\bshow\b|\bactive\b)/i.test(h1)) {
      warnings.push(`Potential H1 reveal deadlock: initially hidden/displaced class(es) ${suspects.map(x=>'.'+x).join(', ')} appear inside H1 without an obvious markup trigger. Browser verification should confirm the heading is actually painted.`);
    }
  }
  return warnings;
}

function staticPreflight(html, filePath=null) {
  const failures = [], warnings = sourceHeuristics(html);
  if (!html) return {failures,warnings,status:'PARTIAL',signals:{}};
  const h1Count = (html.match(/<h1\b/gi) || []).length;
  const imgTags = [...html.matchAll(/<img\b[^>]*\bsrc=["']([^"']+)["'][^>]*>/gi)].map(m=>m[1]);
  if (!h1Count) warnings.push('No H1 found in source.');
  if (!/<meta\b[^>]*name=["']viewport["']/i.test(html)) warnings.push('No viewport meta tag found.');

  const scriptErrors = [];
  for (const m of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
    const attrs = m[1] || '', code = m[2] || '';
    if (/\bsrc\s*=/i.test(attrs) || /type=["'](?:application\/ld\+json|application\/json|importmap)["']/i.test(attrs) || !code.trim()) continue;
    try { new Function(code); } catch (e) { scriptErrors.push(String(e.message || e)); }
  }
  if (scriptErrors.length) failures.push(`Inline JavaScript syntax error(s): ${scriptErrors.slice(0,3).join(' | ')}`);

  let missingLocalImages = 0;
  if (filePath) {
    const base = path.dirname(filePath);
    for (const src of imgTags) {
      if (/^(?:https?:|data:|blob:|\/\/|#)/i.test(src)) continue;
      const clean = decodeURIComponent(src.split(/[?#]/)[0]);
      const resolved = path.resolve(base, clean);
      if (!fs.existsSync(resolved)) missingLocalImages++;
    }
    if (missingLocalImages) failures.push(`Missing local image file(s): ${missingLocalImages}`);
  }
  if (!imgTags.length) warnings.push('No raster <img> media found in source. This may be intentional, but media-centric tasks should be reviewed.');
  return {failures,warnings,status:failures.length?'FAIL':'PARTIAL',signals:{h1Count,imageCount:imgTags.length,inlineScriptSyntaxErrors:scriptErrors.length,missingLocalImages}};
}

function writePartialReport(reason, preflight) {
  const status = preflight.failures.length ? 'FAIL' : 'PARTIAL';
  const report = {tool:'Taste Delivery Check',version:'1.1.0',generatedAt:nowIso(),target:targetArg,status,mode:'static-only',reason:String(reason?.message||reason||''),static:preflight};
  fs.writeFileSync(path.join(outDir,'taste-report.json'),JSON.stringify(report,null,2),'utf8');
  const lines=['# Taste Delivery Check','',`**Result: ${status} (static-only)**`,'',`Target: \`${targetArg}\``,'',`Browser verification unavailable: ${report.reason}`,''];
  if(preflight.failures.length){lines.push('## FAIL','',...preflight.failures.map(x=>'- '+x),'');}
  if(preflight.warnings.length){lines.push('## WARN','',...preflight.warnings.map(x=>'- '+x),'');}
  lines.push('## Static signals','',`- H1 count: ${preflight.signals.h1Count??0}`,`- Image tags: ${preflight.signals.imageCount??0}`,`- Inline JS syntax errors: ${preflight.signals.inlineScriptSyntaxErrors??0}`,`- Missing local image files: ${preflight.signals.missingLocalImages??0}`,'',
    'Dynamic visibility, console/runtime errors, responsive overflow and screenshots were **not** verified in this fallback mode.');
  fs.writeFileSync(path.join(outDir,'taste-report.md'),lines.join('\n'),'utf8');
  console.log(`\nTaste Delivery Check: ${status} (static-only)`);
  console.log(`Browser verification unavailable: ${report.reason}`);
  for(const f of preflight.failures) console.log(`  FAIL  ${f}`);
  for(const w of preflight.warnings) console.log(`  WARN  ${w}`);
  console.log(`\nReport: ${path.join(outDir,'taste-report.md')}\n`);
  process.exitCode = preflight.failures.length ? 1 : 0;
}

function gradeAnalysis(a, runtime) {
  const failures = [], warnings = [], passes = [];
  if (runtime.exceptions.length) failures.push(`Runtime exceptions: ${runtime.exceptions.length}`); else passes.push('No uncaught runtime exception');
  if (runtime.consoleErrors.length) warnings.push(`Console errors: ${runtime.consoleErrors.length}`); else passes.push('No console.error output');
  if (!a.primaryHeading) warnings.push('No H1/primary heading detected');
  else if (!a.primaryHeading.visible) failures.push(`Primary heading exists but is not visibly painted: “${a.primaryHeading.text || a.primaryHeading.tag}”`);
  else passes.push('Primary heading visibly painted');
  if (a.hiddenCritical?.length) failures.push(`Critical heading/content hidden: ${a.hiddenCritical.length}`);
  if (a.images.total > 0 && a.images.broken.length) {
    const ratio = a.images.broken.length / a.images.total;
    (ratio >= .2 ? failures : warnings).push(`Broken images: ${a.images.broken.length}/${a.images.total}`);
  } else if (a.images.total > 0) passes.push(`Images loaded: ${a.images.loaded}/${a.images.total}`);
  if (a.anchor.best && (a.anchor.best.score >= .055 || a.media.largestAreaRatio >= .22)) passes.push('First viewport has a dominant visual anchor');
  else warnings.push('First viewport may lack a strong visual anchor');
  if (a.controls.firstViewportCtaCount > 0) passes.push('First viewport contains a visible action/control');
  else warnings.push('No obvious primary action detected in first viewport');
  if (a.overflowX > 4) failures.push(`Horizontal overflow: ${Math.round(a.overflowX)}px`); else passes.push('No significant horizontal overflow');
  if (a.controls.tiny > 0) warnings.push(`Very small interactive controls detected: ${a.controls.tiny}`);
  if (a.bodyTextLength < 8) failures.push('Rendered body appears empty');
  else if (a.bodyTextLength < 30) warnings.push('Rendered body contains very little text; verify this is intentional');
  return { failures, warnings, passes, status: failures.length ? 'FAIL' : warnings.length ? 'WARN' : 'PASS' };
}

async function main() {
  const browserExe = findBrowser();
  if (!browserExe) throw new Error('Chrome / Edge / Chromium not found. Install a Chromium-based browser or set CHROME_PATH.');

  let staticServer = null;
  let targetUrl = targetArg;
  let sourceHtml = null;
  if (!isUrl) {
    sourceHtml = localSource;
    const served = await startStaticServer(inputPath);
    staticServer = served.server;
    targetUrl = served.url;
  }


  const profile = fs.mkdtempSync(path.join(os.tmpdir(), 'taste-check-'));
  const browserArgs = [
    '--headless=new', '--remote-debugging-port=0', `--user-data-dir=${profile}`,
    '--no-first-run', '--no-default-browser-check', '--disable-extensions', '--disable-popup-blocking', '--allow-file-access-from-files',
    '--hide-scrollbars', '--window-size=1440,900', 'about:blank'
  ];
  if (process.platform === 'linux' && process.getuid?.() === 0) browserArgs.unshift('--no-sandbox');

  const browser = spawn(browserExe, browserArgs, { stdio: 'ignore', windowsHide: true });
  let cdp;
  try {
    const port = await waitForDevtools(profile);
    const wsUrl = await waitForPageTarget(port);
    cdp = new CDP(wsUrl); await cdp.ready;

    const runtime = { exceptions: [], consoleErrors: [], networkFailures: [] };
    cdp.on('Runtime.exceptionThrown', p => runtime.exceptions.push(p.exceptionDetails?.text || p.exceptionDetails?.exception?.description || 'Runtime exception'));
    cdp.on('Runtime.consoleAPICalled', p => {
      if (p.type === 'error' || p.type === 'assert') runtime.consoleErrors.push((p.args || []).map(a => a.value ?? a.description ?? '').join(' ').slice(0,500));
    });
    cdp.on('Network.loadingFailed', p => runtime.networkFailures.push({url:p.requestId,errorText:p.errorText,type:p.type,canceled:p.canceled}));

    await Promise.all([cdp.send('Page.enable'), cdp.send('Runtime.enable'), cdp.send('Network.enable')]);

    async function renderTarget() {
      await cdp.send('Page.navigate',{url:targetUrl});
      await sleep(2200);
      const probe = await cdp.send('Runtime.evaluate',{
        expression:'({href:location.href,title:document.title,text:(document.body?.innerText||"").slice(0,240)})',
        returnByValue:true
      });
      const v = probe.result?.value || {};
      if (String(v.href||'').startsWith('chrome-error://') || /(?:localhost|127\.0\.0\.1|file|data).{0,30}(?:blocked|not allowed)/i.test(String(v.title||'')+' '+String(v.text||''))) {
        throw new Error('This Chrome/Edge installation blocks local test pages by organization policy. Use a personal Chrome/Edge profile/browser, or pass --browser <path>.');
      }
    }


    async function loadAndInspect(label, width, height, mobile=false, reduced=false) {
      runtime.exceptions.length = 0; runtime.consoleErrors.length = 0; runtime.networkFailures.length = 0;
      await cdp.send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile,screenWidth:width,screenHeight:height});
      await cdp.send('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:reduced?'reduce':'no-preference'}]});
      await renderTarget();
      const ev = await cdp.send('Runtime.evaluate',{expression:analysisExpression,returnByValue:true,awaitPromise:true});
      const analysis = ev.result?.value || {};
      const shot = await cdp.send('Page.captureScreenshot',{format:'png',captureBeyondViewport:false,fromSurface:true});
      fs.writeFileSync(path.join(outDir, `${label}.png`), Buffer.from(shot.data,'base64'));
      const rt = {exceptions:[...runtime.exceptions],consoleErrors:[...runtime.consoleErrors],networkFailures:[...runtime.networkFailures]};
      return {label,analysis,runtime:rt,grade:gradeAnalysis(analysis,rt)};
    }

    const desktop = await loadAndInspect('desktop-first-viewport',1440,900,false,false);
    const mobile = await loadAndInspect('mobile-first-viewport',390,844,true,false);
    const reduced = await loadAndInspect('reduced-motion-first-viewport',1440,900,false,true);

    // Full-page screenshot on desktop after restoring normal media.
    await cdp.send('Emulation.setDeviceMetricsOverride',{width:1440,height:900,deviceScaleFactor:1,mobile:false,screenWidth:1440,screenHeight:900});
    await cdp.send('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:'no-preference'}]});
    await renderTarget();
    try {
      const metrics = await cdp.send('Page.getLayoutMetrics');
      const size = metrics.cssContentSize || metrics.contentSize;
      const maxH = Math.min(size.height, 18000); // prevent absurd screenshots
      const shot = await cdp.send('Page.captureScreenshot',{format:'jpeg',quality:82,fromSurface:true,captureBeyondViewport:true,clip:{x:0,y:0,width:Math.min(size.width,1600),height:maxH,scale:1}});
      fs.writeFileSync(path.join(outDir,'desktop-full-page.jpg'),Buffer.from(shot.data,'base64'));
    } catch {}

    const all = [desktop,mobile,reduced];
    const sourceWarnings = sourceHeuristics(sourceHtml);
    const status = all.some(x=>x.grade.status==='FAIL') ? 'FAIL' : (all.some(x=>x.grade.status==='WARN') || sourceWarnings.length) ? 'WARN' : 'PASS';
    const report = {
      tool:'Taste Delivery Check',version:'1.1.0',generatedAt:nowIso(),target:targetArg,resolvedUrl:targetUrl,browser:browserExe,status,
      sourceWarnings,
      runs:{desktop,mobile,reducedMotion:reduced}
    };
    fs.writeFileSync(path.join(outDir,'taste-report.json'),JSON.stringify(report,null,2),'utf8');

    const lines=[];
    lines.push('# Taste Delivery Check','',`**Result: ${status}**`,``, `Target: \`${targetArg}\``, `Generated: ${report.generatedAt}`,'');
    if (sourceWarnings.length) {
      lines.push('## Static source warnings','');
      for (const w of sourceWarnings) lines.push(`- ${w}`);
      lines.push('');
    }
    for (const run of all) {
      lines.push(`## ${run.label}`,'',`Status: **${run.grade.status}**`,'');
      if(run.grade.failures.length){lines.push('### FAIL'); for(const x of run.grade.failures) lines.push(`- ${x}`); lines.push('');}
      if(run.grade.warnings.length){lines.push('### WARN'); for(const x of run.grade.warnings) lines.push(`- ${x}`); lines.push('');}
      lines.push('### Key signals',
        `- Primary heading: ${run.analysis.primaryHeading ? (run.analysis.primaryHeading.visible ? 'visible' : 'hidden') : 'not detected'}`,
        `- Images: ${run.analysis.images?.loaded ?? 0}/${run.analysis.images?.total ?? 0} loaded`,
        `- First-view CTA/control candidates: ${run.analysis.controls?.firstViewportCtaCount ?? 0}`,
        `- Horizontal overflow: ${Math.round(run.analysis.overflowX || 0)}px`,
        `- Largest first-view media area: ${Math.round((run.analysis.media?.largestAreaRatio || 0)*100)}% of viewport`,'');
    }
    lines.push('## Interpretation','',
      '- **FAIL** = mechanical delivery defect. Fix before delivery.',
      '- **WARN** = inspect the screenshots and use design judgment.',
      '- **PASS** = mechanics look healthy; this is **not** an aesthetic score.',
      '- Art direction, originality, composition rhythm, and “4+ taste” still belong to the Skill/model/human review.','');
    fs.writeFileSync(path.join(outDir,'taste-report.md'),lines.join('\n'),'utf8');

    console.log(`\nTaste Delivery Check: ${status}`);
    for (const w of sourceWarnings) console.log(`  WARN  ${w}`);
    for(const x of all) {
      console.log(`\n[${x.label}] ${x.grade.status}`);
      for(const f of x.grade.failures) console.log(`  FAIL  ${f}`);
      for(const w of x.grade.warnings) console.log(`  WARN  ${w}`);
    }
    console.log(`\nReport: ${path.join(outDir,'taste-report.md')}`);
    console.log(`Screenshots: ${outDir}\n`);
    process.exitCode = status === 'FAIL' ? 1 : 0;
  } finally {
    try { cdp?.close(); } catch {}
    try { browser.kill(); } catch {}
    try { staticServer?.close(); } catch {}
    setTimeout(()=>{ try{fs.rmSync(profile,{recursive:true,force:true});}catch{} },200);
  }
}

main().catch(err => {
  if (localSource) {
    writePartialReport(err, staticPreflight(localSource, inputPath));
    return;
  }
  console.error(`\nTaste Delivery Check could not run:\n${err.stack || err.message}\n`);
  process.exit(2);
});
