import assert from "node:assert/strict";
import fs from "node:fs";
function parseCsv(text) {
  let rows=[],row=[],field="",quoted=false;
  for(let i=0;i<text.length;i++){
    const c=text[i];
    if(c==='"') {if(quoted&&text[i+1]==='"'){field+='"';i++;} else quoted=!quoted;}
    else if(c===','&&!quoted){row.push(field);field="";}
    else if(c==='\n'&&!quoted){row.push(field);rows.push(row);row=[];field="";}
    else if(c!=='\r')field+=c;
  }
  assert.equal(quoted,false,"quote closure");
  return rows.filter(r=>r.length&&r.some(x=>x!==""));
}
function read(p){return parseCsv(fs.readFileSync(p,"utf8"));}
const sources=read("docs/research/source-register.csv");
const knowledge=read("docs/research/knowledge-map.csv");
const inventory=read("docs/research/past-exam-inventory.csv");
const mapping=read("docs/research/past-exam-mapping-template.csv");
const sourceIDs=new Set(sources.slice(1).map(r=>r[0]));
const kIDs=new Set(knowledge.slice(1).map(r=>r[0]));
assert.equal(sourceIDs.size,sources.length-1);
assert.equal(kIDs.size,knowledge.length-1);
for(const r of knowledge.slice(1)){
  assert.equal(r.length,13,"knowledge map columns");
  assert.match(r[0],/^DX-(I|G0[1-7]|A0[1-5])-\d{3}$/);
  assert.ok(["intro","general","advanced"].includes(r[1]));
  assert.ok(r[4]&&r[5]&&r[6]);
  assert.equal(r[11],"unrated");
  for(const s of r[7].split(" "))assert.ok(sourceIDs.has(s),"unknown source: "+s);
}
assert.equal(inventory.length-1,20);
assert.equal(mapping.length,1,"過去問マッピングは未着手で空");
assert.ok(knowledge.length>100,"十分な候補知識の存在");
console.log("PASS: "+(sources.length-1)+" sources, "+(knowledge.length-1)+" knowledge nodes, "+(inventory.length-1)+" exam files; no questions mapped yet");
