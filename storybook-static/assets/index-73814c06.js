var P =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
    ? window
    : typeof global < 'u'
    ? global
    : typeof self < 'u'
    ? self
    : {};
function S(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, 'default')
    ? s.default
    : s;
}
function T(s) {
  if (s.__esModule) return s;
  var f = s.default;
  if (typeof f == 'function') {
    var t = function r() {
      if (this instanceof r) {
        var e = [null];
        e.push.apply(e, arguments);
        var o = Function.bind.apply(f, e);
        return new o();
      }
      return f.apply(this, arguments);
    };
    t.prototype = f.prototype;
  } else t = {};
  return (
    Object.defineProperty(t, '__esModule', { value: !0 }),
    Object.keys(s).forEach(function (r) {
      var e = Object.getOwnPropertyDescriptor(s, r);
      Object.defineProperty(
        t,
        r,
        e.get
          ? e
          : {
              enumerable: !0,
              get: function () {
                return s[r];
              },
            },
      );
    }),
    t
  );
}
function z(s) {
  throw new Error(
    'Could not dynamically require "' +
      s +
      '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.',
  );
}
var q = {},
  D = {
    get exports() {
      return q;
    },
    set exports(s) {
      q = s;
    },
  };
(function (s, f) {
  (function (t) {
    s.exports = t();
  })(function () {
    return (function t(r, e, o) {
      function i(a, h) {
        if (!e[a]) {
          if (!r[a]) {
            var p = typeof z == 'function' && z;
            if (!h && p) return p(a, !0);
            if (n) return n(a, !0);
            var v = new Error("Cannot find module '" + a + "'");
            throw ((v.code = 'MODULE_NOT_FOUND'), v);
          }
          var u = (e[a] = { exports: {} });
          r[a][0].call(
            u.exports,
            function (c) {
              var m = r[a][1][c];
              return i(m || c);
            },
            u,
            u.exports,
            t,
            r,
            e,
            o,
          );
        }
        return e[a].exports;
      }
      for (var n = typeof z == 'function' && z, l = 0; l < o.length; l++)
        i(o[l]);
      return i;
    })(
      {
        1: [
          function (t, r, e) {
            r.exports = function (o) {
              if (typeof Map != 'function' || o) {
                var i = t('./similar');
                return new i();
              } else return new Map();
            };
          },
          { './similar': 2 },
        ],
        2: [
          function (t, r, e) {
            function o() {
              return (
                (this.list = []),
                (this.lastItem = void 0),
                (this.size = 0),
                this
              );
            }
            (o.prototype.get = function (i) {
              var n;
              if (this.lastItem && this.isEqual(this.lastItem.key, i))
                return this.lastItem.val;
              if (((n = this.indexOf(i)), n >= 0))
                return (this.lastItem = this.list[n]), this.list[n].val;
            }),
              (o.prototype.set = function (i, n) {
                var l;
                return this.lastItem && this.isEqual(this.lastItem.key, i)
                  ? ((this.lastItem.val = n), this)
                  : ((l = this.indexOf(i)),
                    l >= 0
                      ? ((this.lastItem = this.list[l]),
                        (this.list[l].val = n),
                        this)
                      : ((this.lastItem = { key: i, val: n }),
                        this.list.push(this.lastItem),
                        this.size++,
                        this));
              }),
              (o.prototype.delete = function (i) {
                var n;
                if (
                  (this.lastItem &&
                    this.isEqual(this.lastItem.key, i) &&
                    (this.lastItem = void 0),
                  (n = this.indexOf(i)),
                  n >= 0)
                )
                  return this.size--, this.list.splice(n, 1)[0];
              }),
              (o.prototype.has = function (i) {
                var n;
                return this.lastItem && this.isEqual(this.lastItem.key, i)
                  ? !0
                  : ((n = this.indexOf(i)),
                    n >= 0 ? ((this.lastItem = this.list[n]), !0) : !1);
              }),
              (o.prototype.forEach = function (i, n) {
                var l;
                for (l = 0; l < this.size; l++)
                  i.call(n || this, this.list[l].val, this.list[l].key, this);
              }),
              (o.prototype.indexOf = function (i) {
                var n;
                for (n = 0; n < this.size; n++)
                  if (this.isEqual(this.list[n].key, i)) return n;
                return -1;
              }),
              (o.prototype.isEqual = function (i, n) {
                return i === n || (i !== i && n !== n);
              }),
              (r.exports = o);
          },
          {},
        ],
        3: [
          function (t, r, e) {
            var o = t('map-or-similar');
            r.exports = function (a) {
              var h = new o(void 0 === 'true'),
                p = [];
              return function (v) {
                var u = function () {
                  var c = h,
                    m,
                    L,
                    y = arguments.length - 1,
                    M = Array(y + 1),
                    I = !0,
                    b;
                  if ((u.numArgs || u.numArgs === 0) && u.numArgs !== y + 1)
                    throw new Error(
                      'Memoizerific functions should always be called with the same number of arguments',
                    );
                  for (b = 0; b < y; b++) {
                    if (
                      ((M[b] = { cacheItem: c, arg: arguments[b] }),
                      c.has(arguments[b]))
                    ) {
                      c = c.get(arguments[b]);
                      continue;
                    }
                    (I = !1),
                      (m = new o(void 0 === 'true')),
                      c.set(arguments[b], m),
                      (c = m);
                  }
                  return (
                    I &&
                      (c.has(arguments[y])
                        ? (L = c.get(arguments[y]))
                        : (I = !1)),
                    I ||
                      ((L = v.apply(null, arguments)), c.set(arguments[y], L)),
                    a > 0 &&
                      ((M[y] = { cacheItem: c, arg: arguments[y] }),
                      I ? i(p, M) : p.push(M),
                      p.length > a && n(p.shift())),
                    (u.wasMemoized = I),
                    (u.numArgs = y + 1),
                    L
                  );
                };
                return (
                  (u.limit = a),
                  (u.wasMemoized = !1),
                  (u.cache = h),
                  (u.lru = p),
                  u
                );
              };
            };
            function i(a, h) {
              var p = a.length,
                v = h.length,
                u,
                c,
                m;
              for (c = 0; c < p; c++) {
                for (u = !0, m = 0; m < v; m++)
                  if (!l(a[c][m].arg, h[m].arg)) {
                    u = !1;
                    break;
                  }
                if (u) break;
              }
              a.push(a.splice(c, 1)[0]);
            }
            function n(a) {
              var h = a.length,
                p = a[h - 1],
                v,
                u;
              for (
                p.cacheItem.delete(p.arg), u = h - 2;
                u >= 0 &&
                ((p = a[u]), (v = p.cacheItem.get(p.arg)), !v || !v.size);
                u--
              )
                p.cacheItem.delete(p.arg);
            }
            function l(a, h) {
              return a === h || (a !== a && h !== h);
            }
          },
          { 'map-or-similar': 1 },
        ],
      },
      {},
      [3],
    )(3);
  });
})(D);
const F = q;
var O;
typeof window < 'u'
  ? (O = window)
  : typeof P < 'u'
  ? (O = P)
  : typeof self < 'u'
  ? (O = self)
  : (O = {});
var C = O,
  N = C.LOGLEVEL,
  d = C.console,
  x = { trace: 1, debug: 2, info: 3, warn: 4, error: 5, silent: 10 },
  R = N,
  E = x[R] || x.info,
  A = {
    trace: function (f) {
      for (
        var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), e = 1;
        e < t;
        e++
      )
        r[e - 1] = arguments[e];
      return E <= x.trace && d.trace.apply(d, [f].concat(r));
    },
    debug: function (f) {
      for (
        var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), e = 1;
        e < t;
        e++
      )
        r[e - 1] = arguments[e];
      return E <= x.debug && d.debug.apply(d, [f].concat(r));
    },
    info: function (f) {
      for (
        var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), e = 1;
        e < t;
        e++
      )
        r[e - 1] = arguments[e];
      return E <= x.info && d.info.apply(d, [f].concat(r));
    },
    warn: function (f) {
      for (
        var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), e = 1;
        e < t;
        e++
      )
        r[e - 1] = arguments[e];
      return E <= x.warn && d.warn.apply(d, [f].concat(r));
    },
    error: function (f) {
      for (
        var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), e = 1;
        e < t;
        e++
      )
        r[e - 1] = arguments[e];
      return E <= x.error && d.error.apply(d, [f].concat(r));
    },
    log: function (f) {
      for (
        var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), e = 1;
        e < t;
        e++
      )
        r[e - 1] = arguments[e];
      return E < x.silent && d.log.apply(d, [f].concat(r));
    },
  },
  j = new Set(),
  g = function (f) {
    return function (t) {
      if (!j.has(t)) {
        j.add(t);
        for (
          var r = arguments.length, e = new Array(r > 1 ? r - 1 : 0), o = 1;
          o < r;
          o++
        )
          e[o - 1] = arguments[o];
        return A[f].apply(A, [t].concat(e));
      }
    };
  };
g.clear = function () {
  return j.clear();
};
g.trace = g('trace');
g.debug = g('debug');
g.info = g('info');
g.warn = g('warn');
g.error = g('error');
g.log = g('log');
var w = function (f) {
  return function () {
    for (var t = [], r = arguments.length, e = new Array(r), o = 0; o < r; o++)
      e[o] = arguments[o];
    if (e.length) {
      var i = /<span\s+style=(['"])([^'"]*)\1\s*>/gi,
        n = /<\/span>/gi,
        l;
      for (t.push(e[0].replace(i, '%c').replace(n, '%c')); (l = i.exec(e[0])); )
        t.push(l[2]), t.push('');
      for (var a = 1; a < e.length; a++) t.push(e[a]);
    }
    A[f].apply(A, t);
  };
};
w.trace = w('trace');
w.debug = w('debug');
w.info = w('info');
w.warn = w('warn');
w.error = w('error');
export { S as a, P as c, T as g, A as l, F as m, g as o, w as p, C as w };
//# sourceMappingURL=index-73814c06.js.map
