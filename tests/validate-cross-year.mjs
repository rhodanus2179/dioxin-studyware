import fs from "node:fs";import assert from "node:assert/strict";
function rows(p){const t=fs.readFileSync(p,"utf8");let a=[],r=[],v="",q=false;for(let i=0;i<t.length;i++){const c=t[i];if(c==='"'){if(q&&t[i+1]==='"'){v+='"';i++}else q=!q}else if(c===','&&!q){r.push(v);v=""}else if(c==='\n'&&!q){r.push(v);a.push(r);r=[];v=""}else if(c!=='\r')v+=c;}assert.equal(q,false);return a.filter(x=>x.length);}
const g06=rows("docs/research/r06-question-review.csv").slice(1),c06=rows("docs/research/r06-choice-review.csv").slice(1),g07=rows("docs/research/r07-question-review.csv").slice(1),c07=rows("docs/research/r07-choice-review.csv").slice(1);
const answer=new Map(rows("docs/research/past-exam-answer-key.csv").slice(1).map(x=>[x[0],+x[5]])),kids=new Set(rows("docs/research/knowledge-map.csv").slice(1).map(x=>x[0]));
assert.equal(g06.length,40);assert.equal(g07.length,40);assert.equal(c06.length,200);assert.equal(c07.length,200);
for(const r of [...g06,...g07]){assert.equal(r.length,8);assert.equal(+r[4],answer.get(r[0]));for(const k of r[2].split(" "))assert.ok(kids.has(k));}
for(const r of [...c06,...c07]){assert.equal(r.length,8);assert.equal(r[3],(+r[2]===answer.get(r[1])?"yes":"no"));for(const k of r[6].split(" "))assert.ok(kids.has(k));}
assert.equal(c06.filter(r=>r[5]==="individual-reason-draft").length,150);
assert.equal(c06.filter(r=>r[5]==="needs-source-or-image-check").length,50);
assert.equal(c07.filter(r=>r[5]==="individual-reason-draft").length,195);
assert.equal(c07.filter(r=>r[5]==="secondary-underline-rationale-draft").length,5);
assert.ok(g06.find(r=>r[0]==="R06-A-Q23")[5].includes("20.5%"));assert.equal(answer.get("R06-A-Q23"),4);
const allCh=rows("docs/research/r06-r07-chapter-counts.csv").slice(1);assert.equal(allCh.reduce((sum,r)=>sum+(+r[4]),0),80);
const allK=rows("docs/research/r06-r07-knowledge-recurrence.csv").slice(1);assert.equal(allK.filter(r=>r[4]==="both-years").length,32);for(const r of allK)assert.ok(kids.has(r[0]));
console.log("PASS: R06/R07 80 questions, 400 option records, 345 explanation drafts (55 pending), 32 recurring candidate IDs");