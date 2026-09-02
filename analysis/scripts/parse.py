import os
import re, json, glob, os
S = os.path.dirname(os.path.abspath(__file__))
NOISE = re.compile(r"aspirestudy\.in|^\s*nimcet\b.*\bPYQ\b|NIMCET PREVIOUS YEAR QUESTION|^\s*Aspire Study\s*$")
out = open(f"{S}/questions.jsonl", "w")
print("year  count  short(<40ch)  missing")
total = 0
for f in sorted(glob.glob(f"{S}/txt/*.txt")):
    year = int(re.search(r"(\d{4})", os.path.basename(f)).group(1))
    raw = open(f, encoding="utf-8", errors="replace").read()
    # "Qus : 12 ..." on one line, or "Qus : ...\n 12" (2019 layout)
    parts = re.split(r"^\s*Qus\s*:\s*(?:(\d+)\b[^\n]*|[^\n]*\n\s*(\d+)\s*$)", raw, flags=re.M)
    merged = {}
    for i in range(1, len(parts), 3):
        n = int(parts[i] or parts[i+1]); body = parts[i+2].split("Go to Discussion")[0]
        lines = [re.sub(r"[ \t]{2,}", "  ", l.rstrip()) for l in body.split("\n")]
        text = "\n".join(l for l in lines if l.strip() and not NOISE.search(l)).strip()
        if text: merged[n] = (merged[n] + "\n" + text) if n in merged else text  # page-break splits
    qs = [{"year": year, "n": n, "text": t} for n, t in sorted(merged.items())]
    short = sum(1 for q in qs if len(q["text"]) < 40)
    missing = sorted(set(range(1, max(merged)+1)) - set(merged))
    print(f"{year}  {len(qs):5}  {short:5}  {missing if len(missing)<8 else str(len(missing))+' missing'}")
    total += len(qs)
    for q in qs: out.write(json.dumps(q, ensure_ascii=False) + "\n")
print("total", total)
