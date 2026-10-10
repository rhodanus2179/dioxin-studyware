import assert from "node:assert/strict";
import fs from "node:fs";
const readJson=p=>JSON.parse(fs.readFileSync(p,"utf8"));
function csv(path) {
 const t=fs.readFileSync(path,"utf8");
 let rows=[],row=[],value="",quoted=false;
 for(let i=0;i<t.length;i++){const c=t[i];
  if(c==='"'){if(quoted&&t[i+1]==='"'){value+='"';i++;}else quoted=!quoted;}
  else if(c===','&&!quoted){row.push(value);value="";}
  else if(c==='\n'&&!quoted){row.push(value);rows.push(row);row=[];value="";}
  else if(c!=='\r')value+=c;
 }
 assert.equal(quoted,false,"Unclosed CSV quote");
 return rows.filter(r=>r.length&&r.some(v=>v!==""));
}
const chapters=readJson("data/chapters.json");
const sections=readJson("data/sections.json");
assert.equal(chapters.length,13);assert.equal(sections.length,65);
const chapIds=new Set(chapters.map(x=>x.id)),sectionMap=new Map(sections.map(s=>[s.id,s]));
assert.equal(sectionMap.size,65);
for(let i=0;i<chapters.length;i++){const ch=chapters[i],s=sections.filter(x=>x.chapter_id===ch.id);
 assert.ok(s.length>=4&&s.length<=7,ch.id);
 s.forEach((v,j)=>assert.equal(v.id,i+"."+(j+1)));
}
const contents=fs.readFileSync("docs/outline/outline-v3.md","utf8");
for(const s of sections){assert.ok(chapIds.has(s.chapter_id),s.id);
 assert.match(s.id,/^\d+\.\d+$/);
 assert.ok(s.title.trim().length>0,s.id);
 assert.ok(contents.includes("- "+s.id+" "+s.title),"Missing from outline: "+s.id);
}
const km=csv("docs/research/knowledge-map.csv").slice(1),
 coverage=csv("docs/research/knowledge-map-coverage-audit.csv").slice(1),
 q=csv("docs/research/past-exam-question-index.csv").slice(1),
 choices=csv("docs/research/past-exam-choice-index.csv").slice(1),
 gaps=csv("docs/research/past-exam-gap-proposals.csv").slice(1),
 moves=csv("docs/outline/outline-v3-section-migration.csv").slice(1);
assert.equal(km.length,218);assert.equal(coverage.length,218);
assert.equal(q.length,200);assert.equal(choices.length,1000);
const kMap=new Map(km.map(r=>[r[0],r])),qMap=new Map(q.map(r=>[r[0],r[6]]));
assert.equal(kMap.size,218);assert.equal(qMap.size,200);
for(const r of km){const s=sectionMap.get(r[3]);assert.ok(s,r[0]);assert.equal(r[4],s.title,r[0]);}
for(const r of coverage){assert.equal(r[2],kMap.get(r[0])?.[3],r[0]);}
const chapMap={G01:"g01",G02:"g02",G03:"g03",G04:"g04",G05:"g05",G06:"g06",G07:"g07",A01:"a01",A02:"a02",A03:"a03",A04:"a04",A05:"a05"};
for(const r of q){const s=sectionMap.get(r[6]);assert.ok(s,r[0]);assert.equal(s.chapter_id,chapMap[r[5]],r[0]);assert.equal(r[13],"question-level-provisional");
 if(r[3]==="G")assert.ok(r[5].startsWith("G"),r[0]);else assert.ok(r[5].startsWith("A")||r[0]==="R04-A-Q13",r[0]);
}
for(const r of choices){assert.equal(r[6],qMap.get(r[1]),r[0]);assert.equal(r[8],"not-assessed");assert.equal(r[9],"unverified");}
for(const r of gaps)assert.ok(sectionMap.has(r[3]),r[0]);
const chapterDiscrepancies=csv("docs/outline/outline-v3-chapter-discrepancies-pass19.csv").slice(1);
assert.equal(chapterDiscrepancies.length,12);
const resolutions=csv("docs/outline/outline-v4-chapter-resolutions-pass26.csv").slice(1);
assert.equal(resolutions.length,12);
for(const r of resolutions){const qrow=q.find(x=>x[0]===r[0]);assert.ok(qrow,r[0]);assert.equal(qrow[5],r[4]);assert.equal(qrow[6],r[5]);}

for(const d of chapterDiscrepancies){assert.ok(qMap.has(d[0]));assert.notEqual(d[1],d[2]);}
for(const [qid,sec] of [["R03-A-Q01","8.3"],["R03-A-Q02","8.3"],["R03-A-Q04","8.3"],["R04-A-Q01","8.1"],["R05-A-Q07","8.4"],["R03-A-Q11","9.3"],["R05-A-Q12","9.3"]])assert.equal(qMap.get(qid),sec,qid);
assert.ok(moves.length>100);for(const r of moves)assert.equal(r[3],kMap.get(r[0])?.[3],r[0]);
assert.equal(coverage.filter(r=>r[7]==="no-primary-question-link").length,122);
console.log("PASS: v3 outline 13 chapters / 65 sections, 218 knowledge, 200 questions and 1000 provisional choice links");
