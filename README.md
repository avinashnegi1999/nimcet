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

## 🎥 Study resources (curated YouTube, per Tier 1 & 2 topic)

Most-viewed videos per priority topic, with one-click no-login playlist links inside each.

| Folder | Use | Language |
|--------|-----|----------|
| [`01-learn-hindi/`](01-learn-hindi/README.md) | **Learn from zero** — NCERT/Indian syllabus | Hindi |
| [`02-learn-english/`](02-learn-english/README.md) | **Learn from zero** — freeCodeCamp / Khan / OCT | English |
| [`03-practice-pyq/`](03-practice-pyq/README.md) | **Exam-pattern practice** — NIMCET PYQ solving | Hindi/Eng |

Flow: **learn** a topic (folder 01 or 02) → **practice** its PYQ pattern (folder 03).

### 📕 Must-buy book — Arihant MCA Entrance combo

The single most important purchase for NIMCET prep: **all NIMCET PYQs with full written solutions**, which no video gives you.

> **[Combo — ACE The MCA Entrance Exam 2026 + Solved Papers (+ free One Word Substitution)](https://arihantbooks.com/products/combo-of-ace-the-mca-entrance-exam-2026-mca-entrance-exam-2026-solved-paper-with-free-one-word-substitution-english-medium)**
> Arihant · English medium · ~₹1263 (MRP ₹1685) · Study guide with 3500+ practice Qs + year-wise solved papers.

Videos build the concept; this book is where you **grind PYQs and check written solutions**. Buy early.

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
├── resources/              # syllabus + formula books + reference PYQs
├── 01-learn-hindi/         # YouTube guide — learn from zero (Hindi, NCERT)
├── 02-learn-english/       # YouTube guide — learn from zero (English)
└── 03-practice-pyq/        # YouTube guide — NIMCET PYQ practice
```

## Method

Each question from all 19 papers was extracted and LLM-classified into one fixed topic taxonomy, then aggregated by topic × year. Counts, averages, and "years seen" come straight from `data/pyq-analysis-result.json`.

Source papers: aspirestudy.in year-wise PYQ archive. Analysis generated 2026-07-15.

---

## Contributing

Found a better video, a broken link, or a resource worth adding? **PRs welcome.**

- Add/fix video links inside `01-learn-hindi/`, `02-learn-english/`, or `03-practice-pyq/` READMEs.
- Keep the format: `[title](link) · channel · views · length`.
- Corrections to the PYQ classification (`data/`) are especially valued.

Not on GitHub? Open an [issue](https://github.com/avinashnegi1999/nimcet/issues) with the link.

## License

[MIT](LICENSE) — free to use, fork, and share. Built for every NIMCET aspirant.

⭐ **Star the repo** if it helps — it helps others find it too.

---

*Free, open prep resource for NIMCET / NIT MCA aspirants. Good luck — go get that seat.*
