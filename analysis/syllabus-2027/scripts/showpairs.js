// Review helper: node showpairs.js "<js filter on p>" <max>  e.g. "p.jac>=0.5&&p.jac<0.6"
const fs=require("fs"),path=require("path");const ROOT=path.resolve(__dirname,"../../..");
const f=new Function("p","return "+process.argv[2]);const mx=+process.argv[3]||15;
const Q=Object.fromEntries(fs.readFileSync(path.join(ROOT,"data/questions-classified.jsonl"),"utf8").trim().split("\n").map(JSON.parse).map(q=>[q.year+"#"+q.n,q]));
const P=JSON.parse(fs.readFileSync(path.join(ROOT,"data/syllabus-2027/repeat-candidates.json"),"utf8")).filter(f);
const step=Math.max(1,Math.floor(P.length/mx));
for(let i=0;i<P.length&&i/step<mx;i+=step){const p=P[i];const t=id=>Q[id].text.replace(/\s+/g," ").slice(0,160);
console.log(`--- cos ${p.cos} jac ${p.jac} ${p.a} [${p.codeA}] vs ${p.b} [${p.codeB}]\n A: ${t(p.a)}\n B: ${t(p.b)}`)}
console.log("pairs matching:",P.length);
