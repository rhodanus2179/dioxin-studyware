import assert from "node:assert/strict";
import fs from "node:fs";
const json=p=>JSON.parse(fs.readFileSync(p,"utf8"));
function csv(p){
 const t=fs.readFileSync(p,"utf8");let a=[],r=[],v="",q=false;
 for(let i=0;i<t.length;i++){const c=t[i];if(c==='"'){if(q&&t[i+1]==='"'){v+='"';i++;}else q=!q;}
 else if(c===','&&!q){r.push(v);v="";}
 else if(c==='\n'&&!q){r.push(v);a.push(r);r=[];v="";}
 else if(c!=='\r')v+=c;}
 assert.equal(q,false,"unclosed CSV field");
 return a.filter(r=>r.length&&r.some(x=>x!==""));
}
const sections=json("data/sections.json"),items=json("data/outline-items.json");
assert.equal(sections.length,65);assert.equal(items.length,185);
const secMap=new Map(sections.map(s=>[s.id,s]));
assert.equal(secMap.size,65);
const km=csv("docs/research/knowledge-map.csv").slice(1), kmById=new Map(km.map(r=>[r[0],r]));
assert.equal(kmById.size,218);
const itemByK=new Map(),itemIDs=new Set(),secItemCount=new Map();
for(const item of items){
 assert.ok(secMap.has(item.section_id),item.id);
 assert.equal(item.chapter_id,secMap.get(item.section_id).chapter_id,item.id);
 assert.ok(item.id.startsWith(item.section_id+"."),item.id);
 assert.ok(item.title.trim()&&item.learning_focus.trim(),item.id);
 assert.ok(!itemIDs.has(item.id),item.id);itemIDs.add(item.id);
 secItemCount.set(item.section_id,(secItemCount.get(item.section_id)||0)+1);
 for(const id of item.knowledge_ids){
  assert.ok(kmById.has(id),id);
  assert.equal(kmById.get(id)[3],item.section_id,id);
  assert.ok(!itemByK.has(id),"repeated knowledge "+id);
  itemByK.set(id,item.id);
 }
}
assert.equal(secItemCount.size,65);
for(const n of secItemCount.values())assert.ok(n>=2&&n<=4);
assert.equal(itemByK.size,218);
assert.equal(items.filter(i=>i.knowledge_ids.length===0).length,0);
const norm=csv("docs/research/knowledge-normalization.csv").slice(1),
 related=csv("docs/research/knowledge-crossrefs.csv").slice(1);
assert.equal(norm.length,218);assert.equal(related.length,26);
const canonical=new Map(norm.map(r=>[r[0],r[1]]));
assert.equal(canonical.size,218);
assert.equal(norm.filter(r=>r[0]!==r[1]).length,8);
for(const [id,to] of canonical){assert.ok(kmById.has(to),id);assert.equal(canonical.get(to),to);}
for(const r of related)assert.ok(kmById.has(r[0])&&kmById.has(r[1]));
const old=csv("docs/research/past-exam-choice-index.csv").slice(1);
const oldMap=new Map(old.map(r=>[r[0],r]));assert.equal(oldMap.size,1000);
const qa=csv("docs/research/review-queue.csv").slice(1);
const hold=new Set(qa.map(r=>r[0]));assert.equal(hold.size,175);
const links=csv("docs/research/choice-knowledge-map-v1.csv").slice(1);
const linkMap=new Map(links.map(r=>[r[0],r]));assert.equal(links.length,1000);assert.equal(linkMap.size,1000);
const statuses=new Set(["rationale-based-provisional","topic-link-provisional","single-source-tag-provisional","semantic-reviewed-provisional","precision-gap-review-required"]);
let reviewNum=0,holdNum=0;const countByCanon=new Map();
for(const r of links){
 assert.equal(r.length,14,r[0]);
 assert.ok(oldMap.has(r[0]),r[0]);assert.equal(r[1],oldMap.get(r[0])[1]);assert.equal(r[2],oldMap.get(r[0])[2]);
 assert.ok(kmById.has(r[4]));assert.equal(r[5],canonical.get(r[4]),r[0]);
 assert.equal(r[7],itemByK.get(r[5])||itemByK.get(r[4]),r[0]);
 for(const kid of r[6].split(" ").filter(Boolean))assert.ok(kmById.has(kid),r[0]+" secondary");
 assert.ok(statuses.has(r[8]),r[8]);
 assert.match(r[10],/^docs\/research\/r0[3-7]-choice-review\.csv$/);
 assert.equal(r[12],hold.has(r[0])?"HOLD":"no-explicit-HOLD",r[0]);
 if(hold.has(r[0]))holdNum++;
 if(r[8].includes("review-required"))reviewNum++;
 countByCanon.set(r[5],(countByCanon.get(r[5])||0)+1);
}
assert.equal(holdNum,175);
const review=csv("docs/research/choice-knowledge-review-queue.csv").slice(1),
 coverage=csv("docs/research/knowledge-choice-coverage.csv").slice(1);
assert.equal(reviewNum,23);assert.equal(review.length,23);
assert.equal(new Set(review.map(r=>r[0])).size,23);
for(const r of review)assert.ok(linkMap.get(r[0])[8].includes("review-required"));
assert.equal(coverage.length,218);
for(const r of coverage)assert.equal(r[4],String(countByCanon.get(r[1])||0),r[0]);
assert.equal(links.length-reviewNum,977);
assert.equal(links.filter(r=>r[8]==="semantic-reviewed-provisional").length,182);
assert.equal(links.filter(r=>r[8]==="precision-gap-review-required").length,23);
for(const id of ["DX-G05-015","DX-A01-015","DX-A02-022","DX-A04-035","DX-A04-036","DX-A04-037"]){
 const k=kmById.get(id);assert.ok(k&&k[9]==="candidate"&&k[12]==="to-verify",id);
 assert.ok(itemByK.has(id),id);
 assert.ok(coverage.some(x=>x[0]===id&&x[4]===String(countByCanon.get(id)||0)),id);
}

console.log("PASS: 65 sections, 185 items, 218 knowledge IDs, 210 canonical concepts, 1000 draft-option links, 23 precision-gap QA, 175 original HOLD");
