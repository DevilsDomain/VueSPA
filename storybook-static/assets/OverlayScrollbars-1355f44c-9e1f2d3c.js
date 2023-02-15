import { p as Do, s as zo } from './index-681e4b07-fb702c61.js';
import { r as cn } from './index-e0023ec7.js';
import './index-73814c06.js';
import './index-3121cc12.js';
import { a as Mo, j as Oa } from './jsx-runtime-c8b955b8.js';
import './index-e51aae5b.js';
function za($a) {
  return (
    (za =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (ar) {
            return typeof ar;
          }
        : function (ar) {
            return ar &&
              typeof Symbol == 'function' &&
              ar.constructor === Symbol &&
              ar !== Symbol.prototype
              ? 'symbol'
              : typeof ar;
          }),
    za($a)
  );
}
var Xs = { exports: {} };
/*!
 * OverlayScrollbars
 * https://github.com/KingSora/OverlayScrollbars
 *
 * Version: 1.13.0
 *
 * Copyright KingSora | Rene Haas.
 * https://github.com/KingSora
 *
 * Released under the MIT license.
 * Date: 02.08.2020
 */ (function ($a) {
  (function (ar, Lr) {
    $a.exports = Lr(ar, ar.document, void 0);
  })(typeof window < 'u' ? window : Do, function (ar, Lr, z) {
    var zt = 'OverlayScrollbars',
      _ = {
        o: 'object',
        f: 'function',
        a: 'array',
        s: 'string',
        b: 'boolean',
        n: 'number',
        u: 'undefined',
        z: 'null',
      },
      i = {
        c: 'class',
        s: 'style',
        i: 'id',
        l: 'length',
        p: 'prototype',
        ti: 'tabindex',
        oH: 'offsetHeight',
        cH: 'clientHeight',
        sH: 'scrollHeight',
        oW: 'offsetWidth',
        cW: 'clientWidth',
        sW: 'scrollWidth',
        hOP: 'hasOwnProperty',
        bCR: 'getBoundingClientRect',
      },
      ke = (function () {
        var A = {},
          O = {},
          x = ['-webkit-', '-moz-', '-o-', '-ms-'],
          e = ['WebKit', 'Moz', 'O', 'MS'];
        function u(f) {
          return f.charAt(0).toUpperCase() + f.slice(1);
        }
        return {
          _cssPrefixes: x,
          _jsPrefixes: e,
          _cssProperty: function (d) {
            var B = O[d];
            if (O[i.hOP](d)) return B;
            for (
              var sr = u(d), w = Lr.createElement('div')[i.s], M, vr = 0, R, kr;
              vr < x.length;
              vr++
            )
              for (
                kr = x[vr].replace(/-/g, ''),
                  M = [d, x[vr] + d, kr + sr, u(kr) + sr],
                  R = 0;
                R < M[i.l];
                R++
              )
                if (w[M[R]] !== z) {
                  B = M[R];
                  break;
                }
            return (O[d] = B), B;
          },
          _cssPropertyValue: function (d, B, sr) {
            var w = d + ' ' + B,
              M = O[w];
            if (O[i.hOP](w)) return M;
            for (
              var vr = Lr.createElement('div')[i.s],
                R = B.split(' '),
                kr = sr || '',
                H = 0,
                G = -1,
                j;
              H < R[i.l];
              H++
            )
              for (; G < ke._cssPrefixes[i.l]; G++)
                if (
                  ((j = G < 0 ? R[H] : ke._cssPrefixes[G] + R[H]),
                  (vr.cssText = d + ':' + j + kr),
                  vr[i.l])
                ) {
                  M = j;
                  break;
                }
            return (O[w] = M), M;
          },
          _jsAPI: function (d, B, sr) {
            var w = 0,
              M = A[d];
            if (!A[i.hOP](d)) {
              for (M = ar[d]; w < e[i.l]; w++)
                M = M || ar[(B ? e[w] : e[w].toLowerCase()) + u(d)];
              A[d] = M;
            }
            return M || sr;
          },
        };
      })(),
      S = (function () {
        function A(x) {
          return x
            ? ar.innerWidth || Lr.documentElement[i.cW] || Lr.body[i.cW]
            : ar.innerHeight || Lr.documentElement[i.cH] || Lr.body[i.cH];
        }
        function O(x, e) {
          if (za(x) != _.f) throw "Can't bind function!";
          var u = i.p,
            f = Array[u].slice.call(arguments, 2),
            d = function () {},
            B = function () {
              return x.apply(
                this instanceof d ? this : e,
                f.concat(Array[u].slice.call(arguments)),
              );
            };
          return x[u] && (d[u] = x[u]), (B[u] = new d()), B;
        }
        return {
          wW: O(A, 0, !0),
          wH: O(A, 0),
          mO: O(ke._jsAPI, 0, 'MutationObserver', !0),
          rO: O(ke._jsAPI, 0, 'ResizeObserver', !0),
          rAF: O(ke._jsAPI, 0, 'requestAnimationFrame', !1, function (x) {
            return ar.setTimeout(x, 1e3 / 60);
          }),
          cAF: O(ke._jsAPI, 0, 'cancelAnimationFrame', !1, function (x) {
            return ar.clearTimeout(x);
          }),
          now: function () {
            return (Date.now && Date.now()) || new Date().getTime();
          },
          stpP: function (e) {
            e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = !0);
          },
          prvD: function (e) {
            e.preventDefault && e.cancelable
              ? e.preventDefault()
              : (e.returnValue = !1);
          },
          page: function (e) {
            e = e.originalEvent || e;
            var u = 'page',
              f = 'client',
              d = 'X',
              B = 'Y',
              sr = e.target || e.srcElement || Lr,
              w = sr.ownerDocument || Lr,
              M = w.documentElement,
              vr = w.body;
            if (e.touches !== z) {
              var R = e.touches[0];
              return { x: R[u + d], y: R[u + B] };
            }
            return !e[u + d] && e[f + d] && e[f + d] != null
              ? {
                  x:
                    e[f + d] +
                    ((M && M.scrollLeft) || (vr && vr.scrollLeft) || 0) -
                    ((M && M.clientLeft) || (vr && vr.clientLeft) || 0),
                  y:
                    e[f + B] +
                    ((M && M.scrollTop) || (vr && vr.scrollTop) || 0) -
                    ((M && M.clientTop) || (vr && vr.clientTop) || 0),
                }
              : { x: e[u + d], y: e[u + B] };
          },
          mBtn: function (e) {
            var u = e.button;
            return !e.which && u !== z
              ? u & 1
                ? 1
                : u & 2
                ? 3
                : u & 4
                ? 2
                : 0
              : e.which;
          },
          inA: function (e, u) {
            for (var f = 0; f < u[i.l]; f++)
              try {
                if (u[f] === e) return f;
              } catch {}
            return -1;
          },
          isA: function (e) {
            var u = Array.isArray;
            return u ? u(e) : this.type(e) == _.a;
          },
          type: function (e) {
            return e === z || e === null
              ? e + ''
              : Object[i.p].toString
                  .call(e)
                  .replace(/^\[object (.+)\]$/, '$1')
                  .toLowerCase();
          },
          bind: O,
        };
      })(),
      I = Math,
      vt = ar.jQuery,
      Zs = (function () {
        var A = {
          p: I.PI,
          c: I.cos,
          s: I.sin,
          w: I.pow,
          t: I.sqrt,
          n: I.asin,
          a: I.abs,
          o: 1.70158,
        };
        return {
          swing: function (x, e, u, f, d) {
            return 0.5 - A.c(x * A.p) / 2;
          },
          linear: function (x, e, u, f, d) {
            return x;
          },
          easeInQuad: function (x, e, u, f, d) {
            return f * (e /= d) * e + u;
          },
          easeOutQuad: function (x, e, u, f, d) {
            return -f * (e /= d) * (e - 2) + u;
          },
          easeInOutQuad: function (x, e, u, f, d) {
            return (e /= d / 2) < 1
              ? (f / 2) * e * e + u
              : (-f / 2) * (--e * (e - 2) - 1) + u;
          },
          easeInCubic: function (x, e, u, f, d) {
            return f * (e /= d) * e * e + u;
          },
          easeOutCubic: function (x, e, u, f, d) {
            return f * ((e = e / d - 1) * e * e + 1) + u;
          },
          easeInOutCubic: function (x, e, u, f, d) {
            return (e /= d / 2) < 1
              ? (f / 2) * e * e * e + u
              : (f / 2) * ((e -= 2) * e * e + 2) + u;
          },
          easeInQuart: function (x, e, u, f, d) {
            return f * (e /= d) * e * e * e + u;
          },
          easeOutQuart: function (x, e, u, f, d) {
            return -f * ((e = e / d - 1) * e * e * e - 1) + u;
          },
          easeInOutQuart: function (x, e, u, f, d) {
            return (e /= d / 2) < 1
              ? (f / 2) * e * e * e * e + u
              : (-f / 2) * ((e -= 2) * e * e * e - 2) + u;
          },
          easeInQuint: function (x, e, u, f, d) {
            return f * (e /= d) * e * e * e * e + u;
          },
          easeOutQuint: function (x, e, u, f, d) {
            return f * ((e = e / d - 1) * e * e * e * e + 1) + u;
          },
          easeInOutQuint: function (x, e, u, f, d) {
            return (e /= d / 2) < 1
              ? (f / 2) * e * e * e * e * e + u
              : (f / 2) * ((e -= 2) * e * e * e * e + 2) + u;
          },
          easeInSine: function (x, e, u, f, d) {
            return -f * A.c((e / d) * (A.p / 2)) + f + u;
          },
          easeOutSine: function (x, e, u, f, d) {
            return f * A.s((e / d) * (A.p / 2)) + u;
          },
          easeInOutSine: function (x, e, u, f, d) {
            return (-f / 2) * (A.c((A.p * e) / d) - 1) + u;
          },
          easeInExpo: function (x, e, u, f, d) {
            return e == 0 ? u : f * A.w(2, 10 * (e / d - 1)) + u;
          },
          easeOutExpo: function (x, e, u, f, d) {
            return e == d ? u + f : f * (-A.w(2, (-10 * e) / d) + 1) + u;
          },
          easeInOutExpo: function (x, e, u, f, d) {
            return e == 0
              ? u
              : e == d
              ? u + f
              : (e /= d / 2) < 1
              ? (f / 2) * A.w(2, 10 * (e - 1)) + u
              : (f / 2) * (-A.w(2, -10 * --e) + 2) + u;
          },
          easeInCirc: function (x, e, u, f, d) {
            return -f * (A.t(1 - (e /= d) * e) - 1) + u;
          },
          easeOutCirc: function (x, e, u, f, d) {
            return f * A.t(1 - (e = e / d - 1) * e) + u;
          },
          easeInOutCirc: function (x, e, u, f, d) {
            return (e /= d / 2) < 1
              ? (-f / 2) * (A.t(1 - e * e) - 1) + u
              : (f / 2) * (A.t(1 - (e -= 2) * e) + 1) + u;
          },
          easeInElastic: function (x, e, u, f, d) {
            var B = A.o,
              sr = 0,
              w = f;
            return e == 0
              ? u
              : (e /= d) == 1
              ? u + f
              : (sr || (sr = d * 0.3),
                w < A.a(f)
                  ? ((w = f), (B = sr / 4))
                  : (B = (sr / (2 * A.p)) * A.n(f / w)),
                -(
                  w *
                  A.w(2, 10 * (e -= 1)) *
                  A.s(((e * d - B) * (2 * A.p)) / sr)
                ) + u);
          },
          easeOutElastic: function (x, e, u, f, d) {
            var B = A.o,
              sr = 0,
              w = f;
            return e == 0
              ? u
              : (e /= d) == 1
              ? u + f
              : (sr || (sr = d * 0.3),
                w < A.a(f)
                  ? ((w = f), (B = sr / 4))
                  : (B = (sr / (2 * A.p)) * A.n(f / w)),
                w * A.w(2, -10 * e) * A.s(((e * d - B) * (2 * A.p)) / sr) +
                  f +
                  u);
          },
          easeInOutElastic: function (x, e, u, f, d) {
            var B = A.o,
              sr = 0,
              w = f;
            return e == 0
              ? u
              : (e /= d / 2) == 2
              ? u + f
              : (sr || (sr = d * (0.3 * 1.5)),
                w < A.a(f)
                  ? ((w = f), (B = sr / 4))
                  : (B = (sr / (2 * A.p)) * A.n(f / w)),
                e < 1
                  ? -0.5 *
                      (w *
                        A.w(2, 10 * (e -= 1)) *
                        A.s(((e * d - B) * (2 * A.p)) / sr)) +
                    u
                  : w *
                      A.w(2, -10 * (e -= 1)) *
                      A.s(((e * d - B) * (2 * A.p)) / sr) *
                      0.5 +
                    f +
                    u);
          },
          easeInBack: function (x, e, u, f, d, B) {
            return (B = B || A.o), f * (e /= d) * e * ((B + 1) * e - B) + u;
          },
          easeOutBack: function (x, e, u, f, d, B) {
            return (
              (B = B || A.o),
              f * ((e = e / d - 1) * e * ((B + 1) * e + B) + 1) + u
            );
          },
          easeInOutBack: function (x, e, u, f, d, B) {
            return (
              (B = B || A.o),
              (e /= d / 2) < 1
                ? (f / 2) * (e * e * (((B *= 1.525) + 1) * e - B)) + u
                : (f / 2) * ((e -= 2) * e * (((B *= 1.525) + 1) * e + B) + 2) +
                  u
            );
          },
          easeInBounce: function (x, e, u, f, d) {
            return f - this.easeOutBounce(x, d - e, 0, f, d) + u;
          },
          easeOutBounce: function (x, e, u, f, d) {
            var B = 7.5625;
            return (e /= d) < 1 / 2.75
              ? f * (B * e * e) + u
              : e < 2 / 2.75
              ? f * (B * (e -= 1.5 / 2.75) * e + 0.75) + u
              : e < 2.5 / 2.75
              ? f * (B * (e -= 2.25 / 2.75) * e + 0.9375) + u
              : f * (B * (e -= 2.625 / 2.75) * e + 0.984375) + u;
          },
          easeInOutBounce: function (x, e, u, f, d) {
            return e < d / 2
              ? this.easeInBounce(x, e * 2, 0, f, d) * 0.5 + u
              : this.easeOutBounce(x, e * 2 - d, 0, f, d) * 0.5 + f * 0.5 + u;
          },
        };
      })(),
      V = (function () {
        var A = /[^\x20\t\r\n\f]+/g,
          O = ' ',
          x = '',
          e = 'scrollLeft',
          u = 'scrollTop',
          f = [],
          d = S.type,
          B = {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
          };
        function sr() {
          var v,
            n,
            s,
            c,
            p,
            y,
            T = arguments[0] || {},
            D = 1,
            q = arguments[i.l],
            N = !1;
          for (
            d(T) == _.b && ((N = T), (T = arguments[1] || {}), (D = 2)),
              d(T) != _.o && !d(T) == _.f && (T = {}),
              q === D && ((T = $), --D);
            D < q;
            D++
          )
            if ((p = arguments[D]) != null)
              for (c in p)
                (v = T[c]),
                  (s = p[c]),
                  T !== s &&
                    (N && s && (R(s) || (n = S.isA(s)))
                      ? (n
                          ? ((n = !1), (y = v && S.isA(v) ? v : []))
                          : (y = v && R(v) ? v : {}),
                        (T[c] = sr(N, y, s)))
                      : s !== z && (T[c] = s));
          return T;
        }
        function w(v, n, s) {
          for (var c = s || 0; c < n[i.l]; c++) if (n[c] === v) return c;
          return -1;
        }
        function M(v) {
          return d(v) == _.f;
        }
        function vr(v) {
          for (var n in v) return !1;
          return !0;
        }
        function R(v) {
          if (!v || d(v) != _.o) return !1;
          var n,
            s = i.p,
            c = Object[s].hasOwnProperty,
            p = c.call(v, 'constructor'),
            y =
              v.constructor &&
              v.constructor[s] &&
              c.call(v.constructor[s], 'isPrototypeOf');
          if (v.constructor && !p && !y) return !1;
          for (n in v);
          return d(n) == _.u || c.call(v, n);
        }
        function kr(v, n) {
          var s = 0;
          if (H(v)) for (; s < v[i.l] && n.call(v[s], s, v[s]) !== !1; s++);
          else for (s in v) if (n.call(v[s], s, v[s]) === !1) break;
          return v;
        }
        function H(v) {
          var n = !!v && [i.l] in v && v[i.l],
            s = d(v);
          return M(s)
            ? !1
            : s == _.a || n === 0 || (d(n) == _.n && n > 0 && n - 1 in v);
        }
        function G(v) {
          var n = v.match(A) || [];
          return n.join(O);
        }
        function j(v, n) {
          for (
            var s = (v.parentNode || Lr).querySelectorAll(n) || [], c = s[i.l];
            c--;

          )
            if (s[c] == v) return !0;
          return !1;
        }
        function L(v, n, s) {
          if (S.isA(s)) for (var c = 0; c < s[i.l]; c++) L(v, n, s[c]);
          else
            d(s) == _.s
              ? v.insertAdjacentHTML(n, s)
              : v.insertAdjacentElement(n, s.nodeType ? s : s[0]);
        }
        function ur(v, n, s) {
          try {
            v[i.s][n] !== z && (v[i.s][n] = De(n, s));
          } catch {}
        }
        function De(v, n) {
          return !B[v.toLowerCase()] && d(n) == _.n && (n += 'px'), n;
        }
        function Z(v, n) {
          var s, c;
          n !== !1 && v.q.splice(0, 1),
            v.q[i.l] > 0
              ? ((c = v.q[0]),
                E(v.el, c.props, c.duration, c.easing, c.complete, !0))
              : ((s = w(v, f)), s > -1 && f.splice(s, 1));
        }
        function Gr(v, n, s) {
          n === e || n === u ? (v[n] = s) : ur(v, n, s);
        }
        function E(v, n, s, c, p, y) {
          var T = R(s),
            D = {},
            q = {},
            N = 0,
            rr,
            Hr,
            Pr,
            Sr,
            Vr,
            Dr;
          for (
            T
              ? ((c = s.easing),
                (Pr = s.progress),
                (Sr = s.step),
                (Vr = s.specialEasing),
                (p = s.complete),
                (Dr = s.duration))
              : (Dr = s),
              Vr = Vr || {},
              Dr = Dr || 400,
              c = c || 'swing',
              y = y || !1;
            N < f[i.l];
            N++
          )
            if (f[N].el === v) {
              Hr = f[N];
              break;
            }
          Hr || ((Hr = { el: v, q: [] }), f.push(Hr));
          for (rr in n)
            rr === e || rr === u ? (D[rr] = v[rr]) : (D[rr] = $(v).css(rr));
          for (rr in D) D[rr] !== n[rr] && n[rr] !== z && (q[rr] = n[rr]);
          if (vr(q)) y && Z(Hr);
          else {
            var Se,
              Be,
              ze,
              mr,
              ye,
              fr,
              gr,
              ua,
              Ge,
              fa = y ? 0 : w(dr, Hr.q),
              dr = { props: q, duration: T ? s : Dr, easing: c, complete: p };
            if ((fa === -1 && ((fa = Hr.q[i.l]), Hr.q.push(dr)), fa === 0))
              if (Dr > 0)
                (gr = S.now()),
                  (ua = function () {
                    (Se = S.now()),
                      (Ge = Se - gr),
                      (Be = dr.stop || Ge >= Dr),
                      (ze = 1 - (I.max(0, gr + Dr - Se) / Dr || 0));
                    for (rr in q)
                      (mr = parseFloat(D[rr])),
                        (ye = parseFloat(q[rr])),
                        (fr =
                          (ye - mr) * Zs[Vr[rr] || c](ze, ze * Dr, 0, 1, Dr) +
                          mr),
                        Gr(v, rr, fr),
                        M(Sr) &&
                          Sr(fr, {
                            elem: v,
                            prop: rr,
                            start: mr,
                            now: fr,
                            end: ye,
                            pos: ze,
                            options: {
                              easing: c,
                              speacialEasing: Vr,
                              duration: Dr,
                              complete: p,
                              step: Sr,
                            },
                            startTime: gr,
                          });
                    M(Pr) && Pr({}, ze, I.max(0, Dr - Ge)),
                      Be ? (Z(Hr), M(p) && p()) : (dr.frame = S.rAF()(ua));
                  }),
                  (dr.frame = S.rAF()(ua));
              else {
                for (rr in q) Gr(v, rr, q[rr]);
                Z(Hr);
              }
          }
        }
        function hr(v, n, s) {
          for (var c, p, y, T = 0; T < f[i.l]; T++)
            if (((c = f[T]), c.el === v)) {
              if (c.q[i.l] > 0) {
                if (
                  ((p = c.q[0]),
                  (p.stop = !0),
                  S.cAF()(p.frame),
                  c.q.splice(0, 1),
                  s)
                )
                  for (y in p.props) Gr(v, y, p.props[y]);
                n ? (c.q = []) : Z(c, !1);
              }
              break;
            }
        }
        function br(v) {
          return !!(v[i.oW] || v[i.oH] || v.getClientRects()[i.l]);
        }
        function $(v) {
          if (arguments[i.l] === 0) return this;
          var n = new $(),
            s = v,
            c = 0,
            p,
            y;
          if (d(v) == _.s)
            for (
              s = [],
                v.charAt(0) === '<'
                  ? ((y = Lr.createElement('div')),
                    (y.innerHTML = v),
                    (p = y.children))
                  : (p = Lr.querySelectorAll(v));
              c < p[i.l];
              c++
            )
              s.push(p[c]);
          if (s) {
            for (
              d(s) != _.s && (!H(s) || s === ar || s === s.self) && (s = [s]),
                c = 0;
              c < s[i.l];
              c++
            )
              n[c] = s[c];
            n[i.l] = s[i.l];
          }
          return n;
        }
        return (
          ($[i.p] = {
            on: function (n, s) {
              n = (n || x).match(A) || [x];
              var c = n[i.l],
                p = 0,
                y;
              return this.each(function () {
                y = this;
                try {
                  if (y.addEventListener)
                    for (; p < c; p++) y.addEventListener(n[p], s);
                  else if (y.detachEvent)
                    for (; p < c; p++) y.attachEvent('on' + n[p], s);
                } catch {}
              });
            },
            off: function (n, s) {
              n = (n || x).match(A) || [x];
              var c = n[i.l],
                p = 0,
                y;
              return this.each(function () {
                y = this;
                try {
                  if (y.removeEventListener)
                    for (; p < c; p++) y.removeEventListener(n[p], s);
                  else if (y.detachEvent)
                    for (; p < c; p++) y.detachEvent('on' + n[p], s);
                } catch {}
              });
            },
            one: function (n, s) {
              return (
                (n = (n || x).match(A) || [x]),
                this.each(function () {
                  var c = $(this);
                  $.each(n, function (p, y) {
                    var T = function D(q) {
                      s.call(this, q), c.off(y, D);
                    };
                    c.on(y, T);
                  });
                })
              );
            },
            trigger: function (n) {
              var s, c;
              return this.each(function () {
                (s = this),
                  Lr.createEvent
                    ? ((c = Lr.createEvent('HTMLEvents')),
                      c.initEvent(n, !0, !1),
                      s.dispatchEvent(c))
                    : s.fireEvent('on' + n);
              });
            },
            append: function (n) {
              return this.each(function () {
                L(this, 'beforeend', n);
              });
            },
            prepend: function (n) {
              return this.each(function () {
                L(this, 'afterbegin', n);
              });
            },
            before: function (n) {
              return this.each(function () {
                L(this, 'beforebegin', n);
              });
            },
            after: function (n) {
              return this.each(function () {
                L(this, 'afterend', n);
              });
            },
            remove: function () {
              return this.each(function () {
                var n = this,
                  s = n.parentNode;
                s != null && s.removeChild(n);
              });
            },
            unwrap: function () {
              var n = [],
                s,
                c,
                p;
              for (
                this.each(function () {
                  (p = this.parentNode), w(p, n) === -1 && n.push(p);
                }),
                  s = 0;
                s < n[i.l];
                s++
              ) {
                for (c = n[s], p = c.parentNode; c.firstChild; )
                  p.insertBefore(c.firstChild, c);
                p.removeChild(c);
              }
              return this;
            },
            wrapAll: function (n) {
              for (
                var s,
                  c = this,
                  p = $(n)[0],
                  y = p,
                  T = c[0].parentNode,
                  D = c[0].previousSibling;
                y.childNodes[i.l] > 0;

              )
                y = y.childNodes[0];
              for (s = 0; c[i.l] - s; y.firstChild === c[0] && s++)
                y.appendChild(c[s]);
              var q = D ? D.nextSibling : T.firstChild;
              return T.insertBefore(p, q), this;
            },
            wrapInner: function (n) {
              return this.each(function () {
                var s = $(this),
                  c = s.contents();
                c[i.l] ? c.wrapAll(n) : s.append(n);
              });
            },
            wrap: function (n) {
              return this.each(function () {
                $(this).wrapAll(n);
              });
            },
            css: function (n, s) {
              var c,
                p,
                y,
                T = ar.getComputedStyle;
              return d(n) == _.s
                ? s === z
                  ? ((c = this[0]),
                    (y = T ? T(c, null) : c.currentStyle[n]),
                    T ? (y != null ? y.getPropertyValue(n) : c[i.s][n]) : y)
                  : this.each(function () {
                      ur(this, n, s);
                    })
                : this.each(function () {
                    for (p in n) ur(this, p, n[p]);
                  });
            },
            hasClass: function (n) {
              for (var s, c = 0, p = O + n + O, y; (s = this[c++]); ) {
                if (((y = s.classList), y && y.contains(n))) return !0;
                if (
                  s.nodeType === 1 &&
                  (O + G(s.className + x) + O).indexOf(p) > -1
                )
                  return !0;
              }
              return !1;
            },
            addClass: function (n) {
              var s,
                c,
                p,
                y,
                T,
                D,
                q,
                N,
                rr = 0,
                Hr = 0;
              if (n) {
                for (s = n.match(A) || []; (c = this[rr++]); )
                  if (((N = c.classList), q === z && (q = N !== z), q))
                    for (; (T = s[Hr++]); ) N.add(T);
                  else if (
                    ((y = c.className + x),
                    (p = c.nodeType === 1 && O + G(y) + O),
                    p)
                  ) {
                    for (; (T = s[Hr++]); )
                      p.indexOf(O + T + O) < 0 && (p += T + O);
                    (D = G(p)), y !== D && (c.className = D);
                  }
              }
              return this;
            },
            removeClass: function (n) {
              var s,
                c,
                p,
                y,
                T,
                D,
                q,
                N,
                rr = 0,
                Hr = 0;
              if (n) {
                for (s = n.match(A) || []; (c = this[rr++]); )
                  if (((N = c.classList), q === z && (q = N !== z), q))
                    for (; (T = s[Hr++]); ) N.remove(T);
                  else if (
                    ((y = c.className + x),
                    (p = c.nodeType === 1 && O + G(y) + O),
                    p)
                  ) {
                    for (; (T = s[Hr++]); )
                      for (; p.indexOf(O + T + O) > -1; )
                        p = p.replace(O + T + O, O);
                    (D = G(p)), y !== D && (c.className = D);
                  }
              }
              return this;
            },
            hide: function () {
              return this.each(function () {
                this[i.s].display = 'none';
              });
            },
            show: function () {
              return this.each(function () {
                this[i.s].display = 'block';
              });
            },
            attr: function (n, s) {
              for (var c = 0, p; (p = this[c++]); ) {
                if (s === z) return p.getAttribute(n);
                p.setAttribute(n, s);
              }
              return this;
            },
            removeAttr: function (n) {
              return this.each(function () {
                this.removeAttribute(n);
              });
            },
            offset: function () {
              var n = this[0],
                s = n[i.bCR](),
                c = ar.pageXOffset || Lr.documentElement[e],
                p = ar.pageYOffset || Lr.documentElement[u];
              return { top: s.top + p, left: s.left + c };
            },
            position: function () {
              var n = this[0];
              return { top: n.offsetTop, left: n.offsetLeft };
            },
            scrollLeft: function (n) {
              for (var s = 0, c; (c = this[s++]); ) {
                if (n === z) return c[e];
                c[e] = n;
              }
              return this;
            },
            scrollTop: function (n) {
              for (var s = 0, c; (c = this[s++]); ) {
                if (n === z) return c[u];
                c[u] = n;
              }
              return this;
            },
            val: function (n) {
              var s = this[0];
              return n ? ((s.value = n), this) : s.value;
            },
            first: function () {
              return this.eq(0);
            },
            last: function () {
              return this.eq(-1);
            },
            eq: function (n) {
              return $(this[n >= 0 ? n : this[i.l] + n]);
            },
            find: function (n) {
              var s = [],
                c;
              return (
                this.each(function () {
                  var p = this,
                    y = p.querySelectorAll(n);
                  for (c = 0; c < y[i.l]; c++) s.push(y[c]);
                }),
                $(s)
              );
            },
            children: function (n) {
              var s = [],
                c,
                p,
                y;
              return (
                this.each(function () {
                  for (p = this.children, y = 0; y < p[i.l]; y++)
                    (c = p[y]),
                      n
                        ? ((c.matches && c.matches(n)) || j(c, n)) && s.push(c)
                        : s.push(c);
                }),
                $(s)
              );
            },
            parent: function (n) {
              var s = [],
                c;
              return (
                this.each(function () {
                  (c = this.parentNode), (!n || $(c).is(n)) && s.push(c);
                }),
                $(s)
              );
            },
            is: function (n) {
              var s, c;
              for (c = 0; c < this[i.l]; c++) {
                if (((s = this[c]), n === ':visible')) return br(s);
                if (n === ':hidden') return !br(s);
                if ((s.matches && s.matches(n)) || j(s, n)) return !0;
              }
              return !1;
            },
            contents: function () {
              var n = [],
                s,
                c;
              return (
                this.each(function () {
                  for (s = this.childNodes, c = 0; c < s[i.l]; c++)
                    n.push(s[c]);
                }),
                $(n)
              );
            },
            each: function (n) {
              return kr(this, n);
            },
            animate: function (n, s, c, p) {
              return this.each(function () {
                E(this, n, s, c, p);
              });
            },
            stop: function (n, s) {
              return this.each(function () {
                hr(this, n, s);
              });
            },
          }),
          sr($, {
            extend: sr,
            inArray: w,
            isEmptyObject: vr,
            isPlainObject: R,
            each: kr,
          }),
          $
        );
      })(),
      Ma = (function () {
        var A = [],
          O = '__overlayScrollbars__';
        return function (x, e) {
          var u = arguments[i.l];
          if (u < 1) return A;
          if (e) (x[O] = e), A.push(x);
          else {
            var f = S.inA(x, A);
            if (f > -1)
              if (u > 1) delete x[O], A.splice(f, 1);
              else return A[f][O];
          }
        };
      })(),
      zn = (function () {
        var A,
          O,
          x,
          e = [],
          u = (function () {
            var w = S.type,
              M = [_.b, _.n, _.s, _.a, _.o, _.f, _.z],
              vr = ' ',
              R = ':',
              kr = [_.z, _.s],
              H = _.n,
              G = [_.z, _.b],
              j = [!0, _.b],
              L = [!1, _.b],
              ur = [null, [_.z, _.f]],
              De = [['img'], [_.s, _.a, _.z]],
              Z = [
                ['style', 'class'],
                [_.s, _.a, _.z],
              ],
              Gr = 'n:none b:both h:horizontal v:vertical',
              E = 'v-h:visible-hidden v-s:visible-scroll s:scroll h:hidden',
              hr = 'v:visible h:hidden a:auto',
              br = 'n:never s:scroll l:leave m:move',
              $ = {
                className: ['os-theme-dark', kr],
                resize: ['none', Gr],
                sizeAutoCapable: j,
                clipAlways: j,
                normalizeRTL: j,
                paddingAbsolute: L,
                autoUpdate: [null, G],
                autoUpdateInterval: [33, H],
                updateOnLoad: De,
                nativeScrollbarsOverlaid: {
                  showNativeScrollbars: L,
                  initialize: j,
                },
                overflowBehavior: { x: ['scroll', E], y: ['scroll', E] },
                scrollbars: {
                  visibility: ['auto', hr],
                  autoHide: ['never', br],
                  autoHideDelay: [800, H],
                  dragScrolling: j,
                  clickScrolling: L,
                  touchSupport: j,
                  snapHandle: L,
                },
                textarea: { dynWidth: L, dynHeight: L, inheritedAttrs: Z },
                callbacks: {
                  onInitialized: ur,
                  onInitializationWithdrawn: ur,
                  onDestroyed: ur,
                  onScrollStart: ur,
                  onScroll: ur,
                  onScrollStop: ur,
                  onOverflowChanged: ur,
                  onOverflowAmountChanged: ur,
                  onDirectionChanged: ur,
                  onContentSizeChanged: ur,
                  onHostSizeChanged: ur,
                  onUpdated: ur,
                },
              },
              v = function (s) {
                var c = function p(y) {
                  var T, D, q;
                  for (T in y)
                    y[i.hOP](T) &&
                      ((D = y[T]),
                      (q = w(D)),
                      q == _.a
                        ? (y[T] = D[s ? 1 : 0])
                        : q == _.o && (y[T] = p(D)));
                  return y;
                };
                return c(V.extend(!0, {}, $));
              };
            return {
              _defaults: v(),
              _template: v(!0),
              _validate: function (s, c, p, y) {
                var T = {},
                  D = {},
                  q = V.extend(!0, {}, s),
                  N = V.inArray,
                  rr = V.isEmptyObject,
                  Hr = function Pr(Sr, Vr, Dr, Se, Be, ze) {
                    for (var mr in Vr)
                      if (Vr[i.hOP](mr) && Sr[i.hOP](mr)) {
                        var ye = !1,
                          fr = !1,
                          gr = Vr[mr],
                          ua = w(gr),
                          Ge = ua == _.o,
                          fa = S.isA(gr) ? gr : [gr],
                          dr = Dr[mr],
                          me = Sr[mr],
                          ut = w(me),
                          le = ze ? ze + '.' : '',
                          Me =
                            'The option "' + le + mr + `" wasn't set, because`,
                          Je = [],
                          qr = [],
                          ve,
                          ue,
                          _r,
                          Re,
                          ha,
                          J,
                          xr,
                          xe;
                        if (((dr = dr === z ? {} : dr), Ge && ut == _.o))
                          (Se[mr] = {}),
                            (Be[mr] = {}),
                            Pr(me, gr, dr, Se[mr], Be[mr], le + mr),
                            V.each([Sr, Se, Be], function (K, zr) {
                              rr(zr[mr]) && delete zr[mr];
                            });
                        else if (!Ge) {
                          for (J = 0; J < fa[i.l]; J++)
                            if (
                              ((ha = fa[J]),
                              (ua = w(ha)),
                              (_r = ua == _.s && N(ha, M) === -1),
                              _r)
                            )
                              for (
                                Je.push(_.s),
                                  ve = ha.split(vr),
                                  qr = qr.concat(ve),
                                  xr = 0;
                                xr < ve[i.l];
                                xr++
                              ) {
                                for (
                                  ue = ve[xr].split(R), Re = ue[0], xe = 0;
                                  xe < ue[i.l];
                                  xe++
                                )
                                  if (me === ue[xe]) {
                                    ye = !0;
                                    break;
                                  }
                                if (ye) break;
                              }
                            else if ((Je.push(ha), ut === ha)) {
                              ye = !0;
                              break;
                            }
                          ye
                            ? ((fr = me !== dr),
                              fr && (Se[mr] = me),
                              (_r ? N(dr, ue) < 0 : fr) &&
                                (Be[mr] = _r ? Re : me))
                            : p &&
                              console.warn(
                                Me +
                                  " it doesn't accept the type [ " +
                                  ut.toUpperCase() +
                                  ' ] with the value of "' +
                                  me +
                                  `".\r
Accepted types are: [ ` +
                                  Je.join(', ').toUpperCase() +
                                  ' ].' +
                                  (qr[length] > 0
                                    ? `\r
Valid strings are: [ ` +
                                      qr.join(', ').split(R).join(', ') +
                                      ' ].'
                                    : ''),
                              ),
                            delete Sr[mr];
                        }
                      }
                  };
                return (
                  Hr(q, c, y || {}, T, D),
                  !rr(q) &&
                    p &&
                    console.warn(
                      `The following options are discarded due to invalidity:\r
` + ar.JSON.stringify(q, null, 2),
                    ),
                  { _default: T, _prepared: D }
                );
              },
            };
          })();
        function f() {
          O || (O = new d(u._defaults)), x || (x = new B(O));
        }
        function d(w) {
          var M = this,
            vr = 'overflow',
            R = 'hidden',
            kr = 'scroll',
            H = V('body'),
            G = V('<div id="os-dummy-scrollbar-size"><div></div></div>'),
            j = G[0],
            L = V(G.children('div').eq(0));
          H.append(G), G.hide().show();
          var ur = Gr(j),
            De = { x: ur.x === 0, y: ur.y === 0 },
            Z = (function () {
              var E = ar.navigator.userAgent,
                hr = 'indexOf',
                br = 'substring',
                $ = E[hr]('MSIE '),
                v = E[hr]('Trident/'),
                n = E[hr]('Edge/'),
                s = E[hr]('rv:'),
                c,
                p = parseInt;
              return (
                $ > 0
                  ? (c = p(E[br]($ + 5, E[hr]('.', $)), 10))
                  : v > 0
                  ? (c = p(E[br](s + 3, E[hr]('.', s)), 10))
                  : n > 0 && (c = p(E[br](n + 5, E[hr]('.', n)), 10)),
                c
              );
            })();
          V.extend(M, {
            defaultOptions: w,
            msie: Z,
            autoUpdateLoop: !1,
            autoUpdateRecommended: !S.mO(),
            nativeScrollbarSize: ur,
            nativeScrollbarIsOverlaid: De,
            nativeScrollbarStyling: (function () {
              var E = !1;
              G.addClass('os-viewport-native-scrollbars-invisible');
              try {
                E =
                  (G.css('scrollbar-width') === 'none' && (Z > 9 || !Z)) ||
                  ar
                    .getComputedStyle(j, '::-webkit-scrollbar')
                    .getPropertyValue('display') === 'none';
              } catch {}
              return E;
            })(),
            overlayScrollbarDummySize: { x: 30, y: 30 },
            cssCalc: ke._cssPropertyValue('width', 'calc', '(1px)') || null,
            restrictedMeasuring: (function () {
              G.css(vr, R);
              var E = { w: j[i.sW], h: j[i.sH] };
              G.css(vr, 'visible');
              var hr = { w: j[i.sW], h: j[i.sH] };
              return E.w - hr.w !== 0 || E.h - hr.h !== 0;
            })(),
            rtlScrollBehavior: (function () {
              G.css({
                'overflow-y': R,
                'overflow-x': kr,
                direction: 'rtl',
              }).scrollLeft(0);
              var E = G.offset(),
                hr = L.offset();
              G.scrollLeft(-999);
              var br = L.offset();
              return { i: E.left === hr.left, n: hr.left !== br.left };
            })(),
            supportTransform: !!ke._cssProperty('transform'),
            supportTransition: !!ke._cssProperty('transition'),
            supportPassiveEvents: (function () {
              var E = !1;
              try {
                ar.addEventListener(
                  'test',
                  null,
                  Object.defineProperty({}, 'passive', {
                    get: function () {
                      E = !0;
                    },
                  }),
                );
              } catch {}
              return E;
            })(),
            supportResizeObserver: !!S.rO(),
            supportMutationObserver: !!S.mO(),
          }),
            G.removeAttr(i.s).remove(),
            (function () {
              if (De.x && De.y) return;
              var E = I.abs,
                hr = S.wW(),
                br = S.wH(),
                $ = s(),
                v = function () {
                  if (Ma().length > 0) {
                    var p = S.wW(),
                      y = S.wH(),
                      T = p - hr,
                      D = y - br;
                    if (T === 0 && D === 0) return;
                    var q = I.round(p / (hr / 100)),
                      N = I.round(y / (br / 100)),
                      rr = E(T),
                      Hr = E(D),
                      Pr = E(q),
                      Sr = E(N),
                      Vr = s(),
                      Dr = rr > 2 && Hr > 2,
                      Se = !n(Pr, Sr),
                      Be = Vr !== $ && $ > 0,
                      ze = Dr && Se && Be,
                      mr = M.nativeScrollbarSize,
                      ye;
                    ze &&
                      (H.append(G),
                      (ye = M.nativeScrollbarSize = Gr(G[0])),
                      G.remove(),
                      (mr.x !== ye.x || mr.y !== ye.y) &&
                        V.each(Ma(), function () {
                          Ma(this) && Ma(this).update('zoom');
                        })),
                      (hr = p),
                      (br = y),
                      ($ = Vr);
                  }
                };
              function n(c, p) {
                var y = E(c),
                  T = E(p);
                return !(y === T || y + 1 === T || y - 1 === T);
              }
              function s() {
                var c = ar.screen.deviceXDPI || 0,
                  p = ar.screen.logicalXDPI || 1;
                return ar.devicePixelRatio || c / p;
              }
              V(ar).on('resize', v);
            })();
          function Gr(E) {
            return { x: E[i.oH] - E[i.cH], y: E[i.oW] - E[i.cW] };
          }
        }
        function B(w) {
          var M = this,
            vr = V.inArray,
            R = S.now,
            kr = 'autoUpdate',
            H = kr + 'Interval',
            G = i.l,
            j = [],
            L = [],
            ur = !1,
            De = 33,
            Z = De,
            Gr = R(),
            E,
            hr = function br() {
              if (j[G] > 0 && ur) {
                E = S.rAF()(function () {
                  br();
                });
                var $ = R(),
                  v = $ - Gr,
                  n,
                  s,
                  c,
                  p,
                  y,
                  T;
                if (v > Z) {
                  (Gr = $ - (v % Z)), (n = De);
                  for (var D = 0; D < j[G]; D++)
                    (s = j[D]),
                      s !== z &&
                        ((c = s.options()),
                        (p = c[kr]),
                        (y = I.max(1, c[H])),
                        (T = R()),
                        (p === !0 || p === null) &&
                          T - L[D] > y &&
                          (s.update('auto'), (L[D] = new Date((T += y)))),
                        (n = I.max(1, I.min(n, y))));
                  Z = n;
                }
              } else Z = De;
            };
          (M.add = function (br) {
            vr(br, j) === -1 &&
              (j.push(br),
              L.push(R()),
              j[G] > 0 && !ur && ((ur = !0), (w.autoUpdateLoop = ur), hr()));
          }),
            (M.remove = function (br) {
              var $ = vr(br, j);
              $ > -1 &&
                (L.splice($, 1),
                j.splice($, 1),
                j[G] === 0 &&
                  ur &&
                  ((ur = !1),
                  (w.autoUpdateLoop = ur),
                  E !== z && (S.cAF()(E), (E = -1))));
            });
        }
        function sr(w, M, vr, R, kr) {
          var H = S.type,
            G = V.inArray,
            j = V.each,
            L = new A(),
            ur = V[i.p];
          if (!Ms(w)) return;
          if (Ma(w)) {
            var De = Ma(w);
            return De.options(M), De;
          }
          var Z,
            Gr,
            E,
            hr,
            br,
            $,
            v,
            n,
            s,
            c,
            p,
            y,
            T,
            D,
            q,
            N,
            rr,
            Hr,
            Pr,
            Sr,
            Vr,
            Dr,
            Se,
            Be,
            ze,
            mr,
            ye,
            fr,
            gr,
            ua = {},
            Ge = {},
            fa = {},
            dr = {},
            me = {},
            ut = '-hidden',
            le = 'margin-',
            Me = 'padding-',
            Je = 'border-',
            qr = 'top',
            ve = 'right',
            ue = 'bottom',
            _r = 'left',
            Re = 'min-',
            ha = 'max-',
            J = 'width',
            xr = 'height',
            xe = 'float',
            K = '',
            zr = 'auto',
            Mn = 'sync',
            Fe = 'scroll',
            Ra = '100%',
            Mt = 'x',
            Rt = 'y',
            Ue = '.',
            fe = ' ',
            Rn = 'scrollbar',
            Wn = '-horizontal',
            Bn = '-vertical',
            he = Fe + 'Left',
            de = Fe + 'Top',
            kt = 'mousedown touchstart',
            Wt = 'mouseup touchend touchcancel',
            Bt = 'mousemove touchmove',
            Di = 'mouseenter',
            zi = 'mouseleave',
            Fn = 'keydown',
            Un = 'keyup',
            Ft = 'selectstart',
            Qn = 'transitionend webkitTransitionEnd oTransitionEnd',
            Vn = '__overlayScrollbarsRO__',
            Te = 'os-',
            Mi = Te + 'html',
            ge = Te + 'host',
            vn = ge + '-foreign',
            qn = ge + '-textarea',
            Ri = ge + '-' + Rn + Wn + ut,
            Wi = ge + '-' + Rn + Bn + ut,
            Bi = ge + '-transition',
            Fi = ge + '-rtl',
            Kn = ge + '-resize-disabled',
            un = ge + '-scrolling',
            Ut = ge + '-overflow',
            Ut = ge + '-overflow',
            Ui = Ut + '-x',
            Qi = Ut + '-y',
            fn = Te + 'textarea',
            $s = fn + '-cover',
            Yn = Te + 'padding',
            hn = Te + 'viewport',
            jn = hn + '-native-scrollbars-invisible',
            Vi = hn + '-native-scrollbars-overlaid',
            Gn = Te + 'content',
            ro = Te + 'content-arrange',
            eo = Te + 'content-glue',
            ao = Te + 'size-auto-observer',
            ft = Te + 'resize-observer',
            dn = Te + 'resize-observer-item',
            qi = dn + '-final',
            pn = Te + 'text-inherit',
            Wa = Te + Rn,
            Ki = Wa + '-track',
            Yi = Ki + '-off',
            ji = Wa + '-handle',
            Gi = ji + '-off',
            Ji = Wa + '-unusable',
            Qt = Wa + '-' + zr + ut,
            Jn = Wa + '-corner',
            Vt = Jn + '-resize',
            Xi = Vt + '-both',
            Zi = Vt + Wn,
            $i = Vt + Bn,
            to = Wa + Wn,
            no = Wa + Bn,
            ht = Te + 'dragging',
            _n = Te + 'theme-none',
            Xn = [jn, Vi, Yi, Gi, Ji, Qt, Vt, Xi, Zi, $i, ht].join(fe),
            Zn = [],
            $n = [i.ti],
            rs,
            qt,
            ae,
            Ba = {},
            io = 'added removed on contract',
            es,
            dt = {},
            as,
            ts = 42,
            ri = 'load',
            Kt = [],
            bn,
            wa,
            St,
            pt,
            or,
            Y,
            da,
            pa,
            Xe,
            tr,
            Mr,
            Fa,
            Ce,
            Ua,
            Le,
            _t,
            yn,
            Yt,
            bt,
            mn,
            jt,
            Gt,
            Tt,
            rt,
            Qe,
            xn,
            gn,
            et,
            yt,
            _a,
            Jt,
            mt,
            ns,
            Ea,
            Xt,
            Ze,
            at,
            is,
            ei,
            ss,
            os,
            cs,
            ls,
            vs,
            us,
            fs,
            Lt,
            Ht,
            ai,
            ti,
            hs,
            ds,
            ps,
            _s,
            bs,
            ys,
            ni,
            ms,
            Qa,
            Zt,
            ii,
            Cn,
            si,
            xs,
            gs,
            Cs,
            tt,
            As = {},
            An,
            On,
            oi,
            ci,
            ka,
            Os = ['wrap', 'cols', 'rows'],
            li = [i.i, i.c, i.s, 'open'].concat($n),
            vi = [],
            ui,
            ws,
            Es,
            fi,
            hi,
            nt,
            $e,
            xt,
            di,
            it,
            wn,
            En,
            pi,
            _i;
          function We(r, a, t, o, l) {
            var h = S.isA(a) && S.isA(t),
              b = o ? 'removeEventListener' : 'addEventListener',
              g = o ? 'off' : 'on',
              m = h ? !1 : a.split(fe),
              C = 0,
              Q = V.isPlainObject(l),
              P = (p && (Q ? l._passive : l)) || !1,
              er = Q && (l._capture || !1),
              nr = p ? { passive: P, capture: er } : er;
            if (h) for (; C < a[i.l]; C++) We(r, a[C], t[C], o, l);
            else
              for (; C < m[i.l]; C++) p ? r[0][b](m[C], t, nr) : r[g](m[C], t);
          }
          function ba(r, a, t, o) {
            We(r, a, t, !1, o), vi.push(S.bind(We, 0, r, a, t, !0, o));
          }
          function kn(r, a) {
            if (r) {
              var t = S.rO(),
                o =
                  'animationstart mozAnimationStart webkitAnimationStart MSAnimationStart',
                l = 'childNodes',
                h = 3333333,
                b = function () {
                  r[de](h)[he](fr ? (E.n ? -h : E.i ? 0 : h) : h), a();
                };
              if (a) {
                if (y) {
                  var g = r.addClass('observed').append(qe(ft)).contents()[0],
                    m = (g[Vn] = new t(b));
                  m.observe(g);
                } else if (br > 9 || !hr) {
                  r.prepend(
                    qe(
                      ft,
                      qe(
                        { c: dn, dir: 'ltr' },
                        qe(dn, qe(qi)) +
                          qe(
                            dn,
                            qe({ c: qi, style: 'width: 200%; height: 200%' }),
                          ),
                      ),
                    ),
                  );
                  var C = r[0][l][0][l][0],
                    Q = V(C[l][1]),
                    P = V(C[l][0]),
                    er = V(P[0][l][0]),
                    nr = C[i.oW],
                    pr = C[i.oH],
                    U,
                    cr,
                    X,
                    wr,
                    ie = 2,
                    Kr = R.nativeScrollbarSize,
                    Ie = function () {
                      P[he](h)[de](h), Q[he](h)[de](h);
                    },
                    se = function () {
                      (cr = 0), U && ((nr = X), (pr = wr), b());
                    },
                    Xr = function (k) {
                      return (
                        (X = C[i.oW]),
                        (wr = C[i.oH]),
                        (U = X != nr || wr != pr),
                        k && U && !cr
                          ? (S.cAF()(cr), (cr = S.rAF()(se)))
                          : k || se(),
                        Ie(),
                        k && (S.prvD(k), S.stpP(k)),
                        !1
                      );
                    },
                    Zr = {},
                    te = {};
                  gt(te, K, [
                    -((Kr.y + 1) * ie),
                    Kr.x * -ie,
                    Kr.y * -ie,
                    -((Kr.x + 1) * ie),
                  ]),
                    V(C).css(te),
                    P.on(Fe, Xr),
                    Q.on(Fe, Xr),
                    r.on(o, function () {
                      Xr(!1);
                    }),
                    (Zr[J] = h),
                    (Zr[xr] = h),
                    er.css(Zr),
                    Ie();
                } else {
                  var Ne = Tt.attachEvent,
                    $r = br !== z;
                  if (Ne)
                    r.prepend(qe(ft)),
                      It(r, Ue + ft)[0].attachEvent('onresize', b);
                  else {
                    var Rr = Tt.createElement(_.o);
                    Rr.setAttribute(i.ti, '-1'),
                      Rr.setAttribute(i.c, ft),
                      (Rr.onload = function () {
                        var Ir = this.contentDocument.defaultView;
                        Ir.addEventListener('resize', b),
                          (Ir.document.documentElement.style.display = 'none');
                      }),
                      (Rr.type = 'text/html'),
                      $r && r.prepend(Rr),
                      (Rr.data = 'about:blank'),
                      $r || r.prepend(Rr),
                      r.on(o, b);
                  }
                }
                if (r[0] === gn) {
                  var aa = function () {
                    var k = Y.css('direction'),
                      Ar = {},
                      Er = 0,
                      Ae = !1;
                    return (
                      k !== ls &&
                        (k === 'ltr'
                          ? ((Ar[_r] = 0), (Ar[ve] = zr), (Er = h))
                          : ((Ar[_r] = zr),
                            (Ar[ve] = 0),
                            (Er = E.n ? -h : E.i ? 0 : h)),
                        pa.children().eq(0).css(Ar),
                        pa[he](Er)[de](h),
                        (ls = k),
                        (Ae = !0)),
                      Ae
                    );
                  };
                  aa(),
                    ba(r, Fe, function (Ir) {
                      return aa() && ya(), S.prvD(Ir), S.stpP(Ir), !1;
                    });
                }
              } else if (y) {
                var g = r.contents()[0],
                  Cr = g[Vn];
                Cr && (Cr.disconnect(), delete g[Vn]);
              } else qa(r.children(Ue + ft).eq(0));
            }
          }
          function so() {
            if (T) {
              var r = 11,
                a = S.mO(),
                t = S.now(),
                o,
                l,
                h,
                b,
                g,
                m,
                C,
                Q,
                P,
                er;
              (oi = function (pr) {
                var U = !1,
                  cr = !1,
                  X,
                  wr = [];
                return (
                  D &&
                    !gr &&
                    (j(pr, function () {
                      (X = this),
                        (o = X.target),
                        (l = X.attributeName),
                        (h = l === i.c),
                        (b = X.oldValue),
                        (g = o.className),
                        Pr &&
                          h &&
                          !cr &&
                          b.indexOf(vn) > -1 &&
                          g.indexOf(vn) < 0 &&
                          ((m = zs(!0)),
                          (Qe.className = g
                            .split(fe)
                            .concat(
                              b.split(fe).filter(function (ie) {
                                return ie.match(m);
                              }),
                            )
                            .join(fe)),
                          (U = cr = !0)),
                        U ||
                          (U = h
                            ? Hs(b, g)
                            : l === i.s
                            ? b !== o[i.s].cssText
                            : !0),
                        wr.push(l);
                    }),
                    xi(wr),
                    U && L.update(cr || zr)),
                  U
                );
              }),
                (ci = function (pr) {
                  var U = !1,
                    cr;
                  return (
                    D &&
                      !gr &&
                      (j(pr, function () {
                        return (cr = this), (U = lo(cr)), !U;
                      }),
                      U &&
                        ((Q = S.now()),
                        (P = at || Ze),
                        (er = function () {
                          q || ((t = Q), N && gi(), P ? ya() : L.update(zr));
                        }),
                        clearTimeout(C),
                        r <= 0 || Q - t > r || !P
                          ? er()
                          : (C = setTimeout(er, r)))),
                    U
                  );
                }),
                (An = new a(oi)),
                (On = new a(ci));
            }
          }
          function ks() {
            T &&
              !ka &&
              (An.observe(Qe, {
                attributes: !0,
                attributeOldValue: !0,
                attributeFilter: li,
              }),
              On.observe(N ? rt : _a, {
                attributes: !0,
                attributeOldValue: !0,
                subtree: !N,
                childList: !N,
                characterData: !N,
                attributeFilter: N ? Os : li,
              }),
              (ka = !0));
          }
          function bi() {
            T && ka && (An.disconnect(), On.disconnect(), (ka = !1));
          }
          function oo() {
            if (!gr) {
              var r,
                a = { w: gn[i.sW], h: gn[i.sH] };
              (r = Ct(a, ps)), (ps = a), r && ya({ _hostSizeChanged: !0 });
            }
          }
          function Ss() {
            xt && Sa(!0);
          }
          function Ts() {
            xt && !pt.hasClass(ht) && Sa(!1);
          }
          function co() {
            $e &&
              (Sa(!0),
              clearTimeout(Es),
              (Es = setTimeout(function () {
                $e && !q && Sa(!1);
              }, 100)));
          }
          function $t(r) {
            return S.prvD(r), !1;
          }
          function yi(r) {
            var a = V(r.target);
            Ws(function (t, o) {
              a.is(o) && ya({ _contentSizeChanged: !0 });
            });
          }
          function mi(r) {
            r || mi(!0),
              We(Y, Bt.split(fe)[0], co, !$e || r, !0),
              We(Y, [Di, zi], [Ss, Ts], !xt || r, !0),
              !D && !r && Y.one('mouseover', Ss);
          }
          function Ls() {
            var r = {};
            return (
              rr &&
                Fa &&
                ((r.w = Ta(Fa.css(Re + J))),
                (r.h = Ta(Fa.css(Re + xr))),
                (r.c = Ct(r, tt)),
                (r.f = !0)),
              (tt = r),
              !!r.c
            );
          }
          function Hs(r, a) {
            var t = za(a) == _.s ? a.split(fe) : [],
              o = za(r) == _.s ? r.split(fe) : [],
              l = bo(o, t),
              h = G(_n, l),
              b,
              g;
            if ((h > -1 && l.splice(h, 1), l[i.l] > 0)) {
              for (g = zs(!0, !0), b = 0; b < l.length; b++)
                if (!l[b].match(g)) return !0;
            }
            return !1;
          }
          function lo(r) {
            var a = r.attributeName,
              t = r.target,
              o = r.type,
              l = 'closest';
            if (t === _a) return a === null;
            if (o === 'attributes' && (a === i.c || a === i.s) && !N) {
              if (a === i.c && V(t).hasClass(ge))
                return Hs(r.oldValue, t.className);
              if (za(t[l]) != _.f) return !0;
              if (
                t[l](Ue + ft) !== null ||
                t[l](Ue + Wa) !== null ||
                t[l](Ue + Jn) !== null
              )
                return !1;
            }
            return !0;
          }
          function vo() {
            if (gr) return !1;
            var r = Rs(),
              a = N && Ze && !Cn ? or.val().length : 0,
              t = !ka && Ze && !N,
              o = {},
              l,
              h,
              b,
              g;
            return (
              t &&
                ((l = Mr.css(xe)),
                (o[xe] = fr ? ve : _r),
                (o[J] = zr),
                Mr.css(o)),
              (g = { w: r[i.sW] + a, h: r[i.sH] + a }),
              t && ((o[xe] = l), (o[J] = Ra), Mr.css(o)),
              (h = Ls()),
              (b = Ct(g, ds)),
              (ds = g),
              b || h
            );
          }
          function uo() {
            if (!(gr || ka)) {
              var r,
                a,
                t,
                o = [],
                l = [
                  { _elem: Y, _attrs: li.concat(':visible') },
                  { _elem: N ? or : z, _attrs: Os },
                ];
              return (
                j(l, function (h, b) {
                  (r = b._elem),
                    r &&
                      j(b._attrs, function (g, m) {
                        (a = m.charAt(0) === ':' ? r.is(m) : r.attr(m)),
                          (t = As[m]),
                          Ct(a, t) && o.push(m),
                          (As[m] = a);
                      });
                }),
                xi(o),
                o[i.l] > 0
              );
            }
          }
          function fo(r) {
            if (!D) return !0;
            var a = 'flex-grow',
              t = 'flex-shrink',
              o = 'flex-basis',
              l = [
                J,
                Re + J,
                ha + J,
                le + _r,
                le + ve,
                _r,
                ve,
                'font-weight',
                'word-spacing',
                a,
                t,
                o,
              ],
              h = [Me + _r, Me + ve, Je + _r + J, Je + ve + J],
              b = [
                xr,
                Re + xr,
                ha + xr,
                le + qr,
                le + ue,
                qr,
                ue,
                'line-height',
                a,
                t,
                o,
              ],
              g = [Me + qr, Me + ue, Je + qr + J, Je + ue + J],
              m = 's',
              C = 'v-s',
              Q = Lt.x === m || Lt.x === C,
              P = Lt.y === m || Lt.y === C,
              er = !1,
              nr = function (U, cr) {
                for (var X = 0; X < U[i.l]; X++) if (U[X] === cr) return !0;
                return !1;
              };
            return (
              P && ((er = nr(b, r)), !er && !Sr && (er = nr(g, r))),
              Q && !er && ((er = nr(l, r)), !er && !Sr && (er = nr(h, r))),
              er
            );
          }
          function xi(r) {
            (r = r || $n),
              j(r, function (a, t) {
                if (S.inA(t, $n) > -1) {
                  var o = or.attr(t);
                  H(o) == _.s ? tr.attr(t, o) : tr.removeAttr(t);
                }
              });
          }
          function gi() {
            if (!gr) {
              var r = !Cn,
                a = dr.w,
                t = dr.h,
                o = {},
                l = Ze || r,
                h,
                b,
                g,
                m;
              return (
                (o[Re + J] = K),
                (o[Re + xr] = K),
                (o[J] = zr),
                or.css(o),
                (h = rt[i.oW]),
                (b = l ? I.max(h, rt[i.sW] - 1) : 1),
                (o[J] = Ze ? zr : Ra),
                (o[Re + J] = Ra),
                (o[xr] = zr),
                or.css(o),
                (g = rt[i.oH]),
                (m = I.max(g, rt[i.sH] - 1)),
                (o[J] = b),
                (o[xr] = m),
                Ua.css(o),
                (o[Re + J] = a),
                (o[Re + xr] = t),
                or.css(o),
                {
                  _originalWidth: h,
                  _originalHeight: g,
                  _dynamicWidth: b,
                  _dynamicHeight: m,
                }
              );
            }
          }
          function ya(r) {
            clearTimeout(as),
              (r = r || {}),
              (dt._hostSizeChanged |= r._hostSizeChanged),
              (dt._contentSizeChanged |= r._contentSizeChanged),
              (dt._force |= r._force);
            var a = S.now(),
              t = !!dt._hostSizeChanged,
              o = !!dt._contentSizeChanged,
              l = !!dt._force,
              h = r._changedOptions,
              b = D && !q && !l && !h && a - es < ts && !at && !Ze,
              g;
            if (
              (b && (as = setTimeout(ya, ts)),
              !(
                q ||
                b ||
                (gr && !h) ||
                (D && !l && (g = Y.is(':hidden'))) ||
                Y.css('display') === 'inline'
              ))
            ) {
              (es = a),
                (dt = {}),
                $ && !(Z.x && Z.y)
                  ? ((n.x = 0), (n.y = 0))
                  : (n = He({}, R.nativeScrollbarSize)),
                (me = {
                  x: (n.x + (Z.x ? 0 : 3)) * 3,
                  y: (n.y + (Z.y ? 0 : 3)) * 3,
                }),
                (h = h || {});
              var m = function () {
                  return Ct.apply(this, [].slice.call(arguments).concat([l]));
                },
                C = { x: tr[he](), y: tr[de]() },
                Q = ae.scrollbars,
                P = ae.textarea,
                er = Q.visibility,
                nr = m(er, _s),
                pr = Q.autoHide,
                U = m(pr, bs),
                cr = Q.clickScrolling,
                X = m(cr, ys),
                wr = Q.dragScrolling,
                ie = m(wr, ni),
                Kr = ae.className,
                Ie = m(Kr, Zt),
                se = ae.resize,
                Xr = m(se, ms) && !rr,
                Zr = ae.paddingAbsolute,
                te = m(Zr, vs),
                Ne = ae.clipAlways,
                $r = m(Ne, us),
                Rr = ae.sizeAutoCapable && !rr,
                aa = m(Rr, hs),
                Cr = ae.nativeScrollbarsOverlaid.showNativeScrollbars,
                Ir = m(Cr, ai),
                k = ae.autoUpdate,
                Ar = m(k, ti),
                Er = ae.overflowBehavior,
                Ae = m(Er, Lt, l),
                Ka = P.dynWidth,
                At = m(Cs, Ka),
                Pe = P.dynHeight,
                La = m(gs, Pe);
              if (
                ((hi = pr === 'n'),
                (nt = pr === 's'),
                ($e = pr === 'm'),
                (xt = pr === 'l'),
                (fi = Q.autoHideDelay),
                (ii = Zt),
                (wn = se === 'n'),
                (En = se === 'b'),
                (pi = se === 'h'),
                (_i = se === 'v'),
                (Qa = ae.normalizeRTL),
                (Cr = Cr && Z.x && Z.y),
                (_s = er),
                (bs = pr),
                (ys = cr),
                (ni = wr),
                (Zt = Kr),
                (ms = se),
                (vs = Zr),
                (us = Ne),
                (hs = Rr),
                (ai = Cr),
                (ti = k),
                (Lt = He({}, Er)),
                (Cs = Ka),
                (gs = Pe),
                (Ea = Ea || { x: !1, y: !1 }),
                Ie &&
                  (pe(Y, ii + fe + _n),
                  Jr(Y, Kr !== z && Kr !== null && Kr.length > 0 ? Kr : _n)),
                Ar &&
                  (k === !0 || (k === null && hr)
                    ? (bi(), kr.add(L))
                    : (kr.remove(L), ks())),
                aa)
              )
                if (Rr)
                  if ((Ce ? Ce.show() : ((Ce = V(qe(eo))), Xe.before(Ce)), Vr))
                    da.show();
                  else {
                    (da = V(qe(ao))), (xn = da[0]), Ce.before(da);
                    var Ha = { w: -1, h: -1 };
                    kn(da, function () {
                      var Da = { w: xn[i.oW], h: xn[i.oH] };
                      Ct(Da, Ha) &&
                        ((D && at && Da.h > 0) ||
                          (Ze && Da.w > 0) ||
                          (D && !at && Da.h === 0) ||
                          (!Ze && Da.w === 0)) &&
                        ya(),
                        (Ha = Da);
                    }),
                      (Vr = !0),
                      v !== null && da.css(xr, v + '(100% + 1px)');
                  }
                else Vr && da.hide(), Ce && Ce.hide();
              l && (pa.find('*').trigger(Fe), Vr && da.find('*').trigger(Fe)),
                (g = g === z ? Y.is(':hidden') : g);
              var Ke = N ? or.attr('wrap') !== 'off' : !1,
                en = m(Ke, Cn),
                Ye = Y.css('direction'),
                Oe = m(Ye, cs),
                Ya = Y.css('box-sizing'),
                je = m(Ya, is),
                Wr = ki(Me),
                ta;
              try {
                ta = Vr ? xn[i.bCR]() : null;
              } catch {
                return;
              }
              (fr = Ye === 'rtl'), (Sr = Ya === 'border-box');
              var re = fr ? _r : ve,
                ir = fr ? ve : _r,
                ja = !1,
                Ga =
                  Vr && Y.css(xe) !== 'none'
                    ? I.round(ta.right - ta.left) === 0 &&
                      (Zr ? !0 : Qe[i.cW] - Dr > 0)
                    : !1;
              if (Rr && !Ga) {
                var Ja = Qe[i.oW],
                  Ot = Ce.css(J);
                Ce.css(J, zr);
                var na = Qe[i.oW];
                Ce.css(J, Ot),
                  (ja = Ja !== na),
                  ja ||
                    (Ce.css(J, Ja + 1),
                    (na = Qe[i.oW]),
                    Ce.css(J, Ot),
                    (ja = Ja !== na));
              }
              var Yr = (Ga || ja) && Rr && !g,
                yr = m(Yr, Ze),
                ia = !Yr && Ze,
                Br = Vr && Rr && !g ? I.round(ta.bottom - ta.top) === 0 : !1,
                ne = m(Br, at),
                sa = !Br && at,
                Nt = (Yr && Sr) || !Sr,
                wt = (Br && Sr) || !Sr,
                oa = ki(Je, '-' + J, !Nt, !wt),
                Ia = ki(le),
                F = {},
                W = {},
                Fr = function () {
                  return { w: Qe[i.cW], h: Qe[i.cH] };
                },
                we = function () {
                  return {
                    w: et[i.oW] + I.max(0, _a[i.cW] - _a[i.sW]),
                    h: et[i.oH] + I.max(0, _a[i.cH] - _a[i.sH]),
                  };
                },
                Ur = (Dr = Wr.l + Wr.r),
                oe = (Se = Wr.t + Wr.b);
              if (
                ((Ur *= Zr ? 1 : 0),
                (oe *= Zr ? 1 : 0),
                (Wr.c = m(Wr, ei)),
                (Be = oa.l + oa.r),
                (ze = oa.t + oa.b),
                (oa.c = m(oa, ss)),
                (mr = Ia.l + Ia.r),
                (ye = Ia.t + Ia.b),
                (Ia.c = m(Ia, os)),
                (Cn = Ke),
                (cs = Ye),
                (is = Ya),
                (Ze = Yr),
                (at = Br),
                (ei = Wr),
                (ss = oa),
                (os = Ia),
                Oe && Vr && da.css(xe, ir),
                Wr.c || Oe || te || yr || ne || je || aa)
              ) {
                var ee = {},
                  Ee = {},
                  st = [Wr.t, Wr.r, Wr.b, Wr.l];
                gt(W, le, [-Wr.t, -Wr.r, -Wr.b, -Wr.l]),
                  Zr
                    ? (gt(ee, K, st), gt(N ? Ee : F, Me))
                    : (gt(ee, K), gt(N ? Ee : F, Me, st)),
                  Xe.css(ee),
                  or.css(Ee);
              }
              dr = we();
              var Nr = N ? gi() : !1,
                Xa = N && m(Nr, xs),
                ca =
                  N && Nr
                    ? {
                        w: Ka ? Nr._dynamicWidth : Nr._originalWidth,
                        h: Pe ? Nr._dynamicHeight : Nr._originalHeight,
                      }
                    : {};
              if (
                ((xs = Nr),
                Br && (ne || te || je || Wr.c || oa.c)
                  ? (F[xr] = zr)
                  : (ne || te) && (F[xr] = Ra),
                Yr && (yr || te || je || Wr.c || oa.c || Oe)
                  ? ((F[J] = zr), (W[ha + J] = Ra))
                  : (yr || te) && ((F[J] = Ra), (F[xe] = K), (W[ha + J] = K)),
                Yr
                  ? ((W[J] = zr),
                    (F[J] =
                      ke._cssPropertyValue(J, 'max-content intrinsic') || zr),
                    (F[xe] = ir))
                  : (W[J] = K),
                Br ? (W[xr] = ca.h || _a[i.cH]) : (W[xr] = K),
                Rr && Ce.css(W),
                Mr.css(F),
                (F = {}),
                (W = {}),
                t ||
                  o ||
                  Xa ||
                  Oe ||
                  je ||
                  te ||
                  yr ||
                  Yr ||
                  ne ||
                  Br ||
                  Ir ||
                  Ae ||
                  $r ||
                  Xr ||
                  nr ||
                  U ||
                  ie ||
                  X ||
                  At ||
                  La ||
                  en)
              ) {
                var _e = 'overflow',
                  xa = _e + '-x',
                  ga = _e + '-y',
                  ot = 'hidden',
                  la = 'visible';
                if (!$) {
                  var Ca = {},
                    an = Ea.y && Xt.ys && !Cr ? (Z.y ? tr.css(re) : -n.y) : 0,
                    go = Ea.x && Xt.xs && !Cr ? (Z.x ? tr.css(ue) : -n.x) : 0;
                  gt(Ca, K), tr.css(Ca);
                }
                var ct = Rs(),
                  tn = { w: ca.w || ct[i.cW], h: ca.h || ct[i.cH] },
                  Bs = { w: ct[i.sW], h: ct[i.sH] };
                $ ||
                  ((Ca[ue] = sa ? K : go), (Ca[re] = ia ? K : an), tr.css(Ca)),
                  (dr = we());
                var nn = Fr(),
                  Li = {
                    w: nn.w - mr - Be - (Sr ? 0 : Dr),
                    h: nn.h - ye - ze - (Sr ? 0 : Se),
                  },
                  Pt = {
                    w: I.max((Yr ? tn.w : Bs.w) + Ur, Li.w),
                    h: I.max((Br ? tn.h : Bs.h) + oe, Li.h),
                  };
                if (((Pt.c = m(Pt, fs)), (fs = Pt), Rr)) {
                  (Pt.c || Br || Yr) &&
                    ((W[J] = Pt.w),
                    (W[xr] = Pt.h),
                    N || (tn = { w: ct[i.cW], h: ct[i.cH] }));
                  var Fs = {},
                    Us = function (jr) {
                      var be = ra(jr),
                        va = be._w_h,
                        Qr = be._width_height,
                        lr = jr ? Yr : Br,
                        Aa = jr ? Be : ze,
                        Et = jr ? Dr : Se,
                        Pn = jr ? mr : ye,
                        Dn = dr[va] - Aa - Pn - (Sr ? 0 : Et);
                      (!lr || (!lr && oa.c)) && (W[Qr] = Li[va] - 1),
                        lr &&
                          tn[va] < Dn &&
                          (!(jr && N) || !Ke) &&
                          (N && (Fs[Qr] = Ta(Ua.css(Qr)) - 1), (W[Qr] -= 1)),
                        tn[va] > 0 && (W[Qr] = I.max(1, W[Qr]));
                    };
                  Us(!0), Us(!1), N && Ua.css(Fs), Ce.css(W);
                }
                Yr && (F[J] = Ra),
                  Yr && !Sr && !ka && (F[xe] = 'none'),
                  Mr.css(F),
                  (F = {});
                var lt = { w: ct[i.sW], h: ct[i.sH] };
                (lt.c = o = m(lt, mt)),
                  (mt = lt),
                  (dr = we()),
                  (nn = Fr()),
                  (t = m(nn, Jt)),
                  (Jt = nn);
                var Hi = N && (dr.w === 0 || dr.h === 0),
                  Sn = Ht,
                  Dt = {},
                  sn = {},
                  Qs = {},
                  Na = {},
                  Tr = {},
                  Or = {},
                  on = {},
                  Vs = et[i.bCR](),
                  qs = function (jr) {
                    var be = ra(jr),
                      va = ra(!jr),
                      Qr = va._x_y,
                      lr = be._x_y,
                      Aa = be._w_h,
                      Et = be._width_height,
                      Pn = Fe + be._Left_Top + 'Max',
                      Dn = Vs[Et] ? I.abs(Vs[Et] - dr[Aa]) : 0,
                      Po = Sn && Sn[lr] > 0 && yt[Pn] === 0;
                    (Dt[lr] = Er[lr] === 'v-s'),
                      (sn[lr] = Er[lr] === 'v-h'),
                      (Qs[lr] = Er[lr] === 's'),
                      (Na[lr] = I.max(
                        0,
                        I.round((lt[Aa] - dr[Aa]) * 100) / 100,
                      )),
                      (Na[lr] *= Hi || (Po && Dn > 0 && Dn < 1) ? 0 : 1),
                      (Tr[lr] = Na[lr] > 0),
                      (Or[lr] =
                        Dt[lr] || sn[lr]
                          ? Tr[Qr] && !Dt[Qr] && !sn[Qr]
                          : Tr[lr]),
                      (Or[lr + 's'] = Or[lr] ? Qs[lr] || Dt[lr] : !1),
                      (on[lr] = Tr[lr] && Or[lr + 's']);
                  };
                if (
                  (qs(!0),
                  qs(!1),
                  (Na.c = m(Na, Ht)),
                  (Ht = Na),
                  (Tr.c = m(Tr, Ea)),
                  (Ea = Tr),
                  (Or.c = m(Or, Xt)),
                  (Xt = Or),
                  Z.x || Z.y)
                ) {
                  var Co = 'px solid transparent',
                    Ii = {},
                    Za = {},
                    Tn = l,
                    Ni;
                  (Tr.x || Tr.y) &&
                    ((Za.w = Z.y && Tr.y ? lt.w + Gr.y : K),
                    (Za.h = Z.x && Tr.x ? lt.h + Gr.x : K),
                    (Tn = m(Za, ns)),
                    (ns = Za)),
                    (Tr.c ||
                      Or.c ||
                      lt.c ||
                      Oe ||
                      yr ||
                      ne ||
                      Yr ||
                      Br ||
                      Ir) &&
                      ((F[le + ir] = F[Je + ir] = K),
                      (Ni = function (jr) {
                        var be = ra(jr),
                          va = ra(!jr),
                          Qr = be._x_y,
                          lr = jr ? ue : re,
                          Aa = jr ? Br : Yr;
                        Z[Qr] && Tr[Qr] && Or[Qr + 's']
                          ? ((F[le + lr] = Aa ? (Cr ? K : Gr[Qr]) : K),
                            (F[Je + lr] =
                              (!jr || !Aa) && !Cr ? Gr[Qr] + Co : K))
                          : ((Za[va._w_h] = F[le + lr] = F[Je + lr] = K),
                            (Tn = !0));
                      }),
                      $ ? ea(tr, jn, !Cr) : (Ni(!0), Ni(!1))),
                    Cr && ((Za.w = Za.h = K), (Tn = !0)),
                    Tn &&
                      !$ &&
                      ((Ii[J] = Or.y ? Za.w : K),
                      (Ii[xr] = Or.x ? Za.h : K),
                      Fa || ((Fa = V(qe(ro))), tr.prepend(Fa)),
                      Fa.css(Ii)),
                    Mr.css(F);
                }
                var ce = {},
                  ee = {},
                  Pi;
                if (
                  (t ||
                    Tr.c ||
                    Or.c ||
                    lt.c ||
                    Ae ||
                    je ||
                    Ir ||
                    Oe ||
                    $r ||
                    ne) &&
                  ((ce[ir] = K),
                  (Pi = function (jr) {
                    var be = ra(jr),
                      va = ra(!jr),
                      Qr = be._x_y,
                      lr = be._X_Y,
                      Aa = jr ? ue : re,
                      Et = function () {
                        (ce[Aa] = K), (ua[va._w_h] = 0);
                      };
                    Tr[Qr] && Or[Qr + 's']
                      ? ((ce[_e + lr] = Fe),
                        Cr || $
                          ? Et()
                          : ((ce[Aa] = -(Z[Qr] ? Gr[Qr] : n[Qr])),
                            (ua[va._w_h] = Z[Qr] ? Gr[va._x_y] : 0)))
                      : ((ce[_e + lr] = K), Et());
                  }),
                  Pi(!0),
                  Pi(!1),
                  !$ &&
                  (dr.h < me.x || dr.w < me.y) &&
                  ((Tr.x && Or.x && !Z.x) || (Tr.y && Or.y && !Z.y))
                    ? ((ce[Me + qr] = me.x),
                      (ce[le + qr] = -me.x),
                      (ce[Me + ir] = me.y),
                      (ce[le + ir] = -me.y))
                    : (ce[Me + qr] =
                        ce[le + qr] =
                        ce[Me + ir] =
                        ce[le + ir] =
                          K),
                  (ce[Me + re] = ce[le + re] = K),
                  (Tr.x && Or.x) || (Tr.y && Or.y) || Hi
                    ? N && Hi && (ee[xa] = ee[ga] = ot)
                    : (!Ne || sn.x || Dt.x || sn.y || Dt.y) &&
                      (N && (ee[xa] = ee[ga] = K), (ce[xa] = ce[ga] = la)),
                  Xe.css(ee),
                  tr.css(ce),
                  (ce = {}),
                  (Tr.c || je || yr || ne) && !(Z.x && Z.y))
                ) {
                  var Ln = _a[i.s];
                  (Ln.webkitTransform = 'scale(1)'),
                    (Ln.display = 'run-in'),
                    (Ln.display = K),
                    (Ln.webkitTransform = K);
                }
                if (((F = {}), Oe || yr || ne))
                  if (fr && Yr) {
                    var Ao = Mr.css(xe),
                      Ks = I.round(Mr.css(xe, K).css(_r, K).position().left);
                    Mr.css(xe, Ao);
                    var Oo = I.round(Mr.position().left);
                    Ks !== Oo && (F[_r] = Ks);
                  } else F[_r] = K;
                if ((Mr.css(F), N && o)) {
                  var Pa = yo();
                  if (Pa) {
                    var Ys = si === z ? !0 : Pa._rows !== si._rows,
                      js = Pa._cursorRow,
                      wo = Pa._cursorColumn,
                      Eo = Pa._widestRow,
                      ko = Pa._rows,
                      So = Pa._columns,
                      To = Pa._cursorPosition,
                      Lo = Pa._cursorMax,
                      Gs = To >= Lo && ui,
                      Hn = {
                        x: !Ke && wo === So && js === Eo ? Ht.x : -1,
                        y: (
                          Ke
                            ? Gs || (Ys && Sn && C.y === Sn.y)
                            : (Gs || Ys) && js === ko
                        )
                          ? Ht.y
                          : -1,
                      };
                    (C.x = Hn.x > -1 ? (fr && Qa && E.i ? 0 : Hn.x) : C.x),
                      (C.y = Hn.y > -1 ? Hn.y : C.y);
                  }
                  si = Pa;
                }
                fr && E.i && Z.y && Tr.x && Qa && (C.x += ua.w || 0),
                  Yr && Y[he](0),
                  Br && Y[de](0),
                  tr[he](C.x)[de](C.y);
                var Ho = er === 'v',
                  Io = er === 'h',
                  No = er === 'a',
                  In = function (jr, be) {
                    (be = be === z ? jr : be),
                      Ps(!0, jr, on.x),
                      Ps(!1, be, on.y);
                  };
                ea(Y, Ut, Or.x || Or.y),
                  ea(Y, Ui, Or.x),
                  ea(Y, Qi, Or.y),
                  Oe && !rr && ea(Y, Fi, fr),
                  rr && Jr(Y, Kn),
                  Xr &&
                    (ea(Y, Kn, wn),
                    ea(Le, Vt, !wn),
                    ea(Le, Xi, En),
                    ea(Le, Zi, pi),
                    ea(Le, $i, _i)),
                  (nr || Ae || Or.c || Tr.c || Ir) &&
                    (Cr
                      ? Ir && (pe(Y, un), Cr && In(!1))
                      : No
                      ? In(on.x, on.y)
                      : Ho
                      ? In(!0)
                      : Io && In(!1)),
                  (U || Ir) && (mi(!xt && !$e), Sa(hi, !hi)),
                  (t || Na.c || ne || yr || Xr || je || te || Ir || Oe) &&
                    (wi(!0), ma(!0), wi(!1), ma(!1)),
                  X && Ds(!0, cr),
                  ie && Ds(!1, wr),
                  Ve('onDirectionChanged', { isRTL: fr, dir: Ye }, Oe),
                  Ve('onHostSizeChanged', { width: Jt.w, height: Jt.h }, t),
                  Ve('onContentSizeChanged', { width: mt.w, height: mt.h }, o),
                  Ve(
                    'onOverflowChanged',
                    {
                      x: Tr.x,
                      y: Tr.y,
                      xScrollable: Or.xs,
                      yScrollable: Or.ys,
                      clipped: Or.x || Or.y,
                    },
                    Tr.c || Or.c,
                  ),
                  Ve('onOverflowAmountChanged', { x: Na.x, y: Na.y }, Na.c);
              }
              rr &&
                tt &&
                (Ea.c || tt.c) &&
                (tt.f || Ls(),
                Z.y && Ea.x && Mr.css(Re + J, tt.w + Gr.y),
                Z.x && Ea.y && Mr.css(Re + xr, tt.h + Gr.x),
                (tt.c = !1)),
                D && h.updateOnLoad && Is(),
                Ve('onUpdated', { forced: l });
            }
          }
          function Is() {
            N ||
              Ws(function (r, a) {
                Mr.find(a).each(function (t, o) {
                  S.inA(o, Kt) < 0 && (Kt.push(o), V(o).off(ri, yi).on(ri, yi));
                });
              });
          }
          function Ci(r) {
            var a = u._validate(r, u._template, !0, qt);
            return (
              (qt = He({}, qt, a._default)),
              (ae = He({}, ae, a._prepared)),
              a._prepared
            );
          }
          function Ai(r) {
            var a = 'parent',
              t = 'os-resize-observer-host',
              o = fn + fe + pn,
              l = N ? fe + pn : K,
              h = ae.textarea.inheritedAttrs,
              b = {},
              g = function () {
                var P = r ? or : Y;
                j(b, function (er, nr) {
                  H(nr) == _.s && (er == i.c ? P.addClass(nr) : P.attr(er, nr));
                });
              },
              m = [
                ge,
                vn,
                qn,
                Kn,
                Fi,
                Ri,
                Wi,
                Bi,
                un,
                Ut,
                Ui,
                Qi,
                _n,
                fn,
                pn,
                Zt,
              ].join(fe),
              C = {};
            (Y = Y || (N ? (Pr ? or[a]()[a]()[a]()[a]() : V(qe(qn))) : or)),
              (Mr = Mr || Va(Gn + l)),
              (tr = tr || Va(hn + l)),
              (Xe = Xe || Va(Yn + l)),
              (pa = pa || Va(t)),
              (Ua = Ua || (N ? Va($s) : z)),
              Pr && Jr(Y, vn),
              r && pe(Y, m),
              (h = H(h) == _.s ? h.split(fe) : h),
              S.isA(h) &&
                N &&
                j(h, function (Q, P) {
                  H(P) == _.s && (b[P] = r ? Y.attr(P) : or.attr(P));
                }),
              r
                ? (Pr && D
                    ? (pa.children().remove(),
                      j([Xe, tr, Mr, Ua], function (Q, P) {
                        P && pe(P.removeAttr(i.s), Xn);
                      }),
                      Jr(Y, N ? qn : ge))
                    : (qa(pa),
                      Mr.contents().unwrap().unwrap().unwrap(),
                      N && (or.unwrap(), qa(Y), qa(Ua), g())),
                  N && or.removeAttr(i.s),
                  rr && pe(St, Mi))
                : (N &&
                    (ae.sizeAutoCapable ||
                      ((C[J] = or.css(J)), (C[xr] = or.css(xr))),
                    Pr || or.addClass(pn).wrap(Y),
                    (Y = or[a]().css(C))),
                  Pr ||
                    (Jr(or, N ? o : ge),
                    Y.wrapInner(Mr).wrapInner(tr).wrapInner(Xe).prepend(pa),
                    (Mr = It(Y, Ue + Gn)),
                    (tr = It(Y, Ue + hn)),
                    (Xe = It(Y, Ue + Yn)),
                    N && (Mr.prepend(Ua), g())),
                  $ && Jr(tr, jn),
                  Z.x && Z.y && Jr(tr, Vi),
                  rr && Jr(St, Mi),
                  (gn = pa[0]),
                  (Qe = Y[0]),
                  (et = Xe[0]),
                  (yt = tr[0]),
                  (_a = Mr[0]),
                  xi());
          }
          function ho() {
            var r = [
                112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 123, 33, 34,
                37, 38, 39, 40, 16, 17, 18, 19, 20, 144,
              ],
              a = [],
              t,
              o,
              l = 175,
              h = 'focus';
            function b(U) {
              gi(), L.update(zr), U && hr && clearInterval(t);
            }
            function g(U) {
              return (
                or[he](E.i && Qa ? 9999999 : 0),
                or[de](0),
                S.prvD(U),
                S.stpP(U),
                !1
              );
            }
            function m(U) {
              setTimeout(function () {
                q || b();
              }, 50);
            }
            function C() {
              (ui = !0), Jr(Y, h);
            }
            function Q() {
              (ui = !1), (a = []), pe(Y, h), b(!0);
            }
            function P(U) {
              var cr = U.keyCode;
              G(cr, r) < 0 &&
                (a[i.l] || (b(), (t = setInterval(b, 1e3 / 60))),
                G(cr, a) < 0 && a.push(cr));
            }
            function er(U) {
              var cr = U.keyCode,
                X = G(cr, a);
              G(cr, r) < 0 && (X > -1 && a.splice(X, 1), a[i.l] || b(!0));
            }
            function nr(U) {
              ti !== !0 &&
                ((U = U.originalEvent || U),
                fo(U.propertyName) && L.update(zr));
            }
            function pr(U) {
              gr ||
                (o !== z
                  ? clearTimeout(o)
                  : ((nt || $e) && Sa(!0),
                    rn() || Jr(Y, un),
                    Ve('onScrollStart', U)),
                it || (ma(!0), ma(!1)),
                Ve('onScroll', U),
                (o = setTimeout(function () {
                  q ||
                    (clearTimeout(o),
                    (o = z),
                    (nt || $e) && Sa(!1),
                    rn() || pe(Y, un),
                    Ve('onScrollStop', U));
                }, l)));
            }
            N
              ? (br > 9 || !hr ? ba(or, 'input', b) : ba(or, [Fn, Un], [P, er]),
                ba(or, [Fe, 'drop', h, h + 'out'], [g, m, C, Q]))
              : ba(Mr, Qn, nr),
              ba(tr, Fe, pr, !0);
          }
          function Oi(r) {
            var a = function (b) {
              var g = b ? to : no,
                m = Va(Wa + fe + g, !0),
                C = Va(Ki, m),
                Q = Va(ji, m);
              return (
                !Pr && !r && (m.append(C), C.append(Q)),
                { _scrollbar: m, _track: C, _handle: Q }
              );
            };
            function t(h) {
              var b = ra(h),
                g = b._scrollbar,
                m = b._track,
                C = b._handle;
              Pr && D
                ? j([g, m, C], function (Q, P) {
                    pe(P.removeAttr(i.s), Xn);
                  })
                : qa(g || a(h)._scrollbar);
            }
            var o, l;
            r
              ? (t(!0), t())
              : ((o = a(!0)),
                (l = a()),
                (_t = o._scrollbar),
                (yn = o._track),
                (Yt = o._handle),
                (bt = l._scrollbar),
                (mn = l._track),
                (jt = l._handle),
                Pr || (Xe.after(bt), Xe.after(_t)));
          }
          function Ns(r) {
            var a = ra(r),
              t = a._info,
              o = Gt.top !== Gt,
              l = a._x_y,
              h = a._X_Y,
              b = Fe + a._Left_Top,
              g = 'active',
              m = 'snapHandle',
              C = 'click',
              Q = 1,
              P = [16, 17],
              er,
              nr,
              pr,
              U;
            function cr(k) {
              return br && o ? k['screen' + h] : S.page(k)[l];
            }
            function X(k) {
              return ae.scrollbars[k];
            }
            function wr() {
              Q = 0.5;
            }
            function ie() {
              Q = 1;
            }
            function Kr(k) {
              S.stpP(k);
            }
            function Ie(k) {
              G(k.keyCode, P) > -1 && wr();
            }
            function se(k) {
              G(k.keyCode, P) > -1 && ie();
            }
            function Xr(k) {
              var Ar = k.originalEvent || k,
                Er = Ar.touches !== z;
              return gr || q || rn() || !ni || (Er && !X('touchSupport'))
                ? !1
                : S.mBtn(k) === 1 || Er;
            }
            function Zr(k) {
              if (Xr(k)) {
                var Ar = t._trackLength,
                  Er = t._handleLength,
                  Ae = t._maxScroll,
                  Ka = (cr(k) - pr) * U,
                  At = Ka / (Ar - Er),
                  Pe = Ae * At;
                (Pe = isFinite(Pe) ? Pe : 0),
                  fr && r && !E.i && (Pe *= -1),
                  tr[b](I.round(nr + Pe)),
                  it && ma(r, nr + Pe),
                  p || S.prvD(k);
              } else te(k);
            }
            function te(k) {
              if (
                ((k = k || k.originalEvent),
                We(wa, [Bt, Wt, Fn, Un, Ft], [Zr, te, Ie, se, $t], !0),
                S.rAF()(function () {
                  We(wa, C, Kr, !0, { _capture: !0 });
                }),
                it && ma(r, !0),
                (it = !1),
                pe(pt, ht),
                pe(a._handle, g),
                pe(a._track, g),
                pe(a._scrollbar, g),
                (nr = z),
                (pr = z),
                (U = 1),
                ie(),
                er !== z && (L.scrollStop(), clearTimeout(er), (er = z)),
                k)
              ) {
                var Ar = Qe[i.bCR](),
                  Er =
                    k.clientX >= Ar.left &&
                    k.clientX <= Ar.right &&
                    k.clientY >= Ar.top &&
                    k.clientY <= Ar.bottom;
                Er || Ts(), (nt || $e) && Sa(!1);
              }
            }
            function Ne(k) {
              Xr(k) && $r(k);
            }
            function $r(k) {
              (nr = tr[b]()),
                (nr = isNaN(nr) ? 0 : nr),
                ((fr && r && !E.n) || !fr) && (nr = nr < 0 ? 0 : nr),
                (U = Si()[l]),
                (pr = cr(k)),
                (it = !X(m)),
                Jr(pt, ht),
                Jr(a._handle, g),
                Jr(a._scrollbar, g),
                We(wa, [Bt, Wt, Ft], [Zr, te, $t]),
                S.rAF()(function () {
                  We(wa, C, Kr, !1, { _capture: !0 });
                }),
                (br || !Hr) && S.prvD(k),
                S.stpP(k);
            }
            function Rr(k) {
              if (Xr(k)) {
                var Ar =
                    a._info._handleLength /
                    Math.round(
                      I.min(1, dr[a._w_h] / mt[a._w_h]) * a._info._trackLength,
                    ),
                  Er = I.round(dr[a._w_h] * Ar),
                  Ae = 270 * Ar,
                  Ka = 400 * Ar,
                  At = a._track.offset()[a._left_top],
                  Pe = k.ctrlKey,
                  La = k.shiftKey,
                  Ha = La && Pe,
                  Ke = !0,
                  en = 'linear',
                  Ye,
                  Oe,
                  Ya = function (re) {
                    it && ma(r, re);
                  },
                  je = function () {
                    Ya(), $r(k);
                  },
                  Wr = function ta() {
                    if (!q) {
                      var re = (pr - At) * U,
                        ir = t._handleOffset,
                        ja = t._trackLength,
                        Ga = t._handleLength,
                        Ja = t._maxScroll,
                        Ot = t._currentScroll,
                        na = Ae * Q,
                        Yr = Ke ? I.max(Ka, na) : na,
                        yr = Ja * ((re - Ga / 2) / (ja - Ga)),
                        ia = fr && r && ((!E.i && !E.n) || Qa),
                        Br = ia ? ir < re : ir > re,
                        ne = {},
                        sa = {
                          easing: en,
                          step: function (wt) {
                            it && (tr[b](wt), ma(r, wt));
                          },
                        };
                      (yr = isFinite(yr) ? yr : 0),
                        (yr = fr && r && !E.i ? Ja - yr : yr),
                        La
                          ? (tr[b](yr),
                            Ha
                              ? ((yr = tr[b]()),
                                tr[b](Ot),
                                (yr = ia && E.i ? Ja - yr : yr),
                                (yr = ia && E.n ? -yr : yr),
                                (ne[l] = yr),
                                L.scroll(
                                  ne,
                                  He(sa, { duration: 130, complete: je }),
                                ))
                              : je())
                          : ((Ye = Ke ? Br : Ye),
                            (Oe = ia
                              ? Ye
                                ? ir + Ga >= re
                                : ir <= re
                              : Ye
                              ? ir <= re
                              : ir + Ga >= re),
                            Oe
                              ? (clearTimeout(er),
                                L.scrollStop(),
                                (er = z),
                                Ya(!0))
                              : ((er = setTimeout(ta, Yr)),
                                (ne[l] = (Ye ? '-=' : '+=') + Er),
                                L.scroll(ne, He(sa, { duration: na }))),
                            (Ke = !1));
                    }
                  };
                Pe && wr(),
                  (U = Si()[l]),
                  (pr = S.page(k)[l]),
                  (it = !X(m)),
                  Jr(pt, ht),
                  Jr(a._track, g),
                  Jr(a._scrollbar, g),
                  We(wa, [Wt, Fn, Un, Ft], [te, Ie, se, $t]),
                  Wr(),
                  S.prvD(k),
                  S.stpP(k);
              }
            }
            function aa(k) {
              (di = !0), (nt || $e) && Sa(!0);
            }
            function Cr(k) {
              (di = !1), (nt || $e) && Sa(!1);
            }
            function Ir(k) {
              S.stpP(k);
            }
            ba(a._handle, kt, Ne),
              ba(a._track, [kt, Di, zi], [Rr, aa, Cr]),
              ba(a._scrollbar, kt, Ir),
              s &&
                ba(a._scrollbar, Qn, function (k) {
                  k.target === a._scrollbar[0] && (wi(r), ma(r));
                });
          }
          function Ps(r, a, t) {
            var o = r ? Ri : Wi,
              l = r ? _t : bt;
            ea(Y, o, !a), ea(l, Ji, !t);
          }
          function Sa(r, a) {
            if ((clearTimeout(ws), r)) pe(_t, Qt), pe(bt, Qt);
            else {
              var t,
                o = 'active',
                l = function () {
                  !di &&
                    !q &&
                    ((t = Yt.hasClass(o) || jt.hasClass(o)),
                    !t && (nt || $e || xt) && Jr(_t, Qt),
                    !t && (nt || $e || xt) && Jr(bt, Qt));
                };
              fi > 0 && a !== !0 ? (ws = setTimeout(l, fi)) : l();
            }
          }
          function wi(r) {
            var a = {},
              t = ra(r),
              o = t._info,
              l = 1e6,
              h = I.min(1, dr[t._w_h] / mt[t._w_h]);
            (a[t._width_height] = I.floor(h * 100 * l) / l + '%'),
              rn() || t._handle.css(a),
              (o._handleLength = t._handle[0]['offset' + t._Width_Height]),
              (o._handleLengthRatio = h);
          }
          function ma(r, a) {
            var t = H(a) == _.b,
              o = 250,
              l = fr && r,
              h = ra(r),
              b = h._info,
              g = 'translate(',
              m = ke._cssProperty('transform'),
              C = ke._cssProperty('transition'),
              Q = r ? tr[he]() : tr[de](),
              P = a === z || t ? Q : a,
              er = b._handleLength,
              nr = h._track[0]['offset' + h._Width_Height],
              pr = nr - er,
              U = {},
              cr,
              X,
              wr =
                (yt[Fe + h._Width_Height] - yt['client' + h._Width_Height]) *
                (E.n && l ? -1 : 1),
              ie = function (Ne) {
                return isNaN(Ne / wr) ? 0 : I.max(0, I.min(1, Ne / wr));
              },
              Kr = function (Ne) {
                var $r = pr * Ne;
                return (
                  ($r = isNaN($r) ? 0 : $r),
                  ($r = l && !E.i ? nr - er - $r : $r),
                  ($r = I.max(0, $r)),
                  $r
                );
              },
              Ie = ie(Q),
              se = ie(P),
              Xr = Kr(se),
              Zr = Kr(Ie);
            (b._maxScroll = wr),
              (b._currentScroll = Q),
              (b._currentScrollRatio = Ie),
              c
                ? ((cr = l ? -(nr - er - Xr) : Xr),
                  (X = r ? g + cr + 'px, 0)' : g + '0, ' + cr + 'px)'),
                  (U[m] = X),
                  s &&
                    (U[C] =
                      t && I.abs(Xr - b._handleOffset) > 1
                        ? _o(h._handle) + ', ' + (m + fe + o + 'ms')
                        : K))
                : (U[h._left_top] = Xr),
              rn() ||
                (h._handle.css(U),
                c &&
                  s &&
                  t &&
                  h._handle.one(Qn, function () {
                    q || h._handle.css(C, K);
                  })),
              (b._handleOffset = Xr),
              (b._snappedHandleOffset = Zr),
              (b._trackLength = nr);
          }
          function Ds(r, a) {
            var t = a ? 'removeClass' : 'addClass',
              o = r ? yn : Yt,
              l = r ? mn : jt,
              h = r ? Yi : Gi;
            o[t](h), l[t](h);
          }
          function ra(r) {
            return {
              _width_height: r ? J : xr,
              _Width_Height: r ? 'Width' : 'Height',
              _left_top: r ? _r : qr,
              _Left_Top: r ? 'Left' : 'Top',
              _x_y: r ? Mt : Rt,
              _X_Y: r ? 'X' : 'Y',
              _w_h: r ? 'w' : 'h',
              _l_t: r ? 'l' : 't',
              _track: r ? yn : mn,
              _handle: r ? Yt : jt,
              _scrollbar: r ? _t : bt,
              _info: r ? Ge : fa,
            };
          }
          function Ei(r) {
            (Le = Le || Va(Jn, !0)),
              r
                ? Pr && D
                  ? pe(Le.removeAttr(i.s), Xn)
                  : qa(Le)
                : Pr || Y.append(Le);
          }
          function po() {
            var r = Gt.top !== Gt,
              a = {},
              t = {},
              o = {},
              l;
            function h(C) {
              if (g(C)) {
                var Q = m(C),
                  P = {};
                (pi || En) && (P[J] = t.w + (Q.x - a.x) * o.x),
                  (_i || En) && (P[xr] = t.h + (Q.y - a.y) * o.y),
                  Y.css(P),
                  S.stpP(C);
              } else b(C);
            }
            function b(C) {
              var Q = C !== z;
              We(wa, [Ft, Bt, Wt], [$t, h, b], !0),
                pe(pt, ht),
                Le.releaseCapture && Le.releaseCapture(),
                Q && (l && ks(), L.update(zr)),
                (l = !1);
            }
            function g(C) {
              var Q = C.originalEvent || C,
                P = Q.touches !== z;
              return gr || q ? !1 : S.mBtn(C) === 1 || P;
            }
            function m(C) {
              return br && r ? { x: C.screenX, y: C.screenY } : S.page(C);
            }
            ba(Le, kt, function (C) {
              g(C) &&
                !wn &&
                (ka && ((l = !0), bi()),
                (a = m(C)),
                (t.w = Qe[i.oW] - (Sr ? 0 : Dr)),
                (t.h = Qe[i.oH] - (Sr ? 0 : Se)),
                (o = Si()),
                We(wa, [Ft, Bt, Wt], [$t, h, b]),
                Jr(pt, ht),
                Le.setCapture && Le.setCapture(),
                S.prvD(C),
                S.stpP(C));
            });
          }
          function Ve(r, a, t) {
            if (t !== !1)
              if (D) {
                var o = ae.callbacks[r],
                  l = r,
                  h;
                l.substr(0, 2) === 'on' &&
                  (l = l.substr(2, 1).toLowerCase() + l.substr(3)),
                  H(o) == _.f && o.call(L, a),
                  j(Ba, function () {
                    (h = this), H(h.on) == _.f && h.on(l, a);
                  });
              } else q || Zn.push({ n: r, a });
          }
          function gt(r, a, t) {
            (a = a || K),
              (t = t || [K, K, K, K]),
              (r[a + qr] = t[0]),
              (r[a + ve] = t[1]),
              (r[a + ue] = t[2]),
              (r[a + _r] = t[3]);
          }
          function ki(r, a, t, o) {
            return (
              (a = a || K),
              (r = r || K),
              {
                t: o ? 0 : Ta(Y.css(r + qr + a)),
                r: t ? 0 : Ta(Y.css(r + ve + a)),
                b: o ? 0 : Ta(Y.css(r + ue + a)),
                l: t ? 0 : Ta(Y.css(r + _r + a)),
              }
            );
          }
          function _o(r) {
            var a = ke._cssProperty('transition'),
              t = r.css(a);
            if (t) return t;
            for (
              var o = '\\s*(([^,(]+(\\(.+?\\))?)+)[\\s,]*',
                l = new RegExp(o),
                h = new RegExp('^(' + o + ')+$'),
                b = 'property duration timing-function delay'.split(' '),
                g = [],
                m,
                C,
                Q = 0,
                P,
                er = function (pr) {
                  if (((m = []), !pr.match(h))) return pr;
                  for (; pr.match(l); )
                    m.push(RegExp.$1), (pr = pr.replace(l, K));
                  return m;
                };
              Q < b[i.l];
              Q++
            )
              for (C = er(r.css(a + '-' + b[Q])), P = 0; P < C[i.l]; P++)
                g[P] = (g[P] ? g[P] + fe : K) + C[P];
            return g.join(', ');
          }
          function zs(r, a) {
            var t,
              o,
              l,
              h = function (g, m) {
                if (((l = ''), m && za(g) == _.s))
                  for (o = g.split(fe), t = 0; t < o[i.l]; t++)
                    l += '|' + o[t] + '$';
                return l;
              };
            return new RegExp(
              '(^' + ge + '([-_].+|)$)' + h(Zt, r) + h(ii, a),
              'g',
            );
          }
          function Si() {
            var r = et[i.bCR]();
            return {
              x: (c && 1 / (I.round(r.width) / et[i.oW])) || 1,
              y: (c && 1 / (I.round(r.height) / et[i.oH])) || 1,
            };
          }
          function Ms(r) {
            var a = 'ownerDocument',
              t = 'HTMLElement',
              o = (r && r[a] && r[a].parentWindow) || ar;
            return za(o[t]) == _.o
              ? r instanceof o[t]
              : r &&
                  za(r) == _.o &&
                  r !== null &&
                  r.nodeType === 1 &&
                  za(r.nodeName) == _.s;
          }
          function bo(r, a) {
            var t = [],
              o = [],
              l,
              h;
            for (l = 0; l < r.length; l++) t[r[l]] = !0;
            for (l = 0; l < a.length; l++)
              t[a[l]] ? delete t[a[l]] : (t[a[l]] = !0);
            for (h in t) o.push(h);
            return o;
          }
          function Ta(r, a) {
            var t = a ? parseFloat(r) : parseInt(r, 10);
            return isNaN(t) ? 0 : t;
          }
          function yo() {
            var r = rt.selectionStart;
            if (r !== z) {
              var a = or.val(),
                t = a[i.l],
                o = a.split(`
`),
                l = o[i.l],
                h = a.substr(0, r).split(`
`),
                b = 0,
                g = 0,
                m = h[i.l],
                C = h[h[i.l] - 1][i.l],
                Q,
                P;
              for (P = 0; P < o[i.l]; P++)
                (Q = o[P][i.l]), Q > g && ((b = P + 1), (g = Q));
              return {
                _cursorRow: m,
                _cursorColumn: C,
                _rows: l,
                _columns: g,
                _widestRow: b,
                _cursorPosition: r,
                _cursorMax: t,
              };
            }
          }
          function rn() {
            return ai && Z.x && Z.y;
          }
          function Rs() {
            return N ? Ua[0] : _a;
          }
          function qe(r, a) {
            return (
              '<div ' +
              (r
                ? H(r) == _.s
                  ? 'class="' + r + '"'
                  : (function () {
                      var t,
                        o = K;
                      if (V.isPlainObject(r))
                        for (t in r)
                          o += (t === 'c' ? 'class' : t) + '="' + r[t] + '" ';
                      return o;
                    })()
                : K) +
              '>' +
              (a || K) +
              '</div>'
            );
          }
          function Va(r, a) {
            var t = H(a) == _.b,
              o = t ? Y : a || Y;
            return Pr && !o[i.l]
              ? null
              : Pr
              ? o[t ? 'children' : 'find'](Ue + r.replace(/\s/g, Ue)).eq(0)
              : V(qe(r));
          }
          function Ti(r, a) {
            for (var t = a.split(Ue), o = 0, l; o < t.length; o++) {
              if (!r[i.hOP](t[o])) return;
              (l = r[t[o]]), o < t.length && H(l) == _.o && (r = l);
            }
            return l;
          }
          function mo(r, a, t) {
            for (
              var o = a.split(Ue), l = o.length, h = 0, b = {}, g = b;
              h < l;
              h++
            )
              b = b[o[h]] = h + 1 < l ? {} : t;
            V.extend(r, g, !0);
          }
          function Ws(r) {
            var a = ae.updateOnLoad;
            (a = H(a) == _.s ? a.split(fe) : a), S.isA(a) && !q && j(a, r);
          }
          function Ct(r, a, t) {
            if (t) return t;
            if (H(r) == _.o && H(a) == _.o) {
              for (var o in r)
                if (o !== 'c')
                  if (r[i.hOP](o) && a[i.hOP](o)) {
                    if (Ct(r[o], a[o])) return !0;
                  } else return !0;
            } else return r !== a;
            return !1;
          }
          function He() {
            return V.extend.apply(this, [!0].concat([].slice.call(arguments)));
          }
          function Jr(r, a) {
            return ur.addClass.call(r, a);
          }
          function pe(r, a) {
            return ur.removeClass.call(r, a);
          }
          function ea(r, a, t) {
            return t ? Jr(r, a) : pe(r, a);
          }
          function qa(r) {
            return ur.remove.call(r);
          }
          function It(r, a) {
            return ur.find.call(r, a).eq(0);
          }
          (L.sleep = function () {
            gr = !0;
          }),
            (L.update = function (r) {
              if (!q) {
                var a,
                  t,
                  o = H(r) == _.s,
                  l,
                  h,
                  b;
                return (
                  o
                    ? r === zr
                      ? ((a = uo()),
                        (t = vo()),
                        (l = a || t),
                        l &&
                          ya({
                            _contentSizeChanged: t,
                            _changedOptions: D ? z : ae,
                          }))
                      : r === Mn
                      ? ka
                        ? ((h = oi(An.takeRecords())),
                          (b = ci(On.takeRecords())))
                        : (h = L.update(zr))
                      : r === 'zoom' &&
                        ya({ _hostSizeChanged: !0, _contentSizeChanged: !0 })
                    : ((r = gr || r),
                      (gr = !1),
                      (!L.update(Mn) || r) && ya({ _force: r })),
                  Is(),
                  l || h || b
                );
              }
            }),
            (L.options = function (r, a) {
              var t = {},
                o;
              if (V.isEmptyObject(r) || !V.isPlainObject(r))
                if (H(r) == _.s)
                  if (arguments.length > 1) mo(t, r, a), (o = Ci(t));
                  else return Ti(qt, r);
                else return qt;
              else o = Ci(r);
              V.isEmptyObject(o) || ya({ _changedOptions: o });
            }),
            (L.destroy = function () {
              if (!q) {
                kr.remove(L), bi(), kn(pa), kn(da);
                for (var r in Ba) L.removeExt(r);
                for (; vi[i.l] > 0; ) vi.pop()();
                mi(!0),
                  Ce && qa(Ce),
                  Fa && qa(Fa),
                  Vr && qa(da),
                  Oi(!0),
                  Ei(!0),
                  Ai(!0);
                for (var a = 0; a < Kt[i.l]; a++) V(Kt[a]).off(ri, yi);
                (Kt = z), (q = !0), (gr = !0), Ma(w, 0), Ve('onDestroyed');
              }
            }),
            (L.scroll = function (r, a, t, o) {
              if (arguments.length === 0 || r === z) {
                var l = Ge,
                  h = fa,
                  b = Qa && fr && E.i,
                  g = Qa && fr && E.n,
                  m = l._currentScroll,
                  C = l._currentScrollRatio,
                  Q = l._maxScroll;
                return (
                  (C = b ? 1 - C : C),
                  (m = b ? Q - m : m),
                  (m *= g ? -1 : 1),
                  (Q *= g ? -1 : 1),
                  {
                    position: { x: m, y: h._currentScroll },
                    ratio: { x: C, y: h._currentScrollRatio },
                    max: { x: Q, y: h._maxScroll },
                    handleOffset: { x: l._handleOffset, y: h._handleOffset },
                    handleLength: { x: l._handleLength, y: h._handleLength },
                    handleLengthRatio: {
                      x: l._handleLengthRatio,
                      y: h._handleLengthRatio,
                    },
                    trackLength: { x: l._trackLength, y: h._trackLength },
                    snappedHandleOffset: {
                      x: l._snappedHandleOffset,
                      y: h._snappedHandleOffset,
                    },
                    isRTL: fr,
                    isRTLNormalized: Qa,
                  }
                );
              }
              L.update(Mn);
              var P = Qa,
                er = [Mt, _r, 'l'],
                nr = [Rt, qr, 't'],
                pr = ['+=', '-=', '*=', '/='],
                U = H(a) == _.o,
                cr = U ? a.complete : o,
                X,
                wr = {},
                ie = {},
                Kr,
                Ie,
                se,
                Xr = 'end',
                Zr = 'begin',
                te = 'center',
                Ne = 'nearest',
                $r = 'always',
                Rr = 'never',
                aa = 'ifneeded',
                Cr = i.l,
                Ir,
                k,
                Ar,
                Er,
                Ae,
                Ka = [Mt, Rt, 'xy', 'yx'],
                At = [Zr, Xr, te, Ne],
                Pe = [$r, Rr, aa],
                La = r[i.hOP]('el'),
                Ha = La ? r.el : r,
                Ke = Ha instanceof V || vt ? Ha instanceof vt : !1,
                en = Ke ? !1 : Ms(Ha),
                Ye = function () {
                  Kr && ma(!0), Ie && ma(!1);
                },
                Oe =
                  H(cr) != _.f
                    ? z
                    : function () {
                        Ye(), cr();
                      };
              function Ya(F, W) {
                for (X = 0; X < W[Cr]; X++) if (F === W[X]) return !0;
                return !1;
              }
              function je(F, W) {
                var Fr = F ? er : nr;
                if (((W = H(W) == _.s || H(W) == _.n ? [W, W] : W), S.isA(W)))
                  return F ? W[0] : W[1];
                if (H(W) == _.o) {
                  for (X = 0; X < Fr[Cr]; X++) if (Fr[X] in W) return W[Fr[X]];
                }
              }
              function Wr(F, W) {
                var Fr = H(W) == _.s,
                  we,
                  Ur,
                  oe = F ? Ge : fa,
                  ee = oe._currentScroll,
                  Ee = oe._maxScroll,
                  st = ' * ',
                  Nr,
                  Xa = fr && F,
                  ca = Xa && E.n && !P,
                  _e = 'replace',
                  xa = eval,
                  ga;
                if (
                  (Fr
                    ? (W[Cr] > 2 &&
                        ((ga = W.substr(0, 2)), G(ga, pr) > -1 && (we = ga)),
                      (W = we ? W.substr(2) : W),
                      (W = W[_e](/min/g, 0)
                        [_e](/</g, 0)
                        [_e](/max/g, (ca ? '-' : K) + Ra)
                        [_e](/>/g, (ca ? '-' : K) + Ra)
                        [_e](/px/g, K)
                        [_e](/%/g, st + (Ee * (Xa && E.n ? -1 : 1)) / 100)
                        [_e](/vw/g, st + dr.w)
                        [_e](/vh/g, st + dr.h)),
                      (Ur = Ta(isNaN(W) ? Ta(xa(W), !0).toFixed() : W)))
                    : (Ur = W),
                  Ur !== z && !isNaN(Ur) && H(Ur) == _.n)
                ) {
                  var ot = P && Xa,
                    la = ee * (ot && E.n ? -1 : 1),
                    Ca = ot && E.i,
                    an = ot && E.n;
                  switch (((la = Ca ? Ee - la : la), we)) {
                    case '+=':
                      Nr = la + Ur;
                      break;
                    case '-=':
                      Nr = la - Ur;
                      break;
                    case '*=':
                      Nr = la * Ur;
                      break;
                    case '/=':
                      Nr = la / Ur;
                      break;
                    default:
                      Nr = Ur;
                      break;
                  }
                  (Nr = Ca ? Ee - Nr : Nr),
                    (Nr *= an ? -1 : 1),
                    (Nr =
                      Xa && E.n
                        ? I.min(0, I.max(Ee, Nr))
                        : I.max(0, I.min(Ee, Nr)));
                }
                return Nr === ee ? z : Nr;
              }
              function ta(F, W, Fr, we) {
                var Ur = [Fr, Fr],
                  oe = H(F),
                  ee,
                  Ee;
                if (oe == W) F = [F, F];
                else if (oe == _.a) {
                  if (((ee = F[Cr]), ee > 2 || ee < 1)) F = Ur;
                  else
                    for (ee === 1 && (F[1] = Fr), X = 0; X < ee; X++)
                      if (((Ee = F[X]), H(Ee) != W || !Ya(Ee, we))) {
                        F = Ur;
                        break;
                      }
                } else oe == _.o ? (F = [F[Mt] || Fr, F[Rt] || Fr]) : (F = Ur);
                return { x: F[0], y: F[1] };
              }
              function re(F) {
                var W = [],
                  Fr,
                  we,
                  Ur = [qr, ve, ue, _r];
                for (X = 0; X < F[Cr] && X !== Ur[Cr]; X++)
                  (Fr = F[X]),
                    (we = H(Fr)),
                    we == _.b
                      ? W.push(Fr ? Ta(Ae.css(le + Ur[X])) : 0)
                      : W.push(we == _.n ? Fr : 0);
                return W;
              }
              if (Ke || en) {
                var ir = La ? r.margin : 0,
                  ja = La ? r.axis : 0,
                  Ga = La ? r.scroll : 0,
                  Ja = La ? r.block : 0,
                  Ot = [0, 0, 0, 0],
                  na = H(ir),
                  Yr;
                if (((Ae = Ke ? Ha : V(Ha)), Ae[Cr] > 0)) {
                  na == _.n || na == _.b
                    ? (ir = re([ir, ir, ir, ir]))
                    : na == _.a
                    ? ((Yr = ir[Cr]),
                      Yr === 2
                        ? (ir = re([ir[0], ir[1], ir[0], ir[1]]))
                        : Yr >= 4
                        ? (ir = re(ir))
                        : (ir = Ot))
                    : na == _.o
                    ? (ir = re([ir[qr], ir[ve], ir[ue], ir[_r]]))
                    : (ir = Ot),
                    (Ir = Ya(ja, Ka) ? ja : 'xy'),
                    (k = ta(Ga, _.s, $r, Pe)),
                    (Ar = ta(Ja, _.s, Zr, At)),
                    (Er = ir);
                  var yr = { l: Ge._currentScroll, t: fa._currentScroll },
                    ia = Xe.offset(),
                    Br = Ae.offset(),
                    ne = { x: k.x == Rr || Ir == Rt, y: k.y == Rr || Ir == Mt };
                  (Br[qr] -= Er[0]), (Br[_r] -= Er[3]);
                  var sa = {
                    x: I.round(Br[_r] - ia[_r] + yr.l),
                    y: I.round(Br[qr] - ia[qr] + yr.t),
                  };
                  if (
                    (fr &&
                      (!E.n && !E.i && (sa.x = I.round(ia[_r] - Br[_r] + yr.l)),
                      E.n && P && (sa.x *= -1),
                      E.i &&
                        P &&
                        (sa.x = I.round(
                          ia[_r] - Br[_r] + (Ge._maxScroll - yr.l),
                        ))),
                    Ar.x != Zr || Ar.y != Zr || k.x == aa || k.y == aa || fr)
                  ) {
                    var Nt = Ae[0],
                      wt = c
                        ? Nt[i.bCR]()
                        : { width: Nt[i.oW], height: Nt[i.oH] },
                      oa = {
                        w: wt[J] + Er[3] + Er[1],
                        h: wt[xr] + Er[0] + Er[2],
                      },
                      Ia = function (W) {
                        var Fr = ra(W),
                          we = Fr._w_h,
                          Ur = Fr._left_top,
                          oe = Fr._x_y,
                          ee = Ar[oe] == (W && fr ? Zr : Xr),
                          Ee = Ar[oe] == te,
                          st = Ar[oe] == Ne,
                          Nr = k[oe] == Rr,
                          Xa = k[oe] == aa,
                          ca = dr[we],
                          _e = ia[Ur],
                          xa = oa[we],
                          ga = Br[Ur],
                          ot = Ee ? 2 : 1,
                          la = ga + xa / 2,
                          Ca = _e + ca / 2,
                          an = xa <= ca && ga >= _e && ga + xa <= _e + ca;
                        Nr
                          ? (ne[oe] = !0)
                          : ne[oe] ||
                            ((st || Xa) &&
                              ((ne[oe] = Xa ? an : !1),
                              (ee = xa < ca ? la > Ca : la < Ca)),
                            (sa[oe] -=
                              ee || Ee
                                ? (ca / ot - xa / ot) * (W && fr && P ? -1 : 1)
                                : 0));
                      };
                    Ia(!0), Ia(!1);
                  }
                  ne.y && delete sa.y, ne.x && delete sa.x, (r = sa);
                }
              }
              (wr[he] = Wr(!0, je(!0, r))),
                (wr[de] = Wr(!1, je(!1, r))),
                (Kr = wr[he] !== z),
                (Ie = wr[de] !== z),
                (Kr || Ie) && (a > 0 || U)
                  ? U
                    ? ((a.complete = Oe), tr.animate(wr, a))
                    : ((se = { duration: a, complete: Oe }),
                      S.isA(t) || V.isPlainObject(t)
                        ? ((ie[he] = t[0] || t.x),
                          (ie[de] = t[1] || t.y),
                          (se.specialEasing = ie))
                        : (se.easing = t),
                      tr.animate(wr, se))
                  : (Kr && tr[he](wr[he]), Ie && tr[de](wr[de]), Ye());
            }),
            (L.scrollStop = function (r, a, t) {
              return tr.stop(r, a, t), L;
            }),
            (L.getElements = function (r) {
              var a = {
                target: rt,
                host: Qe,
                padding: et,
                viewport: yt,
                content: _a,
                scrollbarHorizontal: {
                  scrollbar: _t[0],
                  track: yn[0],
                  handle: Yt[0],
                },
                scrollbarVertical: {
                  scrollbar: bt[0],
                  track: mn[0],
                  handle: jt[0],
                },
                scrollbarCorner: Le[0],
              };
              return H(r) == _.s ? Ti(a, r) : a;
            }),
            (L.getState = function (r) {
              function a(o) {
                if (!V.isPlainObject(o)) return o;
                var l = He({}, o),
                  h = function (g, m) {
                    l[i.hOP](g) && ((l[m] = l[g]), delete l[g]);
                  };
                return h('w', J), h('h', xr), delete l.c, l;
              }
              var t = {
                destroyed: !!a(q),
                sleeping: !!a(gr),
                autoUpdate: a(!ka),
                widthAuto: a(Ze),
                heightAuto: a(at),
                padding: a(ei),
                overflowAmount: a(Ht),
                hideOverflow: a(Xt),
                hasOverflow: a(Ea),
                contentScrollSize: a(mt),
                viewportSize: a(dr),
                hostSize: a(Jt),
                documentMixed: a(Hr),
              };
              return H(r) == _.s ? Ti(t, r) : t;
            }),
            (L.ext = function (r) {
              var a,
                t = io.split(' '),
                o = 0;
              if (H(r) == _.s) {
                if (Ba[i.hOP](r))
                  for (a = He({}, Ba[r]); o < t.length; o++) delete a[t[o]];
              } else {
                a = {};
                for (o in Ba) a[o] = He({}, L.ext(o));
              }
              return a;
            }),
            (L.addExt = function (r, a) {
              var t = A.extension(r),
                o,
                l,
                h,
                b,
                g = !0;
              if (t) {
                if (Ba[i.hOP](r)) return L.ext(r);
                if (
                  ((o = t.extensionFactory.call(
                    L,
                    He({}, t.defaultOptions),
                    V,
                    S,
                  )),
                  o &&
                    ((h = o.contract),
                    H(h) == _.f && ((b = h(ar)), (g = H(b) == _.b ? b : g)),
                    g))
                )
                  return (
                    (Ba[r] = o), (l = o.added), H(l) == _.f && l(a), L.ext(r)
                  );
              } else
                console.warn(
                  'A extension with the name "' + r + `" isn't registered.`,
                );
            }),
            (L.removeExt = function (r) {
              var a = Ba[r],
                t;
              return a
                ? (delete Ba[r], (t = a.removed), H(t) == _.f && t(), !0)
                : !1;
            });
          function xo(r, a, t) {
            (rs = R.defaultOptions),
              ($ = R.nativeScrollbarStyling),
              (n = He({}, R.nativeScrollbarSize)),
              (Z = He({}, R.nativeScrollbarIsOverlaid)),
              (Gr = He({}, R.overlayScrollbarDummySize)),
              (E = He({}, R.rtlScrollBehavior)),
              Ci(He({}, rs, a)),
              (v = R.cssCalc),
              (br = R.msie),
              (hr = R.autoUpdateRecommended),
              (s = R.supportTransition),
              (c = R.supportTransform),
              (p = R.supportPassiveEvents),
              (y = R.supportResizeObserver),
              (T = R.supportMutationObserver),
              (wa = V(r.ownerDocument)),
              (Tt = wa[0]),
              (bn = V(Tt.defaultView || Tt.parentWindow)),
              (Gt = bn[0]),
              (St = It(wa, 'html')),
              (pt = It(St, 'body')),
              (or = V(r)),
              (rt = or[0]),
              (N = or.is('textarea')),
              (rr = or.is('body')),
              (Hr = Tt !== Lr),
              (Pr = N
                ? or.hasClass(fn) && or.parent().hasClass(Gn)
                : or.hasClass(ge) && or.children(Ue + Yn)[i.l]);
            var o, l;
            return Z.x && Z.y && !ae.nativeScrollbarsOverlaid.initialize
              ? (Ve('onInitializationWithdrawn'),
                Pr && (Ai(!0), Oi(!0), Ei(!0)),
                (q = !0),
                (gr = !0),
                L)
              : (rr &&
                  ((o = {}),
                  (o.l = I.max(or[he](), St[he](), bn[he]())),
                  (o.t = I.max(or[de](), St[de](), bn[de]())),
                  (l = function () {
                    tr.removeAttr(i.ti), We(tr, kt, l, !0, !0);
                  })),
                Ai(),
                Oi(),
                Ei(),
                ho(),
                Ns(!0),
                Ns(!1),
                po(),
                so(),
                kn(pa, oo),
                rr &&
                  (tr[he](o.l)[de](o.t),
                  Lr.activeElement == r &&
                    yt.focus &&
                    (tr.attr(i.ti, '-1'), yt.focus(), We(tr, kt, l, !1, !0))),
                L.update(zr),
                (D = !0),
                Ve('onInitialized'),
                j(Zn, function (h, b) {
                  Ve(b.n, b.a);
                }),
                (Zn = []),
                H(t) == _.s && (t = [t]),
                S.isA(t)
                  ? j(t, function (h, b) {
                      L.addExt(b);
                    })
                  : V.isPlainObject(t) &&
                    j(t, function (h, b) {
                      L.addExt(h, b);
                    }),
                setTimeout(function () {
                  s && !q && Jr(Y, Bi);
                }, 333),
                L);
          }
          return A.valid(xo(w, M, vr)) && Ma(w, L), L;
        }
        return (
          (A = ar[zt] =
            function (w, M, vr) {
              if (arguments[i.l] === 0) return this;
              var R = [],
                kr = V.isPlainObject(M),
                H,
                G;
              return w
                ? ((w = w[i.l] != z ? w : [w[0] || w]),
                  f(),
                  w[i.l] > 0 &&
                    (kr
                      ? V.each(w, function (j, L) {
                          (H = L), H !== z && R.push(sr(H, M, vr, O, x));
                        })
                      : V.each(w, function (j, L) {
                          (H = Ma(L)),
                            ((M === '!' && A.valid(H)) ||
                              (S.type(M) == _.f && M(L, H)) ||
                              M === z) &&
                              R.push(H);
                        }),
                    (G = R[i.l] === 1 ? R[0] : R)),
                  G)
                : kr || !M
                ? G
                : R;
            }),
          (A.globals = function () {
            f();
            var w = V.extend(!0, {}, O);
            return delete w.msie, w;
          }),
          (A.defaultOptions = function (w) {
            f();
            var M = O.defaultOptions;
            if (w === z) return V.extend(!0, {}, M);
            O.defaultOptions = V.extend(
              !0,
              {},
              M,
              u._validate(w, u._template, !0, M)._default,
            );
          }),
          (A.valid = function (w) {
            return w instanceof A && !w.getState().destroyed;
          }),
          (A.extension = function (w, M, vr) {
            var R = S.type(w) == _.s,
              kr = arguments[i.l],
              H = 0;
            if (kr < 1 || !R) return V.extend(!0, { length: e[i.l] }, e);
            if (R) {
              if (S.type(M) == _.f)
                e.push({ name: w, extensionFactory: M, defaultOptions: vr });
              else
                for (; H < e[i.l]; H++)
                  if (e[H].name === w)
                    if (kr > 1) e.splice(H, 1);
                    else return V.extend(!0, {}, e[H]);
            }
          }),
          A
        );
      })();
    return (
      vt &&
        vt.fn &&
        (vt.fn.overlayScrollbars = function (A, O) {
          var x = this;
          return vt.isPlainObject(A)
            ? (vt.each(x, function () {
                zn(this, A, O);
              }),
              x)
            : zn(x, A);
        }),
      zn
    );
  });
})(Xs);
var ln = Xs.exports,
  Vo = function (ar) {
    var Lr = ar.options,
      z = Lr === void 0 ? {} : Lr,
      zt = ar.extensions,
      _ = ar.className,
      i = ar.children,
      ke = zo(ar, ['options', 'extensions', 'className', 'children']),
      S = cn.useRef(),
      I = cn.useRef();
    return (
      cn.useEffect(function () {
        return (
          (I.current = ln(S.current, z, zt)),
          Js(I.current, _),
          function () {
            ln.valid(I.current) && (I.current.destroy(), (I.current = null));
          }
        );
      }, []),
      cn.useEffect(
        function () {
          ln.valid(I.current) && I.current.options(z);
        },
        [z],
      ),
      cn.useEffect(
        function () {
          ln.valid(I.current) && Js(I.current, _);
        },
        [_],
      ),
      Mo('div', {
        ...Object.assign({ className: 'os-host' }, ke, { ref: S }),
        children: [
          Oa('div', { className: 'os-resize-observer-host' }),
          Oa('div', {
            className: 'os-padding',
            children: Oa('div', {
              className: 'os-viewport',
              children: Oa('div', { className: 'os-content', children: i }),
            }),
          }),
          Oa('div', {
            className: 'os-scrollbar os-scrollbar-horizontal ',
            children: Oa('div', {
              className: 'os-scrollbar-track',
              children: Oa('div', { className: 'os-scrollbar-handle' }),
            }),
          }),
          Oa('div', {
            className: 'os-scrollbar os-scrollbar-vertical',
            children: Oa('div', {
              className: 'os-scrollbar-track',
              children: Oa('div', { className: 'os-scrollbar-handle' }),
            }),
          }),
          Oa('div', { className: 'os-scrollbar-corner' }),
        ],
      })
    );
  };
function Js($a, ar) {
  if (ln.valid($a)) {
    var Lr = $a.getElements(),
      z = Lr.host,
      zt = new RegExp(
        '(^os-host([-_].+|)$)|'.concat(
          $a.options().className.replace(/\s/g, '$|'),
          '$',
        ),
        'g',
      ),
      _ = z.className
        .split(' ')
        .filter(function (i) {
          return i.match(zt);
        })
        .join(' ');
    z.className = ''.concat(_, ' ').concat(ar || '');
  }
}
export { Vo as OverlayScrollbarsComponent, Vo as default };
//# sourceMappingURL=OverlayScrollbars-1355f44c-9e1f2d3c.js.map
