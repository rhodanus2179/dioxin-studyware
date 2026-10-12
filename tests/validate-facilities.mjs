import assert from "node:assert/strict";
import fs from "node:fs";
function readCsv(path){
 const txt=fs.readFileSync(path,"utf8");
 let rows=[],row=[],field="",inside=false;
 for(let i=0;i<txt.length;i++){
  const c=txt[i];
  if(c==='"'){ if(inside&&txt[i+1]==='"'){field+='"';i++;}else inside=!inside;}
  else if(c===','&&!inside){row.push(field);field="";}
  else if(c==='\n'&&!inside){row.push(field);rows.push(row);row=[];field="";}
  else if(c!=='\r')field+=c;
 }
 assert.equal(inside,false);
 return rows.filter(x=>x.some(y=>y!==""));
}
const fsData=readCsv("docs/research/facility-master.csv");
const stData=readCsv("docs/research/emission-standards.csv");
const kData=readCsv("docs/research/knowledge-map.csv");
const src=readCsv("docs/research/source-register.csv");
const facilities=fsData.slice(1),stds=stData.slice(1),knowledge=kData.slice(1);
const facilityIds=new Set(facilities.map(x=>x[0]));
const stdIds=new Set(stds.map(x=>x[0]));
const sourceIds=new Set(src.slice(1).map(x=>x[0]));
assert.equal(facilities.length,24,"5 air + 19 water facilities");
assert.equal(facilityIds.size,24,"unique facility IDs");
assert.equal(stds.length,8,"7 air standards + 1 water standard");
assert.equal(stdIds.size,8,"unique standard IDs");
assert.equal(knowledge.length,227,"181 initial + 31 facility-stage + 6 outline-stage + 7 precision-stage + 1 manager-duty addition");
for(const medium of ["air","water"]){
 const subset=facilities.filter(x=>x[1]===medium);
 const max=medium==="air"?5:19;
 assert.equal(subset.length,max);
 assert.deepEqual(subset.map(x=>Number(x[2])).sort((a,b)=>a-b),Array.from({length:max},(_,i)=>i+1));
 for(const f of subset){
  assert.equal(f.length,13);
  assert.ok(f[4]&&f[5]&&f[6]&&f[7]&&f[8]);
  for(const s of f[8].split(";"))assert.ok(stdIds.has(s),"Unknown standard ID "+s);
  for(const s of f[10].split(" "))assert.ok(sourceIds.has(s),"Unknown source ID "+s);
 }
}
assert.equal(stds.filter(x=>x[0].startsWith("AIR")).length,7);
assert.equal(stds.filter(x=>x[0]==="WATER10")[0][3],"10");
assert.equal(stds.filter(x=>x[0]==="WATER10")[0][5],"pg-TEQ/L");
for(const standard of stds){
 assert.equal(standard.length,9);
 for(const v of [standard[3],standard[4]])assert.ok(!Number.isNaN(Number(v)));
}
const ids=new Set(knowledge.map(x=>x[0]));
assert.equal(ids.size,knowledge.length,"unique knowledge IDs");
const linked=knowledge.filter(x=>x[12]==="checked-facility-inventory");
assert.equal(linked.length,31,"31 new candidate nodes");
console.log("PASS: 5 air legal categories + 19 water legal categories; 8 emission standard rows; 227 knowledge nodes");
