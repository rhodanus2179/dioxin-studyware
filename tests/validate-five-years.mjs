import fs from "node:fs";import assert from "node:assert/strict";
function csv(p){const t=fs.readFileSync(p,"utf8");let out=[],row=[],v="",quote=false;for(let i=0;i<t.length;i++){const c=t[i];if(c==='"'){if(quote&&t[i+1]==='"'){v+='"';i++;}else quote=!quote;}else if(c===','&&!quote){row.push(v);v="";}else if(c==='\n'&&!quote){row.push(v);out.push(row);row=[];v="";}else if(c!=='\r')v+=c;}assert.equal(quote,false);return out.filter(r=>r.length);}
const years=["r03","r04","r05","r06","r07"],draftExpected=[160,170,150,150,195],heldExpected=[0,0,0,0,0],secondaryExpected=[30,30,45,0,5];
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
assert.equal(draft,825);assert.equal(secondary,110);assert.equal(held,0);
const additionalDrafts=allC.filter(c=>["reference-figure-rationale-draft","secondary-formula-rationale-draft","secondary-structure-rationale-draft"].includes(c[5])).length;
assert.equal(additionalDrafts,10);
assert.equal(observed.size,96);assert.equal(knowledge.length,212);assert.equal(knowledge.length-observed.size,116);
assert.equal([...observed.values()].filter(v=>v.size===5).length,21);
const chapters=csv("docs/research/r03-r07-chapter-counts.csv").slice(1);assert.equal(chapters.reduce((t,r)=>t+Number(r[7]),0),200);
const recurrence=csv("docs/research/r03-r07-knowledge-recurrence.csv").slice(1);assert.equal(recurrence.length,96);for(const r of recurrence)assert.ok(knowledgeIds.has(r[0]));
const audit=csv("docs/research/knowledge-map-coverage-audit.csv").slice(1);assert.equal(audit.length,212);assert.equal(audit.filter(r=>r[7]==="no-primary-question-link").length,116);
const queue=csv("docs/research/review-queue.csv").slice(1);
assert.equal(queue.length,175);assert.equal(new Set(queue.map(r=>r[0])).size,175);
assert.equal(queue.filter(r=>r[7]==="secondary-underline-rationale-draft").length,110);
assert.equal(queue.filter(r=>r[7]==="reference-figure-rationale-draft").length,5);
assert.equal(queue.filter(r=>r[7]==="secondary-structure-rationale-draft").length,5);
assert.equal(queue.filter(r=>r[7]==="symbol-ambiguous-rationale-draft").length,5);
assert.equal(queue.filter(r=>r[7]==="secondary-formula-rationale-draft").length,0);
assert.equal(queue.filter(r=>r[7]==="reprint-visual-rationale-draft").length,50);
assert.equal(queue.filter(r=>r[7].startsWith("needs-")).length,0);
for(const r of queue){assert.equal(r.length,13);assert.ok(["NOT-VALIDATED","PARTIAL-CLAIM-EVIDENCE-NOT-VALIDATED"].includes(r[11]),r[0]);assert.ok(r[12].startsWith("HOLD-"),r[0]);assert.ok(allC.some(x=>x[0]===r[0]));}
assert.equal(queue.filter(r=>r[11]==="PARTIAL-CLAIM-EVIDENCE-NOT-VALIDATED").length,15);
for(const id of ["R03-G-Q03","R03-A-Q03","R03-A-Q06","R03-A-Q10"]){
  for(let n=1;n<=5;n++){
    const option=allC.find(c=>c[0]===id+"-C"+n);
    assert.equal(option[5],"secondary-underline-rationale-draft");
    const hold=queue.find(c=>c[0]===option[0]);
    assert.ok(hold && hold[12].startsWith("HOLD-secondary"));
  }
}
for(const [id,status] of [["R03-A-Q19","reference-figure-rationale-draft"]]){
 for(let n=1;n<=5;n++){
  const choice=allC.find(c=>c[0]===id+"-C"+n);
  assert.equal(choice[5],status);
  assert.ok(queue.some(q=>q[0]===choice[0] && q[7]===status && q[12].startsWith("HOLD-")));
 }
}
const a20=allQ.find(q=>q[0]==="R03-A-Q20");
assert.ok(a20[5].includes("3.125m³"));
assert.ok(a20[5].includes("3m³"));
for(const id of ["R03-A-Q15","R03-A-Q16"]){
 for(let n=1;n<=5;n++){
  const ch=allC.find(c=>c[0]===id+"-C"+n);
  assert.equal(ch[5],"secondary-underline-rationale-draft");
  assert.ok(queue.some(r=>r[0]===ch[0] && r[12].startsWith("HOLD-")));
 }
}
for(let n=1;n<=5;n++){
 const ch=allC.find(c=>c[0]==="R03-G-Q15-C"+n);
 assert.equal(ch[5],"symbol-ambiguous-rationale-draft");
 assert.ok(queue.some(r=>r[0]===ch[0]));
}
assert.ok(allQ.find(q=>q[0]==="R03-G-Q15")[5].includes("比較記号"));
const r04Pending=["R04-G-Q02","R04-G-Q08","R04-A-Q07","R04-A-Q15","R04-A-Q16","R04-A-Q20"];
for(const id of r04Pending){
 const q=allQ.find(x=>x[0]===id);
 assert.ok(q[6].includes("underline")||q[6].includes("yusho"));
 for(let n=1;n<=5;n++){
   const c=allC.find(x=>x[0]===id+"-C"+n);
   assert.equal(c[5],"secondary-underline-rationale-draft");
   assert.ok(c[4].length>25);
   const r=queue.find(x=>x[0]===c[0]);
   assert.ok(r && r[7]===c[5] && r[12].startsWith("HOLD-"));
 }
}
assert.equal(queue.filter(r=>r[1].startsWith("R04-")).length,30);
const r05Provisional=["R05-G-Q02","R05-G-Q04","R05-G-Q07","R05-G-Q09","R05-G-Q10","R05-G-Q12","R05-A-Q06","R05-A-Q15","R05-A-Q16","R05-A-Q25"];
for(const id of r05Provisional){
 for(let n=1;n<=5;n++){
  const option=allC.find(x=>x[0]===id+"-C"+n);
  assert.equal(option[5],id==="R05-G-Q12"?"secondary-structure-rationale-draft":"secondary-underline-rationale-draft");
  assert.ok(option[4].length>20,option[0]);
  const held=queue.find(r=>r[0]===option[0]);
  assert.ok(held && held[12].startsWith("HOLD-"),option[0]);
 }
}
assert.equal(queue.filter(r=>r[2]==="R05").length,50);
const visual=csv("docs/research/visual-audit-pass3.csv").slice(1);
assert.equal(visual.length,4);
for(const id of ["R03-G-Q02","R03-G-Q12","R03-G-Q13","R03-A-Q23"]){
  assert.ok(visual.some(v=>v[0]===id));
  for(let n=1;n<=5;n++)assert.equal(allC.find(c=>c[0]===id+"-C"+n)[5],"individual-reason-draft");
  assert.ok(queue.every(r=>r[1]!==id));
}
assert.equal(visual.find(v=>v[0]==="R03-G-Q13")[8].includes("編集注"),true);
const a=allQ.find(q=>q[0]==="R03-A-Q20");assert.equal(Number(a[4]),2);
function eq(x,y,tol=1e-9){assert.ok(Math.abs(x-y)<tol,`${x} != ${y}`);}
eq((4-0.2)/4*100,95);eq(1500*2,3000);eq(0.05*(50/2)*(100/50)/(0.0008*1000),3.125);
eq((2/6)*(21-12)/(21-20),3);
assert.equal(allC.filter(c=>c[4].length===0).length,0);
assert.equal(allC.filter(c=>c[5]==="reprint-visual-rationale-draft").length,50);
console.log("PASS: 200 questions, 1000 choice rationales; 825 normal, 175 provisional, 0 undrafted, 175 review queue");
