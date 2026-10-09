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
assert.equal(audits.length,41);
assert.equal(new Set(audits.map(r=>r[0])).size,audits.length);
for(const r of audits){
  assert.equal(r.length,7);
  assert.ok(allQuestions.has(r[1]),"Unknown exam question in audit");
  for(const id of r[3].split(";"))assert.ok(sources.has(id),"Unknown source "+id);
  assert.ok(["primary-law-verified","primary-law-and-agency-verified","secondary-JIS-text-verified","agency-statistic-primary-and-question-text","primary-law-and-secondary-underline-mapping","primary-agency-oxidation-and-secondary-underline-mapping","academic-context-secondary-underline-with-caveat","academic-context-secondary-underline-mapping","professional-manual-reference-diagram-plus-question-secondary","secondary-JIS-and-question-formula-correlated","professional-manual-formula-and-arithmetic-reviewed","environment-ministry-sampling-procedure-and-secondary-JIS-confirmed","JEMCA-2021-professional-manual-and-secondary-JIS-confirmed","mirrored-exam-page-visually-inspected-with-secondary-JIS-formula","later-official-exam-and-secondary-review-consistent","exam-text-secondary-review-and-reaction-stoichiometry","official-answer-but-inequality-glyph-not-visually-reviewed","egov-primary-law-text-plus-exam-secondary-mapping","MHLW-primary-and-primary-research","secondary-exam-technical-claim-needs-independent-study","US-EPA-industrial-bleaching-guidance","EU-JRC-industrial-process-guide","environment-ministry-primary-analytical-principle","legal-clause-verified-with-secondary-underline","ministry-inventory-total-verified-details-provisional","secondary-chemical-structure-classification","JIS-K0312-secondary-text-and-agency-QA","historical-ECF-statistic-needs-primary","physical-or-process-principle-secondary-mapped","primary-environment-notice-claims-and-mirror","primary-law-and-decree-claims-and-mirror","reprint-visual-only-science-not-independently-audited","epa-technology-context-plus-mirror","secondary-JIS-plus-agency-manual-and-mirror"].includes(r[4]));
}
assert.equal(audits.filter(r=>r[5]==="original-underline-not-seen").length,1);
assert.equal(audits.filter(r=>r[1].startsWith("R04-")).length,6);
assert.equal(audits.filter(r=>r[1].startsWith("R05-")).length,10);
for(const r of audits.filter(r=>r[1].startsWith("R05-")))assert.ok(r[5].includes("visual-unverified"));
for(const audit of audits.filter(r=>r[1].startsWith("R04-")))assert.ok(audit[5].includes("unseen"));
assert.equal(audits.filter(r=>r[4]==="secondary-JIS-text-verified").length,0);
assert.equal(allChoices.get("R03-A-Q23-C5")[5],"individual-reason-draft");
assert.ok(sources.get("EX05")[6].includes("page14-visual-inspected"));
assert.ok(audits.find(r=>r[0]==="AUD011")[5].includes("not-official-JEMAI"));
assert.ok(sources.get("P18")[6].includes("primary-agency"));
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
const r06audits=audits.filter(r=>r[1].startsWith("R06-"));
assert.equal(r06audits.length,10);
assert.equal(r06audits.filter(r=>r[4].startsWith("primary-")).length,2);
assert.equal(r06audits.filter(r=>r[5].includes("not-JEMAI-official-identical")).length,10);
assert.equal(allChoices.size,1000);
const reviewQueue=csv("docs/research/review-queue.csv").slice(1);
assert.equal(reviewQueue.length,175);
assert.equal(reviewQueue.filter(r=>r[2]==="R06").length,50);
console.log("PASS: 41 claim-source audits; 10 R06 screenshot checks, 2 primary-law checks; 175 holds remain");
