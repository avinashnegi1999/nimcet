// Review helper: list ALL pairs matching a filter, numbered, compact: node listpairs.js "<filter>" [chars]
const fs=require("fs"),path=require("path");const ROOT=path.resolve(__dirname,"../../..");
const f=new Function("p","return "+process.argv[2]);const ch=+process.argv[3]||110;
const Q=Object.fromEntries(fs.readFileSync(path.join(ROOT,"data/questions-classified.jsonl"),"utf8").trim().split("\n").map(JSON.parse).map(q=>[q.year+"#"+q.n,q]));
const clean=s=>s.replace(/Read the following (information|passage)[^:.]*[:.]|Directions?[^:]*:|Study the following[^:]*:/gi,"").replace(/\s+/g," ").trim();
JSON.parse(fs.readFileSync(path.join(ROOT,"data/syllabus-2027/repeat-candidates.json"),"utf8")).filter(f).forEach((p,i)=>{
console.log(`${i+1}. ${p.a}~${p.b} c${p.cos} j${p.jac}\n   A ${clean(Q[p.a].text).slice(0,ch)}\n   B ${clean(Q[p.b].text).slice(0,ch)}`)});
