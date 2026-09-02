import os
import json, glob, os, collections
S=os.path.dirname(os.path.abspath(__file__))
TOP={ # code: (section, topic name as in old JSON)
 "CAL":("Math","Calculus"),"TRI":("Math","Trigonometry"),"ALG":("Math","Algebra & Progressions"),
 "COO":("Math","Coordinate & Conic Geometry"),"VEC":("Math","Vectors & 3D Geometry"),"PRB":("Math","Probability"),
 "PNC":("Math","Permutation & Combination"),"SET":("Math","Sets Relations & Functions"),"STA":("Math","Statistics"),
 "MAT":("Math","Matrices & Determinants"),"NTH":("Math","Number Theory (HCF/LCM/divisibility)"),
 "CPX":("Math","Complex Numbers"),"DEQ":("Math","Differential Equations"),"LOG":("Math","Mathematical Logic"),
 "PUZ":("Reasoning","Logical Deduction & Puzzles"),"ARI":("Reasoning","Arithmetic (speed-time-work, ratio, %, mixture)"),
 "SEA":("Reasoning","Seating & Arrangement"),"SER":("Reasoning","Series & Sequence"),"COD":("Reasoning","Coding-Decoding"),
 "BLD":("Reasoning","Blood Relations"),"SYL":("Reasoning","Syllogism"),"CLK":("Reasoning","Clocks & Calendars"),
 "DI":("Reasoning","Data Interpretation"),"ANA":("Reasoning","Analogy"),"DIR":("Reasoning","Direction Sense"),
 "ODD":("Reasoning","Odd-one-out & Classification"),"CUB":("Reasoning","Cubes Dice & Visual"),"DS":("Reasoning","Data Sufficiency"),
 "VOC":("English","Vocabulary (synonym/antonym)"),"FIB":("English","Fill in the Blanks"),"GRM":("English","Grammar & Error Spotting"),
 "RC":("English","Reading Comprehension"),"IDM":("English","Idioms & Phrases"),"SAR":("English","Sentence Arrangement"),"EAN":("English","Analogy"),
 "NSB":("Computer","Number System & Boolean Logic"),"HW":("Computer","Hardware OS & General CS"),
 "NET":("Computer","Networking & Internet"),"PRG":("Computer","Programming DS & Algorithms"),
 "IMG":("Unknown","Unknown"),"UNK":("Unknown","Unknown"),
}
qs={}
for l in open(f"{S}/questions.jsonl"):
    q=json.loads(l); qs[(q["year"],q["n"])]=q
rows=[]
for f in sorted(glob.glob(f"{S}/cls/*.txt")):
    y=int(os.path.basename(f)[:4])
    for l in open(f):
        l=l.strip()
        if not l: continue
        n,code,d,sub=l.split("|",3); n=int(n)
        assert code in TOP, (y,n,code); assert d in "EMH",(y,n,d)
        sec,top=TOP[code]
        rows.append({"year":y,"n":n,"section":sec,"topic":top,"code":code,"difficulty":d,"subtopic":sub,"text":qs[(y,n)]["text"]})
years=sorted({r["year"] for r in rows})
by=collections.defaultdict(lambda: collections.Counter())
diff=collections.defaultdict(lambda: collections.Counter())
for r in rows:
    by[(r["section"],r["topic"])][str(r["year"])]+=1
    diff[(r["section"],r["topic"])][r["difficulty"]]+=1
topics=[]
for (sec,top),c in by.items():
    tot=sum(c.values())
    topics.append({"section":sec,"topic":top,"total":tot,"avg_per_year":round(tot/len(years),1),
                   "years_seen":len(c),"by_year":{str(y):c.get(str(y),0) for y in years},"difficulty":dict(diff[(sec,top)])})
topics.sort(key=lambda t:-t["total"])
out={"total":len(rows),"per_year":{str(y):sum(1 for r in rows if r["year"]==y) for y in years},
     "section_totals":dict(collections.Counter(r["section"] for r in rows)),"topics":topics,
     "meta":{"classified_by":"Claude Fable 5.1, single-pass, 2026-09-02","taxonomy_additions":["Mathematical Logic","Data Sufficiency"]}}
json.dump(out,open(f"{S}/new-result.json","w"),indent=1)
with open(f"{S}/questions-classified.jsonl","w") as fh:
    for r in rows: fh.write(json.dumps(r,ensure_ascii=False)+"\n")
# ---- compare with old
old=json.load(open("../data/pyq-analysis-result.json"))
oldt={t["topic"]:t for t in old["topics"]}
print("total",old["total"],"->",out["total"]); print("sections old",old["section_totals"]); print("sections new",out["section_totals"])
print(f"\n{'topic':45} {'old':>4} {'new':>4} {'diff':>5}  {'old/yr':>6} {'new/yr':>6}")
seen=set()
for t in topics:
    o=oldt.get(t["topic"]); seen.add(t["topic"])
    ot=o["total"] if o else 0; oa=o["avg_per_year"] if o else 0
    print(f"{t['topic'][:45]:45} {ot:4} {t['total']:4} {t['total']-ot:+5}  {oa:6} {t['avg_per_year']:6}")
for k in oldt:
    if k not in seen: print(f"{k[:45]:45} {oldt[k]['total']:4} {0:4} {-oldt[k]['total']:+5}")
