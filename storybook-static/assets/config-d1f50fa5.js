import { s as _e } from './string-07c0498b.js';
import {
  i as je,
  a as Pe,
  w as Ie,
  d as Ae,
  o as pe,
} from './index-9fa1e778.js';
import {
  m as ke,
  a as Le,
  c as Me,
  b as qe,
  e as Ue,
  f as Ve,
  C as We,
  P as Ge,
  E as $e,
} from './iframe-5917f10b.js';
import { E as ze } from './index-3121cc12.js';
import { R as Je } from './index-e0023ec7.js';
import { V as He } from './vue.esm-bundler-f95a757f.js';
import { l as Zu, w as Yu } from './index-73814c06.js';
import {
  a as Ye,
  d as Qe,
  r as Ke,
  s as Xe,
} from './decorateStory-f21d1d8c.js';
var Ze = function (e) {
    switch (e.type) {
      case 'function':
        return { name: 'function' };
      case 'object':
        var n = {};
        return (
          e.signature.properties.forEach(function (D) {
            n[D.key] = Ee(D.value);
          }),
          { name: 'object', value: n }
        );
      default:
        throw new Error('Unknown: '.concat(e));
    }
  },
  Ee = function u(e) {
    var n = e.name,
      D = e.raw,
      a = {};
    switch ((typeof D < 'u' && (a.raw = D), e.name)) {
      case 'string':
      case 'number':
      case 'symbol':
      case 'boolean':
        return Object.assign({}, a, { name: n });
      case 'Array':
        return Object.assign({}, a, {
          name: 'array',
          value: e.elements.map(u),
        });
      case 'signature':
        return Object.assign({}, a, Ze(e));
      case 'union':
      case 'intersection':
        return Object.assign({}, a, { name: n, value: e.elements.map(u) });
      default:
        return Object.assign({}, a, { name: 'other', value: n });
    }
  },
  ur = function (e) {
    return e.name === 'literal';
  },
  er = function (e) {
    return e.value.replace(/['|"]/g, '');
  },
  rr = function (e) {
    switch (e.type) {
      case 'function':
        return { name: 'function' };
      case 'object':
        var n = {};
        return (
          e.signature.properties.forEach(function (D) {
            n[D.key] = Fe(D.value);
          }),
          { name: 'object', value: n }
        );
      default:
        throw new Error('Unknown: '.concat(e));
    }
  },
  Fe = function u(e) {
    var n = e.name,
      D = e.raw,
      a = {};
    switch ((typeof D < 'u' && (a.raw = D), e.name)) {
      case 'literal':
        return Object.assign({}, a, { name: 'other', value: e.value });
      case 'string':
      case 'number':
      case 'symbol':
      case 'boolean':
        return Object.assign({}, a, { name: n });
      case 'Array':
        return Object.assign({}, a, {
          name: 'array',
          value: e.elements.map(u),
        });
      case 'signature':
        return Object.assign({}, a, rr(e));
      case 'union':
        return e.elements.every(ur)
          ? Object.assign({}, a, { name: 'enum', value: e.elements.map(er) })
          : Object.assign({}, a, { name: n, value: e.elements.map(u) });
      case 'intersection':
        return Object.assign({}, a, { name: n, value: e.elements.map(u) });
      default:
        return Object.assign({}, a, { name: 'other', value: n });
    }
  },
  Ce = /^['"]|['"]$/g,
  tr = function (e) {
    return e.replace(Ce, '');
  },
  nr = function (e) {
    return Ce.test(e);
  },
  ir = /^\(.*\) => /,
  ar = function u(e) {
    var n = e.name,
      D = e.raw,
      a = e.computed,
      l = e.value,
      o = {};
    switch ((typeof D < 'u' && (o.raw = D), n)) {
      case 'enum': {
        var T = a
          ? l
          : l.map(function (B) {
              var k = tr(B.value);
              return nr(B.value) || Number.isNaN(Number(k)) ? k : Number(k);
            });
        return Object.assign({}, o, { name: n, value: T });
      }
      case 'string':
      case 'number':
      case 'symbol':
        return Object.assign({}, o, { name: n });
      case 'func':
        return Object.assign({}, o, { name: 'function' });
      case 'bool':
      case 'boolean':
        return Object.assign({}, o, { name: 'boolean' });
      case 'arrayOf':
      case 'array':
        return Object.assign({}, o, { name: 'array', value: l && u(l) });
      case 'object':
        return Object.assign({}, o, { name: n });
      case 'objectOf':
        return Object.assign({}, o, { name: n, value: u(l) });
      case 'shape':
      case 'exact':
        var S = ke(l, function (B) {
          return u(B);
        });
        return Object.assign({}, o, { name: 'object', value: S });
      case 'union':
        return Object.assign({}, o, {
          name: 'union',
          value: l.map(function (B) {
            return u(B);
          }),
        });
      case 'instanceOf':
      case 'element':
      case 'elementType':
      default: {
        if ((n == null ? void 0 : n.indexOf('|')) > 0)
          try {
            var R = n.split('|').map(function (B) {
              return JSON.parse(B);
            });
            return Object.assign({}, o, { name: 'enum', value: R });
          } catch {}
        var U = l ? ''.concat(n, '(').concat(l, ')') : n,
          J = ir.test(n) ? 'function' : 'other';
        return Object.assign({}, o, { name: J, value: U });
      }
    }
  },
  Nu = function (e) {
    var n = e.type,
      D = e.tsType,
      a = e.flowType;
    return n != null ? ar(n) : D != null ? Ee(D) : a != null ? Fe(a) : null;
  },
  Eu;
(function (u) {
  (u.JAVASCRIPT = 'JavaScript'),
    (u.FLOW = 'Flow'),
    (u.TYPESCRIPT = 'TypeScript'),
    (u.UNKNOWN = 'Unknown');
})(Eu || (Eu = {}));
var or = ['null', 'undefined'];
function Qu(u) {
  return or.some(function (e) {
    return e === u;
  });
}
function Ku(u) {
  return !!u.__docgenInfo;
}
function sr(u) {
  return u != null && Object.keys(u).length > 0;
}
function cr(u, e) {
  return Ku(u) ? u.__docgenInfo[e] : null;
}
function fr(u) {
  return Ku(u) && _e(u.__docgenInfo.description);
}
var ye = {},
  wu = {},
  $u = {},
  Dr = {
    get exports() {
      return $u;
    },
    set exports(u) {
      $u = u;
    },
  };
(function () {
  function u(o) {
    if (o == null) return !1;
    switch (o.type) {
      case 'ArrayExpression':
      case 'AssignmentExpression':
      case 'BinaryExpression':
      case 'CallExpression':
      case 'ConditionalExpression':
      case 'FunctionExpression':
      case 'Identifier':
      case 'Literal':
      case 'LogicalExpression':
      case 'MemberExpression':
      case 'NewExpression':
      case 'ObjectExpression':
      case 'SequenceExpression':
      case 'ThisExpression':
      case 'UnaryExpression':
      case 'UpdateExpression':
        return !0;
    }
    return !1;
  }
  function e(o) {
    if (o == null) return !1;
    switch (o.type) {
      case 'DoWhileStatement':
      case 'ForInStatement':
      case 'ForStatement':
      case 'WhileStatement':
        return !0;
    }
    return !1;
  }
  function n(o) {
    if (o == null) return !1;
    switch (o.type) {
      case 'BlockStatement':
      case 'BreakStatement':
      case 'ContinueStatement':
      case 'DebuggerStatement':
      case 'DoWhileStatement':
      case 'EmptyStatement':
      case 'ExpressionStatement':
      case 'ForInStatement':
      case 'ForStatement':
      case 'IfStatement':
      case 'LabeledStatement':
      case 'ReturnStatement':
      case 'SwitchStatement':
      case 'ThrowStatement':
      case 'TryStatement':
      case 'VariableDeclaration':
      case 'WhileStatement':
      case 'WithStatement':
        return !0;
    }
    return !1;
  }
  function D(o) {
    return n(o) || (o != null && o.type === 'FunctionDeclaration');
  }
  function a(o) {
    switch (o.type) {
      case 'IfStatement':
        return o.alternate != null ? o.alternate : o.consequent;
      case 'LabeledStatement':
      case 'ForStatement':
      case 'ForInStatement':
      case 'WhileStatement':
      case 'WithStatement':
        return o.body;
    }
    return null;
  }
  function l(o) {
    var T;
    if (o.type !== 'IfStatement' || o.alternate == null) return !1;
    T = o.consequent;
    do {
      if (T.type === 'IfStatement' && T.alternate == null) return !0;
      T = a(T);
    } while (T);
    return !1;
  }
  Dr.exports = {
    isExpression: u,
    isStatement: n,
    isIterationStatement: e,
    isSourceElement: D,
    isProblematicIfStatement: l,
    trailingStatement: a,
  };
})();
var Ou = {},
  lr = {
    get exports() {
      return Ou;
    },
    set exports(u) {
      Ou = u;
    },
  };
(function () {
  var u, e, n, D, a, l;
  (e = {
    NonAsciiIdentifierStart:
      /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
    NonAsciiIdentifierPart:
      /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
  }),
    (u = {
      NonAsciiIdentifierStart:
        /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
      NonAsciiIdentifierPart:
        /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,
    });
  function o(F) {
    return 48 <= F && F <= 57;
  }
  function T(F) {
    return (
      (48 <= F && F <= 57) || (97 <= F && F <= 102) || (65 <= F && F <= 70)
    );
  }
  function S(F) {
    return F >= 48 && F <= 55;
  }
  n = [
    5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202,
    8239, 8287, 12288, 65279,
  ];
  function R(F) {
    return (
      F === 32 ||
      F === 9 ||
      F === 11 ||
      F === 12 ||
      F === 160 ||
      (F >= 5760 && n.indexOf(F) >= 0)
    );
  }
  function U(F) {
    return F === 10 || F === 13 || F === 8232 || F === 8233;
  }
  function J(F) {
    if (F <= 65535) return String.fromCharCode(F);
    var x = String.fromCharCode(Math.floor((F - 65536) / 1024) + 55296),
      G = String.fromCharCode(((F - 65536) % 1024) + 56320);
    return x + G;
  }
  for (D = new Array(128), l = 0; l < 128; ++l)
    D[l] =
      (l >= 97 && l <= 122) || (l >= 65 && l <= 90) || l === 36 || l === 95;
  for (a = new Array(128), l = 0; l < 128; ++l)
    a[l] =
      (l >= 97 && l <= 122) ||
      (l >= 65 && l <= 90) ||
      (l >= 48 && l <= 57) ||
      l === 36 ||
      l === 95;
  function B(F) {
    return F < 128 ? D[F] : e.NonAsciiIdentifierStart.test(J(F));
  }
  function k(F) {
    return F < 128 ? a[F] : e.NonAsciiIdentifierPart.test(J(F));
  }
  function _(F) {
    return F < 128 ? D[F] : u.NonAsciiIdentifierStart.test(J(F));
  }
  function E(F) {
    return F < 128 ? a[F] : u.NonAsciiIdentifierPart.test(J(F));
  }
  lr.exports = {
    isDecimalDigit: o,
    isHexDigit: T,
    isOctalDigit: S,
    isWhiteSpace: R,
    isLineTerminator: U,
    isIdentifierStartES5: B,
    isIdentifierPartES5: k,
    isIdentifierStartES6: _,
    isIdentifierPartES6: E,
  };
})();
var zu = {},
  Ar = {
    get exports() {
      return zu;
    },
    set exports(u) {
      zu = u;
    },
  };
(function () {
  var u = Ou;
  function e(B) {
    switch (B) {
      case 'implements':
      case 'interface':
      case 'package':
      case 'private':
      case 'protected':
      case 'public':
      case 'static':
      case 'let':
        return !0;
      default:
        return !1;
    }
  }
  function n(B, k) {
    return !k && B === 'yield' ? !1 : D(B, k);
  }
  function D(B, k) {
    if (k && e(B)) return !0;
    switch (B.length) {
      case 2:
        return B === 'if' || B === 'in' || B === 'do';
      case 3:
        return B === 'var' || B === 'for' || B === 'new' || B === 'try';
      case 4:
        return (
          B === 'this' ||
          B === 'else' ||
          B === 'case' ||
          B === 'void' ||
          B === 'with' ||
          B === 'enum'
        );
      case 5:
        return (
          B === 'while' ||
          B === 'break' ||
          B === 'catch' ||
          B === 'throw' ||
          B === 'const' ||
          B === 'yield' ||
          B === 'class' ||
          B === 'super'
        );
      case 6:
        return (
          B === 'return' ||
          B === 'typeof' ||
          B === 'delete' ||
          B === 'switch' ||
          B === 'export' ||
          B === 'import'
        );
      case 7:
        return B === 'default' || B === 'finally' || B === 'extends';
      case 8:
        return B === 'function' || B === 'continue' || B === 'debugger';
      case 10:
        return B === 'instanceof';
      default:
        return !1;
    }
  }
  function a(B, k) {
    return B === 'null' || B === 'true' || B === 'false' || n(B, k);
  }
  function l(B, k) {
    return B === 'null' || B === 'true' || B === 'false' || D(B, k);
  }
  function o(B) {
    return B === 'eval' || B === 'arguments';
  }
  function T(B) {
    var k, _, E;
    if (B.length === 0 || ((E = B.charCodeAt(0)), !u.isIdentifierStartES5(E)))
      return !1;
    for (k = 1, _ = B.length; k < _; ++k)
      if (((E = B.charCodeAt(k)), !u.isIdentifierPartES5(E))) return !1;
    return !0;
  }
  function S(B, k) {
    return (B - 55296) * 1024 + (k - 56320) + 65536;
  }
  function R(B) {
    var k, _, E, F, x;
    if (B.length === 0) return !1;
    for (x = u.isIdentifierStartES6, k = 0, _ = B.length; k < _; ++k) {
      if (((E = B.charCodeAt(k)), 55296 <= E && E <= 56319)) {
        if (
          (++k, k >= _ || ((F = B.charCodeAt(k)), !(56320 <= F && F <= 57343)))
        )
          return !1;
        E = S(E, F);
      }
      if (!x(E)) return !1;
      x = u.isIdentifierPartES6;
    }
    return !0;
  }
  function U(B, k) {
    return T(B) && !a(B, k);
  }
  function J(B, k) {
    return R(B) && !l(B, k);
  }
  Ar.exports = {
    isKeywordES5: n,
    isKeywordES6: D,
    isReservedWordES5: a,
    isReservedWordES6: l,
    isRestrictedWord: o,
    isIdentifierNameES5: T,
    isIdentifierNameES6: R,
    isIdentifierES5: U,
    isIdentifierES6: J,
  };
})();
(function () {
  (wu.ast = $u), (wu.code = Ou), (wu.keyword = zu);
})();
var Su = {},
  hu = {};
const pr = 'doctrine',
  Er = 'JSDoc parser',
  Fr = 'https://github.com/eslint/doctrine',
  Cr = 'lib/doctrine.js',
  yr = '3.0.0',
  dr = { node: '>=6.0.0' },
  Br = { lib: './lib' },
  hr = ['lib'],
  gr = [
    {
      name: 'Nicholas C. Zakas',
      email: 'nicholas+npm@nczconsulting.com',
      web: 'https://www.nczonline.net',
    },
    {
      name: 'Yusuke Suzuki',
      email: 'utatane.tea@gmail.com',
      web: 'https://github.com/Constellation',
    },
  ],
  mr = 'eslint/doctrine',
  vr = {
    coveralls: '^3.0.1',
    dateformat: '^1.0.11',
    eslint: '^1.10.3',
    'eslint-release': '^1.0.0',
    linefix: '^0.1.1',
    mocha: '^3.4.2',
    'npm-license': '^0.3.1',
    nyc: '^10.3.2',
    semver: '^5.0.3',
    shelljs: '^0.5.3',
    'shelljs-nodecli': '^0.1.1',
    should: '^5.0.1',
  },
  br = 'Apache-2.0',
  Sr = {
    pretest: 'npm run lint',
    test: 'nyc mocha',
    coveralls: 'nyc report --reporter=text-lcov | coveralls',
    lint: 'eslint lib/',
    'generate-release': 'eslint-generate-release',
    'generate-alpharelease': 'eslint-generate-prerelease alpha',
    'generate-betarelease': 'eslint-generate-prerelease beta',
    'generate-rcrelease': 'eslint-generate-prerelease rc',
    'publish-release': 'eslint-publish-release',
  },
  wr = { esutils: '^2.0.2' },
  Or = {
    name: pr,
    description: Er,
    homepage: Fr,
    main: Cr,
    version: yr,
    engines: dr,
    directories: Br,
    files: hr,
    maintainers: gr,
    repository: mr,
    devDependencies: vr,
    license: br,
    scripts: Sr,
    dependencies: wr,
  };
var Tu = {},
  Tr = {
    get exports() {
      return Tu;
    },
    set exports(u) {
      Tu = u;
    },
  },
  _u = {},
  mu = {},
  de = {},
  xr = Object.prototype.toString,
  Nr = Function.prototype.toString,
  Rr = /^\s*(?:function)?\*/,
  Be = Le(),
  ju = Object.getPrototypeOf,
  _r = function () {
    if (!Be) return !1;
    try {
      return Function('return function*() {}')();
    } catch {}
  },
  Pu,
  jr = function (e) {
    if (typeof e != 'function') return !1;
    if (Rr.test(Nr.call(e))) return !0;
    if (!Be) {
      var n = xr.call(e);
      return n === '[object GeneratorFunction]';
    }
    if (!ju) return !1;
    if (typeof Pu > 'u') {
      var D = _r();
      Pu = D ? ju(D) : !1;
    }
    return ju(e) === Pu;
  };
(function (u) {
  var e = je,
    n = jr,
    D = Ie,
    a = Pe;
  function l(m) {
    return m.call.bind(m);
  }
  var o = typeof BigInt < 'u',
    T = typeof Symbol < 'u',
    S = l(Object.prototype.toString),
    R = l(Number.prototype.valueOf),
    U = l(String.prototype.valueOf),
    J = l(Boolean.prototype.valueOf);
  if (o) var B = l(BigInt.prototype.valueOf);
  if (T) var k = l(Symbol.prototype.valueOf);
  function _(m, Fu) {
    if (typeof m != 'object') return !1;
    try {
      return Fu(m), !0;
    } catch {
      return !1;
    }
  }
  (u.isArgumentsObject = e), (u.isGeneratorFunction = n), (u.isTypedArray = a);
  function E(m) {
    return (
      (typeof Promise < 'u' && m instanceof Promise) ||
      (m !== null &&
        typeof m == 'object' &&
        typeof m.then == 'function' &&
        typeof m.catch == 'function')
    );
  }
  u.isPromise = E;
  function F(m) {
    return typeof ArrayBuffer < 'u' && ArrayBuffer.isView
      ? ArrayBuffer.isView(m)
      : a(m) || i(m);
  }
  u.isArrayBufferView = F;
  function x(m) {
    return D(m) === 'Uint8Array';
  }
  u.isUint8Array = x;
  function G(m) {
    return D(m) === 'Uint8ClampedArray';
  }
  u.isUint8ClampedArray = G;
  function K(m) {
    return D(m) === 'Uint16Array';
  }
  u.isUint16Array = K;
  function Z(m) {
    return D(m) === 'Uint32Array';
  }
  u.isUint32Array = Z;
  function w(m) {
    return D(m) === 'Int8Array';
  }
  u.isInt8Array = w;
  function g(m) {
    return D(m) === 'Int16Array';
  }
  u.isInt16Array = g;
  function $(m) {
    return D(m) === 'Int32Array';
  }
  u.isInt32Array = $;
  function b(m) {
    return D(m) === 'Float32Array';
  }
  u.isFloat32Array = b;
  function Q(m) {
    return D(m) === 'Float64Array';
  }
  u.isFloat64Array = Q;
  function nu(m) {
    return D(m) === 'BigInt64Array';
  }
  u.isBigInt64Array = nu;
  function M(m) {
    return D(m) === 'BigUint64Array';
  }
  u.isBigUint64Array = M;
  function iu(m) {
    return S(m) === '[object Map]';
  }
  iu.working = typeof Map < 'u' && iu(new Map());
  function fu(m) {
    return typeof Map > 'u' ? !1 : iu.working ? iu(m) : m instanceof Map;
  }
  u.isMap = fu;
  function au(m) {
    return S(m) === '[object Set]';
  }
  au.working = typeof Set < 'u' && au(new Set());
  function N(m) {
    return typeof Set > 'u' ? !1 : au.working ? au(m) : m instanceof Set;
  }
  u.isSet = N;
  function v(m) {
    return S(m) === '[object WeakMap]';
  }
  v.working = typeof WeakMap < 'u' && v(new WeakMap());
  function P(m) {
    return typeof WeakMap > 'u' ? !1 : v.working ? v(m) : m instanceof WeakMap;
  }
  u.isWeakMap = P;
  function j(m) {
    return S(m) === '[object WeakSet]';
  }
  j.working = typeof WeakSet < 'u' && j(new WeakSet());
  function q(m) {
    return j(m);
  }
  u.isWeakSet = q;
  function H(m) {
    return S(m) === '[object ArrayBuffer]';
  }
  H.working = typeof ArrayBuffer < 'u' && H(new ArrayBuffer());
  function d(m) {
    return typeof ArrayBuffer > 'u'
      ? !1
      : H.working
      ? H(m)
      : m instanceof ArrayBuffer;
  }
  u.isArrayBuffer = d;
  function t(m) {
    return S(m) === '[object DataView]';
  }
  t.working =
    typeof ArrayBuffer < 'u' &&
    typeof DataView < 'u' &&
    t(new DataView(new ArrayBuffer(1), 0, 1));
  function i(m) {
    return typeof DataView > 'u'
      ? !1
      : t.working
      ? t(m)
      : m instanceof DataView;
  }
  u.isDataView = i;
  var c = typeof SharedArrayBuffer < 'u' ? SharedArrayBuffer : void 0;
  function y(m) {
    return S(m) === '[object SharedArrayBuffer]';
  }
  function r(m) {
    return typeof c > 'u'
      ? !1
      : (typeof y.working > 'u' && (y.working = y(new c())),
        y.working ? y(m) : m instanceof c);
  }
  u.isSharedArrayBuffer = r;
  function s(m) {
    return S(m) === '[object AsyncFunction]';
  }
  u.isAsyncFunction = s;
  function h(m) {
    return S(m) === '[object Map Iterator]';
  }
  u.isMapIterator = h;
  function f(m) {
    return S(m) === '[object Set Iterator]';
  }
  u.isSetIterator = f;
  function A(m) {
    return S(m) === '[object Generator]';
  }
  u.isGeneratorObject = A;
  function O(m) {
    return S(m) === '[object WebAssembly.Module]';
  }
  u.isWebAssemblyCompiledModule = O;
  function L(m) {
    return _(m, R);
  }
  u.isNumberObject = L;
  function eu(m) {
    return _(m, U);
  }
  u.isStringObject = eu;
  function z(m) {
    return _(m, J);
  }
  u.isBooleanObject = z;
  function tu(m) {
    return o && _(m, B);
  }
  u.isBigIntObject = tu;
  function su(m) {
    return T && _(m, k);
  }
  u.isSymbolObject = su;
  function cu(m) {
    return L(m) || eu(m) || z(m) || tu(m) || su(m);
  }
  u.isBoxedPrimitive = cu;
  function pu(m) {
    return typeof Uint8Array < 'u' && (d(m) || r(m));
  }
  (u.isAnyArrayBuffer = pu),
    ['isProxy', 'isExternal', 'isModuleNamespaceObject'].forEach(function (m) {
      Object.defineProperty(u, m, {
        enumerable: !1,
        value: function () {
          throw new Error(m + ' is not supported in userland');
        },
      });
    });
})(de);
var Pr = function (e) {
    return (
      e &&
      typeof e == 'object' &&
      typeof e.copy == 'function' &&
      typeof e.fill == 'function' &&
      typeof e.readUInt8 == 'function'
    );
  },
  Ju = {},
  ue = {
    get exports() {
      return Ju;
    },
    set exports(u) {
      Ju = u;
    },
  };
typeof Object.create == 'function'
  ? (ue.exports = function (e, n) {
      n &&
        ((e.super_ = n),
        (e.prototype = Object.create(n.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })));
    })
  : (ue.exports = function (e, n) {
      if (n) {
        e.super_ = n;
        var D = function () {};
        (D.prototype = n.prototype),
          (e.prototype = new D()),
          (e.prototype.constructor = e);
      }
    });
(function (u) {
  var e =
      Object.getOwnPropertyDescriptors ||
      function (i) {
        for (var c = Object.keys(i), y = {}, r = 0; r < c.length; r++)
          y[c[r]] = Object.getOwnPropertyDescriptor(i, c[r]);
        return y;
      },
    n = /%[sdj%]/g;
  (u.format = function (t) {
    if (!w(t)) {
      for (var i = [], c = 0; c < arguments.length; c++)
        i.push(o(arguments[c]));
      return i.join(' ');
    }
    for (
      var c = 1,
        y = arguments,
        r = y.length,
        s = String(t).replace(n, function (f) {
          if (f === '%%') return '%';
          if (c >= r) return f;
          switch (f) {
            case '%s':
              return String(y[c++]);
            case '%d':
              return Number(y[c++]);
            case '%j':
              try {
                return JSON.stringify(y[c++]);
              } catch {
                return '[Circular]';
              }
            default:
              return f;
          }
        }),
        h = y[c];
      c < r;
      h = y[++c]
    )
      G(h) || !Q(h) ? (s += ' ' + h) : (s += ' ' + o(h));
    return s;
  }),
    (u.deprecate = function (t, i) {
      if (typeof process < 'u' && process.noDeprecation === !0) return t;
      if (typeof process > 'u')
        return function () {
          return u.deprecate(t, i).apply(this, arguments);
        };
      var c = !1;
      function y() {
        if (!c) {
          if (process.throwDeprecation) throw new Error(i);
          process.traceDeprecation ? console.trace(i) : console.error(i),
            (c = !0);
        }
        return t.apply(this, arguments);
      }
      return y;
    });
  var D = {},
    a = /^$/;
  if ({}.NODE_DEBUG) {
    var l = {}.NODE_DEBUG;
    (l = l
      .replace(/[|\\{}()[\]^$+?.]/g, '\\$&')
      .replace(/\*/g, '.*')
      .replace(/,/g, '$|^')
      .toUpperCase()),
      (a = new RegExp('^' + l + '$', 'i'));
  }
  u.debuglog = function (t) {
    if (((t = t.toUpperCase()), !D[t]))
      if (a.test(t)) {
        var i = process.pid;
        D[t] = function () {
          var c = u.format.apply(u, arguments);
          console.error('%s %d: %s', t, i, c);
        };
      } else D[t] = function () {};
    return D[t];
  };
  function o(t, i) {
    var c = { seen: [], stylize: S };
    return (
      arguments.length >= 3 && (c.depth = arguments[2]),
      arguments.length >= 4 && (c.colors = arguments[3]),
      x(i) ? (c.showHidden = i) : i && u._extend(c, i),
      $(c.showHidden) && (c.showHidden = !1),
      $(c.depth) && (c.depth = 2),
      $(c.colors) && (c.colors = !1),
      $(c.customInspect) && (c.customInspect = !0),
      c.colors && (c.stylize = T),
      U(c, t, c.depth)
    );
  }
  (u.inspect = o),
    (o.colors = {
      bold: [1, 22],
      italic: [3, 23],
      underline: [4, 24],
      inverse: [7, 27],
      white: [37, 39],
      grey: [90, 39],
      black: [30, 39],
      blue: [34, 39],
      cyan: [36, 39],
      green: [32, 39],
      magenta: [35, 39],
      red: [31, 39],
      yellow: [33, 39],
    }),
    (o.styles = {
      special: 'cyan',
      number: 'yellow',
      boolean: 'yellow',
      undefined: 'grey',
      null: 'bold',
      string: 'green',
      date: 'magenta',
      regexp: 'red',
    });
  function T(t, i) {
    var c = o.styles[i];
    return c
      ? '\x1B[' + o.colors[c][0] + 'm' + t + '\x1B[' + o.colors[c][1] + 'm'
      : t;
  }
  function S(t, i) {
    return t;
  }
  function R(t) {
    var i = {};
    return (
      t.forEach(function (c, y) {
        i[c] = !0;
      }),
      i
    );
  }
  function U(t, i, c) {
    if (
      t.customInspect &&
      i &&
      iu(i.inspect) &&
      i.inspect !== u.inspect &&
      !(i.constructor && i.constructor.prototype === i)
    ) {
      var y = i.inspect(c, t);
      return w(y) || (y = U(t, y, c)), y;
    }
    var r = J(t, i);
    if (r) return r;
    var s = Object.keys(i),
      h = R(s);
    if (
      (t.showHidden && (s = Object.getOwnPropertyNames(i)),
      M(i) && (s.indexOf('message') >= 0 || s.indexOf('description') >= 0))
    )
      return B(i);
    if (s.length === 0) {
      if (iu(i)) {
        var f = i.name ? ': ' + i.name : '';
        return t.stylize('[Function' + f + ']', 'special');
      }
      if (b(i)) return t.stylize(RegExp.prototype.toString.call(i), 'regexp');
      if (nu(i)) return t.stylize(Date.prototype.toString.call(i), 'date');
      if (M(i)) return B(i);
    }
    var A = '',
      O = !1,
      L = ['{', '}'];
    if ((F(i) && ((O = !0), (L = ['[', ']'])), iu(i))) {
      var eu = i.name ? ': ' + i.name : '';
      A = ' [Function' + eu + ']';
    }
    if (
      (b(i) && (A = ' ' + RegExp.prototype.toString.call(i)),
      nu(i) && (A = ' ' + Date.prototype.toUTCString.call(i)),
      M(i) && (A = ' ' + B(i)),
      s.length === 0 && (!O || i.length == 0))
    )
      return L[0] + A + L[1];
    if (c < 0)
      return b(i)
        ? t.stylize(RegExp.prototype.toString.call(i), 'regexp')
        : t.stylize('[Object]', 'special');
    t.seen.push(i);
    var z;
    return (
      O
        ? (z = k(t, i, c, h, s))
        : (z = s.map(function (tu) {
            return _(t, i, c, h, tu, O);
          })),
      t.seen.pop(),
      E(z, A, L)
    );
  }
  function J(t, i) {
    if ($(i)) return t.stylize('undefined', 'undefined');
    if (w(i)) {
      var c =
        "'" +
        JSON.stringify(i)
          .replace(/^"|"$/g, '')
          .replace(/'/g, "\\'")
          .replace(/\\"/g, '"') +
        "'";
      return t.stylize(c, 'string');
    }
    if (Z(i)) return t.stylize('' + i, 'number');
    if (x(i)) return t.stylize('' + i, 'boolean');
    if (G(i)) return t.stylize('null', 'null');
  }
  function B(t) {
    return '[' + Error.prototype.toString.call(t) + ']';
  }
  function k(t, i, c, y, r) {
    for (var s = [], h = 0, f = i.length; h < f; ++h)
      j(i, String(h)) ? s.push(_(t, i, c, y, String(h), !0)) : s.push('');
    return (
      r.forEach(function (A) {
        A.match(/^\d+$/) || s.push(_(t, i, c, y, A, !0));
      }),
      s
    );
  }
  function _(t, i, c, y, r, s) {
    var h, f, A;
    if (
      ((A = Object.getOwnPropertyDescriptor(i, r) || { value: i[r] }),
      A.get
        ? A.set
          ? (f = t.stylize('[Getter/Setter]', 'special'))
          : (f = t.stylize('[Getter]', 'special'))
        : A.set && (f = t.stylize('[Setter]', 'special')),
      j(y, r) || (h = '[' + r + ']'),
      f ||
        (t.seen.indexOf(A.value) < 0
          ? (G(c) ? (f = U(t, A.value, null)) : (f = U(t, A.value, c - 1)),
            f.indexOf(`
`) > -1 &&
              (s
                ? (f = f
                    .split(
                      `
`,
                    )
                    .map(function (O) {
                      return '  ' + O;
                    })
                    .join(
                      `
`,
                    )
                    .slice(2))
                : (f =
                    `
` +
                    f
                      .split(
                        `
`,
                      )
                      .map(function (O) {
                        return '   ' + O;
                      }).join(`
`))))
          : (f = t.stylize('[Circular]', 'special'))),
      $(h))
    ) {
      if (s && r.match(/^\d+$/)) return f;
      (h = JSON.stringify('' + r)),
        h.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)
          ? ((h = h.slice(1, -1)), (h = t.stylize(h, 'name')))
          : ((h = h
              .replace(/'/g, "\\'")
              .replace(/\\"/g, '"')
              .replace(/(^"|"$)/g, "'")),
            (h = t.stylize(h, 'string')));
    }
    return h + ': ' + f;
  }
  function E(t, i, c) {
    var y = t.reduce(function (r, s) {
      return (
        s.indexOf(`
`) >= 0,
        r + s.replace(/\u001b\[\d\d?m/g, '').length + 1
      );
    }, 0);
    return y > 60
      ? c[0] +
          (i === ''
            ? ''
            : i +
              `
 `) +
          ' ' +
          t.join(`,
  `) +
          ' ' +
          c[1]
      : c[0] + i + ' ' + t.join(', ') + ' ' + c[1];
  }
  u.types = de;
  function F(t) {
    return Array.isArray(t);
  }
  u.isArray = F;
  function x(t) {
    return typeof t == 'boolean';
  }
  u.isBoolean = x;
  function G(t) {
    return t === null;
  }
  u.isNull = G;
  function K(t) {
    return t == null;
  }
  u.isNullOrUndefined = K;
  function Z(t) {
    return typeof t == 'number';
  }
  u.isNumber = Z;
  function w(t) {
    return typeof t == 'string';
  }
  u.isString = w;
  function g(t) {
    return typeof t == 'symbol';
  }
  u.isSymbol = g;
  function $(t) {
    return t === void 0;
  }
  u.isUndefined = $;
  function b(t) {
    return Q(t) && au(t) === '[object RegExp]';
  }
  (u.isRegExp = b), (u.types.isRegExp = b);
  function Q(t) {
    return typeof t == 'object' && t !== null;
  }
  u.isObject = Q;
  function nu(t) {
    return Q(t) && au(t) === '[object Date]';
  }
  (u.isDate = nu), (u.types.isDate = nu);
  function M(t) {
    return Q(t) && (au(t) === '[object Error]' || t instanceof Error);
  }
  (u.isError = M), (u.types.isNativeError = M);
  function iu(t) {
    return typeof t == 'function';
  }
  u.isFunction = iu;
  function fu(t) {
    return (
      t === null ||
      typeof t == 'boolean' ||
      typeof t == 'number' ||
      typeof t == 'string' ||
      typeof t == 'symbol' ||
      typeof t > 'u'
    );
  }
  (u.isPrimitive = fu), (u.isBuffer = Pr);
  function au(t) {
    return Object.prototype.toString.call(t);
  }
  function N(t) {
    return t < 10 ? '0' + t.toString(10) : t.toString(10);
  }
  var v = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  function P() {
    var t = new Date(),
      i = [N(t.getHours()), N(t.getMinutes()), N(t.getSeconds())].join(':');
    return [t.getDate(), v[t.getMonth()], i].join(' ');
  }
  (u.log = function () {
    console.log('%s - %s', P(), u.format.apply(u, arguments));
  }),
    (u.inherits = Ju),
    (u._extend = function (t, i) {
      if (!i || !Q(i)) return t;
      for (var c = Object.keys(i), y = c.length; y--; ) t[c[y]] = i[c[y]];
      return t;
    });
  function j(t, i) {
    return Object.prototype.hasOwnProperty.call(t, i);
  }
  var q = typeof Symbol < 'u' ? Symbol('util.promisify.custom') : void 0;
  (u.promisify = function (i) {
    if (typeof i != 'function')
      throw new TypeError('The "original" argument must be of type Function');
    if (q && i[q]) {
      var c = i[q];
      if (typeof c != 'function')
        throw new TypeError(
          'The "util.promisify.custom" argument must be of type Function',
        );
      return (
        Object.defineProperty(c, q, {
          value: c,
          enumerable: !1,
          writable: !1,
          configurable: !0,
        }),
        c
      );
    }
    function c() {
      for (
        var y,
          r,
          s = new Promise(function (A, O) {
            (y = A), (r = O);
          }),
          h = [],
          f = 0;
        f < arguments.length;
        f++
      )
        h.push(arguments[f]);
      h.push(function (A, O) {
        A ? r(A) : y(O);
      });
      try {
        i.apply(this, h);
      } catch (A) {
        r(A);
      }
      return s;
    }
    return (
      Object.setPrototypeOf(c, Object.getPrototypeOf(i)),
      q &&
        Object.defineProperty(c, q, {
          value: c,
          enumerable: !1,
          writable: !1,
          configurable: !0,
        }),
      Object.defineProperties(c, e(i))
    );
  }),
    (u.promisify.custom = q);
  function H(t, i) {
    if (!t) {
      var c = new Error('Promise was rejected with a falsy value');
      (c.reason = t), (t = c);
    }
    return i(t);
  }
  function d(t) {
    if (typeof t != 'function')
      throw new TypeError('The "original" argument must be of type Function');
    function i() {
      for (var c = [], y = 0; y < arguments.length; y++) c.push(arguments[y]);
      var r = c.pop();
      if (typeof r != 'function')
        throw new TypeError('The last argument must be of type Function');
      var s = this,
        h = function () {
          return r.apply(s, arguments);
        };
      t.apply(this, c).then(
        function (f) {
          process.nextTick(h.bind(null, null, f));
        },
        function (f) {
          process.nextTick(H.bind(null, f, h));
        },
      );
    }
    return (
      Object.setPrototypeOf(i, Object.getPrototypeOf(t)),
      Object.defineProperties(i, e(t)),
      i
    );
  }
  u.callbackify = d;
})(mu);
var ee;
function he() {
  if (ee) return _u;
  ee = 1;
  function u(E) {
    return (
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? (u = function (x) {
            return typeof x;
          })
        : (u = function (x) {
            return x &&
              typeof Symbol == 'function' &&
              x.constructor === Symbol &&
              x !== Symbol.prototype
              ? 'symbol'
              : typeof x;
          }),
      u(E)
    );
  }
  function e(E, F) {
    if (!(E instanceof F))
      throw new TypeError('Cannot call a class as a function');
  }
  function n(E, F) {
    return F && (u(F) === 'object' || typeof F == 'function') ? F : D(E);
  }
  function D(E) {
    if (E === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called",
      );
    return E;
  }
  function a(E) {
    return (
      (a = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (x) {
            return x.__proto__ || Object.getPrototypeOf(x);
          }),
      a(E)
    );
  }
  function l(E, F) {
    if (typeof F != 'function' && F !== null)
      throw new TypeError('Super expression must either be null or a function');
    (E.prototype = Object.create(F && F.prototype, {
      constructor: { value: E, writable: !0, configurable: !0 },
    })),
      F && o(E, F);
  }
  function o(E, F) {
    return (
      (o =
        Object.setPrototypeOf ||
        function (G, K) {
          return (G.__proto__ = K), G;
        }),
      o(E, F)
    );
  }
  var T = {},
    S,
    R;
  function U(E, F, x) {
    x || (x = Error);
    function G(Z, w, g) {
      return typeof F == 'string' ? F : F(Z, w, g);
    }
    var K = (function (Z) {
      l(w, Z);
      function w(g, $, b) {
        var Q;
        return (
          e(this, w),
          (Q = n(this, a(w).call(this, G(g, $, b)))),
          (Q.code = E),
          Q
        );
      }
      return w;
    })(x);
    T[E] = K;
  }
  function J(E, F) {
    if (Array.isArray(E)) {
      var x = E.length;
      return (
        (E = E.map(function (G) {
          return String(G);
        })),
        x > 2
          ? 'one of '
              .concat(F, ' ')
              .concat(E.slice(0, x - 1).join(', '), ', or ') + E[x - 1]
          : x === 2
          ? 'one of '.concat(F, ' ').concat(E[0], ' or ').concat(E[1])
          : 'of '.concat(F, ' ').concat(E[0])
      );
    } else return 'of '.concat(F, ' ').concat(String(E));
  }
  function B(E, F, x) {
    return E.substr(!x || x < 0 ? 0 : +x, F.length) === F;
  }
  function k(E, F, x) {
    return (
      (x === void 0 || x > E.length) && (x = E.length),
      E.substring(x - F.length, x) === F
    );
  }
  function _(E, F, x) {
    return (
      typeof x != 'number' && (x = 0),
      x + F.length > E.length ? !1 : E.indexOf(F, x) !== -1
    );
  }
  return (
    U(
      'ERR_AMBIGUOUS_ARGUMENT',
      'The "%s" argument is ambiguous. %s',
      TypeError,
    ),
    U(
      'ERR_INVALID_ARG_TYPE',
      function (E, F, x) {
        S === void 0 && (S = Hu()),
          S(typeof E == 'string', "'name' must be a string");
        var G;
        typeof F == 'string' && B(F, 'not ')
          ? ((G = 'must not be'), (F = F.replace(/^not /, '')))
          : (G = 'must be');
        var K;
        if (k(E, ' argument'))
          K = 'The '.concat(E, ' ').concat(G, ' ').concat(J(F, 'type'));
        else {
          var Z = _(E, '.') ? 'property' : 'argument';
          K = 'The "'
            .concat(E, '" ')
            .concat(Z, ' ')
            .concat(G, ' ')
            .concat(J(F, 'type'));
        }
        return (K += '. Received type '.concat(u(x))), K;
      },
      TypeError,
    ),
    U(
      'ERR_INVALID_ARG_VALUE',
      function (E, F) {
        var x =
          arguments.length > 2 && arguments[2] !== void 0
            ? arguments[2]
            : 'is invalid';
        R === void 0 && (R = mu);
        var G = R.inspect(F);
        return (
          G.length > 128 && (G = ''.concat(G.slice(0, 128), '...')),
          "The argument '".concat(E, "' ").concat(x, '. Received ').concat(G)
        );
      },
      TypeError,
    ),
    U(
      'ERR_INVALID_RETURN_VALUE',
      function (E, F, x) {
        var G;
        return (
          x && x.constructor && x.constructor.name
            ? (G = 'instance of '.concat(x.constructor.name))
            : (G = 'type '.concat(u(x))),
          'Expected '.concat(E, ' to be returned from the "').concat(F, '"') +
            ' function but got '.concat(G, '.')
        );
      },
      TypeError,
    ),
    U(
      'ERR_MISSING_ARGS',
      function () {
        for (var E = arguments.length, F = new Array(E), x = 0; x < E; x++)
          F[x] = arguments[x];
        S === void 0 && (S = Hu()),
          S(F.length > 0, 'At least one arg needs to be specified');
        var G = 'The ',
          K = F.length;
        switch (
          ((F = F.map(function (Z) {
            return '"'.concat(Z, '"');
          })),
          K)
        ) {
          case 1:
            G += ''.concat(F[0], ' argument');
            break;
          case 2:
            G += ''.concat(F[0], ' and ').concat(F[1], ' arguments');
            break;
          default:
            (G += F.slice(0, K - 1).join(', ')),
              (G += ', and '.concat(F[K - 1], ' arguments'));
            break;
        }
        return ''.concat(G, ' must be specified');
      },
      TypeError,
    ),
    (_u.codes = T),
    _u
  );
}
var Iu, re;
function Ir() {
  if (re) return Iu;
  re = 1;
  function u(N) {
    for (var v = 1; v < arguments.length; v++) {
      var P = arguments[v] != null ? arguments[v] : {},
        j = Object.keys(P);
      typeof Object.getOwnPropertySymbols == 'function' &&
        (j = j.concat(
          Object.getOwnPropertySymbols(P).filter(function (q) {
            return Object.getOwnPropertyDescriptor(P, q).enumerable;
          }),
        )),
        j.forEach(function (q) {
          e(N, q, P[q]);
        });
    }
    return N;
  }
  function e(N, v, P) {
    return (
      v in N
        ? Object.defineProperty(N, v, {
            value: P,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (N[v] = P),
      N
    );
  }
  function n(N, v) {
    if (!(N instanceof v))
      throw new TypeError('Cannot call a class as a function');
  }
  function D(N, v) {
    for (var P = 0; P < v.length; P++) {
      var j = v[P];
      (j.enumerable = j.enumerable || !1),
        (j.configurable = !0),
        'value' in j && (j.writable = !0),
        Object.defineProperty(N, j.key, j);
    }
  }
  function a(N, v, P) {
    return v && D(N.prototype, v), P && D(N, P), N;
  }
  function l(N, v) {
    return v && (_(v) === 'object' || typeof v == 'function') ? v : o(N);
  }
  function o(N) {
    if (N === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called",
      );
    return N;
  }
  function T(N, v) {
    if (typeof v != 'function' && v !== null)
      throw new TypeError('Super expression must either be null or a function');
    (N.prototype = Object.create(v && v.prototype, {
      constructor: { value: N, writable: !0, configurable: !0 },
    })),
      v && B(N, v);
  }
  function S(N) {
    var v = typeof Map == 'function' ? new Map() : void 0;
    return (
      (S = function (j) {
        if (j === null || !J(j)) return j;
        if (typeof j != 'function')
          throw new TypeError(
            'Super expression must either be null or a function',
          );
        if (typeof v < 'u') {
          if (v.has(j)) return v.get(j);
          v.set(j, q);
        }
        function q() {
          return U(j, arguments, k(this).constructor);
        }
        return (
          (q.prototype = Object.create(j.prototype, {
            constructor: {
              value: q,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          B(q, j)
        );
      }),
      S(N)
    );
  }
  function R() {
    if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham)
      return !1;
    if (typeof Proxy == 'function') return !0;
    try {
      return (
        Date.prototype.toString.call(
          Reflect.construct(Date, [], function () {}),
        ),
        !0
      );
    } catch {
      return !1;
    }
  }
  function U(N, v, P) {
    return (
      R()
        ? (U = Reflect.construct)
        : (U = function (q, H, d) {
            var t = [null];
            t.push.apply(t, H);
            var i = Function.bind.apply(q, t),
              c = new i();
            return d && B(c, d.prototype), c;
          }),
      U.apply(null, arguments)
    );
  }
  function J(N) {
    return Function.toString.call(N).indexOf('[native code]') !== -1;
  }
  function B(N, v) {
    return (
      (B =
        Object.setPrototypeOf ||
        function (j, q) {
          return (j.__proto__ = q), j;
        }),
      B(N, v)
    );
  }
  function k(N) {
    return (
      (k = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (P) {
            return P.__proto__ || Object.getPrototypeOf(P);
          }),
      k(N)
    );
  }
  function _(N) {
    return (
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? (_ = function (P) {
            return typeof P;
          })
        : (_ = function (P) {
            return P &&
              typeof Symbol == 'function' &&
              P.constructor === Symbol &&
              P !== Symbol.prototype
              ? 'symbol'
              : typeof P;
          }),
      _(N)
    );
  }
  var E = mu,
    F = E.inspect,
    x = he(),
    G = x.codes.ERR_INVALID_ARG_TYPE;
  function K(N, v, P) {
    return (
      (P === void 0 || P > N.length) && (P = N.length),
      N.substring(P - v.length, P) === v
    );
  }
  function Z(N, v) {
    if (((v = Math.floor(v)), N.length == 0 || v == 0)) return '';
    var P = N.length * v;
    for (v = Math.floor(Math.log(v) / Math.log(2)); v; ) (N += N), v--;
    return (N += N.substring(0, P - N.length)), N;
  }
  var w = '',
    g = '',
    $ = '',
    b = '',
    Q = {
      deepStrictEqual: 'Expected values to be strictly deep-equal:',
      strictEqual: 'Expected values to be strictly equal:',
      strictEqualObject:
        'Expected "actual" to be reference-equal to "expected":',
      deepEqual: 'Expected values to be loosely deep-equal:',
      equal: 'Expected values to be loosely equal:',
      notDeepStrictEqual: 'Expected "actual" not to be strictly deep-equal to:',
      notStrictEqual: 'Expected "actual" to be strictly unequal to:',
      notStrictEqualObject:
        'Expected "actual" not to be reference-equal to "expected":',
      notDeepEqual: 'Expected "actual" not to be loosely deep-equal to:',
      notEqual: 'Expected "actual" to be loosely unequal to:',
      notIdentical: 'Values identical but not reference-equal:',
    },
    nu = 10;
  function M(N) {
    var v = Object.keys(N),
      P = Object.create(Object.getPrototypeOf(N));
    return (
      v.forEach(function (j) {
        P[j] = N[j];
      }),
      Object.defineProperty(P, 'message', { value: N.message }),
      P
    );
  }
  function iu(N) {
    return F(N, {
      compact: !1,
      customInspect: !1,
      depth: 1e3,
      maxArrayLength: 1 / 0,
      showHidden: !1,
      breakLength: 1 / 0,
      showProxy: !1,
      sorted: !0,
      getters: !0,
    });
  }
  function fu(N, v, P) {
    var j = '',
      q = '',
      H = 0,
      d = '',
      t = !1,
      i = iu(N),
      c = i.split(`
`),
      y = iu(v).split(`
`),
      r = 0,
      s = '';
    if (
      (P === 'strictEqual' &&
        _(N) === 'object' &&
        _(v) === 'object' &&
        N !== null &&
        v !== null &&
        (P = 'strictEqualObject'),
      c.length === 1 && y.length === 1 && c[0] !== y[0])
    ) {
      var h = c[0].length + y[0].length;
      if (h <= nu) {
        if (
          (_(N) !== 'object' || N === null) &&
          (_(v) !== 'object' || v === null) &&
          (N !== 0 || v !== 0)
        )
          return (
            ''.concat(
              Q[P],
              `

`,
            ) +
            ''.concat(c[0], ' !== ').concat(
              y[0],
              `
`,
            )
          );
      } else if (P !== 'strictEqualObject') {
        var f =
          process.stderr && process.stderr.isTTY ? process.stderr.columns : 80;
        if (h < f) {
          for (; c[0][r] === y[0][r]; ) r++;
          r > 2 &&
            ((s = `
  `.concat(Z(' ', r), '^')),
            (r = 0));
        }
      }
    }
    for (
      var A = c[c.length - 1], O = y[y.length - 1];
      A === O &&
      (r++ < 2
        ? (d = `
  `
            .concat(A)
            .concat(d))
        : (j = A),
      c.pop(),
      y.pop(),
      !(c.length === 0 || y.length === 0));

    )
      (A = c[c.length - 1]), (O = y[y.length - 1]);
    var L = Math.max(c.length, y.length);
    if (L === 0) {
      var eu = i.split(`
`);
      if (eu.length > 30)
        for (eu[26] = ''.concat(w, '...').concat(b); eu.length > 27; ) eu.pop();
      return ''
        .concat(
          Q.notIdentical,
          `

`,
        )
        .concat(
          eu.join(`
`),
          `
`,
        );
    }
    r > 3 &&
      ((d = `
`
        .concat(w, '...')
        .concat(b)
        .concat(d)),
      (t = !0)),
      j !== '' &&
        ((d = `
  `
          .concat(j)
          .concat(d)),
        (j = ''));
    var z = 0,
      tu =
        Q[P] +
        `
`
          .concat(g, '+ actual')
          .concat(b, ' ')
          .concat($, '- expected')
          .concat(b),
      su = ' '.concat(w, '...').concat(b, ' Lines skipped');
    for (r = 0; r < L; r++) {
      var cu = r - H;
      if (c.length < r + 1)
        cu > 1 &&
          r > 2 &&
          (cu > 4
            ? ((q += `
`
                .concat(w, '...')
                .concat(b)),
              (t = !0))
            : cu > 3 &&
              ((q += `
  `.concat(y[r - 2])),
              z++),
          (q += `
  `.concat(y[r - 1])),
          z++),
          (H = r),
          (j += `
`
            .concat($, '-')
            .concat(b, ' ')
            .concat(y[r])),
          z++;
      else if (y.length < r + 1)
        cu > 1 &&
          r > 2 &&
          (cu > 4
            ? ((q += `
`
                .concat(w, '...')
                .concat(b)),
              (t = !0))
            : cu > 3 &&
              ((q += `
  `.concat(c[r - 2])),
              z++),
          (q += `
  `.concat(c[r - 1])),
          z++),
          (H = r),
          (q += `
`
            .concat(g, '+')
            .concat(b, ' ')
            .concat(c[r])),
          z++;
      else {
        var pu = y[r],
          m = c[r],
          Fu = m !== pu && (!K(m, ',') || m.slice(0, -1) !== pu);
        Fu && K(pu, ',') && pu.slice(0, -1) === m && ((Fu = !1), (m += ',')),
          Fu
            ? (cu > 1 &&
                r > 2 &&
                (cu > 4
                  ? ((q += `
`
                      .concat(w, '...')
                      .concat(b)),
                    (t = !0))
                  : cu > 3 &&
                    ((q += `
  `.concat(c[r - 2])),
                    z++),
                (q += `
  `.concat(c[r - 1])),
                z++),
              (H = r),
              (q += `
`
                .concat(g, '+')
                .concat(b, ' ')
                .concat(m)),
              (j += `
`
                .concat($, '-')
                .concat(b, ' ')
                .concat(pu)),
              (z += 2))
            : ((q += j),
              (j = ''),
              (cu === 1 || r === 0) &&
                ((q += `
  `.concat(m)),
                z++));
      }
      if (z > 20 && r < L - 2)
        return (
          ''
            .concat(tu)
            .concat(
              su,
              `
`,
            )
            .concat(
              q,
              `
`,
            )
            .concat(w, '...')
            .concat(b)
            .concat(
              j,
              `
`,
            ) + ''.concat(w, '...').concat(b)
        );
    }
    return ''
      .concat(tu)
      .concat(
        t ? su : '',
        `
`,
      )
      .concat(q)
      .concat(j)
      .concat(d)
      .concat(s);
  }
  var au = (function (N) {
    T(v, N);
    function v(P) {
      var j;
      if ((n(this, v), _(P) !== 'object' || P === null))
        throw new G('options', 'Object', P);
      var q = P.message,
        H = P.operator,
        d = P.stackStartFn,
        t = P.actual,
        i = P.expected,
        c = Error.stackTraceLimit;
      if (((Error.stackTraceLimit = 0), q != null))
        j = l(this, k(v).call(this, String(q)));
      else if (
        (process.stderr &&
          process.stderr.isTTY &&
          (process.stderr &&
          process.stderr.getColorDepth &&
          process.stderr.getColorDepth() !== 1
            ? ((w = '\x1B[34m'),
              (g = '\x1B[32m'),
              (b = '\x1B[39m'),
              ($ = '\x1B[31m'))
            : ((w = ''), (g = ''), (b = ''), ($ = ''))),
        _(t) === 'object' &&
          t !== null &&
          _(i) === 'object' &&
          i !== null &&
          'stack' in t &&
          t instanceof Error &&
          'stack' in i &&
          i instanceof Error &&
          ((t = M(t)), (i = M(i))),
        H === 'deepStrictEqual' || H === 'strictEqual')
      )
        j = l(this, k(v).call(this, fu(t, i, H)));
      else if (H === 'notDeepStrictEqual' || H === 'notStrictEqual') {
        var y = Q[H],
          r = iu(t).split(`
`);
        if (
          (H === 'notStrictEqual' &&
            _(t) === 'object' &&
            t !== null &&
            (y = Q.notStrictEqualObject),
          r.length > 30)
        )
          for (r[26] = ''.concat(w, '...').concat(b); r.length > 27; ) r.pop();
        r.length === 1
          ? (j = l(this, k(v).call(this, ''.concat(y, ' ').concat(r[0]))))
          : (j = l(
              this,
              k(v).call(
                this,
                ''
                  .concat(
                    y,
                    `

`,
                  )
                  .concat(
                    r.join(`
`),
                    `
`,
                  ),
              ),
            ));
      } else {
        var s = iu(t),
          h = '',
          f = Q[H];
        H === 'notDeepEqual' || H === 'notEqual'
          ? ((s = ''
              .concat(
                Q[H],
                `

`,
              )
              .concat(s)),
            s.length > 1024 && (s = ''.concat(s.slice(0, 1021), '...')))
          : ((h = ''.concat(iu(i))),
            s.length > 512 && (s = ''.concat(s.slice(0, 509), '...')),
            h.length > 512 && (h = ''.concat(h.slice(0, 509), '...')),
            H === 'deepEqual' || H === 'equal'
              ? (s = ''
                  .concat(
                    f,
                    `

`,
                  )
                  .concat(
                    s,
                    `

should equal

`,
                  ))
              : (h = ' '.concat(H, ' ').concat(h))),
          (j = l(this, k(v).call(this, ''.concat(s).concat(h))));
      }
      return (
        (Error.stackTraceLimit = c),
        (j.generatedMessage = !q),
        Object.defineProperty(o(j), 'name', {
          value: 'AssertionError [ERR_ASSERTION]',
          enumerable: !1,
          writable: !0,
          configurable: !0,
        }),
        (j.code = 'ERR_ASSERTION'),
        (j.actual = t),
        (j.expected = i),
        (j.operator = H),
        Error.captureStackTrace && Error.captureStackTrace(o(j), d),
        j.stack,
        (j.name = 'AssertionError'),
        l(j)
      );
    }
    return (
      a(v, [
        {
          key: 'toString',
          value: function () {
            return ''
              .concat(this.name, ' [')
              .concat(this.code, ']: ')
              .concat(this.message);
          },
        },
        {
          key: F.custom,
          value: function (j, q) {
            return F(this, u({}, q, { customInspect: !1, depth: 0 }));
          },
        },
      ]),
      v
    );
  })(S(Error));
  return (Iu = au), Iu;
}
var ku, te;
function kr() {
  if (te) return ku;
  te = 1;
  function u(n, D) {
    if (n == null)
      throw new TypeError('Cannot convert first argument to object');
    for (var a = Object(n), l = 1; l < arguments.length; l++) {
      var o = arguments[l];
      if (o != null)
        for (var T = Object.keys(Object(o)), S = 0, R = T.length; S < R; S++) {
          var U = T[S],
            J = Object.getOwnPropertyDescriptor(o, U);
          J !== void 0 && J.enumerable && (a[U] = o[U]);
        }
    }
    return a;
  }
  function e() {
    Object.assign ||
      Object.defineProperty(Object, 'assign', {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: u,
      });
  }
  return (ku = { assign: u, polyfill: e }), ku;
}
var Lu, ne;
function ge() {
  return (
    ne ||
      ((ne = 1),
      (Lu = function (e) {
        return e !== e;
      })),
    Lu
  );
}
var Mu, ie;
function me() {
  if (ie) return Mu;
  ie = 1;
  var u = ge();
  return (
    (Mu = function () {
      return Number.isNaN && Number.isNaN(NaN) && !Number.isNaN('a')
        ? Number.isNaN
        : u;
    }),
    Mu
  );
}
var qu, ae;
function Lr() {
  if (ae) return qu;
  ae = 1;
  var u = Ae,
    e = me();
  return (
    (qu = function () {
      var D = e();
      return (
        u(
          Number,
          { isNaN: D },
          {
            isNaN: function () {
              return Number.isNaN !== D;
            },
          },
        ),
        D
      );
    }),
    qu
  );
}
var Uu, oe;
function Mr() {
  if (oe) return Uu;
  oe = 1;
  var u = ze,
    e = Ae,
    n = ge(),
    D = me(),
    a = Lr(),
    l = u(D(), Number);
  return e(l, { getPolyfill: D, implementation: n, shim: a }), (Uu = l), Uu;
}
var Vu, se;
function qr() {
  if (se) return Vu;
  se = 1;
  function u(p, C) {
    return D(p) || n(p, C) || e();
  }
  function e() {
    throw new TypeError('Invalid attempt to destructure non-iterable instance');
  }
  function n(p, C) {
    var I = [],
      V = !0,
      W = !1,
      X = void 0;
    try {
      for (
        var Y = p[Symbol.iterator](), ru;
        !(V = (ru = Y.next()).done) &&
        (I.push(ru.value), !(C && I.length === C));
        V = !0
      );
    } catch (uu) {
      (W = !0), (X = uu);
    } finally {
      try {
        !V && Y.return != null && Y.return();
      } finally {
        if (W) throw X;
      }
    }
    return I;
  }
  function D(p) {
    if (Array.isArray(p)) return p;
  }
  function a(p) {
    return (
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? (a = function (I) {
            return typeof I;
          })
        : (a = function (I) {
            return I &&
              typeof Symbol == 'function' &&
              I.constructor === Symbol &&
              I !== Symbol.prototype
              ? 'symbol'
              : typeof I;
          }),
      a(p)
    );
  }
  var l = /a/g.flags !== void 0,
    o = function (C) {
      var I = [];
      return (
        C.forEach(function (V) {
          return I.push(V);
        }),
        I
      );
    },
    T = function (C) {
      var I = [];
      return (
        C.forEach(function (V, W) {
          return I.push([W, V]);
        }),
        I
      );
    },
    S = Object.is ? Object.is : pe,
    R = Object.getOwnPropertySymbols
      ? Object.getOwnPropertySymbols
      : function () {
          return [];
        },
    U = Number.isNaN ? Number.isNaN : Mr();
  function J(p) {
    return p.call.bind(p);
  }
  var B = J(Object.prototype.hasOwnProperty),
    k = J(Object.prototype.propertyIsEnumerable),
    _ = J(Object.prototype.toString),
    E = mu.types,
    F = E.isAnyArrayBuffer,
    x = E.isArrayBufferView,
    G = E.isDate,
    K = E.isMap,
    Z = E.isRegExp,
    w = E.isSet,
    g = E.isNativeError,
    $ = E.isBoxedPrimitive,
    b = E.isNumberObject,
    Q = E.isStringObject,
    nu = E.isBooleanObject,
    M = E.isBigIntObject,
    iu = E.isSymbolObject,
    fu = E.isFloat32Array,
    au = E.isFloat64Array;
  function N(p) {
    if (p.length === 0 || p.length > 10) return !0;
    for (var C = 0; C < p.length; C++) {
      var I = p.charCodeAt(C);
      if (I < 48 || I > 57) return !0;
    }
    return p.length === 10 && p >= Math.pow(2, 32);
  }
  function v(p) {
    return Object.keys(p)
      .filter(N)
      .concat(R(p).filter(Object.prototype.propertyIsEnumerable.bind(p)));
  }
  /*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
   * @license  MIT
   */ function P(p, C) {
    if (p === C) return 0;
    for (var I = p.length, V = C.length, W = 0, X = Math.min(I, V); W < X; ++W)
      if (p[W] !== C[W]) {
        (I = p[W]), (V = C[W]);
        break;
      }
    return I < V ? -1 : V < I ? 1 : 0;
  }
  var j = !0,
    q = !1,
    H = 0,
    d = 1,
    t = 2,
    i = 3;
  function c(p, C) {
    return l
      ? p.source === C.source && p.flags === C.flags
      : RegExp.prototype.toString.call(p) === RegExp.prototype.toString.call(C);
  }
  function y(p, C) {
    if (p.byteLength !== C.byteLength) return !1;
    for (var I = 0; I < p.byteLength; I++) if (p[I] !== C[I]) return !1;
    return !0;
  }
  function r(p, C) {
    return p.byteLength !== C.byteLength
      ? !1
      : P(
          new Uint8Array(p.buffer, p.byteOffset, p.byteLength),
          new Uint8Array(C.buffer, C.byteOffset, C.byteLength),
        ) === 0;
  }
  function s(p, C) {
    return (
      p.byteLength === C.byteLength &&
      P(new Uint8Array(p), new Uint8Array(C)) === 0
    );
  }
  function h(p, C) {
    return b(p)
      ? b(C) &&
          S(Number.prototype.valueOf.call(p), Number.prototype.valueOf.call(C))
      : Q(p)
      ? Q(C) &&
        String.prototype.valueOf.call(p) === String.prototype.valueOf.call(C)
      : nu(p)
      ? nu(C) &&
        Boolean.prototype.valueOf.call(p) === Boolean.prototype.valueOf.call(C)
      : M(p)
      ? M(C) &&
        BigInt.prototype.valueOf.call(p) === BigInt.prototype.valueOf.call(C)
      : iu(C) &&
        Symbol.prototype.valueOf.call(p) === Symbol.prototype.valueOf.call(C);
  }
  function f(p, C, I, V) {
    if (p === C) return p !== 0 ? !0 : I ? S(p, C) : !0;
    if (I) {
      if (a(p) !== 'object') return typeof p == 'number' && U(p) && U(C);
      if (
        a(C) !== 'object' ||
        p === null ||
        C === null ||
        Object.getPrototypeOf(p) !== Object.getPrototypeOf(C)
      )
        return !1;
    } else {
      if (p === null || a(p) !== 'object')
        return C === null || a(C) !== 'object' ? p == C : !1;
      if (C === null || a(C) !== 'object') return !1;
    }
    var W = _(p),
      X = _(C);
    if (W !== X) return !1;
    if (Array.isArray(p)) {
      if (p.length !== C.length) return !1;
      var Y = v(p),
        ru = v(C);
      return Y.length !== ru.length ? !1 : O(p, C, I, V, d, Y);
    }
    if (W === '[object Object]' && ((!K(p) && K(C)) || (!w(p) && w(C))))
      return !1;
    if (G(p)) {
      if (
        !G(C) ||
        Date.prototype.getTime.call(p) !== Date.prototype.getTime.call(C)
      )
        return !1;
    } else if (Z(p)) {
      if (!Z(C) || !c(p, C)) return !1;
    } else if (g(p) || p instanceof Error) {
      if (p.message !== C.message || p.name !== C.name) return !1;
    } else if (x(p)) {
      if (!I && (fu(p) || au(p))) {
        if (!y(p, C)) return !1;
      } else if (!r(p, C)) return !1;
      var uu = v(p),
        Du = v(C);
      return uu.length !== Du.length ? !1 : O(p, C, I, V, H, uu);
    } else {
      if (w(p)) return !w(C) || p.size !== C.size ? !1 : O(p, C, I, V, t);
      if (K(p)) return !K(C) || p.size !== C.size ? !1 : O(p, C, I, V, i);
      if (F(p)) {
        if (!s(p, C)) return !1;
      } else if ($(p) && !h(p, C)) return !1;
    }
    return O(p, C, I, V, H);
  }
  function A(p, C) {
    return C.filter(function (I) {
      return k(p, I);
    });
  }
  function O(p, C, I, V, W, X) {
    if (arguments.length === 5) {
      X = Object.keys(p);
      var Y = Object.keys(C);
      if (X.length !== Y.length) return !1;
    }
    for (var ru = 0; ru < X.length; ru++) if (!B(C, X[ru])) return !1;
    if (I && arguments.length === 5) {
      var uu = R(p);
      if (uu.length !== 0) {
        var Du = 0;
        for (ru = 0; ru < uu.length; ru++) {
          var lu = uu[ru];
          if (k(p, lu)) {
            if (!k(C, lu)) return !1;
            X.push(lu), Du++;
          } else if (k(C, lu)) return !1;
        }
        var vu = R(C);
        if (uu.length !== vu.length && A(C, vu).length !== Du) return !1;
      } else {
        var du = R(C);
        if (du.length !== 0 && A(C, du).length !== 0) return !1;
      }
    }
    if (
      X.length === 0 &&
      (W === H || (W === d && p.length === 0) || p.size === 0)
    )
      return !0;
    if (V === void 0) V = { val1: new Map(), val2: new Map(), position: 0 };
    else {
      var bu = V.val1.get(p);
      if (bu !== void 0) {
        var Bu = V.val2.get(C);
        if (Bu !== void 0) return bu === Bu;
      }
      V.position++;
    }
    V.val1.set(p, V.position), V.val2.set(C, V.position);
    var Re = m(p, C, I, X, V, W);
    return V.val1.delete(p), V.val2.delete(C), Re;
  }
  function L(p, C, I, V) {
    for (var W = o(p), X = 0; X < W.length; X++) {
      var Y = W[X];
      if (f(C, Y, I, V)) return p.delete(Y), !0;
    }
    return !1;
  }
  function eu(p) {
    switch (a(p)) {
      case 'undefined':
        return null;
      case 'object':
        return;
      case 'symbol':
        return !1;
      case 'string':
        p = +p;
      case 'number':
        if (U(p)) return !1;
    }
    return !0;
  }
  function z(p, C, I) {
    var V = eu(I);
    return V ?? (C.has(V) && !p.has(V));
  }
  function tu(p, C, I, V, W) {
    var X = eu(I);
    if (X != null) return X;
    var Y = C.get(X);
    return (Y === void 0 && !C.has(X)) || !f(V, Y, !1, W)
      ? !1
      : !p.has(X) && f(V, Y, !1, W);
  }
  function su(p, C, I, V) {
    for (var W = null, X = o(p), Y = 0; Y < X.length; Y++) {
      var ru = X[Y];
      if (a(ru) === 'object' && ru !== null)
        W === null && (W = new Set()), W.add(ru);
      else if (!C.has(ru)) {
        if (I || !z(p, C, ru)) return !1;
        W === null && (W = new Set()), W.add(ru);
      }
    }
    if (W !== null) {
      for (var uu = o(C), Du = 0; Du < uu.length; Du++) {
        var lu = uu[Du];
        if (a(lu) === 'object' && lu !== null) {
          if (!L(W, lu, I, V)) return !1;
        } else if (!I && !p.has(lu) && !L(W, lu, I, V)) return !1;
      }
      return W.size === 0;
    }
    return !0;
  }
  function cu(p, C, I, V, W, X) {
    for (var Y = o(p), ru = 0; ru < Y.length; ru++) {
      var uu = Y[ru];
      if (f(I, uu, W, X) && f(V, C.get(uu), W, X)) return p.delete(uu), !0;
    }
    return !1;
  }
  function pu(p, C, I, V) {
    for (var W = null, X = T(p), Y = 0; Y < X.length; Y++) {
      var ru = u(X[Y], 2),
        uu = ru[0],
        Du = ru[1];
      if (a(uu) === 'object' && uu !== null)
        W === null && (W = new Set()), W.add(uu);
      else {
        var lu = C.get(uu);
        if ((lu === void 0 && !C.has(uu)) || !f(Du, lu, I, V)) {
          if (I || !tu(p, C, uu, Du, V)) return !1;
          W === null && (W = new Set()), W.add(uu);
        }
      }
    }
    if (W !== null) {
      for (var vu = T(C), du = 0; du < vu.length; du++) {
        var bu = u(vu[du], 2),
          uu = bu[0],
          Bu = bu[1];
        if (a(uu) === 'object' && uu !== null) {
          if (!cu(W, p, uu, Bu, I, V)) return !1;
        } else if (
          !I &&
          (!p.has(uu) || !f(p.get(uu), Bu, !1, V)) &&
          !cu(W, p, uu, Bu, !1, V)
        )
          return !1;
      }
      return W.size === 0;
    }
    return !0;
  }
  function m(p, C, I, V, W, X) {
    var Y = 0;
    if (X === t) {
      if (!su(p, C, I, W)) return !1;
    } else if (X === i) {
      if (!pu(p, C, I, W)) return !1;
    } else if (X === d)
      for (; Y < p.length; Y++)
        if (B(p, Y)) {
          if (!B(C, Y) || !f(p[Y], C[Y], I, W)) return !1;
        } else {
          if (B(C, Y)) return !1;
          for (var ru = Object.keys(p); Y < ru.length; Y++) {
            var uu = ru[Y];
            if (!B(C, uu) || !f(p[uu], C[uu], I, W)) return !1;
          }
          return ru.length === Object.keys(C).length;
        }
    for (Y = 0; Y < V.length; Y++) {
      var Du = V[Y];
      if (!f(p[Du], C[Du], I, W)) return !1;
    }
    return !0;
  }
  function Fu(p, C) {
    return f(p, C, q);
  }
  function Xu(p, C) {
    return f(p, C, j);
  }
  return (Vu = { isDeepEqual: Fu, isDeepStrictEqual: Xu }), Vu;
}
var ce;
function Hu() {
  if (ce) return Tu;
  ce = 1;
  function u(d) {
    return (
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? (u = function (i) {
            return typeof i;
          })
        : (u = function (i) {
            return i &&
              typeof Symbol == 'function' &&
              i.constructor === Symbol &&
              i !== Symbol.prototype
              ? 'symbol'
              : typeof i;
          }),
      u(d)
    );
  }
  function e(d, t) {
    if (!(d instanceof t))
      throw new TypeError('Cannot call a class as a function');
  }
  var n = he(),
    D = n.codes,
    a = D.ERR_AMBIGUOUS_ARGUMENT,
    l = D.ERR_INVALID_ARG_TYPE,
    o = D.ERR_INVALID_ARG_VALUE,
    T = D.ERR_INVALID_RETURN_VALUE,
    S = D.ERR_MISSING_ARGS,
    R = Ir(),
    U = mu,
    J = U.inspect,
    B = mu.types,
    k = B.isPromise,
    _ = B.isRegExp,
    E = Object.assign ? Object.assign : kr().assign,
    F = Object.is ? Object.is : pe,
    x,
    G;
  function K() {
    var d = qr();
    (x = d.isDeepEqual), (G = d.isDeepStrictEqual);
  }
  var Z = !1,
    w = (Tr.exports = nu),
    g = {};
  function $(d) {
    throw d.message instanceof Error ? d.message : new R(d);
  }
  function b(d, t, i, c, y) {
    var r = arguments.length,
      s;
    if (r === 0) s = 'Failed';
    else if (r === 1) (i = d), (d = void 0);
    else {
      if (Z === !1) {
        Z = !0;
        var h = process.emitWarning
          ? process.emitWarning
          : console.warn.bind(console);
        h(
          'assert.fail() with more than one argument is deprecated. Please use assert.strictEqual() instead or only pass a message.',
          'DeprecationWarning',
          'DEP0094',
        );
      }
      r === 2 && (c = '!=');
    }
    if (i instanceof Error) throw i;
    var f = {
      actual: d,
      expected: t,
      operator: c === void 0 ? 'fail' : c,
      stackStartFn: y || b,
    };
    i !== void 0 && (f.message = i);
    var A = new R(f);
    throw (s && ((A.message = s), (A.generatedMessage = !0)), A);
  }
  (w.fail = b), (w.AssertionError = R);
  function Q(d, t, i, c) {
    if (!i) {
      var y = !1;
      if (t === 0) (y = !0), (c = 'No value argument passed to `assert.ok()`');
      else if (c instanceof Error) throw c;
      var r = new R({
        actual: i,
        expected: !0,
        message: c,
        operator: '==',
        stackStartFn: d,
      });
      throw ((r.generatedMessage = y), r);
    }
  }
  function nu() {
    for (var d = arguments.length, t = new Array(d), i = 0; i < d; i++)
      t[i] = arguments[i];
    Q.apply(void 0, [nu, t.length].concat(t));
  }
  (w.ok = nu),
    (w.equal = function d(t, i, c) {
      if (arguments.length < 2) throw new S('actual', 'expected');
      t != i &&
        $({
          actual: t,
          expected: i,
          message: c,
          operator: '==',
          stackStartFn: d,
        });
    }),
    (w.notEqual = function d(t, i, c) {
      if (arguments.length < 2) throw new S('actual', 'expected');
      t == i &&
        $({
          actual: t,
          expected: i,
          message: c,
          operator: '!=',
          stackStartFn: d,
        });
    }),
    (w.deepEqual = function d(t, i, c) {
      if (arguments.length < 2) throw new S('actual', 'expected');
      x === void 0 && K(),
        x(t, i) ||
          $({
            actual: t,
            expected: i,
            message: c,
            operator: 'deepEqual',
            stackStartFn: d,
          });
    }),
    (w.notDeepEqual = function d(t, i, c) {
      if (arguments.length < 2) throw new S('actual', 'expected');
      x === void 0 && K(),
        x(t, i) &&
          $({
            actual: t,
            expected: i,
            message: c,
            operator: 'notDeepEqual',
            stackStartFn: d,
          });
    }),
    (w.deepStrictEqual = function d(t, i, c) {
      if (arguments.length < 2) throw new S('actual', 'expected');
      x === void 0 && K(),
        G(t, i) ||
          $({
            actual: t,
            expected: i,
            message: c,
            operator: 'deepStrictEqual',
            stackStartFn: d,
          });
    }),
    (w.notDeepStrictEqual = M);
  function M(d, t, i) {
    if (arguments.length < 2) throw new S('actual', 'expected');
    x === void 0 && K(),
      G(d, t) &&
        $({
          actual: d,
          expected: t,
          message: i,
          operator: 'notDeepStrictEqual',
          stackStartFn: M,
        });
  }
  (w.strictEqual = function d(t, i, c) {
    if (arguments.length < 2) throw new S('actual', 'expected');
    F(t, i) ||
      $({
        actual: t,
        expected: i,
        message: c,
        operator: 'strictEqual',
        stackStartFn: d,
      });
  }),
    (w.notStrictEqual = function d(t, i, c) {
      if (arguments.length < 2) throw new S('actual', 'expected');
      F(t, i) &&
        $({
          actual: t,
          expected: i,
          message: c,
          operator: 'notStrictEqual',
          stackStartFn: d,
        });
    });
  var iu = function d(t, i, c) {
    var y = this;
    e(this, d),
      i.forEach(function (r) {
        r in t &&
          (c !== void 0 && typeof c[r] == 'string' && _(t[r]) && t[r].test(c[r])
            ? (y[r] = c[r])
            : (y[r] = t[r]));
      });
  };
  function fu(d, t, i, c, y, r) {
    if (!(i in d) || !G(d[i], t[i])) {
      if (!c) {
        var s = new iu(d, y),
          h = new iu(t, y, d),
          f = new R({
            actual: s,
            expected: h,
            operator: 'deepStrictEqual',
            stackStartFn: r,
          });
        throw ((f.actual = d), (f.expected = t), (f.operator = r.name), f);
      }
      $({
        actual: d,
        expected: t,
        message: c,
        operator: r.name,
        stackStartFn: r,
      });
    }
  }
  function au(d, t, i, c) {
    if (typeof t != 'function') {
      if (_(t)) return t.test(d);
      if (arguments.length === 2)
        throw new l('expected', ['Function', 'RegExp'], t);
      if (u(d) !== 'object' || d === null) {
        var y = new R({
          actual: d,
          expected: t,
          message: i,
          operator: 'deepStrictEqual',
          stackStartFn: c,
        });
        throw ((y.operator = c.name), y);
      }
      var r = Object.keys(t);
      if (t instanceof Error) r.push('name', 'message');
      else if (r.length === 0)
        throw new o('error', t, 'may not be an empty object');
      return (
        x === void 0 && K(),
        r.forEach(function (s) {
          (typeof d[s] == 'string' && _(t[s]) && t[s].test(d[s])) ||
            fu(d, t, s, i, r, c);
        }),
        !0
      );
    }
    return t.prototype !== void 0 && d instanceof t
      ? !0
      : Error.isPrototypeOf(t)
      ? !1
      : t.call({}, d) === !0;
  }
  function N(d) {
    if (typeof d != 'function') throw new l('fn', 'Function', d);
    try {
      d();
    } catch (t) {
      return t;
    }
    return g;
  }
  function v(d) {
    return (
      k(d) ||
      (d !== null &&
        u(d) === 'object' &&
        typeof d.then == 'function' &&
        typeof d.catch == 'function')
    );
  }
  function P(d) {
    return Promise.resolve().then(function () {
      var t;
      if (typeof d == 'function') {
        if (((t = d()), !v(t)))
          throw new T('instance of Promise', 'promiseFn', t);
      } else if (v(d)) t = d;
      else throw new l('promiseFn', ['Function', 'Promise'], d);
      return Promise.resolve()
        .then(function () {
          return t;
        })
        .then(function () {
          return g;
        })
        .catch(function (i) {
          return i;
        });
    });
  }
  function j(d, t, i, c) {
    if (typeof i == 'string') {
      if (arguments.length === 4)
        throw new l('error', ['Object', 'Error', 'Function', 'RegExp'], i);
      if (u(t) === 'object' && t !== null) {
        if (t.message === i)
          throw new a(
            'error/message',
            'The error message "'.concat(
              t.message,
              '" is identical to the message.',
            ),
          );
      } else if (t === i)
        throw new a(
          'error/message',
          'The error "'.concat(t, '" is identical to the message.'),
        );
      (c = i), (i = void 0);
    } else if (i != null && u(i) !== 'object' && typeof i != 'function')
      throw new l('error', ['Object', 'Error', 'Function', 'RegExp'], i);
    if (t === g) {
      var y = '';
      i && i.name && (y += ' ('.concat(i.name, ')')),
        (y += c ? ': '.concat(c) : '.');
      var r = d.name === 'rejects' ? 'rejection' : 'exception';
      $({
        actual: void 0,
        expected: i,
        operator: d.name,
        message: 'Missing expected '.concat(r).concat(y),
        stackStartFn: d,
      });
    }
    if (i && !au(t, i, c, d)) throw t;
  }
  function q(d, t, i, c) {
    if (t !== g) {
      if ((typeof i == 'string' && ((c = i), (i = void 0)), !i || au(t, i))) {
        var y = c ? ': '.concat(c) : '.',
          r = d.name === 'doesNotReject' ? 'rejection' : 'exception';
        $({
          actual: t,
          expected: i,
          operator: d.name,
          message:
            'Got unwanted '.concat(r).concat(
              y,
              `
`,
            ) + 'Actual message: "'.concat(t && t.message, '"'),
          stackStartFn: d,
        });
      }
      throw t;
    }
  }
  (w.throws = function d(t) {
    for (
      var i = arguments.length, c = new Array(i > 1 ? i - 1 : 0), y = 1;
      y < i;
      y++
    )
      c[y - 1] = arguments[y];
    j.apply(void 0, [d, N(t)].concat(c));
  }),
    (w.rejects = function d(t) {
      for (
        var i = arguments.length, c = new Array(i > 1 ? i - 1 : 0), y = 1;
        y < i;
        y++
      )
        c[y - 1] = arguments[y];
      return P(t).then(function (r) {
        return j.apply(void 0, [d, r].concat(c));
      });
    }),
    (w.doesNotThrow = function d(t) {
      for (
        var i = arguments.length, c = new Array(i > 1 ? i - 1 : 0), y = 1;
        y < i;
        y++
      )
        c[y - 1] = arguments[y];
      q.apply(void 0, [d, N(t)].concat(c));
    }),
    (w.doesNotReject = function d(t) {
      for (
        var i = arguments.length, c = new Array(i > 1 ? i - 1 : 0), y = 1;
        y < i;
        y++
      )
        c[y - 1] = arguments[y];
      return P(t).then(function (r) {
        return q.apply(void 0, [d, r].concat(c));
      });
    }),
    (w.ifError = function d(t) {
      if (t != null) {
        var i = 'ifError got unwanted exception: ';
        u(t) === 'object' && typeof t.message == 'string'
          ? t.message.length === 0 && t.constructor
            ? (i += t.constructor.name)
            : (i += t.message)
          : (i += J(t));
        var c = new R({
            actual: t,
            expected: null,
            operator: 'ifError',
            message: i,
            stackStartFn: d,
          }),
          y = t.stack;
        if (typeof y == 'string') {
          var r = y.split(`
`);
          r.shift();
          for (
            var s = c.stack.split(`
`),
              h = 0;
            h < r.length;
            h++
          ) {
            var f = s.indexOf(r[h]);
            if (f !== -1) {
              s = s.slice(0, f);
              break;
            }
          }
          c.stack = ''
            .concat(
              s.join(`
`),
              `
`,
            )
            .concat(
              r.join(`
`),
            );
        }
        throw c;
      }
    });
  function H() {
    for (var d = arguments.length, t = new Array(d), i = 0; i < d; i++)
      t[i] = arguments[i];
    Q.apply(void 0, [H, t.length].concat(t));
  }
  return (
    (w.strict = E(H, w, {
      equal: w.strictEqual,
      deepEqual: w.deepStrictEqual,
      notEqual: w.notStrictEqual,
      notDeepEqual: w.notDeepStrictEqual,
    })),
    (w.strict.strict = w.strict),
    Tu
  );
}
(function () {
  var u;
  (u = Or.version), (hu.VERSION = u);
  function e(D) {
    (this.name = 'DoctrineError'), (this.message = D);
  }
  (e.prototype = (function () {
    var D = function () {};
    return (D.prototype = Error.prototype), new D();
  })()),
    (e.prototype.constructor = e),
    (hu.DoctrineError = e);
  function n(D) {
    throw new e(D);
  }
  (hu.throwError = n), (hu.assert = Hu());
})();
(function () {
  var u, e, n, D, a, l, o, T, S, R, U, J;
  (S = wu),
    (R = hu),
    (u = {
      NullableLiteral: 'NullableLiteral',
      AllLiteral: 'AllLiteral',
      NullLiteral: 'NullLiteral',
      UndefinedLiteral: 'UndefinedLiteral',
      VoidLiteral: 'VoidLiteral',
      UnionType: 'UnionType',
      ArrayType: 'ArrayType',
      RecordType: 'RecordType',
      FieldType: 'FieldType',
      FunctionType: 'FunctionType',
      ParameterType: 'ParameterType',
      RestType: 'RestType',
      NonNullableType: 'NonNullableType',
      OptionalType: 'OptionalType',
      NullableType: 'NullableType',
      NameExpression: 'NameExpression',
      TypeApplication: 'TypeApplication',
      StringLiteralType: 'StringLiteralType',
      NumericLiteralType: 'NumericLiteralType',
      BooleanLiteralType: 'BooleanLiteralType',
    }),
    (e = {
      ILLEGAL: 0,
      DOT_LT: 1,
      REST: 2,
      LT: 3,
      GT: 4,
      LPAREN: 5,
      RPAREN: 6,
      LBRACE: 7,
      RBRACE: 8,
      LBRACK: 9,
      RBRACK: 10,
      COMMA: 11,
      COLON: 12,
      STAR: 13,
      PIPE: 14,
      QUESTION: 15,
      BANG: 16,
      EQUAL: 17,
      NAME: 18,
      STRING: 19,
      NUMBER: 20,
      EOF: 21,
    });
  function B(r) {
    return (
      '><(){}[],:*|?!='.indexOf(String.fromCharCode(r)) === -1 &&
      !S.code.isWhiteSpace(r) &&
      !S.code.isLineTerminator(r)
    );
  }
  function k(r, s, h, f) {
    (this._previous = r),
      (this._index = s),
      (this._token = h),
      (this._value = f);
  }
  (k.prototype.restore = function () {
    (l = this._previous),
      (a = this._index),
      (o = this._token),
      (T = this._value);
  }),
    (k.save = function () {
      return new k(l, a, o, T);
    });
  function _(r, s) {
    return J && (r.range = [s[0] + U, s[1] + U]), r;
  }
  function E() {
    var r = n.charAt(a);
    return (a += 1), r;
  }
  function F(r) {
    var s,
      h,
      f,
      A = 0;
    for (h = r === 'u' ? 4 : 2, s = 0; s < h; ++s)
      if (a < D && S.code.isHexDigit(n.charCodeAt(a)))
        (f = E()), (A = A * 16 + '0123456789abcdef'.indexOf(f.toLowerCase()));
      else return '';
    return String.fromCharCode(A);
  }
  function x() {
    var r = '',
      s,
      h,
      f,
      A,
      O;
    for (s = n.charAt(a), ++a; a < D; )
      if (((h = E()), h === s)) {
        s = '';
        break;
      } else if (h === '\\')
        if (((h = E()), S.code.isLineTerminator(h.charCodeAt(0))))
          h === '\r' && n.charCodeAt(a) === 10 && ++a;
        else
          switch (h) {
            case 'n':
              r += `
`;
              break;
            case 'r':
              r += '\r';
              break;
            case 't':
              r += '	';
              break;
            case 'u':
            case 'x':
              (O = a), (A = F(h)), A ? (r += A) : ((a = O), (r += h));
              break;
            case 'b':
              r += '\b';
              break;
            case 'f':
              r += '\f';
              break;
            case 'v':
              r += '\v';
              break;
            default:
              S.code.isOctalDigit(h.charCodeAt(0))
                ? ((f = '01234567'.indexOf(h)),
                  a < D &&
                    S.code.isOctalDigit(n.charCodeAt(a)) &&
                    ((f = f * 8 + '01234567'.indexOf(E())),
                    '0123'.indexOf(h) >= 0 &&
                      a < D &&
                      S.code.isOctalDigit(n.charCodeAt(a)) &&
                      (f = f * 8 + '01234567'.indexOf(E()))),
                  (r += String.fromCharCode(f)))
                : (r += h);
              break;
          }
      else {
        if (S.code.isLineTerminator(h.charCodeAt(0))) break;
        r += h;
      }
    return s !== '' && R.throwError('unexpected quote'), (T = r), e.STRING;
  }
  function G() {
    var r, s;
    if (((r = ''), (s = n.charCodeAt(a)), s !== 46)) {
      if (((r = E()), (s = n.charCodeAt(a)), r === '0')) {
        if (s === 120 || s === 88) {
          for (
            r += E();
            a < D && ((s = n.charCodeAt(a)), !!S.code.isHexDigit(s));

          )
            r += E();
          return (
            r.length <= 2 && R.throwError('unexpected token'),
            a < D &&
              ((s = n.charCodeAt(a)),
              S.code.isIdentifierStartES5(s) &&
                R.throwError('unexpected token')),
            (T = parseInt(r, 16)),
            e.NUMBER
          );
        }
        if (S.code.isOctalDigit(s)) {
          for (
            r += E();
            a < D && ((s = n.charCodeAt(a)), !!S.code.isOctalDigit(s));

          )
            r += E();
          return (
            a < D &&
              ((s = n.charCodeAt(a)),
              (S.code.isIdentifierStartES5(s) || S.code.isDecimalDigit(s)) &&
                R.throwError('unexpected token')),
            (T = parseInt(r, 8)),
            e.NUMBER
          );
        }
        S.code.isDecimalDigit(s) && R.throwError('unexpected token');
      }
      for (; a < D && ((s = n.charCodeAt(a)), !!S.code.isDecimalDigit(s)); )
        r += E();
    }
    if (s === 46)
      for (
        r += E();
        a < D && ((s = n.charCodeAt(a)), !!S.code.isDecimalDigit(s));

      )
        r += E();
    if (s === 101 || s === 69)
      if (
        ((r += E()),
        (s = n.charCodeAt(a)),
        (s === 43 || s === 45) && (r += E()),
        (s = n.charCodeAt(a)),
        S.code.isDecimalDigit(s))
      )
        for (
          r += E();
          a < D && ((s = n.charCodeAt(a)), !!S.code.isDecimalDigit(s));

        )
          r += E();
      else R.throwError('unexpected token');
    return (
      a < D &&
        ((s = n.charCodeAt(a)),
        S.code.isIdentifierStartES5(s) && R.throwError('unexpected token')),
      (T = parseFloat(r)),
      e.NUMBER
    );
  }
  function K() {
    var r, s;
    for (T = E(); a < D && B(n.charCodeAt(a)); ) {
      if (((r = n.charCodeAt(a)), r === 46)) {
        if (a + 1 >= D) return e.ILLEGAL;
        if (((s = n.charCodeAt(a + 1)), s === 60)) break;
      }
      T += E();
    }
    return e.NAME;
  }
  function Z() {
    var r;
    for (l = a; a < D && S.code.isWhiteSpace(n.charCodeAt(a)); ) E();
    if (a >= D) return (o = e.EOF), o;
    switch (((r = n.charCodeAt(a)), r)) {
      case 39:
      case 34:
        return (o = x()), o;
      case 58:
        return E(), (o = e.COLON), o;
      case 44:
        return E(), (o = e.COMMA), o;
      case 40:
        return E(), (o = e.LPAREN), o;
      case 41:
        return E(), (o = e.RPAREN), o;
      case 91:
        return E(), (o = e.LBRACK), o;
      case 93:
        return E(), (o = e.RBRACK), o;
      case 123:
        return E(), (o = e.LBRACE), o;
      case 125:
        return E(), (o = e.RBRACE), o;
      case 46:
        if (a + 1 < D) {
          if (((r = n.charCodeAt(a + 1)), r === 60))
            return E(), E(), (o = e.DOT_LT), o;
          if (r === 46 && a + 2 < D && n.charCodeAt(a + 2) === 46)
            return E(), E(), E(), (o = e.REST), o;
          if (S.code.isDecimalDigit(r)) return (o = G()), o;
        }
        return (o = e.ILLEGAL), o;
      case 60:
        return E(), (o = e.LT), o;
      case 62:
        return E(), (o = e.GT), o;
      case 42:
        return E(), (o = e.STAR), o;
      case 124:
        return E(), (o = e.PIPE), o;
      case 63:
        return E(), (o = e.QUESTION), o;
      case 33:
        return E(), (o = e.BANG), o;
      case 61:
        return E(), (o = e.EQUAL), o;
      case 45:
        return (o = G()), o;
      default:
        return S.code.isDecimalDigit(r)
          ? ((o = G()), o)
          : (R.assert(B(r)), (o = K()), o);
    }
  }
  function w(r, s) {
    R.assert(o === r, s || 'consumed token not matched'), Z();
  }
  function g(r, s) {
    o !== r && R.throwError(s || 'unexpected token'), Z();
  }
  function $() {
    var r,
      s = a - 1;
    if (
      (w(e.LPAREN, 'UnionType should start with ('), (r = []), o !== e.RPAREN)
    )
      for (; r.push(q()), o !== e.RPAREN; ) g(e.PIPE);
    return (
      w(e.RPAREN, 'UnionType should end with )'),
      _({ type: u.UnionType, elements: r }, [s, l])
    );
  }
  function b() {
    var r,
      s = a - 1,
      h;
    for (
      w(e.LBRACK, 'ArrayType should start with ['), r = [];
      o !== e.RBRACK;

    ) {
      if (o === e.REST) {
        (h = a - 3),
          w(e.REST),
          r.push(_({ type: u.RestType, expression: q() }, [h, l]));
        break;
      } else r.push(q());
      o !== e.RBRACK && g(e.COMMA);
    }
    return g(e.RBRACK), _({ type: u.ArrayType, elements: r }, [s, l]);
  }
  function Q() {
    var r = T;
    if (o === e.NAME || o === e.STRING) return Z(), r;
    if (o === e.NUMBER) return w(e.NUMBER), String(r);
    R.throwError('unexpected token');
  }
  function nu() {
    var r,
      s = l;
    return (
      (r = Q()),
      o === e.COLON
        ? (w(e.COLON), _({ type: u.FieldType, key: r, value: q() }, [s, l]))
        : _({ type: u.FieldType, key: r, value: null }, [s, l])
    );
  }
  function M() {
    var r,
      s = a - 1,
      h;
    if (
      (w(e.LBRACE, 'RecordType should start with {'), (r = []), o === e.COMMA)
    )
      w(e.COMMA);
    else for (; o !== e.RBRACE; ) r.push(nu()), o !== e.RBRACE && g(e.COMMA);
    return (h = a), g(e.RBRACE), _({ type: u.RecordType, fields: r }, [s, h]);
  }
  function iu() {
    var r = T,
      s = a - r.length;
    return (
      g(e.NAME),
      o === e.COLON &&
        (r === 'module' || r === 'external' || r === 'event') &&
        (w(e.COLON), (r += ':' + T), g(e.NAME)),
      _({ type: u.NameExpression, name: r }, [s, l])
    );
  }
  function fu() {
    var r = [];
    for (r.push(H()); o === e.COMMA; ) w(e.COMMA), r.push(H());
    return r;
  }
  function au() {
    var r,
      s,
      h = a - T.length;
    return (
      (r = iu()),
      o === e.DOT_LT || o === e.LT
        ? (Z(),
          (s = fu()),
          g(e.GT),
          _({ type: u.TypeApplication, expression: r, applications: s }, [
            h,
            l,
          ]))
        : r
    );
  }
  function N() {
    return (
      w(e.COLON, 'ResultType should start with :'),
      o === e.NAME && T === 'void' ? (w(e.NAME), { type: u.VoidLiteral }) : q()
    );
  }
  function v() {
    for (var r = [], s = !1, h, f = !1, A, O = a - 3, L; o !== e.RPAREN; )
      o === e.REST && (w(e.REST), (f = !0)),
        (A = l),
        (h = q()),
        h.type === u.NameExpression &&
          o === e.COLON &&
          ((L = l - h.name.length),
          w(e.COLON),
          (h = _({ type: u.ParameterType, name: h.name, expression: q() }, [
            L,
            l,
          ]))),
        o === e.EQUAL
          ? (w(e.EQUAL),
            (h = _({ type: u.OptionalType, expression: h }, [A, l])),
            (s = !0))
          : s && R.throwError('unexpected token'),
        f && (h = _({ type: u.RestType, expression: h }, [O, l])),
        r.push(h),
        o !== e.RPAREN && g(e.COMMA);
    return r;
  }
  function P() {
    var r,
      s,
      h,
      f,
      A,
      O = a - T.length;
    return (
      R.assert(
        o === e.NAME && T === 'function',
        "FunctionType should start with 'function'",
      ),
      w(e.NAME),
      g(e.LPAREN),
      (r = !1),
      (h = []),
      (s = null),
      o !== e.RPAREN &&
        (o === e.NAME && (T === 'this' || T === 'new')
          ? ((r = T === 'new'),
            w(e.NAME),
            g(e.COLON),
            (s = au()),
            o === e.COMMA && (w(e.COMMA), (h = v())))
          : (h = v())),
      g(e.RPAREN),
      (f = null),
      o === e.COLON && (f = N()),
      (A = _({ type: u.FunctionType, params: h, result: f }, [O, l])),
      s && ((A.this = s), r && (A.new = !0)),
      A
    );
  }
  function j() {
    var r, s;
    switch (o) {
      case e.STAR:
        return w(e.STAR), _({ type: u.AllLiteral }, [l - 1, l]);
      case e.LPAREN:
        return $();
      case e.LBRACK:
        return b();
      case e.LBRACE:
        return M();
      case e.NAME:
        if (((s = a - T.length), T === 'null'))
          return w(e.NAME), _({ type: u.NullLiteral }, [s, l]);
        if (T === 'undefined')
          return w(e.NAME), _({ type: u.UndefinedLiteral }, [s, l]);
        if (T === 'true' || T === 'false')
          return (
            w(e.NAME),
            _({ type: u.BooleanLiteralType, value: T === 'true' }, [s, l])
          );
        if (((r = k.save()), T === 'function'))
          try {
            return P();
          } catch {
            r.restore();
          }
        return au();
      case e.STRING:
        return (
          Z(), _({ type: u.StringLiteralType, value: T }, [l - T.length - 2, l])
        );
      case e.NUMBER:
        return (
          Z(),
          _({ type: u.NumericLiteralType, value: T }, [l - String(T).length, l])
        );
      default:
        R.throwError('unexpected token');
    }
  }
  function q() {
    var r, s;
    return o === e.QUESTION
      ? ((s = a - 1),
        w(e.QUESTION),
        o === e.COMMA ||
        o === e.EQUAL ||
        o === e.RBRACE ||
        o === e.RPAREN ||
        o === e.PIPE ||
        o === e.EOF ||
        o === e.RBRACK ||
        o === e.GT
          ? _({ type: u.NullableLiteral }, [s, l])
          : _({ type: u.NullableType, expression: j(), prefix: !0 }, [s, l]))
      : o === e.BANG
      ? ((s = a - 1),
        w(e.BANG),
        _({ type: u.NonNullableType, expression: j(), prefix: !0 }, [s, l]))
      : ((s = l),
        (r = j()),
        o === e.BANG
          ? (w(e.BANG),
            _({ type: u.NonNullableType, expression: r, prefix: !1 }, [s, l]))
          : o === e.QUESTION
          ? (w(e.QUESTION),
            _({ type: u.NullableType, expression: r, prefix: !1 }, [s, l]))
          : o === e.LBRACK
          ? (w(e.LBRACK),
            g(
              e.RBRACK,
              'expected an array-style type declaration (' + T + '[])',
            ),
            _(
              {
                type: u.TypeApplication,
                expression: _({ type: u.NameExpression, name: 'Array' }, [
                  s,
                  l,
                ]),
                applications: [r],
              },
              [s, l],
            ))
          : r);
  }
  function H() {
    var r, s;
    if (((r = q()), o !== e.PIPE)) return r;
    for (s = [r], w(e.PIPE); s.push(q()), o === e.PIPE; ) w(e.PIPE);
    return _({ type: u.UnionType, elements: s }, [0, a]);
  }
  function d() {
    var r;
    return o === e.REST
      ? (w(e.REST), _({ type: u.RestType, expression: H() }, [0, a]))
      : ((r = H()),
        o === e.EQUAL
          ? (w(e.EQUAL), _({ type: u.OptionalType, expression: r }, [0, a]))
          : r);
  }
  function t(r, s) {
    var h;
    return (
      (n = r),
      (D = n.length),
      (a = 0),
      (l = 0),
      (J = s && s.range),
      (U = (s && s.startIndex) || 0),
      Z(),
      (h = H()),
      s && s.midstream
        ? { expression: h, index: l }
        : (o !== e.EOF && R.throwError('not reach to EOF'), h)
    );
  }
  function i(r, s) {
    var h;
    return (
      (n = r),
      (D = n.length),
      (a = 0),
      (l = 0),
      (J = s && s.range),
      (U = (s && s.startIndex) || 0),
      Z(),
      (h = d()),
      s && s.midstream
        ? { expression: h, index: l }
        : (o !== e.EOF && R.throwError('not reach to EOF'), h)
    );
  }
  function c(r, s, h) {
    var f, A, O;
    switch (r.type) {
      case u.NullableLiteral:
        f = '?';
        break;
      case u.AllLiteral:
        f = '*';
        break;
      case u.NullLiteral:
        f = 'null';
        break;
      case u.UndefinedLiteral:
        f = 'undefined';
        break;
      case u.VoidLiteral:
        f = 'void';
        break;
      case u.UnionType:
        for (h ? (f = '') : (f = '('), A = 0, O = r.elements.length; A < O; ++A)
          (f += c(r.elements[A], s)), A + 1 !== O && (f += s ? '|' : ' | ');
        h || (f += ')');
        break;
      case u.ArrayType:
        for (f = '[', A = 0, O = r.elements.length; A < O; ++A)
          (f += c(r.elements[A], s)), A + 1 !== O && (f += s ? ',' : ', ');
        f += ']';
        break;
      case u.RecordType:
        for (f = '{', A = 0, O = r.fields.length; A < O; ++A)
          (f += c(r.fields[A], s)), A + 1 !== O && (f += s ? ',' : ', ');
        f += '}';
        break;
      case u.FieldType:
        r.value ? (f = r.key + (s ? ':' : ': ') + c(r.value, s)) : (f = r.key);
        break;
      case u.FunctionType:
        for (
          f = s ? 'function(' : 'function (',
            r.this &&
              (r.new
                ? (f += s ? 'new:' : 'new: ')
                : (f += s ? 'this:' : 'this: '),
              (f += c(r.this, s)),
              r.params.length !== 0 && (f += s ? ',' : ', ')),
            A = 0,
            O = r.params.length;
          A < O;
          ++A
        )
          (f += c(r.params[A], s)), A + 1 !== O && (f += s ? ',' : ', ');
        (f += ')'), r.result && (f += (s ? ':' : ': ') + c(r.result, s));
        break;
      case u.ParameterType:
        f = r.name + (s ? ':' : ': ') + c(r.expression, s);
        break;
      case u.RestType:
        (f = '...'), r.expression && (f += c(r.expression, s));
        break;
      case u.NonNullableType:
        r.prefix
          ? (f = '!' + c(r.expression, s))
          : (f = c(r.expression, s) + '!');
        break;
      case u.OptionalType:
        f = c(r.expression, s) + '=';
        break;
      case u.NullableType:
        r.prefix
          ? (f = '?' + c(r.expression, s))
          : (f = c(r.expression, s) + '?');
        break;
      case u.NameExpression:
        f = r.name;
        break;
      case u.TypeApplication:
        for (
          f = c(r.expression, s) + '.<', A = 0, O = r.applications.length;
          A < O;
          ++A
        )
          (f += c(r.applications[A], s)), A + 1 !== O && (f += s ? ',' : ', ');
        f += '>';
        break;
      case u.StringLiteralType:
        f = '"' + r.value + '"';
        break;
      case u.NumericLiteralType:
        f = String(r.value);
        break;
      case u.BooleanLiteralType:
        f = String(r.value);
        break;
      default:
        R.throwError('Unknown type ' + r.type);
    }
    return f;
  }
  function y(r, s) {
    return s == null && (s = {}), c(r, s.compact, s.topLevel);
  }
  (Su.parseType = t),
    (Su.parseParamType = i),
    (Su.stringify = y),
    (Su.Syntax = u);
})();
(function (u) {
  (function () {
    var e, n, D, a, l;
    (a = wu), (e = Su), (n = hu);
    function o(g, $, b) {
      return g.slice($, b);
    }
    l = (function () {
      var g = Object.prototype.hasOwnProperty;
      return function (b, Q) {
        return g.call(b, Q);
      };
    })();
    function T(g) {
      var $ = {},
        b;
      for (b in g) g.hasOwnProperty(b) && ($[b] = g[b]);
      return $;
    }
    function S(g) {
      return (
        (g >= 97 && g <= 122) || (g >= 65 && g <= 90) || (g >= 48 && g <= 57)
      );
    }
    function R(g) {
      return g === 'param' || g === 'argument' || g === 'arg';
    }
    function U(g) {
      return g === 'return' || g === 'returns';
    }
    function J(g) {
      return g === 'property' || g === 'prop';
    }
    function B(g) {
      return (
        R(g) ||
        J(g) ||
        g === 'alias' ||
        g === 'this' ||
        g === 'mixes' ||
        g === 'requires'
      );
    }
    function k(g) {
      return B(g) || g === 'const' || g === 'constant';
    }
    function _(g) {
      return J(g) || R(g);
    }
    function E(g) {
      return J(g) || R(g);
    }
    function F(g) {
      return (
        R(g) ||
        U(g) ||
        g === 'define' ||
        g === 'enum' ||
        g === 'implements' ||
        g === 'this' ||
        g === 'type' ||
        g === 'typedef' ||
        J(g)
      );
    }
    function x(g) {
      return (
        F(g) ||
        g === 'throws' ||
        g === 'const' ||
        g === 'constant' ||
        g === 'namespace' ||
        g === 'member' ||
        g === 'var' ||
        g === 'module' ||
        g === 'constructor' ||
        g === 'class' ||
        g === 'extends' ||
        g === 'augments' ||
        g === 'public' ||
        g === 'private' ||
        g === 'protected'
      );
    }
    var G =
        '[ \\f\\t\\v\\u00a0\\u1680\\u180e\\u2000-\\u200a\\u202f\\u205f\\u3000\\ufeff]',
      K =
        '(' +
        G +
        '*(?:\\*' +
        G +
        `?)?)(.+|[\r
\u2028\u2029])`;
    function Z(g) {
      return g
        .replace(/^\/\*\*?/, '')
        .replace(/\*\/$/, '')
        .replace(new RegExp(K, 'g'), '$2')
        .replace(/\s*$/, '');
    }
    function w(g, $) {
      for (
        var b = g.replace(/^\/\*\*?/, ''), Q = 0, nu = new RegExp(K, 'g'), M;
        (M = nu.exec(b));

      )
        if (((Q += M[1].length), M.index + M[0].length > $ + Q))
          return $ + Q + g.length - b.length;
      return g.replace(/\*\/$/, '').replace(/\s*$/, '').length;
    }
    (function (g) {
      var $, b, Q, nu, M, iu, fu, au, N;
      function v() {
        var f = M.charCodeAt(b);
        return (
          (b += 1),
          a.code.isLineTerminator(f) &&
            !(f === 13 && M.charCodeAt(b) === 10) &&
            (Q += 1),
          String.fromCharCode(f)
        );
      }
      function P() {
        var f = '';
        for (v(); b < nu && S(M.charCodeAt(b)); ) f += v();
        return f;
      }
      function j() {
        var f,
          A,
          O = b;
        for (A = !1; O < nu; ) {
          if (
            ((f = M.charCodeAt(O)),
            a.code.isLineTerminator(f) &&
              !(f === 13 && M.charCodeAt(O + 1) === 10))
          )
            A = !0;
          else if (A) {
            if (f === 64) break;
            a.code.isWhiteSpace(f) || (A = !1);
          }
          O += 1;
        }
        return O;
      }
      function q(f, A, O) {
        for (var L, eu, z, tu, su = !1; b < A; )
          if (((L = M.charCodeAt(b)), a.code.isWhiteSpace(L))) v();
          else if (L === 123) {
            v();
            break;
          } else {
            su = !0;
            break;
          }
        if (su) return null;
        for (eu = 1, z = ''; b < A; )
          if (((L = M.charCodeAt(b)), a.code.isLineTerminator(L))) v();
          else {
            if (L === 125) {
              if (((eu -= 1), eu === 0)) {
                v();
                break;
              }
            } else L === 123 && (eu += 1);
            z === '' && (tu = b), (z += v());
          }
        return eu !== 0
          ? n.throwError('Braces are not balanced')
          : E(f)
          ? e.parseParamType(z, { startIndex: c(tu), range: O })
          : e.parseType(z, { startIndex: c(tu), range: O });
      }
      function H(f) {
        var A;
        if (
          !a.code.isIdentifierStartES5(M.charCodeAt(b)) &&
          !M[b].match(/[0-9]/)
        )
          return null;
        for (A = v(); b < f && a.code.isIdentifierPartES5(M.charCodeAt(b)); )
          A += v();
        return A;
      }
      function d(f) {
        for (
          ;
          b < f &&
          (a.code.isWhiteSpace(M.charCodeAt(b)) ||
            a.code.isLineTerminator(M.charCodeAt(b)));

        )
          v();
      }
      function t(f, A, O) {
        var L = '',
          eu,
          z;
        if ((d(f), b >= f)) return null;
        if (M.charCodeAt(b) === 91)
          if (A) (eu = !0), (L = v());
          else return null;
        if (((L += H(f)), O))
          for (
            M.charCodeAt(b) === 58 &&
              (L === 'module' || L === 'external' || L === 'event') &&
              ((L += v()), (L += H(f))),
              M.charCodeAt(b) === 91 &&
                M.charCodeAt(b + 1) === 93 &&
                ((L += v()), (L += v()));
            M.charCodeAt(b) === 46 ||
            M.charCodeAt(b) === 47 ||
            M.charCodeAt(b) === 35 ||
            M.charCodeAt(b) === 45 ||
            M.charCodeAt(b) === 126;

          )
            (L += v()), (L += H(f));
        if (eu) {
          if ((d(f), M.charCodeAt(b) === 61)) {
            (L += v()), d(f);
            for (var tu, su = 1; b < f; ) {
              if (
                ((tu = M.charCodeAt(b)),
                a.code.isWhiteSpace(tu) &&
                  (z || (d(f), (tu = M.charCodeAt(b)))),
                tu === 39 && (z ? z === "'" && (z = '') : (z = "'")),
                tu === 34 && (z ? z === '"' && (z = '') : (z = '"')),
                tu === 91)
              )
                su++;
              else if (tu === 93 && --su === 0) break;
              L += v();
            }
          }
          if ((d(f), b >= f || M.charCodeAt(b) !== 93)) return null;
          L += v();
        }
        return L;
      }
      function i() {
        for (; b < nu && M.charCodeAt(b) !== 64; ) v();
        return b >= nu ? !1 : (n.assert(M.charCodeAt(b) === 64), !0);
      }
      function c(f) {
        return M === iu ? f : w(iu, f);
      }
      function y(f, A) {
        (this._options = f),
          (this._title = A.toLowerCase()),
          (this._tag = { title: A, description: null }),
          this._options.lineNumbers && (this._tag.lineNumber = Q),
          (this._first = b - A.length - 1),
          (this._last = 0),
          (this._extra = {});
      }
      (y.prototype.addError = function (A) {
        var O = Array.prototype.slice.call(arguments, 1),
          L = A.replace(/%(\d)/g, function (eu, z) {
            return (
              n.assert(z < O.length, 'Message reference must be in range'), O[z]
            );
          });
        return (
          this._tag.errors || (this._tag.errors = []),
          N && n.throwError(L),
          this._tag.errors.push(L),
          fu
        );
      }),
        (y.prototype.parseType = function () {
          if (F(this._title))
            try {
              if (
                ((this._tag.type = q(
                  this._title,
                  this._last,
                  this._options.range,
                )),
                !this._tag.type &&
                  !R(this._title) &&
                  !U(this._title) &&
                  !this.addError('Missing or invalid tag type'))
              )
                return !1;
            } catch (f) {
              if (((this._tag.type = null), !this.addError(f.message)))
                return !1;
            }
          else if (x(this._title))
            try {
              this._tag.type = q(this._title, this._last, this._options.range);
            } catch {}
          return !0;
        }),
        (y.prototype._parseNamePath = function (f) {
          var A;
          return (
            (A = t(this._last, au && E(this._title), !0)),
            !A && !f && !this.addError('Missing or invalid tag name')
              ? !1
              : ((this._tag.name = A), !0)
          );
        }),
        (y.prototype.parseNamePath = function () {
          return this._parseNamePath(!1);
        }),
        (y.prototype.parseNamePathOptional = function () {
          return this._parseNamePath(!0);
        }),
        (y.prototype.parseName = function () {
          var f, A;
          if (k(this._title))
            if (
              ((this._tag.name = t(
                this._last,
                au && E(this._title),
                _(this._title),
              )),
              this._tag.name)
            )
              (A = this._tag.name),
                A.charAt(0) === '[' &&
                  A.charAt(A.length - 1) === ']' &&
                  ((f = A.substring(1, A.length - 1).split('=')),
                  f.length > 1 && (this._tag.default = f.slice(1).join('=')),
                  (this._tag.name = f[0]),
                  this._tag.type &&
                    this._tag.type.type !== 'OptionalType' &&
                    (this._tag.type = {
                      type: 'OptionalType',
                      expression: this._tag.type,
                    }));
            else {
              if (!B(this._title)) return !0;
              if (R(this._title) && this._tag.type && this._tag.type.name)
                (this._extra.name = this._tag.type),
                  (this._tag.name = this._tag.type.name),
                  (this._tag.type = null);
              else if (!this.addError('Missing or invalid tag name')) return !1;
            }
          return !0;
        }),
        (y.prototype.parseDescription = function () {
          var A = o(M, b, this._last).trim();
          return (
            A &&
              (/^-\s+/.test(A) && (A = A.substring(2)),
              (this._tag.description = A)),
            !0
          );
        }),
        (y.prototype.parseCaption = function () {
          var A = o(M, b, this._last).trim(),
            O = '<caption>',
            L = '</caption>',
            eu = A.indexOf(O),
            z = A.indexOf(L);
          return (
            eu >= 0 && z >= 0
              ? ((this._tag.caption = A.substring(eu + O.length, z).trim()),
                (this._tag.description = A.substring(z + L.length).trim()))
              : (this._tag.description = A),
            !0
          );
        }),
        (y.prototype.parseKind = function () {
          var A, O;
          return (
            (O = {
              class: !0,
              constant: !0,
              event: !0,
              external: !0,
              file: !0,
              function: !0,
              member: !0,
              mixin: !0,
              module: !0,
              namespace: !0,
              typedef: !0,
            }),
            (A = o(M, b, this._last).trim()),
            (this._tag.kind = A),
            !(!l(O, A) && !this.addError("Invalid kind name '%0'", A))
          );
        }),
        (y.prototype.parseAccess = function () {
          var A;
          return (
            (A = o(M, b, this._last).trim()),
            (this._tag.access = A),
            !(
              A !== 'private' &&
              A !== 'protected' &&
              A !== 'public' &&
              !this.addError("Invalid access name '%0'", A)
            )
          );
        }),
        (y.prototype.parseThis = function () {
          var A = o(M, b, this._last).trim();
          if (A && A.charAt(0) === '{') {
            var O = this.parseType();
            return (O && this._tag.type.type === 'NameExpression') ||
              this._tag.type.type === 'UnionType'
              ? ((this._tag.name = this._tag.type.name), !0)
              : this.addError('Invalid name for this');
          } else return this.parseNamePath();
        }),
        (y.prototype.parseVariation = function () {
          var A, O;
          return (
            (O = o(M, b, this._last).trim()),
            (A = parseFloat(O, 10)),
            (this._tag.variation = A),
            !(isNaN(A) && !this.addError("Invalid variation '%0'", O))
          );
        }),
        (y.prototype.ensureEnd = function () {
          var f = o(M, b, this._last).trim();
          return !(f && !this.addError("Unknown content '%0'", f));
        }),
        (y.prototype.epilogue = function () {
          var A;
          return (
            (A = this._tag.description),
            !(
              E(this._title) &&
              !this._tag.type &&
              A &&
              A.charAt(0) === '[' &&
              ((this._tag.type = this._extra.name),
              this._tag.name || (this._tag.name = void 0),
              !au && !this.addError('Missing or invalid tag name'))
            )
          );
        }),
        ($ = {
          access: ['parseAccess'],
          alias: ['parseNamePath', 'ensureEnd'],
          augments: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
          constructor: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
          class: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
          extends: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
          example: ['parseCaption'],
          deprecated: ['parseDescription'],
          global: ['ensureEnd'],
          inner: ['ensureEnd'],
          instance: ['ensureEnd'],
          kind: ['parseKind'],
          mixes: ['parseNamePath', 'ensureEnd'],
          mixin: ['parseNamePathOptional', 'ensureEnd'],
          member: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
          method: ['parseNamePathOptional', 'ensureEnd'],
          module: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
          func: ['parseNamePathOptional', 'ensureEnd'],
          function: ['parseNamePathOptional', 'ensureEnd'],
          var: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
          name: ['parseNamePath', 'ensureEnd'],
          namespace: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
          private: ['parseType', 'parseDescription'],
          protected: ['parseType', 'parseDescription'],
          public: ['parseType', 'parseDescription'],
          readonly: ['ensureEnd'],
          requires: ['parseNamePath', 'ensureEnd'],
          since: ['parseDescription'],
          static: ['ensureEnd'],
          summary: ['parseDescription'],
          this: ['parseThis', 'ensureEnd'],
          todo: ['parseDescription'],
          typedef: ['parseType', 'parseNamePathOptional'],
          variation: ['parseVariation'],
          version: ['parseDescription'],
        }),
        (y.prototype.parse = function () {
          var A, O, L, eu;
          if (!this._title && !this.addError('Missing or invalid title'))
            return null;
          for (
            this._last = j(this._title),
              this._options.range &&
                (this._tag.range = [
                  this._first,
                  M.slice(0, this._last).replace(/\s*$/, '').length,
                ].map(c)),
              l($, this._title)
                ? (L = $[this._title])
                : (L = [
                    'parseType',
                    'parseName',
                    'parseDescription',
                    'epilogue',
                  ]),
              A = 0,
              O = L.length;
            A < O;
            ++A
          )
            if (((eu = L[A]), !this[eu]())) return null;
          return this._tag;
        });
      function r(f) {
        var A, O, L;
        if (!i()) return null;
        for (A = P(), O = new y(f, A), L = O.parse(); b < O._last; ) v();
        return L;
      }
      function s(f) {
        var A = '',
          O,
          L;
        for (L = !0; b < nu && ((O = M.charCodeAt(b)), !(L && O === 64)); )
          a.code.isLineTerminator(O)
            ? (L = !0)
            : L && !a.code.isWhiteSpace(O) && (L = !1),
            (A += v());
        return f ? A : A.trim();
      }
      function h(f, A) {
        var O = [],
          L,
          eu,
          z,
          tu,
          su;
        if (
          (A === void 0 && (A = {}),
          typeof A.unwrap == 'boolean' && A.unwrap ? (M = Z(f)) : (M = f),
          (iu = f),
          A.tags)
        )
          if (Array.isArray(A.tags))
            for (z = {}, tu = 0, su = A.tags.length; tu < su; tu++)
              typeof A.tags[tu] == 'string'
                ? (z[A.tags[tu]] = !0)
                : n.throwError('Invalid "tags" parameter: ' + A.tags);
          else n.throwError('Invalid "tags" parameter: ' + A.tags);
        for (
          nu = M.length,
            b = 0,
            Q = 0,
            fu = A.recoverable,
            au = A.sloppy,
            N = A.strict,
            eu = s(A.preserveWhitespace);
          (L = r(A)), !!L;

        )
          (!z || z.hasOwnProperty(L.title)) && O.push(L);
        return { description: eu, tags: O };
      }
      g.parse = h;
    })((D = {})),
      (u.version = n.VERSION),
      (u.parse = D.parse),
      (u.parseType = e.parseType),
      (u.parseParamType = e.parseParamType),
      (u.unwrapComment = Z),
      (u.Syntax = T(e.Syntax)),
      (u.Error = n.DoctrineError),
      (u.type = {
        Syntax: u.Syntax,
        parseType: e.parseType,
        parseParamType: e.parseParamType,
        stringify: e.stringify,
      });
  })();
})(ye);
function Ur(u) {
  return u != null && u.includes('@');
}
function Vr(u, e) {
  var n;
  try {
    n = ye.parse(u, { tags: e, sloppy: !0 });
  } catch (D) {
    throw (console.error(D), new Error('Cannot parse JSDoc tags.'));
  }
  return n;
}
var Wr = { tags: ['param', 'arg', 'argument', 'returns', 'ignore'] },
  Gr = function (e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Wr;
    if (!Ur(e)) return { includesJsDoc: !1, ignore: !1 };
    var D = Vr(e, n.tags),
      a = $r(D);
    return a.ignore
      ? { includesJsDoc: !0, ignore: !0 }
      : {
          includesJsDoc: !0,
          ignore: !1,
          description: D.description,
          extractedTags: a,
        };
  };
function $r(u) {
  for (
    var e = { params: null, returns: null, ignore: !1 }, n = 0;
    n < u.tags.length;
    n += 1
  ) {
    var D = u.tags[n];
    if (D.title === 'ignore') {
      e.ignore = !0;
      break;
    } else
      switch (D.title) {
        case 'param':
        case 'arg':
        case 'argument': {
          var a = zr(D);
          a != null && (e.params == null && (e.params = []), e.params.push(a));
          break;
        }
        case 'returns': {
          var l = Jr(D);
          l != null && (e.returns = l);
          break;
        }
      }
  }
  return e;
}
function zr(u) {
  var e = u.name;
  return e != null && e !== 'null-null'
    ? {
        name: u.name,
        type: u.type,
        description: u.description,
        getPrettyName: function () {
          return e.includes('null')
            ? e.replace('-null', '').replace('.null', '')
            : u.name;
        },
        getTypeName: function () {
          return u.type != null ? gu(u.type) : null;
        },
      }
    : null;
}
function Jr(u) {
  return u.type != null
    ? {
        type: u.type,
        description: u.description,
        getTypeName: function () {
          return gu(u.type);
        },
      }
    : null;
}
function gu(u) {
  if (u.type === 'NameExpression') return u.name;
  if (u.type === 'RecordType') {
    var e = u.fields.map(function (a) {
      if (a.value != null) {
        var l = gu(a.value);
        return ''.concat(a.key, ': ').concat(l);
      }
      return a.key;
    });
    return '({'.concat(e.join(', '), '})');
  }
  if (u.type === 'UnionType') {
    var n = u.elements.map(gu);
    return '('.concat(n.join('|'), ')');
  }
  if (u.type === 'ArrayType') return '[]';
  if (
    u.type === 'TypeApplication' &&
    u.expression != null &&
    u.expression.name === 'Array'
  ) {
    var D = gu(u.applications[0]);
    return ''.concat(D, '[]');
  }
  return u.type === 'NullableType' ||
    u.type === 'NonNullableType' ||
    u.type === 'OptionalType'
    ? gu(u.expression)
    : u.type === 'AllLiteral'
    ? 'any'
    : null;
}
var Hr = 90,
  Yr = 50;
function ve(u) {
  return u.length > Hr;
}
function Qr(u) {
  return u.length > Yr;
}
function ou(u, e) {
  return u === e ? { summary: u } : { summary: u, detail: e };
}
var xu;
(function (u) {
  (u.UNION = 'union'), (u.SIGNATURE = 'signature');
})(xu || (xu = {}));
function be(u) {
  var e = u.name,
    n = u.value,
    D = u.elements,
    a = u.raw;
  return n ?? (D != null ? D.map(be).join(' | ') : a ?? e);
}
function Kr(u) {
  var e = u.name,
    n = u.raw,
    D = u.elements;
  return D != null
    ? ou(D.map(be).join(' | '))
    : n != null
    ? ou(n.replace(/^\|\s*/, ''))
    : ou(e);
}
function Xr(u) {
  var e = u.type,
    n = u.raw;
  return n != null ? ou(n) : ou(e);
}
function Zr(u) {
  var e = u.type,
    n = u.raw;
  return n != null ? (ve(n) ? ou(e, n) : ou(n)) : ou(e);
}
function ut(u) {
  var e = u.type;
  return e === 'object' ? Zr(u) : Xr(u);
}
function et(u) {
  var e = u.name,
    n = u.raw;
  return n != null ? (ve(n) ? ou(e, n) : ou(n)) : ou(e);
}
function rt(u) {
  if (u == null) return null;
  switch (u.name) {
    case xu.UNION:
      return Kr(u);
    case xu.SIGNATURE:
      return ut(u);
    default:
      return et(u);
  }
}
function tt(u, e) {
  if (u != null) {
    var n = u.value;
    if (!Qu(n)) return Qr(n) ? ou(e.name, n) : ou(n);
  }
  return null;
}
var nt = function (e, n) {
  var D = n.flowType,
    a = n.description,
    l = n.required,
    o = n.defaultValue;
  return {
    name: e,
    type: rt(D),
    required: l,
    description: a,
    defaultValue: tt(o, D),
  };
};
function it(u) {
  var e = u.tsType,
    n = u.required;
  return e == null ? null : ou(n ? e.name : e.name.replace(' | undefined', ''));
}
function at(u) {
  var e = u.defaultValue;
  if (e != null) {
    var n = e.value;
    if (!Qu(n)) return ou(n);
  }
  return null;
}
var ot = function (e, n) {
  var D = n.description,
    a = n.required;
  return {
    name: e,
    type: it(n),
    required: a,
    description: D,
    defaultValue: at(n),
  };
};
function st(u) {
  return u != null ? ou(u.name) : null;
}
function ct(u) {
  var e = u.computed,
    n = u.func;
  return typeof e > 'u' && typeof n > 'u';
}
function ft(u) {
  return u
    ? u.name === 'string'
      ? !0
      : u.name === 'enum'
      ? Array.isArray(u.value) &&
        u.value.every(function (e) {
          var n = e.value;
          return (
            typeof n == 'string' && n[0] === '"' && n[n.length - 1] === '"'
          );
        })
      : !1
    : !1;
}
function Dt(u, e) {
  if (u != null) {
    var n = u.value;
    if (!Qu(n)) return ct(u) && ft(e) ? ou(JSON.stringify(n)) : ou(n);
  }
  return null;
}
function Se(u, e, n) {
  var D = n.description,
    a = n.required,
    l = n.defaultValue;
  return {
    name: u,
    type: st(e),
    required: a,
    description: D,
    defaultValue: Dt(l, e),
  };
}
function Ru(u, e) {
  if (e.includesJsDoc) {
    var n = e.description,
      D = e.extractedTags;
    n != null && (u.description = e.description);
    var a = D.params != null,
      l = D.returns != null && D.returns.type != null;
    (a || l) &&
      (u.jsDocTags = {
        params:
          a &&
          D.params.map(function (o) {
            return { name: o.getPrettyName(), description: o.description };
          }),
        returns: l && { description: D.returns.description },
      });
  }
  return u;
}
var lt = function (e, n, D) {
    var a = Se(e, n.type, n);
    return (a.sbType = Nu(n)), Ru(a, D);
  },
  At = function (e, n, D) {
    var a = ot(e, n);
    return (a.sbType = Nu(n)), Ru(a, D);
  },
  pt = function (e, n, D) {
    var a = nt(e, n);
    return (a.sbType = Nu(n)), Ru(a, D);
  },
  Et = function (e, n, D) {
    var a = Se(e, { name: 'unknown' }, n);
    return Ru(a, D);
  },
  we = function (e) {
    switch (e) {
      case Eu.JAVASCRIPT:
        return lt;
      case Eu.TYPESCRIPT:
        return At;
      case Eu.FLOW:
        return pt;
      default:
        return Et;
    }
  },
  Oe = function (e) {
    return e.type != null
      ? Eu.JAVASCRIPT
      : e.flowType != null
      ? Eu.FLOW
      : e.tsType != null
      ? Eu.TYPESCRIPT
      : Eu.UNKNOWN;
  },
  Ft = function (e) {
    var n = Oe(e[0]),
      D = we(n);
    return e.map(function (a) {
      var l,
        o = a;
      return (
        (l = a.type) !== null &&
          l !== void 0 &&
          l.elements &&
          (o = Object.assign({}, a, {
            type: Object.assign({}, a.type, { value: a.type.elements }),
          })),
        Te(o.name, o, n, D)
      );
    });
  },
  Ct = function (e) {
    var n = Object.keys(e),
      D = Oe(e[n[0]]),
      a = we(D);
    return n
      .map(function (l) {
        var o = e[l];
        return o != null ? Te(l, o, D, a) : null;
      })
      .filter(Boolean);
  },
  yt = function (e, n) {
    var D = cr(e, n);
    return sr(D) ? (Array.isArray(D) ? Ft(D) : Ct(D)) : [];
  };
function Te(u, e, n, D) {
  var a = Gr(e.description),
    l = a.includesJsDoc && a.ignore;
  if (!l) {
    var o = D(u, e, a);
    return {
      propDef: o,
      jsDocTags: a.extractedTags,
      docgenInfo: e,
      typeSystem: n,
    };
  }
  return null;
}
function dt(u) {
  return u != null && fr(u);
}
var Bt = function (e) {
    var n = e.component,
      D = e.argTypes,
      a = e.parameters.docs,
      l = a === void 0 ? {} : a,
      o = l.extractArgTypes,
      T = o && n ? o(n) : {},
      S = T ? Me(T, D) : D;
    return S;
  },
  ht = ['props', 'events', 'slots'],
  gt = function (e) {
    if (!Ku(e)) return null;
    var n = {};
    return (
      ht.forEach(function (D) {
        var a = yt(e, D);
        a.forEach(function (l) {
          var o = l.propDef,
            T = l.docgenInfo,
            S = l.jsDocTags,
            R = o.name,
            U = o.type,
            J = o.description,
            B = o.defaultValue,
            k = o.required,
            _ = D === 'props' ? Nu(T) : { name: 'void' };
          n[R] = {
            name: R,
            description: J,
            type: Object.assign({ required: k }, _),
            table: { type: U, jsDocTags: S, defaultValue: B, category: D },
          };
        });
      }),
      n
    );
  };
function Wu(u, e) {
  return St(u) || bt(u, e) || vt(u, e) || mt();
}
function mt() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function vt(u, e) {
  if (u) {
    if (typeof u == 'string') return fe(u, e);
    var n = Object.prototype.toString.call(u).slice(8, -1);
    if (
      (n === 'Object' && u.constructor && (n = u.constructor.name),
      n === 'Map' || n === 'Set')
    )
      return Array.from(u);
    if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return fe(u, e);
  }
}
function fe(u, e) {
  (e == null || e > u.length) && (e = u.length);
  for (var n = 0, D = new Array(e); n < e; n++) D[n] = u[n];
  return D;
}
function bt(u, e) {
  var n =
    u == null
      ? null
      : (typeof Symbol < 'u' && u[Symbol.iterator]) || u['@@iterator'];
  if (n != null) {
    var D = [],
      a = !0,
      l = !1,
      o,
      T;
    try {
      for (
        n = n.call(u);
        !(a = (o = n.next()).done) && (D.push(o.value), !(e && D.length === e));
        a = !0
      );
    } catch (S) {
      (l = !0), (T = S);
    } finally {
      try {
        !a && n.return != null && n.return();
      } finally {
        if (l) throw T;
      }
    }
    return D;
  }
}
function St(u) {
  if (Array.isArray(u)) return u;
}
function wt(u) {
  var e = null;
  Array.isArray(u) ? (e = u) : u.keys && (e = [u]);
  var n = new Map();
  if (e)
    e.forEach(function (a) {
      a.keys().forEach(function (l) {
        try {
          var o = a(l);
          n.set(typeof a.resolve == 'function' ? a.resolve(l) : l, o);
        } catch (S) {
          var T =
            S.message && S.stack
              ? ''
                  .concat(
                    S.message,
                    `
 `,
                  )
                  .concat(S.stack)
              : S.toString();
          Zu.error('Unexpected error while loading '.concat(l, ': ').concat(T));
        }
      });
    });
  else {
    var D = u();
    Array.isArray(D) &&
    D.every(function (a) {
      return a.default != null;
    })
      ? (n = new Map(
          D.map(function (a, l) {
            return ['exports-map-'.concat(l), a];
          }),
        ))
      : D &&
        Zu.warn(
          "Loader function passed to 'configure' should return void or an array of module exports that all contain a 'default' export. Received: ".concat(
            JSON.stringify(D),
          ),
        );
  }
  return n;
}
function Ot(u, e) {
  var n,
    D,
    a,
    l =
      (e == null ||
      (n = e.hot) === null ||
      n === void 0 ||
      (D = n.data) === null ||
      D === void 0
        ? void 0
        : D.lastExportsMap) || new Map();
  e != null &&
    (a = e.hot) !== null &&
    a !== void 0 &&
    a.dispose &&
    (e.hot.accept(),
    e.hot.dispose(function (R) {
      R.lastExportsMap = l;
    }));
  var o = wt(u),
    T = new Map();
  Array.from(o.entries())
    .filter(function (R) {
      var U = Wu(R, 2),
        J = U[1];
      return !!J.default;
    })
    .filter(function (R) {
      var U = Wu(R, 2),
        J = U[0],
        B = U[1];
      return l.get(J) !== B;
    })
    .forEach(function (R) {
      var U = Wu(R, 2),
        J = U[0],
        B = U[1];
      return T.set(J, B);
    });
  var S = new Map();
  return (
    Array.from(l.keys())
      .filter(function (R) {
        return !o.has(R);
      })
      .forEach(function (R) {
        return S.set(R, l.get(R));
      }),
    (l = o),
    { added: T, removed: S }
  );
}
function De(u, e) {
  return Rt(u) || Nt(u, e) || xt(u, e) || Tt();
}
function Tt() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function xt(u, e) {
  if (u) {
    if (typeof u == 'string') return le(u, e);
    var n = Object.prototype.toString.call(u).slice(8, -1);
    if (
      (n === 'Object' && u.constructor && (n = u.constructor.name),
      n === 'Map' || n === 'Set')
    )
      return Array.from(u);
    if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return le(u, e);
  }
}
function le(u, e) {
  (e == null || e > u.length) && (e = u.length);
  for (var n = 0, D = new Array(e); n < e; n++) D[n] = u[n];
  return D;
}
function Nt(u, e) {
  var n =
    u == null
      ? null
      : (typeof Symbol < 'u' && u[Symbol.iterator]) || u['@@iterator'];
  if (n != null) {
    var D = [],
      a = !0,
      l = !1,
      o,
      T;
    try {
      for (
        n = n.call(u);
        !(a = (o = n.next()).done) && (D.push(o.value), !(e && D.length === e));
        a = !0
      );
    } catch (S) {
      (l = !0), (T = S);
    } finally {
      try {
        !a && n.return != null && n.return();
      } finally {
        if (l) throw T;
      }
    }
    return D;
  }
}
function Rt(u) {
  if (Array.isArray(u)) return u;
}
var Cu = Yu.window,
  Gu = Yu.FEATURES,
  _t = qe(function () {},
  '`configure()` is deprecated and will be removed in Storybook 7.0. \nPlease use the `stories` field of `main.js` to load stories.\nRead more at https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#deprecated-configure'),
  Au = function (e) {
    return function () {
      throw new Error(
        '@storybook/client-api:'.concat(e, ' was removed in storyStoreV7.'),
      );
    };
  };
function jt(u) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = e.decorateStory,
    D = e.render;
  if ((Cu && (Cu.IS_STORYBOOK = !0), Gu != null && Gu.storyStoreV7))
    return {
      forceReRender: Au('forceReRender'),
      getStorybook: Au('getStorybook'),
      configure: Au('configure'),
      clientApi: {
        addDecorator: Au('clientApi.addDecorator'),
        addParameters: Au('clientApi.addParameters'),
        clearDecorators: Au('clientApi.clearDecorators'),
        addLoader: Au('clientApi.addLoader'),
        setAddon: Au('clientApi.setAddon'),
        getStorybook: Au('clientApi.getStorybook'),
        storiesOf: Au('clientApi.storiesOf'),
        raw: Au('raw'),
      },
    };
  var a = Ue({ page: 'preview' });
  Ve.setChannel(a);
  var l = new We(),
    o = new Ge(),
    T = !1,
    S = function (J) {
      return l.importFn(J);
    };
  function R() {
    var U = l.getStoryIndex();
    o.onStoriesChanged({ storyIndex: U, importFn: S });
  }
  return (
    (l.onImportFnChanged = R),
    (l.storyStore = o.storyStore),
    Cu &&
      ((Cu.__STORYBOOK_CLIENT_API__ = l),
      (Cu.__STORYBOOK_ADDONS_CHANNEL__ = a),
      (Cu.__STORYBOOK_PREVIEW__ = o),
      (Cu.__STORYBOOK_STORY_STORE__ = o.storyStore)),
    {
      forceReRender: function () {
        return a.emit($e.FORCE_RE_RENDER);
      },
      getStorybook: function () {
        return [];
      },
      raw: function () {},
      clientApi: l,
      configure: function (J, B, k) {
        var _ =
          arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0;
        _ && _t(), l.addParameters({ framework: J });
        var E = function () {
          var x = Ot(B, k),
            G = x.added,
            K = x.removed;
          return (
            Array.from(G.entries()).forEach(function (Z) {
              var w = De(Z, 2),
                g = w[0],
                $ = w[1];
              return l.facade.addStoriesFromExports(g, $);
            }),
            Array.from(K.entries()).forEach(function (Z) {
              var w = De(Z, 1),
                g = w[0];
              return l.facade.clearFilenameExports(g);
            }),
            Object.assign({ render: D }, l.facade.projectAnnotations, {
              renderToDOM: u,
              applyDecorators: n,
            })
          );
        };
        T
          ? (E(), R())
          : (o.initialize({
              getStoryIndex: function () {
                return l.getStoryIndex();
              },
              importFn: S,
              getProjectAnnotations: E,
            }),
            (T = !0));
      },
    }
  );
}
var xe = Yu.window;
xe.STORYBOOK_REACT_CLASSES = {};
xe.STORYBOOK_ENV = 'vue3';
var yu = jt(Ye, { decorateStory: Qe, render: Ke });
yu.clientApi.addDecorator;
yu.clientApi.addParameters;
yu.clientApi.clearDecorators;
yu.clientApi.setAddon;
yu.forceReRender;
yu.clientApi.getStorybook;
yu.clientApi.raw;
var Pt = Xe;
module && module.hot && module.hot.decline && module.hot.decline();
var Ne = He,
  It = Ne.render,
  kt = Ne.h,
  Lt = function (e, n) {
    var D = n.args,
      a = e(),
      l = kt(a, D);
    return (
      (l.appContext = Pt._context),
      Je.createElement('div', {
        ref: function (T) {
          return T ? It(l, T) : null;
        },
      })
    );
  },
  Jt = {
    docs: {
      inlineStories: !0,
      prepareForInline: Lt,
      extractArgTypes: gt,
      extractComponentDescription: dt,
    },
  },
  Ht = [Bt];
export { Ht as argTypesEnhancers, Jt as parameters };
//# sourceMappingURL=config-d1f50fa5.js.map
