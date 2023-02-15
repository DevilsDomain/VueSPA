import { w as s } from './index-73814c06.js';
import './index-3121cc12.js';
import { f as m, S as v, g as c } from './iframe-5917f10b.js';
import { m as u } from './make-decorator-8ccb3ddb.js';
var p = 'links',
  f = s.document,
  k = s.HTMLElement,
  L = function (e) {
    return m.getChannel().emit(c, e);
  },
  l = function (e) {
    var n = e.target;
    if (n instanceof k) {
      var d = n,
        a = d.dataset,
        i = a.sbKind,
        o = a.sbStory;
      (i || o) && (e.preventDefault(), L({ kind: i, story: o }));
    }
  },
  r = !1,
  h = function () {
    r || ((r = !0), f.addEventListener('click', l));
  },
  E = function () {
    r && ((r = !1), f.removeEventListener('click', l));
  },
  g = u({
    name: 'withLinks',
    parameterName: p,
    wrapper: function (e, n) {
      return h(), m.getChannel().once(v, E), e(n);
    },
  });
module && module.hot && module.hot.decline && module.hot.decline();
var C = [g];
export { C as decorators };
//# sourceMappingURL=preview-70f7e44e.js.map
