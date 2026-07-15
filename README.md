# NIMCET PYQ Analysis (2008–2026)

Data-driven breakdown of **19 years of NIMCET question papers** — every question classified into a fixed topic taxonomy, so prep effort goes where the marks actually are.

> **2248 questions · 19 papers · 38 topics** — 95.7% classified (4.3% garbled MathJax text).

### 📊 [→ Open the live dashboard](https://avinashnegi1999.github.io/nimcet/)
Interactive heat-map + topic ranking + year trends. Works on any device, anytime.

---

## The exam in one table

| Section | Questions | Share |
|---------|----------:|------:|
| **Mathematics** | 1060 | **47.2%** |
| Logical Reasoning | 577 | 25.7% |
| General English | 297 | 13.2% |
| Computer Awareness | 218 | 9.7% |
| Unclassified (garbled) | 96 | 4.3% |

**Math is nearly half the paper** — the biggest lever on the score.

## Topics that repeat *every single year* (18–19 of 19 papers)

These are guaranteed to reappear. Master these before anything else.

| Topic | Section | Total | Avg/yr |
|-------|---------|------:|-------:|
| Logical Deduction & Puzzles | Reasoning | 194 | 10.2 |
| Calculus | Math | 146 | 7.7 |
| Trigonometry | Math | 129 | 6.8 |
| Number System & Boolean Logic | Computer | 129 | 6.8 |
| Algebra & Progressions | Math | 128 | 6.7 |
| Coordinate & Conic Geometry | Math | 113 | 5.9 |
| Arithmetic | Math | 112 | 5.9 |
| Vectors & 3D Geometry | Math | 99 | 5.2 |
| Vocabulary (syn/antonym) | English | 94 | 4.9 |
| Probability | Math | 89 | 4.7 |

> **Math + Logical Puzzles + Number System = ~24 questions/year** from just 3 focus areas.

## Priority tiers

- 🔴 **Tier 1 — master first:** all high-frequency Math (Calculus, Trig, Algebra, Coordinate Geo, Arithmetic, Vectors/3D, Probability, P&C) — ~40 Q/yr.
- 🟡 **Tier 2 — fast ROI:** Logical Puzzles, Number System, Vocabulary, Seating/Series/Coding/Blood Relations, Fill-blanks/Grammar.
- 🟢 **Tier 3 — cover after:** Sets/Functions, Statistics, Matrices, Syllogism, Comprehension, Idioms, Clocks, Number Theory.
- ⚪ **Tier 4 — skim only (≤0.5/yr):** Complex Numbers, Differential Equations, Programming/DS, Networking, Cubes/Dice, Analogy, DI.

---

## Repo layout

```
nimcet/
├── index.html              # live interactive dashboard (GitHub Pages)
├── analysis/
│   ├── overview.md         # full ranking, priority plan, conclusions
│   ├── math.md             # Mathematics topic breakdown
│   ├── reasoning.md        # Logical Reasoning topic breakdown
│   ├── english.md          # General English topic breakdown
│   └── computer.md         # Computer Awareness topic breakdown
├── data/
│   └── pyq-analysis-result.json   # raw classified counts (per-topic, per-year)
├── papers/                 # the 19 source papers (nimcet-2008 … 2026)
└── resources/              # syllabus + formula books + reference PYQs
```

## Method

Each question from all 19 papers was extracted and LLM-classified into one fixed topic taxonomy, then aggregated by topic × year. Counts, averages, and "years seen" come straight from `data/pyq-analysis-result.json`.

Source papers: aspirestudy.in year-wise PYQ archive. Analysis generated 2026-07-15.

---

*Personal prep repo — goal: NIMCET 2027, NIT MCA seat.*
