import {
  _ as _getNative,
  k as keys_1,
  a as _Stack,
  b as _baseIsEqual,
  i as isObject_1,
  c as isArray_1,
  d as isSymbol_1,
  e as _MapCache,
  t as toString_1,
  f as isArguments_1,
  g as _isIndex,
  h as isLength_1,
  j as eq_1,
  l as _Symbol,
  m as _arrayPush,
  n as _overArg,
  o as _baseGetTag,
  p as isObjectLike_1,
  q as dist,
  r as _getSymbols,
  s as stubArray_1,
  u as _isPrototype,
  v as _arrayLikeKeys,
  w as isArrayLike_1,
  x as _baseGetAllKeys,
  y as _arrayMap,
  z as lib$1,
  A as __vitePreload,
  B as shams$1,
  C as callBound$1,
  D as hasSymbols$2,
} from './index-3121cc12.js';
import {
  o as once,
  c as commonjsGlobal,
  l as logger,
  w as window_1,
  m as memoize$2,
  p as pretty,
} from './index-73814c06.js';
(function () {
  const r = document.createElement('link').relList;
  if (r && r.supports && r.supports('modulepreload')) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) n(o);
  new MutationObserver((o) => {
    for (const s of o)
      if (s.type === 'childList')
        for (const a of s.addedNodes)
          a.tagName === 'LINK' && a.rel === 'modulepreload' && n(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(o) {
    const s = {};
    return (
      o.integrity && (s.integrity = o.integrity),
      o.referrerpolicy && (s.referrerPolicy = o.referrerpolicy),
      o.crossorigin === 'use-credentials'
        ? (s.credentials = 'include')
        : o.crossorigin === 'anonymous'
        ? (s.credentials = 'omit')
        : (s.credentials = 'same-origin'),
      s
    );
  }
  function n(o) {
    if (o.ep) return;
    o.ep = !0;
    const s = t(o);
    fetch(o.href, s);
  }
})();
var getNative = _getNative,
  defineProperty$2 = (function () {
    try {
      var e = getNative(Object, 'defineProperty');
      return e({}, '', {}), e;
    } catch {}
  })(),
  _defineProperty$5 = defineProperty$2,
  defineProperty$1 = _defineProperty$5;
function baseAssignValue$2(e, r, t) {
  r == '__proto__' && defineProperty$1
    ? defineProperty$1(e, r, {
        configurable: !0,
        enumerable: !0,
        value: t,
        writable: !0,
      })
    : (e[r] = t);
}
var _baseAssignValue = baseAssignValue$2;
function createBaseFor$1(e) {
  return function (r, t, n) {
    for (var o = -1, s = Object(r), a = n(r), i = a.length; i--; ) {
      var c = a[e ? i : ++o];
      if (t(s[c], c, s) === !1) break;
    }
    return r;
  };
}
var _createBaseFor = createBaseFor$1,
  createBaseFor = _createBaseFor,
  baseFor$1 = createBaseFor(),
  _baseFor = baseFor$1,
  baseFor = _baseFor,
  keys$1 = keys_1;
function baseForOwn$1(e, r) {
  return e && baseFor(e, r, keys$1);
}
var _baseForOwn = baseForOwn$1,
  Stack = _Stack,
  baseIsEqual$1 = _baseIsEqual,
  COMPARE_PARTIAL_FLAG$1 = 1,
  COMPARE_UNORDERED_FLAG$1 = 2;
function baseIsMatch$1(e, r, t, n) {
  var o = t.length,
    s = o,
    a = !n;
  if (e == null) return !s;
  for (e = Object(e); o--; ) {
    var i = t[o];
    if (a && i[2] ? i[1] !== e[i[0]] : !(i[0] in e)) return !1;
  }
  for (; ++o < s; ) {
    i = t[o];
    var c = i[0],
      l = e[c],
      u = i[1];
    if (a && i[2]) {
      if (l === void 0 && !(c in e)) return !1;
    } else {
      var p = new Stack();
      if (n) var d = n(l, u, c, e, r, p);
      if (
        !(d === void 0
          ? baseIsEqual$1(
              u,
              l,
              COMPARE_PARTIAL_FLAG$1 | COMPARE_UNORDERED_FLAG$1,
              n,
              p,
            )
          : d)
      )
        return !1;
    }
  }
  return !0;
}
var _baseIsMatch = baseIsMatch$1,
  isObject$5 = isObject_1;
function isStrictComparable$2(e) {
  return e === e && !isObject$5(e);
}
var _isStrictComparable = isStrictComparable$2,
  isStrictComparable$1 = _isStrictComparable,
  keys = keys_1;
function getMatchData$1(e) {
  for (var r = keys(e), t = r.length; t--; ) {
    var n = r[t],
      o = e[n];
    r[t] = [n, o, isStrictComparable$1(o)];
  }
  return r;
}
var _getMatchData = getMatchData$1;
function matchesStrictComparable$2(e, r) {
  return function (t) {
    return t == null ? !1 : t[e] === r && (r !== void 0 || e in Object(t));
  };
}
var _matchesStrictComparable = matchesStrictComparable$2,
  baseIsMatch = _baseIsMatch,
  getMatchData = _getMatchData,
  matchesStrictComparable$1 = _matchesStrictComparable;
function baseMatches$1(e) {
  var r = getMatchData(e);
  return r.length == 1 && r[0][2]
    ? matchesStrictComparable$1(r[0][0], r[0][1])
    : function (t) {
        return t === e || baseIsMatch(t, e, r);
      };
}
var _baseMatches = baseMatches$1,
  isArray$4 = isArray_1,
  isSymbol$2 = isSymbol_1,
  reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  reIsPlainProp = /^\w*$/;
function isKey$3(e, r) {
  if (isArray$4(e)) return !1;
  var t = typeof e;
  return t == 'number' ||
    t == 'symbol' ||
    t == 'boolean' ||
    e == null ||
    isSymbol$2(e)
    ? !0
    : reIsPlainProp.test(e) ||
        !reIsDeepProp.test(e) ||
        (r != null && e in Object(r));
}
var _isKey = isKey$3,
  MapCache = _MapCache,
  FUNC_ERROR_TEXT = 'Expected a function';
function memoize$1(e, r) {
  if (typeof e != 'function' || (r != null && typeof r != 'function'))
    throw new TypeError(FUNC_ERROR_TEXT);
  var t = function () {
    var n = arguments,
      o = r ? r.apply(this, n) : n[0],
      s = t.cache;
    if (s.has(o)) return s.get(o);
    var a = e.apply(this, n);
    return (t.cache = s.set(o, a) || s), a;
  };
  return (t.cache = new (memoize$1.Cache || MapCache)()), t;
}
memoize$1.Cache = MapCache;
var memoize_1 = memoize$1,
  memoize = memoize_1,
  MAX_MEMOIZE_SIZE = 500;
function memoizeCapped$1(e) {
  var r = memoize(e, function (n) {
      return t.size === MAX_MEMOIZE_SIZE && t.clear(), n;
    }),
    t = r.cache;
  return r;
}
var _memoizeCapped = memoizeCapped$1,
  memoizeCapped = _memoizeCapped,
  rePropName =
    /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  reEscapeChar = /\\(\\)?/g,
  stringToPath$1 = memoizeCapped(function (e) {
    var r = [];
    return (
      e.charCodeAt(0) === 46 && r.push(''),
      e.replace(rePropName, function (t, n, o, s) {
        r.push(o ? s.replace(reEscapeChar, '$1') : n || t);
      }),
      r
    );
  }),
  _stringToPath = stringToPath$1,
  isArray$3 = isArray_1,
  isKey$2 = _isKey,
  stringToPath = _stringToPath,
  toString$1 = toString_1;
function castPath$4(e, r) {
  return isArray$3(e) ? e : isKey$2(e, r) ? [e] : stringToPath(toString$1(e));
}
var _castPath = castPath$4,
  isSymbol$1 = isSymbol_1,
  INFINITY = 1 / 0;
function toKey$5(e) {
  if (typeof e == 'string' || isSymbol$1(e)) return e;
  var r = e + '';
  return r == '0' && 1 / e == -INFINITY ? '-0' : r;
}
var _toKey = toKey$5,
  castPath$3 = _castPath,
  toKey$4 = _toKey;
function baseGet$3(e, r) {
  r = castPath$3(r, e);
  for (var t = 0, n = r.length; e != null && t < n; ) e = e[toKey$4(r[t++])];
  return t && t == n ? e : void 0;
}
var _baseGet = baseGet$3,
  baseGet$2 = _baseGet;
function get$1(e, r, t) {
  var n = e == null ? void 0 : baseGet$2(e, r);
  return n === void 0 ? t : n;
}
var get_1 = get$1;
function baseHasIn$1(e, r) {
  return e != null && r in Object(e);
}
var _baseHasIn = baseHasIn$1,
  castPath$2 = _castPath,
  isArguments$1 = isArguments_1,
  isArray$2 = isArray_1,
  isIndex$1 = _isIndex,
  isLength = isLength_1,
  toKey$3 = _toKey;
function hasPath$1(e, r, t) {
  r = castPath$2(r, e);
  for (var n = -1, o = r.length, s = !1; ++n < o; ) {
    var a = toKey$3(r[n]);
    if (!(s = e != null && t(e, a))) break;
    e = e[a];
  }
  return s || ++n != o
    ? s
    : ((o = e == null ? 0 : e.length),
      !!o &&
        isLength(o) &&
        isIndex$1(a, o) &&
        (isArray$2(e) || isArguments$1(e)));
}
var _hasPath = hasPath$1,
  baseHasIn = _baseHasIn,
  hasPath = _hasPath;
function hasIn$2(e, r) {
  return e != null && hasPath(e, r, baseHasIn);
}
var hasIn_1 = hasIn$2,
  baseIsEqual = _baseIsEqual,
  get = get_1,
  hasIn$1 = hasIn_1,
  isKey$1 = _isKey,
  isStrictComparable = _isStrictComparable,
  matchesStrictComparable = _matchesStrictComparable,
  toKey$2 = _toKey,
  COMPARE_PARTIAL_FLAG = 1,
  COMPARE_UNORDERED_FLAG = 2;
function baseMatchesProperty$1(e, r) {
  return isKey$1(e) && isStrictComparable(r)
    ? matchesStrictComparable(toKey$2(e), r)
    : function (t) {
        var n = get(t, e);
        return n === void 0 && n === r
          ? hasIn$1(t, e)
          : baseIsEqual(r, n, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
      };
}
var _baseMatchesProperty = baseMatchesProperty$1;
function identity$2(e) {
  return e;
}
var identity_1 = identity$2;
function baseProperty$1(e) {
  return function (r) {
    return r == null ? void 0 : r[e];
  };
}
var _baseProperty = baseProperty$1,
  baseGet$1 = _baseGet;
function basePropertyDeep$1(e) {
  return function (r) {
    return baseGet$1(r, e);
  };
}
var _basePropertyDeep = basePropertyDeep$1,
  baseProperty = _baseProperty,
  basePropertyDeep = _basePropertyDeep,
  isKey = _isKey,
  toKey$1 = _toKey;
function property$1(e) {
  return isKey(e) ? baseProperty(toKey$1(e)) : basePropertyDeep(e);
}
var property_1 = property$1,
  baseMatches = _baseMatches,
  baseMatchesProperty = _baseMatchesProperty,
  identity$1 = identity_1,
  isArray$1 = isArray_1,
  property = property_1;
function baseIteratee$2(e) {
  return typeof e == 'function'
    ? e
    : e == null
    ? identity$1
    : typeof e == 'object'
    ? isArray$1(e)
      ? baseMatchesProperty(e[0], e[1])
      : baseMatches(e)
    : property(e);
}
var _baseIteratee = baseIteratee$2,
  baseAssignValue$1 = _baseAssignValue,
  baseForOwn = _baseForOwn,
  baseIteratee$1 = _baseIteratee;
function mapValues(e, r) {
  var t = {};
  return (
    (r = baseIteratee$1(r)),
    baseForOwn(e, function (n, o, s) {
      baseAssignValue$1(t, o, r(n, o, s));
    }),
    t
  );
}
var mapValues_1 = mapValues,
  baseAssignValue = _baseAssignValue,
  eq = eq_1,
  objectProto$2 = Object.prototype,
  hasOwnProperty$2 = objectProto$2.hasOwnProperty;
function assignValue$1(e, r, t) {
  var n = e[r];
  (!(hasOwnProperty$2.call(e, r) && eq(n, t)) || (t === void 0 && !(r in e))) &&
    baseAssignValue(e, r, t);
}
var _assignValue = assignValue$1,
  assignValue = _assignValue,
  castPath$1 = _castPath,
  isIndex = _isIndex,
  isObject$4 = isObject_1,
  toKey = _toKey;
function baseSet$1(e, r, t, n) {
  if (!isObject$4(e)) return e;
  r = castPath$1(r, e);
  for (var o = -1, s = r.length, a = s - 1, i = e; i != null && ++o < s; ) {
    var c = toKey(r[o]),
      l = t;
    if (c === '__proto__' || c === 'constructor' || c === 'prototype') return e;
    if (o != a) {
      var u = i[c];
      (l = n ? n(u, c, i) : void 0),
        l === void 0 && (l = isObject$4(u) ? u : isIndex(r[o + 1]) ? [] : {});
    }
    assignValue(i, c, l), (i = i[c]);
  }
  return e;
}
var _baseSet = baseSet$1,
  baseGet = _baseGet,
  baseSet = _baseSet,
  castPath = _castPath;
function basePickBy$2(e, r, t) {
  for (var n = -1, o = r.length, s = {}; ++n < o; ) {
    var a = r[n],
      i = baseGet(e, a);
    t(i, a) && baseSet(s, castPath(a, e), i);
  }
  return s;
}
var _basePickBy = basePickBy$2,
  basePickBy$1 = _basePickBy,
  hasIn = hasIn_1;
function basePick$1(e, r) {
  return basePickBy$1(e, r, function (t, n) {
    return hasIn(e, n);
  });
}
var _basePick = basePick$1,
  Symbol$1 = _Symbol,
  isArguments = isArguments_1,
  isArray = isArray_1,
  spreadableSymbol = Symbol$1 ? Symbol$1.isConcatSpreadable : void 0;
function isFlattenable$1(e) {
  return (
    isArray(e) ||
    isArguments(e) ||
    !!(spreadableSymbol && e && e[spreadableSymbol])
  );
}
var _isFlattenable = isFlattenable$1,
  arrayPush$1 = _arrayPush,
  isFlattenable = _isFlattenable;
function baseFlatten$1(e, r, t, n, o) {
  var s = -1,
    a = e.length;
  for (t || (t = isFlattenable), o || (o = []); ++s < a; ) {
    var i = e[s];
    r > 0 && t(i)
      ? r > 1
        ? baseFlatten$1(i, r - 1, t, n, o)
        : arrayPush$1(o, i)
      : n || (o[o.length] = i);
  }
  return o;
}
var _baseFlatten = baseFlatten$1,
  baseFlatten = _baseFlatten;
function flatten$1(e) {
  var r = e == null ? 0 : e.length;
  return r ? baseFlatten(e, 1) : [];
}
var flatten_1 = flatten$1;
function apply$1(e, r, t) {
  switch (t.length) {
    case 0:
      return e.call(r);
    case 1:
      return e.call(r, t[0]);
    case 2:
      return e.call(r, t[0], t[1]);
    case 3:
      return e.call(r, t[0], t[1], t[2]);
  }
  return e.apply(r, t);
}
var _apply = apply$1,
  apply = _apply,
  nativeMax = Math.max;
function overRest$1(e, r, t) {
  return (
    (r = nativeMax(r === void 0 ? e.length - 1 : r, 0)),
    function () {
      for (
        var n = arguments, o = -1, s = nativeMax(n.length - r, 0), a = Array(s);
        ++o < s;

      )
        a[o] = n[r + o];
      o = -1;
      for (var i = Array(r + 1); ++o < r; ) i[o] = n[o];
      return (i[r] = t(a)), apply(e, this, i);
    }
  );
}
var _overRest = overRest$1;
function constant$1(e) {
  return function () {
    return e;
  };
}
var constant_1 = constant$1,
  constant = constant_1,
  defineProperty = _defineProperty$5,
  identity = identity_1,
  baseSetToString$1 = defineProperty
    ? function (e, r) {
        return defineProperty(e, 'toString', {
          configurable: !0,
          enumerable: !1,
          value: constant(r),
          writable: !0,
        });
      }
    : identity,
  _baseSetToString = baseSetToString$1,
  HOT_COUNT = 800,
  HOT_SPAN = 16,
  nativeNow = Date.now;
function shortOut$1(e) {
  var r = 0,
    t = 0;
  return function () {
    var n = nativeNow(),
      o = HOT_SPAN - (n - t);
    if (((t = n), o > 0)) {
      if (++r >= HOT_COUNT) return arguments[0];
    } else r = 0;
    return e.apply(void 0, arguments);
  };
}
var _shortOut = shortOut$1,
  baseSetToString = _baseSetToString,
  shortOut = _shortOut,
  setToString$1 = shortOut(baseSetToString),
  _setToString = setToString$1,
  flatten = flatten_1,
  overRest = _overRest,
  setToString = _setToString;
function flatRest$1(e) {
  return setToString(overRest(e, void 0, flatten), e + '');
}
var _flatRest = flatRest$1,
  basePick = _basePick,
  flatRest = _flatRest,
  pick = flatRest(function (e, r) {
    return e == null ? {} : basePick(e, r);
  }),
  pick_1 = pick;
function makeArrayFrom(e) {
  return Array.prototype.slice.apply(e);
}
var PENDING = 'pending',
  RESOLVED = 'resolved',
  REJECTED = 'rejected';
function SynchronousPromise(e) {
  (this.status = PENDING),
    (this._continuations = []),
    (this._parent = null),
    (this._paused = !1),
    e && e.call(this, this._continueWith.bind(this), this._failWith.bind(this));
}
function looksLikeAPromise(e) {
  return e && typeof e.then == 'function';
}
function passThrough(e) {
  return e;
}
SynchronousPromise.prototype = {
  then: function (e, r) {
    var t = SynchronousPromise.unresolved()._setParent(this);
    if (this._isRejected()) {
      if (this._paused)
        return (
          this._continuations.push({ promise: t, nextFn: e, catchFn: r }), t
        );
      if (r)
        try {
          var n = r(this._error);
          return looksLikeAPromise(n)
            ? (this._chainPromiseData(n, t), t)
            : SynchronousPromise.resolve(n)._setParent(this);
        } catch (o) {
          return SynchronousPromise.reject(o)._setParent(this);
        }
      return SynchronousPromise.reject(this._error)._setParent(this);
    }
    return (
      this._continuations.push({ promise: t, nextFn: e, catchFn: r }),
      this._runResolutions(),
      t
    );
  },
  catch: function (e) {
    if (this._isResolved())
      return SynchronousPromise.resolve(this._data)._setParent(this);
    var r = SynchronousPromise.unresolved()._setParent(this);
    return (
      this._continuations.push({ promise: r, catchFn: e }),
      this._runRejections(),
      r
    );
  },
  finally: function (e) {
    var r = !1;
    function t(n, o) {
      if (!r) {
        (r = !0), e || (e = passThrough);
        var s = e(n);
        return looksLikeAPromise(s)
          ? s.then(function () {
              if (o) throw o;
              return n;
            })
          : n;
      }
    }
    return this.then(function (n) {
      return t(n);
    }).catch(function (n) {
      return t(null, n);
    });
  },
  pause: function () {
    return (this._paused = !0), this;
  },
  resume: function () {
    var e = this._findFirstPaused();
    return (
      e && ((e._paused = !1), e._runResolutions(), e._runRejections()), this
    );
  },
  _findAncestry: function () {
    return this._continuations.reduce(function (e, r) {
      if (r.promise) {
        var t = { promise: r.promise, children: r.promise._findAncestry() };
        e.push(t);
      }
      return e;
    }, []);
  },
  _setParent: function (e) {
    if (this._parent) throw new Error('parent already set');
    return (this._parent = e), this;
  },
  _continueWith: function (e) {
    var r = this._findFirstPending();
    r && ((r._data = e), r._setResolved());
  },
  _findFirstPending: function () {
    return this._findFirstAncestor(function (e) {
      return e._isPending && e._isPending();
    });
  },
  _findFirstPaused: function () {
    return this._findFirstAncestor(function (e) {
      return e._paused;
    });
  },
  _findFirstAncestor: function (e) {
    for (var r = this, t; r; ) e(r) && (t = r), (r = r._parent);
    return t;
  },
  _failWith: function (e) {
    var r = this._findFirstPending();
    r && ((r._error = e), r._setRejected());
  },
  _takeContinuations: function () {
    return this._continuations.splice(0, this._continuations.length);
  },
  _runRejections: function () {
    if (!(this._paused || !this._isRejected())) {
      var e = this._error,
        r = this._takeContinuations(),
        t = this;
      r.forEach(function (n) {
        if (n.catchFn)
          try {
            var o = n.catchFn(e);
            t._handleUserFunctionResult(o, n.promise);
          } catch (s) {
            n.promise.reject(s);
          }
        else n.promise.reject(e);
      });
    }
  },
  _runResolutions: function () {
    if (!(this._paused || !this._isResolved() || this._isPending())) {
      var e = this._takeContinuations(),
        r = this._data,
        t = this;
      if (
        (e.forEach(function (n) {
          if (n.nextFn)
            try {
              var o = n.nextFn(r);
              t._handleUserFunctionResult(o, n.promise);
            } catch (s) {
              t._handleResolutionError(s, n);
            }
          else n.promise && n.promise.resolve(r);
        }),
        looksLikeAPromise(this._data))
      )
        return this._handleWhenResolvedDataIsPromise(this._data);
    }
  },
  _handleResolutionError: function (e, r) {
    if ((this._setRejected(), r.catchFn))
      try {
        r.catchFn(e);
        return;
      } catch (t) {
        e = t;
      }
    r.promise && r.promise.reject(e);
  },
  _handleWhenResolvedDataIsPromise: function (e) {
    var r = this;
    return e
      .then(function (t) {
        (r._data = t), r._runResolutions();
      })
      .catch(function (t) {
        (r._error = t), r._setRejected(), r._runRejections();
      });
  },
  _handleUserFunctionResult: function (e, r) {
    looksLikeAPromise(e) ? this._chainPromiseData(e, r) : r.resolve(e);
  },
  _chainPromiseData: function (e, r) {
    e.then(function (t) {
      r.resolve(t);
    }).catch(function (t) {
      r.reject(t);
    });
  },
  _setResolved: function () {
    (this.status = RESOLVED), this._paused || this._runResolutions();
  },
  _setRejected: function () {
    (this.status = REJECTED), this._paused || this._runRejections();
  },
  _isPending: function () {
    return this.status === PENDING;
  },
  _isResolved: function () {
    return this.status === RESOLVED;
  },
  _isRejected: function () {
    return this.status === REJECTED;
  },
};
SynchronousPromise.resolve = function (e) {
  return new SynchronousPromise(function (r, t) {
    looksLikeAPromise(e)
      ? e
          .then(function (n) {
            r(n);
          })
          .catch(function (n) {
            t(n);
          })
      : r(e);
  });
};
SynchronousPromise.reject = function (e) {
  return new SynchronousPromise(function (r, t) {
    t(e);
  });
};
SynchronousPromise.unresolved = function () {
  return new SynchronousPromise(function (e, r) {
    (this.resolve = e), (this.reject = r);
  });
};
SynchronousPromise.all = function () {
  var e = makeArrayFrom(arguments);
  return (
    Array.isArray(e[0]) && (e = e[0]),
    e.length
      ? new SynchronousPromise(function (r, t) {
          var n = [],
            o = 0,
            s = function () {
              o === e.length && r(n);
            },
            a = !1,
            i = function (c) {
              a || ((a = !0), t(c));
            };
          e.forEach(function (c, l) {
            SynchronousPromise.resolve(c)
              .then(function (u) {
                (n[l] = u), (o += 1), s();
              })
              .catch(function (u) {
                i(u);
              });
          });
        })
      : SynchronousPromise.resolve([])
  );
};
function createAggregateErrorFrom(e) {
  return typeof window < 'u' && 'AggregateError' in window
    ? new window.AggregateError(e)
    : { errors: e };
}
SynchronousPromise.any = function () {
  var e = makeArrayFrom(arguments);
  return (
    Array.isArray(e[0]) && (e = e[0]),
    e.length
      ? new SynchronousPromise(function (r, t) {
          var n = [],
            o = 0,
            s = function () {
              o === e.length && t(createAggregateErrorFrom(n));
            },
            a = !1,
            i = function (c) {
              a || ((a = !0), r(c));
            };
          e.forEach(function (c, l) {
            SynchronousPromise.resolve(c)
              .then(function (u) {
                i(u);
              })
              .catch(function (u) {
                (n[l] = u), (o += 1), s();
              });
          });
        })
      : SynchronousPromise.reject(createAggregateErrorFrom([]))
  );
};
SynchronousPromise.allSettled = function () {
  var e = makeArrayFrom(arguments);
  return (
    Array.isArray(e[0]) && (e = e[0]),
    e.length
      ? new SynchronousPromise(function (r) {
          var t = [],
            n = 0,
            o = function () {
              (n += 1), n === e.length && r(t);
            };
          e.forEach(function (s, a) {
            SynchronousPromise.resolve(s)
              .then(function (i) {
                (t[a] = { status: 'fulfilled', value: i }), o();
              })
              .catch(function (i) {
                (t[a] = { status: 'rejected', reason: i }), o();
              });
          });
        })
      : SynchronousPromise.resolve([])
  );
};
if (Promise === SynchronousPromise)
  throw new Error(
    'Please use SynchronousPromise.installGlobally() to install globally',
  );
var RealPromise = Promise;
SynchronousPromise.installGlobally = function (e) {
  if (Promise === SynchronousPromise) return e;
  var r = patchAwaiterIfRequired(e);
  return (Promise = SynchronousPromise), r;
};
SynchronousPromise.uninstallGlobally = function () {
  Promise === SynchronousPromise && (Promise = RealPromise);
};
function patchAwaiterIfRequired(e) {
  if (typeof e > 'u' || e.__patched) return e;
  var r = e;
  return (
    (e = function () {
      r.apply(this, makeArrayFrom(arguments));
    }),
    (e.__patched = !0),
    e
  );
}
var synchronousPromise = { SynchronousPromise };
function dedent(e) {
  for (var r = [], t = 1; t < arguments.length; t++) r[t - 1] = arguments[t];
  var n = Array.from(typeof e == 'string' ? [e] : e);
  n[n.length - 1] = n[n.length - 1].replace(/\r?\n([\t ]*)$/, '');
  var o = n.reduce(function (i, c) {
    var l = c.match(/\n([\t ]+|(?!\s).)/g);
    return l
      ? i.concat(
          l.map(function (u) {
            var p, d;
            return (d =
              (p = u.match(/[\t ]/g)) === null || p === void 0
                ? void 0
                : p.length) !== null && d !== void 0
              ? d
              : 0;
          }),
        )
      : i;
  }, []);
  if (o.length) {
    var s = new RegExp(
      `
[	 ]{` +
        Math.min.apply(Math, o) +
        '}',
      'g',
    );
    n = n.map(function (i) {
      return i.replace(
        s,
        `
`,
      );
    });
  }
  n[0] = n[0].replace(/^\r?\n/, '');
  var a = n[0];
  return (
    r.forEach(function (i, c) {
      var l = a.match(/(?:^|\n)( *)$/),
        u = l ? l[1] : '',
        p = i;
      typeof i == 'string' &&
        i.includes(`
`) &&
        (p = String(i)
          .split(
            `
`,
          )
          .map(function (d, y) {
            return y === 0 ? d : '' + u + d;
          }).join(`
`)),
        (a += p + n[c + 1]);
    }),
    a
  );
}
var _templateObject$d;
function _taggedTemplateLiteral$d(e, r) {
  return (
    r || (r = e.slice(0)),
    Object.freeze(
      Object.defineProperties(e, { raw: { value: Object.freeze(r) } }),
    )
  );
}
function _slicedToArray$c(e, r) {
  return (
    _arrayWithHoles$d(e) ||
    _iterableToArrayLimit$c(e, r) ||
    _unsupportedIterableToArray$j(e, r) ||
    _nonIterableRest$d()
  );
}
function _nonIterableRest$d() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _unsupportedIterableToArray$j(e, r) {
  if (e) {
    if (typeof e == 'string') return _arrayLikeToArray$j(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (t === 'Object' && e.constructor && (t = e.constructor.name),
      t === 'Map' || t === 'Set')
    )
      return Array.from(e);
    if (t === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return _arrayLikeToArray$j(e, r);
  }
}
function _arrayLikeToArray$j(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
  return n;
}
function _iterableToArrayLimit$c(e, r) {
  var t =
    e == null
      ? null
      : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (t != null) {
    var n = [],
      o = !0,
      s = !1,
      a,
      i;
    try {
      for (
        t = t.call(e);
        !(o = (a = t.next()).done) && (n.push(a.value), !(r && n.length === r));
        o = !0
      );
    } catch (c) {
      (s = !0), (i = c);
    } finally {
      try {
        !o && t.return != null && t.return();
      } finally {
        if (s) throw i;
      }
    }
    return n;
  }
}
function _arrayWithHoles$d(e) {
  if (Array.isArray(e)) return e;
}
function _classCallCheck$h(e, r) {
  if (!(e instanceof r))
    throw new TypeError('Cannot call a class as a function');
}
function _defineProperties$h(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function _createClass$h(e, r, t) {
  return (
    r && _defineProperties$h(e.prototype, r),
    t && _defineProperties$h(e, t),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
  );
}
var StoryIndexStore = (function () {
    function e() {
      var r =
          arguments.length > 0 && arguments[0] !== void 0
            ? arguments[0]
            : { v: 3, stories: {} },
        t = r.stories;
      _classCallCheck$h(this, e),
        (this.channel = void 0),
        (this.stories = void 0),
        (this.stories = t);
    }
    return (
      _createClass$h(e, [
        {
          key: 'storyIdFromSpecifier',
          value: function (t) {
            var n = Object.keys(this.stories);
            if (t === '*') return n[0];
            if (typeof t == 'string')
              return n.indexOf(t) >= 0
                ? t
                : n.find(function (i) {
                    return i.startsWith(t);
                  });
            var o = t.name,
              s = t.title,
              a = Object.entries(this.stories).find(function (i) {
                var c = _slicedToArray$c(i, 2);
                c[0];
                var l = c[1];
                return l.name === o && l.title === s;
              });
            return a && a[0];
          },
        },
        {
          key: 'storyIdToEntry',
          value: function (t) {
            var n = this.stories[t];
            if (!n)
              throw new Error(
                dedent(
                  _templateObject$d ||
                    (_templateObject$d = _taggedTemplateLiteral$d([
                      "Couldn't find story matching '",
                      `' after HMR.
      - Did you remove it from your CSF file?
      - Are you sure a story with that id exists?
      - Please check your stories field of your main.js config.
      - Also check the browser console and terminal for error messages.`,
                    ])),
                  t,
                ),
              );
            return n;
          },
        },
      ]),
      e
    );
  })(),
  fastDeepEqual = function e(r, t) {
    if (r === t) return !0;
    if (r && t && typeof r == 'object' && typeof t == 'object') {
      if (r.constructor !== t.constructor) return !1;
      var n, o, s;
      if (Array.isArray(r)) {
        if (((n = r.length), n != t.length)) return !1;
        for (o = n; o-- !== 0; ) if (!e(r[o], t[o])) return !1;
        return !0;
      }
      if (r.constructor === RegExp)
        return r.source === t.source && r.flags === t.flags;
      if (r.valueOf !== Object.prototype.valueOf)
        return r.valueOf() === t.valueOf();
      if (r.toString !== Object.prototype.toString)
        return r.toString() === t.toString();
      if (((s = Object.keys(r)), (n = s.length), n !== Object.keys(t).length))
        return !1;
      for (o = n; o-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(t, s[o])) return !1;
      for (o = n; o-- !== 0; ) {
        var a = s[o];
        if (!e(r[a], t[a])) return !1;
      }
      return !0;
    }
    return r !== r && t !== t;
  },
  overArg = _overArg,
  getPrototype$2 = overArg(Object.getPrototypeOf, Object),
  _getPrototype = getPrototype$2,
  baseGetTag = _baseGetTag,
  getPrototype$1 = _getPrototype,
  isObjectLike = isObjectLike_1,
  objectTag = '[object Object]',
  funcProto = Function.prototype,
  objectProto$1 = Object.prototype,
  funcToString = funcProto.toString,
  hasOwnProperty$1 = objectProto$1.hasOwnProperty,
  objectCtorString = funcToString.call(Object);
function isPlainObject(e) {
  if (!isObjectLike(e) || baseGetTag(e) != objectTag) return !1;
  var r = getPrototype$1(e);
  if (r === null) return !0;
  var t = hasOwnProperty$1.call(r, 'constructor') && r.constructor;
  return (
    typeof t == 'function' &&
    t instanceof t &&
    funcToString.call(t) == objectCtorString
  );
}
var isPlainObject_1 = isPlainObject,
  _templateObject$c,
  _templateObject2$2;
function _taggedTemplateLiteral$c(e, r) {
  return (
    r || (r = e.slice(0)),
    Object.freeze(
      Object.defineProperties(e, { raw: { value: Object.freeze(r) } }),
    )
  );
}
function _toConsumableArray$a(e) {
  return (
    _arrayWithoutHoles$a(e) ||
    _iterableToArray$a(e) ||
    _unsupportedIterableToArray$i(e) ||
    _nonIterableSpread$a()
  );
}
function _nonIterableSpread$a() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _iterableToArray$a(e) {
  if (
    (typeof Symbol < 'u' && e[Symbol.iterator] != null) ||
    e['@@iterator'] != null
  )
    return Array.from(e);
}
function _arrayWithoutHoles$a(e) {
  if (Array.isArray(e)) return _arrayLikeToArray$i(e);
}
function _defineProperty$4(e, r, t) {
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
function _slicedToArray$b(e, r) {
  return (
    _arrayWithHoles$c(e) ||
    _iterableToArrayLimit$b(e, r) ||
    _unsupportedIterableToArray$i(e, r) ||
    _nonIterableRest$c()
  );
}
function _nonIterableRest$c() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _unsupportedIterableToArray$i(e, r) {
  if (e) {
    if (typeof e == 'string') return _arrayLikeToArray$i(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (t === 'Object' && e.constructor && (t = e.constructor.name),
      t === 'Map' || t === 'Set')
    )
      return Array.from(e);
    if (t === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return _arrayLikeToArray$i(e, r);
  }
}
function _arrayLikeToArray$i(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
  return n;
}
function _iterableToArrayLimit$b(e, r) {
  var t =
    e == null
      ? null
      : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (t != null) {
    var n = [],
      o = !0,
      s = !1,
      a,
      i;
    try {
      for (
        t = t.call(e);
        !(o = (a = t.next()).done) && (n.push(a.value), !(r && n.length === r));
        o = !0
      );
    } catch (c) {
      (s = !0), (i = c);
    } finally {
      try {
        !o && t.return != null && t.return();
      } finally {
        if (s) throw i;
      }
    }
    return n;
  }
}
function _arrayWithHoles$c(e) {
  if (Array.isArray(e)) return e;
}
function _typeof$4(e) {
  return (
    (_typeof$4 =
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
    _typeof$4(e)
  );
}
var INCOMPATIBLE = Symbol('incompatible'),
  map$1 = function e(r, t) {
    var n = t.type;
    if (r == null || !n || t.mapping) return r;
    switch (n.name) {
      case 'string':
        return String(r);
      case 'enum':
        return r;
      case 'number':
        return Number(r);
      case 'boolean':
        return r === 'true';
      case 'array':
        return !n.value || !Array.isArray(r)
          ? INCOMPATIBLE
          : r.reduce(function (o, s, a) {
              var i = e(s, { type: n.value });
              return i !== INCOMPATIBLE && (o[a] = i), o;
            }, new Array(r.length));
      case 'object':
        return typeof r == 'string' || typeof r == 'number'
          ? r
          : !n.value || _typeof$4(r) !== 'object'
          ? INCOMPATIBLE
          : Object.entries(r).reduce(function (o, s) {
              var a = _slicedToArray$b(s, 2),
                i = a[0],
                c = a[1],
                l = e(c, { type: n.value[i] });
              return l === INCOMPATIBLE
                ? o
                : Object.assign(o, _defineProperty$4({}, i, l));
            }, {});
      default:
        return INCOMPATIBLE;
    }
  },
  mapArgsToTypes = function (r, t) {
    return Object.entries(r).reduce(function (n, o) {
      var s = _slicedToArray$b(o, 2),
        a = s[0],
        i = s[1];
      if (!t[a]) return n;
      var c = map$1(i, t[a]);
      return c === INCOMPATIBLE
        ? n
        : Object.assign(n, _defineProperty$4({}, a, c));
    }, {});
  },
  combineArgs = function e(r, t) {
    return Array.isArray(r) && Array.isArray(t)
      ? t
          .reduce(function (n, o, s) {
            return (n[s] = e(r[s], t[s])), n;
          }, _toConsumableArray$a(r))
          .filter(function (n) {
            return n !== void 0;
          })
      : !isPlainObject_1(r) || !isPlainObject_1(t)
      ? t
      : Object.keys(Object.assign({}, r, t)).reduce(function (n, o) {
          if (o in t) {
            var s = e(r[o], t[o]);
            s !== void 0 && (n[o] = s);
          } else n[o] = r[o];
          return n;
        }, {});
  },
  validateOptions = function (r, t) {
    return Object.entries(t).reduce(function (n, o) {
      var s = _slicedToArray$b(o, 2),
        a = s[0],
        i = s[1].options;
      function c() {
        return a in r && (n[a] = r[a]), n;
      }
      if (!i) return c();
      if (!Array.isArray(i))
        return (
          once.error(
            dedent(
              _templateObject$c ||
                (_templateObject$c = _taggedTemplateLiteral$c([
                  `
        Invalid argType: '`,
                  `.options' should be an array.

        More info: https://storybook.js.org/docs/react/api/argtypes
      `,
                ])),
              a,
            ),
          ),
          c()
        );
      if (
        i.some(function (h) {
          return h && ['object', 'function'].includes(_typeof$4(h));
        })
      )
        return (
          once.error(
            dedent(
              _templateObject2$2 ||
                (_templateObject2$2 = _taggedTemplateLiteral$c([
                  `
        Invalid argType: '`,
                  `.options' should only contain primitives. Use a 'mapping' for complex values.

        More info: https://storybook.js.org/docs/react/writing-stories/args#mapping-to-complex-arg-values
      `,
                ])),
              a,
            ),
          ),
          c()
        );
      var l = Array.isArray(r[a]),
        u =
          l &&
          r[a].findIndex(function (h) {
            return !i.includes(h);
          }),
        p = l && u === -1;
      if (r[a] === void 0 || i.includes(r[a]) || p) return c();
      var d = l ? ''.concat(a, '[').concat(u, ']') : a,
        y = i
          .map(function (h) {
            return typeof h == 'string' ? "'".concat(h, "'") : String(h);
          })
          .join(', ');
      return (
        once.warn(
          "Received illegal value for '"
            .concat(d, "'. Supported options: ")
            .concat(y),
        ),
        n
      );
    }, {});
  },
  DEEPLY_EQUAL = Symbol('Deeply equal'),
  deepDiff = function e(r, t) {
    if (_typeof$4(r) !== _typeof$4(t)) return t;
    if (fastDeepEqual(r, t)) return DEEPLY_EQUAL;
    if (Array.isArray(r) && Array.isArray(t)) {
      var n = t.reduce(function (o, s, a) {
        var i = e(r[a], s);
        return i !== DEEPLY_EQUAL && (o[a] = i), o;
      }, new Array(t.length));
      return t.length >= r.length
        ? n
        : n.concat(new Array(r.length - t.length).fill(void 0));
    }
    return isPlainObject_1(r) && isPlainObject_1(t)
      ? Object.keys(Object.assign({}, r, t)).reduce(function (o, s) {
          var a = e(r == null ? void 0 : r[s], t == null ? void 0 : t[s]);
          return a === DEEPLY_EQUAL
            ? o
            : Object.assign(o, _defineProperty$4({}, s, a));
        }, {})
      : t;
  },
  NO_TARGET_NAME = '';
function groupArgsByTarget(e) {
  var r = e.args,
    t = e.argTypes,
    n = {};
  return (
    Object.entries(r).forEach(function (o) {
      var s = _slicedToArray$b(o, 2),
        a = s[0],
        i = s[1],
        c = t[a] || {},
        l = c.target,
        u = l === void 0 ? NO_TARGET_NAME : l;
      (n[u] = n[u] || {}), (n[u][a] = i);
    }),
    n
  );
}
function _classCallCheck$g(e, r) {
  if (!(e instanceof r))
    throw new TypeError('Cannot call a class as a function');
}
function _defineProperties$g(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function _createClass$g(e, r, t) {
  return (
    r && _defineProperties$g(e.prototype, r),
    t && _defineProperties$g(e, t),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
  );
}
function deleteUndefined(e) {
  return (
    Object.keys(e).forEach(function (r) {
      return e[r] === void 0 && delete e[r];
    }),
    e
  );
}
var ArgsStore = (function () {
    function e() {
      _classCallCheck$g(this, e),
        (this.initialArgsByStoryId = {}),
        (this.argsByStoryId = {});
    }
    return (
      _createClass$g(e, [
        {
          key: 'get',
          value: function (t) {
            if (!(t in this.argsByStoryId))
              throw new Error(
                'No args known for '.concat(t, ' -- has it been rendered yet?'),
              );
            return this.argsByStoryId[t];
          },
        },
        {
          key: 'setInitial',
          value: function (t) {
            if (!this.initialArgsByStoryId[t.id])
              (this.initialArgsByStoryId[t.id] = t.initialArgs),
                (this.argsByStoryId[t.id] = t.initialArgs);
            else if (this.initialArgsByStoryId[t.id] !== t.initialArgs) {
              var n = deepDiff(
                this.initialArgsByStoryId[t.id],
                this.argsByStoryId[t.id],
              );
              (this.initialArgsByStoryId[t.id] = t.initialArgs),
                (this.argsByStoryId[t.id] = t.initialArgs),
                n !== DEEPLY_EQUAL && this.updateFromDelta(t, n);
            }
          },
        },
        {
          key: 'updateFromDelta',
          value: function (t, n) {
            var o = validateOptions(n, t.argTypes);
            this.argsByStoryId[t.id] = combineArgs(this.argsByStoryId[t.id], o);
          },
        },
        {
          key: 'updateFromPersisted',
          value: function (t, n) {
            var o = mapArgsToTypes(n, t.argTypes);
            return this.updateFromDelta(t, o);
          },
        },
        {
          key: 'update',
          value: function (t, n) {
            if (!(t in this.argsByStoryId))
              throw new Error(
                'No args known for '.concat(t, ' -- has it been rendered yet?'),
              );
            this.argsByStoryId[t] = deleteUndefined(
              Object.assign({}, this.argsByStoryId[t], n),
            );
          },
        },
      ]),
      e
    );
  })(),
  browser = deprecate;
function deprecate(e, r) {
  if (config('noDeprecation')) return e;
  var t = !1;
  function n() {
    if (!t) {
      if (config('throwDeprecation')) throw new Error(r);
      config('traceDeprecation') ? console.trace(r) : console.warn(r), (t = !0);
    }
    return e.apply(this, arguments);
  }
  return n;
}
function config(e) {
  try {
    if (!commonjsGlobal.localStorage) return !1;
  } catch {
    return !1;
  }
  var r = commonjsGlobal.localStorage[e];
  return r == null ? !1 : String(r).toLowerCase() === 'true';
}
function _slicedToArray$a(e, r) {
  return (
    _arrayWithHoles$b(e) ||
    _iterableToArrayLimit$a(e, r) ||
    _unsupportedIterableToArray$h(e, r) ||
    _nonIterableRest$b()
  );
}
function _nonIterableRest$b() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _unsupportedIterableToArray$h(e, r) {
  if (e) {
    if (typeof e == 'string') return _arrayLikeToArray$h(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (t === 'Object' && e.constructor && (t = e.constructor.name),
      t === 'Map' || t === 'Set')
    )
      return Array.from(e);
    if (t === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return _arrayLikeToArray$h(e, r);
  }
}
function _arrayLikeToArray$h(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
  return n;
}
function _iterableToArrayLimit$a(e, r) {
  var t =
    e == null
      ? null
      : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (t != null) {
    var n = [],
      o = !0,
      s = !1,
      a,
      i;
    try {
      for (
        t = t.call(e);
        !(o = (a = t.next()).done) && (n.push(a.value), !(r && n.length === r));
        o = !0
      );
    } catch (c) {
      (s = !0), (i = c);
    } finally {
      try {
        !o && t.return != null && t.return();
      } finally {
        if (s) throw i;
      }
    }
    return n;
  }
}
function _arrayWithHoles$b(e) {
  if (Array.isArray(e)) return e;
}
var getValuesFromArgTypes = function () {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return Object.entries(r).reduce(function (t, n) {
      var o = _slicedToArray$a(n, 2),
        s = o[0],
        a = o[1].defaultValue;
      return typeof a < 'u' && (t[s] = a), t;
    }, {});
  },
  _templateObject$b;
function _slicedToArray$9(e, r) {
  return (
    _arrayWithHoles$a(e) ||
    _iterableToArrayLimit$9(e, r) ||
    _unsupportedIterableToArray$g(e, r) ||
    _nonIterableRest$a()
  );
}
function _nonIterableRest$a() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _iterableToArrayLimit$9(e, r) {
  var t =
    e == null
      ? null
      : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (t != null) {
    var n = [],
      o = !0,
      s = !1,
      a,
      i;
    try {
      for (
        t = t.call(e);
        !(o = (a = t.next()).done) && (n.push(a.value), !(r && n.length === r));
        o = !0
      );
    } catch (c) {
      (s = !0), (i = c);
    } finally {
      try {
        !o && t.return != null && t.return();
      } finally {
        if (s) throw i;
      }
    }
    return n;
  }
}
function _arrayWithHoles$a(e) {
  if (Array.isArray(e)) return e;
}
function _toConsumableArray$9(e) {
  return (
    _arrayWithoutHoles$9(e) ||
    _iterableToArray$9(e) ||
    _unsupportedIterableToArray$g(e) ||
    _nonIterableSpread$9()
  );
}
function _nonIterableSpread$9() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _unsupportedIterableToArray$g(e, r) {
  if (e) {
    if (typeof e == 'string') return _arrayLikeToArray$g(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (t === 'Object' && e.constructor && (t = e.constructor.name),
      t === 'Map' || t === 'Set')
    )
      return Array.from(e);
    if (t === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return _arrayLikeToArray$g(e, r);
  }
}
function _iterableToArray$9(e) {
  if (
    (typeof Symbol < 'u' && e[Symbol.iterator] != null) ||
    e['@@iterator'] != null
  )
    return Array.from(e);
}
function _arrayWithoutHoles$9(e) {
  if (Array.isArray(e)) return _arrayLikeToArray$g(e);
}
function _arrayLikeToArray$g(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
  return n;
}
function _classCallCheck$f(e, r) {
  if (!(e instanceof r))
    throw new TypeError('Cannot call a class as a function');
}
function _defineProperties$f(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function _createClass$f(e, r, t) {
  return (
    r && _defineProperties$f(e.prototype, r),
    t && _defineProperties$f(e, t),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
  );
}
function _taggedTemplateLiteral$b(e, r) {
  return (
    r || (r = e.slice(0)),
    Object.freeze(
      Object.defineProperties(e, { raw: { value: Object.freeze(r) } }),
    )
  );
}
var setUndeclaredWarning = browser(
    function () {},
    dedent(
      _templateObject$b ||
        (_templateObject$b = _taggedTemplateLiteral$b([
          `
    Setting a global value that is undeclared (i.e. not in the user's initial set of globals
    or globalTypes) is deprecated and will have no effect in 7.0.
  `,
        ])),
    ),
  ),
  GlobalsStore = (function () {
    function e() {
      _classCallCheck$f(this, e),
        (this.allowedGlobalNames = void 0),
        (this.initialGlobals = void 0),
        (this.globals = {});
    }
    return (
      _createClass$f(e, [
        {
          key: 'set',
          value: function (t) {
            var n = t.globals,
              o = n === void 0 ? {} : n,
              s = t.globalTypes,
              a = s === void 0 ? {} : s,
              i =
                this.initialGlobals &&
                deepDiff(this.initialGlobals, this.globals);
            this.allowedGlobalNames = new Set(
              [].concat(
                _toConsumableArray$9(Object.keys(o)),
                _toConsumableArray$9(Object.keys(a)),
              ),
            );
            var c = getValuesFromArgTypes(a);
            (this.initialGlobals = Object.assign({}, c, o)),
              (this.globals = this.initialGlobals),
              i && i !== DEEPLY_EQUAL && this.updateFromPersisted(i);
          },
        },
        {
          key: 'filterAllowedGlobals',
          value: function (t) {
            var n = this;
            return Object.entries(t).reduce(function (o, s) {
              var a = _slicedToArray$9(s, 2),
                i = a[0],
                c = a[1];
              return n.allowedGlobalNames.has(i) && (o[i] = c), o;
            }, {});
          },
        },
        {
          key: 'updateFromPersisted',
          value: function (t) {
            var n = this.filterAllowedGlobals(t);
            this.globals = Object.assign({}, this.globals, n);
          },
        },
        {
          key: 'get',
          value: function () {
            return this.globals;
          },
        },
        {
          key: 'update',
          value: function (t) {
            var n = this;
            Object.keys(t).forEach(function (o) {
              n.allowedGlobalNames.has(o) || setUndeclaredWarning();
            }),
              (this.globals = Object.assign({}, this.globals, t));
          },
        },
      ]),
      e
    );
  })(),
  _excluded$6 = ['type', 'control'];
function _objectWithoutProperties$6(e, r) {
  if (e == null) return {};
  var t = _objectWithoutPropertiesLoose$6(e, r),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (o = 0; o < s.length; o++)
      (n = s[o]),
        !(r.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (t[n] = e[n]);
  }
  return t;
}
function _objectWithoutPropertiesLoose$6(e, r) {
  if (e == null) return {};
  var t = {},
    n = Object.keys(e),
    o,
    s;
  for (s = 0; s < n.length; s++)
    (o = n[s]), !(r.indexOf(o) >= 0) && (t[o] = e[o]);
  return t;
}
var normalizeType = function (r) {
    return typeof r == 'string' ? { name: r } : r;
  },
  normalizeControl = function (r) {
    return typeof r == 'string' ? { type: r } : r;
  },
  normalizeInputType = function (r, t) {
    var n = r.type,
      o = r.control,
      s = _objectWithoutProperties$6(r, _excluded$6),
      a = Object.assign({ name: t }, s);
    return (
      n && (a.type = normalizeType(n)),
      o
        ? (a.control = normalizeControl(o))
        : o === !1 && (a.control = { disable: !0 }),
      a
    );
  },
  normalizeInputTypes = function (r) {
    return mapValues_1(r, normalizeInputType);
  },
  _templateObject$a;
function _toConsumableArray$8(e) {
  return (
    _arrayWithoutHoles$8(e) ||
    _iterableToArray$8(e) ||
    _unsupportedIterableToArray$f(e) ||
    _nonIterableSpread$8()
  );
}
function _nonIterableSpread$8() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _unsupportedIterableToArray$f(e, r) {
  if (e) {
    if (typeof e == 'string') return _arrayLikeToArray$f(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (t === 'Object' && e.constructor && (t = e.constructor.name),
      t === 'Map' || t === 'Set')
    )
      return Array.from(e);
    if (t === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return _arrayLikeToArray$f(e, r);
  }
}
function _iterableToArray$8(e) {
  if (
    (typeof Symbol < 'u' && e[Symbol.iterator] != null) ||
    e['@@iterator'] != null
  )
    return Array.from(e);
}
function _arrayWithoutHoles$8(e) {
  if (Array.isArray(e)) return _arrayLikeToArray$f(e);
}
function _arrayLikeToArray$f(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
  return n;
}
function _taggedTemplateLiteral$a(e, r) {
  return (
    r || (r = e.slice(0)),
    Object.freeze(
      Object.defineProperties(e, { raw: { value: Object.freeze(r) } }),
    )
  );
}
var deprecatedStoryAnnotation = dedent(
    _templateObject$a ||
      (_templateObject$a = _taggedTemplateLiteral$a([
        `
CSF .story annotations deprecated; annotate story functions directly:
- StoryFn.story.name => StoryFn.storyName
- StoryFn.story.(parameters|decorators) => StoryFn.(parameters|decorators)
See https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#hoisted-csf-annotations for details and codemod.
`,
      ])),
  ),
  deprecatedStoryAnnotationWarning = browser(function () {},
  deprecatedStoryAnnotation);
function normalizeStory(e, r, t) {
  var n, o;
  typeof r == 'function' && (n = r), (o = r);
  var s = o,
    a = s.story;
  a &&
    (logger.debug('deprecated story', a), deprecatedStoryAnnotationWarning());
  var i = dist.storyNameFromExport(e),
    c =
      (typeof o != 'function' && o.name) ||
      o.storyName ||
      (a == null ? void 0 : a.name) ||
      i,
    l = [].concat(
      _toConsumableArray$8(o.decorators || []),
      _toConsumableArray$8((a == null ? void 0 : a.decorators) || []),
    ),
    u = Object.assign({}, a == null ? void 0 : a.parameters, o.parameters),
    p = Object.assign({}, a == null ? void 0 : a.args, o.args),
    d = Object.assign({}, a == null ? void 0 : a.argTypes, o.argTypes),
    y = [].concat(
      _toConsumableArray$8(o.loaders || []),
      _toConsumableArray$8((a == null ? void 0 : a.loaders) || []),
    ),
    h = o,
    g = h.render,
    m = h.play,
    S = u.__id || dist.toId(t.id || t.title, i);
  return Object.assign(
    {
      id: S,
      name: c,
      decorators: l,
      parameters: u,
      args: p,
      argTypes: normalizeInputTypes(d),
      loaders: y,
    },
    g && { render: g },
    n && { userStoryFn: n },
    m && { play: m },
  );
}
function normalizeComponentAnnotations(e) {
  var r =
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.title,
    t = arguments.length > 2 ? arguments[2] : void 0,
    n = e.id,
    o = e.argTypes;
  return Object.assign(
    { id: dist.sanitize(n || r) },
    e,
    { title: r },
    o && { argTypes: normalizeInputTypes(o) },
    { parameters: Object.assign({ fileName: t }, e.parameters) },
  );
}
var _excluded$5 = ['default', '__namedExportsOrder'];
function _objectWithoutProperties$5(e, r) {
  if (e == null) return {};
  var t = _objectWithoutPropertiesLoose$5(e, r),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (o = 0; o < s.length; o++)
      (n = s[o]),
        !(r.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (t[n] = e[n]);
  }
  return t;
}
function _objectWithoutPropertiesLoose$5(e, r) {
  if (e == null) return {};
  var t = {},
    n = Object.keys(e),
    o,
    s;
  for (s = 0; s < n.length; s++)
    (o = n[s]), !(r.indexOf(o) >= 0) && (t[o] = e[o]);
  return t;
}
var checkGlobals = function (r) {
    var t = r.globals,
      n = r.globalTypes;
    (t || n) &&
      logger.error(
        'Global args/argTypes can only be set globally',
        JSON.stringify({ globals: t, globalTypes: n }),
      );
  },
  checkStorySort = function (r) {
    var t = r.options;
    t != null &&
      t.storySort &&
      logger.error('The storySort option parameter can only be set globally');
  },
  checkDisallowedParameters = function (r) {
    r && (checkGlobals(r), checkStorySort(r));
  };
function processCSFFile(e, r, t) {
  var n = e.default;
  e.__namedExportsOrder;
  var o = _objectWithoutProperties$5(e, _excluded$5),
    s = normalizeComponentAnnotations(n, t, r);
  checkDisallowedParameters(s.parameters);
  var a = { meta: s, stories: {} };
  return (
    Object.keys(o).forEach(function (i) {
      if (dist.isExportStory(i, s)) {
        var c = normalizeStory(i, o[i], s);
        checkDisallowedParameters(c.parameters), (a.stories[c.id] = c);
      }
    }),
    a
  );
}
function _toConsumableArray$7(e) {
  return (
    _arrayWithoutHoles$7(e) ||
    _iterableToArray$7(e) ||
    _unsupportedIterableToArray$e(e) ||
    _nonIterableSpread$7()
  );
}
function _nonIterableSpread$7() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _iterableToArray$7(e) {
  if (
    (typeof Symbol < 'u' && e[Symbol.iterator] != null) ||
    e['@@iterator'] != null
  )
    return Array.from(e);
}
function _arrayWithoutHoles$7(e) {
  if (Array.isArray(e)) return _arrayLikeToArray$e(e);
}
function _slicedToArray$8(e, r) {
  return (
    _arrayWithHoles$9(e) ||
    _iterableToArrayLimit$8(e, r) ||
    _unsupportedIterableToArray$e(e, r) ||
    _nonIterableRest$9()
  );
}
function _nonIterableRest$9() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _unsupportedIterableToArray$e(e, r) {
  if (e) {
    if (typeof e == 'string') return _arrayLikeToArray$e(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (t === 'Object' && e.constructor && (t = e.constructor.name),
      t === 'Map' || t === 'Set')
    )
      return Array.from(e);
    if (t === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return _arrayLikeToArray$e(e, r);
  }
}
function _arrayLikeToArray$e(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
  return n;
}
function _iterableToArrayLimit$8(e, r) {
  var t =
    e == null
      ? null
      : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (t != null) {
    var n = [],
      o = !0,
      s = !1,
      a,
      i;
    try {
      for (
        t = t.call(e);
        !(o = (a = t.next()).done) && (n.push(a.value), !(r && n.length === r));
        o = !0
      );
    } catch (c) {
      (s = !0), (i = c);
    } finally {
      try {
        !o && t.return != null && t.return();
      } finally {
        if (s) throw i;
      }
    }
    return n;
  }
}
function _arrayWithHoles$9(e) {
  if (Array.isArray(e)) return e;
}
var combineParameters = function e() {
    for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
      t[n] = arguments[n];
    var o = {},
      s = t.filter(Boolean).reduce(function (a, i) {
        return (
          Object.entries(i).forEach(function (c) {
            var l = _slicedToArray$8(c, 2),
              u = l[0],
              p = l[1],
              d = a[u];
            Array.isArray(p) || typeof d > 'u'
              ? (a[u] = p)
              : isPlainObject_1(p) && isPlainObject_1(d)
              ? (o[u] = !0)
              : typeof p < 'u' && (a[u] = p);
          }),
          a
        );
      }, {});
    return (
      Object.keys(o).forEach(function (a) {
        var i = t
          .filter(Boolean)
          .map(function (c) {
            return c[a];
          })
          .filter(function (c) {
            return typeof c < 'u';
          });
        i.every(function (c) {
          return isPlainObject_1(c);
        })
          ? (s[a] = e.apply(void 0, _toConsumableArray$7(i)))
          : (s[a] = i[i.length - 1]);
      }),
      s
    );
  },
  events;
(function (e) {
  (e.CHANNEL_CREATED = 'channelCreated'),
    (e.CONFIG_ERROR = 'configError'),
    (e.STORY_INDEX_INVALIDATED = 'storyIndexInvalidated'),
    (e.STORY_SPECIFIED = 'storySpecified'),
    (e.SET_STORIES = 'setStories'),
    (e.SET_CURRENT_STORY = 'setCurrentStory'),
    (e.CURRENT_STORY_WAS_SET = 'currentStoryWasSet'),
    (e.FORCE_RE_RENDER = 'forceReRender'),
    (e.FORCE_REMOUNT = 'forceRemount'),
    (e.PRELOAD_STORIES = 'preloadStories'),
    (e.STORY_PREPARED = 'storyPrepared'),
    (e.STORY_CHANGED = 'storyChanged'),
    (e.STORY_UNCHANGED = 'storyUnchanged'),
    (e.STORY_RENDERED = 'storyRendered'),
    (e.STORY_MISSING = 'storyMissing'),
    (e.STORY_ERRORED = 'storyErrored'),
    (e.STORY_THREW_EXCEPTION = 'storyThrewException'),
    (e.STORY_RENDER_PHASE_CHANGED = 'storyRenderPhaseChanged'),
    (e.UPDATE_STORY_ARGS = 'updateStoryArgs'),
    (e.STORY_ARGS_UPDATED = 'storyArgsUpdated'),
    (e.RESET_STORY_ARGS = 'resetStoryArgs'),
    (e.SET_GLOBALS = 'setGlobals'),
    (e.UPDATE_GLOBALS = 'updateGlobals'),
    (e.GLOBALS_UPDATED = 'globalsUpdated'),
    (e.REGISTER_SUBSCRIPTION = 'registerSubscription'),
    (e.PREVIEW_KEYDOWN = 'previewKeydown'),
    (e.SELECT_STORY = 'selectStory'),
    (e.STORIES_COLLAPSE_ALL = 'storiesCollapseAll'),
    (e.STORIES_EXPAND_ALL = 'storiesExpandAll'),
    (e.DOCS_RENDERED = 'docsRendered'),
    (e.SHARED_STATE_CHANGED = 'sharedStateChanged'),
    (e.SHARED_STATE_SET = 'sharedStateSet'),
    (e.NAVIGATE_URL = 'navigateUrl'),
    (e.UPDATE_QUERY_PARAMS = 'updateQueryParams');
})(events || (events = {}));
const Events = events;
var CHANNEL_CREATED = events.CHANNEL_CREATED,
  CONFIG_ERROR = events.CONFIG_ERROR,
  STORY_INDEX_INVALIDATED = events.STORY_INDEX_INVALIDATED,
  STORY_SPECIFIED = events.STORY_SPECIFIED,
  SET_STORIES = events.SET_STORIES,
  SET_CURRENT_STORY = events.SET_CURRENT_STORY,
  CURRENT_STORY_WAS_SET = events.CURRENT_STORY_WAS_SET,
  FORCE_RE_RENDER = events.FORCE_RE_RENDER,
  FORCE_REMOUNT = events.FORCE_REMOUNT,
  STORY_PREPARED = events.STORY_PREPARED,
  STORY_CHANGED = events.STORY_CHANGED,
  STORY_UNCHANGED = events.STORY_UNCHANGED,
  PRELOAD_STORIES = events.PRELOAD_STORIES,
  STORY_RENDERED = events.STORY_RENDERED,
  STORY_MISSING = events.STORY_MISSING,
  STORY_ERRORED = events.STORY_ERRORED,
  STORY_THREW_EXCEPTION = events.STORY_THREW_EXCEPTION,
  STORY_RENDER_PHASE_CHANGED = events.STORY_RENDER_PHASE_CHANGED,
  UPDATE_STORY_ARGS = events.UPDATE_STORY_ARGS,
  STORY_ARGS_UPDATED = events.STORY_ARGS_UPDATED,
  RESET_STORY_ARGS = events.RESET_STORY_ARGS,
  SET_GLOBALS = events.SET_GLOBALS,
  UPDATE_GLOBALS = events.UPDATE_GLOBALS,
  GLOBALS_UPDATED = events.GLOBALS_UPDATED,
  REGISTER_SUBSCRIPTION = events.REGISTER_SUBSCRIPTION,
  PREVIEW_KEYDOWN = events.PREVIEW_KEYDOWN,
  SELECT_STORY = events.SELECT_STORY,
  STORIES_COLLAPSE_ALL = events.STORIES_COLLAPSE_ALL,
  STORIES_EXPAND_ALL = events.STORIES_EXPAND_ALL,
  DOCS_RENDERED = events.DOCS_RENDERED,
  SHARED_STATE_CHANGED = events.SHARED_STATE_CHANGED,
  SHARED_STATE_SET = events.SHARED_STATE_SET,
  NAVIGATE_URL = events.NAVIGATE_URL,
  UPDATE_QUERY_PARAMS = events.UPDATE_QUERY_PARAMS,
  IGNORED_EXCEPTION = new Error('ignoredException');
const EVENTS = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      CHANNEL_CREATED,
      CONFIG_ERROR,
      CURRENT_STORY_WAS_SET,
      DOCS_RENDERED,
      FORCE_REMOUNT,
      FORCE_RE_RENDER,
      GLOBALS_UPDATED,
      IGNORED_EXCEPTION,
      NAVIGATE_URL,
      PRELOAD_STORIES,
      PREVIEW_KEYDOWN,
      REGISTER_SUBSCRIPTION,
      RESET_STORY_ARGS,
      SELECT_STORY,
      SET_CURRENT_STORY,
      SET_GLOBALS,
      SET_STORIES,
      SHARED_STATE_CHANGED,
      SHARED_STATE_SET,
      STORIES_COLLAPSE_ALL,
      STORIES_EXPAND_ALL,
      STORY_ARGS_UPDATED,
      STORY_CHANGED,
      STORY_ERRORED,
      STORY_INDEX_INVALIDATED,
      STORY_MISSING,
      STORY_PREPARED,
      STORY_RENDERED,
      STORY_RENDER_PHASE_CHANGED,
      STORY_SPECIFIED,
      STORY_THREW_EXCEPTION,
      STORY_UNCHANGED,
      UPDATE_GLOBALS,
      UPDATE_QUERY_PARAMS,
      UPDATE_STORY_ARGS,
      default: Events,
    },
    Symbol.toStringTag,
    { value: 'Module' },
  ),
);
var _templateObject$9;
function _taggedTemplateLiteral$9(e, r) {
  return (
    r || (r = e.slice(0)),
    Object.freeze(
      Object.defineProperties(e, { raw: { value: Object.freeze(r) } }),
    )
  );
}
function _classCallCheck$e(e, r) {
  if (!(e instanceof r))
    throw new TypeError('Cannot call a class as a function');
}
function _defineProperties$e(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function _createClass$e(e, r, t) {
  return (
    r && _defineProperties$e(e.prototype, r),
    t && _defineProperties$e(e, t),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
  );
}
var generateRandomId = function () {
    return Math.random().toString(16).slice(2);
  },
  Channel = (function () {
    function e() {
      var r = this,
        t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        n = t.transport,
        o = t.async,
        s = o === void 0 ? !1 : o;
      _classCallCheck$e(this, e),
        (this.isAsync = void 0),
        (this.sender = generateRandomId()),
        (this.events = {}),
        (this.data = {}),
        (this.transport = void 0),
        (this.addPeerListener = browser(
          function (a, i) {
            r.addListener(a, i);
          },
          dedent(
            _templateObject$9 ||
              (_templateObject$9 = _taggedTemplateLiteral$9([
                `
      channel.addPeerListener is deprecated
    `,
              ])),
          ),
        )),
        (this.isAsync = s),
        n &&
          ((this.transport = n),
          this.transport.setHandler(function (a) {
            return r.handleEvent(a);
          }));
    }
    return (
      _createClass$e(e, [
        {
          key: 'hasTransport',
          get: function () {
            return !!this.transport;
          },
        },
        {
          key: 'addListener',
          value: function (t, n) {
            (this.events[t] = this.events[t] || []), this.events[t].push(n);
          },
        },
        {
          key: 'emit',
          value: function (t) {
            for (
              var n = this,
                o = arguments.length,
                s = new Array(o > 1 ? o - 1 : 0),
                a = 1;
              a < o;
              a++
            )
              s[a - 1] = arguments[a];
            var i = { type: t, args: s, from: this.sender },
              c = {};
            s.length >= 1 && s[0] && s[0].options && (c = s[0].options);
            var l = function () {
              n.transport && n.transport.send(i, c), n.handleEvent(i);
            };
            this.isAsync ? setImmediate(l) : l();
          },
        },
        {
          key: 'last',
          value: function (t) {
            return this.data[t];
          },
        },
        {
          key: 'eventNames',
          value: function () {
            return Object.keys(this.events);
          },
        },
        {
          key: 'listenerCount',
          value: function (t) {
            var n = this.listeners(t);
            return n ? n.length : 0;
          },
        },
        {
          key: 'listeners',
          value: function (t) {
            var n = this.events[t];
            return n || void 0;
          },
        },
        {
          key: 'once',
          value: function (t, n) {
            var o = this.onceListener(t, n);
            this.addListener(t, o);
          },
        },
        {
          key: 'removeAllListeners',
          value: function (t) {
            t ? this.events[t] && delete this.events[t] : (this.events = {});
          },
        },
        {
          key: 'removeListener',
          value: function (t, n) {
            var o = this.listeners(t);
            o &&
              (this.events[t] = o.filter(function (s) {
                return s !== n;
              }));
          },
        },
        {
          key: 'on',
          value: function (t, n) {
            this.addListener(t, n);
          },
        },
        {
          key: 'off',
          value: function (t, n) {
            this.removeListener(t, n);
          },
        },
        {
          key: 'handleEvent',
          value: function (t) {
            var n = this.listeners(t.type);
            n &&
              n.length &&
              n.forEach(function (o) {
                o.apply(t, t.args);
              }),
              (this.data[t.type] = t.args);
          },
        },
        {
          key: 'onceListener',
          value: function (t, n) {
            var o = this,
              s = function a() {
                return o.removeListener(t, a), n.apply(void 0, arguments);
              };
            return s;
          },
        },
      ]),
      e
    );
  })();
const Channel$1 = Channel;
function mockChannel() {
  var e = { setHandler: function () {}, send: function () {} };
  return new Channel$1({ transport: e });
}
var types;
(function (e) {
  (e.TAB = 'tab'),
    (e.PANEL = 'panel'),
    (e.TOOL = 'tool'),
    (e.TOOLEXTRA = 'toolextra'),
    (e.PREVIEW = 'preview'),
    (e.NOTES_ELEMENT = 'notes-element');
})(types || (types = {}));
function _defineProperties$d(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function _createClass$d(e, r, t) {
  return (
    r && _defineProperties$d(e.prototype, r),
    t && _defineProperties$d(e, t),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
  );
}
function _classCallCheck$d(e, r) {
  if (!(e instanceof r))
    throw new TypeError('Cannot call a class as a function');
}
var AddonStore = _createClass$d(function e() {
    var r = this;
    _classCallCheck$d(this, e),
      (this.loaders = {}),
      (this.elements = {}),
      (this.config = {}),
      (this.channel = void 0),
      (this.serverChannel = void 0),
      (this.promise = void 0),
      (this.resolve = void 0),
      (this.getChannel = function () {
        return r.channel || r.setChannel(mockChannel()), r.channel;
      }),
      (this.getServerChannel = function () {
        if (!r.serverChannel)
          throw new Error('Accessing non-existent serverChannel');
        return r.serverChannel;
      }),
      (this.ready = function () {
        return r.promise;
      }),
      (this.hasChannel = function () {
        return !!r.channel;
      }),
      (this.hasServerChannel = function () {
        return !!r.serverChannel;
      }),
      (this.setChannel = function (t) {
        (r.channel = t), r.resolve();
      }),
      (this.setServerChannel = function (t) {
        r.serverChannel = t;
      }),
      (this.getElements = function (t) {
        return r.elements[t] || (r.elements[t] = {}), r.elements[t];
      }),
      (this.addPanel = function (t, n) {
        r.add(t, Object.assign({ type: types.PANEL }, n));
      }),
      (this.add = function (t, n) {
        var o = n.type,
          s = r.getElements(o);
        s[t] = Object.assign({ id: t }, n);
      }),
      (this.setConfig = function (t) {
        Object.assign(r.config, t);
      }),
      (this.getConfig = function () {
        return r.config;
      }),
      (this.register = function (t, n) {
        r.loaders[t] &&
          logger.warn(
            ''.concat(t, ' was loaded twice, this could have bad side-effects'),
          ),
          (r.loaders[t] = n);
      }),
      (this.loadAddons = function (t) {
        Object.values(r.loaders).forEach(function (n) {
          return n(t);
        });
      }),
      (this.promise = new Promise(function (t) {
        r.resolve = function () {
          return t(r.getChannel());
        };
      }));
  }),
  KEY$1 = '__STORYBOOK_ADDONS';
function getAddonsStore() {
  return (
    window_1[KEY$1] || (window_1[KEY$1] = new AddonStore()), window_1[KEY$1]
  );
}
var addons = getAddonsStore();
function _toConsumableArray$6(e) {
  return (
    _arrayWithoutHoles$6(e) ||
    _iterableToArray$6(e) ||
    _unsupportedIterableToArray$d(e) ||
    _nonIterableSpread$6()
  );
}
function _nonIterableSpread$6() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _unsupportedIterableToArray$d(e, r) {
  if (e) {
    if (typeof e == 'string') return _arrayLikeToArray$d(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (t === 'Object' && e.constructor && (t = e.constructor.name),
      t === 'Map' || t === 'Set')
    )
      return Array.from(e);
    if (t === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return _arrayLikeToArray$d(e, r);
  }
}
function _iterableToArray$6(e) {
  if (
    (typeof Symbol < 'u' && e[Symbol.iterator] != null) ||
    e['@@iterator'] != null
  )
    return Array.from(e);
}
function _arrayWithoutHoles$6(e) {
  if (Array.isArray(e)) return _arrayLikeToArray$d(e);
}
function _arrayLikeToArray$d(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
  return n;
}
function _classCallCheck$c(e, r) {
  if (!(e instanceof r))
    throw new TypeError('Cannot call a class as a function');
}
function _defineProperties$c(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function _createClass$c(e, r, t) {
  return (
    r && _defineProperties$c(e.prototype, r),
    t && _defineProperties$c(e, t),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
  );
}
var globalWindow$2 = window_1.window,
  HooksContext = (function () {
    function e() {
      var r = this;
      _classCallCheck$c(this, e),
        (this.hookListsMap = void 0),
        (this.mountedDecorators = void 0),
        (this.prevMountedDecorators = void 0),
        (this.currentHooks = void 0),
        (this.nextHookIndex = void 0),
        (this.currentPhase = void 0),
        (this.currentEffects = void 0),
        (this.prevEffects = void 0),
        (this.currentDecoratorName = void 0),
        (this.hasUpdates = void 0),
        (this.currentContext = void 0),
        (this.renderListener = function (t) {
          t === r.currentContext.id &&
            (r.triggerEffects(),
            (r.currentContext = null),
            r.removeRenderListeners());
        }),
        this.init();
    }
    return (
      _createClass$c(e, [
        {
          key: 'init',
          value: function () {
            (this.hookListsMap = new WeakMap()),
              (this.mountedDecorators = new Set()),
              (this.prevMountedDecorators = this.mountedDecorators),
              (this.currentHooks = []),
              (this.nextHookIndex = 0),
              (this.currentPhase = 'NONE'),
              (this.currentEffects = []),
              (this.prevEffects = []),
              (this.currentDecoratorName = null),
              (this.hasUpdates = !1),
              (this.currentContext = null);
          },
        },
        {
          key: 'clean',
          value: function () {
            this.prevEffects.forEach(function (t) {
              t.destroy && t.destroy();
            }),
              this.init(),
              this.removeRenderListeners();
          },
        },
        {
          key: 'getNextHook',
          value: function () {
            var t = this.currentHooks[this.nextHookIndex];
            return (this.nextHookIndex += 1), t;
          },
        },
        {
          key: 'triggerEffects',
          value: function () {
            var t = this;
            this.prevEffects.forEach(function (n) {
              !t.currentEffects.includes(n) && n.destroy && n.destroy();
            }),
              this.currentEffects.forEach(function (n) {
                t.prevEffects.includes(n) || (n.destroy = n.create());
              }),
              (this.prevEffects = this.currentEffects),
              (this.currentEffects = []);
          },
        },
        {
          key: 'addRenderListeners',
          value: function () {
            this.removeRenderListeners();
            var t = addons.getChannel();
            t.on(STORY_RENDERED, this.renderListener);
          },
        },
        {
          key: 'removeRenderListeners',
          value: function () {
            var t = addons.getChannel();
            t.removeListener(STORY_RENDERED, this.renderListener);
          },
        },
      ]),
      e
    );
  })();
function hookify(e) {
  return function () {
    var r =
        typeof (arguments.length <= 0 ? void 0 : arguments[0]) == 'function'
          ? arguments.length <= 1
            ? void 0
            : arguments[1]
          : arguments.length <= 0
          ? void 0
          : arguments[0],
      t = r.hooks,
      n = t.currentPhase,
      o = t.currentHooks,
      s = t.nextHookIndex,
      a = t.currentDecoratorName;
    (t.currentDecoratorName = e.name),
      t.prevMountedDecorators.has(e)
        ? ((t.currentPhase = 'UPDATE'),
          (t.currentHooks = t.hookListsMap.get(e) || []))
        : ((t.currentPhase = 'MOUNT'),
          (t.currentHooks = []),
          t.hookListsMap.set(e, t.currentHooks),
          t.prevMountedDecorators.add(e)),
      (t.nextHookIndex = 0);
    var i = globalWindow$2.STORYBOOK_HOOKS_CONTEXT;
    globalWindow$2.STORYBOOK_HOOKS_CONTEXT = t;
    var c = e.apply(void 0, arguments);
    if (
      ((globalWindow$2.STORYBOOK_HOOKS_CONTEXT = i),
      t.currentPhase === 'UPDATE' && t.getNextHook() != null)
    )
      throw new Error(
        'Rendered fewer hooks than expected. This may be caused by an accidental early return statement.',
      );
    return (
      (t.currentPhase = n),
      (t.currentHooks = o),
      (t.nextHookIndex = s),
      (t.currentDecoratorName = a),
      c
    );
  };
}
var numberOfRenders = 0,
  RENDER_LIMIT = 25,
  applyHooks = function (r) {
    return function (t, n) {
      var o = r(
        hookify(t),
        n.map(function (s) {
          return hookify(s);
        }),
      );
      return function (s) {
        var a = s,
          i = a.hooks;
        (i.prevMountedDecorators = i.mountedDecorators),
          (i.mountedDecorators = new Set([t].concat(_toConsumableArray$6(n)))),
          (i.currentContext = s),
          (i.hasUpdates = !1);
        var c = o(s);
        for (numberOfRenders = 1; i.hasUpdates; )
          if (
            ((i.hasUpdates = !1),
            (i.currentEffects = []),
            (c = o(s)),
            (numberOfRenders += 1),
            numberOfRenders > RENDER_LIMIT)
          )
            throw new Error(
              'Too many re-renders. Storybook limits the number of renders to prevent an infinite loop.',
            );
        return i.addRenderListeners(), c;
      };
    };
  },
  areDepsEqual = function (r, t) {
    return (
      r.length === t.length &&
      r.every(function (n, o) {
        return n === t[o];
      })
    );
  },
  invalidHooksError = function () {
    return new Error(
      'Storybook preview hooks can only be called inside decorators and story functions.',
    );
  };
function getHooksContextOrNull() {
  return globalWindow$2.STORYBOOK_HOOKS_CONTEXT || null;
}
function getHooksContextOrThrow() {
  var e = getHooksContextOrNull();
  if (e == null) throw invalidHooksError();
  return e;
}
function useHook(e, r, t) {
  var n = getHooksContextOrThrow();
  if (n.currentPhase === 'MOUNT') {
    t != null &&
      !Array.isArray(t) &&
      logger.warn(
        ''
          .concat(
            e,
            ' received a final argument that is not an array (instead, received ',
          )
          .concat(t, '). When specified, the final argument must be an array.'),
      );
    var o = { name: e, deps: t };
    return n.currentHooks.push(o), r(o), o;
  }
  if (n.currentPhase === 'UPDATE') {
    var s = n.getNextHook();
    if (s == null)
      throw new Error('Rendered more hooks than during the previous render.');
    return (
      s.name !== e &&
        logger.warn(
          'Storybook has detected a change in the order of Hooks'.concat(
            n.currentDecoratorName
              ? ' called by '.concat(n.currentDecoratorName)
              : '',
            '. This will lead to bugs and errors if not fixed.',
          ),
        ),
      t != null &&
        s.deps == null &&
        logger.warn(
          ''.concat(
            e,
            ' received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.',
          ),
        ),
      t != null &&
        s.deps != null &&
        t.length !== s.deps.length &&
        logger.warn(
          'The final argument passed to '
            .concat(
              e,
              ` changed size between renders. The order and size of this array must remain constant.
Previous: `,
            )
            .concat(
              s.deps,
              `
Incoming: `,
            )
            .concat(t),
        ),
      (t == null || s.deps == null || !areDepsEqual(t, s.deps)) &&
        (r(s), (s.deps = t)),
      s
    );
  }
  throw invalidHooksError();
}
function useMemoLike(e, r, t) {
  var n = useHook(
      e,
      function (s) {
        s.memoizedState = r();
      },
      t,
    ),
    o = n.memoizedState;
  return o;
}
function useMemo(e, r) {
  return useMemoLike('useMemo', e, r);
}
function useEffect(e, r) {
  var t = getHooksContextOrThrow(),
    n = useMemoLike(
      'useEffect',
      function () {
        return { create: e };
      },
      r,
    );
  t.currentEffects.includes(n) || t.currentEffects.push(n);
}
var _excluded$4 = [
  'componentId',
  'title',
  'kind',
  'id',
  'name',
  'story',
  'parameters',
  'initialArgs',
  'argTypes',
];
function _objectWithoutProperties$4(e, r) {
  if (e == null) return {};
  var t = _objectWithoutPropertiesLoose$4(e, r),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (o = 0; o < s.length; o++)
      (n = s[o]),
        !(r.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (t[n] = e[n]);
  }
  return t;
}
function _objectWithoutPropertiesLoose$4(e, r) {
  if (e == null) return {};
  var t = {},
    n = Object.keys(e),
    o,
    s;
  for (s = 0; s < n.length; s++)
    (o = n[s]), !(r.indexOf(o) >= 0) && (t[o] = e[o]);
  return t;
}
function decorateStory(e, r, t) {
  var n = t(e);
  return function (o) {
    return r(n, o);
  };
}
function sanitizeStoryContextUpdate() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  e.componentId,
    e.title,
    e.kind,
    e.id,
    e.name,
    e.story,
    e.parameters,
    e.initialArgs,
    e.argTypes;
  var r = _objectWithoutProperties$4(e, _excluded$4);
  return r;
}
function defaultDecorateStory(e, r) {
  var t = {},
    n = function (a) {
      return function (i) {
        return (
          (t.value = Object.assign({}, t.value, sanitizeStoryContextUpdate(i))),
          a(t.value)
        );
      };
    },
    o = r.reduce(function (s, a) {
      return decorateStory(s, a, n);
    }, e);
  return function (s) {
    return (t.value = s), o(s);
  };
}
var _templateObject$8;
function _slicedToArray$7(e, r) {
  return (
    _arrayWithHoles$8(e) ||
    _iterableToArrayLimit$7(e, r) ||
    _unsupportedIterableToArray$c(e, r) ||
    _nonIterableRest$8()
  );
}
function _nonIterableRest$8() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _iterableToArrayLimit$7(e, r) {
  var t =
    e == null
      ? null
      : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (t != null) {
    var n = [],
      o = !0,
      s = !1,
      a,
      i;
    try {
      for (
        t = t.call(e);
        !(o = (a = t.next()).done) && (n.push(a.value), !(r && n.length === r));
        o = !0
      );
    } catch (c) {
      (s = !0), (i = c);
    } finally {
      try {
        !o && t.return != null && t.return();
      } finally {
        if (s) throw i;
      }
    }
    return n;
  }
}
function _arrayWithHoles$8(e) {
  if (Array.isArray(e)) return e;
}
function asyncGeneratorStep$5(e, r, t, n, o, s, a) {
  try {
    var i = e[s](a),
      c = i.value;
  } catch (l) {
    t(l);
    return;
  }
  i.done ? r(c) : Promise.resolve(c).then(n, o);
}
function _asyncToGenerator$5(e) {
  return function () {
    var r = this,
      t = arguments;
    return new Promise(function (n, o) {
      var s = e.apply(r, t);
      function a(c) {
        asyncGeneratorStep$5(s, n, o, a, i, 'next', c);
      }
      function i(c) {
        asyncGeneratorStep$5(s, n, o, a, i, 'throw', c);
      }
      a(void 0);
    });
  };
}
function _toConsumableArray$5(e) {
  return (
    _arrayWithoutHoles$5(e) ||
    _iterableToArray$5(e) ||
    _unsupportedIterableToArray$c(e) ||
    _nonIterableSpread$5()
  );
}
function _nonIterableSpread$5() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _unsupportedIterableToArray$c(e, r) {
  if (e) {
    if (typeof e == 'string') return _arrayLikeToArray$c(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (t === 'Object' && e.constructor && (t = e.constructor.name),
      t === 'Map' || t === 'Set')
    )
      return Array.from(e);
    if (t === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return _arrayLikeToArray$c(e, r);
  }
}
function _iterableToArray$5(e) {
  if (
    (typeof Symbol < 'u' && e[Symbol.iterator] != null) ||
    e['@@iterator'] != null
  )
    return Array.from(e);
}
function _arrayWithoutHoles$5(e) {
  if (Array.isArray(e)) return _arrayLikeToArray$c(e);
}
function _arrayLikeToArray$c(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
  return n;
}
function _taggedTemplateLiteral$8(e, r) {
  return (
    r || (r = e.slice(0)),
    Object.freeze(
      Object.defineProperties(e, { raw: { value: Object.freeze(r) } }),
    )
  );
}
var argTypeDefaultValueWarning = browser(
  function () {},
  dedent(
    _templateObject$8 ||
      (_templateObject$8 = _taggedTemplateLiteral$8(
        [
          `
  \`argType.defaultValue\` is deprecated and will be removed in Storybook 7.0.

  https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#no-longer-inferring-default-values-of-args`,
        ],
        [
          `
  \\\`argType.defaultValue\\\` is deprecated and will be removed in Storybook 7.0.

  https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#no-longer-inferring-default-values-of-args`,
        ],
      )),
  ),
);
function prepareStory(e, r, t) {
  var n,
    o = e.id,
    s = e.name,
    a = r.title,
    i = combineParameters(t.parameters, r.parameters, e.parameters),
    c = [].concat(
      _toConsumableArray$5(e.decorators || []),
      _toConsumableArray$5(r.decorators || []),
      _toConsumableArray$5(t.decorators || []),
    ),
    l = t.applyDecorators,
    u = l === void 0 ? defaultDecorateStory : l,
    p = t.argTypesEnhancers,
    d = p === void 0 ? [] : p,
    y = t.argsEnhancers,
    h = y === void 0 ? [] : y,
    g = [].concat(
      _toConsumableArray$5(t.loaders || []),
      _toConsumableArray$5(r.loaders || []),
      _toConsumableArray$5(e.loaders || []),
    ),
    m = e.userStoryFn || e.render || r.render || t.render,
    S = combineParameters(t.argTypes, r.argTypes, e.argTypes),
    b = i.passArgsFirst,
    E = b === void 0 ? !0 : b;
  i.__isArgsStory = E && m.length > 0;
  var w = Object.assign({}, t.args, r.args, e.args),
    v = {
      componentId: r.id,
      title: a,
      kind: a,
      id: o,
      name: s,
      story: s,
      component: r.component,
      subcomponents: r.subcomponents,
      parameters: i,
      initialArgs: w,
      argTypes: S,
    };
  v.argTypes = d.reduce(function (L, R) {
    return R(Object.assign({}, v, { argTypes: L }));
  }, v.argTypes);
  var A = getValuesFromArgTypes(v.argTypes);
  Object.keys(A).length > 0 && argTypeDefaultValueWarning();
  var P = Object.assign({}, A, w);
  (v.initialArgs = h.reduce(function (L, R) {
    return Object.assign({}, L, R(Object.assign({}, v, { initialArgs: L })));
  }, P)),
    ((n = window_1.FEATURES) !== null && n !== void 0 && n.breakingChangesV7) ||
      (v.parameters = Object.assign({}, v.parameters, {
        __id: o,
        globals: t.globals,
        globalTypes: t.globalTypes,
        args: v.initialArgs,
        argTypes: v.argTypes,
      }));
  var _ = (function () {
      var L = _asyncToGenerator$5(
        regeneratorRuntime.mark(function R(k) {
          var q, C;
          return regeneratorRuntime.wrap(function (D) {
            for (;;)
              switch ((D.prev = D.next)) {
                case 0:
                  return (
                    (D.next = 2),
                    Promise.all(
                      g.map(function (j) {
                        return j(k);
                      }),
                    )
                  );
                case 2:
                  return (
                    (q = D.sent),
                    (C = Object.assign.apply(
                      Object,
                      [{}].concat(_toConsumableArray$5(q)),
                    )),
                    D.abrupt('return', Object.assign({}, k, { loaded: C }))
                  );
                case 5:
                case 'end':
                  return D.stop();
              }
          }, R);
        }),
      );
      return function (k) {
        return L.apply(this, arguments);
      };
    })(),
    O = function (R) {
      var k = Object.entries(R.args).reduce(function (j, M) {
          var x,
            N = _slicedToArray$7(M, 2),
            G = N[0],
            F = N[1],
            H =
              (x = R.argTypes[G]) === null || x === void 0 ? void 0 : x.mapping;
          return (j[G] = H && F in H ? H[F] : F), j;
        }, {}),
        q = Object.entries(k).reduce(function (j, M) {
          var x = _slicedToArray$7(M, 2),
            N = x[0],
            G = x[1],
            F = R.argTypes[N] || {};
          return dist.includeConditionalArg(F, k, R.globals) && (j[N] = G), j;
        }, {}),
        C = Object.assign({}, R, { args: q }),
        U = R.parameters.passArgsFirst,
        D = U === void 0 ? !0 : U;
      return D ? m(C.args, C) : m(C);
    },
    I = applyHooks(u)(O, c),
    T = function (R) {
      var k,
        q = R;
      if (
        (k = window_1.FEATURES) !== null &&
        k !== void 0 &&
        k.argTypeTargetsV7
      ) {
        var C = groupArgsByTarget(Object.assign({ args: R.args }, R));
        q = Object.assign({}, R, {
          allArgs: R.args,
          argsByTarget: C,
          args: C[NO_TARGET_NAME] || {},
        });
      }
      return I(q);
    },
    $ = e.play;
  return Object.freeze(
    Object.assign({}, v, {
      originalStoryFn: m,
      undecoratedStoryFn: O,
      unboundStoryFn: T,
      applyLoaders: _,
      playFunction: $,
    }),
  );
}
var _templateObject$7;
function _taggedTemplateLiteral$7(e, r) {
  return (
    r || (r = e.slice(0)),
    Object.freeze(
      Object.defineProperties(e, { raw: { value: Object.freeze(r) } }),
    )
  );
}
function _typeof$3(e) {
  return (
    (_typeof$3 =
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
    _typeof$3(e)
  );
}
var inferType = function e(r, t, n) {
    var o = _typeof$3(r);
    switch (o) {
      case 'boolean':
      case 'string':
      case 'number':
      case 'function':
      case 'symbol':
        return { name: o };
    }
    if (r) {
      if (n.has(r))
        return (
          logger.warn(
            dedent(
              _templateObject$7 ||
                (_templateObject$7 = _taggedTemplateLiteral$7([
                  `
        We've detected a cycle in arg '`,
                  `'. Args should be JSON-serializable.

        Consider using the mapping feature or fully custom args:
        - Mapping: https://storybook.js.org/docs/react/writing-stories/args#mapping-to-complex-arg-values
        - Custom args: https://storybook.js.org/docs/react/essentials/controls#fully-custom-args
      `,
                ])),
              t,
            ),
          ),
          { name: 'other', value: 'cyclic object' }
        );
      if ((n.add(r), Array.isArray(r))) {
        var s =
          r.length > 0
            ? e(r[0], t, new Set(n))
            : { name: 'other', value: 'unknown' };
        return { name: 'array', value: s };
      }
      var a = mapValues_1(r, function (i) {
        return e(i, t, new Set(n));
      });
      return { name: 'object', value: a };
    }
    return { name: 'object', value: {} };
  },
  inferArgTypes = function (r) {
    var t = r.id,
      n = r.argTypes,
      o = n === void 0 ? {} : n,
      s = r.initialArgs,
      a = s === void 0 ? {} : s,
      i = mapValues_1(a, function (l, u) {
        return {
          name: u,
          type: inferType(l, ''.concat(t, '.').concat(u), new Set()),
        };
      }),
      c = mapValues_1(o, function (l, u) {
        return { name: u };
      });
    return combineParameters(i, c, o);
  };
inferArgTypes.secondPass = !0;
var arrayPush = _arrayPush,
  getPrototype = _getPrototype,
  getSymbols = _getSymbols,
  stubArray = stubArray_1,
  nativeGetSymbols = Object.getOwnPropertySymbols,
  getSymbolsIn$1 = nativeGetSymbols
    ? function (e) {
        for (var r = []; e; )
          arrayPush(r, getSymbols(e)), (e = getPrototype(e));
        return r;
      }
    : stubArray,
  _getSymbolsIn = getSymbolsIn$1;
function nativeKeysIn$1(e) {
  var r = [];
  if (e != null) for (var t in Object(e)) r.push(t);
  return r;
}
var _nativeKeysIn = nativeKeysIn$1,
  isObject$3 = isObject_1,
  isPrototype = _isPrototype,
  nativeKeysIn = _nativeKeysIn,
  objectProto = Object.prototype,
  hasOwnProperty = objectProto.hasOwnProperty;
function baseKeysIn$1(e) {
  if (!isObject$3(e)) return nativeKeysIn(e);
  var r = isPrototype(e),
    t = [];
  for (var n in e)
    (n == 'constructor' && (r || !hasOwnProperty.call(e, n))) || t.push(n);
  return t;
}
var _baseKeysIn = baseKeysIn$1,
  arrayLikeKeys = _arrayLikeKeys,
  baseKeysIn = _baseKeysIn,
  isArrayLike = isArrayLike_1;
function keysIn$1(e) {
  return isArrayLike(e) ? arrayLikeKeys(e, !0) : baseKeysIn(e);
}
var keysIn_1 = keysIn$1,
  baseGetAllKeys = _baseGetAllKeys,
  getSymbolsIn = _getSymbolsIn,
  keysIn = keysIn_1;
function getAllKeysIn$1(e) {
  return baseGetAllKeys(e, keysIn, getSymbolsIn);
}
var _getAllKeysIn = getAllKeysIn$1,
  arrayMap = _arrayMap,
  baseIteratee = _baseIteratee,
  basePickBy = _basePickBy,
  getAllKeysIn = _getAllKeysIn;
function pickBy(e, r) {
  if (e == null) return {};
  var t = arrayMap(getAllKeysIn(e), function (n) {
    return [n];
  });
  return (
    (r = baseIteratee(r)),
    basePickBy(e, t, function (n, o) {
      return r(n, o[0]);
    })
  );
}
var pickBy_1 = pickBy,
  matches = function (r, t) {
    return Array.isArray(t) ? t.includes(r) : r.match(t);
  },
  filterArgTypes = function (r, t, n) {
    return !t && !n
      ? r
      : r &&
          pickBy_1(r, function (o, s) {
            var a = o.name || s;
            return (!t || matches(a, t)) && (!n || !matches(a, n));
          });
  },
  inferControl = function (r, t, n) {
    var o = r.type,
      s = r.options;
    if (!(!o && !s)) {
      if (n.color && n.color.test(t)) {
        var a = r.type.name;
        if (a === 'string') return { control: { type: 'color' } };
        logger.warn(
          'Addon controls: Control of type color only supports string, received "'.concat(
            a,
            '" instead',
          ),
        );
      }
      if (n.date && n.date.test(t)) return { control: { type: 'date' } };
      switch (o.name) {
        case 'array':
          return { control: { type: 'object' } };
        case 'boolean':
          return { control: { type: 'boolean' } };
        case 'string':
          return { control: { type: 'text' } };
        case 'number':
          return { control: { type: 'number' } };
        case 'enum': {
          var i = o,
            c = i.value;
          return {
            control: {
              type: (c == null ? void 0 : c.length) <= 5 ? 'radio' : 'select',
            },
            options: c,
          };
        }
        case 'function':
        case 'symbol':
          return null;
        default:
          return { control: { type: s ? 'select' : 'object' } };
      }
    }
  },
  inferControls = function (r) {
    var t = r.argTypes,
      n = r.parameters,
      o = n.__isArgsStory,
      s = n.controls;
    s = s === void 0 ? {} : s;
    var a = s.include,
      i = a === void 0 ? null : a,
      c = s.exclude,
      l = c === void 0 ? null : c,
      u = s.matchers,
      p = u === void 0 ? {} : u;
    if (!o) return t;
    var d = filterArgTypes(t, i, l),
      y = mapValues_1(d, function (h, g) {
        return (h == null ? void 0 : h.type) && inferControl(h, g, p);
      });
    return combineParameters(y, d);
  };
inferControls.secondPass = !0;
var _excluded$3 = ['argTypes', 'globalTypes', 'argTypesEnhancers'];
function _toConsumableArray$4(e) {
  return (
    _arrayWithoutHoles$4(e) ||
    _iterableToArray$4(e) ||
    _unsupportedIterableToArray$b(e) ||
    _nonIterableSpread$4()
  );
}
function _nonIterableSpread$4() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _unsupportedIterableToArray$b(e, r) {
  if (e) {
    if (typeof e == 'string') return _arrayLikeToArray$b(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (t === 'Object' && e.constructor && (t = e.constructor.name),
      t === 'Map' || t === 'Set')
    )
      return Array.from(e);
    if (t === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return _arrayLikeToArray$b(e, r);
  }
}
function _iterableToArray$4(e) {
  if (
    (typeof Symbol < 'u' && e[Symbol.iterator] != null) ||
    e['@@iterator'] != null
  )
    return Array.from(e);
}
function _arrayWithoutHoles$4(e) {
  if (Array.isArray(e)) return _arrayLikeToArray$b(e);
}
function _arrayLikeToArray$b(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
  return n;
}
function _objectWithoutProperties$3(e, r) {
  if (e == null) return {};
  var t = _objectWithoutPropertiesLoose$3(e, r),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (o = 0; o < s.length; o++)
      (n = s[o]),
        !(r.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (t[n] = e[n]);
  }
  return t;
}
function _objectWithoutPropertiesLoose$3(e, r) {
  if (e == null) return {};
  var t = {},
    n = Object.keys(e),
    o,
    s;
  for (s = 0; s < n.length; s++)
    (o = n[s]), !(r.indexOf(o) >= 0) && (t[o] = e[o]);
  return t;
}
function normalizeProjectAnnotations(e) {
  var r = e.argTypes,
    t = e.globalTypes,
    n = e.argTypesEnhancers,
    o = _objectWithoutProperties$3(e, _excluded$3);
  return Object.assign(
    {},
    r && { argTypes: normalizeInputTypes(r) },
    t && { globalTypes: normalizeInputTypes(t) },
    {
      argTypesEnhancers: [].concat(_toConsumableArray$4(n || []), [
        inferArgTypes,
        inferControls,
      ]),
    },
    o,
  );
}
function _toConsumableArray$3(e) {
  return (
    _arrayWithoutHoles$3(e) ||
    _iterableToArray$3(e) ||
    _unsupportedIterableToArray$a(e) ||
    _nonIterableSpread$3()
  );
}
function _nonIterableSpread$3() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _unsupportedIterableToArray$a(e, r) {
  if (e) {
    if (typeof e == 'string') return _arrayLikeToArray$a(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (t === 'Object' && e.constructor && (t = e.constructor.name),
      t === 'Map' || t === 'Set')
    )
      return Array.from(e);
    if (t === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return _arrayLikeToArray$a(e, r);
  }
}
function _iterableToArray$3(e) {
  if (
    (typeof Symbol < 'u' && e[Symbol.iterator] != null) ||
    e['@@iterator'] != null
  )
    return Array.from(e);
}
function _arrayWithoutHoles$3(e) {
  if (Array.isArray(e)) return _arrayLikeToArray$a(e);
}
function _arrayLikeToArray$a(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
  return n;
}
function getField(e, r) {
  return e
    .map(function (t) {
      return t[r];
    })
    .filter(Boolean);
}
function getArrayField(e, r) {
  return getField(e, r).reduce(function (t, n) {
    return [].concat(_toConsumableArray$3(t), _toConsumableArray$3(n));
  }, []);
}
function getObjectField(e, r) {
  return Object.assign.apply(
    Object,
    [{}].concat(_toConsumableArray$3(getField(e, r))),
  );
}
function getSingletonField(e, r) {
  return getField(e, r).pop();
}
function composeConfigs(e) {
  var r = getArrayField(e, 'argTypesEnhancers');
  return {
    parameters: combineParameters.apply(
      void 0,
      _toConsumableArray$3(getField(e, 'parameters')),
    ),
    decorators: getArrayField(e, 'decorators'),
    args: getObjectField(e, 'args'),
    argsEnhancers: getArrayField(e, 'argsEnhancers'),
    argTypes: getObjectField(e, 'argTypes'),
    argTypesEnhancers: [].concat(
      _toConsumableArray$3(
        r.filter(function (t) {
          return !t.secondPass;
        }),
      ),
      _toConsumableArray$3(
        r.filter(function (t) {
          return t.secondPass;
        }),
      ),
    ),
    globals: getObjectField(e, 'globals'),
    globalTypes: getObjectField(e, 'globalTypes'),
    loaders: getArrayField(e, 'loaders'),
    render: getSingletonField(e, 'render'),
    renderToDOM: getSingletonField(e, 'renderToDOM'),
    applyDecorators: getSingletonField(e, 'applyDecorators'),
  };
}
function _defineProperty$3(e, r, t) {
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
function _slicedToArray$6(e, r) {
  return (
    _arrayWithHoles$7(e) ||
    _iterableToArrayLimit$6(e, r) ||
    _unsupportedIterableToArray$9(e, r) ||
    _nonIterableRest$7()
  );
}
function _nonIterableRest$7() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _unsupportedIterableToArray$9(e, r) {
  if (e) {
    if (typeof e == 'string') return _arrayLikeToArray$9(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (t === 'Object' && e.constructor && (t = e.constructor.name),
      t === 'Map' || t === 'Set')
    )
      return Array.from(e);
    if (t === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return _arrayLikeToArray$9(e, r);
  }
}
function _arrayLikeToArray$9(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
  return n;
}
function _iterableToArrayLimit$6(e, r) {
  var t =
    e == null
      ? null
      : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (t != null) {
    var n = [],
      o = !0,
      s = !1,
      a,
      i;
    try {
      for (
        t = t.call(e);
        !(o = (a = t.next()).done) && (n.push(a.value), !(r && n.length === r));
        o = !0
      );
    } catch (c) {
      (s = !0), (i = c);
    } finally {
      try {
        !o && t.return != null && t.return();
      } finally {
        if (s) throw i;
      }
    }
    return n;
  }
}
function _arrayWithHoles$7(e) {
  if (Array.isArray(e)) return e;
}
function asyncGeneratorStep$4(e, r, t, n, o, s, a) {
  try {
    var i = e[s](a),
      c = i.value;
  } catch (l) {
    t(l);
    return;
  }
  i.done ? r(c) : Promise.resolve(c).then(n, o);
}
function _asyncToGenerator$4(e) {
  return function () {
    var r = this,
      t = arguments;
    return new Promise(function (n, o) {
      var s = e.apply(r, t);
      function a(c) {
        asyncGeneratorStep$4(s, n, o, a, i, 'next', c);
      }
      function i(c) {
        asyncGeneratorStep$4(s, n, o, a, i, 'throw', c);
      }
      a(void 0);
    });
  };
}
function _classCallCheck$b(e, r) {
  if (!(e instanceof r))
    throw new TypeError('Cannot call a class as a function');
}
function _defineProperties$b(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function _createClass$b(e, r, t) {
  return (
    r && _defineProperties$b(e.prototype, r),
    t && _defineProperties$b(e, t),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
  );
}
var CSF_CACHE_SIZE = 1e3,
  STORY_CACHE_SIZE = 1e4,
  StoryStore = (function () {
    function e() {
      var r = this;
      _classCallCheck$b(this, e),
        (this.storyIndex = void 0),
        (this.importFn = void 0),
        (this.projectAnnotations = void 0),
        (this.globals = void 0),
        (this.args = void 0),
        (this.hooks = void 0),
        (this.cachedCSFFiles = void 0),
        (this.processCSFFileWithCache = void 0),
        (this.prepareStoryWithCache = void 0),
        (this.initializationPromise = void 0),
        (this.resolveInitializationPromise = void 0),
        (this.getStoriesJsonData = function () {
          var t = r.getSetStoriesPayload(),
            n = ['fileName', 'docsOnly', 'framework', '__id', '__isArgsStory'],
            o = mapValues_1(t.stories, function (s) {
              var a;
              return Object.assign(
                {},
                pick_1(s, ['id', 'name', 'title']),
                { importPath: r.storyIndex.stories[s.id].importPath },
                !(
                  (a = window_1.FEATURES) !== null &&
                  a !== void 0 &&
                  a.breakingChangesV7
                ) && {
                  kind: s.title,
                  story: s.name,
                  parameters: Object.assign({}, pick_1(s.parameters, n), {
                    fileName: r.storyIndex.stories[s.id].importPath,
                  }),
                },
              );
            });
          return { v: 3, stories: o };
        }),
        (this.globals = new GlobalsStore()),
        (this.args = new ArgsStore()),
        (this.hooks = {}),
        (this.processCSFFileWithCache =
          memoize$2(CSF_CACHE_SIZE)(processCSFFile)),
        (this.prepareStoryWithCache =
          memoize$2(STORY_CACHE_SIZE)(prepareStory)),
        (this.initializationPromise = new synchronousPromise.SynchronousPromise(
          function (t) {
            r.resolveInitializationPromise = t;
          },
        ));
    }
    return (
      _createClass$b(e, [
        {
          key: 'setProjectAnnotations',
          value: function (t) {
            this.projectAnnotations = normalizeProjectAnnotations(t);
            var n = t.globals,
              o = t.globalTypes;
            this.globals.set({ globals: n, globalTypes: o });
          },
        },
        {
          key: 'initialize',
          value: function (t) {
            var n = t.storyIndex,
              o = t.importFn,
              s = t.cache,
              a = s === void 0 ? !1 : s;
            return (
              (this.storyIndex = new StoryIndexStore(n)),
              (this.importFn = o),
              this.resolveInitializationPromise(),
              a
                ? this.cacheAllCSFFiles()
                : synchronousPromise.SynchronousPromise.resolve()
            );
          },
        },
        {
          key: 'onStoriesChanged',
          value: (function () {
            var r = _asyncToGenerator$4(
              regeneratorRuntime.mark(function n(o) {
                var s, a;
                return regeneratorRuntime.wrap(
                  function (c) {
                    for (;;)
                      switch ((c.prev = c.next)) {
                        case 0:
                          if (
                            ((s = o.importFn),
                            (a = o.storyIndex),
                            s && (this.importFn = s),
                            a && (this.storyIndex.stories = a.stories),
                            !this.cachedCSFFiles)
                          ) {
                            c.next = 6;
                            break;
                          }
                          return (c.next = 6), this.cacheAllCSFFiles();
                        case 6:
                        case 'end':
                          return c.stop();
                      }
                  },
                  n,
                  this,
                );
              }),
            );
            function t(n) {
              return r.apply(this, arguments);
            }
            return t;
          })(),
        },
        {
          key: 'loadCSFFileByStoryId',
          value: function (t) {
            var n = this,
              o = this.storyIndex.storyIdToEntry(t),
              s = o.importPath,
              a = o.title;
            return this.importFn(s).then(function (i) {
              return n.processCSFFileWithCache(i, s, a);
            });
          },
        },
        {
          key: 'loadAllCSFFiles',
          value: function () {
            var t = this,
              n = {};
            Object.entries(this.storyIndex.stories).forEach(function (s) {
              var a = _slicedToArray$6(s, 2),
                i = a[0],
                c = a[1].importPath;
              n[c] = i;
            });
            var o = Object.entries(n).map(function (s) {
              var a = _slicedToArray$6(s, 2),
                i = a[0],
                c = a[1];
              return t.loadCSFFileByStoryId(c).then(function (l) {
                return { importPath: i, csfFile: l };
              });
            });
            return synchronousPromise.SynchronousPromise.all(o).then(function (
              s,
            ) {
              return s.reduce(function (a, i) {
                var c = i.importPath,
                  l = i.csfFile;
                return (a[c] = l), a;
              }, {});
            });
          },
        },
        {
          key: 'cacheAllCSFFiles',
          value: function () {
            var t = this;
            return this.initializationPromise.then(function () {
              return t.loadAllCSFFiles().then(function (n) {
                t.cachedCSFFiles = n;
              });
            });
          },
        },
        {
          key: 'loadStory',
          value: (function () {
            var r = _asyncToGenerator$4(
              regeneratorRuntime.mark(function n(o) {
                var s, a;
                return regeneratorRuntime.wrap(
                  function (c) {
                    for (;;)
                      switch ((c.prev = c.next)) {
                        case 0:
                          return (
                            (s = o.storyId),
                            (c.next = 3),
                            this.initializationPromise
                          );
                        case 3:
                          return (c.next = 5), this.loadCSFFileByStoryId(s);
                        case 5:
                          return (
                            (a = c.sent),
                            c.abrupt(
                              'return',
                              this.storyFromCSFFile({ storyId: s, csfFile: a }),
                            )
                          );
                        case 7:
                        case 'end':
                          return c.stop();
                      }
                  },
                  n,
                  this,
                );
              }),
            );
            function t(n) {
              return r.apply(this, arguments);
            }
            return t;
          })(),
        },
        {
          key: 'storyFromCSFFile',
          value: function (t) {
            var n = t.storyId,
              o = t.csfFile,
              s = o.stories[n];
            if (!s)
              throw new Error(
                "Didn't find '".concat(n, "' in CSF file, this is unexpected"),
              );
            var a = o.meta,
              i = this.prepareStoryWithCache(s, a, this.projectAnnotations);
            return (
              this.args.setInitial(i),
              (this.hooks[i.id] = this.hooks[i.id] || new HooksContext()),
              i
            );
          },
        },
        {
          key: 'componentStoriesFromCSFFile',
          value: function (t) {
            var n = this,
              o = t.csfFile;
            return Object.keys(this.storyIndex.stories)
              .filter(function (s) {
                return !!o.stories[s];
              })
              .map(function (s) {
                return n.storyFromCSFFile({ storyId: s, csfFile: o });
              });
          },
        },
        {
          key: 'getStoryContext',
          value: function (t) {
            return Object.assign({}, t, {
              args: this.args.get(t.id),
              globals: this.globals.get(),
              hooks: this.hooks[t.id],
            });
          },
        },
        {
          key: 'cleanupStory',
          value: function (t) {
            this.hooks[t.id].clean();
          },
        },
        {
          key: 'extract',
          value: function () {
            var t = this,
              n =
                arguments.length > 0 && arguments[0] !== void 0
                  ? arguments[0]
                  : { includeDocsOnly: !1 };
            if (!this.cachedCSFFiles)
              throw new Error(
                'Cannot call extract() unless you call cacheAllCSFFiles() first.',
              );
            return Object.entries(this.storyIndex.stories).reduce(function (
              o,
              s,
            ) {
              var a = _slicedToArray$6(s, 2),
                i = a[0],
                c = a[1].importPath,
                l = t.cachedCSFFiles[c],
                u = t.storyFromCSFFile({ storyId: i, csfFile: l });
              return (
                (!n.includeDocsOnly && u.parameters.docsOnly) ||
                  (o[i] = Object.entries(u).reduce(
                    function (p, d) {
                      var y = _slicedToArray$6(d, 2),
                        h = y[0],
                        g = y[1];
                      return typeof g == 'function'
                        ? p
                        : Array.isArray(g)
                        ? Object.assign(
                            p,
                            _defineProperty$3({}, h, g.slice().sort()),
                          )
                        : Object.assign(p, _defineProperty$3({}, h, g));
                    },
                    { args: u.initialArgs },
                  )),
                o
              );
            },
            {});
          },
        },
        {
          key: 'getSetStoriesPayload',
          value: function () {
            var t = this.extract({ includeDocsOnly: !0 }),
              n = Object.values(t).reduce(function (o, s) {
                var a = s.title;
                return (o[a] = {}), o;
              }, {});
            return {
              v: 2,
              globals: this.globals.get(),
              globalParameters: {},
              kindParameters: n,
              stories: t,
            };
          },
        },
        {
          key: 'raw',
          value: function () {
            var t = this;
            return Object.values(this.extract()).map(function (n) {
              var o = n.id;
              return t.fromId(o);
            });
          },
        },
        {
          key: 'fromId',
          value: function (t) {
            var n = this;
            if (!this.cachedCSFFiles)
              throw new Error(
                'Cannot call fromId/raw() unless you call cacheAllCSFFiles() first.',
              );
            var o;
            try {
              var s = this.storyIndex.storyIdToEntry(t);
              o = s.importPath;
            } catch {
              return null;
            }
            var a = this.cachedCSFFiles[o],
              i = this.storyFromCSFFile({ storyId: t, csfFile: a });
            return Object.assign({}, i, {
              storyFn: function (l) {
                var u = Object.assign({}, n.getStoryContext(i), {
                  viewMode: 'story',
                });
                return i.unboundStoryFn(Object.assign({}, u, l));
              },
            });
          },
        },
      ]),
      e
    );
  })(),
  slash = (e) => {
    const r = /^\\\\\?\\/.test(e),
      t = /[^\u0000-\u0080]+/.test(e);
    return r || t ? e : e.replace(/\\/g, '/');
  },
  _templateObject$6;
function _taggedTemplateLiteral$6(e, r) {
  return (
    r || (r = e.slice(0)),
    Object.freeze(
      Object.defineProperties(e, { raw: { value: Object.freeze(r) } }),
    )
  );
}
function _toArray$1(e) {
  return (
    _arrayWithHoles$6(e) ||
    _iterableToArray$2(e) ||
    _unsupportedIterableToArray$8(e) ||
    _nonIterableRest$6()
  );
}
function _nonIterableRest$6() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _arrayWithHoles$6(e) {
  if (Array.isArray(e)) return e;
}
function _toConsumableArray$2(e) {
  return (
    _arrayWithoutHoles$2(e) ||
    _iterableToArray$2(e) ||
    _unsupportedIterableToArray$8(e) ||
    _nonIterableSpread$2()
  );
}
function _nonIterableSpread$2() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _unsupportedIterableToArray$8(e, r) {
  if (e) {
    if (typeof e == 'string') return _arrayLikeToArray$8(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (t === 'Object' && e.constructor && (t = e.constructor.name),
      t === 'Map' || t === 'Set')
    )
      return Array.from(e);
    if (t === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return _arrayLikeToArray$8(e, r);
  }
}
function _iterableToArray$2(e) {
  if (
    (typeof Symbol < 'u' && e[Symbol.iterator] != null) ||
    e['@@iterator'] != null
  )
    return Array.from(e);
}
function _arrayWithoutHoles$2(e) {
  if (Array.isArray(e)) return _arrayLikeToArray$8(e);
}
function _arrayLikeToArray$8(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
  return n;
}
var stripExtension = function (r) {
    var t = _toConsumableArray$2(r),
      n = t[t.length - 1],
      o = n.indexOf('.'),
      s = o > 0 ? n.substr(0, o) : n;
    t[t.length - 1] = s;
    var a = t,
      i = _toArray$1(a),
      c = i[0],
      l = i.slice(1);
    return c === '' && (t = l), t;
  },
  indexRe = /^index$/i,
  removeRedundantFilename = function (r) {
    var t;
    return r.filter(function (n, o) {
      return o === r.length - 1 && (n === t || indexRe.test(n))
        ? !1
        : ((t = n), !0);
    });
  };
function pathJoin(e) {
  var r = new RegExp('/{1,}', 'g');
  return e.join('/').replace(r, '/');
}
var userOrAutoTitleFromSpecifier = function (r, t, n) {
    var o = t || {},
      s = o.directory,
      a = o.importPathMatcher,
      i = o.titlePrefix,
      c = i === void 0 ? '' : i;
    typeof r == 'number' &&
      once.warn(
        dedent(
          _templateObject$6 ||
            (_templateObject$6 = _taggedTemplateLiteral$6([
              `
      CSF Auto-title received a numeric fileName. This typically happens when
      webpack is mis-configured in production mode. To force webpack to produce
      filenames, set optimization.moduleIds = "named" in your webpack config.
    `,
            ])),
        ),
      );
    var l = slash(String(r));
    if (a.exec(l)) {
      if (!n) {
        var u = l.replace(s, ''),
          p = slash(pathJoin([c, u])),
          d = p.split('/');
        return (
          (d = stripExtension(d)), (d = removeRedundantFilename(d)), d.join('/')
        );
      }
      return c ? slash(pathJoin([c, n])) : n;
    }
  },
  userOrAutoTitle = function (r, t, n) {
    for (var o = 0; o < t.length; o += 1) {
      var s = userOrAutoTitleFromSpecifier(r, t[o], n);
      if (s) return s;
    }
    return n || void 0;
  },
  stableExports = {},
  stable$1 = {
    get exports() {
      return stableExports;
    },
    set exports(e) {
      stableExports = e;
    },
  };
(function (e, r) {
  //! stable.js 0.1.8, https://github.com/Two-Screen/stable
  //! © 2018 Angry Bytes and contributors. MIT licensed.
  (function (t, n) {
    e.exports = n();
  })(commonjsGlobal, function () {
    var t = function (s, a) {
      return n(s.slice(), a);
    };
    t.inplace = function (s, a) {
      var i = n(s, a);
      return i !== s && o(i, null, s.length, s), s;
    };
    function n(s, a) {
      typeof a != 'function' &&
        (a = function (p, d) {
          return String(p).localeCompare(d);
        });
      var i = s.length;
      if (i <= 1) return s;
      for (var c = new Array(i), l = 1; l < i; l *= 2) {
        o(s, a, l, c);
        var u = s;
        (s = c), (c = u);
      }
      return s;
    }
    var o = function (s, a, i, c) {
      var l = s.length,
        u = 0,
        p = i * 2,
        d,
        y,
        h,
        g,
        m;
      for (d = 0; d < l; d += p)
        for (
          y = d + i,
            h = y + i,
            y > l && (y = l),
            h > l && (h = l),
            g = d,
            m = y;
          ;

        )
          if (g < y && m < h)
            a(s[g], s[m]) <= 0 ? (c[u++] = s[g++]) : (c[u++] = s[m++]);
          else if (g < y) c[u++] = s[g++];
          else if (m < h) c[u++] = s[m++];
          else break;
    };
    return t;
  });
})(stable$1);
const stable = stableExports;
var STORY_KIND_PATH_SEPARATOR = /\s*\/\s*/,
  storySort = function () {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return function (t, n) {
      if (t.title === n.title && !r.includeNames) return 0;
      var o = r.method || 'configure',
        s = r.order || [],
        a = t.title.trim().split(STORY_KIND_PATH_SEPARATOR),
        i = n.title.trim().split(STORY_KIND_PATH_SEPARATOR);
      r.includeNames && (a.push(t.name), i.push(n.name));
      for (var c = 0; a[c] || i[c]; ) {
        if (!a[c]) return -1;
        if (!i[c]) return 1;
        var l = a[c],
          u = i[c];
        if (l !== u) {
          var p = s.indexOf(l),
            d = s.indexOf(u),
            y = s.indexOf('*');
          return p !== -1 || d !== -1
            ? (p === -1 && (y !== -1 ? (p = y) : (p = s.length)),
              d === -1 && (y !== -1 ? (d = y) : (d = s.length)),
              p - d)
            : o === 'configure'
            ? 0
            : l.localeCompare(u, r.locales ? r.locales : void 0, {
                numeric: !0,
                sensitivity: 'accent',
              });
        }
        var h = s.indexOf(l);
        (s = h !== -1 && Array.isArray(s[h + 1]) ? s[h + 1] : []), (c += 1);
      }
      return 0;
    };
  },
  sortStoriesCommon = function (r, t, n) {
    if (t) {
      var o;
      typeof t == 'function' ? (o = t) : (o = storySort(t)),
        stable.inplace(r, o);
    } else
      stable.inplace(r, function (s, a) {
        return n.indexOf(s.importPath) - n.indexOf(a.importPath);
      });
    return r;
  },
  toIndexEntry = function (r) {
    var t = r.id,
      n = r.title,
      o = r.name,
      s = r.parameters;
    return { id: t, title: n, name: o, importPath: s.fileName };
  },
  sortStoriesV6 = function (r, t, n) {
    if (t && typeof t == 'function')
      return (
        stable.inplace(r, t),
        r.map(function (s) {
          return toIndexEntry(s[1]);
        })
      );
    var o = r.map(function (s) {
      return toIndexEntry(s[1]);
    });
    return sortStoriesCommon(o, t, n);
  };
function asyncGeneratorStep$3(e, r, t, n, o, s, a) {
  try {
    var i = e[s](a),
      c = i.value;
  } catch (l) {
    t(l);
    return;
  }
  i.done ? r(c) : Promise.resolve(c).then(n, o);
}
function _asyncToGenerator$3(e) {
  return function () {
    var r = this,
      t = arguments;
    return new Promise(function (n, o) {
      var s = e.apply(r, t);
      function a(c) {
        asyncGeneratorStep$3(s, n, o, a, i, 'next', c);
      }
      function i(c) {
        asyncGeneratorStep$3(s, n, o, a, i, 'throw', c);
      }
      a(void 0);
    });
  };
}
function _classCallCheck$a(e, r) {
  if (!(e instanceof r))
    throw new TypeError('Cannot call a class as a function');
}
function _defineProperties$a(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function _createClass$a(e, r, t) {
  return (
    r && _defineProperties$a(e.prototype, r),
    t && _defineProperties$a(e, t),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
  );
}
var AbortController = window_1.AbortController;
function createController() {
  return AbortController
    ? new AbortController()
    : {
        signal: { aborted: !1 },
        abort: function () {
          this.signal.aborted = !0;
        },
      };
}
var PREPARE_ABORTED = new Error('prepareAborted'),
  StoryRender = (function () {
    function e(r, t, n, o, s, a, i) {
      _classCallCheck$a(this, e),
        (this.channel = r),
        (this.store = t),
        (this.renderToScreen = n),
        (this.callbacks = o),
        (this.id = s),
        (this.viewMode = a),
        (this.story = void 0),
        (this.phase = void 0),
        (this.abortController = void 0),
        (this.canvasElement = void 0),
        (this.notYetRendered = !0),
        (this.disableKeyListeners = !1),
        (this.abortController = createController()),
        i && ((this.story = i), (this.phase = 'preparing'));
    }
    return (
      _createClass$a(e, [
        {
          key: 'runPhase',
          value: (function () {
            var r = _asyncToGenerator$3(
              regeneratorRuntime.mark(function n(o, s, a) {
                return regeneratorRuntime.wrap(
                  function (c) {
                    for (;;)
                      switch ((c.prev = c.next)) {
                        case 0:
                          if (
                            ((this.phase = s),
                            this.channel.emit(STORY_RENDER_PHASE_CHANGED, {
                              newPhase: this.phase,
                              storyId: this.id,
                            }),
                            !a)
                          ) {
                            c.next = 5;
                            break;
                          }
                          return (c.next = 5), a();
                        case 5:
                          o.aborted &&
                            ((this.phase = 'aborted'),
                            this.channel.emit(STORY_RENDER_PHASE_CHANGED, {
                              newPhase: this.phase,
                              storyId: this.id,
                            }));
                        case 6:
                        case 'end':
                          return c.stop();
                      }
                  },
                  n,
                  this,
                );
              }),
            );
            function t(n, o, s) {
              return r.apply(this, arguments);
            }
            return t;
          })(),
        },
        {
          key: 'prepare',
          value: (function () {
            var r = _asyncToGenerator$3(
              regeneratorRuntime.mark(function n() {
                var o = this;
                return regeneratorRuntime.wrap(
                  function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return (
                            (a.next = 2),
                            this.runPhase(
                              this.abortController.signal,
                              'preparing',
                              _asyncToGenerator$3(
                                regeneratorRuntime.mark(function i() {
                                  return regeneratorRuntime.wrap(function (l) {
                                    for (;;)
                                      switch ((l.prev = l.next)) {
                                        case 0:
                                          return (
                                            (l.next = 2),
                                            o.store.loadStory({ storyId: o.id })
                                          );
                                        case 2:
                                          o.story = l.sent;
                                        case 3:
                                        case 'end':
                                          return l.stop();
                                      }
                                  }, i);
                                }),
                              ),
                            )
                          );
                        case 2:
                          if (!this.abortController.signal.aborted) {
                            a.next = 5;
                            break;
                          }
                          throw (
                            (this.store.cleanupStory(this.story),
                            PREPARE_ABORTED)
                          );
                        case 5:
                        case 'end':
                          return a.stop();
                      }
                  },
                  n,
                  this,
                );
              }),
            );
            function t() {
              return r.apply(this, arguments);
            }
            return t;
          })(),
        },
        {
          key: 'isEqual',
          value: function (t) {
            return (
              t && this.id === t.id && this.story && this.story === t.story
            );
          },
        },
        {
          key: 'isPreparing',
          value: function () {
            return ['preparing'].includes(this.phase);
          },
        },
        {
          key: 'isPending',
          value: function () {
            return ['rendering', 'playing'].includes(this.phase);
          },
        },
        {
          key: 'context',
          value: function () {
            return this.store.getStoryContext(this.story);
          },
        },
        {
          key: 'renderToElement',
          value: (function () {
            var r = _asyncToGenerator$3(
              regeneratorRuntime.mark(function n(o) {
                return regeneratorRuntime.wrap(
                  function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return (
                            (this.canvasElement = o),
                            a.abrupt(
                              'return',
                              this.render({ initial: !0, forceRemount: !0 }),
                            )
                          );
                        case 2:
                        case 'end':
                          return a.stop();
                      }
                  },
                  n,
                  this,
                );
              }),
            );
            function t(n) {
              return r.apply(this, arguments);
            }
            return t;
          })(),
        },
        {
          key: 'render',
          value: (function () {
            var r = _asyncToGenerator$3(
              regeneratorRuntime.mark(function n() {
                var o = this,
                  s,
                  a,
                  i,
                  c,
                  l,
                  u,
                  p,
                  d,
                  y,
                  h,
                  g,
                  m,
                  S,
                  b,
                  E,
                  w,
                  v,
                  A = arguments;
                return regeneratorRuntime.wrap(
                  function (_) {
                    for (;;)
                      switch ((_.prev = _.next)) {
                        case 0:
                          if (
                            ((s = A.length > 0 && A[0] !== void 0 ? A[0] : {}),
                            (a = s.initial),
                            (i = a === void 0 ? !1 : a),
                            (c = s.forceRemount),
                            (l = c === void 0 ? !1 : c),
                            this.story)
                          ) {
                            _.next = 3;
                            break;
                          }
                          throw new Error('cannot render when not prepared');
                        case 3:
                          return (
                            (u = this.story),
                            (p = u.id),
                            (d = u.componentId),
                            (y = u.title),
                            (h = u.name),
                            (g = u.applyLoaders),
                            (m = u.unboundStoryFn),
                            (S = u.playFunction),
                            l &&
                              !i &&
                              (this.cancelRender(),
                              (this.abortController = createController())),
                            (b = this.abortController.signal),
                            (_.prev = 6),
                            (_.next = 9),
                            this.runPhase(
                              b,
                              'loading',
                              _asyncToGenerator$3(
                                regeneratorRuntime.mark(function O() {
                                  return regeneratorRuntime.wrap(function (T) {
                                    for (;;)
                                      switch ((T.prev = T.next)) {
                                        case 0:
                                          return (
                                            (T.next = 2),
                                            g(
                                              Object.assign({}, o.context(), {
                                                viewMode: o.viewMode,
                                              }),
                                            )
                                          );
                                        case 2:
                                          E = T.sent;
                                        case 3:
                                        case 'end':
                                          return T.stop();
                                      }
                                  }, O);
                                }),
                              ),
                            )
                          );
                        case 9:
                          if (!b.aborted) {
                            _.next = 11;
                            break;
                          }
                          return _.abrupt('return');
                        case 11:
                          return (
                            (w = Object.assign({}, E, this.context(), {
                              abortSignal: b,
                              canvasElement: this.canvasElement,
                            })),
                            (v = Object.assign(
                              {
                                componentId: d,
                                title: y,
                                kind: y,
                                id: p,
                                name: h,
                                story: h,
                              },
                              this.callbacks,
                              {
                                forceRemount: l || this.notYetRendered,
                                storyContext: w,
                                storyFn: function () {
                                  return m(w);
                                },
                                unboundStoryFn: m,
                              },
                            )),
                            (_.next = 15),
                            this.runPhase(
                              b,
                              'rendering',
                              _asyncToGenerator$3(
                                regeneratorRuntime.mark(function O() {
                                  return regeneratorRuntime.wrap(function (T) {
                                    for (;;)
                                      switch ((T.prev = T.next)) {
                                        case 0:
                                          return T.abrupt(
                                            'return',
                                            o.renderToScreen(
                                              v,
                                              o.canvasElement,
                                            ),
                                          );
                                        case 1:
                                        case 'end':
                                          return T.stop();
                                      }
                                  }, O);
                                }),
                              ),
                            )
                          );
                        case 15:
                          if (((this.notYetRendered = !1), !b.aborted)) {
                            _.next = 18;
                            break;
                          }
                          return _.abrupt('return');
                        case 18:
                          if (!(l && S)) {
                            _.next = 27;
                            break;
                          }
                          return (
                            (this.disableKeyListeners = !0),
                            (_.next = 22),
                            this.runPhase(
                              b,
                              'playing',
                              _asyncToGenerator$3(
                                regeneratorRuntime.mark(function O() {
                                  return regeneratorRuntime.wrap(function (T) {
                                    for (;;)
                                      switch ((T.prev = T.next)) {
                                        case 0:
                                          return T.abrupt(
                                            'return',
                                            S(v.storyContext),
                                          );
                                        case 1:
                                        case 'end':
                                          return T.stop();
                                      }
                                  }, O);
                                }),
                              ),
                            )
                          );
                        case 22:
                          return (_.next = 24), this.runPhase(b, 'played');
                        case 24:
                          if (((this.disableKeyListeners = !1), !b.aborted)) {
                            _.next = 27;
                            break;
                          }
                          return _.abrupt('return');
                        case 27:
                          return (
                            (_.next = 29),
                            this.runPhase(
                              b,
                              'completed',
                              _asyncToGenerator$3(
                                regeneratorRuntime.mark(function O() {
                                  return regeneratorRuntime.wrap(function (T) {
                                    for (;;)
                                      switch ((T.prev = T.next)) {
                                        case 0:
                                          return T.abrupt(
                                            'return',
                                            o.channel.emit(STORY_RENDERED, p),
                                          );
                                        case 1:
                                        case 'end':
                                          return T.stop();
                                      }
                                  }, O);
                                }),
                              ),
                            )
                          );
                        case 29:
                          _.next = 34;
                          break;
                        case 31:
                          (_.prev = 31),
                            (_.t0 = _.catch(6)),
                            this.callbacks.showException(_.t0);
                        case 34:
                        case 'end':
                          return _.stop();
                      }
                  },
                  n,
                  this,
                  [[6, 31]],
                );
              }),
            );
            function t() {
              return r.apply(this, arguments);
            }
            return t;
          })(),
        },
        {
          key: 'rerender',
          value: (function () {
            var r = _asyncToGenerator$3(
              regeneratorRuntime.mark(function n() {
                return regeneratorRuntime.wrap(
                  function (s) {
                    for (;;)
                      switch ((s.prev = s.next)) {
                        case 0:
                          return s.abrupt('return', this.render());
                        case 1:
                        case 'end':
                          return s.stop();
                      }
                  },
                  n,
                  this,
                );
              }),
            );
            function t() {
              return r.apply(this, arguments);
            }
            return t;
          })(),
        },
        {
          key: 'remount',
          value: (function () {
            var r = _asyncToGenerator$3(
              regeneratorRuntime.mark(function n() {
                return regeneratorRuntime.wrap(
                  function (s) {
                    for (;;)
                      switch ((s.prev = s.next)) {
                        case 0:
                          return s.abrupt(
                            'return',
                            this.render({ forceRemount: !0 }),
                          );
                        case 1:
                        case 'end':
                          return s.stop();
                      }
                  },
                  n,
                  this,
                );
              }),
            );
            function t() {
              return r.apply(this, arguments);
            }
            return t;
          })(),
        },
        {
          key: 'cancelRender',
          value: function () {
            this.abortController.abort();
          },
        },
        {
          key: 'teardown',
          value: (function () {
            var r = _asyncToGenerator$3(
              regeneratorRuntime.mark(function n() {
                var o;
                return regeneratorRuntime.wrap(
                  function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          this.cancelRender(),
                            this.story && this.store.cleanupStory(this.story),
                            (o = 0);
                        case 4:
                          if (!(o < 3)) {
                            a.next = 12;
                            break;
                          }
                          if (this.isPending()) {
                            a.next = 7;
                            break;
                          }
                          return a.abrupt('return');
                        case 7:
                          return (
                            (a.next = 9),
                            new Promise(function (i) {
                              return setTimeout(i, 0);
                            })
                          );
                        case 9:
                          (o += 1), (a.next = 4);
                          break;
                        case 12:
                          return (
                            window_1.window.location.reload(),
                            (a.next = 15),
                            new Promise(function () {})
                          );
                        case 15:
                        case 'end':
                          return a.stop();
                      }
                  },
                  n,
                  this,
                );
              }),
            );
            function t() {
              return r.apply(this, arguments);
            }
            return t;
          })(),
        },
      ]),
      e
    );
  })();
StoryRender.displayName = 'StoryRender';
var _templateObject$5, _templateObject2$1;
function _toConsumableArray$1(e) {
  return (
    _arrayWithoutHoles$1(e) ||
    _iterableToArray$1(e) ||
    _unsupportedIterableToArray$7(e) ||
    _nonIterableSpread$1()
  );
}
function _nonIterableSpread$1() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _unsupportedIterableToArray$7(e, r) {
  if (e) {
    if (typeof e == 'string') return _arrayLikeToArray$7(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (t === 'Object' && e.constructor && (t = e.constructor.name),
      t === 'Map' || t === 'Set')
    )
      return Array.from(e);
    if (t === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return _arrayLikeToArray$7(e, r);
  }
}
function _iterableToArray$1(e) {
  if (
    (typeof Symbol < 'u' && e[Symbol.iterator] != null) ||
    e['@@iterator'] != null
  )
    return Array.from(e);
}
function _arrayWithoutHoles$1(e) {
  if (Array.isArray(e)) return _arrayLikeToArray$7(e);
}
function _arrayLikeToArray$7(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
  return n;
}
function asyncGeneratorStep$2(e, r, t, n, o, s, a) {
  try {
    var i = e[s](a),
      c = i.value;
  } catch (l) {
    t(l);
    return;
  }
  i.done ? r(c) : Promise.resolve(c).then(n, o);
}
function _asyncToGenerator$2(e) {
  return function () {
    var r = this,
      t = arguments;
    return new Promise(function (n, o) {
      var s = e.apply(r, t);
      function a(c) {
        asyncGeneratorStep$2(s, n, o, a, i, 'next', c);
      }
      function i(c) {
        asyncGeneratorStep$2(s, n, o, a, i, 'throw', c);
      }
      a(void 0);
    });
  };
}
function _taggedTemplateLiteral$5(e, r) {
  return (
    r || (r = e.slice(0)),
    Object.freeze(
      Object.defineProperties(e, { raw: { value: Object.freeze(r) } }),
    )
  );
}
function _classCallCheck$9(e, r) {
  if (!(e instanceof r))
    throw new TypeError('Cannot call a class as a function');
}
function _defineProperties$9(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function _createClass$9(e, r, t) {
  return (
    r && _defineProperties$9(e.prototype, r),
    t && _defineProperties$9(e, t),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
  );
}
var fetch$1 = window_1.fetch,
  STORY_INDEX_PATH = './stories.json',
  Preview = (function () {
    function e() {
      var r;
      _classCallCheck$9(this, e),
        (this.channel = void 0),
        (this.serverChannel = void 0),
        (this.storyStore = void 0),
        (this.getStoryIndex = void 0),
        (this.importFn = void 0),
        (this.renderToDOM = void 0),
        (this.storyRenders = []),
        (this.previewEntryError = void 0),
        (this.channel = addons.getChannel()),
        (r = window_1.FEATURES) !== null &&
          r !== void 0 &&
          r.storyStoreV7 &&
          addons.hasServerChannel() &&
          (this.serverChannel = addons.getServerChannel()),
        (this.storyStore = new StoryStore());
    }
    return (
      _createClass$9(e, [
        {
          key: 'initialize',
          value: function (t) {
            var n = this,
              o = t.getStoryIndex,
              s = t.importFn,
              a = t.getProjectAnnotations;
            return (
              (this.getStoryIndex = o),
              (this.importFn = s),
              this.setupListeners(),
              this.getProjectAnnotationsOrRenderError(a).then(function (i) {
                return n.initializeWithProjectAnnotations(i);
              })
            );
          },
        },
        {
          key: 'setupListeners',
          value: function () {
            var t;
            (t = this.serverChannel) === null ||
              t === void 0 ||
              t.on(
                STORY_INDEX_INVALIDATED,
                this.onStoryIndexChanged.bind(this),
              ),
              this.channel.on(UPDATE_GLOBALS, this.onUpdateGlobals.bind(this)),
              this.channel.on(UPDATE_STORY_ARGS, this.onUpdateArgs.bind(this)),
              this.channel.on(RESET_STORY_ARGS, this.onResetArgs.bind(this)),
              this.channel.on(FORCE_RE_RENDER, this.onForceReRender.bind(this)),
              this.channel.on(FORCE_REMOUNT, this.onForceRemount.bind(this));
          },
        },
        {
          key: 'getProjectAnnotationsOrRenderError',
          value: function (t) {
            var n = this;
            return synchronousPromise.SynchronousPromise.resolve()
              .then(t)
              .then(function (o) {
                if (((n.renderToDOM = o.renderToDOM), !n.renderToDOM))
                  throw new Error(
                    dedent(
                      _templateObject$5 ||
                        (_templateObject$5 = _taggedTemplateLiteral$5(
                          [
                            `
            Expected your framework's preset to export a \`renderToDOM\` field.

            Perhaps it needs to be upgraded for Storybook 6.4?

            More info: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#mainjs-framework-field          
          `,
                          ],
                          [
                            `
            Expected your framework's preset to export a \\\`renderToDOM\\\` field.

            Perhaps it needs to be upgraded for Storybook 6.4?

            More info: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#mainjs-framework-field          
          `,
                          ],
                        )),
                    ),
                  );
                return o;
              })
              .catch(function (o) {
                throw (
                  (n.renderPreviewEntryError('Error reading preview.js:', o), o)
                );
              });
          },
        },
        {
          key: 'initializeWithProjectAnnotations',
          value: function (t) {
            var n,
              o = this;
            this.storyStore.setProjectAnnotations(t), this.setInitialGlobals();
            var s;
            if (
              (n = window_1.FEATURES) !== null &&
              n !== void 0 &&
              n.storyStoreV7
            )
              s = this.getStoryIndexFromServer();
            else {
              if (!this.getStoryIndex)
                throw new Error('No `getStoryIndex` passed defined in v6 mode');
              s = synchronousPromise.SynchronousPromise.resolve().then(
                this.getStoryIndex,
              );
            }
            return s
              .then(function (a) {
                return o.initializeWithStoryIndex(a);
              })
              .catch(function (a) {
                throw (
                  (o.renderPreviewEntryError('Error loading story index:', a),
                  a)
                );
              });
          },
        },
        {
          key: 'setInitialGlobals',
          value: (function () {
            var r = _asyncToGenerator$2(
              regeneratorRuntime.mark(function n() {
                return regeneratorRuntime.wrap(
                  function (s) {
                    for (;;)
                      switch ((s.prev = s.next)) {
                        case 0:
                          this.emitGlobals();
                        case 1:
                        case 'end':
                          return s.stop();
                      }
                  },
                  n,
                  this,
                );
              }),
            );
            function t() {
              return r.apply(this, arguments);
            }
            return t;
          })(),
        },
        {
          key: 'emitGlobals',
          value: function () {
            this.channel.emit(SET_GLOBALS, {
              globals: this.storyStore.globals.get() || {},
              globalTypes: this.storyStore.projectAnnotations.globalTypes || {},
            });
          },
        },
        {
          key: 'getStoryIndexFromServer',
          value: (function () {
            var r = _asyncToGenerator$2(
              regeneratorRuntime.mark(function n() {
                var o;
                return regeneratorRuntime.wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return (a.next = 2), fetch$1(STORY_INDEX_PATH);
                      case 2:
                        if (((o = a.sent), o.status !== 200)) {
                          a.next = 5;
                          break;
                        }
                        return a.abrupt('return', o.json());
                      case 5:
                        return (a.t0 = Error), (a.next = 8), o.text();
                      case 8:
                        throw ((a.t1 = a.sent), new a.t0(a.t1));
                      case 10:
                      case 'end':
                        return a.stop();
                    }
                }, n);
              }),
            );
            function t() {
              return r.apply(this, arguments);
            }
            return t;
          })(),
        },
        {
          key: 'initializeWithStoryIndex',
          value: function (t) {
            var n;
            return this.storyStore.initialize({
              storyIndex: t,
              importFn: this.importFn,
              cache: !(
                (n = window_1.FEATURES) !== null &&
                n !== void 0 &&
                n.storyStoreV7
              ),
            });
          },
        },
        {
          key: 'onGetProjectAnnotationsChanged',
          value: (function () {
            var r = _asyncToGenerator$2(
              regeneratorRuntime.mark(function n(o) {
                var s, a;
                return regeneratorRuntime.wrap(
                  function (c) {
                    for (;;)
                      switch ((c.prev = c.next)) {
                        case 0:
                          return (
                            (s = o.getProjectAnnotations),
                            delete this.previewEntryError,
                            (c.next = 4),
                            this.getProjectAnnotationsOrRenderError(s)
                          );
                        case 4:
                          if (
                            ((a = c.sent), this.storyStore.projectAnnotations)
                          ) {
                            c.next = 9;
                            break;
                          }
                          return (
                            (c.next = 8),
                            this.initializeWithProjectAnnotations(a)
                          );
                        case 8:
                          return c.abrupt('return');
                        case 9:
                          return (
                            (c.next = 11),
                            this.storyStore.setProjectAnnotations(a)
                          );
                        case 11:
                          this.emitGlobals();
                        case 12:
                        case 'end':
                          return c.stop();
                      }
                  },
                  n,
                  this,
                );
              }),
            );
            function t(n) {
              return r.apply(this, arguments);
            }
            return t;
          })(),
        },
        {
          key: 'onStoryIndexChanged',
          value: (function () {
            var r = _asyncToGenerator$2(
              regeneratorRuntime.mark(function n() {
                var o;
                return regeneratorRuntime.wrap(
                  function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          if (
                            (delete this.previewEntryError,
                            this.storyStore.projectAnnotations)
                          ) {
                            a.next = 3;
                            break;
                          }
                          return a.abrupt('return');
                        case 3:
                          return (
                            (a.prev = 3),
                            (a.next = 6),
                            this.getStoryIndexFromServer()
                          );
                        case 6:
                          if (((o = a.sent), this.storyStore.storyIndex)) {
                            a.next = 10;
                            break;
                          }
                          return (
                            (a.next = 10), this.initializeWithStoryIndex(o)
                          );
                        case 10:
                          return (
                            (a.next = 12),
                            this.onStoriesChanged({ storyIndex: o })
                          );
                        case 12:
                          a.next = 18;
                          break;
                        case 14:
                          throw (
                            ((a.prev = 14),
                            (a.t0 = a.catch(3)),
                            this.renderPreviewEntryError(
                              'Error loading story index:',
                              a.t0,
                            ),
                            a.t0)
                          );
                        case 18:
                        case 'end':
                          return a.stop();
                      }
                  },
                  n,
                  this,
                  [[3, 14]],
                );
              }),
            );
            function t() {
              return r.apply(this, arguments);
            }
            return t;
          })(),
        },
        {
          key: 'onStoriesChanged',
          value: (function () {
            var r = _asyncToGenerator$2(
              regeneratorRuntime.mark(function n(o) {
                var s, a;
                return regeneratorRuntime.wrap(
                  function (c) {
                    for (;;)
                      switch ((c.prev = c.next)) {
                        case 0:
                          return (
                            (s = o.importFn),
                            (a = o.storyIndex),
                            (c.next = 3),
                            this.storyStore.onStoriesChanged({
                              importFn: s,
                              storyIndex: a,
                            })
                          );
                        case 3:
                        case 'end':
                          return c.stop();
                      }
                  },
                  n,
                  this,
                );
              }),
            );
            function t(n) {
              return r.apply(this, arguments);
            }
            return t;
          })(),
        },
        {
          key: 'onUpdateGlobals',
          value: (function () {
            var r = _asyncToGenerator$2(
              regeneratorRuntime.mark(function n(o) {
                var s;
                return regeneratorRuntime.wrap(
                  function (i) {
                    for (;;)
                      switch ((i.prev = i.next)) {
                        case 0:
                          return (
                            (s = o.globals),
                            this.storyStore.globals.update(s),
                            (i.next = 4),
                            Promise.all(
                              this.storyRenders.map(function (c) {
                                return c.rerender();
                              }),
                            )
                          );
                        case 4:
                          this.channel.emit(GLOBALS_UPDATED, {
                            globals: this.storyStore.globals.get(),
                            initialGlobals:
                              this.storyStore.globals.initialGlobals,
                          });
                        case 5:
                        case 'end':
                          return i.stop();
                      }
                  },
                  n,
                  this,
                );
              }),
            );
            function t(n) {
              return r.apply(this, arguments);
            }
            return t;
          })(),
        },
        {
          key: 'onUpdateArgs',
          value: (function () {
            var r = _asyncToGenerator$2(
              regeneratorRuntime.mark(function n(o) {
                var s, a;
                return regeneratorRuntime.wrap(
                  function (c) {
                    for (;;)
                      switch ((c.prev = c.next)) {
                        case 0:
                          return (
                            (s = o.storyId),
                            (a = o.updatedArgs),
                            this.storyStore.args.update(s, a),
                            (c.next = 4),
                            Promise.all(
                              this.storyRenders
                                .filter(function (l) {
                                  return l.id === s;
                                })
                                .map(function (l) {
                                  return l.rerender();
                                }),
                            )
                          );
                        case 4:
                          this.channel.emit(STORY_ARGS_UPDATED, {
                            storyId: s,
                            args: this.storyStore.args.get(s),
                          });
                        case 5:
                        case 'end':
                          return c.stop();
                      }
                  },
                  n,
                  this,
                );
              }),
            );
            function t(n) {
              return r.apply(this, arguments);
            }
            return t;
          })(),
        },
        {
          key: 'onResetArgs',
          value: (function () {
            var r = _asyncToGenerator$2(
              regeneratorRuntime.mark(function n(o) {
                var s, a, i, c, l, u;
                return regeneratorRuntime.wrap(
                  function (d) {
                    for (;;)
                      switch ((d.prev = d.next)) {
                        case 0:
                          if (
                            ((s = o.storyId),
                            (a = o.argNames),
                            (i = this.storyRenders.find(function (y) {
                              return y.id === s;
                            })),
                            (d.t0 = i == null ? void 0 : i.story),
                            d.t0)
                          ) {
                            d.next = 7;
                            break;
                          }
                          return (
                            (d.next = 6),
                            this.storyStore.loadStory({ storyId: s })
                          );
                        case 6:
                          d.t0 = d.sent;
                        case 7:
                          return (
                            (c = d.t0),
                            (l =
                              a ||
                              _toConsumableArray$1(
                                new Set(
                                  [].concat(
                                    _toConsumableArray$1(
                                      Object.keys(c.initialArgs),
                                    ),
                                    _toConsumableArray$1(
                                      Object.keys(this.storyStore.args.get(s)),
                                    ),
                                  ),
                                ),
                              )),
                            (u = l.reduce(function (y, h) {
                              return (y[h] = c.initialArgs[h]), y;
                            }, {})),
                            (d.next = 12),
                            this.onUpdateArgs({ storyId: s, updatedArgs: u })
                          );
                        case 12:
                        case 'end':
                          return d.stop();
                      }
                  },
                  n,
                  this,
                );
              }),
            );
            function t(n) {
              return r.apply(this, arguments);
            }
            return t;
          })(),
        },
        {
          key: 'onForceReRender',
          value: (function () {
            var r = _asyncToGenerator$2(
              regeneratorRuntime.mark(function n() {
                return regeneratorRuntime.wrap(
                  function (s) {
                    for (;;)
                      switch ((s.prev = s.next)) {
                        case 0:
                          return (
                            (s.next = 2),
                            Promise.all(
                              this.storyRenders.map(function (a) {
                                return a.rerender();
                              }),
                            )
                          );
                        case 2:
                        case 'end':
                          return s.stop();
                      }
                  },
                  n,
                  this,
                );
              }),
            );
            function t() {
              return r.apply(this, arguments);
            }
            return t;
          })(),
        },
        {
          key: 'onForceRemount',
          value: (function () {
            var r = _asyncToGenerator$2(
              regeneratorRuntime.mark(function n(o) {
                var s;
                return regeneratorRuntime.wrap(
                  function (i) {
                    for (;;)
                      switch ((i.prev = i.next)) {
                        case 0:
                          return (
                            (s = o.storyId),
                            (i.next = 3),
                            Promise.all(
                              this.storyRenders
                                .filter(function (c) {
                                  return c.id === s;
                                })
                                .map(function (c) {
                                  return c.remount();
                                }),
                            )
                          );
                        case 3:
                        case 'end':
                          return i.stop();
                      }
                  },
                  n,
                  this,
                );
              }),
            );
            function t(n) {
              return r.apply(this, arguments);
            }
            return t;
          })(),
        },
        {
          key: 'renderStoryToElement',
          value: function (t, n) {
            var o = this,
              s = new StoryRender(
                this.channel,
                this.storyStore,
                this.renderToDOM,
                this.inlineStoryCallbacks(t.id),
                t.id,
                'docs',
                t,
              );
            return (
              s.renderToElement(n),
              this.storyRenders.push(s),
              _asyncToGenerator$2(
                regeneratorRuntime.mark(function a() {
                  return regeneratorRuntime.wrap(function (c) {
                    for (;;)
                      switch ((c.prev = c.next)) {
                        case 0:
                          return (c.next = 2), o.teardownRender(s);
                        case 2:
                        case 'end':
                          return c.stop();
                      }
                  }, a);
                }),
              )
            );
          },
        },
        {
          key: 'teardownRender',
          value: (function () {
            var r = _asyncToGenerator$2(
              regeneratorRuntime.mark(function n(o) {
                var s,
                  a,
                  i = arguments;
                return regeneratorRuntime.wrap(
                  function (l) {
                    for (;;)
                      switch ((l.prev = l.next)) {
                        case 0:
                          return (
                            (s = i.length > 1 && i[1] !== void 0 ? i[1] : {}),
                            (a = s.viewModeChanged),
                            (this.storyRenders = this.storyRenders.filter(
                              function (u) {
                                return u !== o;
                              },
                            )),
                            (l.next = 4),
                            o == null
                              ? void 0
                              : o.teardown({ viewModeChanged: a })
                          );
                        case 4:
                        case 'end':
                          return l.stop();
                      }
                  },
                  n,
                  this,
                );
              }),
            );
            function t(n) {
              return r.apply(this, arguments);
            }
            return t;
          })(),
        },
        {
          key: 'extract',
          value: (function () {
            var r = _asyncToGenerator$2(
              regeneratorRuntime.mark(function n(o) {
                var s;
                return regeneratorRuntime.wrap(
                  function (i) {
                    for (;;)
                      switch ((i.prev = i.next)) {
                        case 0:
                          if (!this.previewEntryError) {
                            i.next = 2;
                            break;
                          }
                          throw this.previewEntryError;
                        case 2:
                          if (this.storyStore.projectAnnotations) {
                            i.next = 4;
                            break;
                          }
                          throw new Error(
                            dedent(
                              _templateObject2$1 ||
                                (_templateObject2$1 = _taggedTemplateLiteral$5(
                                  [
                                    "Failed to initialize Storybook.\n      \n      Do you have an error in your `preview.js`? Check your Storybook's browser console for errors.",
                                  ],
                                  [
                                    "Failed to initialize Storybook.\n      \n      Do you have an error in your \\`preview.js\\`? Check your Storybook's browser console for errors.",
                                  ],
                                )),
                            ),
                          );
                        case 4:
                          if (
                            !(
                              (s = window_1.FEATURES) !== null &&
                              s !== void 0 &&
                              s.storyStoreV7
                            )
                          ) {
                            i.next = 7;
                            break;
                          }
                          return (
                            (i.next = 7), this.storyStore.cacheAllCSFFiles()
                          );
                        case 7:
                          return i.abrupt('return', this.storyStore.extract(o));
                        case 8:
                        case 'end':
                          return i.stop();
                      }
                  },
                  n,
                  this,
                );
              }),
            );
            function t(n) {
              return r.apply(this, arguments);
            }
            return t;
          })(),
        },
        {
          key: 'inlineStoryCallbacks',
          value: function (t) {
            return {
              showMain: function () {},
              showError: function (o) {
                return logger.error(
                  'Error rendering docs story ('.concat(t, ')'),
                  o,
                );
              },
              showException: function (o) {
                return logger.error(
                  'Error rendering docs story ('.concat(t, ')'),
                  o,
                );
              },
            };
          },
        },
        {
          key: 'renderPreviewEntryError',
          value: function (t, n) {
            (this.previewEntryError = n),
              logger.error(t),
              logger.error(n),
              this.channel.emit(CONFIG_ERROR, n);
          },
        },
      ]),
      e
    );
  })(),
  _templateObject$4;
function _taggedTemplateLiteral$4(e, r) {
  return (
    r || (r = e.slice(0)),
    Object.freeze(
      Object.defineProperties(e, { raw: { value: Object.freeze(r) } }),
    )
  );
}
function _defineProperty$2(e, r, t) {
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
function _slicedToArray$5(e, r) {
  return (
    _arrayWithHoles$5(e) ||
    _iterableToArrayLimit$5(e, r) ||
    _unsupportedIterableToArray$6(e, r) ||
    _nonIterableRest$5()
  );
}
function _nonIterableRest$5() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _unsupportedIterableToArray$6(e, r) {
  if (e) {
    if (typeof e == 'string') return _arrayLikeToArray$6(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (t === 'Object' && e.constructor && (t = e.constructor.name),
      t === 'Map' || t === 'Set')
    )
      return Array.from(e);
    if (t === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return _arrayLikeToArray$6(e, r);
  }
}
function _arrayLikeToArray$6(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
  return n;
}
function _iterableToArrayLimit$5(e, r) {
  var t =
    e == null
      ? null
      : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (t != null) {
    var n = [],
      o = !0,
      s = !1,
      a,
      i;
    try {
      for (
        t = t.call(e);
        !(o = (a = t.next()).done) && (n.push(a.value), !(r && n.length === r));
        o = !0
      );
    } catch (c) {
      (s = !0), (i = c);
    } finally {
      try {
        !o && t.return != null && t.return();
      } finally {
        if (s) throw i;
      }
    }
    return n;
  }
}
function _arrayWithHoles$5(e) {
  if (Array.isArray(e)) return e;
}
var VALIDATION_REGEXP = /^[a-zA-Z0-9 _-]*$/,
  NUMBER_REGEXP = /^-?[0-9]+(\.[0-9]+)?$/,
  HEX_REGEXP = /^#([a-f0-9]{3,4}|[a-f0-9]{6}|[a-f0-9]{8})$/i,
  COLOR_REGEXP =
    /^(rgba?|hsla?)\(([0-9]{1,3}),\s?([0-9]{1,3})%?,\s?([0-9]{1,3})%?,?\s?([0-9](\.[0-9]{1,2})?)?\)$/i,
  validateArgs = function e() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : '',
      t = arguments.length > 1 ? arguments[1] : void 0;
    return r === null || r === '' || !VALIDATION_REGEXP.test(r)
      ? !1
      : t == null ||
        t instanceof Date ||
        typeof t == 'number' ||
        typeof t == 'boolean'
      ? !0
      : typeof t == 'string'
      ? VALIDATION_REGEXP.test(t) ||
        NUMBER_REGEXP.test(t) ||
        HEX_REGEXP.test(t) ||
        COLOR_REGEXP.test(t)
      : Array.isArray(t)
      ? t.every(function (n) {
          return e(r, n);
        })
      : isPlainObject_1(t)
      ? Object.entries(t).every(function (n) {
          var o = _slicedToArray$5(n, 2),
            s = o[0],
            a = o[1];
          return e(s, a);
        })
      : !1;
  },
  QS_OPTIONS = {
    delimiter: ';',
    allowDots: !0,
    allowSparse: !0,
    decoder: (function (e) {
      function r(t, n, o, s) {
        return e.apply(this, arguments);
      }
      return (
        (r.toString = function () {
          return e.toString();
        }),
        r
      );
    })(function (e, r, t, n) {
      if (n === 'value' && e.startsWith('!')) {
        if (e === '!undefined') return;
        if (e === '!null') return null;
        if (e.startsWith('!date(') && e.endsWith(')'))
          return new Date(e.slice(6, -1));
        if (e.startsWith('!hex(') && e.endsWith(')'))
          return '#'.concat(e.slice(5, -1));
        var o = e.slice(1).match(COLOR_REGEXP);
        if (o)
          return e.startsWith('!rgba')
            ? ''
                .concat(o[1], '(')
                .concat(o[2], ', ')
                .concat(o[3], ', ')
                .concat(o[4], ', ')
                .concat(o[5], ')')
            : e.startsWith('!hsla')
            ? ''
                .concat(o[1], '(')
                .concat(o[2], ', ')
                .concat(o[3], '%, ')
                .concat(o[4], '%, ')
                .concat(o[5], ')')
            : e.startsWith('!rgb')
            ? ''
                .concat(o[1], '(')
                .concat(o[2], ', ')
                .concat(o[3], ', ')
                .concat(o[4], ')')
            : ''
                .concat(o[1], '(')
                .concat(o[2], ', ')
                .concat(o[3], '%, ')
                .concat(o[4], '%)');
      }
      return n === 'value' && NUMBER_REGEXP.test(e) ? Number(e) : r(e, r, t);
    }),
  },
  parseArgsParam = function (r) {
    var t = r.split(';').map(function (n) {
      return n.replace('=', '~').replace(':', '=');
    });
    return Object.entries(lib$1.parse(t.join(';'), QS_OPTIONS)).reduce(
      function (n, o) {
        var s = _slicedToArray$5(o, 2),
          a = s[0],
          i = s[1];
        return validateArgs(a, i)
          ? Object.assign(n, _defineProperty$2({}, a, i))
          : (once.warn(
              dedent(
                _templateObject$4 ||
                  (_templateObject$4 = _taggedTemplateLiteral$4([
                    `
      Omitted potentially unsafe URL args.

      More info: https://storybook.js.org/docs/react/writing-stories/args#setting-args-through-the-url
    `,
                  ])),
              ),
            ),
            n);
      },
      {},
    );
  },
  _excluded$2 = ['path', 'selectedKind', 'selectedStory'];
function _classCallCheck$8(e, r) {
  if (!(e instanceof r))
    throw new TypeError('Cannot call a class as a function');
}
function _defineProperties$8(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function _createClass$8(e, r, t) {
  return (
    r && _defineProperties$8(e.prototype, r),
    t && _defineProperties$8(e, t),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
  );
}
function _typeof$2(e) {
  return (
    (_typeof$2 =
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
    _typeof$2(e)
  );
}
function _objectWithoutProperties$2(e, r) {
  if (e == null) return {};
  var t = _objectWithoutPropertiesLoose$2(e, r),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (o = 0; o < s.length; o++)
      (n = s[o]),
        !(r.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (t[n] = e[n]);
  }
  return t;
}
function _objectWithoutPropertiesLoose$2(e, r) {
  if (e == null) return {};
  var t = {},
    n = Object.keys(e),
    o,
    s;
  for (s = 0; s < n.length; s++)
    (o = n[s]), !(r.indexOf(o) >= 0) && (t[o] = e[o]);
  return t;
}
var history = window_1.history,
  document$3 = window_1.document;
function pathToId(e) {
  var r = (e || '').match(/^\/story\/(.+)/);
  if (!r)
    throw new Error(
      "Invalid path '".concat(e, "',  must start with '/story/'"),
    );
  return r[1];
}
var getQueryString = function (r) {
    var t = r.selection,
      n = r.extraParams,
      o = document$3.location.search,
      s = o === void 0 ? '' : o,
      a = lib$1.parse(s, { ignoreQueryPrefix: !0 });
    a.path, a.selectedKind, a.selectedStory;
    var i = _objectWithoutProperties$2(a, _excluded$2);
    return lib$1.stringify(
      Object.assign({}, i, n, t && { id: t.storyId, viewMode: t.viewMode }),
      { encode: !1, addQueryPrefix: !0 },
    );
  },
  setPath = function (r) {
    if (r) {
      var t = getQueryString({ selection: r }),
        n = document$3.location.hash,
        o = n === void 0 ? '' : n;
      (document$3.title = r.storyId),
        history.replaceState(
          {},
          '',
          ''.concat(document$3.location.pathname).concat(t).concat(o),
        );
    }
  },
  isObject$2 = function (r) {
    return r != null && _typeof$2(r) === 'object' && Array.isArray(r) === !1;
  },
  getFirstString = function e(r) {
    if (typeof r == 'string') return r;
    if (Array.isArray(r)) return e(r[0]);
    if (isObject$2(r)) return e(Object.values(r));
  },
  deprecatedLegacyQuery = browser(function () {
    return 0;
  }, 'URL formats with `selectedKind` and `selectedName` query parameters are deprecated.\nUse `id=$storyId` instead.\nSee https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#new-url-structure'),
  getSelectionSpecifierFromPath = function () {
    var r = lib$1.parse(document$3.location.search, { ignoreQueryPrefix: !0 }),
      t = typeof r.args == 'string' ? parseArgsParam(r.args) : void 0,
      n = typeof r.globals == 'string' ? parseArgsParam(r.globals) : void 0,
      o = getFirstString(r.viewMode);
    (typeof o != 'string' || !o.match(/docs|story/)) && (o = 'story');
    var s = getFirstString(r.path),
      a = s ? pathToId(s) : getFirstString(r.id);
    if (a) return { storySpecifier: a, args: t, globals: n, viewMode: o };
    var i = getFirstString(r.selectedKind),
      c = getFirstString(r.selectedStory);
    return i && c
      ? (deprecatedLegacyQuery(),
        {
          storySpecifier: { title: i, name: c },
          args: t,
          globals: n,
          viewMode: o,
        })
      : null;
  },
  UrlStore = (function () {
    function e() {
      _classCallCheck$8(this, e),
        (this.selectionSpecifier = void 0),
        (this.selection = void 0),
        (this.selectionSpecifier = getSelectionSpecifierFromPath());
    }
    return (
      _createClass$8(e, [
        {
          key: 'setSelection',
          value: function (t) {
            (this.selection = t), setPath(this.selection);
          },
        },
        {
          key: 'setQueryParams',
          value: function (t) {
            var n = getQueryString({ extraParams: t }),
              o = document$3.location.hash,
              s = o === void 0 ? '' : o;
            history.replaceState(
              {},
              '',
              ''.concat(document$3.location.pathname).concat(n).concat(s),
            );
          },
        },
      ]),
      e
    );
  })(),
  lib = {},
  decode = {};
const Aacute$1 = 'Á',
  aacute$1 = 'á',
  Abreve = 'Ă',
  abreve = 'ă',
  ac = '∾',
  acd = '∿',
  acE = '∾̳',
  Acirc$1 = 'Â',
  acirc$1 = 'â',
  acute$1 = '´',
  Acy = 'А',
  acy = 'а',
  AElig$1 = 'Æ',
  aelig$1 = 'æ',
  af = '⁡',
  Afr = '𝔄',
  afr = '𝔞',
  Agrave$1 = 'À',
  agrave$1 = 'à',
  alefsym = 'ℵ',
  aleph = 'ℵ',
  Alpha = 'Α',
  alpha = 'α',
  Amacr = 'Ā',
  amacr = 'ā',
  amalg = '⨿',
  amp$2 = '&',
  AMP$1 = '&',
  andand = '⩕',
  And = '⩓',
  and = '∧',
  andd = '⩜',
  andslope = '⩘',
  andv = '⩚',
  ang = '∠',
  ange = '⦤',
  angle = '∠',
  angmsdaa = '⦨',
  angmsdab = '⦩',
  angmsdac = '⦪',
  angmsdad = '⦫',
  angmsdae = '⦬',
  angmsdaf = '⦭',
  angmsdag = '⦮',
  angmsdah = '⦯',
  angmsd = '∡',
  angrt = '∟',
  angrtvb = '⊾',
  angrtvbd = '⦝',
  angsph = '∢',
  angst = 'Å',
  angzarr = '⍼',
  Aogon = 'Ą',
  aogon = 'ą',
  Aopf = '𝔸',
  aopf = '𝕒',
  apacir = '⩯',
  ap = '≈',
  apE = '⩰',
  ape = '≊',
  apid = '≋',
  apos$1 = "'",
  ApplyFunction = '⁡',
  approx = '≈',
  approxeq = '≊',
  Aring$1 = 'Å',
  aring$1 = 'å',
  Ascr = '𝒜',
  ascr = '𝒶',
  Assign = '≔',
  ast = '*',
  asymp = '≈',
  asympeq = '≍',
  Atilde$1 = 'Ã',
  atilde$1 = 'ã',
  Auml$1 = 'Ä',
  auml$1 = 'ä',
  awconint = '∳',
  awint = '⨑',
  backcong = '≌',
  backepsilon = '϶',
  backprime = '‵',
  backsim = '∽',
  backsimeq = '⋍',
  Backslash = '∖',
  Barv = '⫧',
  barvee = '⊽',
  barwed = '⌅',
  Barwed = '⌆',
  barwedge = '⌅',
  bbrk = '⎵',
  bbrktbrk = '⎶',
  bcong = '≌',
  Bcy = 'Б',
  bcy = 'б',
  bdquo = '„',
  becaus = '∵',
  because = '∵',
  Because = '∵',
  bemptyv = '⦰',
  bepsi = '϶',
  bernou = 'ℬ',
  Bernoullis = 'ℬ',
  Beta = 'Β',
  beta = 'β',
  beth = 'ℶ',
  between = '≬',
  Bfr = '𝔅',
  bfr = '𝔟',
  bigcap = '⋂',
  bigcirc = '◯',
  bigcup = '⋃',
  bigodot = '⨀',
  bigoplus = '⨁',
  bigotimes = '⨂',
  bigsqcup = '⨆',
  bigstar = '★',
  bigtriangledown = '▽',
  bigtriangleup = '△',
  biguplus = '⨄',
  bigvee = '⋁',
  bigwedge = '⋀',
  bkarow = '⤍',
  blacklozenge = '⧫',
  blacksquare = '▪',
  blacktriangle = '▴',
  blacktriangledown = '▾',
  blacktriangleleft = '◂',
  blacktriangleright = '▸',
  blank = '␣',
  blk12 = '▒',
  blk14 = '░',
  blk34 = '▓',
  block = '█',
  bne = '=⃥',
  bnequiv = '≡⃥',
  bNot = '⫭',
  bnot = '⌐',
  Bopf = '𝔹',
  bopf = '𝕓',
  bot = '⊥',
  bottom = '⊥',
  bowtie = '⋈',
  boxbox = '⧉',
  boxdl = '┐',
  boxdL = '╕',
  boxDl = '╖',
  boxDL = '╗',
  boxdr = '┌',
  boxdR = '╒',
  boxDr = '╓',
  boxDR = '╔',
  boxh = '─',
  boxH = '═',
  boxhd = '┬',
  boxHd = '╤',
  boxhD = '╥',
  boxHD = '╦',
  boxhu = '┴',
  boxHu = '╧',
  boxhU = '╨',
  boxHU = '╩',
  boxminus = '⊟',
  boxplus = '⊞',
  boxtimes = '⊠',
  boxul = '┘',
  boxuL = '╛',
  boxUl = '╜',
  boxUL = '╝',
  boxur = '└',
  boxuR = '╘',
  boxUr = '╙',
  boxUR = '╚',
  boxv = '│',
  boxV = '║',
  boxvh = '┼',
  boxvH = '╪',
  boxVh = '╫',
  boxVH = '╬',
  boxvl = '┤',
  boxvL = '╡',
  boxVl = '╢',
  boxVL = '╣',
  boxvr = '├',
  boxvR = '╞',
  boxVr = '╟',
  boxVR = '╠',
  bprime = '‵',
  breve = '˘',
  Breve = '˘',
  brvbar$1 = '¦',
  bscr = '𝒷',
  Bscr = 'ℬ',
  bsemi = '⁏',
  bsim = '∽',
  bsime = '⋍',
  bsolb = '⧅',
  bsol = '\\',
  bsolhsub = '⟈',
  bull = '•',
  bullet = '•',
  bump = '≎',
  bumpE = '⪮',
  bumpe = '≏',
  Bumpeq = '≎',
  bumpeq = '≏',
  Cacute = 'Ć',
  cacute = 'ć',
  capand = '⩄',
  capbrcup = '⩉',
  capcap = '⩋',
  cap = '∩',
  Cap = '⋒',
  capcup = '⩇',
  capdot = '⩀',
  CapitalDifferentialD = 'ⅅ',
  caps = '∩︀',
  caret = '⁁',
  caron = 'ˇ',
  Cayleys = 'ℭ',
  ccaps = '⩍',
  Ccaron = 'Č',
  ccaron = 'č',
  Ccedil$1 = 'Ç',
  ccedil$1 = 'ç',
  Ccirc = 'Ĉ',
  ccirc = 'ĉ',
  Cconint = '∰',
  ccups = '⩌',
  ccupssm = '⩐',
  Cdot = 'Ċ',
  cdot = 'ċ',
  cedil$1 = '¸',
  Cedilla = '¸',
  cemptyv = '⦲',
  cent$1 = '¢',
  centerdot = '·',
  CenterDot = '·',
  cfr = '𝔠',
  Cfr = 'ℭ',
  CHcy = 'Ч',
  chcy = 'ч',
  check = '✓',
  checkmark = '✓',
  Chi = 'Χ',
  chi = 'χ',
  circ = 'ˆ',
  circeq = '≗',
  circlearrowleft = '↺',
  circlearrowright = '↻',
  circledast = '⊛',
  circledcirc = '⊚',
  circleddash = '⊝',
  CircleDot = '⊙',
  circledR = '®',
  circledS = 'Ⓢ',
  CircleMinus = '⊖',
  CirclePlus = '⊕',
  CircleTimes = '⊗',
  cir = '○',
  cirE = '⧃',
  cire = '≗',
  cirfnint = '⨐',
  cirmid = '⫯',
  cirscir = '⧂',
  ClockwiseContourIntegral = '∲',
  CloseCurlyDoubleQuote = '”',
  CloseCurlyQuote = '’',
  clubs = '♣',
  clubsuit = '♣',
  colon = ':',
  Colon = '∷',
  Colone = '⩴',
  colone = '≔',
  coloneq = '≔',
  comma = ',',
  commat = '@',
  comp = '∁',
  compfn = '∘',
  complement = '∁',
  complexes = 'ℂ',
  cong = '≅',
  congdot = '⩭',
  Congruent = '≡',
  conint = '∮',
  Conint = '∯',
  ContourIntegral = '∮',
  copf = '𝕔',
  Copf = 'ℂ',
  coprod = '∐',
  Coproduct = '∐',
  copy$1 = '©',
  COPY$1 = '©',
  copysr = '℗',
  CounterClockwiseContourIntegral = '∳',
  crarr = '↵',
  cross = '✗',
  Cross = '⨯',
  Cscr = '𝒞',
  cscr = '𝒸',
  csub = '⫏',
  csube = '⫑',
  csup = '⫐',
  csupe = '⫒',
  ctdot = '⋯',
  cudarrl = '⤸',
  cudarrr = '⤵',
  cuepr = '⋞',
  cuesc = '⋟',
  cularr = '↶',
  cularrp = '⤽',
  cupbrcap = '⩈',
  cupcap = '⩆',
  CupCap = '≍',
  cup = '∪',
  Cup = '⋓',
  cupcup = '⩊',
  cupdot = '⊍',
  cupor = '⩅',
  cups = '∪︀',
  curarr = '↷',
  curarrm = '⤼',
  curlyeqprec = '⋞',
  curlyeqsucc = '⋟',
  curlyvee = '⋎',
  curlywedge = '⋏',
  curren$1 = '¤',
  curvearrowleft = '↶',
  curvearrowright = '↷',
  cuvee = '⋎',
  cuwed = '⋏',
  cwconint = '∲',
  cwint = '∱',
  cylcty = '⌭',
  dagger = '†',
  Dagger = '‡',
  daleth = 'ℸ',
  darr = '↓',
  Darr = '↡',
  dArr = '⇓',
  dash = '‐',
  Dashv = '⫤',
  dashv = '⊣',
  dbkarow = '⤏',
  dblac = '˝',
  Dcaron = 'Ď',
  dcaron = 'ď',
  Dcy = 'Д',
  dcy = 'д',
  ddagger = '‡',
  ddarr = '⇊',
  DD = 'ⅅ',
  dd = 'ⅆ',
  DDotrahd = '⤑',
  ddotseq = '⩷',
  deg$1 = '°',
  Del = '∇',
  Delta = 'Δ',
  delta = 'δ',
  demptyv = '⦱',
  dfisht = '⥿',
  Dfr = '𝔇',
  dfr = '𝔡',
  dHar = '⥥',
  dharl = '⇃',
  dharr = '⇂',
  DiacriticalAcute = '´',
  DiacriticalDot = '˙',
  DiacriticalDoubleAcute = '˝',
  DiacriticalGrave = '`',
  DiacriticalTilde = '˜',
  diam = '⋄',
  diamond = '⋄',
  Diamond = '⋄',
  diamondsuit = '♦',
  diams = '♦',
  die = '¨',
  DifferentialD = 'ⅆ',
  digamma = 'ϝ',
  disin = '⋲',
  div = '÷',
  divide$1 = '÷',
  divideontimes = '⋇',
  divonx = '⋇',
  DJcy = 'Ђ',
  djcy = 'ђ',
  dlcorn = '⌞',
  dlcrop = '⌍',
  dollar = '$',
  Dopf = '𝔻',
  dopf = '𝕕',
  Dot = '¨',
  dot = '˙',
  DotDot = '⃜',
  doteq = '≐',
  doteqdot = '≑',
  DotEqual = '≐',
  dotminus = '∸',
  dotplus = '∔',
  dotsquare = '⊡',
  doublebarwedge = '⌆',
  DoubleContourIntegral = '∯',
  DoubleDot = '¨',
  DoubleDownArrow = '⇓',
  DoubleLeftArrow = '⇐',
  DoubleLeftRightArrow = '⇔',
  DoubleLeftTee = '⫤',
  DoubleLongLeftArrow = '⟸',
  DoubleLongLeftRightArrow = '⟺',
  DoubleLongRightArrow = '⟹',
  DoubleRightArrow = '⇒',
  DoubleRightTee = '⊨',
  DoubleUpArrow = '⇑',
  DoubleUpDownArrow = '⇕',
  DoubleVerticalBar = '∥',
  DownArrowBar = '⤓',
  downarrow = '↓',
  DownArrow = '↓',
  Downarrow = '⇓',
  DownArrowUpArrow = '⇵',
  DownBreve = '̑',
  downdownarrows = '⇊',
  downharpoonleft = '⇃',
  downharpoonright = '⇂',
  DownLeftRightVector = '⥐',
  DownLeftTeeVector = '⥞',
  DownLeftVectorBar = '⥖',
  DownLeftVector = '↽',
  DownRightTeeVector = '⥟',
  DownRightVectorBar = '⥗',
  DownRightVector = '⇁',
  DownTeeArrow = '↧',
  DownTee = '⊤',
  drbkarow = '⤐',
  drcorn = '⌟',
  drcrop = '⌌',
  Dscr = '𝒟',
  dscr = '𝒹',
  DScy = 'Ѕ',
  dscy = 'ѕ',
  dsol = '⧶',
  Dstrok = 'Đ',
  dstrok = 'đ',
  dtdot = '⋱',
  dtri = '▿',
  dtrif = '▾',
  duarr = '⇵',
  duhar = '⥯',
  dwangle = '⦦',
  DZcy = 'Џ',
  dzcy = 'џ',
  dzigrarr = '⟿',
  Eacute$1 = 'É',
  eacute$1 = 'é',
  easter = '⩮',
  Ecaron = 'Ě',
  ecaron = 'ě',
  Ecirc$1 = 'Ê',
  ecirc$1 = 'ê',
  ecir = '≖',
  ecolon = '≕',
  Ecy = 'Э',
  ecy = 'э',
  eDDot = '⩷',
  Edot = 'Ė',
  edot = 'ė',
  eDot = '≑',
  ee = 'ⅇ',
  efDot = '≒',
  Efr = '𝔈',
  efr = '𝔢',
  eg = '⪚',
  Egrave$1 = 'È',
  egrave$1 = 'è',
  egs = '⪖',
  egsdot = '⪘',
  el = '⪙',
  Element = '∈',
  elinters = '⏧',
  ell = 'ℓ',
  els = '⪕',
  elsdot = '⪗',
  Emacr = 'Ē',
  emacr = 'ē',
  empty = '∅',
  emptyset = '∅',
  EmptySmallSquare = '◻',
  emptyv = '∅',
  EmptyVerySmallSquare = '▫',
  emsp13 = ' ',
  emsp14 = ' ',
  emsp = ' ',
  ENG = 'Ŋ',
  eng = 'ŋ',
  ensp = ' ',
  Eogon = 'Ę',
  eogon = 'ę',
  Eopf = '𝔼',
  eopf = '𝕖',
  epar = '⋕',
  eparsl = '⧣',
  eplus = '⩱',
  epsi = 'ε',
  Epsilon = 'Ε',
  epsilon = 'ε',
  epsiv = 'ϵ',
  eqcirc = '≖',
  eqcolon = '≕',
  eqsim = '≂',
  eqslantgtr = '⪖',
  eqslantless = '⪕',
  Equal = '⩵',
  equals = '=',
  EqualTilde = '≂',
  equest = '≟',
  Equilibrium = '⇌',
  equiv = '≡',
  equivDD = '⩸',
  eqvparsl = '⧥',
  erarr = '⥱',
  erDot = '≓',
  escr = 'ℯ',
  Escr = 'ℰ',
  esdot = '≐',
  Esim = '⩳',
  esim = '≂',
  Eta = 'Η',
  eta = 'η',
  ETH$1 = 'Ð',
  eth$1 = 'ð',
  Euml$1 = 'Ë',
  euml$1 = 'ë',
  euro = '€',
  excl = '!',
  exist = '∃',
  Exists = '∃',
  expectation = 'ℰ',
  exponentiale = 'ⅇ',
  ExponentialE = 'ⅇ',
  fallingdotseq = '≒',
  Fcy = 'Ф',
  fcy = 'ф',
  female = '♀',
  ffilig = 'ﬃ',
  fflig = 'ﬀ',
  ffllig = 'ﬄ',
  Ffr = '𝔉',
  ffr = '𝔣',
  filig = 'ﬁ',
  FilledSmallSquare = '◼',
  FilledVerySmallSquare = '▪',
  fjlig = 'fj',
  flat = '♭',
  fllig = 'ﬂ',
  fltns = '▱',
  fnof = 'ƒ',
  Fopf = '𝔽',
  fopf = '𝕗',
  forall = '∀',
  ForAll = '∀',
  fork = '⋔',
  forkv = '⫙',
  Fouriertrf = 'ℱ',
  fpartint = '⨍',
  frac12$1 = '½',
  frac13 = '⅓',
  frac14$1 = '¼',
  frac15 = '⅕',
  frac16 = '⅙',
  frac18 = '⅛',
  frac23 = '⅔',
  frac25 = '⅖',
  frac34$1 = '¾',
  frac35 = '⅗',
  frac38 = '⅜',
  frac45 = '⅘',
  frac56 = '⅚',
  frac58 = '⅝',
  frac78 = '⅞',
  frasl = '⁄',
  frown = '⌢',
  fscr = '𝒻',
  Fscr = 'ℱ',
  gacute = 'ǵ',
  Gamma = 'Γ',
  gamma = 'γ',
  Gammad = 'Ϝ',
  gammad = 'ϝ',
  gap = '⪆',
  Gbreve = 'Ğ',
  gbreve = 'ğ',
  Gcedil = 'Ģ',
  Gcirc = 'Ĝ',
  gcirc = 'ĝ',
  Gcy = 'Г',
  gcy = 'г',
  Gdot = 'Ġ',
  gdot = 'ġ',
  ge = '≥',
  gE = '≧',
  gEl = '⪌',
  gel = '⋛',
  geq = '≥',
  geqq = '≧',
  geqslant = '⩾',
  gescc = '⪩',
  ges = '⩾',
  gesdot = '⪀',
  gesdoto = '⪂',
  gesdotol = '⪄',
  gesl = '⋛︀',
  gesles = '⪔',
  Gfr = '𝔊',
  gfr = '𝔤',
  gg = '≫',
  Gg = '⋙',
  ggg = '⋙',
  gimel = 'ℷ',
  GJcy = 'Ѓ',
  gjcy = 'ѓ',
  gla = '⪥',
  gl = '≷',
  glE = '⪒',
  glj = '⪤',
  gnap = '⪊',
  gnapprox = '⪊',
  gne = '⪈',
  gnE = '≩',
  gneq = '⪈',
  gneqq = '≩',
  gnsim = '⋧',
  Gopf = '𝔾',
  gopf = '𝕘',
  grave = '`',
  GreaterEqual = '≥',
  GreaterEqualLess = '⋛',
  GreaterFullEqual = '≧',
  GreaterGreater = '⪢',
  GreaterLess = '≷',
  GreaterSlantEqual = '⩾',
  GreaterTilde = '≳',
  Gscr = '𝒢',
  gscr = 'ℊ',
  gsim = '≳',
  gsime = '⪎',
  gsiml = '⪐',
  gtcc = '⪧',
  gtcir = '⩺',
  gt$2 = '>',
  GT$1 = '>',
  Gt = '≫',
  gtdot = '⋗',
  gtlPar = '⦕',
  gtquest = '⩼',
  gtrapprox = '⪆',
  gtrarr = '⥸',
  gtrdot = '⋗',
  gtreqless = '⋛',
  gtreqqless = '⪌',
  gtrless = '≷',
  gtrsim = '≳',
  gvertneqq = '≩︀',
  gvnE = '≩︀',
  Hacek = 'ˇ',
  hairsp = ' ',
  half = '½',
  hamilt = 'ℋ',
  HARDcy = 'Ъ',
  hardcy = 'ъ',
  harrcir = '⥈',
  harr = '↔',
  hArr = '⇔',
  harrw = '↭',
  Hat = '^',
  hbar = 'ℏ',
  Hcirc = 'Ĥ',
  hcirc = 'ĥ',
  hearts = '♥',
  heartsuit = '♥',
  hellip = '…',
  hercon = '⊹',
  hfr = '𝔥',
  Hfr = 'ℌ',
  HilbertSpace = 'ℋ',
  hksearow = '⤥',
  hkswarow = '⤦',
  hoarr = '⇿',
  homtht = '∻',
  hookleftarrow = '↩',
  hookrightarrow = '↪',
  hopf = '𝕙',
  Hopf = 'ℍ',
  horbar = '―',
  HorizontalLine = '─',
  hscr = '𝒽',
  Hscr = 'ℋ',
  hslash = 'ℏ',
  Hstrok = 'Ħ',
  hstrok = 'ħ',
  HumpDownHump = '≎',
  HumpEqual = '≏',
  hybull = '⁃',
  hyphen = '‐',
  Iacute$1 = 'Í',
  iacute$1 = 'í',
  ic = '⁣',
  Icirc$1 = 'Î',
  icirc$1 = 'î',
  Icy = 'И',
  icy = 'и',
  Idot = 'İ',
  IEcy = 'Е',
  iecy = 'е',
  iexcl$1 = '¡',
  iff = '⇔',
  ifr = '𝔦',
  Ifr = 'ℑ',
  Igrave$1 = 'Ì',
  igrave$1 = 'ì',
  ii = 'ⅈ',
  iiiint = '⨌',
  iiint = '∭',
  iinfin = '⧜',
  iiota = '℩',
  IJlig = 'Ĳ',
  ijlig = 'ĳ',
  Imacr = 'Ī',
  imacr = 'ī',
  image = 'ℑ',
  ImaginaryI = 'ⅈ',
  imagline = 'ℐ',
  imagpart = 'ℑ',
  imath = 'ı',
  Im = 'ℑ',
  imof = '⊷',
  imped = 'Ƶ',
  Implies = '⇒',
  incare = '℅',
  infin = '∞',
  infintie = '⧝',
  inodot = 'ı',
  intcal = '⊺',
  int = '∫',
  Int = '∬',
  integers = 'ℤ',
  Integral = '∫',
  intercal = '⊺',
  Intersection = '⋂',
  intlarhk = '⨗',
  intprod = '⨼',
  InvisibleComma = '⁣',
  InvisibleTimes = '⁢',
  IOcy = 'Ё',
  iocy = 'ё',
  Iogon = 'Į',
  iogon = 'į',
  Iopf = '𝕀',
  iopf = '𝕚',
  Iota = 'Ι',
  iota = 'ι',
  iprod = '⨼',
  iquest$1 = '¿',
  iscr = '𝒾',
  Iscr = 'ℐ',
  isin = '∈',
  isindot = '⋵',
  isinE = '⋹',
  isins = '⋴',
  isinsv = '⋳',
  isinv = '∈',
  it = '⁢',
  Itilde = 'Ĩ',
  itilde = 'ĩ',
  Iukcy = 'І',
  iukcy = 'і',
  Iuml$1 = 'Ï',
  iuml$1 = 'ï',
  Jcirc = 'Ĵ',
  jcirc = 'ĵ',
  Jcy = 'Й',
  jcy = 'й',
  Jfr = '𝔍',
  jfr = '𝔧',
  jmath = 'ȷ',
  Jopf = '𝕁',
  jopf = '𝕛',
  Jscr = '𝒥',
  jscr = '𝒿',
  Jsercy = 'Ј',
  jsercy = 'ј',
  Jukcy = 'Є',
  jukcy = 'є',
  Kappa = 'Κ',
  kappa = 'κ',
  kappav = 'ϰ',
  Kcedil = 'Ķ',
  kcedil = 'ķ',
  Kcy = 'К',
  kcy = 'к',
  Kfr = '𝔎',
  kfr = '𝔨',
  kgreen = 'ĸ',
  KHcy = 'Х',
  khcy = 'х',
  KJcy = 'Ќ',
  kjcy = 'ќ',
  Kopf = '𝕂',
  kopf = '𝕜',
  Kscr = '𝒦',
  kscr = '𝓀',
  lAarr = '⇚',
  Lacute = 'Ĺ',
  lacute = 'ĺ',
  laemptyv = '⦴',
  lagran = 'ℒ',
  Lambda = 'Λ',
  lambda = 'λ',
  lang = '⟨',
  Lang = '⟪',
  langd = '⦑',
  langle = '⟨',
  lap = '⪅',
  Laplacetrf = 'ℒ',
  laquo$1 = '«',
  larrb = '⇤',
  larrbfs = '⤟',
  larr = '←',
  Larr = '↞',
  lArr = '⇐',
  larrfs = '⤝',
  larrhk = '↩',
  larrlp = '↫',
  larrpl = '⤹',
  larrsim = '⥳',
  larrtl = '↢',
  latail = '⤙',
  lAtail = '⤛',
  lat = '⪫',
  late = '⪭',
  lates = '⪭︀',
  lbarr = '⤌',
  lBarr = '⤎',
  lbbrk = '❲',
  lbrace = '{',
  lbrack = '[',
  lbrke = '⦋',
  lbrksld = '⦏',
  lbrkslu = '⦍',
  Lcaron = 'Ľ',
  lcaron = 'ľ',
  Lcedil = 'Ļ',
  lcedil = 'ļ',
  lceil = '⌈',
  lcub = '{',
  Lcy = 'Л',
  lcy = 'л',
  ldca = '⤶',
  ldquo = '“',
  ldquor = '„',
  ldrdhar = '⥧',
  ldrushar = '⥋',
  ldsh = '↲',
  le = '≤',
  lE = '≦',
  LeftAngleBracket = '⟨',
  LeftArrowBar = '⇤',
  leftarrow = '←',
  LeftArrow = '←',
  Leftarrow = '⇐',
  LeftArrowRightArrow = '⇆',
  leftarrowtail = '↢',
  LeftCeiling = '⌈',
  LeftDoubleBracket = '⟦',
  LeftDownTeeVector = '⥡',
  LeftDownVectorBar = '⥙',
  LeftDownVector = '⇃',
  LeftFloor = '⌊',
  leftharpoondown = '↽',
  leftharpoonup = '↼',
  leftleftarrows = '⇇',
  leftrightarrow = '↔',
  LeftRightArrow = '↔',
  Leftrightarrow = '⇔',
  leftrightarrows = '⇆',
  leftrightharpoons = '⇋',
  leftrightsquigarrow = '↭',
  LeftRightVector = '⥎',
  LeftTeeArrow = '↤',
  LeftTee = '⊣',
  LeftTeeVector = '⥚',
  leftthreetimes = '⋋',
  LeftTriangleBar = '⧏',
  LeftTriangle = '⊲',
  LeftTriangleEqual = '⊴',
  LeftUpDownVector = '⥑',
  LeftUpTeeVector = '⥠',
  LeftUpVectorBar = '⥘',
  LeftUpVector = '↿',
  LeftVectorBar = '⥒',
  LeftVector = '↼',
  lEg = '⪋',
  leg = '⋚',
  leq = '≤',
  leqq = '≦',
  leqslant = '⩽',
  lescc = '⪨',
  les = '⩽',
  lesdot = '⩿',
  lesdoto = '⪁',
  lesdotor = '⪃',
  lesg = '⋚︀',
  lesges = '⪓',
  lessapprox = '⪅',
  lessdot = '⋖',
  lesseqgtr = '⋚',
  lesseqqgtr = '⪋',
  LessEqualGreater = '⋚',
  LessFullEqual = '≦',
  LessGreater = '≶',
  lessgtr = '≶',
  LessLess = '⪡',
  lesssim = '≲',
  LessSlantEqual = '⩽',
  LessTilde = '≲',
  lfisht = '⥼',
  lfloor = '⌊',
  Lfr = '𝔏',
  lfr = '𝔩',
  lg = '≶',
  lgE = '⪑',
  lHar = '⥢',
  lhard = '↽',
  lharu = '↼',
  lharul = '⥪',
  lhblk = '▄',
  LJcy = 'Љ',
  ljcy = 'љ',
  llarr = '⇇',
  ll = '≪',
  Ll = '⋘',
  llcorner = '⌞',
  Lleftarrow = '⇚',
  llhard = '⥫',
  lltri = '◺',
  Lmidot = 'Ŀ',
  lmidot = 'ŀ',
  lmoustache = '⎰',
  lmoust = '⎰',
  lnap = '⪉',
  lnapprox = '⪉',
  lne = '⪇',
  lnE = '≨',
  lneq = '⪇',
  lneqq = '≨',
  lnsim = '⋦',
  loang = '⟬',
  loarr = '⇽',
  lobrk = '⟦',
  longleftarrow = '⟵',
  LongLeftArrow = '⟵',
  Longleftarrow = '⟸',
  longleftrightarrow = '⟷',
  LongLeftRightArrow = '⟷',
  Longleftrightarrow = '⟺',
  longmapsto = '⟼',
  longrightarrow = '⟶',
  LongRightArrow = '⟶',
  Longrightarrow = '⟹',
  looparrowleft = '↫',
  looparrowright = '↬',
  lopar = '⦅',
  Lopf = '𝕃',
  lopf = '𝕝',
  loplus = '⨭',
  lotimes = '⨴',
  lowast = '∗',
  lowbar = '_',
  LowerLeftArrow = '↙',
  LowerRightArrow = '↘',
  loz = '◊',
  lozenge = '◊',
  lozf = '⧫',
  lpar = '(',
  lparlt = '⦓',
  lrarr = '⇆',
  lrcorner = '⌟',
  lrhar = '⇋',
  lrhard = '⥭',
  lrm = '‎',
  lrtri = '⊿',
  lsaquo = '‹',
  lscr = '𝓁',
  Lscr = 'ℒ',
  lsh = '↰',
  Lsh = '↰',
  lsim = '≲',
  lsime = '⪍',
  lsimg = '⪏',
  lsqb = '[',
  lsquo = '‘',
  lsquor = '‚',
  Lstrok = 'Ł',
  lstrok = 'ł',
  ltcc = '⪦',
  ltcir = '⩹',
  lt$2 = '<',
  LT$1 = '<',
  Lt = '≪',
  ltdot = '⋖',
  lthree = '⋋',
  ltimes = '⋉',
  ltlarr = '⥶',
  ltquest = '⩻',
  ltri = '◃',
  ltrie = '⊴',
  ltrif = '◂',
  ltrPar = '⦖',
  lurdshar = '⥊',
  luruhar = '⥦',
  lvertneqq = '≨︀',
  lvnE = '≨︀',
  macr$1 = '¯',
  male = '♂',
  malt = '✠',
  maltese = '✠',
  map = '↦',
  mapsto = '↦',
  mapstodown = '↧',
  mapstoleft = '↤',
  mapstoup = '↥',
  marker = '▮',
  mcomma = '⨩',
  Mcy = 'М',
  mcy = 'м',
  mdash = '—',
  mDDot = '∺',
  measuredangle = '∡',
  MediumSpace = ' ',
  Mellintrf = 'ℳ',
  Mfr = '𝔐',
  mfr = '𝔪',
  mho = '℧',
  micro$1 = 'µ',
  midast = '*',
  midcir = '⫰',
  mid = '∣',
  middot$1 = '·',
  minusb = '⊟',
  minus = '−',
  minusd = '∸',
  minusdu = '⨪',
  MinusPlus = '∓',
  mlcp = '⫛',
  mldr = '…',
  mnplus = '∓',
  models = '⊧',
  Mopf = '𝕄',
  mopf = '𝕞',
  mp = '∓',
  mscr = '𝓂',
  Mscr = 'ℳ',
  mstpos = '∾',
  Mu = 'Μ',
  mu = 'μ',
  multimap = '⊸',
  mumap = '⊸',
  nabla = '∇',
  Nacute = 'Ń',
  nacute = 'ń',
  nang = '∠⃒',
  nap = '≉',
  napE = '⩰̸',
  napid = '≋̸',
  napos = 'ŉ',
  napprox = '≉',
  natural = '♮',
  naturals = 'ℕ',
  natur = '♮',
  nbsp$1 = ' ',
  nbump = '≎̸',
  nbumpe = '≏̸',
  ncap = '⩃',
  Ncaron = 'Ň',
  ncaron = 'ň',
  Ncedil = 'Ņ',
  ncedil = 'ņ',
  ncong = '≇',
  ncongdot = '⩭̸',
  ncup = '⩂',
  Ncy = 'Н',
  ncy = 'н',
  ndash = '–',
  nearhk = '⤤',
  nearr = '↗',
  neArr = '⇗',
  nearrow = '↗',
  ne = '≠',
  nedot = '≐̸',
  NegativeMediumSpace = '​',
  NegativeThickSpace = '​',
  NegativeThinSpace = '​',
  NegativeVeryThinSpace = '​',
  nequiv = '≢',
  nesear = '⤨',
  nesim = '≂̸',
  NestedGreaterGreater = '≫',
  NestedLessLess = '≪',
  NewLine = `
`,
  nexist = '∄',
  nexists = '∄',
  Nfr = '𝔑',
  nfr = '𝔫',
  ngE = '≧̸',
  nge = '≱',
  ngeq = '≱',
  ngeqq = '≧̸',
  ngeqslant = '⩾̸',
  nges = '⩾̸',
  nGg = '⋙̸',
  ngsim = '≵',
  nGt = '≫⃒',
  ngt = '≯',
  ngtr = '≯',
  nGtv = '≫̸',
  nharr = '↮',
  nhArr = '⇎',
  nhpar = '⫲',
  ni = '∋',
  nis = '⋼',
  nisd = '⋺',
  niv = '∋',
  NJcy = 'Њ',
  njcy = 'њ',
  nlarr = '↚',
  nlArr = '⇍',
  nldr = '‥',
  nlE = '≦̸',
  nle = '≰',
  nleftarrow = '↚',
  nLeftarrow = '⇍',
  nleftrightarrow = '↮',
  nLeftrightarrow = '⇎',
  nleq = '≰',
  nleqq = '≦̸',
  nleqslant = '⩽̸',
  nles = '⩽̸',
  nless = '≮',
  nLl = '⋘̸',
  nlsim = '≴',
  nLt = '≪⃒',
  nlt = '≮',
  nltri = '⋪',
  nltrie = '⋬',
  nLtv = '≪̸',
  nmid = '∤',
  NoBreak = '⁠',
  NonBreakingSpace = ' ',
  nopf = '𝕟',
  Nopf = 'ℕ',
  Not = '⫬',
  not$1 = '¬',
  NotCongruent = '≢',
  NotCupCap = '≭',
  NotDoubleVerticalBar = '∦',
  NotElement = '∉',
  NotEqual = '≠',
  NotEqualTilde = '≂̸',
  NotExists = '∄',
  NotGreater = '≯',
  NotGreaterEqual = '≱',
  NotGreaterFullEqual = '≧̸',
  NotGreaterGreater = '≫̸',
  NotGreaterLess = '≹',
  NotGreaterSlantEqual = '⩾̸',
  NotGreaterTilde = '≵',
  NotHumpDownHump = '≎̸',
  NotHumpEqual = '≏̸',
  notin = '∉',
  notindot = '⋵̸',
  notinE = '⋹̸',
  notinva = '∉',
  notinvb = '⋷',
  notinvc = '⋶',
  NotLeftTriangleBar = '⧏̸',
  NotLeftTriangle = '⋪',
  NotLeftTriangleEqual = '⋬',
  NotLess = '≮',
  NotLessEqual = '≰',
  NotLessGreater = '≸',
  NotLessLess = '≪̸',
  NotLessSlantEqual = '⩽̸',
  NotLessTilde = '≴',
  NotNestedGreaterGreater = '⪢̸',
  NotNestedLessLess = '⪡̸',
  notni = '∌',
  notniva = '∌',
  notnivb = '⋾',
  notnivc = '⋽',
  NotPrecedes = '⊀',
  NotPrecedesEqual = '⪯̸',
  NotPrecedesSlantEqual = '⋠',
  NotReverseElement = '∌',
  NotRightTriangleBar = '⧐̸',
  NotRightTriangle = '⋫',
  NotRightTriangleEqual = '⋭',
  NotSquareSubset = '⊏̸',
  NotSquareSubsetEqual = '⋢',
  NotSquareSuperset = '⊐̸',
  NotSquareSupersetEqual = '⋣',
  NotSubset = '⊂⃒',
  NotSubsetEqual = '⊈',
  NotSucceeds = '⊁',
  NotSucceedsEqual = '⪰̸',
  NotSucceedsSlantEqual = '⋡',
  NotSucceedsTilde = '≿̸',
  NotSuperset = '⊃⃒',
  NotSupersetEqual = '⊉',
  NotTilde = '≁',
  NotTildeEqual = '≄',
  NotTildeFullEqual = '≇',
  NotTildeTilde = '≉',
  NotVerticalBar = '∤',
  nparallel = '∦',
  npar = '∦',
  nparsl = '⫽⃥',
  npart = '∂̸',
  npolint = '⨔',
  npr = '⊀',
  nprcue = '⋠',
  nprec = '⊀',
  npreceq = '⪯̸',
  npre = '⪯̸',
  nrarrc = '⤳̸',
  nrarr = '↛',
  nrArr = '⇏',
  nrarrw = '↝̸',
  nrightarrow = '↛',
  nRightarrow = '⇏',
  nrtri = '⋫',
  nrtrie = '⋭',
  nsc = '⊁',
  nsccue = '⋡',
  nsce = '⪰̸',
  Nscr = '𝒩',
  nscr = '𝓃',
  nshortmid = '∤',
  nshortparallel = '∦',
  nsim = '≁',
  nsime = '≄',
  nsimeq = '≄',
  nsmid = '∤',
  nspar = '∦',
  nsqsube = '⋢',
  nsqsupe = '⋣',
  nsub = '⊄',
  nsubE = '⫅̸',
  nsube = '⊈',
  nsubset = '⊂⃒',
  nsubseteq = '⊈',
  nsubseteqq = '⫅̸',
  nsucc = '⊁',
  nsucceq = '⪰̸',
  nsup = '⊅',
  nsupE = '⫆̸',
  nsupe = '⊉',
  nsupset = '⊃⃒',
  nsupseteq = '⊉',
  nsupseteqq = '⫆̸',
  ntgl = '≹',
  Ntilde$1 = 'Ñ',
  ntilde$1 = 'ñ',
  ntlg = '≸',
  ntriangleleft = '⋪',
  ntrianglelefteq = '⋬',
  ntriangleright = '⋫',
  ntrianglerighteq = '⋭',
  Nu = 'Ν',
  nu = 'ν',
  num = '#',
  numero = '№',
  numsp = ' ',
  nvap = '≍⃒',
  nvdash = '⊬',
  nvDash = '⊭',
  nVdash = '⊮',
  nVDash = '⊯',
  nvge = '≥⃒',
  nvgt = '>⃒',
  nvHarr = '⤄',
  nvinfin = '⧞',
  nvlArr = '⤂',
  nvle = '≤⃒',
  nvlt = '<⃒',
  nvltrie = '⊴⃒',
  nvrArr = '⤃',
  nvrtrie = '⊵⃒',
  nvsim = '∼⃒',
  nwarhk = '⤣',
  nwarr = '↖',
  nwArr = '⇖',
  nwarrow = '↖',
  nwnear = '⤧',
  Oacute$1 = 'Ó',
  oacute$1 = 'ó',
  oast = '⊛',
  Ocirc$1 = 'Ô',
  ocirc$1 = 'ô',
  ocir = '⊚',
  Ocy = 'О',
  ocy = 'о',
  odash = '⊝',
  Odblac = 'Ő',
  odblac = 'ő',
  odiv = '⨸',
  odot = '⊙',
  odsold = '⦼',
  OElig = 'Œ',
  oelig = 'œ',
  ofcir = '⦿',
  Ofr = '𝔒',
  ofr = '𝔬',
  ogon = '˛',
  Ograve$1 = 'Ò',
  ograve$1 = 'ò',
  ogt = '⧁',
  ohbar = '⦵',
  ohm = 'Ω',
  oint = '∮',
  olarr = '↺',
  olcir = '⦾',
  olcross = '⦻',
  oline = '‾',
  olt = '⧀',
  Omacr = 'Ō',
  omacr = 'ō',
  Omega = 'Ω',
  omega = 'ω',
  Omicron = 'Ο',
  omicron = 'ο',
  omid = '⦶',
  ominus = '⊖',
  Oopf = '𝕆',
  oopf = '𝕠',
  opar = '⦷',
  OpenCurlyDoubleQuote = '“',
  OpenCurlyQuote = '‘',
  operp = '⦹',
  oplus = '⊕',
  orarr = '↻',
  Or = '⩔',
  or = '∨',
  ord = '⩝',
  order = 'ℴ',
  orderof = 'ℴ',
  ordf$1 = 'ª',
  ordm$1 = 'º',
  origof = '⊶',
  oror = '⩖',
  orslope = '⩗',
  orv = '⩛',
  oS = 'Ⓢ',
  Oscr = '𝒪',
  oscr = 'ℴ',
  Oslash$1 = 'Ø',
  oslash$1 = 'ø',
  osol = '⊘',
  Otilde$1 = 'Õ',
  otilde$1 = 'õ',
  otimesas = '⨶',
  Otimes = '⨷',
  otimes = '⊗',
  Ouml$1 = 'Ö',
  ouml$1 = 'ö',
  ovbar = '⌽',
  OverBar = '‾',
  OverBrace = '⏞',
  OverBracket = '⎴',
  OverParenthesis = '⏜',
  para$1 = '¶',
  parallel = '∥',
  par = '∥',
  parsim = '⫳',
  parsl = '⫽',
  part = '∂',
  PartialD = '∂',
  Pcy = 'П',
  pcy = 'п',
  percnt = '%',
  period = '.',
  permil = '‰',
  perp = '⊥',
  pertenk = '‱',
  Pfr = '𝔓',
  pfr = '𝔭',
  Phi = 'Φ',
  phi = 'φ',
  phiv = 'ϕ',
  phmmat = 'ℳ',
  phone = '☎',
  Pi = 'Π',
  pi = 'π',
  pitchfork = '⋔',
  piv = 'ϖ',
  planck = 'ℏ',
  planckh = 'ℎ',
  plankv = 'ℏ',
  plusacir = '⨣',
  plusb = '⊞',
  pluscir = '⨢',
  plus = '+',
  plusdo = '∔',
  plusdu = '⨥',
  pluse = '⩲',
  PlusMinus = '±',
  plusmn$1 = '±',
  plussim = '⨦',
  plustwo = '⨧',
  pm = '±',
  Poincareplane = 'ℌ',
  pointint = '⨕',
  popf = '𝕡',
  Popf = 'ℙ',
  pound$1 = '£',
  prap = '⪷',
  Pr = '⪻',
  pr = '≺',
  prcue = '≼',
  precapprox = '⪷',
  prec = '≺',
  preccurlyeq = '≼',
  Precedes = '≺',
  PrecedesEqual = '⪯',
  PrecedesSlantEqual = '≼',
  PrecedesTilde = '≾',
  preceq = '⪯',
  precnapprox = '⪹',
  precneqq = '⪵',
  precnsim = '⋨',
  pre = '⪯',
  prE = '⪳',
  precsim = '≾',
  prime = '′',
  Prime = '″',
  primes = 'ℙ',
  prnap = '⪹',
  prnE = '⪵',
  prnsim = '⋨',
  prod = '∏',
  Product = '∏',
  profalar = '⌮',
  profline = '⌒',
  profsurf = '⌓',
  prop = '∝',
  Proportional = '∝',
  Proportion = '∷',
  propto = '∝',
  prsim = '≾',
  prurel = '⊰',
  Pscr = '𝒫',
  pscr = '𝓅',
  Psi = 'Ψ',
  psi = 'ψ',
  puncsp = ' ',
  Qfr = '𝔔',
  qfr = '𝔮',
  qint = '⨌',
  qopf = '𝕢',
  Qopf = 'ℚ',
  qprime = '⁗',
  Qscr = '𝒬',
  qscr = '𝓆',
  quaternions = 'ℍ',
  quatint = '⨖',
  quest = '?',
  questeq = '≟',
  quot$2 = '"',
  QUOT$1 = '"',
  rAarr = '⇛',
  race = '∽̱',
  Racute = 'Ŕ',
  racute = 'ŕ',
  radic = '√',
  raemptyv = '⦳',
  rang = '⟩',
  Rang = '⟫',
  rangd = '⦒',
  range$1 = '⦥',
  rangle = '⟩',
  raquo$1 = '»',
  rarrap = '⥵',
  rarrb = '⇥',
  rarrbfs = '⤠',
  rarrc = '⤳',
  rarr = '→',
  Rarr = '↠',
  rArr = '⇒',
  rarrfs = '⤞',
  rarrhk = '↪',
  rarrlp = '↬',
  rarrpl = '⥅',
  rarrsim = '⥴',
  Rarrtl = '⤖',
  rarrtl = '↣',
  rarrw = '↝',
  ratail = '⤚',
  rAtail = '⤜',
  ratio = '∶',
  rationals = 'ℚ',
  rbarr = '⤍',
  rBarr = '⤏',
  RBarr = '⤐',
  rbbrk = '❳',
  rbrace = '}',
  rbrack = ']',
  rbrke = '⦌',
  rbrksld = '⦎',
  rbrkslu = '⦐',
  Rcaron = 'Ř',
  rcaron = 'ř',
  Rcedil = 'Ŗ',
  rcedil = 'ŗ',
  rceil = '⌉',
  rcub = '}',
  Rcy = 'Р',
  rcy = 'р',
  rdca = '⤷',
  rdldhar = '⥩',
  rdquo = '”',
  rdquor = '”',
  rdsh = '↳',
  real = 'ℜ',
  realine = 'ℛ',
  realpart = 'ℜ',
  reals = 'ℝ',
  Re = 'ℜ',
  rect = '▭',
  reg$1 = '®',
  REG$1 = '®',
  ReverseElement = '∋',
  ReverseEquilibrium = '⇋',
  ReverseUpEquilibrium = '⥯',
  rfisht = '⥽',
  rfloor = '⌋',
  rfr = '𝔯',
  Rfr = 'ℜ',
  rHar = '⥤',
  rhard = '⇁',
  rharu = '⇀',
  rharul = '⥬',
  Rho = 'Ρ',
  rho = 'ρ',
  rhov = 'ϱ',
  RightAngleBracket = '⟩',
  RightArrowBar = '⇥',
  rightarrow = '→',
  RightArrow = '→',
  Rightarrow = '⇒',
  RightArrowLeftArrow = '⇄',
  rightarrowtail = '↣',
  RightCeiling = '⌉',
  RightDoubleBracket = '⟧',
  RightDownTeeVector = '⥝',
  RightDownVectorBar = '⥕',
  RightDownVector = '⇂',
  RightFloor = '⌋',
  rightharpoondown = '⇁',
  rightharpoonup = '⇀',
  rightleftarrows = '⇄',
  rightleftharpoons = '⇌',
  rightrightarrows = '⇉',
  rightsquigarrow = '↝',
  RightTeeArrow = '↦',
  RightTee = '⊢',
  RightTeeVector = '⥛',
  rightthreetimes = '⋌',
  RightTriangleBar = '⧐',
  RightTriangle = '⊳',
  RightTriangleEqual = '⊵',
  RightUpDownVector = '⥏',
  RightUpTeeVector = '⥜',
  RightUpVectorBar = '⥔',
  RightUpVector = '↾',
  RightVectorBar = '⥓',
  RightVector = '⇀',
  ring = '˚',
  risingdotseq = '≓',
  rlarr = '⇄',
  rlhar = '⇌',
  rlm = '‏',
  rmoustache = '⎱',
  rmoust = '⎱',
  rnmid = '⫮',
  roang = '⟭',
  roarr = '⇾',
  robrk = '⟧',
  ropar = '⦆',
  ropf = '𝕣',
  Ropf = 'ℝ',
  roplus = '⨮',
  rotimes = '⨵',
  RoundImplies = '⥰',
  rpar = ')',
  rpargt = '⦔',
  rppolint = '⨒',
  rrarr = '⇉',
  Rrightarrow = '⇛',
  rsaquo = '›',
  rscr = '𝓇',
  Rscr = 'ℛ',
  rsh = '↱',
  Rsh = '↱',
  rsqb = ']',
  rsquo = '’',
  rsquor = '’',
  rthree = '⋌',
  rtimes = '⋊',
  rtri = '▹',
  rtrie = '⊵',
  rtrif = '▸',
  rtriltri = '⧎',
  RuleDelayed = '⧴',
  ruluhar = '⥨',
  rx = '℞',
  Sacute = 'Ś',
  sacute = 'ś',
  sbquo = '‚',
  scap = '⪸',
  Scaron = 'Š',
  scaron = 'š',
  Sc = '⪼',
  sc = '≻',
  sccue = '≽',
  sce = '⪰',
  scE = '⪴',
  Scedil = 'Ş',
  scedil = 'ş',
  Scirc = 'Ŝ',
  scirc = 'ŝ',
  scnap = '⪺',
  scnE = '⪶',
  scnsim = '⋩',
  scpolint = '⨓',
  scsim = '≿',
  Scy = 'С',
  scy = 'с',
  sdotb = '⊡',
  sdot = '⋅',
  sdote = '⩦',
  searhk = '⤥',
  searr = '↘',
  seArr = '⇘',
  searrow = '↘',
  sect$1 = '§',
  semi = ';',
  seswar = '⤩',
  setminus = '∖',
  setmn = '∖',
  sext = '✶',
  Sfr = '𝔖',
  sfr = '𝔰',
  sfrown = '⌢',
  sharp = '♯',
  SHCHcy = 'Щ',
  shchcy = 'щ',
  SHcy = 'Ш',
  shcy = 'ш',
  ShortDownArrow = '↓',
  ShortLeftArrow = '←',
  shortmid = '∣',
  shortparallel = '∥',
  ShortRightArrow = '→',
  ShortUpArrow = '↑',
  shy$1 = '­',
  Sigma = 'Σ',
  sigma = 'σ',
  sigmaf = 'ς',
  sigmav = 'ς',
  sim = '∼',
  simdot = '⩪',
  sime = '≃',
  simeq = '≃',
  simg = '⪞',
  simgE = '⪠',
  siml = '⪝',
  simlE = '⪟',
  simne = '≆',
  simplus = '⨤',
  simrarr = '⥲',
  slarr = '←',
  SmallCircle = '∘',
  smallsetminus = '∖',
  smashp = '⨳',
  smeparsl = '⧤',
  smid = '∣',
  smile = '⌣',
  smt = '⪪',
  smte = '⪬',
  smtes = '⪬︀',
  SOFTcy = 'Ь',
  softcy = 'ь',
  solbar = '⌿',
  solb = '⧄',
  sol = '/',
  Sopf = '𝕊',
  sopf = '𝕤',
  spades = '♠',
  spadesuit = '♠',
  spar = '∥',
  sqcap = '⊓',
  sqcaps = '⊓︀',
  sqcup = '⊔',
  sqcups = '⊔︀',
  Sqrt = '√',
  sqsub = '⊏',
  sqsube = '⊑',
  sqsubset = '⊏',
  sqsubseteq = '⊑',
  sqsup = '⊐',
  sqsupe = '⊒',
  sqsupset = '⊐',
  sqsupseteq = '⊒',
  square = '□',
  Square = '□',
  SquareIntersection = '⊓',
  SquareSubset = '⊏',
  SquareSubsetEqual = '⊑',
  SquareSuperset = '⊐',
  SquareSupersetEqual = '⊒',
  SquareUnion = '⊔',
  squarf = '▪',
  squ = '□',
  squf = '▪',
  srarr = '→',
  Sscr = '𝒮',
  sscr = '𝓈',
  ssetmn = '∖',
  ssmile = '⌣',
  sstarf = '⋆',
  Star = '⋆',
  star = '☆',
  starf = '★',
  straightepsilon = 'ϵ',
  straightphi = 'ϕ',
  strns = '¯',
  sub = '⊂',
  Sub = '⋐',
  subdot = '⪽',
  subE = '⫅',
  sube = '⊆',
  subedot = '⫃',
  submult = '⫁',
  subnE = '⫋',
  subne = '⊊',
  subplus = '⪿',
  subrarr = '⥹',
  subset = '⊂',
  Subset = '⋐',
  subseteq = '⊆',
  subseteqq = '⫅',
  SubsetEqual = '⊆',
  subsetneq = '⊊',
  subsetneqq = '⫋',
  subsim = '⫇',
  subsub = '⫕',
  subsup = '⫓',
  succapprox = '⪸',
  succ = '≻',
  succcurlyeq = '≽',
  Succeeds = '≻',
  SucceedsEqual = '⪰',
  SucceedsSlantEqual = '≽',
  SucceedsTilde = '≿',
  succeq = '⪰',
  succnapprox = '⪺',
  succneqq = '⪶',
  succnsim = '⋩',
  succsim = '≿',
  SuchThat = '∋',
  sum = '∑',
  Sum = '∑',
  sung = '♪',
  sup1$1 = '¹',
  sup2$1 = '²',
  sup3$1 = '³',
  sup = '⊃',
  Sup = '⋑',
  supdot = '⪾',
  supdsub = '⫘',
  supE = '⫆',
  supe = '⊇',
  supedot = '⫄',
  Superset = '⊃',
  SupersetEqual = '⊇',
  suphsol = '⟉',
  suphsub = '⫗',
  suplarr = '⥻',
  supmult = '⫂',
  supnE = '⫌',
  supne = '⊋',
  supplus = '⫀',
  supset = '⊃',
  Supset = '⋑',
  supseteq = '⊇',
  supseteqq = '⫆',
  supsetneq = '⊋',
  supsetneqq = '⫌',
  supsim = '⫈',
  supsub = '⫔',
  supsup = '⫖',
  swarhk = '⤦',
  swarr = '↙',
  swArr = '⇙',
  swarrow = '↙',
  swnwar = '⤪',
  szlig$1 = 'ß',
  Tab = '	',
  target = '⌖',
  Tau = 'Τ',
  tau = 'τ',
  tbrk = '⎴',
  Tcaron = 'Ť',
  tcaron = 'ť',
  Tcedil = 'Ţ',
  tcedil = 'ţ',
  Tcy = 'Т',
  tcy = 'т',
  tdot = '⃛',
  telrec = '⌕',
  Tfr = '𝔗',
  tfr = '𝔱',
  there4 = '∴',
  therefore = '∴',
  Therefore = '∴',
  Theta = 'Θ',
  theta = 'θ',
  thetasym = 'ϑ',
  thetav = 'ϑ',
  thickapprox = '≈',
  thicksim = '∼',
  ThickSpace = '  ',
  ThinSpace = ' ',
  thinsp = ' ',
  thkap = '≈',
  thksim = '∼',
  THORN$1 = 'Þ',
  thorn$1 = 'þ',
  tilde = '˜',
  Tilde = '∼',
  TildeEqual = '≃',
  TildeFullEqual = '≅',
  TildeTilde = '≈',
  timesbar = '⨱',
  timesb = '⊠',
  times$1 = '×',
  timesd = '⨰',
  tint = '∭',
  toea = '⤨',
  topbot = '⌶',
  topcir = '⫱',
  top = '⊤',
  Topf = '𝕋',
  topf = '𝕥',
  topfork = '⫚',
  tosa = '⤩',
  tprime = '‴',
  trade = '™',
  TRADE = '™',
  triangle = '▵',
  triangledown = '▿',
  triangleleft = '◃',
  trianglelefteq = '⊴',
  triangleq = '≜',
  triangleright = '▹',
  trianglerighteq = '⊵',
  tridot = '◬',
  trie = '≜',
  triminus = '⨺',
  TripleDot = '⃛',
  triplus = '⨹',
  trisb = '⧍',
  tritime = '⨻',
  trpezium = '⏢',
  Tscr = '𝒯',
  tscr = '𝓉',
  TScy = 'Ц',
  tscy = 'ц',
  TSHcy = 'Ћ',
  tshcy = 'ћ',
  Tstrok = 'Ŧ',
  tstrok = 'ŧ',
  twixt = '≬',
  twoheadleftarrow = '↞',
  twoheadrightarrow = '↠',
  Uacute$1 = 'Ú',
  uacute$1 = 'ú',
  uarr = '↑',
  Uarr = '↟',
  uArr = '⇑',
  Uarrocir = '⥉',
  Ubrcy = 'Ў',
  ubrcy = 'ў',
  Ubreve = 'Ŭ',
  ubreve = 'ŭ',
  Ucirc$1 = 'Û',
  ucirc$1 = 'û',
  Ucy = 'У',
  ucy = 'у',
  udarr = '⇅',
  Udblac = 'Ű',
  udblac = 'ű',
  udhar = '⥮',
  ufisht = '⥾',
  Ufr = '𝔘',
  ufr = '𝔲',
  Ugrave$1 = 'Ù',
  ugrave$1 = 'ù',
  uHar = '⥣',
  uharl = '↿',
  uharr = '↾',
  uhblk = '▀',
  ulcorn = '⌜',
  ulcorner = '⌜',
  ulcrop = '⌏',
  ultri = '◸',
  Umacr = 'Ū',
  umacr = 'ū',
  uml$1 = '¨',
  UnderBar = '_',
  UnderBrace = '⏟',
  UnderBracket = '⎵',
  UnderParenthesis = '⏝',
  Union = '⋃',
  UnionPlus = '⊎',
  Uogon = 'Ų',
  uogon = 'ų',
  Uopf = '𝕌',
  uopf = '𝕦',
  UpArrowBar = '⤒',
  uparrow = '↑',
  UpArrow = '↑',
  Uparrow = '⇑',
  UpArrowDownArrow = '⇅',
  updownarrow = '↕',
  UpDownArrow = '↕',
  Updownarrow = '⇕',
  UpEquilibrium = '⥮',
  upharpoonleft = '↿',
  upharpoonright = '↾',
  uplus = '⊎',
  UpperLeftArrow = '↖',
  UpperRightArrow = '↗',
  upsi = 'υ',
  Upsi = 'ϒ',
  upsih = 'ϒ',
  Upsilon = 'Υ',
  upsilon = 'υ',
  UpTeeArrow = '↥',
  UpTee = '⊥',
  upuparrows = '⇈',
  urcorn = '⌝',
  urcorner = '⌝',
  urcrop = '⌎',
  Uring = 'Ů',
  uring = 'ů',
  urtri = '◹',
  Uscr = '𝒰',
  uscr = '𝓊',
  utdot = '⋰',
  Utilde = 'Ũ',
  utilde = 'ũ',
  utri = '▵',
  utrif = '▴',
  uuarr = '⇈',
  Uuml$1 = 'Ü',
  uuml$1 = 'ü',
  uwangle = '⦧',
  vangrt = '⦜',
  varepsilon = 'ϵ',
  varkappa = 'ϰ',
  varnothing = '∅',
  varphi = 'ϕ',
  varpi = 'ϖ',
  varpropto = '∝',
  varr = '↕',
  vArr = '⇕',
  varrho = 'ϱ',
  varsigma = 'ς',
  varsubsetneq = '⊊︀',
  varsubsetneqq = '⫋︀',
  varsupsetneq = '⊋︀',
  varsupsetneqq = '⫌︀',
  vartheta = 'ϑ',
  vartriangleleft = '⊲',
  vartriangleright = '⊳',
  vBar = '⫨',
  Vbar = '⫫',
  vBarv = '⫩',
  Vcy = 'В',
  vcy = 'в',
  vdash = '⊢',
  vDash = '⊨',
  Vdash = '⊩',
  VDash = '⊫',
  Vdashl = '⫦',
  veebar = '⊻',
  vee = '∨',
  Vee = '⋁',
  veeeq = '≚',
  vellip = '⋮',
  verbar = '|',
  Verbar = '‖',
  vert = '|',
  Vert = '‖',
  VerticalBar = '∣',
  VerticalLine = '|',
  VerticalSeparator = '❘',
  VerticalTilde = '≀',
  VeryThinSpace = ' ',
  Vfr = '𝔙',
  vfr = '𝔳',
  vltri = '⊲',
  vnsub = '⊂⃒',
  vnsup = '⊃⃒',
  Vopf = '𝕍',
  vopf = '𝕧',
  vprop = '∝',
  vrtri = '⊳',
  Vscr = '𝒱',
  vscr = '𝓋',
  vsubnE = '⫋︀',
  vsubne = '⊊︀',
  vsupnE = '⫌︀',
  vsupne = '⊋︀',
  Vvdash = '⊪',
  vzigzag = '⦚',
  Wcirc = 'Ŵ',
  wcirc = 'ŵ',
  wedbar = '⩟',
  wedge = '∧',
  Wedge = '⋀',
  wedgeq = '≙',
  weierp = '℘',
  Wfr = '𝔚',
  wfr = '𝔴',
  Wopf = '𝕎',
  wopf = '𝕨',
  wp = '℘',
  wr = '≀',
  wreath = '≀',
  Wscr = '𝒲',
  wscr = '𝓌',
  xcap = '⋂',
  xcirc = '◯',
  xcup = '⋃',
  xdtri = '▽',
  Xfr = '𝔛',
  xfr = '𝔵',
  xharr = '⟷',
  xhArr = '⟺',
  Xi = 'Ξ',
  xi = 'ξ',
  xlarr = '⟵',
  xlArr = '⟸',
  xmap = '⟼',
  xnis = '⋻',
  xodot = '⨀',
  Xopf = '𝕏',
  xopf = '𝕩',
  xoplus = '⨁',
  xotime = '⨂',
  xrarr = '⟶',
  xrArr = '⟹',
  Xscr = '𝒳',
  xscr = '𝓍',
  xsqcup = '⨆',
  xuplus = '⨄',
  xutri = '△',
  xvee = '⋁',
  xwedge = '⋀',
  Yacute$1 = 'Ý',
  yacute$1 = 'ý',
  YAcy = 'Я',
  yacy = 'я',
  Ycirc = 'Ŷ',
  ycirc = 'ŷ',
  Ycy = 'Ы',
  ycy = 'ы',
  yen$1 = '¥',
  Yfr = '𝔜',
  yfr = '𝔶',
  YIcy = 'Ї',
  yicy = 'ї',
  Yopf = '𝕐',
  yopf = '𝕪',
  Yscr = '𝒴',
  yscr = '𝓎',
  YUcy = 'Ю',
  yucy = 'ю',
  yuml$1 = 'ÿ',
  Yuml = 'Ÿ',
  Zacute = 'Ź',
  zacute = 'ź',
  Zcaron = 'Ž',
  zcaron = 'ž',
  Zcy = 'З',
  zcy = 'з',
  Zdot = 'Ż',
  zdot = 'ż',
  zeetrf = 'ℨ',
  ZeroWidthSpace = '​',
  Zeta = 'Ζ',
  zeta = 'ζ',
  zfr = '𝔷',
  Zfr = 'ℨ',
  ZHcy = 'Ж',
  zhcy = 'ж',
  zigrarr = '⇝',
  zopf = '𝕫',
  Zopf = 'ℤ',
  Zscr = '𝒵',
  zscr = '𝓏',
  zwj = '‍',
  zwnj = '‌',
  require$$1$1 = {
    Aacute: Aacute$1,
    aacute: aacute$1,
    Abreve,
    abreve,
    ac,
    acd,
    acE,
    Acirc: Acirc$1,
    acirc: acirc$1,
    acute: acute$1,
    Acy,
    acy,
    AElig: AElig$1,
    aelig: aelig$1,
    af,
    Afr,
    afr,
    Agrave: Agrave$1,
    agrave: agrave$1,
    alefsym,
    aleph,
    Alpha,
    alpha,
    Amacr,
    amacr,
    amalg,
    amp: amp$2,
    AMP: AMP$1,
    andand,
    And,
    and,
    andd,
    andslope,
    andv,
    ang,
    ange,
    angle,
    angmsdaa,
    angmsdab,
    angmsdac,
    angmsdad,
    angmsdae,
    angmsdaf,
    angmsdag,
    angmsdah,
    angmsd,
    angrt,
    angrtvb,
    angrtvbd,
    angsph,
    angst,
    angzarr,
    Aogon,
    aogon,
    Aopf,
    aopf,
    apacir,
    ap,
    apE,
    ape,
    apid,
    apos: apos$1,
    ApplyFunction,
    approx,
    approxeq,
    Aring: Aring$1,
    aring: aring$1,
    Ascr,
    ascr,
    Assign,
    ast,
    asymp,
    asympeq,
    Atilde: Atilde$1,
    atilde: atilde$1,
    Auml: Auml$1,
    auml: auml$1,
    awconint,
    awint,
    backcong,
    backepsilon,
    backprime,
    backsim,
    backsimeq,
    Backslash,
    Barv,
    barvee,
    barwed,
    Barwed,
    barwedge,
    bbrk,
    bbrktbrk,
    bcong,
    Bcy,
    bcy,
    bdquo,
    becaus,
    because,
    Because,
    bemptyv,
    bepsi,
    bernou,
    Bernoullis,
    Beta,
    beta,
    beth,
    between,
    Bfr,
    bfr,
    bigcap,
    bigcirc,
    bigcup,
    bigodot,
    bigoplus,
    bigotimes,
    bigsqcup,
    bigstar,
    bigtriangledown,
    bigtriangleup,
    biguplus,
    bigvee,
    bigwedge,
    bkarow,
    blacklozenge,
    blacksquare,
    blacktriangle,
    blacktriangledown,
    blacktriangleleft,
    blacktriangleright,
    blank,
    blk12,
    blk14,
    blk34,
    block,
    bne,
    bnequiv,
    bNot,
    bnot,
    Bopf,
    bopf,
    bot,
    bottom,
    bowtie,
    boxbox,
    boxdl,
    boxdL,
    boxDl,
    boxDL,
    boxdr,
    boxdR,
    boxDr,
    boxDR,
    boxh,
    boxH,
    boxhd,
    boxHd,
    boxhD,
    boxHD,
    boxhu,
    boxHu,
    boxhU,
    boxHU,
    boxminus,
    boxplus,
    boxtimes,
    boxul,
    boxuL,
    boxUl,
    boxUL,
    boxur,
    boxuR,
    boxUr,
    boxUR,
    boxv,
    boxV,
    boxvh,
    boxvH,
    boxVh,
    boxVH,
    boxvl,
    boxvL,
    boxVl,
    boxVL,
    boxvr,
    boxvR,
    boxVr,
    boxVR,
    bprime,
    breve,
    Breve,
    brvbar: brvbar$1,
    bscr,
    Bscr,
    bsemi,
    bsim,
    bsime,
    bsolb,
    bsol,
    bsolhsub,
    bull,
    bullet,
    bump,
    bumpE,
    bumpe,
    Bumpeq,
    bumpeq,
    Cacute,
    cacute,
    capand,
    capbrcup,
    capcap,
    cap,
    Cap,
    capcup,
    capdot,
    CapitalDifferentialD,
    caps,
    caret,
    caron,
    Cayleys,
    ccaps,
    Ccaron,
    ccaron,
    Ccedil: Ccedil$1,
    ccedil: ccedil$1,
    Ccirc,
    ccirc,
    Cconint,
    ccups,
    ccupssm,
    Cdot,
    cdot,
    cedil: cedil$1,
    Cedilla,
    cemptyv,
    cent: cent$1,
    centerdot,
    CenterDot,
    cfr,
    Cfr,
    CHcy,
    chcy,
    check,
    checkmark,
    Chi,
    chi,
    circ,
    circeq,
    circlearrowleft,
    circlearrowright,
    circledast,
    circledcirc,
    circleddash,
    CircleDot,
    circledR,
    circledS,
    CircleMinus,
    CirclePlus,
    CircleTimes,
    cir,
    cirE,
    cire,
    cirfnint,
    cirmid,
    cirscir,
    ClockwiseContourIntegral,
    CloseCurlyDoubleQuote,
    CloseCurlyQuote,
    clubs,
    clubsuit,
    colon,
    Colon,
    Colone,
    colone,
    coloneq,
    comma,
    commat,
    comp,
    compfn,
    complement,
    complexes,
    cong,
    congdot,
    Congruent,
    conint,
    Conint,
    ContourIntegral,
    copf,
    Copf,
    coprod,
    Coproduct,
    copy: copy$1,
    COPY: COPY$1,
    copysr,
    CounterClockwiseContourIntegral,
    crarr,
    cross,
    Cross,
    Cscr,
    cscr,
    csub,
    csube,
    csup,
    csupe,
    ctdot,
    cudarrl,
    cudarrr,
    cuepr,
    cuesc,
    cularr,
    cularrp,
    cupbrcap,
    cupcap,
    CupCap,
    cup,
    Cup,
    cupcup,
    cupdot,
    cupor,
    cups,
    curarr,
    curarrm,
    curlyeqprec,
    curlyeqsucc,
    curlyvee,
    curlywedge,
    curren: curren$1,
    curvearrowleft,
    curvearrowright,
    cuvee,
    cuwed,
    cwconint,
    cwint,
    cylcty,
    dagger,
    Dagger,
    daleth,
    darr,
    Darr,
    dArr,
    dash,
    Dashv,
    dashv,
    dbkarow,
    dblac,
    Dcaron,
    dcaron,
    Dcy,
    dcy,
    ddagger,
    ddarr,
    DD,
    dd,
    DDotrahd,
    ddotseq,
    deg: deg$1,
    Del,
    Delta,
    delta,
    demptyv,
    dfisht,
    Dfr,
    dfr,
    dHar,
    dharl,
    dharr,
    DiacriticalAcute,
    DiacriticalDot,
    DiacriticalDoubleAcute,
    DiacriticalGrave,
    DiacriticalTilde,
    diam,
    diamond,
    Diamond,
    diamondsuit,
    diams,
    die,
    DifferentialD,
    digamma,
    disin,
    div,
    divide: divide$1,
    divideontimes,
    divonx,
    DJcy,
    djcy,
    dlcorn,
    dlcrop,
    dollar,
    Dopf,
    dopf,
    Dot,
    dot,
    DotDot,
    doteq,
    doteqdot,
    DotEqual,
    dotminus,
    dotplus,
    dotsquare,
    doublebarwedge,
    DoubleContourIntegral,
    DoubleDot,
    DoubleDownArrow,
    DoubleLeftArrow,
    DoubleLeftRightArrow,
    DoubleLeftTee,
    DoubleLongLeftArrow,
    DoubleLongLeftRightArrow,
    DoubleLongRightArrow,
    DoubleRightArrow,
    DoubleRightTee,
    DoubleUpArrow,
    DoubleUpDownArrow,
    DoubleVerticalBar,
    DownArrowBar,
    downarrow,
    DownArrow,
    Downarrow,
    DownArrowUpArrow,
    DownBreve,
    downdownarrows,
    downharpoonleft,
    downharpoonright,
    DownLeftRightVector,
    DownLeftTeeVector,
    DownLeftVectorBar,
    DownLeftVector,
    DownRightTeeVector,
    DownRightVectorBar,
    DownRightVector,
    DownTeeArrow,
    DownTee,
    drbkarow,
    drcorn,
    drcrop,
    Dscr,
    dscr,
    DScy,
    dscy,
    dsol,
    Dstrok,
    dstrok,
    dtdot,
    dtri,
    dtrif,
    duarr,
    duhar,
    dwangle,
    DZcy,
    dzcy,
    dzigrarr,
    Eacute: Eacute$1,
    eacute: eacute$1,
    easter,
    Ecaron,
    ecaron,
    Ecirc: Ecirc$1,
    ecirc: ecirc$1,
    ecir,
    ecolon,
    Ecy,
    ecy,
    eDDot,
    Edot,
    edot,
    eDot,
    ee,
    efDot,
    Efr,
    efr,
    eg,
    Egrave: Egrave$1,
    egrave: egrave$1,
    egs,
    egsdot,
    el,
    Element,
    elinters,
    ell,
    els,
    elsdot,
    Emacr,
    emacr,
    empty,
    emptyset,
    EmptySmallSquare,
    emptyv,
    EmptyVerySmallSquare,
    emsp13,
    emsp14,
    emsp,
    ENG,
    eng,
    ensp,
    Eogon,
    eogon,
    Eopf,
    eopf,
    epar,
    eparsl,
    eplus,
    epsi,
    Epsilon,
    epsilon,
    epsiv,
    eqcirc,
    eqcolon,
    eqsim,
    eqslantgtr,
    eqslantless,
    Equal,
    equals,
    EqualTilde,
    equest,
    Equilibrium,
    equiv,
    equivDD,
    eqvparsl,
    erarr,
    erDot,
    escr,
    Escr,
    esdot,
    Esim,
    esim,
    Eta,
    eta,
    ETH: ETH$1,
    eth: eth$1,
    Euml: Euml$1,
    euml: euml$1,
    euro,
    excl,
    exist,
    Exists,
    expectation,
    exponentiale,
    ExponentialE,
    fallingdotseq,
    Fcy,
    fcy,
    female,
    ffilig,
    fflig,
    ffllig,
    Ffr,
    ffr,
    filig,
    FilledSmallSquare,
    FilledVerySmallSquare,
    fjlig,
    flat,
    fllig,
    fltns,
    fnof,
    Fopf,
    fopf,
    forall,
    ForAll,
    fork,
    forkv,
    Fouriertrf,
    fpartint,
    frac12: frac12$1,
    frac13,
    frac14: frac14$1,
    frac15,
    frac16,
    frac18,
    frac23,
    frac25,
    frac34: frac34$1,
    frac35,
    frac38,
    frac45,
    frac56,
    frac58,
    frac78,
    frasl,
    frown,
    fscr,
    Fscr,
    gacute,
    Gamma,
    gamma,
    Gammad,
    gammad,
    gap,
    Gbreve,
    gbreve,
    Gcedil,
    Gcirc,
    gcirc,
    Gcy,
    gcy,
    Gdot,
    gdot,
    ge,
    gE,
    gEl,
    gel,
    geq,
    geqq,
    geqslant,
    gescc,
    ges,
    gesdot,
    gesdoto,
    gesdotol,
    gesl,
    gesles,
    Gfr,
    gfr,
    gg,
    Gg,
    ggg,
    gimel,
    GJcy,
    gjcy,
    gla,
    gl,
    glE,
    glj,
    gnap,
    gnapprox,
    gne,
    gnE,
    gneq,
    gneqq,
    gnsim,
    Gopf,
    gopf,
    grave,
    GreaterEqual,
    GreaterEqualLess,
    GreaterFullEqual,
    GreaterGreater,
    GreaterLess,
    GreaterSlantEqual,
    GreaterTilde,
    Gscr,
    gscr,
    gsim,
    gsime,
    gsiml,
    gtcc,
    gtcir,
    gt: gt$2,
    GT: GT$1,
    Gt,
    gtdot,
    gtlPar,
    gtquest,
    gtrapprox,
    gtrarr,
    gtrdot,
    gtreqless,
    gtreqqless,
    gtrless,
    gtrsim,
    gvertneqq,
    gvnE,
    Hacek,
    hairsp,
    half,
    hamilt,
    HARDcy,
    hardcy,
    harrcir,
    harr,
    hArr,
    harrw,
    Hat,
    hbar,
    Hcirc,
    hcirc,
    hearts,
    heartsuit,
    hellip,
    hercon,
    hfr,
    Hfr,
    HilbertSpace,
    hksearow,
    hkswarow,
    hoarr,
    homtht,
    hookleftarrow,
    hookrightarrow,
    hopf,
    Hopf,
    horbar,
    HorizontalLine,
    hscr,
    Hscr,
    hslash,
    Hstrok,
    hstrok,
    HumpDownHump,
    HumpEqual,
    hybull,
    hyphen,
    Iacute: Iacute$1,
    iacute: iacute$1,
    ic,
    Icirc: Icirc$1,
    icirc: icirc$1,
    Icy,
    icy,
    Idot,
    IEcy,
    iecy,
    iexcl: iexcl$1,
    iff,
    ifr,
    Ifr,
    Igrave: Igrave$1,
    igrave: igrave$1,
    ii,
    iiiint,
    iiint,
    iinfin,
    iiota,
    IJlig,
    ijlig,
    Imacr,
    imacr,
    image,
    ImaginaryI,
    imagline,
    imagpart,
    imath,
    Im,
    imof,
    imped,
    Implies,
    incare,
    in: '∈',
    infin,
    infintie,
    inodot,
    intcal,
    int,
    Int,
    integers,
    Integral,
    intercal,
    Intersection,
    intlarhk,
    intprod,
    InvisibleComma,
    InvisibleTimes,
    IOcy,
    iocy,
    Iogon,
    iogon,
    Iopf,
    iopf,
    Iota,
    iota,
    iprod,
    iquest: iquest$1,
    iscr,
    Iscr,
    isin,
    isindot,
    isinE,
    isins,
    isinsv,
    isinv,
    it,
    Itilde,
    itilde,
    Iukcy,
    iukcy,
    Iuml: Iuml$1,
    iuml: iuml$1,
    Jcirc,
    jcirc,
    Jcy,
    jcy,
    Jfr,
    jfr,
    jmath,
    Jopf,
    jopf,
    Jscr,
    jscr,
    Jsercy,
    jsercy,
    Jukcy,
    jukcy,
    Kappa,
    kappa,
    kappav,
    Kcedil,
    kcedil,
    Kcy,
    kcy,
    Kfr,
    kfr,
    kgreen,
    KHcy,
    khcy,
    KJcy,
    kjcy,
    Kopf,
    kopf,
    Kscr,
    kscr,
    lAarr,
    Lacute,
    lacute,
    laemptyv,
    lagran,
    Lambda,
    lambda,
    lang,
    Lang,
    langd,
    langle,
    lap,
    Laplacetrf,
    laquo: laquo$1,
    larrb,
    larrbfs,
    larr,
    Larr,
    lArr,
    larrfs,
    larrhk,
    larrlp,
    larrpl,
    larrsim,
    larrtl,
    latail,
    lAtail,
    lat,
    late,
    lates,
    lbarr,
    lBarr,
    lbbrk,
    lbrace,
    lbrack,
    lbrke,
    lbrksld,
    lbrkslu,
    Lcaron,
    lcaron,
    Lcedil,
    lcedil,
    lceil,
    lcub,
    Lcy,
    lcy,
    ldca,
    ldquo,
    ldquor,
    ldrdhar,
    ldrushar,
    ldsh,
    le,
    lE,
    LeftAngleBracket,
    LeftArrowBar,
    leftarrow,
    LeftArrow,
    Leftarrow,
    LeftArrowRightArrow,
    leftarrowtail,
    LeftCeiling,
    LeftDoubleBracket,
    LeftDownTeeVector,
    LeftDownVectorBar,
    LeftDownVector,
    LeftFloor,
    leftharpoondown,
    leftharpoonup,
    leftleftarrows,
    leftrightarrow,
    LeftRightArrow,
    Leftrightarrow,
    leftrightarrows,
    leftrightharpoons,
    leftrightsquigarrow,
    LeftRightVector,
    LeftTeeArrow,
    LeftTee,
    LeftTeeVector,
    leftthreetimes,
    LeftTriangleBar,
    LeftTriangle,
    LeftTriangleEqual,
    LeftUpDownVector,
    LeftUpTeeVector,
    LeftUpVectorBar,
    LeftUpVector,
    LeftVectorBar,
    LeftVector,
    lEg,
    leg,
    leq,
    leqq,
    leqslant,
    lescc,
    les,
    lesdot,
    lesdoto,
    lesdotor,
    lesg,
    lesges,
    lessapprox,
    lessdot,
    lesseqgtr,
    lesseqqgtr,
    LessEqualGreater,
    LessFullEqual,
    LessGreater,
    lessgtr,
    LessLess,
    lesssim,
    LessSlantEqual,
    LessTilde,
    lfisht,
    lfloor,
    Lfr,
    lfr,
    lg,
    lgE,
    lHar,
    lhard,
    lharu,
    lharul,
    lhblk,
    LJcy,
    ljcy,
    llarr,
    ll,
    Ll,
    llcorner,
    Lleftarrow,
    llhard,
    lltri,
    Lmidot,
    lmidot,
    lmoustache,
    lmoust,
    lnap,
    lnapprox,
    lne,
    lnE,
    lneq,
    lneqq,
    lnsim,
    loang,
    loarr,
    lobrk,
    longleftarrow,
    LongLeftArrow,
    Longleftarrow,
    longleftrightarrow,
    LongLeftRightArrow,
    Longleftrightarrow,
    longmapsto,
    longrightarrow,
    LongRightArrow,
    Longrightarrow,
    looparrowleft,
    looparrowright,
    lopar,
    Lopf,
    lopf,
    loplus,
    lotimes,
    lowast,
    lowbar,
    LowerLeftArrow,
    LowerRightArrow,
    loz,
    lozenge,
    lozf,
    lpar,
    lparlt,
    lrarr,
    lrcorner,
    lrhar,
    lrhard,
    lrm,
    lrtri,
    lsaquo,
    lscr,
    Lscr,
    lsh,
    Lsh,
    lsim,
    lsime,
    lsimg,
    lsqb,
    lsquo,
    lsquor,
    Lstrok,
    lstrok,
    ltcc,
    ltcir,
    lt: lt$2,
    LT: LT$1,
    Lt,
    ltdot,
    lthree,
    ltimes,
    ltlarr,
    ltquest,
    ltri,
    ltrie,
    ltrif,
    ltrPar,
    lurdshar,
    luruhar,
    lvertneqq,
    lvnE,
    macr: macr$1,
    male,
    malt,
    maltese,
    Map: '⤅',
    map,
    mapsto,
    mapstodown,
    mapstoleft,
    mapstoup,
    marker,
    mcomma,
    Mcy,
    mcy,
    mdash,
    mDDot,
    measuredangle,
    MediumSpace,
    Mellintrf,
    Mfr,
    mfr,
    mho,
    micro: micro$1,
    midast,
    midcir,
    mid,
    middot: middot$1,
    minusb,
    minus,
    minusd,
    minusdu,
    MinusPlus,
    mlcp,
    mldr,
    mnplus,
    models,
    Mopf,
    mopf,
    mp,
    mscr,
    Mscr,
    mstpos,
    Mu,
    mu,
    multimap,
    mumap,
    nabla,
    Nacute,
    nacute,
    nang,
    nap,
    napE,
    napid,
    napos,
    napprox,
    natural,
    naturals,
    natur,
    nbsp: nbsp$1,
    nbump,
    nbumpe,
    ncap,
    Ncaron,
    ncaron,
    Ncedil,
    ncedil,
    ncong,
    ncongdot,
    ncup,
    Ncy,
    ncy,
    ndash,
    nearhk,
    nearr,
    neArr,
    nearrow,
    ne,
    nedot,
    NegativeMediumSpace,
    NegativeThickSpace,
    NegativeThinSpace,
    NegativeVeryThinSpace,
    nequiv,
    nesear,
    nesim,
    NestedGreaterGreater,
    NestedLessLess,
    NewLine,
    nexist,
    nexists,
    Nfr,
    nfr,
    ngE,
    nge,
    ngeq,
    ngeqq,
    ngeqslant,
    nges,
    nGg,
    ngsim,
    nGt,
    ngt,
    ngtr,
    nGtv,
    nharr,
    nhArr,
    nhpar,
    ni,
    nis,
    nisd,
    niv,
    NJcy,
    njcy,
    nlarr,
    nlArr,
    nldr,
    nlE,
    nle,
    nleftarrow,
    nLeftarrow,
    nleftrightarrow,
    nLeftrightarrow,
    nleq,
    nleqq,
    nleqslant,
    nles,
    nless,
    nLl,
    nlsim,
    nLt,
    nlt,
    nltri,
    nltrie,
    nLtv,
    nmid,
    NoBreak,
    NonBreakingSpace,
    nopf,
    Nopf,
    Not,
    not: not$1,
    NotCongruent,
    NotCupCap,
    NotDoubleVerticalBar,
    NotElement,
    NotEqual,
    NotEqualTilde,
    NotExists,
    NotGreater,
    NotGreaterEqual,
    NotGreaterFullEqual,
    NotGreaterGreater,
    NotGreaterLess,
    NotGreaterSlantEqual,
    NotGreaterTilde,
    NotHumpDownHump,
    NotHumpEqual,
    notin,
    notindot,
    notinE,
    notinva,
    notinvb,
    notinvc,
    NotLeftTriangleBar,
    NotLeftTriangle,
    NotLeftTriangleEqual,
    NotLess,
    NotLessEqual,
    NotLessGreater,
    NotLessLess,
    NotLessSlantEqual,
    NotLessTilde,
    NotNestedGreaterGreater,
    NotNestedLessLess,
    notni,
    notniva,
    notnivb,
    notnivc,
    NotPrecedes,
    NotPrecedesEqual,
    NotPrecedesSlantEqual,
    NotReverseElement,
    NotRightTriangleBar,
    NotRightTriangle,
    NotRightTriangleEqual,
    NotSquareSubset,
    NotSquareSubsetEqual,
    NotSquareSuperset,
    NotSquareSupersetEqual,
    NotSubset,
    NotSubsetEqual,
    NotSucceeds,
    NotSucceedsEqual,
    NotSucceedsSlantEqual,
    NotSucceedsTilde,
    NotSuperset,
    NotSupersetEqual,
    NotTilde,
    NotTildeEqual,
    NotTildeFullEqual,
    NotTildeTilde,
    NotVerticalBar,
    nparallel,
    npar,
    nparsl,
    npart,
    npolint,
    npr,
    nprcue,
    nprec,
    npreceq,
    npre,
    nrarrc,
    nrarr,
    nrArr,
    nrarrw,
    nrightarrow,
    nRightarrow,
    nrtri,
    nrtrie,
    nsc,
    nsccue,
    nsce,
    Nscr,
    nscr,
    nshortmid,
    nshortparallel,
    nsim,
    nsime,
    nsimeq,
    nsmid,
    nspar,
    nsqsube,
    nsqsupe,
    nsub,
    nsubE,
    nsube,
    nsubset,
    nsubseteq,
    nsubseteqq,
    nsucc,
    nsucceq,
    nsup,
    nsupE,
    nsupe,
    nsupset,
    nsupseteq,
    nsupseteqq,
    ntgl,
    Ntilde: Ntilde$1,
    ntilde: ntilde$1,
    ntlg,
    ntriangleleft,
    ntrianglelefteq,
    ntriangleright,
    ntrianglerighteq,
    Nu,
    nu,
    num,
    numero,
    numsp,
    nvap,
    nvdash,
    nvDash,
    nVdash,
    nVDash,
    nvge,
    nvgt,
    nvHarr,
    nvinfin,
    nvlArr,
    nvle,
    nvlt,
    nvltrie,
    nvrArr,
    nvrtrie,
    nvsim,
    nwarhk,
    nwarr,
    nwArr,
    nwarrow,
    nwnear,
    Oacute: Oacute$1,
    oacute: oacute$1,
    oast,
    Ocirc: Ocirc$1,
    ocirc: ocirc$1,
    ocir,
    Ocy,
    ocy,
    odash,
    Odblac,
    odblac,
    odiv,
    odot,
    odsold,
    OElig,
    oelig,
    ofcir,
    Ofr,
    ofr,
    ogon,
    Ograve: Ograve$1,
    ograve: ograve$1,
    ogt,
    ohbar,
    ohm,
    oint,
    olarr,
    olcir,
    olcross,
    oline,
    olt,
    Omacr,
    omacr,
    Omega,
    omega,
    Omicron,
    omicron,
    omid,
    ominus,
    Oopf,
    oopf,
    opar,
    OpenCurlyDoubleQuote,
    OpenCurlyQuote,
    operp,
    oplus,
    orarr,
    Or,
    or,
    ord,
    order,
    orderof,
    ordf: ordf$1,
    ordm: ordm$1,
    origof,
    oror,
    orslope,
    orv,
    oS,
    Oscr,
    oscr,
    Oslash: Oslash$1,
    oslash: oslash$1,
    osol,
    Otilde: Otilde$1,
    otilde: otilde$1,
    otimesas,
    Otimes,
    otimes,
    Ouml: Ouml$1,
    ouml: ouml$1,
    ovbar,
    OverBar,
    OverBrace,
    OverBracket,
    OverParenthesis,
    para: para$1,
    parallel,
    par,
    parsim,
    parsl,
    part,
    PartialD,
    Pcy,
    pcy,
    percnt,
    period,
    permil,
    perp,
    pertenk,
    Pfr,
    pfr,
    Phi,
    phi,
    phiv,
    phmmat,
    phone,
    Pi,
    pi,
    pitchfork,
    piv,
    planck,
    planckh,
    plankv,
    plusacir,
    plusb,
    pluscir,
    plus,
    plusdo,
    plusdu,
    pluse,
    PlusMinus,
    plusmn: plusmn$1,
    plussim,
    plustwo,
    pm,
    Poincareplane,
    pointint,
    popf,
    Popf,
    pound: pound$1,
    prap,
    Pr,
    pr,
    prcue,
    precapprox,
    prec,
    preccurlyeq,
    Precedes,
    PrecedesEqual,
    PrecedesSlantEqual,
    PrecedesTilde,
    preceq,
    precnapprox,
    precneqq,
    precnsim,
    pre,
    prE,
    precsim,
    prime,
    Prime,
    primes,
    prnap,
    prnE,
    prnsim,
    prod,
    Product,
    profalar,
    profline,
    profsurf,
    prop,
    Proportional,
    Proportion,
    propto,
    prsim,
    prurel,
    Pscr,
    pscr,
    Psi,
    psi,
    puncsp,
    Qfr,
    qfr,
    qint,
    qopf,
    Qopf,
    qprime,
    Qscr,
    qscr,
    quaternions,
    quatint,
    quest,
    questeq,
    quot: quot$2,
    QUOT: QUOT$1,
    rAarr,
    race,
    Racute,
    racute,
    radic,
    raemptyv,
    rang,
    Rang,
    rangd,
    range: range$1,
    rangle,
    raquo: raquo$1,
    rarrap,
    rarrb,
    rarrbfs,
    rarrc,
    rarr,
    Rarr,
    rArr,
    rarrfs,
    rarrhk,
    rarrlp,
    rarrpl,
    rarrsim,
    Rarrtl,
    rarrtl,
    rarrw,
    ratail,
    rAtail,
    ratio,
    rationals,
    rbarr,
    rBarr,
    RBarr,
    rbbrk,
    rbrace,
    rbrack,
    rbrke,
    rbrksld,
    rbrkslu,
    Rcaron,
    rcaron,
    Rcedil,
    rcedil,
    rceil,
    rcub,
    Rcy,
    rcy,
    rdca,
    rdldhar,
    rdquo,
    rdquor,
    rdsh,
    real,
    realine,
    realpart,
    reals,
    Re,
    rect,
    reg: reg$1,
    REG: REG$1,
    ReverseElement,
    ReverseEquilibrium,
    ReverseUpEquilibrium,
    rfisht,
    rfloor,
    rfr,
    Rfr,
    rHar,
    rhard,
    rharu,
    rharul,
    Rho,
    rho,
    rhov,
    RightAngleBracket,
    RightArrowBar,
    rightarrow,
    RightArrow,
    Rightarrow,
    RightArrowLeftArrow,
    rightarrowtail,
    RightCeiling,
    RightDoubleBracket,
    RightDownTeeVector,
    RightDownVectorBar,
    RightDownVector,
    RightFloor,
    rightharpoondown,
    rightharpoonup,
    rightleftarrows,
    rightleftharpoons,
    rightrightarrows,
    rightsquigarrow,
    RightTeeArrow,
    RightTee,
    RightTeeVector,
    rightthreetimes,
    RightTriangleBar,
    RightTriangle,
    RightTriangleEqual,
    RightUpDownVector,
    RightUpTeeVector,
    RightUpVectorBar,
    RightUpVector,
    RightVectorBar,
    RightVector,
    ring,
    risingdotseq,
    rlarr,
    rlhar,
    rlm,
    rmoustache,
    rmoust,
    rnmid,
    roang,
    roarr,
    robrk,
    ropar,
    ropf,
    Ropf,
    roplus,
    rotimes,
    RoundImplies,
    rpar,
    rpargt,
    rppolint,
    rrarr,
    Rrightarrow,
    rsaquo,
    rscr,
    Rscr,
    rsh,
    Rsh,
    rsqb,
    rsquo,
    rsquor,
    rthree,
    rtimes,
    rtri,
    rtrie,
    rtrif,
    rtriltri,
    RuleDelayed,
    ruluhar,
    rx,
    Sacute,
    sacute,
    sbquo,
    scap,
    Scaron,
    scaron,
    Sc,
    sc,
    sccue,
    sce,
    scE,
    Scedil,
    scedil,
    Scirc,
    scirc,
    scnap,
    scnE,
    scnsim,
    scpolint,
    scsim,
    Scy,
    scy,
    sdotb,
    sdot,
    sdote,
    searhk,
    searr,
    seArr,
    searrow,
    sect: sect$1,
    semi,
    seswar,
    setminus,
    setmn,
    sext,
    Sfr,
    sfr,
    sfrown,
    sharp,
    SHCHcy,
    shchcy,
    SHcy,
    shcy,
    ShortDownArrow,
    ShortLeftArrow,
    shortmid,
    shortparallel,
    ShortRightArrow,
    ShortUpArrow,
    shy: shy$1,
    Sigma,
    sigma,
    sigmaf,
    sigmav,
    sim,
    simdot,
    sime,
    simeq,
    simg,
    simgE,
    siml,
    simlE,
    simne,
    simplus,
    simrarr,
    slarr,
    SmallCircle,
    smallsetminus,
    smashp,
    smeparsl,
    smid,
    smile,
    smt,
    smte,
    smtes,
    SOFTcy,
    softcy,
    solbar,
    solb,
    sol,
    Sopf,
    sopf,
    spades,
    spadesuit,
    spar,
    sqcap,
    sqcaps,
    sqcup,
    sqcups,
    Sqrt,
    sqsub,
    sqsube,
    sqsubset,
    sqsubseteq,
    sqsup,
    sqsupe,
    sqsupset,
    sqsupseteq,
    square,
    Square,
    SquareIntersection,
    SquareSubset,
    SquareSubsetEqual,
    SquareSuperset,
    SquareSupersetEqual,
    SquareUnion,
    squarf,
    squ,
    squf,
    srarr,
    Sscr,
    sscr,
    ssetmn,
    ssmile,
    sstarf,
    Star,
    star,
    starf,
    straightepsilon,
    straightphi,
    strns,
    sub,
    Sub,
    subdot,
    subE,
    sube,
    subedot,
    submult,
    subnE,
    subne,
    subplus,
    subrarr,
    subset,
    Subset,
    subseteq,
    subseteqq,
    SubsetEqual,
    subsetneq,
    subsetneqq,
    subsim,
    subsub,
    subsup,
    succapprox,
    succ,
    succcurlyeq,
    Succeeds,
    SucceedsEqual,
    SucceedsSlantEqual,
    SucceedsTilde,
    succeq,
    succnapprox,
    succneqq,
    succnsim,
    succsim,
    SuchThat,
    sum,
    Sum,
    sung,
    sup1: sup1$1,
    sup2: sup2$1,
    sup3: sup3$1,
    sup,
    Sup,
    supdot,
    supdsub,
    supE,
    supe,
    supedot,
    Superset,
    SupersetEqual,
    suphsol,
    suphsub,
    suplarr,
    supmult,
    supnE,
    supne,
    supplus,
    supset,
    Supset,
    supseteq,
    supseteqq,
    supsetneq,
    supsetneqq,
    supsim,
    supsub,
    supsup,
    swarhk,
    swarr,
    swArr,
    swarrow,
    swnwar,
    szlig: szlig$1,
    Tab,
    target,
    Tau,
    tau,
    tbrk,
    Tcaron,
    tcaron,
    Tcedil,
    tcedil,
    Tcy,
    tcy,
    tdot,
    telrec,
    Tfr,
    tfr,
    there4,
    therefore,
    Therefore,
    Theta,
    theta,
    thetasym,
    thetav,
    thickapprox,
    thicksim,
    ThickSpace,
    ThinSpace,
    thinsp,
    thkap,
    thksim,
    THORN: THORN$1,
    thorn: thorn$1,
    tilde,
    Tilde,
    TildeEqual,
    TildeFullEqual,
    TildeTilde,
    timesbar,
    timesb,
    times: times$1,
    timesd,
    tint,
    toea,
    topbot,
    topcir,
    top,
    Topf,
    topf,
    topfork,
    tosa,
    tprime,
    trade,
    TRADE,
    triangle,
    triangledown,
    triangleleft,
    trianglelefteq,
    triangleq,
    triangleright,
    trianglerighteq,
    tridot,
    trie,
    triminus,
    TripleDot,
    triplus,
    trisb,
    tritime,
    trpezium,
    Tscr,
    tscr,
    TScy,
    tscy,
    TSHcy,
    tshcy,
    Tstrok,
    tstrok,
    twixt,
    twoheadleftarrow,
    twoheadrightarrow,
    Uacute: Uacute$1,
    uacute: uacute$1,
    uarr,
    Uarr,
    uArr,
    Uarrocir,
    Ubrcy,
    ubrcy,
    Ubreve,
    ubreve,
    Ucirc: Ucirc$1,
    ucirc: ucirc$1,
    Ucy,
    ucy,
    udarr,
    Udblac,
    udblac,
    udhar,
    ufisht,
    Ufr,
    ufr,
    Ugrave: Ugrave$1,
    ugrave: ugrave$1,
    uHar,
    uharl,
    uharr,
    uhblk,
    ulcorn,
    ulcorner,
    ulcrop,
    ultri,
    Umacr,
    umacr,
    uml: uml$1,
    UnderBar,
    UnderBrace,
    UnderBracket,
    UnderParenthesis,
    Union,
    UnionPlus,
    Uogon,
    uogon,
    Uopf,
    uopf,
    UpArrowBar,
    uparrow,
    UpArrow,
    Uparrow,
    UpArrowDownArrow,
    updownarrow,
    UpDownArrow,
    Updownarrow,
    UpEquilibrium,
    upharpoonleft,
    upharpoonright,
    uplus,
    UpperLeftArrow,
    UpperRightArrow,
    upsi,
    Upsi,
    upsih,
    Upsilon,
    upsilon,
    UpTeeArrow,
    UpTee,
    upuparrows,
    urcorn,
    urcorner,
    urcrop,
    Uring,
    uring,
    urtri,
    Uscr,
    uscr,
    utdot,
    Utilde,
    utilde,
    utri,
    utrif,
    uuarr,
    Uuml: Uuml$1,
    uuml: uuml$1,
    uwangle,
    vangrt,
    varepsilon,
    varkappa,
    varnothing,
    varphi,
    varpi,
    varpropto,
    varr,
    vArr,
    varrho,
    varsigma,
    varsubsetneq,
    varsubsetneqq,
    varsupsetneq,
    varsupsetneqq,
    vartheta,
    vartriangleleft,
    vartriangleright,
    vBar,
    Vbar,
    vBarv,
    Vcy,
    vcy,
    vdash,
    vDash,
    Vdash,
    VDash,
    Vdashl,
    veebar,
    vee,
    Vee,
    veeeq,
    vellip,
    verbar,
    Verbar,
    vert,
    Vert,
    VerticalBar,
    VerticalLine,
    VerticalSeparator,
    VerticalTilde,
    VeryThinSpace,
    Vfr,
    vfr,
    vltri,
    vnsub,
    vnsup,
    Vopf,
    vopf,
    vprop,
    vrtri,
    Vscr,
    vscr,
    vsubnE,
    vsubne,
    vsupnE,
    vsupne,
    Vvdash,
    vzigzag,
    Wcirc,
    wcirc,
    wedbar,
    wedge,
    Wedge,
    wedgeq,
    weierp,
    Wfr,
    wfr,
    Wopf,
    wopf,
    wp,
    wr,
    wreath,
    Wscr,
    wscr,
    xcap,
    xcirc,
    xcup,
    xdtri,
    Xfr,
    xfr,
    xharr,
    xhArr,
    Xi,
    xi,
    xlarr,
    xlArr,
    xmap,
    xnis,
    xodot,
    Xopf,
    xopf,
    xoplus,
    xotime,
    xrarr,
    xrArr,
    Xscr,
    xscr,
    xsqcup,
    xuplus,
    xutri,
    xvee,
    xwedge,
    Yacute: Yacute$1,
    yacute: yacute$1,
    YAcy,
    yacy,
    Ycirc,
    ycirc,
    Ycy,
    ycy,
    yen: yen$1,
    Yfr,
    yfr,
    YIcy,
    yicy,
    Yopf,
    yopf,
    Yscr,
    yscr,
    YUcy,
    yucy,
    yuml: yuml$1,
    Yuml,
    Zacute,
    zacute,
    Zcaron,
    zcaron,
    Zcy,
    zcy,
    Zdot,
    zdot,
    zeetrf,
    ZeroWidthSpace,
    Zeta,
    zeta,
    zfr,
    Zfr,
    ZHcy,
    zhcy,
    zigrarr,
    zopf,
    Zopf,
    Zscr,
    zscr,
    zwj,
    zwnj,
  },
  Aacute = 'Á',
  aacute = 'á',
  Acirc = 'Â',
  acirc = 'â',
  acute = '´',
  AElig = 'Æ',
  aelig = 'æ',
  Agrave = 'À',
  agrave = 'à',
  amp$1 = '&',
  AMP = '&',
  Aring = 'Å',
  aring = 'å',
  Atilde = 'Ã',
  atilde = 'ã',
  Auml = 'Ä',
  auml = 'ä',
  brvbar = '¦',
  Ccedil = 'Ç',
  ccedil = 'ç',
  cedil = '¸',
  cent = '¢',
  copy = '©',
  COPY = '©',
  curren = '¤',
  deg = '°',
  divide = '÷',
  Eacute = 'É',
  eacute = 'é',
  Ecirc = 'Ê',
  ecirc = 'ê',
  Egrave = 'È',
  egrave = 'è',
  ETH = 'Ð',
  eth = 'ð',
  Euml = 'Ë',
  euml = 'ë',
  frac12 = '½',
  frac14 = '¼',
  frac34 = '¾',
  gt$1 = '>',
  GT = '>',
  Iacute = 'Í',
  iacute = 'í',
  Icirc = 'Î',
  icirc = 'î',
  iexcl = '¡',
  Igrave = 'Ì',
  igrave = 'ì',
  iquest = '¿',
  Iuml = 'Ï',
  iuml = 'ï',
  laquo = '«',
  lt$1 = '<',
  LT = '<',
  macr = '¯',
  micro = 'µ',
  middot = '·',
  nbsp = ' ',
  not = '¬',
  Ntilde = 'Ñ',
  ntilde = 'ñ',
  Oacute = 'Ó',
  oacute = 'ó',
  Ocirc = 'Ô',
  ocirc = 'ô',
  Ograve = 'Ò',
  ograve = 'ò',
  ordf = 'ª',
  ordm = 'º',
  Oslash = 'Ø',
  oslash = 'ø',
  Otilde = 'Õ',
  otilde = 'õ',
  Ouml = 'Ö',
  ouml = 'ö',
  para = '¶',
  plusmn = '±',
  pound = '£',
  quot$1 = '"',
  QUOT = '"',
  raquo = '»',
  reg = '®',
  REG = '®',
  sect = '§',
  shy = '­',
  sup1 = '¹',
  sup2 = '²',
  sup3 = '³',
  szlig = 'ß',
  THORN = 'Þ',
  thorn = 'þ',
  times = '×',
  Uacute = 'Ú',
  uacute = 'ú',
  Ucirc = 'Û',
  ucirc = 'û',
  Ugrave = 'Ù',
  ugrave = 'ù',
  uml = '¨',
  Uuml = 'Ü',
  uuml = 'ü',
  Yacute = 'Ý',
  yacute = 'ý',
  yen = '¥',
  yuml = 'ÿ',
  require$$1 = {
    Aacute,
    aacute,
    Acirc,
    acirc,
    acute,
    AElig,
    aelig,
    Agrave,
    agrave,
    amp: amp$1,
    AMP,
    Aring,
    aring,
    Atilde,
    atilde,
    Auml,
    auml,
    brvbar,
    Ccedil,
    ccedil,
    cedil,
    cent,
    copy,
    COPY,
    curren,
    deg,
    divide,
    Eacute,
    eacute,
    Ecirc,
    ecirc,
    Egrave,
    egrave,
    ETH,
    eth,
    Euml,
    euml,
    frac12,
    frac14,
    frac34,
    gt: gt$1,
    GT,
    Iacute,
    iacute,
    Icirc,
    icirc,
    iexcl,
    Igrave,
    igrave,
    iquest,
    Iuml,
    iuml,
    laquo,
    lt: lt$1,
    LT,
    macr,
    micro,
    middot,
    nbsp,
    not,
    Ntilde,
    ntilde,
    Oacute,
    oacute,
    Ocirc,
    ocirc,
    Ograve,
    ograve,
    ordf,
    ordm,
    Oslash,
    oslash,
    Otilde,
    otilde,
    Ouml,
    ouml,
    para,
    plusmn,
    pound,
    quot: quot$1,
    QUOT,
    raquo,
    reg,
    REG,
    sect,
    shy,
    sup1,
    sup2,
    sup3,
    szlig,
    THORN,
    thorn,
    times,
    Uacute,
    uacute,
    Ucirc,
    ucirc,
    Ugrave,
    ugrave,
    uml,
    Uuml,
    uuml,
    Yacute,
    yacute,
    yen,
    yuml,
  },
  amp = '&',
  apos = "'",
  gt = '>',
  lt = '<',
  quot = '"',
  require$$0$1 = { amp, apos, gt, lt, quot };
var decode_codepoint = {};
const require$$0 = {
  0: 65533,
  128: 8364,
  130: 8218,
  131: 402,
  132: 8222,
  133: 8230,
  134: 8224,
  135: 8225,
  136: 710,
  137: 8240,
  138: 352,
  139: 8249,
  140: 338,
  142: 381,
  145: 8216,
  146: 8217,
  147: 8220,
  148: 8221,
  149: 8226,
  150: 8211,
  151: 8212,
  152: 732,
  153: 8482,
  154: 353,
  155: 8250,
  156: 339,
  158: 382,
  159: 376,
};
var __importDefault$2 =
  (commonjsGlobal && commonjsGlobal.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(decode_codepoint, '__esModule', { value: !0 });
var decode_json_1 = __importDefault$2(require$$0),
  fromCodePoint =
    String.fromCodePoint ||
    function (e) {
      var r = '';
      return (
        e > 65535 &&
          ((e -= 65536),
          (r += String.fromCharCode(((e >>> 10) & 1023) | 55296)),
          (e = 56320 | (e & 1023))),
        (r += String.fromCharCode(e)),
        r
      );
    };
function decodeCodePoint(e) {
  return (e >= 55296 && e <= 57343) || e > 1114111
    ? '�'
    : (e in decode_json_1.default && (e = decode_json_1.default[e]),
      fromCodePoint(e));
}
decode_codepoint.default = decodeCodePoint;
var __importDefault$1 =
  (commonjsGlobal && commonjsGlobal.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(decode, '__esModule', { value: !0 });
decode.decodeHTML = decode.decodeHTMLStrict = decode.decodeXML = void 0;
var entities_json_1$1 = __importDefault$1(require$$1$1),
  legacy_json_1 = __importDefault$1(require$$1),
  xml_json_1$1 = __importDefault$1(require$$0$1),
  decode_codepoint_1 = __importDefault$1(decode_codepoint),
  strictEntityRe = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;
decode.decodeXML = getStrictDecoder(xml_json_1$1.default);
decode.decodeHTMLStrict = getStrictDecoder(entities_json_1$1.default);
function getStrictDecoder(e) {
  var r = getReplacer(e);
  return function (t) {
    return String(t).replace(strictEntityRe, r);
  };
}
var sorter = function (e, r) {
  return e < r ? 1 : -1;
};
decode.decodeHTML = (function () {
  for (
    var e = Object.keys(legacy_json_1.default).sort(sorter),
      r = Object.keys(entities_json_1$1.default).sort(sorter),
      t = 0,
      n = 0;
    t < r.length;
    t++
  )
    e[n] === r[t] ? ((r[t] += ';?'), n++) : (r[t] += ';');
  var o = new RegExp(
      '&(?:' + r.join('|') + '|#[xX][\\da-fA-F]+;?|#\\d+;?)',
      'g',
    ),
    s = getReplacer(entities_json_1$1.default);
  function a(i) {
    return i.substr(-1) !== ';' && (i += ';'), s(i);
  }
  return function (i) {
    return String(i).replace(o, a);
  };
})();
function getReplacer(e) {
  return function (t) {
    if (t.charAt(1) === '#') {
      var n = t.charAt(2);
      return n === 'X' || n === 'x'
        ? decode_codepoint_1.default(parseInt(t.substr(3), 16))
        : decode_codepoint_1.default(parseInt(t.substr(2), 10));
    }
    return e[t.slice(1, -1)] || t;
  };
}
var encode = {},
  __importDefault =
    (commonjsGlobal && commonjsGlobal.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty(encode, '__esModule', { value: !0 });
encode.escapeUTF8 =
  encode.escape =
  encode.encodeNonAsciiHTML =
  encode.encodeHTML =
  encode.encodeXML =
    void 0;
var xml_json_1 = __importDefault(require$$0$1),
  inverseXML = getInverseObj(xml_json_1.default),
  xmlReplacer = getInverseReplacer(inverseXML);
encode.encodeXML = getASCIIEncoder(inverseXML);
var entities_json_1 = __importDefault(require$$1$1),
  inverseHTML = getInverseObj(entities_json_1.default),
  htmlReplacer = getInverseReplacer(inverseHTML);
encode.encodeHTML = getInverse(inverseHTML, htmlReplacer);
encode.encodeNonAsciiHTML = getASCIIEncoder(inverseHTML);
function getInverseObj(e) {
  return Object.keys(e)
    .sort()
    .reduce(function (r, t) {
      return (r[e[t]] = '&' + t + ';'), r;
    }, {});
}
function getInverseReplacer(e) {
  for (var r = [], t = [], n = 0, o = Object.keys(e); n < o.length; n++) {
    var s = o[n];
    s.length === 1 ? r.push('\\' + s) : t.push(s);
  }
  r.sort();
  for (var a = 0; a < r.length - 1; a++) {
    for (
      var i = a;
      i < r.length - 1 && r[i].charCodeAt(1) + 1 === r[i + 1].charCodeAt(1);

    )
      i += 1;
    var c = 1 + i - a;
    c < 3 || r.splice(a, c, r[a] + '-' + r[i]);
  }
  return t.unshift('[' + r.join('') + ']'), new RegExp(t.join('|'), 'g');
}
var reNonASCII =
    /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,
  getCodePoint =
    String.prototype.codePointAt != null
      ? function (e) {
          return e.codePointAt(0);
        }
      : function (e) {
          return (
            (e.charCodeAt(0) - 55296) * 1024 + e.charCodeAt(1) - 56320 + 65536
          );
        };
function singleCharReplacer(e) {
  return (
    '&#x' +
    (e.length > 1 ? getCodePoint(e) : e.charCodeAt(0))
      .toString(16)
      .toUpperCase() +
    ';'
  );
}
function getInverse(e, r) {
  return function (t) {
    return t
      .replace(r, function (n) {
        return e[n];
      })
      .replace(reNonASCII, singleCharReplacer);
  };
}
var reEscapeChars = new RegExp(
  xmlReplacer.source + '|' + reNonASCII.source,
  'g',
);
function escape(e) {
  return e.replace(reEscapeChars, singleCharReplacer);
}
encode.escape = escape;
function escapeUTF8(e) {
  return e.replace(xmlReplacer, singleCharReplacer);
}
encode.escapeUTF8 = escapeUTF8;
function getASCIIEncoder(e) {
  return function (r) {
    return r.replace(reEscapeChars, function (t) {
      return e[t] || singleCharReplacer(t);
    });
  };
}
(function (e) {
  Object.defineProperty(e, '__esModule', { value: !0 }),
    (e.decodeXMLStrict =
      e.decodeHTML5Strict =
      e.decodeHTML4Strict =
      e.decodeHTML5 =
      e.decodeHTML4 =
      e.decodeHTMLStrict =
      e.decodeHTML =
      e.decodeXML =
      e.encodeHTML5 =
      e.encodeHTML4 =
      e.escapeUTF8 =
      e.escape =
      e.encodeNonAsciiHTML =
      e.encodeHTML =
      e.encodeXML =
      e.encode =
      e.decodeStrict =
      e.decode =
        void 0);
  var r = decode,
    t = encode;
  function n(c, l) {
    return (!l || l <= 0 ? r.decodeXML : r.decodeHTML)(c);
  }
  e.decode = n;
  function o(c, l) {
    return (!l || l <= 0 ? r.decodeXML : r.decodeHTMLStrict)(c);
  }
  e.decodeStrict = o;
  function s(c, l) {
    return (!l || l <= 0 ? t.encodeXML : t.encodeHTML)(c);
  }
  e.encode = s;
  var a = encode;
  Object.defineProperty(e, 'encodeXML', {
    enumerable: !0,
    get: function () {
      return a.encodeXML;
    },
  }),
    Object.defineProperty(e, 'encodeHTML', {
      enumerable: !0,
      get: function () {
        return a.encodeHTML;
      },
    }),
    Object.defineProperty(e, 'encodeNonAsciiHTML', {
      enumerable: !0,
      get: function () {
        return a.encodeNonAsciiHTML;
      },
    }),
    Object.defineProperty(e, 'escape', {
      enumerable: !0,
      get: function () {
        return a.escape;
      },
    }),
    Object.defineProperty(e, 'escapeUTF8', {
      enumerable: !0,
      get: function () {
        return a.escapeUTF8;
      },
    }),
    Object.defineProperty(e, 'encodeHTML4', {
      enumerable: !0,
      get: function () {
        return a.encodeHTML;
      },
    }),
    Object.defineProperty(e, 'encodeHTML5', {
      enumerable: !0,
      get: function () {
        return a.encodeHTML;
      },
    });
  var i = decode;
  Object.defineProperty(e, 'decodeXML', {
    enumerable: !0,
    get: function () {
      return i.decodeXML;
    },
  }),
    Object.defineProperty(e, 'decodeHTML', {
      enumerable: !0,
      get: function () {
        return i.decodeHTML;
      },
    }),
    Object.defineProperty(e, 'decodeHTMLStrict', {
      enumerable: !0,
      get: function () {
        return i.decodeHTMLStrict;
      },
    }),
    Object.defineProperty(e, 'decodeHTML4', {
      enumerable: !0,
      get: function () {
        return i.decodeHTML;
      },
    }),
    Object.defineProperty(e, 'decodeHTML5', {
      enumerable: !0,
      get: function () {
        return i.decodeHTML;
      },
    }),
    Object.defineProperty(e, 'decodeHTML4Strict', {
      enumerable: !0,
      get: function () {
        return i.decodeHTMLStrict;
      },
    }),
    Object.defineProperty(e, 'decodeHTML5Strict', {
      enumerable: !0,
      get: function () {
        return i.decodeHTMLStrict;
      },
    }),
    Object.defineProperty(e, 'decodeXMLStrict', {
      enumerable: !0,
      get: function () {
        return i.decodeXML;
      },
    });
})(lib);
function _classCallCheck$7(e, r) {
  if (!(e instanceof r))
    throw new TypeError('Cannot call a class as a function');
}
function _defineProperties$7(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function _createClass$7(e, r, t) {
  return (
    r && _defineProperties$7(e.prototype, r), t && _defineProperties$7(e, t), e
  );
}
function _createForOfIteratorHelper(e) {
  if (typeof Symbol > 'u' || e[Symbol.iterator] == null) {
    if (Array.isArray(e) || (e = _unsupportedIterableToArray$5(e))) {
      var r = 0,
        t = function () {};
      return {
        s: t,
        n: function () {
          return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
        },
        e: function (c) {
          throw c;
        },
        f: t,
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var n,
    o = !0,
    s = !1,
    a;
  return {
    s: function () {
      n = e[Symbol.iterator]();
    },
    n: function () {
      var c = n.next();
      return (o = c.done), c;
    },
    e: function (c) {
      (s = !0), (a = c);
    },
    f: function () {
      try {
        !o && n.return != null && n.return();
      } finally {
        if (s) throw a;
      }
    },
  };
}
function _unsupportedIterableToArray$5(e, r) {
  if (e) {
    if (typeof e == 'string') return _arrayLikeToArray$5(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (t === 'Object' && e.constructor && (t = e.constructor.name),
      t === 'Map' || t === 'Set')
    )
      return Array.from(t);
    if (t === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return _arrayLikeToArray$5(e, r);
  }
}
function _arrayLikeToArray$5(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
  return n;
}
var entities = lib,
  defaults = {
    fg: '#FFF',
    bg: '#000',
    newline: !1,
    escapeXML: !1,
    stream: !1,
    colors: getDefaultColors(),
  };
function getDefaultColors() {
  var e = {
    0: '#000',
    1: '#A00',
    2: '#0A0',
    3: '#A50',
    4: '#00A',
    5: '#A0A',
    6: '#0AA',
    7: '#AAA',
    8: '#555',
    9: '#F55',
    10: '#5F5',
    11: '#FF5',
    12: '#55F',
    13: '#F5F',
    14: '#5FF',
    15: '#FFF',
  };
  return (
    range(0, 5).forEach(function (r) {
      range(0, 5).forEach(function (t) {
        range(0, 5).forEach(function (n) {
          return setStyleColor(r, t, n, e);
        });
      });
    }),
    range(0, 23).forEach(function (r) {
      var t = r + 232,
        n = toHexString(r * 10 + 8);
      e[t] = '#' + n + n + n;
    }),
    e
  );
}
function setStyleColor(e, r, t, n) {
  var o = 16 + e * 36 + r * 6 + t,
    s = e > 0 ? e * 40 + 55 : 0,
    a = r > 0 ? r * 40 + 55 : 0,
    i = t > 0 ? t * 40 + 55 : 0;
  n[o] = toColorHexString([s, a, i]);
}
function toHexString(e) {
  for (var r = e.toString(16); r.length < 2; ) r = '0' + r;
  return r;
}
function toColorHexString(e) {
  var r = [],
    t = _createForOfIteratorHelper(e),
    n;
  try {
    for (t.s(); !(n = t.n()).done; ) {
      var o = n.value;
      r.push(toHexString(o));
    }
  } catch (s) {
    t.e(s);
  } finally {
    t.f();
  }
  return '#' + r.join('');
}
function generateOutput(e, r, t, n) {
  var o;
  return (
    r === 'text'
      ? (o = pushText(t, n))
      : r === 'display'
      ? (o = handleDisplay(e, t, n))
      : r === 'xterm256'
      ? (o = pushForegroundColor(e, n.colors[t]))
      : r === 'rgb' && (o = handleRgb(e, t)),
    o
  );
}
function handleRgb(e, r) {
  r = r.substring(2).slice(0, -1);
  var t = +r.substr(0, 2),
    n = r.substring(5).split(';'),
    o = n
      .map(function (s) {
        return ('0' + Number(s).toString(16)).substr(-2);
      })
      .join('');
  return pushStyle(e, (t === 38 ? 'color:#' : 'background-color:#') + o);
}
function handleDisplay(e, r, t) {
  r = parseInt(r, 10);
  var n = {
      '-1': function () {
        return '<br/>';
      },
      0: function () {
        return e.length && resetStyles(e);
      },
      1: function () {
        return pushTag(e, 'b');
      },
      3: function () {
        return pushTag(e, 'i');
      },
      4: function () {
        return pushTag(e, 'u');
      },
      8: function () {
        return pushStyle(e, 'display:none');
      },
      9: function () {
        return pushTag(e, 'strike');
      },
      22: function () {
        return pushStyle(
          e,
          'font-weight:normal;text-decoration:none;font-style:normal',
        );
      },
      23: function () {
        return closeTag(e, 'i');
      },
      24: function () {
        return closeTag(e, 'u');
      },
      39: function () {
        return pushForegroundColor(e, t.fg);
      },
      49: function () {
        return pushBackgroundColor(e, t.bg);
      },
      53: function () {
        return pushStyle(e, 'text-decoration:overline');
      },
    },
    o;
  return (
    n[r]
      ? (o = n[r]())
      : 4 < r && r < 7
      ? (o = pushTag(e, 'blink'))
      : 29 < r && r < 38
      ? (o = pushForegroundColor(e, t.colors[r - 30]))
      : 39 < r && r < 48
      ? (o = pushBackgroundColor(e, t.colors[r - 40]))
      : 89 < r && r < 98
      ? (o = pushForegroundColor(e, t.colors[8 + (r - 90)]))
      : 99 < r &&
        r < 108 &&
        (o = pushBackgroundColor(e, t.colors[8 + (r - 100)])),
    o
  );
}
function resetStyles(e) {
  var r = e.slice(0);
  return (
    (e.length = 0),
    r
      .reverse()
      .map(function (t) {
        return '</' + t + '>';
      })
      .join('')
  );
}
function range(e, r) {
  for (var t = [], n = e; n <= r; n++) t.push(n);
  return t;
}
function notCategory(e) {
  return function (r) {
    return (e === null || r.category !== e) && e !== 'all';
  };
}
function categoryForCode(e) {
  e = parseInt(e, 10);
  var r = null;
  return (
    e === 0
      ? (r = 'all')
      : e === 1
      ? (r = 'bold')
      : 2 < e && e < 5
      ? (r = 'underline')
      : 4 < e && e < 7
      ? (r = 'blink')
      : e === 8
      ? (r = 'hide')
      : e === 9
      ? (r = 'strike')
      : (29 < e && e < 38) || e === 39 || (89 < e && e < 98)
      ? (r = 'foreground-color')
      : ((39 < e && e < 48) || e === 49 || (99 < e && e < 108)) &&
        (r = 'background-color'),
    r
  );
}
function pushText(e, r) {
  return r.escapeXML ? entities.encodeXML(e) : e;
}
function pushTag(e, r, t) {
  return (
    t || (t = ''),
    e.push(r),
    '<'.concat(r).concat(t ? ' style="'.concat(t, '"') : '', '>')
  );
}
function pushStyle(e, r) {
  return pushTag(e, 'span', r);
}
function pushForegroundColor(e, r) {
  return pushTag(e, 'span', 'color:' + r);
}
function pushBackgroundColor(e, r) {
  return pushTag(e, 'span', 'background-color:' + r);
}
function closeTag(e, r) {
  var t;
  if ((e.slice(-1)[0] === r && (t = e.pop()), t)) return '</' + r + '>';
}
function tokenize(e, r, t) {
  var n = !1,
    o = 3;
  function s() {
    return '';
  }
  function a(w, v) {
    return t('xterm256', v), '';
  }
  function i(w) {
    return r.newline ? t('display', -1) : t('text', w), '';
  }
  function c(w, v) {
    (n = !0),
      v.trim().length === 0 && (v = '0'),
      (v = v.trimRight(';').split(';'));
    var A = _createForOfIteratorHelper(v),
      P;
    try {
      for (A.s(); !(P = A.n()).done; ) {
        var _ = P.value;
        t('display', _);
      }
    } catch (O) {
      A.e(O);
    } finally {
      A.f();
    }
    return '';
  }
  function l(w) {
    return t('text', w), '';
  }
  function u(w) {
    return t('rgb', w), '';
  }
  var p = [
    { pattern: /^\x08+/, sub: s },
    { pattern: /^\x1b\[[012]?K/, sub: s },
    { pattern: /^\x1b\[\(B/, sub: s },
    { pattern: /^\x1b\[[34]8;2;\d+;\d+;\d+m/, sub: u },
    { pattern: /^\x1b\[38;5;(\d+)m/, sub: a },
    { pattern: /^\n/, sub: i },
    { pattern: /^\r+\n/, sub: i },
    { pattern: /^\x1b\[((?:\d{1,3};?)+|)m/, sub: c },
    { pattern: /^\x1b\[\d?J/, sub: s },
    { pattern: /^\x1b\[\d{0,3};\d{0,3}f/, sub: s },
    { pattern: /^\x1b\[?[\d;]{0,3}/, sub: s },
    { pattern: /^(([^\x1b\x08\r\n])+)/, sub: l },
  ];
  function d(w, v) {
    (v > o && n) || ((n = !1), (e = e.replace(w.pattern, w.sub)));
  }
  var y = [],
    h = e,
    g = h.length;
  e: for (; g > 0; ) {
    for (var m = 0, S = 0, b = p.length; S < b; m = ++S) {
      var E = p[m];
      if ((d(E, m), e.length !== g)) {
        g = e.length;
        continue e;
      }
    }
    if (e.length === g) break;
    y.push(0), (g = e.length);
  }
  return y;
}
function updateStickyStack(e, r, t) {
  return (
    r !== 'text' &&
      ((e = e.filter(notCategory(categoryForCode(t)))),
      e.push({ token: r, data: t, category: categoryForCode(t) })),
    e
  );
}
var Filter = (function () {
    function e(r) {
      _classCallCheck$7(this, e),
        (r = r || {}),
        r.colors && (r.colors = Object.assign({}, defaults.colors, r.colors)),
        (this.options = Object.assign({}, defaults, r)),
        (this.stack = []),
        (this.stickyStack = []);
    }
    return (
      _createClass$7(e, [
        {
          key: 'toHtml',
          value: function (t) {
            var n = this;
            t = typeof t == 'string' ? [t] : t;
            var o = this.stack,
              s = this.options,
              a = [];
            return (
              this.stickyStack.forEach(function (i) {
                var c = generateOutput(o, i.token, i.data, s);
                c && a.push(c);
              }),
              tokenize(t.join(''), s, function (i, c) {
                var l = generateOutput(o, i, c, s);
                l && a.push(l),
                  s.stream &&
                    (n.stickyStack = updateStickyStack(n.stickyStack, i, c));
              }),
              o.length && a.push(resetStyles(o)),
              a.join('')
            );
          },
        },
      ]),
      e
    );
  })(),
  ansi_to_html = Filter,
  _templateObject$3;
function _slicedToArray$4(e, r) {
  return (
    _arrayWithHoles$4(e) ||
    _iterableToArrayLimit$4(e, r) ||
    _unsupportedIterableToArray$4(e, r) ||
    _nonIterableRest$4()
  );
}
function _nonIterableRest$4() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _unsupportedIterableToArray$4(e, r) {
  if (e) {
    if (typeof e == 'string') return _arrayLikeToArray$4(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (t === 'Object' && e.constructor && (t = e.constructor.name),
      t === 'Map' || t === 'Set')
    )
      return Array.from(e);
    if (t === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return _arrayLikeToArray$4(e, r);
  }
}
function _arrayLikeToArray$4(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
  return n;
}
function _iterableToArrayLimit$4(e, r) {
  var t =
    e == null
      ? null
      : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (t != null) {
    var n = [],
      o = !0,
      s = !1,
      a,
      i;
    try {
      for (
        t = t.call(e);
        !(o = (a = t.next()).done) && (n.push(a.value), !(r && n.length === r));
        o = !0
      );
    } catch (c) {
      (s = !0), (i = c);
    } finally {
      try {
        !o && t.return != null && t.return();
      } finally {
        if (s) throw i;
      }
    }
    return n;
  }
}
function _arrayWithHoles$4(e) {
  if (Array.isArray(e)) return e;
}
function _taggedTemplateLiteral$3(e, r) {
  return (
    r || (r = e.slice(0)),
    Object.freeze(
      Object.defineProperties(e, { raw: { value: Object.freeze(r) } }),
    )
  );
}
function _classCallCheck$6(e, r) {
  if (!(e instanceof r))
    throw new TypeError('Cannot call a class as a function');
}
function _defineProperties$6(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function _createClass$6(e, r, t) {
  return (
    r && _defineProperties$6(e.prototype, r),
    t && _defineProperties$6(e, t),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
  );
}
var document$2 = window_1.document,
  PREPARING_DELAY = 100,
  layoutClassMap = {
    centered: 'sb-main-centered',
    fullscreen: 'sb-main-fullscreen',
    padded: 'sb-main-padded',
  },
  Mode;
(function (e) {
  (e.MAIN = 'MAIN'),
    (e.NOPREVIEW = 'NOPREVIEW'),
    (e.PREPARING_STORY = 'PREPARING_STORY'),
    (e.PREPARING_DOCS = 'PREPARING_DOCS'),
    (e.ERROR = 'ERROR');
})(Mode || (Mode = {}));
var classes = {
    PREPARING_STORY: 'sb-show-preparing-story',
    PREPARING_DOCS: 'sb-show-preparing-docs',
    MAIN: 'sb-show-main',
    NOPREVIEW: 'sb-show-nopreview',
    ERROR: 'sb-show-errordisplay',
  },
  ansiConverter = new ansi_to_html({ escapeXML: !0 }),
  WebView = (function () {
    function e() {
      _classCallCheck$6(this, e),
        (this.currentLayoutClass = void 0),
        (this.testing = !1),
        (this.preparingTimeout = null);
      var r = lib$1.parse(document$2.location.search, {
          ignoreQueryPrefix: !0,
        }),
        t = r.__SPECIAL_TEST_PARAMETER__;
      switch (t) {
        case 'preparing-story': {
          this.showPreparingStory(), (this.testing = !0);
          break;
        }
        case 'preparing-docs': {
          this.showPreparingDocs(), (this.testing = !0);
          break;
        }
      }
    }
    return (
      _createClass$6(e, [
        {
          key: 'prepareForStory',
          value: function (t) {
            return (
              this.showStory(),
              this.applyLayout(t.parameters.layout),
              (document$2.documentElement.scrollTop = 0),
              (document$2.documentElement.scrollLeft = 0),
              this.storyRoot()
            );
          },
        },
        {
          key: 'storyRoot',
          value: function () {
            return document$2.getElementById('root');
          },
        },
        {
          key: 'prepareForDocs',
          value: function () {
            return (
              this.showMain(),
              this.showDocs(),
              this.applyLayout('fullscreen'),
              this.docsRoot()
            );
          },
        },
        {
          key: 'docsRoot',
          value: function () {
            return document$2.getElementById('docs-root');
          },
        },
        {
          key: 'applyLayout',
          value: function () {
            var t =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : 'padded';
            if (t === 'none') {
              document$2.body.classList.remove(this.currentLayoutClass),
                (this.currentLayoutClass = null);
              return;
            }
            this.checkIfLayoutExists(t);
            var n = layoutClassMap[t];
            document$2.body.classList.remove(this.currentLayoutClass),
              document$2.body.classList.add(n),
              (this.currentLayoutClass = n);
          },
        },
        {
          key: 'checkIfLayoutExists',
          value: function (t) {
            layoutClassMap[t] ||
              logger.warn(
                dedent(
                  _templateObject$3 ||
                    (_templateObject$3 = _taggedTemplateLiteral$3([
                      'The desired layout: ',
                      ` is not a valid option.
         The possible options are: `,
                      ', none.',
                    ])),
                  t,
                  Object.keys(layoutClassMap).join(', '),
                ),
              );
          },
        },
        {
          key: 'showMode',
          value: function (t) {
            clearTimeout(this.preparingTimeout),
              Object.keys(Mode).forEach(function (n) {
                n === t
                  ? document$2.body.classList.add(classes[n])
                  : document$2.body.classList.remove(classes[n]);
              });
          },
        },
        {
          key: 'showErrorDisplay',
          value: function (t) {
            var n = t.message,
              o = n === void 0 ? '' : n,
              s = t.stack,
              a = s === void 0 ? '' : s,
              i = o,
              c = a,
              l = o.split(`
`);
            if (l.length > 1) {
              var u = _slicedToArray$4(l, 1);
              (i = u[0]),
                (c = l.slice(1).join(`
`));
            }
            (document$2.getElementById('error-message').innerHTML =
              ansiConverter.toHtml(i)),
              (document$2.getElementById('error-stack').innerHTML =
                ansiConverter.toHtml(c)),
              this.showMode(Mode.ERROR);
          },
        },
        {
          key: 'showNoPreview',
          value: function () {
            var t, n;
            this.testing ||
              (this.showMode(Mode.NOPREVIEW),
              (t = this.storyRoot()) === null ||
                t === void 0 ||
                t.setAttribute('hidden', 'true'),
              (n = this.docsRoot()) === null ||
                n === void 0 ||
                n.setAttribute('hidden', 'true'));
          },
        },
        {
          key: 'showPreparingStory',
          value: function () {
            var t = this,
              n =
                arguments.length > 0 && arguments[0] !== void 0
                  ? arguments[0]
                  : {},
              o = n.immediate,
              s = o === void 0 ? !1 : o;
            clearTimeout(this.preparingTimeout),
              s
                ? this.showMode(Mode.PREPARING_STORY)
                : (this.preparingTimeout = setTimeout(function () {
                    return t.showMode(Mode.PREPARING_STORY);
                  }, PREPARING_DELAY));
          },
        },
        {
          key: 'showPreparingDocs',
          value: function () {
            var t = this;
            clearTimeout(this.preparingTimeout),
              (this.preparingTimeout = setTimeout(function () {
                return t.showMode(Mode.PREPARING_DOCS);
              }, PREPARING_DELAY));
          },
        },
        {
          key: 'showMain',
          value: function () {
            this.showMode(Mode.MAIN);
          },
        },
        {
          key: 'showDocs',
          value: function () {
            this.storyRoot().setAttribute('hidden', 'true'),
              this.docsRoot().removeAttribute('hidden');
          },
        },
        {
          key: 'showStory',
          value: function () {
            this.docsRoot().setAttribute('hidden', 'true'),
              this.storyRoot().removeAttribute('hidden');
          },
        },
        {
          key: 'showStoryDuringRender',
          value: function () {
            document$2.body.classList.add(classes.MAIN);
          },
        },
      ]),
      e
    );
  })();
function asyncGeneratorStep$1(e, r, t, n, o, s, a) {
  try {
    var i = e[s](a),
      c = i.value;
  } catch (l) {
    t(l);
    return;
  }
  i.done ? r(c) : Promise.resolve(c).then(n, o);
}
function _asyncToGenerator$1(e) {
  return function () {
    var r = this,
      t = arguments;
    return new Promise(function (n, o) {
      var s = e.apply(r, t);
      function a(c) {
        asyncGeneratorStep$1(s, n, o, a, i, 'next', c);
      }
      function i(c) {
        asyncGeneratorStep$1(s, n, o, a, i, 'throw', c);
      }
      a(void 0);
    });
  };
}
function _classCallCheck$5(e, r) {
  if (!(e instanceof r))
    throw new TypeError('Cannot call a class as a function');
}
function _defineProperties$5(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function _createClass$5(e, r, t) {
  return (
    r && _defineProperties$5(e.prototype, r),
    t && _defineProperties$5(e, t),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
  );
}
var DocsRender = (function () {
  function e(r, t, n, o) {
    _classCallCheck$5(this, e),
      (this.channel = r),
      (this.store = t),
      (this.id = n),
      (this.story = o),
      (this.canvasElement = void 0),
      (this.context = void 0),
      (this.disableKeyListeners = !1);
  }
  return (
    _createClass$5(
      e,
      [
        {
          key: 'isPreparing',
          value: function () {
            return !1;
          },
        },
        {
          key: 'renderToElement',
          value: (function () {
            var r = _asyncToGenerator$1(
              regeneratorRuntime.mark(function n(o, s) {
                var a = this,
                  i,
                  c,
                  l,
                  u,
                  p,
                  d;
                return regeneratorRuntime.wrap(
                  function (h) {
                    for (;;)
                      switch ((h.prev = h.next)) {
                        case 0:
                          return (
                            (this.canvasElement = o),
                            (c = this.story),
                            (l = c.id),
                            (u = c.title),
                            (p = c.name),
                            (h.next = 4),
                            this.store.loadCSFFileByStoryId(this.id)
                          );
                        case 4:
                          return (
                            (d = h.sent),
                            (this.context = Object.assign(
                              {
                                id: l,
                                title: u,
                                name: p,
                                storyById: function (m) {
                                  return a.store.storyFromCSFFile({
                                    storyId: m,
                                    csfFile: d,
                                  });
                                },
                                componentStories: function () {
                                  return a.store.componentStoriesFromCSFFile({
                                    csfFile: d,
                                  });
                                },
                                loadStory: function (m) {
                                  return a.store.loadStory({ storyId: m });
                                },
                                renderStoryToElement: s,
                                getStoryContext: function (m) {
                                  return Object.assign(
                                    {},
                                    a.store.getStoryContext(m),
                                    { viewMode: 'docs' },
                                  );
                                },
                              },
                              !(
                                (i = window_1.FEATURES) !== null &&
                                i !== void 0 &&
                                i.breakingChangesV7
                              ) && this.store.getStoryContext(this.story),
                            )),
                            h.abrupt('return', this.render())
                          );
                        case 7:
                        case 'end':
                          return h.stop();
                      }
                  },
                  n,
                  this,
                );
              }),
            );
            function t(n, o) {
              return r.apply(this, arguments);
            }
            return t;
          })(),
        },
        {
          key: 'render',
          value: (function () {
            var r = _asyncToGenerator$1(
              regeneratorRuntime.mark(function n() {
                var o = this,
                  s;
                return regeneratorRuntime.wrap(
                  function (i) {
                    for (;;)
                      switch ((i.prev = i.next)) {
                        case 0:
                          if (
                            !(
                              !this.story ||
                              !this.context ||
                              !this.canvasElement
                            )
                          ) {
                            i.next = 2;
                            break;
                          }
                          throw new Error('DocsRender not ready to render');
                        case 2:
                          return (
                            (i.next = 4),
                            __vitePreload(
                              () => import('./renderDocs-d85e313e.js'),
                              [
                                'assets/renderDocs-d85e313e.js',
                                'assets/index-3121cc12.js',
                                'assets/index-73814c06.js',
                                'assets/index-e0023ec7.js',
                                'assets/index-fc3cd605.js',
                              ],
                            )
                          );
                        case 4:
                          (s = i.sent),
                            s.renderDocs(
                              this.story,
                              this.context,
                              this.canvasElement,
                              function () {
                                return o.channel.emit(DOCS_RENDERED, o.id);
                              },
                            );
                        case 6:
                        case 'end':
                          return i.stop();
                      }
                  },
                  n,
                  this,
                );
              }),
            );
            function t() {
              return r.apply(this, arguments);
            }
            return t;
          })(),
        },
        {
          key: 'rerender',
          value: (function () {
            var r = _asyncToGenerator$1(
              regeneratorRuntime.mark(function n(o) {
                var s;
                return regeneratorRuntime.wrap(
                  function (i) {
                    for (;;)
                      switch ((i.prev = i.next)) {
                        case 0:
                          if (
                            !(
                              !(
                                (s = window_1.FEATURES) !== null &&
                                s !== void 0 &&
                                s.modernInlineRender
                              ) || o
                            )
                          ) {
                            i.next = 3;
                            break;
                          }
                          return (i.next = 3), this.render();
                        case 3:
                        case 'end':
                          return i.stop();
                      }
                  },
                  n,
                  this,
                );
              }),
            );
            function t(n) {
              return r.apply(this, arguments);
            }
            return t;
          })(),
        },
        {
          key: 'teardown',
          value: (function () {
            var r = _asyncToGenerator$1(
              regeneratorRuntime.mark(function n() {
                var o,
                  s,
                  a,
                  i = arguments;
                return regeneratorRuntime.wrap(
                  function (l) {
                    for (;;)
                      switch ((l.prev = l.next)) {
                        case 0:
                          if (
                            ((o = i.length > 0 && i[0] !== void 0 ? i[0] : {}),
                            (s = o.viewModeChanged),
                            !(!s || !this.canvasElement))
                          ) {
                            l.next = 3;
                            break;
                          }
                          return l.abrupt('return');
                        case 3:
                          return (
                            (l.next = 5),
                            __vitePreload(
                              () => import('./renderDocs-d85e313e.js'),
                              [
                                'assets/renderDocs-d85e313e.js',
                                'assets/index-3121cc12.js',
                                'assets/index-73814c06.js',
                                'assets/index-e0023ec7.js',
                                'assets/index-fc3cd605.js',
                              ],
                            )
                          );
                        case 5:
                          (a = l.sent), a.unmountDocs(this.canvasElement);
                        case 7:
                        case 'end':
                          return l.stop();
                      }
                  },
                  n,
                  this,
                );
              }),
            );
            function t() {
              return r.apply(this, arguments);
            }
            return t;
          })(),
        },
      ],
      [
        {
          key: 'fromStoryRender',
          value: function (t) {
            var n = t.channel,
              o = t.store,
              s = t.id,
              a = t.story;
            return new e(n, o, s, a);
          },
        },
      ],
    ),
    e
  );
})();
DocsRender.displayName = 'DocsRender';
function _typeof$1(e) {
  return (
    (_typeof$1 =
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
    _typeof$1(e)
  );
}
var _templateObject$2, _templateObject2, _templateObject3$1, _templateObject4$1;
function asyncGeneratorStep(e, r, t, n, o, s, a) {
  try {
    var i = e[s](a),
      c = i.value;
  } catch (l) {
    t(l);
    return;
  }
  i.done ? r(c) : Promise.resolve(c).then(n, o);
}
function _asyncToGenerator(e) {
  return function () {
    var r = this,
      t = arguments;
    return new Promise(function (n, o) {
      var s = e.apply(r, t);
      function a(c) {
        asyncGeneratorStep(s, n, o, a, i, 'next', c);
      }
      function i(c) {
        asyncGeneratorStep(s, n, o, a, i, 'throw', c);
      }
      a(void 0);
    });
  };
}
function _taggedTemplateLiteral$2(e, r) {
  return (
    r || (r = e.slice(0)),
    Object.freeze(
      Object.defineProperties(e, { raw: { value: Object.freeze(r) } }),
    )
  );
}
function _classCallCheck$4(e, r) {
  if (!(e instanceof r))
    throw new TypeError('Cannot call a class as a function');
}
function _defineProperties$4(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function _createClass$4(e, r, t) {
  return (
    r && _defineProperties$4(e.prototype, r),
    t && _defineProperties$4(e, t),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
  );
}
function _get() {
  return (
    typeof Reflect < 'u' && Reflect.get
      ? (_get = Reflect.get)
      : (_get = function (r, t, n) {
          var o = _superPropBase(r, t);
          if (o) {
            var s = Object.getOwnPropertyDescriptor(o, t);
            return s.get ? s.get.call(arguments.length < 3 ? r : n) : s.value;
          }
        }),
    _get.apply(this, arguments)
  );
}
function _superPropBase(e, r) {
  for (
    ;
    !Object.prototype.hasOwnProperty.call(e, r) &&
    ((e = _getPrototypeOf(e)), e !== null);

  );
  return e;
}
function _inherits(e, r) {
  if (typeof r != 'function' && r !== null)
    throw new TypeError('Super expression must either be null or a function');
  (e.prototype = Object.create(r && r.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    r && _setPrototypeOf(e, r);
}
function _setPrototypeOf(e, r) {
  return (
    (_setPrototypeOf =
      Object.setPrototypeOf ||
      function (n, o) {
        return (n.__proto__ = o), n;
      }),
    _setPrototypeOf(e, r)
  );
}
function _createSuper(e) {
  var r = _isNativeReflectConstruct();
  return function () {
    var n = _getPrototypeOf(e),
      o;
    if (r) {
      var s = _getPrototypeOf(this).constructor;
      o = Reflect.construct(n, arguments, s);
    } else o = n.apply(this, arguments);
    return _possibleConstructorReturn(this, o);
  };
}
function _possibleConstructorReturn(e, r) {
  if (r && (_typeof$1(r) === 'object' || typeof r == 'function')) return r;
  if (r !== void 0)
    throw new TypeError(
      'Derived constructors may only return object or undefined',
    );
  return _assertThisInitialized(e);
}
function _assertThisInitialized(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function _isNativeReflectConstruct() {
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
function _getPrototypeOf(e) {
  return (
    (_getPrototypeOf = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    _getPrototypeOf(e)
  );
}
var globalWindow$1 = window_1.window;
function focusInInput(e) {
  var r = e.target;
  return (
    /input|textarea/i.test(r.tagName) ||
    r.getAttribute('contenteditable') !== null
  );
}
var PreviewWeb = (function (e) {
    _inherits(t, e);
    var r = _createSuper(t);
    function t() {
      var n,
        o =
          arguments.length > 0 && arguments[0] !== void 0
            ? arguments[0]
            : new UrlStore(),
        s =
          arguments.length > 1 && arguments[1] !== void 0
            ? arguments[1]
            : new WebView();
      return (
        _classCallCheck$4(this, t),
        (n = r.call(this)),
        (n.urlStore = void 0),
        (n.view = void 0),
        (n.previewEntryError = void 0),
        (n.currentSelection = void 0),
        (n.currentRender = void 0),
        (n.view = s),
        (n.urlStore = o),
        (n.storyStore.getSelection = browser(function () {
          return n.urlStore.selection;
        }, dedent(
          _templateObject$2 ||
            (_templateObject$2 = _taggedTemplateLiteral$2(
              [
                '\n        `__STORYBOOK_STORY_STORE__.getSelection()` is deprecated and will be removed in 7.0.\n  \n        To get the current selection, use the `useStoryContext()` hook from `@storybook/addons`.\n      ',
              ],
              [
                '\n        \\`__STORYBOOK_STORY_STORE__.getSelection()\\` is deprecated and will be removed in 7.0.\n  \n        To get the current selection, use the \\`useStoryContext()\\` hook from \\`@storybook/addons\\`.\n      ',
              ],
            )),
        ))),
        n
      );
    }
    return (
      _createClass$4(t, [
        {
          key: 'setupListeners',
          value: function () {
            _get(_getPrototypeOf(t.prototype), 'setupListeners', this).call(
              this,
            ),
              (globalWindow$1.onkeydown = this.onKeydown.bind(this)),
              this.channel.on(
                SET_CURRENT_STORY,
                this.onSetCurrentStory.bind(this),
              ),
              this.channel.on(
                UPDATE_QUERY_PARAMS,
                this.onUpdateQueryParams.bind(this),
              ),
              this.channel.on(
                PRELOAD_STORIES,
                this.onPreloadStories.bind(this),
              );
          },
        },
        {
          key: 'initializeWithProjectAnnotations',
          value: function (o) {
            var s = this;
            return _get(
              _getPrototypeOf(t.prototype),
              'initializeWithProjectAnnotations',
              this,
            )
              .call(this, o)
              .then(function () {
                return s.setInitialGlobals();
              });
          },
        },
        {
          key: 'setInitialGlobals',
          value: (function () {
            var n = _asyncToGenerator(
              regeneratorRuntime.mark(function s() {
                var a, i;
                return regeneratorRuntime.wrap(
                  function (l) {
                    for (;;)
                      switch ((l.prev = l.next)) {
                        case 0:
                          (a = this.urlStore.selectionSpecifier || {}),
                            (i = a.globals),
                            i && this.storyStore.globals.updateFromPersisted(i),
                            this.emitGlobals();
                        case 3:
                        case 'end':
                          return l.stop();
                      }
                  },
                  s,
                  this,
                );
              }),
            );
            function o() {
              return n.apply(this, arguments);
            }
            return o;
          })(),
        },
        {
          key: 'initializeWithStoryIndex',
          value: function (o) {
            var s = this;
            return _get(
              _getPrototypeOf(t.prototype),
              'initializeWithStoryIndex',
              this,
            )
              .call(this, o)
              .then(function () {
                var a;
                return (
                  ((a = window_1.FEATURES) !== null &&
                    a !== void 0 &&
                    a.storyStoreV7) ||
                    s.channel.emit(
                      SET_STORIES,
                      s.storyStore.getSetStoriesPayload(),
                    ),
                  s.selectSpecifiedStory()
                );
              });
          },
        },
        {
          key: 'selectSpecifiedStory',
          value: (function () {
            var n = _asyncToGenerator(
              regeneratorRuntime.mark(function s() {
                var a, i, c, l, u;
                return regeneratorRuntime.wrap(
                  function (d) {
                    for (;;)
                      switch ((d.prev = d.next)) {
                        case 0:
                          if (this.urlStore.selectionSpecifier) {
                            d.next = 3;
                            break;
                          }
                          return this.renderMissingStory(), d.abrupt('return');
                        case 3:
                          if (
                            ((a = this.urlStore.selectionSpecifier),
                            (i = a.storySpecifier),
                            (c = a.viewMode),
                            (l = a.args),
                            (u =
                              this.storyStore.storyIndex.storyIdFromSpecifier(
                                i,
                              )),
                            u)
                          ) {
                            d.next = 8;
                            break;
                          }
                          return (
                            i === '*'
                              ? this.renderStoryLoadingException(
                                  i,
                                  new Error(
                                    dedent(
                                      _templateObject2 ||
                                        (_templateObject2 =
                                          _taggedTemplateLiteral$2([
                                            `
            Couldn't find any stories in your Storybook.
            - Please check your stories field of your main.js config.
            - Also check the browser console and terminal for error messages.
          `,
                                          ])),
                                    ),
                                  ),
                                )
                              : this.renderStoryLoadingException(
                                  i,
                                  new Error(
                                    dedent(
                                      _templateObject3$1 ||
                                        (_templateObject3$1 =
                                          _taggedTemplateLiteral$2([
                                            `
            Couldn't find story matching '`,
                                            `'.
            - Are you sure a story with that id exists?
            - Please check your stories field of your main.js config.
            - Also check the browser console and terminal for error messages.
          `,
                                          ])),
                                      i,
                                    ),
                                  ),
                                ),
                            d.abrupt('return')
                          );
                        case 8:
                          return (
                            this.urlStore.setSelection({
                              storyId: u,
                              viewMode: c,
                            }),
                            this.channel.emit(
                              STORY_SPECIFIED,
                              this.urlStore.selection,
                            ),
                            this.channel.emit(
                              CURRENT_STORY_WAS_SET,
                              this.urlStore.selection,
                            ),
                            (d.next = 13),
                            this.renderSelection({ persistedArgs: l })
                          );
                        case 13:
                        case 'end':
                          return d.stop();
                      }
                  },
                  s,
                  this,
                );
              }),
            );
            function o() {
              return n.apply(this, arguments);
            }
            return o;
          })(),
        },
        {
          key: 'onGetProjectAnnotationsChanged',
          value: (function () {
            var n = _asyncToGenerator(
              regeneratorRuntime.mark(function s(a) {
                var i;
                return regeneratorRuntime.wrap(
                  function (l) {
                    for (;;)
                      switch ((l.prev = l.next)) {
                        case 0:
                          return (
                            (i = a.getProjectAnnotations),
                            (l.next = 3),
                            _get(
                              _getPrototypeOf(t.prototype),
                              'onGetProjectAnnotationsChanged',
                              this,
                            ).call(this, { getProjectAnnotations: i })
                          );
                        case 3:
                          this.renderSelection();
                        case 4:
                        case 'end':
                          return l.stop();
                      }
                  },
                  s,
                  this,
                );
              }),
            );
            function o(s) {
              return n.apply(this, arguments);
            }
            return o;
          })(),
        },
        {
          key: 'onStoriesChanged',
          value: (function () {
            var n = _asyncToGenerator(
              regeneratorRuntime.mark(function s(a) {
                var i, c, l;
                return regeneratorRuntime.wrap(
                  function (p) {
                    for (;;)
                      switch ((p.prev = p.next)) {
                        case 0:
                          if (
                            ((c = a.importFn),
                            (l = a.storyIndex),
                            _get(
                              _getPrototypeOf(t.prototype),
                              'onStoriesChanged',
                              this,
                            ).call(this, { importFn: c, storyIndex: l }),
                            (i = window_1.FEATURES) !== null &&
                              i !== void 0 &&
                              i.storyStoreV7)
                          ) {
                            p.next = 9;
                            break;
                          }
                          return (
                            (p.t0 = this.channel),
                            (p.t1 = SET_STORIES),
                            (p.next = 7),
                            this.storyStore.getSetStoriesPayload()
                          );
                        case 7:
                          (p.t2 = p.sent), p.t0.emit.call(p.t0, p.t1, p.t2);
                        case 9:
                          if (!this.urlStore.selection) {
                            p.next = 14;
                            break;
                          }
                          return (p.next = 12), this.renderSelection();
                        case 12:
                          p.next = 16;
                          break;
                        case 14:
                          return (p.next = 16), this.selectSpecifiedStory();
                        case 16:
                        case 'end':
                          return p.stop();
                      }
                  },
                  s,
                  this,
                );
              }),
            );
            function o(s) {
              return n.apply(this, arguments);
            }
            return o;
          })(),
        },
        {
          key: 'onKeydown',
          value: function (o) {
            var s;
            if (
              !(
                (s = this.currentRender) !== null &&
                s !== void 0 &&
                s.disableKeyListeners
              ) &&
              !focusInInput(o)
            ) {
              var a = o.altKey,
                i = o.ctrlKey,
                c = o.metaKey,
                l = o.shiftKey,
                u = o.key,
                p = o.code,
                d = o.keyCode;
              this.channel.emit(PREVIEW_KEYDOWN, {
                event: {
                  altKey: a,
                  ctrlKey: i,
                  metaKey: c,
                  shiftKey: l,
                  key: u,
                  code: p,
                  keyCode: d,
                },
              });
            }
          },
        },
        {
          key: 'onSetCurrentStory',
          value: function (o) {
            this.urlStore.setSelection(Object.assign({ viewMode: 'story' }, o)),
              this.channel.emit(CURRENT_STORY_WAS_SET, this.urlStore.selection),
              this.renderSelection();
          },
        },
        {
          key: 'onUpdateQueryParams',
          value: function (o) {
            this.urlStore.setQueryParams(o);
          },
        },
        {
          key: 'onUpdateGlobals',
          value: (function () {
            var n = _asyncToGenerator(
              regeneratorRuntime.mark(function s(a) {
                var i;
                return regeneratorRuntime.wrap(
                  function (l) {
                    for (;;)
                      switch ((l.prev = l.next)) {
                        case 0:
                          if (
                            ((i = a.globals),
                            _get(
                              _getPrototypeOf(t.prototype),
                              'onUpdateGlobals',
                              this,
                            ).call(this, { globals: i }),
                            !(this.currentRender instanceof DocsRender))
                          ) {
                            l.next = 5;
                            break;
                          }
                          return (l.next = 5), this.currentRender.rerender(!0);
                        case 5:
                        case 'end':
                          return l.stop();
                      }
                  },
                  s,
                  this,
                );
              }),
            );
            function o(s) {
              return n.apply(this, arguments);
            }
            return o;
          })(),
        },
        {
          key: 'onUpdateArgs',
          value: (function () {
            var n = _asyncToGenerator(
              regeneratorRuntime.mark(function s(a) {
                var i, c;
                return regeneratorRuntime.wrap(
                  function (u) {
                    for (;;)
                      switch ((u.prev = u.next)) {
                        case 0:
                          if (
                            ((i = a.storyId),
                            (c = a.updatedArgs),
                            _get(
                              _getPrototypeOf(t.prototype),
                              'onUpdateArgs',
                              this,
                            ).call(this, { storyId: i, updatedArgs: c }),
                            !(this.currentRender instanceof DocsRender))
                          ) {
                            u.next = 5;
                            break;
                          }
                          return (u.next = 5), this.currentRender.rerender(!1);
                        case 5:
                        case 'end':
                          return u.stop();
                      }
                  },
                  s,
                  this,
                );
              }),
            );
            function o(s) {
              return n.apply(this, arguments);
            }
            return o;
          })(),
        },
        {
          key: 'onPreloadStories',
          value: (function () {
            var n = _asyncToGenerator(
              regeneratorRuntime.mark(function s(a) {
                var i = this;
                return regeneratorRuntime.wrap(function (l) {
                  for (;;)
                    switch ((l.prev = l.next)) {
                      case 0:
                        return (
                          (l.next = 2),
                          Promise.all(
                            a.map(function (u) {
                              return i.storyStore.loadStory({ storyId: u });
                            }),
                          )
                        );
                      case 2:
                      case 'end':
                        return l.stop();
                    }
                }, s);
              }),
            );
            function o(s) {
              return n.apply(this, arguments);
            }
            return o;
          })(),
        },
        {
          key: 'renderSelection',
          value: (function () {
            var n = _asyncToGenerator(
              regeneratorRuntime.mark(function s() {
                var a,
                  i,
                  c,
                  l = this,
                  u,
                  p,
                  d,
                  y,
                  h,
                  g,
                  m,
                  S,
                  b,
                  E,
                  w,
                  v,
                  A,
                  P,
                  _,
                  O,
                  I = arguments;
                return regeneratorRuntime.wrap(
                  function ($) {
                    for (;;)
                      switch (($.prev = $.next)) {
                        case 0:
                          if (
                            ((p = I.length > 0 && I[0] !== void 0 ? I[0] : {}),
                            (d = p.persistedArgs),
                            (y = this.urlStore.selection),
                            y)
                          ) {
                            $.next = 4;
                            break;
                          }
                          throw new Error(
                            'Cannot render story as no selection was made',
                          );
                        case 4:
                          if (
                            ((h = y.storyId),
                            (g =
                              ((a = this.currentSelection) === null ||
                              a === void 0
                                ? void 0
                                : a.storyId) !== h),
                            (m =
                              ((i = this.currentSelection) === null ||
                              i === void 0
                                ? void 0
                                : i.viewMode) !== y.viewMode),
                            y.viewMode === 'story'
                              ? this.view.showPreparingStory({ immediate: m })
                              : this.view.showPreparingDocs(),
                            (S = this.currentSelection),
                            (b = this.currentRender),
                            !(
                              (c = b) !== null &&
                              c !== void 0 &&
                              c.isPreparing()
                            ))
                          ) {
                            $.next = 14;
                            break;
                          }
                          return ($.next = 13), this.teardownRender(b);
                        case 13:
                          b = null;
                        case 14:
                          return (
                            (E = new StoryRender(
                              this.channel,
                              this.storyStore,
                              function () {
                                return (
                                  l.view.showStoryDuringRender(),
                                  l.renderToDOM.apply(l, arguments)
                                );
                              },
                              this.mainStoryCallbacks(h),
                              h,
                              'story',
                            )),
                            (this.currentSelection = y),
                            (this.currentRender = E),
                            ($.prev = 17),
                            ($.next = 20),
                            E.prepare()
                          );
                        case 20:
                          $.next = 29;
                          break;
                        case 22:
                          if (
                            (($.prev = 22),
                            ($.t0 = $.catch(17)),
                            $.t0 === PREPARE_ABORTED)
                          ) {
                            $.next = 28;
                            break;
                          }
                          return ($.next = 27), this.teardownRender(b);
                        case 27:
                          this.renderStoryLoadingException(h, $.t0);
                        case 28:
                          return $.abrupt('return');
                        case 29:
                          if (
                            ((w = !g && !E.isEqual(b)),
                            d &&
                              this.storyStore.args.updateFromPersisted(
                                E.story,
                                d,
                              ),
                            (v = E.context()),
                            (A = v.parameters),
                            (P = v.initialArgs),
                            (_ = v.argTypes),
                            (O = v.args),
                            !(b && !g && !w && !m))
                          ) {
                            $.next = 37;
                            break;
                          }
                          return (
                            (this.currentRender = b),
                            this.channel.emit(STORY_UNCHANGED, h),
                            this.view.showMain(),
                            $.abrupt('return')
                          );
                        case 37:
                          return (
                            ($.next = 39),
                            this.teardownRender(b, { viewModeChanged: m })
                          );
                        case 39:
                          S && (g || m) && this.channel.emit(STORY_CHANGED, h),
                            (u = window_1.FEATURES) !== null &&
                              u !== void 0 &&
                              u.storyStoreV7 &&
                              this.channel.emit(STORY_PREPARED, {
                                id: h,
                                parameters: A,
                                initialArgs: P,
                                argTypes: _,
                                args: O,
                              }),
                            (w || d) &&
                              this.channel.emit(STORY_ARGS_UPDATED, {
                                storyId: h,
                                args: O,
                              }),
                            y.viewMode === 'docs' || A.docsOnly
                              ? ((this.currentRender =
                                  DocsRender.fromStoryRender(E)),
                                this.currentRender.renderToElement(
                                  this.view.prepareForDocs(),
                                  this.renderStoryToElement.bind(this),
                                ))
                              : (this.storyRenders.push(E),
                                this.currentRender.renderToElement(
                                  this.view.prepareForStory(E.story),
                                ));
                        case 43:
                        case 'end':
                          return $.stop();
                      }
                  },
                  s,
                  this,
                  [[17, 22]],
                );
              }),
            );
            function o() {
              return n.apply(this, arguments);
            }
            return o;
          })(),
        },
        {
          key: 'renderStoryToElement',
          value: function (o, s) {
            var a = this,
              i = new StoryRender(
                this.channel,
                this.storyStore,
                this.renderToDOM,
                this.inlineStoryCallbacks(o.id),
                o.id,
                'docs',
                o,
              );
            return (
              i.renderToElement(s),
              this.storyRenders.push(i),
              _asyncToGenerator(
                regeneratorRuntime.mark(function c() {
                  return regeneratorRuntime.wrap(function (u) {
                    for (;;)
                      switch ((u.prev = u.next)) {
                        case 0:
                          return (u.next = 2), a.teardownRender(i);
                        case 2:
                        case 'end':
                          return u.stop();
                      }
                  }, c);
                }),
              )
            );
          },
        },
        {
          key: 'teardownRender',
          value: (function () {
            var n = _asyncToGenerator(
              regeneratorRuntime.mark(function s(a) {
                var i,
                  c,
                  l = arguments;
                return regeneratorRuntime.wrap(
                  function (p) {
                    for (;;)
                      switch ((p.prev = p.next)) {
                        case 0:
                          return (
                            (i = l.length > 1 && l[1] !== void 0 ? l[1] : {}),
                            (c = i.viewModeChanged),
                            (this.storyRenders = this.storyRenders.filter(
                              function (d) {
                                return d !== a;
                              },
                            )),
                            (p.next = 4),
                            a == null
                              ? void 0
                              : a.teardown({ viewModeChanged: c })
                          );
                        case 4:
                        case 'end':
                          return p.stop();
                      }
                  },
                  s,
                  this,
                );
              }),
            );
            function o(s) {
              return n.apply(this, arguments);
            }
            return o;
          })(),
        },
        {
          key: 'extract',
          value: (function () {
            var n = _asyncToGenerator(
              regeneratorRuntime.mark(function s(a) {
                var i;
                return regeneratorRuntime.wrap(
                  function (l) {
                    for (;;)
                      switch ((l.prev = l.next)) {
                        case 0:
                          if (!this.previewEntryError) {
                            l.next = 2;
                            break;
                          }
                          throw this.previewEntryError;
                        case 2:
                          if (this.storyStore.projectAnnotations) {
                            l.next = 4;
                            break;
                          }
                          throw new Error(
                            dedent(
                              _templateObject4$1 ||
                                (_templateObject4$1 = _taggedTemplateLiteral$2(
                                  [
                                    "Failed to initialize Storybook.\n      \n      Do you have an error in your `preview.js`? Check your Storybook's browser console for errors.",
                                  ],
                                  [
                                    "Failed to initialize Storybook.\n      \n      Do you have an error in your \\`preview.js\\`? Check your Storybook's browser console for errors.",
                                  ],
                                )),
                            ),
                          );
                        case 4:
                          if (
                            !(
                              (i = window_1.FEATURES) !== null &&
                              i !== void 0 &&
                              i.storyStoreV7
                            )
                          ) {
                            l.next = 7;
                            break;
                          }
                          return (
                            (l.next = 7), this.storyStore.cacheAllCSFFiles()
                          );
                        case 7:
                          return l.abrupt('return', this.storyStore.extract(a));
                        case 8:
                        case 'end':
                          return l.stop();
                      }
                  },
                  s,
                  this,
                );
              }),
            );
            function o(s) {
              return n.apply(this, arguments);
            }
            return o;
          })(),
        },
        {
          key: 'mainStoryCallbacks',
          value: function (o) {
            var s = this;
            return {
              showMain: function () {
                return s.view.showMain();
              },
              showError: function (i) {
                return s.renderError(o, i);
              },
              showException: function (i) {
                return s.renderException(o, i);
              },
            };
          },
        },
        {
          key: 'inlineStoryCallbacks',
          value: function (o) {
            return {
              showMain: function () {},
              showError: function (a) {
                return logger.error(
                  'Error rendering docs story ('.concat(o, ')'),
                  a,
                );
              },
              showException: function (a) {
                return logger.error(
                  'Error rendering docs story ('.concat(o, ')'),
                  a,
                );
              },
            };
          },
        },
        {
          key: 'renderPreviewEntryError',
          value: function (o, s) {
            _get(
              _getPrototypeOf(t.prototype),
              'renderPreviewEntryError',
              this,
            ).call(this, o, s),
              this.view.showErrorDisplay(s);
          },
        },
        {
          key: 'renderMissingStory',
          value: function () {
            this.view.showNoPreview(), this.channel.emit(STORY_MISSING);
          },
        },
        {
          key: 'renderStoryLoadingException',
          value: function (o, s) {
            logger.error("Unable to load story '".concat(o, "':")),
              logger.error(s),
              this.view.showErrorDisplay(s),
              this.channel.emit(STORY_MISSING, o);
          },
        },
        {
          key: 'renderException',
          value: function (o, s) {
            this.channel.emit(STORY_THREW_EXCEPTION, s),
              this.channel.emit(STORY_RENDER_PHASE_CHANGED, {
                newPhase: 'errored',
                storyId: o,
              }),
              s !== IGNORED_EXCEPTION &&
                (this.view.showErrorDisplay(s),
                logger.error("Error rendering story '".concat(o, "':")),
                logger.error(s));
          },
        },
        {
          key: 'renderError',
          value: function (o, s) {
            var a = s.title,
              i = s.description;
            logger.error('Error rendering story '.concat(a, ': ').concat(i)),
              this.channel.emit(STORY_ERRORED, { title: a, description: i }),
              this.channel.emit(STORY_RENDER_PHASE_CHANGED, {
                newPhase: 'errored',
                storyId: o,
              }),
              this.view.showErrorDisplay({ message: a, stack: i });
          },
        },
      ]),
      t
    );
  })(Preview),
  _excluded$1 = ['default', '__namedExportsOrder'],
  _templateObject$1;
function _objectWithoutProperties$1(e, r) {
  if (e == null) return {};
  var t = _objectWithoutPropertiesLoose$1(e, r),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (o = 0; o < s.length; o++)
      (n = s[o]),
        !(r.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (t[n] = e[n]);
  }
  return t;
}
function _objectWithoutPropertiesLoose$1(e, r) {
  if (e == null) return {};
  var t = {},
    n = Object.keys(e),
    o,
    s;
  for (s = 0; s < n.length; s++)
    (o = n[s]), !(r.indexOf(o) >= 0) && (t[o] = e[o]);
  return t;
}
function _taggedTemplateLiteral$1(e, r) {
  return (
    r || (r = e.slice(0)),
    Object.freeze(
      Object.defineProperties(e, { raw: { value: Object.freeze(r) } }),
    )
  );
}
function _slicedToArray$3(e, r) {
  return (
    _arrayWithHoles$3(e) ||
    _iterableToArrayLimit$3(e, r) ||
    _unsupportedIterableToArray$3(e, r) ||
    _nonIterableRest$3()
  );
}
function _nonIterableRest$3() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _unsupportedIterableToArray$3(e, r) {
  if (e) {
    if (typeof e == 'string') return _arrayLikeToArray$3(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (t === 'Object' && e.constructor && (t = e.constructor.name),
      t === 'Map' || t === 'Set')
    )
      return Array.from(e);
    if (t === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return _arrayLikeToArray$3(e, r);
  }
}
function _arrayLikeToArray$3(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
  return n;
}
function _iterableToArrayLimit$3(e, r) {
  var t =
    e == null
      ? null
      : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (t != null) {
    var n = [],
      o = !0,
      s = !1,
      a,
      i;
    try {
      for (
        t = t.call(e);
        !(o = (a = t.next()).done) && (n.push(a.value), !(r && n.length === r));
        o = !0
      );
    } catch (c) {
      (s = !0), (i = c);
    } finally {
      try {
        !o && t.return != null && t.return();
      } finally {
        if (s) throw i;
      }
    }
    return n;
  }
}
function _arrayWithHoles$3(e) {
  if (Array.isArray(e)) return e;
}
function _classCallCheck$3(e, r) {
  if (!(e instanceof r))
    throw new TypeError('Cannot call a class as a function');
}
function _defineProperties$3(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function _createClass$3(e, r, t) {
  return (
    r && _defineProperties$3(e.prototype, r),
    t && _defineProperties$3(e, t),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
  );
}
var StoryStoreFacade = (function () {
    function e() {
      _classCallCheck$3(this, e),
        (this.projectAnnotations = void 0),
        (this.stories = void 0),
        (this.csfExports = void 0),
        (this.projectAnnotations = {
          loaders: [],
          decorators: [],
          parameters: {},
          argsEnhancers: [],
          argTypesEnhancers: [],
          args: {},
          argTypes: {},
        }),
        (this.stories = {}),
        (this.csfExports = {});
    }
    return (
      _createClass$3(e, [
        {
          key: 'importFn',
          value: function (t) {
            var n = this;
            return synchronousPromise.SynchronousPromise.resolve().then(
              function () {
                var o = n.csfExports[t];
                if (!o) throw new Error('Unknown path: '.concat(t));
                return o;
              },
            );
          },
        },
        {
          key: 'getStoryIndex',
          value: function (t) {
            var n,
              o,
              s = this,
              a = Object.keys(this.csfExports),
              i =
                (n = this.projectAnnotations.parameters) === null ||
                n === void 0 ||
                (o = n.options) === null ||
                o === void 0
                  ? void 0
                  : o.storySort,
              c = Object.entries(this.stories),
              l = c.map(function (d) {
                var y = _slicedToArray$3(d, 2),
                  h = y[0],
                  g = y[1].importPath,
                  m = s.csfExports[g],
                  S = t.processCSFFileWithCache(m, g, m.default.title);
                return [
                  h,
                  t.storyFromCSFFile({ storyId: h, csfFile: S }),
                  S.meta.parameters,
                  s.projectAnnotations.parameters,
                ];
              }),
              u;
            try {
              u = sortStoriesV6(l, i, a);
            } catch (d) {
              throw typeof i == 'function'
                ? new Error(
                    dedent(
                      _templateObject$1 ||
                        (_templateObject$1 = _taggedTemplateLiteral$1([
                          `
          Error sorting stories with sort parameter `,
                          `:

          > `,
                          `
          
          Are you using a V7-style sort function in V6 compatibility mode?
          
          More info: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#v7-style-story-sort
        `,
                        ])),
                      i,
                      d.message,
                    ),
                  )
                : d;
            }
            var p = u.reduce(function (d, y) {
              return (d[y.id] = s.stories[y.id]), d;
            }, {});
            return { v: 3, stories: p };
          },
        },
        {
          key: 'clearFilenameExports',
          value: function (t) {
            var n = this;
            this.csfExports[t] &&
              (Object.entries(this.stories).forEach(function (o) {
                var s = _slicedToArray$3(o, 2),
                  a = s[0],
                  i = s[1].importPath;
                i === t && delete n.stories[a];
              }),
              (this.csfExports[t] = {}));
          },
        },
        {
          key: 'addStoriesFromExports',
          value: function (t, n) {
            var o = this;
            if (this.csfExports[t] !== n) {
              this.clearFilenameExports(t);
              var s = n.default,
                a = n.__namedExportsOrder,
                i = _objectWithoutProperties$1(n, _excluded$1),
                c = s || {},
                l = c.id,
                u = c.title,
                p = (window_1.STORIES || []).map(function (y) {
                  return Object.assign({}, y, {
                    importPathMatcher: new RegExp(y.importPathMatcher),
                  });
                });
              if (((u = userOrAutoTitle(t, p, u)), !u)) {
                logger.info(
                  "Unexpected default export without title in '"
                    .concat(t, "': ")
                    .concat(JSON.stringify(n.default)),
                );
                return;
              }
              this.csfExports[t] = Object.assign({}, n, {
                default: Object.assign({}, s, { title: u }),
              });
              var d = i;
              Array.isArray(a) &&
                ((d = {}),
                a.forEach(function (y) {
                  var h = i[y];
                  h && (d[y] = h);
                })),
                Object.entries(d)
                  .filter(function (y) {
                    var h = _slicedToArray$3(y, 1),
                      g = h[0];
                    return dist.isExportStory(g, s);
                  })
                  .forEach(function (y) {
                    var h,
                      g,
                      m = _slicedToArray$3(y, 2),
                      S = m[0],
                      b = m[1],
                      E = dist.storyNameFromExport(S),
                      w =
                        ((h = b.parameters) === null || h === void 0
                          ? void 0
                          : h.__id) || dist.toId(l || u, E),
                      v =
                        (typeof b != 'function' && b.name) ||
                        b.storyName ||
                        ((g = b.story) === null || g === void 0
                          ? void 0
                          : g.name) ||
                        E;
                    o.stories[w] = { id: w, name: v, title: u, importPath: t };
                  });
            }
          },
        },
      ]),
      e
    );
  })(),
  _excluded = ['globals', 'globalTypes'],
  _excluded2 = ['decorators', 'loaders', 'component', 'args', 'argTypes'],
  _excluded3 = ['component', 'args', 'argTypes'],
  _templateObject,
  _templateObject3,
  _templateObject4;
function _slicedToArray$2(e, r) {
  return (
    _arrayWithHoles$2(e) ||
    _iterableToArrayLimit$2(e, r) ||
    _unsupportedIterableToArray$2(e, r) ||
    _nonIterableRest$2()
  );
}
function _nonIterableRest$2() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _unsupportedIterableToArray$2(e, r) {
  if (e) {
    if (typeof e == 'string') return _arrayLikeToArray$2(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (t === 'Object' && e.constructor && (t = e.constructor.name),
      t === 'Map' || t === 'Set')
    )
      return Array.from(e);
    if (t === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return _arrayLikeToArray$2(e, r);
  }
}
function _arrayLikeToArray$2(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
  return n;
}
function _iterableToArrayLimit$2(e, r) {
  var t =
    e == null
      ? null
      : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (t != null) {
    var n = [],
      o = !0,
      s = !1,
      a,
      i;
    try {
      for (
        t = t.call(e);
        !(o = (a = t.next()).done) && (n.push(a.value), !(r && n.length === r));
        o = !0
      );
    } catch (c) {
      (s = !0), (i = c);
    } finally {
      try {
        !o && t.return != null && t.return();
      } finally {
        if (s) throw i;
      }
    }
    return n;
  }
}
function _arrayWithHoles$2(e) {
  if (Array.isArray(e)) return e;
}
function _typeof(e) {
  return (
    (_typeof =
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
    _typeof(e)
  );
}
function _objectWithoutProperties(e, r) {
  if (e == null) return {};
  var t = _objectWithoutPropertiesLoose(e, r),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (o = 0; o < s.length; o++)
      (n = s[o]),
        !(r.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (t[n] = e[n]);
  }
  return t;
}
function _objectWithoutPropertiesLoose(e, r) {
  if (e == null) return {};
  var t = {},
    n = Object.keys(e),
    o,
    s;
  for (s = 0; s < n.length; s++)
    (o = n[s]), !(r.indexOf(o) >= 0) && (t[o] = e[o]);
  return t;
}
function _classCallCheck$2(e, r) {
  if (!(e instanceof r))
    throw new TypeError('Cannot call a class as a function');
}
function _defineProperties$2(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function _createClass$2(e, r, t) {
  return (
    r && _defineProperties$2(e.prototype, r),
    t && _defineProperties$2(e, t),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
  );
}
function _taggedTemplateLiteral(e, r) {
  return (
    r || (r = e.slice(0)),
    Object.freeze(
      Object.defineProperties(e, { raw: { value: Object.freeze(r) } }),
    )
  );
}
var warningAlternatives = {
    addDecorator:
      'Instead, use `export const decorators = [];` in your `preview.js`.',
    addParameters:
      'Instead, use `export const parameters = {};` in your `preview.js`.',
    addLoaders:
      'Instead, use `export const loaders = [];` in your `preview.js`.',
  },
  warningMessage = function (r) {
    return browser(
      function () {},
      dedent(
        _templateObject ||
          (_templateObject = _taggedTemplateLiteral(
            [
              '\n  `',
              `\` is deprecated, and will be removed in Storybook 7.0.

  `,
              `

  Read more at https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#deprecated-addparameters-and-adddecorator).`,
            ],
            [
              '\n  \\`',
              `\\\` is deprecated, and will be removed in Storybook 7.0.

  `,
              `

  Read more at https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#deprecated-addparameters-and-adddecorator).`,
            ],
          )),
        r,
        warningAlternatives[r],
      ),
    );
  };
warningMessage('addDecorator'),
  warningMessage('addParameters'),
  warningMessage('addLoaders');
var invalidStoryTypes = new Set(['string', 'number', 'boolean', 'symbol']),
  ClientApi = (function () {
    function e() {
      var r = this,
        t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        n = t.storyStore;
      _classCallCheck$2(this, e),
        (this.facade = void 0),
        (this.storyStore = void 0),
        (this.addons = void 0),
        (this.onImportFnChanged = void 0),
        (this.lastFileName = 0),
        (this.setAddon = browser(
          function (o) {
            r.addons = Object.assign({}, r.addons, o);
          },
          dedent(
            _templateObject3 ||
              (_templateObject3 = _taggedTemplateLiteral(
                [
                  `
      \`setAddon\` is deprecated and will be removed in Storybook 7.0.

      https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#deprecated-setaddon
    `,
                ],
                [
                  `
      \\\`setAddon\\\` is deprecated and will be removed in Storybook 7.0.

      https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#deprecated-setaddon
    `,
                ],
              )),
          ),
        )),
        (this.addDecorator = function (o) {
          r.facade.projectAnnotations.decorators.push(o);
        }),
        (this.clearDecorators = browser(
          function () {
            r.facade.projectAnnotations.decorators = [];
          },
          dedent(
            _templateObject4 ||
              (_templateObject4 = _taggedTemplateLiteral(
                [
                  `
      \`clearDecorators\` is deprecated and will be removed in Storybook 7.0.

      https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#deprecated-cleardecorators
    `,
                ],
                [
                  `
      \\\`clearDecorators\\\` is deprecated and will be removed in Storybook 7.0.

      https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#deprecated-cleardecorators
    `,
                ],
              )),
          ),
        )),
        (this.addParameters = function (o) {
          var s = o.globals,
            a = o.globalTypes,
            i = _objectWithoutProperties(o, _excluded);
          (r.facade.projectAnnotations.parameters = combineParameters(
            r.facade.projectAnnotations.parameters,
            i,
          )),
            s &&
              (r.facade.projectAnnotations.globals = Object.assign(
                {},
                r.facade.projectAnnotations.globals,
                s,
              )),
            a &&
              (r.facade.projectAnnotations.globalTypes = Object.assign(
                {},
                r.facade.projectAnnotations.globalTypes,
                normalizeInputTypes(a),
              ));
        }),
        (this.addLoader = function (o) {
          r.facade.projectAnnotations.loaders.push(o);
        }),
        (this.addArgs = function (o) {
          r.facade.projectAnnotations.args = Object.assign(
            {},
            r.facade.projectAnnotations.args,
            o,
          );
        }),
        (this.addArgTypes = function (o) {
          r.facade.projectAnnotations.argTypes = Object.assign(
            {},
            r.facade.projectAnnotations.argTypes,
            normalizeInputTypes(o),
          );
        }),
        (this.addArgsEnhancer = function (o) {
          r.facade.projectAnnotations.argsEnhancers.push(o);
        }),
        (this.addArgTypesEnhancer = function (o) {
          r.facade.projectAnnotations.argTypesEnhancers.push(o);
        }),
        (this.storiesOf = function (o, s) {
          if (!o && typeof o != 'string')
            throw new Error(
              'Invalid or missing kind provided for stories, should be a string',
            );
          if (
            (s ||
              logger.warn(
                "Missing 'module' parameter for story with a kind of '".concat(
                  o,
                  "'. It will break your HMR",
                ),
              ),
            s)
          ) {
            var a = Object.getPrototypeOf(s);
            a.exports &&
              a.exports.default &&
              logger.error(
                'Illegal mix of CSF default export and storiesOf calls in a single file: '.concat(
                  a.i,
                ),
              );
          }
          for (
            var i = s && s.id ? ''.concat(s.id) : (r.lastFileName++).toString(),
              c = i,
              l = 1;
            r.facade.csfExports[c] &&
            Object.keys(r.facade.csfExports[c]).length > 0;

          )
            (l += 1), (c = ''.concat(i, '-').concat(l));
          s &&
            s.hot &&
            s.hot.accept &&
            (s.hot.accept(),
            s.hot.dispose(function () {
              r.facade.clearFilenameExports(c),
                setTimeout(function () {
                  var h;
                  (h = r.onImportFnChanged) === null ||
                    h === void 0 ||
                    h.call(r, { importFn: r.importFn.bind(r) });
                }, 0);
            }));
          var u = !1,
            p = {
              kind: o.toString(),
              add: function () {
                return p;
              },
              addDecorator: function () {
                return p;
              },
              addLoader: function () {
                return p;
              },
              addParameters: function () {
                return p;
              },
            };
          Object.keys(r.addons).forEach(function (h) {
            var g = r.addons[h];
            p[h] = function () {
              for (
                var m = arguments.length, S = new Array(m), b = 0;
                b < m;
                b++
              )
                S[b] = arguments[b];
              return g.apply(p, S), p;
            };
          });
          var d = {
            id: dist.sanitize(o),
            title: o,
            decorators: [],
            loaders: [],
            parameters: {},
          };
          r.facade.csfExports[c] = { default: d };
          var y = 0;
          return (
            (p.add = function (h, g) {
              var m =
                arguments.length > 2 && arguments[2] !== void 0
                  ? arguments[2]
                  : {};
              if (((u = !0), typeof h != 'string'))
                throw new Error(
                  'Invalid or missing storyName provided for a "'.concat(
                    o,
                    '" story.',
                  ),
                );
              if (!g || Array.isArray(g) || invalidStoryTypes.has(_typeof(g)))
                throw new Error(
                  'Cannot load story "'
                    .concat(h, '" in "')
                    .concat(
                      o,
                      '" due to invalid format. Storybook expected a function/object but received ',
                    )
                    .concat(_typeof(g), ' instead.'),
                );
              var S = m.decorators,
                b = m.loaders,
                E = m.component,
                w = m.args,
                v = m.argTypes,
                A = _objectWithoutProperties(m, _excluded2),
                P = m.__id || dist.toId(o, h),
                _ = r.facade.csfExports[c];
              return (
                (_['story'.concat(y)] = {
                  name: h,
                  parameters: Object.assign({ fileName: c, __id: P }, A),
                  decorators: S,
                  loaders: b,
                  args: w,
                  argTypes: v,
                  component: E,
                  render: g,
                }),
                (y += 1),
                (r.facade.stories[P] = {
                  id: P,
                  title: _.default.title,
                  name: h,
                  importPath: c,
                }),
                p
              );
            }),
            (p.addDecorator = function (h) {
              if (u)
                throw new Error(`You cannot add a decorator after the first story for a kind.
Read more here: https://github.com/storybookjs/storybook/blob/master/MIGRATION.md#can-no-longer-add-decoratorsparameters-after-stories`);
              return d.decorators.push(h), p;
            }),
            (p.addLoader = function (h) {
              if (u)
                throw new Error(
                  'You cannot add a loader after the first story for a kind.',
                );
              return d.loaders.push(h), p;
            }),
            (p.addParameters = function (h) {
              var g = h.component,
                m = h.args,
                S = h.argTypes,
                b = _objectWithoutProperties(h, _excluded3);
              if (u)
                throw new Error(`You cannot add parameters after the first story for a kind.
Read more here: https://github.com/storybookjs/storybook/blob/master/MIGRATION.md#can-no-longer-add-decoratorsparameters-after-stories`);
              return (
                (d.parameters = combineParameters(d.parameters, b)),
                g && (d.component = g),
                m && (d.args = Object.assign({}, d.args, m)),
                S && (d.argTypes = Object.assign({}, d.argTypes, S)),
                p
              );
            }),
            p
          );
        }),
        (this.getStorybook = function () {
          var o = r.storyStore.storyIndex.stories,
            s = {};
          return (
            Object.entries(o).forEach(function (a) {
              var i = _slicedToArray$2(a, 2),
                c = i[0],
                l = i[1],
                u = l.title,
                p = l.name,
                d = l.importPath;
              s[u] || (s[u] = { kind: u, fileName: d, stories: [] });
              var y = r.storyStore.fromId(c),
                h = y.storyFn;
              s[u].stories.push({ name: p, render: h });
            }),
            Object.values(s)
          );
        }),
        (this.raw = function () {
          return r.storyStore.raw();
        }),
        (this.facade = new StoryStoreFacade()),
        (this.addons = {}),
        (this.storyStore = n);
    }
    return (
      _createClass$2(e, [
        {
          key: 'importFn',
          value: function (t) {
            return this.facade.importFn(t);
          },
        },
        {
          key: 'getStoryIndex',
          value: function () {
            if (!this.storyStore)
              throw new Error(
                'Cannot get story index before setting storyStore',
              );
            return this.facade.getStoryIndex(this.storyStore);
          },
        },
        {
          key: '_storyStore',
          get: function () {
            return this.storyStore;
          },
        },
      ]),
      e
    );
  })(),
  hasSymbols$1 = shams$1,
  shams = function () {
    return hasSymbols$1() && !!Symbol.toStringTag;
  },
  callBound = callBound$1,
  hasToStringTag = shams(),
  has,
  $exec,
  isRegexMarker,
  badStringifier;
if (hasToStringTag) {
  (has = callBound('Object.prototype.hasOwnProperty')),
    ($exec = callBound('RegExp.prototype.exec')),
    (isRegexMarker = {});
  var throwRegexMarker = function () {
    throw isRegexMarker;
  };
  (badStringifier = { toString: throwRegexMarker, valueOf: throwRegexMarker }),
    typeof Symbol.toPrimitive == 'symbol' &&
      (badStringifier[Symbol.toPrimitive] = throwRegexMarker);
}
var $toString = callBound('Object.prototype.toString'),
  gOPD = Object.getOwnPropertyDescriptor,
  regexClass = '[object RegExp]',
  isRegex = hasToStringTag
    ? function (r) {
        if (!r || typeof r != 'object') return !1;
        var t = gOPD(r, 'lastIndex'),
          n = t && has(t, 'value');
        if (!n) return !1;
        try {
          $exec(r, badStringifier);
        } catch (o) {
          return o === isRegexMarker;
        }
      }
    : function (r) {
        return !r || (typeof r != 'object' && typeof r != 'function')
          ? !1
          : $toString(r) === regexClass;
      },
  isFunction_1 = isFunction,
  toString = Object.prototype.toString;
function isFunction(e) {
  if (!e) return !1;
  var r = toString.call(e);
  return (
    r === '[object Function]' ||
    (typeof e == 'function' && r !== '[object RegExp]') ||
    (typeof window < 'u' &&
      (e === window.setTimeout ||
        e === window.alert ||
        e === window.confirm ||
        e === window.prompt))
  );
}
var isSymbolExports = {},
  isSymbol = {
    get exports() {
      return isSymbolExports;
    },
    set exports(e) {
      isSymbolExports = e;
    },
  },
  toStr = Object.prototype.toString,
  hasSymbols = hasSymbols$2();
if (hasSymbols) {
  var symToStr = Symbol.prototype.toString,
    symStringRegex = /^Symbol\(.*\)$/,
    isSymbolObject = function (r) {
      return typeof r.valueOf() != 'symbol'
        ? !1
        : symStringRegex.test(symToStr.call(r));
    };
  isSymbol.exports = function (r) {
    if (typeof r == 'symbol') return !0;
    if (toStr.call(r) !== '[object Symbol]') return !1;
    try {
      return isSymbolObject(r);
    } catch {
      return !1;
    }
  };
} else
  isSymbol.exports = function (r) {
    return !1;
  };
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */ function isObject$1(e) {
  return e != null && typeof e == 'object' && Array.isArray(e) === !1;
}
function ownKeys$1(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      t.push.apply(t, n);
  }
  return t;
}
function _objectSpread$1(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2
      ? ownKeys$1(Object(t), !0).forEach(function (n) {
          _defineProperty$1(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : ownKeys$1(Object(t)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
        });
  }
  return e;
}
function _defineProperty$1(e, r, t) {
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
var eventProperties = [
    'bubbles',
    'cancelBubble',
    'cancelable',
    'composed',
    'currentTarget',
    'defaultPrevented',
    'eventPhase',
    'isTrusted',
    'returnValue',
    'srcElement',
    'target',
    'timeStamp',
    'type',
  ],
  customEventSpecificProperties = ['detail'];
function extractEventHiddenProperties(e) {
  var r = eventProperties
    .filter(function (t) {
      return e[t] !== void 0;
    })
    .reduce(function (t, n) {
      return _objectSpread$1(
        _objectSpread$1({}, t),
        {},
        _defineProperty$1({}, n, e[n]),
      );
    }, {});
  return (
    e instanceof CustomEvent &&
      customEventSpecificProperties
        .filter(function (t) {
          return e[t] !== void 0;
        })
        .forEach(function (t) {
          r[t] = e[t];
        }),
    r
  );
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      t.push.apply(t, n);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2
      ? ownKeys(Object(t), !0).forEach(function (n) {
          _defineProperty(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : ownKeys(Object(t)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
        });
  }
  return e;
}
function _defineProperty(e, r, t) {
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
function _slicedToArray$1(e, r) {
  return (
    _arrayWithHoles$1(e) ||
    _iterableToArrayLimit$1(e, r) ||
    _unsupportedIterableToArray$1(e, r) ||
    _nonIterableRest$1()
  );
}
function _nonIterableRest$1() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _unsupportedIterableToArray$1(e, r) {
  if (e) {
    if (typeof e == 'string') return _arrayLikeToArray$1(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (t === 'Object' && e.constructor && (t = e.constructor.name),
      t === 'Map' || t === 'Set')
    )
      return Array.from(e);
    if (t === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return _arrayLikeToArray$1(e, r);
  }
}
function _arrayLikeToArray$1(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
  return n;
}
function _iterableToArrayLimit$1(e, r) {
  if (!(typeof Symbol > 'u' || !(Symbol.iterator in Object(e)))) {
    var t = [],
      n = !0,
      o = !1,
      s = void 0;
    try {
      for (
        var a = e[Symbol.iterator](), i;
        !(n = (i = a.next()).done) && (t.push(i.value), !(r && t.length === r));
        n = !0
      );
    } catch (c) {
      (o = !0), (s = c);
    } finally {
      try {
        !n && a.return != null && a.return();
      } finally {
        if (o) throw s;
      }
    }
    return t;
  }
}
function _arrayWithHoles$1(e) {
  if (Array.isArray(e)) return e;
}
var isRunningInBrowser = typeof window < 'u' && typeof window.document < 'u',
  isObject = isObject$1,
  removeCodeComments = function (r) {
    var t = null,
      n = !1,
      o = !1,
      s = !1,
      a = '';
    if (r.indexOf('//') >= 0 || r.indexOf('/*') >= 0)
      for (var i = 0; i < r.length; i += 1)
        !t && !n && !o && !s
          ? r[i] === '"' || r[i] === "'" || r[i] === '`'
            ? (t = r[i])
            : r[i] === '/' && r[i + 1] === '*'
            ? (n = !0)
            : r[i] === '/' && r[i + 1] === '/'
            ? (o = !0)
            : r[i] === '/' && r[i + 1] !== '/' && (s = !0)
          : (t &&
              ((r[i] === t && r[i - 1] !== '\\') ||
                (r[i] ===
                  `
` &&
                  t !== '`')) &&
              (t = null),
            s &&
              ((r[i] === '/' && r[i - 1] !== '\\') ||
                r[i] ===
                  `
`) &&
              (s = !1),
            n && r[i - 1] === '/' && r[i - 2] === '*' && (n = !1),
            o &&
              r[i] ===
                `
` &&
              (o = !1)),
          !n && !o && (a += r[i]);
    else a = r;
    return a;
  },
  cleanCode = memoize$2(1e4)(function (e) {
    return removeCodeComments(e).replace(/\n\s*/g, '').trim();
  }),
  convertShorthandMethods = function (r, t) {
    var n = t.slice(0, t.indexOf('{')),
      o = t.slice(t.indexOf('{'));
    if (n.includes('=>') || n.includes('function')) return t;
    var s = n;
    return (s = s.replace(r, 'function')), s + o;
  },
  dateFormat = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/,
  isJSON = function (r) {
    return r.match(/^[\[\{\"\}].*[\]\}\"]$/);
  };
function convertUnconventionalData(e) {
  if (!isObject(e)) return e;
  var r = e,
    t = !1;
  return (
    isRunningInBrowser &&
      e instanceof Event &&
      ((r = extractEventHiddenProperties(r)), (t = !0)),
    (r = Object.keys(r).reduce(function (n, o) {
      try {
        var s;
        (s = r[o]) === null || s === void 0 || s.toJSON, (n[o] = r[o]);
      } catch {
        t = !0;
      }
      return n;
    }, {})),
    t ? r : e
  );
}
var replacer = function (r) {
    var t, n, o, s;
    return function (i, c) {
      try {
        if (i === '')
          return (
            (s = []), (t = new Map([[c, '[]']])), (n = new Map()), (o = []), c
          );
        for (var l = n.get(this) || this; o.length && l !== o[0]; )
          o.shift(), s.pop();
        if (typeof c == 'boolean') return c;
        if (c === void 0) return r.allowUndefined ? '_undefined_' : void 0;
        if (c === null) return null;
        if (typeof c == 'number')
          return c === -1 / 0
            ? '_-Infinity_'
            : c === 1 / 0
            ? '_Infinity_'
            : Number.isNaN(c)
            ? '_NaN_'
            : c;
        if (typeof c == 'bigint') return '_bigint_'.concat(c.toString());
        if (typeof c == 'string')
          return dateFormat.test(c)
            ? r.allowDate
              ? '_date_'.concat(c)
              : void 0
            : c;
        if (isRegex(c))
          return r.allowRegExp
            ? '_regexp_'.concat(c.flags, '|').concat(c.source)
            : void 0;
        if (isFunction_1(c)) {
          if (!r.allowFunction) return;
          var u = c.name,
            p = c.toString();
          return p.match(
            /(\[native code\]|WEBPACK_IMPORTED_MODULE|__webpack_exports__|__webpack_require__)/,
          )
            ? '_function_'.concat(u, '|').concat(function () {}.toString())
            : '_function_'
                .concat(u, '|')
                .concat(cleanCode(convertShorthandMethods(i, p)));
        }
        if (isSymbolExports(c)) {
          if (!r.allowSymbol) return;
          var d = Symbol.keyFor(c);
          return d !== void 0
            ? '_gsymbol_'.concat(d)
            : '_symbol_'.concat(c.toString().slice(7, -1));
        }
        if (o.length >= r.maxDepth)
          return Array.isArray(c)
            ? '[Array('.concat(c.length, ')]')
            : '[Object]';
        if (c === this) return '_duplicate_'.concat(JSON.stringify(s));
        if (
          c.constructor &&
          c.constructor.name &&
          c.constructor.name !== 'Object' &&
          !Array.isArray(c) &&
          !r.allowClass
        )
          return;
        var y = t.get(c);
        if (!y) {
          var h = Array.isArray(c) ? c : convertUnconventionalData(c);
          if (
            c.constructor &&
            c.constructor.name &&
            c.constructor.name !== 'Object' &&
            !Array.isArray(c) &&
            r.allowClass
          )
            try {
              Object.assign(h, { '_constructor-name_': c.constructor.name });
            } catch {}
          return (
            s.push(i),
            o.unshift(h),
            t.set(c, JSON.stringify(s)),
            c !== h && n.set(c, h),
            h
          );
        }
        return '_duplicate_'.concat(y);
      } catch {
        return;
      }
    };
  },
  reviver = function reviver(options) {
    var refs = [],
      root;
    return function revive(key, value) {
      if (
        (key === '' &&
          ((root = value),
          refs.forEach(function (e) {
            var r = e.target,
              t = e.container,
              n = e.replacement,
              o = isJSON(n) ? JSON.parse(n) : n.split('.');
            o.length === 0 ? (t[r] = root) : (t[r] = get_1(root, o));
          })),
        key === '_constructor-name_')
      )
        return value;
      if (
        isObject(value) &&
        value['_constructor-name_'] &&
        options.allowFunction
      ) {
        var name = value['_constructor-name_'];
        if (name !== 'Object') {
          var Fn = new Function(
            'return function '.concat(name.replace(/[\W_]+/g, ''), '(){}'),
          )();
          Object.setPrototypeOf(value, new Fn());
        }
        return delete value['_constructor-name_'], value;
      }
      if (
        typeof value == 'string' &&
        value.startsWith('_function_') &&
        options.allowFunction
      ) {
        var _ref2 = value.match(/_function_([^|]*)\|(.*)/) || [],
          _ref3 = _slicedToArray$1(_ref2, 3),
          _name = _ref3[1],
          source = _ref3[2],
          sourceSanitized = source.replace(/[(\(\))|\\| |\]|`]*$/, '');
        if (!options.lazyEval) return eval('('.concat(sourceSanitized, ')'));
        var result = function result() {
          var f = eval('('.concat(sourceSanitized, ')'));
          return f.apply(void 0, arguments);
        };
        return (
          Object.defineProperty(result, 'toString', {
            value: function e() {
              return sourceSanitized;
            },
          }),
          Object.defineProperty(result, 'name', { value: _name }),
          result
        );
      }
      if (
        typeof value == 'string' &&
        value.startsWith('_regexp_') &&
        options.allowRegExp
      ) {
        var _ref4 = value.match(/_regexp_([^|]*)\|(.*)/) || [],
          _ref5 = _slicedToArray$1(_ref4, 3),
          flags = _ref5[1],
          _source = _ref5[2];
        return new RegExp(_source, flags);
      }
      return typeof value == 'string' &&
        value.startsWith('_date_') &&
        options.allowDate
        ? new Date(value.replace('_date_', ''))
        : typeof value == 'string' && value.startsWith('_duplicate_')
        ? (refs.push({
            target: key,
            container: this,
            replacement: value.replace(/^_duplicate_/, ''),
          }),
          null)
        : typeof value == 'string' &&
          value.startsWith('_symbol_') &&
          options.allowSymbol
        ? Symbol(value.replace('_symbol_', ''))
        : typeof value == 'string' &&
          value.startsWith('_gsymbol_') &&
          options.allowSymbol
        ? Symbol.for(value.replace('_gsymbol_', ''))
        : typeof value == 'string' && value === '_-Infinity_'
        ? -1 / 0
        : typeof value == 'string' && value === '_Infinity_'
        ? 1 / 0
        : typeof value == 'string' && value === '_NaN_'
        ? NaN
        : typeof value == 'string' &&
          value.startsWith('_bigint_') &&
          typeof BigInt == 'function'
        ? BigInt(value.replace('_bigint_', ''))
        : value;
    };
  },
  defaultOptions = {
    maxDepth: 10,
    space: void 0,
    allowFunction: !0,
    allowRegExp: !0,
    allowDate: !0,
    allowClass: !0,
    allowUndefined: !0,
    allowSymbol: !0,
    lazyEval: !0,
  },
  stringify = function e(r) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      n = _objectSpread(_objectSpread({}, defaultOptions), t);
    return JSON.stringify(convertUnconventionalData(r), replacer(n), t.space);
  },
  mutator = function e() {
    var r = new Map();
    return function t(n) {
      isObject(n) &&
        Object.entries(n).forEach(function (o) {
          var s = _slicedToArray$1(o, 2),
            a = s[0],
            i = s[1];
          i === '_undefined_'
            ? (n[a] = void 0)
            : r.get(i) || (r.set(i, !0), t(i));
        }),
        Array.isArray(n) &&
          n.forEach(function (o, s) {
            o === '_undefined_'
              ? (r.set(o, !0), (n[s] = void 0))
              : r.get(o) || (r.set(o, !0), t(o));
          });
    };
  },
  parse = function e(r) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      n = _objectSpread(_objectSpread({}, defaultOptions), t),
      o = JSON.parse(r, reviver(n));
    return mutator()(o), o;
  };
function _toArray(e) {
  return (
    _arrayWithHoles(e) ||
    _iterableToArray(e) ||
    _unsupportedIterableToArray(e) ||
    _nonIterableRest()
  );
}
function _toConsumableArray(e) {
  return (
    _arrayWithoutHoles(e) ||
    _iterableToArray(e) ||
    _unsupportedIterableToArray(e) ||
    _nonIterableSpread()
  );
}
function _nonIterableSpread() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _iterableToArray(e) {
  if (
    (typeof Symbol < 'u' && e[Symbol.iterator] != null) ||
    e['@@iterator'] != null
  )
    return Array.from(e);
}
function _arrayWithoutHoles(e) {
  if (Array.isArray(e)) return _arrayLikeToArray(e);
}
function _slicedToArray(e, r) {
  return (
    _arrayWithHoles(e) ||
    _iterableToArrayLimit(e, r) ||
    _unsupportedIterableToArray(e, r) ||
    _nonIterableRest()
  );
}
function _nonIterableRest() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _unsupportedIterableToArray(e, r) {
  if (e) {
    if (typeof e == 'string') return _arrayLikeToArray(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (t === 'Object' && e.constructor && (t = e.constructor.name),
      t === 'Map' || t === 'Set')
    )
      return Array.from(e);
    if (t === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return _arrayLikeToArray(e, r);
  }
}
function _arrayLikeToArray(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
  return n;
}
function _iterableToArrayLimit(e, r) {
  var t =
    e == null
      ? null
      : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (t != null) {
    var n = [],
      o = !0,
      s = !1,
      a,
      i;
    try {
      for (
        t = t.call(e);
        !(o = (a = t.next()).done) && (n.push(a.value), !(r && n.length === r));
        o = !0
      );
    } catch (c) {
      (s = !0), (i = c);
    } finally {
      try {
        !o && t.return != null && t.return();
      } finally {
        if (s) throw i;
      }
    }
    return n;
  }
}
function _arrayWithHoles(e) {
  if (Array.isArray(e)) return e;
}
function _classCallCheck$1(e, r) {
  if (!(e instanceof r))
    throw new TypeError('Cannot call a class as a function');
}
function _defineProperties$1(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function _createClass$1(e, r, t) {
  return (
    r && _defineProperties$1(e.prototype, r),
    t && _defineProperties$1(e, t),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
  );
}
var globalWindow = window_1.window,
  document$1 = window_1.document,
  location = window_1.location,
  KEY = 'storybook-channel',
  defaultEventOptions = { allowFunction: !0, maxDepth: 25 },
  PostmsgTransport = (function () {
    function e(r) {
      if (
        (_classCallCheck$1(this, e),
        (this.config = r),
        (this.buffer = void 0),
        (this.handler = void 0),
        (this.connected = void 0),
        (this.buffer = []),
        (this.handler = null),
        globalWindow.addEventListener(
          'message',
          this.handleEvent.bind(this),
          !1,
        ),
        r.page !== 'manager' && r.page !== 'preview')
      )
        throw new Error(
          'postmsg-channel: "config.page" cannot be "'.concat(r.page, '"'),
        );
    }
    return (
      _createClass$1(e, [
        {
          key: 'setHandler',
          value: function (t) {
            var n = this;
            this.handler = function () {
              for (
                var o = arguments.length, s = new Array(o), a = 0;
                a < o;
                a++
              )
                s[a] = arguments[a];
              t.apply(n, s),
                !n.connected &&
                  n.getLocalFrame().length &&
                  (n.flush(), (n.connected = !0));
            };
          },
        },
        {
          key: 'send',
          value: function (t, n) {
            var o = this,
              s = n || {},
              a = s.target,
              i = s.allowRegExp,
              c = s.allowFunction,
              l = s.allowSymbol,
              u = s.allowDate,
              p = s.allowUndefined,
              d = s.allowClass,
              y = s.maxDepth,
              h = s.space,
              g = s.lazyEval,
              m = Object.fromEntries(
                Object.entries({
                  allowRegExp: i,
                  allowFunction: c,
                  allowSymbol: l,
                  allowDate: u,
                  allowUndefined: p,
                  allowClass: d,
                  maxDepth: y,
                  space: h,
                  lazyEval: g,
                }).filter(function (v) {
                  var A = _slicedToArray(v, 2);
                  A[0];
                  var P = A[1];
                  return typeof P < 'u';
                }),
              ),
              S = Object.assign(
                {},
                defaultEventOptions,
                window_1.CHANNEL_OPTIONS || {},
                m,
              );
            n && Number.isInteger(n.depth) && (S.maxDepth = n.depth);
            var b = this.getFrames(a),
              E = lib$1.parse(location.search, { ignoreQueryPrefix: !0 }),
              w = stringify({ key: KEY, event: t, refId: E.refId }, S);
            return b.length
              ? (this.buffer.length && this.flush(),
                b.forEach(function (v) {
                  try {
                    v.postMessage(w, '*');
                  } catch {
                    console.error('sending over postmessage fail');
                  }
                }),
                Promise.resolve(null))
              : new Promise(function (v, A) {
                  o.buffer.push({ event: t, resolve: v, reject: A });
                });
          },
        },
        {
          key: 'flush',
          value: function () {
            var t = this,
              n = this.buffer;
            (this.buffer = []),
              n.forEach(function (o) {
                t.send(o.event).then(o.resolve).catch(o.reject);
              });
          },
        },
        {
          key: 'getFrames',
          value: function (t) {
            if (this.config.page === 'manager') {
              var n = _toConsumableArray(
                  document$1.querySelectorAll(
                    'iframe[data-is-storybook][data-is-loaded]',
                  ),
                ),
                o = n
                  .filter(function (s) {
                    try {
                      return (
                        !!s.contentWindow &&
                        s.dataset.isStorybook !== void 0 &&
                        s.id === t
                      );
                    } catch {
                      return !1;
                    }
                  })
                  .map(function (s) {
                    return s.contentWindow;
                  });
              return o.length ? o : this.getCurrentFrames();
            }
            return globalWindow &&
              globalWindow.parent &&
              globalWindow.parent !== globalWindow
              ? [globalWindow.parent]
              : [];
          },
        },
        {
          key: 'getCurrentFrames',
          value: function () {
            if (this.config.page === 'manager') {
              var t = _toConsumableArray(
                document$1.querySelectorAll('[data-is-storybook="true"]'),
              );
              return t.map(function (n) {
                return n.contentWindow;
              });
            }
            return globalWindow && globalWindow.parent
              ? [globalWindow.parent]
              : [];
          },
        },
        {
          key: 'getLocalFrame',
          value: function () {
            if (this.config.page === 'manager') {
              var t = _toConsumableArray(
                document$1.querySelectorAll('#storybook-preview-iframe'),
              );
              return t.map(function (n) {
                return n.contentWindow;
              });
            }
            return globalWindow && globalWindow.parent
              ? [globalWindow.parent]
              : [];
          },
        },
        {
          key: 'handleEvent',
          value: function (t) {
            try {
              var n = t.data,
                o =
                  typeof n == 'string' && isJSON(n)
                    ? parse(n, window_1.CHANNEL_OPTIONS || {})
                    : n,
                s = o.key,
                a = o.event,
                i = o.refId;
              if (s === KEY) {
                var c =
                    this.config.page === 'manager'
                      ? '<span style="color: #37D5D3; background: black"> manager </span>'
                      : '<span style="color: #1EA7FD; background: black"> preview </span>',
                  l = Object.values(EVENTS).includes(a.type)
                    ? '<span style="color: #FF4785">'.concat(a.type, '</span>')
                    : '<span style="color: #FFAE00">'.concat(a.type, '</span>');
                if (
                  (i && (a.refId = i),
                  (a.source =
                    this.config.page === 'preview'
                      ? t.origin
                      : getEventSourceUrl(t)),
                  !a.source)
                ) {
                  pretty.error(
                    ''
                      .concat(c, ' received ')
                      .concat(
                        l,
                        ' but was unable to determine the source of the event',
                      ),
                  );
                  return;
                }
                var u = ''
                  .concat(c, ' received ')
                  .concat(l, ' (')
                  .concat(n.length, ')');
                pretty.debug.apply(
                  pretty,
                  [
                    location.origin !== a.source
                      ? u
                      : ''
                          .concat(u, ' <span style="color: gray">(on ')
                          .concat(location.origin, ' from ')
                          .concat(a.source, ')</span>'),
                  ].concat(_toConsumableArray(a.args)),
                ),
                  this.handler(a);
              }
            } catch (p) {
              logger.error(p);
            }
          },
        },
      ]),
      e
    );
  })(),
  getEventSourceUrl = function e(r) {
    var t = _toConsumableArray(
        document$1.querySelectorAll('iframe[data-is-storybook]'),
      ),
      n = t.filter(function (d) {
        try {
          return d.contentWindow === r.source;
        } catch {}
        var y = d.getAttribute('src'),
          h;
        try {
          var g = new URL(y, document$1.location);
          h = g.origin;
        } catch {
          return !1;
        }
        return h === r.origin;
      }),
      o = _toArray(n),
      s = o[0],
      a = o.slice(1);
    if (s && a.length === 0) {
      var i = s.getAttribute('src'),
        c = new URL(i, document$1.location),
        l = c.protocol,
        u = c.host,
        p = c.pathname;
      return ''.concat(l, '//').concat(u).concat(p);
    }
    return (
      a.length > 0 &&
        logger.error('found multiple candidates for event source'),
      null
    );
  };
function createChannel$1(e) {
  var r = e.page,
    t = new PostmsgTransport({ page: r });
  return new Channel$1({ transport: t });
}
function _classCallCheck(e, r) {
  if (!(e instanceof r))
    throw new TypeError('Cannot call a class as a function');
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function _createClass(e, r, t) {
  return (
    r && _defineProperties(e.prototype, r),
    t && _defineProperties(e, t),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
  );
}
var WebSocket = window_1.WebSocket,
  WebsocketTransport = (function () {
    function e(r) {
      var t = r.url,
        n = r.onError;
      _classCallCheck(this, e),
        (this.socket = void 0),
        (this.handler = void 0),
        (this.buffer = []),
        (this.isReady = !1),
        this.connect(t, n);
    }
    return (
      _createClass(e, [
        {
          key: 'setHandler',
          value: function (t) {
            this.handler = t;
          },
        },
        {
          key: 'send',
          value: function (t) {
            this.isReady ? this.sendNow(t) : this.sendLater(t);
          },
        },
        {
          key: 'sendLater',
          value: function (t) {
            this.buffer.push(t);
          },
        },
        {
          key: 'sendNow',
          value: function (t) {
            var n = stringify(t, { maxDepth: 15, allowFunction: !0 });
            this.socket.send(n);
          },
        },
        {
          key: 'flush',
          value: function () {
            var t = this,
              n = this.buffer;
            (this.buffer = []),
              n.forEach(function (o) {
                return t.send(o);
              });
          },
        },
        {
          key: 'connect',
          value: function (t, n) {
            var o = this;
            (this.socket = new WebSocket(t)),
              (this.socket.onopen = function () {
                (o.isReady = !0), o.flush();
              }),
              (this.socket.onmessage = function (s) {
                var a = s.data,
                  i = typeof a == 'string' && isJSON(a) ? parse(a) : a;
                o.handler(i);
              }),
              (this.socket.onerror = function (s) {
                n && n(s);
              });
          },
        },
      ]),
      e
    );
  })();
function createChannel(e) {
  var r = e.url,
    t = e.async,
    n = t === void 0 ? !1 : t,
    o = e.onError,
    s =
      o === void 0
        ? function (i) {
            return logger.warn(i);
          }
        : o,
    a = new WebsocketTransport({ url: r, onError: s });
  return new Channel({ transport: a, async: n });
}
const channel = createChannel$1({ page: 'preview' });
addons.setChannel(channel);
window.__STORYBOOK_ADDONS_CHANNEL__ = channel;
const { SERVER_CHANNEL_URL } = globalThis;
if (SERVER_CHANNEL_URL) {
  const e = createChannel({ url: SERVER_CHANNEL_URL });
  addons.setServerChannel(e), (window.__STORYBOOK_SERVER_CHANNEL__ = e);
}
const importers = {
  './src/stories/GettingStarted.stories.mdx': async () =>
    __vitePreload(
      () => import('./GettingStarted.stories-34627c56.js'),
      [
        'assets/GettingStarted.stories-34627c56.js',
        'assets/index-e0023ec7.js',
        'assets/index-73814c06.js',
        'assets/Props-65c0891f.js',
        'assets/index-681e4b07-fb702c61.js',
        'assets/index-3121cc12.js',
        'assets/index-e51aae5b.js',
        'assets/jsx-runtime-c8b955b8.js',
        'assets/string-07c0498b.js',
      ],
    ),
  './src/stories/Introduction.stories.mdx': async () =>
    __vitePreload(
      () => import('./Introduction.stories-895cf0a6.js'),
      [
        'assets/Introduction.stories-895cf0a6.js',
        'assets/index-e0023ec7.js',
        'assets/index-73814c06.js',
        'assets/Props-65c0891f.js',
        'assets/index-681e4b07-fb702c61.js',
        'assets/index-3121cc12.js',
        'assets/index-e51aae5b.js',
        'assets/jsx-runtime-c8b955b8.js',
        'assets/string-07c0498b.js',
      ],
    ),
  './src/stories/Button.stories.js': async () =>
    __vitePreload(
      () => import('./Button.stories-4457c0b4.js'),
      [
        'assets/Button.stories-4457c0b4.js',
        'assets/Button-34361c8b.js',
        'assets/vue.esm-bundler-f95a757f.js',
        'assets/_plugin-vue_export-helper-c27b6911.js',
        'assets/Button-bc1a867b.css',
      ],
    ),
  './src/stories/Header.stories.js': async () =>
    __vitePreload(
      () => import('./Header.stories-0f3a507e.js'),
      [
        'assets/Header.stories-0f3a507e.js',
        'assets/Header-6127fd7e.js',
        'assets/Button-34361c8b.js',
        'assets/vue.esm-bundler-f95a757f.js',
        'assets/_plugin-vue_export-helper-c27b6911.js',
        'assets/Button-bc1a867b.css',
        'assets/Header-4fc7684b.css',
      ],
    ),
  './src/stories/Logo.stories.js': async () =>
    __vitePreload(
      () => import('./Logo.stories-1a14b4e7.js'),
      [
        'assets/Logo.stories-1a14b4e7.js',
        'assets/vue.esm-bundler-f95a757f.js',
        'assets/_plugin-vue_export-helper-c27b6911.js',
      ],
    ),
  './src/stories/Page.stories.js': async () =>
    __vitePreload(
      () => import('./Page.stories-24419f8b.js'),
      [
        'assets/Page.stories-24419f8b.js',
        'assets/index-73814c06.js',
        'assets/index-9fa1e778.js',
        'assets/index-3121cc12.js',
        'assets/instrumenter-68c1f6a0.js',
        'assets/Header-6127fd7e.js',
        'assets/Button-34361c8b.js',
        'assets/vue.esm-bundler-f95a757f.js',
        'assets/_plugin-vue_export-helper-c27b6911.js',
        'assets/Button-bc1a867b.css',
        'assets/Header-4fc7684b.css',
        'assets/Page.stories-0913ba40.css',
      ],
    ),
};
async function importFn(e) {
  return importers[e]();
}
const getProjectAnnotations = async () =>
    composeConfigs(
      await Promise.all([
        __vitePreload(
          () => import('./config-df61610e.js'),
          [
            'assets/config-df61610e.js',
            'assets/decorateStory-f21d1d8c.js',
            'assets/vue.esm-bundler-f95a757f.js',
            'assets/index-3121cc12.js',
            'assets/index-73814c06.js',
          ],
        ),
        __vitePreload(
          () => import('./config-d1f50fa5.js'),
          [
            'assets/config-d1f50fa5.js',
            'assets/string-07c0498b.js',
            'assets/index-9fa1e778.js',
            'assets/index-3121cc12.js',
            'assets/index-73814c06.js',
            'assets/index-e0023ec7.js',
            'assets/vue.esm-bundler-f95a757f.js',
            'assets/decorateStory-f21d1d8c.js',
          ],
        ),
        __vitePreload(
          () => import('./preview-70f7e44e.js'),
          [
            'assets/preview-70f7e44e.js',
            'assets/index-73814c06.js',
            'assets/index-3121cc12.js',
            'assets/make-decorator-8ccb3ddb.js',
          ],
        ),
        __vitePreload(
          () => import('./preview-f034d429.js'),
          [
            'assets/preview-f034d429.js',
            'assets/index-3121cc12.js',
            'assets/index-73814c06.js',
          ],
        ),
        __vitePreload(
          () => import('./preview-12d6041b.js'),
          [
            'assets/preview-12d6041b.js',
            'assets/index-73814c06.js',
            'assets/make-decorator-8ccb3ddb.js',
            'assets/index-3121cc12.js',
          ],
        ),
        __vitePreload(
          () => import('./preview-3ac3aeab.js'),
          [
            'assets/preview-3ac3aeab.js',
            'assets/index-73814c06.js',
            'assets/index-3121cc12.js',
          ],
        ),
        __vitePreload(
          () => import('./preview-80daa81c.js'),
          [
            'assets/preview-80daa81c.js',
            'assets/index-73814c06.js',
            'assets/index-3121cc12.js',
          ],
        ),
        __vitePreload(
          () => import('./preview-2cd84083.js'),
          [
            'assets/preview-2cd84083.js',
            'assets/index-73814c06.js',
            'assets/index-3121cc12.js',
          ],
        ),
        __vitePreload(
          () => import('./preview-58b4edfe.js'),
          [
            'assets/preview-58b4edfe.js',
            'assets/index-73814c06.js',
            'assets/instrumenter-68c1f6a0.js',
            'assets/index-3121cc12.js',
          ],
        ),
        __vitePreload(() => import('./preview-356c9ae2.js'), []),
      ]),
    ),
  preview = new PreviewWeb();
window.__STORYBOOK_PREVIEW__ = preview;
window.__STORYBOOK_STORY_STORE__ = preview.storyStore;
window.__STORYBOOK_CLIENT_API__ = new ClientApi({
  storyStore: preview.storyStore,
});
preview.initialize({ importFn, getProjectAnnotations });
export {
  ClientApi as C,
  Events as E,
  FORCE_REMOUNT as F,
  IGNORED_EXCEPTION as I,
  NAVIGATE_URL as N,
  PreviewWeb as P,
  STORY_CHANGED as S,
  shams as a,
  browser as b,
  combineParameters as c,
  dedent as d,
  createChannel$1 as e,
  addons as f,
  SELECT_STORY as g,
  useMemo as h,
  STORY_RENDER_PHASE_CHANGED as i,
  SET_CURRENT_STORY as j,
  filterArgTypes as k,
  fastDeepEqual as l,
  mapValues_1 as m,
  isSymbolExports as n,
  isRegex as o,
  sanitizeStoryContextUpdate as s,
  useEffect as u,
};
//# sourceMappingURL=iframe-5917f10b.js.map