var d = function (t) {
  var p = t.name,
    m = t.parameterName,
    u = t.wrapper,
    s = t.skipIfNoParametersOrOptions,
    f = s === void 0 ? !1 : s,
    o = function (r) {
      return function (a, e) {
        var n = e.parameters && e.parameters[m];
        return (n && n.disable) || (f && !r && !n)
          ? a(e)
          : u(a, e, { options: r, parameters: n });
      };
    };
  return function () {
    for (var i = arguments.length, r = new Array(i), a = 0; a < i; a++)
      r[a] = arguments[a];
    return typeof r[0] == 'function'
      ? o().apply(void 0, r)
      : function () {
          if (arguments.length > 1)
            return r.length > 1
              ? o(r).apply(void 0, arguments)
              : o.apply(void 0, r).apply(void 0, arguments);
          throw new Error(
            'Passing stories directly into '
              .concat(
                p,
                `() is not allowed,
        instead use addDecorator(`,
              )
              .concat(p, ") and pass options with the '")
              .concat(m, "' parameter"),
          );
        };
  };
};
export { d as m };
//# sourceMappingURL=make-decorator-8ccb3ddb.js.map
