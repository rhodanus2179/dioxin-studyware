import assert from "node:assert/strict";
import fs from "node:fs";
function csv(path) {
 const text=fs.readFileSync(path,"utf8");
 const rows=[]; let row=[],value="",quoted=false;
 for(let i=0;i<text.length;i++){
  const c=text[i];
  if(c==='"'){if(quoted&&text[i+1]==='"'){value+='"';i++;}else quoted=!quoted;}
  else if(c===','&&!quoted){row.push(value);value="";}
  else if(c==='\n'&&!quoted){row.push(value);value="";if(row.some(Boolean))rows.push(row);row=[];}
  else if(c!=='\r')value+=c;
 }
 assert.equal(quoted,false,"CSV quote must be closed: "+path);
 const cols=rows.shift();return rows.map(r=>Object.fromEntries(cols.map((c,i)=>[c,r[i]??""])));
}
const root="docs/research/";
const m=csv(root+"choice-knowledge-map-v1.csv");
const semantic=csv(root+"choice-semantic-audit-pass27.csv");
const remaining=csv(root+"choice-map-triage-795-pass30.csv");
const roles=csv(root+"knowledge-zero-link-roles-pass30.csv");
const evidence=csv(root+"choice-evidence-dashboard-205-pass30.csv");
const coverage=csv(root+"knowledge-choice-coverage.csv");
const holds=csv(root+"review-queue.csv");
assert.equal(m.length,1000);assert.equal(semantic.length,205);
assert.equal(remaining.length,795);assert.equal(evidence.length,205);
assert.equal(roles.length,118);assert.equal(holds.length,175);
const byID=new Map(m.map(r=>[r.choice_id,r]));
assert.equal(byID.size,1000);
const semIDs=new Set(semantic.map(r=>r.choice_id));
assert.equal(semIDs.size,205);
const seen=new Set();
for(const r of remaining){
 assert.ok(!seen.has(r.choice_id));seen.add(r.choice_id);
 assert.ok(byID.has(r.choice_id)&&!semIDs.has(r.choice_id));
 assert.equal(r.id_item_gate,"PASS",r.choice_id);
 assert.equal(r.official_key_gate,"PASS",r.choice_id);
 assert.equal(r.hold_queue_gate,"PASS",r.choice_id);
 assert.equal(r.final_publication_approval,"not-authorized",r.choice_id);
}
const seen205=new Set();
for(const r of evidence){
 assert.ok(!seen205.has(r.choice_id));seen205.add(r.choice_id);
 assert.ok(semIDs.has(r.choice_id));
 assert.equal(r.publication_approval,"not-authorized");
}
const byCanon=new Map();
for(const r of m)byCanon.set(r.canonical_knowledge_id,(byCanon.get(r.canonical_knowledge_id)||0)+1);
for(const r of coverage)assert.equal(+r.mapped_choices,byCanon.get(r.canonical_id)||0,r.knowledge_id);
const noLinks=new Set(coverage.filter(r=>+r.mapped_choices===0).map(r=>r.knowledge_id));
assert.equal(noLinks.size,118);
const roleIDs=new Set();
for(const r of roles){
 assert.ok(!roleIDs.has(r.knowledge_id));roleIDs.add(r.knowledge_id);
 assert.ok(noLinks.has(r.knowledge_id));
 assert.equal(r.evidence_verification_status,"to-verify-original-sources");
}
assert.equal(roleIDs.size,118);
assert.equal(byID.get("R07-G-Q01-C4").primary_knowledge_id,"DX-A05-002");
assert.equal(byID.get("R07-G-Q01-C4").item_id,"12.1.2");
assert.equal(byID.get("R07-G-Q01-C5").primary_knowledge_id,"DX-A05-010");
assert.equal(byID.get("R07-G-Q01-C5").item_id,"12.4.1");
for(const id of ["R07-G-Q01-C4","R07-G-Q01-C5"])
 assert.equal(remaining.find(r=>r.choice_id===id).meaning_review_status,"JEMAI-original-image-manual-link-corrected");
console.log("PASS: 795 triage, 205 evidence followups, 118 zero-link roles, 2 confirmed corrections, 175 unchanged HOLD");
