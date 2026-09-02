# NIMCET PYQ Analysis + 2027 Forecast (2008–2026)

Data-driven breakdown of **19 years of NIMCET question papers** — every question classified into a fixed topic taxonomy, then back-tested into a statistical forecast of the 2027 paper, so prep effort goes where the marks actually are.

> **2248 questions · 19 papers · 40 topics · 270 recycled questions detected**
>
> **Re-verified 2026-09-02:** every question re-read and re-classified by Claude Fable 5.1 (one model, no subagents), including the 2012 image-only pages read visually. Per-question labels are now in [`data/questions-classified.jsonl`](data/questions-classified.jsonl). All headline findings held; the numbers below are the re-verified ones.

### 📊 [→ Open the live dashboard](https://avinashnegi1999.github.io/nimcet/)
Interactive heat-map + topic ranking + year trends. Works on any device, anytime.

### 🔮 [→ NIMCET 2027 Forecast — what the next paper will most likely ask](https://avinashnegi1999.github.io/nimcet/forecast.html)
Nineteen papers parsed, every topic trend significance-tested, six forecasting methods back-tested against the real papers. Shows the predicted 2027 topic distribution to **±1.4 questions**, the 19-year heat-map, and the 270 recycled questions that reveal which past papers NIMCET reuses — and when.

<sub>Served from this repo ([`forecast.html`](forecast.html)) — one self-contained file, no external dependencies, works offline. A [mirror](https://claude.ai/code/artifact/10f48734-667d-4d7d-a573-a7085fff346a) also exists but requires a Claude login.</sub>

---

## The exam in one table

**NIMCET changed its section split in 2023** — Computer Awareness doubled and General English halved. This is the single most important structural fact in the dataset, and it has held for four consecutive papers (2023, 2024, 2025, 2026).

| Section | 2008–2022 | **2023 onward** | Marks (12 each) |
|---------|----------:|----------:|------:|
| **Mathematics** | 50 | **50** | 600 |
| Analytical Ability & Logical Reasoning | 40 | **40** | 480 |
| Computer Awareness | 10 | **20** ⬆️ | 240 |
| General English | 20 | **10** ⬇️ | 120 |

> ⚠️ **Computer Awareness is now worth twice what English is worth.** It is also almost entirely factual and mechanical — the highest marks-per-hour-of-study block in the whole paper.
>
> ⚠️ **Arithmetic word problems** (ratio, %, ages, mixtures, work) sit inside the **Reasoning** section, not Mathematics. Verified by reading NIMCET 2026 Q64–Q100 directly.

## Topics that repeat *every single year* (18–19 of 19 papers)

These are guaranteed to reappear. Master these before anything else.

| Topic | Section | Total | Avg/yr |
|-------|---------|------:|-------:|
| Logical Deduction & Puzzles | Reasoning | 194 | 10.2 |
| Calculus | Math | 160 | 8.4 |
| Trigonometry | Math | 133 | 7.0 |
| Arithmetic (speed-time-work, ratio, %, mixture) | Reasoning | 127 | 6.7 |
| Number System & Boolean Logic | Computer | 125 | 6.6 |
| Algebra & Progressions | Math | 117 | 6.2 |
| Coordinate & Conic Geometry | Math | 116 | 6.1 |
| ~~Vectors & 3D Geometry~~ | ~~Math~~ | ~~101~~ | **removed — see below** |
| Vocabulary (synonym/antonym) | English | 95 | 5.0 |
| Probability | Math | 88 | 4.6 |
| Series & Sequence | Reasoning | 73 | 3.8 |
| Permutation & Combination | Math | 68 | 3.6 |
| Sets Relations & Functions | Math | 59 | 3.1 |
| Coding-Decoding | Reasoning | 52 | 2.7 |
| Matrices & Determinants | Math | 41 | 2.2 |

## ❌ Vectors is gone — do not study it

Vector & 3D questions ran at **5–8 per paper for eighteen years, then dropped to 0 in 2026** when the revised syllabus removed vector algebra. The 2027 syllabus document contains **zero** mentions of "vector", "3D" or "dimension".

Those ~5 questions did not vanish — they moved into **Statistics** (+2.0 vs its 5-year mean), **Sets, Relations & Functions** (+1.6) and **Algebra & Progressions** (+1.6). Study those instead.

## Predicted 2027 paper

| Section | Questions | Top topics |
|---|---:|---|
| Mathematics | 50 | Calculus 10 · Trigonometry 8 · Coordinate Geo 7 · Algebra 6 · Probability 5 · Sets & Functions 4 · Statistics 4 |
| Reasoning | 40 | Arithmetic 9 · Puzzles 8 · Series 4 · Coding 3 · Seating 3 · Syllogism 3 |
| Computer | 20 | Number systems & Boolean 10 · Architecture/OS/memory 8 · Networking 1 |
| English | 10 | Grammar 3 · Vocabulary 3 · Comprehension 2 · Fill-blanks 1 |

Method: exponentially-weighted average of topic shares, chosen because it **won a back-test against five alternatives** (MAE 1.42 questions vs 1.83 for "just copy last year", which came last). Full workings in [`analysis/nimcet-2027-prediction.md`](analysis/nimcet-2027-prediction.md).

## 🔁 ~10% of every paper is recycled

TF-IDF matching across all 19 papers with every numeral masked found **270 cross-year duplicate pairs, 77 of them near-verbatim**. Whole multi-question puzzle sets get lifted intact — 2009 Q61–65 reappeared as 2012 Q86–88; 2024 Q61–63 reappeared as 2025 Q104.

The fourteen headline repeats are written out in full with worked solutions in [`analysis/recycled-questions-solved.md`](analysis/recycled-questions-solved.md).

**The repeat gap peaks at 2 years and 4 years.** For 2027 that points squarely at **NIMCET 2025 and NIMCET 2023** — solve those two until you recognise a stem in five seconds.

## Priority tiers (revised for the 2023 split + 2026 syllabus)

Chapter-by-chapter contents of every tier: [`analysis/study-plan-by-tier.md`](analysis/study-plan-by-tier.md).

- 🔴 **Tier S — do first (~540 marks):** Number Systems & Boolean Logic (10 Q) · Calculus (10 Q) · Arithmetic word problems (9 Q) · Logical Puzzles (8 Q) · Trigonometry (8 Q).
- 🟠 **Tier A — next:** Computer architecture/OS/memory (8 Q) · Coordinate & Conic Geo (7 Q) · Algebra & Progressions (6 Q) · Probability (5 Q) · Sets & Functions (4 Q) · Statistics (4 Q — the one *rising* Math topic, p = 0.002).
- 🟡 **Tier B — cheap, don't skip:** Series/Coding/Syllogism (10 Q) · Seating/Blood Relations/Clocks/Direction (8 Q) · Grammar + Vocabulary (6 Q).
- ⚪ **Tier C — bounded time:** P&C (3) · Matrices (2) · Comprehension (2) · Networking (1–2 forecast, but 6 in 2026 — do one evening on DNS/HTTP/email protocols) · Mathematical Logic / truth tables (1).
- ⛔ **Do not study:** Vector algebra · para jumbles · verbal analogy · linear programming.

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

#### 📑 Which chapters to read → [`04-arihant-book/`](04-arihant-book/README.md)

Every Arihant chapter mapped to the priority tiers, with page numbers. Tier 1 first, Tier 2 next, skip the rest until the last week.

**🔴 Tier 1 — Section I Mathematics (pp 1–792)**

| Ch | Topic | Pages |
|----|-------|-------|
| 2 | Inequality | 13–23 |
| 3 | Surds, Indices, Logarithms | 24–33 |
| 5 | Sequences & Series | 52–82 |
| 6 | Theory of Quadratic Equations | 83–104 |
| 7 | Permutations & Combinations | 105–126 |
| 8 | Binomial Theorem | 127–145 |
| 9 | Matrices & Determinants | 146–171 |
| 11 | Limits, Continuity & Differentiability | 205–237 |
| 12 | Differentiation | 238–261 |
| 13 | Application of Derivatives | 262–295 |
| 14 | Indefinite Integral | 296–333 |
| 15 | Definite Integral | 334–362 |
| 16 | Area Under Curve | 363–376 |
| 18 | Cartesian System, Straight Line | 401–443 |
| 19 | Circle | 444–475 |
| 20 | Parabola | 476–495 |
| 21 | Ellipse | 496–514 |
| 22 | Hyperbola | 515–532 |
| 23 | Trigonometric Ratios & Identities | 533–560 |
| 24 | Trigonometric Equations | 561–574 |
| 25 | Properties & Solution of Triangles | 575–597 |
| 26 | Inverse Trigonometric Functions | 598–614 |
| ~~28~~ | ~~Vectors~~ | **skip — off syllabus** |
| ~~29~~ | ~~Three Dimensional Geometry~~ | **skip — off syllabus** |
| 30 | Probability & Probability Distribution | 673–703 |

**🔴 Tier 1 — Section IV Quantitative / Arithmetic (pp 1–159)**

| Ch | Topic | Pages |
|----|-------|-------|
| 1 | Number System | 3–14 |
| 2 | HCF & LCM | 15–19 |
| 3 | Percentage | 20–31 |
| 4 | Profit & Loss | 32–44 |
| 5 | Average | 45–54 |
| 6 | Time, Speed & Distance | 55–67 |
| 7 | Simple & Compound Interest | 68–79 |
| 8 | Time & Work | 80–91 |
| 9 | Ratio & Proportion | 92–102 |
| 10 | Mixture or Alligations | 103–109 |

**🟡 Tier 2 — Section II Analytical & Logical (pp 1–168)**

| Ch | Topic | Pages |
|----|-------|-------|
| 4 | Series Test | 48–59 |
| 5 | Coding-Decoding Test | 60–66 |
| 6 | Blood Relation Test | 67–70 |
| 8 | Sitting Arrangement Test | 74–85 |
| 10 | Mathematical Operations & Reasoning | 91–96 |
| 12 | Decision Making Test | 111–118 |
| 13 | Data Sufficiency Test | 119–121 |
| 16 | Input & Output Test | 128–134 |

**🟡 Tier 2 — Section III Computer Awareness (pp 1–84)**

| Ch | Topic | Pages |
|----|-------|-------|
| 1 | Computer Fundamentals & PC Applications | 3–17 |
| 6 | 'C' Language | 44–76 |
| 7 | Data Structures | 77–84 |

**🟡 Tier 2 — Section V General English (pp 1–28):** Solved Paper 2024 (1–18) · Solved Paper 2025 (1–18)

---

## Repo layout

```
nimcet/
├── index.html              # live interactive dashboard (GitHub Pages)
├── analysis/
│   ├── nimcet-2027-prediction.md       # ⭐ the 2027 forecast: trends, back-test, recycling
│   ├── nimcet-2027-question-bank.md    # ⭐ 120 predicted questions, full worked solutions
│   ├── nimcet-2027-predicted-paper.md  #   same 120 questions, compact — use as a timed mock
│   ├── verify_predicted_paper.py       #   sympy self-check of the answer key (67/67 pass)
│   ├── scripts/                        #   parse → classify → aggregate → dups → forecast → build (reproducible)
│   ├── overview.md         # full ranking, priority plan, conclusions
│   ├── math.md             # Mathematics topic breakdown
│   ├── reasoning.md        # Logical Reasoning topic breakdown
│   ├── english.md          # General English topic breakdown
│   └── computer.md         # Computer Awareness topic breakdown
├── data/
│   ├── pyq-analysis-result.json   # topic × year counts (re-verified 2026-09-02)
│   ├── questions-classified.jsonl # every question: year, number, section, topic, difficulty, subtopic, text
│   ├── recycled-pairs.json        # cross-year near-duplicate pairs (TF-IDF cosine ≥ 0.6)
│   ├── forecast-2027.json         # EWMA forecast per topic with 80% bands
│   └── archive/                   # the July 2026 Sonnet-subagent counts, kept for comparison
├── papers/                 # the 19 source papers (nimcet-2008 … 2026)
├── resources/              # syllabus + formula books + reference PYQs
├── 01-learn-hindi/         # YouTube guide — learn from zero (Hindi, NCERT)
├── 02-learn-english/       # YouTube guide — learn from zero (English)
├── 03-practice-pyq/        # YouTube guide — NIMCET PYQ practice
└── 04-arihant-book/        # Arihant chapters mapped to tiers, with page numbers
```

## Method

**Classification.** Each question from all 19 papers was extracted and LLM-classified into one fixed topic taxonomy, then aggregated by topic × year. Counts, averages, and "years seen" come straight from `data/pyq-analysis-result.json`.

**Forecast (added 2026-08-17).** All 19 PDFs re-parsed with `pdftotext` into 2,249 individual questions. Per-topic trends significance-tested with Mann-Kendall; six forecasting methods back-tested by predicting each year from only the years before it. Recycling detected by TF-IDF cosine over question stems with all numerals masked, so a question re-asked with different numbers still matches.

**Known data gaps:** the 2012 PDF has 59 image-only questions (unrecoverable without OCR) and the 2015 PDF is truncated at Q90. Both years are down-weighted and never scored against in the back-test. The reported recycling rate is a **floor**, not a ceiling — the detector only reads cleanly-extracted text stems.

Source papers: aspirestudy.in year-wise PYQ archive. PYQ analysis 2026-07-15; 2027 forecast 2026-08-17.

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
