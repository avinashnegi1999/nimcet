# Reproduction scripts (2026-09-02)

Order: `parse.py` (PDF text → `work/questions.jsonl`) → `dump.py YEAR` (compact listing for classification; labels go in `work/cls/YEAR.txt` as `n|CODE|E/M/H|subtopic`) → `aggregate.py` (labels → `work/new-result.json`, `work/questions-classified.jsonl`, diff vs old) → `dups.py` (recycling) → `forecast.py` (back-test + 2027 forecast) → `build_repo.py` (writes data/, dashboards, analysis pages, README).

Set `NIMCET_WORK` to the scratch directory holding `txt/`, `cls/`, `dump/` and `NIMCET_REPO` to the repo root. The classification step itself was done by reading every question (Claude Fable 5.1); image-only pages were rendered with `pdftoppm -r 70` and read visually.
