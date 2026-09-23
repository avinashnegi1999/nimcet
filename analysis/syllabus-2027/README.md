# NIMCET 2027 chapter forecast (2027-syllabus mapping)

Every question from the 19 papers in [`papers/`](../../papers/) (2008–2026, 2,248 questions) placed in a chapter of the
2027 syllabus ([`2027 syllabous/Nimcet 2027 Syllabus.pdf`](../../2027%20syllabous/)), then a back-tested estimate of each
chapter's chance of appearing in NIMCET 2027.

**Open the page:** [`syllabus-2027-heatmap.html`](../../syllabus-2027-heatmap.html) — same style as [`index.html`](../../index.html):
every chapter ranked by its 2027 chance (most likely first) with a cool→hot heat bar, section filters, priority tiers,
and tap-to-expand history, composition and latest questions per chapter. One self-contained file; works offline.

## What was done

1. **Syllabus → fixed chapter codes** — [`data/syllabus-2027/taxonomy.json`](../../data/syllabus-2027/taxonomy.json):
   87 chapters in 18 units across the 4 Parts (50 / 40 / 20 / 10 questions), plus codes for past topics that the
   2027 syllabus no longer lists (Vectors & 3D, analogy, number theory, …). Mapping rules for grey areas are written there.
2. **Label every question** — a rule-based draft ([`01_prelabel.js`](scripts/01_prelabel.js)), then every question read and
   the draft corrected by hand: 299 corrections, each with its reason, in
   [`overrides.tsv`](../../data/syllabus-2027/overrides.tsv). Image-only questions (2012, 2018, 2026) were checked against
   the page images. Final labels: [`labels.jsonl`](../../data/syllabus-2027/labels.jsonl).
   Questions count for the Part their **content** belongs to (a P&C question printed in the Reasoning section counts as P&C).
3. **Repeated questions** — two similarity signals (word TF-IDF and character 5-grams) over all cross-year pairs, then the
   candidates reviewed zone by zone: 191 confirmed matches (87 read one by one, 104 near-identical pairs — all 104 re-read in
   the audit), 203 rejected after reading, 261 weak candidates rejected as a group after a sample check. The audit then read
   the 106 pairs of the repo's older 270-pair list ([`data/recycled-pairs.json`](../../data/recycled-pairs.json)) that this
   search had not already reviewed: 18 genuine (8 same question, 10 same problem with new numbers), 88 false. Final:
   **209 confirmed pairs, 134 re-used questions** in 106 clusters
   ([`repeat-review.tsv`](../../data/syllabus-2027/repeat-review.tsv), [`repeats.json`](../../data/syllabus-2027/repeats.json)).
   Of the old list's 270 pairs, 171 are genuine and 99 are not.
4. **Back-test** ([`05_backtest.js`](scripts/05_backtest.js)) — 15 probability methods and 9 count methods each predicted the
   2016–2026 papers using only earlier papers and the official section sizes
   ([`backtest.json`](../../data/syllabus-2027/backtest.json)).
5. **Forecast** ([`06_forecast.js`](scripts/06_forecast.js)) — the winner: each chapter's share of its Part, weighted
   towards recent papers (half-life 6 papers), × the Part's 2027 size = expected questions; chance of ≥1 question =
   Poisson, then calibrated on past years. Back-test: Brier 0.1635 vs 0.2497 for a flat guess (≈35% better); expected
   count off by 0.86 questions per chapter on average. The "likely range" (Poisson 10th–90th percentile) held the real
   count 91% of the time, so read it as a ~90% range. A recency-heavy variant (half-life 2) is reported next to it
   ([`forecast-2027.json`](../../data/syllabus-2027/forecast-2027.json)).
6. **Page** ([`07_build_page.js`](scripts/07_build_page.js)).

Reproduce (Node.js only): run `01_prelabel` … `07_build_page` in [`scripts/`](scripts/) in order;
`08_readme_table.js` prints the table below.

## Main findings

- **The forecast is about chapters, not questions.** A typical chapter swings by 1–3 questions from paper to paper
  (Numerical Reasoning by up to ~5). Unit totals are relatively steadier, but mostly just because they are sums; only
  Trigonometry (p = 0.05) and Verbal Reasoning (p = 0.03) show chapters trading off against each other, and neither
  survives a multiple-testing correction. Covering whole units is still the safer plan.
- **Re-use of old questions has dropped sharply:** 15% of the 2023 paper was re-used, 2.5% of 2025, 0.8% of 2026
  (checked: none of the unread weak candidates touching 2025–26 was a real repeat).
- **2026 was set from the 2027 syllabus:** Vectors & 3D had 3–8 questions every year 2008–2025 and 0 in 2026; Internet &
  Email got 6 questions in 2026 (2 in all earlier papers), and two 2026 questions quote the syllabus wording ("Web
  Browsing", "Sending, receiving, and managing emails"). Only one such paper exists, so chapters where the recency-heavy
  model disagrees by ≥10 points are flagged on the page.
- **Trends:** Statistics rising and Problem Solving falling are the only borderline trends (q = 0.08 after correcting for
  69 chapters; not significant at 5%). Problem Solving is partly a catch-all label, so its fall is weaker evidence.
- **Chapters differ a lot in breadth** ("Numerical Reasoning" = all arithmetic word problems; "Measurement of Angles" is
  tiny), so a high chance for a broad chapter is partly a matter of size.
- **Caveats:** the 2015 source has no Computer/English questions (treated as missing, not zero); 8 questions have no text in
  the source and 5 are within-paper duplicates (2012 Q117–120 repeat Q26–29; 2018 Q85 repeats Q80 — excluded); the syllabus PDF says "Compiled by NIMCET Aspirant" — check it
  against the official notification.

## Audit (2026-09-23)

A self-audit re-checked the data and every claim:

- **Integrity:** 2,248 labels, all IDs unique, all codes valid, all overrides applied (299 after the audit), per-year counts reproduce exactly.
- **Labels:** two random samples (80 questions, read in full) — 1–2 wrong, ~1 in 10 borderline (two chapters defensible).
  Confirmed repeat pairs carrying different chapters: 2 — one real error fixed (2023 Q43 → Statistics), one harmless.
- **Repeats:** all 104 auto-accepted pairs re-read — all genuine (one regraded from "same question" to "same setup").
  The 106 unreviewed pairs from the older 270-pair list were read: 18 added (see step 3), which moved the re-used total from
  124 to 134 questions; the per-year re-use rates and the forecast did not change materially.
- **Fixed:** the back-test had used each target paper's realised section size (a small leak) — now official sizes only;
  the range was labelled "80%" but covers ~91% — relabelled; "5–8 Vectors questions a year" was wrong (3–8); the claim that
  units have a fixed quota was not supported — rewritten; the trend statement was updated after the relabel; 2018 Q85
  (a second printing of Q80) is now excluded as a duplicate.

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
| Pair of Straight Line | 42% | 0.5 (0–1) | 7/19 |
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
| Boolean Algebra | 96% | 4.9 (2–8) | 16/18 |
| Two's Complement | 86% | 2.7 (1–5) | 13/18 |
| CPU & Instructions | 81% | 2.2 (0–4) | 9/18 |
| Computer Memory | 77% | 1.9 (0–4) | 13/18 |
| RAM, ROM & Cache | 68% | 1.4 (0–3) | 10/18 |
| Binary & Hexadecimal | 68% | 1.4 (0–3) | 13/18 |
| Character, Integer & Fraction Representation | 56% | 0.9 (0–2) | 9/18 |
| Binary Arithmetic | 54% | 0.9 (0–2) | 8/18 |
| Floating Point Representation | 51% | 0.8 (0–2) | 8/18 |
| System Software | 48% | 0.7 (0–2) | 5/18 |
| Internet & Web Browsing | 46% | 0.6 (0–2) | 3/18 |
| Input/Output Devices | 42% | 0.5 (0–1) | 6/18 |
| Storage Devices | 41% | 0.5 (0–1) | 4/18 |
| Operating Systems | 28% | 0.3 (0–1) | 4/18 |
| Email | 28% | 0.3 (0–1) | 1/18 |
| Computer Organization | 26% | 0.2 (0–1) | 3/18 |
| Backup Devices | 11% | 0.1 (0–0) | 1/18 |
| Input Devices | no record | – | 0/18 |
| Output Devices | no record | – | 0/18 |
| Utility Programs & Device Drivers | no record | – | 0/18 |
| Application Software | no record | – | 0/18 |
| Online Security | no record | – | 0/18 |
| Basic Cyber Threats & Safety | no record | – | 0/18 |

**English (10 questions)**

| Chapter | 2027 chance | Expected (likely range) | Asked in |
|---|---:|---:|---:|
| Word & Phrase Meanings | 92% | 3.4 (1–6) | 18/18 |
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
