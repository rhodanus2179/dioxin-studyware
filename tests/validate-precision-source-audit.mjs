import assert from "node:assert/strict";
import fs from "node:fs";
function csv(path) {
  const t=fs.readFileSync(path,"utf8");let out=[],row=[],v="",quote=false;
  for(let i=0;i<t.length;i++){const c=t[i];if(c==='"'){if(quote&&t[i+1]==='"'){v+='"';i++;}else quote=!quote;}
    else if(c===','&&!quote){row.push(v);v="";}else if(c==='\n'&&!quote){row.push(v);out.push(row);row=[];v="";}else if(c!=='\r')v+=c;}
  assert.equal(quote,false);return out.filter(r=>r.some(v=>v!==""));
}
const records=csv("docs/research/choice-precision-source-audit-pass29.csv").slice(1);
const old=csv("docs/research/choice-precision-evidence-followup-pass28.csv").slice(1);
const sources=new Set(csv("docs/research/source-register.csv").slice(1).map(r=>r[0]));
const holds=csv("docs/research/review-queue.csv").slice(1);
assert.equal(records.length,23);assert.equal(old.length,23);assert.equal(holds.length,175);
const ids=new Set(),byId=new Map();
for(const r of records) {
  assert.equal(r.length,8,r[0]);assert.ok(!ids.has(r[0]),r[0]);ids.add(r[0]);byId.set(r[0],r);
  assert.equal(r[7],"not-authorized",r[0]);
  assert.ok(r[4].length>15&&r[5].length>8,r[0]);
  for(const s of r[6].split(" ").filter(Boolean))assert.ok(sources.has(s),r[0]+" source "+s);
}
assert.deepEqual([...ids].sort(),old.map(r=>r[0]).sort());
for(let i=1;i<=10;i++)assert.ok(sources.has("V29-"+String(i).padStart(2,"0")));
assert.match(byId.get("R03-G-Q05-C5")[3],/dated-law/);
assert.match(byId.get("R06-G-Q05-C5")[2],/page-image/);
assert.match(byId.get("R04-G-Q11-C3")[3],/scope-mismatch/);
for(const id of ["R05-A-Q24-C3","R05-A-Q24-C5"]) {
  assert.match(byId.get(id)[5],/JIS/);
  assert.match(byId.get(id)[3],/JIS-2020-unverified/);
}
assert.ok(Math.abs(4.4e-7*133.322-5.866e-5)<0.0000001);
const r06=csv("docs/research/r06-choice-review.csv").slice(1).find(r=>r[0]==="R06-G-Q05-C5");
assert.ok(r06[4].includes("大気1～4号")&&r06[4].includes("大気5号"));
const r03=csv("docs/research/r03-choice-review.csv").slice(1).find(r=>r[0]==="R03-A-Q05-C5");
assert.ok(r03[4].includes("m³N/h"));
console.log("PASS: 23 scoped source/choice audits, 2020 JIS still pending, 175 HOLD unchanged");
