// Step 2: final syllabus-2027 label for every PYQ = prelabel, replaced by the
// manual override where one exists (data/syllabus-2027/overrides.tsv, written
// after reading each question). Also attaches the syllabus Part/unit/chapter.
// Output: data/syllabus-2027/labels.jsonl
const fs = require("fs"), path = require("path");
const ROOT = path.resolve(__dirname, "../../..");
const D = p => path.join(ROOT, "data/syllabus-2027", p);

const tax = JSON.parse(fs.readFileSync(D("taxonomy.json"), "utf8"));
const info = {};
for (const p of tax.parts) for (const u of p.units) for (const [code, name] of u.chapters)
  info[code] = { part: p.section, unit: u.unit, chapter: name, inSyllabus: true };
for (const [code, sec, name] of tax.offSyllabus)
  info[code] = { part: sec, unit: "Not in 2027 syllabus", chapter: name, inSyllabus: false };
info["X-DUP"] = { part: null, unit: "Excluded", chapter: "Duplicate of another question in the same paper (source error)", inSyllabus: false };

const Q = fs.readFileSync(path.join(ROOT, "data/questions-classified.jsonl"), "utf8").trim().split("\n").map(JSON.parse);
const P = fs.readFileSync(D("prelabel.jsonl"), "utf8").trim().split("\n").map(JSON.parse);
const ov = {};
for (const line of fs.readFileSync(D("overrides.tsv"), "utf8").split("\n")) {
  if (!line.trim() || line.startsWith("#")) continue;
  const [id, code, note] = line.split("\t");
  if (ov[id]) throw new Error("duplicate override " + id);
  if (!info[code]) throw new Error("unknown code " + code + " for " + id);
  ov[id] = { code, note: note || "" };
}

// Unknown-text questions: part is known from where they sit in the paper.
const UNK_PART = { "2012#76": "Reasoning", "2012#92": "English" }; // 2019 ones sit in the Math block

const out = [], problems = [];
Q.forEach((q, i) => {
  const id = q.year + "#" + q.n;
  const o = ov[id];
  const code = o ? o.code : P[i].code;
  if (code === "?") problems.push(id);
  const m = info[code] || {};
  let part = m.part;
  if (code === "X-UNK") part = UNK_PART[id] || "Math";
  out.push({ id, year: q.year, n: q.n, code, part, unit: m.unit, chapter: m.chapter,
    inSyllabus: !!m.inSyllabus, method: o ? "manual" : "rule+reviewed", note: o ? o.note : "",
    oldTopic: q.topic, subtopic: q.subtopic });
});
if (problems.length) { console.error("UNRESOLVED:", problems.join(" ")); process.exit(1); }
for (const id in ov) if (!out.find(r => r.id === id)) throw new Error("override for unknown id " + id);

fs.writeFileSync(D("labels.jsonl"), out.map(r => JSON.stringify(r)).join("\n") + "\n");
const byPart = {};
for (const r of out) { const k = (r.part || "excluded") + (r.inSyllabus ? "" : " (off/unk/dup)"); byPart[k] = (byPart[k] || 0) + 1; }
console.log("labelled:", out.length, " manual:", Object.keys(ov).length);
console.log(byPart);
