const KEY = "dioxin-studyware-progress-v1";
export function readProgress() {
  try {
    const item = JSON.parse(localStorage.getItem(KEY) || "{}");
    return item && typeof item === "object" && !Array.isArray(item) ? item : {};
  } catch (_) { return {}; }
}
export function saveAnswer(id, correct) {
  const item = readProgress();
  const old = item[id] || {attempts:0,correct:0};
  item[id] = {attempts:old.attempts+1,correct:old.correct+(correct?1:0),lastCorrect:!!correct,updatedAt:new Date().toISOString()};
  try { localStorage.setItem(KEY, JSON.stringify(item)); } catch (_) { /* storage disabled */ }
}
export function summary() {
  const records = Object.values(readProgress());
  return {reviewed:records.length,attempts:records.reduce((a,v)=>a+(v.attempts||0),0),correct:records.reduce((a,v)=>a+(v.correct||0),0),weak:records.filter(v=>v.lastCorrect===false).length};
}
