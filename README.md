# NIMCET PYQ Analysis + 2027 Forecast (2008–2026)

Data-driven breakdown of **19 years of NIMCET question papers** — every question classified into a fixed topic taxonomy, then back-tested into a statistical forecast of the 2027 paper, so prep effort goes where the marks actually are.

> **2248 questions · 19 papers · 38 topics · 87 chapters of the 2027 syllabus · 134 re-used questions confirmed by hand**
>
> **Audited 2026-09-23:** every claim on the forecast page and its sub-pages was re-checked against the data. Re-use, trend-test, duplicate-question and back-test claims were corrected, the mock paper's answer key was fixed, and a new chapter-level forecast for the 2027 syllabus was added. Full list: [`analysis/AUDIT-2026-09-23.md`](analysis/AUDIT-2026-09-23.md).
>
> **Re-verified 2026-09-02:** every question re-read and re-classified by Claude Fable 5.1 (one model, no subagents), including the 2012 image-only pages read visually. Per-question labels are now in [`data/questions-classified.jsonl`](data/questions-classified.jsonl). All headline findings held; the numbers below are the re-verified ones.

### 📊 [→ Open the live dashboard](https://avinashnegi1999.github.io/nimcet/)
Interactive heat-map + topic ranking + year trends. Works on any device, anytime.

### 🧭 [→ NIMCET 2027 chapter heat map — every 2027-syllabus chapter ranked by its chance of appearing](https://avinashnegi1999.github.io/nimcet/syllabus-2027-heatmap.html)
All 2,248 questions re-labelled into the 87 chapters of the 2027 syllabus, with a back-tested, calibrated chance of at least one question per chapter, the expected number of questions and a likely range. Method and data: [`analysis/syllabus-2027/`](analysis/syllabus-2027/README.md).

### 🔮 [→ NIMCET 2027 Forecast — what the next paper will most likely ask](https://avinashnegi1999.github.io/nimcet/forecast.html)
Nineteen papers parsed, every topic trend significance-tested, six forecasting methods back-tested against the real papers. Shows the predicted 2027 topic distribution to **±1.45 questions**, the 19-year heat-map, and the hand-checked record of which past questions NIMCET has re-used — and how that has faded since 2024.

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

## Topics that come up almost every year (18–19 of 19 papers)

Each of these appeared in 18 or 19 of the 19 papers (the 2015 source has no Computer or English section). Master these before anything else.

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

<sub>Counts are entries in the source papers. The source prints five questions twice inside the same paper (2012 Q117–120 = Q26–29, 2018 Q85 = Q80), which adds 1 to Trigonometry and Probability and 2 to P&C; the forecast counts each once.</sub>

## ❌ Vectors is gone — do not study it

Vector & 3D questions ran at **3–8 per paper for eighteen years, then dropped to 0 in 2026** when the revised syllabus removed vector algebra. The 2027 syllabus document contains **zero** mentions of "vector", "3D" or "dimension".

In 2026, **Statistics** (6), **Sets, Relations & Functions** (6) and **Algebra & Progressions** (7) sat above their recent averages — a hint about where those slots went, from one paper only.

## Predicted 2027 paper

| Section | Questions | Top topics |
|---|---:|---|
| Mathematics | 50 | Calculus 10 · Trigonometry 8 · Coordinate Geo 7 · Algebra 6 · Probability 5 · Sets & Functions 4 · Statistics 4 |
| Reasoning | 40 | Arithmetic 9 · Puzzles 8 · Series 4 · Coding 3 · Seating 3 · Syllogism 3 |
| Computer | 20 | Number systems & Boolean 10 · Architecture/OS/memory 8 · Networking 1 |
| English | 10 | Grammar 3 · Vocabulary 3 · Comprehension 2 · Fill-blanks 1 |

Method: exponentially-weighted average of topic shares, chosen because it **won a back-test against five alternatives** (MAE 1.45 questions vs 1.85 for "just copy last year", which came last; re-scored in the 2026-09-23 audit using only each year's official section sizes). Full workings in [`analysis/nimcet-2027-prediction.md`](analysis/nimcet-2027-prediction.md).

## 🧭 2027 syllabus: the chapters most likely to appear

The same papers, mapped onto the **chapters of the 2027 syllabus** instead of the older topic list. Chance = how likely at least one question from that chapter is (back-tested on 2016–2026 and calibrated); expected = questions expected in 2027.

| Chapter | Section | Chance | Expected (likely range) |
|---|---|---:|---:|
| Numerical Reasoning (arithmetic word problems) | Reasoning | 96% | 10.0 (6–14) |
| Puzzles | Reasoning | 96% | 5.6 (3–9) |
| Probability | Math | 96% | 5.5 (3–9) |
| Boolean Algebra | Computer | 96% | 4.9 (2–8) |
| Alphanumeric Series | Reasoning | 95% | 4.3 (2–7) |
| Word & Phrase Meanings | English | 92% | 3.4 (1–6) |
| Coding-Decoding | Reasoning | 91% | 3.4 (1–6) |
| Trigonometric Ratios and Functions | Math | 91% | 3.3 (1–6) |
| Set Theory | Math | 91% | 3.3 (1–6) |
| Blood Relations | Reasoning | 90% | 3.1 (1–5) |

The likely range held the real count about 90% of the time in the back-test. All 87 chapters, with history and past questions per chapter: [chapter heat map](https://avinashnegi1999.github.io/nimcet/syllabus-2027-heatmap.html) · full table and method: [`analysis/syllabus-2027/README.md`](analysis/syllabus-2027/README.md).

## 🔁 Re-used questions: real, but fading fast

TF-IDF matching with every numeral masked flagged 270 cross-year pairs; reading every one found **171 real repeats** and 99 false matches; with a second detector and hand review, **134 re-used questions** in all. Whole multi-question puzzle sets have been lifted intact — 2009 Q61–65 reappeared as 2012 Q86–88; 2024 Q61–63 reappeared as 2025 Q104. Re-use peaked at **15% of the 2023 paper**, then fell to **2.5% in 2025 and 0.8% in 2026**.

The fourteen headline repeats are written out in full with worked solutions in [`analysis/recycled-questions-solved.md`](analysis/recycled-questions-solved.md).

Counted once per re-use (a whole puzzle set counts once), gaps of 1, 2 and 4 years are about equally common, and recent papers barely re-use anything. Solve 2025 and 2026 for style and difficulty — not in the hope their questions return.

## Priority tiers (revised for the 2023 split + 2026 syllabus)

Chapter-by-chapter contents of every tier: [`analysis/study-plan-by-tier.md`](analysis/study-plan-by-tier.md). Every past question, written out in full and grouped by those chapters: [`analysis/pyq-by-chapter/`](analysis/pyq-by-chapter/README.md).

- 🔴 **Tier S — do first (~540 marks):** Number Systems & Boolean Logic (10 Q) · Calculus (10 Q) · Arithmetic word problems (9 Q) · Logical Puzzles (8 Q) · Trigonometry (8 Q).
- 🟠 **Tier A — next:** Computer architecture/OS/memory (8 Q) · Coordinate & Conic Geo (7 Q) · Algebra & Progressions (6 Q) · Probability (5 Q) · Sets & Functions (4 Q) · Statistics (4 Q — the only topic trend that survives a multiple-testing correction: rising).
- 🟡 **Tier B — cheap, don't skip:** Series/Coding/Syllogism (10 Q) · Seating/Blood Relations/Clocks/Direction (8 Q) · Grammar + Vocabulary (6 Q).
- ⚪ **Tier C — bounded time:** P&C (3) · Matrices (2) · Comprehension (2) · Networking (1–2 forecast, but 6 in 2026 — do one evening on DNS/HTTP/email protocols) · Mathematical Logic / truth tables (1).
- ⛔ **Do not study:** Vector algebra · para jumbles · linear programming. (Verbal analogy is not in the 2027 syllabus but was still asked every year 2021–2024 — skim, don't zero.)

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
├── index.html                  # live interactive dashboard (GitHub Pages)
├── forecast.html               # 2027 forecast page: topic predictions, back-test, re-use record, tiers
├── syllabus-2027-heatmap.html  # every 2027-syllabus chapter ranked by its chance of appearing in 2027
├── 2027 syllabous/             # the NIMCET 2027 syllabus PDF the chapter forecast is built on
├── analysis/
│   ├── nimcet-2027-prediction.md       # ⭐ the 2027 forecast: trends, back-test, recycling
│   ├── study-plan-by-tier.md           # ⭐ what to study, chapter by chapter, in tier order
│   ├── pyq-by-chapter/                 # ⭐ every past question in full, one page per study-plan row
│   ├── nimcet-2027-question-bank.md    # ⭐ 120 predicted questions, full worked solutions
│   ├── nimcet-2027-predicted-paper.md  #   same 120 questions, compact — use as a timed mock (answers spread over (1)–(4))
│   ├── verify_predicted_paper.py       #   sympy self-check of the answer key (67/67 pass)
│   ├── recycled-questions-solved.md    #   the fourteen headline re-used questions, solved
│   ├── syllabus-2027/                  #   2027-syllabus chapter forecast: method, findings, scripts
│   ├── AUDIT-2026-09-23.md             #   what the 2026-09-23 audit checked and corrected
│   ├── scripts/                        #   parse → classify → aggregate → dups → forecast → build (see its README)
│   ├── overview.md         # full ranking, priority plan, conclusions
│   ├── math.md             # Mathematics topic breakdown
│   ├── reasoning.md        # Logical Reasoning topic breakdown
│   ├── english.md          # General English topic breakdown
│   └── computer.md         # Computer Awareness topic breakdown
├── data/
│   ├── pyq-analysis-result.json   # topic × year counts (re-verified 2026-09-02)
│   ├── questions-classified.jsonl # every question: year, number, section, topic, difficulty, subtopic, text
│   ├── recycled-pairs.json        # the text detector's 270 cross-year pairs (171 genuine when read — see syllabus-2027/repeat-review.tsv)
│   ├── forecast-2027.json         # EWMA forecast per topic with 80% bands
│   ├── syllabus-2027/             # 2027-syllabus labels for every question, repeat verdicts, back-test, chapter forecast
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

**2027-syllabus chapter forecast (added 2026-09-23).** Every question placed in a chapter of the 2027 syllabus (a rule-based draft, then corrected by hand with a written reason for each change), repeats found by two similarity signals and read, and 15 probability methods back-tested on 2016–2026 using only earlier papers. Details: [`analysis/syllabus-2027/README.md`](analysis/syllabus-2027/README.md).

**Audit (2026-09-23).** Trend tests are now corrected for testing 39 topics at once (only Statistics' rise holds up); re-use counts come from pairs read by hand, not raw detector hits; the back-test uses only official section sizes. See [`analysis/AUDIT-2026-09-23.md`](analysis/AUDIT-2026-09-23.md).

**Known data gaps:** the 2015 PDF stops at Q90 (no Computer or English questions), 2019 has 6 questions marked "Not Available" and 2012 has 2 garbled entries — 8 questions in all have no usable text. 2012's image-only pages were read visually in the 2026-09-02 pass. The source prints five questions twice inside the same paper (2012 Q117–120, 2018 Q85); the forecast counts each once. A text detector cannot see heavily reworded repeats, so the 134 confirmed re-used questions are a careful floor — but the drop to about 1% of the 2026 paper does not depend on that.

Source papers: aspirestudy.in year-wise PYQ archive. PYQ analysis 2026-07-15; 2027 forecast 2026-08-17; re-verified 2026-09-02; audited and 2027-syllabus forecast added 2026-09-23.

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
