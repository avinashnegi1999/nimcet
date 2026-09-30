# Analysis: the numbers behind the plan

How 19 papers became the 2027 forecast, and how far to trust it.

| Page | What it answers |
|---|---|
| **This page** | What will 2027 ask, topic by topic? How good is the forecast? |
| **[Topic tables](topics.md)** | How often was each topic asked from 2008 to 2026? |
| **[Chapter forecast](chapter-forecast.md)** | What is the chance of each 2027-syllabus chapter appearing? |
| **Audits** | What was checked, and what was corrected? [2026-09-30](audits/2026-09-30.md) · [2026-09-23](audits/2026-09-23.md) |

Code: [scripts/](../scripts/README.md) · Data: [data/](../data/) · The full August report, with its July tables: [archive](../archive/forecast-report-2026-08.md)

---

## 1. In brief

- **The split is 50 / 40 / 20 / 10.** Math, Reasoning, Computer, English. It has held for four papers, since 2023.
- **Vectors are gone.** They had 3–8 questions a paper for 18 years and 0 in 2026. The [official syllabus](../syllabus/nimcet-syllabus-official-2026.pdf) does not list them.
- **The forecast is accurate to about ±1.44 questions per topic,** measured by back-testing on 2015–2026.
- **Only one topic is trending: Statistics, which is rising.** Everything else is noise around a stable average.
- **Re-use has almost stopped.** 15% of the 2023 paper was re-used, against 0.8% of the 2026 paper.

---

## 2. The section split

| Papers | Math | Reasoning | Computer | English |
|---|---:|---:|---:|---:|
| 2008–2022 | 50 | 40 | **10** | **20** |
| 2023–2026 | 50 | 40 | **20** | **10** |

- **Computer is now worth twice English.** It is also the most mechanical block to learn.
- **Arithmetic is in Reasoning.** Ratio, percentages, ages, mixtures and work problems sit in the Reasoning block. This was checked by reading 2026 Q64–Q100. Arithmetic practice is Reasoning practice.

---

## 3. Vectors are gone

| Year | Vectors & 3D Geometry questions |
|---|---|
| 2021 | 7 |
| 2022 | 5 |
| 2023 | 6 |
| 2024 | 6 |
| 2025 | 6 (2025 Q35, Q47, Q50, Q52, Q53 are explicit vector questions) |
| 2026 | **0** |

The count fell from 3–8 a year (mean 5.6, 2008–2025) to 0. That is a syllabus deletion, not noise. The official revised syllabus (in force from 2026) confirms it.

**Where the slots may have gone.** This is from one paper only, so treat it as a hint:

| Topic | 2021–25 mean | 2026 | Δ |
|---|---|---|---|
| Statistics | 3.4 | 6 | +2.6 |
| Sets, Relations & Functions | 3.8 | 6 | +2.2 |
| Algebra & Progressions | 5.2 | 7 | +1.8 |
| Trigonometry | 7.4 | 8 | +0.6 |

---

## 4. The 2027 forecast, topic by topic

**Method.** Each topic's share of its section is averaged over all papers, with recent papers weighted more (EWMA, α = 0.20). That share is multiplied by the section size. Vectors are set to zero. **Computer** uses only the 20-question papers (2023–2026). **80% range** = the forecast ± 1.7 × the topic's past forecast error. It held the real count 80% of the time on 2019–2026.

### Math (50)

| Topic | Predicted | 80% range | 2026 actual | last-5 mean | 19-yr mean |
|---|---|---|---|---|---|
| **Calculus** | **10** | 6–13 | 9 | 9.6 | 8.4 |
| **Trigonometry** | **8** | 4–12 | 8 | 7.4 | 7.0 |
| **Coordinate & Conic Geometry** | **7** | 4–10 | 6 | 6.6 | 6.1 |
| **Algebra & Progressions** | **6** | 3–9 | 7 | 5.4 | 6.2 |
| **Probability** | **5** | 2–7 | 3 | 4.6 | 4.6 |
| **Sets Relations & Functions** | **4** | 3–6 | 6 | 4.4 | 3.1 |
| **Statistics** | **4** | 2–6 | 6 | 4.0 | 2.4 |
| Permutation & Combination | **3** | 0–6 | 1 | 1.8 | 3.6 |
| Matrices & Determinants | **2** | 1–4 | 3 | 2.0 | 2.2 |
| Number Theory (HCF/LCM/divisibility) | **1** | 0–2 | 0 | 0.6 | 1.2 |
| Mathematical Logic | **0** | 0–1 | 1 | 0.4 | 0.1 |
| Complex Numbers | **0** | 0–1 | 0 | 0.2 | 0.2 |
| Differential Equations | **0** | 0–1 | 0 | 0.0 | 0.2 |
| Vectors & 3D Geometry | **0** | 0–4 | 0 | 4.6 | 5.3 |

Calculus, Trigonometry, Coordinate geometry and Algebra together make up about 30 of the 50.

### Reasoning (40)

| Topic | Predicted | 80% range | 2026 | last-5 | 19-yr mean |
|---|---|---|---|---|---|
| **Arithmetic (speed-time-work, ratio, %, mixture)** | **9** | 1–17 | 13 | 8.6 | 6.7 |
| **Logical Deduction & Puzzles** | **8** | 3–14 | 7 | 7.4 | 10.2 |
| **Series & Sequence** | **4** | 0–8 | 3 | 3.6 | 3.8 |
| **Coding-Decoding** | **3** | 0–7 | 2 | 3.2 | 2.7 |
| Seating & Arrangement | **3** | 0–9 | 3 | 2.6 | 3.8 |
| Syllogism | **3** | 0–6 | 3 | 3.2 | 2.2 |
| Blood Relations | **3** | 0–7 | 3 | 1.8 | 3.1 |
| Clocks & Calendars | **2** | 0–3 | 1 | 1.4 | 1.5 |
| Cubes Dice & Visual | **1** | 0–4 | 1 | 1.6 | 1.2 |
| Data Interpretation | **1** | 0–5 | 2 | 1.0 | 0.9 |
| Odd-one-out & Classification | **1** | 0–3 | 0 | 1.0 | 0.7 |
| Direction Sense | **1** | 0–2 | 1 | 0.6 | 0.9 |
| Analogy | **1** | 0–4 | 0 | 0.4 | 0.4 |
| Data Sufficiency | **1** | 0–2 | 0 | 0.4 | 0.4 |

Arithmetic word problems now edge out puzzles as the biggest Reasoning block (13 in 2026).

### Computer (20)

| Topic | Predicted | 80% range | 2026 | last-5 | 19-yr mean |
|---|---|---|---|---|---|
| **Hardware OS & General CS** | **8.7** | 5–13 | 9 | 7.2 | 4.3 |
| **Number System & Boolean Logic** | **8.7** | 4–14 | 5 | 8.4 | 6.6 |
| Networking & Internet | **1.5** | 0–5 | 6 | 1.2 | 0.4 |
| Programming DS & Algorithms | **1.1** | 0–3 | 0 | 0.8 | 0.4 |

- **Shown to one decimal,** so the section adds up to 20.
- **Why only 2023+ papers.** Using all 19 papers over-predicted number systems in every paper since 2023 (13.1, 12.9, 12.2 and 11.5 predicted against 12, 9, 8 and 5 asked).
- **Internet & email is the one to watch.** It had 6 questions in 2026, the first paper under the new syllabus, which also names online security. The forecast stays at 1.5, but treat 0–6 as realistic.

### English (10)

| Topic | Predicted | 80% range | 2026 | last-5 | 19-yr mean |
|---|---|---|---|---|---|
| Grammar & Error Spotting | **3** | 0–7 | 4 | 4.4 | 3.9 |
| Vocabulary (synonym/antonym) | **3** | 0–6 | 2 | 4.2 | 5.0 |
| Reading Comprehension | **2** | 0–5 | 4 | 1.6 | 2.6 |
| Fill in the Blanks | **1** | 0–5 | 1 | 1.8 | 3.2 |
| Idioms & Phrases | **1** | 0–3 | 0 | 1.0 | 1.1 |
| Analogy | **0** | 0–2 | 0 | 1.0 | 0.9 |
| Sentence Arrangement | **0** | 0–1 | 0 | 0.0 | 0.4 |

Para jumbles have had no questions since 2018. Verbal analogy is not in the syllabus, but it appeared in 2021, 2022 and 2024, so keep it low priority rather than zero.

---

## 5. How good is the forecast?

Each method predicted each paper from 2015 to 2026 using only earlier papers and the official section sizes. The error is in questions per topic.

| Method | Average error |
|---|---:|
| **EWMA α = 0.20, Computer from 2023+ papers (selected)** | **1.437** |
| EWMA α = 0.20 | 1.450 |
| Mean of the last 5 papers | 1.451 |
| Mean of all papers | 1.466 |
| EWMA α = 0.35 | 1.469 |
| EWMA α = 0.50 | 1.527 |
| Same as last year | 1.845 |

- **The averages tie.** EWMA, the last-5 mean and the all-papers mean differ by less than the noise (−0.001 ± 0.024 over 457 predictions).
- **Copying last year is clearly worst.** Weight 2026 more, but do not copy it.
- **Computer is the one real gain.** On 2024–2026, the 2023+ mean scores 1.97 against 2.45 for the all-papers average.

---

## 6. Trends

39 topics were tested (Mann-Kendall, 2008–2026), and the results were corrected for testing so many at once (Benjamini–Hochberg).

- **Statistics is rising.** τ = +0.65, corrected q = 0.011. This is the only trend that holds up.
- **Puzzles look like they are falling,** but the trend does not survive the correction (q = 0.13).
- **Everything else is flat.** That is why averaging methods beat trend-following ones.

---

## 7. Re-used questions

Every flagged pair was read by hand. 209 pairs were confirmed, covering 134 re-used questions.

| Paper | 2019 | 2020 | 2021 | 2022 | 2023 | 2024 | 2025 | 2026 |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| Share re-used | 10.1% | 11.7% | 11.7% | 14.2% | 15.0% | 8.3% | 2.5% | **0.8%** |

- **Re-use was real, and it has nearly stopped.** Solve recent papers for their style and difficulty, not to spot repeats.
- **No gap between papers stands out.** Counted once per re-use, gaps of 1, 2 and 4 years are about equally common.
- **Whole puzzle sets were lifted intact.** Examples:

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

The best-known ones are solved in [re-used questions, solved](../3-practice/reused-questions-solved.md).

---

## 8. The 50 most likely concepts

P = the chance that at least one question on the concept appears. **These P values were set by judgement and were never back-tested,** so read them as an ordering, not as probabilities. For back-tested chances, see the [chapter heat map](../syllabus-2027-heatmap.html).

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

## 9. Unlikely in 2027

| Topic | P(appears) | Reason |
|---|---|---|
| **Vector algebra** (dot/cross/triple product, projection) | **< 0.05** | Removed from syllabus in the 2026 revision; 2026 had 0 |
| Verbal analogy (`WORD : WORD`) in English | 0.30 | not in the 2027 syllabus, but 1–3 questions in 2021, 2022 and 2024 |
| Para jumbles / sentence arrangement | 0.10 | 0 questions since 2018 |
| Complex numbers | 0.20 | 4 questions in 19 years (re-verified labels), none since 2023 |
| Differential equations | 0.20 | 4 questions in 19 years (re-verified labels), none since 2022 |
| Cubes, dice, non-verbal figure series | 0.60 | 1–3 a year recently (1 in 2023, 2 in 2024, 1 in 2026) — the earlier "0" was wrong |
| Odd-one-out / classification | 0.35 | 0 in 2026, 0 in 2023 |
| Linear programming | 0.10 | never appears in the corpus |
| HCF/LCM as a standalone question | 0.40 | falling; 0 in 2026 |

---

## 10. What the syllabus adds

The syllabus names these topics, but they are rare in past papers. When history is silent, the syllabus is the better guide to risk.

| Topic | Forecast said | Syllabus says | Action |
|---|---|---|---|
| **Mathematical Logic** (tautology, contradiction, truth tables, connectives) | folded into other topics, ~0 | listed explicitly under Algebra | **Raise to ~1–2 questions.** 2026 Q29 was exactly this. Cheap to learn — do it. |
| **Data Sufficiency** | 0 allocated | listed under Quantitative Aptitude | Allocate ~1. Learn the answer-format convention; the content is easy. |
| **Input–Output** (machine sequencing) | 0 allocated — never seen in 19 papers | listed under Reasoning | ~0–1. Low history, but a total blind spot is not worth the risk. Spend one hour. |
| **Mirror images** | 0.6 (Cubes/Dice/Visual) | listed under Reasoning | Keep low, but do not zero it out. |
| **Alphanumeric series** | folded into Series (3.9) | listed separately | Practise the mixed letter+digit variant, not just numeric. |
| **Exponentials, Inequalities** | inside Algebra | named separately under Algebra | Already covered by the Algebra allocation of 6. |
| **Technical writing** | 0 | listed under General English | ~0–1. Novel; no historical precedent to model. |
| **Data Visualization** | inside DI (1.5) | named separately | Expect chart-reading, not just tables. |

**Removed by the syllabus:** vector algebra, 3D geometry, linear programming and mensuration. The last two were already near 0.

---

## 11. Limits

**Reliable:**
- The 50/40/20/10 split (four papers in a row).
- Vectors being gone (the data and the official syllabus agree).
- Topic counts to about ±1.44 questions.

**Not reliable:**
- **Individual questions.** The mock paper predicts concepts and styles, not exact questions.
- **Small topics** (P&C, number theory, complex numbers). Their counts are 0–3, so the noise is as big as the signal.
- **Anything after a new syllabus change.** If NIMCET revises the syllabus again, re-check the split and the vectors call first.
- **Pre-2016 trends.** The 2012 and 2015 sources are incomplete.

---

## 12. Data notes

- **2,248 questions** (120 a paper; 2015 = 90, 2012 = 119, 2019 = 119).
- **2015** stops at Q90, so it has no Computer or English questions.
- **2019** has 6 questions marked "Not Available".
- **2012** has 2 garbled entries, and its Q63 is a broken image.
- **Five questions are printed twice in one paper** (2012 Q117–120 = Q26–29, 2018 Q85 = Q80). The forecast counts each once.
- **Labels are by content.** A number-theory question printed in the Reasoning block counts as Math. That is why the section totals below differ from 50/40/20/10. The forecast works on shares within each section, so this noise cancels out.

**Questions per section, by paper** (labels by content):

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
