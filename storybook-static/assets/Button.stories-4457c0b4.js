import { M as n } from './Button-34361c8b.js';
import './vue.esm-bundler-f95a757f.js';
import './_plugin-vue_export-helper-c27b6911.js';
const p = {
    parameters: {
      storySource: {
        source: `import MyButton from './Button.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: MyButton,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: {},
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story \`template\` are defined in the \`components\` object
  components: { MyButton },
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method
  setup() {
    return { args };
  },
  // And then the \`args\` are bound to your component with \`v-bind="args"\`
  template: '<my-button v-bind="args" />',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
`,
        locationsMap: {
          primary: {
            startLoc: { col: 17, line: 19 },
            endLoc: { col: 2, line: 28 },
            startBody: { col: 17, line: 19 },
            endBody: { col: 2, line: 28 },
          },
          secondary: {
            startLoc: { col: 17, line: 19 },
            endLoc: { col: 2, line: 28 },
            startBody: { col: 17, line: 19 },
            endBody: { col: 2, line: 28 },
          },
          large: {
            startLoc: { col: 17, line: 19 },
            endLoc: { col: 2, line: 28 },
            startBody: { col: 17, line: 19 },
            endBody: { col: 2, line: 28 },
          },
          small: {
            startLoc: { col: 17, line: 19 },
            endLoc: { col: 2, line: 28 },
            startBody: { col: 17, line: 19 },
            endBody: { col: 2, line: 28 },
          },
        },
      },
    },
    title: 'Example/Button',
    component: n,
    argTypes: {
      backgroundColor: { control: 'color' },
      onClick: {},
      size: {
        control: { type: 'select' },
        options: ['small', 'medium', 'large'],
      },
    },
  },
  o = (t) => ({
    components: { MyButton: n },
    setup() {
      return { args: t };
    },
    template: '<my-button v-bind="args" />',
  }),
  e = o.bind({});
e.args = { primary: !0, label: 'Button' };
const r = o.bind({});
r.args = { label: 'Button' };
const l = o.bind({});
l.args = { size: 'large', label: 'Button' };
const s = o.bind({});
s.args = { size: 'small', label: 'Button' };
const d = ['Primary', 'Secondary', 'Large', 'Small'];
export {
  l as Large,
  e as Primary,
  r as Secondary,
  s as Small,
  d as __namedExportsOrder,
  p as default,
};
//# sourceMappingURL=Button.stories-4457c0b4.js.map
