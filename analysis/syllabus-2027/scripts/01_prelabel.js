// Step 1: first-pass mapping of every PYQ onto the 2027 syllabus chapters.
// Input : data/questions-classified.jsonl (old 40-topic labels + subtopic + full text)
// Output: data/syllabus-2027/prelabel.jsonl  {year,n,section,old,subtopic,code,rule}
// This is only a draft. Every question is then read by hand and corrected in
// data/syllabus-2027/overrides.tsv (step 2), so rules here favour being explicit
// over being clever; anything they cannot place gets code "?".
const fs = require("fs"), path = require("path");
const ROOT = path.resolve(__dirname, "../../..");
const Q = fs.readFileSync(path.join(ROOT, "data/questions-classified.jsonl"), "utf8")
  .trim().split("\n").map(JSON.parse);

const has = (s, re) => re.test(s);

function mapMath(q, s) {
  switch (q.topic) {
    case "Complex Numbers": return "M-CPX";
    case "Differential Equations": return "M-DE";
    case "Mathematical Logic": return "M-MLOG";
    case "Permutation & Combination": return "M-PNC";
    case "Probability": return "M-PROB";
    case "Statistics": return "M-STAT";
    case "Vectors & 3D Geometry": return "X-VEC";
    case "Number Theory (HCF/LCM/divisibility)": return "X-MATH";
    case "Matrices & Determinants":
      return has(s, /determinant|\|a\||non.?trivial|consistent|system|cramer|singular/i) ? "M-DET" : "M-MAT";
    case "Sets Relations & Functions":
      if (has(s, /\bset|union|intersection|subset|survey|relation|venn|cartesian|newspaper|speak|students|like/i)) return "M-SET";
      if (has(s, /function|inject|surject|onto|one.one|domain|range|inverse|f\(/i)) return "M-FUN";
      return "?";
    case "Algebra & Progressions":
      if (has(s, /binomial|coefficient|\bnC|expansion|term (independent|free)|middle term/i)) return "M-BIN";
      if (has(s, /\blog/i)) return "M-LOG";
      if (has(s, /\b(A\.?P|G\.?P|H\.?P)\b|progression|arithmetic mean|geometric mean|harmonic|\bAM\b|\bGM\b|series|sum of (the )?(first|n)|telescop|infinite/i)) return "M-PROG";
      if (has(s, /exponential|\^x|power|2\^a/i)) return "M-EXP";
      if (has(s, /quadratic|roots?|polynomial|cubic|inequalit|modulus|\|x|real (roots|solutions)|equation/i)) return "M-QUAD";
      return "?";
    case "Calculus":
      if (has(s, /differential equation|order and degree|degree of the differential/i)) return "M-DE";
      if (has(s, /area/i)) return "M-AUC";
      if (has(s, /\blimit|lim\b|tends to/i)) return "M-LIM";
      if (has(s, /differentiab/i)) return "M-DIFB";
      if (has(s, /continu|discontinu/i)) return "M-CONT";
      if (has(s, /tangent|normal|maxim|minim|increas|decreas|rate|extrem|rolle|mean value|greatest value|least value|monoton/i)) return "M-AOD";
      if (has(s, /definite|riemann|compare.*integral|∫\s*\n?\s*[0-9π]/i)) return "M-DEF";
      if (has(s, /integra|antideriv/i)) return "M-IND";
      if (has(s, /deriv|differentiat|dy\/dx|d2y|second derivative/i)) return "M-DIFF";
      if (has(s, /function|domain|range|odd|even|period|inverse|composite|fog|gof/i)) return "M-FUN";
      return "?";
    case "Trigonometry":
      if (has(s, /tower|height|elevation|depression|pole|shadow/i)) return "M-HD";
      if (has(s, /sin\s*-\s*1|cos\s*-\s*1|tan\s*-\s*1|cot\s*-\s*1|inverse|sin⁻¹|tan⁻¹|arc/i)) return "M-ITF";
      if (has(s, /triangle|\bABC\b|circumrad|inrad|sine rule|cosine rule|side/i)) return "M-PTRI";
      if (has(s, /radian|degree|clock|minute hand|sexagesimal/i)) return "M-ANG";
      if (has(s, /solution|general|solve|equation|number of (roots|values)/i)) return "M-TEQ";
      return "M-TRIG";
    case "Coordinate & Conic Geometry":
      if (has(s, /hyperbola|asymptote|rectangular hyperbola/i)) return "M-HYP";
      if (has(s, /ellipse/i)) return "M-ELL";
      if (has(s, /parabola|focal chord|directrix|latus/i)) return "M-PAR";
      if (has(s, /circle|radius|centre|center/i)) return "M-CIR";
      if (has(s, /pair of (straight )?lines|ax2\s*\+\s*2hxy|bisectors of|homogeneous/i)) return "M-PSL";
      if (has(s, /\bline|slope|intercept|perpendicular|parallel|concurrent|gradient/i)) return "M-SL";
      return "M-RCS";
  }
  return "?";
}

function mapReasoning(q, s) {
  switch (q.topic) {
    case "Arithmetic (speed-time-work, ratio, %, mixture)": return "R-NUM";
    case "Clocks & Calendars": return "R-NUM";
    case "Blood Relations": return "R-BR";
    case "Coding-Decoding": return "R-CD";
    case "Data Interpretation": return "R-DI";
    case "Data Sufficiency": return "R-DS";
    case "Direction Sense": return "R-DIR";
    case "Seating & Arrangement": return "R-SEAT";
    case "Series & Sequence": return "R-SER";
    case "Syllogism": return "R-SYL";
    case "Analogy": return "X-ANLR";
    case "Odd-one-out & Classification":
      return has(s, /series|sequence/i) ? "R-SER" : "X-ANLR";
    case "Cubes Dice & Visual":
      return has(s, /mirror|water image|reflection/i) ? "R-MIR" : "R-FIG";
    case "Logical Deduction & Puzzles":
      if (has(s, /course of action|assumption|conclusion|argument|statement/i)) return "R-SCA";
      if (has(s, /strengthen|weaken|inference|infer|passage/i)) return "R-CT";
      if (has(s, /truth|liar|lie|must be true|implication|if .* occurs|logical/i)) return "R-DED";
      if (has(s, /input|machine|rearrange|step/i)) return "R-IO";
      if (has(s, /minimum|maximum|weigh|jug|coins|how many|count|optimis/i)) return "R-PS";
      return "R-PUZ";
  }
  return "?";
}

function mapComputer(q, s) {
  switch (q.topic) {
    case "Networking & Internet":
      if (has(s, /e-?mail|smtp|pop3|imap/i)) return "C-MAIL";
      if (has(s, /virus|worm|phish|malware|firewall|trojan|spam/i)) return "C-CYB";
      return "C-WEB";
    case "Programming DS & Algorithms":
      return has(s, /compil|assembl|interpret|linker|loader/i) ? "C-SYS" : "X-PROG";
    case "Number System & Boolean Logic":
      if (has(s, /floating|ieee|mantissa|exponent|normali[sz]ed/i)) return "C-FP";
      if (has(s, /complement|signed|sign.magnitude|negative/i)) return "C-TWC";
      if (has(s, /bcd|ascii|ebcdic|gray|unicode|excess.?3|character|fraction/i)) return "C-REP";
      if (has(s, /boolean|gate|k.?map|karnaugh|flip|nand|nor|xor|xnor|expression|circuit|minterm|maxterm|sop|pos|de ?morgan|logic/i)) return "C-BOOL";
      if (has(s, /add|subtract|multipl|divi|sum|product/i)) return "C-BAR";
      if (has(s, /base|binary|octal|hex|decimal|radix|equivalent|convert/i)) return "C-BHX";
      return "?";
    case "Hardware OS & General CS":
      if (has(s, /compil|assembl|interpret|linker|loader|translator/i)) return "C-SYS";
      if (has(s, /bootstrap|operating system|\bOS\b|kernel|process|thread|deadlock|schedul|windows|linux|unix/i)) return "C-OS";
      if (has(s, /device driver|utility/i)) return "C-UTIL";
      if (has(s, /cache|\bram\b|\brom\b|dram|sram|eprom|eeprom|prom|flip.flop memory/i)) return "C-RRC";
      if (has(s, /virtual memory|tlb|page|address lines|memory address|bandwidth|access time|memory|byte|nibble|kilobyte|petabyte|exabyte|terabyte/i)) return "C-MEM";
      if (has(s, /tape|backup|back-up/i)) return "C-BKP";
      if (has(s, /disk|latency|\bcd\b|dvd|hard drive|ssd|usb|pen drive|storage|seek/i)) return "C-STO";
      if (has(s, /keyboard|mouse|scanner|joystick|light pen|\bocr\b|\bmicr\b|input device/i)) return "C-HIN";
      if (has(s, /monitor|printer|plotter|speaker|output device|display/i)) return "C-HOUT";
      if (has(s, /i\/?o|dma|interrupt|io processor|peripheral/i)) return "C-IOB";
      if (has(s, /cpu|alu|register|instruction|pipelin|clock|cycle|micro|control unit|addressing|opcode|program counter/i)) return "C-CPU";
      if (has(s, /bus|stored program|von neumann|organi[sz]ation|architecture|generation/i)) return "C-ORG";
      return "?";
  }
  return "?";
}

function mapEnglish(q, s) {
  switch (q.topic) {
    case "Analogy": return "X-ANLE";
    case "Sentence Arrangement": return "X-PARA";
    case "Reading Comprehension": return "E-RC";
    case "Idioms & Phrases": return "E-WPM";
    case "Vocabulary (synonym/antonym)":
      return has(s, /spell/i) ? "E-WF" : "E-WPM";
    case "Fill in the Blanks":
      return has(s, /tense|preposition|article|verb|conditional|perfect/i) ? "E-GP" : "E-WU";
    case "Grammar & Error Spotting":
      if (has(s, /spell/i)) return "E-WF";
      if (has(s, /passive|active voice|narration|direct|indirect|reported|improve|replace the (underlined|bold)/i)) return "E-SF";
      return "E-GP";
  }
  return "?";
}

const out = [];
for (const q of Q) {
  const s = (q.subtopic || "") + " || " + q.text;
  let code = "?";
  if (q.section === "Unknown") code = "X-UNK";
  else if (q.section === "Math") code = mapMath(q, s);
  else if (q.section === "Reasoning") code = mapReasoning(q, s);
  else if (q.section === "Computer") code = mapComputer(q, s);
  else if (q.section === "English") code = mapEnglish(q, s);
  out.push({ year: q.year, n: q.n, section: q.section, old: q.topic, subtopic: q.subtopic, code });
}
fs.writeFileSync(path.join(ROOT, "data/syllabus-2027/prelabel.jsonl"), out.map(o => JSON.stringify(o)).join("\n") + "\n");
const c = {}; for (const o of out) c[o.code] = (c[o.code] || 0) + 1;
console.log("questions:", out.length, " unresolved '?':", c["?"] || 0);
console.log(Object.entries(c).sort().map(([k, v]) => k + " " + v).join("  "));
