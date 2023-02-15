import { A as c } from './index-3121cc12.js';
import './index-73814c06.js';
function p(r, n, t, a, e, s, i) {
  try {
    var o = r[s](i),
      u = o.value;
  } catch (f) {
    t(f);
    return;
  }
  o.done ? n(u) : Promise.resolve(u).then(a, e);
}
function g(r) {
  return function () {
    var n = this,
      t = arguments;
    return new Promise(function (a, e) {
      var s = r.apply(n, t);
      function i(u) {
        p(s, a, e, i, o, 'next', u);
      }
      function o(u) {
        p(s, a, e, i, o, 'throw', u);
      }
      i(void 0);
    });
  };
}
var v = {
  docs: {
    getContainer: (function () {
      var r = g(
        regeneratorRuntime.mark(function t() {
          return regeneratorRuntime.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (e.next = 2),
                    c(
                      () => import('./index-b3fe6f24.js'),
                      [
                        'assets/index-b3fe6f24.js',
                        'assets/Props-65c0891f.js',
                        'assets/index-e0023ec7.js',
                        'assets/index-73814c06.js',
                        'assets/iframe-5917f10b.js',
                        'assets/index-3121cc12.js',
                        'assets/index-681e4b07-fb702c61.js',
                        'assets/index-e51aae5b.js',
                        'assets/jsx-runtime-c8b955b8.js',
                        'assets/string-07c0498b.js',
                      ],
                    )
                  );
                case 2:
                  return e.abrupt('return', e.sent.DocsContainer);
                case 3:
                case 'end':
                  return e.stop();
              }
          }, t);
        }),
      );
      function n() {
        return r.apply(this, arguments);
      }
      return n;
    })(),
    getPage: (function () {
      var r = g(
        regeneratorRuntime.mark(function t() {
          return regeneratorRuntime.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (e.next = 2),
                    c(
                      () => import('./index-b3fe6f24.js'),
                      [
                        'assets/index-b3fe6f24.js',
                        'assets/Props-65c0891f.js',
                        'assets/index-e0023ec7.js',
                        'assets/index-73814c06.js',
                        'assets/iframe-5917f10b.js',
                        'assets/index-3121cc12.js',
                        'assets/index-681e4b07-fb702c61.js',
                        'assets/index-e51aae5b.js',
                        'assets/jsx-runtime-c8b955b8.js',
                        'assets/string-07c0498b.js',
                      ],
                    )
                  );
                case 2:
                  return e.abrupt('return', e.sent.DocsPage);
                case 3:
                case 'end':
                  return e.stop();
              }
          }, t);
        }),
      );
      function n() {
        return r.apply(this, arguments);
      }
      return n;
    })(),
  },
};
export { v as parameters };
//# sourceMappingURL=preview-f034d429.js.map
