import os
import json,re,math,collections,itertools
S=os.environ.get("NIMCET_WORK","work")
rows=[json.loads(l) for l in open(f"{S}/questions-classified.jsonl")]
STOP=set("the of a an is are to in and which for if then that be by on at as with from this its it or what will has have been each following given find value number".split())
def stem(t):
    t=t.split("\n")[0:6]; t=" ".join(t)          # stem = first lines (before options mostly)
    t=re.sub(r"\n\s*[1-4]\s.*","",t)
    t=t.lower(); t=re.sub(r"\d+","#",t); toks=re.findall(r"[a-z#]+",t)
    return [w for w in toks if w not in STOP and len(w)>1]
docs=[]
for r in rows:
    toks=stem(r["text"])
    if len(toks)>=6 and r["section"]!="Unknown": docs.append((r,collections.Counter(toks)))
df=collections.Counter()
for _,c in docs: df.update(c.keys())
N=len(docs)
vecs=[]
for r,c in docs:
    v={w:(1+math.log(f))*math.log(N/df[w]) for w,f in c.items()}
    n=math.sqrt(sum(x*x for x in v.values())); vecs.append((r,{w:x/n for w,x in v.items()}))
# inverted index to limit pairs
inv=collections.defaultdict(list)
for i,(r,v) in enumerate(vecs):
    for w in v: inv[w].append(i)
cand=set()
for w,ids in inv.items():
    if len(ids)<60:
        for a,b in itertools.combinations(ids,2): cand.add((a,b))
pairs=[]
for a,b in cand:
    ra,va=vecs[a]; rb,vb=vecs[b]
    if ra["year"]==rb["year"]: continue
    s=sum(x*vb.get(w,0) for w,x in va.items())
    if s>=0.6: pairs.append((s,ra,rb))
pairs.sort(key=lambda p:-p[0])
print("docs",N,"pairs>=0.6:",len(pairs),"near-verbatim>=0.85:",sum(1 for p in pairs if p[0]>=0.85))
gap=collections.Counter(abs(p[1]["year"]-p[2]["year"]) for p in pairs)
print("gap histogram:",sorted(gap.items()))
per=collections.Counter()
for s,ra,rb in pairs:
    per[max(ra["year"],rb["year"])]+=1
print("recycled-into-year (later paper) counts:",sorted(per.items()))
src=collections.Counter()
for s,ra,rb in pairs:
    lo,hi=sorted([ra,rb],key=lambda r:r["year"])
    if hi["year"]>=2023: src[lo["year"]]+=1
print("source years feeding 2023-2026 papers:",sorted(src.items()))
json.dump([{"sim":round(s,3),"a":[ra["year"],ra["n"],ra["topic"]],"b":[rb["year"],rb["n"],rb["topic"]],"stem":ra["text"][:120]} for s,ra,rb in pairs],open(f"{S}/dups.json","w"),indent=0,ensure_ascii=False)
for s,ra,rb in pairs[:8]: print(f"{s:.2f} {ra['year']}Q{ra['n']} ~ {rb['year']}Q{rb['n']} | {ra['text'][:70]!r}")
