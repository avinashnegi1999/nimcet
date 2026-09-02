# The recycled questions — written out in full, with solutions

The fourteen entries from the **"recycling evidence"** table on the [forecast page](https://avinashnegi1999.github.io/nimcet/forecast.html), reproduced verbatim from the papers in `papers/` (both appearances) and solved step by step. When the two papers order the options differently, both option numbers are given.

Why this matters: the recycling gap peaks at **2 and 4 years**, so for 2027 the 2025 and 2023 papers are the most likely sources — and puzzle *sets* are lifted whole, so learning the set solves 3–5 marks at once.

---

## 1. Clock — when do the hands coincide between 3 and 4 o'clock?
**2018 Q80 (and Q85, printed twice) → 2022 Q87 · gap 4 yr**

> At what time, in minutes, between 3 o'clock and 4 o'clock, both the needles will coincide each other?
>
> (1) 5 1/11 (2) 12 4/11 (3) 13 4/11 (4) 16 4/11

**Solution.** At 3:00 the hour hand is at 90°, the minute hand at 0°. The minute hand moves 6°/min, the hour hand 0.5°/min, so the minute hand gains **5.5°/min**. It must gain 90°:

t = 90 / 5.5 = 180/11 = **16 4/11 min past 3**.

**Answer: (4)** in both papers.

Generic rule worth memorising: hands coincide at **60H/11 minutes past H** (H = hour). Opposite each other: 60(H ± 6)/11.

---

## 2. "Five houses lettered A–E in a row" puzzle set
**2009 Q61–65 → 2012 Q86–88 · gap 3 yr**

> Five houses lettered A, B, C, D and E are built in a row next to each other, in the order A, B, C, D, E. Each house has a coloured roof and chimney:
> 1. The roof must be painted green, red or yellow.
> 2. The chimney must be painted white, black or red.
> 3. No house may have the same colour chimney as the colour of its roof.
> 4. No house may use any colour that the adjacent house uses.
> 5. House E has a green roof.
> 6. House B has a red roof and a black chimney.

**Work out the whole configuration once:**

- B uses {red, black}. Its neighbours A and C may use neither. Chimney choices are white/black/red, so **A and C both have white chimneys**, and their roofs are green or yellow.
- D is next to C and E. E's roof is green, so D's roof is red or yellow; D can't share C's white chimney, so **D's chimney is black or red**, and D's roof ≠ C's roof.
- E's chimney can't be green (own roof) and can't be any colour D uses.

| House | Roof | Chimney |
|---|---|---|
| A | green / yellow | **white** |
| B | red | black |
| C | green / yellow | **white** |
| D | red / yellow (≠ C's roof) | black / red (≠ own roof) |
| E | green | whatever D leaves |

**Q61 (2009) / Q88 (2012) — Maximum number of green roofs?**
E is green; A and C can both be green (they are not adjacent to each other or to E, and D is never green); B is red and D can't be green. **3 → option (3).**

**Q62 (2009) / Q87 (2012) — If house C has a yellow roof, which must be true?**
D's roof ≠ yellow → D red roof → D chimney ≠ red → **D chimney black**. E then cannot use red or black → **E has a white chimney → option (1).**

**Q63 (2009) / Q86 (2012) — Which is true?**
A and C always have white chimneys → **"At least two houses have white chimneys" → option (3).** (Black chimneys: only B guaranteed. Red roofs: only B guaranteed. Green roofs: only E guaranteed.)

**Q64 (2009) — Which statement is false?**
"A and C have different colour chimneys" — both are white, so this is **false → option (2).** The other three are all possible.

**Q65 (2009) — Which roof–chimney combinations can a house have?** (i) red roof & black chimney — house B. (ii) yellow roof & red chimney — D with C green. (iii) yellow roof & black chimney — D with C green. **All three → option (1).**

---

## 3. "Family of six, two married couples" puzzle set
**2015 Q12–15 → 2017 Q92–94 · gap 2 yr** (2021 Q84/86/87/105 is the same set a third time)

> In a family of six persons A, B, C, D, E and F there are two married couples.
> D is the grandmother of A and mother of B. C is the wife of B and mother of F. F is the granddaughter of E.

**Tree.** D (grandmother) is married to E (F's grandfather) — couple 1. B is D's child; C is B's wife — couple 2. F is C's child, so F is B and C's daughter. A is D's grandchild, and the only child of D in the family is B, so **A is also B and C's child**. Genders known: D, C, F female; B, E male; **A unknown**.

- **Who is C to A?** Mother → **2015 option (3), 2017 option (2)**.
- **How many male members?** B and E are male, A's gender is not given → **Cannot be determined → 2015 option (4)**. (If a key says "two", it assumed A is female — the data doesn't say.)
- **Which is one of the couples?** D and E → **option (2) "DE"** in both papers.
- **Which is true?** "A is brother of F", "A is sister of F", "B has two daughters" — all depend on A's gender → **None of these → option (4)** in both papers.

---

## 4. "Nine individuals, three committees" puzzle set
**2018 Q113–115 → 2020 Q21–22 · gap 2 yr**

> Nine individuals Z, Y, X, W, V, U, T, S and R are the only candidates who can serve on three committees A, B and C (2020: K1, K2, K3); each serves on exactly one. Committee A has exactly one member more than committee B. Committee C may be empty. Z, Y, X cannot serve on A. W, V, U cannot serve on B. T, S, R cannot serve on C.

**Key facts:** |A| = |B| + 1 and |A| + |B| + |C| = 9. T, S, R must be on A or B. Z, Y, X must be on B or C. W, V, U must be on A or C.

**Q113 / 2020 Q21 — B = {T, Z}. How many on C?**
|B| = 2 → |A| = 3 → |C| = 4. S and R can't be on C and aren't on B, so they are on A with one of W/V/U; C = Y, X and the other two of W/V/U. **4 → option (2).**

**Q114 — B = {T, S, X}. Membership of C?**
|B| = 3 → |A| = 4 → |C| = 2. R must be on A. A can't have Z or Y, so A = {W, V, U, R} and **C = {Z, Y} → option (1).**

**Q115 — R is the only member of B. Who is on A?**
|A| = 2, |C| = 6. T and S can't be on C and aren't on B → **A = {T, S} → option (4).**

**2020 Q22 — Largest possible C?**
T, S, R can never be on C, so at most 6. Achievable: A = {T, S}, B = {R}, C = the other six. **6 → option (3).**

---

## 5. "A–G travelling in three vehicles" puzzle set
**2024 Q59/61/63 → 2025 Q104 · gap 1 yr**

> A, B, C, D, E, F and G travel in three vehicles — Swift, Creta, Nexon — at least two per vehicle; only two of them are male. There are two engineers, two doctors and three teachers.
> 1. C is a lady doctor and does not travel with the sisters A and F.
> 2. B, a male engineer, travels with only G, a teacher, in the Swift.
> 3. D is a male doctor.
> 4. Two persons of the same profession do not travel in the same vehicle.
> 5. A is not an engineer and travels in a Creta.
> 6. The sisters A and F travel in the same vehicle.

**Deduction.** Swift = {B, G} only. A and F are in the Creta. C is not with A, F, so C is in the Nexon; D (doctor) can't share with C (doctor) and the Swift is full, so **D is in the Creta**. The Nexon needs a second passenger → **E is in the Nexon**. Professions left for A, E, F: one engineer and two teachers. A is not an engineer → A is a teacher; F shares the Creta with A, so F is not a teacher → **F is the engineer**, E is a teacher.

| Vehicle | Passengers | Professions |
|---|---|---|
| Swift | B, G | engineer, teacher |
| Creta | A, F, D | teacher, engineer, doctor |
| Nexon | C, E | doctor, teacher |

- **F's profession:** Engineer → **2024 Q59 option (4), 2025 Q104 option (3).**
- **C travels in:** Nexon → **2024 Q61 option (3).**
- **The three teachers:** G, E, A → **2024 Q63 option (2) "GEA".**

(2024's stem said "only one of them is a male" — a misprint, since B and D are both male; 2025 corrected it to two.)

---

## 6. Two-plant factory, defective computer, Bayes
**2019 Q13 → 2023 Q103 · gap 4 yr**

> A factory has two plants. T1 produces 20% and T2 produces 80% of the computers. 7% of all computers are defective. P(defective | T1) = 10 · P(defective | T2). A computer is selected at random and is **not** defective. The probability that it was produced in T2 is
>
> (1) 36/73 (2) 47/79 (3) 78/93 (4) 75/83

**Solution.** Let P(D | T2) = p, so P(D | T1) = 10p. Total-probability:

0.07 = 0.2·(10p) + 0.8·p = 2.8p ⟹ p = 0.025, 10p = 0.25.

P(not D) = 0.93. P(not D | T2) = 0.975.

P(T2 | not D) = 0.8 × 0.975 / 0.93 = 0.78 / 0.93 = **78/93 → option (3).**

---

## 7. Tangent to x = a·cos 2t, y = 2√2·a·sin t
**2015 Q45 → 2023 Q112 · gap 8 yr**

> The equation of the tangent at any point of the curve x = a cos 2t, y = 2√2 a sin t, with m as its slope, is
>
> (1) y = mx + a(m − 1/m) (2) y = mx − a(m + 1/m) (3) y = mx + a(a + 1/a) (4) y = amx + a(m − 1/m)

**Solution.** dx/dt = −2a sin 2t = −4a sin t cos t; dy/dt = 2√2 a cos t.

m = dy/dx = 2√2 a cos t / (−4a sin t cos t) = −1/(√2 sin t) ⟹ sin t = −1/(√2 m).

Point of contact: y₀ = 2√2 a sin t = −2a/m; x₀ = a cos 2t = a(1 − 2 sin²t) = a(1 − 1/m²).

Tangent: y − y₀ = m(x − x₀) ⟹ y + 2a/m = mx − am + a/m ⟹ **y = mx − a(m + 1/m) → option (2).**

(Shortcut: eliminate t — sin t = y/(2√2a), cos 2t = 1 − 2sin²t gives x = a − y²/(4a), i.e. the parabola y² = −4a(x − a); its tangent in slope form is y = m(x − a) − a/m, the same thing.)

---

## 8. "EXAMINATION is coded as 56149512965"
**2015 Q35 → 2016 Q37 · gap 1 yr**

> If EXAMINATION is coded as 56149512965, then GOVERNMENT is coded as
>
> 2015: (1) 7645954552 (2) 7654694562 (3) 7645955423 (4) 7654964526
> 2016: (1) 7655955552 (2) 7645954552 (3) 7645954452 (4) 7644956552

**Solution.** Line the letters up: E→5, X→6, A→1, M→4, I→9, N→5, T→2, O→6. Each digit is the **digit-sum of the letter's alphabet position** (X = 24 → 2+4 = 6, N = 14 → 5, T = 20 → 2, O = 15 → 6).

GOVERNMENT: G=7, O=15→6, V=22→4, E=5, R=18→9, N=5, M=13→4, E=5, N=5, T=2 → **7645954552**.

**Answer: 2015 option (1), 2016 option (2).**

---

## 9. Synonym: DEBACLE
**2018 Q24 → 2022 Q64 · gap 4 yr**

> Find the synonym most nearly similar in meaning to DEBACLE: Catastrophe / Dandy / Corker / Opulence

A debacle is a sudden, complete failure or collapse — **Catastrophe**. (Dandy = a man devoted to style; corker = something excellent; opulence = wealth.)

**Answer: 2018 option (1), 2022 option (3).**

---

## 10. Caterpillar climbing a 75-inch pole
**2017 Q105 → 2018 Q89 · gap 1 yr**

> A caterpillar crawls up a pole 75 inches high, starting from the ground. Each day it crawls up 5 inches and each night it slides down 4 inches. When will it reach the top?
>
> (1) end of 70 days (2) end of 71 days (3) end of 72 days (4) end of 73 days

**Solution.** Net gain is 1 inch per full day-and-night, but the caterpillar reaches the top *during a day*, before sliding. At the start of day n it stands at (n − 1) inches; by the end of that day's climb it is at n − 1 + 5 = n + 4. Set n + 4 ≥ 75 ⟹ n = 71.

**Answer: end of 71 days → option (2).** (Trap answer: 75 − 5 = 70 forgets the last climb needs a full day.)

---

## 11. Circle touching the x-axis and the circle centred (0, 3), radius 2
**2015 Q70 → 2023 Q57 · gap 8 yr**

> A circle touches the x-axis and also touches the circle with centre (0, 3) and radius 2. The locus of the centre of the first circle is: parabola / hyperbola / circle / ellipse

**Solution.** Let the centre be (h, k) with k > 0; touching the x-axis means its radius is k. Touching the given circle externally: distance between centres = k + 2.

h² + (k − 3)² = (k + 2)² ⟹ h² + k² − 6k + 9 = k² + 4k + 4 ⟹ **h² = 10k − 5**, a parabola.

(Internal contact gives h² + (k−3)² = (k−2)² ⟹ h² = 2k − 5 — also a parabola.)

**Answer: parabola → 2015 option (1), 2023 option (3).**

---

## 12. Syllogism: "All mangoes are golden in colour"
**2018 Q96 → 2022 Q71 · gap 4 yr** (also 2013 Q71)

> Statements: All mangoes are golden in colour. No golden-coloured things are cheap.
> Conclusions: I. All mangoes are cheap. II. Golden-coloured mangoes are not cheap.

**Solution.** All M ⊂ G and G ∩ Cheap = ∅ ⟹ no mango is cheap. Conclusion I contradicts this; conclusion II (golden mangoes — i.e. every mango — are not cheap) follows directly.

**Answer: only II follows → 2018 option (2), 2022 option (3).**

---

## 13. City literacy (40% of adults illiterate, 85% of children literate)
**2018 Q76 → 2020 Q10 · gap 2 yr**

> In a city 40% of the adults are illiterate while 85% of the children are literate. If the ratio of adults to children is 2 : 3, what percent of the population is literate?
>
> (1) 20% (2) 25% (3) 50% (4) 75%

**Solution.** Take 2 adults and 3 children (5 people). Literate adults = 60% of 2 = 1.2; literate children = 85% of 3 = 2.55. Total literate = 3.75 of 5 = **75%**.

(2020 changed the figures to 40.1% and 85.1%: 0.599·2 + 0.851·3 = 3.751 of 5 ≈ 75%, same option.)

**Answer: option (4)** in both papers.

---

## 14. Bootstrap loader — where is its first instruction stored?
**2008 Q110 → 2017 Q30 · gap 9 yr**

> The first instruction of the bootstrap loader program of an operating system is stored in: RAM / BIOS / Hard Disk / None of these

**Solution.** At power-on RAM is empty and the disk can't be read until a driver is running, so the CPU's first instructions come from **ROM firmware — the BIOS** (its reset vector). The BIOS then loads the boot sector from disk into RAM.

**Answer: BIOS → 2008 option (2), 2017 option (3).**

---

_Compiled 2026-09-02 from `data/recycled-pairs.json` (TF-IDF cosine ≥ 0.6 over numeral-masked stems). Question wording is as printed on aspirestudy.in; obvious typos left as-is._
