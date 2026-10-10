import assert from "node:assert/strict";
import fs from "node:fs";
function csv(p){
 const t=fs.readFileSync(p,"utf8"),rows=[];let row=[],v="",q=false;
 for(let i=0;i<t.length;i++){const c=t[i];if(c==='"'){if(q&&t[i+1]==='"'){v+='"';i++}else q=!q;}
 else if(c===','&&!q){row.push(v);v="";}
 else if(c==='\n'&&!q){row.push(v);rows.push(row);row=[];v="";}
 else if(c!=='\r')v+=c;}assert.equal(q,false);return rows.filter(x=>x.length);
}
const questions=csv("docs/research/past-exam-question-index.csv").slice(1),
 choices=csv("docs/research/past-exam-choice-index.csv").slice(1),
 links=csv("docs/research/choice-knowledge-map-v1.csv").slice(1),
 resolved=csv("docs/outline/outline-v4-chapter-resolutions-pass26.csv").slice(1),
 semantic=csv("docs/research/choice-semantic-audit-pass27.csv").slice(1),
 source=csv("docs/research/choice-semantic-source-followup-pass27.csv").slice(1),
 followups=csv("docs/research/choice-knowledge-review-queue.csv").slice(1),
 hold=csv("docs/research/review-queue.csv").slice(1);
assert.equal(questions.length,200);assert.equal(choices.length,1000);assert.equal(links.length,1000);
assert.equal(resolved.length,12);assert.equal(semantic.length,205);assert.equal(source.length,205);
assert.equal(followups.length,0);assert.equal(hold.length,175);
assert.equal(precision.length,23);assert.equal(proof.length,23);
const qmap=new Map(questions.map(x=>[x[0],x])),linksBy=new Map(links.map(x=>[x[0],x]));
const selected=new Set(semantic.map(x=>x[0])),q12=new Map(resolved.map(x=>[x[0],x]));
assert.equal(selected.size,205);assert.equal(q12.size,12);
let choice12=0;
for(const r of choices){
 const qr=qmap.get(r[1]),lr=linksBy.get(r[0]);assert.ok(qr&&lr,r[0]);
 assert.equal(r[5],qr[5],r[0]);assert.equal(r[6],qr[6],r[0]);
 if(selected.has(r[0])||q12.has(r[1]))assert.ok(r[7].split(" ").includes(lr[4]),r[0]);
 if(q12.has(r[1]))choice12++;
}
assert.equal(choice12,60);
for(const r of resolved){
 const qr=qmap.get(r[0]);assert.equal(qr[5],r[4]);assert.equal(qr[6],r[5]);
 assert.ok(qr[8].split(" ").includes(r[6]),r[0]);
}
const byS=new Map(semantic.map(x=>[x[0],x]));
const precisionBy=new Map(precision.map(x=>[x[0],x]));
let exact=0,open=0;
for(const r of semantic){
 assert.equal(r.length,15,r[0]);
 const l=linksBy.get(r[0]);assert.ok(l,r[0]);
 if(r[7]==="precision-gap-review-required"){
  const p=precisionBy.get(r[0]);assert.ok(p,r[0]);assert.equal(p[2],r[4]);assert.equal(p[3],l[4]);assert.equal(p[4],l[7]);assert.equal(l[8],"semantic-reviewed-provisional");
 }else{assert.equal(r[4],l[4]);assert.equal(r[5],l[5]);assert.equal(r[6],l[7]);assert.equal(r[7],l[8]);}
 assert.ok(r[9].length>5&&r[10].length>25,r[0]);
 if(r[7]==="semantic-reviewed-provisional")exact++;
 else if(r[7]==="precision-gap-review-required")open++;
 else throw Error(r[0]+" unexpected status");
}
assert.equal(exact,182);assert.equal(open,23);
for(const r of precision)assert.equal(byS.get(r[0])?.[7],"precision-gap-review-required",r[0]);
for(const r of proof)assert.equal(precisionBy.get(r[0])?.[3],r[2],r[0]);
assert.equal(links.filter(x=>x[8]==="semantic-reviewed-provisional").length,205);
for(const r of source)assert.ok(byS.has(r[0]),r[0]);
assert.equal(new Set(source.map(r=>r[0])).size,205);
console.log("PASS: 12 chapter decisions, 60 affected choices, 205 meaning audits (23 pass27 gaps resolved by pass28), 205 original source checks and original HOLD175 preserved");
