import {
  r as s,
  a,
  b as i,
  t as m,
  n as u,
  d as c,
  o as y,
} from './vue.esm-bundler-f95a757f.js';
import { _ as d } from './_plugin-vue_export-helper-c27b6911.js';
const n = {
  name: 'my-button',
  props: {
    label: { type: String, required: !0 },
    primary: { type: Boolean, default: !1 },
    size: {
      type: String,
      validator: function (e) {
        return ['small', 'medium', 'large'].indexOf(e) !== -1;
      },
    },
    backgroundColor: { type: String },
  },
  emits: ['click'],
  setup(e, { emit: t }) {
    return (
      (e = s(e)),
      {
        classes: a(() => ({
          'storybook-button': !0,
          'storybook-button--primary': e.primary,
          'storybook-button--secondary': !e.primary,
          [`storybook-button--${e.size || 'medium'}`]: !0,
        })),
        style: a(() => ({ backgroundColor: e.backgroundColor })),
        onClick() {
          t('click');
        },
      }
    );
  },
};
function b(e, t, r, o, k, p) {
  return (
    y(),
    i(
      'button',
      {
        type: 'button',
        class: u(o.classes),
        onClick: t[0] || (t[0] = (...l) => o.onClick && o.onClick(...l)),
        style: c(o.style),
      },
      m(r.label),
      7,
    )
  );
}
const C = d(n, [['render', b]]);
n.__docgenInfo = {
  displayName: 'my-button',
  exportName: 'default',
  description: '',
  tags: {},
  props: [
    { name: 'label', type: { name: 'string' }, required: !0 },
    {
      name: 'primary',
      type: { name: 'boolean' },
      defaultValue: { func: !1, value: 'false' },
    },
    {
      name: 'size',
      type: { name: 'string' },
      values: ['small', 'medium', 'large'],
    },
    { name: 'backgroundColor', type: { name: 'string' } },
  ],
  events: [{ name: 'click' }],
};
export { C as M };
//# sourceMappingURL=Button-34361c8b.js.map
