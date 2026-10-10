import fs from "node:fs";
import assert from "node:assert/strict";
function csv(p){const t=fs.readFileSync(p,"utf8");let rows=[],r=[],v="",q=false;for(let i=0;i<t.length;i++){const c=t[i];if(c==='"'){if(q&&t[i+1]==='"'){v+='"';i++}else q=!q}else if(c===','&&!q){r.push(v);v=""}else if(c==='\n'&&!q){r.push(v);v="";if(r.some(Boolean))rows.push(r);r=[]}else if(c!=='\r')v+=c}assert.equal(q,false);const h=rows.shift();return rows.map(r=>Object.fromEntries(h.map((k,i)=>[k,r[i]??""])));}
const root="docs/research/",e=csv(root+"choice-evidence-dashboard-205-pass30.csv"),a=csv(root+"choice-independent-evidence-pass35.csv"),tri=csv(root+"choice-map-triage-795-pass30.csv"),b=csv(root+"choice-semantic-inspection-pass35.csv"),s=csv(root+"source-register.csv"),q=csv(root+"r03-choice-review.csv"),holds=csv(root+"review-queue.csv");
assert.equal(e.length,205);assert.equal(a.length,14);assert.equal(tri.length,795);assert.equal(b.length,1);assert.equal(holds.length,175);
assert.equal(e.filter(x=>x.external_evidence_scope==="not-independently-verified").length,130);
const by=new Map(e.map(x=>[x.choice_id,x])),ids=new Set(s.map(x=>x.source_id));
for(const v of a){assert.ok(by.has(v.choice_id));assert.equal(v.publication_approval,"not-authorized");for(const sid of v.source_ids.split(" "))assert.ok(ids.has(sid),sid);}
assert.match(by.get("R03-G-Q08-C2").external_evidence_scope,/discrepancy/);
assert.match(by.get("R03-G-Q07-C4").remaining_evidence_check,/2001/);
assert.equal(tri.find(x=>x.choice_id==="R03-G-Q08-C5").review_priority,"resolved-2018-inventory-total-pass35");
assert.match(q.find(x=>x.choice_id==="R03-G-Q08-C2").original_explanation_draft,/未解決/);
console.log("PASS: 14 claims documented, 1 separate semantic review, numeric discrepancy flagged, 130 unaudited source rows, HOLD175 preserved");
