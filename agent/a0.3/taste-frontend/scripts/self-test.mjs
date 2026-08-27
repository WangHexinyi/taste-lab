#!/usr/bin/env node
import {spawnSync} from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import {fileURLToPath} from 'node:url';

const here=path.dirname(fileURLToPath(import.meta.url));
const skillRoot=path.resolve(here,'..');
const check=path.join(here,'taste-check.mjs');
const flow=path.join(here,'taste-flow.mjs');
const handoff=path.join(here,'taste-handoff.mjs');
const good=path.join(skillRoot,'examples','good-delivery.html');
const bad=path.join(skillRoot,'examples','bad-delivery.html');
const temp=fs.mkdtempSync(path.join(os.tmpdir(),'taste-skill-selftest-'));
const outRoot=path.join(temp,'qa');
fs.mkdirSync(outRoot,{recursive:true});

function run(args,cwd=skillRoot){return spawnSync(process.execPath,args,{cwd,encoding:'utf8',timeout:90000,windowsHide:true});}
const failures=[];
for(const p of [check,flow,handoff,good,bad]) if(!fs.existsSync(p)) failures.push(`missing: ${p}`);

fs.writeFileSync(path.join(temp,'index.html'),'<h1>Self test project</h1>');
fs.writeFileSync(path.join(temp,'package.json'),'{"name":"taste-self-test","private":true}');
fs.mkdirSync(path.join(temp,'src'),{recursive:true});
fs.writeFileSync(path.join(temp,'src','main.js'),'console.log("ok")');

const init=run([flow,'init','index.html'],temp);
if(init.status!==0 || !fs.existsSync(path.join(temp,'.taste','state.json'))) failures.push('taste-flow init failed');

const g=run([check,good,'--out',path.join(outRoot,'good')]);
const b=run([check,bad,'--out',path.join(outRoot,'bad')]);
let gr={},br={};
try{gr=JSON.parse(fs.readFileSync(path.join(outRoot,'good','taste-report.json'),'utf8'))}catch{failures.push('good report missing')}
try{br=JSON.parse(fs.readFileSync(path.join(outRoot,'bad','taste-report.json'),'utf8'))}catch{failures.push('bad report missing')}
if(gr.status==='FAIL') failures.push(`good page unexpectedly failed (${gr.status})`);
if(br.status!=='FAIL') failures.push(`bad page was not rejected (${br.status||'no status'})`);

// Verify QA-state synchronization using the good report, regardless of PASS/WARN/PARTIAL.
fs.mkdirSync(path.join(temp,'.taste','qa'),{recursive:true});
fs.copyFileSync(path.join(outRoot,'good','taste-report.json'),path.join(temp,'.taste','qa','taste-report.json'));
const q=run([flow,'qa','.taste/qa/taste-report.json'],temp);
if(q.status!==0) failures.push('taste-flow qa synchronization failed');
else {
  try{
    const st=JSON.parse(fs.readFileSync(path.join(temp,'.taste','state.json'),'utf8'));
    if(!st.qa?.status || st.qa.attempts<1) failures.push('taste-flow qa state not updated');
  }catch{failures.push('state unreadable after qa sync')}
}

const h=run([handoff,temp,'taste-benchmark-return'],temp);
if(h.status!==0 || !fs.existsSync(path.join(temp,'taste-benchmark-return','handoff-manifest.json'))) failures.push('taste-handoff failed');

console.log('\nTaste Frontend portable skill self-test');
console.log(`Flow init:   ${init.status===0?'PASS':'FAIL'}`);
console.log(`QA sync:     ${q.status===0?'PASS':'FAIL'}`);
console.log(`Handoff:     ${h.status===0?'PASS':'FAIL'}`);
console.log(`Good sample: ${gr.status||'NO REPORT'}`);
console.log(`Bad sample:  ${br.status||'NO REPORT'}`);
if(failures.length){ console.log('RESULT: FAIL'); failures.forEach(x=>console.log(' - '+x)); process.exit(1); }
console.log('RESULT: PASS');
console.log(`Temporary reports: ${outRoot}`);
