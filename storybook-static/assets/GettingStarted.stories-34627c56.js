import './index-e0023ec7.js';
import { c as e, A as s, M as p } from './Props-65c0891f.js';
import './index-3121cc12.js';
import './jsx-runtime-c8b955b8.js';
import './index-73814c06.js';
import './iframe-5917f10b.js';
import './index-681e4b07-fb702c61.js';
import './index-e51aae5b.js';
import './string-07c0498b.js';
function r() {
  return (
    (r = Object.assign
      ? Object.assign.bind()
      : function (i) {
          for (var t = 1; t < arguments.length; t++) {
            var o = arguments[t];
            for (var l in o)
              Object.prototype.hasOwnProperty.call(o, l) && (i[l] = o[l]);
          }
          return i;
        }),
    r.apply(this, arguments)
  );
}
const u = {},
  c = 'wrapper';
function a({ components: i, ...t }) {
  return e(
    c,
    r({}, u, t, { components: i, mdxType: 'MDXLayout' }),
    e(p, { title: 'Example/Getting Started', mdxType: 'Meta' }),
    e('h1', null, "Connoisseur's Delight: the luxury online coffee shop"),
    e('h2', null, 'About'),
    e(
      'p',
      null,
      `This ecommorce allows all coffee lovers to discover and enjoy carfully selected blends from the comfort
of their home.`,
    ),
    e('h1', null, 'Getting Started'),
    e('h2', null, "How to run Connoisseur's Delight?"),
    e('h3', null, '1) clone the repo'),
    e(
      'p',
      null,
      'First and foremost, you can find ',
      e(
        'a',
        { parentName: 'p', href: 'https://github.com/DevilsDomain/VueSPA.git' },
        "Connoisseur's Delight",
      ),
      `
on my github page. You can either fork the repository or directly clone it into your local enviroment with
the fallowing command: `,
      e('br', null),
      `
`,
      e('inlineCode', { parentName: 'p' }, 'git clone <repoLink>'),
    ),
    e('h3', null, '2) Install Dependencies'),
    e(
      'p',
      null,
      'Install all the dependncies using ',
      e('br', null),
      `
`,
      e('inlineCode', { parentName: 'p' }, 'npm i'),
    ),
    e('h3', null, '3) Run the Project!'),
    e(
      'p',
      null,
      'now that u have everything installed, u are ready to run the project with ',
      e('br', null),
      `
`,
      e('inlineCode', { parentName: 'p' }, 'npm run dev'),
    ),
    e('h1', null, 'Tools used in the Project'),
    e(
      'h2',
      null,
      'This project uses a few helper tools to make the developer experince better',
    ),
    e(
      'ul',
      null,
      e(
        'li',
        { parentName: 'ul' },
        e(
          'a',
          {
            parentName: 'li',
            href: 'https://eslint.org/docs/latest/use/getting-started',
          },
          'Eslint',
        ),
        ' - used for enforcing good code practices and conventions, with the aim of making the code more consistent and avoid bugs.',
      ),
      e(
        'li',
        { parentName: 'ul' },
        e(
          'a',
          {
            parentName: 'li',
            href: 'https://prettier.io/docs/en/install.html',
          },
          'Prettier',
        ),
        ' - Prettier is an opinionated code formatter which enforces a consistent code style and in this project is used as a ',
        e(
          'a',
          {
            parentName: 'li',
            href: 'https://github.com/prettier/eslint-config-prettier',
          },
          'plugin',
        ),
        ' for Eslint',
      ),
      e(
        'li',
        { parentName: 'ul' },
        e(
          'a',
          { parentName: 'li', href: 'https://github.com/typicode/husky' },
          'Husky',
        ),
        ' - helps to create and work with githooks and run all the scripts that need to work at certain stages.',
      ),
      e(
        'li',
        { parentName: 'ul' },
        e(
          'a',
          { parentName: 'li', href: 'https://vitest.dev/guide/' },
          'Vitest',
        ),
        ' - is the native testing library created especially for Vue.',
      ),
    ),
    e('h1', null, 'Scripts'),
    e(
      'h2',
      null,
      'This projects comes with quite a few scripts which you will be using, lets get to know them!',
    ),
    e(
      'h3',
      null,
      'note you can run all of these with the fallowing way, ',
      e('inlineCode', { parentName: 'h3' }, 'npm run <commandName>'),
    ),
    e(
      'ul',
      null,
      e(
        'li',
        { parentName: 'ul' },
        e('inlineCode', { parentName: 'li' }, 'dev'),
        ' - used to start the developemnt server',
      ),
      e(
        'li',
        { parentName: 'ul' },
        e('inlineCode', { parentName: 'li' }, 'build'),
        ' - npm run build creates a build directory with a production build of your app',
      ),
      e(
        'li',
        { parentName: 'ul' },
        e('inlineCode', { parentName: 'li' }, 'preview'),
        " - it will boot up a local static web server that serves the files. It's an easy way to check if the production build looks OK in your local environment.",
      ),
      e(
        'li',
        { parentName: 'ul' },
        e('inlineCode', { parentName: 'li' }, 'format'),
        ' - will format the code according to the specified rules to keep it consistent.',
      ),
      e(
        'li',
        { parentName: 'ul' },
        e('inlineCode', { parentName: 'li' }, 'check'),
        ' - will run prettier and check for any code style inconsistencies.',
      ),
      e(
        'li',
        { parentName: 'ul' },
        e('inlineCode', { parentName: 'li' }, 'prepare'),
        ' - used to set up husky',
      ),
      e(
        'li',
        { parentName: 'ul' },
        e('inlineCode', { parentName: 'li' }, 'lint'),
        ' - will run Eslint and lint your project for all the specified file extentions, will be telling u possible warnings or errors in your code style.',
      ),
      e(
        'li',
        { parentName: 'ul' },
        e('inlineCode', { parentName: 'li' }, 'test'),
        ' - used to run the .test files in the /tests directory.',
      ),
      e(
        'li',
        { parentName: 'ul' },
        e('inlineCode', { parentName: 'li' }, 'storybook'),
        ' - will run storybook where you can see all your components',
      ),
      e(
        'li',
        { parentName: 'ul' },
        e('inlineCode', { parentName: 'li' }, 'build-storybook'),
        ' - will build the components ready for production.',
      ),
    ),
    e('h1', null, 'Git Hooks and Actions'),
    e('h2', null, 'Git Hooks'),
    e(
      'p',
      null,
      'This project has a git hook names ',
      e('inlineCode', { parentName: 'p' }, 'lint-staged'),
      ` which will run prettier before commiting the
files chnages to make sure everything is formated correctly.`,
    ),
    e('h2', null, 'Git Actions'),
    e(
      'h3',
      null,
      'You can find all the git actions for this project in the .github/workflows folder.',
    ),
    e(
      'ul',
      null,
      e(
        'li',
        { parentName: 'ul' },
        'eslint+prettier will make sure the code is properly formatted and linted',
      ),
      e(
        'li',
        { parentName: 'ul' },
        'test will run all the tests in the project.',
      ),
    ),
  );
}
a.isMDXComponent = !0;
const h = () => {
  throw new Error('Docs-only story');
};
h.parameters = { docsOnly: !0 };
const n = { title: 'Example/Getting Started', includeStories: ['__page'] },
  m = {};
n.parameters = n.parameters || {};
n.parameters.docs = {
  ...(n.parameters.docs || {}),
  page: () =>
    e(s, { mdxStoryNameToKey: m, mdxComponentAnnotations: n }, e(a, null)),
};
const C = ['__page'];
export { C as __namedExportsOrder, h as __page, n as default };
//# sourceMappingURL=GettingStarted.stories-34627c56.js.map
