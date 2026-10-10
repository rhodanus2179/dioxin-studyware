import {readProgress,saveAnswer,summary} from "./storage.js";
const root=document.getElementById("app");
const nav=document.getElementById("navigation");
const catalog={chapters:[],questions:[],references:[],sections:[],outlineItems:[]};
let quizState=null;
function escapeHtml(v){return String(v).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function inline(v){return escapeHtml(v).replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/`(.+?)`/g,"<code>$1</code>");}
function mdRender(md){
  const lines=md.replace(/\r/g,"").split("\n");let out=[],para=[],list=[];
  const paraClose=()=>{if(para.length){out.push("<p>"+inline(para.join(" "))+"</p>");para=[];}};
  const listClose=()=>{if(list.length){out.push("<ul>"+list.map(s=>"<li>"+inline(s)+"</li>").join("")+"</ul>");list=[];}};
  for(const s of lines){
    if(/^\s*$/.test(s)){paraClose();listClose();continue;}
    const m=s.match(/^(#{1,3})\s+(.+)$/);
    if(m){paraClose();listClose();let level=m[1].length+1;out.push("<h"+level+">"+inline(m[2])+"</h"+level+">");continue;}
    if(s.startsWith("- ")){paraClose();list.push(s.slice(2));continue;}
    listClose();para.push(s.trim());
  }
  paraClose();listClose();return out.join("\n");
}
function el(tag,attrs={},txt){const e=document.createElement(tag);for(const [k,v] of Object.entries(attrs)){if(k==="className")e.className=v;else e.setAttribute(k,v);}if(txt!==undefined)e.textContent=txt;return e;}
function chapter(id){return catalog.chapters.find(c=>c.id===id);}
function outlineHtml(id){
 const body=catalog.sections.filter(s=>s.chapter_id===id).map(s=>{
  const entries=catalog.outlineItems.filter(x=>x.section_id===s.id);
  return '<li><details><summary>'+escapeHtml(s.id+' '+s.title)+'</summary><ul>'+
    entries.map(x=>'<li><strong>'+escapeHtml(x.id+' '+x.title)+'</strong> — '+escapeHtml(x.learning_focus)+'</li>').join('')+
    '</ul></details></li>';
 }).join('');
 return '<section class="panel"><h2>正式65節と項レベルの編集案</h2><p class="muted">節構成は採択済み、項構成は執筆用の編集案です。各項の本文・根拠監査はまだ完成していません。</p><ul>'+body+'</ul></section>';
}
function hpath(){return decodeURIComponent(location.hash.slice(1)||"/");}
function renderNav(){
  nav.replaceChildren();
  for(const [label,href] of [["学習ダッシュボード","#/"],["確認問題を解く","#/quiz"]]){
    const a=el("a",{href,className:"nav-main"},label);nav.append(a);
  }
  for(const [subject,label] of [["intro","はじめに"],["general","ダイオキシン類概論"],["advanced","ダイオキシン類特論"]]){
    nav.append(el("div",{className:"nav-heading"},label));
    for(const c of catalog.chapters.filter(x=>x.subject===subject)){
      const a=el("a",{href:"#/chapter/"+c.id,className:"nav-entry "+(c.status==="planned"?"planned":"")});
      a.append(el("span",{},c.title));
      if(c.status==="planned")a.append(el("small",{},"準備中"));
      nav.append(a);
    }
  }
  const current=hpath();
  for(const a of nav.querySelectorAll("a"))a.classList.toggle("active",a.getAttribute("href")==="#"+current);
}
function renderHome(){
  const s=summary();
  root.innerHTML='<section class="panel hero"><span class="eyebrow">公害防止管理者・ダイオキシン類関係</span><h1>暗記する前に、つながりを理解する。</h1><p class="lead">「なぜそうなるのか」「次の話とどうつながるのか」を、語りかけるような文章で学ぶ非公式Studywareです。</p><div class="actions"><a href="#/chapter/intro" class="btn">序章から学ぶ</a><a href="#/quiz" class="btn secondary">確認問題に挑戦</a></div><p class="meta">現在は初期試作段階。公開済みの文章・問題も今後増補・検証します。</p></section>';
  const stats=el("section",{className:"panel"});
  stats.innerHTML='<h2>学習の記録</h2><div class="grid"><div class="stat"><strong>'+s.reviewed+'</strong><span>解答した問題の種類</span></div><div class="stat"><strong>'+s.attempts+'</strong><span>総解答回数</span></div><div class="stat"><strong>'+s.weak+'</strong><span>直近の回答が不正解の問題</span></div></div>';
  root.append(stats);
  const group=el("section",{className:"panel"});group.innerHTML="<h2>教材を読む</h2><p class='muted'>序章と一部の章から制作しています。全12分野を順次執筆します。</p>";
  const cards=el("div",{className:"cards"});
  for(const c of catalog.chapters.filter(x=>x.status!=="planned")){
    const a=el("a",{className:"lesson-card",href:"#/chapter/"+c.id});
    a.innerHTML='<span class="chip">下書き公開中</span><h3>'+escapeHtml(c.title)+'</h3><p>'+escapeHtml(c.description||"")+'</p>';
    cards.append(a);
  }
  group.append(cards);root.append(group);
}
async function renderLesson(id){
  const c=chapter(id);if(!c){renderNotFound();return;}
  if(c.status==="planned"){root.innerHTML='<section class="panel"><span class="eyebrow">制作予定</span><h1>'+escapeHtml(c.title)+'</h1><p>この章は執筆準備中です。公式出題範囲には含まれていますが、まだ本文や演習問題を公開していません。</p><a href="#/" class="btn secondary">章一覧へ</a></section>'+outlineHtml(id);return;}
  root.innerHTML='<section class="panel"><p class="muted">本文を読み込んでいます……</p></section>';
  try{
    const r=await fetch(c.path);if(!r.ok)throw Error("HTTP "+r.status);
    const text=await r.text();if(!location.hash.endsWith("/"+id))return;
    const n=catalog.questions.filter(q=>q.chapter===id).length;
    root.innerHTML=outlineHtml(id)+'<article class="panel"><span class="eyebrow">解説テキスト・初稿</span><div class="article">'+mdRender(text)+'</div><hr class="rule"><p class="meta">この章は編集途中の原稿です。試験の最新の法令・数値は一次資料でも確認してください。</p><div class="actions"><a href="#/quiz?chapter='+encodeURIComponent(id)+'" class="btn">この章の確認問題 ('+n+'問)</a><a href="#/" class="btn secondary">章一覧へ</a></div></article>';
  }catch(e){root.innerHTML='<section class="panel"><h1>読み込みエラー</h1><p>教材を取得できませんでした。GitHub PagesなどHTTPサーバーで開いてください。</p><p class="meta">'+escapeHtml(e.message)+'</p></section>';}
}
function quizPool(path){
  const query=path.split("?")[1]||"";
  const params=new URLSearchParams(query);
  const chapterId=params.get("chapter");
  const weak=params.get("weak")==="1";
  let q=catalog.questions.filter(v=>!chapterId||v.chapter===chapterId);
  if(weak){const p=readProgress();q=q.filter(v=>p[v.id]&&p[v.id].lastCorrect===false);}
  return q;
}
function renderQuizPage(path){
  quizState={pool:quizPool(path),index:0,answered:false,score:0};
  renderQuestion();
}
function renderQuestion(){
  const s=quizState;if(!s)return;
  if(s.pool.length===0){root.innerHTML='<section class="panel"><h1>該当する問題がありません</h1><p>章別問題や弱点復習は、問題の追加・学習の進行に応じて利用できます。</p><a class="btn secondary" href="#/quiz">全問題へ</a></section>';return;}
  if(s.index>=s.pool.length){
    root.innerHTML='<section class="panel"><span class="eyebrow">演習終了</span><h1>今回の結果</h1><div class="stat"><strong>'+s.score+' / '+s.pool.length+'</strong><span>正答数</span></div><p>間違えた問題は、弱点復習からやり直せます。</p><div class="actions"><a class="btn" href="#/quiz?weak=1">弱点を復習する</a><a class="btn secondary" href="#/">トップに戻る</a></div></section>';return;
  }
  s.answered=false;
  const q=s.pool[s.index];
  root.replaceChildren();
  const card=el("section",{className:"panel"});
  const eyebrow=el("span",{className:"eyebrow"},"オリジナル確認問題");
  const progress=el("p",{className:"quiz-progress"},(s.index+1)+" / "+s.pool.length+"　・　"+(chapter(q.chapter)?.title||""));
  const title=el("h1",{},q.question);
  const field=el("fieldset",{className:"quiz-options"});
  const legend=el("legend",{className:"meta"},"最も適切なものを1つ選んでください。");
  field.append(legend);
  q.choices.forEach((v,i)=>{
    const label=el("label",{className:"choice"});
    const input=el("input",{type:"radio",name:"quiz-answer",value:String(i)});
    label.append(input,document.createTextNode(" "+(i+1)+". "+v));field.append(label);
  });
  const feedback=el("div",{className:"feedback",role:"status"});feedback.hidden=true;
  const btn=el("button",{className:"btn",type:"button"},"解答する");
  const next=el("button",{className:"btn secondary",type:"button"},"次の問題へ");next.hidden=true;
  btn.addEventListener("click",()=>{
    const selected=field.querySelector("input:checked");if(!selected){feedback.hidden=false;feedback.className="feedback incorrect";feedback.textContent="選択肢を選んでください。";return;}
    if(s.answered)return;
    s.answered=true;const correct=Number(selected.value)===q.answer;
    if(correct)s.score++;
    saveAnswer(q.id,correct);
    field.querySelectorAll("input").forEach(i=>i.disabled=true);
    feedback.hidden=false;feedback.className="feedback"+(correct?"":" incorrect");
    feedback.replaceChildren(el("strong",{},correct?"正解です。":"不正解です。正答："+(q.answer+1)+"番"));
    feedback.append(el("p",{},q.explanation));
    if(Array.isArray(q.choice_explanations)&&q.choice_explanations.length===5){
      const details=el("ol",{className:"choice-rationales"});
      for(const reason of q.choice_explanations)details.append(el("li",{},reason));
      feedback.append(details);
    }
    btn.hidden=true;next.hidden=false;
  });
  next.addEventListener("click",()=>{s.index++;renderQuestion();});
  card.append(eyebrow,progress,title,field,feedback);
  const actions=el("div",{className:"actions"});actions.append(btn,next);
  card.append(actions);root.append(card);
}
function renderReferences(){
  const panel=el("section",{className:"panel sources"});
  panel.innerHTML="<h1>出典・資料</h1><p>本文はオリジナル執筆です。公式試験問題の転載ではありません。法令・測定法は一次資料を優先して確認してください。</p>";
  for(const ref of catalog.references){
    const a=el("a",{href:ref.url,target:"_blank",rel:"noopener noreferrer"},ref.title);
    panel.append(a);
  }
  root.replaceChildren(panel);
}
function renderNotFound(){root.innerHTML='<section class="panel"><h1>ページが見つかりません</h1><a href="#/" class="btn secondary">トップに戻る</a></section>';}
async function load(){
  try{
    const files=["./data/chapters.json","./data/questions.json","./data/references.json","./data/sections.json","./data/outline-items.json"];
    const results=await Promise.all(files.map(async url=>{const r=await fetch(url);if(!r.ok)throw Error(url+" "+r.status);return r.json();}));
    [catalog.chapters,catalog.questions,catalog.references,catalog.sections,catalog.outlineItems]=results;
    window.addEventListener("hashchange",route);
    route();
  }catch(e){root.innerHTML='<section class="panel"><h1>データの読み込みに失敗しました</h1><p>GitHub PagesまたはローカルHTTPサーバーで開いてください。</p><pre>'+escapeHtml(e.message)+'</pre></section>';}
}
function route(){
  const path=hpath();renderNav();
  if(path==="/")renderHome();
  else if(path.startsWith("/chapter/"))renderLesson(path.split("/")[2]);
  else if(path.startsWith("/quiz"))renderQuizPage(path);
  else if(path==="/sources")renderReferences();
  else renderNotFound();
  window.scrollTo(0,0);
}
load();
