# Reproduction scripts (2026-09-02)

Order: `parse.py` (PDF text → `work/questions.jsonl`) → `dump.py YEAR` (compact listing for classification; labels go in `work/cls/YEAR.txt` as `n|CODE|E/M/H|subtopic`) → `aggregate.py` (labels → `work/new-result.json`, `work/questions-classified.jsonl`, diff vs old) → `dups.py` (recycling) → `forecast.py` (back-test + 2027 forecast) → `build_repo.py` (writes data/, dashboards, analysis pages, README).

Set `NIMCET_WORK` to the scratch directory holding `txt/`, `cls/`, `dump/` and `NIMCET_REPO` to the repo root. The classification step itself was done by reading every question (Claude Fable 5.1); image-only pages were rendered with `pdftoppm -r 70` and read visually.

## After the 2026-09-23 audit

- `forecast.py` now counts the five questions the source prints twice inside one paper only once (2012 Q117–120 = Q26–29, 2018 Q85 = Q80), and scores the back-test with the **official** section sizes (50/40/10/20 up to 2022, 50/40/20/10 from 2023) instead of the target paper's realised sizes. It prints the MAE table shown on `forecast.html` (EWMA α = 0.20: 1.450; last year: 1.845). `data/forecast-2027.json` and the `forecast.html` grid were regenerated from it; the 2027 predictions moved by at most 0.1.
- **Do not re-run `build_repo.py`.** It rewrites `README.md`, `forecast.html` and `analysis/nimcet-2027-prediction.md` from templates written before the audit, and would put back claims the audit corrected (pair-level recycling gaps, "270 recycled pairs", trend tests without a multiple-testing correction). Those pages were corrected by hand — see [`../AUDIT-2026-09-23.md`](../AUDIT-2026-09-23.md).
- `build_pyq_book.py` builds `analysis/pyq-by-chapter/` (run it with `PYTHONUTF8=1`). Calculus questions are filed by the audited 2027-syllabus labels in `data/syllabus-2027/labels.jsonl`.
- The 2027-syllabus chapter forecast has its own scripts: [`../syllabus-2027/scripts/`](../syllabus-2027/scripts/).
