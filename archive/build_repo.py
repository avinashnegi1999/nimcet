import json, re, os, shutil, collections
S=os.environ.get("NIMCET_WORK","work")
R=os.environ.get("NIMCET_REPO","..")
new=json.load(open(f"{S}/new-result.json")); old=json.load(open(f"{R}/data/pyq-analysis-result.json"))
rows=[json.loads(l) for l in open(f"{S}/questions-classified.jsonl")]
fc=json.load(open(f"{S}/forecast.json")); dups=json.load(open(f"{S}/dups.json"))
YEARS=list(range(2008,2027)); Y=[str(y) for y in YEARS]
DATE="2026-09-02"
# ---------- 1. data files ----------
os.makedirs(f"{R}/data/archive",exist_ok=True)
if not os.path.exists(f"{R}/data/archive/pyq-analysis-result-2026-07-sonnet.json"):
    shutil.copy(f"{R}/data/pyq-analysis-result.json",f"{R}/data/archive/pyq-analysis-result-2026-07-sonnet.json")
new["meta"]={"generated":DATE,"classified_by":"Claude Fable 5.1 (single model, every question read; 2012 image-only pages read visually)",
 "taxonomy_additions":["Mathematical Logic (Math)","Data Sufficiency (Reasoning)"],
 "section_rule":"Arithmetic word problems are counted under Reasoning (they sit in the Analytical Ability section of the real paper)",
 "unknown":"8 = 6 questions marked 'Not Available' on the source site (2019) + 2 garbled entries (2012)"}
json.dump(new,open(f"{R}/data/pyq-analysis-result.json","w"),indent=1)
with open(f"{R}/data/questions-classified.jsonl","w") as f:
    for r in rows: f.write(json.dumps({k:r[k] for k in ("year","n","section","topic","difficulty","subtopic","text")},ensure_ascii=False)+"\n")
json.dump(dups,open(f"{R}/data/recycled-pairs.json","w"),indent=0,ensure_ascii=False)
json.dump(fc,open(f"{R}/data/forecast-2027.json","w"),indent=1)
# ---------- helpers ----------
T={(t["section"],t["topic"]):t for t in new["topics"]}
def last5(t): return [t["by_year"][str(y)] for y in range(2022,2027)]
def pct(n): return f"{100*n/new['total']:.1f}%"
sec=new["section_totals"]
# ---------- 2. index.html ----------
tier={'Logical Deduction & Puzzles':2,'Calculus':1,'Trigonometry':1,'Number System & Boolean Logic':2,'Algebra & Progressions':1,'Coordinate & Conic Geometry':1,'Arithmetic (speed-time-work, ratio, %, mixture)':1,'Vectors & 3D Geometry':4,'Vocabulary (synonym/antonym)':2,'Probability':1,'Hardware OS & General CS':2,'Permutation & Combination':3,'Seating & Arrangement':2,'Fill in the Blanks':2,'Sets Relations & Functions':1,'Series & Sequence':2,'Grammar & Error Spotting':2,'Coding-Decoding':2,'Blood Relations':2,'Reading Comprehension':3,'Syllogism':2,'Statistics':2,'Matrices & Determinants':3,'Number Theory (HCF/LCM/divisibility)':3,'Idioms & Phrases':3,'Clocks & Calendars':3,'Data Interpretation':3,'Analogy':4,'Direction Sense':3,'Odd-one-out & Classification':3,'Cubes Dice & Visual':3,'Networking & Internet':3,'Complex Numbers':4,'Sentence Arrangement':4,'Programming DS & Algorithms':4,'Differential Equations':4,'Mathematical Logic':3,'Data Sufficiency':3,'Unknown':4}
idata={"years":YEARS,"sections":{k:sec.get(k,0) for k in ["Math","Reasoning","English","Computer","Unknown"]},"total":new["total"],
 "topics":[{"s":t["section"],"t":t["topic"],"tot":t["total"],"avg":t["avg_per_year"],"yrs":t["years_seen"],"tier":tier[t["topic"]],"by":[t["by_year"][y] for y in Y]} for t in new["topics"] if t["section"]!="Unknown"]}
h=open(f"{R}/index.html").read()
h=re.sub(r"^const DATA = .*$", "const DATA = "+json.dumps(idata,separators=(",",":"))+";", h, flags=re.M)
h=re.sub(r"Source: aspirestudy\.in year-wise PYQ \(2008–2026\), .*? Full analysis",
 f"Source: aspirestudy.in year-wise PYQ (2008–2026), 2248 questions — every one read and classified by Claude Fable 5.1 (re-verified {DATE}; 2012's image-only pages read visually) · only 8 unclassifiable · Full analysis", h, flags=re.S)
open(f"{R}/index.html","w").write(h)
# ---------- 3. forecast.html ----------
disp={"Sets Relations & Functions":"Sets, Relations & Functions","Arithmetic (speed-time-work, ratio, %, mixture)":"Arithmetic Word Problems","Hardware OS & General CS":"Hardware, OS & Architecture","Number Theory (HCF/LCM/divisibility)":"Number Theory","Programming DS & Algorithms":"Programming & Data Structures","Vocabulary (synonym/antonym)":"Vocabulary","Odd-one-out & Classification":"Odd-one-out","Cubes Dice & Visual":"Cubes, Dice & Visual"}
def fname(s,t): return "Verbal Analogy" if (s,t)==("English","Analogy") else disp.get(t,t)
blocks=[]
for s in ["Math","Reasoning","Computer","English"]:
    items=sorted([(k,v) for k,v in fc.items() if k.startswith(s+"|")],key=lambda kv:-kv[1]["pred"])
    lines=[f'  ["{fname(s,k.split("|")[1])}",{json.dumps(v["series"])},{v["pred"]},{v["lo"]},{v["hi"]}]' for k,v in items]
    blocks.append(f" {s}:[\n"+",\n".join(lines)+"\n ]")
f=open(f"{R}/forecast.html").read()
f=re.sub(r"const DATA=\{.*?\n\};", "const DATA={\n"+",\n".join(blocks)+"\n};", f, flags=re.S)
gap=collections.Counter(abs(p["a"][0]-p["b"][0]) for p in dups)
f=re.sub(r"const GAPS=\[.*?\];", "const GAPS="+json.dumps([[g,gap.get(g,0)] for g in range(1,11)])+";", f)
nv=sum(1 for p in dups if p["sim"]>=0.85)
for a,b in [("2,249","2,248"),("<b>300</b> recycled",f"<b>{len(dups)}</b> recycled"),
 ("300 cross-year near-duplicates were detected, 44 of them near-verbatim",f"{len(dups)} cross-year near-duplicates were detected, {nv} of them near-verbatim"),
 ("1.43 vs 1.81","1.42 vs 1.83"),("±1.43 questions","±1.42 questions"),('scores 1.81 — the worst of eleven methods tested','scores 1.83 — the worst of six methods tested'),
 ("6 &rarr; 1","6 &rarr; 0"),("then collapsed to a single question in 2026","then collapsed to zero in 2026"),
 ("Those slots moved into Algebra (+3.6) and Sets &amp; Functions (+1.8).","Those slots moved into Statistics (+2.0), Sets &amp; Functions (+1.6) and Algebra (+1.6) versus their 5-year means.")]:
    assert a in f, a; f=f.replace(a,b)
tbody='''    <tbody>
      <tr><td class="best">EWMA α = 0.20 &nbsp;<span class="tag s">selected</span></td><td class="num best">1.422</td><td>Exponentially decaying weights over all 19 years</td></tr>
      <tr><td>Mean of last 5</td><td class="num">1.429</td><td>Flat recent window</td></tr>
      <tr><td>Mean of all years</td><td class="num">1.440</td><td>Long-run average share</td></tr>
      <tr><td>EWMA α = 0.35</td><td class="num">1.442</td><td>Faster decay, more weight on recent papers</td></tr>
      <tr><td>EWMA α = 0.50</td><td class="num">1.501</td><td>Very fast decay</td></tr>
      <tr><td>Same as last year</td><td class="num">1.829</td><td>Copy the 2026 count forward</td></tr>
    </tbody>'''
f=re.sub(r"    <tbody>\n      <tr><td class=\"best\">EWMA α = 0\.20.*?</tbody>", tbody, f, flags=re.S)
f=f.replace("Generated 2026-08-17",f"Generated 2026-08-17, re-verified {DATE}")
open(f"{R}/forecast.html","w").write(f)
# ---------- 4. analysis md pages ----------
# analysis/*.md are edited by hand (targeted fixes to tables/prose), not regenerated.
# ---------- 5. README ----------
rd=open(f"{R}/README.md").read()
def rep(a,b,cnt=1):
    global rd; assert a in rd, a; rd=rd.replace(a,b,cnt)
rep("> **2249 questions · 19 papers · 38 topics · 300 recycled questions detected**",
    f"> **2248 questions · 19 papers · 40 topics · {len(dups)} recycled questions detected**\n>\n> **Re-verified {DATE}:** every question re-read and re-classified by Claude Fable 5.1 (one model, no subagents), including the 2012 image-only pages read visually. Per-question labels are now in [`data/questions-classified.jsonl`](data/questions-classified.jsonl). All headline findings held; the numbers below are the re-verified ones.")
rep("and the 300 recycled questions",f"and the {len(dups)} recycled questions")
rep("MAE 1.43 questions vs 1.81 for","MAE 1.42 questions vs 1.83 for")
rep("found **300 cross-year duplicate pairs, 44 of them near-verbatim**",f"found **{len(dups)} cross-year duplicate pairs, {nv} of them near-verbatim**")
rep("then dropped to 1 in 2026**","then dropped to 0 in 2026**")
rep("they moved into **Algebra & Progressions** (+3.6 vs its 5-year mean) and **Sets, Relations & Functions** (+1.8). Study those instead.",
    "they moved into **Statistics** (+2.0 vs its 5-year mean), **Sets, Relations & Functions** (+1.6) and **Algebra & Progressions** (+1.6). Study those instead.")
rows18=[t for t in new["topics"] if t["years_seen"]>=18 and t["section"]!="Unknown"]
tbl="| Topic | Section | Total | Avg/yr |\n|-------|---------|------:|-------:|\n"+"\n".join(
    (f"| ~~{t['topic']}~~ | ~~Math~~ | ~~{t['total']}~~ | **removed — see below** |" if t["topic"].startswith("Vectors") else f"| {t['topic']} | {t['section']} | {t['total']} | {t['avg_per_year']} |") for t in rows18)
rd=re.sub(r"\| Topic \| Section \| Total \| Avg/yr \|\n\|[-|: ]+\|\n(?:\|.*\|\n)+", tbl+"\n", rd)
def top(s,n):
    items=sorted([(k.split("|")[1],v["pred"]) for k,v in fc.items() if k.startswith(s+"|")],key=lambda kv:-kv[1])[:n]
    short={"Algebra & Progressions":"Algebra","Coordinate & Conic Geometry":"Coordinate Geo","Sets Relations & Functions":"Sets & Functions","Logical Deduction & Puzzles":"Puzzles","Arithmetic (speed-time-work, ratio, %, mixture)":"Arithmetic","Series & Sequence":"Series","Coding-Decoding":"Coding","Number System & Boolean Logic":"Number systems & Boolean","Hardware OS & General CS":"Architecture/OS/memory","Networking & Internet":"Networking","Vocabulary (synonym/antonym)":"Vocabulary","Grammar & Error Spotting":"Grammar","Fill in the Blanks":"Fill-blanks","Reading Comprehension":"Comprehension","Seating & Arrangement":"Seating"}
    return " · ".join(f"{short.get(k,k)} {round(v)}" for k,v in items)
rd=re.sub(r"\| Mathematics \| 50 \| .*\n\| Reasoning \| 40 \| .*\n\| Computer \| 20 \| .*\n\| English \| 10 \| .*\n",
    f"| Mathematics | 50 | {top('Math',7)} |\n| Reasoning | 40 | {top('Reasoning',6)} |\n| Computer | 20 | {top('Computer',3)} |\n| English | 10 | {top('English',4)} |\n", rd)
rd=re.sub(r"- 🔴 \*\*Tier S.*?\n- ⛔ \*\*Do not study:\*\*.*?\n",
"""- 🔴 **Tier S — do first (~540 marks):** Number Systems & Boolean Logic (10 Q) · Calculus (10 Q) · Arithmetic word problems (9 Q) · Logical Puzzles (8 Q) · Trigonometry (8 Q).
- 🟠 **Tier A — next:** Computer architecture/OS/memory (8 Q) · Coordinate & Conic Geo (7 Q) · Algebra & Progressions (6 Q) · Probability (5 Q) · Sets & Functions (4 Q) · Statistics (4 Q — the one *rising* Math topic, p = 0.002).
- 🟡 **Tier B — cheap, don't skip:** Series/Coding/Syllogism (10 Q) · Seating/Blood Relations/Clocks/Direction (8 Q) · Grammar + Vocabulary (6 Q).
- ⚪ **Tier C — bounded time:** P&C (3) · Matrices (2) · Comprehension (2) · Networking (1–2 forecast, but 6 in 2026 — do one evening on DNS/HTTP/email protocols) · Mathematical Logic / truth tables (1).
- ⛔ **Do not study:** Vector algebra · para jumbles · verbal analogy · linear programming.
""", rd, flags=re.S)
rep("├── data/\n│   └── pyq-analysis-result.json   # raw classified counts (per-topic, per-year)",
"""├── data/
│   ├── pyq-analysis-result.json   # topic × year counts (re-verified 2026-09-02)
│   ├── questions-classified.jsonl # every question: year, number, section, topic, difficulty, subtopic, text
│   ├── recycled-pairs.json        # cross-year near-duplicate pairs (TF-IDF cosine ≥ 0.6)
│   ├── forecast-2027.json         # EWMA forecast per topic with 80% bands
│   └── archive/                   # the July 2026 Sonnet-subagent counts, kept for comparison""")
rep("│   ├── verify_predicted_paper.py       #   sympy self-check of the answer key (67/67 pass)",
"│   ├── verify_predicted_paper.py       #   sympy self-check of the answer key (67/67 pass)\n│   ├── scripts/                        #   parse → classify → aggregate → dups → forecast → build (reproducible)")
open(f"{R}/README.md","w").write(rd)
# ---------- 6. prediction.md ----------
pm=open(f"{R}/analysis/nimcet-2027-prediction.md").read()
pm=pm.replace("Built from all 19 papers in `papers/` (2008–2026), 2,249 extracted questions.\nGenerated 2026-08-17.",
 f"Built from all 19 papers in `papers/` (2008–2026), 2,248 extracted questions.\nGenerated 2026-08-17. **Re-verified {DATE} with a full single-model re-classification — see §12; the tables in §7–§8 now show the re-verified forecast.**")
oldt={t["topic"]:t for t in old["topics"]}
def mrow(s,t,v,bold=True):
    n=f"**{t}**" if bold else t; a=T[(s,t)]["avg_per_year"]
    return f"| {n} | **{round(v['pred'])}** | {round(v['lo'])}–{round(v['hi'])} | {v['series'][-1]} | {v['last5']} | {a} |"
def sect(s):
    items=sorted([(k.split("|")[1],v) for k,v in fc.items() if k.startswith(s+"|")],key=lambda kv:-kv[1]["pred"])
    return "\n".join(mrow(s,t,v,v["pred"]>=3) for t,v in items)
s7=f"""## 7. Deliverable 2 — Predicted Mathematics topic distribution (50 questions)

Re-verified {DATE}. EWMA α = 0.20 on share-within-section × 50, Vectors forced to zero by the syllabus and its share redistributed proportionally. 80% band = ±1.28 × the standard deviation of the method's own back-test residuals for that topic.

| Topic | Predicted | 80% band | 2026 actual | last-5 mean | 19-yr mean |
|---|---|---|---|---|---|
{sect('Math')}

Calculus + Trigonometry + Coordinate Geometry + Algebra = **~30 of 50**. Statistics is the one Math topic with a significant upward trend (τ = +0.54, p = 0.002) and absorbed the most vector slots in 2026 (6 questions).

---

## 8. Deliverable 2b — Predicted Reasoning / Computer / English distribution

### Analytical Ability & Logical Reasoning (40)

| Topic | Predicted | 80% band | 2026 | last-5 | 19-yr mean |
|---|---|---|---|---|---|
{sect('Reasoning')}

Arithmetic word problems now edge out puzzles as the biggest Reasoning bucket (13 in 2026). Puzzles are the only Reasoning topic with a significant downward trend (τ = −0.44, p = 0.010).

### Computer Awareness (20)

| Topic | Predicted | 80% band | 2026 | last-5 | 19-yr mean |
|---|---|---|---|---|---|
{sect('Computer')}

Networking is the one to watch: near-zero for 18 years, then **6 questions in 2026** (DNS, cookies, rendering engine, POP3 vs IMAP, HTTP, email protocols). The forecast is deliberately conservative — a single-year jump isn't a trend — but treat the 80% band as 1–6.

### General English (10)

| Topic | Predicted | 80% band | 2026 | last-5 | 19-yr mean |
|---|---|---|---|---|---|
{sect('English')}

Dead: **Sentence Arrangement (para jumbles)** and **verbal analogy** — 0 questions since 2018 and 2014 respectively.

---

"""
pm=re.sub(r"## 7\. Deliverable 2 — Predicted Mathematics.*?(?=## 9\. )", s7, pm, flags=re.S)
# section 12
ot={(t["section"] if t["topic"]!="Arithmetic (speed-time-work, ratio, %, mixture)" else "Reasoning",t["topic"]):t for t in old["topics"]}
movers=[]
for (s,t),v in T.items():
    o=ot.get((s,t)); od=o["total"] if o else 0
    if abs(v["total"]-od)>=5: movers.append((v["total"]-od,s,t,od,v["total"]))
movers.sort(key=lambda m:-abs(m[0]))
mv="\n".join(f"| {s} | {t} | {od} | {nw} | {d:+d} |" for d,s,t,od,nw in movers)
secyr=[]
for y in YEARS:
    c=collections.Counter(r["section"] for r in rows if r["year"]==y)
    secyr.append(f"| {y} | {c['Math']} | {c['Reasoning']} | {c['Computer']} | {c['English']} | {c['Unknown']} |")
s12=f"""## 12. Re-verification pass ({DATE}, Claude Fable 5.1)

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
| Recycling gap peaks | 2 and 4 years | **2 and 4 years** ({gap[2]} and {gap[4]} pairs) |
| Recycled pairs / near-verbatim | 300 / 44 | **{len(dups)} / {nv}** (cosine ≥ 0.6 / ≥ 0.85, 1,751 usable stems) |

One new, weaker signal: **Algebra & Progressions is drifting down** over 2008–2025 (τ = −0.34, p = 0.049). It is still ~6 questions a year; just do not expect the 8–12 of the early years.

### Section counts by year (re-verified labels)
| Year | Math | Reasoning | Computer | English | Unknown |
|---|---|---|---|---|---|
{chr(10).join(secyr)}

2015's source PDF stops at Q90, so its English and Computer blocks are absent. Math totals above 50 (e.g. 2018) are questions from the Reasoning block whose *content* is number theory or set counting; the forecast works in share-within-section space precisely so this labelling noise cancels.

### Topics whose 19-year totals moved by 5 or more
| Section | Topic | July | Re-verified | Δ |
|---|---|---|---|---|
{mv}

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
"""
pm=pm.rstrip()+"\n\n---\n\n"+s12
open(f"{R}/analysis/nimcet-2027-prediction.md","w").write(pm)
# ---------- 7. scripts ----------
os.makedirs(f"{R}/analysis/scripts",exist_ok=True)
for n in ["parse.py","dump.py","aggregate.py","dups.py","forecast.py","build_repo.py"]:
    src=open(f"{S}/{n}").read().replace(S,"$NIMCET_WORK").replace(R,"..")
    src=src.replace('S=os.environ.get("NIMCET_WORK","work")','S=os.environ.get("NIMCET_WORK","work")').replace('R=os.environ.get("NIMCET_REPO","..")','R=os.environ.get("NIMCET_REPO","..")')
    if "import os" not in src: src="import os\n"+src
    open(f"{R}/analysis/scripts/{n}","w").write(src)
open(f"{R}/analysis/scripts/README.md","w").write(f"""# Reproduction scripts ({DATE})

Order: `parse.py` (PDF text → `work/questions.jsonl`) → `dump.py YEAR` (compact listing for classification; labels go in `work/cls/YEAR.txt` as `n|CODE|E/M/H|subtopic`) → `aggregate.py` (labels → `work/new-result.json`, `work/questions-classified.jsonl`, diff vs old) → `dups.py` (recycling) → `forecast.py` (back-test + 2027 forecast) → `build_repo.py` (writes data/, dashboards, analysis pages, README).

Set `NIMCET_WORK` to the scratch directory holding `txt/`, `cls/`, `dump/` and `NIMCET_REPO` to the repo root. The classification step itself was done by reading every question (Claude Fable 5.1); image-only pages were rendered with `pdftoppm -r 70` and read visually.
""")
print("built OK")
