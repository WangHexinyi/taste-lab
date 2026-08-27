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
const good=path.join(skillRoot,'examples','good-delivery.html');
const bad=path.join(skillRoot,'examples','bad-delivery.html');
const temp=fs.mkdtempSync(path.join(os.tmpdir(),'taste-skill-selftest-'));
const outRoot=path.join(temp,'qa');
fs.mkdirSync(outRoot,{recursive:true});

function run(args,cwd=skillRoot){return spawnSync(process.execPath,args,{cwd,encoding:'utf8',timeout:90000,windowsHide:true});}
const failures=[];
for(const p of [check,flow,good,bad]) if(!fs.existsSync(p)) failures.push(`missing: ${p}`);

const init=run([flow,'init','index.html'],temp);
if(init.status!==0 || !fs.existsSync(path.join(temp,'.taste','state.json'))) failures.push('taste-flow init failed');

const g=run([check,good,'--out',path.join(outRoot,'good')]);
const b=run([check,bad,'--out',path.join(outRoot,'bad')]);
let gr={},br={};
try{gr=JSON.parse(fs.readFileSync(path.join(outRoot,'good','taste-report.json'),'utf8'))}catch{failures.push('good report missing')}
try{br=JSON.parse(fs.readFileSync(path.join(outRoot,'bad','taste-report.json'),'utf8'))}catch{failures.push('bad report missing')}
if(gr.status==='FAIL') failures.push(`good page unexpectedly failed (${gr.status})`);
if(br.status!=='FAIL') failures.push(`bad page was not rejected (${br.status||'no status'})`);

console.log('\nTaste Frontend portable skill self-test');
console.log(`Flow init:   ${init.status===0?'PASS':'FAIL'}`);
console.log(`Good sample: ${gr.status||'NO REPORT'}`);
console.log(`Bad sample:  ${br.status||'NO REPORT'}`);
if(failures.length){ console.log('RESULT: FAIL'); failures.forEach(x=>console.log(' - '+x)); process.exit(1); }
console.log('RESULT: PASS');
console.log(`Temporary reports: ${outRoot}`);
