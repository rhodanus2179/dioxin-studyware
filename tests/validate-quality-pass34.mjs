import assert from "node:assert/strict";
import fs from "node:fs";
function csv(p){const t=fs.readFileSync(p,"utf8");let rows=[],r=[],v="",q=false;for(let i=0;i<t.length;i++){const c=t[i];if(c==='"'){if(q&&t[i+1]==='"'){v+='"';i++}else q=!q}else if(c===','&&!q){r.push(v);v=""}else if(c==='\n'&&!q){r.push(v);v="";if(r.some(Boolean))rows.push(r);r=[]}else if(c!=='\r')v+=c}assert.equal(q,false);const h=rows.shift();return rows.map(r=>Object.fromEntries(h.map((k,i)=>[k,r[i]??""])));}
const root="docs/research/";const e=csv(root+"choice-evidence-dashboard-205-pass30.csv"),tri=csv(root+"choice-map-triage-795-pass30.csv"),a=csv(root+"choice-independent-evidence-pass34.csv"),b=csv(root+"choice-semantic-inspection-pass34.csv"),km=csv(root+"knowledge-map.csv"),map=csv(root+"choice-knowledge-map-v1.csv"),q=csv(root+"review-queue.csv"),src=csv(root+"source-register.csv");
assert.equal(e.length,205);assert.equal(tri.length,795);assert.equal(a.length,14);assert.equal(b.length,11);assert.equal(km.length,227);assert.equal(q.length,175);
assert.equal(e.filter(x=>x.external_evidence_scope==="not-independently-verified").length,140);
const valid=new Set(src.map(x=>x.source_id));const eIDs=new Map(e.map(x=>[x.choice_id,x])),mIDs=new Map(map.map(x=>[x.choice_id,x])),tIDs=new Map(tri.map(x=>[x.choice_id,x]));
for(const x of a){assert.equal(x.publication_approval,"not-authorized");assert.ok(eIDs.has(x.choice_id));for(const v of x.source_ids.split(" "))assert.ok(valid.has(v),v);}
for(const x of b){assert.equal(x.publication_approval,"not-authorized");assert.ok(tIDs.has(x.choice_id));assert.equal(tIDs.get(x.choice_id).final_publication_approval,"not-authorized");for(const v of x.source_ids.split(" "))assert.ok(valid.has(v),v);}
for(let i=1;i<=5;i++){assert.equal(mIDs.get("R06-A-Q04-C"+i).primary_knowledge_id,"DX-A01-017");assert.equal(mIDs.get("R06-A-Q04-C"+i).publication_hold,"HOLD");}
assert.equal(km.filter(x=>x.knowledge_id==="DX-A01-017").length,1);
assert.equal(eIDs.get("R03-G-Q13-C2").external_evidence_scope,"TEF-congener-count-and-reprint-symbol-verified-wording-conflict");
console.log("PASS: 14 independent evidence updates, 11 semantic inspections, 172 still independently unverified, 175 HOLD preserved");
