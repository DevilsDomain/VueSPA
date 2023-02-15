import { a as L } from './iframe-5917f10b.js';
import { C as k, F as Y, E as jr } from './index-3121cc12.js';
import { c as x } from './index-73814c06.js';
var Tr = L(),
  wr = k,
  D = wr('Object.prototype.toString'),
  b = function (r) {
    return Tr && r && typeof r == 'object' && Symbol.toStringTag in r
      ? !1
      : D(r) === '[object Arguments]';
  },
  q = function (r) {
    return b(r)
      ? !0
      : r !== null &&
          typeof r == 'object' &&
          typeof r.length == 'number' &&
          r.length >= 0 &&
          D(r) !== '[object Array]' &&
          D(r.callee) === '[object Function]';
  },
  Pr = (function () {
    return b(arguments);
  })();
b.isLegacyArguments = q;
var Ct = Pr ? b : q,
  J = Function.prototype.toString,
  f = typeof Reflect == 'object' && Reflect !== null && Reflect.apply,
  I,
  y;
if (typeof f == 'function' && typeof Object.defineProperty == 'function')
  try {
    (I = Object.defineProperty({}, 'length', {
      get: function () {
        throw y;
      },
    })),
      (y = {}),
      f(
        function () {
          throw 42;
        },
        null,
        I,
      );
  } catch (e) {
    e !== y && (f = null);
  }
else f = null;
var Dr = /^\s*class\b/,
  C = function (r) {
    try {
      var t = J.call(r);
      return Dr.test(t);
    } catch {
      return !1;
    }
  },
  O = function (r) {
    try {
      return C(r) ? !1 : (J.call(r), !0);
    } catch {
      return !1;
    }
  },
  p = Object.prototype.toString,
  Ir = '[object Object]',
  Cr = '[object Function]',
  Er = '[object GeneratorFunction]',
  Fr = '[object HTMLAllCollection]',
  Br = '[object HTML document.all class]',
  Lr = '[object HTMLCollection]',
  kr = typeof Symbol == 'function' && !!Symbol.toStringTag,
  xr = !(0 in [,]),
  E = function () {
    return !1;
  };
if (typeof document == 'object') {
  var Hr = document.all;
  p.call(Hr) === p.call(document.all) &&
    (E = function (r) {
      if ((xr || !r) && (typeof r > 'u' || typeof r == 'object'))
        try {
          var t = p.call(r);
          return (
            (t === Fr || t === Br || t === Lr || t === Ir) && r('') == null
          );
        } catch {}
      return !1;
    });
}
var Kr = f
    ? function (r) {
        if (E(r)) return !0;
        if (!r || (typeof r != 'function' && typeof r != 'object')) return !1;
        try {
          f(r, null, I);
        } catch (t) {
          if (t !== y) return !1;
        }
        return !C(r) && O(r);
      }
    : function (r) {
        if (E(r)) return !0;
        if (!r || (typeof r != 'function' && typeof r != 'object')) return !1;
        if (kr) return O(r);
        if (C(r)) return !1;
        var t = p.call(r);
        return t !== Cr && t !== Er && !/^\[object HTML/.test(t) ? !1 : O(r);
      },
  Mr = Kr,
  Rr = Object.prototype.toString,
  Q = Object.prototype.hasOwnProperty,
  Ur = function (r, t, n) {
    for (var a = 0, l = r.length; a < l; a++)
      Q.call(r, a) && (n == null ? t(r[a], a, r) : t.call(n, r[a], a, r));
  },
  Gr = function (r, t, n) {
    for (var a = 0, l = r.length; a < l; a++)
      n == null ? t(r.charAt(a), a, r) : t.call(n, r.charAt(a), a, r);
  },
  Nr = function (r, t, n) {
    for (var a in r)
      Q.call(r, a) && (n == null ? t(r[a], a, r) : t.call(n, r[a], a, r));
  },
  _r = function (r, t, n) {
    if (!Mr(t)) throw new TypeError('iterator must be a function');
    var a;
    arguments.length >= 3 && (a = n),
      Rr.call(r) === '[object Array]'
        ? Ur(r, t, a)
        : typeof r == 'string'
        ? Gr(r, t, a)
        : Nr(r, t, a);
  },
  V = _r,
  A = [
    'BigInt64Array',
    'BigUint64Array',
    'Float32Array',
    'Float64Array',
    'Int16Array',
    'Int32Array',
    'Int8Array',
    'Uint16Array',
    'Uint32Array',
    'Uint8Array',
    'Uint8ClampedArray',
  ],
  zr = typeof globalThis > 'u' ? x : globalThis,
  Z = function () {
    for (var r = [], t = 0; t < A.length; t++)
      typeof zr[A[t]] == 'function' && (r[r.length] = A[t]);
    return r;
  },
  Wr = Y,
  g = Wr('%Object.getOwnPropertyDescriptor%', !0);
if (g)
  try {
    g([], 'length');
  } catch {
    g = null;
  }
var rr = g,
  tr = V,
  Xr = Z,
  H = k,
  Yr = H('Object.prototype.toString'),
  er = L(),
  v = rr,
  qr = typeof globalThis > 'u' ? x : globalThis,
  nr = Xr(),
  Jr =
    H('Array.prototype.indexOf', !0) ||
    function (r, t) {
      for (var n = 0; n < r.length; n += 1) if (r[n] === t) return n;
      return -1;
    },
  Qr = H('String.prototype.slice'),
  ar = {},
  j = Object.getPrototypeOf;
er &&
  v &&
  j &&
  tr(nr, function (e) {
    var r = new qr[e]();
    if (Symbol.toStringTag in r) {
      var t = j(r),
        n = v(t, Symbol.toStringTag);
      if (!n) {
        var a = j(t);
        n = v(a, Symbol.toStringTag);
      }
      ar[e] = n.get;
    }
  });
var Vr = function (r) {
    var t = !1;
    return (
      tr(ar, function (n, a) {
        if (!t)
          try {
            t = n.call(r) === a;
          } catch {}
      }),
      t
    );
  },
  Zr = function (r) {
    if (!r || typeof r != 'object') return !1;
    if (!er || !(Symbol.toStringTag in r)) {
      var t = Qr(Yr(r), 8, -1);
      return Jr(nr, t) > -1;
    }
    return v ? Vr(r) : !1;
  },
  or = V,
  rt = Z,
  ir = k,
  T = rr,
  tt = ir('Object.prototype.toString'),
  lr = L(),
  G = typeof globalThis > 'u' ? x : globalThis,
  et = rt(),
  nt = ir('String.prototype.slice'),
  fr = {},
  w = Object.getPrototypeOf;
lr &&
  T &&
  w &&
  or(et, function (e) {
    if (typeof G[e] == 'function') {
      var r = new G[e]();
      if (Symbol.toStringTag in r) {
        var t = w(r),
          n = T(t, Symbol.toStringTag);
        if (!n) {
          var a = w(t);
          n = T(a, Symbol.toStringTag);
        }
        fr[e] = n.get;
      }
    }
  });
var at = function (r) {
    var t = !1;
    return (
      or(fr, function (n, a) {
        if (!t)
          try {
            var l = n.call(r);
            l === a && (t = l);
          } catch {}
      }),
      t
    );
  },
  ot = Zr,
  Et = function (r) {
    return ot(r)
      ? !lr || !(Symbol.toStringTag in r)
        ? nt(tt(r), 8, -1)
        : at(r)
      : !1;
  },
  N = Object.prototype.toString,
  cr = function (r) {
    var t = N.call(r),
      n = t === '[object Arguments]';
    return (
      n ||
        (n =
          t !== '[object Array]' &&
          r !== null &&
          typeof r == 'object' &&
          typeof r.length == 'number' &&
          r.length >= 0 &&
          N.call(r.callee) === '[object Function]'),
      n
    );
  },
  P,
  _;
function it() {
  if (_) return P;
  _ = 1;
  var e;
  if (!Object.keys) {
    var r = Object.prototype.hasOwnProperty,
      t = Object.prototype.toString,
      n = cr,
      a = Object.prototype.propertyIsEnumerable,
      l = !a.call({ toString: null }, 'toString'),
      K = a.call(function () {}, 'prototype'),
      u = [
        'toString',
        'toLocaleString',
        'valueOf',
        'hasOwnProperty',
        'isPrototypeOf',
        'propertyIsEnumerable',
        'constructor',
      ],
      m = function (i) {
        var o = i.constructor;
        return o && o.prototype === i;
      },
      mr = {
        $applicationCache: !0,
        $console: !0,
        $external: !0,
        $frame: !0,
        $frameElement: !0,
        $frames: !0,
        $innerHeight: !0,
        $innerWidth: !0,
        $onmozfullscreenchange: !0,
        $onmozfullscreenerror: !0,
        $outerHeight: !0,
        $outerWidth: !0,
        $pageXOffset: !0,
        $pageYOffset: !0,
        $parent: !0,
        $scrollLeft: !0,
        $scrollTop: !0,
        $scrollX: !0,
        $scrollY: !0,
        $self: !0,
        $webkitIndexedDB: !0,
        $webkitStorageInfo: !0,
        $window: !0,
      },
      dr = (function () {
        if (typeof window > 'u') return !1;
        for (var i in window)
          try {
            if (
              !mr['$' + i] &&
              r.call(window, i) &&
              window[i] !== null &&
              typeof window[i] == 'object'
            )
              try {
                m(window[i]);
              } catch {
                return !0;
              }
          } catch {
            return !0;
          }
        return !1;
      })(),
      Sr = function (i) {
        if (typeof window > 'u' || !dr) return m(i);
        try {
          return m(i);
        } catch {
          return !1;
        }
      };
    e = function (o) {
      var M = o !== null && typeof o == 'object',
        R = t.call(o) === '[object Function]',
        U = n(o),
        $r = M && t.call(o) === '[object String]',
        c = [];
      if (!M && !R && !U)
        throw new TypeError('Object.keys called on a non-object');
      var Or = K && R;
      if ($r && o.length > 0 && !r.call(o, 0))
        for (var d = 0; d < o.length; ++d) c.push(String(d));
      if (U && o.length > 0)
        for (var S = 0; S < o.length; ++S) c.push(String(S));
      else
        for (var $ in o)
          !(Or && $ === 'prototype') && r.call(o, $) && c.push(String($));
      if (l)
        for (var Ar = Sr(o), s = 0; s < u.length; ++s)
          !(Ar && u[s] === 'constructor') && r.call(o, u[s]) && c.push(u[s]);
      return c;
    };
  }
  return (P = e), P;
}
var lt = Array.prototype.slice,
  ft = cr,
  z = Object.keys,
  h = z
    ? function (r) {
        return z(r);
      }
    : it(),
  W = Object.keys;
h.shim = function () {
  if (Object.keys) {
    var r = (function () {
      var t = Object.keys(arguments);
      return t && t.length === arguments.length;
    })(1, 2);
    r ||
      (Object.keys = function (n) {
        return ft(n) ? W(lt.call(n)) : W(n);
      });
  } else Object.keys = h;
  return Object.keys || h;
};
var ct = h,
  st = Y,
  F = st('%Object.defineProperty%', !0),
  B = function () {
    if (F)
      try {
        return F({}, 'a', { value: 1 }), !0;
      } catch {
        return !1;
      }
    return !1;
  };
B.hasArrayLengthDefineBug = function () {
  if (!B()) return null;
  try {
    return F([], 'length', { value: 1 }).length !== 1;
  } catch {
    return !0;
  }
};
var ut = B,
  yt = ct,
  pt = typeof Symbol == 'function' && typeof Symbol('foo') == 'symbol',
  gt = Object.prototype.toString,
  vt = Array.prototype.concat,
  sr = Object.defineProperty,
  ht = function (e) {
    return typeof e == 'function' && gt.call(e) === '[object Function]';
  },
  bt = ut(),
  ur = sr && bt,
  mt = function (e, r, t, n) {
    (r in e && (!ht(n) || !n())) ||
      (ur
        ? sr(e, r, { configurable: !0, enumerable: !1, value: t, writable: !0 })
        : (e[r] = t));
  },
  yr = function (e, r) {
    var t = arguments.length > 2 ? arguments[2] : {},
      n = yt(r);
    pt && (n = vt.call(n, Object.getOwnPropertySymbols(r)));
    for (var a = 0; a < n.length; a += 1) mt(e, n[a], r[n[a]], t[n[a]]);
  };
yr.supportsDescriptors = !!ur;
var pr = yr,
  X = function (e) {
    return e !== e;
  },
  gr = function (r, t) {
    return r === 0 && t === 0 ? 1 / r === 1 / t : !!(r === t || (X(r) && X(t)));
  },
  dt = gr,
  vr = function () {
    return typeof Object.is == 'function' ? Object.is : dt;
  },
  St = vr,
  $t = pr,
  Ot = function () {
    var r = St();
    return (
      $t(
        Object,
        { is: r },
        {
          is: function () {
            return Object.is !== r;
          },
        },
      ),
      r
    );
  },
  At = pr,
  jt = jr,
  Tt = gr,
  hr = vr,
  wt = Ot,
  br = jt(hr(), Object);
At(br, { getPolyfill: hr, implementation: Tt, shim: wt });
var Ft = br;
export { Zr as a, ct as b, pr as d, Ct as i, Ft as o, Et as w };
//# sourceMappingURL=index-9fa1e778.js.map
