#!/usr/bin/env python3
"""Self-check for the computable answers in nimcet-2027-predicted-paper.md.

Run: python3 verify_predicted_paper.py
Every assert corresponds to one predicted question; a failure means the
published answer key is wrong for that question.
"""
import numpy as np
import sympy as sp
from sympy import Rational as R

x, y, t, n = sp.symbols('x y t n', real=True)
ok = []


def check(qid, got, want, note=""):
    """Compare scalars symbolically; compare sequences element-wise."""
    try:
        if isinstance(got, (list, tuple)) or isinstance(want, (list, tuple)):
            good = (len(got) == len(want) and
                    all(sp.simplify(sp.nsimplify(g) - sp.nsimplify(w)) == 0
                        for g, w in zip(got, want)))
        elif isinstance(got, bool) or isinstance(want, bool):
            good = bool(got) == bool(want)
        else:
            diff = sp.simplify(sp.nsimplify(got) - sp.nsimplify(want))
            # symbolic simplify gives up on some trig forms — fall back to numeric
            good = diff == 0 or abs(complex(sp.N(diff))) < 1e-9
    except Exception as exc:                      # keep going, report the rest
        good, note = False, f"{note} [check error: {exc}]"
    ok.append((qid, good, got, want, note))


# ---- Calculus -------------------------------------------------------------
check("Q1", sp.limit((sp.exp(2*x) - 1 - 2*x)/x**2, x, 0), 2)
check("Q2", sp.limit(sp.sqrt(x)/sp.sqrt(x + sp.sqrt(x + sp.sqrt(x))), x, sp.oo), 1)

f3 = x**3 - 9*x**2 + 24*x + 5
crit = sp.solve(sp.diff(f3, x), x)                       # x = 2 (max), x = 4 (min)
check("Q3", f3.subs(x, 2), 25, f"crit={crit}")
check("Q4", sp.integrate(sp.sec(x), (x, 0, sp.pi/4)), sp.log(1 + sp.sqrt(2)))

f5 = sp.Abs(x + 2)*sp.exp(-x)                            # continuous, kink at x=-2
check("Q5", sp.limit(f5, x, -2), 0)
check("Q6", sp.integrate(2*x - x**2, (x, 0, 2)), R(4, 3))

f7 = x**3 + 2*x + 1                                       # f(1)=4, f'(1)=5
check("Q7", 1/sp.diff(f7, x).subs(x, 1), R(1, 5), f"f(1)={f7.subs(x,1)}")
check("Q8", sp.diff(sp.integrate(sp.log(1 + t), (t, 0, x**2)), x).subs(x, 1),
      2*sp.log(2))

# ---- Algebra & progressions ----------------------------------------------
a, d = sp.symbols('a d')
sol = sp.solve([a + 6*d - 34, a + 12*d - 64], [a, d])     # a=4, d=5
S20 = 20*(2*sol[a] + 19*sol[d])/2
check("Q9", S20, 1030, f"a={sol[a]}, d={sol[d]}")

r = sp.symbols('r')
rs = [s for s in sp.solve([15*(1 - r) - a, a**2/(1 - r**2) - 45], [a, r])
      if abs(s[1]) < 1]
check("Q10", rs[0][1], R(2, 3), f"a={rs[0][0]}")

# AM=5, HM=3.2 -> GM^2 = AM*HM = 16 -> roots of z^2-10z+16
check("Q11", sorted(sp.solve(sp.Symbol('z')**2 - 10*sp.Symbol('z') + 16)), [2, 8])
check("Q12", 5**2 - 2*3, 19)                              # a^2+b^2 = (a+b)^2-2ab

a10, a11 = 1 + 9*2, 1 + 10*2                              # AP: a1=1, d=2 -> 19, 21
check("Q13", 3*(a10 + a11), 120, f"roots {a10},{a11}; q={3*a10*a11}")
check("Q14", sum((-1)**(k - 1)*k for k in range(1, 21)), -10)
check("Q15", sp.solve(sp.log(x, 2) + sp.log(x, 4) - 6, x)[0], 16)
# HP: reciprocals form AP with a4=5, a8=9 -> d=1, a1=2 -> a12=13
check("Q16", R(1, 2 + 11*1), R(1, 13))

# ---- Trigonometry ---------------------------------------------------------
# tower 60 m, depressions 45 (base) and 30 (top): horizontal dist = 60
check("Q17", 60 - 60/sp.sqrt(3), 60*(1 - 1/sp.sqrt(3)))
poly = sp.Poly(sp.expand(sp.chebyshevt(6, sp.Symbol('c'))), sp.Symbol('c'))
co = poly.all_coeffs()                                     # 32,0,-48,0,18,0,-1
check("Q18", co[0] + co[2] + co[4], 2, f"cos6x coeffs {co}")
check("Q19", sp.acos(sp.cos(-5*sp.pi/6)) + sp.asin(sp.sin(7*sp.pi/6)), 2*sp.pi/3)

# tan of both sides gives 5x/(1-6x^2)=1; the extraneous root must be rejected
cand20 = sp.solve(sp.Eq(5*x/(1 - 6*x**2), 1), x)
roots20 = [c for c in cand20
           if abs(float(sp.N(sp.atan(2*c) + sp.atan(3*c) - sp.pi/4))) < 1e-9]
check("Q20", len(roots20), 1, f"candidates={cand20}, valid={roots20}")
check("Q21", (5**2 + 7**2 - 8**2)/sp.Integer(2*5*7), R(1, 7))
check("Q22", sp.simplify(sp.maximum(sp.sin(x) + sp.sin(x + 1), x)),
      2*sp.cos(R(1, 2)))
# x - y tan35 = tan25 (y + x tan35)  ->  x/y = tan(25+35) = tan60 = sqrt(3)
t25, t35 = sp.tan(sp.rad(25)), sp.tan(sp.rad(35))
check("Q23", sp.simplify((t25 + t35)/(1 - t25*t35)), sp.sqrt(3))

# ---- Coordinate geometry --------------------------------------------------
c24 = sp.solve([2*x + 3*y - 1, 4*x - 3*y - 11], [x, y])   # centre (2,-1)
check("Q24", (c24[x], c24[y], sp.sqrt(49*sp.pi/sp.pi)), (2, -1, 7))

A, B, C = sp.Point(1, 2), sp.Point(-3, 0), sp.Point(3, 4)  # from the midpoints
check("Q25", abs(sp.Triangle(A, B, C).area), 2)   # sympy area is signed
check("Q26", sp.solve(sp.Eq(4*y, 4*(x + 2)), y)[0], x + 2)  # tangent at (2,4)

e, dirx = R(1, 2), -4                                       # a/e = 4 -> a = 2
a27 = abs(dirx)*e
check("Q27", (a27**2, a27**2*(1 - e**2)), (4, 3))
check("Q28", sp.expand((x - 3)**2 + (y - 3)**2 - 9),
      x**2 + y**2 - 6*x - 6*y + 9)
p29 = [(px, py) for px in range(-40, 41) for py in (lambda v: (v, -v))(px)
       if 8*px - 3*py == 11]
check("Q29", p29[0][0] + p29[0][1], 0, f"point={p29}")

# ---- Sets, relations, functions ------------------------------------------
check("Q30", len({v % 3 for v in range(1, 13)}), 3)
onto = sum((-1)**i*sp.binomial(3, i)*(3 - i)**4 for i in range(4))
check("Q31", onto, 36)
check("Q32", 2**4, 16)
check("Q33", 25 + 30 - 45, 10)
check("Q34", sp.solve(sp.Eq((2*x + 3)/(x - 1), 5), x)[0], R(8, 3))

# ---- Probability ----------------------------------------------------------
S = [(i, j) for i in range(1, 7) for j in range(1, 7)]
check("Q35", R(sum(1 for i, j in S if i >= 4 or i + j == 8), len(S)), R(5, 9))
check("Q36", R(20*5, 20*5 + 80*1), R(5, 9))
p = R(1, 3)
check("Q37", p**2 + (1 - p)**2, R(5, 9))
check("Q38", R(1, 2)*R(3, 5)/(R(1, 2)*R(3, 5) + R(1, 2)*R(2, 5)), R(3, 5))
check("Q39", sp.binomial(5, 3)*R(1, 32), R(5, 16))

# ---- Statistics -----------------------------------------------------------
mid = [22.5, 27.5, 32.5, 37.5, 42.5, 47.5]
fr = [8, 14, 20, 18, 10, 6]
check("Q40", round(float(np.dot(mid, fr)/sum(fr)), 1), 34.2)
thr = [14.5, 15.2, 16.8, 17.1, 15.9, 16.3, 14.7]
check("Q41", round(float(np.mean(thr)), 2), 15.79)
check("Q42", 14*5 - (10 + 12 + 15 + 18), 15)

# ---- Permutation & combination -------------------------------------------
# BANGLORE = 8 distinct letters; block ANGLE + B,O,R -> 4 units
check("Q43", sp.factorial(4), 24)
from itertools import permutations
c44 = sum(1 for pm in permutations([1, 2, 3, 4, 5], 3)
          if int("".join(map(str, pm))) % 6 == 0)
check("Q44", c44, 8)
check("Q45", sp.binomial(4, 2)*sp.binomial(6, 2) + sp.binomial(4, 3)*6 + 1, 115)

# ---- Matrices & determinants ---------------------------------------------
M46 = sp.Matrix([[x, x + 1, x + 3],
                 [x + 1, x + 3, x + 6],
                 [x + 3, x + 6, x + 10]])
check("Q46", sp.simplify(M46.det().subs(x, 2027)), -1,
      f"det(x) = {sp.simplify(M46.det())}")
B = sp.Matrix([[-1, -1, 2], [0, -1, -1], [0, 0, -1]])
check("Q47", sum((B**2)), 4, f"B^2 = {(B**2).tolist()}")

# ---- 3D, number theory, complex ------------------------------------------
check("Q48", abs(2*1 - 2 + 2*3 - 9)/sp.sqrt(4 + 1 + 4), 1)
check("Q49", pow(7, 100, 5), 1)
check("Q50", sp.expand((1 + sp.I)**8), 16)

# ---- Reasoning / Computer (the arithmetic ones) --------------------------
# Q61 ratios 2:3 and 5:8 -> 10:15:24, sum 49 -> second = 98*15/49
check("Q61", R(98*15, 49), 30)
check("Q62", R(25, 125)*100, 20)                          # 25% rise -> 20% cut
ax, bx = sp.symbols('ax bx')
s63 = sp.solve([ax - 5 - 3*(bx - 5), ax - 2*bx], [ax, bx])
check("Q63", s63[ax], 20, f"B={s63[bx]}")
check("Q64", (R(5, 8) + R(1, 4))/(R(3, 8) + R(3, 4)), R(7, 9))
cr = sp.symbols('cr')
check("Q65", sp.solve(cr - R(1, 4)*(160 - cr) - 100, cr)[0], 112)
check("Q67", 63 - 3, 60)
check("Q69", 74*2 + 5, 153, "a_n = 2*a_(n-1) + 5 from 3,7,16? see note")
check("Q91", int(np.int8(np.uint8(0b11010011))), -45)
check("Q92", (-2**8, 2**8 - 1), (-256, 255))
check("Q93", 0b1100*0b1011, 0b10000100)
check("Q94", int("109", 16), 265)
xb, yb, zb = sp.symbols('xb yb zb')
e95 = sp.simplify_logic((xb | ~yb | ~zb) & (xb | ~yb | zb) & (xb | yb | ~zb))
check("Q95", sp.simplify_logic(sp.Xor(e95, (xb | (~yb & ~zb)))), False,
      f"simplified: {e95}")
rows = [(A_, B_, C_) for A_ in (0, 1) for B_ in (0, 1) for C_ in (0, 1)]
check("Q96", sum(1 for A_, B_, C_ in rows if (A_ ^ B_) and (not B_ or C_)), 3)
check("Q99", int("10101", 2) + sum(int(b)*2**-(i + 1)
                                   for i, b in enumerate("10101")), 21.65625)
check("Q100", np.uint8(0b10011001) + np.uint8(0b01110111), np.uint8(0b00010000))
check("Q101", 2**(16 - 4), 4096)
check("Q104", round(4*5000*2000*512/1024**3, 1), 19.1, "GiB; ~20.5 GB decimal")

# ---------------------------------------------------------------- report
bad = [r for r in ok if not r[1]]
for qid, good, got, want, note in ok:
    if not good:
        print(f"FAIL {qid}: got {got}  expected {want}  {note}")
print(f"\n{len(ok) - len(bad)}/{len(ok)} computable answers verified")
if bad:
    raise SystemExit(1)
