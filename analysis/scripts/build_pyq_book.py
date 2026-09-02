"""Build tier-S/A/B/C 'PYQ by chapter' pages with every classified question written out in full."""
import json, re, os, collections
R=os.environ.get("NIMCET_REPO", os.path.join(os.path.dirname(os.path.abspath(__file__)),"..",".."))
rows=[json.loads(l) for l in open(f"{R}/data/questions-classified.jsonl")]
# ---- chapter rules: topic -> [(chapter title, regex on subtopic)] ; first match wins, else "Other forms"
C={
"Number System & Boolean Logic":[("Number systems and conversions",r"binary|octal|hex|radix|base|decimal|digits|ternary|multiply|multiplication|division|XOR$|hex XOR"),("Signed numbers (1's / 2's complement, overflow)",r"complement|overflow|range|signed|flags"),("Floating point",r"float|IEEE"),("Boolean algebra, SOP/POS, K-maps",r"boolean|absorption|SOP|POS|minterm|K-map|tautology|venn|truth table|consensus|redundant|functions count|expressions count|unaffected|distributive|equivalence"),("Logic gates and circuits",r"gate|NAND|circuit|XOR|XNOR|multiplexer|universal|ASCII")],
"Calculus":[("Limits",r"limit"),("Continuity and differentiability",r"continuity|differentiab|greatest integer|signum|odd|even|inverse function derivative"),("Differentiation",r"derivative|differentiation|chain rule|implicit|parametric second|functional"),("Application of derivatives (tangent, normal, maxima–minima, rates)",r"tangent|normal|maxim|minim|extrem|increasing|decreasing|inflection|related rates|Rolle|roots count|solutions count|equation solutions|acceleration|max |min |monoton"),("Indefinite integration",r"integral(?!.*(definite|area))|integration|reduction|e\^x"),("Definite integration",r"definite|integral"),("Area under curves",r"area"),("Differential equations",r"ODE|differential")],
"Arithmetic (speed-time-work, ratio, %, mixture)":[("Percentages, profit and loss, interest",r"percent|profit|discount|markup|interest|CI|SI|brokerage|literacy|salary|price"),("Ratio, proportion, averages, mixtures",r"ratio|average|alligation|mixture|money|estate|sharing|contribution|notes|luggage|sweets|sections|rows|three numbers|fraction"),("Time, speed and distance",r"speed|train|race|boat|escalator|chase|wind|climb|pole|caterpillar|monkey|cat |distance|journeys|walks|collision"),("Time and work, pipes",r"work|pipes|machines|computers"),("Ages",r"age"),("Equations and number puzzles",r".")],
"Logical Deduction & Puzzles":[("Conditional grouping and selection sets",r"committee|team|selection|constraints|vehicles|professions|activities|players|staff|interview|roller|teachers|poets|creators|scheduling"),("Attribute matching (who has what)",r"matching|shirts|hobbies|dishes|money items|books attributes|files|passengers|parking|cricket teams|marriage|towns"),("Ordering and ranking",r"order|rank|height|weights|integers|position|queue|ages|oldest|sisters|consecutive|letters to integers|pairwise"),("Truth-tellers and liars",r"truth|liar|statements"),("Rules, processes and simulations",r"switch|basket|pipeline|binary tree|attempt|message|iteration|game|causal|digit|counting|coins|zeros|vehicles pattern|concatenated|water jug|weighings|bags|desert|sheep|eggs|bread|socks|chessboard|coin|logical implication|conditional|implication|pigeonhole|families|points on circle|cryptarithm|bus cost|marbles|dumping|exam parts"),("Verbal reasoning (course of action, assumptions, arguments)",r"course of action|assumption|argument|cause|conclusion|deduce|definition|sequence words|weaken|establishing|business|fact|judges|circular")],
"Trigonometry":[("Heights and distances",r"height|distance|tower|pillar|hill|ship|airplane|lighthouse|depression|elevation|flag|pond|rope"),("Identities and values",r"identity|product|value|sum|telescop|tan15|tan 7pi|cos6x|cos sum|sqrt3|(1\+tan)|sin2x|sin36|principal|cosec cot|cos\(theta|expansion|powers|range|max|min|chain|simplification|half angle|tan35"),("Trigonometric equations and solutions",r"equation|solution|general|sets|graph|sinx=siny"),("Inverse trigonometric functions",r"inverse"),("Properties of triangles",r"triangle|circumradius|inradius|angle from sides|largest angle|Napier|altitudes|rules|Herons|perimeter|area tanA|hypotenuse|angles ratio")],
"Hardware OS & General CS":[("CPU, registers and instruction execution",r"CPU|register|instruction|pipelin|fetch|control unit|opcode|clock|Von Neumann|stored program|execution|microprogram|ALU|performance|program counter|index"),("Memory hierarchy, cache and storage",r"memory|cache|RAM|ROM|DRAM|storage|disk|byte|exabyte|petabyte|TB|nibble|bit smallest|address|bandwidth|FFFF|TLB|virtual|EEPROM|flip flop|CD|backup|buffer|data hierarchy|ASCII|Unicode|FAT|primary"),("I/O, OS and software",r".")],
"Coordinate & Conic Geometry":[("Straight lines and pairs of lines",r"line|bisector|intercept|slope|axes|region|side of|triangle|centroid|median|parallelogram|orthocentre|transformations|square|locus max"),("Circles",r"circle|concyclic|tangents circles|orthogonal circles"),("Parabola",r"parabola"),("Ellipse",r"ellipse|directrix"),("Hyperbola",r"hyperbola|asymptot"),("Other loci and areas",r".")],
"Algebra & Progressions":[("Quadratic equations and polynomials",r"quadratic|roots|polynomial|modulus|factor|cubic|quartic|Newton|recurrence|Cauchy|integer equations|radical|surds|a\+b\+c"),("Progressions (AP, GP, HP) and means",r"AP|GP|HP|progression|harmonic|means|mean|series e|sum|telescop|tetrahedral|bouncing|common terms|GM|AM|alternating"),("Logarithms, indices and exponentials",r"log|exponent|powers|inequality"),("Binomial theorem and coefficients",r"binomial|coefficient")],
"Probability":[("Classical probability (dice, coins, cards, selections)",r"dice|die|ball|letter|matching|adjacent|committee|divisible|coin|determinant|imaginary|no two|tickets|neither|prime|heads tails|alternate|caps|horse|house"),("Conditional probability, independence and Bayes",r"conditional|independ|Bayes|witness|truth|contradict|guessing|total probability|complement|events|odds|addition rule|multiplication|sample space|symmetric"),("Binomial, geometric and expectation",r"binomial|at least|exactly|odd number|random walk|first to|expect|raffle|triplets|Poisson|gun|hits|packets|surgery|geometric|meeting|quadrant|circles")],
"Sets Relations & Functions":[("Set counting and inclusion–exclusion",r"union|inclusion|intersection|survey|count|both|neither|only|exactly|films|newspapers|speakers|voters|venn|regions|cardinality|physics"),("Set algebra and identities",r"identit|power set|subsets|statements|difference|expression|cartesian|triples|pairs|natural|integer|sets with"),("Relations and functions",r"relation|function|injection|inverse|composition|signum|piecewise|substitution")],
"Statistics":[("Mean, median, mode",r"mean(?!.*deviation)|median|mode|average|percentile|grouped|missing|consecutive"),("Dispersion (mean deviation, variance, SD)",r"deviation|variance|sd|dispersion|bounds|moments|kurtosis|squares"),("Distributions, regression, correlation",r".")],
"Series & Sequence":[("Number series",r"number|wrong|odd number|squares|concatenated|three sequences|AP sum"),("Letter and alphanumeric series",r"letter|alpha|bases"),("Figure and table patterns",r".")],
"Coding-Decoding":[("Letter-shift and letter-number codes",r"letter|word to number|anagram|reverse"),("Code languages and symbol substitution",r".")],
"Syllogism":[("Two-statement syllogisms",r"^syllogism$|possibility|false statement"),("Multi-statement and logical-consequence sets",r".")],
"Seating & Arrangement":[("Circular and polygon tables",r"circular|round|hexagonal|square table|circle"),("Rows, lines and two rows facing",r"row|line|bench|queue|facing|eleven|marching|steps|houses"),("Floors, stacks and schedules",r".")],
"Blood Relations":[("Coded relations and one-line statements",r"coded|statement|portrait|photograph|uncle|in-law|relation$|brothers"),("Family puzzles (couples, professions, colours)",r".")],
"Clocks & Calendars":[("Clocks (hands, gaining/losing)",r"hand|clock|watch|time|hour|mirror"),("Calendars",r".")],
"Direction Sense":[("Direction sense",r".")],
"Vocabulary (synonym/antonym)":[("Synonyms",r"synonym|meaning|^[a-z ]+$"),("Antonyms",r"antonym"),("One-word substitutions, usage and collocations",r".")],
"Grammar & Error Spotting":[("Subject–verb agreement and tenses",r"agreement|tense|perfect|verb|lay|subjunctive|modal|plural"),("Active/passive and reported speech",r"passive|reported"),("Error spotting, articles, prepositions, spelling",r".")],
"Fill in the Blanks":[("Fill in the blanks",r".")],
"Reading Comprehension":[("Passages",r".")],
"Idioms & Phrases":[("Idioms and phrasal verbs",r".")],
"Permutation & Combination":[("Arrangements of letters and digits",r"letter|word|digit|dictionary|lexicographic|MATHEMATICS|CORPORATION|DELHI|string|numbers|even integers|multiples|license|passwords|plates|bit strings"),("Selections and distributions",r"select|committee|council|invite|prizes|groups|excluding|bottles|balls|animals|task|papers|derangement|choose|functions|injective|onto|monotone|subsets"),("Geometric and identity counting",r".")],
"Matrices & Determinants":[("Systems of linear equations",r"system|solutions|homogeneous|consistency|infinitely|linear"),("Determinants",r"determinant|det"),("Matrix algebra",r".")],
"Number Theory (HCF/LCM/divisibility)":[("Divisibility, remainders, HCF/LCM",r".")],
"Mathematical Logic":[("Mathematical logic",r".")],
"Data Interpretation":[("Charts and tables",r".")],
"Cubes Dice & Visual":[("Venn diagrams, figures, cubes and dice",r".")],
"Data Sufficiency":[("Data sufficiency",r".")],
"Networking & Internet":[("Networking and the web",r".")],
"Programming DS & Algorithms":[("Programming and compilers",r".")],
"Complex Numbers":[("Complex numbers",r".")],
"Differential Equations":[("Differential equations",r".")],
"Analogy":[("Analogies",r".")],
"Odd-one-out & Classification":[("Odd one out",r".")],
"Sentence Arrangement":[("Sentence arrangement",r".")],
"Vectors & 3D Geometry":[("Vectors and 3D (off syllabus since 2026 — reference only)",r".")],
}
TIERS={"S":[("Number System & Boolean Logic","S1 · Number systems & Boolean logic"),("Calculus","S2 · Calculus"),("Arithmetic (speed-time-work, ratio, %, mixture)","S3 · Arithmetic word problems"),("Logical Deduction & Puzzles","S4 · Logical puzzles & conditional grouping"),("Trigonometry","S5 · Trigonometry")],
"A":[("Hardware OS & General CS","A1 · Computer architecture, OS & memory"),("Coordinate & Conic Geometry","A2 · Coordinate & conic geometry"),("Algebra & Progressions","A3 · Algebra & progressions"),("Probability","A4 · Probability"),("Sets Relations & Functions","A5 · Sets, relations & functions"),("Statistics","A6 · Statistics")],
"B":[("Series & Sequence","B1a · Series"),("Coding-Decoding","B1b · Coding-decoding"),("Syllogism","B1c · Syllogism"),("Seating & Arrangement","B2a · Seating & arrangement"),("Blood Relations","B2b · Blood relations"),("Clocks & Calendars","B2c · Clocks & calendars"),("Direction Sense","B2d · Direction sense"),("Vocabulary (synonym/antonym)","B3a · Vocabulary"),("Grammar & Error Spotting","B3b · Grammar & error spotting")],
"C":[("Permutation & Combination","C1 · Permutation & combination"),("Matrices & Determinants","C2 · Matrices & determinants"),("Reading Comprehension","C3 · Reading comprehension"),("Fill in the Blanks","C4 · Fill in the blanks"),("Idioms & Phrases","C5 · Idioms & phrases"),("Networking & Internet","C6 · Networking & Internet"),("Mathematical Logic","C7 · Mathematical logic"),("Number Theory (HCF/LCM/divisibility)","C8 · Number theory"),("Data Interpretation","C9 · Data interpretation"),("Cubes Dice & Visual","C10 · Venn diagrams, figures, cubes & dice"),("Data Sufficiency","C11 · Data sufficiency"),("Analogy","C12 · Analogy"),("Odd-one-out & Classification","C13 · Odd one out"),("Complex Numbers","C14 · Complex numbers"),("Differential Equations","C15 · Differential equations"),("Programming DS & Algorithms","C16 · Programming"),("Sentence Arrangement","C17 · Sentence arrangement"),("Vectors & 3D Geometry","C18 · Vectors & 3D (off syllabus — reference only)")]}
def chapter(topic,sub):
    for title,rx in C.get(topic,[]):
        if re.search(rx,sub,flags=re.I): return title
    return "Other forms"
OPT=re.compile(r"^\s*([1-4])\s{2,}(.*)$")
def fmt(text):
    lines=[l.rstrip() for l in text.split("\n")]
    # drop exact consecutive duplicates (pdf artefact) and stray page marks
    clean=[]
    for l in lines:
        if l.strip() and (not clean or l.strip()!=clean[-1].strip()) and l.strip()!="\x0c": clean.append(l.replace("\x0c",""))
    stem=[]; opts=[]; cur=None
    for l in clean:
        m=OPT.match(l)
        if m and (cur is None or int(m.group(1))==cur[0]+1):
            cur=[int(m.group(1)),m.group(2).strip()]; opts.append(cur); continue
        if cur is None: stem.append(l.strip())
        else: cur[1]=(cur[1]+" "+l.strip()).strip()
    s=" ".join(stem); s=re.sub(r"\s{2,}"," ",s)
    o="\n\n".join(f"&nbsp;&nbsp;&nbsp;&nbsp;**({n})** {re.sub(r'\s{2,}',' ',t)}" for n,t in opts) if opts else ""
    return s,o
os.makedirs(f"{R}/analysis/pyq-by-chapter",exist_ok=True)
index=[]
for tier,areas in TIERS.items():
    out=[f"# Tier {tier} — every past question, chapter by chapter\n",
         "Each question is printed as it appeared in the paper (text as extracted from the PDF; a few fraction-heavy options come out mangled — the paper in `papers/` is the reference). Grouped into the chapters of [`study-plan-by-tier.md`](../study-plan-by-tier.md). No official answer keys exist for most years; the fourteen most-recycled sets are solved in [`recycled-questions-solved.md`](../recycled-questions-solved.md).\n"]
    for topic,label in areas:
        qs=[r for r in rows if r["topic"]==topic]
        if not qs: continue
        chs=collections.OrderedDict((t,[]) for t,_ in C.get(topic,[])); chs["Other forms"]=[]
        for r in qs: chs[chapter(topic,r["subtopic"])].append(r)
        out.append(f"\n\n---\n\n&nbsp;\n\n# {label}\n\n*{len(qs)} questions across 19 papers · " + " · ".join(f"{t}: {len(v)}" for t,v in chs.items() if v) + "*\n")
        index.append((tier,label,topic,[(t,len(v)) for t,v in chs.items() if v]))
        n=0
        for t,v in chs.items():
            if not v: continue
            out.append(f"\n\n&nbsp;\n\n## {label.split(' · ')[0]} — {t}\n")
            for r in sorted(v,key=lambda r:(-r["year"],r["n"])):
                n+=1; s,o=fmt(r["text"])
                out.append(f"\n---\n\n### Question {n} &nbsp;·&nbsp; NIMCET {r['year']}, Q{r['n']}\n\n*{r['subtopic']} · difficulty {dict(E='easy',M='medium',H='hard')[r['difficulty']]}*\n\n{s}\n")
                if o: out.append("\n"+o+"\n")
    open(f"{R}/analysis/pyq-by-chapter/tier-{tier}.md","w").write("\n".join(out))
    print("tier",tier,len("\n".join(out))//1024,"KB")
json.dump(index,open(f"{R}/analysis/pyq-by-chapter/_index.json","w"))
