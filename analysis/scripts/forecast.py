import os
import json,collections,statistics,sys
S=os.environ.get("NIMCET_WORK","work")
rows=[json.loads(l) for l in open(f"{S}/questions-classified.jsonl")]
YEARS=list(range(2008,2027)); SIZE={"Math":50,"Reasoning":40,"Computer":20,"English":10}
cnt=collections.defaultdict(lambda:collections.Counter())   # (sec,topic)->year->n
secn=collections.defaultdict(collections.Counter)
for r in rows:
    if r["section"]=="Unknown": continue
    cnt[(r["section"],r["topic"])][r["year"]]+=1; secn[r["section"]][r["year"]]+=1
def share(sec,top,y):
    n=secn[sec][y]; return cnt[(sec,top)][y]/n if n else None
def ewma(xs,a):
    v=None
    for x in xs:
        if x is None: continue
        v=x if v is None else a*x+(1-a)*v
    return v or 0
def lastyear(xs,a=None):
    xs=[x for x in xs if x is not None]; return xs[-1] if xs else 0
def mean5(xs,a=None):
    xs=[x for x in xs if x is not None][-5:]; return sum(xs)/len(xs) if xs else 0
def meanall(xs,a=None):
    xs=[x for x in xs if x is not None]; return sum(xs)/len(xs) if xs else 0
methods={"EWMA.20":lambda xs:ewma(xs,.2),"EWMA.35":lambda xs:ewma(xs,.35),"EWMA.50":lambda xs:ewma(xs,.5),"LastYear":lastyear,"Mean5":mean5,"MeanAll":meanall}
# back-test: targets 2015-2026 (skip 2015 for sections with 0), predict share then × actual section size that year
err={m:[] for m in methods}
for (sec,top) in cnt:
    for ty in range(2015,2027):
        n=secn[sec][ty]
        if not n: continue
        hist=[share(sec,top,y) for y in YEARS if y<ty]
        actual=cnt[(sec,top)][ty]
        for m,f in methods.items(): err[m].append(abs(f(hist)*n-actual))
print("BACK-TEST MAE (share space, targets 2015-2026):")
for m,e in sorted(err.items(),key=lambda kv:sum(kv[1])/len(kv[1])): print(f"  {m:9} {sum(e)/len(e):.3f}")
# forecast 2027 with EWMA .20, vectors zeroed
pred={}
for sec,size in SIZE.items():
    tops=[t for (s,t) in cnt if s==sec]
    raw={t:ewma([share(sec,t,y) for y in YEARS],.2) for t in tops}
    if sec=="Math": raw["Vectors & 3D Geometry"]=0.0
    tot=sum(raw.values())
    for t in tops:
        p=raw[t]/tot*size
        # 80% band from EWMA residuals in count space
        res=[]
        for ty in range(2015,2027):
            n=secn[sec][ty]
            if n: res.append(ewma([share(sec,t,y) for y in YEARS if y<ty],.2)*n-cnt[(sec,t)][ty])
        sd=statistics.pstdev(res) if len(res)>1 else 1
        pred[(sec,t)]={"pred":round(p,1),"lo":max(0,round(p-1.28*sd,1)),"hi":round(p+1.28*sd,1),
                       "series":[cnt[(sec,t)][y] for y in YEARS],"last5":round(mean5([cnt[(sec,t)][y] for y in range(2022,2027)]),1)}
json.dump({f"{s}|{t}":v for (s,t),v in pred.items()},open(f"{S}/forecast.json","w"),indent=1)
for sec in SIZE:
    print(f"\n{sec} ({SIZE[sec]})  pred [lo-hi]  2026  last5")
    for (s,t),v in sorted(pred.items(),key=lambda kv:-kv[1]["pred"]):
        if s==sec: print(f"  {t[:40]:40} {v['pred']:5} [{v['lo']}-{v['hi']}]  {v['series'][-1]:3}  {v['last5']}")
