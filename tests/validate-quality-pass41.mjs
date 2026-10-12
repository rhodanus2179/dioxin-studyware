import assert from "node:assert/strict";
import fs from "node:fs";
function csv(path){const s=fs.readFileSync(path,"utf8");let rows=[],r=[],v="",q=false;for(let i=0;i<s.length;i++){let c=s[i];if(c==='"'){if(q&&s[i+1]==='"'){v+='"';i++}else q=!q}else if(c===','&&!q){r.push(v);v=""}else if(c==='\n'&&!q){r.push(v);v="";if(r.some(Boolean))rows.push(r);r=[]}else if(c!=='\r')v+=c}assert.equal(q,false);const h=rows.shift();return rows.map(r=>Object.fromEntries(h.map((x,i)=>[x,r[i]??""])));}
const root="docs/research/";
const q=csv(root+"review-queue.csv"), c=csv(root+"r05-choice-review.csv"), s=csv(root+"source-register.csv"), a=csv(root+"choice-vapor-pressure-reconciliation-pass41.csv");
assert.equal(q.length,175);assert.equal(a.length,5);assert.equal(q.filter(x=>x.priority.startsWith("P0-")).length,0);
const ids=["R05-G-Q10-C1","R05-G-Q10-C2","R05-G-Q10-C3","R05-G-Q10-C4","R05-G-Q10-C5"];
assert.deepEqual(a.map(x=>x.choice_id),ids);
const qs=new Map(q.map(x=>[x.choice_id,x])),cs=new Map(c.map(x=>[x.choice_id,x]));
for(const x of a){const k=qs.get(x.choice_id),y=cs.get(x.choice_id);assert.ok(k&&y,x.choice_id);assert.equal(x.priority,"P1");assert.equal(x.publication_state,"HOLD");assert.ok(k.priority.startsWith("P1-"),x.choice_id);assert.ok(k.publication_state.startsWith("HOLD-"),x.choice_id);assert.ok(k.next_action.includes("QA41"),x.choice_id);assert.ok(y.original_explanation_draft.includes("QA41"),x.choice_id);assert.ok(y.verification_flag.includes("QA41"),x.choice_id);}
assert.equal(cs.get("R05-G-Q10-C2").selected_in_official_key,"yes");
assert.match(cs.get("R05-G-Q10-C2").original_explanation_draft,/1.73/);
assert.match(cs.get("R05-G-Q10-C5").original_explanation_draft,/1.7×10\^-6/);
for(const id of ["QA41-MOE-VAPOR-HANDBOOK-2004","QA41-MOE-VAPOR-GUIDELINE-2011","QA41-R01-G-Q08-SECONDARY"])assert.ok(s.some(x=>x.source_id===id),id);
const report=fs.readFileSync(root+"quality-audit-pass41-vapor-reconciliation.md","utf8");
assert.ok(report.includes("Foreman and Bidleman"));assert.ok(report.includes("175件"));
console.log("PASS41: original Japanese ministry vapor-pressure compilation resolves three scoped P0 flags to P1; official answer 2 and 175 HOLD preserved.");
