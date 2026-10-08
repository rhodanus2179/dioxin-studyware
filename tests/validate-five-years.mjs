import fs from "node:fs";import assert from "node:assert/strict";
function csv(p){const t=fs.readFileSync(p,"utf8");let out=[],row=[],v="",quote=false;for(let i=0;i<t.length;i++){const c=t[i];if(c==='"'){if(quote&&t[i+1]==='"'){v+='"';i++;}else quote=!quote;}else if(c===','&&!quote){row.push(v);v="";}else if(c==='\n'&&!quote){row.push(v);out.push(row);row=[];v="";}else if(c!=='\r')v+=c;}assert.equal(quote,false);return out.filter(r=>r.length);}
const years=["r03","r04","r05","r06","r07"],draftExpected=[155,170,150,150,195],heldExpected=[25,30,50,50,0],secondaryExpected=[20,0,0,0,5];
const answers=csv("docs/research/past-exam-answer-key.csv").slice(1),map=new Map(answers.map(r=>[r[0],Number(r[5])]));assert.equal(map.size,200);
const knowledge=csv("docs/research/knowledge-map.csv").slice(1),knowledgeIds=new Set(knowledge.map(r=>r[0]));
let allQ=[],allC=[],draft=0,held=0,secondary=0;const observed=new Map();
for(let i=0;i<5;i++){
 const y=years[i],qs=csv(`docs/research/${y}-question-review.csv`).slice(1),cs=csv(`docs/research/${y}-choice-review.csv`).slice(1);
 assert.equal(qs.length,40,y+" question count");assert.equal(cs.length,200,y+" choice count");
 for(const q of qs){assert.equal(q.length,8);assert.equal(Number(q[4]),map.get(q[0]),q[0]);assert.ok(q[5].length>10);for(const kid of q[2].split(" ")){assert.ok(knowledgeIds.has(kid),kid);if(!observed.has(kid))observed.set(kid,new Set());observed.get(kid).add(y);}}
 for(const c of cs){assert.equal(c.length,8);assert.equal(c[3],Number(c[2])===map.get(c[1])?"yes":"no",c[0]);for(const kid of c[6].split(" "))assert.ok(knowledgeIds.has(kid),kid);}
 const d=cs.filter(r=>r[5]==="individual-reason-draft").length,h=cs.filter(r=>r[5].startsWith("needs-")).length,s=cs.filter(r=>r[5]==="secondary-underline-rationale-draft").length;
 assert.equal(d,draftExpected[i]);assert.equal(h,heldExpected[i]);assert.equal(s,secondaryExpected[i]);draft+=d;held+=h;secondary+=s;
 allQ.push(...qs);allC.push(...cs);
}
assert.equal(allQ.length,200);assert.equal(allC.length,1000);
assert.equal(new Set(allQ.map(q=>q[0])).size,200);assert.equal(new Set(allC.map(c=>c[0])).size,1000);
assert.equal(draft,820);assert.equal(secondary,25);assert.equal(held,155);
assert.equal(observed.size,96);assert.equal(knowledge.length,212);assert.equal(knowledge.length-observed.size,116);
assert.equal([...observed.values()].filter(v=>v.size===5).length,21);
const chapters=csv("docs/research/r03-r07-chapter-counts.csv").slice(1);assert.equal(chapters.reduce((t,r)=>t+Number(r[7]),0),200);
const recurrence=csv("docs/research/r03-r07-knowledge-recurrence.csv").slice(1);assert.equal(recurrence.length,96);for(const r of recurrence)assert.ok(knowledgeIds.has(r[0]));
const audit=csv("docs/research/knowledge-map-coverage-audit.csv").slice(1);assert.equal(audit.length,212);assert.equal(audit.filter(r=>r[7]==="no-primary-question-link").length,116);
const queue=csv("docs/research/review-queue.csv").slice(1);
assert.equal(queue.length,180);assert.equal(new Set(queue.map(r=>r[0])).size,180);
assert.equal(queue.filter(r=>r[7]==="secondary-underline-rationale-draft").length,25);
assert.equal(queue.filter(r=>r[7].startsWith("needs-")).length,155);
for(const r of queue){assert.equal(r.length,13);assert.equal(r[11],"NOT-VALIDATED");assert.ok(allC.some(x=>x[0]===r[0]));}
for(const id of ["R03-G-Q03","R03-A-Q03","R03-A-Q06","R03-A-Q10"]){
  for(let n=1;n<=5;n++){
    const option=allC.find(c=>c[0]===id+"-C"+n);
    assert.equal(option[5],"secondary-underline-rationale-draft");
    const hold=queue.find(c=>c[0]===option[0]);
    assert.ok(hold && hold[12].startsWith("HOLD-secondary"));
  }
}
const visual=csv("docs/research/visual-audit-pass3.csv").slice(1);
assert.equal(visual.length,3);
for(const id of ["R03-G-Q02","R03-G-Q12","R03-G-Q13"]){
  assert.ok(visual.some(v=>v[0]===id));
  for(let n=1;n<=5;n++)assert.equal(allC.find(c=>c[0]===id+"-C"+n)[5],"individual-reason-draft");
  assert.ok(queue.every(r=>r[1]!==id));
}
assert.equal(visual.find(v=>v[0]==="R03-G-Q13")[8].includes("編集注"),true);
const a=allQ.find(q=>q[0]==="R03-A-Q20");assert.equal(Number(a[4]),2);
function eq(x,y,tol=1e-9){assert.ok(Math.abs(x-y)<tol,`${x} != ${y}`);}
eq((4-0.2)/4*100,95);eq(1500*2,3000);eq(0.05*(50/2)*(100/50)/(0.0008*1000),3.125);
eq((2/6)*(21-12)/(21-20),3);
console.log("PASS: 200 questions, 1000 choice IDs, 820 normal + 25 secondary drafts, 155 not yet drafted; 180 visual/source queue, 212 knowledge IDs/116 without primary-question tags");
