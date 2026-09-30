import os
import json,sys,re
S=os.environ.get("NIMCET_WORK","work")
y=int(sys.argv[1]); lim=int(sys.argv[2]) if len(sys.argv)>2 else 420
for l in open(f"{S}/questions.jsonl"):
    q=json.loads(l)
    if q["year"]!=y: continue
    t=re.sub(r"\s*\n\s*"," / ",q["text"]); t=re.sub(r"\s{2,}"," ",t)
    print(f'{q["n"]}| {t[:lim]}')
