import { M as d } from './Button-34361c8b.js';
import {
  b as m,
  e as s,
  f as c,
  t as p,
  g as n,
  i as r,
  j as g,
  k as v,
  o,
} from './vue.esm-bundler-f95a757f.js';
import { _ as f } from './_plugin-vue_export-helper-c27b6911.js';
const u = {
    name: 'my-header',
    components: { MyButton: d },
    props: { user: { type: Object } },
    emits: ['login', 'logout', 'createAccount'],
  },
  h = { class: 'wrapper' },
  y = g(
    '<div><svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z" fill="#FFF"></path><path d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z" fill="#555AB9"></path><path d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z" fill="#91BAF8"></path></g></svg><h1>Acme</h1></div>',
    1,
  ),
  k = { key: 0, class: 'welcome' };
function _(a, e, t, b, w, z) {
  const l = v('my-button');
  return (
    o(),
    m('header', null, [
      s('div', h, [
        y,
        s('div', null, [
          t.user
            ? (o(),
              m('span', k, [
                c('Welcome, '),
                s('b', null, p(t.user.name), 1),
                c('!'),
              ]))
            : n('', !0),
          t.user
            ? (o(),
              r(l, {
                key: 1,
                size: 'small',
                onClick: e[0] || (e[0] = (i) => a.$emit('logout')),
                label: 'Log out',
              }))
            : n('', !0),
          t.user
            ? n('', !0)
            : (o(),
              r(l, {
                key: 2,
                size: 'small',
                onClick: e[1] || (e[1] = (i) => a.$emit('login')),
                label: 'Log in',
              })),
          t.user
            ? n('', !0)
            : (o(),
              r(l, {
                key: 3,
                primary: '',
                size: 'small',
                onClick: e[2] || (e[2] = (i) => a.$emit('createAccount')),
                label: 'Sign up',
              })),
        ]),
      ]),
    ])
  );
}
const V = f(u, [['render', _]]);
u.__docgenInfo = {
  displayName: 'my-header',
  exportName: 'default',
  description: '',
  tags: {},
  props: [{ name: 'user', type: { name: 'object' } }],
  events: [{ name: 'logout' }, { name: 'login' }, { name: 'createAccount' }],
};
export { V as M };
//# sourceMappingURL=Header-6127fd7e.js.map
