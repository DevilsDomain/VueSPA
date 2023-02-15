import { M as e } from './Header-6127fd7e.js';
import './Button-34361c8b.js';
import './vue.esm-bundler-f95a757f.js';
import './_plugin-vue_export-helper-c27b6911.js';
const c = {
    title: 'Example/Header',
    component: e,
    parameters: {
      storySource: {
        source: `import MyHeader from './Header.vue';

export default {
  title: 'Example/Header',
  component: MyHeader,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/vue/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => ({
  // Components used in your story \`template\` are defined in the \`components\` object
  components: { MyHeader },
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method
  setup() {
    // Story args can be spread into the returned object
    return { ...args };
  },
  // Then, the spread values can be accessed directly in the template
  template: '<my-header :user="user" />',
});

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: 'Jane Doe',
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  user: null,
};
`,
        locationsMap: {
          'logged-in': {
            startLoc: { col: 17, line: 12 },
            endLoc: { col: 2, line: 22 },
            startBody: { col: 17, line: 12 },
            endBody: { col: 2, line: 22 },
          },
          'logged-out': {
            startLoc: { col: 17, line: 12 },
            endLoc: { col: 2, line: 22 },
            startBody: { col: 17, line: 12 },
            endBody: { col: 2, line: 22 },
          },
        },
      },
      layout: 'fullscreen',
    },
  },
  n = (t) => ({
    components: { MyHeader: e },
    setup() {
      return { ...t };
    },
    template: '<my-header :user="user" />',
  }),
  o = n.bind({});
o.args = { user: { name: 'Jane Doe' } };
const r = n.bind({});
r.args = { user: null };
const p = ['LoggedIn', 'LoggedOut'];
export {
  o as LoggedIn,
  r as LoggedOut,
  p as __namedExportsOrder,
  c as default,
};
//# sourceMappingURL=Header.stories-0f3a507e.js.map
