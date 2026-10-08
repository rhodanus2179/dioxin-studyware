import fs from "node:fs";import assert from "node:assert/strict";
function rows(p){const t=fs.readFileSync(p,"utf8");let a=[],r=[],f="",q=false;for(let i=0;i<t.length;i++){let c=t[i];if(c==='"'){if(q&&t[i+1]==='"'){f+='"';i++}else q=!q}else if(c===','&&!q){r.push(f);f=""}else if(c==='\n'&&!q){r.push(f);a.push(r);r=[];f=""}else if(c!=='\r'){f+=c}}assert.equal(q,false);return a.filter(r=>r.length&&r.some(v=>v!==""));}
const q=rows("docs/research/past-exam-question-index.csv").slice(1);
const c=rows("docs/research/past-exam-choice-index.csv").slice(1);
const gaps=rows("docs/research/past-exam-gap-proposals.csv").slice(1);
const km=rows("docs/research/knowledge-map.csv").slice(1);
const kIDs=new Set(km.map(r=>r[0]));
assert.equal(q.length,200);assert.equal(c.length,1000);
assert.equal(new Set(q.map(r=>r[0])).size,200);assert.equal(new Set(c.map(r=>r[0])).size,1000);
for(const row of q){assert.equal(row.length,16);assert.match(row[0],/^R0[3-7]-[GA]-Q\d{2}$/);assert.equal(row[13],"question-level-provisional");assert.equal(row[14],"NOT-VERIFIED");for(const k of row[8].split(" "))assert.ok(kIDs.has(k),k);}
const qID=new Set(q.map(r=>r[0]));
for(const row of c){assert.equal(row.length,11);assert.ok(qID.has(row[1]));assert.equal(row[8],"not-assessed");assert.equal(row[9],"unverified");assert.equal(row[10],"NO-CONTENT-REPUBLISHED");}
for(const era of ["R03","R04","R05","R06","R07"])for(const [subject,n] of [["G",15],["A",25]]){const qq=q.filter(r=>r[2]===era&&r[3]===subject);assert.equal(qq.length,n);assert.deepEqual(qq.map(r=>+r[4]),Array.from({length:n},(_,i)=>i+1));}
for(const row of gaps){assert.equal(row[6],"proposal-only");for(const question of row[5].split(" "))assert.ok(qID.has(question));}
console.log("PASS: 200 question identifiers / 1000 choice identifiers / "+gaps.length+" proposals; no claim-level verification yet");
