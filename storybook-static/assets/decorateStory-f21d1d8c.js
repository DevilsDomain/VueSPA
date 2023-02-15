import { d as y, s as h } from './iframe-5917f10b.js';
import { h as m, s as v, c as w } from './vue.esm-bundler-f95a757f.js';
var f;
function b(e, t) {
  return (
    t || (t = e.slice(0)),
    Object.freeze(
      Object.defineProperties(e, { raw: { value: Object.freeze(t) } }),
    )
  );
}
var E = function (t, n) {
    var a = n.id,
      o = n.component;
    if (!o)
      throw new Error(
        'Unable to render story '.concat(
          a,
          ' as the component annotation is missing from the default export',
        ),
      );
    return m(o, t);
  },
  c = v(null),
  s = null,
  l = w({
    unmounted: function () {
      s = null;
    },
    setup: function () {
      return function () {
        if (!c.value)
          throw new Error('No Vue 3 Story available. Was it set correctly?');
        return m(c.value);
      };
    },
  });
function C(e, t) {
  var n = e.title,
    a = e.name,
    o = e.storyFn,
    r = e.showMain,
    i = e.showError,
    u = e.showException;
  l.config.errorHandler = u;
  var p = o();
  if (!p) {
    i({
      title: 'Expecting a Vue component from the story: "'
        .concat(a, '" of "')
        .concat(n, '".'),
      description: y(
        f ||
          (f = b([
            `
        Did you forget to return the Vue component from the story?
        Use "() => ({ template: '<my-comp></my-comp>' })" or "() => ({ components: MyComp, template: '<my-comp></my-comp>' })" when defining the story.
      `,
          ])),
      ),
    });
    return;
  }
  r(), (c.value = p), s || (s = l.mount(t));
}
function g(e) {
  return typeof e == 'function' ? { render: e, name: e.name } : e;
}
function d(e, t) {
  var n = e;
  return n == null
    ? null
    : t
    ? Object.assign({}, g(n), {
        components: Object.assign({}, n.components || {}, { story: t }),
      })
    : {
        render: function () {
          return m(n);
        },
      };
}
function z(e, t) {
  return t.reduce(
    function (n, a) {
      return function (o) {
        var r,
          i = a(function (u) {
            return (r = n(Object.assign({}, o, h(u)))), r;
          }, o);
        return r || (r = n(o)), i === r ? r : d(i, r);
      };
    },
    function (n) {
      return d(e(n));
    },
  );
}
export { C as a, z as d, E as r, l as s };
//# sourceMappingURL=decorateStory-f21d1d8c.js.map
