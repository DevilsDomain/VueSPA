import { w as m, o as W } from './index-73814c06.js';
import { f as G, F as j, i as F, j as $, I as H } from './iframe-5917f10b.js';
var S;
(function (n) {
  (n.DONE = 'done'),
    (n.ERROR = 'error'),
    (n.ACTIVE = 'active'),
    (n.WAITING = 'waiting');
})(S || (S = {}));
var R;
function E(n) {
  return (
    (E =
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
    E(n)
  );
}
function V(n, t) {
  if (n == null) return {};
  var r = z(n, t),
    e,
    u;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(n);
    for (u = 0; u < s.length; u++)
      (e = s[u]),
        !(t.indexOf(e) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(n, e) &&
          (r[e] = n[e]);
  }
  return r;
}
function z(n, t) {
  if (n == null) return {};
  var r = {},
    e = Object.keys(n),
    u,
    s;
  for (s = 0; s < e.length; s++)
    (u = e[s]), !(t.indexOf(u) >= 0) && (r[u] = n[u]);
  return r;
}
function X(n) {
  var t = q(n, 'string');
  return E(t) === 'symbol' ? t : String(t);
}
function q(n, t) {
  if (E(n) !== 'object' || n === null) return n;
  var r = n[Symbol.toPrimitive];
  if (r !== void 0) {
    var e = r.call(n, t || 'default');
    if (E(e) !== 'object') return e;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(n);
}
function w(n) {
  return Z(n) || Q(n) || M(n) || J();
}
function J() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Q(n) {
  if (
    (typeof Symbol < 'u' && n[Symbol.iterator] != null) ||
    n['@@iterator'] != null
  )
    return Array.from(n);
}
function Z(n) {
  if (Array.isArray(n)) return C(n);
}
function N(n, t, r) {
  return (
    t in n
      ? Object.defineProperty(n, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (n[t] = r),
    n
  );
}
function tt(n, t) {
  if (!(n instanceof t))
    throw new TypeError('Cannot call a class as a function');
}
function P(n, t) {
  for (var r = 0; r < t.length; r++) {
    var e = t[r];
    (e.enumerable = e.enumerable || !1),
      (e.configurable = !0),
      'value' in e && (e.writable = !0),
      Object.defineProperty(n, e.key, e);
  }
}
function et(n, t, r) {
  return (
    t && P(n.prototype, t),
    r && P(n, r),
    Object.defineProperty(n, 'prototype', { writable: !1 }),
    n
  );
}
function L(n, t) {
  return it(n) || rt(n, t) || M(n, t) || nt();
}
function nt() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function M(n, t) {
  if (n) {
    if (typeof n == 'string') return C(n, t);
    var r = Object.prototype.toString.call(n).slice(8, -1);
    if (
      (r === 'Object' && n.constructor && (r = n.constructor.name),
      r === 'Map' || r === 'Set')
    )
      return Array.from(n);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return C(n, t);
  }
}
function C(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var r = 0, e = new Array(t); r < t; r++) e[r] = n[r];
  return e;
}
function rt(n, t) {
  var r =
    n == null
      ? null
      : (typeof Symbol < 'u' && n[Symbol.iterator]) || n['@@iterator'];
  if (r != null) {
    var e = [],
      u = !0,
      s = !1,
      d,
      v;
    try {
      for (
        r = r.call(n);
        !(u = (d = r.next()).done) && (e.push(d.value), !(t && e.length === t));
        u = !0
      );
    } catch (c) {
      (s = !0), (v = c);
    } finally {
      try {
        !u && r.return != null && r.return();
      } finally {
        if (s) throw v;
      }
    }
    return e;
  }
}
function it(n) {
  if (Array.isArray(n)) return n;
}
var O = {
    CALL: 'instrumenter/call',
    SYNC: 'instrumenter/sync',
    START: 'instrumenter/start',
    BACK: 'instrumenter/back',
    GOTO: 'instrumenter/goto',
    NEXT: 'instrumenter/next',
    END: 'instrumenter/end',
  },
  Y =
    ((R = m.FEATURES) === null || R === void 0
      ? void 0
      : R.interactionsDebugger) !== !0,
  x = { debugger: !Y, start: !1, back: !1, goto: !1, next: !1, end: !1 },
  k = new Error(
    'This function ran after the play function completed. Did you forget to `await` it?',
  ),
  U = function (t) {
    return Object.prototype.toString.call(t) === '[object Object]';
  },
  at = function (t) {
    return Object.prototype.toString.call(t) === '[object Module]';
  },
  st = function (t) {
    if (!U(t) && !at(t)) return !1;
    if (t.constructor === void 0) return !0;
    var r = t.constructor.prototype;
    return !(
      !U(r) || Object.prototype.hasOwnProperty.call(r, 'isPrototypeOf') === !1
    );
  },
  ot = function (t) {
    try {
      return new t.constructor();
    } catch {
      return {};
    }
  },
  A = function () {
    return {
      renderPhase: void 0,
      isDebugging: !1,
      isPlaying: !1,
      isLocked: !1,
      cursor: 0,
      calls: [],
      shadowCalls: [],
      callRefsByResult: new Map(),
      chainedCallIds: new Set(),
      parentId: void 0,
      playUntil: void 0,
      resolvers: {},
      syncTimeout: void 0,
      forwardedException: void 0,
    };
  },
  B = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
      e = (r ? t.shadowCalls : t.calls).filter(function (s) {
        return s.retain;
      });
    if (e.length) {
      var u = new Map(
        Array.from(t.callRefsByResult.entries()).filter(function (s) {
          var d = L(s, 2),
            v = d[1];
          return v.retain;
        }),
      );
      return { cursor: e.length, calls: e, callRefsByResult: u };
    }
  },
  ut = (function () {
    function n() {
      var t = this;
      tt(this, n),
        (this.channel = void 0),
        (this.initialized = !1),
        (this.state = void 0),
        (this.channel = G.getChannel()),
        (this.state =
          m.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__ ||
          {});
      var r = function (o) {
        var i = o.storyId,
          l = o.isPlaying,
          y = l === void 0 ? !0 : l,
          h = o.isDebugging,
          a = h === void 0 ? !1 : h,
          f = t.getState(i);
        t.setState(
          i,
          Object.assign({}, A(), B(f, a), {
            shadowCalls: a ? f.shadowCalls : [],
            chainedCallIds: a ? f.chainedCallIds : new Set(),
            playUntil: a ? f.playUntil : void 0,
            isPlaying: y,
            isDebugging: a,
          }),
        ),
          a || t.sync(i);
      };
      this.channel.on(j, r),
        this.channel.on(F, function (c) {
          var o = c.storyId,
            i = c.newPhase,
            l = t.getState(o),
            y = l.isDebugging,
            h = l.forwardedException;
          if (
            (t.setState(o, { renderPhase: i }),
            i === 'playing' && r({ storyId: o, isDebugging: y }),
            i === 'played' &&
              (t.setState(o, {
                isLocked: !1,
                isPlaying: !1,
                isDebugging: !1,
                forwardedException: void 0,
              }),
              h))
          )
            throw h;
        }),
        this.channel.on($, function () {
          t.initialized ? t.cleanup() : (t.initialized = !0);
        });
      var e = function (o) {
          var i = o.storyId,
            l = o.playUntil;
          t.getState(i).isDebugging ||
            t.setState(i, function (h) {
              var a = h.calls;
              return {
                calls: [],
                shadowCalls: a.map(function (f) {
                  return Object.assign({}, f, { status: S.WAITING });
                }),
                isDebugging: !0,
              };
            });
          var y = t.getLog(i);
          t.setState(i, function (h) {
            var a,
              f = h.shadowCalls,
              _ = f.findIndex(function (g) {
                return g.id === y[0].callId;
              });
            return {
              playUntil:
                l ||
                ((a = f
                  .slice(0, _)
                  .filter(function (g) {
                    return g.interceptable;
                  })
                  .slice(-1)[0]) === null || a === void 0
                  ? void 0
                  : a.id),
            };
          }),
            t.channel.emit(j, { storyId: i, isDebugging: !0 });
        },
        u = function (o) {
          var i,
            l = o.storyId,
            y = t.getState(l),
            h = y.isDebugging,
            a = t.getLog(l),
            f = h
              ? a.findIndex(function (_) {
                  var g = _.status;
                  return g === S.WAITING;
                })
              : a.length;
          e({
            storyId: l,
            playUntil:
              (i = a[f - 2]) === null || i === void 0 ? void 0 : i.callId,
          });
        },
        s = function (o) {
          var i = o.storyId,
            l = o.callId,
            y = t.getState(i),
            h = y.calls,
            a = y.shadowCalls,
            f = y.resolvers,
            _ = h.find(function (I) {
              var T = I.id;
              return T === l;
            }),
            g = a.find(function (I) {
              var T = I.id;
              return T === l;
            });
          if (!_ && g && Object.values(f).length > 0) {
            var p,
              b =
                (p = t.getLog(i).find(function (I) {
                  return I.status === S.WAITING;
                })) === null || p === void 0
                  ? void 0
                  : p.callId;
            g.id !== b && t.setState(i, { playUntil: g.id }),
              Object.values(f).forEach(function (I) {
                return I();
              });
          } else e({ storyId: i, playUntil: l });
        },
        d = function (o) {
          var i = o.storyId,
            l = t.getState(i),
            y = l.resolvers;
          if (Object.values(y).length > 0)
            Object.values(y).forEach(function (f) {
              return f();
            });
          else {
            var h,
              a =
                (h = t.getLog(i).find(function (f) {
                  return f.status === S.WAITING;
                })) === null || h === void 0
                  ? void 0
                  : h.callId;
            a ? e({ storyId: i, playUntil: a }) : v({ storyId: i });
          }
        },
        v = function (o) {
          var i = o.storyId;
          t.setState(i, { playUntil: void 0, isDebugging: !1 }),
            Object.values(t.getState(i).resolvers).forEach(function (l) {
              return l();
            });
        };
      this.channel.on(O.START, e),
        this.channel.on(O.BACK, u),
        this.channel.on(O.GOTO, s),
        this.channel.on(O.NEXT, d),
        this.channel.on(O.END, v);
    }
    return (
      et(n, [
        {
          key: 'getState',
          value: function (r) {
            return this.state[r] || A();
          },
        },
        {
          key: 'setState',
          value: function (r, e) {
            var u = this.getState(r),
              s = typeof e == 'function' ? e(u) : e;
            (this.state = Object.assign(
              {},
              this.state,
              N({}, r, Object.assign({}, u, s)),
            )),
              (m.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__ =
                this.state);
          },
        },
        {
          key: 'cleanup',
          value: function () {
            (this.state = Object.entries(this.state).reduce(function (r, e) {
              var u = L(e, 2),
                s = u[0],
                d = u[1],
                v = B(d);
              return v && (r[s] = Object.assign(A(), v)), r;
            }, {})),
              this.channel.emit(O.SYNC, { controlStates: x, logItems: [] }),
              (m.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__ =
                this.state);
          },
        },
        {
          key: 'getLog',
          value: function (r) {
            var e = this.getState(r),
              u = e.calls,
              s = e.shadowCalls,
              d = w(s);
            u.forEach(function (c, o) {
              d[o] = c;
            });
            var v = new Set();
            return d.reduceRight(function (c, o) {
              return (
                o.args.forEach(function (i) {
                  i != null && i.__callId__ && v.add(i.__callId__);
                }),
                o.path.forEach(function (i) {
                  i.__callId__ && v.add(i.__callId__);
                }),
                o.interceptable &&
                  !v.has(o.id) &&
                  (c.unshift({ callId: o.id, status: o.status }), v.add(o.id)),
                c
              );
            }, []);
          },
        },
        {
          key: 'instrument',
          value: function (r, e) {
            var u = this;
            if (!st(r)) return r;
            var s = e.mutate,
              d = s === void 0 ? !1 : s,
              v = e.path,
              c = v === void 0 ? [] : v;
            return Object.keys(r).reduce(
              function (o, i) {
                var l = r[i];
                return typeof l != 'function'
                  ? ((o[i] = u.instrument(
                      l,
                      Object.assign({}, e, { path: c.concat(i) }),
                    )),
                    o)
                  : typeof l.__originalFn__ == 'function'
                  ? ((o[i] = l), o)
                  : ((o[i] = function () {
                      for (
                        var y = arguments.length, h = new Array(y), a = 0;
                        a < y;
                        a++
                      )
                        h[a] = arguments[a];
                      return u.track(i, l, h, e);
                    }),
                    (o[i].__originalFn__ = l),
                    Object.defineProperty(o[i], 'name', {
                      value: i,
                      writable: !1,
                    }),
                    Object.keys(l).length > 0 &&
                      Object.assign(
                        o[i],
                        u.instrument(
                          Object.assign({}, l),
                          Object.assign({}, e, { path: c.concat(i) }),
                        ),
                      ),
                    o);
              },
              d ? r : ot(r),
            );
          },
        },
        {
          key: 'track',
          value: function (r, e, u, s) {
            var d,
              v,
              c,
              o,
              i =
                (u == null || (d = u[0]) === null || d === void 0
                  ? void 0
                  : d.__storyId__) ||
                ((v = m.window.__STORYBOOK_PREVIEW__) === null ||
                v === void 0 ||
                (c = v.urlStore) === null ||
                c === void 0 ||
                (o = c.selection) === null ||
                o === void 0
                  ? void 0
                  : o.storyId),
              l = this.getState(i),
              y = l.cursor,
              h = l.parentId;
            this.setState(i, { cursor: y + 1 });
            var a = ''
                .concat(h || i, ' [')
                .concat(y, '] ')
                .concat(r),
              f = s.path,
              _ = f === void 0 ? [] : f,
              g = s.intercept,
              p = g === void 0 ? !1 : g,
              b = s.retain,
              I = b === void 0 ? !1 : b,
              T = typeof p == 'function' ? p(r, _) : p,
              D = {
                id: a,
                parentId: h,
                storyId: i,
                cursor: y,
                path: _,
                method: r,
                args: u,
                interceptable: T,
                retain: I,
              },
              K = (T ? this.intercept : this.invoke).call(this, e, D, s);
            return this.instrument(
              K,
              Object.assign({}, s, {
                mutate: !0,
                path: [{ __callId__: D.id }],
              }),
            );
          },
        },
        {
          key: 'intercept',
          value: function (r, e, u) {
            var s = this,
              d = this.getState(e.storyId),
              v = d.chainedCallIds,
              c = d.isDebugging,
              o = d.playUntil,
              i = v.has(e.id);
            return !c || i || o
              ? (o === e.id && this.setState(e.storyId, { playUntil: void 0 }),
                this.invoke(r, e, u))
              : new Promise(function (l) {
                  s.setState(e.storyId, function (y) {
                    var h = y.resolvers;
                    return {
                      isLocked: !1,
                      resolvers: Object.assign({}, h, N({}, e.id, l)),
                    };
                  });
                }).then(function () {
                  return (
                    s.setState(e.storyId, function (l) {
                      var y = l.resolvers,
                        h = e.id;
                      y[h];
                      var a = V(y, [h].map(X));
                      return { isLocked: !0, resolvers: a };
                    }),
                    s.invoke(r, e, u)
                  );
                });
          },
        },
        {
          key: 'invoke',
          value: function (r, e, u) {
            var s = this,
              d = this.getState(e.storyId),
              v = d.callRefsByResult,
              c = d.forwardedException,
              o = d.renderPhase,
              i = Object.assign({}, e, {
                args: e.args.map(function (a) {
                  if (v.has(a)) return v.get(a);
                  if (a instanceof m.window.HTMLElement) {
                    var f = a.prefix,
                      _ = a.localName,
                      g = a.id,
                      p = a.classList,
                      b = a.innerText,
                      I = Array.from(p);
                    return {
                      __element__: {
                        prefix: f,
                        localName: _,
                        id: g,
                        classNames: I,
                        innerText: b,
                      },
                    };
                  }
                  return a;
                }),
              });
            e.path.forEach(function (a) {
              a != null &&
                a.__callId__ &&
                s.setState(e.storyId, function (f) {
                  var _ = f.chainedCallIds;
                  return {
                    chainedCallIds: new Set(Array.from(_).concat(a.__callId__)),
                  };
                });
            });
            var l = function (f) {
              if (f instanceof Error) {
                var _ = f.name,
                  g = f.message,
                  p = f.stack,
                  b = { name: _, message: g, stack: p };
                if (
                  (s.update(
                    Object.assign({}, i, { status: S.ERROR, exception: b }),
                  ),
                  s.setState(e.storyId, function (I) {
                    return {
                      callRefsByResult: new Map(
                        [].concat(w(Array.from(I.callRefsByResult.entries())), [
                          [f, { __callId__: e.id, retain: e.retain }],
                        ]),
                      ),
                    };
                  }),
                  e.interceptable && f !== k)
                )
                  throw H;
                return s.setState(e.storyId, { forwardedException: f }), f;
              }
              throw f;
            };
            try {
              if (c)
                throw (
                  (this.setState(e.storyId, { forwardedException: void 0 }), c)
                );
              if (o === 'played' && !e.retain) throw k;
              var y = u.getArgs
                  ? u.getArgs(e, this.getState(e.storyId))
                  : e.args,
                h = r.apply(
                  void 0,
                  w(
                    y.map(function (a) {
                      return typeof a != 'function' || Object.keys(a).length
                        ? a
                        : function () {
                            var f = s.getState(e.storyId),
                              _ = f.cursor,
                              g = f.parentId;
                            s.setState(e.storyId, {
                              cursor: 0,
                              parentId: e.id,
                            });
                            var p = function () {
                                return s.setState(e.storyId, {
                                  cursor: _,
                                  parentId: g,
                                });
                              },
                              b = a.apply(void 0, arguments);
                            return b instanceof Promise ? b.then(p, p) : p(), b;
                          };
                    }),
                  ),
                );
              return (
                h &&
                  ['object', 'function', 'symbol'].includes(E(h)) &&
                  this.setState(e.storyId, function (a) {
                    return {
                      callRefsByResult: new Map(
                        [].concat(w(Array.from(a.callRefsByResult.entries())), [
                          [h, { __callId__: e.id, retain: e.retain }],
                        ]),
                      ),
                    };
                  }),
                this.update(
                  Object.assign({}, i, {
                    status: h instanceof Promise ? S.ACTIVE : S.DONE,
                  }),
                ),
                h instanceof Promise
                  ? h.then(function (a) {
                      return (
                        s.update(Object.assign({}, i, { status: S.DONE })), a
                      );
                    }, l)
                  : h
              );
            } catch (a) {
              return l(a);
            }
          },
        },
        {
          key: 'update',
          value: function (r) {
            var e = this;
            clearTimeout(this.getState(r.storyId).syncTimeout),
              this.channel.emit(O.CALL, r),
              this.setState(r.storyId, function (u) {
                var s = u.calls,
                  d = s.concat(r).reduce(function (v, c) {
                    return Object.assign(v, N({}, c.id, c));
                  }, {});
                return {
                  calls: Object.values(d).sort(function (v, c) {
                    return v.id.localeCompare(c.id, void 0, { numeric: !0 });
                  }),
                  syncTimeout: setTimeout(function () {
                    return e.sync(r.storyId);
                  }, 0),
                };
              });
          },
        },
        {
          key: 'sync',
          value: function (r) {
            var e = this.getState(r),
              u = e.isLocked,
              s = e.isPlaying,
              d = this.getLog(r),
              v = d.some(function (i) {
                return i.status === S.ACTIVE;
              });
            if (Y || u || v || d.length === 0) {
              this.channel.emit(O.SYNC, { controlStates: x, logItems: d });
              return;
            }
            var c = d.some(function (i) {
                return [S.DONE, S.ERROR].includes(i.status);
              }),
              o = {
                debugger: !0,
                start: c,
                back: c,
                goto: !0,
                next: s,
                end: s,
              };
            this.channel.emit(O.SYNC, { controlStates: o, logItems: d });
          },
        },
      ]),
      n
    );
  })();
function ct(n) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  try {
    var r,
      e,
      u,
      s,
      d = !1,
      v = !1;
    if (
      (((r = m.window.location) === null ||
      r === void 0 ||
      (e = r.search) === null ||
      e === void 0
        ? void 0
        : e.indexOf('instrument=true')) !== -1
        ? (d = !0)
        : ((u = m.window.location) === null ||
          u === void 0 ||
          (s = u.search) === null ||
          s === void 0
            ? void 0
            : s.indexOf('instrument=false')) !== -1 && (v = !0),
      (m.window.parent === m.window && !d) || v)
    )
      return n;
    m.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__ ||
      (m.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__ = new ut());
    var c = m.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__;
    return c.instrument(n, t);
  } catch (o) {
    return W.warn(o), n;
  }
}
export { ct as i };
//# sourceMappingURL=instrumenter-68c1f6a0.js.map
