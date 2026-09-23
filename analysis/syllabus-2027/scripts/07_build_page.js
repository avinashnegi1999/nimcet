// Step 7: build syllabus-2027-heatmap.html (repo root) in the same visual style as index.html:
// one ranked list of 2027-syllabus chapters, most likely first, each with a cool->hot heat bar.
// All numbers come from data/syllabus-2027/*.json + labels.jsonl. Self-contained, works offline.
const fs = require("fs"), path = require("path");
const ROOT = path.resolve(__dirname, "../../..");
const D = p => path.join(ROOT, "data/syllabus-2027", p);
const F = JSON.parse(fs.readFileSync(D("forecast-2027.json"), "utf8"));
const R = JSON.parse(fs.readFileSync(D("repeats.json"), "utf8"));
const B = JSON.parse(fs.readFileSync(D("backtest.json"), "utf8"));
const L = fs.readFileSync(D("labels.jsonl"), "utf8").trim().split("\n").map(JSON.parse);
const Q = Object.fromEntries(fs.readFileSync(path.join(ROOT, "data/questions-classified.jsonl"), "utf8").trim().split("\n").map(JSON.parse).map(q => [q.year + "#" + q.n, q]));
const YEARS = []; for (let y = 2008; y <= 2026; y++) YEARS.push(y);

// most recent 3 questions per chapter, for the expandable row
const recent = {};
for (const r of [...L].sort((a, b) => b.year - a.year || b.n - a.n)) {
  const a = recent[r.code] = recent[r.code] || [];
  if (a.length < 3) { const t = Q[r.id].text.replace(/\s+/g, " ").trim(); a.push([r.year, r.n, t.length > 170 ? t.slice(0, 167) + "…" : t]); }
}
const OLDNAME = { "Arithmetic (speed-time-work, ratio, %, mixture)": "arithmetic word problems (ratio, %, time-work, ages…)", "Clocks & Calendars": "clocks & calendars", "Logical Deduction & Puzzles": "logic puzzles", "Cubes Dice & Visual": "cubes, dice & figures" };
const comp = {};
for (const r of L) { const m = comp[r.code] = comp[r.code] || {}; const k = OLDNAME[r.oldTopic] || r.oldTopic; m[k] = (m[k] || 0) + 1; }
const chapters = F.chapters.map(c => ({
  code: c.code, name: c.chapter, s: c.part, unit: c.unit,
  p: c.pAtLeast1, e: c.expected2027, lo: c.likelyRange[0], hi: c.likelyRange[1],
  pr: c.recency.pAtLeast1, asked: c.yearsAsked, avail: c.yearsAvailable, last: c.lastAsked, tot: c.total,
  by: YEARS.map(y => c.hist[y]), q: recent[c.code] || [],
  mix: Object.entries(comp[c.code] || {}).sort((a, b) => b[1] - a[1]),
})).sort((a, b) => (b.asked > 0) - (a.asked > 0) || b.p - a.p || b.e - a.e);

const SHORT = { "X-VEC": "Vectors & 3D", "X-MATH": "number theory, mensuration & pure geometry", "X-ANLR": "analogy & odd-one-out", "X-ANLE": "verbal analogy", "X-PARA": "sentence arrangement" };
const off = F.offSyllabus.filter(o => o.total >= 5).sort((a, b) => b.total - a.total).map(o => ({ name: SHORT[o.code] || o.chapter, s: o.part, tot: o.total }));
const DATA = {
  sizes: F.partSizes2027, chapters, off,
  total: L.length, recycled2026: R.perYear[2026].pct, recycled2023: R.perYear[2023].pct,
  brier: B.calibrated.brier, flat: 0.2497, mae: B.scores["E:ew h6"].mae, coverage: B.calibrated.rangeCoverage,
};
const json = JSON.stringify(DATA).replace(/</g, "\\u003c");

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>NIMCET 2027 — Chapter Heat Map</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="Every 2027-syllabus chapter ranked by its chance of appearing in NIMCET 2027, from 19 past papers (2008–2026).">
<style>
  :root {
    --bg: #0e1014; --panel: #161a21; --panel-2: #1c222b; --line: #262d38;
    --ink: #e8ecf2; --ink-soft: #a3adbb; --ink-faint: #6b7686;
    --accent: #ffae3b; --accent-ink: #1a1206;
    --math: #ff8a3d; --reasoning: #4fd1c5; --english: #a78bfa; --computer: #f6c453;
    --t1: #ff4d4d; --t2: #ffae3b; --t3: #6b8cc4; --t4: #5a6472;
    --shadow: 0 1px 0 rgba(255,255,255,.03), 0 12px 32px -12px rgba(0,0,0,.6);
    --font-display: "Helvetica Neue", "Arial Narrow", system-ui, sans-serif;
    --font-body: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
    --font-mono: ui-monospace, "SF Mono", "JetBrains Mono", Menlo, monospace;
  }
  @media (prefers-color-scheme: light) {
    :root:not([data-theme="dark"]) {
      --bg: #f4f1ea; --panel: #fffdf9; --panel-2: #f0ece2; --line: #e0d9cb;
      --ink: #1d2733; --ink-soft: #4c5666; --ink-faint: #7d8694;
      --accent: #d8791a; --accent-ink: #fff;
      --math: #e06a1e; --reasoning: #0d9488; --english: #7c5cf0; --computer: #b08010;
      --t1: #dc2626; --t2: #d8791a; --t3: #3f6bb0; --t4: #9aa1ac;
      --shadow: 0 1px 0 rgba(255,255,255,.6), 0 14px 30px -16px rgba(60,50,30,.35);
    }
  }
  :root[data-theme="dark"] {
    --bg: #0e1014; --panel: #161a21; --panel-2: #1c222b; --line: #262d38;
    --ink: #e8ecf2; --ink-soft: #a3adbb; --ink-faint: #6b7686;
    --accent: #ffae3b; --accent-ink: #1a1206;
    --math: #ff8a3d; --reasoning: #4fd1c5; --english: #a78bfa; --computer: #f6c453;
    --t1: #ff4d4d; --t2: #ffae3b; --t3: #6b8cc4; --t4: #5a6472;
    --shadow: 0 1px 0 rgba(255,255,255,.03), 0 12px 32px -12px rgba(0,0,0,.6);
  }
  :root[data-theme="light"] {
    --bg: #f4f1ea; --panel: #fffdf9; --panel-2: #f0ece2; --line: #e0d9cb;
    --ink: #1d2733; --ink-soft: #4c5666; --ink-faint: #7d8694;
    --accent: #d8791a; --accent-ink: #fff;
    --math: #e06a1e; --reasoning: #0d9488; --english: #7c5cf0; --computer: #b08010;
    --t1: #dc2626; --t2: #d8791a; --t3: #3f6bb0; --t4: #9aa1ac;
    --shadow: 0 1px 0 rgba(255,255,255,.6), 0 14px 30px -16px rgba(60,50,30,.35);
  }
  * { box-sizing: border-box; }
  body { margin: 0; background: var(--bg); color: var(--ink); font-family: var(--font-body); line-height: 1.5; -webkit-font-smoothing: antialiased; }
  .wrap { max-width: 1080px; margin: 0 auto; padding: 32px 22px 80px; }

  header { display: flex; justify-content: space-between; align-items: flex-start; gap: 20px; flex-wrap: wrap; }
  .eyebrow { font-family: var(--font-mono); font-size: 12px; letter-spacing: .18em; text-transform: uppercase; color: var(--accent); margin: 0 0 10px; }
  h1 { font-family: var(--font-display); font-weight: 800; letter-spacing: -.02em; font-size: clamp(38px, 7vw, 68px); line-height: .95; margin: 0; text-wrap: balance; }
  h1 .hot { color: var(--math); }
  .lede { color: var(--ink-soft); max-width: 52ch; margin: 16px 0 0; font-size: 16px; }
  .toggle { font-family: var(--font-mono); font-size: 12px; letter-spacing: .05em; background: var(--panel); color: var(--ink-soft); border: 1px solid var(--line); border-radius: 999px; padding: 8px 14px; cursor: pointer; white-space: nowrap; }
  .toggle:hover { color: var(--ink); border-color: var(--ink-faint); }
  .toggle:focus-visible, .filters button:focus-visible, .row:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }

  .kpis { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin: 36px 0 14px; }
  .kpi { background: var(--panel); border: 1px solid var(--line); border-radius: 14px; padding: 16px 16px 14px; box-shadow: var(--shadow); }
  .kpi .n { font-family: var(--font-mono); font-size: clamp(24px, 4vw, 34px); font-weight: 700; letter-spacing: -.02em; }
  .kpi .l { font-size: 12px; color: var(--ink-faint); text-transform: uppercase; letter-spacing: .08em; margin-top: 4px; }
  .kpi.accent { border-color: color-mix(in srgb, var(--math) 45%, var(--line)); }
  .kpi.accent .n { color: var(--math); }

  .block { margin-top: 34px; }
  .block h2 { font-family: var(--font-display); font-weight: 800; font-size: 15px; letter-spacing: .02em; text-transform: uppercase; color: var(--ink-soft); margin: 0 0 14px; }
  .split { display: flex; height: 40px; border-radius: 10px; overflow: hidden; border: 1px solid var(--line); }
  .split > span { display: flex; align-items: center; justify-content: center; font-family: var(--font-mono); font-size: 12px; font-weight: 700; color: #0e1014; overflow: hidden; white-space: nowrap; }
  .legend { display: flex; gap: 18px; flex-wrap: wrap; margin-top: 12px; font-size: 13px; color: var(--ink-soft); align-items: center; }
  .legend b { color: var(--ink); }
  .dot { display: inline-block; width: 10px; height: 10px; border-radius: 3px; margin-right: 7px; }

  .focus { margin-top: 34px; background: linear-gradient(135deg, color-mix(in srgb, var(--math) 16%, var(--panel)), var(--panel)); border: 1px solid color-mix(in srgb, var(--math) 35%, var(--line)); border-radius: 16px; padding: 22px 24px; display: flex; gap: 22px; align-items: center; flex-wrap: wrap; box-shadow: var(--shadow); }
  .focus .big { font-family: var(--font-display); font-weight: 800; font-size: clamp(30px,5vw,44px); color: var(--math); line-height: 1; }
  .focus p { margin: 0; color: var(--ink-soft); font-size: 15px; max-width: 60ch; }
  .focus p b { color: var(--ink); }

  .filters { display: flex; gap: 8px; flex-wrap: wrap; margin: 6px 0 12px; }
  .filters button { font-family: var(--font-mono); font-size: 12px; letter-spacing: .04em; text-transform: uppercase; background: var(--panel); color: var(--ink-soft); border: 1px solid var(--line); border-radius: 999px; padding: 7px 14px; cursor: pointer; }
  .filters button:hover { color: var(--ink); }
  .filters button[aria-pressed="true"] { background: var(--ink); color: var(--bg); border-color: var(--ink); }
  .scale { display: flex; flex-wrap: wrap; align-items: center; gap: 6px 10px; font-family: var(--font-mono); font-size: 11px; color: var(--ink-faint); margin: 0 0 14px; }
  .scale .grad { width: 160px; height: 8px; border-radius: 999px; }

  .rows { display: flex; flex-direction: column; gap: 2px; }
  .row { display: grid; grid-template-columns: 30px minmax(0,1fr) 74px 96px; gap: 14px; align-items: center; padding: 11px 12px; border-radius: 10px; cursor: pointer; }
  .row:hover, .row[aria-expanded="true"] { background: var(--panel); }
  .row.hidden, .more.hidden { display: none; }
  .rank { font-family: var(--font-mono); font-size: 13px; color: var(--ink-faint); text-align: right; }
  .topic { min-width: 0; }
  .topic .name { font-size: 14.5px; font-weight: 600; display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
  .chip { font-family: var(--font-mono); font-size: 10px; letter-spacing: .04em; padding: 2px 7px; border-radius: 5px; text-transform: uppercase; font-weight: 700; }
  .tierchip { color: #0e1014; }
  .flag { font-family: var(--font-mono); font-size: 10px; color: var(--ink-faint); font-weight: 600; }
  .bar-track { margin-top: 7px; height: 8px; background: var(--panel-2); border-radius: 999px; overflow: hidden; }
  .bar-fill { height: 100%; border-radius: 999px; width: 0; transition: width 1s cubic-bezier(.2,.8,.2,1); }
  .spark { width: 74px; height: 30px; display: block; }
  .avg { text-align: right; font-family: var(--font-mono); }
  .avg .v { font-size: 18px; font-weight: 700; }
  .avg .u { font-size: 10px; color: var(--ink-faint); display: block; letter-spacing: .03em; }

  .more { margin: 0 0 10px 44px; padding: 12px 14px 14px; background: var(--panel); border: 1px solid var(--line); border-radius: 12px; font-size: 13px; color: var(--ink-soft); }
  .more .facts { display: flex; flex-wrap: wrap; gap: 6px 18px; margin-bottom: 10px; }
  .more .facts b { color: var(--ink); font-family: var(--font-mono); }
  .years { display: grid; grid-template-columns: repeat(19, minmax(0,1fr)); gap: 3px; margin-bottom: 10px; }
  .years div { text-align: center; font-family: var(--font-mono); font-size: 10px; }
  .years .c { height: 22px; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 700; color: #0e1014; background: var(--panel-2); }
  .years .c.z { color: var(--ink-faint); font-weight: 400; }
  .years .c.na { background: repeating-linear-gradient(135deg, var(--panel-2) 0 3px, transparent 3px 6px); }
  .years .y { color: var(--ink-faint); margin-top: 2px; }
  .more ol { margin: 0; padding-left: 0; list-style: none; }
  .more li { padding: 6px 0; border-top: 1px solid var(--line); }
  .more li b { color: var(--ink); font-family: var(--font-mono); font-size: 12px; margin-right: 6px; }

  .tiers { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-top: 16px; }
  .tier { background: var(--panel); border: 1px solid var(--line); border-radius: 14px; padding: 16px; box-shadow: var(--shadow); }
  .tier .head { display: flex; align-items: center; gap: 8px; margin-bottom: 4px; }
  .tier .band { width: 26px; height: 6px; border-radius: 3px; }
  .tier h3 { font-family: var(--font-display); font-size: 14px; font-weight: 800; margin: 0; text-transform: uppercase; letter-spacing: .03em; }
  .tier .sub { font-size: 11.5px; color: var(--ink-faint); margin: 0 0 12px; }
  .tier ul { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 7px; }
  .tier li { font-size: 13px; color: var(--ink-soft); display: flex; justify-content: space-between; gap: 8px; }
  .tier li b { color: var(--ink); font-family: var(--font-mono); font-weight: 600; }

  .notes { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
  .note { background: var(--panel); border: 1px solid var(--line); border-radius: 14px; padding: 16px 18px; font-size: 13.5px; color: var(--ink-soft); box-shadow: var(--shadow); }
  .note h3 { font-family: var(--font-display); font-size: 14px; font-weight: 800; text-transform: uppercase; letter-spacing: .03em; color: var(--ink); margin: 0 0 8px; }
  .note ul { margin: 0; padding-left: 18px; }
  .note li { margin: 4px 0; }
  .note b { color: var(--ink); }

  footer { margin-top: 46px; padding-top: 20px; border-top: 1px solid var(--line); color: var(--ink-faint); font-size: 12.5px; }
  footer a { color: var(--accent); }

  @media (max-width: 720px) {
    .kpis { grid-template-columns: repeat(2,1fr); }
    .tiers, .notes { grid-template-columns: 1fr; }
    .row { grid-template-columns: 22px minmax(0,1fr) 92px; gap: 10px; padding: 11px 6px; }
    .spark { display: none; }
    .more { margin-left: 0; }
    .years { grid-template-columns: repeat(10, minmax(0,1fr)); }
  }
  @media (prefers-reduced-motion: reduce) { * { transition: none !important; } }
</style>
</head>
<body>
<div class="wrap">
  <header>
    <div>
      <p class="eyebrow">NIMCET 2027 · 2027 syllabus · from 19 papers (2008–2026)</p>
      <h1>The 2027 <span class="hot">Heat</span> Map</h1>
      <p class="lede">Every chapter of the 2027 syllabus, ranked by its chance of appearing in NIMCET 2027 — most likely at the top. Bars run cool&nbsp;→&nbsp;hot with that chance. Tap a chapter to see its history and latest questions.</p>
    </div>
    <button class="toggle" id="themeBtn" type="button" aria-label="Toggle theme">◐ theme</button>
  </header>

  <div class="kpis" id="kpis"></div>

  <div class="block">
    <h2>What the 2027 paper is made of</h2>
    <div class="split" id="split"></div>
    <div class="legend" id="splitLegend"></div>
  </div>

  <div class="focus" id="focus"></div>

  <div class="block">
    <h2>Chapter ranking — chance of at least one question in 2027</h2>
    <div class="filters" id="filters"></div>
    <div class="scale"><span>0%</span><span class="grad" id="grad"></span><span>100% chance</span><span style="flex-basis:100%">Right column: chance of ≥1 question, then expected number of questions and likely range.</span></div>
    <div class="rows" id="rows"></div>
  </div>

  <div class="block">
    <h2>Priority tiers</h2>
    <div class="tiers" id="tiers"></div>
  </div>

  <div class="block">
    <h2>Read this before you plan</h2>
    <div class="notes" id="notes"></div>
  </div>

  <footer id="foot"></footer>
</div>

<script>
const DATA = ${json};
(function () {
"use strict";
const YEARS = []; for (let y = 2008; y <= 2026; y++) YEARS.push(y);
const SEC_COLOR = { Math: "var(--math)", Reasoning: "var(--reasoning)", English: "var(--english)", Computer: "var(--computer)" };
const SEC_NAME = { Math: "Maths", Reasoning: "Reasoning", Computer: "Computer", English: "English" };
const TIER = [
  null,
  { c: "var(--t1)", name: "Almost certain", sub: "90%+ chance — study first", test: c => c.asked && Math.round(100 * c.p) >= 90 },
  { c: "var(--t2)", name: "Likely", sub: "75–90% chance", test: c => c.asked && Math.round(100 * c.p) >= 75 && Math.round(100 * c.p) < 90 },
  { c: "var(--t3)", name: "Toss-up", sub: "50–75% chance", test: c => c.asked && Math.round(100 * c.p) >= 50 && Math.round(100 * c.p) < 75 },
  { c: "var(--t4)", name: "Less likely", sub: "under 50% — skim last", test: c => !c.asked || Math.round(100 * c.p) < 50 },
];
const tierOf = c => [1, 2, 3, 4].find(t => TIER[t].test(c));
const el = (tag, attrs, ...kids) => { const e = document.createElement(tag); if (attrs) for (const k in attrs) { if (k === "class") e.className = attrs[k]; else if (k === "text") e.textContent = attrs[k]; else if (k === "style") e.style.cssText = attrs[k]; else e.setAttribute(k, attrs[k]); } for (const k of kids) if (k != null) e.append(k); return e; };
const pct = p => Math.round(100 * p) + "%";
// heat: cool blue (low chance) -> hot red (high chance); same formula as index.html, driven by the chance
function heat(p) { const t = Math.max(0, Math.min(1, p)); return "hsl(" + (205 - t * 191) + " " + (58 + t * 32) + "% " + (52 + (1 - t) * 6) + "%)"; }
const C = DATA.chapters;

// ---- KPIs ----
const sure = C.filter(c => tierOf(c) === 1);
[["" + DATA.total.toLocaleString(), "Questions analysed", true], [String(C.length), "Chapters in 2027 syllabus"],
 [String(sure.length), "Chapters 90%+ likely"], [DATA.recycled2026 + "%", "Of 2026 paper re-used"]]
  .forEach(([n, l, a]) => document.getElementById("kpis").append(el("div", { class: "kpi" + (a ? " accent" : "") }, el("div", { class: "n", text: n }), el("div", { class: "l", text: l }))));

// ---- split ----
const split = document.getElementById("split"), sl = document.getElementById("splitLegend");
const totalQ = Object.values(DATA.sizes).reduce((a, b) => a + b, 0);
for (const s of ["Math", "Reasoning", "Computer", "English"]) {
  const v = DATA.sizes[s];
  split.append(el("span", { style: "background:" + SEC_COLOR[s] + ";flex-grow:" + v, text: v / totalQ > 0.08 ? SEC_NAME[s] + " " + v : String(v) }));
  sl.append(el("span", null, el("span", { class: "dot", style: "background:" + SEC_COLOR[s] }), SEC_NAME[s] + " ", el("b", { text: v + " Q" })));
}

// ---- focus ----
const sureQ = sure.reduce((a, c) => a + c.e, 0);
const f = document.getElementById("focus");
f.append(el("div", { class: "big" }, "≈" + Math.round(sureQ), el("span", { style: "font-size:.45em;color:var(--ink-faint)", text: " of 120 Q" })));
const fp = el("p");
fp.append(el("b", { text: sure.length + " chapters are 90%+ likely and should carry about " + Math.round(sureQ) + " of the 120 questions. " }),
  "They are " + sure.slice(0, 6).map(c => c.name).join(", ") + (sure.length > 6 ? " and " + (sure.length - 6) + " more" : "") + ". Start there.");
f.append(fp);

// ---- scale ----
document.getElementById("grad").style.background = "linear-gradient(90deg," + [0, .25, .5, .75, 1].map(heat).join(",") + ")";

// ---- sparkline (gaps where a paper has no data) ----
const NS = "http://www.w3.org/2000/svg";
function spark(by, color) {
  const w = 74, h = 30, pad = 3, n = by.length, mx = Math.max(1, ...by.filter(v => v != null));
  const x = i => pad + i * (w - 2 * pad) / (n - 1), y = v => h - pad - v / mx * (h - 2 * pad);
  const svg = document.createElementNS(NS, "svg"); svg.setAttribute("class", "spark"); svg.setAttribute("viewBox", "0 0 " + w + " " + h); svg.setAttribute("aria-hidden", "true");
  let seg = [];
  const flush = () => { if (seg.length > 1) { const pl = document.createElementNS(NS, "polyline"); pl.setAttribute("points", seg.join(" ")); pl.setAttribute("fill", "none"); pl.setAttribute("stroke", color); pl.setAttribute("stroke-width", "1.5"); pl.setAttribute("stroke-linejoin", "round"); pl.setAttribute("opacity", ".85"); svg.append(pl); } seg = []; };
  by.forEach((v, i) => { if (v == null) flush(); else seg.push(x(i).toFixed(1) + "," + y(v).toFixed(1)); }); flush();
  const last = by[n - 1]; if (last != null) { const c = document.createElementNS(NS, "circle"); c.setAttribute("cx", x(n - 1).toFixed(1)); c.setAttribute("cy", y(last).toFixed(1)); c.setAttribute("r", "2.4"); c.setAttribute("fill", color); svg.append(c); }
  return svg;
}
// count -> heat for the year strip (6+ questions = hottest)
const countHeat = v => heat(Math.min(v / 6, 1));

// ---- rows ----
const rows = document.getElementById("rows");
const rowEls = [];
C.forEach(c => {
  const t = tierOf(c), col = c.asked ? heat(c.p) : "var(--t4)";
  const name = el("div", { class: "name" }, c.name + " ",
    el("span", { class: "chip", style: "background:color-mix(in srgb, " + SEC_COLOR[c.s] + " 22%, transparent);color:" + SEC_COLOR[c.s], text: SEC_NAME[c.s] }),
    el("span", { class: "chip tierchip", style: "background:" + TIER[t].c, text: "T" + t }));
  if (c.asked && Math.abs(c.pr - c.p) >= 0.10) name.append(el("span", { class: "flag", title: "A model that weights recent papers heavily gives " + pct(c.pr), text: (c.pr > c.p ? "↑ " : "↓ ") + "recent " + pct(c.pr) }));
  if (!c.asked) name.append(el("span", { class: "flag", text: "never asked yet" }));
  const fill = el("div", { class: "bar-fill", style: "background:" + col });
  fill.dataset.w = c.asked ? (100 * c.p).toFixed(1) : "0";
  const topic = el("div", { class: "topic" }, name, el("div", { class: "bar-track" }, fill));
  const avg = el("div", { class: "avg" }, el("span", { class: "v", text: c.asked ? pct(c.p) : "—" }),
    el("span", { class: "u", text: c.asked ? "≈" + c.e.toFixed(1) + " Q · " + (c.lo === c.hi ? c.lo : c.lo + "–" + c.hi) : "no record" }));
  const rank = el("div", { class: "rank" });
  const row = el("div", { class: "row", role: "button", tabindex: "0", "aria-expanded": "false" }, rank, topic, spark(c.by, col), avg);
  row.dataset.section = c.s;

  // expandable detail
  const more = el("div", { class: "more hidden" });
  const facts = el("div", { class: "facts" });
  const fact = (b, t) => facts.append(el("span", null, el("b", { text: b }), " " + t));
  fact(c.asked + "/" + c.avail, "papers asked it");
  fact(String(c.tot), "questions in total");
  fact(c.last ? String(c.last) : "never", "last asked");
  if (c.asked) fact(pct(c.pr), "chance by recent-papers model");
  fact(c.unit, "unit");
  more.append(facts);
  if (c.mix.length > 1) more.append(el("div", { style: "margin:-4px 0 10px" }, el("b", { text: "Includes: ", style: "color:var(--ink)" }), c.mix.map(([k, n]) => k + " (" + n + ")").join(", ")));
  const yrs = el("div", { class: "years", "aria-label": "Questions per paper" });
  c.by.forEach((v, i) => {
    const cell = el("div", null);
    const box = el("div", { class: "c" + (v == null ? " na" : v === 0 ? " z" : ""), title: YEARS[i] + ": " + (v == null ? "no data" : v + " question" + (v === 1 ? "" : "s")), text: v == null ? "" : v === 0 ? "·" : String(v) });
    if (v) box.style.background = countHeat(v);
    cell.append(box, el("div", { class: "y", text: "'" + String(YEARS[i]).slice(2) }));
    yrs.append(cell);
  });
  more.append(yrs);
  if (c.q.length) {
    more.append(el("div", { style: "margin:2px 0 4px;color:var(--ink);font-weight:600", text: "Latest questions from this chapter" }));
    const ol = el("ol");
    for (const [y, n, txt] of c.q) ol.append(el("li", null, el("b", { text: y + " Q" + n }), txt));
    more.append(ol);
  }
  const toggle = () => { const open = row.getAttribute("aria-expanded") === "true"; row.setAttribute("aria-expanded", String(!open)); more.classList.toggle("hidden", open); };
  row.addEventListener("click", toggle);
  row.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); } });
  rows.append(row, more);
  rowEls.push({ row, more, rank, s: c.s });
});
function renumber(sec) { let i = 0; for (const r of rowEls) { const show = sec === "All" || r.s === sec; r.row.classList.toggle("hidden", !show); if (!show) { r.more.classList.add("hidden"); r.row.setAttribute("aria-expanded", "false"); } else r.rank.textContent = String(++i); } }
renumber("All");
requestAnimationFrame(() => setTimeout(() => rows.querySelectorAll(".bar-fill").forEach((b, i) => setTimeout(() => { b.style.width = b.dataset.w + "%"; }, i * 12)), 60));

// ---- filters ----
const fb = document.getElementById("filters");
["All", "Math", "Reasoning", "Computer", "English"].forEach((s, i) => {
  const b = el("button", { type: "button", "aria-pressed": String(i === 0), text: s === "All" ? "All" : SEC_NAME[s] });
  b.addEventListener("click", () => { fb.querySelectorAll("button").forEach(x => x.setAttribute("aria-pressed", "false")); b.setAttribute("aria-pressed", "true"); renumber(s); });
  fb.append(b);
});

// ---- tiers ----
const tb = document.getElementById("tiers");
[1, 2, 3, 4].forEach(t => {
  const items = C.filter(c => tierOf(c) === t);
  const ul = el("ul");
  for (const c of items) ul.append(el("li", null, el("span", { text: c.name.replace(/ \\(.*$/, "") }), el("b", { text: c.asked ? pct(c.p) : "—" })));
  tb.append(el("div", { class: "tier" }, el("div", { class: "head" }, el("span", { class: "band", style: "background:" + TIER[t].c }), el("h3", { text: "Tier " + t + " · " + items.length })),
    el("p", { class: "sub", text: TIER[t].name + " — " + TIER[t].sub }), ul));
});

// ---- notes ----
const nb = document.getElementById("notes");
const note = (title, items) => { const ul = el("ul"); for (const it of items) { const li = el("li"); for (const part of it) li.append(typeof part === "string" ? document.createTextNode(part) : part); ul.append(li); } nb.append(el("div", { class: "note" }, el("h3", { text: title }), ul)); };
const B = t => el("b", { text: t });
note("How sure is this?", [
  ["The chance is ", B("how often chapters like this appeared"), ", worked out from all 19 papers with recent papers counting more — not a promise."],
  ["Tested by predicting each paper 2016–2026 from earlier papers only: ", B(Math.round(100 * (1 - DATA.brier / DATA.flat)) + "% better"), " than giving every chapter the same chance."],
  ["The expected count was off by about ", B(DATA.mae.toFixed(1) + " questions per chapter"), " on average. The likely range beside it held the real count ", B(Math.round(100 * DATA.coverage) + "% of the time"), " — plan with the range, not the exact number."],
  [B("↑ / ↓ recent"), " marks chapters where a model that trusts only the latest papers disagrees by 10+ points. 2026 was clearly set from this syllabus — two questions quote it word for word (“Web Browsing”, “Sending, receiving, and managing emails”) — so give ↑ chapters a little extra time."],
]);
note("Patterns worth knowing", [
  [B("Re-use of old questions has dropped sharply: "), DATA.recycled2023 + "% of the 2023 paper was re-used, only " + DATA.recycled2026 + "% of 2026. Expect new questions on the same chapters, not copies."],
  [B("Chapters are noisy, units less so: "), "a typical chapter swings by 1–3 questions from paper to paper (Numerical Reasoning by up to ~5), so covering a whole unit is safer than betting on one chapter. (There is no solid evidence of a fixed quota per unit — only Trigonometry and Verbal Reasoning hint at it.)"],
  [B("Dropped from the syllabus: "), DATA.off.slice(0, 3).map(o => o.name.replace(/ \\(.*$/, "") + " (" + o.tot + " past Q)").join(", ") + " — not ranked here. Vectors & 3D already had 0 questions in 2026."],
  ["Chapters differ a lot in size: “Numerical Reasoning” covers all arithmetic word problems, “Measurement of Angles” is tiny. Tap a row to see what it ", B("includes"), "."],
  ["The syllabus file says “Compiled by NIMCET Aspirant” — ", B("check it against the official 2027 notification"), "."],
]);

document.getElementById("foot").append("Built from 19 papers (papers/nimcet-2008 … 2026.pdf), " + DATA.total + " questions, each read and placed in a 2027-syllabus chapter. Data: data/syllabus-2027/ · method & reproducible scripts: analysis/syllabus-2027/. Older topic-wise heat map: ", el("a", { href: "index.html", text: "index.html" }), " · whole-paper forecast: ", el("a", { href: "forecast.html", text: "forecast.html" }), ".");

// ---- theme ----
document.getElementById("themeBtn").addEventListener("click", () => {
  const root = document.documentElement;
  const cur = root.getAttribute("data-theme") || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  root.setAttribute("data-theme", cur === "dark" ? "light" : "dark");
});
})();
</script>
</body>
</html>
`;
fs.writeFileSync(path.join(ROOT, "syllabus-2027-heatmap.html"), html);
console.log("wrote syllabus-2027-heatmap.html", (html.length / 1024).toFixed(0) + " KB");
