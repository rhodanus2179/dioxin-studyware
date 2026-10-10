import assert from "node:assert/strict";
import fs from "node:fs";
const json=p=>JSON.parse(fs.readFileSync(p,"utf8"));
function csv(s){let out=[],row=[],v="",quote=false;for(let i=0;i<s.length;i++){const c=s[i];if(c==='"'){if(quote&&s[i+1]==='"'){v+='"';i++;}else quote=!quote;}else if(c===','&&!quote){row.push(v);v="";}else if(c==='\n'&&!quote){row.push(v);out.push(row);row=[];v="";}else if(c!=='\r')v+=c;}assert.equal(quote,false);return out.filter(r=>r.length&&r.some(x=>x!==""));}
const fig=json("data/figures.json"),items=json("data/outline-items.json");
const itemMap=new Map(items.map(x=>[x.id,x]));
const source=new Set(csv(fs.readFileSync("docs/research/source-register.csv","utf8")).slice(1).map(r=>r[0]));
const ids=new Set();
assert.equal(fig.length,19);
for(let i=0;i<fig.length;i++){
 const f=fig[i],item=itemMap.get(f.item_id);
 assert.equal(f.id,"DX-FIG-"+String(i+1).padStart(4,"0"));
 assert.ok(!ids.has(f.id));ids.add(f.id);
 assert.ok(item,f.id);
 assert.equal(f.chapter_id,item.chapter_id);
 assert.ok(["P1","P2","P3"].includes(f.priority),f.id);
 assert.equal(f.status,"planned");assert.equal(f.asset_path,null);
 assert.equal(f.source_file,null);assert.equal(f.review_status,"specification-only");
 assert.ok(f.purpose.length>=4&&f.drawing_spec.length>=35&&f.qa_checks.length>=16,f.id);
 assert.ok(f.required_labels.length>=3&&f.alt_text.length>=15,f.id);
 assert.ok(f.source_ids.length>=2,f.id);
 for(const s of f.source_ids)assert.ok(source.has(s),f.id+" source "+s);
}
for(const p of ["docs/editorial/figure-production-policy.md","docs/editorial/legal-and-official-source-writing-policy.md","docs/editorial/figure-backlog-v1.md"]){assert.ok(fs.existsSync(p),p);}
const law=fs.readFileSync("docs/editorial/legal-and-official-source-writing-policy.md","utf8");
assert.ok(law.includes("環境基本法第16条")&&law.includes("特別措置法第7条"));
console.log("PASS: 19 planned figure specifications and legal-editorial rules, no fabricated image assets");
