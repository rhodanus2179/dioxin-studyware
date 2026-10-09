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
  assert.ok(["primary-law-verified","primary-law-and-agency-verified","secondary-JIS-text-verified","agency-statistic-primary-and-question-text","primary-law-and-secondary-underline-mapping","primary-law-and-decree-2021-and-Drive-underline-visual","technical-study-oxidative-catalysis-and-Drive-underline-visual","industry-pore-reference-typical-with-manufacturing-caveat","chlorination-technical-paper-partial-and-Drive-underline-visual","primary-ministry-chlorobenzene-process-and-Drive-visual","primary-ministry-carbide-chemistry-and-Drive-visual","primary-agency-oxidation-and-secondary-underline-mapping","academic-context-secondary-underline-with-caveat","academic-context-secondary-underline-mapping","professional-manual-reference-diagram-plus-question-secondary","secondary-JIS-and-question-formula-correlated","professional-manual-formula-and-arithmetic-reviewed","environment-ministry-sampling-procedure-and-secondary-JIS-confirmed","JEMCA-2021-professional-manual-and-secondary-JIS-confirmed","mirrored-exam-page-visually-inspected-with-secondary-JIS-formula","later-official-exam-and-secondary-review-consistent","exam-text-secondary-review-and-reaction-stoichiometry","official-answer-but-inequality-glyph-not-visually-reviewed","2021-Drive-exam-inequality-visual-and-2009-peer-reviewed-conditional-ranking","2021-Drive-exam-apparatus-visual-plus-secondary-JIS-and-JEMCA","2023-Drive-exam-underline-visual-and-primary-2020-ministry-inventory","egov-primary-law-text-plus-exam-secondary-mapping","MHLW-primary-and-primary-research","secondary-exam-technical-claim-needs-independent-study","US-EPA-industrial-bleaching-guidance","EU-JRC-industrial-process-guide","environment-ministry-primary-analytical-principle","legal-clause-verified-with-secondary-underline","ministry-inventory-total-verified-details-provisional","secondary-chemical-structure-classification","user-supplied-question-figure-and-primary-agency-TEF-cross-verified","JIS-K0312-secondary-text-and-agency-QA","historical-ECF-statistic-needs-primary","physical-or-process-principle-secondary-mapped","primary-environment-notice-claims-and-mirror","primary-law-and-decree-claims-and-mirror","reprint-visual-only-science-not-independently-audited","epa-technology-context-plus-mirror","secondary-JIS-plus-agency-manual-and-mirror","agency-operator-Waelz-process-corroborated","US-EPA-MF-UF-RO-principles-corroborated","secondary-JIS-2020-lockmass-standard-terms-correlated"].includes(r[4]));
}
assert.equal(audits.filter(r=>r[5]==="original-underline-not-seen").length,0);
assert.equal(audits.filter(r=>r[1].startsWith("R04-")).length,6);
assert.equal(audits.filter(r=>r[1].startsWith("R05-")).length,10);
for(const r of audits.filter(r=>r[1].startsWith("R05-")))if(r[1]==="R05-G-Q12")assert.ok(r[5].includes("user-provided-question-image-five-structures-visually-verified"));else if(r[1]==="R05-G-Q07")assert.ok(r[5].includes("user-Drive-exam-PDF-question-page-image-visually-verified"));else assert.ok(r[5].includes("visual-unverified"));
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
assert.ok(sources.has("JEMAI-ERRATA-2025-DXN"));
for(const id of ["R05-EXAMDAY-2023","R05-ENV-TEF2006","JISC-ONLINE-REGISTERED-ACCESS","JISC-ONLINE-VIEW-GUIDE"])assert.ok(sources.has(id),id);
const pcb=csv("docs/research/r05-q12-congener-crosscheck.csv").slice(1);
assert.equal(pcb.length,5);
assert.equal(pcb.filter(r=>r[4]==="WHO2006-TEF-assigned").length,4);
assert.equal(pcb.filter(r=>r[4]==="not-in-12-WHO-DL-PCBs").length,1);
assert.ok(pcb.every(r=>r[6].includes("user-supplied-question-figure-structure-directly-inspected")&&r[6].includes("erratum-images-pending")));
assert.ok(pcb.every(r=>r[5].includes("R05-USER-FIGURE-20261009")));
assert.ok(sources.has("R05-USER-FIGURE-20261009"));
for(const id of ["DRV-R03-G-2021","DRV-R03-A-2021","DRV-R05-G-2023","SCI-FUJIMORI2009","ENV-R02-INVENTORY2022"])assert.ok(sources.has(id),id);
for(const id of ["R03-G-Q15","R03-A-Q19","R05-G-Q07"]){assert.ok(allQuestions.get(id)[6].includes("drive-archived-exam-PDF-page-visually-reviewed"),id);for(let n=1;n<=5;n++)assert.equal(allChoices.get(id+"-C"+n)[5],"drive-exam-page-visual-rationale-draft");}
assert.equal(allChoices.get("R05-G-Q12-C4")[5],"user-supplied-figure-visual-rationale-draft");
assert.ok(allQuestions.get("R05-G-Q12")[6].includes("user-provided-question-image-visually-reviewed"));
assert.ok(audits.find(r=>r[1]==="R05-G-Q12")[3].includes("JEMAI-ERRATA-2025-DXN"));
assert.equal(reviewQueue.filter(r=>r[1]==="R05-G-Q12"&&r[9]==="P0-publisher-erratum-diagrams-and-official-identity").length,5);
for(const id of ["R06-ZN-JST01","R06-ZN-OPERATOR01","R06-ZN-PAPER01","R06-MEM-EPA01","R06-MEM-EPA02","R06-JIS-K0311-SECONDARY"])assert.ok(sources.has(id),id);
for(const id of ["R06-A-Q12","R06-A-Q14","R06-A-Q19"])assert.ok(audits.some(r=>r[1]===id&&r[3].includes("R06-")),id);
assert.equal(reviewQueue.filter(r=>["R06-A-Q12","R06-A-Q14","R06-A-Q19"].includes(r[1])&&r[11]==="PARTIAL-CLAIM-EVIDENCE-NOT-VALIDATED").length,15);
assert.equal(reviewQueue.filter(r=>r[11]==="VISUAL-AND-CLAIM-SUPPORTED-FINAL-QA-PENDING").length,35);
assert.equal(reviewQueue.filter(r=>r[11]==="VISUAL-VERIFIED-TECHNICAL-QA-PENDING").length,10);
for(const id of ["R03-LAW28-2021","R03-OXIDATIVE-CATALYST","R03-PORE-INDUSTRY","R03-ENV-CHLOROBENZENE","R03-ENV-CALCIUM-CARBIDE"])assert.ok(sources.has(id));
for(const id of ["R03-G-Q03","R03-A-Q03","R03-A-Q06","R03-A-Q10","R03-A-Q15","R03-A-Q16"]){
 assert.equal(reviewQueue.filter(r=>r[1]===id&&r[7]==="drive-exam-page-visual-rationale-draft").length,5);
 assert.ok(audits.some(r=>r[1]===id&&r[5]==="user-owned-Drive-question-page-underline1-5-directly-visualized"));
}
console.log("PASS: 41 claim audits; 15 Drive-PDF visually verified choice records, 15 remain publication-held; total holds 175");
