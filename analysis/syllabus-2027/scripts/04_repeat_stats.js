// Step 4: statistics on confirmed repeats (R and V verdicts in repeat-review.tsv).
// A question counts as "recycled" if it has a confirmed match in an EARLIER paper.
// Output: data/syllabus-2027/repeats.json
const fs = require("fs"), path = require("path");
const ROOT = path.resolve(__dirname, "../../..");
const D = p => path.join(ROOT, "data/syllabus-2027", p);
const L = fs.readFileSync(D("labels.jsonl"), "utf8").trim().split("\n").map(JSON.parse);
const lab = Object.fromEntries(L.map(r => [r.id, r]));
const yr = id => +id.split("#")[0];

const edges = [];
for (const line of fs.readFileSync(D("repeat-review.tsv"), "utf8").split("\n")) {
  if (!line.trim() || line.startsWith("#")) continue;
  const [a, b, v] = line.split("\t");
  if (v === "R" || v === "V") edges.push({ a, b, v });
}
// earliest-source map: for each later question, all earlier matches
const earlier = {};
for (const e of edges) {
  const [x, y] = yr(e.a) < yr(e.b) ? [e.a, e.b] : [e.b, e.a];
  (earlier[y] = earlier[y] || []).push({ src: x, v: e.v });
}
// clusters (connected components)
const par = {}; const f = x => (par[x] === undefined ? (par[x] = x) : par[x] === x ? x : (par[x] = f(par[x])));
for (const e of edges) par[f(e.a)] = f(e.b);
const comp = {}; for (const id of new Set(edges.flatMap(e => [e.a, e.b]))) (comp[f(id)] = comp[f(id)] || []).push(id);
const clusters = Object.values(comp).map(ids => {
  ids.sort((p, q) => yr(p) - yr(q) || +p.split("#")[1] - +q.split("#")[1]);
  const years = [...new Set(ids.map(yr))];
  return { ids, years, codes: [...new Set(ids.map(i => lab[i].code))], last: years[years.length - 1] };
}).sort((a, b) => b.years.length - a.years.length || b.last - a.last);

const perYear = {};
for (let y = 2008; y <= 2026; y++) {
  const qs = L.filter(r => r.year === y && r.code !== "X-DUP");
  const rec = qs.filter(r => earlier[r.id]);
  perYear[y] = { questions: qs.length, recycled: rec.length, pct: +(100 * rec.length / qs.length).toFixed(1) };
}
// gap = later year - most recent earlier year it matched
const gaps = {};
const srcYears = {};
for (const id in earlier) {
  const s = Math.max(...earlier[id].map(m => yr(m.src)));
  const g = yr(id) - s; gaps[g] = (gaps[g] || 0) + 1;
  srcYears[s] = (srcYears[s] || 0) + 1;
}
const perCode = {};
for (const r of L) {
  if (r.code === "X-DUP") continue;
  const c = perCode[r.code] = perCode[r.code] || { total: 0, recycled: 0 };
  c.total++; if (earlier[r.id]) c.recycled++;
}
// recent window: how much of 2023-2026 was recycled, and from which gaps
const recent = Object.keys(earlier).filter(id => yr(id) >= 2021);
const recentGaps = {}; for (const id of recent) { const g = yr(id) - Math.max(...earlier[id].map(m => yr(m.src))); recentGaps[g] = (recentGaps[g] || 0) + 1; }

const out = { confirmedPairs: edges.length, recycledQuestions: Object.keys(earlier).length, clusters: clusters.length,
  perYear, gaps, gapsSince2021: recentGaps, sourceYears: srcYears, perCode, earlier, clusterList: clusters };
fs.writeFileSync(D("repeats.json"), JSON.stringify(out, null, 1));
console.log("confirmed pairs", edges.length, "| recycled questions", out.recycledQuestions, "| clusters", clusters.length);
console.log("per year % recycled:", Object.entries(perYear).map(([y, v]) => y.slice(2) + ":" + v.recycled + "(" + v.pct + "%)").join(" "));
console.log("gap distribution (all):", JSON.stringify(gaps));
console.log("gap distribution (targets 2021+):", JSON.stringify(recentGaps));
console.log("clusters seen in 3+ papers:");
for (const c of clusters.filter(c => c.years.length >= 3)) console.log("  ", c.years.join(","), c.codes.join("/"), c.ids.slice(0, 6).join(" "));
console.log("top recycled chapters:", Object.entries(perCode).filter(([, v]) => v.recycled).sort((a, b) => b[1].recycled - a[1].recycled).slice(0, 15).map(([k, v]) => `${k} ${v.recycled}/${v.total}`).join(", "));
