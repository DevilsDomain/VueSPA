import { r as R, a as me } from './index-e0023ec7.js';
import { m as Nr, l as $r } from './index-73814c06.js';
var lr, dr, pr, gr, hr, mr, br;
function ut(e, r, t) {
  return (
    r in e
      ? Object.defineProperty(e, r, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[r] = t),
    e
  );
}
function lt(e, r) {
  return ht(e) || gt(e, r) || pt(e, r) || dt();
}
function dt() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function pt(e, r) {
  if (e) {
    if (typeof e == 'string') return yr(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (t === 'Object' && e.constructor && (t = e.constructor.name),
      t === 'Map' || t === 'Set')
    )
      return Array.from(e);
    if (t === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return yr(e, r);
  }
}
function yr(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
  return n;
}
function gt(e, r) {
  var t =
    e == null
      ? null
      : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (t != null) {
    var n = [],
      a = !0,
      i = !1,
      o,
      s;
    try {
      for (
        t = t.call(e);
        !(a = (o = t.next()).done) && (n.push(o.value), !(r && n.length === r));
        a = !0
      );
    } catch (f) {
      (i = !0), (s = f);
    } finally {
      try {
        !a && t.return != null && t.return();
      } finally {
        if (i) throw s;
      }
    }
    return n;
  }
}
function ht(e) {
  if (Array.isArray(e)) return e;
}
function q(e, r) {
  return (
    r || (r = e.slice(0)),
    Object.freeze(
      Object.defineProperties(e, { raw: { value: Object.freeze(r) } }),
    )
  );
}
function k(e) {
  return (
    (k =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (r) {
            return typeof r;
          }
        : function (r) {
            return r &&
              typeof Symbol == 'function' &&
              r.constructor === Symbol &&
              r !== Symbol.prototype
              ? 'symbol'
              : typeof r;
          }),
    k(e)
  );
}
function be() {
  return (
    (be =
      Object.assign ||
      function (e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = arguments[r];
          for (var n in t)
            Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        }
        return e;
      }),
    be.apply(this, arguments)
  );
}
function Ee(e) {
  var r = Object.create(null);
  return function (t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var mt =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  bt = Ee(function (e) {
    return (
      mt.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  });
function yt(e) {
  if (e.sheet) return e.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === e) return document.styleSheets[r];
}
function vt(e) {
  var r = document.createElement('style');
  return (
    r.setAttribute('data-emotion', e.key),
    e.nonce !== void 0 && r.setAttribute('nonce', e.nonce),
    r.appendChild(document.createTextNode('')),
    r.setAttribute('data-s', ''),
    r
  );
}
var Ot = (function () {
    function e(t) {
      var n = this;
      (this._insertTag = function (a) {
        var i;
        n.tags.length === 0
          ? n.insertionPoint
            ? (i = n.insertionPoint.nextSibling)
            : n.prepend
            ? (i = n.container.firstChild)
            : (i = n.before)
          : (i = n.tags[n.tags.length - 1].nextSibling),
          n.container.insertBefore(a, i),
          n.tags.push(a);
      }),
        (this.isSpeedy = t.speedy === void 0 ? !0 : t.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = t.nonce),
        (this.key = t.key),
        (this.container = t.container),
        (this.prepend = t.prepend),
        (this.insertionPoint = t.insertionPoint),
        (this.before = null);
    }
    var r = e.prototype;
    return (
      (r.hydrate = function (n) {
        n.forEach(this._insertTag);
      }),
      (r.insert = function (n) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(vt(this));
        var a = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var i = yt(a);
          try {
            i.insertRule(n, i.cssRules.length);
          } catch {}
        } else a.appendChild(document.createTextNode(n));
        this.ctr++;
      }),
      (r.flush = function () {
        this.tags.forEach(function (n) {
          return n.parentNode && n.parentNode.removeChild(n);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  I = '-ms-',
  ye = '-moz-',
  y = '-webkit-',
  Dr = 'comm',
  nr = 'rule',
  ar = 'decl',
  _t = '@import',
  jr = '@keyframes',
  Et = Math.abs,
  Ce = String.fromCharCode,
  Ct = Object.assign;
function Tt(e, r) {
  return (
    (((((((r << 2) ^ L(e, 0)) << 2) ^ L(e, 1)) << 2) ^ L(e, 2)) << 2) ^ L(e, 3)
  );
}
function Hr(e) {
  return e.trim();
}
function wt(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
function O(e, r, t) {
  return e.replace(r, t);
}
function Ye(e, r) {
  return e.indexOf(r);
}
function L(e, r) {
  return e.charCodeAt(r) | 0;
}
function re(e, r, t) {
  return e.slice(r, t);
}
function N(e) {
  return e.length;
}
function ir(e) {
  return e.length;
}
function ue(e, r) {
  return r.push(e), e;
}
function xt(e, r) {
  return e.map(r).join('');
}
var Te = 1,
  X = 1,
  Ur = 0,
  B = 0,
  S = 0,
  K = '';
function we(e, r, t, n, a, i, o) {
  return {
    value: e,
    root: r,
    parent: t,
    type: n,
    props: a,
    children: i,
    line: Te,
    column: X,
    length: o,
    return: '',
  };
}
function Q(e, r) {
  return Ct(we('', null, null, '', null, null, 0), e, { length: -e.length }, r);
}
function St() {
  return S;
}
function At() {
  return (S = B > 0 ? L(K, --B) : 0), X--, S === 10 && ((X = 1), Te--), S;
}
function M() {
  return (S = B < Ur ? L(K, B++) : 0), X++, S === 10 && ((X = 1), Te++), S;
}
function H() {
  return L(K, B);
}
function le() {
  return B;
}
function ce(e, r) {
  return re(K, e, r);
}
function te(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Gr(e) {
  return (Te = X = 1), (Ur = N((K = e))), (B = 0), [];
}
function zr(e) {
  return (K = ''), e;
}
function de(e) {
  return Hr(ce(B - 1, qe(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Rt(e) {
  for (; (S = H()) && S < 33; ) M();
  return te(e) > 2 || te(S) > 3 ? '' : ' ';
}
function kt(e, r) {
  for (
    ;
    --r &&
    M() &&
    !(S < 48 || S > 102 || (S > 57 && S < 65) || (S > 70 && S < 97));

  );
  return ce(e, le() + (r < 6 && H() == 32 && M() == 32));
}
function qe(e) {
  for (; M(); )
    switch (S) {
      case e:
        return B;
      case 34:
      case 39:
        e !== 34 && e !== 39 && qe(S);
        break;
      case 40:
        e === 41 && qe(e);
        break;
      case 92:
        M();
        break;
    }
  return B;
}
function Ft(e, r) {
  for (; M() && e + S !== 47 + 10; ) if (e + S === 42 + 42 && H() === 47) break;
  return '/*' + ce(r, B - 1) + '*' + Ce(e === 47 ? e : M());
}
function It(e) {
  for (; !te(H()); ) M();
  return ce(e, B);
}
function vr(e) {
  return zr(pe('', null, null, null, [''], (e = Gr(e)), 0, [0], e));
}
function pe(e, r, t, n, a, i, o, s, f) {
  for (
    var c = 0,
      l = 0,
      u = o,
      p = 0,
      E = 0,
      h = 0,
      m = 1,
      A = 1,
      C = 1,
      T = 0,
      w = '',
      x = a,
      b = i,
      v = n,
      g = w;
    A;

  )
    switch (((h = T), (T = M()))) {
      case 40:
        if (h != 108 && g.charCodeAt(u - 1) == 58) {
          Ye((g += O(de(T), '&', '&\f')), '&\f') != -1 && (C = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        g += de(T);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        g += Rt(h);
        break;
      case 92:
        g += kt(le() - 1, 7);
        continue;
      case 47:
        switch (H()) {
          case 42:
          case 47:
            ue(Lt(Ft(M(), le()), r, t), f);
            break;
          default:
            g += '/';
        }
        break;
      case 123 * m:
        s[c++] = N(g) * C;
      case 125 * m:
      case 59:
      case 0:
        switch (T) {
          case 0:
          case 125:
            A = 0;
          case 59 + l:
            E > 0 &&
              N(g) - u &&
              ue(
                E > 32
                  ? _r(g + ';', n, t, u - 1)
                  : _r(O(g, ' ', '') + ';', n, t, u - 2),
                f,
              );
            break;
          case 59:
            g += ';';
          default:
            if (
              (ue((v = Or(g, r, t, c, l, a, s, w, (x = []), (b = []), u)), i),
              T === 123)
            )
              if (l === 0) pe(g, r, v, v, x, i, u, s, b);
              else
                switch (p) {
                  case 100:
                  case 109:
                  case 115:
                    pe(
                      e,
                      v,
                      v,
                      n && ue(Or(e, v, v, 0, 0, a, s, w, a, (x = []), u), b),
                      a,
                      b,
                      u,
                      s,
                      n ? x : b,
                    );
                    break;
                  default:
                    pe(g, v, v, v, [''], b, 0, s, b);
                }
        }
        (c = l = E = 0), (m = C = 1), (w = g = ''), (u = o);
        break;
      case 58:
        (u = 1 + N(g)), (E = h);
      default:
        if (m < 1) {
          if (T == 123) --m;
          else if (T == 125 && m++ == 0 && At() == 125) continue;
        }
        switch (((g += Ce(T)), T * m)) {
          case 38:
            C = l > 0 ? 1 : ((g += '\f'), -1);
            break;
          case 44:
            (s[c++] = (N(g) - 1) * C), (C = 1);
            break;
          case 64:
            H() === 45 && (g += de(M())),
              (p = H()),
              (l = u = N((w = g += It(le())))),
              T++;
            break;
          case 45:
            h === 45 && N(g) == 2 && (m = 0);
        }
    }
  return i;
}
function Or(e, r, t, n, a, i, o, s, f, c, l) {
  for (
    var u = a - 1, p = a === 0 ? i : [''], E = ir(p), h = 0, m = 0, A = 0;
    h < n;
    ++h
  )
    for (var C = 0, T = re(e, u + 1, (u = Et((m = o[h])))), w = e; C < E; ++C)
      (w = Hr(m > 0 ? p[C] + ' ' + T : O(T, /&\f/g, p[C]))) && (f[A++] = w);
  return we(e, r, t, a === 0 ? nr : s, f, c, l);
}
function Lt(e, r, t) {
  return we(e, r, t, Dr, Ce(St()), re(e, 2, -2), 0);
}
function _r(e, r, t, n) {
  return we(e, r, t, ar, re(e, 0, n), re(e, n + 1, -1), n);
}
function Wr(e, r) {
  switch (Tt(e, r)) {
    case 5103:
      return y + 'print-' + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return y + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return y + e + ye + e + I + e + e;
    case 6828:
    case 4268:
      return y + e + I + e + e;
    case 6165:
      return y + e + I + 'flex-' + e + e;
    case 5187:
      return (
        y + e + O(e, /(\w+).+(:[^]+)/, y + 'box-$1$2' + I + 'flex-$1$2') + e
      );
    case 5443:
      return y + e + I + 'flex-item-' + O(e, /flex-|-self/, '') + e;
    case 4675:
      return (
        y + e + I + 'flex-line-pack' + O(e, /align-content|flex-|-self/, '') + e
      );
    case 5548:
      return y + e + I + O(e, 'shrink', 'negative') + e;
    case 5292:
      return y + e + I + O(e, 'basis', 'preferred-size') + e;
    case 6060:
      return (
        y +
        'box-' +
        O(e, '-grow', '') +
        y +
        e +
        I +
        O(e, 'grow', 'positive') +
        e
      );
    case 4554:
      return y + O(e, /([^-])(transform)/g, '$1' + y + '$2') + e;
    case 6187:
      return (
        O(O(O(e, /(zoom-|grab)/, y + '$1'), /(image-set)/, y + '$1'), e, '') + e
      );
    case 5495:
    case 3959:
      return O(e, /(image-set\([^]*)/, y + '$1$`$1');
    case 4968:
      return (
        O(
          O(e, /(.+:)(flex-)?(.*)/, y + 'box-pack:$3' + I + 'flex-pack:$3'),
          /s.+-b[^;]+/,
          'justify',
        ) +
        y +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return O(e, /(.+)-inline(.+)/, y + '$1$2') + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (N(e) - 1 - r > 6)
        switch (L(e, r + 1)) {
          case 109:
            if (L(e, r + 4) !== 45) break;
          case 102:
            return (
              O(
                e,
                /(.+:)(.+)-([^]+)/,
                '$1' +
                  y +
                  '$2-$3$1' +
                  ye +
                  (L(e, r + 3) == 108 ? '$3' : '$2-$3'),
              ) + e
            );
          case 115:
            return ~Ye(e, 'stretch')
              ? Wr(O(e, 'stretch', 'fill-available'), r) + e
              : e;
        }
      break;
    case 4949:
      if (L(e, r + 1) !== 115) break;
    case 6444:
      switch (L(e, N(e) - 3 - (~Ye(e, '!important') && 10))) {
        case 107:
          return O(e, ':', ':' + y) + e;
        case 101:
          return (
            O(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              '$1' +
                y +
                (L(e, 14) === 45 ? 'inline-' : '') +
                'box$3$1' +
                y +
                '$2$3$1' +
                I +
                '$2box$3',
            ) + e
          );
      }
      break;
    case 5936:
      switch (L(e, r + 11)) {
        case 114:
          return y + e + I + O(e, /[svh]\w+-[tblr]{2}/, 'tb') + e;
        case 108:
          return y + e + I + O(e, /[svh]\w+-[tblr]{2}/, 'tb-rl') + e;
        case 45:
          return y + e + I + O(e, /[svh]\w+-[tblr]{2}/, 'lr') + e;
      }
      return y + e + I + e + e;
  }
  return e;
}
function Y(e, r) {
  for (var t = '', n = ir(e), a = 0; a < n; a++) t += r(e[a], a, e, r) || '';
  return t;
}
function Er(e, r, t, n) {
  switch (e.type) {
    case _t:
    case ar:
      return (e.return = e.return || e.value);
    case Dr:
      return '';
    case jr:
      return (e.return = e.value + '{' + Y(e.children, n) + '}');
    case nr:
      e.value = e.props.join(',');
  }
  return N((t = Y(e.children, n))) ? (e.return = e.value + '{' + t + '}') : '';
}
function Cr(e) {
  var r = ir(e);
  return function (t, n, a, i) {
    for (var o = '', s = 0; s < r; s++) o += e[s](t, n, a, i) || '';
    return o;
  };
}
function Bt(e) {
  return function (r) {
    r.root || ((r = r.return) && e(r));
  };
}
function Mt(e, r, t, n) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case ar:
        e.return = Wr(e.value, e.length);
        break;
      case jr:
        return Y([Q(e, { value: O(e.value, '@', '@' + y) })], n);
      case nr:
        if (e.length)
          return xt(e.props, function (a) {
            switch (wt(a, /(::plac\w+|:read-\w+)/)) {
              case ':read-only':
              case ':read-write':
                return Y(
                  [Q(e, { props: [O(a, /:(read-\w+)/, ':' + ye + '$1')] })],
                  n,
                );
              case '::placeholder':
                return Y(
                  [
                    Q(e, { props: [O(a, /:(plac\w+)/, ':' + y + 'input-$1')] }),
                    Q(e, { props: [O(a, /:(plac\w+)/, ':' + ye + '$1')] }),
                    Q(e, { props: [O(a, /:(plac\w+)/, I + 'input-$1')] }),
                  ],
                  n,
                );
            }
            return '';
          });
    }
}
var Ve = function (r) {
    var t = new WeakMap();
    return function (n) {
      if (t.has(n)) return t.get(n);
      var a = r(n);
      return t.set(n, a), a;
    };
  },
  Pt = function (r, t, n) {
    for (
      var a = 0, i = 0;
      (a = i), (i = H()), a === 38 && i === 12 && (t[n] = 1), !te(i);

    )
      M();
    return ce(r, B);
  },
  Nt = function (r, t) {
    var n = -1,
      a = 44;
    do
      switch (te(a)) {
        case 0:
          a === 38 && H() === 12 && (t[n] = 1), (r[n] += Pt(B - 1, t, n));
          break;
        case 2:
          r[n] += de(a);
          break;
        case 4:
          if (a === 44) {
            (r[++n] = H() === 58 ? '&\f' : ''), (t[n] = r[n].length);
            break;
          }
        default:
          r[n] += Ce(a);
      }
    while ((a = M()));
    return r;
  },
  $t = function (r, t) {
    return zr(Nt(Gr(r), t));
  },
  Tr = new WeakMap(),
  Dt = function (r) {
    if (!(r.type !== 'rule' || !r.parent || r.length < 1)) {
      for (
        var t = r.value,
          n = r.parent,
          a = r.column === n.column && r.line === n.line;
        n.type !== 'rule';

      )
        if (((n = n.parent), !n)) return;
      if (
        !(r.props.length === 1 && t.charCodeAt(0) !== 58 && !Tr.get(n)) &&
        !a
      ) {
        Tr.set(r, !0);
        for (
          var i = [], o = $t(t, i), s = n.props, f = 0, c = 0;
          f < o.length;
          f++
        )
          for (var l = 0; l < s.length; l++, c++)
            r.props[c] = i[f] ? o[f].replace(/&\f/g, s[l]) : s[l] + ' ' + o[f];
      }
    }
  },
  jt = function (r) {
    if (r.type === 'decl') {
      var t = r.value;
      t.charCodeAt(0) === 108 &&
        t.charCodeAt(2) === 98 &&
        ((r.return = ''), (r.value = ''));
    }
  },
  ge = typeof document < 'u',
  Ht = ge
    ? void 0
    : Ve(function () {
        return Ee(function () {
          var e = {};
          return function (r) {
            return e[r];
          };
        });
      }),
  Ut = [Mt],
  Jr = function (r) {
    var t = r.key;
    if (ge && t === 'css') {
      var n = document.querySelectorAll('style[data-emotion]:not([data-s])');
      Array.prototype.forEach.call(n, function (x) {
        var b = x.getAttribute('data-emotion');
        b.indexOf(' ') !== -1 &&
          (document.head.appendChild(x), x.setAttribute('data-s', ''));
      });
    }
    var a = r.stylisPlugins || Ut,
      i = {},
      o,
      s = [];
    ge &&
      ((o = r.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
        function (x) {
          for (
            var b = x.getAttribute('data-emotion').split(' '), v = 1;
            v < b.length;
            v++
          )
            i[b[v]] = !0;
          s.push(x);
        },
      ));
    var f,
      c = [Dt, jt];
    if (ge) {
      var l,
        u = [
          Er,
          Bt(function (x) {
            l.insert(x);
          }),
        ],
        p = Cr(c.concat(a, u)),
        E = function (b) {
          return Y(vr(b), p);
        };
      f = function (b, v, g, V) {
        (l = g),
          E(b ? b + '{' + v.styles + '}' : v.styles),
          V && (w.inserted[v.name] = !0);
      };
    } else {
      var h = [Er],
        m = Cr(c.concat(a, h)),
        A = function (b) {
          return Y(vr(b), m);
        },
        C = Ht(a)(t),
        T = function (b, v) {
          var g = v.name;
          return (
            C[g] === void 0 &&
              (C[g] = A(b ? b + '{' + v.styles + '}' : v.styles)),
            C[g]
          );
        };
      f = function (b, v, g, V) {
        var z = v.name,
          U = T(b, v);
        if (w.compat === void 0) return V && (w.inserted[z] = !0), U;
        if (V) w.inserted[z] = U;
        else return U;
      };
    }
    var w = {
      key: t,
      sheet: new Ot({
        key: t,
        container: o,
        nonce: r.nonce,
        speedy: r.speedy,
        prepend: r.prepend,
        insertionPoint: r.insertionPoint,
      }),
      nonce: r.nonce,
      inserted: i,
      registered: {},
      insert: f,
    };
    return w.sheet.hydrate(s), w;
  },
  wr =
    typeof globalThis < 'u'
      ? globalThis
      : typeof window < 'u'
      ? window
      : typeof global < 'u'
      ? global
      : typeof self < 'u'
      ? self
      : {},
  Yr = { exports: {} },
  _ = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var F = typeof Symbol == 'function' && Symbol.for,
  or = F ? Symbol.for('react.element') : 60103,
  sr = F ? Symbol.for('react.portal') : 60106,
  xe = F ? Symbol.for('react.fragment') : 60107,
  Se = F ? Symbol.for('react.strict_mode') : 60108,
  Ae = F ? Symbol.for('react.profiler') : 60114,
  Re = F ? Symbol.for('react.provider') : 60109,
  ke = F ? Symbol.for('react.context') : 60110,
  fr = F ? Symbol.for('react.async_mode') : 60111,
  Fe = F ? Symbol.for('react.concurrent_mode') : 60111,
  Ie = F ? Symbol.for('react.forward_ref') : 60112,
  Le = F ? Symbol.for('react.suspense') : 60113,
  Gt = F ? Symbol.for('react.suspense_list') : 60120,
  Be = F ? Symbol.for('react.memo') : 60115,
  Me = F ? Symbol.for('react.lazy') : 60116,
  zt = F ? Symbol.for('react.block') : 60121,
  Wt = F ? Symbol.for('react.fundamental') : 60117,
  Jt = F ? Symbol.for('react.responder') : 60118,
  Yt = F ? Symbol.for('react.scope') : 60119;
function P(e) {
  if (k(e) === 'object' && e !== null) {
    var r = e.$$typeof;
    switch (r) {
      case or:
        switch (((e = e.type), e)) {
          case fr:
          case Fe:
          case xe:
          case Ae:
          case Se:
          case Le:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case ke:
              case Ie:
              case Me:
              case Be:
              case Re:
                return e;
              default:
                return r;
            }
        }
      case sr:
        return r;
    }
  }
}
function qr(e) {
  return P(e) === Fe;
}
_.AsyncMode = fr;
_.ConcurrentMode = Fe;
_.ContextConsumer = ke;
_.ContextProvider = Re;
_.Element = or;
_.ForwardRef = Ie;
_.Fragment = xe;
_.Lazy = Me;
_.Memo = Be;
_.Portal = sr;
_.Profiler = Ae;
_.StrictMode = Se;
_.Suspense = Le;
_.isAsyncMode = function (e) {
  return qr(e) || P(e) === fr;
};
_.isConcurrentMode = qr;
_.isContextConsumer = function (e) {
  return P(e) === ke;
};
_.isContextProvider = function (e) {
  return P(e) === Re;
};
_.isElement = function (e) {
  return k(e) === 'object' && e !== null && e.$$typeof === or;
};
_.isForwardRef = function (e) {
  return P(e) === Ie;
};
_.isFragment = function (e) {
  return P(e) === xe;
};
_.isLazy = function (e) {
  return P(e) === Me;
};
_.isMemo = function (e) {
  return P(e) === Be;
};
_.isPortal = function (e) {
  return P(e) === sr;
};
_.isProfiler = function (e) {
  return P(e) === Ae;
};
_.isStrictMode = function (e) {
  return P(e) === Se;
};
_.isSuspense = function (e) {
  return P(e) === Le;
};
_.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === xe ||
    e === Fe ||
    e === Ae ||
    e === Se ||
    e === Le ||
    e === Gt ||
    (k(e) === 'object' &&
      e !== null &&
      (e.$$typeof === Me ||
        e.$$typeof === Be ||
        e.$$typeof === Re ||
        e.$$typeof === ke ||
        e.$$typeof === Ie ||
        e.$$typeof === Wt ||
        e.$$typeof === Jt ||
        e.$$typeof === Yt ||
        e.$$typeof === zt))
  );
};
_.typeOf = P;
Yr.exports = _;
var Vr = Yr.exports,
  qt = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  Vt = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  Xr = {};
Xr[Vr.ForwardRef] = qt;
Xr[Vr.Memo] = Vt;
var Xe = typeof document < 'u',
  Xt = function (r, t, n) {
    var a = r.key + '-' + t.name;
    (n === !1 || (Xe === !1 && r.compat !== void 0)) &&
      r.registered[a] === void 0 &&
      (r.registered[a] = t.styles);
  },
  Zt = function (r, t, n) {
    Xt(r, t, n);
    var a = r.key + '-' + t.name;
    if (r.inserted[t.name] === void 0) {
      var i = '',
        o = t;
      do {
        var s = r.insert(t === o ? '.' + a : '', o, r.sheet, !0);
        !Xe && s !== void 0 && (i += s), (o = o.next);
      } while (o !== void 0);
      if (!Xe && i.length !== 0) return i;
    }
  };
function Zr(e) {
  for (var r = 0, t, n = 0, a = e.length; a >= 4; ++n, a -= 4)
    (t =
      (e.charCodeAt(n) & 255) |
      ((e.charCodeAt(++n) & 255) << 8) |
      ((e.charCodeAt(++n) & 255) << 16) |
      ((e.charCodeAt(++n) & 255) << 24)),
      (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
      (t ^= t >>> 24),
      (r =
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)) ^
        ((r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)));
  switch (a) {
    case 3:
      r ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      r ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      (r ^= e.charCodeAt(n) & 255),
        (r = (r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16));
  }
  return (
    (r ^= r >>> 13),
    (r = (r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)),
    ((r ^ (r >>> 15)) >>> 0).toString(36)
  );
}
var Kr = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  Kt = /[A-Z]|^ms/g,
  Qt = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  Qr = function (r) {
    return r.charCodeAt(1) === 45;
  },
  xr = function (r) {
    return r != null && typeof r != 'boolean';
  },
  je = Ee(function (e) {
    return Qr(e) ? e : e.replace(Kt, '-$&').toLowerCase();
  }),
  Sr = function (r, t) {
    switch (r) {
      case 'animation':
      case 'animationName':
        if (typeof t == 'string')
          return t.replace(Qt, function (n, a, i) {
            return ($ = { name: a, styles: i, next: $ }), a;
          });
    }
    return Kr[r] !== 1 && !Qr(r) && typeof t == 'number' && t !== 0
      ? t + 'px'
      : t;
  };
function ne(e, r, t) {
  if (t == null) return '';
  if (t.__emotion_styles !== void 0) return t;
  switch (k(t)) {
    case 'boolean':
      return '';
    case 'object': {
      if (t.anim === 1)
        return ($ = { name: t.name, styles: t.styles, next: $ }), t.name;
      if (t.styles !== void 0) {
        var n = t.next;
        if (n !== void 0)
          for (; n !== void 0; )
            ($ = { name: n.name, styles: n.styles, next: $ }), (n = n.next);
        var a = t.styles + ';';
        return a;
      }
      return en(e, r, t);
    }
    case 'function': {
      if (e !== void 0) {
        var i = $,
          o = t(e);
        return ($ = i), ne(e, r, o);
      }
      break;
    }
  }
  if (r == null) return t;
  var s = r[t];
  return s !== void 0 ? s : t;
}
function en(e, r, t) {
  var n = '';
  if (Array.isArray(t))
    for (var a = 0; a < t.length; a++) n += ne(e, r, t[a]) + ';';
  else
    for (var i in t) {
      var o = t[i];
      if (k(o) !== 'object')
        r != null && r[o] !== void 0
          ? (n += i + '{' + r[o] + '}')
          : xr(o) && (n += je(i) + ':' + Sr(i, o) + ';');
      else if (
        Array.isArray(o) &&
        typeof o[0] == 'string' &&
        (r == null || r[o[0]] === void 0)
      )
        for (var s = 0; s < o.length; s++)
          xr(o[s]) && (n += je(i) + ':' + Sr(i, o[s]) + ';');
      else {
        var f = ne(e, r, o);
        switch (i) {
          case 'animation':
          case 'animationName': {
            n += je(i) + ':' + f + ';';
            break;
          }
          default:
            n += i + '{' + f + '}';
        }
      }
    }
  return n;
}
var Ar = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  $,
  et = function (r, t, n) {
    if (
      r.length === 1 &&
      k(r[0]) === 'object' &&
      r[0] !== null &&
      r[0].styles !== void 0
    )
      return r[0];
    var a = !0,
      i = '';
    $ = void 0;
    var o = r[0];
    o == null || o.raw === void 0
      ? ((a = !1), (i += ne(n, t, o)))
      : (i += o[0]);
    for (var s = 1; s < r.length; s++) (i += ne(n, t, r[s])), a && (i += o[s]);
    Ar.lastIndex = 0;
    for (var f = '', c; (c = Ar.exec(i)) !== null; ) f += '-' + c[1];
    var l = Zr(i) + f;
    return { name: l, styles: i, next: $ };
  },
  rt = typeof document < 'u',
  ve = R.createContext(typeof HTMLElement < 'u' ? Jr({ key: 'css' }) : null);
ve.Provider;
var cr = function (r) {
  return R.forwardRef(function (t, n) {
    var a = R.useContext(ve);
    return r(t, a, n);
  });
};
rt ||
  (cr = function (r) {
    return function (t) {
      var n = R.useContext(ve);
      return n === null
        ? ((n = Jr({ key: 'css' })),
          R.createElement(ve.Provider, { value: n }, r(t, n)))
        : r(t, n);
    };
  });
var ae = R.createContext({}),
  rn = function () {
    return R.useContext(ae);
  },
  tn = function (r, t) {
    if (typeof t == 'function') {
      var n = t(r);
      return n;
    }
    return be({}, r, t);
  },
  nn = Ve(function (e) {
    return Ve(function (r) {
      return tn(e, r);
    });
  }),
  La = function (r) {
    var t = R.useContext(ae);
    return (
      r.theme !== t && (t = nn(t)(r.theme)),
      R.createElement(ae.Provider, { value: t }, r.children)
    );
  };
function an(e) {
  if (e.sheet) return e.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === e) return document.styleSheets[r];
}
function on(e) {
  var r = document.createElement('style');
  return (
    r.setAttribute('data-emotion', e.key),
    e.nonce !== void 0 && r.setAttribute('nonce', e.nonce),
    r.appendChild(document.createTextNode('')),
    r.setAttribute('data-s', ''),
    r
  );
}
var sn = (function () {
    function e(t) {
      var n = this;
      (this._insertTag = function (a) {
        var i;
        n.tags.length === 0
          ? n.insertionPoint
            ? (i = n.insertionPoint.nextSibling)
            : n.prepend
            ? (i = n.container.firstChild)
            : (i = n.before)
          : (i = n.tags[n.tags.length - 1].nextSibling),
          n.container.insertBefore(a, i),
          n.tags.push(a);
      }),
        (this.isSpeedy = t.speedy === void 0 ? !0 : t.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = t.nonce),
        (this.key = t.key),
        (this.container = t.container),
        (this.prepend = t.prepend),
        (this.insertionPoint = t.insertionPoint),
        (this.before = null);
    }
    var r = e.prototype;
    return (
      (r.hydrate = function (n) {
        n.forEach(this._insertTag);
      }),
      (r.insert = function (n) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(on(this));
        var a = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var i = an(a);
          try {
            i.insertRule(n, i.cssRules.length);
          } catch {}
        } else a.appendChild(document.createTextNode(n));
        this.ctr++;
      }),
      (r.flush = function () {
        this.tags.forEach(function (n) {
          return n.parentNode && n.parentNode.removeChild(n);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  Rr = me['useInsertionEffect'] ? me['useInsertionEffect'] : R.useLayoutEffect,
  fn = cr(function (e, r) {
    var t = e.styles,
      n = et([t], void 0, R.useContext(ae));
    if (!rt) {
      for (var a, i = n.name, o = n.styles, s = n.next; s !== void 0; )
        (i += ' ' + s.name), (o += s.styles), (s = s.next);
      var f = r.compat === !0,
        c = r.insert('', { name: i, styles: o }, r.sheet, f);
      return f
        ? null
        : R.createElement(
            'style',
            ((a = {}),
            (a['data-emotion'] = r.key + '-global ' + i),
            (a.dangerouslySetInnerHTML = { __html: c }),
            (a.nonce = r.sheet.nonce),
            a),
          );
    }
    var l = R.useRef();
    return (
      Rr(
        function () {
          var u = r.key + '-global',
            p = new sn({
              key: u,
              nonce: r.sheet.nonce,
              container: r.sheet.container,
              speedy: r.sheet.isSpeedy,
            }),
            E = !1,
            h = document.querySelector(
              'style[data-emotion="' + u + ' ' + n.name + '"]',
            );
          return (
            r.sheet.tags.length && (p.before = r.sheet.tags[0]),
            h !== null &&
              ((E = !0), h.setAttribute('data-emotion', u), p.hydrate([h])),
            (l.current = [p, E]),
            function () {
              p.flush();
            }
          );
        },
        [r],
      ),
      Rr(
        function () {
          var u = l.current,
            p = u[0],
            E = u[1];
          if (E) {
            u[1] = !1;
            return;
          }
          if ((n.next !== void 0 && Zt(r, n.next, !0), p.tags.length)) {
            var h = p.tags[p.tags.length - 1].nextElementSibling;
            (p.before = h), p.flush();
          }
          r.insert('', n, p, !1);
        },
        [r, n.name],
      ),
      null
    );
  });
function ur() {
  for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
    r[t] = arguments[t];
  return et(r);
}
var Pe = function () {
    var r = ur.apply(void 0, arguments),
      t = 'animation-' + r.name;
    return {
      name: t,
      styles: '@keyframes ' + t + '{' + r.styles + '}',
      anim: 1,
      toString: function () {
        return '_EMO_' + this.name + '_' + this.styles + '_EMO_';
      },
    };
  },
  Ze = typeof document < 'u';
function cn(e, r, t) {
  var n = '';
  return (
    t.split(' ').forEach(function (a) {
      e[a] !== void 0 ? r.push(e[a] + ';') : (n += a + ' ');
    }),
    n
  );
}
var tt = function (r, t, n) {
    var a = r.key + '-' + t.name;
    (n === !1 || (Ze === !1 && r.compat !== void 0)) &&
      r.registered[a] === void 0 &&
      (r.registered[a] = t.styles);
  },
  un = function (r, t, n) {
    tt(r, t, n);
    var a = r.key + '-' + t.name;
    if (r.inserted[t.name] === void 0) {
      var i = '',
        o = t;
      do {
        var s = r.insert(t === o ? '.' + a : '', o, r.sheet, !0);
        !Ze && s !== void 0 && (i += s), (o = o.next);
      } while (o !== void 0);
      if (!Ze && i.length !== 0) return i;
    }
  },
  ln = /[A-Z]|^ms/g,
  dn = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  nt = function (r) {
    return r.charCodeAt(1) === 45;
  },
  kr = function (r) {
    return r != null && typeof r != 'boolean';
  },
  He = Ee(function (e) {
    return nt(e) ? e : e.replace(ln, '-$&').toLowerCase();
  }),
  Fr = function (r, t) {
    switch (r) {
      case 'animation':
      case 'animationName':
        if (typeof t == 'string')
          return t.replace(dn, function (n, a, i) {
            return (D = { name: a, styles: i, next: D }), a;
          });
    }
    return Kr[r] !== 1 && !nt(r) && typeof t == 'number' && t !== 0
      ? t + 'px'
      : t;
  };
function ie(e, r, t) {
  if (t == null) return '';
  if (t.__emotion_styles !== void 0) return t;
  switch (k(t)) {
    case 'boolean':
      return '';
    case 'object': {
      if (t.anim === 1)
        return (D = { name: t.name, styles: t.styles, next: D }), t.name;
      if (t.styles !== void 0) {
        var n = t.next;
        if (n !== void 0)
          for (; n !== void 0; )
            (D = { name: n.name, styles: n.styles, next: D }), (n = n.next);
        var a = t.styles + ';';
        return a;
      }
      return pn(e, r, t);
    }
    case 'function': {
      if (e !== void 0) {
        var i = D,
          o = t(e);
        return (D = i), ie(e, r, o);
      }
      break;
    }
  }
  if (r == null) return t;
  var s = r[t];
  return s !== void 0 ? s : t;
}
function pn(e, r, t) {
  var n = '';
  if (Array.isArray(t))
    for (var a = 0; a < t.length; a++) n += ie(e, r, t[a]) + ';';
  else
    for (var i in t) {
      var o = t[i];
      if (k(o) !== 'object')
        r != null && r[o] !== void 0
          ? (n += i + '{' + r[o] + '}')
          : kr(o) && (n += He(i) + ':' + Fr(i, o) + ';');
      else if (
        Array.isArray(o) &&
        typeof o[0] == 'string' &&
        (r == null || r[o[0]] === void 0)
      )
        for (var s = 0; s < o.length; s++)
          kr(o[s]) && (n += He(i) + ':' + Fr(i, o[s]) + ';');
      else {
        var f = ie(e, r, o);
        switch (i) {
          case 'animation':
          case 'animationName': {
            n += He(i) + ':' + f + ';';
            break;
          }
          default:
            n += i + '{' + f + '}';
        }
      }
    }
  return n;
}
var Ir = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  D,
  gn = function (r, t, n) {
    if (
      r.length === 1 &&
      k(r[0]) === 'object' &&
      r[0] !== null &&
      r[0].styles !== void 0
    )
      return r[0];
    var a = !0,
      i = '';
    D = void 0;
    var o = r[0];
    o == null || o.raw === void 0
      ? ((a = !1), (i += ie(n, t, o)))
      : (i += o[0]);
    for (var s = 1; s < r.length; s++) (i += ie(n, t, r[s])), a && (i += o[s]);
    Ir.lastIndex = 0;
    for (var f = '', c; (c = Ir.exec(i)) !== null; ) f += '-' + c[1];
    var l = Zr(i) + f;
    return { name: l, styles: i, next: D };
  },
  hn = bt,
  mn = function (r) {
    return r !== 'theme';
  },
  Lr = function (r) {
    return typeof r == 'string' && r.charCodeAt(0) > 96 ? hn : mn;
  },
  Br = function (r, t, n) {
    var a;
    if (t) {
      var i = t.shouldForwardProp;
      a =
        r.__emotion_forwardProp && i
          ? function (o) {
              return r.__emotion_forwardProp(o) && i(o);
            }
          : i;
    }
    return typeof a != 'function' && n && (a = r.__emotion_forwardProp), a;
  },
  bn = typeof document < 'u',
  yn = me['useInsertionEffect']
    ? me['useInsertionEffect']
    : function (r) {
        r();
      };
function vn(e) {
  if (!bn) return e();
  yn(e);
}
var On = typeof document < 'u',
  _n = function (r) {
    var t = r.cache,
      n = r.serialized,
      a = r.isStringTag;
    tt(t, n, a);
    var i = vn(function () {
      return un(t, n, a);
    });
    if (!On && i !== void 0) {
      for (var o, s = n.name, f = n.next; f !== void 0; )
        (s += ' ' + f.name), (f = f.next);
      return R.createElement(
        'style',
        ((o = {}),
        (o['data-emotion'] = t.key + ' ' + s),
        (o.dangerouslySetInnerHTML = { __html: i }),
        (o.nonce = t.sheet.nonce),
        o),
      );
    }
    return null;
  },
  En = function e(r, t) {
    var n = r.__emotion_real === r,
      a = (n && r.__emotion_base) || r,
      i,
      o;
    t !== void 0 && ((i = t.label), (o = t.target));
    var s = Br(r, t, n),
      f = s || Lr(a),
      c = !f('as');
    return function () {
      var l = arguments,
        u =
          n && r.__emotion_styles !== void 0 ? r.__emotion_styles.slice(0) : [];
      if (
        (i !== void 0 && u.push('label:' + i + ';'),
        l[0] == null || l[0].raw === void 0)
      )
        u.push.apply(u, l);
      else {
        u.push(l[0][0]);
        for (var p = l.length, E = 1; E < p; E++) u.push(l[E], l[0][E]);
      }
      var h = cr(function (m, A, C) {
        var T = (c && m.as) || a,
          w = '',
          x = [],
          b = m;
        if (m.theme == null) {
          b = {};
          for (var v in m) b[v] = m[v];
          b.theme = R.useContext(ae);
        }
        typeof m.className == 'string'
          ? (w = cn(A.registered, x, m.className))
          : m.className != null && (w = m.className + ' ');
        var g = gn(u.concat(x), A.registered, b);
        (w += A.key + '-' + g.name), o !== void 0 && (w += ' ' + o);
        var V = c && s === void 0 ? Lr(T) : f,
          z = {};
        for (var U in m) (c && U === 'as') || (V(U) && (z[U] = m[U]));
        return (
          (z.className = w),
          (z.ref = C),
          R.createElement(
            R.Fragment,
            null,
            R.createElement(_n, {
              cache: A,
              serialized: g,
              isStringTag: typeof T == 'string',
            }),
            R.createElement(T, z),
          )
        );
      });
      return (
        (h.displayName =
          i !== void 0
            ? i
            : 'Styled(' +
              (typeof a == 'string'
                ? a
                : a.displayName || a.name || 'Component') +
              ')'),
        (h.defaultProps = r.defaultProps),
        (h.__emotion_real = h),
        (h.__emotion_base = a),
        (h.__emotion_styles = u),
        (h.__emotion_forwardProp = s),
        Object.defineProperty(h, 'toString', {
          value: function () {
            return '.' + o;
          },
        }),
        (h.withComponent = function (m, A) {
          return e(m, be({}, t, A, { shouldForwardProp: Br(h, A, !0) })).apply(
            void 0,
            u,
          );
        }),
        h
      );
    };
  },
  Cn = [
    'a',
    'abbr',
    'address',
    'area',
    'article',
    'aside',
    'audio',
    'b',
    'base',
    'bdi',
    'bdo',
    'big',
    'blockquote',
    'body',
    'br',
    'button',
    'canvas',
    'caption',
    'cite',
    'code',
    'col',
    'colgroup',
    'data',
    'datalist',
    'dd',
    'del',
    'details',
    'dfn',
    'dialog',
    'div',
    'dl',
    'dt',
    'em',
    'embed',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hgroup',
    'hr',
    'html',
    'i',
    'iframe',
    'img',
    'input',
    'ins',
    'kbd',
    'keygen',
    'label',
    'legend',
    'li',
    'link',
    'main',
    'map',
    'mark',
    'marquee',
    'menu',
    'menuitem',
    'meta',
    'meter',
    'nav',
    'noscript',
    'object',
    'ol',
    'optgroup',
    'option',
    'output',
    'p',
    'param',
    'picture',
    'pre',
    'progress',
    'q',
    'rp',
    'rt',
    'ruby',
    's',
    'samp',
    'script',
    'section',
    'select',
    'small',
    'source',
    'span',
    'strong',
    'style',
    'sub',
    'summary',
    'sup',
    'table',
    'tbody',
    'td',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'title',
    'tr',
    'track',
    'u',
    'ul',
    'var',
    'video',
    'wbr',
    'circle',
    'clipPath',
    'defs',
    'ellipse',
    'foreignObject',
    'g',
    'image',
    'line',
    'linearGradient',
    'mask',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialGradient',
    'rect',
    'stop',
    'svg',
    'text',
    'tspan',
  ],
  Ke = En.bind();
Cn.forEach(function (e) {
  Ke[e] = Ke(e);
});
function Z() {
  return (
    (Z =
      Object.assign ||
      function (e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = arguments[r];
          for (var n in t)
            Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        }
        return e;
      }),
    Z.apply(this, arguments)
  );
}
function Tn(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function oe(e, r) {
  return (
    (oe =
      Object.setPrototypeOf ||
      function (n, a) {
        return (n.__proto__ = a), n;
      }),
    oe(e, r)
  );
}
function wn(e, r) {
  (e.prototype = Object.create(r.prototype)),
    (e.prototype.constructor = e),
    oe(e, r);
}
function Qe(e) {
  return (
    (Qe = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    Qe(e)
  );
}
function xn(e) {
  return Function.toString.call(e).indexOf('[native code]') !== -1;
}
function Sn() {
  if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == 'function') return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {}),
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function he(e, r, t) {
  return (
    Sn()
      ? (he = Reflect.construct)
      : (he = function (a, i, o) {
          var s = [null];
          s.push.apply(s, i);
          var f = Function.bind.apply(a, s),
            c = new f();
          return o && oe(c, o.prototype), c;
        }),
    he.apply(null, arguments)
  );
}
function er(e) {
  var r = typeof Map == 'function' ? new Map() : void 0;
  return (
    (er = function (n) {
      if (n === null || !xn(n)) return n;
      if (typeof n != 'function')
        throw new TypeError(
          'Super expression must either be null or a function',
        );
      if (typeof r < 'u') {
        if (r.has(n)) return r.get(n);
        r.set(n, a);
      }
      function a() {
        return he(n, arguments, Qe(this).constructor);
      }
      return (
        (a.prototype = Object.create(n.prototype, {
          constructor: {
            value: a,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
        oe(a, n)
      );
    }),
    er(e)
  );
}
var j = (function (e) {
  wn(r, e);
  function r(t) {
    var n;
    return (
      (n =
        e.call(
          this,
          'An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#' +
            t +
            ' for more information.',
        ) || this),
      Tn(n)
    );
  }
  return r;
})(er(Error));
function Ue(e) {
  return Math.round(e * 255);
}
function An(e, r, t) {
  return Ue(e) + ',' + Ue(r) + ',' + Ue(t);
}
function se(e, r, t, n) {
  if ((n === void 0 && (n = An), r === 0)) return n(t, t, t);
  var a = (((e % 360) + 360) % 360) / 60,
    i = (1 - Math.abs(2 * t - 1)) * r,
    o = i * (1 - Math.abs((a % 2) - 1)),
    s = 0,
    f = 0,
    c = 0;
  a >= 0 && a < 1
    ? ((s = i), (f = o))
    : a >= 1 && a < 2
    ? ((s = o), (f = i))
    : a >= 2 && a < 3
    ? ((f = i), (c = o))
    : a >= 3 && a < 4
    ? ((f = o), (c = i))
    : a >= 4 && a < 5
    ? ((s = o), (c = i))
    : a >= 5 && a < 6 && ((s = i), (c = o));
  var l = t - i / 2,
    u = s + l,
    p = f + l,
    E = c + l;
  return n(u, p, E);
}
var Mr = {
  aliceblue: 'f0f8ff',
  antiquewhite: 'faebd7',
  aqua: '00ffff',
  aquamarine: '7fffd4',
  azure: 'f0ffff',
  beige: 'f5f5dc',
  bisque: 'ffe4c4',
  black: '000',
  blanchedalmond: 'ffebcd',
  blue: '0000ff',
  blueviolet: '8a2be2',
  brown: 'a52a2a',
  burlywood: 'deb887',
  cadetblue: '5f9ea0',
  chartreuse: '7fff00',
  chocolate: 'd2691e',
  coral: 'ff7f50',
  cornflowerblue: '6495ed',
  cornsilk: 'fff8dc',
  crimson: 'dc143c',
  cyan: '00ffff',
  darkblue: '00008b',
  darkcyan: '008b8b',
  darkgoldenrod: 'b8860b',
  darkgray: 'a9a9a9',
  darkgreen: '006400',
  darkgrey: 'a9a9a9',
  darkkhaki: 'bdb76b',
  darkmagenta: '8b008b',
  darkolivegreen: '556b2f',
  darkorange: 'ff8c00',
  darkorchid: '9932cc',
  darkred: '8b0000',
  darksalmon: 'e9967a',
  darkseagreen: '8fbc8f',
  darkslateblue: '483d8b',
  darkslategray: '2f4f4f',
  darkslategrey: '2f4f4f',
  darkturquoise: '00ced1',
  darkviolet: '9400d3',
  deeppink: 'ff1493',
  deepskyblue: '00bfff',
  dimgray: '696969',
  dimgrey: '696969',
  dodgerblue: '1e90ff',
  firebrick: 'b22222',
  floralwhite: 'fffaf0',
  forestgreen: '228b22',
  fuchsia: 'ff00ff',
  gainsboro: 'dcdcdc',
  ghostwhite: 'f8f8ff',
  gold: 'ffd700',
  goldenrod: 'daa520',
  gray: '808080',
  green: '008000',
  greenyellow: 'adff2f',
  grey: '808080',
  honeydew: 'f0fff0',
  hotpink: 'ff69b4',
  indianred: 'cd5c5c',
  indigo: '4b0082',
  ivory: 'fffff0',
  khaki: 'f0e68c',
  lavender: 'e6e6fa',
  lavenderblush: 'fff0f5',
  lawngreen: '7cfc00',
  lemonchiffon: 'fffacd',
  lightblue: 'add8e6',
  lightcoral: 'f08080',
  lightcyan: 'e0ffff',
  lightgoldenrodyellow: 'fafad2',
  lightgray: 'd3d3d3',
  lightgreen: '90ee90',
  lightgrey: 'd3d3d3',
  lightpink: 'ffb6c1',
  lightsalmon: 'ffa07a',
  lightseagreen: '20b2aa',
  lightskyblue: '87cefa',
  lightslategray: '789',
  lightslategrey: '789',
  lightsteelblue: 'b0c4de',
  lightyellow: 'ffffe0',
  lime: '0f0',
  limegreen: '32cd32',
  linen: 'faf0e6',
  magenta: 'f0f',
  maroon: '800000',
  mediumaquamarine: '66cdaa',
  mediumblue: '0000cd',
  mediumorchid: 'ba55d3',
  mediumpurple: '9370db',
  mediumseagreen: '3cb371',
  mediumslateblue: '7b68ee',
  mediumspringgreen: '00fa9a',
  mediumturquoise: '48d1cc',
  mediumvioletred: 'c71585',
  midnightblue: '191970',
  mintcream: 'f5fffa',
  mistyrose: 'ffe4e1',
  moccasin: 'ffe4b5',
  navajowhite: 'ffdead',
  navy: '000080',
  oldlace: 'fdf5e6',
  olive: '808000',
  olivedrab: '6b8e23',
  orange: 'ffa500',
  orangered: 'ff4500',
  orchid: 'da70d6',
  palegoldenrod: 'eee8aa',
  palegreen: '98fb98',
  paleturquoise: 'afeeee',
  palevioletred: 'db7093',
  papayawhip: 'ffefd5',
  peachpuff: 'ffdab9',
  peru: 'cd853f',
  pink: 'ffc0cb',
  plum: 'dda0dd',
  powderblue: 'b0e0e6',
  purple: '800080',
  rebeccapurple: '639',
  red: 'f00',
  rosybrown: 'bc8f8f',
  royalblue: '4169e1',
  saddlebrown: '8b4513',
  salmon: 'fa8072',
  sandybrown: 'f4a460',
  seagreen: '2e8b57',
  seashell: 'fff5ee',
  sienna: 'a0522d',
  silver: 'c0c0c0',
  skyblue: '87ceeb',
  slateblue: '6a5acd',
  slategray: '708090',
  slategrey: '708090',
  snow: 'fffafa',
  springgreen: '00ff7f',
  steelblue: '4682b4',
  tan: 'd2b48c',
  teal: '008080',
  thistle: 'd8bfd8',
  tomato: 'ff6347',
  turquoise: '40e0d0',
  violet: 'ee82ee',
  wheat: 'f5deb3',
  white: 'fff',
  whitesmoke: 'f5f5f5',
  yellow: 'ff0',
  yellowgreen: '9acd32',
};
function Rn(e) {
  if (typeof e != 'string') return e;
  var r = e.toLowerCase();
  return Mr[r] ? '#' + Mr[r] : e;
}
var kn = /^#[a-fA-F0-9]{6}$/,
  Fn = /^#[a-fA-F0-9]{8}$/,
  In = /^#[a-fA-F0-9]{3}$/,
  Ln = /^#[a-fA-F0-9]{4}$/,
  Ge = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,
  Bn =
    /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,
  Mn =
    /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,
  Pn =
    /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function Ne(e) {
  if (typeof e != 'string') throw new j(3);
  var r = Rn(e);
  if (r.match(kn))
    return {
      red: parseInt('' + r[1] + r[2], 16),
      green: parseInt('' + r[3] + r[4], 16),
      blue: parseInt('' + r[5] + r[6], 16),
    };
  if (r.match(Fn)) {
    var t = parseFloat((parseInt('' + r[7] + r[8], 16) / 255).toFixed(2));
    return {
      red: parseInt('' + r[1] + r[2], 16),
      green: parseInt('' + r[3] + r[4], 16),
      blue: parseInt('' + r[5] + r[6], 16),
      alpha: t,
    };
  }
  if (r.match(In))
    return {
      red: parseInt('' + r[1] + r[1], 16),
      green: parseInt('' + r[2] + r[2], 16),
      blue: parseInt('' + r[3] + r[3], 16),
    };
  if (r.match(Ln)) {
    var n = parseFloat((parseInt('' + r[4] + r[4], 16) / 255).toFixed(2));
    return {
      red: parseInt('' + r[1] + r[1], 16),
      green: parseInt('' + r[2] + r[2], 16),
      blue: parseInt('' + r[3] + r[3], 16),
      alpha: n,
    };
  }
  var a = Ge.exec(r);
  if (a)
    return {
      red: parseInt('' + a[1], 10),
      green: parseInt('' + a[2], 10),
      blue: parseInt('' + a[3], 10),
    };
  var i = Bn.exec(r.substring(0, 50));
  if (i)
    return {
      red: parseInt('' + i[1], 10),
      green: parseInt('' + i[2], 10),
      blue: parseInt('' + i[3], 10),
      alpha:
        parseFloat('' + i[4]) > 1
          ? parseFloat('' + i[4]) / 100
          : parseFloat('' + i[4]),
    };
  var o = Mn.exec(r);
  if (o) {
    var s = parseInt('' + o[1], 10),
      f = parseInt('' + o[2], 10) / 100,
      c = parseInt('' + o[3], 10) / 100,
      l = 'rgb(' + se(s, f, c) + ')',
      u = Ge.exec(l);
    if (!u) throw new j(4, r, l);
    return {
      red: parseInt('' + u[1], 10),
      green: parseInt('' + u[2], 10),
      blue: parseInt('' + u[3], 10),
    };
  }
  var p = Pn.exec(r.substring(0, 50));
  if (p) {
    var E = parseInt('' + p[1], 10),
      h = parseInt('' + p[2], 10) / 100,
      m = parseInt('' + p[3], 10) / 100,
      A = 'rgb(' + se(E, h, m) + ')',
      C = Ge.exec(A);
    if (!C) throw new j(4, r, A);
    return {
      red: parseInt('' + C[1], 10),
      green: parseInt('' + C[2], 10),
      blue: parseInt('' + C[3], 10),
      alpha:
        parseFloat('' + p[4]) > 1
          ? parseFloat('' + p[4]) / 100
          : parseFloat('' + p[4]),
    };
  }
  throw new j(5);
}
function Nn(e) {
  var r = e.red / 255,
    t = e.green / 255,
    n = e.blue / 255,
    a = Math.max(r, t, n),
    i = Math.min(r, t, n),
    o = (a + i) / 2;
  if (a === i)
    return e.alpha !== void 0
      ? { hue: 0, saturation: 0, lightness: o, alpha: e.alpha }
      : { hue: 0, saturation: 0, lightness: o };
  var s,
    f = a - i,
    c = o > 0.5 ? f / (2 - a - i) : f / (a + i);
  switch (a) {
    case r:
      s = (t - n) / f + (t < n ? 6 : 0);
      break;
    case t:
      s = (n - r) / f + 2;
      break;
    default:
      s = (r - t) / f + 4;
      break;
  }
  return (
    (s *= 60),
    e.alpha !== void 0
      ? { hue: s, saturation: c, lightness: o, alpha: e.alpha }
      : { hue: s, saturation: c, lightness: o }
  );
}
function at(e) {
  return Nn(Ne(e));
}
var $n = function (r) {
    return r.length === 7 && r[1] === r[2] && r[3] === r[4] && r[5] === r[6]
      ? '#' + r[1] + r[3] + r[5]
      : r;
  },
  rr = $n;
function W(e) {
  var r = e.toString(16);
  return r.length === 1 ? '0' + r : r;
}
function ze(e) {
  return W(Math.round(e * 255));
}
function Dn(e, r, t) {
  return rr('#' + ze(e) + ze(r) + ze(t));
}
function Oe(e, r, t) {
  return se(e, r, t, Dn);
}
function jn(e, r, t) {
  if (typeof e == 'number' && typeof r == 'number' && typeof t == 'number')
    return Oe(e, r, t);
  if (k(e) === 'object' && r === void 0 && t === void 0)
    return Oe(e.hue, e.saturation, e.lightness);
  throw new j(1);
}
function Hn(e, r, t, n) {
  if (
    typeof e == 'number' &&
    typeof r == 'number' &&
    typeof t == 'number' &&
    typeof n == 'number'
  )
    return n >= 1 ? Oe(e, r, t) : 'rgba(' + se(e, r, t) + ',' + n + ')';
  if (k(e) === 'object' && r === void 0 && t === void 0 && n === void 0)
    return e.alpha >= 1
      ? Oe(e.hue, e.saturation, e.lightness)
      : 'rgba(' + se(e.hue, e.saturation, e.lightness) + ',' + e.alpha + ')';
  throw new j(2);
}
function tr(e, r, t) {
  if (typeof e == 'number' && typeof r == 'number' && typeof t == 'number')
    return rr('#' + W(e) + W(r) + W(t));
  if (k(e) === 'object' && r === void 0 && t === void 0)
    return rr('#' + W(e.red) + W(e.green) + W(e.blue));
  throw new j(6);
}
function fe(e, r, t, n) {
  if (typeof e == 'string' && typeof r == 'number') {
    var a = Ne(e);
    return 'rgba(' + a.red + ',' + a.green + ',' + a.blue + ',' + r + ')';
  } else {
    if (
      typeof e == 'number' &&
      typeof r == 'number' &&
      typeof t == 'number' &&
      typeof n == 'number'
    )
      return n >= 1
        ? tr(e, r, t)
        : 'rgba(' + e + ',' + r + ',' + t + ',' + n + ')';
    if (k(e) === 'object' && r === void 0 && t === void 0 && n === void 0)
      return e.alpha >= 1
        ? tr(e.red, e.green, e.blue)
        : 'rgba(' + e.red + ',' + e.green + ',' + e.blue + ',' + e.alpha + ')';
  }
  throw new j(7);
}
var Un = function (r) {
    return (
      typeof r.red == 'number' &&
      typeof r.green == 'number' &&
      typeof r.blue == 'number' &&
      (typeof r.alpha != 'number' || typeof r.alpha > 'u')
    );
  },
  Gn = function (r) {
    return (
      typeof r.red == 'number' &&
      typeof r.green == 'number' &&
      typeof r.blue == 'number' &&
      typeof r.alpha == 'number'
    );
  },
  zn = function (r) {
    return (
      typeof r.hue == 'number' &&
      typeof r.saturation == 'number' &&
      typeof r.lightness == 'number' &&
      (typeof r.alpha != 'number' || typeof r.alpha > 'u')
    );
  },
  Wn = function (r) {
    return (
      typeof r.hue == 'number' &&
      typeof r.saturation == 'number' &&
      typeof r.lightness == 'number' &&
      typeof r.alpha == 'number'
    );
  };
function it(e) {
  if (k(e) !== 'object') throw new j(8);
  if (Gn(e)) return fe(e);
  if (Un(e)) return tr(e);
  if (Wn(e)) return Hn(e);
  if (zn(e)) return jn(e);
  throw new j(8);
}
function ot(e, r, t) {
  return function () {
    var a = t.concat(Array.prototype.slice.call(arguments));
    return a.length >= r ? e.apply(this, a) : ot(e, r, a);
  };
}
function $e(e) {
  return ot(e, e.length, []);
}
function De(e, r, t) {
  return Math.max(e, Math.min(r, t));
}
function Jn(e, r) {
  if (r === 'transparent') return r;
  var t = at(r);
  return it(Z({}, t, { lightness: De(0, 1, t.lightness - parseFloat(e)) }));
}
var Yn = $e(Jn),
  qn = Yn;
function Vn(e, r) {
  if (r === 'transparent') return r;
  var t = at(r);
  return it(Z({}, t, { lightness: De(0, 1, t.lightness + parseFloat(e)) }));
}
var Xn = $e(Vn),
  Zn = Xn;
function Kn(e, r) {
  if (r === 'transparent') return r;
  var t = Ne(r),
    n = typeof t.alpha == 'number' ? t.alpha : 1,
    a = Z({}, t, { alpha: De(0, 1, (n * 100 + parseFloat(e) * 100) / 100) });
  return fe(a);
}
var Qn = $e(Kn),
  ea = Qn;
function ra(e, r) {
  if (r === 'transparent') return r;
  var t = Ne(r),
    n = typeof t.alpha == 'number' ? t.alpha : 1,
    a = Z({}, t, {
      alpha: De(0, 1, +(n * 100 - parseFloat(e) * 100).toFixed(2) / 100),
    });
  return fe(a);
}
var ta = $e(ra),
  na = ta,
  d = {
    primary: '#FF4785',
    secondary: '#1EA7FD',
    tertiary: '#FAFBFC',
    ancillary: '#22a699',
    orange: '#FC521F',
    gold: '#FFAE00',
    green: '#66BF3C',
    seafoam: '#37D5D3',
    purple: '#6F2CAC',
    ultraviolet: '#2A0481',
    lightest: '#FFFFFF',
    lighter: '#F8F8F8',
    light: '#F3F3F3',
    mediumlight: '#EEEEEE',
    medium: '#DDDDDD',
    mediumdark: '#999999',
    dark: '#666666',
    darker: '#444444',
    darkest: '#333333',
    border: 'rgba(0,0,0,.1)',
    positive: '#66BF3C',
    negative: '#FF4400',
    warning: '#E69D00',
    critical: '#FFFFFF',
    defaultText: '#333333',
    inverseText: '#FFFFFF',
  },
  J = {
    app: '#F6F9FC',
    bar: '#FFFFFF',
    content: d.lightest,
    gridCellSize: 10,
    hoverable: na(0.93, d.secondary),
    positive: '#E1FFD4',
    negative: '#FEDED2',
    warning: '#FFF5CF',
    critical: '#FF4400',
  },
  G = {
    fonts: {
      base: [
        '"Nunito Sans"',
        '-apple-system',
        '".SFNSText-Regular"',
        '"San Francisco"',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        '"Helvetica Neue"',
        'Helvetica',
        'Arial',
        'sans-serif',
      ].join(', '),
      mono: [
        'ui-monospace',
        'Menlo',
        'Monaco',
        '"Roboto Mono"',
        '"Oxygen Mono"',
        '"Ubuntu Monospace"',
        '"Source Code Pro"',
        '"Droid Sans Mono"',
        '"Courier New"',
        'monospace',
      ].join(', '),
    },
    weight: { regular: 400, bold: 700, black: 900 },
    size: {
      s1: 12,
      s2: 14,
      s3: 16,
      m1: 20,
      m2: 24,
      m3: 28,
      l1: 32,
      l2: 40,
      l3: 48,
      code: 90,
    },
  },
  aa = Nr(1)(function (e) {
    var r = e.typography;
    return {
      body: {
        fontFamily: r.fonts.base,
        fontSize: r.size.s3,
        margin: 0,
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
        WebkitOverflowScrolling: 'touch',
      },
      '*': { boxSizing: 'border-box' },
      'h1, h2, h3, h4, h5, h6': {
        fontWeight: r.weight.regular,
        margin: 0,
        padding: 0,
      },
      'button, input, textarea, select': {
        fontFamily: 'inherit',
        fontSize: 'inherit',
        boxSizing: 'border-box',
      },
      sub: { fontSize: '0.8em', bottom: '-0.2em' },
      sup: { fontSize: '0.8em', top: '-0.2em' },
      'b, strong': { fontWeight: r.weight.bold },
      hr: {
        border: 'none',
        borderTop: '1px solid silver',
        clear: 'both',
        marginBottom: '1.25rem',
      },
      code: {
        fontFamily: r.fonts.mono,
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        display: 'inline-block',
        paddingLeft: 2,
        paddingRight: 2,
        verticalAlign: 'baseline',
        color: 'inherit',
      },
      pre: {
        fontFamily: r.fonts.mono,
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        lineHeight: '18px',
        padding: '11px 1rem',
        whiteSpace: 'pre-wrap',
        color: 'inherit',
        borderRadius: 3,
        margin: '1rem 0',
      },
    };
  });
Nr(1)(function (e) {
  var r = e.color,
    t = e.background,
    n = e.typography,
    a = aa({ typography: n });
  return Object.assign(Object.assign({}, a), {
    body: Object.assign(Object.assign({}, a.body), {
      color: r.defaultText,
      background: t.app,
      overflow: 'hidden',
    }),
    hr: Object.assign(Object.assign({}, a.hr), {
      borderTop: '1px solid '.concat(r.border),
    }),
  });
});
var _e = {
    base: 'light',
    colorPrimary: '#FF4785',
    colorSecondary: '#1EA7FD',
    appBg: J.app,
    appContentBg: d.lightest,
    appBorderColor: d.border,
    appBorderRadius: 4,
    fontBase: G.fonts.base,
    fontCode: G.fonts.mono,
    textColor: d.darkest,
    textInverseColor: d.lightest,
    textMutedColor: d.dark,
    barTextColor: d.mediumdark,
    barSelectedColor: d.secondary,
    barBg: d.lightest,
    inputBg: d.lightest,
    inputBorder: d.border,
    inputTextColor: d.darkest,
    inputBorderRadius: 4,
  },
  ia = {
    base: 'dark',
    colorPrimary: '#FF4785',
    colorSecondary: '#1EA7FD',
    appBg: '#2f2f2f',
    appContentBg: d.darkest,
    appBorderColor: 'rgba(255,255,255,.1)',
    appBorderRadius: 4,
    fontBase: G.fonts.base,
    fontCode: G.fonts.mono,
    textColor: d.lightest,
    textInverseColor: d.darkest,
    textMutedColor: d.mediumdark,
    barTextColor: '#999999',
    barSelectedColor: d.secondary,
    barBg: d.darkest,
    inputBg: '#3f3f3f',
    inputBorder: 'rgba(0,0,0,.3)',
    inputTextColor: d.lightest,
    inputBorderRadius: 4,
  },
  ee;
typeof window < 'u'
  ? (ee = window)
  : typeof wr < 'u'
  ? (ee = wr)
  : typeof self < 'u'
  ? (ee = self)
  : (ee = {});
var oa = ee,
  We = oa.window,
  sa = function (r) {
    return { color: r };
  },
  fa = function (r) {
    return typeof r != 'string'
      ? ($r.warn(
          'Color passed to theme object should be a string. Instead ' +
            ''.concat(r, '(').concat(k(r), ') was passed.'),
        ),
        !1)
      : !0;
  },
  ca = function (r) {
    return !/(gradient|var|calc)/.test(r);
  },
  ua = function (r, t) {
    return r === 'darken'
      ? fe(''.concat(qn(1, t)), 0.95)
      : r === 'lighten'
      ? fe(''.concat(Zn(1, t)), 0.95)
      : t;
  },
  st = function (r) {
    return function (t) {
      if (!fa(t) || !ca(t)) return t;
      try {
        return ua(r, t);
      } catch {
        return t;
      }
    };
  },
  Ba = st('lighten'),
  Ma = st('darken'),
  ft = function () {
    if (!We || !We.matchMedia) return 'light';
    var r = We.matchMedia('(prefers-color-scheme: dark)').matches;
    return r ? 'dark' : 'light';
  },
  la = { light: _e, dark: ia, normal: _e };
ft();
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ function da(
  e,
  r,
) {
  var t = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) &&
      r.indexOf(n) < 0 &&
      (t[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      r.indexOf(n[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[a]) &&
        (t[n[a]] = e[n[a]]);
  return t;
}
var pa = { rubber: 'cubic-bezier(0.175, 0.885, 0.335, 1.05)' },
  ga = Pe(
    lr ||
      (lr = q([
        `
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`,
      ])),
  ),
  ct = Pe(
    dr ||
      (dr = q([
        `
  0%, 100% { opacity: 1; }
  50% { opacity: .4; }
`,
      ])),
  ),
  ha = Pe(
    pr ||
      (pr = q([
        `
  0% { transform: translateY(1px); }
  25% { transform: translateY(0px); }
  50% { transform: translateY(-3px); }
  100% { transform: translateY(1px); }
`,
      ])),
  ),
  ma = Pe(
    gr ||
      (gr = q([
        `
  0%, 100% { transform:translate3d(0,0,0); }
  12.5%, 62.5% { transform:translate3d(-4px,0,0); }
  37.5%, 87.5% {  transform: translate3d(4px,0,0);  }
`,
      ])),
  ),
  ba = ur(
    hr ||
      (hr = q([
        `
  animation: `,
        ` 1.5s ease-in-out infinite;
  color: transparent;
  cursor: progress;
`,
      ])),
    ct,
  ),
  ya = ur(
    mr ||
      (mr = q([
        `
  transition: all 150ms ease-out;
  transform: translate3d(0, 0, 0);

  &:hover {
    transform: translate3d(0, -2px, 0);
  }

  &:active {
    transform: translate3d(0, 0, 0);
  }
`,
      ])),
  ),
  va = {
    rotate360: ga,
    glow: ct,
    float: ha,
    jiggle: ma,
    inlineGlow: ba,
    hoverable: ya,
  },
  Oa = {
    BASE_FONT_FAMILY: 'Menlo, monospace',
    BASE_FONT_SIZE: '11px',
    BASE_LINE_HEIGHT: 1.2,
    BASE_BACKGROUND_COLOR: 'rgb(36, 36, 36)',
    BASE_COLOR: 'rgb(213, 213, 213)',
    OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: 10,
    OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: 5,
    OBJECT_NAME_COLOR: 'rgb(227, 110, 236)',
    OBJECT_VALUE_NULL_COLOR: 'rgb(127, 127, 127)',
    OBJECT_VALUE_UNDEFINED_COLOR: 'rgb(127, 127, 127)',
    OBJECT_VALUE_REGEXP_COLOR: 'rgb(233, 63, 59)',
    OBJECT_VALUE_STRING_COLOR: 'rgb(233, 63, 59)',
    OBJECT_VALUE_SYMBOL_COLOR: 'rgb(233, 63, 59)',
    OBJECT_VALUE_NUMBER_COLOR: 'hsl(252, 100%, 75%)',
    OBJECT_VALUE_BOOLEAN_COLOR: 'hsl(252, 100%, 75%)',
    OBJECT_VALUE_FUNCTION_PREFIX_COLOR: 'rgb(85, 106, 242)',
    HTML_TAG_COLOR: 'rgb(93, 176, 215)',
    HTML_TAGNAME_COLOR: 'rgb(93, 176, 215)',
    HTML_TAGNAME_TEXT_TRANSFORM: 'lowercase',
    HTML_ATTRIBUTE_NAME_COLOR: 'rgb(155, 187, 220)',
    HTML_ATTRIBUTE_VALUE_COLOR: 'rgb(242, 151, 102)',
    HTML_COMMENT_COLOR: 'rgb(137, 137, 137)',
    HTML_DOCTYPE_COLOR: 'rgb(192, 192, 192)',
    ARROW_COLOR: 'rgb(145, 145, 145)',
    ARROW_MARGIN_RIGHT: 3,
    ARROW_FONT_SIZE: 12,
    ARROW_ANIMATION_DURATION: '0',
    TREENODE_FONT_FAMILY: 'Menlo, monospace',
    TREENODE_FONT_SIZE: '11px',
    TREENODE_LINE_HEIGHT: 1.2,
    TREENODE_PADDING_LEFT: 12,
    TABLE_BORDER_COLOR: 'rgb(85, 85, 85)',
    TABLE_TH_BACKGROUND_COLOR: 'rgb(44, 44, 44)',
    TABLE_TH_HOVER_COLOR: 'rgb(48, 48, 48)',
    TABLE_SORT_ICON_COLOR: 'black',
    TABLE_DATA_BACKGROUND_IMAGE:
      'linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 50%, rgba(51, 139, 255, 0.0980392) 50%, rgba(51, 139, 255, 0.0980392))',
    TABLE_DATA_BACKGROUND_SIZE: '128px 32px',
  },
  _a = {
    BASE_FONT_FAMILY: 'Menlo, monospace',
    BASE_FONT_SIZE: '11px',
    BASE_LINE_HEIGHT: 1.2,
    BASE_BACKGROUND_COLOR: 'white',
    BASE_COLOR: 'black',
    OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: 10,
    OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: 5,
    OBJECT_NAME_COLOR: 'rgb(136, 19, 145)',
    OBJECT_VALUE_NULL_COLOR: 'rgb(128, 128, 128)',
    OBJECT_VALUE_UNDEFINED_COLOR: 'rgb(128, 128, 128)',
    OBJECT_VALUE_REGEXP_COLOR: 'rgb(196, 26, 22)',
    OBJECT_VALUE_STRING_COLOR: 'rgb(196, 26, 22)',
    OBJECT_VALUE_SYMBOL_COLOR: 'rgb(196, 26, 22)',
    OBJECT_VALUE_NUMBER_COLOR: 'rgb(28, 0, 207)',
    OBJECT_VALUE_BOOLEAN_COLOR: 'rgb(28, 0, 207)',
    OBJECT_VALUE_FUNCTION_PREFIX_COLOR: 'rgb(13, 34, 170)',
    HTML_TAG_COLOR: 'rgb(168, 148, 166)',
    HTML_TAGNAME_COLOR: 'rgb(136, 18, 128)',
    HTML_TAGNAME_TEXT_TRANSFORM: 'lowercase',
    HTML_ATTRIBUTE_NAME_COLOR: 'rgb(153, 69, 0)',
    HTML_ATTRIBUTE_VALUE_COLOR: 'rgb(26, 26, 166)',
    HTML_COMMENT_COLOR: 'rgb(35, 110, 37)',
    HTML_DOCTYPE_COLOR: 'rgb(192, 192, 192)',
    ARROW_COLOR: '#6e6e6e',
    ARROW_MARGIN_RIGHT: 3,
    ARROW_FONT_SIZE: 12,
    ARROW_ANIMATION_DURATION: '0',
    TREENODE_FONT_FAMILY: 'Menlo, monospace',
    TREENODE_FONT_SIZE: '11px',
    TREENODE_LINE_HEIGHT: 1.2,
    TREENODE_PADDING_LEFT: 12,
    TABLE_BORDER_COLOR: '#aaa',
    TABLE_TH_BACKGROUND_COLOR: '#eee',
    TABLE_TH_HOVER_COLOR: 'hsla(0, 0%, 90%, 1)',
    TABLE_SORT_ICON_COLOR: '#6e6e6e',
    TABLE_DATA_BACKGROUND_IMAGE:
      'linear-gradient(to bottom, white, white 50%, rgb(234, 243, 255) 50%, rgb(234, 243, 255))',
    TABLE_DATA_BACKGROUND_SIZE: '128px 32px',
  },
  Ea = function (r) {
    return Object.entries(r).reduce(function (t, n) {
      var a = lt(n, 2),
        i = a[0],
        o = a[1];
      return Object.assign(Object.assign({}, t), ut({}, i, sa(o)));
    }, {});
  },
  Ca = function (r) {
    var t = r.colors,
      n = r.mono,
      a = Ea(t);
    return {
      token: {
        fontFamily: n,
        WebkitFontSmoothing: 'antialiased',
        '&.tag': a.red3,
        '&.comment': Object.assign(Object.assign({}, a.green1), {
          fontStyle: 'italic',
        }),
        '&.prolog': Object.assign(Object.assign({}, a.green1), {
          fontStyle: 'italic',
        }),
        '&.doctype': Object.assign(Object.assign({}, a.green1), {
          fontStyle: 'italic',
        }),
        '&.cdata': Object.assign(Object.assign({}, a.green1), {
          fontStyle: 'italic',
        }),
        '&.string': a.red1,
        '&.url': a.cyan1,
        '&.symbol': a.cyan1,
        '&.number': a.cyan1,
        '&.boolean': a.cyan1,
        '&.variable': a.cyan1,
        '&.constant': a.cyan1,
        '&.inserted': a.cyan1,
        '&.atrule': a.blue1,
        '&.keyword': a.blue1,
        '&.attr-value': a.blue1,
        '&.punctuation': a.gray1,
        '&.operator': a.gray1,
        '&.function': a.gray1,
        '&.deleted': a.red2,
        '&.important': { fontWeight: 'bold' },
        '&.bold': { fontWeight: 'bold' },
        '&.italic': { fontStyle: 'italic' },
        '&.class-name': a.cyan2,
        '&.selector': a.red3,
        '&.attr-name': a.red4,
        '&.property': a.red4,
        '&.regex': a.red4,
        '&.entity': a.red4,
        '&.directive.tag .tag': Object.assign(
          { background: '#ffff00' },
          a.gray1,
        ),
      },
      'language-json .token.boolean': a.blue1,
      'language-json .token.number': a.blue1,
      'language-json .token.property': a.cyan2,
      namespace: { opacity: 0.7 },
    };
  },
  Ta = {
    green1: '#008000',
    red1: '#A31515',
    red2: '#9a050f',
    red3: '#800000',
    red4: '#ff0000',
    gray1: '#393A34',
    cyan1: '#36acaa',
    cyan2: '#2B91AF',
    blue1: '#0000ff',
    blue2: '#00009f',
  },
  wa = {
    green1: '#7C7C7C',
    red1: '#92C379',
    red2: '#9a050f',
    red3: '#A8FF60',
    red4: '#96CBFE',
    gray1: '#EDEDED',
    cyan1: '#C6C5FE',
    cyan2: '#FFFFB6',
    blue1: '#B474DD',
    blue2: '#00009f',
  },
  xa = function (r) {
    return {
      primary: r.colorPrimary,
      secondary: r.colorSecondary,
      tertiary: d.tertiary,
      ancillary: d.ancillary,
      orange: d.orange,
      gold: d.gold,
      green: d.green,
      seafoam: d.seafoam,
      purple: d.purple,
      ultraviolet: d.ultraviolet,
      lightest: d.lightest,
      lighter: d.lighter,
      light: d.light,
      mediumlight: d.mediumlight,
      medium: d.medium,
      mediumdark: d.mediumdark,
      dark: d.dark,
      darker: d.darker,
      darkest: d.darkest,
      border: d.border,
      positive: d.positive,
      negative: d.negative,
      warning: d.warning,
      critical: d.critical,
      defaultText: r.textColor || d.darkest,
      inverseText: r.textInverseColor || d.lightest,
    };
  },
  Pr = function () {
    var r =
        arguments.length > 0 && arguments[0] !== void 0
          ? arguments[0]
          : la[ft()],
      t = r.base;
    r.colorPrimary;
    var n = r.colorSecondary,
      a = r.appBg,
      i = r.appContentBg,
      o = r.appBorderColor,
      s = r.appBorderRadius,
      f = r.fontBase,
      c = r.fontCode,
      l = r.textColor;
    r.textInverseColor;
    var u = r.barTextColor,
      p = r.barSelectedColor,
      E = r.barBg,
      h = r.inputBg,
      m = r.inputBorder,
      A = r.inputTextColor,
      C = r.inputBorderRadius,
      T = r.brandTitle,
      w = r.brandUrl,
      x = r.brandImage,
      b = r.brandTarget,
      v = r.gridCellSize,
      g = da(r, [
        'base',
        'colorPrimary',
        'colorSecondary',
        'appBg',
        'appContentBg',
        'appBorderColor',
        'appBorderRadius',
        'fontBase',
        'fontCode',
        'textColor',
        'textInverseColor',
        'barTextColor',
        'barSelectedColor',
        'barBg',
        'inputBg',
        'inputBorder',
        'inputTextColor',
        'inputBorderRadius',
        'brandTitle',
        'brandUrl',
        'brandImage',
        'brandTarget',
        'gridCellSize',
      ]);
    return Object.assign(Object.assign({}, g || {}), {
      base: t,
      color: xa(r),
      background: {
        app: a,
        bar: E,
        content: i,
        gridCellSize: v || J.gridCellSize,
        hoverable: J.hoverable,
        positive: J.positive,
        negative: J.negative,
        warning: J.warning,
        critical: J.critical,
      },
      typography: {
        fonts: { base: f, mono: c },
        weight: G.weight,
        size: G.size,
      },
      animation: va,
      easing: pa,
      input: { border: m, background: h, color: A, borderRadius: C },
      layoutMargin: 10,
      appBorderColor: o,
      appBorderRadius: s,
      barTextColor: u,
      barSelectedColor: p || n,
      barBg: E,
      brand: { title: T, url: w, image: x || (T ? null : void 0), target: b },
      code: Ca({ colors: t === 'light' ? Ta : wa, mono: c }),
      addonActionsTheme: Object.assign(
        Object.assign({}, t === 'light' ? _a : Oa),
        {
          BASE_FONT_FAMILY: c,
          BASE_FONT_SIZE: G.size.s2 - 1,
          BASE_LINE_HEIGHT: '18px',
          BASE_BACKGROUND_COLOR: 'transparent',
          BASE_COLOR: l,
          ARROW_COLOR: ea(0.2, o),
          ARROW_MARGIN_RIGHT: 4,
          ARROW_FONT_SIZE: 8,
          TREENODE_FONT_FAMILY: c,
          TREENODE_FONT_SIZE: G.size.s2 - 1,
          TREENODE_LINE_HEIGHT: '18px',
          TREENODE_PADDING_LEFT: 12,
        },
      ),
    });
  },
  Sa = function (r) {
    return Object.keys(r).length === 0;
  },
  Je = function (r) {
    return r != null && k(r) === 'object';
  },
  Aa = function (r) {
    for (
      var t, n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), i = 1;
      i < n;
      i++
    )
      a[i - 1] = arguments[i];
    return (t = Object.prototype.hasOwnProperty).call.apply(t, [r].concat(a));
  },
  Ra = function e(r, t) {
    if (r === t || !Je(r) || !Je(t)) return {};
    var n = r,
      a = t;
    return Object.keys(n).reduce(function (i, o) {
      if (Aa(a, o)) {
        var s = e(n[o], a[o]);
        return (Je(s) && Sa(s)) || (i[o] = s), i;
      }
      return (i[o] = void 0), i;
    }, {});
  };
function ka(e) {
  for (var r = [], t = 1; t < arguments.length; t++) r[t - 1] = arguments[t];
  var n = Array.from(typeof e == 'string' ? [e] : e);
  n[n.length - 1] = n[n.length - 1].replace(/\r?\n([\t ]*)$/, '');
  var a = n.reduce(function (s, f) {
    var c = f.match(/\n([\t ]+|(?!\s).)/g);
    return c
      ? s.concat(
          c.map(function (l) {
            var u, p;
            return (p =
              (u = l.match(/[\t ]/g)) === null || u === void 0
                ? void 0
                : u.length) !== null && p !== void 0
              ? p
              : 0;
          }),
        )
      : s;
  }, []);
  if (a.length) {
    var i = new RegExp(
      `
[	 ]{` +
        Math.min.apply(Math, a) +
        '}',
      'g',
    );
    n = n.map(function (s) {
      return s.replace(
        i,
        `
`,
      );
    });
  }
  n[0] = n[0].replace(/^\r?\n/, '');
  var o = n[0];
  return (
    r.forEach(function (s, f) {
      var c = o.match(/(?:^|\n)( *)$/),
        l = c ? c[1] : '',
        u = s;
      typeof s == 'string' &&
        s.includes(`
`) &&
        (u = String(s)
          .split(
            `
`,
          )
          .map(function (p, E) {
            return E === 0 ? p : '' + l + p;
          }).join(`
`)),
        (o += u + n[f + 1]);
    }),
    o
  );
}
var Pa = function (r) {
    if (!r) return Pr(_e);
    var t = Ra(_e, r);
    return (
      Object.keys(t).length &&
        $r.warn(
          ka(
            br ||
              (br = q([
                `
          Your theme is missing properties, you should update your theme!

          theme-data missing:
        `,
              ])),
          ),
          t,
        ),
      Pr(r)
    );
  },
  Na = rn,
  $a = fn,
  Da = Ke;
export {
  $a as G,
  La as T,
  Pr as c,
  Ma as d,
  Pa as e,
  bt as i,
  Pe as k,
  Ba as l,
  Da as s,
  la as t,
  Na as u,
};
//# sourceMappingURL=index-e51aae5b.js.map
