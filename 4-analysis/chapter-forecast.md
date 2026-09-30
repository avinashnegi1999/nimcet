# Chapter forecast for the 2027 syllabus

Every past question was placed in a chapter of the 2027 syllabus, and each chapter then got a back-tested chance of appearing.

**See it:** the [chapter heat map](../syllabus-2027-heatmap.html) ranks every chapter by its chance and shows each chapter's history and latest questions. It is one file and works offline.

---

## Key findings

- **Plan by unit, not by chapter.** A chapter swings by 1–3 questions from paper to paper (Numerical Reasoning by up to ~5).
- **Re-use has almost stopped.** 15% of the 2023 paper was re-used, then 2.5% of 2025 and 0.8% of 2026.
- **2026 was set from the new syllabus.**
  - Vectors fell to 0.
  - Internet & Email got 6 questions, against 2 in all earlier papers.
  - Two 2026 questions quote the syllabus word for word.
  - The heat map flags chapters where a recent-papers model disagrees by 10+ points.
- **Cover the new Computer chapters anyway.** The model expects only 1.5 Internet & Email questions. Online Security, application software and utility programs have no past questions yet. All of them are small and factual.
- **No chapter trend is significant.** Statistics rising and Problem Solving falling are borderline (q = 0.08 across 69 chapters).
- **Broad chapters score high partly because of their size.** "Numerical Reasoning" covers all arithmetic word problems, while "Measurement of Angles" is tiny.

---

## How good is it?

Back-tested on 2016–2026. Each paper was predicted only from earlier papers and the official section sizes.

| Measure | Result |
|---|---|
| Chance of ≥1 question (Brier score, lower is better) | 0.1637: 34% better than a flat guess, but only 4% better than counting past appearances |
| Expected-count error | 0.85 questions per chapter |
| Likely range (Poisson 10th–90th percentile) | Held the real count 91% of the time, so read it as a ~90% range |

---

## How it was built

1. **Chapters.** The syllabus became 87 chapter codes in 18 units ([taxonomy](../data/syllabus-2027/taxonomy.json)). It also has codes for dropped topics (Vectors & 3D, analogy, number theory, and so on). The rules for grey areas are written in the same file.
2. **Labels.** A rule-based draft came first ([`01_prelabel.js`](../scripts/chapter-forecast/01_prelabel.js)). Then every question was read and 299 labels were corrected by hand, each with a reason ([`overrides.tsv`](../data/syllabus-2027/overrides.tsv)).
   - Image-only questions (2012, 2018, 2026) were checked against the page images.
   - A question counts for the Part its content belongs to.
   - The final labels are in [`labels.jsonl`](../data/syllabus-2027/labels.jsonl).
3. **Repeats.** Two similarity measures (word TF-IDF and character 5-grams) scored every cross-year pair, and the candidates were read by hand.
   - The result: 209 confirmed pairs, 134 re-used questions, 106 clusters ([`repeat-review.tsv`](../data/syllabus-2027/repeat-review.tsv), [`repeats.json`](../data/syllabus-2027/repeats.json)).
   - Of the older 270-pair list ([`recycled-pairs.json`](../data/recycled-pairs.json)), 171 are genuine.
4. **Back-test.** 15 probability methods and 9 count methods were compared ([`05_backtest.js`](../scripts/chapter-forecast/05_backtest.js), [`backtest.json`](../data/syllabus-2027/backtest.json)).
5. **Forecast.** The winning method takes each chapter's share of its Part, weights recent papers more (half-life 6 papers), and multiplies by the Part's 2027 size to get expected questions.
   - The chance of at least one question comes from a Poisson model, calibrated on past years.
   - **Computer:** each unit's total comes from the 20-question papers (2023+), and the unit's chapters share it by their weighted history. Using all papers over-predicted Data Representation in every paper from 2023 to 2026 (13.3 vs 12, 13.1 vs 9, 12.7 vs 9, 12.4 vs 5).
   - A recency-heavy variant (half-life 2) is stored alongside ([`forecast-2027.json`](../data/syllabus-2027/forecast-2027.json)).
6. **Page.** The heat map is built by [`07_build_page.js`](../scripts/chapter-forecast/07_build_page.js).

**To rebuild** (Node.js only), run `01` to `07` in [`scripts/chapter-forecast/`](../scripts/chapter-forecast/) in order. `08_readme_table.js` prints the tables below.

---

## Checks

- **2026-09-30 re-audit.** Scripts 01–07 reproduced every output byte for byte. Then three things changed: the Computer unit totals, the page's baseline comparison and the syllabus note. Non-Computer chapters keep their expected counts. [Details](audits/2026-09-30.md)
- **2026-09-23 audit.**
  - Integrity: 2,248 labels, unique IDs, valid codes, 299 overrides applied.
  - Labels: two random samples (80 questions) had 1–2 wrong labels and about 1 in 10 borderline.
  - Repeats: all 104 auto-accepted pairs were re-read, and all were genuine.
  - Fixed: a back-test size leak; the range relabelled from "80%" to ~90%; vectors at 3–8 a year (not 5–8); no fixed quota per unit; 2018 Q85 excluded as a duplicate.
  - [Details](audits/2026-09-23.md)

---

## Data notes

- 2015 has no Computer or English questions, which are treated as missing, not zero.
- 8 questions have no text in the source.
- 5 questions are printed twice in one paper (2012 Q117–120 = Q26–29, 2018 Q85 = Q80) and are excluded.
- 2012 Q63 is a broken image.
- The [topic-wise syllabus](../syllabus/nimcet-2027-syllabus-topicwise.pdf) used here was compiled by an aspirant. It matches the [official revised syllabus](../syllabus/nimcet-syllabus-official-2026.pdf): same chapters, 50/40/20/10 split, no vectors.

---

## 2027 forecast by chapter

**Math (50 questions)**

| Chapter | 2027 chance | Expected (likely range) | Asked in |
|---|---:|---:|---:|
| Probability | 96% | 5.5 (3–9) | 19/19 |
| Trigonometric Ratios and Functions | 91% | 3.3 (1–6) | 19/19 |
| Set Theory | 91% | 3.3 (1–6) | 19/19 |
| Statistics | 89% | 3.0 (1–5) | 17/19 |
| Permutation and Combination | 88% | 2.9 (1–5) | 17/19 |
| Progression | 84% | 2.5 (1–5) | 19/19 |
| Application of Derivative | 82% | 2.3 (0–4) | 18/19 |
| Quadratic Equations and Inequalities | 74% | 1.7 (0–3) | 15/19 |
| Limit | 74% | 1.7 (0–3) | 15/19 |
| Definite Integral | 73% | 1.7 (0–3) | 15/19 |
| Straight Line | 73% | 1.6 (0–3) | 14/19 |
| Determinant | 72% | 1.6 (0–3) | 15/19 |
| Function | 69% | 1.5 (0–3) | 12/19 |
| Trigonometric Equations | 67% | 1.3 (0–3) | 13/19 |
| Properties of a Triangle | 66% | 1.3 (0–3) | 13/19 |
| Height and Distance | 65% | 1.3 (0–3) | 11/19 |
| Logarithmic | 60% | 1.1 (0–2) | 14/19 |
| Circle | 60% | 1.1 (0–2) | 12/19 |
| Indefinite Integrals | 58% | 1.0 (0–2) | 9/19 |
| Ellipse | 58% | 1.0 (0–2) | 13/19 |
| Inverse Trigonometry Function | 58% | 1.0 (0–2) | 9/19 |
| Parabola | 57% | 0.9 (0–2) | 12/19 |
| Hyperbola | 56% | 0.9 (0–2) | 13/19 |
| Matrix | 55% | 0.9 (0–2) | 13/19 |
| Differentiation | 54% | 0.8 (0–2) | 11/19 |
| Binomial Theorem | 50% | 0.7 (0–2) | 12/19 |
| Continuity | 48% | 0.7 (0–2) | 8/19 |
| Differentiability | 46% | 0.6 (0–2) | 7/19 |
| Area Under Curve | 43% | 0.5 (0–2) | 9/19 |
| Exponentials | 43% | 0.5 (0–1) | 7/19 |
| Pair of Straight Line | 43% | 0.5 (0–1) | 7/19 |
| Rectangular Cartesian System | 39% | 0.4 (0–1) | 9/19 |
| Complex Numbers | 32% | 0.3 (0–1) | 5/19 |
| Differential Equation | 31% | 0.3 (0–1) | 4/19 |
| Mathematical Logic (Tautology, Contradiction, Truth Table, Connectives) | 26% | 0.2 (0–1) | 2/19 |
| Measurement of Angles | 7% | 0.0 (0–0) | 1/19 |

**Reasoning (40 questions)**

| Chapter | 2027 chance | Expected (likely range) | Asked in |
|---|---:|---:|---:|
| Numerical Reasoning | 96% | 10.0 (6–14) | 19/19 |
| Puzzles | 96% | 5.6 (3–9) | 19/19 |
| Alphanumeric Series | 95% | 4.3 (2–7) | 19/19 |
| Coding-Decoding | 91% | 3.4 (1–6) | 18/19 |
| Blood Relations | 90% | 3.1 (1–5) | 16/19 |
| Syllogism | 87% | 2.8 (1–5) | 14/19 |
| Seating Arrangement | 86% | 2.6 (1–5) | 14/19 |
| Figure-based Reasoning | 69% | 1.5 (0–3) | 11/19 |
| Deductive & Inductive Reasoning | 68% | 1.4 (0–3) | 10/19 |
| Data Interpretation | 66% | 1.3 (0–3) | 4/19 |
| Problem Solving | 62% | 1.1 (0–3) | 13/19 |
| Direction Test | 54% | 0.8 (0–2) | 11/19 |
| Critical Thinking | 51% | 0.8 (0–2) | 6/19 |
| Statements, Conclusions & Arguments | 45% | 0.6 (0–2) | 5/19 |
| Data Sufficiency | 44% | 0.6 (0–2) | 6/19 |
| Input-Output | 31% | 0.3 (0–1) | 3/19 |
| Mirror Images | 6% | 0.0 (0–0) | 1/19 |
| Data Visualization | no record | – | 0/19 |

**Computer (20 questions)**

| Chapter | 2027 chance | Expected (likely range) | Asked in |
|---|---:|---:|---:|
| Boolean Algebra | 94% | 3.9 (2–7) | 16/18 |
| CPU & Instructions | 85% | 2.6 (1–5) | 9/18 |
| Computer Memory | 81% | 2.2 (0–4) | 13/18 |
| Two's Complement | 81% | 2.2 (0–4) | 13/18 |
| RAM, ROM & Cache | 72% | 1.6 (0–3) | 10/18 |
| Binary & Hexadecimal | 61% | 1.1 (0–3) | 13/18 |
| Internet & Web Browsing | 60% | 1.1 (0–2) | 3/18 |
| System Software | 57% | 0.9 (0–2) | 5/18 |
| Character, Integer & Fraction Representation | 51% | 0.7 (0–2) | 9/18 |
| Binary Arithmetic | 49% | 0.7 (0–2) | 8/18 |
| Input/Output Devices | 46% | 0.6 (0–2) | 6/18 |
| Floating Point Representation | 46% | 0.6 (0–2) | 8/18 |
| Storage Devices | 44% | 0.6 (0–2) | 4/18 |
| Email | 38% | 0.4 (0–1) | 1/18 |
| Operating Systems | 34% | 0.3 (0–1) | 4/18 |
| Computer Organization | 29% | 0.3 (0–1) | 3/18 |
| Backup Devices | 12% | 0.1 (0–0) | 1/18 |
| Input Devices | no record | – | 0/18 |
| Output Devices | no record | – | 0/18 |
| Utility Programs & Device Drivers | no record | – | 0/18 |
| Application Software | no record | – | 0/18 |
| Online Security | no record | – | 0/18 |
| Basic Cyber Threats & Safety | no record | – | 0/18 |

**English (10 questions)**

| Chapter | 2027 chance | Expected (likely range) | Asked in |
|---|---:|---:|---:|
| Word & Phrase Meanings | 91% | 3.4 (1–6) | 18/18 |
| Grammatical Patterns | 86% | 2.6 (1–5) | 17/18 |
| Comprehension of Written Text | 71% | 1.6 (0–3) | 14/18 |
| Word Usage | 67% | 1.4 (0–3) | 15/18 |
| Sentence Forms | 39% | 0.5 (0–1) | 9/18 |
| Word Formation | 28% | 0.3 (0–1) | 7/18 |
| Technical Writing | 24% | 0.2 (0–1) | 3/18 |
| English Expressions for Technical Education | 21% | 0.2 (0–1) | 2/18 |
| Sounds & Pronunciation | no record | – | 0/18 |
| Accuracy & Fluency | no record | – | 0/18 |

Chapters with "no record" were never asked in 19 papers; the model gives them no measured chance.
