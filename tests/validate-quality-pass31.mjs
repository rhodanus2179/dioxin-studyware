import assert from "node:assert/strict";
import fs from "node:fs";
function csv(p){let s=fs.readFileSync(p,"utf8"),rows=[],r=[],v="",q=false;
for(let i=0;i<s.length;i++){let c=s[i];if(c==='"'){if(q&&s[i+1]==='"'){v+='"';i++}else q=!q}
else if(c===','&&!q){r.push(v);v=""}else if(c==='\n'&&!q){r.push(v);v="";if(r.some(Boolean))rows.push(r);r=[]}
else if(c!=='\r')v+=c}
assert.equal(q,false);let h=rows.shift();return rows.map(r=>Object.fromEntries(h.map((x,i)=>[x,r[i]??""])));}
const path="docs/research/";
const map=new Map(csv(path+"choice-knowledge-map-v1.csv").map(x=>[x.choice_id,x]));
const ledger=new Map(csv(path+"choice-map-triage-795-pass30.csv").map(x=>[x.choice_id,x]));
const revised=csv(path+"choice-semantic-corrections-pass31.csv");
assert.equal(map.size,1000);assert.equal(ledger.size,795);assert.equal(revised.length,14);
const changedIDs=new Set();
for(const x of revised){assert.ok(!changedIDs.has(x.choice_id));changedIDs.add(x.choice_id);
 assert.equal(map.get(x.choice_id).primary_knowledge_id,x.new_primary_id);
 assert.equal(map.get(x.choice_id).item_id,x.new_item_id);
 assert.equal(ledger.get(x.choice_id).meaning_review_status,"choice-explanation-manual-link-corrected-original-and-science-QA-pending");
 assert.equal(x.publication_approval,"not-authorized");}
for(const yr of ["R03","R05"]){for(let i=1;i<=5;i++){
const id=yr+"-A-Q04-C"+i;
assert.ok(changedIDs.has(id));assert.equal(map.get(id).primary_knowledge_id,"DX-A01-015");}}
for(let i=1;i<=3;i++)assert.equal(map.get("R05-G-Q09-C"+i).primary_knowledge_id,"DX-G04-010");
assert.equal(map.get("R03-G-Q13-C1").primary_knowledge_id,"DX-G04-016");
for(let i=1;i<=5;i++){
assert.equal(ledger.get("R07-G-Q05-C"+i).review_priority,"resolved-manager-duties-category-pass32");
assert.equal(map.get("R07-G-Q05-C"+i).primary_knowledge_id,"DX-G01-024");
assert.equal(ledger.get("R06-A-Q04-C"+i).review_priority,"resolved-collector-comparison-pass33");
assert.equal(map.get("R06-A-Q04-C"+i).primary_knowledge_id,"DX-A01-017");}
console.log("PASS: 14 pass31 semantic corrections, 5 remaining collector-comparison flags, 795 choice ledger consistent");
