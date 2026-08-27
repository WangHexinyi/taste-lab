#!/usr/bin/env node
/**
 * Taste Flow — portable workflow state helper for Agent Skills-compatible agents.
 * Zero npm dependencies. Run from the USER project/workspace root.
 *
 * Usage:
 *   node <skill-root>/scripts/taste-flow.mjs init [target]
 *   node <skill-root>/scripts/taste-flow.mjs status
 *   node <skill-root>/scripts/taste-flow.mjs gate understand|acquire|direct|build|review
 *   node <skill-root>/scripts/taste-flow.mjs qa [.taste/qa/taste-report.json]
 *   node <skill-root>/scripts/taste-flow.mjs finish
 */
import fs from 'node:fs';
import path from 'node:path';

const cwd = process.cwd();
const tasteDir = path.join(cwd, '.taste');
const statePath = path.join(tasteDir, 'state.json');
const args = process.argv.slice(2);
const cmd = args[0] || 'status';

function load(){
  if(!fs.existsSync(statePath)) return null;
  try { return JSON.parse(fs.readFileSync(statePath,'utf8')); }
  catch { fail('invalid .taste/state.json'); }
}
function save(s){
  fs.mkdirSync(tasteDir,{recursive:true});
  s.updatedAt = new Date().toISOString();
  fs.writeFileSync(statePath, JSON.stringify(s,null,2));
}
function fail(msg){ console.error(`Taste Flow: FAIL — ${msg}`); process.exit(1); }
function ok(msg){ console.log(`Taste Flow: PASS — ${msg}`); }
function req(v,label,errs){ if(v===undefined||v===null||v===''||(Array.isArray(v)&&!v.length)) errs.push(label); }

if(cmd==='init'){
  const target = args[1] || 'index.html';
  const state = {
    version:4,
    active:true,
    mode:'guided',
    target,
    brief:'',
    phase:'understand',
    surface:{
      class:'', goal:'', audience:'', primaryTask:'', realOrFictional:'',
      mediaDependency:'', interactionDependency:'', styleIntent:[], categoryPromise:''
    },
    acquire:{
      contentMode:'', freshnessSensitive:false, sources:[], assets:[], benchmarks:[], blockers:[]
    },
    direction:{
      categoryPromise:'', desiredUserFeeling:'', dominantMedium:'', visualThesis:'',
      colorBehavior:'', typeBehavior:'', compositionBehavior:'', compositionRhythm:'',
      depthBehavior:'', spatialMode:'', spatialRole:'', motionBehavior:'', motionVocabulary:'',
      antiClicheStrategy:'', signatureMoment:''
    },
    gates:{understand:false,acquire:false,direct:false,build:false,review:false},
    review:{visualReviewed:false,notes:[]},
    qa:{status:null,reportPath:null,attempts:0,lastSyncedAt:null},
    createdAt:new Date().toISOString()
  };
  save(state);
  ok(`initialized ${path.relative(cwd,statePath)} for target ${target}`);
  process.exit(0);
}

if(cmd==='status'){
  const s=load();
  if(!s){ console.log('Taste Flow: INACTIVE — no .taste/state.json'); process.exit(0); }
  console.log(JSON.stringify({active:s.active,phase:s.phase,target:s.target,gates:s.gates,qa:s.qa,review:s.review,direction:s.direction},null,2));
  process.exit(0);
}

if(cmd==='qa'){
  const s=load(); if(!s) fail('no active state; run init first');
  const reportArg=args[1] || '.taste/qa/taste-report.json';
  const reportPath=path.resolve(cwd,reportArg);
  if(!fs.existsSync(reportPath)) fail(`QA report missing: ${reportArg}`);
  let report;
  try { report=JSON.parse(fs.readFileSync(reportPath,'utf8')); }
  catch { fail(`invalid QA report JSON: ${reportArg}`); }
  const status=String(report.status||'').toUpperCase();
  if(!['PASS','WARN','PARTIAL','FAIL'].includes(status)) fail(`unrecognized QA status: ${status||'missing'}`);
  s.qa.status=status;
  s.qa.reportPath=path.relative(cwd,reportPath).replaceAll('\\','/');
  s.qa.attempts=(Number(s.qa.attempts)||0)+1;
  s.qa.lastSyncedAt=new Date().toISOString();
  save(s);
  if(status==='FAIL') fail(`QA synchronized with blocking status FAIL (${s.qa.reportPath})`);
  ok(`QA synchronized: ${status} (${s.qa.reportPath})`);
  process.exit(0);
}

if(cmd==='gate'){
  const gate=args[1];
  const s=load(); if(!s) fail('no active state; run init first');
  const errs=[];
  if(gate==='understand'){
    req(s.surface?.class,'surface.class',errs); req(s.surface?.goal,'surface.goal',errs);
    req(s.surface?.audience,'surface.audience',errs); req(s.surface?.primaryTask,'surface.primaryTask',errs);
    req(s.surface?.realOrFictional,'surface.realOrFictional',errs); req(s.surface?.styleIntent,'surface.styleIntent',errs);
    req(s.surface?.categoryPromise,'surface.categoryPromise',errs);
  } else if(gate==='acquire'){
    if(!s.gates?.understand) errs.push('understand gate not passed');
    req(s.acquire?.contentMode,'acquire.contentMode',errs);
    const real = String(s.surface?.realOrFictional||'').toLowerCase()==='real';
    const mediaHigh = /high|strong|强|高/i.test(String(s.surface?.mediaDependency||''));
    if(real && !(s.acquire?.sources||[]).length) errs.push('real subject requires at least one source');
    if(s.acquire?.freshnessSensitive && !(s.acquire?.sources||[]).some(x=>x.firstParty)) errs.push('freshness-sensitive task requires a first-party source');
    if(mediaHigh && !(s.acquire?.assets||[]).length) errs.push('high media dependency requires acquired/generated asset evidence');
  } else if(gate==='direct'){
    if(!s.gates?.acquire) errs.push('acquire gate not passed');
    for(const k of [
      'categoryPromise','desiredUserFeeling','dominantMedium','visualThesis','colorBehavior','typeBehavior',
      'compositionBehavior','compositionRhythm','depthBehavior','spatialMode','spatialRole','motionBehavior',
      'motionVocabulary','antiClicheStrategy'
    ]) req(s.direction?.[k],`direction.${k}`,errs);
  } else if(gate==='build'){
    if(!s.gates?.direct) errs.push('direct gate not passed');
    const target=s.target||'index.html';
    if(!/^https?:\/\//i.test(target) && !fs.existsSync(path.resolve(cwd,target))) errs.push(`target missing: ${target}`);
  } else if(gate==='review'){
    if(!s.gates?.build) errs.push('build gate not passed');
    if(s.qa?.status==='FAIL' || !s.qa?.status) errs.push(`qa status is ${s.qa?.status||'missing'}`);
    if(!s.review?.visualReviewed) errs.push('review.visualReviewed is false');
  } else fail('unknown gate; use understand|acquire|direct|build|review');

  if(errs.length) fail(`${gate}: ${errs.join('; ')}`);
  s.gates[gate]=true;
  const phaseMap={understand:'acquire',acquire:'direct',direct:'build',build:'review',review:'done'};
  s.phase=phaseMap[gate]||s.phase;
  save(s); ok(`${gate} gate passed`); process.exit(0);
}

if(cmd==='finish'){
  const s=load(); if(!s) fail('no state');
  if(!s.gates?.review) fail('review gate not passed');
  s.active=false; s.phase='done'; save(s); ok('workflow complete'); process.exit(0);
}

fail('unknown command. Use init|status|qa|gate|finish');
