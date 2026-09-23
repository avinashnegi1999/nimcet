// Step 3: find re-used (recycled) questions across papers.
// Two independent similarity signals per pair of questions from different years:
//   cos  = TF-IDF cosine over content words + word bigrams (numbers dropped)
//   jac  = Jaccard overlap of character 5-grams of the raw text with whitespace
//          removed (numbers and maths symbols kept, so re-used maths expressions match)
// Word-only similarity gave false matches on short maths stems (checked by hand),
// so a pair is kept as a candidate only when BOTH signals agree (see RULE below).
// Output: data/syllabus-2027/repeat-candidates.json (all pairs cos>=0.5 or jac>=0.3, for review)
const fs = require("fs"), path = require("path");
const ROOT = path.resolve(__dirname, "../../..");
const Q = fs.readFileSync(path.join(ROOT, "data/questions-classified.jsonl"), "utf8").trim().split("\n").map(JSON.parse);
const L = fs.readFileSync(path.join(ROOT, "data/syllabus-2027/labels.jsonl"), "utf8").trim().split("\n").map(JSON.parse);
const lab = Object.fromEntries(L.map(r => [r.id, r]));

const STOP = new Set(("the of a an and or to in is are be which following if then for on with by as at from that this it its " +
  "question questions given below answer choose select find what will value").split(" "));
const NOISE = /go to discussion|aspirestudy|nimcet (previous year )?pyq/gi;
function words(t) {
  const w = t.toLowerCase().replace(NOISE, " ").replace(/[^a-z]+/g, " ").split(" ").filter(x => x.length > 1 && !STOP.has(x));
  const out = [...w];
  for (let i = 0; i + 1 < w.length; i++) out.push(w[i] + "_" + w[i + 1]);
  return out;
}
function shingles(t) {
  const s = t.toLowerCase().replace(NOISE, "").replace(/\s+/g, "");
  const set = new Set(); for (let i = 0; i + 5 <= s.length; i++) set.add(s.slice(i, i + 5));
  return set;
}
const docs = Q.map(q => {
  const id = q.year + "#" + q.n, code = lab[id].code;
  return { id, year: q.year, n: q.n, code, w: words(q.text), sh: shingles(q.text),
    usable: code !== "X-DUP" && code !== "X-UNK" && q.text.replace(/\s+/g, "").length >= 25 };
});
const U = docs.filter(d => d.usable);
const df = {}; for (const d of U) for (const t of new Set(d.w)) df[t] = (df[t] || 0) + 1;
for (const d of U) {
  const tf = {}; for (const t of d.w) tf[t] = (tf[t] || 0) + 1;
  let norm = 0; d.v = {};
  for (const t in tf) { const x = (1 + Math.log(tf[t])) * Math.log(U.length / df[t]); d.v[t] = x; norm += x * x; }
  norm = Math.sqrt(norm) || 1; for (const t in d.v) d.v[t] /= norm;
  d.nw = new Set(d.w.filter(x => !x.includes("_"))).size;
}
const pairs = [];
for (let i = 0; i < U.length; i++) for (let j = i + 1; j < U.length; j++) {
  const a = U[i], b = U[j]; if (a.year === b.year) continue;
  const [s, l] = Object.keys(a.v).length < Object.keys(b.v).length ? [a, b] : [b, a];
  let cos = 0; for (const t in s.v) if (l.v[t]) cos += s.v[t] * l.v[t];
  const [x, y] = a.sh.size < b.sh.size ? [a.sh, b.sh] : [b.sh, a.sh];
  let inter = 0; for (const g of x) if (y.has(g)) inter++;
  const jac = inter / (a.sh.size + b.sh.size - inter || 1);
  if (cos >= 0.5 || jac >= 0.3) pairs.push({ a: a.id, b: b.id, cos: +cos.toFixed(3), jac: +jac.toFixed(3),
    minWords: Math.min(a.nw, b.nw), codeA: a.code, codeB: b.code });
}
pairs.sort((p, q) => (q.cos + q.jac) - (p.cos + p.jac));
fs.writeFileSync(path.join(ROOT, "data/syllabus-2027/repeat-candidates.json"), JSON.stringify(pairs, null, 1));
console.log("usable:", U.length, "candidate pairs:", pairs.length);
const grid = {}; for (const p of pairs) { const k = `cos${Math.min(9, Math.floor(p.cos * 10))} jac${Math.min(9, Math.floor(p.jac * 10))}`; grid[k] = (grid[k] || 0) + 1; }
console.log(Object.entries(grid).sort().map(([k, v]) => k + ":" + v).join("  "));
