// Step 5: back-test forecasting methods on the syllabus-2027 chapter labels.
// Rolling origin: to predict paper T, a method may only use papers < T. Targets T = 2016..2026.
// Unit of prediction: one in-syllabus chapter in one target year.
//   (a) probability the chapter gets >= 1 question  -> scored by Brier score and log-loss
//   (b) expected number of questions               -> scored by mean absolute error (MAE)
// N for the target paper is the OFFICIAL section size (no peeking at the target paper).
// Shares are computed inside each syllabus Part (Math/Reasoning/Computer/English) over
// in-syllabus questions only, and scaled by that Part's size in the target paper.
// 2015 has no Computer/English questions in the source, so those Parts skip 2015.
// Output: data/syllabus-2027/backtest.json
const fs = require("fs"), path = require("path");
const ROOT = path.resolve(__dirname, "../../..");
const D = p => path.join(ROOT, "data/syllabus-2027", p);
const L = fs.readFileSync(D("labels.jsonl"), "utf8").trim().split("\n").map(JSON.parse);
const tax = JSON.parse(fs.readFileSync(D("taxonomy.json"), "utf8"));
const YEARS = []; for (let y = 2008; y <= 2026; y++) YEARS.push(y);

const chapters = []; // {code, part}
for (const p of tax.parts) for (const u of p.units) for (const [code] of u.chapters) chapters.push({ code, part: p.section });
const has = (part, y) => !(y === 2015 && (part === "Computer" || part === "English"));
const cnt = {}, tot = {};
for (const r of L) {
  if (!r.inSyllabus) continue;
  cnt[r.code] = cnt[r.code] || {}; cnt[r.code][r.year] = (cnt[r.code][r.year] || 0) + 1;
  tot[r.part] = tot[r.part] || {}; tot[r.part][r.year] = (tot[r.part][r.year] || 0) + 1;
}
// Official section sizes, known before each exam (NOT the realised content count of the target paper,
// which would leak information): 2008-2022 Math 50 / Reasoning 40 / Computer 10 / English 20; 2023+ 50/40/20/10.
const OFFICIAL = (part, T) => (T >= 2023 ? { Math: 50, Reasoning: 40, Computer: 20, English: 10 } : { Math: 50, Reasoning: 40, Computer: 10, English: 20 })[part];
const x = (c, y) => (cnt[c] && cnt[c][y]) || 0;
const share = (c, p, y) => x(c, y) / tot[p][y];

// ---- estimators: each gets (chapter, part, past years[], target size N) ----
function ew(vals, h) { // exponentially weighted mean, most recent last; half-life h papers
  let s = 0, w = 0; const n = vals.length;
  vals.forEach((v, i) => { const wi = Math.pow(0.5, (n - 1 - i) / h); s += wi * v; w += wi; });
  return { mean: s / w, weight: w };
}
const methods = {};
// probability methods
methods["P:freq-all"] = (c, p, ys) => { const k = ys.filter(y => x(c, y) > 0).length; return (k + 0.5) / (ys.length + 1); };
methods["P:freq-last5"] = (c, p, ys) => { const t = ys.slice(-5); const k = t.filter(y => x(c, y) > 0).length; return (k + 0.5) / (t.length + 1); };
for (const h of [1, 2, 3, 4, 6, 8]) methods[`P:ew-appear h${h}`] = (c, p, ys) => {
  const e = ew(ys.map(y => (x(c, y) > 0 ? 1 : 0)), h); return (e.mean * e.weight + 0.5) / (e.weight + 1);
};
for (const h of [1, 2, 3, 4, 6, 8]) methods[`P:poisson-ew h${h}`] = (c, p, ys, N) => {
  const e = ew(ys.map(y => share(c, p, y)), h); return 1 - Math.exp(-Math.max(e.mean * N, 0.02));
};
methods["P:markov"] = (c, p, ys) => { // P(appear | last-year state), per chapter, shrunk to pooled rates
  let a11 = 0, a1 = 0, a01 = 0, a0 = 0;
  for (let i = 1; i < ys.length; i++) { const prev = x(c, ys[i - 1]) > 0, now = x(c, ys[i]) > 0; if (prev) { a1++; if (now) a11++; } else { a0++; if (now) a01++; } }
  const last = x(c, ys[ys.length - 1]) > 0;
  return last ? (a11 + 1) / (a1 + 2) : (a01 + 1) / (a0 + 2);
};
// expected-count methods
methods["E:last-year"] = (c, p, ys, N) => share(c, p, ys[ys.length - 1]) * N;
methods["E:mean-all"] = (c, p, ys, N) => ys.reduce((s, y) => s + share(c, p, y), 0) / ys.length * N;
methods["E:mean-last5"] = (c, p, ys, N) => { const t = ys.slice(-5); return t.reduce((s, y) => s + share(c, p, y), 0) / t.length * N; };
for (const h of [1, 2, 3, 4, 6, 8]) methods[`E:ew h${h}`] = (c, p, ys, N) => ew(ys.map(y => share(c, p, y)), h).mean * N;

const res = {};
for (const m in methods) res[m] = { n: 0, brier: 0, logloss: 0, mae: 0, byPart: {} };
const calib = {}; // for the chosen probability method later
for (let T = 2016; T <= 2026; T++) {
  for (const ch of chapters) {
    if (!has(ch.part, T)) continue;
    const ys = YEARS.filter(y => y < T && has(ch.part, y));
    const N = OFFICIAL(ch.part, T);
    const actual = x(ch.code, T), hit = actual > 0 ? 1 : 0;
    for (const m in methods) {
      const v = methods[m](ch.code, ch.part, ys, N);
      const r = res[m]; r.n++;
      const bp = r.byPart[ch.part] = r.byPart[ch.part] || { n: 0, err: 0 };
      bp.n++;
      if (m.startsWith("P:")) {
        const pr = Math.min(0.99, Math.max(0.01, v));
        r.brier += (pr - hit) ** 2; r.logloss += -(hit ? Math.log(pr) : Math.log(1 - pr)); bp.err += (pr - hit) ** 2;
        (calib[m] = calib[m] || []).push([pr, hit]);
      } else { r.mae += Math.abs(v - actual); bp.err += Math.abs(v - actual); }
    }
  }
}
// baseline: one pooled appearance rate for every chapter (no chapter knowledge)
const out = {};
for (const m in res) {
  const r = res[m]; const o = { n: r.n };
  if (m.startsWith("P:")) { o.brier = +(r.brier / r.n).toFixed(4); o.logloss = +(r.logloss / r.n).toFixed(4); }
  else o.mae = +(r.mae / r.n).toFixed(4);
  o.byPart = Object.fromEntries(Object.entries(r.byPart).map(([k, v]) => [k, +(v.err / v.n).toFixed(4)]));
  out[m] = o;
}
// calibration table for every probability method (deciles)
const calTables = {};
for (const m in calib) {
  const bins = Array.from({ length: 10 }, () => ({ n: 0, p: 0, hit: 0 }));
  for (const [p, h] of calib[m]) { const b = bins[Math.min(9, Math.floor(p * 10))]; b.n++; b.p += p; b.hit += h; }
  calTables[m] = bins.map((b, i) => ({ bin: `${i / 10}-${(i + 1) / 10}`, n: b.n, meanPred: b.n ? +(b.p / b.n).toFixed(3) : null, observed: b.n ? +(b.hit / b.n).toFixed(3) : null }));
}
// ---- nested Platt calibration of the chosen method (Poisson on weighted share, half-life 6) ----
// For each target T the calibration (a, b) is fitted only on predictions for targets 2012..T-1,
// so the calibrated score is still an honest out-of-sample number.
const logit = p => Math.log(p / (1 - p)), sig = z => 1 / (1 + Math.exp(-z)), cl = p => Math.min(0.99, Math.max(0.01, p));
const rows = [];
for (let T = 2012; T <= 2026; T++) for (const ch of chapters) {
  if (!has(ch.part, T)) continue;
  const ys = YEARS.filter(y => y < T && has(ch.part, y));
  rows.push({ T, z: logit(cl(methods["P:poisson-ew h6"](ch.code, ch.part, ys, OFFICIAL(ch.part, T)))), hit: x(ch.code, T) > 0 ? 1 : 0 });
}
function platt(rs) { let a = 1, b = 0; for (let it = 0; it < 3000; it++) { let ga = 0, gb = 0; for (const r of rs) { const e = sig(a * r.z + b) - r.hit; ga += e * r.z; gb += e; } a -= 0.5 * ga / rs.length; b -= 0.5 * gb / rs.length; } return [a, b]; }
let cb = 0, cll = 0, cn = 0; const cbins = Array.from({ length: 10 }, () => ({ n: 0, p: 0, hit: 0 }));
for (let T = 2016; T <= 2026; T++) {
  const [a, b] = platt(rows.filter(r => r.T < T));
  for (const r of rows.filter(r => r.T === T)) {
    const p = cl(sig(a * r.z + b)); cn++; cb += (p - r.hit) ** 2; cll -= r.hit ? Math.log(p) : Math.log(1 - p);
    const k = cbins[Math.min(9, Math.floor(p * 10))]; k.n++; k.p += p; k.hit += r.hit;
  }
}
const calibrated = { method: "P:poisson-ew h6 + nested Platt", n: cn, brier: +(cb / cn).toFixed(4), logloss: +(cll / cn).toFixed(4),
  calibration: cbins.map((k, i) => ({ bin: `${i / 10}-${(i + 1) / 10}`, n: k.n, meanPred: k.n ? +(k.p / k.n).toFixed(3) : null, observed: k.n ? +(k.hit / k.n).toFixed(3) : null })) };
// how often did the real count land inside the Poisson 10th-90th percentile range of the chosen count method?
const pois = (lam, k) => { let s2 = 0, t = Math.exp(-lam); for (let i = 0; i <= k; i++) { s2 += t; t *= lam / (i + 1); } return s2; };
const rangeOf = lam => { let lo = 0; while (pois(lam, lo) < 0.1) lo++; let hi = lo; while (pois(lam, hi) < 0.9) hi++; return [lo, hi]; };
let inR = 0, rn = 0;
for (let T = 2016; T <= 2026; T++) for (const ch of chapters) {
  if (!has(ch.part, T)) continue; const ys = YEARS.filter(y => y < T && has(ch.part, y));
  if (!ys.some(y => x(ch.code, y) > 0)) continue;
  const [lo, hi] = rangeOf(methods["E:ew h6"](ch.code, ch.part, ys, OFFICIAL(ch.part, T))); const a = x(ch.code, T); rn++; if (a >= lo && a <= hi) inR++;
}
calibrated.rangeCoverage = +(inR / rn).toFixed(3); calibrated.rangeCoverageN = rn;
console.log("likely-range coverage", calibrated.rangeCoverage, "of", rn);
console.log("calibrated (nested Platt) Brier", calibrated.brier, "logloss", calibrated.logloss);
fs.writeFileSync(D("backtest.json"), JSON.stringify({ targets: "2016-2026", scores: out, calibration: calTables, calibrated }, null, 1));
const base = (() => { let n = 0, h = 0; for (const m of calib["P:freq-all"]) { n++; h += m[1]; } return h / n; })();
console.log("pooled hit rate", base.toFixed(3), "=> constant-rate Brier", (base * (1 - base)).toFixed(4));
for (const [m, o] of Object.entries(out).sort((a, b) => (a[1].brier ?? 9) - (b[1].brier ?? 9) || (a[1].mae ?? 9) - (b[1].mae ?? 9)))
  console.log(m.padEnd(22), o.brier !== undefined ? `Brier ${o.brier}  logloss ${o.logloss}` : `MAE ${o.mae}`, JSON.stringify(o.byPart));
