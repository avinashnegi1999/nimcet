// Review helper: node dump.js <Section> <fromYear> <toYear> [maxChars]
// Prints one line per question: id [draft code] {old subtopic} text (whitespace collapsed)
const fs=require("fs"),path=require("path");const ROOT=path.resolve(__dirname,"../../..");
const [sec,a,b,mx]=[process.argv[2],+process.argv[3],+process.argv[4],+process.argv[5]||260];
const Q=fs.readFileSync(path.join(ROOT,"data/questions-classified.jsonl"),"utf8").trim().split("\n").map(JSON.parse);
const P=fs.readFileSync(path.join(ROOT,"data/syllabus-2027/prelabel.jsonl"),"utf8").trim().split("\n").map(JSON.parse);
const ovf=path.join(ROOT,"data/syllabus-2027/overrides.tsv");const ov={};
if(fs.existsSync(ovf))for(const l of fs.readFileSync(ovf,"utf8").split("\n")){const [id,c]=l.split("\t");if(id&&c&&!id.startsWith("#"))ov[id]=c}
Q.forEach((q,i)=>{if(q.section!==sec||q.year<a||q.year>b)return;const id=q.year+"#"+q.n;
const code=ov[id]||P[i].code;
const t=q.text.replace(/\s+/g," ").slice(0,mx);console.log(`${id} [${code}] {${q.subtopic}} ${t}`)});
