import fs from "node:fs";
import assert from "node:assert/strict";
const load = file => JSON.parse(fs.readFileSync(file, "utf8"));
const chapters = load("data/chapters.json");
const sections = load("data/sections.json");
const questions = load("data/questions.json");
const references = load("data/references.json");
assert.equal(chapters.length,13,"序章＋概論7章＋特論5章を登録");
assert.equal(sections.length,65,"正式採択された65節");
assert.equal(new Set(chapters.map(c=>c.id)).size,chapters.length,"章IDは一意");
assert.equal(new Set(questions.map(q=>q.id)).size,questions.length,"問題IDは一意");
const ids = new Set(chapters.map(c=>c.id));
const sources = new Set(references.map(r=>r.id));
for(const c of chapters) {
  assert.ok(["intro","general","advanced"].includes(c.subject));
  assert.ok(["planned","draft","reviewed","released"].includes(c.status));
  if(c.status!=="planned")assert.ok(c.path&&fs.existsSync(c.path),"公開章には原稿が必要: "+c.id);
}
for(const q of questions) {
  assert.ok(ids.has(q.chapter),"存在しない章への紐づけ: "+q.id);
  assert.equal(q.type,"single-choice");
  assert.ok(Array.isArray(q.choices)&&q.choices.length===5,"選択肢は5つ: "+q.id);
  assert.ok(Number.isInteger(q.answer)&&q.answer>=0&&q.answer<5,"正答は0-4: "+q.id);
  assert.ok(q.question&&q.explanation,"問題文と解説が必要: "+q.id);
  if(q.choice_explanations!==undefined){
    assert.ok(Array.isArray(q.choice_explanations)&&q.choice_explanations.length===5,"選択肢別解説は5件: "+q.id);
    assert.ok(q.choice_explanations.every(v=>typeof v==="string"&&v.trim().length>0),"選択肢別解説が空欄: "+q.id);
  }
  assert.ok(q.references.every(x=>sources.has(x)),"出典IDが不正: "+q.id);
  assert.equal(q.source_type,"original","公開教材はオリジナル問題のみ: "+q.id);
}
for(const r of references)assert.ok(/^https:\/\//.test(r.url),"URLはHTTPS: "+r.id);
console.log("PASS: "+chapters.length+" chapters, "+questions.length+" original questions, "+references.length+" references");
