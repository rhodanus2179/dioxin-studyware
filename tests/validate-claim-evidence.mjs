import assert from "node:assert/strict";
import fs from "node:fs";
function csv(path){
  const s=fs.readFileSync(path,"utf8"); const rows=[]; let row=[],value="",quoted=false;
  for(let i=0;i<s.length;i++){
    const ch=s[i];
    if(ch==='"'){if(quoted&&s[i+1]==='"'){value+='"';i++;}else quoted=!quoted;}
    else if(ch===','&&!quoted){row.push(value);value="";}
    else if(ch==='\n'&&!quoted){row.push(value);rows.push(row);row=[];value="";}
    else if(ch!=='\r')value+=ch;
  }
  assert.equal(quoted,false,"CSV quotes must balance");
  return rows.filter(r=>r.length);
}
const audits=csv("docs/research/claim-evidence-audit.csv").slice(1);
const sourceRows=csv("docs/research/source-register.csv").slice(1);
const sources=new Map(sourceRows.map(r=>[r[0],r]));
const allQuestions=new Map(),allChoices=new Map();
for(const y of ["r03","r04","r05","r06","r07"]){
  for(const r of csv(`docs/research/${y}-question-review.csv`).slice(1))allQuestions.set(r[0],r);
  for(const r of csv(`docs/research/${y}-choice-review.csv`).slice(1))allChoices.set(r[0],r);
}
assert.equal(audits.length,9);
assert.equal(new Set(audits.map(r=>r[0])).size,audits.length);
for(const r of audits){
  assert.equal(r.length,7);
  assert.ok(allQuestions.has(r[1]),"Unknown exam question in audit");
  for(const id of r[3].split(";"))assert.ok(sources.has(id),"Unknown source "+id);
  assert.ok(["primary-law-verified","primary-law-and-agency-verified","secondary-JIS-text-verified","agency-statistic-primary-and-question-text","primary-law-and-secondary-underline-mapping","primary-agency-oxidation-and-secondary-underline-mapping","academic-context-secondary-underline-with-caveat","academic-context-secondary-underline-mapping"].includes(r[4]));
}
assert.equal(audits.filter(r=>r[5]==="original-underline-not-seen").length,1);
assert.equal(audits.filter(r=>r[4]==="secondary-JIS-text-verified").length,2);
assert.equal(allQuestions.get("R03-G-Q02")[4],"1");
assert.equal(allQuestions.get("R03-G-Q03")[4],"3");
assert.equal(allQuestions.get("R03-A-Q18")[4],"1");
assert.equal(allQuestions.get("R03-A-Q25")[4],"3");
assert.ok(allQuestions.get("R03-G-Q02")[5].includes("60日"));
assert.ok(allQuestions.get("R03-G-Q03")[5].includes("1回以上"));
assert.ok(allQuestions.get("R03-A-Q18")[5].includes("−5%～＋10%"));
assert.ok(allQuestions.get("R03-A-Q25")[5].includes("0.2pg"));
assert.equal(allChoices.get("R03-G-Q02-C1")[5],"individual-reason-draft");
assert.equal(allChoices.get("R07-G-Q14-C5")[5],"secondary-underline-rationale-draft");
assert.ok(sources.get("T09")[6].includes("secondary"),"JIS repost must not be marked primary");
assert.ok(sources.get("EX03")[6].includes("image-failed"),"Failed visual review must remain pending");
console.log("PASS: 9 claim-source audits; 4 secondary-mapped question sets kept visually pending");
