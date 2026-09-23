// Step 6: 2027 forecast per syllabus chapter + the pattern statistics shown on the page.
// Model (chosen by the back-test in 05_backtest.js, targets 2016-2026):
//   share_c  = exponentially weighted mean of the chapter's share of its Part, half-life 6 papers
//   E_c      = share_c x N_part(2027)            (N = 50 / 40 / 20 / 10)
//   p_raw    = 1 - exp(-E_c)                      (Poisson: chance of >= 1 question)
//   likelyRange = Poisson 10th-90th percentile of E; in the back-test it held the real count ~91% of the time
//   P_c      = sigmoid(a * logit(p_raw) + b)      (Platt calibration fitted on 2012-2026 targets,
//                                                  each target predicted only from earlier papers)
// Robustness: the same model with half-life 2 (recency-heavy) is reported next to it.
// Output: data/syllabus-2027/forecast-2027.json
const fs = require("fs"), path = require("path");
const ROOT = path.resolve(__dirname, "../../..");
const D = p => path.join(ROOT, "data/syllabus-2027", p);
const L = fs.readFileSync(D("labels.jsonl"), "utf8").trim().split("\n").map(JSON.parse);
const Q = Object.fromEntries(fs.readFileSync(path.join(ROOT, "data/questions-classified.jsonl"), "utf8").trim().split("\n").map(JSON.parse).map(q => [q.year + "#" + q.n, q]));
const tax = JSON.parse(fs.readFileSync(D("taxonomy.json"), "utf8"));
const rep = JSON.parse(fs.readFileSync(D("repeats.json"), "utf8"));
const YEARS = []; for (let y = 2008; y <= 2026; y++) YEARS.push(y);
const N2027 = Object.fromEntries(tax.parts.map(p => [p.section, p.questions2027]));
const has = (part, y) => !(y === 2015 && (part === "Computer" || part === "English"));

const cnt = {}, tot = {}, ids = {};
for (const r of L) {
  (ids[r.code] = ids[r.code] || []).push(r.id);
  if (!r.inSyllabus) continue;
  cnt[r.code] = cnt[r.code] || {}; cnt[r.code][r.year] = (cnt[r.code][r.year] || 0) + 1;
  tot[r.part] = tot[r.part] || {}; tot[r.part][r.year] = (tot[r.part][r.year] || 0) + 1;
}
// Official section sizes, known before each exam (NOT the realised content count of the target paper,
// which would leak information): 2008-2022 Math 50 / Reasoning 40 / Computer 10 / English 20; 2023+ 50/40/20/10.
const OFFICIAL = (part, T) => (T >= 2023 ? { Math: 50, Reasoning: 40, Computer: 20, English: 10 } : { Math: 50, Reasoning: 40, Computer: 10, English: 20 })[part];
const x = (c, y) => (cnt[c] && cnt[c][y]) || 0;
const share = (c, p, y) => x(c, y) / tot[p][y];
const ew = (v, h) => { let s = 0, w = 0; const n = v.length; v.forEach((a, i) => { const wi = Math.pow(0.5, (n - 1 - i) / h); s += wi * a; w += wi; }); return s / w; };
const logit = p => Math.log(p / (1 - p)), sig = z => 1 / (1 + Math.exp(-z)), cl = p => Math.min(0.99, Math.max(0.01, p));
const chapters = []; for (const p of tax.parts) for (const u of p.units) for (const [code, name] of u.chapters) chapters.push({ code, name, part: p.section, unit: u.unit });

// ---- Platt calibration, fitted on rolling-origin predictions for targets 2012..2026 ----
function rawP(c, p, ys, N, h) { return 1 - Math.exp(-Math.max(ew(ys.map(y => share(c, p, y)), h) * N, 0.02)); }
function fitPlatt(h) {
  const rows = [];
  for (let T = 2012; T <= 2026; T++) for (const ch of chapters) {
    if (!has(ch.part, T)) continue;
    const ys = YEARS.filter(y => y < T && has(ch.part, y));
    rows.push({ z: logit(cl(rawP(ch.code, ch.part, ys, OFFICIAL(ch.part, T), h))), hit: x(ch.code, T) > 0 ? 1 : 0 });
  }
  let a = 1, b = 0;
  for (let it = 0; it < 4000; it++) { let ga = 0, gb = 0; for (const r of rows) { const e = sig(a * r.z + b) - r.hit; ga += e * r.z; gb += e; } a -= 0.5 * ga / rows.length; b -= 0.5 * gb / rows.length; }
  return { a, b, n: rows.length };
}
const cal6 = fitPlatt(6), cal2 = fitPlatt(2);

// ---- trend test: Spearman rho(year, share) with a permutation p-value, BH-adjusted ----
function rank(a) { const s = a.map((v, i) => [v, i]).sort((p, q) => p[0] - q[0]); const r = Array(a.length); for (let i = 0; i < s.length;) { let j = i; while (j + 1 < s.length && s[j + 1][0] === s[i][0]) j++; for (let k = i; k <= j; k++) r[s[k][1]] = (i + j) / 2 + 1; i = j + 1; } return r; }
function pearson(a, b) { const n = a.length, ma = a.reduce((s, v) => s + v, 0) / n, mb = b.reduce((s, v) => s + v, 0) / n; let sab = 0, sa = 0, sb = 0; for (let i = 0; i < n; i++) { sab += (a[i] - ma) * (b[i] - mb); sa += (a[i] - ma) ** 2; sb += (b[i] - mb) ** 2; } return sa && sb ? sab / Math.sqrt(sa * sb) : 0; }
let seed = 12345; const rnd = () => ((seed = (seed * 1103515245 + 12345) % 2147483648) / 2147483648);
function trend(ys, vals) {
  const ry = rank(ys), rv = rank(vals), rho = pearson(ry, rv);
  let ge = 0; const P = 4000, perm = [...rv];
  for (let k = 0; k < P; k++) { for (let i = perm.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [perm[i], perm[j]] = [perm[j], perm[i]]; } if (Math.abs(pearson(ry, perm)) >= Math.abs(rho) - 1e-12) ge++; }
  return { rho: +rho.toFixed(3), p: (ge + 1) / (P + 1) };
}

const pois = (lam, k) => { let s = 0, t = Math.exp(-lam); for (let i = 0; i <= k; i++) { s += t; t *= lam / (i + 1); } return s; }; // P(X<=k)
const range80 = lam => { let lo = 0; while (pois(lam, lo) < 0.1) lo++; let hi = lo; while (pois(lam, hi) < 0.9) hi++; return [lo, hi]; };

const out = [];
for (const ch of chapters) {
  const ys = YEARS.filter(y => has(ch.part, y));
  const hist = Object.fromEntries(YEARS.map(y => [y, has(ch.part, y) ? x(ch.code, y) : null]));
  const s6 = ew(ys.map(y => share(ch.code, ch.part, y)), 6), s2 = ew(ys.map(y => share(ch.code, ch.part, y)), 2);
  const N = N2027[ch.part];
  const E = s6 * N, E2 = s2 * N;
  const P = sig(cal6.a * logit(cl(1 - Math.exp(-Math.max(E, 0.02)))) + cal6.b);
  const P2 = sig(cal2.a * logit(cl(1 - Math.exp(-Math.max(E2, 0.02)))) + cal2.b);
  const appeared = ys.filter(y => x(ch.code, y) > 0);
  const last = appeared.length ? appeared[appeared.length - 1] : null;
  // longest run of consecutive papers without the chapter
  let run = 0, maxRun = 0; for (const y of ys) { if (x(ch.code, y) > 0) run = 0; else { run++; maxRun = Math.max(maxRun, run); } }
  const tr = trend(ys, ys.map(y => share(ch.code, ch.part, y)));
  const rec = rep.perCode[ch.code] || { total: 0, recycled: 0 };
  // what the chapter's questions were about (old fine-grained subtopic tags), most frequent first
  const sub = {}; for (const id of ids[ch.code] || []) { const t = L.find(r => r.id === id).subtopic; sub[t] = (sub[t] || 0) + 1; }
  const recentIds = (ids[ch.code] || []).filter(id => +id.split("#")[0] >= 2023);
  out.push({
    code: ch.code, chapter: ch.name, part: ch.part, unit: ch.unit, hist,
    total: appeared.reduce((s, y) => s + x(ch.code, y), 0), yearsAsked: appeared.length, yearsAvailable: ys.length,
    lastAsked: last, yearsSinceLast: last ? 2026 - last : null, longestGap: maxRun,
    expected2027: +E.toFixed(2), pAtLeast1: +P.toFixed(3), pAtLeast2Raw: +(1 - pois(E, 1)).toFixed(3), likelyRange: range80(E),
    recency: { expected2027: +E2.toFixed(2), pAtLeast1: +P2.toFixed(3) },
    trend: tr, recycled: rec.recycled,
    topSubtopics: Object.entries(sub).sort((a, b) => b[1] - a[1]).slice(0, 6),
    examples: recentIds.slice(-6).map(id => ({ id, text: Q[id].text.replace(/\s+/g, " ").slice(0, 220) })),
  });
}
// Benjamini-Hochberg over chapters with enough data
const tested = out.filter(o => o.total >= 5).sort((a, b) => a.trend.p - b.trend.p);
tested.forEach((o, i) => { o.trend.q = Math.min(1, o.trend.p * tested.length / (i + 1)); });
for (let i = tested.length - 2; i >= 0; i--) tested[i].trend.q = Math.min(tested[i].trend.q, tested[i + 1].trend.q);
for (const o of out) if (o.trend.q !== undefined) o.trend.q = +o.trend.q.toFixed(3);

// unit-level totals (how stable each unit's budget is) and scaled to the part's size
const units = [];
for (const p of tax.parts) for (const u of p.units) {
  const codes = u.chapters.map(c => c[0]);
  const ys = YEARS.filter(y => has(p.section, y));
  const shares = ys.map(y => codes.reduce((s, c) => s + share(c, p.section, y), 0));
  const scaled = shares.map(s => s * p.questions2027);
  const mean = scaled.reduce((s, v) => s + v, 0) / scaled.length;
  const sd = Math.sqrt(scaled.reduce((s, v) => s + (v - mean) ** 2, 0) / (scaled.length - 1));
  const E = out.filter(o => codes.includes(o.code)).reduce((s, o) => s + o.expected2027, 0);
  units.push({ part: p.section, unit: u.unit, expected2027: +E.toFixed(1), historicMeanScaled: +mean.toFixed(1), sdScaled: +sd.toFixed(1),
    hist: Object.fromEntries(ys.map((y, i) => [y, +scaled[i].toFixed(1)])) });
}
// off-syllabus history (shown greyed, no 2027 prediction)
const off = tax.offSyllabus.map(([code, part, name]) => ({ code, part, chapter: name,
  hist: Object.fromEntries(YEARS.map(y => [y, L.filter(r => r.code === code && r.year === y).length])), total: L.filter(r => r.code === code).length }));

const result = {
  generated: "2026-09-23", source: "19 NIMCET papers 2008-2026 (papers/), labels in data/syllabus-2027/labels.jsonl",
  partSizes2027: N2027,
  model: { halfLife: 6, calibration: { a: +cal6.a.toFixed(3), b: +cal6.b.toFixed(3), fittedOn: cal6.n + " chapter-year predictions (targets 2012-2026)" },
    recencyVariant: { halfLife: 2, a: +cal2.a.toFixed(3), b: +cal2.b.toFixed(3) } },
  chapters: out, units, offSyllabus: off,
};
fs.writeFileSync(D("forecast-2027.json"), JSON.stringify(result, null, 1));
console.log("calibration h6", cal6, "h2", cal2);
for (const p of tax.parts) {
  const rows = out.filter(o => o.part === p.section).sort((a, b) => b.pAtLeast1 - a.pAtLeast1);
  console.log(`\n== ${p.section} (N=${p.questions2027})  sum expected=${rows.reduce((s, o) => s + o.expected2027, 0).toFixed(1)}`);
  for (const o of rows) console.log(o.code.padEnd(7), (100 * o.pAtLeast1).toFixed(0).padStart(3) + "%", String(o.expected2027).padStart(5), `[${o.likelyRange}]`,
    "recency:", (100 * o.recency.pAtLeast1).toFixed(0).padStart(3) + "%", String(o.recency.expected2027).padStart(5),
    "asked", o.yearsAsked + "/" + o.yearsAvailable, "last", o.lastAsked, "trend rho", o.trend.rho, "q", o.trend.q ?? "-");
}
console.log("\nunits:"); for (const u of units) console.log(u.part.padEnd(9), u.unit.padEnd(32), "E", u.expected2027, "hist mean", u.historicMeanScaled, "sd", u.sdScaled);
