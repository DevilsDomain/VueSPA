import { g as Gf, a as Xf, o as Qf } from './index-73814c06.js';
import {
  b as qs,
  d as qt,
  i as Ts,
  a as Yf,
  o as Jf,
  w as Zf,
} from './index-9fa1e778.js';
import {
  B as $s,
  C as Le,
  E as Fl,
  F as Tt,
  G as ep,
  H as xs,
  D as tp,
} from './index-3121cc12.js';
import { a as wr, n as rp, o as ap, d as np } from './iframe-5917f10b.js';
import { i as Ms } from './instrumenter-68c1f6a0.js';
import { M as op } from './Header-6127fd7e.js';
import {
  b as lp,
  l as ip,
  j as up,
  k as sp,
  o as cp,
} from './vue.esm-bundler-f95a757f.js';
import { _ as dp } from './_plugin-vue_export-helper-c27b6911.js';
import './Button-34361c8b.js';
function fp(e, t) {
  for (var r = 0; r < t.length; r++) {
    const a = t[r];
    if (typeof a != 'string' && !Array.isArray(a)) {
      for (const n in a)
        if (n !== 'default' && !(n in e)) {
          const o = Object.getOwnPropertyDescriptor(a, n);
          o &&
            Object.defineProperty(
              e,
              n,
              o.get ? o : { enumerable: !0, get: () => a[n] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
  );
}
var ce = {},
  lr = {},
  pp = {
    get exports() {
      return lr;
    },
    set exports(e) {
      lr = e;
    },
  };
(function (e) {
  const r =
      (o = 0) =>
      (l) =>
        `\x1B[${38 + o};5;${l}m`,
    a =
      (o = 0) =>
      (l, u, i) =>
        `\x1B[${38 + o};2;${l};${u};${i}m`;
  function n() {
    const o = new Map(),
      l = {
        modifier: {
          reset: [0, 0],
          bold: [1, 22],
          dim: [2, 22],
          italic: [3, 23],
          underline: [4, 24],
          overline: [53, 55],
          inverse: [7, 27],
          hidden: [8, 28],
          strikethrough: [9, 29],
        },
        color: {
          black: [30, 39],
          red: [31, 39],
          green: [32, 39],
          yellow: [33, 39],
          blue: [34, 39],
          magenta: [35, 39],
          cyan: [36, 39],
          white: [37, 39],
          blackBright: [90, 39],
          redBright: [91, 39],
          greenBright: [92, 39],
          yellowBright: [93, 39],
          blueBright: [94, 39],
          magentaBright: [95, 39],
          cyanBright: [96, 39],
          whiteBright: [97, 39],
        },
        bgColor: {
          bgBlack: [40, 49],
          bgRed: [41, 49],
          bgGreen: [42, 49],
          bgYellow: [43, 49],
          bgBlue: [44, 49],
          bgMagenta: [45, 49],
          bgCyan: [46, 49],
          bgWhite: [47, 49],
          bgBlackBright: [100, 49],
          bgRedBright: [101, 49],
          bgGreenBright: [102, 49],
          bgYellowBright: [103, 49],
          bgBlueBright: [104, 49],
          bgMagentaBright: [105, 49],
          bgCyanBright: [106, 49],
          bgWhiteBright: [107, 49],
        },
      };
    (l.color.gray = l.color.blackBright),
      (l.bgColor.bgGray = l.bgColor.bgBlackBright),
      (l.color.grey = l.color.blackBright),
      (l.bgColor.bgGrey = l.bgColor.bgBlackBright);
    for (const [u, i] of Object.entries(l)) {
      for (const [s, d] of Object.entries(i))
        (l[s] = { open: `\x1B[${d[0]}m`, close: `\x1B[${d[1]}m` }),
          (i[s] = l[s]),
          o.set(d[0], d[1]);
      Object.defineProperty(l, u, { value: i, enumerable: !1 });
    }
    return (
      Object.defineProperty(l, 'codes', { value: o, enumerable: !1 }),
      (l.color.close = '\x1B[39m'),
      (l.bgColor.close = '\x1B[49m'),
      (l.color.ansi256 = r()),
      (l.color.ansi16m = a()),
      (l.bgColor.ansi256 = r(10)),
      (l.bgColor.ansi16m = a(10)),
      Object.defineProperties(l, {
        rgbToAnsi256: {
          value: (u, i, s) =>
            u === i && i === s
              ? u < 8
                ? 16
                : u > 248
                ? 231
                : Math.round(((u - 8) / 247) * 24) + 232
              : 16 +
                36 * Math.round((u / 255) * 5) +
                6 * Math.round((i / 255) * 5) +
                Math.round((s / 255) * 5),
          enumerable: !1,
        },
        hexToRgb: {
          value: (u) => {
            const i = /(?<colorString>[a-f\d]{6}|[a-f\d]{3})/i.exec(
              u.toString(16),
            );
            if (!i) return [0, 0, 0];
            let { colorString: s } = i.groups;
            s.length === 3 &&
              (s = s
                .split('')
                .map((f) => f + f)
                .join(''));
            const d = Number.parseInt(s, 16);
            return [(d >> 16) & 255, (d >> 8) & 255, d & 255];
          },
          enumerable: !1,
        },
        hexToAnsi256: {
          value: (u) => l.rgbToAnsi256(...l.hexToRgb(u)),
          enumerable: !1,
        },
      }),
      l
    );
  }
  Object.defineProperty(e, 'exports', { enumerable: !0, get: n });
})(pp);
var de = {};
Object.defineProperty(de, '__esModule', { value: !0 });
de.printIteratorEntries = mp;
de.printIteratorValues = bp;
de.printListItems = yp;
de.printObjectProperties = hp;
const vp = (e, t) => {
  const r = Object.keys(e).sort(t);
  return (
    Object.getOwnPropertySymbols &&
      Object.getOwnPropertySymbols(e).forEach((a) => {
        Object.getOwnPropertyDescriptor(e, a).enumerable && r.push(a);
      }),
    r
  );
};
function mp(e, t, r, a, n, o, l = ': ') {
  let u = '',
    i = e.next();
  if (!i.done) {
    u += t.spacingOuter;
    const s = r + t.indent;
    for (; !i.done; ) {
      const d = o(i.value[0], t, s, a, n),
        f = o(i.value[1], t, s, a, n);
      (u += s + d + l + f),
        (i = e.next()),
        i.done ? t.min || (u += ',') : (u += ',' + t.spacingInner);
    }
    u += t.spacingOuter + r;
  }
  return u;
}
function bp(e, t, r, a, n, o) {
  let l = '',
    u = e.next();
  if (!u.done) {
    l += t.spacingOuter;
    const i = r + t.indent;
    for (; !u.done; )
      (l += i + o(u.value, t, i, a, n)),
        (u = e.next()),
        u.done ? t.min || (l += ',') : (l += ',' + t.spacingInner);
    l += t.spacingOuter + r;
  }
  return l;
}
function yp(e, t, r, a, n, o) {
  let l = '';
  if (e.length) {
    l += t.spacingOuter;
    const u = r + t.indent;
    for (let i = 0; i < e.length; i++)
      (l += u),
        i in e && (l += o(e[i], t, u, a, n)),
        i < e.length - 1 ? (l += ',' + t.spacingInner) : t.min || (l += ',');
    l += t.spacingOuter + r;
  }
  return l;
}
function hp(e, t, r, a, n, o) {
  let l = '';
  const u = vp(e, t.compareKeys);
  if (u.length) {
    l += t.spacingOuter;
    const i = r + t.indent;
    for (let s = 0; s < u.length; s++) {
      const d = u[s],
        f = o(d, t, i, a, n),
        v = o(e[d], t, i, a, n);
      (l += i + f + ': ' + v),
        s < u.length - 1 ? (l += ',' + t.spacingInner) : t.min || (l += ',');
    }
    l += t.spacingOuter + r;
  }
  return l;
}
var we = {};
Object.defineProperty(we, '__esModule', { value: !0 });
we.test = we.serialize = we.default = void 0;
var Ii = de,
  ir = (function () {
    return typeof globalThis < 'u'
      ? globalThis
      : typeof ir < 'u'
      ? ir
      : typeof self < 'u'
      ? self
      : typeof window < 'u'
      ? window
      : Function('return this')();
  })(),
  So = ir['jest-symbol-do-not-touch'] || ir.Symbol;
const gp =
    typeof So == 'function' && So.for
      ? So.for('jest.asymmetricMatcher')
      : 1267621,
  Xt = ' ',
  Ss = (e, t, r, a, n, o) => {
    const l = e.toString();
    return l === 'ArrayContaining' || l === 'ArrayNotContaining'
      ? ++a > t.maxDepth
        ? '[' + l + ']'
        : l + Xt + '[' + (0, Ii.printListItems)(e.sample, t, r, a, n, o) + ']'
      : l === 'ObjectContaining' || l === 'ObjectNotContaining'
      ? ++a > t.maxDepth
        ? '[' + l + ']'
        : l +
          Xt +
          '{' +
          (0, Ii.printObjectProperties)(e.sample, t, r, a, n, o) +
          '}'
      : l === 'StringMatching' ||
        l === 'StringNotMatching' ||
        l === 'StringContaining' ||
        l === 'StringNotContaining'
      ? l + Xt + o(e.sample, t, r, a, n)
      : e.toAsymmetricMatcher();
  };
we.serialize = Ss;
const As = (e) => e && e.$$typeof === gp;
we.test = As;
const Ep = { serialize: Ss, test: As };
var _p = Ep;
we.default = _p;
var Pe = {},
  Rp = ({ onlyFirst: e = !1 } = {}) => {
    const t = [
      '[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)',
      '(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))',
    ].join('|');
    return new RegExp(t, e ? void 0 : 'g');
  };
Object.defineProperty(Pe, '__esModule', { value: !0 });
Pe.test = Pe.serialize = Pe.default = void 0;
var Bs = Is(Rp),
  M = Is(lr);
function Is(e) {
  return e && e.__esModule ? e : { default: e };
}
const Cp = (e) =>
    e.replace((0, Bs.default)(), (t) => {
      switch (t) {
        case M.default.red.close:
        case M.default.green.close:
        case M.default.cyan.close:
        case M.default.gray.close:
        case M.default.white.close:
        case M.default.yellow.close:
        case M.default.bgRed.close:
        case M.default.bgGreen.close:
        case M.default.bgYellow.close:
        case M.default.inverse.close:
        case M.default.dim.close:
        case M.default.bold.close:
        case M.default.reset.open:
        case M.default.reset.close:
          return '</>';
        case M.default.red.open:
          return '<red>';
        case M.default.green.open:
          return '<green>';
        case M.default.cyan.open:
          return '<cyan>';
        case M.default.gray.open:
          return '<gray>';
        case M.default.white.open:
          return '<white>';
        case M.default.yellow.open:
          return '<yellow>';
        case M.default.bgRed.open:
          return '<bgRed>';
        case M.default.bgGreen.open:
          return '<bgGreen>';
        case M.default.bgYellow.open:
          return '<bgYellow>';
        case M.default.inverse.open:
          return '<inverse>';
        case M.default.dim.open:
          return '<dim>';
        case M.default.bold.open:
          return '<bold>';
        default:
          return '';
      }
    }),
  js = (e) => typeof e == 'string' && !!e.match((0, Bs.default)());
Pe.test = js;
const Ns = (e, t, r, a, n, o) => o(Cp(e), t, r, a, n);
Pe.serialize = Ns;
const wp = { serialize: Ns, test: js };
var Pp = wp;
Pe.default = Pp;
var Oe = {};
Object.defineProperty(Oe, '__esModule', { value: !0 });
Oe.test = Oe.serialize = Oe.default = void 0;
var ji = de;
const Op = ' ',
  ks = ['DOMStringMap', 'NamedNodeMap'],
  qp = /^(HTML\w*Collection|NodeList)$/,
  Tp = (e) => ks.indexOf(e) !== -1 || qp.test(e),
  Ds = (e) =>
    e && e.constructor && !!e.constructor.name && Tp(e.constructor.name);
Oe.test = Ds;
const $p = (e) => e.constructor.name === 'NamedNodeMap',
  Ls = (e, t, r, a, n, o) => {
    const l = e.constructor.name;
    return ++a > t.maxDepth
      ? '[' + l + ']'
      : (t.min ? '' : l + Op) +
          (ks.indexOf(l) !== -1
            ? '{' +
              (0, ji.printObjectProperties)(
                $p(e)
                  ? Array.from(e).reduce(
                      (u, i) => ((u[i.name] = i.value), u),
                      {},
                    )
                  : { ...e },
                t,
                r,
                a,
                n,
                o,
              ) +
              '}'
            : '[' + (0, ji.printListItems)(Array.from(e), t, r, a, n, o) + ']');
  };
Oe.serialize = Ls;
const xp = { serialize: Ls, test: Ds };
var Mp = xp;
Oe.default = Mp;
var qe = {},
  L = {},
  Vl = {};
Object.defineProperty(Vl, '__esModule', { value: !0 });
Vl.default = Sp;
function Sp(e) {
  return e.replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
Object.defineProperty(L, '__esModule', { value: !0 });
L.printText =
  L.printProps =
  L.printElementAsLeaf =
  L.printElement =
  L.printComment =
  L.printChildren =
    void 0;
var Fs = Ap(Vl);
function Ap(e) {
  return e && e.__esModule ? e : { default: e };
}
const Bp = (e, t, r, a, n, o, l) => {
  const u = a + r.indent,
    i = r.colors;
  return e
    .map((s) => {
      const d = t[s];
      let f = l(d, r, u, n, o);
      return (
        typeof d != 'string' &&
          (f.indexOf(`
`) !== -1 && (f = r.spacingOuter + u + f + r.spacingOuter + a),
          (f = '{' + f + '}')),
        r.spacingInner +
          a +
          i.prop.open +
          s +
          i.prop.close +
          '=' +
          i.value.open +
          f +
          i.value.close
      );
    })
    .join('');
};
L.printProps = Bp;
const Ip = (e, t, r, a, n, o) =>
  e
    .map(
      (l) =>
        t.spacingOuter +
        r +
        (typeof l == 'string' ? Vs(l, t) : o(l, t, r, a, n)),
    )
    .join('');
L.printChildren = Ip;
const Vs = (e, t) => {
  const r = t.colors.content;
  return r.open + (0, Fs.default)(e) + r.close;
};
L.printText = Vs;
const jp = (e, t) => {
  const r = t.colors.comment;
  return r.open + '<!--' + (0, Fs.default)(e) + '-->' + r.close;
};
L.printComment = jp;
const Np = (e, t, r, a, n) => {
  const o = a.colors.tag;
  return (
    o.open +
    '<' +
    e +
    (t && o.close + t + a.spacingOuter + n + o.open) +
    (r
      ? '>' + o.close + r + a.spacingOuter + n + o.open + '</' + e
      : (t && !a.min ? '' : ' ') + '/') +
    '>' +
    o.close
  );
};
L.printElement = Np;
const kp = (e, t) => {
  const r = t.colors.tag;
  return r.open + '<' + e + r.close + ' …' + r.open + ' />' + r.close;
};
L.printElementAsLeaf = kp;
Object.defineProperty(qe, '__esModule', { value: !0 });
qe.test = qe.serialize = qe.default = void 0;
var Ge = L;
const Dp = 1,
  Us = 3,
  Hs = 8,
  Ws = 11,
  Lp = /^((HTML|SVG)\w*)?Element$/,
  Fp = (e) => {
    try {
      return typeof e.hasAttribute == 'function' && e.hasAttribute('is');
    } catch {
      return !1;
    }
  },
  Vp = (e) => {
    const t = e.constructor.name,
      { nodeType: r, tagName: a } = e,
      n = (typeof a == 'string' && a.includes('-')) || Fp(e);
    return (
      (r === Dp && (Lp.test(t) || n)) ||
      (r === Us && t === 'Text') ||
      (r === Hs && t === 'Comment') ||
      (r === Ws && t === 'DocumentFragment')
    );
  },
  zs = (e) => {
    var t;
    return (
      (e == null || (t = e.constructor) === null || t === void 0
        ? void 0
        : t.name) && Vp(e)
    );
  };
qe.test = zs;
function Up(e) {
  return e.nodeType === Us;
}
function Hp(e) {
  return e.nodeType === Hs;
}
function Ao(e) {
  return e.nodeType === Ws;
}
const Ks = (e, t, r, a, n, o) => {
  if (Up(e)) return (0, Ge.printText)(e.data, t);
  if (Hp(e)) return (0, Ge.printComment)(e.data, t);
  const l = Ao(e) ? 'DocumentFragment' : e.tagName.toLowerCase();
  return ++a > t.maxDepth
    ? (0, Ge.printElementAsLeaf)(l, t)
    : (0, Ge.printElement)(
        l,
        (0, Ge.printProps)(
          Ao(e)
            ? []
            : Array.from(e.attributes)
                .map((u) => u.name)
                .sort(),
          Ao(e)
            ? {}
            : Array.from(e.attributes).reduce(
                (u, i) => ((u[i.name] = i.value), u),
                {},
              ),
          t,
          r + t.indent,
          a,
          n,
          o,
        ),
        (0, Ge.printChildren)(
          Array.prototype.slice.call(e.childNodes || e.children),
          t,
          r + t.indent,
          a,
          n,
          o,
        ),
        t,
        r,
      );
};
qe.serialize = Ks;
const Wp = { serialize: Ks, test: zs };
var zp = Wp;
qe.default = zp;
var Te = {};
Object.defineProperty(Te, '__esModule', { value: !0 });
Te.test = Te.serialize = Te.default = void 0;
var gt = de;
const Kp = '@@__IMMUTABLE_ITERABLE__@@',
  Gp = '@@__IMMUTABLE_LIST__@@',
  Xp = '@@__IMMUTABLE_KEYED__@@',
  Qp = '@@__IMMUTABLE_MAP__@@',
  Ni = '@@__IMMUTABLE_ORDERED__@@',
  Yp = '@@__IMMUTABLE_RECORD__@@',
  Jp = '@@__IMMUTABLE_SEQ__@@',
  Zp = '@@__IMMUTABLE_SET__@@',
  ev = '@@__IMMUTABLE_STACK__@@',
  tt = (e) => 'Immutable.' + e,
  Pr = (e) => '[' + e + ']',
  Et = ' ',
  ki = '…',
  tv = (e, t, r, a, n, o, l) =>
    ++a > t.maxDepth
      ? Pr(tt(l))
      : tt(l) +
        Et +
        '{' +
        (0, gt.printIteratorEntries)(e.entries(), t, r, a, n, o) +
        '}';
function rv(e) {
  let t = 0;
  return {
    next() {
      if (t < e._keys.length) {
        const r = e._keys[t++];
        return { done: !1, value: [r, e.get(r)] };
      }
      return { done: !0, value: void 0 };
    },
  };
}
const av = (e, t, r, a, n, o) => {
    const l = tt(e._name || 'Record');
    return ++a > t.maxDepth
      ? Pr(l)
      : l + Et + '{' + (0, gt.printIteratorEntries)(rv(e), t, r, a, n, o) + '}';
  },
  nv = (e, t, r, a, n, o) => {
    const l = tt('Seq');
    return ++a > t.maxDepth
      ? Pr(l)
      : e[Xp]
      ? l +
        Et +
        '{' +
        (e._iter || e._object
          ? (0, gt.printIteratorEntries)(e.entries(), t, r, a, n, o)
          : ki) +
        '}'
      : l +
        Et +
        '[' +
        (e._iter || e._array || e._collection || e._iterable
          ? (0, gt.printIteratorValues)(e.values(), t, r, a, n, o)
          : ki) +
        ']';
  },
  Bo = (e, t, r, a, n, o, l) =>
    ++a > t.maxDepth
      ? Pr(tt(l))
      : tt(l) +
        Et +
        '[' +
        (0, gt.printIteratorValues)(e.values(), t, r, a, n, o) +
        ']',
  Gs = (e, t, r, a, n, o) =>
    e[Qp]
      ? tv(e, t, r, a, n, o, e[Ni] ? 'OrderedMap' : 'Map')
      : e[Gp]
      ? Bo(e, t, r, a, n, o, 'List')
      : e[Zp]
      ? Bo(e, t, r, a, n, o, e[Ni] ? 'OrderedSet' : 'Set')
      : e[ev]
      ? Bo(e, t, r, a, n, o, 'Stack')
      : e[Jp]
      ? nv(e, t, r, a, n, o)
      : av(e, t, r, a, n, o);
Te.serialize = Gs;
const Xs = (e) => e && (e[Kp] === !0 || e[Yp] === !0);
Te.test = Xs;
const ov = { serialize: Gs, test: Xs };
var lv = ov;
Te.default = lv;
var $e = {},
  sl = {},
  iv = {
    get exports() {
      return sl;
    },
    set exports(e) {
      sl = e;
    },
  },
  x = {};
/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Or = 60103,
  qr = 60106,
  $t = 60107,
  xt = 60108,
  Mt = 60114,
  St = 60109,
  At = 60110,
  Bt = 60112,
  It = 60113,
  Ul = 60120,
  jt = 60115,
  Nt = 60116,
  Qs = 60121,
  Ys = 60122,
  Js = 60117,
  Zs = 60129,
  ec = 60131;
if (typeof Symbol == 'function' && Symbol.for) {
  var k = Symbol.for;
  (Or = k('react.element')),
    (qr = k('react.portal')),
    ($t = k('react.fragment')),
    (xt = k('react.strict_mode')),
    (Mt = k('react.profiler')),
    (St = k('react.provider')),
    (At = k('react.context')),
    (Bt = k('react.forward_ref')),
    (It = k('react.suspense')),
    (Ul = k('react.suspense_list')),
    (jt = k('react.memo')),
    (Nt = k('react.lazy')),
    (Qs = k('react.block')),
    (Ys = k('react.server.block')),
    (Js = k('react.fundamental')),
    (Zs = k('react.debug_trace_mode')),
    (ec = k('react.legacy_hidden'));
}
function re(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Or:
        switch (((e = e.type), e)) {
          case $t:
          case Mt:
          case xt:
          case It:
          case Ul:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case At:
              case Bt:
              case Nt:
              case jt:
              case St:
                return e;
              default:
                return t;
            }
        }
      case qr:
        return t;
    }
  }
}
var uv = St,
  sv = Or,
  cv = Bt,
  dv = $t,
  fv = Nt,
  pv = jt,
  vv = qr,
  mv = Mt,
  bv = xt,
  yv = It;
x.ContextConsumer = At;
x.ContextProvider = uv;
x.Element = sv;
x.ForwardRef = cv;
x.Fragment = dv;
x.Lazy = fv;
x.Memo = pv;
x.Portal = vv;
x.Profiler = mv;
x.StrictMode = bv;
x.Suspense = yv;
x.isAsyncMode = function () {
  return !1;
};
x.isConcurrentMode = function () {
  return !1;
};
x.isContextConsumer = function (e) {
  return re(e) === At;
};
x.isContextProvider = function (e) {
  return re(e) === St;
};
x.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Or;
};
x.isForwardRef = function (e) {
  return re(e) === Bt;
};
x.isFragment = function (e) {
  return re(e) === $t;
};
x.isLazy = function (e) {
  return re(e) === Nt;
};
x.isMemo = function (e) {
  return re(e) === jt;
};
x.isPortal = function (e) {
  return re(e) === qr;
};
x.isProfiler = function (e) {
  return re(e) === Mt;
};
x.isStrictMode = function (e) {
  return re(e) === xt;
};
x.isSuspense = function (e) {
  return re(e) === It;
};
x.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === $t ||
    e === Mt ||
    e === Zs ||
    e === xt ||
    e === It ||
    e === Ul ||
    e === ec ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === Nt ||
        e.$$typeof === jt ||
        e.$$typeof === St ||
        e.$$typeof === At ||
        e.$$typeof === Bt ||
        e.$$typeof === Js ||
        e.$$typeof === Qs ||
        e[0] === Ys))
  );
};
x.typeOf = re;
(function (e) {
  e.exports = x;
})(iv);
Object.defineProperty($e, '__esModule', { value: !0 });
$e.test = $e.serialize = $e.default = void 0;
var Be = hv(sl),
  Qt = L;
function tc(e) {
  if (typeof WeakMap != 'function') return null;
  var t = new WeakMap(),
    r = new WeakMap();
  return (tc = function (a) {
    return a ? r : t;
  })(e);
}
function hv(e, t) {
  if (!t && e && e.__esModule) return e;
  if (e === null || (typeof e != 'object' && typeof e != 'function'))
    return { default: e };
  var r = tc(t);
  if (r && r.has(e)) return r.get(e);
  var a = {},
    n = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e)
    if (o !== 'default' && Object.prototype.hasOwnProperty.call(e, o)) {
      var l = n ? Object.getOwnPropertyDescriptor(e, o) : null;
      l && (l.get || l.set) ? Object.defineProperty(a, o, l) : (a[o] = e[o]);
    }
  return (a.default = e), r && r.set(e, a), a;
}
const rc = (e, t = []) => (
    Array.isArray(e)
      ? e.forEach((r) => {
          rc(r, t);
        })
      : e != null && e !== !1 && t.push(e),
    t
  ),
  Di = (e) => {
    const t = e.type;
    if (typeof t == 'string') return t;
    if (typeof t == 'function') return t.displayName || t.name || 'Unknown';
    if (Be.isFragment(e)) return 'React.Fragment';
    if (Be.isSuspense(e)) return 'React.Suspense';
    if (typeof t == 'object' && t !== null) {
      if (Be.isContextProvider(e)) return 'Context.Provider';
      if (Be.isContextConsumer(e)) return 'Context.Consumer';
      if (Be.isForwardRef(e)) {
        if (t.displayName) return t.displayName;
        const r = t.render.displayName || t.render.name || '';
        return r !== '' ? 'ForwardRef(' + r + ')' : 'ForwardRef';
      }
      if (Be.isMemo(e)) {
        const r = t.displayName || t.type.displayName || t.type.name || '';
        return r !== '' ? 'Memo(' + r + ')' : 'Memo';
      }
    }
    return 'UNDEFINED';
  },
  gv = (e) => {
    const { props: t } = e;
    return Object.keys(t)
      .filter((r) => r !== 'children' && t[r] !== void 0)
      .sort();
  },
  ac = (e, t, r, a, n, o) =>
    ++a > t.maxDepth
      ? (0, Qt.printElementAsLeaf)(Di(e), t)
      : (0, Qt.printElement)(
          Di(e),
          (0, Qt.printProps)(gv(e), e.props, t, r + t.indent, a, n, o),
          (0, Qt.printChildren)(rc(e.props.children), t, r + t.indent, a, n, o),
          t,
          r,
        );
$e.serialize = ac;
const nc = (e) => e != null && Be.isElement(e);
$e.test = nc;
const Ev = { serialize: ac, test: nc };
var _v = Ev;
$e.default = _v;
var xe = {};
Object.defineProperty(xe, '__esModule', { value: !0 });
xe.test = xe.serialize = xe.default = void 0;
var Yt = L,
  ur = (function () {
    return typeof globalThis < 'u'
      ? globalThis
      : typeof ur < 'u'
      ? ur
      : typeof self < 'u'
      ? self
      : typeof window < 'u'
      ? window
      : Function('return this')();
  })(),
  Io = ur['jest-symbol-do-not-touch'] || ur.Symbol;
const Rv =
    typeof Io == 'function' && Io.for ? Io.for('react.test.json') : 245830487,
  Cv = (e) => {
    const { props: t } = e;
    return t
      ? Object.keys(t)
          .filter((r) => t[r] !== void 0)
          .sort()
      : [];
  },
  oc = (e, t, r, a, n, o) =>
    ++a > t.maxDepth
      ? (0, Yt.printElementAsLeaf)(e.type, t)
      : (0, Yt.printElement)(
          e.type,
          e.props
            ? (0, Yt.printProps)(Cv(e), e.props, t, r + t.indent, a, n, o)
            : '',
          e.children
            ? (0, Yt.printChildren)(e.children, t, r + t.indent, a, n, o)
            : '',
          t,
          r,
        );
xe.serialize = oc;
const lc = (e) => e && e.$$typeof === Rv;
xe.test = lc;
const wv = { serialize: oc, test: lc };
var Pv = wv;
xe.default = Pv;
Object.defineProperty(ce, '__esModule', { value: !0 });
var ic = (ce.default = bc = ce.DEFAULT_OPTIONS = void 0),
  uc = (ce.format = Ec),
  Hl = (ce.plugins = void 0),
  Ov = Se(lr),
  ft = de,
  qv = Se(we),
  Tv = Se(Pe),
  $v = Se(Oe),
  xv = Se(qe),
  Mv = Se(Te),
  Sv = Se($e),
  Av = Se(xe);
function Se(e) {
  return e && e.__esModule ? e : { default: e };
}
const sc = Object.prototype.toString,
  Bv = Date.prototype.toISOString,
  Iv = Error.prototype.toString,
  Li = RegExp.prototype.toString,
  jo = (e) =>
    (typeof e.constructor == 'function' && e.constructor.name) || 'Object',
  jv = (e) => typeof window < 'u' && e === window,
  Nv = /^Symbol\((.*)\)(.*)$/,
  kv = /\n/gi;
class cc extends Error {
  constructor(t, r) {
    super(t), (this.stack = r), (this.name = this.constructor.name);
  }
}
function Dv(e) {
  return (
    e === '[object Array]' ||
    e === '[object ArrayBuffer]' ||
    e === '[object DataView]' ||
    e === '[object Float32Array]' ||
    e === '[object Float64Array]' ||
    e === '[object Int8Array]' ||
    e === '[object Int16Array]' ||
    e === '[object Int32Array]' ||
    e === '[object Uint8Array]' ||
    e === '[object Uint8ClampedArray]' ||
    e === '[object Uint16Array]' ||
    e === '[object Uint32Array]'
  );
}
function Lv(e) {
  return Object.is(e, -0) ? '-0' : String(e);
}
function Fv(e) {
  return String(`${e}n`);
}
function Fi(e, t) {
  return t ? '[Function ' + (e.name || 'anonymous') + ']' : '[Function]';
}
function Vi(e) {
  return String(e).replace(Nv, 'Symbol($1)');
}
function Ui(e) {
  return '[' + Iv.call(e) + ']';
}
function dc(e, t, r, a) {
  if (e === !0 || e === !1) return '' + e;
  if (e === void 0) return 'undefined';
  if (e === null) return 'null';
  const n = typeof e;
  if (n === 'number') return Lv(e);
  if (n === 'bigint') return Fv(e);
  if (n === 'string')
    return a ? '"' + e.replace(/"|\\/g, '\\$&') + '"' : '"' + e + '"';
  if (n === 'function') return Fi(e, t);
  if (n === 'symbol') return Vi(e);
  const o = sc.call(e);
  return o === '[object WeakMap]'
    ? 'WeakMap {}'
    : o === '[object WeakSet]'
    ? 'WeakSet {}'
    : o === '[object Function]' || o === '[object GeneratorFunction]'
    ? Fi(e, t)
    : o === '[object Symbol]'
    ? Vi(e)
    : o === '[object Date]'
    ? isNaN(+e)
      ? 'Date { NaN }'
      : Bv.call(e)
    : o === '[object Error]'
    ? Ui(e)
    : o === '[object RegExp]'
    ? r
      ? Li.call(e).replace(/[\\^$*+?.()|[\]{}]/g, '\\$&')
      : Li.call(e)
    : e instanceof Error
    ? Ui(e)
    : null;
}
function fc(e, t, r, a, n, o) {
  if (n.indexOf(e) !== -1) return '[Circular]';
  (n = n.slice()), n.push(e);
  const l = ++a > t.maxDepth,
    u = t.min;
  if (t.callToJSON && !l && e.toJSON && typeof e.toJSON == 'function' && !o)
    return ge(e.toJSON(), t, r, a, n, !0);
  const i = sc.call(e);
  return i === '[object Arguments]'
    ? l
      ? '[Arguments]'
      : (u ? '' : 'Arguments ') +
        '[' +
        (0, ft.printListItems)(e, t, r, a, n, ge) +
        ']'
    : Dv(i)
    ? l
      ? '[' + e.constructor.name + ']'
      : (u || (!t.printBasicPrototype && e.constructor.name === 'Array')
          ? ''
          : e.constructor.name + ' ') +
        '[' +
        (0, ft.printListItems)(e, t, r, a, n, ge) +
        ']'
    : i === '[object Map]'
    ? l
      ? '[Map]'
      : 'Map {' +
        (0, ft.printIteratorEntries)(e.entries(), t, r, a, n, ge, ' => ') +
        '}'
    : i === '[object Set]'
    ? l
      ? '[Set]'
      : 'Set {' + (0, ft.printIteratorValues)(e.values(), t, r, a, n, ge) + '}'
    : l || jv(e)
    ? '[' + jo(e) + ']'
    : (u || (!t.printBasicPrototype && jo(e) === 'Object') ? '' : jo(e) + ' ') +
      '{' +
      (0, ft.printObjectProperties)(e, t, r, a, n, ge) +
      '}';
}
function Vv(e) {
  return e.serialize != null;
}
function pc(e, t, r, a, n, o) {
  let l;
  try {
    l = Vv(e)
      ? e.serialize(t, r, a, n, o, ge)
      : e.print(
          t,
          (u) => ge(u, r, a, n, o),
          (u) => {
            const i = a + r.indent;
            return (
              i +
              u.replace(
                kv,
                `
` + i,
              )
            );
          },
          { edgeSpacing: r.spacingOuter, min: r.min, spacing: r.spacingInner },
          r.colors,
        );
  } catch (u) {
    throw new cc(u.message, u.stack);
  }
  if (typeof l != 'string')
    throw new Error(
      `pretty-format: Plugin must return type "string" but instead returned "${typeof l}".`,
    );
  return l;
}
function vc(e, t) {
  for (let r = 0; r < e.length; r++)
    try {
      if (e[r].test(t)) return e[r];
    } catch (a) {
      throw new cc(a.message, a.stack);
    }
  return null;
}
function ge(e, t, r, a, n, o) {
  const l = vc(t.plugins, e);
  if (l !== null) return pc(l, e, t, r, a, n);
  const u = dc(e, t.printFunctionName, t.escapeRegex, t.escapeString);
  return u !== null ? u : fc(e, t, r, a, n, o);
}
const Wl = {
    comment: 'gray',
    content: 'reset',
    prop: 'yellow',
    tag: 'cyan',
    value: 'green',
  },
  mc = Object.keys(Wl),
  J = {
    callToJSON: !0,
    compareKeys: void 0,
    escapeRegex: !1,
    escapeString: !0,
    highlight: !1,
    indent: 2,
    maxDepth: 1 / 0,
    min: !1,
    plugins: [],
    printBasicPrototype: !0,
    printFunctionName: !0,
    theme: Wl,
  };
var bc = (ce.DEFAULT_OPTIONS = J);
function Uv(e) {
  if (
    (Object.keys(e).forEach((t) => {
      if (!J.hasOwnProperty(t))
        throw new Error(`pretty-format: Unknown option "${t}".`);
    }),
    e.min && e.indent !== void 0 && e.indent !== 0)
  )
    throw new Error(
      'pretty-format: Options "min" and "indent" cannot be used together.',
    );
  if (e.theme !== void 0) {
    if (e.theme === null)
      throw new Error('pretty-format: Option "theme" must not be null.');
    if (typeof e.theme != 'object')
      throw new Error(
        `pretty-format: Option "theme" must be of type "object" but instead received "${typeof e.theme}".`,
      );
  }
}
const Hv = (e) =>
    mc.reduce((t, r) => {
      const a = e.theme && e.theme[r] !== void 0 ? e.theme[r] : Wl[r],
        n = a && Ov.default[a];
      if (n && typeof n.close == 'string' && typeof n.open == 'string')
        t[r] = n;
      else
        throw new Error(
          `pretty-format: Option "theme" has a key "${r}" whose value "${a}" is undefined in ansi-styles.`,
        );
      return t;
    }, Object.create(null)),
  Wv = () =>
    mc.reduce(
      (e, t) => ((e[t] = { close: '', open: '' }), e),
      Object.create(null),
    ),
  yc = (e) =>
    e && e.printFunctionName !== void 0
      ? e.printFunctionName
      : J.printFunctionName,
  hc = (e) => (e && e.escapeRegex !== void 0 ? e.escapeRegex : J.escapeRegex),
  gc = (e) =>
    e && e.escapeString !== void 0 ? e.escapeString : J.escapeString,
  Hi = (e) => {
    var t;
    return {
      callToJSON: e && e.callToJSON !== void 0 ? e.callToJSON : J.callToJSON,
      colors: e && e.highlight ? Hv(e) : Wv(),
      compareKeys:
        e && typeof e.compareKeys == 'function' ? e.compareKeys : J.compareKeys,
      escapeRegex: hc(e),
      escapeString: gc(e),
      indent:
        e && e.min ? '' : zv(e && e.indent !== void 0 ? e.indent : J.indent),
      maxDepth: e && e.maxDepth !== void 0 ? e.maxDepth : J.maxDepth,
      min: e && e.min !== void 0 ? e.min : J.min,
      plugins: e && e.plugins !== void 0 ? e.plugins : J.plugins,
      printBasicPrototype:
        (t = e == null ? void 0 : e.printBasicPrototype) !== null &&
        t !== void 0
          ? t
          : !0,
      printFunctionName: yc(e),
      spacingInner:
        e && e.min
          ? ' '
          : `
`,
      spacingOuter:
        e && e.min
          ? ''
          : `
`,
    };
  };
function zv(e) {
  return new Array(e + 1).join(' ');
}
function Ec(e, t) {
  if (t && (Uv(t), t.plugins)) {
    const a = vc(t.plugins, e);
    if (a !== null) return pc(a, e, Hi(t), '', 0, []);
  }
  const r = dc(e, yc(t), hc(t), gc(t));
  return r !== null ? r : fc(e, Hi(t), '', 0, []);
}
const Kv = {
  AsymmetricMatcher: qv.default,
  ConvertAnsi: Tv.default,
  DOMCollection: $v.default,
  DOMElement: xv.default,
  Immutable: Mv.default,
  ReactElement: Sv.default,
  ReactTestComponent: Av.default,
};
Hl = ce.plugins = Kv;
var Gv = Ec;
ic = ce.default = Gv;
const Xv = fp(
  {
    __proto__: null,
    get DEFAULT_OPTIONS() {
      return bc;
    },
    get default() {
      return ic;
    },
    format: uc,
    get plugins() {
      return Hl;
    },
  },
  [ce],
);
var Qv = Object.prototype.toString;
function Wi(e) {
  return typeof e == 'function' || Qv.call(e) === '[object Function]';
}
function Yv(e) {
  var t = Number(e);
  return isNaN(t)
    ? 0
    : t === 0 || !isFinite(t)
    ? t
    : (t > 0 ? 1 : -1) * Math.floor(Math.abs(t));
}
var Jv = Math.pow(2, 53) - 1;
function Zv(e) {
  var t = Yv(e);
  return Math.min(Math.max(t, 0), Jv);
}
function Z(e, t) {
  var r = Array,
    a = Object(e);
  if (e == null)
    throw new TypeError(
      'Array.from requires an array-like object - not null or undefined',
    );
  if (typeof t < 'u' && !Wi(t))
    throw new TypeError(
      'Array.from: when provided, the second argument must be a function',
    );
  for (
    var n = Zv(a.length), o = Wi(r) ? Object(new r(n)) : new Array(n), l = 0, u;
    l < n;

  )
    (u = a[l]), t ? (o[l] = t(u, l)) : (o[l] = u), (l += 1);
  return (o.length = n), o;
}
function _t(e) {
  return (
    (_t =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == 'function' &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t;
          }),
    _t(e)
  );
}
function em(e, t) {
  if (!(e instanceof t))
    throw new TypeError('Cannot call a class as a function');
}
function zi(e, t) {
  for (var r = 0; r < t.length; r++) {
    var a = t[r];
    (a.enumerable = a.enumerable || !1),
      (a.configurable = !0),
      'value' in a && (a.writable = !0),
      Object.defineProperty(e, _c(a.key), a);
  }
}
function tm(e, t, r) {
  return (
    t && zi(e.prototype, t),
    r && zi(e, r),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
  );
}
function rm(e, t, r) {
  return (
    (t = _c(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function _c(e) {
  var t = am(e, 'string');
  return _t(t) === 'symbol' ? t : String(t);
}
function am(e, t) {
  if (_t(e) !== 'object' || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var a = r.call(e, t || 'default');
    if (_t(a) !== 'object') return a;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
var nm = (function () {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    em(this, e), rm(this, 'items', void 0), (this.items = t);
  }
  return (
    tm(e, [
      {
        key: 'add',
        value: function (r) {
          return this.has(r) === !1 && this.items.push(r), this;
        },
      },
      {
        key: 'clear',
        value: function () {
          this.items = [];
        },
      },
      {
        key: 'delete',
        value: function (r) {
          var a = this.items.length;
          return (
            (this.items = this.items.filter(function (n) {
              return n !== r;
            })),
            a !== this.items.length
          );
        },
      },
      {
        key: 'forEach',
        value: function (r) {
          var a = this;
          this.items.forEach(function (n) {
            r(n, n, a);
          });
        },
      },
      {
        key: 'has',
        value: function (r) {
          return this.items.indexOf(r) !== -1;
        },
      },
      {
        key: 'size',
        get: function () {
          return this.items.length;
        },
      },
    ]),
    e
  );
})();
const om = typeof Set > 'u' ? Set : nm;
function F(e) {
  var t;
  return (t = e.localName) !== null && t !== void 0
    ? t
    : e.tagName.toLowerCase();
}
var lm = {
    article: 'article',
    aside: 'complementary',
    button: 'button',
    datalist: 'listbox',
    dd: 'definition',
    details: 'group',
    dialog: 'dialog',
    dt: 'term',
    fieldset: 'group',
    figure: 'figure',
    form: 'form',
    footer: 'contentinfo',
    h1: 'heading',
    h2: 'heading',
    h3: 'heading',
    h4: 'heading',
    h5: 'heading',
    h6: 'heading',
    header: 'banner',
    hr: 'separator',
    html: 'document',
    legend: 'legend',
    li: 'listitem',
    math: 'math',
    main: 'main',
    menu: 'list',
    nav: 'navigation',
    ol: 'list',
    optgroup: 'group',
    option: 'option',
    output: 'status',
    progress: 'progressbar',
    section: 'region',
    summary: 'button',
    table: 'table',
    tbody: 'rowgroup',
    textarea: 'textbox',
    tfoot: 'rowgroup',
    td: 'cell',
    th: 'columnheader',
    thead: 'rowgroup',
    tr: 'row',
    ul: 'list',
  },
  im = {
    caption: new Set(['aria-label', 'aria-labelledby']),
    code: new Set(['aria-label', 'aria-labelledby']),
    deletion: new Set(['aria-label', 'aria-labelledby']),
    emphasis: new Set(['aria-label', 'aria-labelledby']),
    generic: new Set(['aria-label', 'aria-labelledby', 'aria-roledescription']),
    insertion: new Set(['aria-label', 'aria-labelledby']),
    paragraph: new Set(['aria-label', 'aria-labelledby']),
    presentation: new Set(['aria-label', 'aria-labelledby']),
    strong: new Set(['aria-label', 'aria-labelledby']),
    subscript: new Set(['aria-label', 'aria-labelledby']),
    superscript: new Set(['aria-label', 'aria-labelledby']),
  };
function um(e, t) {
  return [
    'aria-atomic',
    'aria-busy',
    'aria-controls',
    'aria-current',
    'aria-describedby',
    'aria-details',
    'aria-dropeffect',
    'aria-flowto',
    'aria-grabbed',
    'aria-hidden',
    'aria-keyshortcuts',
    'aria-label',
    'aria-labelledby',
    'aria-live',
    'aria-owns',
    'aria-relevant',
    'aria-roledescription',
  ].some(function (r) {
    var a;
    return (
      e.hasAttribute(r) && !((a = im[t]) !== null && a !== void 0 && a.has(r))
    );
  });
}
function Rc(e, t) {
  return um(e, t);
}
function sm(e) {
  var t = dm(e);
  if (t === null || t === 'presentation') {
    var r = cm(e);
    if (t !== 'presentation' || Rc(e, r || '')) return r;
  }
  return t;
}
function cm(e) {
  var t = lm[F(e)];
  if (t !== void 0) return t;
  switch (F(e)) {
    case 'a':
    case 'area':
    case 'link':
      if (e.hasAttribute('href')) return 'link';
      break;
    case 'img':
      return e.getAttribute('alt') === '' && !Rc(e, 'img')
        ? 'presentation'
        : 'img';
    case 'input': {
      var r = e,
        a = r.type;
      switch (a) {
        case 'button':
        case 'image':
        case 'reset':
        case 'submit':
          return 'button';
        case 'checkbox':
        case 'radio':
          return a;
        case 'range':
          return 'slider';
        case 'email':
        case 'tel':
        case 'text':
        case 'url':
          return e.hasAttribute('list') ? 'combobox' : 'textbox';
        case 'search':
          return e.hasAttribute('list') ? 'combobox' : 'searchbox';
        case 'number':
          return 'spinbutton';
        default:
          return null;
      }
    }
    case 'select':
      return e.hasAttribute('multiple') || e.size > 1 ? 'listbox' : 'combobox';
  }
  return null;
}
function dm(e) {
  var t = e.getAttribute('role');
  if (t !== null) {
    var r = t.trim().split(' ')[0];
    if (r.length > 0) return r;
  }
  return null;
}
function A(e) {
  return e !== null && e.nodeType === e.ELEMENT_NODE;
}
function Cc(e) {
  return A(e) && F(e) === 'caption';
}
function rr(e) {
  return A(e) && F(e) === 'input';
}
function fm(e) {
  return A(e) && F(e) === 'optgroup';
}
function pm(e) {
  return A(e) && F(e) === 'select';
}
function vm(e) {
  return A(e) && F(e) === 'table';
}
function mm(e) {
  return A(e) && F(e) === 'textarea';
}
function bm(e) {
  var t = e.ownerDocument === null ? e : e.ownerDocument,
    r = t.defaultView;
  if (r === null) throw new TypeError('no window available');
  return r;
}
function ym(e) {
  return A(e) && F(e) === 'fieldset';
}
function hm(e) {
  return A(e) && F(e) === 'legend';
}
function gm(e) {
  return A(e) && F(e) === 'slot';
}
function Em(e) {
  return A(e) && e.ownerSVGElement !== void 0;
}
function _m(e) {
  return A(e) && F(e) === 'svg';
}
function Rm(e) {
  return Em(e) && F(e) === 'title';
}
function sr(e, t) {
  if (A(e) && e.hasAttribute(t)) {
    var r = e.getAttribute(t).split(' '),
      a = e.getRootNode ? e.getRootNode() : e.ownerDocument;
    return r
      .map(function (n) {
        return a.getElementById(n);
      })
      .filter(function (n) {
        return n !== null;
      });
  }
  return [];
}
function ue(e, t) {
  return A(e) ? t.indexOf(sm(e)) !== -1 : !1;
}
function Cm(e) {
  return e.trim().replace(/\s\s+/g, ' ');
}
function wm(e, t) {
  if (!A(e)) return !1;
  if (e.hasAttribute('hidden') || e.getAttribute('aria-hidden') === 'true')
    return !0;
  var r = t(e);
  return (
    r.getPropertyValue('display') === 'none' ||
    r.getPropertyValue('visibility') === 'hidden'
  );
}
function Pm(e) {
  return ue(e, ['button', 'combobox', 'listbox', 'textbox']) || wc(e, 'range');
}
function wc(e, t) {
  if (!A(e)) return !1;
  switch (t) {
    case 'range':
      return ue(e, [
        'meter',
        'progressbar',
        'scrollbar',
        'slider',
        'spinbutton',
      ]);
    default:
      throw new TypeError(
        "No knowledge about abstract role '".concat(
          t,
          "'. This is likely a bug :(",
        ),
      );
  }
}
function Ki(e, t) {
  var r = Z(e.querySelectorAll(t));
  return (
    sr(e, 'aria-owns').forEach(function (a) {
      r.push.apply(r, Z(a.querySelectorAll(t)));
    }),
    r
  );
}
function Om(e) {
  return pm(e)
    ? e.selectedOptions || Ki(e, '[selected]')
    : Ki(e, '[aria-selected="true"]');
}
function qm(e) {
  return ue(e, ['none', 'presentation']);
}
function Tm(e) {
  return Cc(e);
}
function $m(e) {
  return ue(e, [
    'button',
    'cell',
    'checkbox',
    'columnheader',
    'gridcell',
    'heading',
    'label',
    'legend',
    'link',
    'menuitem',
    'menuitemcheckbox',
    'menuitemradio',
    'option',
    'radio',
    'row',
    'rowheader',
    'switch',
    'tab',
    'tooltip',
    'treeitem',
  ]);
}
function xm(e) {
  return !1;
}
function Mm(e) {
  return rr(e) || mm(e) ? e.value : e.textContent || '';
}
function Gi(e) {
  var t = e.getPropertyValue('content');
  return /^["'].*["']$/.test(t) ? t.slice(1, -1) : '';
}
function Pc(e) {
  var t = F(e);
  return (
    t === 'button' ||
    (t === 'input' && e.getAttribute('type') !== 'hidden') ||
    t === 'meter' ||
    t === 'output' ||
    t === 'progress' ||
    t === 'select' ||
    t === 'textarea'
  );
}
function Oc(e) {
  if (Pc(e)) return e;
  var t = null;
  return (
    e.childNodes.forEach(function (r) {
      if (t === null && A(r)) {
        var a = Oc(r);
        a !== null && (t = a);
      }
    }),
    t
  );
}
function Sm(e) {
  if (e.control !== void 0) return e.control;
  var t = e.getAttribute('for');
  return t !== null ? e.ownerDocument.getElementById(t) : Oc(e);
}
function Am(e) {
  var t = e.labels;
  if (t === null) return t;
  if (t !== void 0) return Z(t);
  if (!Pc(e)) return null;
  var r = e.ownerDocument;
  return Z(r.querySelectorAll('label')).filter(function (a) {
    return Sm(a) === e;
  });
}
function Bm(e) {
  var t = e.assignedNodes();
  return t.length === 0 ? Z(e.childNodes) : t;
}
function qc(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    r = new om(),
    a = bm(e),
    n = t.compute,
    o = n === void 0 ? 'name' : n,
    l = t.computedStyleSupportsPseudoElements,
    u = l === void 0 ? t.getComputedStyle !== void 0 : l,
    i = t.getComputedStyle,
    s = i === void 0 ? a.getComputedStyle.bind(a) : i,
    d = t.hidden,
    f = d === void 0 ? !1 : d;
  function v(p, y) {
    var R = '';
    if (A(p) && u) {
      var w = s(p, '::before'),
        O = Gi(w);
      R = ''.concat(O, ' ').concat(R);
    }
    var m = gm(p) ? Bm(p) : Z(p.childNodes).concat(sr(p, 'aria-owns'));
    if (
      (m.forEach(function (j) {
        var c = q(j, {
            isEmbeddedInLabel: y.isEmbeddedInLabel,
            isReferenced: !1,
            recursion: !0,
          }),
          K = A(j) ? s(j).getPropertyValue('display') : 'inline',
          Ke = K !== 'inline' ? ' ' : '';
        R += ''.concat(Ke).concat(c).concat(Ke);
      }),
      A(p) && u)
    ) {
      var h = s(p, '::after'),
        E = Gi(h);
      R = ''.concat(R, ' ').concat(E);
    }
    return R.trim();
  }
  function _(p, y) {
    var R = p.getAttributeNode(y);
    return R !== null && !r.has(R) && R.value.trim() !== ''
      ? (r.add(R), R.value)
      : null;
  }
  function P(p) {
    return A(p) ? _(p, 'title') : null;
  }
  function C(p) {
    if (!A(p)) return null;
    if (ym(p)) {
      r.add(p);
      for (var y = Z(p.childNodes), R = 0; R < y.length; R += 1) {
        var w = y[R];
        if (hm(w))
          return q(w, {
            isEmbeddedInLabel: !1,
            isReferenced: !1,
            recursion: !1,
          });
      }
    } else if (vm(p)) {
      r.add(p);
      for (var O = Z(p.childNodes), m = 0; m < O.length; m += 1) {
        var h = O[m];
        if (Cc(h))
          return q(h, {
            isEmbeddedInLabel: !1,
            isReferenced: !1,
            recursion: !1,
          });
      }
    } else if (_m(p)) {
      r.add(p);
      for (var E = Z(p.childNodes), j = 0; j < E.length; j += 1) {
        var c = E[j];
        if (Rm(c)) return c.textContent;
      }
      return null;
    } else if (F(p) === 'img' || F(p) === 'area') {
      var K = _(p, 'alt');
      if (K !== null) return K;
    } else if (fm(p)) {
      var Ke = _(p, 'label');
      if (Ke !== null) return Ke;
    }
    if (
      rr(p) &&
      (p.type === 'button' || p.type === 'submit' || p.type === 'reset')
    ) {
      var be = _(p, 'value');
      if (be !== null) return be;
      if (p.type === 'submit') return 'Submit';
      if (p.type === 'reset') return 'Reset';
    }
    var dt = Am(p);
    if (dt !== null && dt.length !== 0)
      return (
        r.add(p),
        Z(dt)
          .map(function (Mo) {
            return q(Mo, {
              isEmbeddedInLabel: !0,
              isReferenced: !1,
              recursion: !0,
            });
          })
          .filter(function (Mo) {
            return Mo.length > 0;
          })
          .join(' ')
      );
    if (rr(p) && p.type === 'image') {
      var Gt = _(p, 'alt');
      if (Gt !== null) return Gt;
      var Ai = _(p, 'title');
      return Ai !== null ? Ai : 'Submit Query';
    }
    if (ue(p, ['button'])) {
      var Bi = v(p, { isEmbeddedInLabel: !1, isReferenced: !1 });
      if (Bi !== '') return Bi;
    }
    return null;
  }
  function q(p, y) {
    if (r.has(p)) return '';
    if (!f && wm(p, s) && !y.isReferenced) return r.add(p), '';
    var R = A(p) ? p.getAttributeNode('aria-labelledby') : null,
      w = R !== null && !r.has(R) ? sr(p, 'aria-labelledby') : [];
    if (o === 'name' && !y.isReferenced && w.length > 0)
      return (
        r.add(R),
        w
          .map(function (K) {
            return q(K, {
              isEmbeddedInLabel: y.isEmbeddedInLabel,
              isReferenced: !0,
              recursion: !1,
            });
          })
          .join(' ')
      );
    var O = y.recursion && Pm(p) && o === 'name';
    if (!O) {
      var m = ((A(p) && p.getAttribute('aria-label')) || '').trim();
      if (m !== '' && o === 'name') return r.add(p), m;
      if (!qm(p)) {
        var h = C(p);
        if (h !== null) return r.add(p), h;
      }
    }
    if (ue(p, ['menu'])) return r.add(p), '';
    if (O || y.isEmbeddedInLabel || y.isReferenced) {
      if (ue(p, ['combobox', 'listbox'])) {
        r.add(p);
        var E = Om(p);
        return E.length === 0
          ? rr(p)
            ? p.value
            : ''
          : Z(E)
              .map(function (K) {
                return q(K, {
                  isEmbeddedInLabel: y.isEmbeddedInLabel,
                  isReferenced: !1,
                  recursion: !0,
                });
              })
              .join(' ');
      }
      if (wc(p, 'range'))
        return (
          r.add(p),
          p.hasAttribute('aria-valuetext')
            ? p.getAttribute('aria-valuetext')
            : p.hasAttribute('aria-valuenow')
            ? p.getAttribute('aria-valuenow')
            : p.getAttribute('value') || ''
        );
      if (ue(p, ['textbox'])) return r.add(p), Mm(p);
    }
    if ($m(p) || (A(p) && y.isReferenced) || Tm(p) || xm()) {
      var j = v(p, {
        isEmbeddedInLabel: y.isEmbeddedInLabel,
        isReferenced: !1,
      });
      if (j !== '') return r.add(p), j;
    }
    if (p.nodeType === p.TEXT_NODE) return r.add(p), p.textContent || '';
    if (y.recursion)
      return (
        r.add(p),
        v(p, { isEmbeddedInLabel: y.isEmbeddedInLabel, isReferenced: !1 })
      );
    var c = P(p);
    return c !== null ? (r.add(p), c) : (r.add(p), '');
  }
  return Cm(
    q(e, {
      isEmbeddedInLabel: !1,
      isReferenced: o === 'description',
      recursion: !1,
    }),
  );
}
function Rt(e) {
  return (
    (Rt =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == 'function' &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t;
          }),
    Rt(e)
  );
}
function Xi(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t &&
      (a = a.filter(function (n) {
        return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      r.push.apply(r, a);
  }
  return r;
}
function Qi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Xi(Object(r), !0).forEach(function (a) {
          Im(e, a, r[a]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : Xi(Object(r)).forEach(function (a) {
          Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
        });
  }
  return e;
}
function Im(e, t, r) {
  return (
    (t = jm(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function jm(e) {
  var t = Nm(e, 'string');
  return Rt(t) === 'symbol' ? t : String(t);
}
function Nm(e, t) {
  if (Rt(e) !== 'object' || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var a = r.call(e, t || 'default');
    if (Rt(a) !== 'object') return a;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function Tc(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    r = sr(e, 'aria-describedby')
      .map(function (n) {
        return qc(n, Qi(Qi({}, t), {}, { compute: 'description' }));
      })
      .join(' ');
  if (r === '') {
    var a = e.getAttribute('title');
    r = a === null ? '' : a;
  }
  return r;
}
function km(e) {
  return ue(e, [
    'caption',
    'code',
    'deletion',
    'emphasis',
    'generic',
    'insertion',
    'paragraph',
    'presentation',
    'strong',
    'subscript',
    'superscript',
  ]);
}
function zl(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return km(e) ? '' : qc(e, t);
}
var ee = {},
  Tr = {},
  Fe = {},
  $r = {};
Object.defineProperty($r, '__esModule', { value: !0 });
$r.default = void 0;
function Dm() {
  var e = this,
    t = 0,
    r = {
      '@@iterator': function () {
        return r;
      },
      next: function () {
        if (t < e.length) {
          var n = e[t];
          return (t = t + 1), { done: !1, value: n };
        } else return { done: !0 };
      },
    };
  return r;
}
var Lm = Dm;
$r.default = Lm;
Object.defineProperty(Fe, '__esModule', { value: !0 });
Fe.default = Um;
var Fm = Vm($r);
function Vm(e) {
  return e && e.__esModule ? e : { default: e };
}
function cl(e) {
  return (
    (cl =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == 'function' &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t;
          }),
    cl(e)
  );
}
function Um(e, t) {
  return (
    typeof Symbol == 'function' &&
      cl(Symbol.iterator) === 'symbol' &&
      Object.defineProperty(e, Symbol.iterator, { value: Fm.default.bind(t) }),
    e
  );
}
Object.defineProperty(Tr, '__esModule', { value: !0 });
Tr.default = void 0;
var Hm = Wm(Fe);
function Wm(e) {
  return e && e.__esModule ? e : { default: e };
}
function No(e, t) {
  return Gm(e) || Km(e, t) || $c(e, t) || zm();
}
function zm() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Km(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (r != null) {
    var a = [],
      n = !0,
      o = !1,
      l,
      u;
    try {
      for (
        r = r.call(e);
        !(n = (l = r.next()).done) && (a.push(l.value), !(t && a.length === t));
        n = !0
      );
    } catch (i) {
      (o = !0), (u = i);
    } finally {
      try {
        !n && r.return != null && r.return();
      } finally {
        if (o) throw u;
      }
    }
    return a;
  }
}
function Gm(e) {
  if (Array.isArray(e)) return e;
}
function Xm(e, t) {
  var r = (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (!r) {
    if (
      Array.isArray(e) ||
      (r = $c(e)) ||
      (t && e && typeof e.length == 'number')
    ) {
      r && (e = r);
      var a = 0,
        n = function () {};
      return {
        s: n,
        n: function () {
          return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
        },
        e: function (s) {
          throw s;
        },
        f: n,
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o = !0,
    l = !1,
    u;
  return {
    s: function () {
      r = r.call(e);
    },
    n: function () {
      var s = r.next();
      return (o = s.done), s;
    },
    e: function (s) {
      (l = !0), (u = s);
    },
    f: function () {
      try {
        !o && r.return != null && r.return();
      } finally {
        if (l) throw u;
      }
    },
  };
}
function $c(e, t) {
  if (e) {
    if (typeof e == 'string') return Yi(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === 'Object' && e.constructor && (r = e.constructor.name),
      r === 'Map' || r === 'Set')
    )
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Yi(e, t);
  }
}
function Yi(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
  return a;
}
var Xe = [
    ['aria-activedescendant', { type: 'id' }],
    ['aria-atomic', { type: 'boolean' }],
    [
      'aria-autocomplete',
      { type: 'token', values: ['inline', 'list', 'both', 'none'] },
    ],
    ['aria-busy', { type: 'boolean' }],
    ['aria-checked', { type: 'tristate' }],
    ['aria-colcount', { type: 'integer' }],
    ['aria-colindex', { type: 'integer' }],
    ['aria-colspan', { type: 'integer' }],
    ['aria-controls', { type: 'idlist' }],
    [
      'aria-current',
      {
        type: 'token',
        values: ['page', 'step', 'location', 'date', 'time', !0, !1],
      },
    ],
    ['aria-describedby', { type: 'idlist' }],
    ['aria-details', { type: 'id' }],
    ['aria-disabled', { type: 'boolean' }],
    [
      'aria-dropeffect',
      {
        type: 'tokenlist',
        values: ['copy', 'execute', 'link', 'move', 'none', 'popup'],
      },
    ],
    ['aria-errormessage', { type: 'id' }],
    ['aria-expanded', { type: 'boolean', allowundefined: !0 }],
    ['aria-flowto', { type: 'idlist' }],
    ['aria-grabbed', { type: 'boolean', allowundefined: !0 }],
    [
      'aria-haspopup',
      {
        type: 'token',
        values: [!1, !0, 'menu', 'listbox', 'tree', 'grid', 'dialog'],
      },
    ],
    ['aria-hidden', { type: 'boolean', allowundefined: !0 }],
    [
      'aria-invalid',
      { type: 'token', values: ['grammar', !1, 'spelling', !0] },
    ],
    ['aria-keyshortcuts', { type: 'string' }],
    ['aria-label', { type: 'string' }],
    ['aria-labelledby', { type: 'idlist' }],
    ['aria-level', { type: 'integer' }],
    ['aria-live', { type: 'token', values: ['assertive', 'off', 'polite'] }],
    ['aria-modal', { type: 'boolean' }],
    ['aria-multiline', { type: 'boolean' }],
    ['aria-multiselectable', { type: 'boolean' }],
    [
      'aria-orientation',
      { type: 'token', values: ['vertical', 'undefined', 'horizontal'] },
    ],
    ['aria-owns', { type: 'idlist' }],
    ['aria-placeholder', { type: 'string' }],
    ['aria-posinset', { type: 'integer' }],
    ['aria-pressed', { type: 'tristate' }],
    ['aria-readonly', { type: 'boolean' }],
    [
      'aria-relevant',
      { type: 'tokenlist', values: ['additions', 'all', 'removals', 'text'] },
    ],
    ['aria-required', { type: 'boolean' }],
    ['aria-roledescription', { type: 'string' }],
    ['aria-rowcount', { type: 'integer' }],
    ['aria-rowindex', { type: 'integer' }],
    ['aria-rowspan', { type: 'integer' }],
    ['aria-selected', { type: 'boolean', allowundefined: !0 }],
    ['aria-setsize', { type: 'integer' }],
    [
      'aria-sort',
      { type: 'token', values: ['ascending', 'descending', 'none', 'other'] },
    ],
    ['aria-valuemax', { type: 'number' }],
    ['aria-valuemin', { type: 'number' }],
    ['aria-valuenow', { type: 'number' }],
    ['aria-valuetext', { type: 'string' }],
  ],
  dl = {
    entries: function () {
      return Xe;
    },
    forEach: function (t) {
      var r =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null,
        a = Xm(Xe),
        n;
      try {
        for (a.s(); !(n = a.n()).done; ) {
          var o = No(n.value, 2),
            l = o[0],
            u = o[1];
          t.call(r, u, l, Xe);
        }
      } catch (i) {
        a.e(i);
      } finally {
        a.f();
      }
    },
    get: function (t) {
      var r = Xe.find(function (a) {
        return a[0] === t;
      });
      return r && r[1];
    },
    has: function (t) {
      return !!dl.get(t);
    },
    keys: function () {
      return Xe.map(function (t) {
        var r = No(t, 1),
          a = r[0];
        return a;
      });
    },
    values: function () {
      return Xe.map(function (t) {
        var r = No(t, 2),
          a = r[1];
        return a;
      });
    },
  },
  Qm = (0, Hm.default)(dl, dl.entries());
Tr.default = Qm;
var xr = {};
Object.defineProperty(xr, '__esModule', { value: !0 });
xr.default = void 0;
var Ym = Jm(Fe);
function Jm(e) {
  return e && e.__esModule ? e : { default: e };
}
function ko(e, t) {
  return tb(e) || eb(e, t) || xc(e, t) || Zm();
}
function Zm() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function eb(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (r != null) {
    var a = [],
      n = !0,
      o = !1,
      l,
      u;
    try {
      for (
        r = r.call(e);
        !(n = (l = r.next()).done) && (a.push(l.value), !(t && a.length === t));
        n = !0
      );
    } catch (i) {
      (o = !0), (u = i);
    } finally {
      try {
        !n && r.return != null && r.return();
      } finally {
        if (o) throw u;
      }
    }
    return a;
  }
}
function tb(e) {
  if (Array.isArray(e)) return e;
}
function rb(e, t) {
  var r = (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (!r) {
    if (
      Array.isArray(e) ||
      (r = xc(e)) ||
      (t && e && typeof e.length == 'number')
    ) {
      r && (e = r);
      var a = 0,
        n = function () {};
      return {
        s: n,
        n: function () {
          return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
        },
        e: function (s) {
          throw s;
        },
        f: n,
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o = !0,
    l = !1,
    u;
  return {
    s: function () {
      r = r.call(e);
    },
    n: function () {
      var s = r.next();
      return (o = s.done), s;
    },
    e: function (s) {
      (l = !0), (u = s);
    },
    f: function () {
      try {
        !o && r.return != null && r.return();
      } finally {
        if (l) throw u;
      }
    },
  };
}
function xc(e, t) {
  if (e) {
    if (typeof e == 'string') return Ji(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === 'Object' && e.constructor && (r = e.constructor.name),
      r === 'Map' || r === 'Set')
    )
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Ji(e, t);
  }
}
function Ji(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
  return a;
}
var Qe = [
    ['a', { reserved: !1 }],
    ['abbr', { reserved: !1 }],
    ['acronym', { reserved: !1 }],
    ['address', { reserved: !1 }],
    ['applet', { reserved: !1 }],
    ['area', { reserved: !1 }],
    ['article', { reserved: !1 }],
    ['aside', { reserved: !1 }],
    ['audio', { reserved: !1 }],
    ['b', { reserved: !1 }],
    ['base', { reserved: !0 }],
    ['bdi', { reserved: !1 }],
    ['bdo', { reserved: !1 }],
    ['big', { reserved: !1 }],
    ['blink', { reserved: !1 }],
    ['blockquote', { reserved: !1 }],
    ['body', { reserved: !1 }],
    ['br', { reserved: !1 }],
    ['button', { reserved: !1 }],
    ['canvas', { reserved: !1 }],
    ['caption', { reserved: !1 }],
    ['center', { reserved: !1 }],
    ['cite', { reserved: !1 }],
    ['code', { reserved: !1 }],
    ['col', { reserved: !0 }],
    ['colgroup', { reserved: !0 }],
    ['content', { reserved: !1 }],
    ['data', { reserved: !1 }],
    ['datalist', { reserved: !1 }],
    ['dd', { reserved: !1 }],
    ['del', { reserved: !1 }],
    ['details', { reserved: !1 }],
    ['dfn', { reserved: !1 }],
    ['dialog', { reserved: !1 }],
    ['dir', { reserved: !1 }],
    ['div', { reserved: !1 }],
    ['dl', { reserved: !1 }],
    ['dt', { reserved: !1 }],
    ['em', { reserved: !1 }],
    ['embed', { reserved: !1 }],
    ['fieldset', { reserved: !1 }],
    ['figcaption', { reserved: !1 }],
    ['figure', { reserved: !1 }],
    ['font', { reserved: !1 }],
    ['footer', { reserved: !1 }],
    ['form', { reserved: !1 }],
    ['frame', { reserved: !1 }],
    ['frameset', { reserved: !1 }],
    ['h1', { reserved: !1 }],
    ['h2', { reserved: !1 }],
    ['h3', { reserved: !1 }],
    ['h4', { reserved: !1 }],
    ['h5', { reserved: !1 }],
    ['h6', { reserved: !1 }],
    ['head', { reserved: !0 }],
    ['header', { reserved: !1 }],
    ['hgroup', { reserved: !1 }],
    ['hr', { reserved: !1 }],
    ['html', { reserved: !0 }],
    ['i', { reserved: !1 }],
    ['iframe', { reserved: !1 }],
    ['img', { reserved: !1 }],
    ['input', { reserved: !1 }],
    ['ins', { reserved: !1 }],
    ['kbd', { reserved: !1 }],
    ['keygen', { reserved: !1 }],
    ['label', { reserved: !1 }],
    ['legend', { reserved: !1 }],
    ['li', { reserved: !1 }],
    ['link', { reserved: !0 }],
    ['main', { reserved: !1 }],
    ['map', { reserved: !1 }],
    ['mark', { reserved: !1 }],
    ['marquee', { reserved: !1 }],
    ['menu', { reserved: !1 }],
    ['menuitem', { reserved: !1 }],
    ['meta', { reserved: !0 }],
    ['meter', { reserved: !1 }],
    ['nav', { reserved: !1 }],
    ['noembed', { reserved: !0 }],
    ['noscript', { reserved: !0 }],
    ['object', { reserved: !1 }],
    ['ol', { reserved: !1 }],
    ['optgroup', { reserved: !1 }],
    ['option', { reserved: !1 }],
    ['output', { reserved: !1 }],
    ['p', { reserved: !1 }],
    ['param', { reserved: !0 }],
    ['picture', { reserved: !0 }],
    ['pre', { reserved: !1 }],
    ['progress', { reserved: !1 }],
    ['q', { reserved: !1 }],
    ['rp', { reserved: !1 }],
    ['rt', { reserved: !1 }],
    ['rtc', { reserved: !1 }],
    ['ruby', { reserved: !1 }],
    ['s', { reserved: !1 }],
    ['samp', { reserved: !1 }],
    ['script', { reserved: !0 }],
    ['section', { reserved: !1 }],
    ['select', { reserved: !1 }],
    ['small', { reserved: !1 }],
    ['source', { reserved: !0 }],
    ['spacer', { reserved: !1 }],
    ['span', { reserved: !1 }],
    ['strike', { reserved: !1 }],
    ['strong', { reserved: !1 }],
    ['style', { reserved: !0 }],
    ['sub', { reserved: !1 }],
    ['summary', { reserved: !1 }],
    ['sup', { reserved: !1 }],
    ['table', { reserved: !1 }],
    ['tbody', { reserved: !1 }],
    ['td', { reserved: !1 }],
    ['textarea', { reserved: !1 }],
    ['tfoot', { reserved: !1 }],
    ['th', { reserved: !1 }],
    ['thead', { reserved: !1 }],
    ['time', { reserved: !1 }],
    ['title', { reserved: !0 }],
    ['tr', { reserved: !1 }],
    ['track', { reserved: !0 }],
    ['tt', { reserved: !1 }],
    ['u', { reserved: !1 }],
    ['ul', { reserved: !1 }],
    ['var', { reserved: !1 }],
    ['video', { reserved: !1 }],
    ['wbr', { reserved: !1 }],
    ['xmp', { reserved: !1 }],
  ],
  fl = {
    entries: function () {
      return Qe;
    },
    forEach: function (t) {
      var r =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null,
        a = rb(Qe),
        n;
      try {
        for (a.s(); !(n = a.n()).done; ) {
          var o = ko(n.value, 2),
            l = o[0],
            u = o[1];
          t.call(r, u, l, Qe);
        }
      } catch (i) {
        a.e(i);
      } finally {
        a.f();
      }
    },
    get: function (t) {
      var r = Qe.find(function (a) {
        return a[0] === t;
      });
      return r && r[1];
    },
    has: function (t) {
      return !!fl.get(t);
    },
    keys: function () {
      return Qe.map(function (t) {
        var r = ko(t, 1),
          a = r[0];
        return a;
      });
    },
    values: function () {
      return Qe.map(function (t) {
        var r = ko(t, 2),
          a = r[1];
        return a;
      });
    },
  },
  ab = (0, Ym.default)(fl, fl.entries());
xr.default = ab;
var lt = {},
  Mr = {},
  Sr = {};
Object.defineProperty(Sr, '__esModule', { value: !0 });
Sr.default = void 0;
var nb = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{ concept: { name: 'menuitem' }, module: 'HTML' }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'widget']],
  },
  ob = nb;
Sr.default = ob;
var Ar = {};
Object.defineProperty(Ar, '__esModule', { value: !0 });
Ar.default = void 0;
var lb = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: { 'aria-activedescendant': null, 'aria-disabled': null },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'widget']],
  },
  ib = lb;
Ar.default = ib;
var Br = {};
Object.defineProperty(Br, '__esModule', { value: !0 });
Br.default = void 0;
var ub = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: { 'aria-disabled': null },
    relatedConcepts: [{ concept: { name: 'input' }, module: 'XForms' }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'widget']],
  },
  sb = ub;
Br.default = sb;
var Ir = {};
Object.defineProperty(Ir, '__esModule', { value: !0 });
Ir.default = void 0;
var cb = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']],
  },
  db = cb;
Ir.default = db;
var jr = {};
Object.defineProperty(jr, '__esModule', { value: !0 });
jr.default = void 0;
var fb = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-valuemax': null,
      'aria-valuemin': null,
      'aria-valuenow': null,
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure']],
  },
  pb = fb;
jr.default = pb;
var Nr = {};
Object.defineProperty(Nr, '__esModule', { value: !0 });
Nr.default = void 0;
var vb = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: [],
    prohibitedProps: [],
    props: {
      'aria-atomic': null,
      'aria-busy': null,
      'aria-controls': null,
      'aria-current': null,
      'aria-describedby': null,
      'aria-details': null,
      'aria-dropeffect': null,
      'aria-flowto': null,
      'aria-grabbed': null,
      'aria-hidden': null,
      'aria-keyshortcuts': null,
      'aria-label': null,
      'aria-labelledby': null,
      'aria-live': null,
      'aria-owns': null,
      'aria-relevant': null,
      'aria-roledescription': null,
    },
    relatedConcepts: [
      { concept: { name: 'rel' }, module: 'HTML' },
      { concept: { name: 'role' }, module: 'XHTML' },
      { concept: { name: 'type' }, module: 'Dublin Core' },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [],
  },
  mb = vb;
Nr.default = mb;
var kr = {};
Object.defineProperty(kr, '__esModule', { value: !0 });
kr.default = void 0;
var bb = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: [],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [
      { concept: { name: 'frontmatter' }, module: 'DTB' },
      { concept: { name: 'level' }, module: 'DTB' },
      { concept: { name: 'level' }, module: 'SMIL' },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure']],
  },
  yb = bb;
kr.default = yb;
var Dr = {};
Object.defineProperty(Dr, '__esModule', { value: !0 });
Dr.default = void 0;
var hb = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author', 'contents'],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure']],
  },
  gb = hb;
Dr.default = gb;
var Lr = {};
Object.defineProperty(Lr, '__esModule', { value: !0 });
Lr.default = void 0;
var Eb = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: { 'aria-orientation': null },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
      ['roletype', 'widget', 'composite'],
      ['roletype', 'structure', 'section', 'group'],
    ],
  },
  _b = Eb;
Lr.default = _b;
var Fr = {};
Object.defineProperty(Fr, '__esModule', { value: !0 });
Fr.default = void 0;
var Rb = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: [],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype']],
  },
  Cb = Rb;
Fr.default = Cb;
var Vr = {};
Object.defineProperty(Vr, '__esModule', { value: !0 });
Vr.default = void 0;
var wb = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: [],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype']],
  },
  Pb = wb;
Vr.default = Pb;
var Ur = {};
Object.defineProperty(Ur, '__esModule', { value: !0 });
Ur.default = void 0;
var Ob = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: { 'aria-modal': null },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype']],
  },
  qb = Ob;
Ur.default = qb;
Object.defineProperty(Mr, '__esModule', { value: !0 });
Mr.default = void 0;
var Tb = Q(Sr),
  $b = Q(Ar),
  xb = Q(Br),
  Mb = Q(Ir),
  Sb = Q(jr),
  Ab = Q(Nr),
  Bb = Q(kr),
  Ib = Q(Dr),
  jb = Q(Lr),
  Nb = Q(Fr),
  kb = Q(Vr),
  Db = Q(Ur);
function Q(e) {
  return e && e.__esModule ? e : { default: e };
}
var Lb = [
    ['command', Tb.default],
    ['composite', $b.default],
    ['input', xb.default],
    ['landmark', Mb.default],
    ['range', Sb.default],
    ['roletype', Ab.default],
    ['section', Bb.default],
    ['sectionhead', Ib.default],
    ['select', jb.default],
    ['structure', Nb.default],
    ['widget', kb.default],
    ['window', Db.default],
  ],
  Fb = Lb;
Mr.default = Fb;
var Hr = {},
  Wr = {};
Object.defineProperty(Wr, '__esModule', { value: !0 });
Wr.default = void 0;
var Vb = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: { 'aria-atomic': 'true', 'aria-live': 'assertive' },
    relatedConcepts: [{ concept: { name: 'alert' }, module: 'XForms' }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']],
  },
  Ub = Vb;
Wr.default = Ub;
var zr = {};
Object.defineProperty(zr, '__esModule', { value: !0 });
zr.default = void 0;
var Hb = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{ concept: { name: 'alert' }, module: 'XForms' }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
      ['roletype', 'structure', 'section', 'alert'],
      ['roletype', 'window', 'dialog'],
    ],
  },
  Wb = Hb;
zr.default = Wb;
var Kr = {};
Object.defineProperty(Kr, '__esModule', { value: !0 });
Kr.default = void 0;
var zb = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-activedescendant': null,
      'aria-disabled': null,
      'aria-errormessage': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-invalid': null,
    },
    relatedConcepts: [
      { concept: { name: 'Device Independence Delivery Unit' } },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure']],
  },
  Kb = zb;
Kr.default = Kb;
var Gr = {};
Object.defineProperty(Gr, '__esModule', { value: !0 });
Gr.default = void 0;
var Gb = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: { 'aria-posinset': null, 'aria-setsize': null },
    relatedConcepts: [{ concept: { name: 'article' }, module: 'HTML' }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'document']],
  },
  Xb = Gb;
Gr.default = Xb;
var Xr = {};
Object.defineProperty(Xr, '__esModule', { value: !0 });
Xr.default = void 0;
var Qb = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [
      {
        concept: {
          constraints: ['direct descendant of document'],
          name: 'header',
        },
        module: 'HTML',
      },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section', 'landmark']],
  },
  Yb = Qb;
Xr.default = Yb;
var Qr = {};
Object.defineProperty(Qr, '__esModule', { value: !0 });
Qr.default = void 0;
var Jb = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']],
  },
  Zb = Jb;
Qr.default = Zb;
var Yr = {};
Object.defineProperty(Yr, '__esModule', { value: !0 });
Yr.default = void 0;
var ey = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ['author', 'contents'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-pressed': null,
    },
    relatedConcepts: [
      {
        concept: {
          attributes: [
            { constraints: ['set'], name: 'aria-pressed' },
            { name: 'type', value: 'checkbox' },
          ],
          name: 'input',
        },
        module: 'HTML',
      },
      {
        concept: {
          attributes: [{ name: 'aria-expanded', value: 'false' }],
          name: 'summary',
        },
        module: 'HTML',
      },
      {
        concept: {
          attributes: [{ name: 'aria-expanded', value: 'true' }],
          constraints: [
            'direct descendant of details element with the open attribute defined',
          ],
          name: 'summary',
        },
        module: 'HTML',
      },
      {
        concept: {
          attributes: [{ name: 'type', value: 'button' }],
          name: 'input',
        },
        module: 'HTML',
      },
      {
        concept: {
          attributes: [{ name: 'type', value: 'image' }],
          name: 'input',
        },
        module: 'HTML',
      },
      {
        concept: {
          attributes: [{ name: 'type', value: 'reset' }],
          name: 'input',
        },
        module: 'HTML',
      },
      {
        concept: {
          attributes: [{ name: 'type', value: 'submit' }],
          name: 'input',
        },
        module: 'HTML',
      },
      { concept: { name: 'button' }, module: 'HTML' },
      { concept: { name: 'trigger' }, module: 'XForms' },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'widget', 'command']],
  },
  ty = ey;
Yr.default = ty;
var Jr = {};
Object.defineProperty(Jr, '__esModule', { value: !0 });
Jr.default = void 0;
var ry = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['prohibited'],
    prohibitedProps: ['aria-label', 'aria-labelledby'],
    props: {},
    relatedConcepts: [],
    requireContextRole: ['figure', 'grid', 'table'],
    requiredContextRole: ['figure', 'grid', 'table'],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']],
  },
  ay = ry;
Jr.default = ay;
var Zr = {};
Object.defineProperty(Zr, '__esModule', { value: !0 });
Zr.default = void 0;
var ny = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author', 'contents'],
    prohibitedProps: [],
    props: {
      'aria-colindex': null,
      'aria-colspan': null,
      'aria-rowindex': null,
      'aria-rowspan': null,
    },
    relatedConcepts: [
      {
        concept: { constraints: ['descendant of table'], name: 'td' },
        module: 'HTML',
      },
    ],
    requireContextRole: ['row'],
    requiredContextRole: ['row'],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']],
  },
  oy = ny;
Zr.default = oy;
var ea = {};
Object.defineProperty(ea, '__esModule', { value: !0 });
ea.default = void 0;
var ly = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ['author', 'contents'],
    prohibitedProps: [],
    props: {
      'aria-checked': null,
      'aria-errormessage': null,
      'aria-expanded': null,
      'aria-invalid': null,
      'aria-readonly': null,
      'aria-required': null,
    },
    relatedConcepts: [
      {
        concept: {
          attributes: [{ name: 'type', value: 'checkbox' }],
          name: 'input',
        },
        module: 'HTML',
      },
      { concept: { name: 'option' }, module: 'ARIA' },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: { 'aria-checked': null },
    superClass: [['roletype', 'widget', 'input']],
  },
  iy = ly;
ea.default = iy;
var ta = {};
Object.defineProperty(ta, '__esModule', { value: !0 });
ta.default = void 0;
var uy = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['prohibited'],
    prohibitedProps: ['aria-label', 'aria-labelledby'],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']],
  },
  sy = uy;
ta.default = sy;
var ra = {};
Object.defineProperty(ra, '__esModule', { value: !0 });
ra.default = void 0;
var cy = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author', 'contents'],
    prohibitedProps: [],
    props: { 'aria-sort': null },
    relatedConcepts: [
      {
        attributes: [{ name: 'scope', value: 'col' }],
        concept: { name: 'th' },
        module: 'HTML',
      },
    ],
    requireContextRole: ['row'],
    requiredContextRole: ['row'],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
      ['roletype', 'structure', 'section', 'cell'],
      ['roletype', 'structure', 'section', 'cell', 'gridcell'],
      ['roletype', 'widget', 'gridcell'],
      ['roletype', 'structure', 'sectionhead'],
    ],
  },
  dy = cy;
ra.default = dy;
var aa = {};
Object.defineProperty(aa, '__esModule', { value: !0 });
aa.default = void 0;
var fy = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-activedescendant': null,
      'aria-autocomplete': null,
      'aria-errormessage': null,
      'aria-invalid': null,
      'aria-readonly': null,
      'aria-required': null,
      'aria-expanded': 'false',
      'aria-haspopup': 'listbox',
    },
    relatedConcepts: [
      {
        concept: {
          attributes: [
            { constraints: ['set'], name: 'list' },
            { name: 'type', value: 'email' },
          ],
          name: 'input',
        },
        module: 'HTML',
      },
      {
        concept: {
          attributes: [
            { constraints: ['set'], name: 'list' },
            { name: 'type', value: 'search' },
          ],
          name: 'input',
        },
        module: 'HTML',
      },
      {
        concept: {
          attributes: [
            { constraints: ['set'], name: 'list' },
            { name: 'type', value: 'tel' },
          ],
          name: 'input',
        },
        module: 'HTML',
      },
      {
        concept: {
          attributes: [
            { constraints: ['set'], name: 'list' },
            { name: 'type', value: 'text' },
          ],
          name: 'input',
        },
        module: 'HTML',
      },
      {
        concept: {
          attributes: [
            { constraints: ['set'], name: 'list' },
            { name: 'type', value: 'url' },
          ],
          name: 'input',
        },
        module: 'HTML',
      },
      {
        concept: {
          attributes: [
            { constraints: ['set'], name: 'list' },
            { name: 'type', value: 'url' },
          ],
          name: 'input',
        },
        module: 'HTML',
      },
      {
        concept: {
          attributes: [
            { constraints: ['undefined'], name: 'multiple' },
            { constraints: ['undefined'], name: 'size' },
          ],
          name: 'select',
        },
        module: 'HTML',
      },
      {
        concept: {
          attributes: [
            { constraints: ['undefined'], name: 'multiple' },
            { name: 'size', value: 1 },
          ],
          name: 'select',
        },
        module: 'HTML',
      },
      { concept: { name: 'select' }, module: 'XForms' },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: { 'aria-controls': null, 'aria-expanded': 'false' },
    superClass: [['roletype', 'widget', 'input']],
  },
  py = fy;
aa.default = py;
var na = {};
Object.defineProperty(na, '__esModule', { value: !0 });
na.default = void 0;
var vy = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{ concept: { name: 'aside' }, module: 'HTML' }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section', 'landmark']],
  },
  my = vy;
na.default = my;
var oa = {};
Object.defineProperty(oa, '__esModule', { value: !0 });
oa.default = void 0;
var by = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [
      {
        concept: {
          constraints: ['direct descendant of document'],
          name: 'footer',
        },
        module: 'HTML',
      },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section', 'landmark']],
  },
  yy = by;
oa.default = yy;
var la = {};
Object.defineProperty(la, '__esModule', { value: !0 });
la.default = void 0;
var hy = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{ concept: { name: 'dd' }, module: 'HTML' }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']],
  },
  gy = hy;
la.default = gy;
var ia = {};
Object.defineProperty(ia, '__esModule', { value: !0 });
ia.default = void 0;
var Ey = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['prohibited'],
    prohibitedProps: ['aria-label', 'aria-labelledby'],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']],
  },
  _y = Ey;
ia.default = _y;
var ua = {};
Object.defineProperty(ua, '__esModule', { value: !0 });
ua.default = void 0;
var Ry = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{ concept: { name: 'dialog' }, module: 'HTML' }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'window']],
  },
  Cy = Ry;
ua.default = Cy;
var sa = {};
Object.defineProperty(sa, '__esModule', { value: !0 });
sa.default = void 0;
var wy = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{ module: 'DAISY Guide' }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section', 'list']],
  },
  Py = wy;
sa.default = Py;
var ca = {};
Object.defineProperty(ca, '__esModule', { value: !0 });
ca.default = void 0;
var Oy = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [
      { concept: { name: 'Device Independence Delivery Unit' } },
      { concept: { name: 'body' }, module: 'HTML' },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure']],
  },
  qy = Oy;
ca.default = qy;
var da = {};
Object.defineProperty(da, '__esModule', { value: !0 });
da.default = void 0;
var Ty = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['prohibited'],
    prohibitedProps: ['aria-label', 'aria-labelledby'],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']],
  },
  $y = Ty;
da.default = $y;
var fa = {};
Object.defineProperty(fa, '__esModule', { value: !0 });
fa.default = void 0;
var xy = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [['article']],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section', 'list']],
  },
  My = xy;
fa.default = My;
var pa = {};
Object.defineProperty(pa, '__esModule', { value: !0 });
pa.default = void 0;
var Sy = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{ concept: { name: 'figure' }, module: 'HTML' }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']],
  },
  Ay = Sy;
pa.default = Ay;
var va = {};
Object.defineProperty(va, '__esModule', { value: !0 });
va.default = void 0;
var By = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [
      {
        concept: {
          attributes: [{ constraints: ['set'], name: 'aria-label' }],
          name: 'form',
        },
        module: 'HTML',
      },
      {
        concept: {
          attributes: [{ constraints: ['set'], name: 'aria-labelledby' }],
          name: 'form',
        },
        module: 'HTML',
      },
      {
        concept: {
          attributes: [{ constraints: ['set'], name: 'name' }],
          name: 'form',
        },
        module: 'HTML',
      },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section', 'landmark']],
  },
  Iy = By;
va.default = Iy;
var ma = {};
Object.defineProperty(ma, '__esModule', { value: !0 });
ma.default = void 0;
var jy = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['prohibited'],
    prohibitedProps: ['aria-label', 'aria-labelledby'],
    props: {},
    relatedConcepts: [
      { concept: { name: 'span' }, module: 'HTML' },
      { concept: { name: 'div' }, module: 'HTML' },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure']],
  },
  Ny = jy;
ma.default = Ny;
var ba = {};
Object.defineProperty(ba, '__esModule', { value: !0 });
ba.default = void 0;
var ky = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: { 'aria-multiselectable': null, 'aria-readonly': null },
    relatedConcepts: [
      {
        concept: {
          attributes: [{ name: 'role', value: 'grid' }],
          name: 'table',
        },
        module: 'HTML',
      },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [['row'], ['row', 'rowgroup']],
    requiredProps: {},
    superClass: [
      ['roletype', 'widget', 'composite'],
      ['roletype', 'structure', 'section', 'table'],
    ],
  },
  Dy = ky;
ba.default = Dy;
var ya = {};
Object.defineProperty(ya, '__esModule', { value: !0 });
ya.default = void 0;
var Ly = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author', 'contents'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-errormessage': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-invalid': null,
      'aria-readonly': null,
      'aria-required': null,
      'aria-selected': null,
    },
    relatedConcepts: [
      {
        concept: {
          attributes: [{ name: 'role', value: 'gridcell' }],
          name: 'td',
        },
        module: 'HTML',
      },
    ],
    requireContextRole: ['row'],
    requiredContextRole: ['row'],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
      ['roletype', 'structure', 'section', 'cell'],
      ['roletype', 'widget'],
    ],
  },
  Fy = Ly;
ya.default = Fy;
var ha = {};
Object.defineProperty(ha, '__esModule', { value: !0 });
ha.default = void 0;
var Vy = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: { 'aria-activedescendant': null, 'aria-disabled': null },
    relatedConcepts: [
      { concept: { name: 'details' }, module: 'HTML' },
      { concept: { name: 'fieldset' }, module: 'HTML' },
      { concept: { name: 'optgroup' }, module: 'HTML' },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']],
  },
  Uy = Vy;
ha.default = Uy;
var ga = {};
Object.defineProperty(ga, '__esModule', { value: !0 });
ga.default = void 0;
var Hy = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author', 'contents'],
    prohibitedProps: [],
    props: { 'aria-level': '2' },
    relatedConcepts: [
      { concept: { name: 'h1' }, module: 'HTML' },
      { concept: { name: 'h2' }, module: 'HTML' },
      { concept: { name: 'h3' }, module: 'HTML' },
      { concept: { name: 'h4' }, module: 'HTML' },
      { concept: { name: 'h5' }, module: 'HTML' },
      { concept: { name: 'h6' }, module: 'HTML' },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: { 'aria-level': '2' },
    superClass: [['roletype', 'structure', 'sectionhead']],
  },
  Wy = Hy;
ga.default = Wy;
var Ea = {};
Object.defineProperty(Ea, '__esModule', { value: !0 });
Ea.default = void 0;
var zy = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [
      {
        concept: {
          attributes: [{ constraints: ['set'], name: 'alt' }],
          name: 'img',
        },
        module: 'HTML',
      },
      {
        concept: {
          attributes: [{ constraints: ['undefined'], name: 'alt' }],
          name: 'img',
        },
        module: 'HTML',
      },
      { concept: { name: 'imggroup' }, module: 'DTB' },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']],
  },
  Ky = zy;
Ea.default = Ky;
var _a = {};
Object.defineProperty(_a, '__esModule', { value: !0 });
_a.default = void 0;
var Gy = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['prohibited'],
    prohibitedProps: ['aria-label', 'aria-labelledby'],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']],
  },
  Xy = Gy;
_a.default = Xy;
var Ra = {};
Object.defineProperty(Ra, '__esModule', { value: !0 });
Ra.default = void 0;
var Qy = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author', 'contents'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-expanded': null,
      'aria-haspopup': null,
    },
    relatedConcepts: [
      {
        concept: { attributes: [{ name: 'href' }], name: 'a' },
        module: 'HTML',
      },
      {
        concept: { attributes: [{ name: 'href' }], name: 'area' },
        module: 'HTML',
      },
      {
        concept: { attributes: [{ name: 'href' }], name: 'link' },
        module: 'HTML',
      },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'widget', 'command']],
  },
  Yy = Qy;
Ra.default = Yy;
var Ca = {};
Object.defineProperty(Ca, '__esModule', { value: !0 });
Ca.default = void 0;
var Jy = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [
      { concept: { name: 'menu' }, module: 'HTML' },
      { concept: { name: 'ol' }, module: 'HTML' },
      { concept: { name: 'ul' }, module: 'HTML' },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [['listitem']],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']],
  },
  Zy = Jy;
Ca.default = Zy;
var wa = {};
Object.defineProperty(wa, '__esModule', { value: !0 });
wa.default = void 0;
var eh = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-errormessage': null,
      'aria-expanded': null,
      'aria-invalid': null,
      'aria-multiselectable': null,
      'aria-readonly': null,
      'aria-required': null,
      'aria-orientation': 'vertical',
    },
    relatedConcepts: [
      {
        concept: {
          attributes: [
            { constraints: ['>1'], name: 'size' },
            { name: 'multiple' },
          ],
          name: 'select',
        },
        module: 'HTML',
      },
      {
        concept: {
          attributes: [{ constraints: ['>1'], name: 'size' }],
          name: 'select',
        },
        module: 'HTML',
      },
      {
        concept: { attributes: [{ name: 'multiple' }], name: 'select' },
        module: 'HTML',
      },
      { concept: { name: 'datalist' }, module: 'HTML' },
      { concept: { name: 'list' }, module: 'ARIA' },
      { concept: { name: 'select' }, module: 'XForms' },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [['option', 'group'], ['option']],
    requiredProps: {},
    superClass: [
      ['roletype', 'widget', 'composite', 'select'],
      ['roletype', 'structure', 'section', 'group', 'select'],
    ],
  },
  th = eh;
wa.default = th;
var Pa = {};
Object.defineProperty(Pa, '__esModule', { value: !0 });
Pa.default = void 0;
var rh = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: { 'aria-level': null, 'aria-posinset': null, 'aria-setsize': null },
    relatedConcepts: [
      {
        concept: {
          constraints: ['direct descendant of ol, ul or menu'],
          name: 'li',
        },
        module: 'HTML',
      },
      { concept: { name: 'item' }, module: 'XForms' },
    ],
    requireContextRole: ['directory', 'list'],
    requiredContextRole: ['directory', 'list'],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']],
  },
  ah = rh;
Pa.default = ah;
var Oa = {};
Object.defineProperty(Oa, '__esModule', { value: !0 });
Oa.default = void 0;
var nh = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: { 'aria-live': 'polite' },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']],
  },
  oh = nh;
Oa.default = oh;
var qa = {};
Object.defineProperty(qa, '__esModule', { value: !0 });
qa.default = void 0;
var lh = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{ concept: { name: 'main' }, module: 'HTML' }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section', 'landmark']],
  },
  ih = lh;
qa.default = ih;
var Ta = {};
Object.defineProperty(Ta, '__esModule', { value: !0 });
Ta.default = void 0;
var uh = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']],
  },
  sh = uh;
Ta.default = sh;
var $a = {};
Object.defineProperty($a, '__esModule', { value: !0 });
$a.default = void 0;
var ch = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{ concept: { name: 'math' }, module: 'HTML' }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']],
  },
  dh = ch;
$a.default = dh;
var xa = {};
Object.defineProperty(xa, '__esModule', { value: !0 });
xa.default = void 0;
var fh = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: { 'aria-orientation': 'vertical' },
    relatedConcepts: [
      { concept: { name: 'MENU' }, module: 'JAPI' },
      { concept: { name: 'list' }, module: 'ARIA' },
      { concept: { name: 'select' }, module: 'XForms' },
      { concept: { name: 'sidebar' }, module: 'DTB' },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [
      ['menuitem', 'group'],
      ['menuitemradio', 'group'],
      ['menuitemcheckbox', 'group'],
      ['menuitem'],
      ['menuitemcheckbox'],
      ['menuitemradio'],
    ],
    requiredProps: {},
    superClass: [
      ['roletype', 'widget', 'composite', 'select'],
      ['roletype', 'structure', 'section', 'group', 'select'],
    ],
  },
  ph = fh;
xa.default = ph;
var Ma = {};
Object.defineProperty(Ma, '__esModule', { value: !0 });
Ma.default = void 0;
var vh = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: { 'aria-orientation': 'horizontal' },
    relatedConcepts: [{ concept: { name: 'toolbar' }, module: 'ARIA' }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [
      ['menuitem', 'group'],
      ['menuitemradio', 'group'],
      ['menuitemcheckbox', 'group'],
      ['menuitem'],
      ['menuitemcheckbox'],
      ['menuitemradio'],
    ],
    requiredProps: {},
    superClass: [
      ['roletype', 'widget', 'composite', 'select', 'menu'],
      ['roletype', 'structure', 'section', 'group', 'select', 'menu'],
    ],
  },
  mh = vh;
Ma.default = mh;
var Sa = {};
Object.defineProperty(Sa, '__esModule', { value: !0 });
Sa.default = void 0;
var bh = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author', 'contents'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-posinset': null,
      'aria-setsize': null,
    },
    relatedConcepts: [
      { concept: { name: 'MENU_ITEM' }, module: 'JAPI' },
      { concept: { name: 'listitem' }, module: 'ARIA' },
      { concept: { name: 'menuitem' }, module: 'HTML' },
      { concept: { name: 'option' }, module: 'ARIA' },
    ],
    requireContextRole: ['group', 'menu', 'menubar'],
    requiredContextRole: ['group', 'menu', 'menubar'],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'widget', 'command']],
  },
  yh = bh;
Sa.default = yh;
var Aa = {};
Object.defineProperty(Aa, '__esModule', { value: !0 });
Aa.default = void 0;
var hh = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ['author', 'contents'],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{ concept: { name: 'menuitem' }, module: 'ARIA' }],
    requireContextRole: ['group', 'menu', 'menubar'],
    requiredContextRole: ['group', 'menu', 'menubar'],
    requiredOwnedElements: [],
    requiredProps: { 'aria-checked': null },
    superClass: [
      ['roletype', 'widget', 'input', 'checkbox'],
      ['roletype', 'widget', 'command', 'menuitem'],
    ],
  },
  gh = hh;
Aa.default = gh;
var Ba = {};
Object.defineProperty(Ba, '__esModule', { value: !0 });
Ba.default = void 0;
var Eh = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ['author', 'contents'],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{ concept: { name: 'menuitem' }, module: 'ARIA' }],
    requireContextRole: ['group', 'menu', 'menubar'],
    requiredContextRole: ['group', 'menu', 'menubar'],
    requiredOwnedElements: [],
    requiredProps: { 'aria-checked': null },
    superClass: [
      ['roletype', 'widget', 'input', 'checkbox', 'menuitemcheckbox'],
      ['roletype', 'widget', 'command', 'menuitem', 'menuitemcheckbox'],
      ['roletype', 'widget', 'input', 'radio'],
    ],
  },
  _h = Eh;
Ba.default = _h;
var Ia = {};
Object.defineProperty(Ia, '__esModule', { value: !0 });
Ia.default = void 0;
var Rh = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-valuetext': null,
      'aria-valuemax': '100',
      'aria-valuemin': '0',
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: { 'aria-valuenow': null },
    superClass: [['roletype', 'structure', 'range']],
  },
  Ch = Rh;
Ia.default = Ch;
var ja = {};
Object.defineProperty(ja, '__esModule', { value: !0 });
ja.default = void 0;
var wh = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{ concept: { name: 'nav' }, module: 'HTML' }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section', 'landmark']],
  },
  Ph = wh;
ja.default = Ph;
var Na = {};
Object.defineProperty(Na, '__esModule', { value: !0 });
Na.default = void 0;
var Oh = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: [],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [],
  },
  qh = Oh;
Na.default = qh;
var ka = {};
Object.defineProperty(ka, '__esModule', { value: !0 });
ka.default = void 0;
var Th = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']],
  },
  $h = Th;
ka.default = $h;
var Da = {};
Object.defineProperty(Da, '__esModule', { value: !0 });
Da.default = void 0;
var xh = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ['author', 'contents'],
    prohibitedProps: [],
    props: {
      'aria-checked': null,
      'aria-posinset': null,
      'aria-setsize': null,
      'aria-selected': 'false',
    },
    relatedConcepts: [
      { concept: { name: 'item' }, module: 'XForms' },
      { concept: { name: 'listitem' }, module: 'ARIA' },
      { concept: { name: 'option' }, module: 'HTML' },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: { 'aria-selected': 'false' },
    superClass: [['roletype', 'widget', 'input']],
  },
  Mh = xh;
Da.default = Mh;
var La = {};
Object.defineProperty(La, '__esModule', { value: !0 });
La.default = void 0;
var Sh = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['prohibited'],
    prohibitedProps: ['aria-label', 'aria-labelledby'],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']],
  },
  Ah = Sh;
La.default = Ah;
var Fa = {};
Object.defineProperty(Fa, '__esModule', { value: !0 });
Fa.default = void 0;
var Bh = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['prohibited'],
    prohibitedProps: ['aria-label', 'aria-labelledby'],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure']],
  },
  Ih = Bh;
Fa.default = Ih;
var Va = {};
Object.defineProperty(Va, '__esModule', { value: !0 });
Va.default = void 0;
var jh = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: { 'aria-valuetext': null },
    relatedConcepts: [
      { concept: { name: 'progress' }, module: 'HTML' },
      { concept: { name: 'status' }, module: 'ARIA' },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
      ['roletype', 'structure', 'range'],
      ['roletype', 'widget'],
    ],
  },
  Nh = jh;
Va.default = Nh;
var Ua = {};
Object.defineProperty(Ua, '__esModule', { value: !0 });
Ua.default = void 0;
var kh = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ['author', 'contents'],
    prohibitedProps: [],
    props: {
      'aria-checked': null,
      'aria-posinset': null,
      'aria-setsize': null,
    },
    relatedConcepts: [
      {
        concept: {
          attributes: [{ name: 'type', value: 'radio' }],
          name: 'input',
        },
        module: 'HTML',
      },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: { 'aria-checked': null },
    superClass: [['roletype', 'widget', 'input']],
  },
  Dh = kh;
Ua.default = Dh;
var Ha = {};
Object.defineProperty(Ha, '__esModule', { value: !0 });
Ha.default = void 0;
var Lh = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-errormessage': null,
      'aria-invalid': null,
      'aria-readonly': null,
      'aria-required': null,
    },
    relatedConcepts: [{ concept: { name: 'list' }, module: 'ARIA' }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [['radio']],
    requiredProps: {},
    superClass: [
      ['roletype', 'widget', 'composite', 'select'],
      ['roletype', 'structure', 'section', 'group', 'select'],
    ],
  },
  Fh = Lh;
Ha.default = Fh;
var Wa = {};
Object.defineProperty(Wa, '__esModule', { value: !0 });
Wa.default = void 0;
var Vh = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [
      {
        concept: {
          attributes: [{ constraints: ['set'], name: 'aria-label' }],
          name: 'section',
        },
        module: 'HTML',
      },
      {
        concept: {
          attributes: [{ constraints: ['set'], name: 'aria-labelledby' }],
          name: 'section',
        },
        module: 'HTML',
      },
      { concept: { name: 'Device Independence Glossart perceivable unit' } },
      { concept: { name: 'frame' }, module: 'HTML' },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section', 'landmark']],
  },
  Uh = Vh;
Wa.default = Uh;
var za = {};
Object.defineProperty(za, '__esModule', { value: !0 });
za.default = void 0;
var Hh = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author', 'contents'],
    prohibitedProps: [],
    props: {
      'aria-colindex': null,
      'aria-expanded': null,
      'aria-level': null,
      'aria-posinset': null,
      'aria-rowindex': null,
      'aria-selected': null,
      'aria-setsize': null,
    },
    relatedConcepts: [{ concept: { name: 'tr' }, module: 'HTML' }],
    requireContextRole: ['grid', 'rowgroup', 'table', 'treegrid'],
    requiredContextRole: ['grid', 'rowgroup', 'table', 'treegrid'],
    requiredOwnedElements: [
      ['cell'],
      ['columnheader'],
      ['gridcell'],
      ['rowheader'],
    ],
    requiredProps: {},
    superClass: [
      ['roletype', 'structure', 'section', 'group'],
      ['roletype', 'widget'],
    ],
  },
  Wh = Hh;
za.default = Wh;
var Ka = {};
Object.defineProperty(Ka, '__esModule', { value: !0 });
Ka.default = void 0;
var zh = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author', 'contents'],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [
      { concept: { name: 'tbody' }, module: 'HTML' },
      { concept: { name: 'tfoot' }, module: 'HTML' },
      { concept: { name: 'thead' }, module: 'HTML' },
    ],
    requireContextRole: ['grid', 'table', 'treegrid'],
    requiredContextRole: ['grid', 'table', 'treegrid'],
    requiredOwnedElements: [['row']],
    requiredProps: {},
    superClass: [['roletype', 'structure']],
  },
  Kh = zh;
Ka.default = Kh;
var Ga = {};
Object.defineProperty(Ga, '__esModule', { value: !0 });
Ga.default = void 0;
var Gh = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author', 'contents'],
    prohibitedProps: [],
    props: { 'aria-sort': null },
    relatedConcepts: [
      {
        concept: { attributes: [{ name: 'scope', value: 'row' }], name: 'th' },
        module: 'HTML',
      },
      {
        concept: {
          attributes: [{ name: 'scope', value: 'rowgroup' }],
          name: 'th',
        },
        module: 'HTML',
      },
    ],
    requireContextRole: ['row', 'rowgroup'],
    requiredContextRole: ['row', 'rowgroup'],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
      ['roletype', 'structure', 'section', 'cell'],
      ['roletype', 'structure', 'section', 'cell', 'gridcell'],
      ['roletype', 'widget', 'gridcell'],
      ['roletype', 'structure', 'sectionhead'],
    ],
  },
  Xh = Gh;
Ga.default = Xh;
var Xa = {};
Object.defineProperty(Xa, '__esModule', { value: !0 });
Xa.default = void 0;
var Qh = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-valuetext': null,
      'aria-orientation': 'vertical',
      'aria-valuemax': '100',
      'aria-valuemin': '0',
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: { 'aria-controls': null, 'aria-valuenow': null },
    superClass: [
      ['roletype', 'structure', 'range'],
      ['roletype', 'widget'],
    ],
  },
  Yh = Qh;
Xa.default = Yh;
var Qa = {};
Object.defineProperty(Qa, '__esModule', { value: !0 });
Qa.default = void 0;
var Jh = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section', 'landmark']],
  },
  Zh = Jh;
Qa.default = Zh;
var Ya = {};
Object.defineProperty(Ya, '__esModule', { value: !0 });
Ya.default = void 0;
var eg = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [
      {
        concept: {
          attributes: [
            { constraints: ['undefined'], name: 'list' },
            { name: 'type', value: 'search' },
          ],
          name: 'input',
        },
        module: 'HTML',
      },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'widget', 'input', 'textbox']],
  },
  tg = eg;
Ya.default = tg;
var Ja = {};
Object.defineProperty(Ja, '__esModule', { value: !0 });
Ja.default = void 0;
var rg = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-orientation': 'horizontal',
      'aria-valuemax': '100',
      'aria-valuemin': '0',
      'aria-valuenow': null,
      'aria-valuetext': null,
    },
    relatedConcepts: [{ concept: { name: 'hr' }, module: 'HTML' }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure']],
  },
  ag = rg;
Ja.default = ag;
var Za = {};
Object.defineProperty(Za, '__esModule', { value: !0 });
Za.default = void 0;
var ng = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-errormessage': null,
      'aria-haspopup': null,
      'aria-invalid': null,
      'aria-readonly': null,
      'aria-valuetext': null,
      'aria-orientation': 'horizontal',
      'aria-valuemax': '100',
      'aria-valuemin': '0',
    },
    relatedConcepts: [
      {
        concept: {
          attributes: [{ name: 'type', value: 'range' }],
          name: 'input',
        },
        module: 'HTML',
      },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: { 'aria-valuenow': null },
    superClass: [
      ['roletype', 'widget', 'input'],
      ['roletype', 'structure', 'range'],
    ],
  },
  og = ng;
Za.default = og;
var en = {};
Object.defineProperty(en, '__esModule', { value: !0 });
en.default = void 0;
var lg = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-errormessage': null,
      'aria-invalid': null,
      'aria-readonly': null,
      'aria-required': null,
      'aria-valuetext': null,
      'aria-valuenow': '0',
    },
    relatedConcepts: [
      {
        concept: {
          attributes: [{ name: 'type', value: 'number' }],
          name: 'input',
        },
        module: 'HTML',
      },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
      ['roletype', 'widget', 'composite'],
      ['roletype', 'widget', 'input'],
      ['roletype', 'structure', 'range'],
    ],
  },
  ig = lg;
en.default = ig;
var tn = {};
Object.defineProperty(tn, '__esModule', { value: !0 });
tn.default = void 0;
var ug = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: { 'aria-atomic': 'true', 'aria-live': 'polite' },
    relatedConcepts: [{ concept: { name: 'output' }, module: 'HTML' }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']],
  },
  sg = ug;
tn.default = sg;
var rn = {};
Object.defineProperty(rn, '__esModule', { value: !0 });
rn.default = void 0;
var cg = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['prohibited'],
    prohibitedProps: ['aria-label', 'aria-labelledby'],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']],
  },
  dg = cg;
rn.default = dg;
var an = {};
Object.defineProperty(an, '__esModule', { value: !0 });
an.default = void 0;
var fg = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['prohibited'],
    prohibitedProps: ['aria-label', 'aria-labelledby'],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']],
  },
  pg = fg;
an.default = pg;
var nn = {};
Object.defineProperty(nn, '__esModule', { value: !0 });
nn.default = void 0;
var vg = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['prohibited'],
    prohibitedProps: ['aria-label', 'aria-labelledby'],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']],
  },
  mg = vg;
nn.default = mg;
var on = {};
Object.defineProperty(on, '__esModule', { value: !0 });
on.default = void 0;
var bg = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ['author', 'contents'],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{ concept: { name: 'button' }, module: 'ARIA' }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: { 'aria-checked': null },
    superClass: [['roletype', 'widget', 'input', 'checkbox']],
  },
  yg = bg;
on.default = yg;
var ln = {};
Object.defineProperty(ln, '__esModule', { value: !0 });
ln.default = void 0;
var hg = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ['author', 'contents'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-posinset': null,
      'aria-setsize': null,
      'aria-selected': 'false',
    },
    relatedConcepts: [],
    requireContextRole: ['tablist'],
    requiredContextRole: ['tablist'],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
      ['roletype', 'structure', 'sectionhead'],
      ['roletype', 'widget'],
    ],
  },
  gg = hg;
ln.default = gg;
var un = {};
Object.defineProperty(un, '__esModule', { value: !0 });
un.default = void 0;
var Eg = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: { 'aria-colcount': null, 'aria-rowcount': null },
    relatedConcepts: [{ concept: { name: 'table' }, module: 'HTML' }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [['row'], ['row', 'rowgroup']],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']],
  },
  _g = Eg;
un.default = _g;
var sn = {};
Object.defineProperty(sn, '__esModule', { value: !0 });
sn.default = void 0;
var Rg = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-level': null,
      'aria-multiselectable': null,
      'aria-orientation': 'horizontal',
    },
    relatedConcepts: [{ module: 'DAISY', concept: { name: 'guide' } }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [['tab']],
    requiredProps: {},
    superClass: [['roletype', 'widget', 'composite']],
  },
  Cg = Rg;
sn.default = Cg;
var cn = {};
Object.defineProperty(cn, '__esModule', { value: !0 });
cn.default = void 0;
var wg = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']],
  },
  Pg = wg;
cn.default = Pg;
var dn = {};
Object.defineProperty(dn, '__esModule', { value: !0 });
dn.default = void 0;
var Og = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [
      { concept: { name: 'dfn' }, module: 'HTML' },
      { concept: { name: 'dt' }, module: 'HTML' },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']],
  },
  qg = Og;
dn.default = qg;
var fn = {};
Object.defineProperty(fn, '__esModule', { value: !0 });
fn.default = void 0;
var Tg = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-activedescendant': null,
      'aria-autocomplete': null,
      'aria-errormessage': null,
      'aria-haspopup': null,
      'aria-invalid': null,
      'aria-multiline': null,
      'aria-placeholder': null,
      'aria-readonly': null,
      'aria-required': null,
    },
    relatedConcepts: [
      {
        concept: {
          attributes: [
            { constraints: ['undefined'], name: 'type' },
            { constraints: ['undefined'], name: 'list' },
          ],
          name: 'input',
        },
        module: 'HTML',
      },
      {
        concept: {
          attributes: [
            { constraints: ['undefined'], name: 'list' },
            { name: 'type', value: 'email' },
          ],
          name: 'input',
        },
        module: 'HTML',
      },
      {
        concept: {
          attributes: [
            { constraints: ['undefined'], name: 'list' },
            { name: 'type', value: 'tel' },
          ],
          name: 'input',
        },
        module: 'HTML',
      },
      {
        concept: {
          attributes: [
            { constraints: ['undefined'], name: 'list' },
            { name: 'type', value: 'text' },
          ],
          name: 'input',
        },
        module: 'HTML',
      },
      {
        concept: {
          attributes: [
            { constraints: ['undefined'], name: 'list' },
            { name: 'type', value: 'url' },
          ],
          name: 'input',
        },
        module: 'HTML',
      },
      { concept: { name: 'input' }, module: 'XForms' },
      { concept: { name: 'textarea' }, module: 'HTML' },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'widget', 'input']],
  },
  $g = Tg;
fn.default = $g;
var pn = {};
Object.defineProperty(pn, '__esModule', { value: !0 });
pn.default = void 0;
var xg = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']],
  },
  Mg = xg;
pn.default = Mg;
var vn = {};
Object.defineProperty(vn, '__esModule', { value: !0 });
vn.default = void 0;
var Sg = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section', 'status']],
  },
  Ag = Sg;
vn.default = Ag;
var mn = {};
Object.defineProperty(mn, '__esModule', { value: !0 });
mn.default = void 0;
var Bg = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: { 'aria-orientation': 'horizontal' },
    relatedConcepts: [{ concept: { name: 'menubar' }, module: 'ARIA' }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section', 'group']],
  },
  Ig = Bg;
mn.default = Ig;
var bn = {};
Object.defineProperty(bn, '__esModule', { value: !0 });
bn.default = void 0;
var jg = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author', 'contents'],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']],
  },
  Ng = jg;
bn.default = Ng;
var yn = {};
Object.defineProperty(yn, '__esModule', { value: !0 });
yn.default = void 0;
var kg = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-errormessage': null,
      'aria-invalid': null,
      'aria-multiselectable': null,
      'aria-required': null,
      'aria-orientation': 'vertical',
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [['treeitem', 'group'], ['treeitem']],
    requiredProps: {},
    superClass: [
      ['roletype', 'widget', 'composite', 'select'],
      ['roletype', 'structure', 'section', 'group', 'select'],
    ],
  },
  Dg = kg;
yn.default = Dg;
var hn = {};
Object.defineProperty(hn, '__esModule', { value: !0 });
hn.default = void 0;
var Lg = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [['row'], ['row', 'rowgroup']],
    requiredProps: {},
    superClass: [
      ['roletype', 'widget', 'composite', 'grid'],
      ['roletype', 'structure', 'section', 'table', 'grid'],
      ['roletype', 'widget', 'composite', 'select', 'tree'],
      ['roletype', 'structure', 'section', 'group', 'select', 'tree'],
    ],
  },
  Fg = Lg;
hn.default = Fg;
var gn = {};
Object.defineProperty(gn, '__esModule', { value: !0 });
gn.default = void 0;
var Vg = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author', 'contents'],
    prohibitedProps: [],
    props: { 'aria-expanded': null, 'aria-haspopup': null },
    relatedConcepts: [],
    requireContextRole: ['group', 'tree'],
    requiredContextRole: ['group', 'tree'],
    requiredOwnedElements: [],
    requiredProps: { 'aria-selected': null },
    superClass: [
      ['roletype', 'structure', 'section', 'listitem'],
      ['roletype', 'widget', 'input', 'option'],
    ],
  },
  Ug = Vg;
gn.default = Ug;
Object.defineProperty(Hr, '__esModule', { value: !0 });
Hr.default = void 0;
var Hg = b(Wr),
  Wg = b(zr),
  zg = b(Kr),
  Kg = b(Gr),
  Gg = b(Xr),
  Xg = b(Qr),
  Qg = b(Yr),
  Yg = b(Jr),
  Jg = b(Zr),
  Zg = b(ea),
  eE = b(ta),
  tE = b(ra),
  rE = b(aa),
  aE = b(na),
  nE = b(oa),
  oE = b(la),
  lE = b(ia),
  iE = b(ua),
  uE = b(sa),
  sE = b(ca),
  cE = b(da),
  dE = b(fa),
  fE = b(pa),
  pE = b(va),
  vE = b(ma),
  mE = b(ba),
  bE = b(ya),
  yE = b(ha),
  hE = b(ga),
  gE = b(Ea),
  EE = b(_a),
  _E = b(Ra),
  RE = b(Ca),
  CE = b(wa),
  wE = b(Pa),
  PE = b(Oa),
  OE = b(qa),
  qE = b(Ta),
  TE = b($a),
  $E = b(xa),
  xE = b(Ma),
  ME = b(Sa),
  SE = b(Aa),
  AE = b(Ba),
  BE = b(Ia),
  IE = b(ja),
  jE = b(Na),
  NE = b(ka),
  kE = b(Da),
  DE = b(La),
  LE = b(Fa),
  FE = b(Va),
  VE = b(Ua),
  UE = b(Ha),
  HE = b(Wa),
  WE = b(za),
  zE = b(Ka),
  KE = b(Ga),
  GE = b(Xa),
  XE = b(Qa),
  QE = b(Ya),
  YE = b(Ja),
  JE = b(Za),
  ZE = b(en),
  e_ = b(tn),
  t_ = b(rn),
  r_ = b(an),
  a_ = b(nn),
  n_ = b(on),
  o_ = b(ln),
  l_ = b(un),
  i_ = b(sn),
  u_ = b(cn),
  s_ = b(dn),
  c_ = b(fn),
  d_ = b(pn),
  f_ = b(vn),
  p_ = b(mn),
  v_ = b(bn),
  m_ = b(yn),
  b_ = b(hn),
  y_ = b(gn);
function b(e) {
  return e && e.__esModule ? e : { default: e };
}
var h_ = [
    ['alert', Hg.default],
    ['alertdialog', Wg.default],
    ['application', zg.default],
    ['article', Kg.default],
    ['banner', Gg.default],
    ['blockquote', Xg.default],
    ['button', Qg.default],
    ['caption', Yg.default],
    ['cell', Jg.default],
    ['checkbox', Zg.default],
    ['code', eE.default],
    ['columnheader', tE.default],
    ['combobox', rE.default],
    ['complementary', aE.default],
    ['contentinfo', nE.default],
    ['definition', oE.default],
    ['deletion', lE.default],
    ['dialog', iE.default],
    ['directory', uE.default],
    ['document', sE.default],
    ['emphasis', cE.default],
    ['feed', dE.default],
    ['figure', fE.default],
    ['form', pE.default],
    ['generic', vE.default],
    ['grid', mE.default],
    ['gridcell', bE.default],
    ['group', yE.default],
    ['heading', hE.default],
    ['img', gE.default],
    ['insertion', EE.default],
    ['link', _E.default],
    ['list', RE.default],
    ['listbox', CE.default],
    ['listitem', wE.default],
    ['log', PE.default],
    ['main', OE.default],
    ['marquee', qE.default],
    ['math', TE.default],
    ['menu', $E.default],
    ['menubar', xE.default],
    ['menuitem', ME.default],
    ['menuitemcheckbox', SE.default],
    ['menuitemradio', AE.default],
    ['meter', BE.default],
    ['navigation', IE.default],
    ['none', jE.default],
    ['note', NE.default],
    ['option', kE.default],
    ['paragraph', DE.default],
    ['presentation', LE.default],
    ['progressbar', FE.default],
    ['radio', VE.default],
    ['radiogroup', UE.default],
    ['region', HE.default],
    ['row', WE.default],
    ['rowgroup', zE.default],
    ['rowheader', KE.default],
    ['scrollbar', GE.default],
    ['search', XE.default],
    ['searchbox', QE.default],
    ['separator', YE.default],
    ['slider', JE.default],
    ['spinbutton', ZE.default],
    ['status', e_.default],
    ['strong', t_.default],
    ['subscript', r_.default],
    ['superscript', a_.default],
    ['switch', n_.default],
    ['tab', o_.default],
    ['table', l_.default],
    ['tablist', i_.default],
    ['tabpanel', u_.default],
    ['term', s_.default],
    ['textbox', c_.default],
    ['time', d_.default],
    ['timer', f_.default],
    ['toolbar', p_.default],
    ['tooltip', v_.default],
    ['tree', m_.default],
    ['treegrid', b_.default],
    ['treeitem', y_.default],
  ],
  g_ = h_;
Hr.default = g_;
var En = {},
  _n = {};
Object.defineProperty(_n, '__esModule', { value: !0 });
_n.default = void 0;
var E_ = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-errormessage': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-invalid': null,
    },
    relatedConcepts: [
      { concept: { name: 'abstract [EPUB-SSV]' }, module: 'EPUB' },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']],
  },
  __ = E_;
_n.default = __;
var Rn = {};
Object.defineProperty(Rn, '__esModule', { value: !0 });
Rn.default = void 0;
var R_ = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-errormessage': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-invalid': null,
    },
    relatedConcepts: [
      { concept: { name: 'acknowledgments [EPUB-SSV]' }, module: 'EPUB' },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section', 'landmark']],
  },
  C_ = R_;
Rn.default = C_;
var Cn = {};
Object.defineProperty(Cn, '__esModule', { value: !0 });
Cn.default = void 0;
var w_ = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-errormessage': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-invalid': null,
    },
    relatedConcepts: [
      { concept: { name: 'afterword [EPUB-SSV]' }, module: 'EPUB' },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section', 'landmark']],
  },
  P_ = w_;
Cn.default = P_;
var wn = {};
Object.defineProperty(wn, '__esModule', { value: !0 });
wn.default = void 0;
var O_ = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-errormessage': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-invalid': null,
    },
    relatedConcepts: [
      { concept: { name: 'appendix [EPUB-SSV]' }, module: 'EPUB' },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section', 'landmark']],
  },
  q_ = O_;
wn.default = q_;
var Pn = {};
Object.defineProperty(Pn, '__esModule', { value: !0 });
Pn.default = void 0;
var T_ = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author', 'content'],
    prohibitedProps: [],
    props: { 'aria-errormessage': null, 'aria-invalid': null },
    relatedConcepts: [
      { concept: { name: 'referrer [EPUB-SSV]' }, module: 'EPUB' },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'widget', 'command', 'link']],
  },
  $_ = T_;
Pn.default = $_;
var On = {};
Object.defineProperty(On, '__esModule', { value: !0 });
On.default = void 0;
var x_ = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-errormessage': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-invalid': null,
    },
    relatedConcepts: [
      { concept: { name: 'EPUB biblioentry [EPUB-SSV]' }, module: 'EPUB' },
    ],
    requireContextRole: ['doc-bibliography'],
    requiredContextRole: ['doc-bibliography'],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section', 'listitem']],
  },
  M_ = x_;
On.default = M_;
var qn = {};
Object.defineProperty(qn, '__esModule', { value: !0 });
qn.default = void 0;
var S_ = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-errormessage': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-invalid': null,
    },
    relatedConcepts: [
      { concept: { name: 'bibliography [EPUB-SSV]' }, module: 'EPUB' },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [['doc-biblioentry']],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section', 'landmark']],
  },
  A_ = S_;
qn.default = A_;
var Tn = {};
Object.defineProperty(Tn, '__esModule', { value: !0 });
Tn.default = void 0;
var B_ = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author', 'contents'],
    prohibitedProps: [],
    props: { 'aria-errormessage': null, 'aria-invalid': null },
    relatedConcepts: [
      { concept: { name: 'biblioref [EPUB-SSV]' }, module: 'EPUB' },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'widget', 'command', 'link']],
  },
  I_ = B_;
Tn.default = I_;
var $n = {};
Object.defineProperty($n, '__esModule', { value: !0 });
$n.default = void 0;
var j_ = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-errormessage': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-invalid': null,
    },
    relatedConcepts: [
      { concept: { name: 'chapter [EPUB-SSV]' }, module: 'EPUB' },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section', 'landmark']],
  },
  N_ = j_;
$n.default = N_;
var xn = {};
Object.defineProperty(xn, '__esModule', { value: !0 });
xn.default = void 0;
var k_ = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-errormessage': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-invalid': null,
    },
    relatedConcepts: [
      { concept: { name: 'colophon [EPUB-SSV]' }, module: 'EPUB' },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']],
  },
  D_ = k_;
xn.default = D_;
var Mn = {};
Object.defineProperty(Mn, '__esModule', { value: !0 });
Mn.default = void 0;
var L_ = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-errormessage': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-invalid': null,
    },
    relatedConcepts: [
      { concept: { name: 'conclusion [EPUB-SSV]' }, module: 'EPUB' },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section', 'landmark']],
  },
  F_ = L_;
Mn.default = F_;
var Sn = {};
Object.defineProperty(Sn, '__esModule', { value: !0 });
Sn.default = void 0;
var V_ = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-errormessage': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-invalid': null,
    },
    relatedConcepts: [
      { concept: { name: 'cover [EPUB-SSV]' }, module: 'EPUB' },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section', 'img']],
  },
  U_ = V_;
Sn.default = U_;
var An = {};
Object.defineProperty(An, '__esModule', { value: !0 });
An.default = void 0;
var H_ = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-errormessage': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-invalid': null,
    },
    relatedConcepts: [
      { concept: { name: 'credit [EPUB-SSV]' }, module: 'EPUB' },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']],
  },
  W_ = H_;
An.default = W_;
var Bn = {};
Object.defineProperty(Bn, '__esModule', { value: !0 });
Bn.default = void 0;
var z_ = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-errormessage': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-invalid': null,
    },
    relatedConcepts: [
      { concept: { name: 'credits [EPUB-SSV]' }, module: 'EPUB' },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section', 'landmark']],
  },
  K_ = z_;
Bn.default = K_;
var In = {};
Object.defineProperty(In, '__esModule', { value: !0 });
In.default = void 0;
var G_ = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-errormessage': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-invalid': null,
    },
    relatedConcepts: [
      { concept: { name: 'dedication [EPUB-SSV]' }, module: 'EPUB' },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']],
  },
  X_ = G_;
In.default = X_;
var jn = {};
Object.defineProperty(jn, '__esModule', { value: !0 });
jn.default = void 0;
var Q_ = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-errormessage': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-invalid': null,
    },
    relatedConcepts: [
      { concept: { name: 'rearnote [EPUB-SSV]' }, module: 'EPUB' },
    ],
    requireContextRole: ['doc-endnotes'],
    requiredContextRole: ['doc-endnotes'],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section', 'listitem']],
  },
  Y_ = Q_;
jn.default = Y_;
var Nn = {};
Object.defineProperty(Nn, '__esModule', { value: !0 });
Nn.default = void 0;
var J_ = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-errormessage': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-invalid': null,
    },
    relatedConcepts: [
      { concept: { name: 'rearnotes [EPUB-SSV]' }, module: 'EPUB' },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [['doc-endnote']],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section', 'landmark']],
  },
  Z_ = J_;
Nn.default = Z_;
var kn = {};
Object.defineProperty(kn, '__esModule', { value: !0 });
kn.default = void 0;
var eR = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-errormessage': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-invalid': null,
    },
    relatedConcepts: [
      { concept: { name: 'epigraph [EPUB-SSV]' }, module: 'EPUB' },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']],
  },
  tR = eR;
kn.default = tR;
var Dn = {};
Object.defineProperty(Dn, '__esModule', { value: !0 });
Dn.default = void 0;
var rR = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-errormessage': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-invalid': null,
    },
    relatedConcepts: [
      { concept: { name: 'epilogue [EPUB-SSV]' }, module: 'EPUB' },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section', 'landmark']],
  },
  aR = rR;
Dn.default = aR;
var Ln = {};
Object.defineProperty(Ln, '__esModule', { value: !0 });
Ln.default = void 0;
var nR = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-errormessage': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-invalid': null,
    },
    relatedConcepts: [
      { concept: { name: 'errata [EPUB-SSV]' }, module: 'EPUB' },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section', 'landmark']],
  },
  oR = nR;
Ln.default = oR;
var Fn = {};
Object.defineProperty(Fn, '__esModule', { value: !0 });
Fn.default = void 0;
var lR = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-errormessage': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-invalid': null,
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']],
  },
  iR = lR;
Fn.default = iR;
var Vn = {};
Object.defineProperty(Vn, '__esModule', { value: !0 });
Vn.default = void 0;
var uR = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-errormessage': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-invalid': null,
    },
    relatedConcepts: [
      { concept: { name: 'footnote [EPUB-SSV]' }, module: 'EPUB' },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']],
  },
  sR = uR;
Vn.default = sR;
var Un = {};
Object.defineProperty(Un, '__esModule', { value: !0 });
Un.default = void 0;
var cR = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-errormessage': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-invalid': null,
    },
    relatedConcepts: [
      { concept: { name: 'foreword [EPUB-SSV]' }, module: 'EPUB' },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section', 'landmark']],
  },
  dR = cR;
Un.default = dR;
var Hn = {};
Object.defineProperty(Hn, '__esModule', { value: !0 });
Hn.default = void 0;
var fR = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-errormessage': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-invalid': null,
    },
    relatedConcepts: [
      { concept: { name: 'glossary [EPUB-SSV]' }, module: 'EPUB' },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [['definition'], ['term']],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section', 'landmark']],
  },
  pR = fR;
Hn.default = pR;
var Wn = {};
Object.defineProperty(Wn, '__esModule', { value: !0 });
Wn.default = void 0;
var vR = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author', 'contents'],
    prohibitedProps: [],
    props: { 'aria-errormessage': null, 'aria-invalid': null },
    relatedConcepts: [
      { concept: { name: 'glossref [EPUB-SSV]' }, module: 'EPUB' },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'widget', 'command', 'link']],
  },
  mR = vR;
Wn.default = mR;
var zn = {};
Object.defineProperty(zn, '__esModule', { value: !0 });
zn.default = void 0;
var bR = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-errormessage': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-invalid': null,
    },
    relatedConcepts: [
      { concept: { name: 'index [EPUB-SSV]' }, module: 'EPUB' },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
      ['roletype', 'structure', 'section', 'landmark', 'navigation'],
    ],
  },
  yR = bR;
zn.default = yR;
var Kn = {};
Object.defineProperty(Kn, '__esModule', { value: !0 });
Kn.default = void 0;
var hR = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-errormessage': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-invalid': null,
    },
    relatedConcepts: [
      { concept: { name: 'introduction [EPUB-SSV]' }, module: 'EPUB' },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section', 'landmark']],
  },
  gR = hR;
Kn.default = gR;
var Gn = {};
Object.defineProperty(Gn, '__esModule', { value: !0 });
Gn.default = void 0;
var ER = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author', 'contents'],
    prohibitedProps: [],
    props: { 'aria-errormessage': null, 'aria-invalid': null },
    relatedConcepts: [
      { concept: { name: 'noteref [EPUB-SSV]' }, module: 'EPUB' },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'widget', 'command', 'link']],
  },
  _R = ER;
Gn.default = _R;
var Xn = {};
Object.defineProperty(Xn, '__esModule', { value: !0 });
Xn.default = void 0;
var RR = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-errormessage': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-invalid': null,
    },
    relatedConcepts: [
      { concept: { name: 'notice [EPUB-SSV]' }, module: 'EPUB' },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section', 'note']],
  },
  CR = RR;
Xn.default = CR;
var Qn = {};
Object.defineProperty(Qn, '__esModule', { value: !0 });
Qn.default = void 0;
var wR = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-errormessage': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-invalid': null,
    },
    relatedConcepts: [
      { concept: { name: 'pagebreak [EPUB-SSV]' }, module: 'EPUB' },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'separator']],
  },
  PR = wR;
Qn.default = PR;
var Yn = {};
Object.defineProperty(Yn, '__esModule', { value: !0 });
Yn.default = void 0;
var OR = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-errormessage': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-invalid': null,
    },
    relatedConcepts: [
      { concept: { name: 'page-list [EPUB-SSV]' }, module: 'EPUB' },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
      ['roletype', 'structure', 'section', 'landmark', 'navigation'],
    ],
  },
  qR = OR;
Yn.default = qR;
var Jn = {};
Object.defineProperty(Jn, '__esModule', { value: !0 });
Jn.default = void 0;
var TR = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-errormessage': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-invalid': null,
    },
    relatedConcepts: [{ concept: { name: 'part [EPUB-SSV]' }, module: 'EPUB' }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section', 'landmark']],
  },
  $R = TR;
Jn.default = $R;
var Zn = {};
Object.defineProperty(Zn, '__esModule', { value: !0 });
Zn.default = void 0;
var xR = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-errormessage': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-invalid': null,
    },
    relatedConcepts: [
      { concept: { name: 'preface [EPUB-SSV]' }, module: 'EPUB' },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section', 'landmark']],
  },
  MR = xR;
Zn.default = MR;
var eo = {};
Object.defineProperty(eo, '__esModule', { value: !0 });
eo.default = void 0;
var SR = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-errormessage': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-invalid': null,
    },
    relatedConcepts: [
      { concept: { name: 'prologue [EPUB-SSV]' }, module: 'EPUB' },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section', 'landmark']],
  },
  AR = SR;
eo.default = AR;
var to = {};
Object.defineProperty(to, '__esModule', { value: !0 });
to.default = void 0;
var BR = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [
      { concept: { name: 'pullquote [EPUB-SSV]' }, module: 'EPUB' },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['none']],
  },
  IR = BR;
to.default = IR;
var ro = {};
Object.defineProperty(ro, '__esModule', { value: !0 });
ro.default = void 0;
var jR = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-errormessage': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-invalid': null,
    },
    relatedConcepts: [{ concept: { name: 'qna [EPUB-SSV]' }, module: 'EPUB' }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']],
  },
  NR = jR;
ro.default = NR;
var ao = {};
Object.defineProperty(ao, '__esModule', { value: !0 });
ao.default = void 0;
var kR = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-errormessage': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-invalid': null,
    },
    relatedConcepts: [
      { concept: { name: 'subtitle [EPUB-SSV]' }, module: 'EPUB' },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'sectionhead']],
  },
  DR = kR;
ao.default = DR;
var no = {};
Object.defineProperty(no, '__esModule', { value: !0 });
no.default = void 0;
var LR = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-errormessage': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-invalid': null,
    },
    relatedConcepts: [{ concept: { name: 'help [EPUB-SSV]' }, module: 'EPUB' }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section', 'note']],
  },
  FR = LR;
no.default = FR;
var oo = {};
Object.defineProperty(oo, '__esModule', { value: !0 });
oo.default = void 0;
var VR = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-errormessage': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-invalid': null,
    },
    relatedConcepts: [{ concept: { name: 'toc [EPUB-SSV]' }, module: 'EPUB' }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
      ['roletype', 'structure', 'section', 'landmark', 'navigation'],
    ],
  },
  UR = VR;
oo.default = UR;
Object.defineProperty(En, '__esModule', { value: !0 });
En.default = void 0;
var HR = T(_n),
  WR = T(Rn),
  zR = T(Cn),
  KR = T(wn),
  GR = T(Pn),
  XR = T(On),
  QR = T(qn),
  YR = T(Tn),
  JR = T($n),
  ZR = T(xn),
  eC = T(Mn),
  tC = T(Sn),
  rC = T(An),
  aC = T(Bn),
  nC = T(In),
  oC = T(jn),
  lC = T(Nn),
  iC = T(kn),
  uC = T(Dn),
  sC = T(Ln),
  cC = T(Fn),
  dC = T(Vn),
  fC = T(Un),
  pC = T(Hn),
  vC = T(Wn),
  mC = T(zn),
  bC = T(Kn),
  yC = T(Gn),
  hC = T(Xn),
  gC = T(Qn),
  EC = T(Yn),
  _C = T(Jn),
  RC = T(Zn),
  CC = T(eo),
  wC = T(to),
  PC = T(ro),
  OC = T(ao),
  qC = T(no),
  TC = T(oo);
function T(e) {
  return e && e.__esModule ? e : { default: e };
}
var $C = [
    ['doc-abstract', HR.default],
    ['doc-acknowledgments', WR.default],
    ['doc-afterword', zR.default],
    ['doc-appendix', KR.default],
    ['doc-backlink', GR.default],
    ['doc-biblioentry', XR.default],
    ['doc-bibliography', QR.default],
    ['doc-biblioref', YR.default],
    ['doc-chapter', JR.default],
    ['doc-colophon', ZR.default],
    ['doc-conclusion', eC.default],
    ['doc-cover', tC.default],
    ['doc-credit', rC.default],
    ['doc-credits', aC.default],
    ['doc-dedication', nC.default],
    ['doc-endnote', oC.default],
    ['doc-endnotes', lC.default],
    ['doc-epigraph', iC.default],
    ['doc-epilogue', uC.default],
    ['doc-errata', sC.default],
    ['doc-example', cC.default],
    ['doc-footnote', dC.default],
    ['doc-foreword', fC.default],
    ['doc-glossary', pC.default],
    ['doc-glossref', vC.default],
    ['doc-index', mC.default],
    ['doc-introduction', bC.default],
    ['doc-noteref', yC.default],
    ['doc-notice', hC.default],
    ['doc-pagebreak', gC.default],
    ['doc-pagelist', EC.default],
    ['doc-part', _C.default],
    ['doc-preface', RC.default],
    ['doc-prologue', CC.default],
    ['doc-pullquote', wC.default],
    ['doc-qna', PC.default],
    ['doc-subtitle', OC.default],
    ['doc-tip', qC.default],
    ['doc-toc', TC.default],
  ],
  xC = $C;
En.default = xC;
var lo = {},
  io = {};
Object.defineProperty(io, '__esModule', { value: !0 });
io.default = void 0;
var MC = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-errormessage': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-invalid': null,
    },
    relatedConcepts: [
      { module: 'GRAPHICS', concept: { name: 'graphics-object' } },
      { module: 'ARIA', concept: { name: 'img' } },
      { module: 'ARIA', concept: { name: 'article' } },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'document']],
  },
  SC = MC;
io.default = SC;
var uo = {};
Object.defineProperty(uo, '__esModule', { value: !0 });
uo.default = void 0;
var AC = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author', 'contents'],
    prohibitedProps: [],
    props: {
      'aria-errormessage': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-invalid': null,
    },
    relatedConcepts: [
      { module: 'GRAPHICS', concept: { name: 'graphics-document' } },
      { module: 'ARIA', concept: { name: 'group' } },
      { module: 'ARIA', concept: { name: 'img' } },
      { module: 'GRAPHICS', concept: { name: 'graphics-symbol' } },
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section', 'group']],
  },
  BC = AC;
uo.default = BC;
var so = {};
Object.defineProperty(so, '__esModule', { value: !0 });
so.default = void 0;
var IC = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-errormessage': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-invalid': null,
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section', 'img']],
  },
  jC = IC;
so.default = jC;
Object.defineProperty(lo, '__esModule', { value: !0 });
lo.default = void 0;
var NC = Kl(io),
  kC = Kl(uo),
  DC = Kl(so);
function Kl(e) {
  return e && e.__esModule ? e : { default: e };
}
var LC = [
    ['graphics-document', NC.default],
    ['graphics-object', kC.default],
    ['graphics-symbol', DC.default],
  ],
  FC = LC;
lo.default = FC;
Object.defineProperty(lt, '__esModule', { value: !0 });
lt.default = void 0;
var VC = kt(Mr),
  UC = kt(Hr),
  HC = kt(En),
  WC = kt(lo),
  zC = kt(Fe);
function kt(e) {
  return e && e.__esModule ? e : { default: e };
}
function KC(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function pl(e, t) {
  var r = (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (!r) {
    if (
      Array.isArray(e) ||
      (r = Mc(e)) ||
      (t && e && typeof e.length == 'number')
    ) {
      r && (e = r);
      var a = 0,
        n = function () {};
      return {
        s: n,
        n: function () {
          return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
        },
        e: function (s) {
          throw s;
        },
        f: n,
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o = !0,
    l = !1,
    u;
  return {
    s: function () {
      r = r.call(e);
    },
    n: function () {
      var s = r.next();
      return (o = s.done), s;
    },
    e: function (s) {
      (l = !0), (u = s);
    },
    f: function () {
      try {
        !o && r.return != null && r.return();
      } finally {
        if (l) throw u;
      }
    },
  };
}
function yt(e, t) {
  return QC(e) || XC(e, t) || Mc(e, t) || GC();
}
function GC() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Mc(e, t) {
  if (e) {
    if (typeof e == 'string') return Zi(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === 'Object' && e.constructor && (r = e.constructor.name),
      r === 'Map' || r === 'Set')
    )
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Zi(e, t);
  }
}
function Zi(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
  return a;
}
function XC(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (r != null) {
    var a = [],
      n = !0,
      o = !1,
      l,
      u;
    try {
      for (
        r = r.call(e);
        !(n = (l = r.next()).done) && (a.push(l.value), !(t && a.length === t));
        n = !0
      );
    } catch (i) {
      (o = !0), (u = i);
    } finally {
      try {
        !n && r.return != null && r.return();
      } finally {
        if (o) throw u;
      }
    }
    return a;
  }
}
function QC(e) {
  if (Array.isArray(e)) return e;
}
var Ee = [].concat(VC.default, UC.default, HC.default, WC.default);
Ee.forEach(function (e) {
  var t = yt(e, 2),
    r = t[1],
    a = pl(r.superClass),
    n;
  try {
    for (a.s(); !(n = a.n()).done; ) {
      var o = n.value,
        l = pl(o),
        u;
      try {
        var i = function () {
          var d = u.value,
            f = Ee.find(function (q) {
              var p = yt(q, 1),
                y = p[0];
              return y === d;
            });
          if (f)
            for (
              var v = f[1], _ = 0, P = Object.keys(v.props);
              _ < P.length;
              _++
            ) {
              var C = P[_];
              Object.prototype.hasOwnProperty.call(r.props, C) ||
                Object.assign(r.props, KC({}, C, v.props[C]));
            }
        };
        for (l.s(); !(u = l.n()).done; ) i();
      } catch (s) {
        l.e(s);
      } finally {
        l.f();
      }
    }
  } catch (s) {
    a.e(s);
  } finally {
    a.f();
  }
});
var vl = {
    entries: function () {
      return Ee;
    },
    forEach: function (t) {
      var r =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null,
        a = pl(Ee),
        n;
      try {
        for (a.s(); !(n = a.n()).done; ) {
          var o = yt(n.value, 2),
            l = o[0],
            u = o[1];
          t.call(r, u, l, Ee);
        }
      } catch (i) {
        a.e(i);
      } finally {
        a.f();
      }
    },
    get: function (t) {
      var r = Ee.find(function (a) {
        return a[0] === t;
      });
      return r && r[1];
    },
    has: function (t) {
      return !!vl.get(t);
    },
    keys: function () {
      return Ee.map(function (t) {
        var r = yt(t, 1),
          a = r[0];
        return a;
      });
    },
    values: function () {
      return Ee.map(function (t) {
        var r = yt(t, 2),
          a = r[1];
        return a;
      });
    },
  },
  YC = (0, zC.default)(vl, vl.entries());
lt.default = YC;
var co = {},
  JC = qs,
  Sc = $s(),
  Ac = Le,
  eu = Object,
  ZC = Ac('Array.prototype.push'),
  tu = Ac('Object.prototype.propertyIsEnumerable'),
  ew = Sc ? Object.getOwnPropertySymbols : null,
  Bc = function (t, r) {
    if (t == null) throw new TypeError('target must be an object');
    var a = eu(t);
    if (arguments.length === 1) return a;
    for (var n = 1; n < arguments.length; ++n) {
      var o = eu(arguments[n]),
        l = JC(o),
        u = Sc && (Object.getOwnPropertySymbols || ew);
      if (u)
        for (var i = u(o), s = 0; s < i.length; ++s) {
          var d = i[s];
          tu(o, d) && ZC(l, d);
        }
      for (var f = 0; f < l.length; ++f) {
        var v = l[f];
        if (tu(o, v)) {
          var _ = o[v];
          a[v] = _;
        }
      }
    }
    return a;
  },
  Do = Bc,
  tw = function () {
    if (!Object.assign) return !1;
    for (
      var e = 'abcdefghijklmnopqrst', t = e.split(''), r = {}, a = 0;
      a < t.length;
      ++a
    )
      r[t[a]] = t[a];
    var n = Object.assign({}, r),
      o = '';
    for (var l in n) o += l;
    return e !== o;
  },
  rw = function () {
    if (!Object.assign || !Object.preventExtensions) return !1;
    var e = Object.preventExtensions({ 1: 2 });
    try {
      Object.assign(e, 'xy');
    } catch {
      return e[1] === 'y';
    }
    return !1;
  },
  Ic = function () {
    return !Object.assign || tw() || rw() ? Do : Object.assign;
  },
  aw = qt,
  nw = Ic,
  ow = function () {
    var t = nw();
    return (
      aw(
        Object,
        { assign: t },
        {
          assign: function () {
            return Object.assign !== t;
          },
        },
      ),
      t
    );
  },
  lw = qt,
  iw = Fl,
  uw = Bc,
  jc = Ic,
  sw = ow,
  cw = iw.apply(jc()),
  Nc = function (t, r) {
    return cw(Object, arguments);
  };
lw(Nc, { getPolyfill: jc, implementation: uw, shim: sw });
var dw = Nc,
  cr = {},
  fw = {
    get exports() {
      return cr;
    },
    set exports(e) {
      cr = e;
    },
  },
  Ct = function () {
    return typeof function () {}.name == 'string';
  },
  ht = Object.getOwnPropertyDescriptor;
if (ht)
  try {
    ht([], 'length');
  } catch {
    ht = null;
  }
Ct.functionsHaveConfigurableNames = function () {
  if (!Ct() || !ht) return !1;
  var t = ht(function () {}, 'name');
  return !!t && !!t.configurable;
};
var pw = Function.prototype.bind;
Ct.boundFunctionsHaveNames = function () {
  return Ct() && typeof pw == 'function' && function () {}.bind().name !== '';
};
var vw = Ct;
(function (e) {
  var t = vw.functionsHaveConfigurableNames(),
    r = Object,
    a = TypeError;
  (e.exports = function () {
    if (this != null && this !== r(this))
      throw new a('RegExp.prototype.flags getter called on non-object');
    var o = '';
    return (
      this.hasIndices && (o += 'd'),
      this.global && (o += 'g'),
      this.ignoreCase && (o += 'i'),
      this.multiline && (o += 'm'),
      this.dotAll && (o += 's'),
      this.unicode && (o += 'u'),
      this.sticky && (o += 'y'),
      o
    );
  }),
    t &&
      Object.defineProperty &&
      Object.defineProperty(e.exports, 'name', { value: 'get flags' });
})(fw);
var mw = cr,
  bw = qt.supportsDescriptors,
  yw = Object.getOwnPropertyDescriptor,
  kc = function () {
    if (bw && /a/gim.flags === 'gim') {
      var t = yw(RegExp.prototype, 'flags');
      if (
        t &&
        typeof t.get == 'function' &&
        typeof RegExp.prototype.dotAll == 'boolean' &&
        typeof RegExp.prototype.hasIndices == 'boolean'
      ) {
        var r = '',
          a = {};
        if (
          (Object.defineProperty(a, 'hasIndices', {
            get: function () {
              r += 'd';
            },
          }),
          Object.defineProperty(a, 'sticky', {
            get: function () {
              r += 'y';
            },
          }),
          r === 'dy')
        )
          return t.get;
      }
    }
    return mw;
  },
  hw = qt.supportsDescriptors,
  gw = kc,
  Ew = Object.getOwnPropertyDescriptor,
  _w = Object.defineProperty,
  Rw = TypeError,
  ru = Object.getPrototypeOf,
  Cw = /a/,
  ww = function () {
    if (!hw || !ru)
      throw new Rw(
        'RegExp.prototype.flags requires a true ES5 environment that supports property descriptors',
      );
    var t = gw(),
      r = ru(Cw),
      a = Ew(r, 'flags');
    return (
      (!a || a.get !== t) &&
        _w(r, 'flags', { configurable: !0, enumerable: !1, get: t }),
      t
    );
  },
  Pw = qt,
  Ow = Fl,
  qw = cr,
  Dc = kc,
  Tw = ww,
  Lc = Ow(Dc());
Pw(Lc, { getPolyfill: Dc, implementation: qw, shim: Tw });
var $w = Lc,
  ml = {},
  Lo = {
    get exports() {
      return ml;
    },
    set exports(e) {
      ml = e;
    },
  },
  xw = Tt,
  Mw = ep,
  pt = xs(),
  le = xw('%TypeError%'),
  Gl = {
    assert: function (e, t) {
      if (!e || (typeof e != 'object' && typeof e != 'function'))
        throw new le('`O` is not an object');
      if (typeof t != 'string') throw new le('`slot` must be a string');
      if ((pt.assert(e), !Gl.has(e, t)))
        throw new le('`slot` is not present on `O`');
    },
    get: function (e, t) {
      if (!e || (typeof e != 'object' && typeof e != 'function'))
        throw new le('`O` is not an object');
      if (typeof t != 'string') throw new le('`slot` must be a string');
      var r = pt.get(e);
      return r && r['$' + t];
    },
    has: function (e, t) {
      if (!e || (typeof e != 'object' && typeof e != 'function'))
        throw new le('`O` is not an object');
      if (typeof t != 'string') throw new le('`slot` must be a string');
      var r = pt.get(e);
      return !!r && Mw(r, '$' + t);
    },
    set: function (e, t, r) {
      if (!e || (typeof e != 'object' && typeof e != 'function'))
        throw new le('`O` is not an object');
      if (typeof t != 'string') throw new le('`slot` must be a string');
      var a = pt.get(e);
      a || ((a = {}), pt.set(e, a)), (a['$' + t] = r);
    },
  };
Object.freeze && Object.freeze(Gl);
var Sw = Gl,
  vt = Sw,
  Aw = SyntaxError,
  au = typeof StopIteration == 'object' ? StopIteration : null,
  Bw = function (t) {
    if (!au) throw new Aw('this environment lacks StopIteration');
    vt.set(t, '[[Done]]', !1);
    var r = {
      next: function () {
        var n = vt.get(this, '[[Iterator]]'),
          o = vt.get(n, '[[Done]]');
        try {
          return { done: o, value: o ? void 0 : n.next() };
        } catch (l) {
          if ((vt.set(n, '[[Done]]', !0), l !== au)) throw l;
          return { done: !0, value: void 0 };
        }
      },
    };
    return vt.set(r, '[[Iterator]]', t), r;
  },
  Iw = {}.toString,
  Fc =
    Array.isArray ||
    function (e) {
      return Iw.call(e) == '[object Array]';
    },
  jw = String.prototype.valueOf,
  Nw = function (t) {
    try {
      return jw.call(t), !0;
    } catch {
      return !1;
    }
  },
  kw = Object.prototype.toString,
  Dw = '[object String]',
  Lw = wr(),
  Vc = function (t) {
    return typeof t == 'string'
      ? !0
      : typeof t != 'object'
      ? !1
      : Lw
      ? Nw(t)
      : kw.call(t) === Dw;
  },
  Xl = typeof Map == 'function' && Map.prototype ? Map : null,
  Fw = typeof Set == 'function' && Set.prototype ? Set : null,
  dr;
Xl ||
  (dr = function (t) {
    return !1;
  });
var Uc = Xl ? Map.prototype.has : null,
  nu = Fw ? Set.prototype.has : null;
!dr &&
  !Uc &&
  (dr = function (t) {
    return !1;
  });
var Hc =
    dr ||
    function (t) {
      if (!t || typeof t != 'object') return !1;
      try {
        if ((Uc.call(t), nu))
          try {
            nu.call(t);
          } catch {
            return !0;
          }
        return t instanceof Xl;
      } catch {}
      return !1;
    },
  Vw = typeof Map == 'function' && Map.prototype ? Map : null,
  Ql = typeof Set == 'function' && Set.prototype ? Set : null,
  fr;
Ql ||
  (fr = function (t) {
    return !1;
  });
var ou = Vw ? Map.prototype.has : null,
  Wc = Ql ? Set.prototype.has : null;
!fr &&
  !Wc &&
  (fr = function (t) {
    return !1;
  });
var zc =
    fr ||
    function (t) {
      if (!t || typeof t != 'object') return !1;
      try {
        if ((Wc.call(t), ou))
          try {
            ou.call(t);
          } catch {
            return !0;
          }
        return t instanceof Ql;
      } catch {}
      return !1;
    },
  lu = Ts,
  iu = Bw;
if (tp() || $s()) {
  var Fo = Symbol.iterator;
  Lo.exports = function (t) {
    if (t != null && typeof t[Fo] < 'u') return t[Fo]();
    if (lu(t)) return Array.prototype[Fo].call(t);
  };
} else {
  var Uw = Fc,
    Hw = Vc,
    uu = Tt,
    Ww = uu('%Map%', !0),
    zw = uu('%Set%', !0),
    Y = Le,
    su = Y('Array.prototype.push'),
    cu = Y('String.prototype.charCodeAt'),
    Kw = Y('String.prototype.slice'),
    Gw = function (t, r) {
      var a = t.length;
      if (r + 1 >= a) return r + 1;
      var n = cu(t, r);
      if (n < 55296 || n > 56319) return r + 1;
      var o = cu(t, r + 1);
      return o < 56320 || o > 57343 ? r + 1 : r + 2;
    },
    Vo = function (t) {
      var r = 0;
      return {
        next: function () {
          var n = r >= t.length,
            o;
          return n || ((o = t[r]), (r += 1)), { done: n, value: o };
        },
      };
    },
    du = function (t, r) {
      if (Uw(t) || lu(t)) return Vo(t);
      if (Hw(t)) {
        var a = 0;
        return {
          next: function () {
            var o = Gw(t, a),
              l = Kw(t, a, o);
            return (a = o), { done: o > t.length, value: l };
          },
        };
      }
      if (r && typeof t['_es6-shim iterator_'] < 'u')
        return t['_es6-shim iterator_']();
    };
  if (!Ww && !zw)
    Lo.exports = function (t) {
      if (t != null) return du(t, !0);
    };
  else {
    var Xw = Hc,
      Qw = zc,
      fu = Y('Map.prototype.forEach', !0),
      pu = Y('Set.prototype.forEach', !0);
    if (typeof process > 'u' || !process.versions || !process.versions.node)
      var vu = Y('Map.prototype.iterator', !0),
        mu = Y('Set.prototype.iterator', !0);
    var bu =
        Y('Map.prototype.@@iterator', !0) ||
        Y('Map.prototype._es6-shim iterator_', !0),
      yu =
        Y('Set.prototype.@@iterator', !0) ||
        Y('Set.prototype._es6-shim iterator_', !0),
      Yw = function (t) {
        if (Xw(t)) {
          if (vu) return iu(vu(t));
          if (bu) return bu(t);
          if (fu) {
            var r = [];
            return (
              fu(t, function (n, o) {
                su(r, [o, n]);
              }),
              Vo(r)
            );
          }
        }
        if (Qw(t)) {
          if (mu) return iu(mu(t));
          if (yu) return yu(t);
          if (pu) {
            var a = [];
            return (
              pu(t, function (n) {
                su(a, n);
              }),
              Vo(a)
            );
          }
        }
      };
    Lo.exports = function (t) {
      return Yw(t) || du(t);
    };
  }
}
var Jw = Fl,
  Zw = Le,
  Kc = Tt,
  eP = Yf,
  hu = Kc('ArrayBuffer', !0),
  gu = Kc('Float32Array', !0),
  ar = Zw('ArrayBuffer.prototype.byteLength', !0),
  Eu = hu && !ar && new hu().slice,
  _u = Eu && Jw(Eu),
  tP =
    ar || _u
      ? function (t) {
          if (!t || typeof t != 'object') return !1;
          try {
            return ar ? ar(t) : _u(t, 0), !0;
          } catch {
            return !1;
          }
        }
      : gu
      ? function (t) {
          try {
            return new gu(t).buffer === t && !eP(t);
          } catch {
            return !1;
          }
        }
      : function (t) {
          return !1;
        },
  rP = Date.prototype.getDay,
  aP = function (t) {
    try {
      return rP.call(t), !0;
    } catch {
      return !1;
    }
  },
  nP = Object.prototype.toString,
  oP = '[object Date]',
  lP = wr(),
  iP = function (t) {
    return typeof t != 'object' || t === null
      ? !1
      : lP
      ? aP(t)
      : nP.call(t) === oP;
  },
  uP = Le,
  Ru = uP('SharedArrayBuffer.prototype.byteLength', !0),
  sP = Ru
    ? function (t) {
        if (!t || typeof t != 'object') return !1;
        try {
          return Ru(t), !0;
        } catch {
          return !1;
        }
      }
    : function (t) {
        return !1;
      },
  cP = Number.prototype.toString,
  dP = function (t) {
    try {
      return cP.call(t), !0;
    } catch {
      return !1;
    }
  },
  fP = Object.prototype.toString,
  pP = '[object Number]',
  vP = wr(),
  mP = function (t) {
    return typeof t == 'number'
      ? !0
      : typeof t != 'object'
      ? !1
      : vP
      ? dP(t)
      : fP.call(t) === pP;
  },
  Gc = Le,
  bP = Gc('Boolean.prototype.toString'),
  yP = Gc('Object.prototype.toString'),
  hP = function (t) {
    try {
      return bP(t), !0;
    } catch {
      return !1;
    }
  },
  gP = '[object Boolean]',
  EP = wr(),
  _P = function (t) {
    return typeof t == 'boolean'
      ? !0
      : t === null || typeof t != 'object'
      ? !1
      : EP && Symbol.toStringTag in t
      ? hP(t)
      : yP(t) === gP;
  },
  bl = {},
  Cu = {
    get exports() {
      return bl;
    },
    set exports(e) {
      bl = e;
    },
  },
  wu = typeof BigInt < 'u' && BigInt,
  RP = function () {
    return (
      typeof wu == 'function' &&
      typeof BigInt == 'function' &&
      typeof wu(42) == 'bigint' &&
      typeof BigInt(42) == 'bigint'
    );
  },
  CP = RP();
if (CP) {
  var wP = BigInt.prototype.valueOf,
    PP = function (t) {
      try {
        return wP.call(t), !0;
      } catch {}
      return !1;
    };
  Cu.exports = function (t) {
    return t === null ||
      typeof t > 'u' ||
      typeof t == 'boolean' ||
      typeof t == 'string' ||
      typeof t == 'number' ||
      typeof t == 'symbol' ||
      typeof t == 'function'
      ? !1
      : typeof t == 'bigint'
      ? !0
      : PP(t);
  };
} else
  Cu.exports = function (t) {
    return !1;
  };
var OP = Vc,
  qP = mP,
  TP = _P,
  $P = rp,
  xP = bl,
  MP = function (t) {
    if (t == null || (typeof t != 'object' && typeof t != 'function'))
      return null;
    if (OP(t)) return 'String';
    if (qP(t)) return 'Number';
    if (TP(t)) return 'Boolean';
    if ($P(t)) return 'Symbol';
    if (xP(t)) return 'BigInt';
  },
  pr = typeof WeakMap == 'function' && WeakMap.prototype ? WeakMap : null,
  Pu = typeof WeakSet == 'function' && WeakSet.prototype ? WeakSet : null,
  vr;
pr ||
  (vr = function (t) {
    return !1;
  });
var yl = pr ? pr.prototype.has : null,
  Uo = Pu ? Pu.prototype.has : null;
!vr &&
  !yl &&
  (vr = function (t) {
    return !1;
  });
var SP =
    vr ||
    function (t) {
      if (!t || typeof t != 'object') return !1;
      try {
        if ((yl.call(t, yl), Uo))
          try {
            Uo.call(t, Uo);
          } catch {
            return !0;
          }
        return t instanceof pr;
      } catch {}
      return !1;
    },
  hl = {},
  Ou = {
    get exports() {
      return hl;
    },
    set exports(e) {
      hl = e;
    },
  },
  AP = Tt,
  Xc = Le,
  BP = AP('%WeakSet%', !0),
  Ho = Xc('WeakSet.prototype.has', !0);
if (Ho) {
  var Wo = Xc('WeakMap.prototype.has', !0);
  Ou.exports = function (t) {
    if (!t || typeof t != 'object') return !1;
    try {
      if ((Ho(t, Ho), Wo))
        try {
          Wo(t, Wo);
        } catch {
          return !0;
        }
      return t instanceof BP;
    } catch {}
    return !1;
  };
} else
  Ou.exports = function (t) {
    return !1;
  };
var IP = Hc,
  jP = zc,
  NP = SP,
  kP = hl,
  DP = function (t) {
    if (t && typeof t == 'object') {
      if (IP(t)) return 'Map';
      if (jP(t)) return 'Set';
      if (NP(t)) return 'WeakMap';
      if (kP(t)) return 'WeakSet';
    }
    return !1;
  },
  Qc = dw,
  ae = Le,
  qu = $w,
  LP = Tt,
  rt = ml,
  FP = xs,
  Tu = Jf,
  $u = Ts,
  xu = Fc,
  Mu = tP,
  Su = iP,
  Au = ap,
  Bu = sP,
  Iu = qs,
  ju = MP,
  Nu = DP,
  ku = Zf,
  Du =
    ae('ArrayBuffer.prototype.byteLength', !0) ||
    function (t) {
      return t.byteLength;
    },
  Lu = ae('SharedArrayBuffer.prototype.byteLength', !0),
  Fu = ae('Date.prototype.getTime'),
  zo = Object.getPrototypeOf,
  Vu = ae('Object.prototype.toString'),
  mr = LP('%Set%', !0),
  gl = ae('Map.prototype.has', !0),
  br = ae('Map.prototype.get', !0),
  Uu = ae('Map.prototype.size', !0),
  yr = ae('Set.prototype.add', !0),
  Yc = ae('Set.prototype.delete', !0),
  hr = ae('Set.prototype.has', !0),
  nr = ae('Set.prototype.size', !0);
function Hu(e, t, r, a) {
  for (var n = rt(e), o; (o = n.next()) && !o.done; )
    if (te(t, o.value, r, a)) return Yc(e, o.value), !0;
  return !1;
}
function Jc(e) {
  if (typeof e > 'u') return null;
  if (typeof e != 'object')
    return typeof e == 'symbol'
      ? !1
      : typeof e == 'string' || typeof e == 'number'
      ? +e == +e
      : !0;
}
function VP(e, t, r, a, n, o) {
  var l = Jc(r);
  if (l != null) return l;
  var u = br(t, l),
    i = Qc({}, n, { strict: !1 });
  return (typeof u > 'u' && !gl(t, l)) || !te(a, u, i, o)
    ? !1
    : !gl(e, l) && te(a, u, i, o);
}
function UP(e, t, r) {
  var a = Jc(r);
  return a ?? (hr(t, a) && !hr(e, a));
}
function Wu(e, t, r, a, n, o) {
  for (var l = rt(e), u, i; (u = l.next()) && !u.done; )
    if (((i = u.value), te(r, i, n, o) && te(a, br(t, i), n, o)))
      return Yc(e, i), !0;
  return !1;
}
function te(e, t, r, a) {
  var n = r || {};
  if (n.strict ? Tu(e, t) : e === t) return !0;
  var o = ju(e),
    l = ju(t);
  if (o !== l) return !1;
  if (!e || !t || (typeof e != 'object' && typeof t != 'object'))
    return n.strict ? Tu(e, t) : e == t;
  var u = a.has(e),
    i = a.has(t),
    s;
  if (u && i) {
    if (a.get(e) === a.get(t)) return !0;
  } else s = {};
  return u || a.set(e, s), i || a.set(t, s), zP(e, t, n, a);
}
function zu(e) {
  return !e ||
    typeof e != 'object' ||
    typeof e.length != 'number' ||
    typeof e.copy != 'function' ||
    typeof e.slice != 'function' ||
    (e.length > 0 && typeof e[0] != 'number')
    ? !1
    : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
}
function HP(e, t, r, a) {
  if (nr(e) !== nr(t)) return !1;
  for (var n = rt(e), o = rt(t), l, u, i; (l = n.next()) && !l.done; )
    if (l.value && typeof l.value == 'object')
      i || (i = new mr()), yr(i, l.value);
    else if (!hr(t, l.value)) {
      if (r.strict || !UP(e, t, l.value)) return !1;
      i || (i = new mr()), yr(i, l.value);
    }
  if (i) {
    for (; (u = o.next()) && !u.done; )
      if (u.value && typeof u.value == 'object') {
        if (!Hu(i, u.value, r.strict, a)) return !1;
      } else if (!r.strict && !hr(e, u.value) && !Hu(i, u.value, r.strict, a))
        return !1;
    return nr(i) === 0;
  }
  return !0;
}
function WP(e, t, r, a) {
  if (Uu(e) !== Uu(t)) return !1;
  for (var n = rt(e), o = rt(t), l, u, i, s, d, f; (l = n.next()) && !l.done; )
    if (((s = l.value[0]), (d = l.value[1]), s && typeof s == 'object'))
      i || (i = new mr()), yr(i, s);
    else if (
      ((f = br(t, s)), (typeof f > 'u' && !gl(t, s)) || !te(d, f, r, a))
    ) {
      if (r.strict || !VP(e, t, s, d, r, a)) return !1;
      i || (i = new mr()), yr(i, s);
    }
  if (i) {
    for (; (u = o.next()) && !u.done; )
      if (((s = u.value[0]), (f = u.value[1]), s && typeof s == 'object')) {
        if (!Wu(i, e, s, f, r, a)) return !1;
      } else if (
        !r.strict &&
        (!e.has(s) || !te(br(e, s), f, r, a)) &&
        !Wu(i, e, s, f, Qc({}, r, { strict: !1 }), a)
      )
        return !1;
    return nr(i) === 0;
  }
  return !0;
}
function zP(e, t, r, a) {
  var n, o;
  if (
    typeof e != typeof t ||
    e == null ||
    t == null ||
    Vu(e) !== Vu(t) ||
    $u(e) !== $u(t)
  )
    return !1;
  var l = xu(e),
    u = xu(t);
  if (l !== u) return !1;
  var i = e instanceof Error,
    s = t instanceof Error;
  if (i !== s || ((i || s) && (e.name !== t.name || e.message !== t.message)))
    return !1;
  var d = Au(e),
    f = Au(t);
  if (d !== f || ((d || f) && (e.source !== t.source || qu(e) !== qu(t))))
    return !1;
  var v = Su(e),
    _ = Su(t);
  if (
    v !== _ ||
    ((v || _) && Fu(e) !== Fu(t)) ||
    (r.strict && zo && zo(e) !== zo(t))
  )
    return !1;
  var P = ku(e),
    C = ku(t);
  if ((P || C) && P !== C) return !1;
  var q = zu(e),
    p = zu(t);
  if (q !== p) return !1;
  if (q || p) {
    if (e.length !== t.length) return !1;
    for (n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
    return !0;
  }
  var y = Mu(e),
    R = Mu(t);
  if (y !== R) return !1;
  if (y || R)
    return Du(e) !== Du(t)
      ? !1
      : typeof Uint8Array == 'function' &&
          te(new Uint8Array(e), new Uint8Array(t), r, a);
  var w = Bu(e),
    O = Bu(t);
  if (w !== O) return !1;
  if (w || O)
    return Lu(e) !== Lu(t)
      ? !1
      : typeof Uint8Array == 'function' &&
          te(new Uint8Array(e), new Uint8Array(t), r, a);
  if (typeof e != typeof t) return !1;
  var m = Iu(e),
    h = Iu(t);
  if (m.length !== h.length) return !1;
  for (m.sort(), h.sort(), n = m.length - 1; n >= 0; n--)
    if (m[n] != h[n]) return !1;
  for (n = m.length - 1; n >= 0; n--)
    if (((o = m[n]), !te(e[o], t[o], r, a))) return !1;
  var E = Nu(e),
    j = Nu(t);
  return E !== j
    ? !1
    : E === 'Set' || j === 'Set'
    ? HP(e, t, r, a)
    : E === 'Map'
    ? WP(e, t, r, a)
    : !0;
}
var KP = function (t, r, a) {
  return te(t, r, a, FP());
};
Object.defineProperty(co, '__esModule', { value: !0 });
co.default = void 0;
var GP = Yl(KP),
  XP = Yl(Fe),
  Zc = Yl(lt);
function Yl(e) {
  return e && e.__esModule ? e : { default: e };
}
function Ko(e, t) {
  return JP(e) || YP(e, t) || ed(e, t) || QP();
}
function QP() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function YP(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (r != null) {
    var a = [],
      n = !0,
      o = !1,
      l,
      u;
    try {
      for (
        r = r.call(e);
        !(n = (l = r.next()).done) && (a.push(l.value), !(t && a.length === t));
        n = !0
      );
    } catch (i) {
      (o = !0), (u = i);
    } finally {
      try {
        !n && r.return != null && r.return();
      } finally {
        if (o) throw u;
      }
    }
    return a;
  }
}
function JP(e) {
  if (Array.isArray(e)) return e;
}
function ZP(e, t) {
  var r = (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (!r) {
    if (
      Array.isArray(e) ||
      (r = ed(e)) ||
      (t && e && typeof e.length == 'number')
    ) {
      r && (e = r);
      var a = 0,
        n = function () {};
      return {
        s: n,
        n: function () {
          return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
        },
        e: function (s) {
          throw s;
        },
        f: n,
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o = !0,
    l = !1,
    u;
  return {
    s: function () {
      r = r.call(e);
    },
    n: function () {
      var s = r.next();
      return (o = s.done), s;
    },
    e: function (s) {
      (l = !0), (u = s);
    },
    f: function () {
      try {
        !o && r.return != null && r.return();
      } finally {
        if (l) throw u;
      }
    },
  };
}
function ed(e, t) {
  if (e) {
    if (typeof e == 'string') return Ku(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === 'Object' && e.constructor && (r = e.constructor.name),
      r === 'Map' || r === 'Set')
    )
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Ku(e, t);
  }
}
function Ku(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
  return a;
}
var _e = [],
  Gu = Zc.default.keys();
for (var Go = 0; Go < Gu.length; Go++) {
  var Xo = Gu[Go],
    Qo = Zc.default.get(Xo);
  if (Qo)
    for (
      var Xu = [].concat(Qo.baseConcepts, Qo.relatedConcepts), Yo = 0;
      Yo < Xu.length;
      Yo++
    ) {
      var Qu = Xu[Yo];
      if (Qu.module === 'HTML') {
        var Jo = Qu.concept;
        Jo &&
          (function () {
            var e = JSON.stringify(Jo),
              t = _e.find(function (o) {
                return JSON.stringify(o[0]) === e;
              }),
              r = void 0;
            t ? (r = t[1]) : (r = []);
            for (var a = !0, n = 0; n < r.length; n++)
              if (r[n] === Xo) {
                a = !1;
                break;
              }
            a && r.push(Xo), _e.push([Jo, r]);
          })();
      }
    }
}
var El = {
    entries: function () {
      return _e;
    },
    forEach: function (t) {
      var r =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null,
        a = ZP(_e),
        n;
      try {
        for (a.s(); !(n = a.n()).done; ) {
          var o = Ko(n.value, 2),
            l = o[0],
            u = o[1];
          t.call(r, u, l, _e);
        }
      } catch (i) {
        a.e(i);
      } finally {
        a.f();
      }
    },
    get: function (t) {
      var r = _e.find(function (a) {
        return (0, GP.default)(t, a[0]);
      });
      return r && r[1];
    },
    has: function (t) {
      return !!El.get(t);
    },
    keys: function () {
      return _e.map(function (t) {
        var r = Ko(t, 1),
          a = r[0];
        return a;
      });
    },
    values: function () {
      return _e.map(function (t) {
        var r = Ko(t, 2),
          a = r[1];
        return a;
      });
    },
  },
  e0 = (0, XP.default)(El, El.entries());
co.default = e0;
var fo = {};
Object.defineProperty(fo, '__esModule', { value: !0 });
fo.default = void 0;
var t0 = rd(Fe),
  td = rd(lt);
function rd(e) {
  return e && e.__esModule ? e : { default: e };
}
function Zo(e, t) {
  return n0(e) || a0(e, t) || ad(e, t) || r0();
}
function r0() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function a0(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (r != null) {
    var a = [],
      n = !0,
      o = !1,
      l,
      u;
    try {
      for (
        r = r.call(e);
        !(n = (l = r.next()).done) && (a.push(l.value), !(t && a.length === t));
        n = !0
      );
    } catch (i) {
      (o = !0), (u = i);
    } finally {
      try {
        !n && r.return != null && r.return();
      } finally {
        if (o) throw u;
      }
    }
    return a;
  }
}
function n0(e) {
  if (Array.isArray(e)) return e;
}
function o0(e, t) {
  var r = (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (!r) {
    if (
      Array.isArray(e) ||
      (r = ad(e)) ||
      (t && e && typeof e.length == 'number')
    ) {
      r && (e = r);
      var a = 0,
        n = function () {};
      return {
        s: n,
        n: function () {
          return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
        },
        e: function (s) {
          throw s;
        },
        f: n,
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o = !0,
    l = !1,
    u;
  return {
    s: function () {
      r = r.call(e);
    },
    n: function () {
      var s = r.next();
      return (o = s.done), s;
    },
    e: function (s) {
      (l = !0), (u = s);
    },
    f: function () {
      try {
        !o && r.return != null && r.return();
      } finally {
        if (l) throw u;
      }
    },
  };
}
function ad(e, t) {
  if (e) {
    if (typeof e == 'string') return Yu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === 'Object' && e.constructor && (r = e.constructor.name),
      r === 'Map' || r === 'Set')
    )
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Yu(e, t);
  }
}
function Yu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
  return a;
}
var Re = [],
  nd = td.default.keys(),
  l0 = function (t) {
    var r = nd[t],
      a = td.default.get(r);
    if (a)
      for (
        var n = [].concat(a.baseConcepts, a.relatedConcepts), o = 0;
        o < n.length;
        o++
      ) {
        var l = n[o];
        if (l.module === 'HTML') {
          var u = l.concept;
          if (u) {
            var i = Re.find(function (d) {
                return d[0] === r;
              }),
              s = void 0;
            i ? (s = i[1]) : (s = []), s.push(u), Re.push([r, s]);
          }
        }
      }
  };
for (var el = 0; el < nd.length; el++) l0(el);
var _l = {
    entries: function () {
      return Re;
    },
    forEach: function (t) {
      var r =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null,
        a = o0(Re),
        n;
      try {
        for (a.s(); !(n = a.n()).done; ) {
          var o = Zo(n.value, 2),
            l = o[0],
            u = o[1];
          t.call(r, u, l, Re);
        }
      } catch (i) {
        a.e(i);
      } finally {
        a.f();
      }
    },
    get: function (t) {
      var r = Re.find(function (a) {
        return a[0] === t;
      });
      return r && r[1];
    },
    has: function (t) {
      return !!_l.get(t);
    },
    keys: function () {
      return Re.map(function (t) {
        var r = Zo(t, 1),
          a = r[0];
        return a;
      });
    },
    values: function () {
      return Re.map(function (t) {
        var r = Zo(t, 2),
          a = r[1];
        return a;
      });
    },
  },
  i0 = (0, t0.default)(_l, _l.entries());
fo.default = i0;
Object.defineProperty(ee, '__esModule', { value: !0 });
var Je =
    (ee.roles =
    ld =
    ee.roleElements =
    od =
    ee.elementRoles =
    ee.dom =
    ee.aria =
      void 0),
  u0 = Dt(Tr),
  s0 = Dt(xr),
  c0 = Dt(lt),
  d0 = Dt(co),
  f0 = Dt(fo);
function Dt(e) {
  return e && e.__esModule ? e : { default: e };
}
var p0 = u0.default;
ee.aria = p0;
var v0 = s0.default;
ee.dom = v0;
var m0 = c0.default;
Je = ee.roles = m0;
var b0 = d0.default,
  od = (ee.elementRoles = b0),
  y0 = f0.default,
  ld = (ee.roleElements = y0),
  Rl = {},
  h0 = {
    get exports() {
      return Rl;
    },
    set exports(e) {
      Rl = e;
    },
  };
(function (e) {
  var t = (function () {
    var r = String.fromCharCode,
      a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
      n = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$',
      o = {};
    function l(i, s) {
      if (!o[i]) {
        o[i] = {};
        for (var d = 0; d < i.length; d++) o[i][i.charAt(d)] = d;
      }
      return o[i][s];
    }
    var u = {
      compressToBase64: function (i) {
        if (i == null) return '';
        var s = u._compress(i, 6, function (d) {
          return a.charAt(d);
        });
        switch (s.length % 4) {
          default:
          case 0:
            return s;
          case 1:
            return s + '===';
          case 2:
            return s + '==';
          case 3:
            return s + '=';
        }
      },
      decompressFromBase64: function (i) {
        return i == null
          ? ''
          : i == ''
          ? null
          : u._decompress(i.length, 32, function (s) {
              return l(a, i.charAt(s));
            });
      },
      compressToUTF16: function (i) {
        return i == null
          ? ''
          : u._compress(i, 15, function (s) {
              return r(s + 32);
            }) + ' ';
      },
      decompressFromUTF16: function (i) {
        return i == null
          ? ''
          : i == ''
          ? null
          : u._decompress(i.length, 16384, function (s) {
              return i.charCodeAt(s) - 32;
            });
      },
      compressToUint8Array: function (i) {
        for (
          var s = u.compress(i),
            d = new Uint8Array(s.length * 2),
            f = 0,
            v = s.length;
          f < v;
          f++
        ) {
          var _ = s.charCodeAt(f);
          (d[f * 2] = _ >>> 8), (d[f * 2 + 1] = _ % 256);
        }
        return d;
      },
      decompressFromUint8Array: function (i) {
        if (i == null) return u.decompress(i);
        for (var s = new Array(i.length / 2), d = 0, f = s.length; d < f; d++)
          s[d] = i[d * 2] * 256 + i[d * 2 + 1];
        var v = [];
        return (
          s.forEach(function (_) {
            v.push(r(_));
          }),
          u.decompress(v.join(''))
        );
      },
      compressToEncodedURIComponent: function (i) {
        return i == null
          ? ''
          : u._compress(i, 6, function (s) {
              return n.charAt(s);
            });
      },
      decompressFromEncodedURIComponent: function (i) {
        return i == null
          ? ''
          : i == ''
          ? null
          : ((i = i.replace(/ /g, '+')),
            u._decompress(i.length, 32, function (s) {
              return l(n, i.charAt(s));
            }));
      },
      compress: function (i) {
        return u._compress(i, 16, function (s) {
          return r(s);
        });
      },
      _compress: function (i, s, d) {
        if (i == null) return '';
        var f,
          v,
          _ = {},
          P = {},
          C = '',
          q = '',
          p = '',
          y = 2,
          R = 3,
          w = 2,
          O = [],
          m = 0,
          h = 0,
          E;
        for (E = 0; E < i.length; E += 1)
          if (
            ((C = i.charAt(E)),
            Object.prototype.hasOwnProperty.call(_, C) ||
              ((_[C] = R++), (P[C] = !0)),
            (q = p + C),
            Object.prototype.hasOwnProperty.call(_, q))
          )
            p = q;
          else {
            if (Object.prototype.hasOwnProperty.call(P, p)) {
              if (p.charCodeAt(0) < 256) {
                for (f = 0; f < w; f++)
                  (m = m << 1),
                    h == s - 1 ? ((h = 0), O.push(d(m)), (m = 0)) : h++;
                for (v = p.charCodeAt(0), f = 0; f < 8; f++)
                  (m = (m << 1) | (v & 1)),
                    h == s - 1 ? ((h = 0), O.push(d(m)), (m = 0)) : h++,
                    (v = v >> 1);
              } else {
                for (v = 1, f = 0; f < w; f++)
                  (m = (m << 1) | v),
                    h == s - 1 ? ((h = 0), O.push(d(m)), (m = 0)) : h++,
                    (v = 0);
                for (v = p.charCodeAt(0), f = 0; f < 16; f++)
                  (m = (m << 1) | (v & 1)),
                    h == s - 1 ? ((h = 0), O.push(d(m)), (m = 0)) : h++,
                    (v = v >> 1);
              }
              y--, y == 0 && ((y = Math.pow(2, w)), w++), delete P[p];
            } else
              for (v = _[p], f = 0; f < w; f++)
                (m = (m << 1) | (v & 1)),
                  h == s - 1 ? ((h = 0), O.push(d(m)), (m = 0)) : h++,
                  (v = v >> 1);
            y--,
              y == 0 && ((y = Math.pow(2, w)), w++),
              (_[q] = R++),
              (p = String(C));
          }
        if (p !== '') {
          if (Object.prototype.hasOwnProperty.call(P, p)) {
            if (p.charCodeAt(0) < 256) {
              for (f = 0; f < w; f++)
                (m = m << 1),
                  h == s - 1 ? ((h = 0), O.push(d(m)), (m = 0)) : h++;
              for (v = p.charCodeAt(0), f = 0; f < 8; f++)
                (m = (m << 1) | (v & 1)),
                  h == s - 1 ? ((h = 0), O.push(d(m)), (m = 0)) : h++,
                  (v = v >> 1);
            } else {
              for (v = 1, f = 0; f < w; f++)
                (m = (m << 1) | v),
                  h == s - 1 ? ((h = 0), O.push(d(m)), (m = 0)) : h++,
                  (v = 0);
              for (v = p.charCodeAt(0), f = 0; f < 16; f++)
                (m = (m << 1) | (v & 1)),
                  h == s - 1 ? ((h = 0), O.push(d(m)), (m = 0)) : h++,
                  (v = v >> 1);
            }
            y--, y == 0 && ((y = Math.pow(2, w)), w++), delete P[p];
          } else
            for (v = _[p], f = 0; f < w; f++)
              (m = (m << 1) | (v & 1)),
                h == s - 1 ? ((h = 0), O.push(d(m)), (m = 0)) : h++,
                (v = v >> 1);
          y--, y == 0 && ((y = Math.pow(2, w)), w++);
        }
        for (v = 2, f = 0; f < w; f++)
          (m = (m << 1) | (v & 1)),
            h == s - 1 ? ((h = 0), O.push(d(m)), (m = 0)) : h++,
            (v = v >> 1);
        for (;;)
          if (((m = m << 1), h == s - 1)) {
            O.push(d(m));
            break;
          } else h++;
        return O.join('');
      },
      decompress: function (i) {
        return i == null
          ? ''
          : i == ''
          ? null
          : u._decompress(i.length, 32768, function (s) {
              return i.charCodeAt(s);
            });
      },
      _decompress: function (i, s, d) {
        var f = [],
          v = 4,
          _ = 4,
          P = 3,
          C = '',
          q = [],
          p,
          y,
          R,
          w,
          O,
          m,
          h,
          E = { val: d(0), position: s, index: 1 };
        for (p = 0; p < 3; p += 1) f[p] = p;
        for (R = 0, O = Math.pow(2, 2), m = 1; m != O; )
          (w = E.val & E.position),
            (E.position >>= 1),
            E.position == 0 && ((E.position = s), (E.val = d(E.index++))),
            (R |= (w > 0 ? 1 : 0) * m),
            (m <<= 1);
        switch (R) {
          case 0:
            for (R = 0, O = Math.pow(2, 8), m = 1; m != O; )
              (w = E.val & E.position),
                (E.position >>= 1),
                E.position == 0 && ((E.position = s), (E.val = d(E.index++))),
                (R |= (w > 0 ? 1 : 0) * m),
                (m <<= 1);
            h = r(R);
            break;
          case 1:
            for (R = 0, O = Math.pow(2, 16), m = 1; m != O; )
              (w = E.val & E.position),
                (E.position >>= 1),
                E.position == 0 && ((E.position = s), (E.val = d(E.index++))),
                (R |= (w > 0 ? 1 : 0) * m),
                (m <<= 1);
            h = r(R);
            break;
          case 2:
            return '';
        }
        for (f[3] = h, y = h, q.push(h); ; ) {
          if (E.index > i) return '';
          for (R = 0, O = Math.pow(2, P), m = 1; m != O; )
            (w = E.val & E.position),
              (E.position >>= 1),
              E.position == 0 && ((E.position = s), (E.val = d(E.index++))),
              (R |= (w > 0 ? 1 : 0) * m),
              (m <<= 1);
          switch ((h = R)) {
            case 0:
              for (R = 0, O = Math.pow(2, 8), m = 1; m != O; )
                (w = E.val & E.position),
                  (E.position >>= 1),
                  E.position == 0 && ((E.position = s), (E.val = d(E.index++))),
                  (R |= (w > 0 ? 1 : 0) * m),
                  (m <<= 1);
              (f[_++] = r(R)), (h = _ - 1), v--;
              break;
            case 1:
              for (R = 0, O = Math.pow(2, 16), m = 1; m != O; )
                (w = E.val & E.position),
                  (E.position >>= 1),
                  E.position == 0 && ((E.position = s), (E.val = d(E.index++))),
                  (R |= (w > 0 ? 1 : 0) * m),
                  (m <<= 1);
              (f[_++] = r(R)), (h = _ - 1), v--;
              break;
            case 2:
              return q.join('');
          }
          if ((v == 0 && ((v = Math.pow(2, P)), P++), f[h])) C = f[h];
          else if (h === _) C = y + y.charAt(0);
          else return null;
          q.push(C),
            (f[_++] = y + C.charAt(0)),
            v--,
            (y = C),
            v == 0 && ((v = Math.pow(2, P)), P++);
        }
      },
    };
    return u;
  })();
  e != null && (e.exports = t);
})(h0);
const g0 = Rl;
function id(e) {
  return e.replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
const E0 = (e, t, r, a, n, o, l) => {
    const u = a + r.indent,
      i = r.colors;
    return e
      .map((s) => {
        const d = t[s];
        let f = l(d, r, u, n, o);
        return (
          typeof d != 'string' &&
            (f.indexOf(`
`) !== -1 && (f = r.spacingOuter + u + f + r.spacingOuter + a),
            (f = '{' + f + '}')),
          r.spacingInner +
            a +
            i.prop.open +
            s +
            i.prop.close +
            '=' +
            i.value.open +
            f +
            i.value.close
        );
      })
      .join('');
  },
  _0 = 3,
  R0 = (e, t, r, a, n, o) =>
    e
      .map((l) => {
        const u = typeof l == 'string' ? ud(l, t) : o(l, t, r, a, n);
        return u === '' &&
          typeof l == 'object' &&
          l !== null &&
          l.nodeType !== _0
          ? ''
          : t.spacingOuter + r + u;
      })
      .join(''),
  ud = (e, t) => {
    const r = t.colors.content;
    return r.open + id(e) + r.close;
  },
  C0 = (e, t) => {
    const r = t.colors.comment;
    return r.open + '<!--' + id(e) + '-->' + r.close;
  },
  w0 = (e, t, r, a, n) => {
    const o = a.colors.tag;
    return (
      o.open +
      '<' +
      e +
      (t && o.close + t + a.spacingOuter + n + o.open) +
      (r
        ? '>' + o.close + r + a.spacingOuter + n + o.open + '</' + e
        : (t && !a.min ? '' : ' ') + '/') +
      '>' +
      o.close
    );
  },
  P0 = (e, t) => {
    const r = t.colors.tag;
    return r.open + '<' + e + r.close + ' …' + r.open + ' />' + r.close;
  },
  O0 = 1,
  sd = 3,
  cd = 8,
  dd = 11,
  q0 = /^((HTML|SVG)\w*)?Element$/,
  T0 = (e) => {
    const t = e.constructor.name,
      { nodeType: r, tagName: a } = e,
      n =
        (typeof a == 'string' && a.includes('-')) ||
        (typeof e.hasAttribute == 'function' && e.hasAttribute('is'));
    return (
      (r === O0 && (q0.test(t) || n)) ||
      (r === sd && t === 'Text') ||
      (r === cd && t === 'Comment') ||
      (r === dd && t === 'DocumentFragment')
    );
  };
function $0(e) {
  return e.nodeType === sd;
}
function x0(e) {
  return e.nodeType === cd;
}
function tl(e) {
  return e.nodeType === dd;
}
function M0(e) {
  return {
    test: (t) => {
      var r;
      return (
        (t == null || (r = t.constructor) == null ? void 0 : r.name) && T0(t)
      );
    },
    serialize: (t, r, a, n, o, l) => {
      if ($0(t)) return ud(t.data, r);
      if (x0(t)) return C0(t.data, r);
      const u = tl(t) ? 'DocumentFragment' : t.tagName.toLowerCase();
      return ++n > r.maxDepth
        ? P0(u, r)
        : w0(
            u,
            E0(
              tl(t)
                ? []
                : Array.from(t.attributes)
                    .map((i) => i.name)
                    .sort(),
              tl(t)
                ? {}
                : Array.from(t.attributes).reduce(
                    (i, s) => ((i[s.name] = s.value), i),
                    {},
                  ),
              r,
              a + r.indent,
              n,
              o,
              l,
            ),
            R0(
              Array.prototype.slice.call(t.childNodes || t.children).filter(e),
              r,
              a + r.indent,
              n,
              o,
              l,
            ),
            r,
            a,
          );
    },
  };
}
let fd = null,
  Jl = null,
  Zl = null;
try {
  const e = module && module.require;
  (Jl = e.call(module, 'fs').readFileSync),
    (Zl = e.call(module, '@babel/code-frame').codeFrameColumns),
    (fd = e.call(module, 'chalk'));
} catch {}
function S0(e) {
  const t = e.indexOf('(') + 1,
    r = e.indexOf(')'),
    a = e.slice(t, r),
    n = a.split(':'),
    [o, l, u] = [n[0], parseInt(n[1], 10), parseInt(n[2], 10)];
  let i = '';
  try {
    i = Jl(o, 'utf-8');
  } catch {
    return '';
  }
  const s = Zl(
    i,
    { start: { line: l, column: u } },
    { highlightCode: !0, linesBelow: 0 },
  );
  return (
    fd.dim(a) +
    `
` +
    s +
    `
`
  );
}
function A0() {
  if (!Jl || !Zl) return '';
  const t = new Error().stack
    .split(
      `
`,
    )
    .slice(1)
    .find((r) => !r.includes('node_modules/'));
  return S0(t);
}
const pd = 3;
function rl() {
  return typeof jest < 'u' && jest !== null
    ? setTimeout._isMockFunction === !0 ||
        Object.prototype.hasOwnProperty.call(setTimeout, 'clock')
    : !1;
}
function ei() {
  if (typeof window > 'u') throw new Error('Could not find default container');
  return window.document;
}
function vd(e) {
  if (e.defaultView) return e.defaultView;
  if (e.ownerDocument && e.ownerDocument.defaultView)
    return e.ownerDocument.defaultView;
  if (e.window) return e.window;
  throw e.ownerDocument && e.ownerDocument.defaultView === null
    ? new Error(
        'It looks like the window object is not available for the provided node.',
      )
    : e.then instanceof Function
    ? new Error(
        'It looks like you passed a Promise object instead of a DOM node. Did you do something like `fireEvent.click(screen.findBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`, or await the findBy query `fireEvent.click(await screen.findBy...`?',
      )
    : Array.isArray(e)
    ? new Error(
        'It looks like you passed an Array instead of a DOM node. Did you do something like `fireEvent.click(screen.getAllBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`?',
      )
    : typeof e.debug == 'function' &&
      typeof e.logTestingPlaygroundURL == 'function'
    ? new Error(
        'It looks like you passed a `screen` object. Did you do something like `fireEvent.click(screen, ...` when you meant to use a query, e.g. `fireEvent.click(screen.getBy..., `?',
      )
    : new Error(
        'The given node is not an Element, the node type is: ' + typeof e + '.',
      );
}
function fe(e) {
  if (
    !e ||
    typeof e.querySelector != 'function' ||
    typeof e.querySelectorAll != 'function'
  )
    throw new TypeError(
      'Expected container to be an Element, a Document or a DocumentFragment but got ' +
        t(e) +
        '.',
    );
  function t(r) {
    return typeof r == 'object'
      ? r === null
        ? 'null'
        : r.constructor.name
      : typeof r;
  }
}
const B0 = () => {
    let e;
    try {
      var t, r;
      e = JSON.parse(
        (t = process) == null || (r = t.env) == null ? void 0 : r.COLORS,
      );
    } catch {}
    return typeof e == 'boolean'
      ? e
      : typeof process < 'u' &&
          process.versions !== void 0 &&
          process.versions.node !== void 0;
  },
  { DOMCollection: I0 } = Hl,
  j0 = 1,
  N0 = 8;
function k0(e) {
  return (
    e.nodeType !== N0 && (e.nodeType !== j0 || !e.matches($().defaultIgnore))
  );
}
function wt(e, t, r) {
  if (
    (r === void 0 && (r = {}),
    e || (e = ei().body),
    typeof t != 'number' &&
      (t = (typeof process < 'u' && {}.DEBUG_PRINT_LIMIT) || 7e3),
    t === 0)
  )
    return '';
  e.documentElement && (e = e.documentElement);
  let a = typeof e;
  if (
    (a === 'object' ? (a = e.constructor.name) : (e = {}), !('outerHTML' in e))
  )
    throw new TypeError('Expected an element or document but got ' + a);
  const { filterNode: n = k0, ...o } = r,
    l = uc(e, {
      plugins: [M0(n), I0],
      printFunctionName: !1,
      highlight: B0(),
      ...o,
    });
  return t !== void 0 && e.outerHTML.length > t ? l.slice(0, t) + '...' : l;
}
const Cl = function () {
  const e = A0();
  console.log(
    e
      ? wt(...arguments) +
          `

` +
          e
      : wt(...arguments),
  );
};
let je = {
  testIdAttribute: 'data-testid',
  asyncUtilTimeout: 1e3,
  asyncWrapper: (e) => e(),
  unstable_advanceTimersWrapper: (e) => e(),
  eventWrapper: (e) => e(),
  defaultHidden: !1,
  defaultIgnore: 'script, style',
  showOriginalStackTrace: !1,
  throwSuggestions: !1,
  getElementError(e, t) {
    const r = wt(t),
      a = new Error(
        [
          e,
          'Ignored nodes: comments, ' +
            je.defaultIgnore +
            `
` +
            r,
        ].filter(Boolean).join(`

`),
      );
    return (a.name = 'TestingLibraryElementError'), a;
  },
  _disableExpensiveErrorDiagnostics: !1,
  computedStyleSupportsPseudoElements: !1,
};
function D0(e) {
  try {
    return (je._disableExpensiveErrorDiagnostics = !0), e();
  } finally {
    je._disableExpensiveErrorDiagnostics = !1;
  }
}
function L0(e) {
  typeof e == 'function' && (e = e(je)), (je = { ...je, ...e });
}
function $() {
  return je;
}
const F0 = [
  'button',
  'meter',
  'output',
  'progress',
  'select',
  'textarea',
  'input',
];
function md(e) {
  return F0.includes(e.nodeName.toLowerCase())
    ? ''
    : e.nodeType === pd
    ? e.textContent
    : Array.from(e.childNodes)
        .map((t) => md(t))
        .join('');
}
function wl(e) {
  let t;
  return (
    e.tagName.toLowerCase() === 'label'
      ? (t = md(e))
      : (t = e.value || e.textContent),
    t
  );
}
function bd(e) {
  if (e.labels !== void 0) {
    var t;
    return (t = e.labels) != null ? t : [];
  }
  if (!V0(e)) return [];
  const r = e.ownerDocument.querySelectorAll('label');
  return Array.from(r).filter((a) => a.control === e);
}
function V0(e) {
  return (
    /BUTTON|METER|OUTPUT|PROGRESS|SELECT|TEXTAREA/.test(e.tagName) ||
    (e.tagName === 'INPUT' && e.getAttribute('type') !== 'hidden')
  );
}
function yd(e, t, r) {
  let { selector: a = '*' } = r === void 0 ? {} : r;
  const n = t.getAttribute('aria-labelledby'),
    o = n ? n.split(' ') : [];
  return o.length
    ? o.map((l) => {
        const u = e.querySelector('[id="' + l + '"]');
        return u
          ? { content: wl(u), formControl: null }
          : { content: '', formControl: null };
      })
    : Array.from(bd(t)).map((l) => {
        const u = wl(l),
          i = 'button, input, meter, output, progress, select, textarea',
          s = Array.from(l.querySelectorAll(i)).filter((d) => d.matches(a))[0];
        return { content: u, formControl: s };
      });
}
function hd(e) {
  if (e == null)
    throw new Error(
      'It looks like ' +
        e +
        ' was passed instead of a matcher. Did you do something like getByText(' +
        e +
        ')?',
    );
}
function Ve(e, t, r, a) {
  if (typeof e != 'string') return !1;
  hd(r);
  const n = a(e);
  return typeof r == 'string' || typeof r == 'number'
    ? n.toLowerCase().includes(r.toString().toLowerCase())
    : typeof r == 'function'
    ? r(n, t)
    : gd(r, n);
}
function se(e, t, r, a) {
  if (typeof e != 'string') return !1;
  hd(r);
  const n = a(e);
  return r instanceof Function
    ? r(n, t)
    : r instanceof RegExp
    ? gd(r, n)
    : n === String(r);
}
function ti(e) {
  let { trim: t = !0, collapseWhitespace: r = !0 } = e === void 0 ? {} : e;
  return (a) => {
    let n = a;
    return (n = t ? n.trim() : n), (n = r ? n.replace(/\s+/g, ' ') : n), n;
  };
}
function Ae(e) {
  let { trim: t, collapseWhitespace: r, normalizer: a } = e;
  if (!a) return ti({ trim: t, collapseWhitespace: r });
  if (typeof t < 'u' || typeof r < 'u')
    throw new Error(
      'trim and collapseWhitespace are not supported with a normalizer. If you want to use the default trim and collapseWhitespace logic in your normalizer, use "getDefaultNormalizer({trim, collapseWhitespace})" and compose that into your normalizer',
    );
  return a;
}
function gd(e, t) {
  const r = e.test(t);
  return (
    e.global &&
      e.lastIndex !== 0 &&
      (console.warn(
        'To match all elements we had to reset the lastIndex of the RegExp because the global flag is enabled. We encourage to remove the global flag from the RegExp.',
      ),
      (e.lastIndex = 0)),
    r
  );
}
function Lt(e) {
  return e.matches('input[type=submit], input[type=button], input[type=reset]')
    ? e.value
    : Array.from(e.childNodes)
        .filter((t) => t.nodeType === pd && Boolean(t.textContent))
        .map((t) => t.textContent)
        .join('');
}
const U0 = H0(od);
function Ed(e) {
  return (
    e.hidden === !0 ||
    e.getAttribute('aria-hidden') === 'true' ||
    e.ownerDocument.defaultView.getComputedStyle(e).display === 'none'
  );
}
function po(e, t) {
  t === void 0 && (t = {});
  const { isSubtreeInaccessible: r = Ed } = t;
  if (e.ownerDocument.defaultView.getComputedStyle(e).visibility === 'hidden')
    return !0;
  let n = e;
  for (; n; ) {
    if (r(n)) return !0;
    n = n.parentElement;
  }
  return !1;
}
function ri(e) {
  for (const { match: t, roles: r } of U0) if (t(e)) return [...r];
  return [];
}
function H0(e) {
  function t(l) {
    let { name: u, attributes: i } = l;
    return (
      '' +
      u +
      i
        .map((s) => {
          let { name: d, value: f, constraints: v = [] } = s;
          return v.indexOf('undefined') !== -1
            ? ':not([' + d + '])'
            : f
            ? '[' + d + '="' + f + '"]'
            : '[' + d + ']';
        })
        .join('')
    );
  }
  function r(l) {
    let { attributes: u = [] } = l;
    return u.length;
  }
  function a(l, u) {
    let { specificity: i } = l,
      { specificity: s } = u;
    return s - i;
  }
  function n(l) {
    let { attributes: u = [] } = l;
    const i = u.findIndex(
      (d) => d.value && d.name === 'type' && d.value === 'text',
    );
    i >= 0 && (u = [...u.slice(0, i), ...u.slice(i + 1)]);
    const s = t({ ...l, attributes: u });
    return (d) => (i >= 0 && d.type !== 'text' ? !1 : d.matches(s));
  }
  let o = [];
  for (const [l, u] of e.entries())
    o = [...o, { match: n(l), roles: Array.from(u), specificity: r(l) }];
  return o.sort(a);
}
function _d(e, t) {
  let { hidden: r = !1 } = t === void 0 ? {} : t;
  function a(n) {
    return [n, ...Array.from(n.children).reduce((o, l) => [...o, ...a(l)], [])];
  }
  return a(e)
    .filter((n) => (r === !1 ? po(n) === !1 : !0))
    .reduce((n, o) => {
      let l = [];
      return (
        o.hasAttribute('role')
          ? (l = o.getAttribute('role').split(' ').slice(0, 1))
          : (l = ri(o)),
        l.reduce(
          (u, i) =>
            Array.isArray(u[i])
              ? { ...u, [i]: [...u[i], o] }
              : { ...u, [i]: [o] },
          n,
        )
      );
    }, {});
}
function Rd(e, t) {
  let { hidden: r, includeDescription: a } = t;
  const n = _d(e, { hidden: r });
  return Object.entries(n)
    .filter((o) => {
      let [l] = o;
      return l !== 'generic';
    })
    .map((o) => {
      let [l, u] = o;
      const i = '-'.repeat(50),
        s = u.map((d) => {
          const f =
              'Name "' +
              zl(d, {
                computedStyleSupportsPseudoElements:
                  $().computedStyleSupportsPseudoElements,
              }) +
              `":
`,
            v = wt(d.cloneNode(!1));
          if (a) {
            const _ =
              'Description "' +
              Tc(d, {
                computedStyleSupportsPseudoElements:
                  $().computedStyleSupportsPseudoElements,
              }) +
              `":
`;
            return '' + f + _ + v;
          }
          return '' + f + v;
        }).join(`

`);
      return (
        l +
        `:

` +
        s +
        `

` +
        i
      );
    }).join(`
`);
}
const W0 = function (e, t) {
  let { hidden: r = !1 } = t === void 0 ? {} : t;
  return console.log(Rd(e, { hidden: r }));
};
function z0(e) {
  return e.tagName === 'OPTION' ? e.selected : Ft(e, 'aria-selected');
}
function K0(e) {
  if (!('indeterminate' in e && e.indeterminate))
    return 'checked' in e ? e.checked : Ft(e, 'aria-checked');
}
function G0(e) {
  return Ft(e, 'aria-pressed');
}
function X0(e) {
  var t, r;
  return (t =
    (r = Ft(e, 'aria-current')) != null ? r : e.getAttribute('aria-current')) !=
    null
    ? t
    : !1;
}
function Q0(e) {
  return Ft(e, 'aria-expanded');
}
function Ft(e, t) {
  const r = e.getAttribute(t);
  if (r === 'true') return !0;
  if (r === 'false') return !1;
}
function Y0(e) {
  const t = { H1: 1, H2: 2, H3: 3, H4: 4, H5: 5, H6: 6 };
  return (
    (e.getAttribute('aria-level') && Number(e.getAttribute('aria-level'))) ||
    t[e.tagName]
  );
}
const Ju = ti();
function J0(e) {
  return e.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&');
}
function Zu(e) {
  return new RegExp(J0(e.toLowerCase()), 'i');
}
function ye(e, t, r, a) {
  let { variant: n, name: o } = a,
    l = '';
  const u = {},
    i = [['Role', 'TestId'].includes(e) ? r : Zu(r)];
  o && (u.name = Zu(o)),
    e === 'Role' &&
      po(t) &&
      ((u.hidden = !0),
      (l = `Element is inaccessible. This means that the element and all its children are invisible to screen readers.
    If you are using the aria-hidden prop, make sure this is the right choice for your case.
    `)),
    Object.keys(u).length > 0 && i.push(u);
  const s = n + 'By' + e;
  return {
    queryName: e,
    queryMethod: s,
    queryArgs: i,
    variant: n,
    warning: l,
    toString() {
      l && console.warn(l);
      let [d, f] = i;
      return (
        (d = typeof d == 'string' ? "'" + d + "'" : d),
        (f = f
          ? ', { ' +
            Object.entries(f)
              .map((v) => {
                let [_, P] = v;
                return _ + ': ' + P;
              })
              .join(', ') +
            ' }'
          : ''),
        s + '(' + d + f + ')'
      );
    },
  };
}
function he(e, t, r) {
  return r && (!t || t.toLowerCase() === e.toLowerCase());
}
function gr(e, t, r) {
  var a, n;
  if ((t === void 0 && (t = 'get'), e.matches($().defaultIgnore))) return;
  const o =
    (a = e.getAttribute('role')) != null
      ? a
      : (n = ri(e)) == null
      ? void 0
      : n[0];
  if (o !== 'generic' && he('Role', r, o))
    return ye('Role', e, o, {
      variant: t,
      name: zl(e, {
        computedStyleSupportsPseudoElements:
          $().computedStyleSupportsPseudoElements,
      }),
    });
  const l = yd(document, e)
    .map((v) => v.content)
    .join(' ');
  if (he('LabelText', r, l)) return ye('LabelText', e, l, { variant: t });
  const u = e.getAttribute('placeholder');
  if (he('PlaceholderText', r, u))
    return ye('PlaceholderText', e, u, { variant: t });
  const i = Ju(Lt(e));
  if (he('Text', r, i)) return ye('Text', e, i, { variant: t });
  if (he('DisplayValue', r, e.value))
    return ye('DisplayValue', e, Ju(e.value), { variant: t });
  const s = e.getAttribute('alt');
  if (he('AltText', r, s)) return ye('AltText', e, s, { variant: t });
  const d = e.getAttribute('title');
  if (he('Title', r, d)) return ye('Title', e, d, { variant: t });
  const f = e.getAttribute($().testIdAttribute);
  if (he('TestId', r, f)) return ye('TestId', e, f, { variant: t });
}
function Jt(e, t) {
  e.stack = t.stack.replace(t.message, e.message);
}
function Z0(e, t) {
  let {
    container: r = ei(),
    timeout: a = $().asyncUtilTimeout,
    showOriginalStackTrace: n = $().showOriginalStackTrace,
    stackTraceError: o,
    interval: l = 50,
    onTimeout: u = (s) => (
      (s.message = $().getElementError(s.message, r).message), s
    ),
    mutationObserverOptions: i = {
      subtree: !0,
      childList: !0,
      attributes: !0,
      characterData: !0,
    },
  } = t;
  if (typeof e != 'function')
    throw new TypeError('Received `callback` arg must be a function');
  return new Promise(async (s, d) => {
    let f,
      v,
      _,
      P = !1,
      C = 'idle';
    const q = setTimeout(O, a),
      p = rl();
    if (p) {
      const { unstable_advanceTimersWrapper: m } = $();
      for (w(); !P; ) {
        if (!rl()) {
          const h = new Error(
            "Changed from using fake timers to real timers while using waitFor. This is not allowed and will result in very strange behavior. Please ensure you're awaiting all async things your test is doing before changing to real timers. For more info, please go to https://github.com/testing-library/dom-testing-library/issues/830",
          );
          n || Jt(h, o), d(h);
          return;
        }
        if (
          (m(() => {
            jest.advanceTimersByTime(l);
          }),
          w(),
          P)
        )
          break;
        await m(async () => {
          await new Promise((h) => {
            setTimeout(h, 0), jest.advanceTimersByTime(0);
          });
        });
      }
    } else {
      try {
        fe(r);
      } catch (h) {
        d(h);
        return;
      }
      v = setInterval(R, l);
      const { MutationObserver: m } = vd(r);
      (_ = new m(R)), _.observe(r, i), w();
    }
    function y(m, h) {
      (P = !0),
        clearTimeout(q),
        p || (clearInterval(v), _.disconnect()),
        m ? d(m) : s(h);
    }
    function R() {
      if (rl()) {
        const m = new Error(
          "Changed from using real timers to fake timers while using waitFor. This is not allowed and will result in very strange behavior. Please ensure you're awaiting all async things your test is doing before changing to fake timers. For more info, please go to https://github.com/testing-library/dom-testing-library/issues/830",
        );
        return n || Jt(m, o), d(m);
      } else return w();
    }
    function w() {
      if (C !== 'pending')
        try {
          const m = D0(e);
          typeof (m == null ? void 0 : m.then) == 'function'
            ? ((C = 'pending'),
              m.then(
                (h) => {
                  (C = 'resolved'), y(null, h);
                },
                (h) => {
                  (C = 'rejected'), (f = h);
                },
              ))
            : y(null, m);
        } catch (m) {
          f = m;
        }
    }
    function O() {
      let m;
      f
        ? ((m = f), !n && m.name === 'TestingLibraryElementError' && Jt(m, o))
        : ((m = new Error('Timed out in waitFor.')), n || Jt(m, o)),
        y(u(m), null);
    }
  });
}
function ai(e, t) {
  const r = new Error('STACK_TRACE_MESSAGE');
  return $().asyncWrapper(() => Z0(e, { stackTraceError: r, ...t }));
}
function vo(e, t) {
  return $().getElementError(e, t);
}
function mo(e, t) {
  return vo(
    e +
      '\n\n(If this is intentional, then use the `*AllBy*` variant of the query (like `queryAllByText`, `getAllByText`, or `findAllByText`)).',
    t,
  );
}
function Ue(e, t, r, a) {
  let {
    exact: n = !0,
    collapseWhitespace: o,
    trim: l,
    normalizer: u,
  } = a === void 0 ? {} : a;
  const i = n ? se : Ve,
    s = Ae({ collapseWhitespace: o, trim: l, normalizer: u });
  return Array.from(t.querySelectorAll('[' + e + ']')).filter((d) =>
    i(d.getAttribute(e), d, r, s),
  );
}
function Cd(e, t, r, a) {
  const n = Ue(e, t, r, a);
  if (n.length > 1)
    throw mo('Found multiple elements by [' + e + '=' + r + ']', t);
  return n[0] || null;
}
function at(e, t) {
  return function (r) {
    for (
      var a = arguments.length, n = new Array(a > 1 ? a - 1 : 0), o = 1;
      o < a;
      o++
    )
      n[o - 1] = arguments[o];
    const l = e(r, ...n);
    if (l.length > 1) {
      const u = l.map((i) => vo(null, i).message).join(`

`);
      throw mo(
        t(r, ...n) +
          `

Here are the matching elements:

` +
          u,
        r,
      );
    }
    return l[0] || null;
  };
}
function wd(e, t) {
  return $().getElementError(
    `A better query is available, try this:
` +
      e.toString() +
      `
`,
    t,
  );
}
function ni(e, t) {
  return function (r) {
    for (
      var a = arguments.length, n = new Array(a > 1 ? a - 1 : 0), o = 1;
      o < a;
      o++
    )
      n[o - 1] = arguments[o];
    const l = e(r, ...n);
    if (!l.length) throw $().getElementError(t(r, ...n), r);
    return l;
  };
}
function nt(e) {
  return (t, r, a, n) => ai(() => e(t, r, a), { container: t, ...n });
}
const Me = (e, t, r) =>
    function (a) {
      for (
        var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), l = 1;
        l < n;
        l++
      )
        o[l - 1] = arguments[l];
      const u = e(a, ...o),
        [{ suggest: i = $().throwSuggestions } = {}] = o.slice(-1);
      if (u && i) {
        const s = gr(u, r);
        if (s && !t.endsWith(s.queryName)) throw wd(s.toString(), a);
      }
      return u;
    },
  W = (e, t, r) =>
    function (a) {
      for (
        var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), l = 1;
        l < n;
        l++
      )
        o[l - 1] = arguments[l];
      const u = e(a, ...o),
        [{ suggest: i = $().throwSuggestions } = {}] = o.slice(-1);
      if (u.length && i) {
        const s = [
          ...new Set(
            u.map((d) => {
              var f;
              return (f = gr(d, r)) == null ? void 0 : f.toString();
            }),
          ),
        ];
        if (s.length === 1 && !t.endsWith(gr(u[0], r).queryName))
          throw wd(s[0], a);
      }
      return u;
    };
function pe(e, t, r) {
  const a = Me(at(e, t), e.name, 'query'),
    n = ni(e, r),
    o = at(n, t),
    l = Me(o, e.name, 'get'),
    u = W(n, e.name.replace('query', 'get'), 'getAll'),
    i = nt(W(n, e.name, 'findAll')),
    s = nt(Me(o, e.name, 'find'));
  return [a, u, l, i, s];
}
var eO = Object.freeze({
  __proto__: null,
  getElementError: vo,
  wrapAllByQueryWithSuggestion: W,
  wrapSingleQueryWithSuggestion: Me,
  getMultipleElementsFoundError: mo,
  queryAllByAttribute: Ue,
  queryByAttribute: Cd,
  makeSingleQuery: at,
  makeGetAllQuery: ni,
  makeFindQuery: nt,
  buildQueries: pe,
});
function tO(e) {
  return Array.from(e.querySelectorAll('label,input'))
    .map((t) => ({ node: t, textToMatch: wl(t) }))
    .filter((t) => {
      let { textToMatch: r } = t;
      return r !== null;
    });
}
const rO = function (e, t, r) {
    let {
      exact: a = !0,
      trim: n,
      collapseWhitespace: o,
      normalizer: l,
    } = r === void 0 ? {} : r;
    const u = a ? se : Ve,
      i = Ae({ collapseWhitespace: o, trim: n, normalizer: l });
    return tO(e)
      .filter((d) => {
        let { node: f, textToMatch: v } = d;
        return u(v, f, t, i);
      })
      .map((d) => {
        let { node: f } = d;
        return f;
      });
  },
  Pt = function (e, t, r) {
    let {
      selector: a = '*',
      exact: n = !0,
      collapseWhitespace: o,
      trim: l,
      normalizer: u,
    } = r === void 0 ? {} : r;
    fe(e);
    const i = n ? se : Ve,
      s = Ae({ collapseWhitespace: o, trim: l, normalizer: u }),
      d = Array.from(e.querySelectorAll('*'))
        .filter((f) => bd(f).length || f.hasAttribute('aria-labelledby'))
        .reduce((f, v) => {
          const _ = yd(e, v, { selector: a });
          _.filter((C) => Boolean(C.formControl)).forEach((C) => {
            i(C.content, C.formControl, t, s) &&
              C.formControl &&
              f.push(C.formControl);
          });
          const P = _.filter((C) => Boolean(C.content)).map((C) => C.content);
          return (
            i(P.join(' '), v, t, s) && f.push(v),
            P.length > 1 &&
              P.forEach((C, q) => {
                i(C, v, t, s) && f.push(v);
                const p = [...P];
                p.splice(q, 1),
                  p.length > 1 && i(p.join(' '), v, t, s) && f.push(v);
              }),
            f
          );
        }, [])
        .concat(Ue('aria-label', e, t, { exact: n, normalizer: s }));
    return Array.from(new Set(d)).filter((f) => f.matches(a));
  },
  De = function (e, t) {
    for (
      var r = arguments.length, a = new Array(r > 2 ? r - 2 : 0), n = 2;
      n < r;
      n++
    )
      a[n - 2] = arguments[n];
    const o = Pt(e, t, ...a);
    if (!o.length) {
      const l = rO(e, t, ...a);
      if (l.length) {
        const u = l.map((i) => aO(e, i)).filter((i) => !!i);
        throw u.length
          ? $().getElementError(
              u.map(
                (i) =>
                  'Found a label with the text of: ' +
                  t +
                  ', however the element associated with this label (<' +
                  i +
                  ' />) is non-labellable [https://html.spec.whatwg.org/multipage/forms.html#category-label]. If you really need to label a <' +
                  i +
                  ' />, you can use aria-label or aria-labelledby instead.',
              ).join(`

`),
              e,
            )
          : $().getElementError(
              'Found a label with the text of: ' +
                t +
                `, however no form control was found associated to that label. Make sure you're using the "for" attribute or "aria-labelledby" attribute correctly.`,
              e,
            );
      } else
        throw $().getElementError(
          'Unable to find a label with the text of: ' + t,
          e,
        );
    }
    return o;
  };
function aO(e, t) {
  const r = t.getAttribute('for');
  if (!r) return null;
  const a = e.querySelector('[id="' + r + '"]');
  return a ? a.tagName.toLowerCase() : null;
}
const Pd = (e, t) => 'Found multiple elements with the text of: ' + t,
  Od = Me(at(Pt, Pd), Pt.name, 'query'),
  qd = at(De, Pd),
  Td = nt(W(De, De.name, 'findAll')),
  $d = nt(Me(qd, De.name, 'find')),
  xd = W(De, De.name, 'getAll'),
  Md = Me(qd, De.name, 'get'),
  Sd = W(Pt, Pt.name, 'queryAll'),
  Pl = function () {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return fe(t[0]), Ue('placeholder', ...t);
  },
  nO = (e, t) => 'Found multiple elements with the placeholder text of: ' + t,
  oO = (e, t) => 'Unable to find an element with the placeholder text of: ' + t,
  Ad = W(Pl, Pl.name, 'queryAll'),
  [Bd, Id, jd, Nd, kd] = pe(Pl, nO, oO),
  Ol = function (e, t, r) {
    let {
      selector: a = '*',
      exact: n = !0,
      collapseWhitespace: o,
      trim: l,
      ignore: u = $().defaultIgnore,
      normalizer: i,
    } = r === void 0 ? {} : r;
    fe(e);
    const s = n ? se : Ve,
      d = Ae({ collapseWhitespace: o, trim: l, normalizer: i });
    let f = [];
    return (
      typeof e.matches == 'function' && e.matches(a) && (f = [e]),
      [...f, ...Array.from(e.querySelectorAll(a))]
        .filter((v) => !u || !v.matches(u))
        .filter((v) => s(Lt(v), v, t, d))
    );
  },
  lO = (e, t) => 'Found multiple elements with the text: ' + t,
  iO = function (e, t, r) {
    r === void 0 && (r = {});
    const { collapseWhitespace: a, trim: n, normalizer: o, selector: l } = r,
      i = Ae({ collapseWhitespace: a, trim: n, normalizer: o })(t.toString()),
      s = i !== t.toString(),
      d = (l ?? '*') !== '*';
    return (
      'Unable to find an element with the text: ' +
      (s ? i + " (normalized from '" + t + "')" : t) +
      (d ? ", which matches selector '" + l + "'" : '') +
      '. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.'
    );
  },
  Dd = W(Ol, Ol.name, 'queryAll'),
  [Ld, Fd, Vd, Ud, Hd] = pe(Ol, lO, iO),
  ql = function (e, t, r) {
    let {
      exact: a = !0,
      collapseWhitespace: n,
      trim: o,
      normalizer: l,
    } = r === void 0 ? {} : r;
    fe(e);
    const u = a ? se : Ve,
      i = Ae({ collapseWhitespace: n, trim: o, normalizer: l });
    return Array.from(e.querySelectorAll('input,textarea,select')).filter((s) =>
      s.tagName === 'SELECT'
        ? Array.from(s.options)
            .filter((f) => f.selected)
            .some((f) => u(Lt(f), f, t, i))
        : u(s.value, s, t, i),
    );
  },
  uO = (e, t) => 'Found multiple elements with the display value: ' + t + '.',
  sO = (e, t) => 'Unable to find an element with the display value: ' + t + '.',
  Wd = W(ql, ql.name, 'queryAll'),
  [zd, Kd, Gd, Xd, Qd] = pe(ql, uO, sO),
  cO = /^(img|input|area|.+-.+)$/i,
  Tl = function (e, t, r) {
    return (
      r === void 0 && (r = {}),
      fe(e),
      Ue('alt', e, t, r).filter((a) => cO.test(a.tagName))
    );
  },
  dO = (e, t) => 'Found multiple elements with the alt text: ' + t,
  fO = (e, t) => 'Unable to find an element with the alt text: ' + t,
  Yd = W(Tl, Tl.name, 'queryAll'),
  [Jd, Zd, ef, tf, rf] = pe(Tl, dO, fO),
  pO = (e) => {
    var t;
    return (
      e.tagName.toLowerCase() === 'title' &&
      ((t = e.parentElement) == null ? void 0 : t.tagName.toLowerCase()) ===
        'svg'
    );
  },
  $l = function (e, t, r) {
    let {
      exact: a = !0,
      collapseWhitespace: n,
      trim: o,
      normalizer: l,
    } = r === void 0 ? {} : r;
    fe(e);
    const u = a ? se : Ve,
      i = Ae({ collapseWhitespace: n, trim: o, normalizer: l });
    return Array.from(e.querySelectorAll('[title], svg > title')).filter(
      (s) =>
        u(s.getAttribute('title'), s, t, i) || (pO(s) && u(Lt(s), s, t, i)),
    );
  },
  vO = (e, t) => 'Found multiple elements with the title: ' + t + '.',
  mO = (e, t) => 'Unable to find an element with the title: ' + t + '.',
  af = W($l, $l.name, 'queryAll'),
  [nf, of, lf, uf, sf] = pe($l, vO, mO);
function xl(e, t, r) {
  let {
    exact: a = !0,
    collapseWhitespace: n,
    hidden: o = $().defaultHidden,
    name: l,
    description: u,
    trim: i,
    normalizer: s,
    queryFallbacks: d = !1,
    selected: f,
    checked: v,
    pressed: _,
    current: P,
    level: C,
    expanded: q,
  } = r === void 0 ? {} : r;
  fe(e);
  const p = a ? se : Ve,
    y = Ae({ collapseWhitespace: n, trim: i, normalizer: s });
  if (f !== void 0) {
    var R;
    if (
      ((R = Je.get(t)) == null ? void 0 : R.props['aria-selected']) === void 0
    )
      throw new Error('"aria-selected" is not supported on role "' + t + '".');
  }
  if (v !== void 0) {
    var w;
    if (((w = Je.get(t)) == null ? void 0 : w.props['aria-checked']) === void 0)
      throw new Error('"aria-checked" is not supported on role "' + t + '".');
  }
  if (_ !== void 0) {
    var O;
    if (((O = Je.get(t)) == null ? void 0 : O.props['aria-pressed']) === void 0)
      throw new Error('"aria-pressed" is not supported on role "' + t + '".');
  }
  if (P !== void 0) {
    var m;
    if (((m = Je.get(t)) == null ? void 0 : m.props['aria-current']) === void 0)
      throw new Error('"aria-current" is not supported on role "' + t + '".');
  }
  if (C !== void 0 && t !== 'heading')
    throw new Error('Role "' + t + '" cannot have "level" property.');
  if (q !== void 0) {
    var h;
    if (
      ((h = Je.get(t)) == null ? void 0 : h.props['aria-expanded']) === void 0
    )
      throw new Error('"aria-expanded" is not supported on role "' + t + '".');
  }
  const E = new WeakMap();
  function j(c) {
    return E.has(c) || E.set(c, Ed(c)), E.get(c);
  }
  return Array.from(e.querySelectorAll(bO(t, a, s ? y : void 0)))
    .filter((c) => {
      if (c.hasAttribute('role')) {
        const be = c.getAttribute('role');
        if (d)
          return be
            .split(' ')
            .filter(Boolean)
            .some((Gt) => p(Gt, c, t, y));
        if (s) return p(be, c, t, y);
        const [dt] = be.split(' ');
        return p(dt, c, t, y);
      }
      return ri(c).some((be) => p(be, c, t, y));
    })
    .filter((c) =>
      f !== void 0
        ? f === z0(c)
        : v !== void 0
        ? v === K0(c)
        : _ !== void 0
        ? _ === G0(c)
        : P !== void 0
        ? P === X0(c)
        : q !== void 0
        ? q === Q0(c)
        : C !== void 0
        ? C === Y0(c)
        : !0,
    )
    .filter((c) =>
      l === void 0
        ? !0
        : se(
            zl(c, {
              computedStyleSupportsPseudoElements:
                $().computedStyleSupportsPseudoElements,
            }),
            c,
            l,
            (K) => K,
          ),
    )
    .filter((c) =>
      u === void 0
        ? !0
        : se(
            Tc(c, {
              computedStyleSupportsPseudoElements:
                $().computedStyleSupportsPseudoElements,
            }),
            c,
            u,
            (K) => K,
          ),
    )
    .filter((c) =>
      o === !1 ? po(c, { isSubtreeInaccessible: j }) === !1 : !0,
    );
}
function bO(e, t, r) {
  var a;
  if (typeof e != 'string') return '*';
  const n = t && !r ? '*[role~="' + e + '"]' : '*[role]',
    o = (a = ld.get(e)) != null ? a : new Set(),
    l = new Set(
      Array.from(o).map((u) => {
        let { name: i } = u;
        return i;
      }),
    );
  return [n].concat(Array.from(l)).join(',');
}
const cf = (e) => {
    let t = '';
    return (
      e === void 0
        ? (t = '')
        : typeof e == 'string'
        ? (t = ' and name "' + e + '"')
        : (t = ' and name `' + e + '`'),
      t
    );
  },
  yO = function (e, t, r) {
    let { name: a } = r === void 0 ? {} : r;
    return 'Found multiple elements with the role "' + t + '"' + cf(a);
  },
  hO = function (e, t, r) {
    let {
      hidden: a = $().defaultHidden,
      name: n,
      description: o,
    } = r === void 0 ? {} : r;
    if ($()._disableExpensiveErrorDiagnostics)
      return 'Unable to find role="' + t + '"' + cf(n);
    let l = '';
    Array.from(e.children).forEach((d) => {
      l += Rd(d, { hidden: a, includeDescription: o !== void 0 });
    });
    let u;
    l.length === 0
      ? a === !1
        ? (u =
            'There are no accessible roles. But there might be some inaccessible roles. If you wish to access them, then set the `hidden` option to `true`. Learn more about this here: https://testing-library.com/docs/dom-testing-library/api-queries#byrole')
        : (u = 'There are no available roles.')
      : (u = (
          `
Here are the ` +
          (a === !1 ? 'accessible' : 'available') +
          ` roles:

  ` +
          l
            .replace(
              /\n/g,
              `
  `,
            )
            .replace(
              /\n\s\s\n/g,
              `

`,
            ) +
          `
`
        ).trim());
    let i = '';
    n === void 0
      ? (i = '')
      : typeof n == 'string'
      ? (i = ' and name "' + n + '"')
      : (i = ' and name `' + n + '`');
    let s = '';
    return (
      o === void 0
        ? (s = '')
        : typeof o == 'string'
        ? (s = ' and description "' + o + '"')
        : (s = ' and description `' + o + '`'),
      (
        `
Unable to find an ` +
        (a === !1 ? 'accessible ' : '') +
        'element with the role "' +
        t +
        '"' +
        i +
        s +
        `

` +
        u
      ).trim()
    );
  },
  df = W(xl, xl.name, 'queryAll'),
  [ff, pf, vf, mf, bf] = pe(xl, yO, hO),
  oi = () => $().testIdAttribute,
  Ml = function () {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return fe(t[0]), Ue(oi(), ...t);
  },
  gO = (e, t) => 'Found multiple elements by: [' + oi() + '="' + t + '"]',
  EO = (e, t) => 'Unable to find an element by: [' + oi() + '="' + t + '"]',
  yf = W(Ml, Ml.name, 'queryAll'),
  [hf, gf, Ef, _f, Rf] = pe(Ml, gO, EO);
var Er = Object.freeze({
  __proto__: null,
  queryAllByLabelText: Sd,
  queryByLabelText: Od,
  getAllByLabelText: xd,
  getByLabelText: Md,
  findAllByLabelText: Td,
  findByLabelText: $d,
  queryByPlaceholderText: Bd,
  queryAllByPlaceholderText: Ad,
  getByPlaceholderText: jd,
  getAllByPlaceholderText: Id,
  findAllByPlaceholderText: Nd,
  findByPlaceholderText: kd,
  queryByText: Ld,
  queryAllByText: Dd,
  getByText: Vd,
  getAllByText: Fd,
  findAllByText: Ud,
  findByText: Hd,
  queryByDisplayValue: zd,
  queryAllByDisplayValue: Wd,
  getByDisplayValue: Gd,
  getAllByDisplayValue: Kd,
  findAllByDisplayValue: Xd,
  findByDisplayValue: Qd,
  queryByAltText: Jd,
  queryAllByAltText: Yd,
  getByAltText: ef,
  getAllByAltText: Zd,
  findAllByAltText: tf,
  findByAltText: rf,
  queryByTitle: nf,
  queryAllByTitle: af,
  getByTitle: lf,
  getAllByTitle: of,
  findAllByTitle: uf,
  findByTitle: sf,
  queryByRole: ff,
  queryAllByRole: df,
  getAllByRole: pf,
  getByRole: vf,
  findAllByRole: mf,
  findByRole: bf,
  queryByTestId: hf,
  queryAllByTestId: yf,
  getByTestId: Ef,
  getAllByTestId: gf,
  findAllByTestId: _f,
  findByTestId: Rf,
});
function Sl(e, t, r) {
  return (
    t === void 0 && (t = Er),
    r === void 0 && (r = {}),
    Object.keys(t).reduce((a, n) => {
      const o = t[n];
      return (a[n] = o.bind(null, e)), a;
    }, r)
  );
}
const Cf = (e) => !e || (Array.isArray(e) && !e.length);
function es(e) {
  if (Cf(e))
    throw new Error(
      'The element(s) given to waitForElementToBeRemoved are already removed. waitForElementToBeRemoved requires that the element(s) exist(s) before waiting for removal.',
    );
}
async function _O(e, t) {
  const r = new Error('Timed out in waitForElementToBeRemoved.');
  if (typeof e != 'function') {
    es(e);
    const n = (Array.isArray(e) ? e : [e]).map((o) => {
      let l = o.parentElement;
      if (l === null) return () => null;
      for (; l.parentElement; ) l = l.parentElement;
      return () => (l.contains(o) ? o : null);
    });
    e = () => n.map((o) => o()).filter(Boolean);
  }
  return (
    es(e()),
    ai(() => {
      let a;
      try {
        a = e();
      } catch (n) {
        if (n.name === 'TestingLibraryElementError') return;
        throw n;
      }
      if (!Cf(a)) throw r;
    }, t)
  );
}
const ts = {
    copy: {
      EventType: 'ClipboardEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    cut: {
      EventType: 'ClipboardEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    paste: {
      EventType: 'ClipboardEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    compositionEnd: {
      EventType: 'CompositionEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    compositionStart: {
      EventType: 'CompositionEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    compositionUpdate: {
      EventType: 'CompositionEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    keyDown: {
      EventType: 'KeyboardEvent',
      defaultInit: { bubbles: !0, cancelable: !0, charCode: 0, composed: !0 },
    },
    keyPress: {
      EventType: 'KeyboardEvent',
      defaultInit: { bubbles: !0, cancelable: !0, charCode: 0, composed: !0 },
    },
    keyUp: {
      EventType: 'KeyboardEvent',
      defaultInit: { bubbles: !0, cancelable: !0, charCode: 0, composed: !0 },
    },
    focus: {
      EventType: 'FocusEvent',
      defaultInit: { bubbles: !1, cancelable: !1, composed: !0 },
    },
    blur: {
      EventType: 'FocusEvent',
      defaultInit: { bubbles: !1, cancelable: !1, composed: !0 },
    },
    focusIn: {
      EventType: 'FocusEvent',
      defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
    },
    focusOut: {
      EventType: 'FocusEvent',
      defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
    },
    change: {
      EventType: 'Event',
      defaultInit: { bubbles: !0, cancelable: !1 },
    },
    input: {
      EventType: 'InputEvent',
      defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
    },
    invalid: {
      EventType: 'Event',
      defaultInit: { bubbles: !1, cancelable: !0 },
    },
    submit: {
      EventType: 'Event',
      defaultInit: { bubbles: !0, cancelable: !0 },
    },
    reset: { EventType: 'Event', defaultInit: { bubbles: !0, cancelable: !0 } },
    click: {
      EventType: 'MouseEvent',
      defaultInit: { bubbles: !0, cancelable: !0, button: 0, composed: !0 },
    },
    contextMenu: {
      EventType: 'MouseEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    dblClick: {
      EventType: 'MouseEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    drag: {
      EventType: 'DragEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    dragEnd: {
      EventType: 'DragEvent',
      defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
    },
    dragEnter: {
      EventType: 'DragEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    dragExit: {
      EventType: 'DragEvent',
      defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
    },
    dragLeave: {
      EventType: 'DragEvent',
      defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
    },
    dragOver: {
      EventType: 'DragEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    dragStart: {
      EventType: 'DragEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    drop: {
      EventType: 'DragEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    mouseDown: {
      EventType: 'MouseEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    mouseEnter: {
      EventType: 'MouseEvent',
      defaultInit: { bubbles: !1, cancelable: !1, composed: !0 },
    },
    mouseLeave: {
      EventType: 'MouseEvent',
      defaultInit: { bubbles: !1, cancelable: !1, composed: !0 },
    },
    mouseMove: {
      EventType: 'MouseEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    mouseOut: {
      EventType: 'MouseEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    mouseOver: {
      EventType: 'MouseEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    mouseUp: {
      EventType: 'MouseEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    select: {
      EventType: 'Event',
      defaultInit: { bubbles: !0, cancelable: !1 },
    },
    touchCancel: {
      EventType: 'TouchEvent',
      defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
    },
    touchEnd: {
      EventType: 'TouchEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    touchMove: {
      EventType: 'TouchEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    touchStart: {
      EventType: 'TouchEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    resize: {
      EventType: 'UIEvent',
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    scroll: {
      EventType: 'UIEvent',
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    wheel: {
      EventType: 'WheelEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    abort: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
    canPlay: {
      EventType: 'Event',
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    canPlayThrough: {
      EventType: 'Event',
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    durationChange: {
      EventType: 'Event',
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    emptied: {
      EventType: 'Event',
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    encrypted: {
      EventType: 'Event',
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    ended: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
    loadedData: {
      EventType: 'Event',
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    loadedMetadata: {
      EventType: 'Event',
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    loadStart: {
      EventType: 'ProgressEvent',
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    pause: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
    play: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
    playing: {
      EventType: 'Event',
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    progress: {
      EventType: 'ProgressEvent',
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    rateChange: {
      EventType: 'Event',
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    seeked: {
      EventType: 'Event',
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    seeking: {
      EventType: 'Event',
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    stalled: {
      EventType: 'Event',
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    suspend: {
      EventType: 'Event',
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    timeUpdate: {
      EventType: 'Event',
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    volumeChange: {
      EventType: 'Event',
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    waiting: {
      EventType: 'Event',
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    load: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
    error: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
    animationStart: {
      EventType: 'AnimationEvent',
      defaultInit: { bubbles: !0, cancelable: !1 },
    },
    animationEnd: {
      EventType: 'AnimationEvent',
      defaultInit: { bubbles: !0, cancelable: !1 },
    },
    animationIteration: {
      EventType: 'AnimationEvent',
      defaultInit: { bubbles: !0, cancelable: !1 },
    },
    transitionCancel: {
      EventType: 'TransitionEvent',
      defaultInit: { bubbles: !0, cancelable: !1 },
    },
    transitionEnd: {
      EventType: 'TransitionEvent',
      defaultInit: { bubbles: !0, cancelable: !0 },
    },
    transitionRun: {
      EventType: 'TransitionEvent',
      defaultInit: { bubbles: !0, cancelable: !1 },
    },
    transitionStart: {
      EventType: 'TransitionEvent',
      defaultInit: { bubbles: !0, cancelable: !1 },
    },
    pointerOver: {
      EventType: 'PointerEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    pointerEnter: {
      EventType: 'PointerEvent',
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    pointerDown: {
      EventType: 'PointerEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    pointerMove: {
      EventType: 'PointerEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    pointerUp: {
      EventType: 'PointerEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    pointerCancel: {
      EventType: 'PointerEvent',
      defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
    },
    pointerOut: {
      EventType: 'PointerEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    pointerLeave: {
      EventType: 'PointerEvent',
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    gotPointerCapture: {
      EventType: 'PointerEvent',
      defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
    },
    lostPointerCapture: {
      EventType: 'PointerEvent',
      defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
    },
    popState: {
      EventType: 'PopStateEvent',
      defaultInit: { bubbles: !0, cancelable: !1 },
    },
    offline: {
      EventType: 'Event',
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    online: {
      EventType: 'Event',
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
  },
  rs = { doubleClick: 'dblClick' };
function Ot(e, t) {
  return $().eventWrapper(() => {
    if (!t)
      throw new Error(
        'Unable to fire an event - please provide an event object.',
      );
    if (!e)
      throw new Error(
        'Unable to fire a "' +
          t.type +
          '" event - please provide a DOM element.',
      );
    return e.dispatchEvent(t);
  });
}
function or(e, t, r, a) {
  let { EventType: n = 'Event', defaultInit: o = {} } = a === void 0 ? {} : a;
  if (!t)
    throw new Error(
      'Unable to fire a "' + e + '" event - please provide a DOM element.',
    );
  const l = { ...o, ...r },
    { target: { value: u, files: i, ...s } = {} } = l;
  u !== void 0 && RO(t, u),
    i !== void 0 &&
      Object.defineProperty(t, 'files', {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        value: i,
      }),
    Object.assign(t, s);
  const d = vd(t),
    f = d[n] || d.Event;
  let v;
  if (typeof f == 'function') v = new f(e, l);
  else {
    v = d.document.createEvent(n);
    const { bubbles: P, cancelable: C, detail: q, ...p } = l;
    v.initEvent(e, P, C, q),
      Object.keys(p).forEach((y) => {
        v[y] = p[y];
      });
  }
  return (
    ['dataTransfer', 'clipboardData'].forEach((P) => {
      const C = l[P];
      typeof C == 'object' &&
        (typeof d.DataTransfer == 'function'
          ? Object.defineProperty(v, P, {
              value: Object.getOwnPropertyNames(C).reduce(
                (q, p) => (Object.defineProperty(q, p, { value: C[p] }), q),
                new d.DataTransfer(),
              ),
            })
          : Object.defineProperty(v, P, { value: C }));
    }),
    v
  );
}
Object.keys(ts).forEach((e) => {
  const { EventType: t, defaultInit: r } = ts[e],
    a = e.toLowerCase();
  (or[e] = (n, o) => or(a, n, o, { EventType: t, defaultInit: r })),
    (Ot[e] = (n, o) => Ot(n, or[e](n, o)));
});
function RO(e, t) {
  const { set: r } = Object.getOwnPropertyDescriptor(e, 'value') || {},
    a = Object.getPrototypeOf(e),
    { set: n } = Object.getOwnPropertyDescriptor(a, 'value') || {};
  if (n && r !== n) n.call(e, t);
  else if (r) r.call(e, t);
  else throw new Error('The given element does not have a value setter');
}
Object.keys(rs).forEach((e) => {
  const t = rs[e];
  Ot[e] = function () {
    return Ot[t](...arguments);
  };
});
function CO(e) {
  return e.replace(
    /[ \t]*[\n][ \t]*/g,
    `
`,
  );
}
function wO(e) {
  return g0.compressToEncodedURIComponent(CO(e));
}
function PO(e) {
  return 'https://testing-playground.com/#markup=' + wO(e);
}
const OO = (e, t, r) =>
    Array.isArray(e) ? e.forEach((a) => Cl(a, t, r)) : Cl(e, t, r),
  qO = function (e) {
    if ((e === void 0 && (e = ei().body), !e || !('innerHTML' in e))) {
      console.log("The element you're providing isn't a valid DOM element.");
      return;
    }
    if (!e.innerHTML) {
      console.log("The provided element doesn't have any children.");
      return;
    }
    const t = PO(e.innerHTML);
    return (
      console.log(
        `Open this URL in your browser

` + t,
      ),
      t
    );
  },
  as = { debug: OO, logTestingPlaygroundURL: qO },
  TO =
    typeof document < 'u' && document.body
      ? Sl(document.body, Er, as)
      : Object.keys(Er).reduce(
          (e, t) => (
            (e[t] = () => {
              throw new TypeError(
                'For queries bound to document.body a global document has to be available... Learn more: https://testing-library.com/s/screen-global-error',
              );
            }),
            e
          ),
          as,
        ),
  wf = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        buildQueries: pe,
        configure: L0,
        createEvent: or,
        findAllByAltText: tf,
        findAllByDisplayValue: Xd,
        findAllByLabelText: Td,
        findAllByPlaceholderText: Nd,
        findAllByRole: mf,
        findAllByTestId: _f,
        findAllByText: Ud,
        findAllByTitle: uf,
        findByAltText: rf,
        findByDisplayValue: Qd,
        findByLabelText: $d,
        findByPlaceholderText: kd,
        findByRole: bf,
        findByTestId: Rf,
        findByText: Hd,
        findByTitle: sf,
        fireEvent: Ot,
        getAllByAltText: Zd,
        getAllByDisplayValue: Kd,
        getAllByLabelText: xd,
        getAllByPlaceholderText: Id,
        getAllByRole: pf,
        getAllByTestId: gf,
        getAllByText: Fd,
        getAllByTitle: of,
        getByAltText: ef,
        getByDisplayValue: Gd,
        getByLabelText: Md,
        getByPlaceholderText: jd,
        getByRole: vf,
        getByTestId: Ef,
        getByText: Vd,
        getByTitle: lf,
        getConfig: $,
        getDefaultNormalizer: ti,
        getElementError: vo,
        getMultipleElementsFoundError: mo,
        getNodeText: Lt,
        getQueriesForElement: Sl,
        getRoles: _d,
        getSuggestedQuery: gr,
        isInaccessible: po,
        logDOM: Cl,
        logRoles: W0,
        makeFindQuery: nt,
        makeGetAllQuery: ni,
        makeSingleQuery: at,
        prettyDOM: wt,
        prettyFormat: Xv,
        queries: Er,
        queryAllByAltText: Yd,
        queryAllByAttribute: Ue,
        queryAllByDisplayValue: Wd,
        queryAllByLabelText: Sd,
        queryAllByPlaceholderText: Ad,
        queryAllByRole: df,
        queryAllByTestId: yf,
        queryAllByText: Dd,
        queryAllByTitle: af,
        queryByAltText: Jd,
        queryByAttribute: Cd,
        queryByDisplayValue: zd,
        queryByLabelText: Od,
        queryByPlaceholderText: Bd,
        queryByRole: ff,
        queryByTestId: hf,
        queryByText: Ld,
        queryByTitle: nf,
        queryHelpers: eO,
        screen: TO,
        waitFor: ai,
        waitForElementToBeRemoved: _O,
        within: Sl,
        wrapAllByQueryWithSuggestion: W,
        wrapSingleQueryWithSuggestion: Me,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  );
var Pf = {},
  He = {};
const z = Gf(wf);
var I = {},
  li = {};
Object.defineProperty(li, '__esModule', { value: !0 });
li.getMouseEventOptions = $O;
function ns(e) {
  return (
    e === 'mousedown' || e === 'mouseup' || e === 'click' || e === 'dblclick'
  );
}
const os = { none: 0, primary: 1, secondary: 2, auxiliary: 4 },
  ls = { primary: 0, auxiliary: 1, secondary: 2 };
function is(e, t) {
  var r;
  const [a, n] = t === 'button' ? [ls, os] : [os, ls],
    o =
      (r = Object.entries(a).find(([, l]) => l === e)) == null ? void 0 : r[0];
  return o && Object.prototype.hasOwnProperty.call(n, o) ? n[o] : 0;
}
function us(e, t, r) {
  return ns(e)
    ? typeof t[r] == 'number'
      ? t[r]
      : r === 'button' && typeof t.buttons == 'number'
      ? is(t.buttons, 'buttons')
      : r === 'buttons' && typeof t.button == 'number'
      ? is(t.button, 'button')
      : r != 'button' && ns(e)
      ? 1
      : 0
    : 0;
}
function $O(e, t, r = 0) {
  var a;
  return (
    (t = (a = t) != null ? a : {}),
    {
      ...t,
      detail: e === 'mousedown' || e === 'mouseup' || e === 'click' ? 1 + r : r,
      buttons: us(e, t, 'buttons'),
      button: us(e, t, 'button'),
    }
  );
}
var ii = {},
  ve = {};
Object.defineProperty(ve, '__esModule', { value: !0 });
ve.isElementType = xO;
function xO(e, t, r) {
  return (e.namespaceURI &&
    e.namespaceURI !== 'http://www.w3.org/1999/xhtml') ||
    ((t = Array.isArray(t) ? t : [t]), !t.includes(e.tagName.toLowerCase()))
    ? !1
    : r
    ? Object.entries(r).every(([a, n]) => e[a] === n)
    : !0;
}
Object.defineProperty(ii, '__esModule', { value: !0 });
ii.isClickableInput = SO;
var ss = ve;
const MO = [
  'button',
  'color',
  'file',
  'image',
  'reset',
  'submit',
  'checkbox',
  'radio',
];
function SO(e) {
  return (
    (0, ss.isElementType)(e, 'button') ||
    ((0, ss.isElementType)(e, 'input') && MO.includes(e.type))
  );
}
var ui = {};
Object.defineProperty(ui, '__esModule', { value: !0 });
ui.buildTimeValue = AO;
function AO(e) {
  const t = e.replace(/\D/g, '');
  if (t.length < 2) return e;
  const r = parseInt(t[0], 10),
    a = parseInt(t[1], 10);
  if (r >= 3 || (r === 2 && a >= 4)) {
    let n;
    return r >= 3 ? (n = 1) : (n = 2), cs(t, n);
  }
  return e.length === 2 ? e : cs(t, 2);
}
function cs(e, t) {
  const r = e.slice(0, t),
    a = Math.min(parseInt(r, 10), 23),
    n = e.slice(t),
    o = parseInt(n, 10),
    l = Math.min(o, 59);
  return `${a.toString().padStart(2, '0')}:${l.toString().padStart(2, '0')}`;
}
var si = {},
  We = {};
Object.defineProperty(We, '__esModule', { value: !0 });
We.getSelectionRange = qf;
We.hasSelectionSupport = ci;
We.setSelectionRange = BO;
var Ze = ve,
  Al;
(function (e) {
  (e.text = 'text'),
    (e.search = 'search'),
    (e.url = 'url'),
    (e.tel = 'tel'),
    (e.password = 'password');
})(Al || (Al = {}));
const Of = Symbol('inputSelection');
function ci(e) {
  return (
    (0, Ze.isElementType)(e, 'textarea') ||
    ((0, Ze.isElementType)(e, 'input') && Boolean(Al[e.type]))
  );
}
function qf(e) {
  if (ci(e))
    return { selectionStart: e.selectionStart, selectionEnd: e.selectionEnd };
  if ((0, Ze.isElementType)(e, 'input')) {
    var t;
    return (t = e[Of]) != null
      ? t
      : { selectionStart: null, selectionEnd: null };
  }
  const r = e.ownerDocument.getSelection();
  if (r != null && r.rangeCount && e.contains(r.focusNode)) {
    const a = r.getRangeAt(0);
    return { selectionStart: a.startOffset, selectionEnd: a.endOffset };
  } else return { selectionStart: null, selectionEnd: null };
}
function BO(e, t, r) {
  const { selectionStart: a, selectionEnd: n } = qf(e);
  if (
    (a === t && n === r) ||
    (ci(e) && e.setSelectionRange(t, r),
    (0, Ze.isElementType)(e, 'input') &&
      (e[Of] = { selectionStart: t, selectionEnd: r }),
    (0, Ze.isElementType)(e, 'input') || (0, Ze.isElementType)(e, 'textarea'))
  )
    return;
  const o = e.ownerDocument.createRange();
  o.selectNodeContents(e),
    e.firstChild && (o.setStart(e.firstChild, t), o.setEnd(e.firstChild, r));
  const l = e.ownerDocument.getSelection();
  l && (l.removeAllRanges(), l.addRange(o));
}
var it = {},
  Vt = {};
Object.defineProperty(Vt, '__esModule', { value: !0 });
Vt.isContentEditable = IO;
function IO(e) {
  return (
    e.hasAttribute('contenteditable') &&
    (e.getAttribute('contenteditable') == 'true' ||
      e.getAttribute('contenteditable') == '')
  );
}
Object.defineProperty(it, '__esModule', { value: !0 });
it.getValue = NO;
var jO = Vt;
function NO(e) {
  return e ? ((0, jO.isContentEditable)(e) ? e.textContent : e.value) : null;
}
var bo = {};
Object.defineProperty(bo, '__esModule', { value: !0 });
bo.isValidDateValue = kO;
function kO(e, t) {
  const r = e.cloneNode();
  return (r.value = t), r.value === t;
}
var yo = {};
Object.defineProperty(yo, '__esModule', { value: !0 });
yo.isValidInputTimeValue = DO;
function DO(e, t) {
  const r = e.cloneNode();
  return (r.value = t), r.value === t;
}
Object.defineProperty(si, '__esModule', { value: !0 });
si.calculateNewValue = UO;
var LO = We,
  FO = it,
  VO = bo,
  ds = yo;
function UO(
  e,
  t,
  r = (() => {
    var o;
    return (o = (0, FO.getValue)(t)) != null ? o : '';
  })(),
  a = (0, LO.getSelectionRange)(t),
  n,
) {
  const o = a.selectionStart === null ? r.length : a.selectionStart,
    l = a.selectionEnd === null ? r.length : a.selectionEnd,
    u = Math.max(0, o === l && n === 'backward' ? o - 1 : o),
    i = r.substring(0, u),
    s = Math.min(r.length, o === l && n === 'forward' ? l + 1 : l),
    d = r.substring(s, r.length);
  let f = `${i}${e}${d}`;
  const v = u + e.length;
  return (
    t.type === 'date' && !(0, VO.isValidDateValue)(t, f) && (f = r),
    t.type === 'time' &&
      !(0, ds.isValidInputTimeValue)(t, f) &&
      ((0, ds.isValidInputTimeValue)(t, e) ? (f = e) : (f = r)),
    { newValue: f, newSelectionStart: v }
  );
}
var ho = {};
Object.defineProperty(ho, '__esModule', { value: !0 });
ho.isCursorAtEnd = WO;
ho.isCursorAtStart = zO;
var Tf = We,
  HO = it;
function WO(e) {
  var t;
  const { selectionStart: r, selectionEnd: a } = (0, Tf.getSelectionRange)(e);
  return (
    r === a && (r ?? 0) === ((t = (0, HO.getValue)(e)) != null ? t : '').length
  );
}
function zO(e) {
  const { selectionStart: t, selectionEnd: r } = (0, Tf.getSelectionRange)(e);
  return t === r && (t ?? 0) === 0;
}
var di = {};
Object.defineProperty(di, '__esModule', { value: !0 });
di.hasUnreliableEmptyValue = GO;
var KO = ve,
  Bl;
(function (e) {
  e.number = 'number';
})(Bl || (Bl = {}));
function GO(e) {
  return (0, KO.isElementType)(e, 'input') && Boolean(Bl[e.type]);
}
var ze = {};
Object.defineProperty(ze, '__esModule', { value: !0 });
ze.editableInputTypes = void 0;
ze.isEditable = QO;
ze.isEditableInput = xf;
var $f = ve,
  XO = Vt;
function QO(e) {
  return (
    xf(e) ||
    (0, $f.isElementType)(e, 'textarea', { readOnly: !1 }) ||
    (0, XO.isContentEditable)(e)
  );
}
let _r;
ze.editableInputTypes = _r;
(function (e) {
  (e.text = 'text'),
    (e.date = 'date'),
    (e['datetime-local'] = 'datetime-local'),
    (e.email = 'email'),
    (e.month = 'month'),
    (e.number = 'number'),
    (e.password = 'password'),
    (e.search = 'search'),
    (e.tel = 'tel'),
    (e.time = 'time'),
    (e.url = 'url'),
    (e.week = 'week');
})(_r || (ze.editableInputTypes = _r = {}));
function xf(e) {
  return (
    (0, $f.isElementType)(e, 'input', { readOnly: !1 }) && Boolean(_r[e.type])
  );
}
var fi = {};
Object.defineProperty(fi, '__esModule', { value: !0 });
fi.getSpaceUntilMaxLength = JO;
var fs = ve,
  YO = it,
  Il;
(function (e) {
  (e.email = 'email'),
    (e.password = 'password'),
    (e.search = 'search'),
    (e.telephone = 'telephone'),
    (e.text = 'text'),
    (e.url = 'url');
})(Il || (Il = {}));
function JO(e) {
  const t = (0, YO.getValue)(e);
  if (t === null) return;
  const r = ZO(e);
  return r ? r - t.length : void 0;
}
function ZO(e) {
  var t;
  if (!eq(e)) return;
  const r = (t = e.getAttribute('maxlength')) != null ? t : '';
  return /^\d+$/.test(r) && Number(r) >= 0 ? Number(r) : void 0;
}
function eq(e) {
  return (
    (0, fs.isElementType)(e, 'textarea') ||
    ((0, fs.isElementType)(e, 'input') && Boolean(Il[e.type]))
  );
}
var pi = {},
  Ut = {};
Object.defineProperty(Ut, '__esModule', { value: !0 });
Ut.isDisabled = tq;
function tq(e) {
  return Boolean(e && e.disabled);
}
Object.defineProperty(pi, '__esModule', { value: !0 });
pi.getActiveElement = Mf;
var rq = Ut;
function Mf(e) {
  const t = e.activeElement;
  return t != null && t.shadowRoot
    ? Mf(t.shadowRoot)
    : (0, rq.isDisabled)(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : t;
}
var vi = {},
  go = {};
Object.defineProperty(go, '__esModule', { value: !0 });
go.isLabelWithInternallyDisabledControl = oq;
var aq = Ut,
  nq = ve;
function oq(e) {
  if (!(0, nq.isElementType)(e, 'label')) return !1;
  const t = e.control;
  return Boolean(t && e.contains(t) && (0, aq.isDisabled)(t));
}
var Ht = {};
Object.defineProperty(Ht, '__esModule', { value: !0 });
Ht.FOCUSABLE_SELECTOR = void 0;
const lq = [
  'input:not([type=hidden]):not([disabled])',
  'button:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[contenteditable=""]',
  '[contenteditable="true"]',
  'a[href]',
  '[tabindex]:not([disabled])',
].join(', ');
Ht.FOCUSABLE_SELECTOR = lq;
Object.defineProperty(vi, '__esModule', { value: !0 });
vi.isFocusable = sq;
var iq = go,
  uq = Ht;
function sq(e) {
  return (
    !(0, iq.isLabelWithInternallyDisabledControl)(e) &&
    e.matches(uq.FOCUSABLE_SELECTOR)
  );
}
var mi = {};
Object.defineProperty(mi, '__esModule', { value: !0 });
mi.eventWrapper = dq;
var cq = z;
function dq(e) {
  let t;
  return (
    (0, cq.getConfig)().eventWrapper(() => {
      t = e();
    }),
    t
  );
}
var bi = {},
  me = {};
Object.defineProperty(me, '__esModule', { value: !0 });
me.TEXT_NODE = void 0;
me.checkContainerType = bq;
me.getDocument = vq;
me.getWindowFromNode = mq;
me.jestFakeTimersAreEnabled = pq;
const fq = 3;
me.TEXT_NODE = fq;
function pq() {
  return typeof jest < 'u' && jest !== null
    ? setTimeout._isMockFunction === !0 ||
        Object.prototype.hasOwnProperty.call(setTimeout, 'clock')
    : !1;
}
function vq() {
  if (typeof window > 'u') throw new Error('Could not find default container');
  return window.document;
}
function mq(e) {
  if (e.defaultView) return e.defaultView;
  if (e.ownerDocument && e.ownerDocument.defaultView)
    return e.ownerDocument.defaultView;
  if (e.window) return e.window;
  throw e.ownerDocument && e.ownerDocument.defaultView === null
    ? new Error(
        'It looks like the window object is not available for the provided node.',
      )
    : e.then instanceof Function
    ? new Error(
        'It looks like you passed a Promise object instead of a DOM node. Did you do something like `fireEvent.click(screen.findBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`, or await the findBy query `fireEvent.click(await screen.findBy...`?',
      )
    : Array.isArray(e)
    ? new Error(
        'It looks like you passed an Array instead of a DOM node. Did you do something like `fireEvent.click(screen.getAllBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`?',
      )
    : typeof e.debug == 'function' &&
      typeof e.logTestingPlaygroundURL == 'function'
    ? new Error(
        'It looks like you passed a `screen` object. Did you do something like `fireEvent.click(screen, ...` when you meant to use a query, e.g. `fireEvent.click(screen.getBy..., `?',
      )
    : new Error(
        `The given node is not an Element, the node type is: ${typeof e}.`,
      );
}
function bq(e) {
  if (
    !e ||
    typeof e.querySelector != 'function' ||
    typeof e.querySelectorAll != 'function'
  )
    throw new TypeError(
      `Expected container to be an Element, a Document or a DocumentFragment but got ${t(
        e,
      )}.`,
    );
  function t(r) {
    return typeof r == 'object'
      ? r === null
        ? 'null'
        : r.constructor.name
      : typeof r;
  }
}
Object.defineProperty(bi, '__esModule', { value: !0 });
bi.isVisible = hq;
var yq = me;
function hq(e) {
  const t = (0, yq.getWindowFromNode)(e);
  for (let a = e; (r = a) != null && r.ownerDocument; a = a.parentElement) {
    var r;
    if (t.getComputedStyle(a).display === 'none') return !1;
  }
  return !0;
}
var yi = {};
Object.defineProperty(yi, '__esModule', { value: !0 });
yi.isDocument = gq;
function gq(e) {
  return e.nodeType === e.DOCUMENT_NODE;
}
var hi = {};
Object.defineProperty(hi, '__esModule', { value: !0 });
hi.wait = Eq;
function Eq(e) {
  return new Promise((t) => setTimeout(() => t(), e));
}
var gi = {};
Object.defineProperty(gi, '__esModule', { value: !0 });
gi.hasPointerEvents = Rq;
var _q = me;
function Rq(e) {
  const t = (0, _q.getWindowFromNode)(e);
  for (let a = e; (r = a) != null && r.ownerDocument; a = a.parentElement) {
    var r;
    const n = t.getComputedStyle(a).pointerEvents;
    if (n && !['inherit', 'unset'].includes(n)) return n !== 'none';
  }
  return !0;
}
var Eo = {};
Object.defineProperty(Eo, '__esModule', { value: !0 });
Eo.hasFormSubmit = void 0;
const Cq = (e) =>
  !!(
    e &&
    (e.querySelector('input[type="submit"]') ||
      e.querySelector('button[type="submit"]'))
  );
Eo.hasFormSubmit = Cq;
(function (e) {
  Object.defineProperty(e, '__esModule', { value: !0 });
  var t = li;
  Object.keys(t).forEach(function (c) {
    c === 'default' ||
      c === '__esModule' ||
      (c in e && e[c] === t[c]) ||
      Object.defineProperty(e, c, {
        enumerable: !0,
        get: function () {
          return t[c];
        },
      });
  });
  var r = ii;
  Object.keys(r).forEach(function (c) {
    c === 'default' ||
      c === '__esModule' ||
      (c in e && e[c] === r[c]) ||
      Object.defineProperty(e, c, {
        enumerable: !0,
        get: function () {
          return r[c];
        },
      });
  });
  var a = ui;
  Object.keys(a).forEach(function (c) {
    c === 'default' ||
      c === '__esModule' ||
      (c in e && e[c] === a[c]) ||
      Object.defineProperty(e, c, {
        enumerable: !0,
        get: function () {
          return a[c];
        },
      });
  });
  var n = si;
  Object.keys(n).forEach(function (c) {
    c === 'default' ||
      c === '__esModule' ||
      (c in e && e[c] === n[c]) ||
      Object.defineProperty(e, c, {
        enumerable: !0,
        get: function () {
          return n[c];
        },
      });
  });
  var o = ho;
  Object.keys(o).forEach(function (c) {
    c === 'default' ||
      c === '__esModule' ||
      (c in e && e[c] === o[c]) ||
      Object.defineProperty(e, c, {
        enumerable: !0,
        get: function () {
          return o[c];
        },
      });
  });
  var l = it;
  Object.keys(l).forEach(function (c) {
    c === 'default' ||
      c === '__esModule' ||
      (c in e && e[c] === l[c]) ||
      Object.defineProperty(e, c, {
        enumerable: !0,
        get: function () {
          return l[c];
        },
      });
  });
  var u = di;
  Object.keys(u).forEach(function (c) {
    c === 'default' ||
      c === '__esModule' ||
      (c in e && e[c] === u[c]) ||
      Object.defineProperty(e, c, {
        enumerable: !0,
        get: function () {
          return u[c];
        },
      });
  });
  var i = Vt;
  Object.keys(i).forEach(function (c) {
    c === 'default' ||
      c === '__esModule' ||
      (c in e && e[c] === i[c]) ||
      Object.defineProperty(e, c, {
        enumerable: !0,
        get: function () {
          return i[c];
        },
      });
  });
  var s = ze;
  Object.keys(s).forEach(function (c) {
    c === 'default' ||
      c === '__esModule' ||
      (c in e && e[c] === s[c]) ||
      Object.defineProperty(e, c, {
        enumerable: !0,
        get: function () {
          return s[c];
        },
      });
  });
  var d = bo;
  Object.keys(d).forEach(function (c) {
    c === 'default' ||
      c === '__esModule' ||
      (c in e && e[c] === d[c]) ||
      Object.defineProperty(e, c, {
        enumerable: !0,
        get: function () {
          return d[c];
        },
      });
  });
  var f = yo;
  Object.keys(f).forEach(function (c) {
    c === 'default' ||
      c === '__esModule' ||
      (c in e && e[c] === f[c]) ||
      Object.defineProperty(e, c, {
        enumerable: !0,
        get: function () {
          return f[c];
        },
      });
  });
  var v = fi;
  Object.keys(v).forEach(function (c) {
    c === 'default' ||
      c === '__esModule' ||
      (c in e && e[c] === v[c]) ||
      Object.defineProperty(e, c, {
        enumerable: !0,
        get: function () {
          return v[c];
        },
      });
  });
  var _ = We;
  Object.keys(_).forEach(function (c) {
    c === 'default' ||
      c === '__esModule' ||
      (c in e && e[c] === _[c]) ||
      Object.defineProperty(e, c, {
        enumerable: !0,
        get: function () {
          return _[c];
        },
      });
  });
  var P = pi;
  Object.keys(P).forEach(function (c) {
    c === 'default' ||
      c === '__esModule' ||
      (c in e && e[c] === P[c]) ||
      Object.defineProperty(e, c, {
        enumerable: !0,
        get: function () {
          return P[c];
        },
      });
  });
  var C = vi;
  Object.keys(C).forEach(function (c) {
    c === 'default' ||
      c === '__esModule' ||
      (c in e && e[c] === C[c]) ||
      Object.defineProperty(e, c, {
        enumerable: !0,
        get: function () {
          return C[c];
        },
      });
  });
  var q = Ht;
  Object.keys(q).forEach(function (c) {
    c === 'default' ||
      c === '__esModule' ||
      (c in e && e[c] === q[c]) ||
      Object.defineProperty(e, c, {
        enumerable: !0,
        get: function () {
          return q[c];
        },
      });
  });
  var p = mi;
  Object.keys(p).forEach(function (c) {
    c === 'default' ||
      c === '__esModule' ||
      (c in e && e[c] === p[c]) ||
      Object.defineProperty(e, c, {
        enumerable: !0,
        get: function () {
          return p[c];
        },
      });
  });
  var y = ve;
  Object.keys(y).forEach(function (c) {
    c === 'default' ||
      c === '__esModule' ||
      (c in e && e[c] === y[c]) ||
      Object.defineProperty(e, c, {
        enumerable: !0,
        get: function () {
          return y[c];
        },
      });
  });
  var R = go;
  Object.keys(R).forEach(function (c) {
    c === 'default' ||
      c === '__esModule' ||
      (c in e && e[c] === R[c]) ||
      Object.defineProperty(e, c, {
        enumerable: !0,
        get: function () {
          return R[c];
        },
      });
  });
  var w = bi;
  Object.keys(w).forEach(function (c) {
    c === 'default' ||
      c === '__esModule' ||
      (c in e && e[c] === w[c]) ||
      Object.defineProperty(e, c, {
        enumerable: !0,
        get: function () {
          return w[c];
        },
      });
  });
  var O = Ut;
  Object.keys(O).forEach(function (c) {
    c === 'default' ||
      c === '__esModule' ||
      (c in e && e[c] === O[c]) ||
      Object.defineProperty(e, c, {
        enumerable: !0,
        get: function () {
          return O[c];
        },
      });
  });
  var m = yi;
  Object.keys(m).forEach(function (c) {
    c === 'default' ||
      c === '__esModule' ||
      (c in e && e[c] === m[c]) ||
      Object.defineProperty(e, c, {
        enumerable: !0,
        get: function () {
          return m[c];
        },
      });
  });
  var h = hi;
  Object.keys(h).forEach(function (c) {
    c === 'default' ||
      c === '__esModule' ||
      (c in e && e[c] === h[c]) ||
      Object.defineProperty(e, c, {
        enumerable: !0,
        get: function () {
          return h[c];
        },
      });
  });
  var E = gi;
  Object.keys(E).forEach(function (c) {
    c === 'default' ||
      c === '__esModule' ||
      (c in e && e[c] === E[c]) ||
      Object.defineProperty(e, c, {
        enumerable: !0,
        get: function () {
          return E[c];
        },
      });
  });
  var j = Eo;
  Object.keys(j).forEach(function (c) {
    c === 'default' ||
      c === '__esModule' ||
      (c in e && e[c] === j[c]) ||
      Object.defineProperty(e, c, {
        enumerable: !0,
        get: function () {
          return j[c];
        },
      });
  });
})(I);
var ut = {};
Object.defineProperty(ut, '__esModule', { value: !0 });
ut.hover = wq;
ut.unhover = Pq;
var X = z,
  U = I;
function Sf(e) {
  const t = [e];
  let r = e;
  for (; (r = r.parentElement) != null; ) t.push(r);
  return t;
}
function wq(e, t, { skipPointerEventsCheck: r = !1 } = {}) {
  if (!r && !(0, U.hasPointerEvents)(e))
    throw new Error(
      'unable to hover element as it has or inherits pointer-events set to "none".',
    );
  if ((0, U.isLabelWithInternallyDisabledControl)(e)) return;
  const a = Sf(e).reverse();
  X.fireEvent.pointerOver(e, t);
  for (const n of a) X.fireEvent.pointerEnter(n, t);
  if (!(0, U.isDisabled)(e)) {
    X.fireEvent.mouseOver(e, (0, U.getMouseEventOptions)('mouseover', t));
    for (const n of a)
      X.fireEvent.mouseEnter(n, (0, U.getMouseEventOptions)('mouseenter', t));
  }
  X.fireEvent.pointerMove(e, t),
    (0, U.isDisabled)(e) ||
      X.fireEvent.mouseMove(e, (0, U.getMouseEventOptions)('mousemove', t));
}
function Pq(e, t, { skipPointerEventsCheck: r = !1 } = {}) {
  if (!r && !(0, U.hasPointerEvents)(e))
    throw new Error(
      'unable to unhover element as it has or inherits pointer-events set to "none".',
    );
  if ((0, U.isLabelWithInternallyDisabledControl)(e)) return;
  const a = Sf(e);
  X.fireEvent.pointerMove(e, t),
    (0, U.isDisabled)(e) ||
      X.fireEvent.mouseMove(e, (0, U.getMouseEventOptions)('mousemove', t)),
    X.fireEvent.pointerOut(e, t);
  for (const n of a) X.fireEvent.pointerLeave(n, t);
  if (!(0, U.isDisabled)(e)) {
    X.fireEvent.mouseOut(e, (0, U.getMouseEventOptions)('mouseout', t));
    for (const n of a)
      X.fireEvent.mouseLeave(n, (0, U.getMouseEventOptions)('mouseleave', t));
  }
}
var Wt = {};
Object.defineProperty(Wt, '__esModule', { value: !0 });
Wt.blur = Oq;
var al = I;
function Oq(e) {
  !(0, al.isFocusable)(e) ||
    !((0, al.getActiveElement)(e.ownerDocument) === e) ||
    (0, al.eventWrapper)(() => e.blur());
}
var st = {};
Object.defineProperty(st, '__esModule', { value: !0 });
st.focus = qq;
var nl = I;
function qq(e) {
  !(0, nl.isFocusable)(e) ||
    (0, nl.getActiveElement)(e.ownerDocument) === e ||
    (0, nl.eventWrapper)(() => e.focus());
}
Object.defineProperty(He, '__esModule', { value: !0 });
He.click = jl;
He.dblClick = Aq;
var V = z,
  N = I,
  Af = ut,
  Tq = Wt,
  Rr = st;
function $q(e) {
  const t = e.ownerDocument.activeElement;
  return t && t !== e.ownerDocument.body && t !== e ? t : null;
}
function xq(e, t, { clickCount: r }) {
  (0, N.isLabelWithInternallyDisabledControl)(e) ||
    (V.fireEvent.pointerDown(e, t),
    V.fireEvent.mouseDown(e, (0, N.getMouseEventOptions)('mousedown', t, r)),
    V.fireEvent.pointerUp(e, t),
    V.fireEvent.mouseUp(e, (0, N.getMouseEventOptions)('mouseup', t, r)),
    Ei(e, (0, N.getMouseEventOptions)('click', t, r)),
    e.control && (0, Rr.focus)(e.control));
}
function Mq(e, t, { clickCount: r }) {
  V.fireEvent.pointerDown(e, t),
    e.disabled ||
      V.fireEvent.mouseDown(e, (0, N.getMouseEventOptions)('mousedown', t, r)),
    (0, Rr.focus)(e),
    V.fireEvent.pointerUp(e, t),
    e.disabled ||
      (V.fireEvent.mouseUp(e, (0, N.getMouseEventOptions)('mouseup', t, r)),
      Ei(e, (0, N.getMouseEventOptions)('click', t, r)));
}
function ps(e, t, { clickCount: r }) {
  const a = $q(e);
  if (
    (V.fireEvent.pointerDown(e, t),
    !(0, N.isDisabled)(e) &&
      V.fireEvent.mouseDown(e, (0, N.getMouseEventOptions)('mousedown', t, r)))
  ) {
    const o = Sq(e, N.isFocusable);
    a && !o ? (0, Tq.blur)(a) : o && (0, Rr.focus)(o);
  }
  if ((V.fireEvent.pointerUp(e, t), !(0, N.isDisabled)(e))) {
    V.fireEvent.mouseUp(e, (0, N.getMouseEventOptions)('mouseup', t, r)),
      Ei(e, (0, N.getMouseEventOptions)('click', t, r));
    const n = e.closest('label');
    n != null && n.control && (0, Rr.focus)(n.control);
  }
}
function Sq(e, t) {
  let r = e;
  do {
    if (t(r)) return r;
    r = r.parentElement;
  } while (r && r !== e.ownerDocument.body);
}
function jl(
  e,
  t,
  { skipHover: r = !1, clickCount: a = 0, skipPointerEventsCheck: n = !1 } = {},
) {
  if (!n && !(0, N.hasPointerEvents)(e))
    throw new Error(
      'unable to click element as it has or inherits pointer-events set to "none".',
    );
  r || (0, Af.hover)(e, t, { skipPointerEventsCheck: !0 }),
    (0, N.isElementType)(e, 'label')
      ? xq(e, t, { clickCount: a })
      : (0, N.isElementType)(e, 'input')
      ? e.type === 'checkbox' || e.type === 'radio'
        ? Mq(e, t, { clickCount: a })
        : ps(e, t, { clickCount: a })
      : ps(e, t, { clickCount: a });
}
function Ei(e, t) {
  t.button === 2 ? V.fireEvent.contextMenu(e, t) : V.fireEvent.click(e, t);
}
function Aq(e, t, { skipPointerEventsCheck: r = !1 } = {}) {
  if (!r && !(0, N.hasPointerEvents)(e))
    throw new Error(
      'unable to double-click element as it has or inherits pointer-events set to "none".',
    );
  (0, Af.hover)(e, t, { skipPointerEventsCheck: r }),
    jl(e, t, { skipHover: !0, clickCount: 0, skipPointerEventsCheck: r }),
    jl(e, t, { skipHover: !0, clickCount: 1, skipPointerEventsCheck: r }),
    V.fireEvent.dblClick(e, (0, N.getMouseEventOptions)('dblclick', t, 2));
}
var _o = {},
  _i = {},
  Ri = {},
  Ro = {},
  Ci = {};
Object.defineProperty(Ci, '__esModule', { value: !0 });
Ci.getNextKeyDef = Bq;
var Cr;
(function (e) {
  (e['{'] = '}'), (e['['] = ']');
})(Cr || (Cr = {}));
var Nl;
(function (e) {
  (e.alt = 'alt'), (e.ctrl = 'ctrl'), (e.meta = 'meta'), (e.shift = 'shift');
})(Nl || (Nl = {}));
var kl;
(function (e) {
  (e.ctrl = 'Control'), (e.del = 'Delete'), (e.esc = 'Escape'), (e.space = ' ');
})(kl || (kl = {}));
function Bq(e, t) {
  var r;
  const {
    type: a,
    descriptor: n,
    consumedLength: o,
    releasePrevious: l,
    releaseSelf: u,
    repeat: i,
  } = Iq(e);
  return {
    keyDef:
      (r = t.keyboardMap.find((d) => {
        if (a === '[') {
          var f;
          return (
            ((f = d.code) == null ? void 0 : f.toLowerCase()) ===
            n.toLowerCase()
          );
        } else if (a === '{') {
          var v;
          const _ = Dq(n);
          return (
            ((v = d.key) == null ? void 0 : v.toLowerCase()) === _.toLowerCase()
          );
        }
        return d.key === n;
      })) != null
        ? r
        : { key: 'Unknown', code: 'Unknown', [a === '[' ? 'code' : 'key']: n },
    consumedLength: o,
    releasePrevious: l,
    releaseSelf: u,
    repeat: i,
  };
}
function Iq(e) {
  let t = 0;
  const r = e[t] in Cr ? e[t] : '';
  t += r.length;
  const a = r ? e.match(new RegExp(`^\\${r}+`))[0].length : 0,
    o = a === 2 || (r === '{' && a > 3) ? '' : r;
  return { type: o, ...(o === '' ? jq(e, t) : Nq(e, t, o)) };
}
function jq(e, t) {
  const r = e[t];
  return (
    Bf(r, e, t),
    (t += r.length),
    {
      consumedLength: t,
      descriptor: r,
      releasePrevious: !1,
      releaseSelf: !0,
      repeat: 1,
    }
  );
}
function Nq(e, t, r) {
  var a, n, o;
  const l = e[t] === '/' ? '/' : '';
  t += l.length;
  const u = (a = e.slice(t).match(/^\w+/)) == null ? void 0 : a[0];
  Bf(u, e, t), (t += u.length);
  const i =
    (n = (o = e.slice(t).match(/^>\d+/)) == null ? void 0 : o[0]) != null
      ? n
      : '';
  t += i.length;
  const s = e[t] === '/' || (!i && e[t] === '>') ? e[t] : '';
  t += s.length;
  const d = Cr[r],
    f = e[t] === d ? d : '';
  if (!f)
    throw new Error(
      jf(
        [!i && 'repeat modifier', !s && 'release modifier', `"${d}"`]
          .filter(Boolean)
          .join(' or '),
        e[t],
        e,
      ),
    );
  return (
    (t += f.length),
    {
      consumedLength: t,
      descriptor: u,
      releasePrevious: !!l,
      repeat: i ? Math.max(Number(i.substr(1)), 1) : 1,
      releaseSelf: kq(r, u, s, i),
    }
  );
}
function Bf(e, t, r) {
  if (!e) throw new Error(jf('key descriptor', t[r], t));
}
function If(e, t) {
  return e[t];
}
function kq(e, t, r, a) {
  return r ? r === '/' : !(a || (e === '{' && If(Nl, t.toLowerCase())));
}
function Dq(e) {
  var t;
  return (t = If(kl, e)) != null ? t : e;
}
function jf(e, t, r) {
  return `Expected ${e} but found "${t ?? ''}" in "${r}"
    See https://github.com/testing-library/user-event/blob/main/README.md#keyboardtext-options
    for more information about how userEvent parses your input.`;
}
var D = {},
  Co = {};
Object.defineProperty(Co, '__esModule', { value: !0 });
Co.keydownBehavior = void 0;
var ol = I;
const Lq = [
  {
    matches: (e, t) =>
      (e.key === 'ArrowLeft' || e.key === 'ArrowRight') &&
      (0, ol.isElementType)(t, ['input', 'textarea']),
    handle: (e, t) => {
      var r;
      const { selectionStart: a, selectionEnd: n } = (0, ol.getSelectionRange)(
          t,
        ),
        o = e.key === 'ArrowLeft' ? -1 : 1,
        l = (r = a === n ? (a ?? 0) + o : o < 0 ? a : n) != null ? r : 0;
      (0, ol.setSelectionRange)(t, l, l);
    },
  },
];
Co.keydownBehavior = Lq;
var wo = {},
  Po = {},
  wi = {};
Object.defineProperty(wi, '__esModule', { value: !0 });
wi.carryValue = Fq;
var vs = I;
function Fq(e, t, r) {
  const a = (0, vs.getValue)(e);
  t.carryValue =
    a !== r && a === '' && (0, vs.hasUnreliableEmptyValue)(e) ? r : void 0;
}
var Pi = {};
Object.defineProperty(Pi, '__esModule', { value: !0 });
Pi.fireChangeForInputTimeIfValid = Hq;
var Vq = z,
  Uq = I;
function Hq(e, t, r) {
  (0, Uq.isValidInputTimeValue)(e, r) &&
    t !== r &&
    Vq.fireEvent.change(e, { target: { value: r } });
}
var Oi = {};
Object.defineProperty(Oi, '__esModule', { value: !0 });
Oi.fireInputEvent = Wq;
var Nf = z,
  Ie = I;
function Wq(e, { newValue: t, newSelectionStart: r, eventOverrides: a }) {
  if ((0, Ie.isContentEditable)(e)) ms(e, 'textContent', t);
  else if ((0, Ie.isElementType)(e, ['input', 'textarea'])) ms(e, 'value', t);
  else throw new Error('Invalid Element');
  zq(e, r), Nf.fireEvent.input(e, { ...a }), Kq(e, t, r);
}
function zq(e, t) {
  (0, Ie.setSelectionRange)(e, t, t);
}
function Kq(e, t, r) {
  const a = (0, Ie.getValue)(e);
  if (!(a === '' && (0, Ie.hasUnreliableEmptyValue)(e)) && a === t) {
    const { selectionStart: o } = (0, Ie.getSelectionRange)(e);
    o === a.length && (0, Ie.setSelectionRange)(e, r, r);
  }
}
const Zt = Symbol('initial input value/textContent'),
  ll = Symbol('onBlur');
function ms(e, t, r) {
  const a = Object.getOwnPropertyDescriptor(e, t),
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
  if (
    (a && n && Object.defineProperty(e, t, n),
    e[Zt] === void 0 && (e[Zt] = String(e[t])),
    (e[t] = r),
    !e[ll])
  ) {
    var o;
    (o = e.ownerDocument.defaultView) == null ||
      o.addEventListener(
        'blur',
        (e[ll] = () => {
          const l = e[Zt];
          delete e[ll],
            delete e[Zt],
            String(e[t]) !== l && Nf.fireEvent.change(e);
        }),
        { capture: !0, once: !0 },
      );
  }
  a && Object.defineProperty(e, t, a);
}
(function (e) {
  Object.defineProperty(e, '__esModule', { value: !0 });
  var t = wi;
  Object.keys(t).forEach(function (n) {
    n === 'default' ||
      n === '__esModule' ||
      (n in e && e[n] === t[n]) ||
      Object.defineProperty(e, n, {
        enumerable: !0,
        get: function () {
          return t[n];
        },
      });
  });
  var r = Pi;
  Object.keys(r).forEach(function (n) {
    n === 'default' ||
      n === '__esModule' ||
      (n in e && e[n] === r[n]) ||
      Object.defineProperty(e, n, {
        enumerable: !0,
        get: function () {
          return r[n];
        },
      });
  });
  var a = Oi;
  Object.keys(a).forEach(function (n) {
    n === 'default' ||
      n === '__esModule' ||
      (n in e && e[n] === a[n]) ||
      Object.defineProperty(e, n, {
        enumerable: !0,
        get: function () {
          return a[n];
        },
      });
  });
})(Po);
Object.defineProperty(wo, '__esModule', { value: !0 });
wo.keydownBehavior = void 0;
var G = I,
  bs = Po;
const Gq = [
  {
    matches: (e, t) =>
      (e.key === 'Home' || e.key === 'End') &&
      ((0, G.isElementType)(t, ['input', 'textarea']) ||
        (0, G.isContentEditable)(t)),
    handle: (e, t) => {
      if (e.key === 'Home') (0, G.setSelectionRange)(t, 0, 0);
      else {
        var r, a;
        const n =
          (r = (a = (0, G.getValue)(t)) == null ? void 0 : a.length) != null
            ? r
            : 0;
        (0, G.setSelectionRange)(t, n, n);
      }
    },
  },
  {
    matches: (e, t) =>
      (e.key === 'PageUp' || e.key === 'PageDown') &&
      (0, G.isElementType)(t, ['input']),
    handle: (e, t) => {
      if (e.key === 'PageUp') (0, G.setSelectionRange)(t, 0, 0);
      else {
        var r, a;
        const n =
          (r = (a = (0, G.getValue)(t)) == null ? void 0 : a.length) != null
            ? r
            : 0;
        (0, G.setSelectionRange)(t, n, n);
      }
    },
  },
  {
    matches: (e, t) =>
      e.key === 'Delete' && (0, G.isEditable)(t) && !(0, G.isCursorAtEnd)(t),
    handle: (e, t, r, a) => {
      const { newValue: n, newSelectionStart: o } = (0, G.calculateNewValue)(
        '',
        t,
        a.carryValue,
        void 0,
        'forward',
      );
      (0, bs.fireInputEvent)(t, {
        newValue: n,
        newSelectionStart: o,
        eventOverrides: { inputType: 'deleteContentForward' },
      }),
        (0, bs.carryValue)(t, a, n);
    },
  },
];
wo.keydownBehavior = Gq;
var Oo = {};
Object.defineProperty(Oo, '__esModule', { value: !0 });
Oo.keypressBehavior = void 0;
var Xq = z,
  Ye = Po,
  B = I;
const Qq = [
  {
    matches: (e, t) => {
      var r;
      return (
        ((r = e.key) == null ? void 0 : r.length) === 1 &&
        (0, B.isElementType)(t, 'input', { type: 'time', readOnly: !1 })
      );
    },
    handle: (e, t, r, a) => {
      var n;
      let o = e.key;
      const l = ((n = a.carryValue) != null ? n : '') + o,
        u = (0, B.buildTimeValue)(l);
      (0, B.isValidInputTimeValue)(t, u) && (o = u);
      const { newValue: i, newSelectionStart: s } = (0, B.calculateNewValue)(
          o,
          t,
        ),
        d = (0, B.getValue)(t);
      d !== i &&
        (0, Ye.fireInputEvent)(t, {
          newValue: i,
          newSelectionStart: s,
          eventOverrides: { data: e.key, inputType: 'insertText' },
        }),
        (0, Ye.fireChangeForInputTimeIfValid)(t, d, u),
        (a.carryValue = l);
    },
  },
  {
    matches: (e, t) => {
      var r;
      return (
        ((r = e.key) == null ? void 0 : r.length) === 1 &&
        (0, B.isElementType)(t, 'input', { type: 'date', readOnly: !1 })
      );
    },
    handle: (e, t, r, a) => {
      var n;
      let o = e.key;
      const l = ((n = a.carryValue) != null ? n : '') + o,
        u = (0, B.isValidDateValue)(t, l);
      u && (o = l);
      const { newValue: i, newSelectionStart: s } = (0, B.calculateNewValue)(
        o,
        t,
      );
      (0, B.getValue)(t) !== i &&
        (0, Ye.fireInputEvent)(t, {
          newValue: i,
          newSelectionStart: s,
          eventOverrides: { data: e.key, inputType: 'insertText' },
        }),
        u && Xq.fireEvent.change(t, { target: { value: l } }),
        (a.carryValue = l);
    },
  },
  {
    matches: (e, t) => {
      var r;
      return (
        ((r = e.key) == null ? void 0 : r.length) === 1 &&
        (0, B.isElementType)(t, 'input', { type: 'number', readOnly: !1 })
      );
    },
    handle: (e, t, r, a) => {
      var n, o, l, u;
      if (!/[\d.\-e]/.test(e.key)) return;
      const i =
          (n = (o = a.carryValue) != null ? o : (0, B.getValue)(t)) != null
            ? n
            : '',
        { newValue: s, newSelectionStart: d } = (0, B.calculateNewValue)(
          e.key,
          t,
          i,
        ),
        f = s.split('e', 2);
      if (
        Number((l = s.match(/-/g)) == null ? void 0 : l.length) > 2 ||
        Number((u = s.match(/\./g)) == null ? void 0 : u.length) > 1 ||
        (f[1] && !/^-?\d*$/.test(f[1]))
      )
        return;
      (0, Ye.fireInputEvent)(t, {
        newValue: s,
        newSelectionStart: d,
        eventOverrides: { data: e.key, inputType: 'insertText' },
      }),
        (0, B.getValue)(t) === s ? (a.carryValue = void 0) : (a.carryValue = s);
    },
  },
  {
    matches: (e, t) => {
      var r;
      return (
        ((r = e.key) == null ? void 0 : r.length) === 1 &&
        (((0, B.isElementType)(t, ['input', 'textarea'], { readOnly: !1 }) &&
          !(0, B.isClickableInput)(t)) ||
          (0, B.isContentEditable)(t)) &&
        (0, B.getSpaceUntilMaxLength)(t) !== 0
      );
    },
    handle: (e, t) => {
      const { newValue: r, newSelectionStart: a } = (0, B.calculateNewValue)(
        e.key,
        t,
      );
      (0, Ye.fireInputEvent)(t, {
        newValue: r,
        newSelectionStart: a,
        eventOverrides: { data: e.key, inputType: 'insertText' },
      });
    },
  },
  {
    matches: (e, t) =>
      e.key === 'Enter' &&
      ((0, B.isElementType)(t, 'textarea', { readOnly: !1 }) ||
        (0, B.isContentEditable)(t)) &&
      (0, B.getSpaceUntilMaxLength)(t) !== 0,
    handle: (e, t, r, a) => {
      const { newValue: n, newSelectionStart: o } = (0, B.calculateNewValue)(
          `
`,
          t,
        ),
        l =
          (0, B.isContentEditable)(t) && !a.modifiers.shift
            ? 'insertParagraph'
            : 'insertLineBreak';
      (0, Ye.fireInputEvent)(t, {
        newValue: n,
        newSelectionStart: o,
        eventOverrides: { inputType: l },
      });
    },
  },
];
Oo.keypressBehavior = Qq;
var H = {},
  zt = {};
Object.defineProperty(zt, '__esModule', { value: !0 });
zt.getKeyEventProps = Yq;
zt.getMouseEventProps = Jq;
function Yq(e, t) {
  var r, a;
  return {
    key: e.key,
    code: e.code,
    altKey: t.modifiers.alt,
    ctrlKey: t.modifiers.ctrl,
    metaKey: t.modifiers.meta,
    shiftKey: t.modifiers.shift,
    keyCode:
      (r = e.keyCode) != null
        ? r
        : ((a = e.key) == null ? void 0 : a.length) === 1
        ? e.key.charCodeAt(0)
        : void 0,
  };
}
function Jq(e) {
  return {
    altKey: e.modifiers.alt,
    ctrlKey: e.modifiers.ctrl,
    metaKey: e.modifiers.meta,
    shiftKey: e.modifiers.shift,
  };
}
Object.defineProperty(H, '__esModule', { value: !0 });
H.preKeyupBehavior =
  H.preKeydownBehavior =
  H.postKeyupBehavior =
  H.keyupBehavior =
  H.keypressBehavior =
  H.keydownBehavior =
    void 0;
var et = z,
  oe = I,
  qo = zt,
  ys = Po;
const kf = { Alt: 'alt', Control: 'ctrl', Shift: 'shift', Meta: 'meta' },
  Zq = [
    ...Object.entries(kf).map(([e, t]) => ({
      matches: (r) => r.key === e,
      handle: (r, a, n, o) => {
        o.modifiers[t] = !0;
      },
    })),
    {
      matches: (e) => e.key === 'AltGraph',
      handle: (e, t, r, a) => {
        var n;
        const o =
          (n = r.keyboardMap.find((l) => l.key === 'Control')) != null
            ? n
            : { key: 'Control', code: 'Control' };
        et.fireEvent.keyDown(t, (0, qo.getKeyEventProps)(o, a));
      },
    },
  ];
H.preKeydownBehavior = Zq;
const eT = [
  {
    matches: (e) => e.key === 'CapsLock',
    handle: (e, t, r, a) => {
      a.modifiers.caps = !a.modifiers.caps;
    },
  },
  {
    matches: (e, t) =>
      e.key === 'Backspace' &&
      (0, oe.isEditable)(t) &&
      !(0, oe.isCursorAtStart)(t),
    handle: (e, t, r, a) => {
      const { newValue: n, newSelectionStart: o } = (0, oe.calculateNewValue)(
        '',
        t,
        a.carryValue,
        void 0,
        'backward',
      );
      (0, ys.fireInputEvent)(t, {
        newValue: n,
        newSelectionStart: o,
        eventOverrides: { inputType: 'deleteContentBackward' },
      }),
        (0, ys.carryValue)(t, a, n);
    },
  },
];
H.keydownBehavior = eT;
const tT = [
  {
    matches: (e, t) =>
      e.key === 'Enter' &&
      (0, oe.isElementType)(t, 'input') &&
      ['checkbox', 'radio'].includes(t.type),
    handle: (e, t) => {
      const r = t.form;
      (0, oe.hasFormSubmit)(r) && et.fireEvent.submit(r);
    },
  },
  {
    matches: (e, t) =>
      e.key === 'Enter' &&
      ((0, oe.isClickableInput)(t) ||
        ((0, oe.isElementType)(t, 'a') && Boolean(t.href))),
    handle: (e, t, r, a) => {
      et.fireEvent.click(t, (0, qo.getMouseEventProps)(a));
    },
  },
  {
    matches: (e, t) => e.key === 'Enter' && (0, oe.isElementType)(t, 'input'),
    handle: (e, t) => {
      const r = t.form;
      r &&
        (r.querySelectorAll('input').length === 1 ||
          (0, oe.hasFormSubmit)(r)) &&
        et.fireEvent.submit(r);
    },
  },
];
H.keypressBehavior = tT;
const rT = [
  ...Object.entries(kf).map(([e, t]) => ({
    matches: (r) => r.key === e,
    handle: (r, a, n, o) => {
      o.modifiers[t] = !1;
    },
  })),
];
H.preKeyupBehavior = rT;
const aT = [
  {
    matches: (e, t) => e.key === ' ' && (0, oe.isClickableInput)(t),
    handle: (e, t, r, a) => {
      et.fireEvent.click(t, (0, qo.getMouseEventProps)(a));
    },
  },
];
H.keyupBehavior = aT;
const nT = [
  {
    matches: (e) => e.key === 'AltGraph',
    handle: (e, t, r, a) => {
      var n;
      const o =
        (n = r.keyboardMap.find((l) => l.key === 'Control')) != null
          ? n
          : { key: 'Control', code: 'Control' };
      et.fireEvent.keyUp(t, (0, qo.getKeyEventProps)(o, a));
    },
  },
];
H.postKeyupBehavior = nT;
Object.defineProperty(D, '__esModule', { value: !0 });
D.replaceBehavior =
  D.preKeyupBehavior =
  D.preKeydownBehavior =
  D.postKeyupBehavior =
  D.keyupBehavior =
  D.keypressBehavior =
  D.keydownBehavior =
    void 0;
var hs = I,
  oT = To(Co),
  lT = To(wo),
  iT = To(Oo),
  ct = To(H);
function Df(e) {
  if (typeof WeakMap != 'function') return null;
  var t = new WeakMap(),
    r = new WeakMap();
  return (Df = function (a) {
    return a ? r : t;
  })(e);
}
function To(e, t) {
  if (!t && e && e.__esModule) return e;
  if (e === null || (typeof e != 'object' && typeof e != 'function'))
    return { default: e };
  var r = Df(t);
  if (r && r.has(e)) return r.get(e);
  var a = {},
    n = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e)
    if (o !== 'default' && Object.prototype.hasOwnProperty.call(e, o)) {
      var l = n ? Object.getOwnPropertyDescriptor(e, o) : null;
      l && (l.get || l.set) ? Object.defineProperty(a, o, l) : (a[o] = e[o]);
    }
  return (a.default = e), r && r.set(e, a), a;
}
const uT = [
  {
    matches: (e, t) =>
      e.key === 'selectall' && (0, hs.isElementType)(t, ['input', 'textarea']),
    handle: (e, t, r, a) => {
      var n;
      (0, hs.setSelectionRange)(
        t,
        0,
        ((n = a.carryValue) != null ? n : t.value).length,
      );
    },
  },
];
D.replaceBehavior = uT;
const sT = [...ct.preKeydownBehavior];
D.preKeydownBehavior = sT;
const cT = [
  ...oT.keydownBehavior,
  ...lT.keydownBehavior,
  ...ct.keydownBehavior,
];
D.keydownBehavior = cT;
const dT = [...ct.keypressBehavior, ...iT.keypressBehavior];
D.keypressBehavior = dT;
const fT = [...ct.preKeyupBehavior];
D.preKeyupBehavior = fT;
const pT = [...ct.keyupBehavior];
D.keyupBehavior = pT;
const vT = [...ct.postKeyupBehavior];
D.postKeyupBehavior = vT;
Object.defineProperty(Ro, '__esModule', { value: !0 });
Ro.keyboardImplementation = Vf;
Ro.releaseAllKeys = yT;
var qi = z,
  Lf = I,
  mT = Ci,
  Ne = bT(D),
  Ti = zt;
function Ff(e) {
  if (typeof WeakMap != 'function') return null;
  var t = new WeakMap(),
    r = new WeakMap();
  return (Ff = function (a) {
    return a ? r : t;
  })(e);
}
function bT(e, t) {
  if (!t && e && e.__esModule) return e;
  if (e === null || (typeof e != 'object' && typeof e != 'function'))
    return { default: e };
  var r = Ff(t);
  if (r && r.has(e)) return r.get(e);
  var a = {},
    n = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e)
    if (o !== 'default' && Object.prototype.hasOwnProperty.call(e, o)) {
      var l = n ? Object.getOwnPropertyDescriptor(e, o) : null;
      l && (l.get || l.set) ? Object.defineProperty(a, o, l) : (a[o] = e[o]);
    }
  return (a.default = e), r && r.set(e, a), a;
}
async function Vf(e, t, r) {
  var a;
  const { document: n } = t,
    o = () => Uf(n),
    {
      keyDef: l,
      consumedLength: u,
      releasePrevious: i,
      releaseSelf: s,
      repeat: d,
    } = (a = r.repeatKey) != null ? a : (0, mT.getNextKeyDef)(e, t);
  if (!ke(Ne.replaceBehavior, l, o(), t, r)) {
    const v = r.pressed.find((_) => _.keyDef === l);
    if ((v && !r.repeatKey && Dl(l, o, t, r, v.unpreventedDefault), !i)) {
      const _ = hT(l, o, t, r);
      _ && ET(l, r) && gT(l, o, t, r), s && d <= 1 && Dl(l, o, t, r, _);
    }
  }
  if (
    (d > 1
      ? (r.repeatKey = {
          consumedLength: 0,
          keyDef: l,
          releasePrevious: i,
          releaseSelf: s,
          repeat: d - 1,
        })
      : delete r.repeatKey,
    e.length > u || d > 1)
  )
    return t.delay > 0 && (await (0, Lf.wait)(t.delay)), Vf(e.slice(u), t, r);
}
function Uf(e) {
  var t;
  return (t = (0, Lf.getActiveElement)(e)) != null ? t : e.body;
}
function yT(e, t) {
  const r = () => Uf(e.document);
  for (const a of t.pressed) Dl(a.keyDef, r, e, t, a.unpreventedDefault);
}
function hT(e, t, r, a) {
  const n = t();
  n !== a.activeElement && ((a.carryValue = void 0), (a.carryChar = '')),
    (a.activeElement = n),
    ke(Ne.preKeydownBehavior, e, n, r, a);
  const o = qi.fireEvent.keyDown(n, (0, Ti.getKeyEventProps)(e, a));
  return (
    a.pressed.push({ keyDef: e, unpreventedDefault: o }),
    o && ke(Ne.keydownBehavior, e, t(), r, a),
    o
  );
}
function gT(e, t, r, a) {
  const n = t();
  qi.fireEvent.keyPress(n, (0, Ti.getKeyEventProps)(e, a)) &&
    ke(Ne.keypressBehavior, e, t(), r, a);
}
function Dl(e, t, r, a, n) {
  const o = t();
  ke(Ne.preKeyupBehavior, e, o, r, a);
  const l = qi.fireEvent.keyUp(o, (0, Ti.getKeyEventProps)(e, a));
  n && l && ke(Ne.keyupBehavior, e, t(), r, a),
    (a.pressed = a.pressed.filter((u) => u.keyDef !== e)),
    ke(Ne.postKeyupBehavior, e, o, r, a);
}
function ke(e, t, r, a, n) {
  const o = e.find((l) => l.matches(t, r, a, n));
  return o && o.handle(t, r, a, n), !!o;
}
function ET(e, t) {
  var r;
  return (
    (((r = e.key) == null ? void 0 : r.length) === 1 || e.key === 'Enter') &&
    !t.modifiers.ctrl &&
    !t.modifiers.alt
  );
}
var $o = {},
  Kt = {};
Object.defineProperty(Kt, '__esModule', { value: !0 });
Kt.DOM_KEY_LOCATION = void 0;
let Ll;
Kt.DOM_KEY_LOCATION = Ll;
(function (e) {
  (e[(e.STANDARD = 0)] = 'STANDARD'),
    (e[(e.LEFT = 1)] = 'LEFT'),
    (e[(e.RIGHT = 2)] = 'RIGHT'),
    (e[(e.NUMPAD = 3)] = 'NUMPAD');
})(Ll || (Kt.DOM_KEY_LOCATION = Ll = {}));
Object.defineProperty($o, '__esModule', { value: !0 });
$o.defaultKeyMap = void 0;
var ne = Kt;
const _T = [
  ...'0123456789'.split('').map((e) => ({ code: `Digit${e}`, key: e })),
  ...')!@#$%^&*('
    .split('')
    .map((e, t) => ({ code: `Digit${t}`, key: e, shiftKey: !0 })),
  ...'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .map((e) => ({ code: `Key${e.toUpperCase()}`, key: e })),
  ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    .split('')
    .map((e) => ({ code: `Key${e}`, key: e, shiftKey: !0 })),
  { code: 'Space', key: ' ' },
  {
    code: 'AltLeft',
    key: 'Alt',
    location: ne.DOM_KEY_LOCATION.LEFT,
    keyCode: 18,
  },
  {
    code: 'AltRight',
    key: 'Alt',
    location: ne.DOM_KEY_LOCATION.RIGHT,
    keyCode: 18,
  },
  {
    code: 'ShiftLeft',
    key: 'Shift',
    location: ne.DOM_KEY_LOCATION.LEFT,
    keyCode: 16,
  },
  {
    code: 'ShiftRight',
    key: 'Shift',
    location: ne.DOM_KEY_LOCATION.RIGHT,
    keyCode: 16,
  },
  {
    code: 'ControlLeft',
    key: 'Control',
    location: ne.DOM_KEY_LOCATION.LEFT,
    keyCode: 17,
  },
  {
    code: 'ControlRight',
    key: 'Control',
    location: ne.DOM_KEY_LOCATION.RIGHT,
    keyCode: 17,
  },
  {
    code: 'MetaLeft',
    key: 'Meta',
    location: ne.DOM_KEY_LOCATION.LEFT,
    keyCode: 93,
  },
  {
    code: 'MetaRight',
    key: 'Meta',
    location: ne.DOM_KEY_LOCATION.RIGHT,
    keyCode: 93,
  },
  {
    code: 'OSLeft',
    key: 'OS',
    location: ne.DOM_KEY_LOCATION.LEFT,
    keyCode: 91,
  },
  {
    code: 'OSRight',
    key: 'OS',
    location: ne.DOM_KEY_LOCATION.RIGHT,
    keyCode: 91,
  },
  { code: 'CapsLock', key: 'CapsLock', keyCode: 20 },
  { code: 'Backspace', key: 'Backspace', keyCode: 8 },
  { code: 'Enter', key: 'Enter', keyCode: 13 },
  { code: 'Escape', key: 'Escape', keyCode: 27 },
  { code: 'ArrowUp', key: 'ArrowUp', keyCode: 38 },
  { code: 'ArrowDown', key: 'ArrowDown', keyCode: 40 },
  { code: 'ArrowLeft', key: 'ArrowLeft', keyCode: 37 },
  { code: 'ArrowRight', key: 'ArrowRight', keyCode: 39 },
  { code: 'Home', key: 'Home', keyCode: 36 },
  { code: 'End', key: 'End', keyCode: 35 },
  { code: 'Delete', key: 'Delete', keyCode: 46 },
  { code: 'PageUp', key: 'PageUp', keyCode: 33 },
  { code: 'PageDown', key: 'PageDown', keyCode: 34 },
];
$o.defaultKeyMap = _T;
var xo = {};
Object.defineProperty(xo, '__esModule', { value: !0 });
xo.specialCharMap = void 0;
const RT = {
  arrowLeft: '{arrowleft}',
  arrowRight: '{arrowright}',
  arrowDown: '{arrowdown}',
  arrowUp: '{arrowup}',
  enter: '{enter}',
  escape: '{esc}',
  delete: '{del}',
  backspace: '{backspace}',
  home: '{home}',
  end: '{end}',
  selectAll: '{selectall}',
  space: '{space}',
  whitespace: ' ',
  pageUp: '{pageUp}',
  pageDown: '{pageDown}',
};
xo.specialCharMap = RT;
(function (e) {
  Object.defineProperty(e, '__esModule', { value: !0 }),
    (e.keyboard = o),
    (e.keyboardImplementationWrapper = l),
    Object.defineProperty(e, 'specialCharMap', {
      enumerable: !0,
      get: function () {
        return n.specialCharMap;
      },
    });
  var t = z,
    r = Ro,
    a = $o,
    n = xo;
  function o(i, s) {
    var d;
    const { promise: f, state: v } = l(i, s);
    return ((d = s == null ? void 0 : s.delay) != null ? d : 0) > 0
      ? (0, t.getConfig)().asyncWrapper(() => f.then(() => v))
      : (f.catch(console.error), v);
  }
  function l(i, s = {}) {
    const {
        keyboardState: d = u(),
        delay: f = 0,
        document: v = document,
        autoModify: _ = !1,
        keyboardMap: P = a.defaultKeyMap,
      } = s,
      C = { delay: f, document: v, autoModify: _, keyboardMap: P };
    return {
      promise: (0, r.keyboardImplementation)(i, C, d),
      state: d,
      releaseAllKeys: () => (0, r.releaseAllKeys)(C, d),
    };
  }
  function u() {
    return {
      activeElement: null,
      pressed: [],
      carryChar: '',
      modifiers: { alt: !1, caps: !1, ctrl: !1, meta: !1, shift: !1 },
    };
  }
})(Ri);
Object.defineProperty(_i, '__esModule', { value: !0 });
_i.typeImplementation = PT;
var er = I,
  CT = He,
  wT = Ri;
async function PT(
  e,
  t,
  {
    delay: r,
    skipClick: a = !1,
    skipAutoClose: n = !1,
    initialSelectionStart: o = void 0,
    initialSelectionEnd: l = void 0,
  },
) {
  if (e.disabled) return;
  a || (0, CT.click)(e);
  const u = () => (0, er.getActiveElement)(e.ownerDocument),
    i = (0, er.getValue)(u()),
    { selectionStart: s, selectionEnd: d } = (0, er.getSelectionRange)(e);
  i != null &&
    (s === null || s === 0) &&
    (d === null || d === 0) &&
    (0, er.setSelectionRange)(u(), o ?? i.length, l ?? i.length);
  const { promise: f, releaseAllKeys: v } = (0,
  wT.keyboardImplementationWrapper)(t, { delay: r, document: e.ownerDocument });
  return r > 0 && (await f), n || v(), f;
}
Object.defineProperty(_o, '__esModule', { value: !0 });
_o.type = qT;
var OT = z,
  gs = _i;
function qT(e, t, { delay: r = 0, ...a } = {}) {
  return r > 0
    ? (0, OT.getConfig)().asyncWrapper(() =>
        (0, gs.typeImplementation)(e, t, { delay: r, ...a }),
      )
    : void (0, gs.typeImplementation)(e, t, { delay: r, ...a }).catch(
        console.error,
      );
}
var $i = {};
Object.defineProperty($i, '__esModule', { value: !0 });
$i.clear = $T;
var Es = I,
  TT = _o;
function $T(e) {
  var t, r;
  if (!(0, Es.isElementType)(e, ['input', 'textarea']))
    throw new Error(
      'clear currently only supports input and textarea elements.',
    );
  if ((0, Es.isDisabled)(e)) return;
  const a = e.type;
  a !== 'textarea' && (e.type = 'text'),
    (0, TT.type)(e, '{selectall}{del}', {
      delay: 0,
      initialSelectionStart: (t = e.selectionStart) != null ? t : void 0,
      initialSelectionEnd: (r = e.selectionEnd) != null ? r : void 0,
    }),
    a !== 'textarea' && (e.type = a);
}
var xi = {};
Object.defineProperty(xi, '__esModule', { value: !0 });
xi.tab = AT;
var tr = z,
  bt = I,
  xT = st,
  MT = Wt;
function ST(e, t, r, a) {
  if ((0, bt.isDocument)(a) && ((e === 0 && t) || (e === r.length - 1 && !t)))
    return a.body;
  const n = t ? e - 1 : e + 1,
    o = t ? r.length - 1 : 0;
  return r[n] || r[o];
}
function AT({ shift: e = !1, focusTrap: t } = {}) {
  var r, a;
  const n =
      (r = (a = t) == null ? void 0 : a.ownerDocument) != null ? r : document,
    o = (0, bt.getActiveElement)(n);
  t || (t = n);
  const l = t.querySelectorAll(bt.FOCUSABLE_SELECTOR),
    u = Array.from(l).filter(
      (p) =>
        p === o ||
        (p.getAttribute('tabindex') !== '-1' &&
          !(0, bt.isDisabled)(p) &&
          (0, bt.isVisible)(p)),
    );
  if (u.length === 0) return;
  const i = u
      .map((p, y) => ({ el: p, idx: y }))
      .sort((p, y) => {
        if (o && o.getAttribute('tabindex') === '-1') return p.idx - y.idx;
        const R = Number(p.el.getAttribute('tabindex')),
          w = Number(y.el.getAttribute('tabindex')),
          O = R - w;
        return O === 0 ? p.idx - y.idx : O;
      })
      .map(({ el: p }) => p),
    s = {};
  let d = [];
  i.forEach((p) => {
    const y = p;
    if (y.type === 'radio' && y.name) {
      const R = o;
      if (R && R.type === y.type && R.name === y.name) {
        y === R && d.push(y);
        return;
      }
      if (y.checked) {
        (d = d.filter((w) => w.type !== y.type || w.name !== y.name)),
          d.push(y),
          (s[y.name] = y);
        return;
      }
      if (typeof s[y.name] < 'u') return;
    }
    d.push(y);
  });
  const f = d.findIndex((p) => p === o),
    v = ST(f, e, d, t),
    _ = { key: 'Shift', keyCode: 16, shiftKey: !0 },
    P = { key: 'Tab', keyCode: 9, shiftKey: e };
  let C = !0;
  o &&
    (e && tr.fireEvent.keyDown(o, { ..._ }),
    (C = tr.fireEvent.keyDown(o, { ...P })));
  const q = !C && o ? o : v;
  C && (v === n.body ? o && (0, MT.blur)(o) : (0, xT.focus)(v)),
    tr.fireEvent.keyUp(q, { ...P }),
    e && tr.fireEvent.keyUp(q, { ..._, shiftKey: !1 });
}
var Mi = {};
Object.defineProperty(Mi, '__esModule', { value: !0 });
Mi.upload = NT;
var il = z,
  BT = He,
  IT = Wt,
  jT = st,
  ul = I;
function NT(e, t, r, { applyAccept: a = !1 } = {}) {
  var n;
  const o = (0, ul.isElementType)(e, 'label') ? e.control : e;
  if (!o || !(0, ul.isElementType)(o, 'input', { type: 'file' }))
    throw new TypeError(
      `The ${o === e ? 'given' : 'associated'} ${
        o == null ? void 0 : o.tagName
      } element does not accept file uploads`,
    );
  if ((0, ul.isDisabled)(e)) return;
  (0, BT.click)(e, r == null ? void 0 : r.clickInit);
  const l = (Array.isArray(t) ? t : [t])
    .filter((i) => !a || kT(i, o.accept))
    .slice(0, o.multiple ? void 0 : 1);
  if (
    ((0, IT.blur)(e),
    (0, jT.focus)(e),
    l.length === ((n = o.files) == null ? void 0 : n.length) &&
      l.every((i, s) => {
        var d;
        return i === ((d = o.files) == null ? void 0 : d.item(s));
      }))
  )
    return;
  const u = {
    ...l,
    length: l.length,
    item: (i) => l[i],
    [Symbol.iterator]() {
      let i = 0;
      return { next: () => ({ done: i >= l.length, value: l[i++] }) };
    },
  };
  (0, il.fireEvent)(
    o,
    (0, il.createEvent)('input', o, {
      target: { files: u },
      bubbles: !0,
      cancelable: !1,
      composed: !0,
    }),
  ),
    il.fireEvent.change(o, {
      target: { files: u },
      ...(r == null ? void 0 : r.changeInit),
    });
}
function kT(e, t) {
  if (!t) return !0;
  const r = ['audio/*', 'image/*', 'video/*'];
  return t
    .split(',')
    .some((a) =>
      a.startsWith('.')
        ? e.name.endsWith(a)
        : r.includes(a)
        ? e.type.startsWith(a.substr(0, a.length - 1))
        : e.type === a,
    );
}
var ot = {};
Object.defineProperty(ot, '__esModule', { value: !0 });
ot.selectOptions = ot.deselectOptions = void 0;
var S = z,
  mt = I,
  _s = He,
  Rs = st,
  Cs = ut;
function Hf(e, t, r, a, { skipPointerEventsCheck: n = !1 } = {}) {
  if (!e && !t.multiple)
    throw (0, S.getConfig)().getElementError(
      'Unable to deselect an option in a non-multiple select. Use selectOptions to change the selection instead.',
      t,
    );
  const o = Array.isArray(r) ? r : [r],
    l = Array.from(t.querySelectorAll('option, [role="option"]')),
    u = o
      .map((s) => {
        if (typeof s != 'string' && l.includes(s)) return s;
        {
          const d = l.find((f) => f.value === s || f.innerHTML === s);
          if (d) return d;
          throw (0, S.getConfig)().getElementError(
            `Value "${String(s)}" not found in options`,
            t,
          );
        }
      })
      .filter((s) => !(0, mt.isDisabled)(s));
  if ((0, mt.isDisabled)(t) || !u.length) return;
  if ((0, mt.isElementType)(t, 'select'))
    if (t.multiple)
      for (const s of u) {
        const d = n ? !0 : (0, mt.hasPointerEvents)(s);
        d &&
          (S.fireEvent.pointerOver(s, a),
          S.fireEvent.pointerEnter(t, a),
          S.fireEvent.mouseOver(s),
          S.fireEvent.mouseEnter(t),
          S.fireEvent.pointerMove(s, a),
          S.fireEvent.mouseMove(s, a),
          S.fireEvent.pointerDown(s, a),
          S.fireEvent.mouseDown(s, a)),
          (0, Rs.focus)(t),
          d && (S.fireEvent.pointerUp(s, a), S.fireEvent.mouseUp(s, a)),
          i(s),
          d && S.fireEvent.click(s, a);
      }
    else if (u.length === 1) {
      const s = n ? !0 : (0, mt.hasPointerEvents)(t);
      s ? (0, _s.click)(t, a, { skipPointerEventsCheck: n }) : (0, Rs.focus)(t),
        i(u[0]),
        s &&
          (S.fireEvent.pointerOver(t, a),
          S.fireEvent.pointerEnter(t, a),
          S.fireEvent.mouseOver(t),
          S.fireEvent.mouseEnter(t),
          S.fireEvent.pointerUp(t, a),
          S.fireEvent.mouseUp(t, a),
          S.fireEvent.click(t, a));
    } else
      throw (0, S.getConfig)().getElementError(
        'Cannot select multiple options on a non-multiple select',
        t,
      );
  else if (t.getAttribute('role') === 'listbox')
    u.forEach((s) => {
      (0, Cs.hover)(s, a, { skipPointerEventsCheck: n }),
        (0, _s.click)(s, a, { skipPointerEventsCheck: n }),
        (0, Cs.unhover)(s, a, { skipPointerEventsCheck: n });
    });
  else
    throw (0, S.getConfig)().getElementError(
      'Cannot select options on elements that are neither select nor listbox elements',
      t,
    );
  function i(s) {
    (s.selected = e),
      (0, S.fireEvent)(
        t,
        (0, S.createEvent)('input', t, {
          bubbles: !0,
          cancelable: !1,
          composed: !0,
          ...a,
        }),
      ),
      S.fireEvent.change(t, a);
  }
}
const DT = Hf.bind(null, !0);
ot.selectOptions = DT;
const LT = Hf.bind(null, !1);
ot.deselectOptions = LT;
var Si = {};
Object.defineProperty(Si, '__esModule', { value: !0 });
Si.paste = VT;
var ws = z,
  ie = I;
function FT(e) {
  return (
    ((0, ie.isElementType)(e, 'input') &&
      Boolean(ie.editableInputTypes[e.type])) ||
    (0, ie.isElementType)(e, 'textarea')
  );
}
function VT(
  e,
  t,
  r,
  { initialSelectionStart: a, initialSelectionEnd: n } = {},
) {
  if (!FT(e))
    throw new TypeError(`The given ${e.tagName} element is currently unsupported.
      A PR extending this implementation would be very much welcome at https://github.com/testing-library/user-event`);
  if (
    (0, ie.isDisabled)(e) ||
    ((0, ie.eventWrapper)(() => e.focus()),
    e.selectionStart === 0 &&
      e.selectionEnd === 0 &&
      (0, ie.setSelectionRange)(e, a ?? e.value.length, n ?? e.value.length),
    ws.fireEvent.paste(e, r),
    e.readOnly)
  )
    return;
  t = t.substr(0, (0, ie.getSpaceUntilMaxLength)(e));
  const { newValue: o, newSelectionStart: l } = (0, ie.calculateNewValue)(t, e);
  ws.fireEvent.input(e, { inputType: 'insertFromPaste', target: { value: o } }),
    (0, ie.setSelectionRange)(e, { newSelectionStart: l, selectionEnd: l }, {});
}
(function (e) {
  Object.defineProperty(e, '__esModule', { value: !0 }),
    (e.default = void 0),
    Object.defineProperty(e, 'specialChars', {
      enumerable: !0,
      get: function () {
        return s.specialCharMap;
      },
    });
  var t = He,
    r = _o,
    a = $i,
    n = xi,
    o = ut,
    l = Mi,
    u = ot,
    i = Si,
    s = Ri,
    f = {
      click: t.click,
      dblClick: t.dblClick,
      type: r.type,
      clear: a.clear,
      tab: n.tab,
      hover: o.hover,
      unhover: o.unhover,
      upload: l.upload,
      selectOptions: u.selectOptions,
      deselectOptions: u.deselectOptions,
      paste: i.paste,
      keyboard: s.keyboard,
    };
  e.default = f;
})(Pf);
const UT = Xf(Pf);
var HT =
    (globalThis && globalThis.__makeTemplateObject) ||
    function (e, t) {
      return (
        Object.defineProperty
          ? Object.defineProperty(e, 'raw', { value: t })
          : (e.raw = t),
        e
      );
    },
  Ce =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (Ce =
          Object.assign ||
          function (e) {
            for (var t, r = 1, a = arguments.length; r < a; r++) {
              t = arguments[r];
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            }
            return e;
          }),
        Ce.apply(this, arguments)
      );
    },
  Ps = { timeout: 2147483647, interval: 2147483647 },
  g = Ms(Ce({}, wf), {
    intercept: function (e, t) {
      return t[0] === 'fireEvent' || e.startsWith('findBy');
    },
    getArgs: function (e, t) {
      if (!t.isDebugging) return e.args;
      if (e.method.startsWith('findBy')) {
        var r = e.args,
          a = r[0],
          n = r[1],
          o = r[2];
        return [a, n, Ce(Ce({}, o), Ps)];
      }
      if (e.method.startsWith('waitFor')) {
        var l = e.args,
          u = l[0],
          i = l[1];
        return [u, Ce(Ce({}, i), Ps)];
      }
      return e.args;
    },
  });
g.screen = Object.entries(g.screen).reduce(function (e, t) {
  var r = t[0],
    a = t[1];
  return Object.defineProperty(e, r, {
    get: function () {
      return (
        Qf.warn(
          np(
            Os ||
              (Os = HT(
                [
                  "\n          You are using Testing Library's `screen` object. Use `within(canvasElement)` instead.\n          More info: https://storybook.js.org/docs/react/essentials/interactions\n        ",
                ],
                [
                  "\n          You are using Testing Library's \\`screen\\` object. Use \\`within(canvasElement)\\` instead.\n          More info: https://storybook.js.org/docs/react/essentials/interactions\n        ",
                ],
              )),
          ),
        ),
        a
      );
    },
  });
}, Ce({}, g.screen));
g.buildQueries;
g.configure;
g.createEvent;
g.findAllByAltText;
g.findAllByDisplayValue;
g.findAllByLabelText;
g.findAllByPlaceholderText;
g.findAllByRole;
g.findAllByTestId;
g.findAllByText;
g.findAllByTitle;
g.findByAltText;
g.findByDisplayValue;
g.findByLabelText;
g.findByPlaceholderText;
g.findByRole;
g.findByTestId;
g.findByText;
g.findByTitle;
g.fireEvent;
g.getAllByAltText;
g.getAllByDisplayValue;
g.getAllByLabelText;
g.getAllByPlaceholderText;
g.getAllByRole;
g.getAllByTestId;
g.getAllByText;
g.getAllByTitle;
g.getByAltText;
g.getByDisplayValue;
g.getByLabelText;
g.getByPlaceholderText;
g.getByRole;
g.getByTestId;
g.getByText;
g.getByTitle;
g.getConfig;
g.getDefaultNormalizer;
g.getElementError;
g.getNodeText;
g.getQueriesForElement;
g.getRoles;
g.getSuggestedQuery;
g.isInaccessible;
g.logDOM;
g.logRoles;
g.prettyDOM;
g.queries;
g.queryAllByAltText;
g.queryAllByAttribute;
g.queryAllByDisplayValue;
g.queryAllByLabelText;
g.queryAllByPlaceholderText;
g.queryAllByRole;
g.queryAllByTestId;
g.queryAllByText;
g.queryAllByTitle;
g.queryByAltText;
g.queryByAttribute;
g.queryByDisplayValue;
g.queryByLabelText;
g.queryByPlaceholderText;
g.queryByRole;
g.queryByTestId;
g.queryByText;
g.queryByTitle;
g.queryHelpers;
g.screen;
g.waitFor;
g.waitForElementToBeRemoved;
var WT = g.within;
g.prettyFormat;
var zT = Ms({ userEvent: UT }, { intercept: !0 }).userEvent,
  Os;
const Wf = {
    name: 'my-page',
    components: { MyHeader: op },
    data() {
      return { user: null };
    },
    methods: {
      onLogin() {
        this.user = { name: 'Jane Doe' };
      },
      onLogout() {
        this.user = null;
      },
      onCreateAccount() {
        this.user = { name: 'Jane Doe' };
      },
    },
  },
  KT = up(
    '<section><h2>Pages in Storybook</h2><p> We recommend building UIs with a <a href="https://componentdriven.org" target="_blank" rel="noopener noreferrer"><strong>component-driven</strong></a> process starting with atomic components and ending with pages. </p><p> Render pages with mock data. This makes it easy to build and review page states without needing to navigate to them in your app. Here are some handy patterns for managing page data in Storybook: </p><ul><li> Use a higher-level connected component. Storybook helps you compose such data from the &quot;args&quot; of child component stories </li><li> Assemble data in the page component from your services. You can mock these services out using Storybook. </li></ul><p> Get a guided tutorial on component-driven development at <a href="https://storybook.js.org/tutorials/" target="_blank" rel="noopener noreferrer">Storybook tutorials</a> . Read more in the <a href="https://storybook.js.org/docs" target="_blank" rel="noopener noreferrer">docs</a> . </p><div class="tip-wrapper"><span class="tip">Tip</span> Adjust the width of the canvas with the <svg width="10" height="10" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z" id="a" fill="#999"></path></g></svg> Viewports addon in the toolbar </div></section>',
    1,
  );
function GT(e, t, r, a, n, o) {
  const l = sp('my-header');
  return (
    cp(),
    lp('article', null, [
      ip(
        l,
        {
          user: n.user,
          onLogin: o.onLogin,
          onLogout: o.onLogout,
          onCreateAccount: o.onCreateAccount,
        },
        null,
        8,
        ['user', 'onLogin', 'onLogout', 'onCreateAccount'],
      ),
      KT,
    ])
  );
}
const zf = dp(Wf, [['render', GT]]);
Wf.__docgenInfo = {
  displayName: 'my-page',
  exportName: 'default',
  description: '',
  tags: {},
};
const o1 = {
    title: 'Example/Page',
    component: zf,
    parameters: {
      storySource: {
        source: `import { within, userEvent } from '@storybook/testing-library';
import MyPage from './Page.vue';

export default {
  title: 'Example/Page',
  component: MyPage,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/vue/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = () => ({
  // Components used in your story \`template\` are defined in the \`components\` object
  components: { MyPage },

  // Here we define the \`template\`
  template: '<my-page />',
});

export const LoggedOut = Template.bind({});

// More on interaction testing: https://storybook.js.org/docs/vue/writing-tests/interaction-testing
export const LoggedIn = Template.bind({});
LoggedIn.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const loginButton = await canvas.getByRole('button', { name: /Log in/i });
  await userEvent.click(loginButton);
};
`,
        locationsMap: {
          'logged-out': {
            startLoc: { col: 17, line: 13 },
            endLoc: { col: 2, line: 19 },
            startBody: { col: 17, line: 13 },
            endBody: { col: 2, line: 19 },
          },
          'logged-in': {
            startLoc: { col: 17, line: 13 },
            endLoc: { col: 2, line: 19 },
            startBody: { col: 17, line: 13 },
            endBody: { col: 2, line: 19 },
          },
        },
      },
      layout: 'fullscreen',
    },
  },
  Kf = () => ({ components: { MyPage: zf }, template: '<my-page />' }),
  l1 = Kf.bind({}),
  XT = Kf.bind({});
XT.play = async ({ canvasElement: e }) => {
  const r = await WT(e).getByRole('button', { name: /Log in/i });
  await zT.click(r);
};
const i1 = ['LoggedOut', 'LoggedIn'];
export {
  XT as LoggedIn,
  l1 as LoggedOut,
  i1 as __namedExportsOrder,
  o1 as default,
};
//# sourceMappingURL=Page.stories-24419f8b.js.map
