import os
import json,collections,statistics,sys
S=os.environ.get("NIMCET_WORK","work")
rows=[json.loads(l) for l in open(f"{S}/questions-classified.jsonl")]
# the source prints these five twice inside the same paper (2012 Q117-120 = Q26-29, 2018 Q85 = Q80); count once (audit 2026-09-23)
DUP={(2012,117),(2012,118),(2012,119),(2012,120),(2018,85)}
rows=[r for r in rows if (r["year"],r["n"]) not in DUP]
YEARS=list(range(2008,2027)); SIZE={"Math":50,"Reasoning":40,"Computer":20,"English":10}
# official section sizes, known before each exam: 50/40/10/20 up to 2022, 50/40/20/10 from 2023
OFF=lambda sec,y:{"Math":50,"Reasoning":40,"Computer":10 if y<2023 else 20,"English":20 if y<2023 else 10}[sec]
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
# Computer doubled from 10 to 20 questions in 2023 and its mix changed with it (hardware/OS up, number systems down).
# EWMA over all years over-predicted number systems in every paper 2023-2026 (13.1/12, 12.9/9, 12.2/8, 11.5/5), so from
# 2024 on Computer is forecast from the 20-question papers only: plain mean of their shares (audit 2026-09-30).
# English also changed size in 2023, but there the all-years EWMA still back-tests best, so it is left alone.
REGIME={"Computer":2023}
def regime_mean(sec,top,ty):
    ys=[y for y in YEARS if REGIME[sec]<=y<ty and secn[sec][y]]
    return sum(share(sec,top,y) for y in ys)/len(ys)
def chosen(sec,top,ty):
    if sec in REGIME and ty>REGIME[sec]: return regime_mean(sec,top,ty)
    return ewma([share(sec,top,y) for y in YEARS if y<ty],.2)
K=1.7   # band half-width in residual SDs; 1.28 held the real count only 73% of the time out of sample (2019-2026), 1.7 holds ~80%
# back-test: targets 2015-2026 (skip 2015 for sections with 0), predict share then × the official section size that year
# (the target paper's realised section size was used before the 2026-09-23 audit — a small leak of the answer)
err={m:[] for m in methods}
for (sec,top) in cnt:
    for ty in range(2015,2027):
        n=secn[sec][ty]
        if not n: continue
        hist=[share(sec,top,y) for y in YEARS if y<ty]
        actual=cnt[(sec,top)][ty]
        for m,f in methods.items(): err[m].append(abs(f(hist)*OFF(sec,ty)-actual))
err["Chosen"]=[abs(chosen(sec,top,ty)*OFF(sec,ty)-cnt[(sec,top)][ty]) for (sec,top) in cnt for ty in range(2015,2027) if secn[sec][ty]]
print("BACK-TEST MAE (share space, targets 2015-2026; Chosen = EWMA.20, Computer from 2023+ papers):")
for m,e in sorted(err.items(),key=lambda kv:sum(kv[1])/len(kv[1])): print(f"  {m:9} {sum(e)/len(e):.3f}")
# EWMA.20, Mean5 and MeanAll are a statistical tie (paired difference EWMA.20 - Mean5 = -0.001 +/- 0.024 over 457 predictions);
# only LastYear is clearly worse. Computer alone, targets 2024-2026 (the 20-question papers):
cerr={m:[] for m in list(methods)+["Regime"]}
for (sec,top) in cnt:
    if sec!="Computer": continue
    for ty in range(2024,2027):
        hist=[share(sec,top,y) for y in YEARS if y<ty]; actual=cnt[(sec,top)][ty]
        for m,f in methods.items(): cerr[m].append(abs(f(hist)*20-actual))
        cerr["Regime"].append(abs(regime_mean(sec,top,ty)*20-actual))
print("Computer only, targets 2024-2026:")
for m,e in sorted(cerr.items(),key=lambda kv:sum(kv[1])/len(kv[1])): print(f"  {m:9} {sum(e)/len(e):.3f}")
def cover(k):   # out-of-sample: band SD from residuals of earlier targets only
    hit=[]
    for (sec,top) in cnt:
        for ty in range(2019,2027):
            if not secn[sec][ty]: continue
            res=[ewma([share(sec,top,y) for y in YEARS if y<py],.2)*secn[sec][py]-cnt[(sec,top)][py] for py in range(2015,ty) if secn[sec][py]]
            p=chosen(sec,top,ty)*OFF(sec,ty); sd=statistics.pstdev(res)
            hit.append(max(0,p-k*sd)<=cnt[(sec,top)][ty]<=p+k*sd)
    return sum(hit)/len(hit)
print(f"band coverage out of sample 2019-2026: k=1.28 {cover(1.28):.3f}, k={K} {cover(K):.3f}")
# forecast 2027 with the chosen method (EWMA .20; Computer from 2023+ papers), vectors zeroed
pred={}
for sec,size in SIZE.items():
    tops=[t for (s,t) in cnt if s==sec]
    raw={t:chosen(sec,t,2027) for t in tops}
    if sec=="Math": raw["Vectors & 3D Geometry"]=0.0
    tot=sum(raw.values())
    for t in tops:
        p=raw[t]/tot*size
        # ~80% band: K x SD of EWMA residuals in count space (for Computer these include the old bias, so the band is wide)
        res=[]
        for ty in range(2015,2027):
            n=secn[sec][ty]
            if n: res.append(ewma([share(sec,t,y) for y in YEARS if y<ty],.2)*n-cnt[(sec,t)][ty])
        sd=statistics.pstdev(res) if len(res)>1 else 1
        pred[(sec,t)]={"pred":round(p,1),"lo":max(0,round(p-K*sd,1)),"hi":round(p+K*sd,1),
                       "series":[cnt[(sec,t)][y] for y in YEARS],"last5":round(mean5([cnt[(sec,t)][y] for y in range(2022,2027)]),1)}
json.dump({f"{s}|{t}":v for (s,t),v in pred.items()},open(f"{S}/forecast.json","w",newline="\n"),indent=1)
for sec in SIZE:
    print(f"\n{sec} ({SIZE[sec]})  pred [lo-hi]  2026  last5")
    for (s,t),v in sorted(pred.items(),key=lambda kv:-kv[1]["pred"]):
        if s==sec: print(f"  {t[:40]:40} {v['pred']:5} [{v['lo']}-{v['hi']}]  {v['series'][-1]:3}  {v['last5']}")
