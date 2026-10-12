import assert from "node:assert/strict";
import fs from "node:fs";
import {ORIGINAL_PROTOTYPE_APPROVAL,selectPublicPrototypeExercises,isApprovedOriginalPrototypeExercise} from "../js/publication.js";

const original=JSON.parse(fs.readFileSync("data/questions.json","utf8"));
assert.equal(original.length,9);
assert.ok(original.every(x=>x.source_type==="original"&&x.publication_approval===ORIGINAL_PROTOTYPE_APPROVAL));
assert.deepEqual(selectPublicPrototypeExercises(original).map(x=>x.id),original.map(x=>x.id));
const base=original[0];
const rejected=[
 {...base,publication_approval:undefined},
 {...base,publication_approval:"not-authorized"},
 {...base,publication_approval:"no-explicit-HOLD"},
 {...base,publication_approval:"approved"},
 {...base,source_type:"past-exam"},
 {...base,source_type:"reprint"},
 {...base,publication_hold:"no-explicit-HOLD"},
 {...base,publication_hold:"HOLD-final-publication-QA"},
 {...base,publication_state:"HOLD-pending"},
 {...base,final_publication_approval:"not-authorized"},
 {...base,question_id:"R03-G-Q01"},
 {...base,choice_id:"R03-G-Q01-C1"},
 {...base,mapping_status:"rationale-based-provisional"},
 {...base,id:"R03-G-Q01-C1"},
 {...base,choices:[]},
 {...base,answer:-1},
 {},
 null
];
assert.ok(rejected.every(x=>!isApprovedOriginalPrototypeExercise(x)));
assert.equal(selectPublicPrototypeExercises(rejected).length,0);
const map=fs.readFileSync("docs/research/choice-knowledge-map-v1.csv","utf8");
assert.match(map,/no-explicit-HOLD/);
assert.ok(!map.includes(ORIGINAL_PROTOTYPE_APPROVAL));
assert.ok(!original.some(x=>/R0[3-7]-[GA]-Q/.test(x.id)));
const src=fs.readFileSync("js/app.js","utf8");
assert.ok(src.includes("catalog.questions=selectPublicPrototypeExercises(results[1]);"));
const internal=JSON.parse(fs.readFileSync("data/chapters.json","utf8"));
assert.equal(internal.length,13);
console.log("PASS explicit publication allowlist: 9 original prototype exercises, every default/HOLD/unauthorized research-style row rejected.");
