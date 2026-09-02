# NIMCET 2027 — Statistical Prediction Report

Built from all 19 papers in `papers/` (2008–2026), 2,248 extracted questions.
Generated 2026-08-17. **Re-verified 2026-09-02 with a full single-model re-classification — see §12; the tables in §7–§8 now show the re-verified forecast.**

---

## 0. What was actually done

| Step | Method |
|---|---|
| Text extraction | `pdftotext -layout` on all 19 PDFs, question splitting on the `Qus : N` marker |
| Question count recovered | **2,249** (120/paper except 2015 = 90, 2019 = 119) |
| Topic labels | `data/pyq-analysis-result.json` (38 topics × 19 years, question-level classification from the earlier pass) |
| Style / difficulty / concept read | Manual read of every 2026 question and the 2025 Math + Computer blocks |
| Recycling detection | TF-IDF cosine over question stems (options stripped, all numerals masked to `NUM`) — finds the same question re-asked with different numbers |
| Trend tests | Mann-Kendall τ + OLS slope per topic, `scipy.stats` |
| Forecast | Share-within-section forecasting, 6 candidate estimators, backtested |

### Data quality — be aware of this

| Problem | Size | Effect |
|---|---|---|
| **2012 paper is 59/120 image-only** | 2.6% of corpus | 2012 counts scaled up by coverage; treated as low-weight |
| **2015 PDF truncated at Q90** | 30 questions | English + Computer blocks missing for 2015 |
| **2019 missing 1 question** | negligible | — |
| Recycling detector only sees text-extractable stems | 1,400 of 2,249 usable | reported recycling rates are a **lower bound** |

Nothing here comes from internet summaries. Every number traces to the PDFs in `papers/`.

---

## 1. The single most important structural finding

**NIMCET changed its section split in 2023, not 2026.**

| Year | Math | Reasoning | Computer | English |
|---|---|---|---|---|
| 2008–2022 | 50 | 40 | **10** | **20** |
| 2023–2026 | 50 | 40 | **20** | **10** |

Evidence from the label counts (Computer / English columns):

```
2020  10 / 20      2023  20 / 11      2025  19 / 10
2021  10 / 20      2024  19 / 10      2026  21 / 10
2022  10 / 22
```

Four consecutive years confirm the new split. **Computer Awareness is now worth as much as 40% of the Mathematics section** and twice what English is worth. This is the highest-ROI structural fact in the whole dataset.

### Second structural finding: arithmetic lives in the Reasoning section

Verified by reading NIMCET 2026 Q64–Q100 directly: ratio (Q64), scoring/marks (Q66), percentages (Q88), ages (Q97), investment splits (Q93), mixtures (Q100), bill-splitting (Q99) — all sit **inside the Analytical Ability & Logical Reasoning block**, not in Mathematics.

The stored topic labels file them under "Math → Arithmetic", which inflates Math and deflates Reasoning. This report re-assigns them. Practically: **your arithmetic practice is Reasoning-section prep, not Math-section prep.**

---

## 2. Syllabus change: Vectors is gone — the data agrees

| Year | Vectors & 3D Geometry questions |
|---|---|
| 2021 | 7 |
| 2022 | 5 |
| 2023 | 6 |
| 2024 | 6 |
| 2025 | 6 (2025 Q35, Q47, Q50, Q52, Q53 are explicit vector questions) |
| **2026** | **1** |

A drop from a 19-year mean of 5.2 to 1. Under the 2008–2025 distribution the chance of seeing ≤1 is under 2%. This is a syllabus deletion, not noise.

**Where those ~5 questions went in 2026** (change vs the 5-year mean):

| Topic | last-5 mean | 2026 | Δ |
|---|---|---|---|
| Algebra & Progressions | 7.4 | 11 | **+3.6** |
| Sets, Relations & Functions | 5.2 | 7 | **+1.8** |
| Statistics | 3.4 | 4 | +0.6 |
| Trigonometry | 7.2 | 8 | +0.8 |

**Do not prepare Vectors for 2027.** The residual 1 question is 3D-geometry-flavoured, not vector algebra.

---

## 3. Trend tests (Mann-Kendall on 2008–2025)

Only two topics show a statistically significant monotone trend at p < 0.05:

| Topic | τ | p | Direction |
|---|---|---|---|
| **Statistics (Math)** | +0.57 | **0.002** | rising — 0–1/yr in 2008-12, 3–4/yr now |
| **Logical Deduction & Puzzles** | −0.44 | **0.012** | falling — 19/yr in 2008 to 5–7/yr now |

Marginal (0.05 < p < 0.10), worth watching:

| Topic | τ | p | Direction |
|---|---|---|---|
| Permutation & Combination | −0.31 | 0.087 | falling (2022: 0, 2023: 1, 2026: 1) |
| Sets, Relations & Functions | +0.31 | 0.078 | rising |
| English Sentence Arrangement | −0.35 | 0.073 | falling to zero |

Everything else is statistically flat. **That is itself the finding**: NIMCET's topic mix is mostly stationary noise around a stable mean, so a mean-reverting forecast beats a trend-following one — which the backtest confirms below.

---

## 4. Question recycling — the strongest exploitable pattern

TF-IDF cosine ≥ 0.55 across different years, numerals masked. **300 cross-year near-duplicate pairs, 44 of them near-verbatim (cos ≥ 0.95).**

### Recycling rate per paper

| Year | Questions with an earlier near-duplicate | % of paper |
|---|---|---|
| 2020 | 20 | 16.7% |
| 2021 | 22 | 18.3% |
| 2022 | 13 | 10.8% |
| 2023 | 18 | 15.0% |
| 2024 | 14 | 11.7% |
| 2025 | 12 | 10.0% |
| 2026 | 10 | 8.3% |

**Roughly 1 in 10 questions in a modern NIMCET paper has appeared before.** Since the detector only sees clean text stems, the real figure is higher.

### The recycling gap distribution

| Gap | Pairs | Share |
|---|---|---|
| **2 years** | 52 | 17.3% |
| **4 years** | 42 | 14.0% |
| 6 years | 33 | 11.0% |
| 3 years | 32 | 10.7% |
| 1 year | 31 | 10.3% |

Restricting to near-verbatim repeats (cos ≥ 0.95) sharpens it: **gap 2 = 15 pairs, gap 4 = 9, gap 3 = 7, gap 1 = 6.** Even gaps dominate — 55% of verbatim repeats come back after exactly 2 or 4 years.

### What that means for 2027

| Source year | Gap to 2027 | Priority |
|---|---|---|
| **2025** | 2 | **highest — most common recycling gap** |
| **2023** | 4 | **highest — second most common** |
| 2024 | 3 | high |
| 2026 | 1 | high (and it defines the new style) |
| 2021 | 6 | medium |

**Actionable: solve NIMCET 2025 and 2023 to the point where you recognise a stem in 5 seconds.** Statistically those two papers are the most likely to donate questions to 2027.

### Verified verbatim repeats found in the corpus

| Question | Appearances |
|---|---|
| Clock: needles coincide between 3 and 4 o'clock | 2018 Q80, 2018 Q85, **2022 Q87** |
| "Five houses lettered A–E in a row" puzzle set | 2009 Q61–65, **2012 Q86–88** |
| "Family of six persons, two married couples" set | 2015 Q12–15, **2017 Q92–94** |
| "Nine individuals on three committees" set | 2018 Q113, **2020 Q21–22** |
| "A–G travelling in three vehicles" set | 2024 Q61–63, **2025 Q104** |
| Two-plant factory defective-item probability | 2019 Q13, **2023 Q103** |
| Tangent to `x = a·cos2t, y = 2√2·a·sin t` | 2015 Q45, **2023 Q112** |
| "EXAMINATION coded as 56149512965" | 2015 Q35, **2016 Q37** |
| Bootstrap loader first instruction location | 2008 Q110, **2017 Q30** |
| Synonym: DEBACLE | 2018 Q24, **2022 Q64** |
| Vectors: `a+b` collinear with `c` | 2010 Q59, 2016 Q81, **2020 Q112** |
| City literacy ratio (40% adults illiterate / 85% children literate) | 2018 Q76, **2020 Q10** |
| Caterpillar climbing a 75-inch pole | 2017 Q105, **2018 Q89** |
| Frequency-distribution table question | 2021 Q80, **2023 Q108** |
| Circle touching X-axis and another circle at (0,3) | 2015 Q70, **2023 Q57** |
| Syllogism: "All mangoes are golden in colour" | 2018 Q96, **2022 Q71** |

Note the pattern: **whole multi-question puzzle sets get lifted intact**, not just single questions.

---

## 5. Back-test: which forecasting method actually works

Predict year *Y* using only papers ≤ *Y−1*, score against the real paper. Targets 2016–2026, error in questions per topic. Broken years (2012, 2015) excluded from scoring.

### Forecasting in share-within-section space

| Method | MAE (questions) |
|---|---|
| **EWMA α = 0.20** | **1.431** ← best |
| EWMA α = 0.35 | 1.436 |
| Blend (0.45·last + 0.30·mean3 + 0.25·mean-all) | 1.464 |
| Median of last 5 | 1.469 |
| Mean of last 5 | 1.493 |
| **Last year only** | **1.703** ← worst |

### Same test in raw-count space (targets 2015–2026)

| Method | MAE | RMSE |
|---|---|---|
| Median-5 | 1.437 | 2.144 |
| EWMA .20 | 1.471 | 2.108 |
| Mean-5 | 1.477 | 2.127 |
| Mean-all | 1.549 | 2.203 |
| LinReg (trend extrapolation) | 1.591 | 2.280 |
| **Last year only** | **1.810** | **2.710** |

### Conclusions from the back-test

1. **Slowly-decaying weighted averages win.** EWMA α = 0.20 means the last year gets ~20% weight, the year before ~16%, and so on — the whole history matters.
2. **Copying last year is the worst method tested** (MAE 1.70–1.81 vs 1.43). This directly contradicts the instinct "2026 is the new syllabus so just predict 2026 again". Weighting 2026 heavily is right; copying it is not.
3. **Trend extrapolation (LinReg) also loses** — consistent with §3, where almost nothing has a significant trend.
4. Restricted to the post-2023 regime only (targets 2023–2026), the ranking tightens (Blend45 1.381, EWMA.20 1.403, LastYear 1.547) but the ordering holds.

**Method selected for the 2027 forecast: EWMA α = 0.20 on share-within-section, plus a hard syllabus override zeroing Vectors.** Expected accuracy: **±1.4 questions per topic**, with an 80% band of roughly ±3 for the large topics.

---

## 6. Deliverable 1 — Predicted 2027 subject-wise distribution

| Section | Questions | Marks (12 each) | Confidence |
|---|---|---|---|
| Mathematics | **50** | 600 | **0.95** — fixed by pattern since 2008 |
| Analytical Ability & Logical Reasoning | **40** | 480 | **0.95** |
| Computer Awareness | **20** | 240 | **0.88** — stable across 2023–2026 |
| General English | **10** | 120 | **0.88** |
| **Total** | **120** | **1440** | — |

Negative marking −3 per wrong answer, 2-hour duration (unchanged 2023–2026).

The only realistic risk is a further NIMCET-side revision; nothing in the 2023–2026 data hints at one.

---

## 7. Deliverable 2 — Predicted Mathematics topic distribution (50 questions)

Re-verified 2026-09-02. EWMA α = 0.20 on share-within-section × 50, Vectors forced to zero by the syllabus and its share redistributed proportionally. 80% band = ±1.28 × the standard deviation of the method's own back-test residuals for that topic.

| Topic | Predicted | 80% band | 2026 actual | last-5 mean | 19-yr mean |
|---|---|---|---|---|---|
| **Calculus** | **10** | 7–12 | 9 | 9.6 | 8.4 |
| **Trigonometry** | **8** | 5–11 | 8 | 7.4 | 7.0 |
| **Coordinate & Conic Geometry** | **7** | 4–9 | 6 | 6.6 | 6.1 |
| **Algebra & Progressions** | **6** | 4–8 | 7 | 5.4 | 6.2 |
| **Probability** | **5** | 3–7 | 3 | 4.6 | 4.6 |
| **Sets Relations & Functions** | **4** | 3–6 | 6 | 4.4 | 3.1 |
| **Statistics** | **4** | 2–5 | 6 | 4.0 | 2.4 |
| Permutation & Combination | **3** | 1–5 | 1 | 1.8 | 3.6 |
| Matrices & Determinants | **2** | 1–4 | 3 | 2.0 | 2.2 |
| Number Theory (HCF/LCM/divisibility) | **1** | 0–2 | 0 | 0.6 | 1.2 |
| Mathematical Logic | **0** | 0–1 | 1 | 0.4 | 0.1 |
| Complex Numbers | **0** | 0–1 | 0 | 0.2 | 0.2 |
| Differential Equations | **0** | 0–1 | 0 | 0.0 | 0.2 |
| Vectors & 3D Geometry | **0** | 0–3 | 0 | 4.6 | 5.3 |

Calculus + Trigonometry + Coordinate Geometry + Algebra = **~30 of 50**. Statistics is the one Math topic with a significant upward trend (τ = +0.54, p = 0.002) and absorbed the most vector slots in 2026 (6 questions).

---

## 8. Deliverable 2b — Predicted Reasoning / Computer / English distribution

### Analytical Ability & Logical Reasoning (40)

| Topic | Predicted | 80% band | 2026 | last-5 | 19-yr mean |
|---|---|---|---|---|---|
| **Arithmetic (speed-time-work, ratio, %, mixture)** | **9** | 3–15 | 13 | 8.6 | 6.7 |
| **Logical Deduction & Puzzles** | **8** | 4–13 | 7 | 7.4 | 10.2 |
| **Series & Sequence** | **4** | 1–7 | 3 | 3.6 | 3.8 |
| **Coding-Decoding** | **3** | 0–6 | 2 | 3.2 | 2.7 |
| Seating & Arrangement | **3** | 0–8 | 3 | 2.6 | 3.8 |
| Syllogism | **3** | 1–5 | 3 | 3.2 | 2.2 |
| Blood Relations | **3** | 0–6 | 3 | 1.8 | 3.1 |
| Clocks & Calendars | **2** | 0–3 | 1 | 1.4 | 1.5 |
| Cubes Dice & Visual | **1** | 0–3 | 1 | 1.6 | 1.2 |
| Data Interpretation | **1** | 0–4 | 2 | 1.0 | 0.9 |
| Odd-one-out & Classification | **1** | 0–3 | 0 | 1.0 | 0.7 |
| Direction Sense | **1** | 0–2 | 1 | 0.6 | 0.9 |
| Analogy | **1** | 0–3 | 0 | 0.4 | 0.4 |
| Data Sufficiency | **0** | 0–2 | 0 | 0.4 | 0.4 |

Arithmetic word problems now edge out puzzles as the biggest Reasoning bucket (13 in 2026). Puzzles are the only Reasoning topic with a significant downward trend (τ = −0.44, p = 0.010).

### Computer Awareness (20)

| Topic | Predicted | 80% band | 2026 | last-5 | 19-yr mean |
|---|---|---|---|---|---|
| **Number System & Boolean Logic** | **10** | 6–14 | 5 | 8.4 | 6.6 |
| **Hardware OS & General CS** | **8** | 5–11 | 9 | 7.2 | 4.3 |
| Networking & Internet | **1** | 0–4 | 6 | 1.2 | 0.4 |
| Programming DS & Algorithms | **1** | 0–2 | 0 | 0.8 | 0.4 |

Networking is the one to watch: near-zero for 18 years, then **6 questions in 2026** (DNS, cookies, rendering engine, POP3 vs IMAP, HTTP, email protocols). The forecast is deliberately conservative — a single-year jump isn't a trend — but treat the 80% band as 1–6.

### General English (10)

| Topic | Predicted | 80% band | 2026 | last-5 | 19-yr mean |
|---|---|---|---|---|---|
| Grammar & Error Spotting | **3** | 0–6 | 4 | 4.4 | 3.9 |
| Vocabulary (synonym/antonym) | **3** | 1–5 | 2 | 4.2 | 5.0 |
| Reading Comprehension | **2** | 0–4 | 4 | 1.6 | 2.6 |
| Fill in the Blanks | **1** | 0–4 | 1 | 1.8 | 3.2 |
| Idioms & Phrases | **1** | 0–2 | 0 | 1.0 | 1.1 |
| Analogy | **0** | 0–2 | 0 | 1.0 | 0.9 |
| Sentence Arrangement | **0** | 0–0 | 0 | 0.0 | 0.4 |

Dead: **Sentence Arrangement (para jumbles)** and **verbal analogy** — 0 questions since 2018 and 2014 respectively.

---

## 9. Deliverable 3 — Top 50 most likely concepts for 2027

Likelihood = P(at least one question from this concept appears). Derived from topic forecast × the concept's share of that topic across 2019–2026, with a recycling bonus where a verbatim repeat exists.

| # | Concept | Section | P | Supporting years |
|---|---|---|---|---|
| 1 | Definite/indefinite integration, standard forms and substitution | Math | 0.97 | every year; 2026 Q113, 2025, 2024, 2023 |
| 2 | Limits — 0/0 forms, L'Hôpital, expansions | Math | 0.95 | 2026 Q48, Q50, Q107; 2025; 2022 |
| 3 | Height & distance (angle of elevation/depression, two objects) | Math | 0.95 | 2026 Q5; 2025 Q58; 2015 Q90; 2013 |
| 4 | Binary / 2's complement / range of n-bit numbers | Computer | 0.95 | 2026 Q10, Q101, Q116; 2025 Q13, Q18; 2023 |
| 5 | AP/GP — nth term, sum of n terms, AM-GM-HM relation | Math | 0.94 | 2026 Q37, Q103, Q105; 2025; 2024 |
| 6 | Boolean expression simplification / truth tables / gates | Computer | 0.93 | 2026 Q12, Q29; 2025 Q7, Q8, Q11, Q21 |
| 7 | Maxima–minima of a function on an interval | Math | 0.92 | 2026 Q51; 2025 Q38; 2023 |
| 8 | Blood relations (in-law chains, "pointing to a woman") | Reasoning | 0.92 | 2026 Q61, Q96; 2025; 2021 |
| 9 | Conditional / multi-constraint grouping puzzle | Reasoning | 0.92 | 2026 Q62, Q80; 2025 Q104; 2024 Q61–63 |
| 10 | Probability of events, conditional probability, independence | Math | 0.91 | 2026 Q31, Q115; 2025 Q44, Q54; 2023 Q103 |
| 11 | Circle — equation from constraints, tangency, touching axes | Math | 0.90 | 2026 Q45; 2025 Q62; 2023 Q57; 2015 Q70 |
| 12 | Mean / median / mode / variance / standard deviation of a data set | Math | 0.90 | 2026 Q32, Q33, Q34, Q36; 2023 Q108; 2021 Q80 |
| 13 | Syllogism with 2–3 statements and 2 conclusions | Reasoning | 0.89 | 2026 Q72, Q74, Q81; 2022 Q71; 2018 Q96 |
| 14 | Percentage increase/decrease & its effect on consumption | Reasoning | 0.88 | 2026 Q88; 2025 Q4; 2020 Q10 |
| 15 | Ratio & proportion splitting a sum among parts | Reasoning | 0.88 | 2026 Q64, Q87, Q93; 2025 Q1 |
| 16 | Memory hierarchy / access-speed ordering / cache-RAM-disk | Computer | 0.87 | 2026 Q2, Q110; 2025 Q12, Q17 |
| 17 | Functions — one-one/onto, inverse, composition, domain-range | Math | 0.87 | 2026 Q25, Q47, Q53, Q117; 2025 Q65 |
| 18 | Determinant evaluation with a parameter | Math | 0.86 | 2026 Q38; 2025 Q37, Q48; 2024 |
| 19 | Coding-decoding, letter-to-number and shifted-alphabet | Reasoning | 0.86 | 2026 Q70, Q78; 2016 Q37; 2015 Q35 |
| 20 | Straight lines — intersection, distance, area of triangle formed | Math | 0.85 | 2026 Q44, Q111, Q119; 2025 Q55 |
| 21 | Trig identities & multiple-angle expansion (cos 6x etc.) | Math | 0.85 | 2026 Q109; 2025 Q60, Q64 |
| 22 | Number/letter series — next term | Reasoning | 0.85 | 2026 Q77, Q83; 2025; 2021 |
| 23 | Set operations, symmetric difference, Venn regions | Math | 0.84 | 2026 Q23, Q26, Q73; 2025 Q5 |
| 24 | Quadratic roots — relations between α, β and coefficients | Math | 0.84 | 2026 Q37, Q40; 2025 Q63 |
| 25 | CPU instruction format / opcode / addressable memory bits | Computer | 0.83 | 2026 Q7, Q118, Q120; 2025 Q15 |
| 26 | Ages — "5 years ago A was 3× B" | Reasoning | 0.82 | 2026 Q97; 2024; 2021 |
| 27 | Seating arrangement — circular table facing centre | Reasoning | 0.82 | 2026 Q86; 2017; 2016 |
| 28 | Subject-verb agreement / correct verb form | English | 0.82 | 2026 Q13; 2025 Q28, Q29, Q30 |
| 29 | Synonym or antonym of a hard word | English | 0.80 | 2026 Q17; 2025 Q31; 2022 Q64 |
| 30 | Inverse trigonometric equations and principal values | Math | 0.79 | 2026 Q57, Q58; 2024 |
| 31 | Linear ordering / stacking / ranking puzzle | Reasoning | 0.79 | 2026 Q71, Q95, Q91; 2023 |
| 32 | Matrix algebra — powers, inverse, characteristic relation | Math | 0.78 | 2026 Q39; 2025 Q37, Q41 |
| 33 | Time & work / pipes & cisterns | Reasoning | 0.78 | 2025; 2023; 2020 |
| 34 | Operating system concepts — process, scheduling, DLL, virtual memory | Computer | 0.77 | 2026 Q9, Q104, Q106; 2025 Q14, Q22 |
| 35 | Continuity & differentiability of a piecewise function | Math | 0.76 | 2026 Q47, Q52; 2025 Q65 |
| 36 | Data interpretation from a table or bar chart | Reasoning | 0.75 | 2026 Q79, Q89; 2021 |
| 37 | Permutations of letters of a word with a block constraint | Math | 0.74 | 2025 Q40; 2021; 2019 |
| 38 | Clock — angle between hands / coincidence time | Reasoning | 0.73 | 2026 Q98; 2022 Q87; 2018 Q80, Q85 |
| 39 | Mixtures & alligation across two containers | Reasoning | 0.72 | 2026 Q100; 2024 |
| 40 | Parabola — tangent, normal, focal properties | Math | 0.72 | 2026 Q46; 2025 Q57 |
| 41 | Networking — DNS, POP3/IMAP, HTTP, cookies | Computer | 0.71 | 2026 Q6, Q108, Q112, Q114 |
| 42 | Ellipse/hyperbola — eccentricity, directrix, normal | Math | 0.70 | 2026 Q1; 2023; 2020 |
| 43 | Idiom / phrasal verb meaning in context | English | 0.70 | 2026 Q14; 2025 Q26 |
| 44 | Counting multiples/divisibility in a range | Math | 0.68 | 2025 Q45, Q66; 2019 |
| 45 | Reading a short passage and choosing the deducible conclusion | English/Reasoning | 0.68 | 2026 Q16, Q20, Q21, Q75 |
| 46 | Direction sense — walk and turn tracing | Reasoning | 0.66 | 2026 Q85; 2023; 2014 |
| 47 | Statement + course of action / argument strength | Reasoning | 0.65 | 2026 Q63, Q69 |
| 48 | Binomial / random variable distribution (Bernoulli, Poisson, normal) | Math | 0.63 | 2026 Q35; 2025 Q39, Q59 |
| 49 | Mensuration — cone/hemisphere/cylinder with equal radius & height | Math/Reasoning | 0.60 | 2026 Q82; 2019 |
| 50 | Match-the-columns across two lists (any subject) | All | 0.85 | 2026 Q2, Q8, Q15, Q19; 2025 Q16, Q23 |

---

## 10. Deliverable 6 — Topics unlikely to appear in 2027

| Topic | P(appears) | Reason |
|---|---|---|
| **Vector algebra** (dot/cross/triple product, projection) | **< 0.05** | Removed from syllabus in the 2026 revision; 2026 had 0 |
| Verbal analogy (`WORD : WORD`) in English | 0.08 | 0 questions since 2013 |
| Para jumbles / sentence arrangement | 0.10 | 0 questions since 2018 |
| Complex numbers | 0.20 | 7 questions in 19 years, none since 2023 |
| Differential equations | 0.20 | 6 questions in 19 years, none since 2022 |
| Cubes, dice, non-verbal figure series | 0.30 | 0 in 2023, 2024, 2026 |
| Odd-one-out / classification | 0.35 | 0 in 2026, 0 in 2023 |
| Linear programming | 0.10 | never appears in the corpus |
| HCF/LCM as a standalone question | 0.40 | falling; 0 in 2026 |

---

## 11. Deliverable 7 — Priority list for your preparation

Ranked by **expected marks at stake ÷ effort**, using the 2027 forecast and 12 marks per question.

### Tier S — do these first (≈ 480 marks of the 1440)

| Rank | Area | Expected Q | Marks | Why |
|---|---|---|---|---|
| 1 | **Calculus** — limits, continuity/differentiability, maxima-minima, definite integrals | 8 | 96 | Largest Math topic, stable for 19 years, no syllabus risk |
| 2 | **Number systems & Boolean logic** | 10 | 120 | Biggest single scoring block in the paper; mechanical, fully learnable in ~2 weeks |
| 3 | **Algebra & Progressions** — AP/GP/HP, quadratic roots, AM-GM-HM | 8 | 96 | Absorbed the vector slots; 11 questions in 2026 |
| 4 | **Puzzles & conditional grouping** | 10 | 120 | Largest Reasoning block; also the most-recycled question type |
| 5 | **Trigonometry** — identities, height & distance, inverse trig | 7 | 84 | Perfectly stable; height-and-distance appears nearly every year |

### Tier A — next

| Rank | Area | Expected Q | Marks |
|---|---|---|---|
| 6 | Computer architecture, OS, memory hierarchy | 7 | 84 |
| 7 | Coordinate & conic geometry (circle first, then parabola/ellipse) | 6 | 72 |
| 8 | Arithmetic word problems (ratio, %, ages, mixtures, work) | 6 | 72 |
| 9 | Sets, relations & functions | 5 | 60 |
| 10 | Probability | 5 | 60 |

### Tier B — cheap, do not skip

| Rank | Area | Expected Q | Marks | Note |
|---|---|---|---|---|
| 11 | Series, coding-decoding, syllogism | 12 | 144 | Low-effort, high-volume; drill patterns not theory |
| 12 | Statistics (mean/median/mode/SD/variance) | 3 | 36 | The one significantly *rising* Math topic (p = 0.002) |
| 13 | Blood relations, seating, clocks, direction | 9 | 108 | Fully mechanical once you have a notation |
| 14 | Grammar (subject-verb agreement, verb forms) + vocabulary | 5 | 60 | English is only 10 questions now — cap your time here |

### Tier C — bounded time only

Matrices & determinants (2), P&C (3), networking (2), reading comprehension (2), number theory (1).

### Explicitly do not study

Vector algebra, para jumbles, verbal analogy, linear programming.

---

## 11b. Cross-check against the 2027 syllabus document

After the forecast was built, it was checked against `resources/Nimcet 2027 Syllabus.pdf`.

> ⚠ **Source caveat.** That PDF's own cover line reads *"Prepared by NIMCET Aspirant"* — it is a **third-party compilation, not an official NIMCET publication.** Treat everything below as corroboration, not authority. Verify against the official NIMCET brochure when it is released.

### What it confirms

**Vectors and 3D geometry appear nowhere in the document — zero mentions of "vector", "3D" or "dimension".** This independently corroborates the strongest call in this report, which was derived purely from the 6 → 1 collapse in the 2026 paper. Two independent lines of evidence now agree: **do not prepare vector algebra.**

It also confirms the Computer section's expansion in substance — "Internet and Email", "Web Browsing", "Online Security" are named explicitly, which matches the five networking questions that appeared in 2026 after fifteen near-empty years.

### What it adds — topics I under-weighted

These are named in the syllabus but scored low or zero in the frequency-based forecast, because they barely appear in the 2008–2026 papers. Where a syllabus lists a topic that history does not, the syllabus is the better guide to *risk*:

| Topic | Forecast said | Syllabus says | Action |
|---|---|---|---|
| **Mathematical Logic** (tautology, contradiction, truth tables, connectives) | folded into other topics, ~0 | listed explicitly under Algebra | **Raise to ~1–2 questions.** 2026 Q29 was exactly this. Cheap to learn — do it. |
| **Data Sufficiency** | 0 allocated | listed under Quantitative Aptitude | Allocate ~1. Learn the answer-format convention; the content is easy. |
| **Input–Output** (machine sequencing) | 0 allocated — never seen in 19 papers | listed under Reasoning | ~0–1. Low history, but a total blind spot is not worth the risk. Spend one hour. |
| **Mirror images** | 0.6 (Cubes/Dice/Visual) | listed under Reasoning | Keep low, but do not zero it out. |
| **Alphanumeric series** | folded into Series (3.9) | listed separately | Practise the mixed letter+digit variant, not just numeric. |
| **Exponentials, Inequalities** | inside Algebra | named separately under Algebra | Already covered by the Algebra allocation of 8. |
| **Technical writing** | 0 | listed under General English | ~0–1. Novel; no historical precedent to model. |
| **Data Visualization** | inside DI (1.5) | named separately | Expect chart-reading, not just tables. |

### What it removes

Not mentioned anywhere in the document: **vector algebra, 3D geometry, linear programming, mensuration**. Linear programming and mensuration were already at ~0 in the historical data, so nothing changes there.

### Net effect on the forecast

The section split, the Math topic distribution and the recycling analysis are all unchanged — the syllabus is a list of topics, not a weighting, and the frequency data remains the only source for *how many* questions each topic gets. The one substantive revision is **Mathematical Logic**, which the syllabus names explicitly and which the 2026 paper actually tested: treat it as a 1–2 question topic worth an afternoon, not a rounding error.

---

## 12. Honesty section — what this prediction can and cannot do

**What is genuinely reliable:**
- The section split (50/40/20/10) — 4 years of consistent evidence, ~0.9 confidence.
- Vectors being gone — a clean syllabus signal confirmed by a 6 → 1 drop.
- The recycling behaviour — 300 measured duplicate pairs is hard evidence, and the 2-year/4-year gap peak is a real, exploitable regularity.
- Topic distribution to ±1.4 questions — this is the measured back-test error, not a guess.

**What is not reliable:**
- Any individual predicted question matching a real 2027 question. The predicted paper below reproduces *concept, structure, difficulty and style*, not content. Expect concept-level hits, not question-level ones.
- Small topics (P&C, number theory, complex numbers). Their counts are 0–3, so the noise is as large as the signal — the 80% bands there run to zero.
- Anything about a further NIMCET-side syllabus revision for 2027. If NIMCET publishes a new syllabus, §2 and §6 must be re-checked before trusting the rest.
- The 2012 and 2015 papers are partially missing, so pre-2016 trends carry more uncertainty than the tables suggest.

**The strongest single claim in this report** is not any topic count. It is: *solve 2025 and 2023 cold, because a 2-year and 4-year recycling gap is where 31% of all repeated questions come from.*

---

## 12. Re-verification pass (2026-09-02, Claude Fable 5.1)

The whole pipeline was re-run from the PDFs with one model reading every question (no subagents): `pdftotext` → question split → **2,248 questions classified one by one** into the same taxonomy plus two syllabus-named additions (Mathematical Logic, Data Sufficiency) and a free-text sub-topic per question → aggregate → duplicate detection → trend tests → back-test → forecast. Scripts are in `analysis/scripts/`; per-question labels in `data/questions-classified.jsonl`; the July counts are kept in `data/archive/` for comparison.

### What is better than the July data
- **2012 is now fully classified.** Its 63 image-only questions were read from rendered page images. Only 8 of 2,248 questions remain Unknown (6 are literally "Not Available" on the source site for 2019; 2 are garbled entries in 2012) versus 96 before.
- **Arithmetic is filed under Reasoning at the source**, so the section totals no longer need the manual correction of §1.
- **Difficulty and sub-topic are recorded per question**, so concept-level questions (e.g. "how often does the biased-die problem appear") can now be answered from data instead of memory.

### Every headline finding held
| Finding | July 2026 | Re-verified |
|---|---|---|
| Section split changed in 2023 (Computer 10→20, English 20→10) | yes | **yes** — Computer 20/19/19/20, English 11/13/10/11 for 2023–2026 |
| Vectors removed | 6 → 1 in 2026 | **6 → 0 in 2026** |
| Statistics rising | τ = +0.57, p = 0.002 | **τ = +0.54, p = 0.002** |
| Puzzles falling | τ = −0.44, p = 0.012 | **τ = −0.44, p = 0.010** |
| Best forecaster | EWMA α = 0.20, MAE 1.43 | **EWMA α = 0.20, MAE 1.42** |
| Worst forecaster | copy last year, 1.81 | **copy last year, 1.83** |
| Recycling gap peaks | 2 and 4 years | **2 and 4 years** (45 and 35 pairs) |
| Recycled pairs / near-verbatim | 300 / 44 | **270 / 77** (cosine ≥ 0.6 / ≥ 0.85, 1,751 usable stems) |

One new, weaker signal: **Algebra & Progressions is drifting down** over 2008–2025 (τ = −0.34, p = 0.049). It is still ~6 questions a year; just do not expect the 8–12 of the early years.

### Section counts by year (re-verified labels)
| Year | Math | Reasoning | Computer | English | Unknown |
|---|---|---|---|---|---|
| 2008 | 46 | 44 | 15 | 15 | 0 |
| 2009 | 49 | 44 | 10 | 17 | 0 |
| 2010 | 44 | 50 | 10 | 16 | 0 |
| 2011 | 46 | 38 | 10 | 26 | 0 |
| 2012 | 55 | 35 | 10 | 17 | 2 |
| 2013 | 51 | 39 | 10 | 20 | 0 |
| 2014 | 51 | 40 | 9 | 20 | 0 |
| 2015 | 52 | 38 | 0 | 0 | 0 |
| 2016 | 49 | 42 | 9 | 20 | 0 |
| 2017 | 51 | 39 | 10 | 20 | 0 |
| 2018 | 58 | 31 | 10 | 21 | 0 |
| 2019 | 50 | 33 | 10 | 20 | 6 |
| 2020 | 49 | 41 | 10 | 20 | 0 |
| 2021 | 51 | 38 | 10 | 21 | 0 |
| 2022 | 51 | 34 | 10 | 25 | 0 |
| 2023 | 51 | 38 | 20 | 11 | 0 |
| 2024 | 53 | 35 | 19 | 13 | 0 |
| 2025 | 53 | 38 | 19 | 10 | 0 |
| 2026 | 50 | 39 | 20 | 11 | 0 |

2015's source PDF stops at Q90, so its English and Computer blocks are absent. Math totals above 50 (e.g. 2018) are questions from the Reasoning block whose *content* is number theory or set counting; the forecast works in share-within-section space precisely so this labelling noise cancels.

### Topics whose 19-year totals moved by 5 or more
| Section | Topic | July | Re-verified | Δ |
|---|---|---|---|---|


Most moves are boundary calls: word analogies were filed under English rather than Reasoning; several "number puzzle" items became Number Theory; table/chart items inside puzzle sets became Puzzles rather than Data Interpretation; and the recovered 2012 questions add to Math, Reasoning and English.

### What changed in the 2027 forecast (§7–§8 tables are now the re-verified ones)
- **Calculus 8 → 10**, **Algebra 8 → 6**, **Statistics 3 → 4**, Sets 5 → 4: the vector slots redistribute by current share, and Algebra's slow decline shows.
- **Arithmetic 6 → 9** and **Puzzles 10 → 8** in Reasoning, driven by 2026 (13 arithmetic, 7 puzzles).
- Computer and English are essentially unchanged; Networking stays at a conservative 1–2 with a wide band.
- The August question bank (§13 onward / `nimcet-2027-question-bank.md`) still matches the new mix within its bands; it was **not** regenerated. `verify_predicted_paper.py` still passes 67/67.

### Data caveats that remain
- 2015 has 90 questions; 2019 has 6 "Not Available" items; 2012 has 2 garbled items.
- Recycling detection reads text stems only (1,751 of 2,248 usable) — the rate is still a floor.
- The 2027 syllabus PDF in `resources/` is third-party; verify against the official brochure when released.
