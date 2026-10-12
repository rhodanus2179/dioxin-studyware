import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const roots=["README.md","index.html","css","js","content","data","docs"];
const textExt=new Set([".md",".csv",".json",".html",".css",".js",".mjs",".yml",".yaml",".txt"]);
let checked=0;
const flagged=[];

function scan(fp){
 const stat=fs.statSync(fp);
 if(stat.isDirectory()){
  for(const entry of fs.readdirSync(fp)) if(![".git","node_modules"].includes(entry)) scan(path.join(fp,entry));
  return;
 }
 const ext=path.extname(fp).toLowerCase();
 if(/(?:^|\/)(?:R0[1-9]|R[0-9]{2})[_-].*(?:14|15|正解).*\.pdf$/i.test(fp)) flagged.push(fp+": raw national-exam PDF");
 if(!textExt.has(ext))return;
 checked++;
 const body=fs.readFileSync(fp,"utf8");
 const checks=[
  ["private-drive-or-doc-url",/https?:\/\/(?:drive\.google\.com\/(?:file\/d\/|open\?id=|folders\/)|docs\.google\.com\/(?:document|spreadsheets|presentation)\/d\/)[A-Za-z0-9_?=&-]{16,}/gi],
  ["mounted-private-file",/\/mnt\/data\/[^\s"'<>]+|libfile_[a-z0-9]{12,}|file_000[0-9a-z]{15,}/gi],
  ["embedded-image-or-pdf",/data:(?:image|application\/pdf)\/[a-z+.-]+;base64,/gi]
 ];
 for(const [kind,re] of checks)if(re.test(body))flagged.push(fp+":"+kind);
}
for(const p of roots)if(fs.existsSync(p))scan(p);
assert.deepEqual(flagged,[],flagged.join("\n"));
const questions=JSON.parse(fs.readFileSync("data/questions.json","utf8"));
assert.equal(questions.length,9,"Only original practice questions belong in the public app at this stage");
assert.ok(questions.every(q=>q.source_type==="original"&&q.publication_approval==="approved-original-prototype-v1"),"prototype publication requires positive original approval");
console.log("PASS public source boundary: "+checked+" checked text files, no private Drive IDs, mounted files or embedded exam images; 9 original questions.");
