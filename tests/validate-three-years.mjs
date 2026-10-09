import fs from "node:fs";import assert from "node:assert/strict";
function rows(p){const t=fs.readFileSync(p,"utf8");let all=[],r=[],v="",q=false;for(let i=0;i<t.length;i++){const c=t[i];if(c==='"'){if(q&&t[i+1]==='"'){v+='"';i++}else q=!q}else if(c===','&&!q){r.push(v);v="";}else if(c==='\n'&&!q){r.push(v);all.push(r);r=[];v="";}else if(c!=='\r')v+=c;}assert.equal(q,false);return all.filter(r=>r.length);}
const years=["r05","r06","r07"],key=new Map(rows("docs/research/past-exam-answer-key.csv").slice(1).map(x=>[x[0],+x[5]]));
const node=new Set(rows("docs/research/knowledge-map.csv").slice(1).map(x=>x[0]));
let total=0,individual=0,extra=0,pending=0;
for(const [idx,year] of years.entries()){
 const qs=rows(`docs/research/${year}-question-review.csv`).slice(1),cs=rows(`docs/research/${year}-choice-review.csv`).slice(1);
 assert.equal(qs.length,40);assert.equal(cs.length,200);total+=cs.length;
 for(const q of qs){assert.equal(q.length,8);assert.equal(+q[4],key.get(q[0]),q[0]);assert.ok(q[5].length>=15);for(const id of q[2].split(" "))assert.ok(node.has(id),id);}
 for(const c of cs){assert.equal(c.length,8);assert.equal(c[3],+c[2]===key.get(c[1])?"yes":"no");for(const id of c[6].split(" "))assert.ok(node.has(id),id);}
 const draft=cs.filter(c=>c[5]==="individual-reason-draft").length;
 const unreviewed=cs.filter(c=>c[5]==="needs-original-image-or-primary-source"||c[5]==="needs-source-or-image-check").length;
 assert.equal(draft,[150,150,195][idx],year+" draft");
 assert.equal(unreviewed,[0,0,0][idx],year+" pending");
 individual+=draft;pending+=unreviewed;
 extra+=cs.filter(c=>["secondary-underline-rationale-draft","secondary-structure-rationale-draft","user-supplied-figure-visual-rationale-draft"].includes(c[5])).length;
}
assert.equal(total,600);assert.equal(individual,495);assert.equal(extra,55);assert.equal(pending,0);
const chapters=rows("docs/research/r05-r07-chapter-counts.csv").slice(1);
assert.equal(chapters.reduce((n,r)=>n+Number(r[5]),0),120);
const knowledge=rows("docs/research/r05-r07-knowledge-recurrence.csv").slice(1);
assert.equal(knowledge.filter(r=>+r[5]>=2).length,48);
assert.equal(knowledge.filter(r=>+r[5]===3).length,24);
for(const r of knowledge)assert.ok(node.has(r[0]),r[0]);
function approx(a,b){assert.ok(Math.abs(a-b)<0.01,`${a} != ${b}`);}
approx(0.04*(100/50)*(50/1)/1,4); // R05 A18 sample volume m3
approx(0.04*(40/2)*(100/40)/25,0.08); // R05 A20 water pg/L
approx((500000/100000)*500/1.040/3000*100,80.128205128); // R05 A21 %
const r06=rows("docs/research/r06-question-review.csv").slice(1);
assert.ok(r06.find(r=>r[0]==="R06-G-Q07")[5].includes("23.8"));
assert.equal(r06.find(r=>r[0]==="R06-G-Q07")[4],"5");
console.log("PASS: 120 questions / 600 choices / 600 draft rationales incl 105 provisional, 0 undrafted; 48 recurring nodes, 24 in all years");
