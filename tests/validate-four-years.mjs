import assert from "node:assert/strict";import fs from "node:fs";
function rows(p){const t=fs.readFileSync(p,"utf8");let r=[],row=[],v="",q=false;for(let i=0;i<t.length;i++){const c=t[i];if(c==='"'){if(q&&t[i+1]==='"'){v+='"';i++;}else q=!q;}else if(c===','&&!q){row.push(v);v="";}else if(c==='\n'&&!q){row.push(v);r.push(row);row=[];v="";}else if(c!=='\r')v+=c;}assert.equal(q,false);return r.filter(x=>x.length);}
const years=["r04","r05","r06","r07"],expectedIndividual=[170,150,150,195],expectedPending=[0,0,0,0],expectedSecondary=[0,0,0,0];
const answer=new Map(rows("docs/research/past-exam-answer-key.csv").slice(1).map(x=>[x[0],Number(x[5])]));
const nodes=new Set(rows("docs/research/knowledge-map.csv").slice(1).map(x=>x[0]));
const ids=new Set;let allQ=0,allChoices=0,individual=0,pending=0,secondary=0;
for(let i=0;i<years.length;i++){
 const y=years[i],q=rows(`docs/research/${y}-question-review.csv`).slice(1),c=rows(`docs/research/${y}-choice-review.csv`).slice(1);
 assert.equal(q.length,40);assert.equal(c.length,200);allQ+=q.length;allChoices+=c.length;
 for(const row of q){assert.equal(row.length,8);assert.equal(Number(row[4]),answer.get(row[0]),row[0]);assert.ok(!ids.has(row[0]));ids.add(row[0]);assert.ok(row[5].length>=12);for(const k of row[2].split(" "))assert.ok(nodes.has(k),k);}
 for(const row of c){assert.equal(row.length,8);assert.equal(row[3],Number(row[2])===answer.get(row[1])?"yes":"no");for(const k of row[6].split(" "))assert.ok(nodes.has(k),k);}
 const n=c.filter(x=>x[5]==="individual-reason-draft").length,p=c.filter(x=>x[5].startsWith("needs-")).length,s=c.filter(x=>x[5]==="secondary-underline-rationale-draft").length;
 assert.equal(n,expectedIndividual[i]);assert.equal(p,expectedPending[i]);assert.equal(s,expectedSecondary[i]);individual+=n;pending+=p;secondary+=s;
}
assert.equal(allQ,160);assert.equal(allChoices,800);assert.equal(individual,665);
const structureR05=rows("docs/research/r05-choice-review.csv").slice(1).filter(r=>r[5]==="user-supplied-figure-visual-rationale-draft");
assert.equal(structureR05.length,5);
assert.equal(structureR05.every(r=>r[1]==="R05-G-Q12"),true);assert.equal(secondary,0);assert.equal(pending,0);
const rv=rows('docs/research/r04-visual-review.csv').slice(1);assert.equal(rv.length,6);
assert.equal(rows('docs/research/r04-choice-review.csv').slice(1).filter(r=>r[5]==='drive-exam-page-visual-rationale-draft').length,30);
assert.equal(rows('docs/research/r05-choice-review.csv').slice(1).filter(r=>r[5]==='drive-exam-page-visual-rationale-draft').length,45);
assert.equal(rows('docs/research/r05-visual-review.csv').slice(1).length,8);
assert.equal(rows('docs/research/r07-choice-review.csv').slice(1).filter(r=>r[5]==='drive-exam-page-visual-rationale-draft').length,5);
const byChapter=rows("docs/research/r04-r07-chapter-counts.csv").slice(1);assert.equal(byChapter.reduce((t,r)=>t+Number(r[6]),0),160);
const byKnowledge=rows("docs/research/r04-r07-knowledge-recurrence.csv").slice(1);for(const r of byKnowledge)assert.ok(nodes.has(r[0]));assert.equal(byKnowledge.reduce((t,r)=>t+Number(r[6]),0)>0,true);
const eq=(a,b)=>assert.ok(Math.abs(a-b)<1e-9,`${a} != ${b}`);
eq(10/4*(21-12)/(21-14),45/14);eq(0.04*(50/2)*(200/50)/8/1000,0.0005);eq((100000/150000)*(600/1.04)/500*100,76.92307692307692);
console.log("PASS R04–R07: 160 questions, 800 choices; 665 normal + 0 underline + 80 Drive-visual + 5 visually inspected structural + 50 reprint-visual provisional");
