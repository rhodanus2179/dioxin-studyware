import assert from "node:assert/strict";
import fs from "node:fs";
function csv(path){const s=fs.readFileSync(path,"utf8");let rows=[],r=[],v="",q=false;for(let i=0;i<s.length;i++){const c=s[i];if(c==='"'){if(q&&s[i+1]==='"'){v+='"';i++}else q=!q}else if(c===','&&!q){r.push(v);v=""}else if(c==='\n'&&!q){r.push(v);v="";if(r.some(Boolean))rows.push(r);r=[]}else if(c!=='\r')v+=c;}assert.equal(q,false);const h=rows.shift();return rows.map(r=>Object.fromEntries(h.map((x,i)=>[x,r[i]??""])));}
const base="docs/research/";
const holds=csv(base+"review-queue.csv"),tri=csv(base+"choice-map-triage-795-pass30.csv"),map=csv(base+"choice-knowledge-map-v1.csv"),sources=csv(base+"source-register.csv"),e=csv(base+"choice-evidence-dashboard-205-pass30.csv"),coverage=csv(base+"knowledge-choice-coverage.csv"),gate=csv(base+"pr3-merge-checklist.csv"),v41=csv(base+"choice-vapor-pressure-reconciliation-pass41.csv");
const chapters=JSON.parse(fs.readFileSync("data/chapters.json","utf8")),sections=JSON.parse(fs.readFileSync("data/sections.json","utf8")),items=JSON.parse(fs.readFileSync("data/outline-items.json","utf8")),figures=JSON.parse(fs.readFileSync("data/figures.json","utf8")),questions=JSON.parse(fs.readFileSync("data/questions.json","utf8"));
assert.equal(chapters.length,13);assert.equal(sections.length,65);assert.equal(items.length,185);assert.equal(coverage.length,227);assert.equal(coverage.filter(x=>Number(x.mapped_choices)===0).length,118);
assert.equal(map.length,1000);assert.equal(new Set(map.map(x=>x.question_id)).size,200);assert.equal(new Set(map.map(x=>x.choice_id)).size,1000);assert.equal(e.length,205);assert.equal(e.filter(x=>x.external_evidence_scope==="not-independently-verified").length,122);assert.equal(tri.length,795);assert.equal(tri.filter(x=>x.meaning_review_status==="individual-semantic-content-review-pending").length,727);
assert.equal(holds.length,175);assert.equal(holds.filter(x=>x.priority.startsWith("P0-")).length,0);assert.equal(tri.filter(x=>x.review_priority.startsWith("P0-")).length,0);assert.ok(holds.every(x=>x.publication_state.startsWith("HOLD-")));assert.equal(sources.length,218);
assert.equal(figures.length,19);assert.ok(figures.every(x=>x.status==="planned"&&x.asset_path===null));assert.equal(questions.length,9);
for(const id of ["R05-G-Q10-C3","R05-G-Q10-C4","R05-G-Q10-C5"]){const h=holds.find(x=>x.choice_id===id),t=tri.find(x=>x.choice_id===id);assert.ok(h&&t);assert.ok(h.priority.startsWith("P1-"));assert.match(t.review_priority,/P1-official-original-and-publication-QA-pass41/);assert.match(t.meaning_review_status,/pass41/);assert.equal(t.final_publication_approval,"not-authorized");}
assert.equal(v41.length,5);assert.equal(gate.length,13);for(let n=1;n<=8;n++){let id="M"+String(n).padStart(2,"0");assert.ok(gate.some(x=>x.gate_id===id&&x.merge_blocker==="yes"),id)}for(let n=1;n<=5;n++){let id="P"+String(n).padStart(2,"0");assert.ok(gate.some(x=>x.gate_id===id&&x.merge_blocker==="no"),id)}
assert.equal(gate.find(x=>x.gate_id==="M06").current_state,"completed-owner-attested-and-screened");
assert.equal(gate.find(x=>x.gate_id==="M07").current_state,"waived-by-owner-after-content-review");
const waiver=fs.readFileSync(base+"pr3-m07-waiver-m08-preflight-20261012.md","utf8");
assert.match(waiver,/waived-by-owner-after-content-review/);
assert.match(waiver,/COMMENTED/);
assert.match(waiver,/983d000beef8/);
assert.match(waiver,/M08/);
assert.equal(gate.find(x=>x.gate_id==="M08").current_state,"pending");
const approval=fs.readFileSync(base+"pr3-m06-rights-owner-attestation-20261012.md","utf8");
assert.ok(approval.includes("completed-owner-attested-and-screened"));assert.ok(approval.includes("M07"));assert.ok(approval.includes("175"));
const docs=[
"docs/editorial/scientific-evidence-and-exam-interpretation-policy.md",
base+"pr3-quality-audit-and-merge-gates.md"
];
for(const f of docs){let s=fs.readFileSync(f,"utf8");assert.match(s,/HOLD175|HOLD.*175|175.*HOLD/);assert.match(s,/P0/);assert.match(s,/K\/V\/E\/Q/);assert.ok(s.length>2000)}
assert.ok(fs.readFileSync("docs/editorial-policy.md","utf8").includes("scientific-evidence-and-exam-interpretation-policy.md"));
assert.ok(fs.readFileSync("README.md","utf8").includes("知識227 ID"));
console.log("PASS PR3 MERGE GATES: 13/65/185, 227 nodes (118 zero links), 1000 choices, 205 evidence (122 without independent source), 795 triage (727 pending), 0 current P0, HOLD175, source218, 19 planned figures, 9 original questions, M06 owner-attested, M07 waived by owner (COMMENTED review only), M08 pending.");
