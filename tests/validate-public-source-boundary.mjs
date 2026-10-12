import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
const roots=["README.md","index.html","css","js","content","data","docs"];
let checked=0;const flagged=[];
const excluded=new Set([".git","node_modules"]);
const textExt=new Set([".md",".csv",".json",".html",".css",".js",".mjs",".yml",".yaml",".txt"]);
function scan(fp){
 const stat=fs.statSync(fp);
 if(stat.isDirectory()){for(const entry of fs.readdirSync(fp)){if(excluded.has(entry))continue;scan(path.join(fp,entry));}return;}
 const ext=path.extname(fp).toLowerCase();
 if(/(?:^|\\/)(?:R0[1-9]|R[0-9]{2})[_-].*(?:14|15|正解).*\\.pdf$/i.test(fp))flagged.push(fp+": government exam PDF must stay outside published repo");
 if(!textExt.has(ext))return;
 checked++;
 const c=fs.readFileSync(fp,"utf8");
 const drive=/https?:\\/\\/(?:drive\\.google\\.com\\/(?:file\\/d\\/|open\\?id=|folders\\/)|docs\\.google\\.com\\/(?:document|spreadsheets|presentation)\\/d\\/)[A-Za-z0-9_?=&-]{16,}/gi;
 const locals=/\\/mnt\\/data\\/[^\\s"'<>]+|libfile_[a-z0-9]{12,}|file_000[0-9a-z]{15,}/gi;
 const embedded=/data:(?:image|application\\/pdf)\\/[a-z+.-]+;base64,/gi;
 for(const [kind,re] of [["private-document-url",drive],["mounted-private-file",locals],["embedded-image-or-pdf",embedded]]){
  if(re.test(c))flagged.push(fp+":"+kind);
 }
}
for(const p of roots){if(fs.existsSync(p))scan(p);}
assert.deepEqual(flagged,[],flagged.join("\\n"));
const qs=JSON.parse(fs.readFileSync("data/questions.json","utf8"));
assert.equal(qs.length,9,"only nine original practice questions in this research PR");
console.log("PASS public source boundary: scanned "+checked+" text files; no private Drive IDs, user files or embedded exam artwork; 9 original questions");
