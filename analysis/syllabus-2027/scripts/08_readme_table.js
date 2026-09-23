// Prints the markdown results table used in analysis/syllabus-2027/README.md (so no number is typed by hand).
const fs = require("fs"), path = require("path");
const F = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../../../data/syllabus-2027/forecast-2027.json"), "utf8"));
for (const part of ["Math", "Reasoning", "Computer", "English"]) {
  const rows = F.chapters.filter(c => c.part === part).sort((a, b) => b.pAtLeast1 - a.pAtLeast1 || b.expected2027 - a.expected2027);
  console.log(`\n**${part} (${F.partSizes2027[part]} questions)**\n\n| Chapter | 2027 chance | Expected (likely range) | Asked in |\n|---|---:|---:|---:|`);
  for (const c of rows) console.log(`| ${c.chapter} | ${c.yearsAsked ? Math.round(100 * c.pAtLeast1) + "%" : "no record"} | ${c.yearsAsked ? c.expected2027.toFixed(1) + " (" + c.likelyRange.join("–") + ")" : "–"} | ${c.yearsAsked}/${c.yearsAvailable} |`);
}
