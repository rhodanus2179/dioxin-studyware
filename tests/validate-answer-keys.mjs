import fs from "node:fs";
import assert from "node:assert/strict";
function csv(path) {
 const text=fs.readFileSync(path,"utf8");const rows=[];let row=[],cell="",quoted=false;
 for(let i=0;i<text.length;i++){
  const c=text[i];
  if(c==='"'){if(quoted&&text[i+1]==='"'){cell+='"';i++;}else quoted=!quoted;}
  else if(c===','&&!quoted){row.push(cell);cell="";}
  else if(c==='\n'&&!quoted){row.push(cell);rows.push(row);row=[];cell="";}
  else if(c!=='\r'){cell+=c;}
 }
 assert.equal(quoted,false);return rows.filter(r=>r.length&&r.some(c=>c!==""));
}
const answers=csv("docs/research/past-exam-answer-key.csv").slice(1);
const reviews=csv("docs/research/r07-question-review.csv").slice(1);
const choices=csv("docs/research/r07-choice-review.csv").slice(1);
const known=csv("docs/research/knowledge-map.csv").slice(1);
const original=csv("docs/research/past-exam-question-index.csv").slice(1);
const kid=new Set(known.map(r=>r[0])),origId=new Set(original.map(r=>r[0]));
assert.equal(answers.length,200);
assert.equal(reviews.length,40);
assert.equal(choices.length,200);
assert.equal(new Set(answers.map(r=>r[0])).size,200);
assert.equal(new Set(choices.map(r=>r[0])).size,200);
const answerMap=new Map(answers.map(r=>[r[0],+r[5]]));
for(const a of answers){
 assert.equal(a.length,9);assert.ok(origId.has(a[0]));
 assert.ok(Number.isInteger(+a[5])&&+a[5]>=1&&+a[5]<=5);
}
for(const [era] of [["R03"],["R04"],["R05"],["R06"],["R07"]]){
 for(const [sub,num] of [["G",15],["A",25]]){
  const v=answers.filter(a=>a[2]===era&&a[3]===sub);
  assert.equal(v.length,num);
  assert.deepEqual(v.map(a=>+a[4]),Array.from({length:num},(_,i)=>i+1));
 }
}
for(const r of reviews){
 assert.equal(r.length,8);assert.ok(r[0].startsWith("R07-"));
 assert.equal(+r[4],answerMap.get(r[0]),"answer mismatch: "+r[0]);
 assert.ok(r[5].length>=15);
 for(const id of r[2].split(" "))assert.ok(kid.has(id),"unknown knowledge ID: "+id);
}
let detailed=0,pending=0,selected=0;
for(const c of choices){
 assert.equal(c.length,8);
 assert.ok(answerMap.has(c[1]));
 assert.equal(c[3],+c[2]===answerMap.get(c[1])?"yes":"no");
 if(c[3]==="yes")selected++;
 if(c[5]==="individual-reason-draft")detailed++;
 if(c[5]==="unreviewed")pending++;
}
assert.equal(selected,40);assert.equal(detailed,195);assert.equal(pending,5);
for(const c of choices.filter(c=>c[5]==="unreviewed"))assert.ok(c[0].startsWith("R07-G-Q14-"),"Only underlined G14 should remain visually unverified");
for(const c of choices.filter(c=>c[5]==="individual-reason-draft"))assert.ok(c[4].length>=12);
assert.equal(reviews.find(r=>r[0]==="R07-G-Q15")[4],"5");
console.log("PASS: 200 official answer positions; 40 R07 topics; 195 individual rationale drafts; 5 image checks outstanding");
