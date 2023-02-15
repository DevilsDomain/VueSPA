import { b as n, o as r } from './vue.esm-bundler-f95a757f.js';
import { _ as s } from './_plugin-vue_export-helper-c27b6911.js';
const a = '/storybook/assets/logo-1c3fbefd.svg',
  t = {},
  c = { src: a, alt: '' };
function i(o, m) {
  return r(), n('img', c);
}
const e = s(t, [['render', i]]);
t.__docgenInfo = { displayName: 'Logo', description: '', tags: {} };
const g = {
    parameters: {
      storySource: {
        source: `import Logo from './Logo.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/Logo',
  component: Logo,
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story \`template\` are defined in the \`components\` object
  components: { Logo },
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method
  setup() {
    return { args };
  },
  // And then the \`args\` are bound to your component with \`v-bind="args"\`
  template: '<logo/>',
});

export const Primary = Template.bind({});
`,
        locationsMap: {
          primary: {
            startLoc: { col: 17, line: 10 },
            endLoc: { col: 2, line: 19 },
            startBody: { col: 17, line: 10 },
            endBody: { col: 2, line: 19 },
          },
        },
      },
    },
    title: 'Example/Logo',
    component: e,
  },
  p = (o) => ({
    components: { Logo: e },
    setup() {
      return { args: o };
    },
    template: '<logo/>',
  }),
  u = p.bind({}),
  _ = ['Primary'];
export { u as Primary, _ as __namedExportsOrder, g as default };
//# sourceMappingURL=Logo.stories-1a14b4e7.js.map
