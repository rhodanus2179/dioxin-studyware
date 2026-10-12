import fs from "node:fs";
import assert from "node:assert/strict";
import {mdRender} from "../js/markdown.js";
const load=f=>JSON.parse(fs.readFileSync(f,"utf8"));
const chapters=load("data/chapters.json"),sections=load("data/sections.json"),items=load("data/outline-items.json");
const ch=chapters.find(c=>c.id==="g04");
assert.equal(ch?.status,"draft");
assert.equal(ch?.path,"content/general/04-properties.md");
const text=fs.readFileSync(ch.path,"utf8");
const expected=sections.filter(s=>s.chapter_id==="g04");
assert.equal(expected.length,5);
const linkedItems=items.filter(i=>i.chapter_id==="g04");
assert.equal(linkedItems.length,15);
const ids=new Set(linkedItems.flatMap(i=>i.knowledge_ids));
assert.equal(ids.size,18);
for(const sec of expected)assert.ok(text.includes("## "+sec.id+"　"),"missing chapter section "+sec.id);
for(const item of linkedItems){assert.ok(text.includes("### "+item.id+"　"),"missing item "+item.id);for(const id of item.knowledge_ids)assert.ok(text.includes(id),"missing knowledge ID "+id);}
assert.ok(text.includes("WHO-TEF(2006)")&&text.includes("2022 WHO-TEF"),"TEF version distinction");
assert.ok(text.includes("架空"),"fictional calculation clearly labelled");
assert.ok(!text.includes("drive.google.com/")&&!text.includes("usp=drive_fs"),"no private Drive pointer");
const tracker=fs.readFileSync("docs/editorial/content-production-tracker.csv","utf8").trim().split(/\r?\n/);
assert.equal(tracker.length,66,"65 section tracking rows plus header");
const drafts=load("docs/editorial/ch04-exercise-candidates.json");
assert.equal(drafts.publication_approval,"HOLD");
assert.equal(drafts.questions.length,7);
const published=load("data/questions.json");
for(const q of drafts.questions){
  assert.equal(q.publication_approval,"HOLD");
  assert.equal(q.source_type,"original");
  assert.equal(q.chapter,"g04");
  assert.equal(q.choices.length,5);
  assert.equal(q.choice_explanations.length,5);
  assert.ok(Number.isInteger(q.answer)&&q.answer>=0&&q.answer<5);
  assert.ok(q.choice_explanations.every(e=>e.trim().length>10));
  assert.ok(!published.some(pub=>pub.id===q.id),"HOLD exercise leaked to publication list "+q.id);
}
const html=mdRender("## 概要\n\n[WHO](https://www.who.int/) **重要** `TEQ` <script>alert(1)</script>");
assert.match(html,/<a href="https:\/\/www\.who\.int\/"/);
assert.match(html,/<strong>重要<\/strong>/);
assert.ok(!html.includes("<script>"),"raw HTML must remain escaped");
const blocked=mdRender("[不正](javascript:alert(1))");
assert.ok(!blocked.includes("<a href="),"reject non-HTTPS links");
const s44=text.slice(text.indexOf("## 4.4　"),text.indexOf("## 4.5　"));
assert.ok([...s44].length>=5000,"4.4 must be a substantive explanation, not an outline");
assert.deepEqual((s44.match(/^### 4\.4\.\d+/gm)||[]),["### 4.4.1","### 4.4.2","### 4.4.3"],"4.4 preserves exactly three official items");
for(const term of ["溶解度","Kow","Koc","Kd","蒸気圧","気粒","ヘンリー定数","過冷却液体","光分解","半減期","活性炭"]){
  assert.ok(s44.includes(term),"missing connected scientific discussion: "+term);
}
assert.ok(s44.includes("架空")&&s44.includes("推算値"),"worked examples and evidence types must be differentiated");
assert.ok(s44.includes("原表の画像目視再確認は未実施"),"original PDF visual-verification caveat required");
assert.ok(!s44.includes("[[figure:"),"unsupported figure tokens must not be embedded");
console.log("PASS: chapter 4 5 sections/15 items/18 IDs, 7 HOLD exercises, 65-section tracker and safe Markdown.");
