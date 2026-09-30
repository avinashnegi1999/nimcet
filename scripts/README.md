# Scripts

The code that rebuilds every number in this repo. Run everything from the repo root, and set `PYTHONUTF8=1` on Windows.

| Folder / file | What it builds | Language |
|---|---|---|
| [`topic-forecast/`](topic-forecast/) | Question labels, the topic forecast (`data/forecast-2027.json`) and the past-question pages | Python |
| [`chapter-forecast/`](chapter-forecast/) | Chapter labels, repeats, the chapter forecast (`data/syllabus-2027/`) and `syllabus-2027-heatmap.html` | Node.js |
| [`check_mock_answers.py`](check_mock_answers.py) | Checks the 67 computable answers in the mock paper | Python (sympy, numpy) |

---

## Topic forecast (Python)

Run these in order:

1. `parse.py` turns the PDF text into `work/questions.jsonl`.
2. `dump.py YEAR` prints a compact listing for labelling. Labels go in `work/cls/YEAR.txt` as `n|CODE|E/M/H|subtopic`.
3. `aggregate.py` turns labels into `work/questions-classified.jsonl` and `work/new-result.json`, and shows the difference from the old labels.
4. `dups.py` finds candidate re-used questions.
5. `forecast.py` runs the back-test and writes the 2027 topic forecast.
6. `build_pyq_book.py` writes `3-practice/past-questions/`.

- **Settings:** set `NIMCET_WORK` to a scratch folder (holding `txt/`, `cls/`, `dump/`) and `NIMCET_REPO` to the repo root.
- **Labels:** every question was read and labelled by Claude Fable 5.1. Image-only pages were rendered with `pdftoppm -r 70` and read visually.
- **`forecast.py` prints** the back-test table, a Computer-only back-test for 2024–2026, and the coverage of the 80% range.
  - Computer is forecast from the 20-question papers (2023+) only.
  - The range is ±1.7 residual SDs.
  - Questions printed twice in one paper are counted once.
- **After running `forecast.py`,** copy `forecast.json` to `data/forecast-2027.json`. The `forecast.html` grid and the tables in `4-analysis/README.md` are updated from it by hand.

## Chapter forecast (Node.js)

Run `01_prelabel.js` to `07_build_page.js` in order, then:

- `08_readme_table.js` prints the tables in [`4-analysis/chapter-forecast.md`](../4-analysis/chapter-forecast.md).
- `dump.js`, `listpairs.js` and `showpairs.js` are review helpers.

Method and results: [`4-analysis/chapter-forecast.md`](../4-analysis/chapter-forecast.md).

---

## Do not run `archive/build_repo.py`

It rebuilds the README and the web pages from old templates, which would bring back claims the audits corrected. It is kept only for the record. See [audit 2026-09-23](../4-analysis/audits/2026-09-23.md).
