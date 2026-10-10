import assert from "node:assert/strict";
import fs from "node:fs";
function csv(path){let s=fs.readFileSync(path,"utf8"),all=[],row=[],v="",q=false;for(let i=0;i<s.length;i++){let c=s[i];if(c==='"'){if(q&&s[i+1]==='"'){v+='"';i++}else q=!q}else if(c===','&&!q){row.push(v);v=""}else if(c==='\n'&&!q){row.push(v);v="";if(row.some(x=>x!==""))all.push(row);row=[]}else if(c!=='\r')v+=c}assert.equal(q,false);let hdr=all.shift();return all.map(x=>Object.fromEntries(hdr.map((h,i)=>[h,x[i]??""])));}
const pre="docs/research/",e=csv(pre+"choice-evidence-dashboard-205-pass30.csv"),t=csv(pre+"choice-map-triage-795-pass30.csv"),a=csv(pre+"choice-independent-evidence-pass37.csv"),b=csv(pre+"choice-semantic-inspection-pass37.csv"),c=csv(pre+"choice-legacy-evidence-upgrades-pass37.csv"),s=csv(pre+"source-register.csv"),r=csv(pre+"r05-choice-review.csv"),r3=csv(pre+"r03-choice-review.csv"),holds=csv(pre+"review-queue.csv");
assert.equal(e.length,205);assert.equal(t.length,795);assert.equal(a.length,10);assert.equal(b.length,5);assert.equal(c.length,2);assert.equal(holds.length,175);assert.equal(e.filter(x=>x.external_evidence_scope==="not-independently-verified").length,130);
const by=new Map(e.map(x=>[x.choice_id,x])),tri=new Map(t.map(x=>[x.choice_id,x])),src=new Set(s.map(x=>x.source_id)),rev=new Map(r.map(x=>[x.choice_id,x]));
for(const x of a){assert.equal(x.publication_approval,"not-authorized");assert.equal(by.get(x.choice_id).external_evidence_scope,x.evidence_scope);for(let id of x.source_ids.split(" "))assert.ok(src.has(id),id);}
for(const x of c){assert.equal(by.get(x.choice_id).external_evidence_scope,x.new_scope);for(let id of x.source_ids.split(" "))assert.ok(src.has(id),id);}
assert.match(by.get("R03-G-Q07-C4").editorial_note,/2,730/);assert.match(by.get("R03-G-Q07-C5").editorial_note,/3,635/);
for(const x of b){assert.equal(x.publication_approval,"not-authorized");assert.equal(tri.get(x.choice_id).meaning_review_status,x.review_status);assert.match(rev.get(x.choice_id).original_explanation_draft,/IARC/);for(let id of x.independent_source_ids.split(" "))assert.ok(src.has(id),id);}
assert.match(tri.get("R05-G-Q10-C4").review_priority,/P0/);assert.match(tri.get("R05-G-Q10-C5").review_priority,/P0/);
assert.match(by.get("R03-G-Q08-C2").external_evidence_scope,/discrepancy/);assert.match(r3.find(x=>x.choice_id==="R03-G-Q08-C2").original_explanation_draft,/大気排出量/);
console.log("PASS37: 10 first-time source checks; two historical classifications confirmed; 5 vapor pressures reviewed; 130 no-source and 175 HOLD remain");
