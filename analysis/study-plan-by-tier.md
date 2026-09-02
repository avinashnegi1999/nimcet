# What to Study, in Order — Chapter by Chapter
Every tier opened into its chapters. Inside each chapter the question forms are listed one per line, the most-repeated ones first, with the paper years they appeared in. Read a chapter, then solve those exact forms from the PYQ papers.
The tier table on the [forecast page](https://avinashnegi1999.github.io/nimcet/forecast.html) says *which areas* matter. This page opens each area into the **chapters and question-types that have actually been asked**, taken from the sub-topic label on every one of the 2,248 classified questions (`data/questions-classified.jsonl`). Counts are over 19 papers; ★ marks the forms that come back nearly every year — do those first inside each chapter.
Forecast numbers are the 2026-09-02 re-verified ones. 12 marks per question, −3 per wrong answer.

&nbsp;

| Priority | Area | 2027 Q | Marks | Page section |
|:---:|---|:---:|:---:|---|
| Tier S | Number systems & Boolean logic | 10 | 120 | [S1](#s1-number-systems--boolean-logic--10-q) |
| Tier S | Calculus | 10 | 120 | [S2](#s2-calculus--10-q) |
| Tier S | Arithmetic word problems (Reasoning section) | 9 | 108 | [S3](#s3-arithmetic-word-problems--9-q) |
| Tier S | Logical puzzles & conditional grouping | 8 | 96 | [S4](#s4-logical-puzzles--conditional-grouping--8-q) |
| Tier S | Trigonometry | 8 | 96 | [S5](#s5-trigonometry--8-q) |
| Tier A | Computer architecture, OS & memory | 8 | 96 | [A1](#a1-computer-architecture-os--memory--8-q) |
| Tier A | Coordinate & conic geometry | 7 | 84 | [A2](#a2-coordinate--conic-geometry--7-q) |
| Tier A | Algebra & progressions | 6 | 72 | [A3](#a3-algebra--progressions--6-q) |
| Tier A | Probability | 5 | 60 | [A4](#a4-probability--5-q) |
| Tier A | Sets, relations & functions | 4 | 48 | [A5](#a5-sets-relations--functions--4-q) |
| Tier A | Statistics | 4 | 48 | [A6](#a6-statistics--4-q) |
| Tier B | Series, coding-decoding, syllogism | 10 | 120 | [B1](#b1-series-coding-decoding-syllogism--10-q) |
| Tier B | Seating, blood relations, clocks, direction | 8 | 96 | [B2](#b2-seating-blood-relations-clocks-direction--8-q) |
| Tier B | Grammar & vocabulary | 6 | 72 | [B3](#b3-grammar--vocabulary--6-q) |
| Tier C | P&C, matrices, comprehension, networking, small reasoning types | ~10 | ~120 | [C](#tier-c--bounded-time-10-q) |
| Skip | Vectors & 3D, para jumbles, verbal analogy, linear programming | 0 | 0 | [Skip](#skip) |

&nbsp;

&nbsp;

---

# TIER S — do these first

&nbsp;

---

&nbsp;

## S1 · Number systems & Boolean logic — 10 Q

125 questions in 19 years, 42 in the last five. Closed syllabus, entirely mechanical. Every item below has been asked; the starred ones repeat.

### Chapter 1 — Number systems and conversions

**Most repeated — do these first:**

- ★ Decimal ↔ binary, including **fractions** (234.125, 25.375, 531.53125 → binary)
- ★ Binary ↔ octal ↔ hex (4DF → octal, 2217₈ → hex, 265 → hex)
- ★ Radix / base equations: √(224)ᵣ = (13)ᵣ
- ★ (43)ₓ = (y3)₈
- ★ (12x)₃ = (123)ₓ
- ★ (235)ᵣ₁ = 565 = (1065)ᵣ₂

**Also asked:**

- Binary arithmetic: multiplication (1100 × 1011), division (11010111 ÷ 101), hex addition and XOR (4AC0 ⊕ B53F)
- Digits needed: n bits ↔ d decimal digits (d ≈ n log₁₀2)
- A ternary-like number system with digits 0, 1, A

&nbsp;

### Chapter 2 — Signed numbers

**Most repeated — do these first:**

- ★ 2's complement of a given number (−93, −100, −147 in 12 bits, −35 in 10 bits)
- ★ Range of n-bit representations: sign-magnitude, 1's complement, 2's complement (8, 9, 16, 32 bits)
- ★ Why 1's complement has two zeros
- ★ Addition with overflow detection (1101 + 0100; 10011001 + 11010111; which of four sums overflows)

**Also asked:**

- 2's complement multiply / shift (F87B × 8), subtraction using 1's complement, product of two 8-bit numbers

&nbsp;

### Chapter 3 — Floating point

**Also asked:**

- IEEE-754 single precision: 8-bit exponent, 23-bit fraction, bias 127
- Double precision exponent range
- Representation of +∞
- Associativity failure (A + B) + C ≠ A + (B + C) with 2×10³⁰
- Max value from mantissa/exponent bits

&nbsp;

### Chapter 4 — Boolean algebra

**Most repeated — do these first:**

- ★ Simplification: x(x + y), x + x'y, AB + A'C + BC (consensus / redundant term), (A + C)(AD + AD') + AC + C, xyz + xyz' + x'y'z + xy'z
- ★ Laws: absorption, De Morgan, which "rule" is invalid, which variable an expression does not depend on
- ★ SOP / POS: minterms Σ(1,4,5,9,11,12)
- ★ Minimal SOP with don't-cares Σ(0,2,5,7,8,10,13,15) d(2,7,8,13)
- ★ Number of terms in canonical POS
- ★ SOP from a truth table

**Also asked:**

- K-map with don't-cares (drawn map, 2018 Q6)
- Counting: number of Boolean functions of n variables (2^(2ⁿ))
- Number of minterms (2ⁿ)
- Tautology test
- Venn diagram ↔ Boolean expression
- A truth-table row that makes (A ⊕ B) ∧ (B → C) true

&nbsp;

### Chapter 5 — Logic gates and circuits

**Most repeated — do these first:**

- ★ Minimum number of NAND gates for a given expression / drawn circuit
- ★ NAND and NOR as universal gates

**Also asked:**

- XOR / XNOR: truth table, identities (P ⊕ Q)' = P ⊙ Q, staircase two-switch bulb = XOR
- Identify the gate from behaviour ("output high when one input is low" → NAND)
- (NOR) OR (XOR) equivalence
- Multiplexer definition
- Flags after addition (V, C, Z)
- ASCII case-change mask

&nbsp;

---

&nbsp;

## S2 · Calculus — 10 Q

160 questions, present in all 19 papers, 48 in the last five. Forecast rose from 8 to 10 because the removed vector questions were redistributed by share.

### Chapter 1 — Limits

**Most repeated — do these first:**

- ★ 0/0 forms by series expansion or L'Hôpital: (tan x − x)/(x − sin x), (x² + 2cos x − 2)/(x³ sin x), (x − sin x)/x³, (e^x − e^−x − 2x)/(1 − cos x), (6^x − 3^x − 2^x + 1)/log(1+…)
- ★ 1^∞ / e-forms: lim (1 + a/x + b/x²)^(2x) = e², ((x+7)/(x+2))^(x+5), −(x+1)(e^(1/(x+1)) − 1)

**Also asked:**

- Limits with radicals (√(a+2x) − √(3x)) / (√(3a+x) − 2√x)
- Nested radicals √x/√(x+√(x+√x))
- Limit as a Riemann sum (1/n)Σ sin(kπ/n)
- Limit with greatest-integer function
- Sandwich/"exists or not" with |x|
- Limits with a parameter: lim (x⁴−1)/(x−1) = lim (x³−k³)/(x²−k²), find k

&nbsp;

### Chapter 2 — Continuity and differentiability

**Most repeated — do these first:**

- ★ Find the constant that makes a piecewise function continuous (sin x / ax; x² − 1 / 2ax; (1+2x)^(1/x) at 0)
- ★ X sin(1/x), x² sin(1/x), x^α sin(1/x^β) at 0 — continuity vs differentiability vs continuity of f′
- ★ |x|-type functions: x + |x|, x/(1+|x|), |cos x| + 3, |x + 1|e^(−x) — where not differentiable, number of corners

**Also asked:**

- Greatest-integer discontinuities of ⌊x² − 3⌋ on (1, 2)
- Signum composition sgn(g(x))
- F(x) = 1/(e^(1/x) − 1)-style at 0
- Derivative of an inverse function (f⁻¹)′(2)
- Odd/even function tests (log(x + √(x²+1)), log(x³ + √(x⁶+1)))

&nbsp;

### Chapter 3 — Differentiation

**Also asked:**

- Inverse-trig simplifications before differentiating: tan⁻¹((3x − x³)/(1 − 3x²)), sin⁻¹((x²+1)/√(1+3x²+x⁴)), tan⁻¹(sin x/(1+cos x))
- Parametric second derivative (x = a cos t, y = b sin t), d²x/dy² in terms of dy/dx
- Implicit: xᵐyⁿ = (x + y)^(m+n) ⟹ dy/dx = y/x
- Derivative of log₁₀x w.r.t. logₓ10
- Log(log x)
- Cos²(x²)
- Functional equations: f(a+b) = f(a)f(b), f(x)f(1/x) = f(x) + f(1/x), polynomial with f(n) = n + 1

&nbsp;

### Chapter 4 — Application of derivatives

**Most repeated — do these first:**

- ★ Tangent and normal: at a point, parallel to an axis, to parametric curves (x = a cos 2t, y = 2√2 a sin t; x = t² + 3t − 8), normal to xy = 1, normal of an ellipse, curves intersecting at an angle
- ★ Maxima–minima: closed box from a sheet, rectangle in an ellipse, x/(1 + x tan x), (x − 1)²(x + 1)³, 2 sin x + sin 2x, 4 sin²x + 3 cos²x + …, sum 9 with product x·y² max, temperature on a circle (two variables)

**Also asked:**

- Monotonicity / inflection: xˣ decreasing on (0, 1/e)
- X^(2/3)(6 − x)^(1/3)
- Increasing interval of 2x³eˣ
- No extremum condition a² < 3b for a cubic
- Rolle / IVT root counting: eˣ sin x = 1 vs eˣ cos x = −1
- X² − x sin x − cos x = 0
- Sin(eˣ) = 5ˣ + 5⁻ˣ
- |x² − 6x + 8| = a with four roots
- Related rates: conical tank, shadow of a man, circle radius/area
- Acceleration x − x² (distance to next rest)

&nbsp;

### Chapter 5 — Indefinite integration

**Most repeated — do these first:**

- ★ Substitution with radicals: ∫(x² − 1)/(x³√(2x⁴ − 2x² + 1)) dx
- ★ ∫√x e^√x dx
- ★ ∫ x eˣ√(1 + eˣ) dx

**Also asked:**

- ∫ eˣ(f + f′) dx pattern and its variants (∫eˣ(sinh x + cosh x), eˣ sec x(1 + tan x))
- ∫ 3^(3^(3^x)) · 3^(3^x) · 3^x dx
- ∫ x sin x sec³x dx
- ∫ (log x − 1)/(1 + (log x)²) dx
- ∫ log₁₀x dx
- ∫ (x+1)/(x(xeˣ + 1)) dx
- Reduction Iₙ for ∫tanⁿ, ∫ x(1−x)ⁿ
- ∫ x⁵f(x³) dx given ∫f = g

&nbsp;

### Chapter 6 — Definite integration

**Most repeated — do these first:**

- ★ King property ∫₀^a f(x) = ∫₀^a f(a − x): ∫₀^(π/2) dx/(1 + tan x), ∫√sin x/(√sin x + √cos x), ∫₀^(π/4) log(1 + tan x) = (π/8) log 2, ∫₀^π x f(sin x) dx, ∫₀^(π/2) log tan x = 0
- ★ Odd/even and symmetric limits: ∫₋π/₂^π/₂ [f(x)+f(−x)][g(x)−g(−x)] = 0
- ★ ∫₋π/₃^π/₃ x sin x/cos²x
- ★ ∫₀^π x³ sin x = π³ − 6π

**Also asked:**

- Greatest-integer / modulus integrands: ∫₀⁹ [x] dx = 36, ∫₀^π [cot x] dx, ∫₋₂³ piecewise |x − 2|, ∫ₐᵇ(|x − a| + |x − b|) dx = (b − a)²
- Compare integrals (I₁ = ∫₀¹ 2^(x²) vs ∫₀¹ 2^(x³) …)
- Integral inequalities with a parameter a
- ∫₀^(π/4) sec⁴x dx = 4/3
- D/dx of ∫ with variable limits (Leibniz)
- ∫₋₁¹ f⁻¹(y) dy
- Derivative-under-integral: ∫₀^sin²x sin⁻¹√t dt + ∫₀^cos²x cos⁻¹√t dt = π/4

&nbsp;

### Chapter 7 — Area under curves

**Most repeated — do these first:**

- ★ Area between y² = x and y = |x| (asked 2018, 2020)
- ★ |x| + |y| = 1 or 2
- ★ Y = |x − 1| and y = 3 − |x|

**Also asked:**

- Parabola vs parabola (y = 2 − x², y = x²), line vs circle (y = 2 − x, x² + y² = 4), √x / x² / −x² + 2x + 4 piecewise, sin x vs cos x on [0, π/2], tan x and cot x with the x-axis, y = 3 − x vs y = x² − 9

&nbsp;

### Chapter 8 — Differential equations (only ~0.2/yr — last)

**Also asked:**

- Separable: (eˣ + 1)y dy = (y + 1)eˣ dx
- Dy/dx = e^(x+y) + x²e^y
- Linear y dx − (x + 3y²) dy = 0 through (1, 1)
- "family of curves that divide a rectangle 2 : 1" (area condition → dy/dx)

&nbsp;

---

&nbsp;

## S3 · Arithmetic word problems — 9 Q

127 questions, present in 19 of 19 papers, **43 in the last five** — the biggest Reasoning block now (13 in 2026). All of it is class-10 arithmetic; the exam sits it in the Analytical Ability section.

### Chapter 1 — Percentages and profit & loss

**Most repeated — do these first:**

- ★ Successive percentage change (+30% then −20%)
- ★ "increased by 15% becomes 161"
- ★ A number's fraction changed by 25% / −20%
- ★ Discount and markup: 20% cash discount and still 11.11% / 20% profit, "16 articles to a dozen"
- ★ Shares with 2% brokerage each way

**Also asked:**

- Percent of a population literate (adults : children = 2 : 3)
- Students passing two exams (60% then 70% / 80%)
- 78% pass, 176 fail, 34% first class
- 9% vs 12% selected with 102 more
- Salary splits: 40% to mother, 7% and 23% of remainder…
- PF 10%, savings 30%, expenses in 3 : 4
- LPG price up 16% → consumption down 13.79%

&nbsp;

### Chapter 2 — Ratio, proportion, averages

**Most repeated — do these first:**

- ★ Three numbers in ratio 2 : 3 and 5 : 8 with sum 98
- ★ Money divided 2 : 5 : 4 : 3
- ★ Contributions "three times of X, 320% of Y, 20% of the rest"
- ★ Averages: average of remaining numbers after erasing one (35 7/15)
- ★ Corrected average after wrong entries
- ★ Combined average (40 female 5.15 ft, 20 male 5.66 ft)
- ★ Average age when new students join
- ★ Average of three numbers where 2nd = 2×1st = 3×3rd
- ★ "10 people, one pays ₹900 more than the average"

**Also asked:**

- Mixtures & alligation: gold/copper 19× and 9× → 15×
- Milk : water 15 : 4, remove P, add 18 l
- 30 l with 10% water → 2%
- Containers 5 : 3 and 1 : 3 → 1 : 1 (2 : 3 and 2.1 litres)
- Two-liquid vessels A/B mixing

&nbsp;

### Chapter 3 — Time, speed, distance

**Most repeated — do these first:**

- ★ Walk at 4 km/h miss the train by 6 min, at 5 km/h early by 6 min → 5 km (asked 2008, 2012, 2020)
- ★ Trains: length from crossing a platform (54 km/h, 36 s; Duronto 230 m in 25 s), overtaking two walkers (2 and 4 km/h in 9 and 10 s), two trains on one track (6:30 am and 7:00 am, 100 km apart), train slows to 3/4 speed after an accident

**Also asked:**

- Average speed over legs (half distance at v₁ and v₂; A→B→C→A at 30/40/50; 60% of distance takes 10 min more at 48 km/h)
- Race "A runs 5/3 as fast, gives 80 m start"
- Culprit chased at 10 vs 8 km/h
- Boat and raft in a stream
- Escalator steps
- Cyclist against the wind
- Cars at 60 and 80 km/h for 1.5 h
- Climbing puzzles: caterpillar 75 in (+5 −4), monkey 30 ft up 20 ft back to 120 ft, cat on a 21 m pole (+3 −1)

&nbsp;

### Chapter 4 — Time and work, pipes

**Most repeated — do these first:**

- ★ Pipes A and B fill in 37.5 and 45 min, both open, B closed after ? → 9 min (2018, 2020)

**Also asked:**

- A 10 days, B 20 days, B leaves after 4 days, A + C finish in 2 → C alone
- Two men + three boys in 10 days vs three men + two boys in 8
- "1 man or 2 women in 20 days → 3 men + women"
- Child 15 h slower than a woman
- 6 machines 270 bottles/min → 10 machines in 4 min

&nbsp;

### Chapter 5 — Ages

**Most repeated — do these first:**

- ★ "Present age is 2/5 of mother's, after 8 years 1/2" → 40 (2020, 2022)
- ★ Father 3× son, after 8 years 2.5×
- ★ "twice as old as B was when A was as old as B is now" (Rakesh–Mahesh, Radha–Rita, Pushpa–Rita)
- ★ Ten years ago 2×, in ten years 3 : 2
- ★ Product of ages 240 and 2D = K + 4
- ★ Sum of daughter + mother 63, four years ago 4×
- ★ Birth year from mother's age difference

&nbsp;

### Chapter 6 — Simple and compound interest

**Also asked:**

- Investment doubling every 5 years (1990, 1995, 2000, 2005 → 2010)
- SI gives 60% more in 8 years → interest on 9600 for 4 years
- Sum split 2 : 5, part 1 at 20% CI for 2 years, find the SI rate that matches
- ₹15,860 split so equal interest after 2, 3, 4 years at 5%

&nbsp;

### Chapter 7 — Number puzzles with equations

**Most repeated — do these first:**

- ★ Two-digit number: digits product 12 and +36 reverses it
- ★ Ratio to digit-sum 4 : 1
- ★ Reversing adds 18

**Also asked:**

- 324 notes of ₹20 and ₹50 totalling ₹12,450
- Bicycles and tricycles (10 vehicles, 24 wheels)
- Exam marking scheme with two deduction rules (160 questions, scores 79 and 76)
- Sachin–Lara runs and balls
- Distances Akash–Sanjay
- Rectangle-walk diagonals
- Friends buying a CD player where two withdraw
- Sum 10600 into A, B, C, D with averages
- 405 sweets, each child gets one-fifth of the number of children
- Rows with three fewer children (630)
- Erased-number average
- Students in ratio 2 : 3 : 5 becoming 4 : 5 : 7
- Cat/dog owners (70% of cat owners own dogs, 20% of 1001 dog owners own cats)
- Mensuration one-offs: rainfall volume on 1.5 hectares
- Cylinder : cone : hemisphere volumes 3 : 1 : 2
- Spheres moulded into a cylinder
- Rectangle area change ±5%
- Shortcut along a diagonal saving half the longer side

&nbsp;

---

&nbsp;

## S4 · Logical puzzles & conditional grouping — 8 Q

194 questions — the single most frequent topic in 19 years — but sliding (τ = −0.44, p = 0.010): 3, 7, 12, 8, 7 in 2022–26. Most-recycled question type: whole sets return after 2–4 years.
**Chapter 1 — Conditional grouping / selection sets** (3–5 questions from one passage)
**Most repeated — do these first:**

- ★ Nine individuals, three committees with size rules (2018, 2020)
- ★ Team of players with "if J then F", "E or B but not both" (2016, 2019)
- ★ Seven people in three vehicles with professions (2024, 2025)
- ★ Five students × five activities with "Gymnastics ⟹ Dance" (2023)
- ★ Seven creators into three teams (2026)

**Also asked:**

- Staff for a new office (2008), interview scheduling (2009), roller-coaster riders (2017), teachers with compulsory/optional subjects (2017), poets asked in alternate years (2019), nine committee-K variants

**Chapter 2 — Attribute matching** (who is what / who has which)
**Most repeated — do these first:**

- ★ Family of six with professions + colours (2015, 2019)
- ★ Five friends' shirt colours and hobbies (2020)
- ★ Four friends' dishes and drinks (2024)
- ★ Five girls, money and sweets (2015)
- ★ Four passengers × profession × language × religion (2017)

**Also asked:**

- Cricket teams in towns (2014), parking executives and car colours (2014), six files with attributes (2026), six books with cover colour/age/type (2022), players → cities → events (2008)

### Chapter 3 — Ordering with constraints

**Most repeated — do these first:**

- ★ Five integers with adjacent differences 4 or 8, sum equal to one of them (2010, 2024 — 4 questions from one passage)
- ★ Height / weight / rank ordering (2010, 2013, 2015, 2017, 2019, 2023, 2026)
- ★ "student ranked 35th from top, 32nd from bottom"
- ★ Queue with five persons between A and B

**Also asked:**

- Consecutive integers P–V from 22 to 28 (2008)
- Letters assigned to integers 1–9 (2014)
- Marbles among four students with parity rules (2020)
- Pairwise weights of five boxes (2014)

&nbsp;

### Chapter 4 — Truth-tellers and liars

**Most repeated — do these first:**

- ★ Island of truth-tellers and liars: "Is B a truth-teller?" (2024), "exactly one of us is a truth-teller" (2025), rabbit that says "I always lie" (2009), Kha-kha "Yes/No" natives (2016), medals with one true and one false reply (2019), three shopkeepers each with one true statement (2009), poker players who cheat (2008), ages where all statements are wrong (2017)

&nbsp;

### Chapter 5 — Rule-following / process simulation

**Also asked:**

- Switch-setting rules (2013), basket orders 1/2/3/4 (2016), pipeline capacities (2010), binary-tree letter codes (2010), Rajita attempting questions in AP steps (2009), messages between five scientists (2025), the X = XY/2, Y = Y + 1 game (2026), causal chain "A causes B or C" (2012), vehicles-and-scooters count pattern (2023), concatenated-digits 2028th digit (2025), coins on a row GSC (2008), water-jug moves (2008), balance weighings for the odd ball (2009, 2010, 2013)

&nbsp;

### Chapter 6 — Verbal reasoning

**Most repeated — do these first:**

- ★ Statement → course of action (2022 ×2, 2026)
- ★ Implicit assumptions (2018)
- ★ Cause-and-effect pairs (2018, 2025)
- ★ "which conclusion can be deduced from the paragraph" (2018, 2026)
- ★ Weaken-the-argument (2009)
- ★ Circular argument (2026)
- ★ Definition → best example (2025)
- ★ Logical sequence of words (2023, 2024)
- ★ Establishing a fact (2011)

**Also asked:**

- Logical implication: "if P then Q…" statement chains (2016, 2024), "Rajesh will not go if Rakesh goes" (2024), logic of "each time Sachin is captain India loses" (2009)

**Chapter 7 — Classic brainteasers** (older papers, still recycled)
**Also asked:**

- Bridge crossing with one lamp (2020), desert crossing with rations (2008), sheep sharing (2008), eggs sold "half plus half an egg" (2019), thieves and bread halves (2017), 13 balls one odd (2009), 1074 rupees in bags (2009), chessboard circle (2008), coins around a coin (2010), socks in a drawer (2015), minimum coins for 78/69/101 paise (2015, 2019), positive integers with pairwise sums/differences divisible by 10 (2017), pigeonhole "sum or difference divisible"

&nbsp;

---

&nbsp;

## S5 · Trigonometry — 8 Q

133 questions, every one of 19 papers, 37 in the last five.
**Chapter 1 — Heights and distances** ★ (asked in 2010, 2013, 2014, 2015, 2016, 2020, 2022, 2023, 2025 ×5, 2026)
**Also asked:**

- Three collinear points with elevations 30°, 45°, 60° — ratio AB : BC = √3 : 1 (2014, 2020, 2022)
- Angles of depression of the top and bottom of a building/flag from a taller one (30°, 45°; 80 m viewpoint)
- Tower subtending α, 2α, 3α at three points
- Pillar subtending tan⁻¹3 and tan⁻¹2 at the ends of a 10 m segment
- Walks 1000 ft nearer (30° → 45°)
- Two ships either side of a lighthouse
- Two airplanes at 60° and 30°
- Hill seen from all three vertices of a triangle
- Second point h m above the first
- Ship sailing east from a harbour 60° S of W
- Tower seen from south then west

### Chapter 2 — Identities and values

**Most repeated — do these first:**

- ★ Products: sin 12° sin 48° sin 54° = 1/8 (2008, 2020), sin 20° sin 40° sin 80° = √3/8, sin 10° sin 50° sin 70° = 1/8, tan 1°·tan 2°…tan 89° = 1, cos²10° cos 20° cos 40° cos 50° cos 70°, (1 + tan 1°)(1 + tan 2°)…(1 + tan 45°) = 2²³
- ★ (1 + tan A)(1 − tan B) when A − B = π/4 (2012 ×2, 2013)
- ★ Cos 20° + cos 100° + cos 140° = 0
- ★ Tan 9° − tan 27° − tan 63° + tan 81° = 4
- ★ Tan 7π/8 = √2 − 1
- ★ (1 − tan²15°)/(1 + tan²15°) = √3/2

**Also asked:**

- Telescoping: tan θ + 2 tan 2θ + 4 tan 4θ + 8 cot 8θ = cot θ
- Σ sin d·cosec aₖ cosec aₖ₊₁
- Cot(A − B) from tan A − tan B = x, cot B − cot A = y
- Powers: sin²x + sin x = 1 ⟹ cos⁴x + cos²x = 1 (2012, 2013)
- Range of cos²θ + sin⁴θ ∈ [3/4, 1] (2009, 2025)
- Sin²⁰θ + cos⁴⁸θ ≤ 1
- Cos 6x expansion coefficients
- A cos θ + b sin θ = 2, a sin θ − b cos θ = 3 ⟹ a² + b² = 13
- Sin x + a cos x = b ⟹ |a sin x − cos x| = √(a² − b² + 1) (2013, 2014)
- 3 sin x + 4 cos x = 5 ⟹ tan(x/2)
- Maxima: max of cos²θ − 6 sin θ cos θ + 3 sin²θ + 2 = 4 + √10
- Max of sin x + sin(x + 1)
- Min of tan A + tan B with A + B = π/6
- Max of Π sin αᵢ given Π tan αᵢ = 1
- Max product of cosines given product of cotangents

&nbsp;

### Chapter 3 — Trigonometric equations (general solutions, counting solutions)

**Most repeated — do these first:**

- ★ General solution of √3 cos x + sin x = 3 (none), sin θ = −1/2 & tan θ = 1/√3, tan θ + cot θ = 2, 2 sin²θ − 3 sin θ − 2 = 0, 4 cos²x + 6 sin²x = 5, 32 tan⁸θ = 2cos²α − 3cos α with 3 cos 2θ = 1
- ★ Counting solutions in an interval: sin x + sin 5x = sin 3x on [0, π] (6), sin 4x = 1/2 on (−9π, 3π), 3 cos θ + 4 sin θ = k with |k| = 5, 2 cos(x/2) + 3 = 4 on [0, 4π], 5^(1+|sin x|+|sin x|²+…) = 25, sin(π cos θ) = cos(π sin θ), sin x + 1 = cos x on [0, 2π]

**Also asked:**

- Sets P = {sin θ − cos θ = √2 cos θ} vs Q = {sin θ + cos θ = √2 sin θ} are equal
- Sin x = sin y and cos x = cos y ⟹ x − y = 2nπ
- Sin 1° vs sin 1

&nbsp;

### Chapter 4 — Inverse trigonometric functions

**Most repeated — do these first:**

- ★ Solve tan⁻¹2x + tan⁻¹3x = π/4 (2009, 2026)
- ★ Tan⁻¹√(x² + x) + sin⁻¹√(x² + x + 1) = π/2 (2009, 2022)
- ★ Cot(cosec⁻¹(5/3) + tan⁻¹(2/3)) = 6/17 (2018, 2022)

**Also asked:**

- Principal values: cos⁻¹(cos(−π/6)) + sin⁻¹(sin 5π/6)
- Cos⁻¹(−x) = π − cos⁻¹x
- 2 tan⁻¹[cosec(tan⁻¹x) − tan(cot⁻¹x)]
- Cot⁻¹21 + cot⁻¹13 + cot⁻¹(−8) = π
- Sin⁻¹x + cos⁻¹(1 − x) = sin⁻¹(1 − x)
- Sums to infinity: Σ tan⁻¹(1/(1 + k(k+1))) = tan⁻¹(n/(n+2))
- Σ sin⁻¹((√k − √(k−1))/√(k(k+1))) = π/2
- Cos⁻¹(x/2) + cos⁻¹(y/3) = φ ⟹ 9x² − 12xy cos φ + 4y² = 36 sin²φ

&nbsp;

### Chapter 5 — Properties of triangles

**Most repeated — do these first:**

- ★ Which rule is *not* correct (sine rule, Napier's tangent rule)
- ★ Tan((A − B)/2) = (1/3) tan((A + B)/2) ⟹ a : b = 2 : 1

**Also asked:**

- Sides x² + x + 1, 2x + 1, x² − 1 → largest angle 120°
- (a + b + c)(a + b − c) = ab ⟹ C = 120°
- A = 4, b = 3, A = 60° ⟹ quadratic in c
- Angles in ratio 2 : 3 : 7 ⟹ sides √2 : 2 : √3 + 1
- A = 2, b = 4, C = 60°
- 8R² = a² + b² + c² ⟹ right-angled
- 2(r + R) = a + b in a right triangle
- Altitudes in HP ⟹ sines in AP
- Δ = a² − (b − c)² ⟹ tan A = 8/15
- Perimeter = 6 × mean of sines, a = 1 ⟹ A = π/6
- A cos²(C/2) + c cos²(A/2) = 3b/2 ⟹ sides in AP
- Hypotenuse = 4 × altitude ⟹ 15°
- Area 10√3 with AB = 8, AC = 5 ⟹ A = 60° or 120°
- Heron product 3s²(s−a)(s−b)(s−c)
- Pond width by cosine rule (60 m, 80 m, 60°)

&nbsp;

&nbsp;

---

# TIER A — next

&nbsp;

---

&nbsp;

## A1 · Computer architecture, OS & memory — 8 Q

81 questions, **36 in the last five** (8–10 per paper since 2023). Fact-sheet material.

### Chapter 1 — CPU and instruction execution

**Most repeated — do these first:**

- ★ Fetch–decode–execute cycle statements (PC increment, control unit, ALU role)
- ★ Pipelining definition
- ★ CPU cycle = time to fetch + execute one instruction

**Also asked:**

- Registers: PC, MAR, MDR/MBR, IR, index register, accumulator
- Which register holds the next-instruction address
- Which unit stores intermediate ALU results
- Instruction format: opcode vs operand
- 16-bit instruction with 4-bit opcode → 4096 addresses
- Max distinct instructions with 6 registers and 32-bit words
- Register allocation for a straight-line program (min registers without spilling)
- Control unit: hardwired vs microprogrammed (speed, ease of modification, horizontal vs vertical microcode)
- Von Neumann = single memory for data and instructions
- Stored-program machine
- Clock: 2500 MHz → period 4 × 10⁻¹⁰ s
- What affects CPU performance (cores, cache, clock — not RAM size)
- Execution time of 2n² steps at 10⁶ instr/s

&nbsp;

### Chapter 2 — Memory hierarchy

**Most repeated — do these first:**

- ★ Order by speed: registers → cache → RAM → hard drive
- ★ Cache sits between CPU and RAM
- ★ Purpose of cache
- ★ Locality of reference
- ★ DRAM (capacitor, needs refresh, slower) vs SRAM (flip-flop)
- ★ Effective access time with hit ratio (10 ms memory, 10 µs cache, 15% hit)
- ★ Memory bandwidth from access time + gap
- ★ Direct-mapped cache drawback
- ★ Sizing: 4K × 16 needs 12 address + 16 data lines
- ★ 12-bit address bus and 16 KB → word length
- ★ FFFF is the last address of 64K
- ★ Number of 32K × 1 or 4K × 8 chips for 256 KB / 64 KB

**Also asked:**

- Units: bit → nibble → byte
- KB/MB/GB/TB/PB/EB/ZB (1 EB = 1000 PB = 2³⁰ GB)
- Petabyte ≈ 1000 TB
- ASCII 7 bits, 8 bits = 256 characters, ASCII vs Unicode
- ROM is primary memory
- EEPROM expansion
- Flip-flop as memory element
- Primary vs secondary cost/speed
- SSD vs HDD vs optical vs tape access time
- Backup device speed
- Virtual memory: address space vs physical vs secondary size
- Pages and residency statements
- Whether 16 GB RAM with 100 × 100 MB processes benefits
- TLB tag bits (32-bit VA, 4 KB page, 128-entry 4-way TLB → 20 bits) — asked 2023 **and** 2024
- Disk: cylinder/surface/sector addressing of a 42797 KB file
- Sectors readable without head movement (4 surfaces × 2000)
- Average latency at 6000 rpm
- FAT32 vs NTFS facts

&nbsp;

### Chapter 3 — I/O and OS basics

**Most repeated — do these first:**

- ★ Bootstrap loader's first instruction is in BIOS/ROM (2008, 2010, 2017)
- ★ OS execution begins with the bootstrap

**Also asked:**

- DMA transfers memory ↔ I/O without CPU
- I/O-mapped vs memory-mapped I/O
- Programmed I/O polls status flags
- Interrupt-driven vs programmed I/O for CPU- vs I/O-bound jobs
- CPU action on an interrupt (after the current instruction)
- I/O processor
- Buffer compensates for speed differences
- Multiplexer
- Data hierarchy character → field → record → database
- System vs application software: drivers, kernel, Linux/macOS/Android
- DLL vs static linking trade-offs
- Compiler vs interpreter
- Errors caught by compilers (syntax) and not by assemblers (logic)
- Debugger
- Data-processing functions

&nbsp;

---

&nbsp;

## A2 · Coordinate & conic geometry — 7 Q

116 questions, every paper, 33 in the last five.

### Chapter 1 — Straight lines and pairs of lines

**Most repeated — do these first:**

- ★ Distance between parallel lines (y = 2x + 4 and 6x = 3y + 5; two pairs compared as a ratio)
- ★ Perpendicular line through a point
- ★ Obtuse angle between 2y = x + 1 and y = 3x + 2
- ★ Line through a fixed point when a, b, c are in AP (2013, 2017)
- ★ Line whose intercept is bisected at (4, 5)
- ★ Intercepts on rotated axes
- ★ Perpendicular bisector with given y-intercept
- ★ Point on 8x − 3y = 11 equidistant from the axes
- ★ Points on the same side of a line
- ★ Region between two lines
- ★ Pair of lines: λ for 2x² + 7xy + 3y² + 8x + 14y + λ = 0
- ★ Point of intersection
- ★ Angle between x² − 7xy + 12y² = 0
- ★ Slopes differing by a value, sum = 4 × product, perpendicular pairs
- ★ Angle bisector pair x² − 2mxy − y² = 0

**Also asked:**

- Triangles: area from a vertex and two midpoints
- Centroid with given vertices
- Equilateral triangle with base x + y = 2
- Isosceles medians slopes
- Median AD bisected at E, BE meets AC (AF : FC = 1 : 2, 2014 & 2019)
- Parallelogram fourth vertex
- Area of parallelogram formed by four lines
- Median equation through A with base bisected at (p, q)
- Orthocentre locus (2018)

**Chapter 2 — Circles** ★ (most repeated sub-form)
**Most repeated — do these first:**

- ★ Circle from two diameters and a given area (154, 153.94) — 2016, 2019, 2026
- ★ Circle through two points with centre on a line
- ★ Circle through the foci of an ellipse
- ★ Common tangents count for two circles (x² + y² = 4 and x² + y² − 6x − 8y = 24; x² + y² = 16 and x² + y² − 2y = 0)
- ★ Touching condition for two circles through the origin (g′f = gf′)
- ★ Circles touching externally (x² + y² + c² = 2ax…)
- ★ Orthogonal circles (k = 2 or −3/2)
- ★ Locus of the centre of a circle touching the x-axis and a given circle → parabola (2015, 2023)
- ★ Circle contained in another (c value)
- ★ Circle touching both axes and x − y − 2 = 0
- ★ Image of a circle in a line
- ★ Concyclic intercepts of two lines
- ★ Circumcentre locus of triangle OPQ

**Also asked:**

- Common tangents circle–parabola (x² + y² = 2a², y² = 8ax; (x − 3)² + y² = 9, y² = 4x)
- Circle–line intersection point
- Parallel tangents 3x − 4y + 4 = 0 and 6x − 8y − 7 = 0 → radius 3/4

&nbsp;

### Chapter 3 — Parabola

**Most repeated — do these first:**

- ★ Vertex/focus/directrix from a general equation (y² − 8y + 19 = 0; 4y² + 12x − 20y + 67 = 0; x² + y² − 2xy − 4(x + y − 1) = 0; focus (−1, 1) & directrix 4x + 3y − 24 = 0)
- ★ Directrix x = 1 of y² = kx − 8
- ★ Locus of midpoints of chords through the vertex → y² = 2x (2015, 2023)
- ★ Point at distance 5a from the focus
- ★ Focal-chord tangents meet on the directrix (x₁x₂ = −4a²)

**Also asked:**

- Equilateral triangle inscribed with a vertex at the vertex (side 8a√3; centroid)
- Normal through (1, 2) to x² = 4y
- Common tangent to y = −x² and y = (x − 2)²
- Common normal condition c > 2(a − b)
- Tangent slope form

&nbsp;

### Chapter 4 — Ellipse

**Most repeated — do these first:**

- ★ Foci of an ellipse and hyperbola coincide → b² (asked 2014, 2015, 2016, 2022 — four times)
- ★ Eccentricity from a directrix (x = 9, e = 1/3; x = −4, e = 1/2) then the normal at a point
- ★ Ellipse through (4, 3) and (−1, 4)
- ★ Eccentricity of 9x² + 5y² − 30y = 0

**Also asked:**

- Tangent condition for lx + my + n = 0 (a²l² + b²m² = n²)
- Tangent making 60° with the x-axis
- Tangent with equal intercepts
- Tangent from an external point
- 3x + 5y = k touching 16x² + 25y² = 400
- Director circle (perpendicular tangents → circle)
- Foci (4, 3) and (12, 5) through the origin → e = √13/9
- BSS′ equilateral → e = 1/2
- Sum of focal distances = 2a
- Eccentric angles of the latus rectum ends
- Greatest rectangle inscribed = 2ab
- Intersections of an ellipse with a circle / a hyperbola

&nbsp;

### Chapter 5 — Hyperbola

**Also asked:**

- Angle between asymptotes of 27x² − 9y² = 24
- 1/e² + 1/e′² = 1 for conjugate hyperbolas
- Eccentricity from the locus of √3x − y = 4k√3 and k(√3x + y) = 4√3
- Hyperbola with transverse axis 6 and focus (0, 4)
- Foci of x² + 2x − 4y² + 8y − 7 = 0
- 3x + 4y + k = 0 tangent to 9x² − 16y² = 144
- Tangent to x² − y² = a² with asymptotes → triangle area a²
- Orthogonal to an ellipse (a² − b² = 2c²)
- Equilateral double ordinate condition
- Classify 3x² + 10xy + 11y² + … = 0 as an ellipse
- Eccentricity range from |OH| = λ|OF₂| (2025)

&nbsp;

### Chapter 6 — Transformations and loci

**Also asked:**

- Reflection → translation → rotation of a point
- Rotated square common area
- |x| + |y| = 1 / 2 areas (2, 8)
- D(x, y) = max(|x|, |y|) = 1 is a square
- Graph shift of y = (x − 2)² − 3

&nbsp;

---

&nbsp;

## A3 · Algebra & progressions — 6 Q

117 questions, every paper; drifting down (τ = −0.34, p = 0.049), 5, 7, 3, 5, 7 in 2022–26.

### Chapter 1 — Quadratic equations and polynomials

**Most repeated — do these first:**

- ★ Transformed roots: equation with roots α/β and β/α, αⁿ + βⁿ when roots of x² − 2x cos θ + 1 = 0, (α + 2)/(α − 1)-type (2026), 1/(α³ + αβ + β³) roots (2025), α⁶ + β⁶ for x² − 2x + 4 = 0, α¹⁹ and β¹⁹ for x² + x + 1 = 0
- ★ Always-positive / sign conditions: (k − 2)x² + (k + 8)x + 4 > 0 for all x
- ★ X² + 2ax + 10 − 3a > 0
- ★ Both roots real, distinct, negative
- ★ Minimum of the sum of squares of roots
- ★ Sum of squares of roots ≥ …
- ★ Modulus equations: |x² − x − 6| = x + 2 (2 roots), |x² − 6x + 8| = a with four roots, 2|x+1| − 2x = |2x − 1| + 1, |x − 6| = |x − 4x| − |x² − 5x + 6|

**Also asked:**

- Roots in GP (x³ − 6x² + kx + 64), sum of cubes (x − a)³ + (x − b)³ + (x − c)³ = 0 has one real root, reciprocal quartic 2x⁴ + x³ − 11x² + x + 2, real roots of 3x⁵ + 15x − 8, roots tan 30° and tan 15° ⟹ 2 + p − q = 3, prime roots with b + c = 35, f(1 − x)/(1 + x) = x + 2 ⟹ f(1)
- Polynomial divisible by (x − 1)
- Power sums x + y = 1, x² + y² = 2 ⟹ x⁵ + y⁵ (Newton)
- Aₙ = αⁿ + βⁿ recurrence for x² − x − 1

&nbsp;

### Chapter 2 — Progressions

**Most repeated — do these first:**

- ★ AP: nth term/sum with conditions (first term n, last 2n, sum 216; a = 3, S₈ = 2S₅; sum of 11 terms 88 with common difference 3/2 giving roots of a quadratic)
- ★ Common terms of two APs (17, 21, … 817 and 16, 21, … 851 → 40)
- ★ Σ over positive terms of 72, 69, 66, …
- ★ AP of 1 + kd with mean deviation 255
- ★ Three numbers in AP becoming a GP after adding 2, 2, 14
- ★ GP: infinite sum twice the sum of the first two terms (r = ±1/√2)
- ★ Decreasing GP whose sum equals the max of a cubic (2019, 2023)
- ★ Each term equals the sum of the next two (golden ratio)
- ★ Which term is 1/(13√5)
- ★ Bouncing ball total distance
- ★ Four GMs between 2 and 64
- ★ 9^(1/3) · 9^(1/9) · 9^(1/27)… = 3
- ★ HP and means: pth term q, qth term p ⟹ pqth term 1
- ★ Mth term n and nth term m ⟹ (m + n)th term
- ★ N harmonic means (H₁ + a)/(H₁ − a) + (Hₙ + b)/(Hₙ − b) = 2n (2008, 2021)
- ★ AM = 5, HM = 3.2 ⟹ 2 and 8
- ★ HM 4 with 2A + G² = 27
- ★ One AM and two GMs ⟹ p³ + q³ = 2apq
- ★ A, b, c in AP with p, q, r in HP
- ★ AM–GM minimum of px + qy with xy = r²
- ★ A, b, c, d in HP with AM of products 9 ⟹ ad

**Also asked:**

- Special sums: 11² + … + 30²
- −1² + 2² − 3² + … (20 terms)
- Σ 1/(√k + √(k+1)) telescoping (2016, 2015)
- 2/3! + 4/5! + 6/7! + … = e⁻¹
- (Σ(−1)^(k−1)k)² − Σ(−1)^(k−1)k² + 2450 = 0
- Σ 6Aₖ − 3k = 31
- Layers of stacked balls (8436 → 36)
- Tetrahedral numbers
- Digit-replacement sum change (6 → 9 in 1–100: 330)

&nbsp;

### Chapter 3 — Logarithms, indices, surds

**Most repeated — do these first:**

- ★ Solve 3ˣ = 4ˣ⁻¹, 8ˣ⁻¹ = (1/4)ˣ then a log expression, x^(8 log x − 24) = 5⁻⁴ (product of roots 125), 4ˣ − 3·2ˣ⁺³ + 128 = 0 (sum of roots 7), 2²ᵃ − 3·2ᵃ⁺² + 32 = 0, 2ᵃ = 3ᵇ = 6⁻ᶜ ⟹ ab + bc + ca = 0, (2x)^ln2 = (3y)^ln3
- ★ Log identities: a = log₁₂18, b = log₂₄54 ⟹ ab + 5(a − b) = 1
- ★ Log₃2, log₃(2ˣ − 5), log₃(2ˣ − 7/2) in AP ⟹ x = 3
- ★ Log₃5 vs log₁₇25
- ★ Log(1 + xz) = 2 log y for consecutive integers
- ★ 3^(3 − log₃5) = 27/5
- ★ Log_x 2 · log_{2x} 2 = log_{4x} 2
- ★ Nested-radical + log₁/₄ expression = 6
- ★ 0.36^(log₀.₂₅(1/3 + 1/9 + …))
- ★ Π(2 log_x 4)(2 log_x 16)… = 2

**Also asked:**

- Inequalities: log₃((x + 2)(x + 4)) + log_{1/3}(x + 2) < log√₃ 7 → (−2, 3) (2011, 2019)
- Cauchy–Schwarz n Σaᵢ² ≥ (Σaᵢ)²
- Surds: x = 1 + ⁶√2 + ⁶√4 + … ⟹ (1 + 1/x)²⁴ = 16
- 2√(x + y) − 3√(y + z) = 2 & 4x − 5y − 9z = 8 ⟹ √(…) (2026)

&nbsp;

### Chapter 4 — Binomial theorem and series coefficients

**Most repeated — do these first:**

- ★ Sum of even coefficients of (1 + x − 2x²)⁶ = 31 (2009, 2019)
- ★ A₀ + a₂ + … for (1 − x + x²)ⁿ
- ★ Σ(−1)ᵏC(2n, k)²-type alternating sums
- ★ Π(1 + aₖ/aₖ₋₁) = (n + 1)ⁿ/n!
- ★ C(20,8) + C(20,9) + C(21,10) + C(22,11) − C(23,11)

**Also asked:**

- Coefficient of x⁵⁰ in (1 + x)¹⁰⁰⁰ + 2x(1 + x)⁹⁹⁹ + …
- Coefficient of x¹⁰ in (x² + 1/x)¹² + (x + 1/x²)¹²
- X¹⁹ coefficient in (x + 1)(x + 4)…(x + 400)
- Xⁿ in (1 − 2x + 3x² − …)⁻ⁿ
- Binomial approximation for small x
- Log-series coefficients (a₃ + a₆ + …, x¹⁰⁰ in log((1 + x)/(1 + x²)))

&nbsp;

---

&nbsp;

## A4 · Probability — 5 Q

88 questions, every paper, 23 in the last five.

### Chapter 1 — Classical and counting probability

**Most repeated — do these first:**

- ★ Two people choose 1–25, no match (24/25) — 2018, 2020
- ★ Captains of India and Australia adjacent (2/5)
- ★ A married couple both in or both out of a committee of 5 from 9 (4/9)
- ★ Three of 1–100 all divisible by 6 (4/1155)
- ★ A² − b² divisible by 3 from 1–30
- ★ A³ + b³ + c³ − 3abc divisible by 3 from 1–99
- ★ Four-digit number from 1–5 divisible by 3 (1/5)
- ★ X + 100/x > 29 for x in 1–100
- ★ Dice: sum a prime (5/12), 5 before 7 (2/5), biased die 3× odd → even sum (5/8; 2008 & 2013), "1 appears in an even-numbered throw" (5/11), "first die ≥ 4 or second ≥ 4" (3/4), a determinant of 0/1 entries non-zero (3/8), coefficients from coin tosses giving imaginary roots (7/8)
- ★ Balls and cards: no black ball in 3 from 5Y 4B 3G (14/55), none green from 12 caps (7/99), neither red nor green (1/3), same letter from STATISTICS and ASSISTANT (19/90), balls chosen by a die roll all red, tickets in AP from 2n + 1 (3n/(4n² − 1)), r digits chosen with replacement all distinct

&nbsp;

### Chapter 2 — Conditional probability, independence, Bayes

**Most repeated — do these first:**

- ★ "A and B contradict each other" (4/5 & 3/4 → 7/20; 70% & 60% → 23/50; 60% & 50% → 1/2; 40% & 50% → 1/2) — asked six times
- ★ Two independent witnesses agree — probability the statement is true, xy/(xy + (1 − x)(1 − y)) (2009, 2017)
- ★ A man who speaks truth 2/3 reports a 1 on a die (2/7)
- ★ Student knows 90%, guesses otherwise — P(guessing | correct) = 1/37
- ★ Bayes with plants/bags: two-plant factory (78/93; 2019 & 2023)
- ★ Ball transferred from bag I to bag II then black drawn (P(red transferred))
- ★ DVD brands with warranty rates
- ★ Letter from TATANAGAR or CALCUTTA with "TA" visible (7/11)
- ★ Three coins (fair, two-headed, weighted 1/3) → P(head) = 11/18
- ★ Blue coin 0.99 / red coin 0.01 → 0.5
- ★ Independence tests: P(A ∪ B) = 1/6 … "independent but not equally likely" (2009, 2017)
- ★ P(A ∪ B) = 5/6, P(A ∩ B) = 1/3, P(B̄) = 1/2 → independent
- ★ A ∩ B = P(A)P(B) ⟹ P(Ā ∩ B̄) = P(Ā)P(B̄)
- ★ Which of four conditions is *not* equivalent to independence
- ★ Sample space {1..4}² with A = {x ≥ 2}, B = {y > x}
- ★ 10 equally likely outcomes, |A| = 4, |B| for independence (5 or 10)
- ★ Bounds on P(A ∩ B) from P(A) = 1/2, P(B) = 1/3
- ★ Odds 2 : 1 and 3 : 1 → bounds on P(B)
- ★ P(A̅) + P(B̅) = 1.1 from P(A ∪ B) = 0.6, P(A ∩ B) = 0.3
- ★ P((A ∩ B̄) ∪ (Ā ∩ B)) = P(A) + P(B) − 2P(A ∩ B)

**Also asked:**

- Multiplication rule statement P(A₁ ∩ A₂ ∩ A₃) = P(A₁)P(A₂|A₁)P(A₃|A₁ ∩ A₂)
- "neither passes" with independent 2/5 and 3/4 (3/20)

&nbsp;

### Chapter 3 — Binomial, geometric, expectation

**Most repeated — do these first:**

- ★ At least one / exactly k: quiz of 5 with 4 options (at least one right 0.7627)
- ★ 3 surgeries with p = 0.6, exactly two recover (0.432)
- ★ Problem solved by A, B, C (1/2, 1/3, 1/4 → 3/4; with C unknown and total 63/64)
- ★ At least 4 successes in 6 trials with p = 2/3 (496/729)
- ★ Gun hits in four shots (0.6976; 2009 & 2011)
- ★ At least two hits by A, B, C (4/5, 3/4, 2/3)
- ★ Packets of 10 blades with p = 0.002 out of 10000
- ★ Odd number of heads in n / 8 tosses = 1/2 (2012, 2024)
- ★ Alternate heads and tails in 3 tosses (1/4)
- ★ 100 coins with P(50 heads) = P(51 heads) → p = 51/101 (2010, 2012)
- ★ Random walk forward 0.4, one step away after 11 steps

**Also asked:**

- Geometric/first-to: A and B throw a die, first 1 wins ₹110 (expectations 60 & 50)
- First-to-die among n persons ((1 − (1 − p)ⁿ)/n; 2009 & 2021)
- Triplets not more than twice in three throws
- Geometric probability: two people meet within 20 minutes in an hour (5/9)
- Point inside the larger of two concentric-ish circles (1/4)
- First-quadrant region x² + y² < 4 with r > s (1/2)
- Raffle fair price (₹11)
- Poisson-style and Bernoulli product Z = XY

&nbsp;

---

&nbsp;

## A5 · Sets, relations & functions — 4 Q

59 questions, every paper, 22 in the last five (6 in 2026 — this is where vector slots went).

### Chapter 1 — Set counting (inclusion–exclusion)

**Most repeated — do these first:**

- ★ Survey "both" range: 63 like cheese, 76 apples (39 ≤ x ≤ 63)
- ★ 200 people, 60% tea, 72% coffee (n − m = 56)
- ★ 500 employees coffee/tea
- ★ 50 students, 30 Hitavad 35 Hindustan 10 neither (25)
- ★ 21 English, 10 both of 50 (Hindi only 29)
- ★ Beauty-contest voters (24)
- ★ Exactly one / all three: 100 students Maths 32, Business 38, Literature 30 with pairwise 7, 10, 8 and all 5 (exactly one = 55)
- ★ 100 undergraduates 47/47/57 with 7 in all three
- ★ 40 students watched films A/B/C either one or all three (4)
- ★ 24 CS books P/Q/R
- ★ Maximum intersection: 50 students, 37 Maths 24 Physics 43 Chemistry with pairwise caps (x ≤ 10) — asked 2009 and 2024
- ★ Thirty 5-element sets P₁…P₃₀ and n 3-element sets, each element in 10 P's and 9 Q's ⟹ n = 45 (2008, 2019, 2021)
- ★ 300 students × 5 newspapers, each read by 60 (25 newspapers)
- ★ Venn regions with 5 sets (32)

**Also asked:**

- Four sets: A₁…A₄ ⊂ U of 75 with 28 each, pairwise 12, triple 5, all 1 (none = 17)
- Union of 150/180/210/240 with pairwise 15, triple 3 (702)

&nbsp;

### Chapter 2 — Set algebra and identities

**Most repeated — do these first:**

- ★ A = {4ⁿ − 3n − 1} ⊂ B = {9(n − 1)} (2009, 2016, 2020)
- ★ A = {5ⁿ − 4n − 1} vs B = {16(n − 1)} (2025)
- ★ (A Δ B) ∩ C identities
- ★ (P − Q) ∪ (Q − P) ∪ (P ∩ Q) = P ∪ Q
- ★ X ∩ Y′ ∩ (X ∪ Y)′ = ∅
- ★ A ∩ X = B ∩ X = ∅ and A ∪ X = B ∪ X ⟹ A = B
- ★ Which identity is wrong (A − B = A ∩ B̄ …)
- ★ Statements about 2 ∈ A ∪ B
- ★ Set expressions for "countries with a mountain or a river but no desert"

**Also asked:**

- Power sets: |P(A)| − |P(B)| = 56 ⟹ (6, 3)
- = 112 ⟹ (7, 4)
- Power set of {2, (1, 4)} has 4 elements
- {x, y, z} → 8
- Subsets of {1..7} containing 1 and 7 (31 proper)
- Subsets of A × B with ≥ 3 elements (219)
- Pairs (A, B) with A ⊆ B (3ⁿ)
- Triples with A ∩ B ⊆ C ⊆ A ∪ B (6ⁿ)
- (A ∪ B) × (A ∩ B) × (A Δ B) count (24)
- Triples/tuples (x, y) with x² = 2y in ℕ (none), x² + 2y² = 3 with x > y in ℤ
- Functional equations: f(x) + f(1 − x) = 2 sum over k/2001 (2000)
- F(x)f(1/x) = f(x) + f(1/x), f(3) = 28 ⟹ f(4) = 65
- F((1 − x)/(1 + x)) = x + 2 ⟹ f(1)
- Cf(x) + df(1/x) = |log|x|| + 3 then ∫₁^e f

&nbsp;

### Chapter 3 — Relations and functions

**Most repeated — do these first:**

- ★ Number of relations from A (m elements) to A × A (2^(m³))
- ★ Reflexive relation on 10 elements has ≥ 10 pairs
- ★ R = {(x, y) : y = 2x − 7} on {1..20} (7 elements)
- ★ A ~ b iff a − 2b divisible by 3 — reflexive/symmetric/transitive test (2026)
- ★ Which statement about R ⊂ ℕ × ℕ representing a function is true
- ★ Counting functions: injections from 3-set to 4-set (24) / 5-set (60; 2015 & 2024)
- ★ Injective f : {1,2,3,4} → {1..8} sending evens to evens (2ᵃ3ᵇ5ᶜ)
- ★ Onto functions 6 → 3 (540)
- ★ Monotone functions {0,1,2} → {0..7}

**Also asked:**

- Inverse functions: f(x) = 2^(x(x − 1)) on [1, ∞)
- F(x) = (10ˣ − 10⁻ˣ)/(10ˣ + 10⁻ˣ) ⟹ ½ log((1 + x)/(1 − x))
- Self-inverse (1 − x)/(1 + x)
- Domain of cos⁻¹x/[x]
- H = f∘g with piecewise f, g → interval where h = 1
- F(|x|) vs |f(x)| statements for a piecewise f

&nbsp;

---

&nbsp;

## A6 · Statistics — 4 Q

45 questions, **20 in the last five** and 6 in 2026 — the only Math topic with a significant upward trend (τ = +0.54, p = 0.002).

### Chapter 1 — Mean, median, mode

**Most repeated — do these first:**

- ★ Corrected mean after misread entries (25 obs, 23 & 38 misread as 25 & 36 → 38; 200 students 43 & 35 as 34 & 53; 100 students with SD too) — 2014, 2022, 2023
- ★ Mean of first n natural numbers / squares: mean = (n + 7)/3 ⟹ n = 11
- ★ Mean of squares = 11 ⟹ n = 5 (2011, 2018)
- ★ Mean of 2 … n
- ★ Σ 6Aₖ − 3k
- ★ Mean of 2¹⁰ and 2²⁰

**Also asked:**

- Combined mean lies between the two means
- Combined average height
- Median of a combined set given the medians
- Missing value x so that mean = median = mode (10)
- Mean 1, median 3x, mode 9x (mode 9)
- Mean/median/mode of three small data sets
- Grouped-data mean (20–25 … 45–50 → 33.75)
- Median with two unknown frequencies (f₁, f₂ from N = 686 and median 42.6 — 2021 & 2023)
- Percentiles (10th and 50th of five values)

&nbsp;

### Chapter 2 — Dispersion

**Most repeated — do these first:**

- ★ Mean deviation of an AP a, a + d, …, a + 2nd (= n(n+1)d/(2n+1))
- ★ MD of 1, 1 + d, …, 1 + 100d = 255 ⟹ d = 10.1 (2015, 2019)
- ★ MD when mean = 5, variance 12.4 and three values known (2019, 2023)
- ★ Variance/SD under transformation: adding 4 leaves SD 30
- ★ Y = 10.5 + 2x with Var(y) = 100 ⟹ Var(x) = 25
- ★ Wᵢ = pxᵢ + k with means 48 → 55 and SDs 12 → 15 (p = 1.25, k = −5)
- ★ Variance of 101–200 vs 151–250 (ratio 1)
- ★ Which SD statement is not correct (units, scale change, SD ≥ MD, minimum about the mean)

**Also asked:**

- Bounds: a ≤ xᵢ ≤ b ⟹ Var ≤ (b − a)²/4
- Σxᵢ² = 400, Σxᵢ = 80 ⟹ n ≥ 16 (18)
- Sample mean and SD of seven shot-put throws
- SD of a frequency table (sizes 6–12)
- Moments about 2 are 1, 16, −40 ⟹ mean 3, variance 15
- Kurtosis from μ₂ = 3, μ₄ = 63 (leptokurtic)
- AM of 0..50 weighted by C(50, k) (= 25)

&nbsp;

### Chapter 3 — Distributions and regression

**Most repeated — do these first:**

- ★ Binomial mean 4, variance 2 ⟹ P(X = 1) = 1/32
- ★ Poisson P(X = 3) = 14P(X = 4) then P(X = 5) = kP(X = 7)
- ★ Accidents Poisson mean 3, two weeks → ke⁻⁶
- ★ Bernoulli Z = XY
- ★ Normal scores mean 500 SD 100, P(450–500) = 0.191

**Also asked:**

- Distribution tables: P(X = x) = a, 3a, … 17a ⟹ a = 1/81
- Variance of X = 1, 2, 3 with 0.3, 0.4, 0.3 (0.6)
- Regression lines 3x + 2y = 26, 6x + y = 31 ⟹ r = −0.5
- Ranks under y = 1 + x are unchanged

&nbsp;

&nbsp;

---

# TIER B — cheap, don't skip

&nbsp;

---

&nbsp;

## B1 · Series, coding-decoding, syllogism — 10 Q

**Series (forecast 4; 73 total, 18 recent)**
**Most repeated — do these first:**

- ★ Number series next/missing term — 22 plain ones (3, 8, 13, 24, 41 → 70; 1, 2, 3, 6, 11, 20, 37, 68 → 125 (2014, 2019); 8, 6, 9, 23, 87 → 429; 2, 6, 12, 20, 30 → 42; 4, 9, 16, 25, ?, 49; 16, 33, 65, 131, 261 → 523; 3, 6, 18, 72, ?, 432; 12, 22, 69, 272, 1365 → 8196; 120, 99, 80, 63, 48 → 35; 3, 20, 63, 144, 275 → 468; 6, 11, 21, 36, 56 → 81; 3, 10, 24, 45, 73 → 108; 8, 7, 11, 12, 14, 17, 17, 22 → 27)
- ★ Wrong term: 5, 12, 19, 33, 47, 75, 104
- ★ 15, 16, 34, 105, 424, 2124, 12756
- ★ 56, 58, 62, 70, 84, 118, 182
- ★ 7, 8, 18, 57, 228, 1165, 6996
- ★ 2, 5, 10, 17, 26, 38, 50, 65
- ★ 30, −5, −45, −90, −145, −195, −255
- ★ 2, 9, 28, 65, 126, 216, 344
- ★ Letter series: JAK, KBL, LCM, MDN → NEO (2018, 2022)
- ★ ELFA, GLHA, ILJA, ?, MLNA → KLLA (2020, 2021)
- ★ DNN, FQQ, HTT, ?, LZZ
- ★ HEC, JGE, LIG, NKI
- ★ DCXW, HGTS, ?, POLK, TSHG
- ★ A, CD, GHI, ?, UVWXY
- ★ BYCX : DWEV :: FUGT : ?
- ★ OTTFFSSEN → T (spelled numbers)

**Also asked:**

- Pairs / interleaved: 61, 57, 50, 61, 43, 36, 61 → 29, 22 (2011, 2017)
- 1, 1, 3, 2, 8, 5, 21, 13 → 55, 34 (Fibonacci interleave)
- 1, 10, 7, 20, 13, 30, 19 → 25, 23
- 42, 40, 38, 35, 33, 31, 28 → 26, 23
- 4, 7, 25, 10, ?, 20, 16, 19
- 17, 20, 9, 12, 5, 6, 3, 2 → 1, 2
- 2, 4, 12, 24, 72 → 144, 432
- Three sequences at once (8, 17, 33, 67, 133 …)
- 28, 327, 464, 5125 → 6216 (n concatenated with n³)
- Base/number-system series: 99, 90, 83, 78 → 69, 63 (99 in bases 10, 11, 12 …) — 2017 & 2019
- Alphanumeric ZA5, Y4B, XC6, W3D
- Q1F, S2E, U6D, W21C → Y88B
- "look-and-say" 1, 11, 21, 1211 …
- Figure/matrix missing numbers (2010 ×3, 2020 ×4, 2026)

**Coding-decoding (forecast 3; 52 total, 16 recent)**
**Most repeated — do these first:**

- ★ Letter-shift codes — 10 of them: TOGETHER → RQEGRJCT (−2/+2 alternating)
- ★ FRIEND → GTLISJ
- ★ KOLKOTA → LPMLPUB
- ★ DENMARK → FCPKCPM
- ★ IMPACT → RNKZXG (reverse-position)
- ★ REASON → TDDQSK
- ★ BASKET → UFLTBC
- ★ India → JLGEF (+1, +2 …)
- ★ SUN → RWK & MOON → LQLR
- ★ COUNSEL → BITIRAK
- ★ TRANSFER → RTNAFSRE (pair swap)
- ★ ROAST → PQYUR
- ★ Letter-to-number: EXAMINATION = 56149512965 (digit sum of position — 2015, 2016)
- ★ HEART = 2018010508 (reverse, two-digit positions)
- ★ ROSE = 6821 / CHAIR = 73456 / PREACH = 961473 → SEARCH
- ★ RIPPLE = 613382 & LIFE = 8192 → FILLER
- ★ UNDERSTAND = 1234567823 → START
- ★ A3T15R = ACTOR
- ★ Z = 52, ACT = 48 → BAT
- ★ DOES = 5$3%
- ★ LOGIC with vowels shifted +2
- ★ A/C number 46873 → 91317157
- ★ REASON = 5, BELIEVED = 7 → GOVERNMENT (count of vowels + 1)

**Also asked:**

- Code languages: '617' = sweet and hot … → coffee is hot
- 'do re me' = he is late …
- Lelibroon = yellow hat …
- "134 = good and tasty …" → see
- Symbol/operation substitution: + means ×, − means ÷ … evaluate
- 9 × 3 + 8 = 24, 10 × 2 + 7 = 35 → 12 × 4 + 3
- 20 − 10 means 200, 8 ÷ 4 means 12 …
- 137 + 276 = 435 → 731 + 672
- 19 M 5 E 39 N 3 F 8
- Interchanging two signs to make 3 − 9 × 27 + 9 ÷ 3 = 3 true
- P$Q inequalities with conclusions
- A * B / A − B / A + B age relations (2013, 2020 ×2)
- Word manipulation: letters 1st, 2nd, 4th, 5th, 6th of REASONING
- SEPARATION letters → meaningful words
- Which word can be made from RECOMMENDATION
- LAVISHLY consonants −1 vowels +1 then sort
- DISTRIBUTION with letters interchanged
- RATE → AERT third letter rule (2019)
- NABMODINT → BADMINTON mirror image
- Letter pairs with the same gap as in the alphabet (PRISON, NECESSARY)
- CYBERNETICS letter in its own alphabetical position
- CANE (?) BATS by the SNIP (NICE) PACE method
- "finger is called toe …" substitution
- "yellow is called white …" colour of the sky

**Syllogism & statement logic (forecast 3; 42 total, 16 recent)**
**Most repeated — do these first:**

- ★ Two statements, two conclusions (25 items): all mangoes are golden / no golden is cheap (2013, 2018, 2022)
- ★ Some codes are secrets / all secrets are puzzles (possibility conclusions)
- ★ Some metals are alloys / no metal is a stone
- ★ All suns are moons / some moons are planets
- ★ All cakes are ice cream / no ice cream is chocolate
- ★ All apples are fruits / all fruits are tasty
- ★ Some professors are doctors / all doctors are patients
- ★ No woman teacher can play / some woman teachers are athletes (2015, 2022)
- ★ Most teachers are boys / some boys are students
- ★ All engineers are good at math
- ★ All politicians are honest / all honest are fair
- ★ Three or four statements with I–IV conclusions (2011 ×3, 2009 ×4, 2024 "all students are intelligent / no intelligent person is lazy / some lazy are poor", 2026 "all Zs are Ys / no Y is an X / every X is a W")

**Also asked:**

- "Which set of three statements is logically related" (2024 ×2: skyscrapers; falcons)
- Which conclusion must be false (polymers/compounds/plastics, 2026)
- "if the statements are facts, which must also be a fact" (chickens/hens 2015 & 2019; stuffed toys 2016; apples/blackberries/coconuts 2013)
- G's/H's/J's/K's set-inclusion logic (2013)
- Freshmen/students/humans (2011)
- Dancers/singers/slim (2020)
- "which alternative's third statement is implied by the first two" (2010 ×2)
- Venn-diagram choice for lions/elephants/animals

&nbsp;

---

&nbsp;

## B2 · Seating, blood relations, clocks, direction — 8 Q

**Seating & arrangement (forecast 3; 73 total)**
**Most repeated — do these first:**

- ★ Two rows facing each other (9 questions: five boys vs five girls 2014; P–U six friends 2014; P, Q, R, S, T, U three-and-three 2017)
- ★ Circular tables with 6 (hexagonal: 2014, 2016 ×4), 8 (with professions 2017 ×5; two teams 2020 ×2; A–H 2024; six analysts with domains 2026), 12 on a square table (2019 ×3), directions round a table (V faces north, where is S — 2023)
- ★ Linear: eleven students in a row (2016 ×3), seven facing east (2012), A–E on a bench (2022), five in a row with "C at an end, D between A and E" (2025), six in a line "Y between V and Z" (2026), houses in a row with colours (2010), houses on both sides of a road (2016 ×3), marching by height (2012 ×3), persons on numbered steps (2013 ×3), floors of a building (2016 ×4), books stacked (2015, 2017, 2026), queue order (2025)

**Also asked:**

- Scheduling variants: five dramas in six hours with a break (2022 ×5), six presenters morning/afternoon (2011 ×4), office allotment in a row of six (2010 ×4, 2013 ×3)

**Blood relations (forecast 3; 59 total)**
**Most repeated — do these first:**

- ★ Coded relations "P ψ Q means P is mother of Q …" — 2008 ×5, 2021 ×3 (identical set)
- ★ A * B / A − B age codes
- ★ Family of six with two couples (2011 ×4, 2013 ×3, 2014 ×5, 2015 ×4, 2017 ×3, 2021 ×4, 2019)
- ★ Family of seven on a picnic (2026)
- ★ Family of six with professions and colours (2019)
- ★ Family weights (2016 ×3)
- ★ Family party minimum persons (2012)
- ★ Emma's children — boys with as many sisters as brothers (2013, 2016)
- ★ One-line statements: "father of his brother is the only son of my mother" (2012)
- ★ "daughter of my wife's grandfather's only child" (2013)
- ★ "mother of his father is the wife of your maternal grandfather" (2017)
- ★ "his only brother is the father of my daughter's father" (2020)
- ★ "her mother is the wife of my father's son" (2022)
- ★ "only child of my paternal grandmother's daughter" (2024)
- ★ "only son of the father of my sister's brother" (2023)
- ★ "daughter of my father's only son" (2026)
- ★ "mother of his sister's brother" (2025)
- ★ "John's mother's father's granddaughter" (2025)
- ★ "Mira's mother-in-law's mother is my grandmother" (2026)
- ★ Uncle of D from A, B, C, D, E facts (2022)

**Clocks & calendars (forecast 2; 29 total)**
**Most repeated — do these first:**

- ★ Hands coincide/opposite: between 3 and 4 (16 4/11 — 2018 ×2, 2022)
- ★ Opposite between 2 and 3 (2:43 7/11)
- ★ How many times coincide in 24 h (22) / opposite in a day (22)
- ★ Hour hand 20° from 4 before and after tennis (2013)
- ★ Quarter to three with the minute hand pointing NE (2018)
- ★ Gaining/losing clocks: gains 10 s in 5 min, set at 9 am, shows 7:20 pm → true 7 pm (2008, 2014)
- ★ Gains 10 min/day, shows 1 pm next day
- ★ Loses 16 min/day set at 5 am, shows 10 pm on day 3 / day 4 (2016, 2019)
- ★ Watch 5 min fast and a 20-min bus frequency
- ★ Doctor visits every 3 h 30 min (2011, 2013)
- ★ Calendars: 3rd is Friday → 25th
- ★ 4th is Tuesday → 27th
- ★ 30 Sept 1991 Wednesday → 14 Mar 1992
- ★ 1 Jan 2000 Saturday → 1 Jan 2001
- ★ 1 Jan 2022 Saturday → 1 Jan 2023
- ★ Day after 61 days
- ★ "day after the day after tomorrow is four days after Monday"
- ★ Republic Day Monday, born 25 days before 5 March 1970
- ★ Four Fridays and four Mondays in January → 20th
- ★ Months with the same calendar
- ★ Ramu every 15 days and Samu every 20 (LCM)
- ★ Train every 45 min
- ★ Mirror-image clock time
- ★ Counting to a billion at 200/min with leap days

**Direction sense (forecast 1; 18 total)**
**Most repeated — do these first:**

- ★ Turns then final direction (2010, 2015, 2017, 2023, 2026)
- ★ Distance from the start after a rectangular walk (10 W, 8 L, 4 L → 10 km — 2013, 2020; 8 N, 4 E, 6 S, 3 W; 15 N, 8 E, 1 W, 20 S → 20 km NW; 30 N, 40 E, 20 S, 40 W → 10)
- ★ Roads grid A–M with half-km offsets (2014 ×5)
- ★ Road junctions farthest south/east (2014)
- ★ NE becomes SE rotation (2010)
- ★ A man walks 3 NE then 4 NW — vector OP (2024)

&nbsp;

---

&nbsp;

## B3 · Grammar & vocabulary — 6 Q

English is 10 questions since 2023: 3 vocabulary, 3 grammar, 2 comprehension, 1 fill-in, 1 idiom in the forecast.
**Vocabulary (forecast 3; 95 total)**
**Most repeated — do these first:**

- ★ Synonyms asked: debacle, egress, polemic, peruse (each twice), clandestine, prudent, stupendous, amicable, indigenous, abridge, reputation, theatrical/histrionic, scintillating, bland, recuperate, alleviate, quibble, gung-ho, abstemious, clemency, coercive, belligerent, ostentatious, adulatory, implacable, propensity, antediluvian, indemnify, nonplussed, liberal, abrogate, incontrovertible, credulous, impolitic, epitome, brevity
- ★ Antonyms asked: disparage, compose, flamboyant, retrograde, profound, deep, cryptic, timid, extrinsic, fabricate, affluent, rude, erudite, negligence, mitigate, augment, bold, spendthrift, sangfroid, inscrutable, tacit, absurd
- ★ One-word substitutions: pilgrim, entrepreneur, bohemian, truant, barbarian, improvident, dotage, stickler, encyclopedia, archaeology, misogamist/sacrilege/prevaricate/torpid (2010), persevere
- ★ Collective noun (a swarm of insects)
- ★ Collocations (fully aware; conduct a study / refute an argument / propose a theory / analyze data)
- ★ Word used inappropriately in four sentences (bundle, echo, pin)
- ★ Word replacing an underlined word in two sentences
- ★ Word halves that form opposites (2024)
- ★ Dictionary order (complicit, compline, compliment, complete)
- ★ "which word is different" (indisputable vs uncertain/dubious/doubtful)
- ★ Technical-writing facts (covering letter, what a résumé excludes, essential element of a technical report)

**Grammar & error spotting (forecast 3; 74 total)**
**Most repeated — do these first:**

- ★ Subject–verb agreement (7): "the instructor, along with the class, is"
- ★ "the principal, along with his assistants, is attending"
- ★ "the President, accompanied by …, was"
- ★ "the decoration … including the furniture … is"
- ★ "neither Peter nor I am"
- ★ "the other boys or Henry are"
- ★ "one of the employees is"
- ★ "the man and the dog were fleeing"
- ★ "each of the participants was"
- ★ "a series of workshops is"
- ★ Active ↔ passive (6): "I know him" → "He is known to me"
- ★ "why did your brother write such a letter"
- ★ "they studied Mathematics last year"
- ★ "John has eaten the apples"
- ★ "they sent for a doctor"
- ★ "were you invited by Alice"
- ★ Reported speech (4): "who dare call you a thief"
- ★ "if you don't keep quiet I shall shoot you"
- ★ "I am glad to be here this evening"
- ★ "she says I like going to the seaside"

**Also asked:**

- Tenses and forms: had left / has been guiding / should have been home / have ever sat / will be laid over
- Past perfect sequence (the curator replaced … after it had deteriorated)
- Subjunctive "I propose that the meeting be put off"
- Lay vs lie
- Stative verbs ("they are understanding" is wrong)
- Question tags (doesn't she / hasn't he / shouldn't you)
- Articles (a/an/the: "an MBA … a mathematical", "many a flower", "the darkest cloud", "he is an M.A. … a university", "a university" vs "an hour", "I have an umbrella … a year ago")
- Relative pronouns (with whom)
- Prepositions (conform to, accused of, listen to, keep to the left, waiting at the campus, look after, for five years, since morning, into a controversy, angry with, prevail upon, leave by 7:30)
- Phrasal verbs (get off, hurry up, evening out, faff about, carried out / turned down / came across / called off)
- Error spotting (cope with, "my elder brother is an M.A.", "if I were he", "average students", "located in Rio de Janeiro")
- Spelling (ceiling, deceive, hindrance, entrepreneur)
- Noun/adjective identification
- Phrase types (noun/adjectival/adverbial)
- Sentence improvement ("a nation is built not by legislation but by …")

&nbsp;

&nbsp;

---

# TIER C — bounded time (~10 Q)

&nbsp;

**Permutation & combination (forecast 3; 68 total, only 9 recent)**
**Most repeated — do these first:**

- ★ Words from letters: MATHEMATICS starting and ending with T (90720 — 2012 ×2)
- ★ CORPORATION vowels together
- ★ DETAIL vowels in odd places (36)
- ★ DELHI starting with D (24)
- ★ BANGLORE with ANGLE together (24)
- ★ INDIA 58th word in dictionary order
- ★ QUEEN's rank (46)
- ★ Permutations just before/after bacdefg
- ★ Letters with exactly 5 between a and b
- ★ 8 students, 3 maths candidates not adjacent (14400)
- ★ Numbers from digits: 3-digit multiples of 5 from 2, 3, 5, 6, 7, 9 (24 — 2015, 2019)
- ★ Multiples of 6 from 1–6 without repetition
- ★ 5-digit multiples of 4 from 1–6 (192)
- ★ Even integers 4000–7000 with distinct digits
- ★ 3-digit numbers from 0, 1, 2, 3, 5 with repetition (100)
- ★ Numbers < 2 × 10⁸ using only 1 and 2 (766)
- ★ Numbers < 1000 containing digit 1
- ★ Numbers from 3, 5, 7 without repetition (15)
- ★ 4-digit numbers with digit product 210
- ★ Sum of all 4-digit numbers from 1, 5, 2, 8
- ★ 8-digit numbers divisible by 9 from 0–9

**Also asked:**

- Selections: 5 from 9 with two specific people not together (91)
- Committee of 5 with more men from 7 M and 6 W (756)
- 10 friends invite 6, three never attend (35)
- Student council 10 → P, VP, S, JS + 2 EC (18900)
- "unsuccessful" in 9 papers (256)
- Prizes 10 identical to 4 children each ≥ 1 (84)
- 5 days from each month (product of C's)
- Exactly 5 bottles in the right boxes (C(9,5) × 9)
- Balls into boxes with size restrictions (17280)
- Animals into cages (large ones only in large cages)
- Tasks to persons with exclusions (192)
- 6 persons, 6 tasks
- Geometry counting: diagonals of a polygon (44 → 11 sides — 2011, 2021; 12 → 54)
- Polygon with diagonals = sides (pentagon)
- Tₙ₊₁ − Tₙ = 21 ⟹ n = 7
- Triangles from 10 points with 6 collinear (100)
- Triangles from 10 + 11 points on two lines (1045)
- Intersections of 5 parallel + 5 concurrent lines (26)
- Lattice paths (1,3) → (5,6) (35)
- Handshakes among 12 (66)
- Railway tickets between 7 stations (42)
- Telephone lines between villages in zones
- Bit strings of length 8 starting 0 or ending 11 (160), of length 10 with five consecutive 0s or 1s (222)
- Σ ⁿPᵣ/r! = 2ⁿ − 1
- 42·ⁿP₂ = ⁿP₄ ⟹ n = 9
- ⁿC₂ : ⁿC₄ = 2 : 1
- N·ⁿ⁻¹Cᵣ₋₁ = r·ⁿCᵣ
- Passwords two letters + three digits from 0–3
- License plates 26³ × 10⁴

**Matrices & determinants (forecast 2; 41 total)**
**Most repeated — do these first:**

- ★ Homogeneous systems with a non-trivial solution: 4x + ky + 2z … (two values of k), 3x + ky − 2z … (k = 33/2), trigonometric coefficients sin θ / cos θ (4 values in [0, 2π]), a³x + (a + 1)³y + … (a = −1)
- ★ Consistency of x + y + 2z = a … (c = a + b)
- ★ Infinitely many solutions (λ = 2, μ = 5; (k + 1)x + 8y = 4k …)
- ★ L + m + n = 0 system
- ★ At least one solution with λz (λ = −5)
- ★ System with ω coefficients
- ★ Determinant values: cube-root-of-unity determinants (2010, 2013, 2025 circulant)
- ★ X, x + 1, x + 3 / x + 1, x + 3, x + 6 / … at x = 2026 (= −1)
- ★ |x x² 2 + x³| rows ⟹ xyz = −1
- ★ Determinant with 2bc − a², c², b² of cubic roots
- ★ Sin(A + B + C) trig determinant = 0
- ★ Determinant divisible by x and y
- ★ Det(Mᵣ) sum for r = 1..2015 (2015²)
- ★ |a b c / b c a / c a b| orthogonal ⟹ a² + b² + c² = 1

**Also asked:**

- Matrix algebra: det(adj A) = 9 for 3 × 3 with det 3
- B = −A⁻¹BA ⟹ (A + B)² = A² + B² (2011, 2023)
- A = [[1,1],[0,1]] ⟹ Aⁿ
- Rotation matrix Fⁿ / F(θ)F(α) = F(θ + α)
- [[0,5],[0,0]] with f(x) = 1 + x + … + x¹⁶
- B¹⁹ entry sum for an upper-triangular matrix (2025)
- A² + 5A + 5I = 0 & B² + 3B + I = 0 ⟹ inverse of BA + 2B + 2A + 4I
- 6A⁻¹ = A² + cA + dI (Cayley–Hamilton)
- I + A + A² + … for a 2 × 2
- Skew-symmetric inverse is skew-symmetric
- Invertible-matrix properties (|adj A| ≠ 0 …)
- Det(cA) = cⁿ det A is the false one
- AB and BA both exist ⟹ x = 3, y = 8
- Matrix X with 2A + B + X = 0
- Solve x + y + z = 1, 4x + 9y + 16z = 25, 16x + 81y + 256z = 625

**Reading comprehension (forecast 2; 50 total)** — passages have been 2–8 questions long (Cuban missile crisis, pterosaurs, fungi, air pollution & cardiovascular disease, white cement, left-handedness, corporate takeovers, lichens, university education, Churchill "we shall fight", VR, science vs religion, climate change, accelerating universe); also single-paragraph "which conclusion can be deduced" items (gig workers 2026) and sentence-that-logically-completes-the-passage (qualitative research 2026). Practice for speed; no study material.
**Networking & Internet (forecast 1–2 but 6 in 2026)** — DNS translates URL → IP; cookies; browser rendering engine; URL / HTTP / DNS definitions matched; IMAP vs POP3 (POP3 downloads and deletes, IMAP syncs); TCP/IP needed for Internet access; www = World Wide Web. One evening covers it.
**Mathematical logic (forecast 1; named in the 2027 syllabus)** — negation of ¬S ∨ (¬R ∧ S) (= S ∧ R); count truth-table rows where (¬p ∨ q) ⇒ r is true (5 of 8); tautology test; implication chains P ⟹ Q ⟹ R with S. Learn truth tables for ∧, ∨, ¬, ⇒, ⇔ and De Morgan for statements.
**Number theory (forecast 1; 22 total)** — greatest number dividing 1657 and 2037 with remainders 6 and 5 (127 — 2019, 2022); smallest number leaving remainders 4, 5, 10, 15 on 9, 10, 15, 20 (355); coins one more than a multiple of 3, two more than 4 … (58); 34041 and 32506 same remainder ⟹ n = 307; remainder of 1! + 2! + … + 100! mod 24 / 240 (2009, 2021); 2³¹ mod 5; unit digit of 13647³²⁶⁵; last digit of 81 × 82 × … × 89; numbers ≤ 1000 divisible by 2, 3, 4, 5, 6 (16); odd multiples of 3 not 7 in 100–200; even numbers 99–999 not multiples of 3 or 5 (240); squares that are also cubes below 1000 (2); parity of (x − z)²y etc.; 565xy divisible by 80; smallest a with 7² and 3³ dividing a × 11³ × 6² × 13¹¹; ordered pairs with 7ᵐ + 7ⁿ divisible by 5 (2500); reversed digits increasing by 18
**Data interpretation, cubes/dice & figures, data sufficiency (~3 Q together)** — pie charts (car cost 2009 ×5, Arts/Commerce institutes 2022 ×3), bar graph of five products (2021 ×3), cumulative marks table (2021 ×4), profit-growth chart (2026), nutrient table diet (2026); Venn-region counting (educated/hardworking/urban/honest 2011 ×3, employed/social worker/illiterate/truthful 2024, married teachers 2024, girls who are players not coaches 2023), count triangles/squares in a figure (2009, 2018, 2022, 2025; 6 × 6 grid squares = 91), cube colouring with 3 colours (2017, 2020), cube of 125 small cubes with three faces visible (8), dice opposite faces, figure analogies and matrix patterns (2011, 2018 ×2, 2022, 2026); data sufficiency (two statements: ages, seating middle, profit %, readers, heaviest brother, x² + y² from xy and x + y — 2014, 2015, 2018, 2019 ×3, 2022, 2024)
**Complex numbers & differential equations (forecast 0.3 together)** — |z| < √3 − 1 ⟹ |z² + 2z cos α| < 2; Σ of nth roots of unity = 0; z₀ = 1 + 2i moved 5 right, 3 up, √2 along î + ĵ, rotated π/2; polynomial value at −5 + 4i; ω-determinants. Differential equations listed under Calculus chapter 8.
**Programming / DS (forecast 1)** — array A[A[5]] indexing; bit-toggle expression x ^ (((1 << m) − 1) << p); compiler phases matching (intermediate representation, top-down parsing, runtime environments, register allocation); debugger definition; minimum registers for a straight-line program; errors an assembler cannot detect (logical).

&nbsp;

&nbsp;

---

# SKIP

**Also asked:**

- **Vectors & 3D geometry** — 101 questions in 18 years, **0 in 2026**, absent from the 2027 syllabus. Do not open the chapter. (If a stray question appears, it will be projection / dot product basics — one line, not worth prep.)
- **Sentence arrangement (para jumbles)** — last seen 2018.
- **Verbal analogy** (SAVANT : OBTUSE) — last seen 2014, and only in the old 20-question English section.
- **Linear programming, statics, dynamics, numerical methods, group theory** — Arihant chapters, never asked.

&nbsp;

_Built 2026-09-02 from the per-question sub-topic labels in `data/questions-classified.jsonl` and the re-verified forecast in `data/forecast-2027.json`. Year references are NIMCET paper years; "×n" is the number of times that exact form has appeared._