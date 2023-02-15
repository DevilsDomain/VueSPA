import { R as v, r as b } from './index-e0023ec7.js';
import {
  f as M,
  E as N,
  k as Pe,
  m as er,
  l as rr,
  c as tr,
  N as nr,
  b as X,
  d as Y,
} from './iframe-5917f10b.js';
import {
  S as ce,
  r as q,
  a as ar,
  A as J,
  b as Te,
  T as je,
  c as le,
  d as De,
  P as or,
  e as ir,
  D as ur,
  f as V,
  C as sr,
  H as cr,
  g as lr,
  h as dr,
  i as fr,
} from './index-681e4b07-fb702c61.js';
import { j as p, a as Ne, F as vr } from './jsx-runtime-c8b955b8.js';
import { s as Z } from './string-07c0498b.js';
import { w } from './index-73814c06.js';
import { s as ke, e as mr, T as yr } from './index-e51aae5b.js';
import { q as H } from './index-3121cc12.js';
function pr(r, e, t) {
  return (
    e in r
      ? Object.defineProperty(r, e, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (r[e] = t),
    r
  );
}
function de(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    e &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(r, a).enumerable;
      })),
      t.push.apply(t, n);
  }
  return t;
}
function B(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? de(Object(t), !0).forEach(function (n) {
          pr(r, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t))
      : de(Object(t)).forEach(function (n) {
          Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
        });
  }
  return r;
}
function hr(r, e) {
  if (r == null) return {};
  var t = {},
    n = Object.keys(r),
    a,
    o;
  for (o = 0; o < n.length; o++)
    (a = n[o]), !(e.indexOf(a) >= 0) && (t[a] = r[a]);
  return t;
}
function gr(r, e) {
  if (r == null) return {};
  var t = hr(r, e),
    n,
    a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(r);
    for (a = 0; a < o.length; a++)
      (n = o[a]),
        !(e.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(r, n) &&
          (t[n] = r[n]);
  }
  return t;
}
var br = function (e) {
    return typeof e == 'function';
  },
  $e = v.createContext({}),
  Re = function (e) {
    var t = v.useContext($e),
      n = t;
    return e && (n = br(e) ? e(t) : B(B({}, t), e)), n;
  },
  z = function (e) {
    var t = Re(e.components);
    return v.createElement($e.Provider, { value: t }, e.children);
  },
  Sr = 'mdxType',
  _r = {
    inlineCode: 'code',
    wrapper: function (e) {
      var t = e.children;
      return v.createElement(v.Fragment, {}, t);
    },
  },
  Be = v.forwardRef(function (r, e) {
    var t = r.components,
      n = r.mdxType,
      a = r.originalType,
      o = r.parentName,
      i = gr(r, ['components', 'mdxType', 'originalType', 'parentName']),
      u = Re(t),
      s = n,
      l = u[''.concat(o, '.').concat(s)] || u[s] || _r[s] || a;
    return t
      ? v.createElement(l, B(B({ ref: e }, i), {}, { components: t }))
      : v.createElement(l, B({ ref: e }, i));
  });
Be.displayName = 'MDXCreateElement';
function Zt(r, e) {
  var t = arguments,
    n = e && e.mdxType;
  if (typeof r == 'string' || n) {
    var a = t.length,
      o = new Array(a);
    o[0] = Be;
    var i = {};
    for (var u in e) hasOwnProperty.call(e, u) && (i[u] = e[u]);
    (i.originalType = r), (i[Sr] = typeof r == 'string' ? r : n), (o[1] = i);
    for (var s = 2; s < a; s++) o[s] = t[s];
    return v.createElement.apply(null, o);
  }
  return v.createElement.apply(null, t);
}
var Le = function (e) {
    return 'anchor--'.concat(e);
  },
  Me = function (e) {
    var t = e.storyId,
      n = e.children;
    return v.createElement('div', { id: Le(t) }, n);
  };
w.window &&
  w.window.__DOCS_CONTEXT__ === void 0 &&
  ((w.window.__DOCS_CONTEXT__ = b.createContext({})),
  (w.window.__DOCS_CONTEXT__.displayName = 'DocsContext'));
var C = w.window ? w.window.__DOCS_CONTEXT__ : b.createContext({}),
  P = '.',
  Ue = '^',
  Or = function (e) {
    return e
      .split('-')
      .map(function (t) {
        return t.charAt(0).toUpperCase() + t.slice(1);
      })
      .join('');
  },
  Fe = function (e) {
    if (e)
      return typeof e == 'string'
        ? e.includes('-')
          ? Or(e)
          : e
        : e.__docgenInfo && e.__docgenInfo.displayName
        ? e.__docgenInfo.displayName
        : e.name;
  };
function fe(r) {
  var e =
    arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'start';
  r.scrollIntoView({ behavior: 'smooth', block: e, inline: 'nearest' });
}
function wr(r, e, t) {
  return (
    e in r
      ? Object.defineProperty(r, e, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (r[e] = t),
    r
  );
}
function ve(r, e, t, n, a, o, i) {
  try {
    var u = r[o](i),
      s = u.value;
  } catch (l) {
    t(l);
    return;
  }
  u.done ? e(s) : Promise.resolve(s).then(n, a);
}
function Ar(r) {
  return function () {
    var e = this,
      t = arguments;
    return new Promise(function (n, a) {
      var o = r.apply(e, t);
      function i(s) {
        ve(o, n, a, i, u, 'next', s);
      }
      function u(s) {
        ve(o, n, a, i, u, 'throw', s);
      }
      i(void 0);
    });
  };
}
function Cr(r, e) {
  return Pr(r) || Ir(r, e) || xr(r, e) || Er();
}
function Er() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function xr(r, e) {
  if (r) {
    if (typeof r == 'string') return me(r, e);
    var t = Object.prototype.toString.call(r).slice(8, -1);
    if (
      (t === 'Object' && r.constructor && (t = r.constructor.name),
      t === 'Map' || t === 'Set')
    )
      return Array.from(r);
    if (t === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return me(r, e);
  }
}
function me(r, e) {
  (e == null || e > r.length) && (e = r.length);
  for (var t = 0, n = new Array(e); t < e; t++) n[t] = r[t];
  return n;
}
function Ir(r, e) {
  var t =
    r == null
      ? null
      : (typeof Symbol < 'u' && r[Symbol.iterator]) || r['@@iterator'];
  if (t != null) {
    var n = [],
      a = !0,
      o = !1,
      i,
      u;
    try {
      for (
        t = t.call(r);
        !(a = (i = t.next()).done) && (n.push(i.value), !(e && n.length === e));
        a = !0
      );
    } catch (s) {
      (o = !0), (u = s);
    } finally {
      try {
        !a && t.return != null && t.return();
      } finally {
        if (o) throw u;
      }
    }
    return n;
  }
}
function Pr(r) {
  if (Array.isArray(r)) return r;
}
function Ge(r, e) {
  var t = oe([r], e);
  return t && t[0];
}
function oe(r, e) {
  var t = e.componentStories().reduce(function (u, s) {
      return (u[s.id] = s), u;
    }, {}),
    n = b.useState(t),
    a = Cr(n, 2),
    o = a[0],
    i = a[1];
  return (
    b.useEffect(function () {
      Promise.all(
        r.map(
          (function () {
            var u = Ar(
              regeneratorRuntime.mark(function s(l) {
                var c;
                return regeneratorRuntime.wrap(function (f) {
                  for (;;)
                    switch ((f.prev = f.next)) {
                      case 0:
                        return (f.next = 2), e.loadStory(l);
                      case 2:
                        (c = f.sent),
                          i(function (m) {
                            return m[l] === c
                              ? m
                              : Object.assign({}, m, wr({}, l, c));
                          });
                      case 4:
                      case 'end':
                        return f.stop();
                    }
                }, s);
              }),
            );
            return function (s) {
              return u.apply(this, arguments);
            };
          })(),
        ),
      );
    }),
    r.map(function (u) {
      return o[u];
    })
  );
}
function K(r, e) {
  return Nr(r) || Dr(r, e) || jr(r, e) || Tr();
}
function Tr() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function jr(r, e) {
  if (r) {
    if (typeof r == 'string') return ye(r, e);
    var t = Object.prototype.toString.call(r).slice(8, -1);
    if (
      (t === 'Object' && r.constructor && (t = r.constructor.name),
      t === 'Map' || t === 'Set')
    )
      return Array.from(r);
    if (t === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return ye(r, e);
  }
}
function ye(r, e) {
  (e == null || e > r.length) && (e = r.length);
  for (var t = 0, n = new Array(e); t < e; t++) n[t] = r[t];
  return n;
}
function Dr(r, e) {
  var t =
    r == null
      ? null
      : (typeof Symbol < 'u' && r[Symbol.iterator]) || r['@@iterator'];
  if (t != null) {
    var n = [],
      a = !0,
      o = !1,
      i,
      u;
    try {
      for (
        t = t.call(r);
        !(a = (i = t.next()).done) && (n.push(i.value), !(e && n.length === e));
        a = !0
      );
    } catch (s) {
      (o = !0), (u = s);
    } finally {
      try {
        !a && t.return != null && t.return();
      } finally {
        if (o) throw u;
      }
    }
    return n;
  }
}
function Nr(r) {
  if (Array.isArray(r)) return r;
}
var Q = function (e) {
    return 'story--'.concat(e);
  },
  He = function (e, t) {
    var n = t.mdxStoryNameToKey,
      a = t.mdxComponentAnnotations;
    return H.toId(a.id || a.title, H.storyNameFromExport(n[e]));
  },
  kr = function (e, t) {
    var n = e,
      a = n.id,
      o = e,
      i = o.name,
      u = a === P ? t.id : a;
    return u || He(i, t);
  },
  $r = function (e, t, n, a) {
    var o = e.height,
      i = e.inline,
      u = t.name,
      s = t.parameters,
      l = s.docs,
      c = l === void 0 ? {} : l;
    if (c.disable) return null;
    var d = c.inlineStories,
      f = d === void 0 ? !1 : d,
      m = c.iframeHeight,
      S = m === void 0 ? 100 : m,
      h = c.prepareForInline,
      g = typeof i == 'boolean' ? i : f;
    if (g && !h)
      throw new Error(
        "Story '".concat(
          u,
          "' is set to render inline, but no 'prepareForInline' function is implemented in your docs configuration!",
        ),
      );
    var _ = function () {
      var O = t.unboundStoryFn(
        Object.assign({}, n.getStoryContext(t), {
          loaded: {},
          abortSignal: void 0,
          canvasElement: void 0,
        }),
      );
      return a(), O;
    };
    return Object.assign(
      { inline: g, id: t.id, height: o || (g ? void 0 : S), title: u },
      g && {
        parameters: s,
        storyFn: function () {
          return h(_, n.getStoryContext(t));
        },
      },
    );
  };
function pe() {
  var r,
    e = new Promise(function (t) {
      r = t;
    });
  return [e, r];
}
var ze = function (e) {
  var t = b.useContext(C),
    n = M.getChannel(),
    a = b.useRef(),
    o = kr(e, t),
    i = Ge(o, t),
    u = b.useState(!0),
    s = K(u, 2),
    l = s[0],
    c = s[1];
  b.useEffect(
    function () {
      var E;
      if (i && a.current) {
        var x = a.current;
        (E = t.renderStoryToElement(i, x)), c(!1);
      }
      return function () {
        return E && E();
      };
    },
    [i],
  );
  var d = pe(),
    f = K(d, 2),
    m = f[0],
    S = f[1],
    h = pe(),
    g = K(h, 2),
    _ = g[0],
    y = g[1];
  if ((b.useEffect(y), !i)) return p(ce, {});
  var O = $r(e, i, t, S);
  if (!O) return null;
  if (O.inline) {
    var A;
    if (
      !(
        w !== null &&
        w !== void 0 &&
        (A = w.FEATURES) !== null &&
        A !== void 0 &&
        A.modernInlineRender
      )
    )
      Promise.all([m, _]).then(function () {
        n.emit(N.STORY_RENDERED, o);
      });
    else {
      var R = '<span></span>',
        T = O.height;
      return p('div', {
        id: Q(i.id),
        children: Ne(z, {
          components: q,
          children: [
            T
              ? p('style', {
                  children: '#story--'
                    .concat(i.id, ' { min-height: ')
                    .concat(T, '; transform: translateZ(0); overflow: auto }'),
                })
              : null,
            l && p(ce, {}),
            p('div', {
              ref: a,
              'data-name': i.name,
              dangerouslySetInnerHTML: { __html: R },
            }),
          ],
        }),
      });
    }
  }
  return p('div', {
    id: Q(i.id),
    children: p(z, { components: q, children: p(ar, { ...O }) }),
  });
};
ze.defaultProps = { children: null, name: null };
function ee(r, e, t) {
  return (
    e in r
      ? Object.defineProperty(r, e, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (r[e] = t),
    r
  );
}
function W(r, e) {
  return Mr(r) || Lr(r, e) || Br(r, e) || Rr();
}
function Rr() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Br(r, e) {
  if (r) {
    if (typeof r == 'string') return he(r, e);
    var t = Object.prototype.toString.call(r).slice(8, -1);
    if (
      (t === 'Object' && r.constructor && (t = r.constructor.name),
      t === 'Map' || t === 'Set')
    )
      return Array.from(r);
    if (t === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return he(r, e);
  }
}
function he(r, e) {
  (e == null || e > r.length) && (e = r.length);
  for (var t = 0, n = new Array(e); t < e; t++) n[t] = r[t];
  return n;
}
function Lr(r, e) {
  var t =
    r == null
      ? null
      : (typeof Symbol < 'u' && r[Symbol.iterator]) || r['@@iterator'];
  if (t != null) {
    var n = [],
      a = !0,
      o = !1,
      i,
      u;
    try {
      for (
        t = t.call(r);
        !(a = (i = t.next()).done) && (n.push(i.value), !(e && n.length === e));
        a = !0
      );
    } catch (s) {
      (o = !0), (u = s);
    } finally {
      try {
        !a && t.return != null && t.return();
      } finally {
        if (o) throw u;
      }
    }
    return n;
  }
}
function Mr(r) {
  if (Array.isArray(r)) return r;
}
var We = function (e, t) {
    var n = t.storyById(e);
    if (!n) throw new Error('Unknown story: '.concat(e));
    return t.getStoryContext(n);
  },
  Ur = function (e, t) {
    var n = M.getChannel(),
      a = We(e, t),
      o = b.useState(a.args),
      i = W(o, 2),
      u = i[0],
      s = i[1];
    b.useEffect(
      function () {
        var d = function (m) {
          m.storyId === e && s(m.args);
        };
        return (
          n.on(N.STORY_ARGS_UPDATED, d),
          function () {
            return n.off(N.STORY_ARGS_UPDATED, d);
          }
        );
      },
      [e],
    );
    var l = b.useCallback(
        function (d) {
          return n.emit(N.UPDATE_STORY_ARGS, { storyId: e, updatedArgs: d });
        },
        [e],
      ),
      c = b.useCallback(
        function (d) {
          return n.emit(N.RESET_STORY_ARGS, { storyId: e, argNames: d });
        },
        [e],
      );
    return [u, l, c];
  },
  Fr = function (e, t) {
    var n = M.getChannel(),
      a = We(e, t),
      o = b.useState(a.globals),
      i = W(o, 2),
      u = i[0],
      s = i[1];
    return (
      b.useEffect(function () {
        var l = function (d) {
          s(d.globals);
        };
        return (
          n.on(N.GLOBALS_UPDATED, l),
          function () {
            return n.off(N.GLOBALS_UPDATED, l);
          }
        );
      }, []),
      [u]
    );
  },
  Xe = function (e, t, n, a) {
    var o = t.id,
      i = t.storyById,
      u = i(o),
      s = u.parameters,
      l = s.docs || {},
      c = l.extractArgTypes;
    if (!c) throw new Error(Te.ARGS_UNSUPPORTED);
    var d = c(e);
    return (d = Pe(d, n, a)), d;
  },
  ge = function (e) {
    return e && [P, Ue].includes(e);
  },
  Gr = function () {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      t = arguments.length > 1 ? arguments[1] : void 0,
      n = t.id,
      a = t.storyById,
      o = e,
      i = o.of,
      u = e,
      s = u.story,
      l = a(n),
      c = l.component;
    if (ge(i) || ge(s)) return c || null;
    if (!i) throw new Error(Te.NO_COMPONENT);
    return i;
  },
  re = function (e, t, n, a, o, i) {
    return Object.assign(
      {},
      e,
      er(t, function (u) {
        return { rows: Xe(u, n, a, o), sort: i };
      }),
    );
  },
  Hr = function (e) {
    var t = b.useContext(C),
      n = t.id,
      a = t.componentStories,
      o = e.story,
      i = e.component,
      u = e.subcomponents,
      s = e.showComponent,
      l = e.include,
      c = e.exclude,
      d = e.sort;
    try {
      var f;
      switch (o) {
        case P: {
          f = n;
          break;
        }
        case Ue: {
          var m = a()[0];
          f = m.id;
          break;
        }
        default:
          f = He(o, t);
      }
      var S = Ge(f, t),
        h = Ur(f, t),
        g = W(h, 3),
        _ = g[0],
        y = g[1],
        O = g[2],
        A = Fr(f, t),
        R = W(A, 1),
        T = R[0];
      if (!S) return p(J, { isLoading: !0, updateArgs: y, resetArgs: O });
      var E = Pe(S.argTypes, l, c),
        x = Fe(i) || 'Story',
        I = ee({}, x, {
          rows: E,
          args: _,
          globals: T,
          updateArgs: y,
          resetArgs: O,
        }),
        F =
          E &&
          Object.values(E).find(function (j) {
            return !!(j != null && j.control);
          });
      if (
        (F || ((y = null), (O = null), (I = {})),
        i && (!F || s) && (I = re(I, ee({}, x, i), t, l, c)),
        u)
      ) {
        if (Array.isArray(u))
          throw new Error(
            'Unexpected subcomponents array. Expected an object whose keys are tab labels and whose values are components.',
          );
        I = re(I, u, t, l, c);
      }
      return p(je, { tabs: I, sort: d });
    } catch (j) {
      return p(J, { error: j.message });
    }
  },
  be = function (e) {
    var t = b.useContext(C),
      n = e.components,
      a = e.include,
      o = e.exclude,
      i = e.sort,
      u = re({}, n, t, a, o);
    return p(je, { tabs: u, sort: i });
  },
  Ye = function (e) {
    var t = b.useContext(C),
      n = t.id,
      a = t.storyById,
      o = a(n),
      i = o.parameters.controls,
      u = o.subcomponents,
      s = e,
      l = s.include,
      c = s.exclude,
      d = s.components,
      f = s.sort,
      m = e,
      S = m.story,
      h = f || (i == null ? void 0 : i.sort),
      g = Gr(e, t);
    if (S) return p(Hr, { ...e, component: g, subcomponents: u, sort: h });
    if (!d && !u) {
      var _;
      try {
        _ = { rows: Xe(g, t, l, c) };
      } catch (O) {
        _ = { error: O.message };
      }
      return p(J, { ..._, sort: h });
    }
    if (d) return p(be, { ...e, components: d, sort: h });
    var y = Fe(g);
    return p(be, { ...e, components: Object.assign(ee({}, y, g), u), sort: h });
  };
Ye.defaultProps = { of: P };
var zr = 'storybook/docs',
  Se = ''.concat(zr, '/snippet-rendered'),
  L;
(function (r) {
  (r.AUTO = 'auto'), (r.CODE = 'code'), (r.DYNAMIC = 'dynamic');
})(L || (L = {}));
function Wr(r, e, t) {
  return (
    e in r
      ? Object.defineProperty(r, e, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (r[e] = t),
    r
  );
}
function Xr(r, e) {
  return qr(r) || Kr(r, e) || Vr(r, e) || Yr();
}
function Yr() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Vr(r, e) {
  if (r) {
    if (typeof r == 'string') return _e(r, e);
    var t = Object.prototype.toString.call(r).slice(8, -1);
    if (
      (t === 'Object' && r.constructor && (t = r.constructor.name),
      t === 'Map' || t === 'Set')
    )
      return Array.from(r);
    if (t === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return _e(r, e);
  }
}
function _e(r, e) {
  (e == null || e > r.length) && (e = r.length);
  for (var t = 0, n = new Array(e); t < e; t++) n[t] = r[t];
  return n;
}
function Kr(r, e) {
  var t =
    r == null
      ? null
      : (typeof Symbol < 'u' && r[Symbol.iterator]) || r['@@iterator'];
  if (t != null) {
    var n = [],
      a = !0,
      o = !1,
      i,
      u;
    try {
      for (
        t = t.call(r);
        !(a = (i = t.next()).done) && (n.push(i.value), !(e && n.length === e));
        a = !0
      );
    } catch (s) {
      (o = !0), (u = s);
    } finally {
      try {
        !a && t.return != null && t.return();
      } finally {
        if (o) throw u;
      }
    }
    return n;
  }
}
function qr(r) {
  if (Array.isArray(r)) return r;
}
var ie = b.createContext({ sources: {} }),
  Jr = function (e) {
    var t = e.children,
      n = b.useState({}),
      a = Xr(n, 2),
      o = a[0],
      i = a[1],
      u = M.getChannel();
    return (
      b.useEffect(function () {
        var s = function (c, d) {
          var f =
            arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          (o[c] && o[c].code === d) ||
            i(function (m) {
              var S = Object.assign({}, m, Wr({}, c, { code: d, format: f }));
              return rr(m, S) ? m : S;
            });
        };
        return (
          u.on(Se, s),
          function () {
            return u.off(Se, s);
          }
        );
      }, []),
      p(ie.Provider, { value: { sources: o }, children: t })
    );
  };
function Zr(r) {
  return tt(r) || rt(r) || et(r) || Qr();
}
function Qr() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function et(r, e) {
  if (r) {
    if (typeof r == 'string') return te(r, e);
    var t = Object.prototype.toString.call(r).slice(8, -1);
    if (
      (t === 'Object' && r.constructor && (t = r.constructor.name),
      t === 'Map' || t === 'Set')
    )
      return Array.from(r);
    if (t === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return te(r, e);
  }
}
function rt(r) {
  if (
    (typeof Symbol < 'u' && r[Symbol.iterator] != null) ||
    r['@@iterator'] != null
  )
    return Array.from(r);
}
function tt(r) {
  if (Array.isArray(r)) return te(r);
}
function te(r, e) {
  (e == null || e > r.length) && (e = r.length);
  for (var t = 0, n = new Array(e); t < e; t++) n[t] = r[t];
  return n;
}
function nt(r, e) {
  var t = r.startBody,
    n = r.endBody;
  if (t.line === n.line && e[t.line - 1] !== void 0)
    return e[t.line - 1].substring(t.col, n.col);
  var a = e[t.line - 1],
    o = e[n.line - 1];
  return a === void 0 || o === void 0
    ? null
    : [a.substring(t.col)].concat(Zr(e.slice(t.line, n.line - 1)), [
        o.substring(0, n.col),
      ]).join(`
`);
}
var at = function (e) {
    return e.replace(/^.*?--/, '');
  },
  ot = function (e, t) {
    var n = t.source,
      a = t.locationsMap;
    if (!a) return n;
    var o = at(e),
      i = a[o];
    if (!i) return n;
    var u = n.split(`
`);
    return nt(i, u);
  },
  it = function (e) {
    var t,
      n = e.id,
      a = e.parameters,
      o = a.storySource,
      i = a.docs,
      u = i === void 0 ? {} : i,
      s = u.transformSource;
    if (
      !(o != null && o.source) ||
      ((t = u.source) !== null && t !== void 0 && t.code)
    )
      return null;
    var l = ot(n, o),
      c = s ? s(l, e) : l;
    return { docs: tr(u, { source: { code: c } }) };
  },
  $;
(function (r) {
  (r.OPEN = 'open'), (r.CLOSED = 'closed'), (r.NONE = 'none');
})($ || ($ = {}));
var ut = function (e) {
    var t = e
      .map(function (n) {
        var a, o;
        return (a = n.parameters.docs) === null ||
          a === void 0 ||
          (o = a.source) === null ||
          o === void 0
          ? void 0
          : o.state;
      })
      .filter(Boolean);
    return t.length === 0 ? $.CLOSED : t[0];
  },
  Oe = function (e, t) {
    var n = t.sources;
    return (n == null ? void 0 : n[e]) || { code: '', format: !1 };
  },
  st = function (e, t) {
    var n, a, o, i, u, s;
    if (!t) return e;
    var l = t.parameters,
      c = l.__isArgsStory,
      d =
        ((n = l.docs) === null ||
        n === void 0 ||
        (a = n.source) === null ||
        a === void 0
          ? void 0
          : a.type) || L.AUTO,
      f =
        (o = l.docs) === null ||
        o === void 0 ||
        (i = o.source) === null ||
        i === void 0
          ? void 0
          : i.code;
    if (f !== void 0) return f;
    if (d === L.DYNAMIC) {
      var m, S;
      return (
        ((m = l.docs) === null ||
        m === void 0 ||
        (S = m.transformSource) === null ||
        S === void 0
          ? void 0
          : S.call(m, e, t)) || e
      );
    }
    if (d === L.AUTO && e && c) {
      var h, g;
      return (
        ((h = l.docs) === null ||
        h === void 0 ||
        (g = h.transformSource) === null ||
        g === void 0
          ? void 0
          : g.call(h, e, t)) || e
      );
    }
    var _ = it(t) || l;
    return (
      (_ == null ||
      (u = _.docs) === null ||
      u === void 0 ||
      (s = u.source) === null ||
      s === void 0
        ? void 0
        : s.code) || ''
    );
  },
  ne = function (e, t, n) {
    var a = t.id,
      o = t.storyById,
      i = o(a),
      u = i.parameters,
      s = e,
      l = e,
      c = e,
      d = s.code,
      f = s.format,
      m = c.ids || [l.id || a],
      S = m.map(function (x) {
        return x === P ? a : x;
      }),
      h = oe(S, t);
    if (!h.every(Boolean))
      return { error: le.SOURCE_UNAVAILABLE, state: $.NONE };
    if (!d) {
      var g = Oe(S[0], n);
      (f = g.format),
        (d = S.map(function (x, I) {
          var F = Oe(x, n),
            j = F.code,
            Qe = h[I];
          return st(j, Qe);
        }).join(`

`));
    }
    var _ = ut(h),
      y = u.docs,
      O = y === void 0 ? {} : y,
      A = O.source,
      R = A === void 0 ? {} : A,
      T = R.language,
      E = T === void 0 ? null : T;
    return d
      ? {
          code: d,
          state: _,
          format: f,
          language: e.language || E || 'jsx',
          dark: e.dark || !1,
        }
      : { error: le.SOURCE_UNAVAILABLE, state: _ };
  },
  Qt = function (e) {
    var t = b.useContext(ie),
      n = b.useContext(C),
      a = ne(e, n, t);
    return p(De, { ...a });
  },
  ct = ['withSource', 'mdxSource', 'children'];
function lt(r, e) {
  if (r == null) return {};
  var t = dt(r, e),
    n,
    a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(r);
    for (a = 0; a < o.length; a++)
      (n = o[a]),
        !(e.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(r, n) &&
          (t[n] = r[n]);
  }
  return t;
}
function dt(r, e) {
  if (r == null) return {};
  var t = {},
    n = Object.keys(r),
    a,
    o;
  for (o = 0; o < n.length; o++)
    (a = n[o]), !(e.indexOf(a) >= 0) && (t[a] = r[a]);
  return t;
}
var ft = function (e, t, n) {
    var a = e.withSource,
      o = e.mdxSource,
      i = e.children,
      u = lt(e, ct),
      s = t.mdxComponentAnnotations,
      l = t.mdxStoryNameToKey,
      c = a,
      d = !1;
    if (c === $.NONE) return { isLoading: d, previewProps: u };
    if (o)
      return {
        isLoading: d,
        previewProps: Object.assign({}, u, {
          withSource: ne({ code: decodeURI(o) }, t, n),
        }),
      };
    var f = Array.isArray(i) ? i : [i],
      m = f.filter(function (y) {
        return y.props && (y.props.id || y.props.name);
      }),
      S = m.map(function (y) {
        return (
          y.props.id ||
          H.toId(s.id || s.title, H.storyNameFromExport(l[y.props.name]))
        );
      }),
      h = ne({ ids: S }, t, n);
    c || (c = h.state);
    var g = S.map(function (y) {
        return y === P ? t.id : y;
      }),
      _ = oe(g, t);
    return (
      (d = _.some(function (y) {
        return !y;
      })),
      {
        isLoading: d,
        previewProps: Object.assign({}, u, {
          withSource: h,
          isExpanded: c === $.OPEN,
        }),
      }
    );
  },
  Ve = function (e) {
    var t = b.useContext(C),
      n = b.useContext(ie),
      a = ft(e, t, n),
      o = a.isLoading,
      i = a.previewProps,
      u = e.children;
    return o
      ? p(or, {})
      : p(z, { components: q, children: p(ir, { ...i, children: u }) });
  },
  D;
(function (r) {
  (r.INFO = 'info'),
    (r.NOTES = 'notes'),
    (r.DOCGEN = 'docgen'),
    (r.LEGACY_5_2 = 'legacy-5.2'),
    (r.AUTO = 'auto');
})(D || (D = {}));
var we = function (e) {
    return e && (typeof e == 'string' ? e : Z(e.markdown) || Z(e.text));
  },
  Ae = function (e) {
    return e && (typeof e == 'string' ? e : Z(e.text));
  },
  vt = function (e) {
    return null;
  },
  mt = function (e, t) {
    var n = e.of,
      a = e.type,
      o = e.markdown,
      i = e.children,
      u = t.id,
      s = t.storyById,
      l = s(u),
      c = l.component,
      d = l.parameters;
    if (i || o) return { markdown: i || o };
    var f = d.notes,
      m = d.info,
      S = d.docs,
      h = S || {},
      g = h.extractComponentDescription,
      _ = g === void 0 ? vt : g,
      y = h.description,
      O = n === P ? c : n,
      A = y == null ? void 0 : y.component;
    if (A) return { markdown: A };
    switch (a) {
      case D.INFO:
        return { markdown: Ae(m) };
      case D.NOTES:
        return { markdown: we(f) };
      case D.LEGACY_5_2:
        return {
          markdown: `
`
            .concat(
              we(f) || Ae(m) || '',
              `

`,
            )
            .concat(
              _(O) || '',
              `
`,
            )
            .trim(),
        };
      case D.DOCGEN:
      case D.AUTO:
      default:
        return { markdown: _(O, Object.assign({ component: c }, d)) };
    }
  },
  Ke = function (e) {
    var t = b.useContext(C),
      n = mt(e, t),
      a = n.markdown;
    return a ? p(ur, { markdown: a }) : null;
  };
Ke.defaultProps = { of: '.' };
var yt = ['children'],
  pt = ['className', 'children'],
  ht = ['href', 'target', 'children'],
  gt = ['as', 'id', 'children'],
  bt = ['as', 'id', 'children'];
function qe(r, e, t) {
  return (
    e in r
      ? Object.defineProperty(r, e, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (r[e] = t),
    r
  );
}
function k() {
  return (
    (k =
      Object.assign ||
      function (r) {
        for (var e = 1; e < arguments.length; e++) {
          var t = arguments[e];
          for (var n in t)
            Object.prototype.hasOwnProperty.call(t, n) && (r[n] = t[n]);
        }
        return r;
      }),
    k.apply(this, arguments)
  );
}
function U(r, e) {
  if (r == null) return {};
  var t = St(r, e),
    n,
    a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(r);
    for (a = 0; a < o.length; a++)
      (n = o[a]),
        !(e.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(r, n) &&
          (t[n] = r[n]);
  }
  return t;
}
function St(r, e) {
  if (r == null) return {};
  var t = {},
    n = Object.keys(r),
    a,
    o;
  for (o = 0; o < n.length; o++)
    (a = n[o]), !(e.indexOf(a) >= 0) && (t[a] = r[a]);
  return t;
}
var Je = w.document,
  en = function (e) {
    if (typeof e != 'function')
      throw new Error('Expected story function, got: '.concat(e));
    return e;
  },
  rn = function (e) {
    var t = e.children,
      n = U(e, yt),
      a = v.useContext(C);
    return v.createElement(C.Provider, { value: Object.assign({}, a, n) }, t);
  },
  _t = function (e) {
    var t = e.className,
      n = e.children,
      a = U(e, pt);
    if (typeof t != 'string' && (typeof n != 'string' || !n.match(/[\n\r]/g)))
      return v.createElement(sr, null, n);
    var o = t && t.split('-');
    return v.createElement(
      De,
      k({ language: (o && o[1]) || 'plaintext', format: !1, code: n }, a),
    );
  };
function ue(r) {
  M.getChannel().emit(nr, r);
}
var ae = V.a,
  Ot = function (e) {
    var t = e.hash,
      n = e.children;
    return v.createElement(
      ae,
      {
        href: t,
        target: '_self',
        onClick: function (o) {
          var i = t.substring(1),
            u = Je.getElementById(i);
          u && ue(t);
        },
      },
      n,
    );
  },
  wt = function (e) {
    var t = e.href,
      n = e.target,
      a = e.children,
      o = U(e, ht);
    if (t) {
      if (t.startsWith('#')) return v.createElement(Ot, { hash: t }, a);
      if (n !== '_blank' && !t.startsWith('https://'))
        return v.createElement(
          ae,
          k(
            {
              href: t,
              onClick: function (u) {
                u.preventDefault(), ue(u.currentTarget.getAttribute('href'));
              },
              target: n,
            },
            o,
          ),
          a,
        );
    }
    return v.createElement(ae, e);
  },
  Ze = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
  At = Ze.reduce(function (r, e) {
    return Object.assign(
      {},
      r,
      qe(
        {},
        e,
        ke(V[e])({
          '& svg': { visibility: 'hidden' },
          '&:hover svg': { visibility: 'visible' },
        }),
      ),
    );
  }, {}),
  Ct = ke.a(function () {
    return {
      float: 'left',
      paddingRight: '4px',
      marginLeft: '-20px',
      color: 'inherit',
    };
  }),
  Et = function (e) {
    var t = e.as,
      n = e.id,
      a = e.children,
      o = U(e, gt),
      i = At[t],
      u = '#'.concat(n);
    return v.createElement(
      i,
      k({ id: n }, o),
      v.createElement(
        Ct,
        {
          'aria-hidden': 'true',
          href: u,
          tabIndex: -1,
          target: '_self',
          onClick: function (l) {
            var c = Je.getElementById(n);
            c && ue(u);
          },
        },
        v.createElement(
          'svg',
          {
            viewBox: '0 0 16 16',
            version: '1.1',
            width: '16',
            height: '16',
            'aria-hidden': 'true',
            fill: 'currentColor',
          },
          v.createElement('path', {
            fillRule: 'evenodd',
            d: 'M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z',
          }),
        ),
      ),
      a,
    );
  },
  se = function (e) {
    var t = e.as,
      n = e.id,
      a = e.children,
      o = U(e, bt);
    if (n) return v.createElement(Et, k({ as: t, id: n }, o), a);
    var i = V[t];
    return v.createElement(i, e);
  },
  xt = Ze.reduce(function (r, e) {
    return Object.assign(
      {},
      r,
      qe({}, e, function (t) {
        return v.createElement(se, k({ as: e }, t));
      }),
    );
  }, {}),
  It = function (e) {
    var t = e.children,
      n = e.disableAnchor;
    if (n || typeof t != 'string') return v.createElement(cr, null, t);
    var a = t.toLowerCase().replace(/[^a-z0-9]/gi, '-');
    return v.createElement(se, { as: 'h3', id: a }, t);
  },
  Ce;
function Pt(r, e) {
  return (
    e || (e = r.slice(0)),
    Object.freeze(
      Object.defineProperties(r, { raw: { value: Object.freeze(e) } }),
    )
  );
}
var Tt = X(
    function () {},
    Y(
      Ce ||
        (Ce = Pt([
          `
    Deprecated parameter: docs.storyDescription => docs.description.story
      
    https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#docs-description-parameter
  `,
        ])),
    ),
  ),
  jt = function (e) {
    var t = e.id,
      n = e.name,
      a = e.expanded,
      o = a === void 0 ? !0 : a,
      i = e.withToolbar,
      u = i === void 0 ? !1 : i,
      s = e.parameters,
      l = s === void 0 ? {} : s,
      c,
      d = l.docs;
    if (o && d) {
      var f;
      (c = (f = d.description) === null || f === void 0 ? void 0 : f.story),
        c || ((c = d.storyDescription), c && Tt());
    }
    var m = o && n;
    return v.createElement(
      Me,
      { storyId: t },
      m && v.createElement(It, null, m),
      c && v.createElement(Ke, { markdown: c }),
      v.createElement(
        Ve,
        { withToolbar: u },
        v.createElement(ze, { id: t, parameters: l }),
      ),
    );
  },
  Dt = function (e) {
    var t = e.children,
      n = e.disableAnchor;
    if (n || typeof t != 'string') return v.createElement(lr, null, t);
    var a = t.toLowerCase().replace(/[^a-z0-9]/gi, '-');
    return v.createElement(se, { as: 'h2', id: a }, t);
  },
  Nt = function (e) {
    var t = e.title,
      n = e.includePrimary,
      a = n === void 0 ? !1 : n,
      o = b.useContext(C),
      i = o.componentStories,
      u = i();
    return (
      (u = u.filter(function (s) {
        var l, c;
        return !(
          (l = s.parameters) !== null &&
          l !== void 0 &&
          (c = l.docs) !== null &&
          c !== void 0 &&
          c.disable
        );
      })),
      a || (u = u.slice(1)),
      !u || u.length === 0
        ? null
        : Ne(vr, {
            children: [
              p(Dt, { children: t }),
              u.map(function (s) {
                return s && p(jt, { ...s, expanded: !0 }, s.id);
              }),
            ],
          })
    );
  };
Nt.defaultProps = { title: 'Stories' };
var Ee;
function kt(r, e) {
  return (
    e || (e = r.slice(0)),
    Object.freeze(
      Object.defineProperties(r, { raw: { value: Object.freeze(e) } }),
    )
  );
}
var G = w.document,
  $t = w.window,
  Rt = Object.assign({}, V, { code: _t, a: wt }, xt),
  Bt = X(
    function () {},
    Y(
      Ee ||
        (Ee = kt([
          `
    Deprecated parameter: options.theme => docs.theme

    https://github.com/storybookjs/storybook/blob/next/addons/docs/docs/theming.md#storybook-theming
`,
        ])),
    ),
  ),
  tn = function (e) {
    var t = e.context,
      n = e.children,
      a = t.id,
      o = t.storyById,
      i = o(a),
      u = i.parameters,
      s = u.options,
      l = s === void 0 ? {} : s,
      c = u.docs,
      d = c === void 0 ? {} : c,
      f = d.theme;
    !f && l.theme && (Bt(), (f = l.theme));
    var m = mr(f),
      S = Object.assign({}, Rt, d.components);
    return (
      b.useEffect(
        function () {
          var h;
          try {
            h = new URL($t.parent.location);
          } catch {
            return;
          }
          if (h.hash) {
            var g = G.getElementById(h.hash.substring(1));
            g &&
              setTimeout(function () {
                fe(g);
              }, 200);
          } else {
            var _ = G.getElementById(Le(a)) || G.getElementById(Q(a));
            if (_) {
              var y = _.parentElement.querySelectorAll('[id|="anchor-"]'),
                O = _;
              y && y[0] === _ && (O = G.getElementById('docs-root')),
                setTimeout(function () {
                  fe(O, 'start');
                }, 200);
            }
          }
        },
        [a],
      ),
      p(C.Provider, {
        value: t,
        children: p(Jr, {
          children: p(yr, {
            theme: m,
            children: p(z, {
              components: S,
              children: p(dr, {
                className: 'sbdocs sbdocs-wrapper',
                children: p(fr, {
                  className: 'sbdocs sbdocs-content',
                  children: n,
                }),
              }),
            }),
          }),
        }),
      })
    );
  },
  Lt = w.document;
function Mt(r) {
  var e = r.componentStories();
  return e.length > 0 ? e[0].id : null;
}
function Ut() {
  var r = b.useContext(C),
    e = Mt(r) || r.id;
  return p(Me, { storyId: e });
}
var nn = function () {
    var e = new URL(Lt.location).searchParams,
      t = e.get('viewMode') === 'docs';
    return t ? Ut() : null;
  },
  xe;
function Ft(r, e) {
  return (
    e || (e = r.slice(0)),
    Object.freeze(
      Object.defineProperties(r, { raw: { value: Object.freeze(e) } }),
    )
  );
}
var an = X(
    function (r) {
      return v.createElement(Ve, r);
    },
    Y(
      xe ||
        (xe = Ft([
          `
    Preview doc block has been renamed to Canvas.

    https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#previewprops-renamed
  `,
        ])),
    ),
  ),
  Ie;
function Gt(r, e) {
  return (
    e || (e = r.slice(0)),
    Object.freeze(
      Object.defineProperties(r, { raw: { value: Object.freeze(e) } }),
    )
  );
}
var Ht = X(
  function (r) {
    return v.createElement(Ye, r);
  },
  Y(
    Ie ||
      (Ie = Gt([
        `
    Props doc block has been renamed to ArgsTable.

    https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#previewprops-renamed
  `,
      ])),
  ),
);
Ht.defaultProps = { of: P };
export {
  rn as A,
  P as B,
  be as C,
  C as D,
  en as E,
  _t as F,
  wt as G,
  Dt as H,
  se as I,
  xt as J,
  nn as M,
  Ue as P,
  Nt as S,
  jt as a,
  Ke as b,
  Zt as c,
  Ye as d,
  Le as e,
  Me as f,
  Xe as g,
  Gr as h,
  Hr as i,
  $ as j,
  Ve as k,
  D as l,
  mt as m,
  tn as n,
  an as o,
  Ht as p,
  ne as q,
  Qt as r,
  ie as s,
  Jr as t,
  Q as u,
  He as v,
  kr as w,
  $r as x,
  ze as y,
  It as z,
};
//# sourceMappingURL=Props-65c0891f.js.map
