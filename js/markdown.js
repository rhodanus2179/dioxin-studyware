// Minimal, fail-closed Markdown renderer for public-facing original learning text.
// Raw HTML is escaped. Only HTTPS Markdown links are enabled.
export function escapeHtml(v){
  return String(v).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
}
export function inline(v){
  return escapeHtml(v)
    .replace(/\[([^\]\n]+)\]\((https:\/\/[^\s()]+)\)/g,(_all,label,url)=>'<a href="'+url+'" target="_blank" rel="noopener noreferrer">'+label+'</a>')
    .replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>")
    .replace(/`(.+?)`/g,"<code>$1</code>");
}
export function mdRender(md){
  const lines=String(md).replace(/\r/g,"").split("\n");let out=[],para=[],list=[];
  const paraClose=()=>{if(para.length){out.push("<p>"+inline(para.join(" "))+"</p>");para=[];}};
  const listClose=()=>{if(list.length){out.push("<ul>"+list.map(s=>"<li>"+inline(s)+"</li>").join("")+"</ul>");list=[];}};
  for(const s of lines){
    if(/^\s*$/.test(s)){paraClose();listClose();continue;}
    const m=s.match(/^(#{1,3})\s+(.+)$/);
    if(m){paraClose();listClose();const level=m[1].length+1;out.push("<h"+level+">"+inline(m[2])+"</h"+level+">");continue;}
    if(s.startsWith("- ")){paraClose();list.push(s.slice(2));continue;}
    listClose();para.push(s.trim());
  }
  paraClose();listClose();return out.join("\n");
}
