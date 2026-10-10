import assert from "node:assert/strict";
import fs from "node:fs";
function csv(path){const s=fs.readFileSync(path,"utf8"),a=[];let r=[],v="",q=false;for(let i=0;i<s.length;i++){const c=s[i];if(c==='"'){if(q&&s[i+1]==='"'){v+='"';i++}else q=!q}else if(c===','&&!q){r.push(v);v=""}else if(c==='\n'&&!q){r.push(v);v="";if(r.some(Boolean))a.push(r);r=[]}else if(c!=='\r')v+=c}assert.equal(q,false);let h=a.shift();return a.map(r=>Object.fromEntries(h.map((x,i)=>[x,r[i]??""])));}
const d="docs/research/",ev=csv(d+"choice-evidence-dashboard-205-pass30.csv"),tri=csv(d+"choice-map-triage-795-pass30.csv"),sources=csv(d+"source-register.csv"),study=csv(d+"choice-independent-evidence-pass36.csv"),sem=csv(d+"choice-semantic-inspection-pass36.csv"),review=csv(d+"r04-choice-review.csv"),hold=csv(d+"review-queue.csv");
assert.equal(ev.length,205);assert.equal(tri.length,795);assert.equal(study.length,20);assert.equal(sem.length,14);assert.equal(hold.length,175);
assert.equal(ev.filter(x=>x.external_evidence_scope==="not-independently-verified").length,130);
const sourceIDs=new Set(sources.map(x=>x.source_id)),byEV=new Map(ev.map(x=>[x.choice_id,x])),byTri=new Map(tri.map(x=>[x.choice_id,x]));
for(const x of study){assert.equal(x.publication_approval,"not-authorized");assert.equal(byEV.get(x.choice_id)?.external_evidence_scope,x.evidence_class);for(const s of x.reference_ids.split(" "))assert.ok(sourceIDs.has(s),s);}
for(const x of sem){assert.equal(x.publication_approval,"not-authorized");assert.ok(byTri.has(x.choice_id));assert.equal(byTri.get(x.choice_id).review_priority,"semantic-source-scoped-reviewed-pass36");for(const s of x.source_ids.split(" "))assert.ok(sourceIDs.has(s),s);}
assert.match(byEV.get("R04-G-Q11-C1").editorial_note,/292/);
assert.match(review.find(x=>x.choice_id==="R04-G-Q11-C1").original_explanation_draft,/モノアイソトピック質量/);
assert.equal(byEV.get("R05-G-Q11-C4").external_evidence_scope,"WHO-TEF-2006-specific-coefficient-confirmed");
assert.equal(byEV.get("R03-G-Q14-C2").external_evidence_scope,"peer-reviewed-denovo-multi-products-partial");
console.log("PASS: 20 scoped scientific reviews, 14 semantic inspections, 130 no-independent-source, 175 HOLD unchanged");
