import './index-3121cc12.js';
import {
  p as yr,
  w as Tr,
  _ as te,
  q as ne,
  s as oe,
  t as le,
  u as ie,
} from './index-681e4b07-fb702c61.js';
import { r as aa } from './index-e0023ec7.js';
import { m as se, l as ce } from './index-73814c06.js';
import { s as wr } from './index-e51aae5b.js';
import { j as X, a as Er } from './jsx-runtime-c8b955b8.js';
function ve(r, a, e) {
  return (
    a in r
      ? Object.defineProperty(r, a, {
          value: e,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (r[a] = e),
    r
  );
}
function Sa(r, a) {
  return ge(r) || de(r, a) || pe(r, a) || ue();
}
function ue() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function pe(r, a) {
  if (r) {
    if (typeof r == 'string') return ea(r, a);
    var e = Object.prototype.toString.call(r).slice(8, -1);
    if (
      (e === 'Object' && r.constructor && (e = r.constructor.name),
      e === 'Map' || e === 'Set')
    )
      return Array.from(r);
    if (e === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
      return ea(r, a);
  }
}
function ea(r, a) {
  (a == null || a > r.length) && (a = r.length);
  for (var e = 0, t = new Array(a); e < a; e++) t[e] = r[e];
  return t;
}
function de(r, a) {
  var e =
    r == null
      ? null
      : (typeof Symbol < 'u' && r[Symbol.iterator]) || r['@@iterator'];
  if (e != null) {
    var t = [],
      o = !0,
      s = !1,
      p,
      l;
    try {
      for (
        e = e.call(r);
        !(o = (p = e.next()).done) && (t.push(p.value), !(a && t.length === a));
        o = !0
      );
    } catch (f) {
      (s = !0), (l = f);
    } finally {
      try {
        !o && e.return != null && e.return();
      } finally {
        if (s) throw l;
      }
    }
    return t;
  }
}
function ge(r) {
  if (Array.isArray(r)) return r;
}
function W(r) {
  return (
    (W =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (a) {
            return typeof a;
          }
        : function (a) {
            return a &&
              typeof Symbol == 'function' &&
              a.constructor === Symbol &&
              a !== Symbol.prototype
              ? 'symbol'
              : typeof a;
          }),
    W(r)
  );
}
var qa = $r;
$r.displayName = 'jsx';
$r.aliases = [];
function $r(r) {
  (function (a) {
    var e = a.util.clone(a.languages.javascript),
      t = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,
      o = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,
      s = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
    function p(x, m) {
      return (
        (x = x
          .replace(/<S>/g, function () {
            return t;
          })
          .replace(/<BRACES>/g, function () {
            return o;
          })
          .replace(/<SPREAD>/g, function () {
            return s;
          })),
        RegExp(x, m)
      );
    }
    (s = p(s).source),
      (a.languages.jsx = a.languages.extend('markup', e)),
      (a.languages.jsx.tag.pattern = p(
        /<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/
          .source,
      )),
      (a.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/),
      (a.languages.jsx.tag.inside['attr-value'].pattern =
        /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/),
      (a.languages.jsx.tag.inside.tag.inside['class-name'] =
        /^[A-Z]\w*(?:\.[A-Z]\w*)*$/),
      (a.languages.jsx.tag.inside.comment = e.comment),
      a.languages.insertBefore(
        'inside',
        'attr-name',
        { spread: { pattern: p(/<SPREAD>/.source), inside: a.languages.jsx } },
        a.languages.jsx.tag,
      ),
      a.languages.insertBefore(
        'inside',
        'special-attr',
        {
          script: {
            pattern: p(/=<BRACES>/.source),
            alias: 'language-javascript',
            inside: {
              'script-punctuation': {
                pattern: /^=(?=\{)/,
                alias: 'punctuation',
              },
              rest: a.languages.jsx,
            },
          },
        },
        a.languages.jsx.tag,
      );
    var l = function x(m) {
        return m
          ? typeof m == 'string'
            ? m
            : typeof m.content == 'string'
            ? m.content
            : m.content.map(x).join('')
          : '';
      },
      f = function x(m) {
        for (var d = [], h = 0; h < m.length; h++) {
          var b = m[h],
            L = !1;
          if (
            (typeof b != 'string' &&
              (b.type === 'tag' && b.content[0] && b.content[0].type === 'tag'
                ? b.content[0].content[0].content === '</'
                  ? d.length > 0 &&
                    d[d.length - 1].tagName === l(b.content[0].content[1]) &&
                    d.pop()
                  : b.content[b.content.length - 1].content === '/>' ||
                    d.push({
                      tagName: l(b.content[0].content[1]),
                      openedBraces: 0,
                    })
                : d.length > 0 && b.type === 'punctuation' && b.content === '{'
                ? d[d.length - 1].openedBraces++
                : d.length > 0 &&
                  d[d.length - 1].openedBraces > 0 &&
                  b.type === 'punctuation' &&
                  b.content === '}'
                ? d[d.length - 1].openedBraces--
                : (L = !0)),
            (L || typeof b == 'string') &&
              d.length > 0 &&
              d[d.length - 1].openedBraces === 0)
          ) {
            var A = l(b);
            h < m.length - 1 &&
              (typeof m[h + 1] == 'string' || m[h + 1].type === 'plain-text') &&
              ((A += l(m[h + 1])), m.splice(h + 1, 1)),
              h > 0 &&
                (typeof m[h - 1] == 'string' ||
                  m[h - 1].type === 'plain-text') &&
                ((A = l(m[h - 1]) + A), m.splice(h - 1, 1), h--),
              (m[h] = new a.Token('plain-text', A, null, A));
          }
          b.content && typeof b.content != 'string' && x(b.content);
        }
      };
    a.hooks.add('after-tokenize', function (x) {
      (x.language !== 'jsx' && x.language !== 'tsx') || f(x.tokens);
    });
  })(r);
}
var fe = qa,
  me = Dr;
Dr.displayName = 'bash';
Dr.aliases = ['shell'];
function Dr(r) {
  (function (a) {
    var e =
        '\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b',
      t = {
        pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
        lookbehind: !0,
        alias: 'punctuation',
        inside: null,
      },
      o = {
        bash: t,
        environment: { pattern: RegExp('\\$' + e), alias: 'constant' },
        variable: [
          {
            pattern: /\$?\(\([\s\S]+?\)\)/,
            greedy: !0,
            inside: {
              variable: [
                { pattern: /(^\$\(\([\s\S]+)\)\)/, lookbehind: !0 },
                /^\$\(\(/,
              ],
              number:
                /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
              operator:
                /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
              punctuation: /\(\(?|\)\)?|,|;/,
            },
          },
          {
            pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
            greedy: !0,
            inside: { variable: /^\$\(|^`|\)$|`$/ },
          },
          {
            pattern: /\$\{[^}]+\}/,
            greedy: !0,
            inside: {
              operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
              punctuation: /[\[\]]/,
              environment: {
                pattern: RegExp('(\\{)' + e),
                lookbehind: !0,
                alias: 'constant',
              },
            },
          },
          /\$(?:\w+|[#?*!@$])/,
        ],
        entity:
          /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/,
      };
    (a.languages.bash = {
      shebang: { pattern: /^#!\s*\/.*/, alias: 'important' },
      comment: { pattern: /(^|[^"{\\$])#.*/, lookbehind: !0 },
      'function-name': [
        {
          pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
          lookbehind: !0,
          alias: 'function',
        },
        { pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/, alias: 'function' },
      ],
      'for-or-select': {
        pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
        alias: 'variable',
        lookbehind: !0,
      },
      'assign-left': {
        pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
        inside: {
          environment: {
            pattern: RegExp('(^|[\\s;|&]|[<>]\\()' + e),
            lookbehind: !0,
            alias: 'constant',
          },
        },
        alias: 'variable',
        lookbehind: !0,
      },
      string: [
        {
          pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
          lookbehind: !0,
          greedy: !0,
          inside: o,
        },
        {
          pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
          lookbehind: !0,
          greedy: !0,
          inside: { bash: t },
        },
        {
          pattern:
            /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
          lookbehind: !0,
          greedy: !0,
          inside: o,
        },
        { pattern: /(^|[^$\\])'[^']*'/, lookbehind: !0, greedy: !0 },
        {
          pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
          greedy: !0,
          inside: { entity: o.entity },
        },
      ],
      environment: { pattern: RegExp('\\$?' + e), alias: 'constant' },
      variable: o.variable,
      function: {
        pattern:
          /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
        lookbehind: !0,
      },
      keyword: {
        pattern:
          /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
        lookbehind: !0,
      },
      builtin: {
        pattern:
          /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
        lookbehind: !0,
        alias: 'class-name',
      },
      boolean: {
        pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
        lookbehind: !0,
      },
      'file-descriptor': { pattern: /\B&\d\b/, alias: 'important' },
      operator: {
        pattern:
          /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
        inside: { 'file-descriptor': { pattern: /^\d/, alias: 'important' } },
      },
      punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
      number: { pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/, lookbehind: !0 },
    }),
      (t.inside = a.languages.bash);
    for (
      var s = [
          'comment',
          'function-name',
          'for-or-select',
          'assign-left',
          'string',
          'environment',
          'function',
          'keyword',
          'builtin',
          'boolean',
          'file-descriptor',
          'operator',
          'punctuation',
          'number',
        ],
        p = o.variable[1].inside,
        l = 0;
      l < s.length;
      l++
    )
      p[s[l]] = a.languages.bash[s[l]];
    a.languages.shell = a.languages.bash;
  })(r);
}
var he = me,
  Aa = Cr;
Cr.displayName = 'css';
Cr.aliases = [];
function Cr(r) {
  (function (a) {
    var e =
      /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
    (a.languages.css = {
      comment: /\/\*[\s\S]*?\*\//,
      atrule: {
        pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
        inside: {
          rule: /^@[\w-]+/,
          'selector-function-argument': {
            pattern:
              /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
            lookbehind: !0,
            alias: 'selector',
          },
          keyword: {
            pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
            lookbehind: !0,
          },
        },
      },
      url: {
        pattern: RegExp(
          '\\burl\\((?:' +
            e.source +
            '|' +
            /(?:[^\\\r\n()"']|\\[\s\S])*/.source +
            ')\\)',
          'i',
        ),
        greedy: !0,
        inside: {
          function: /^url/i,
          punctuation: /^\(|\)$/,
          string: { pattern: RegExp('^' + e.source + '$'), alias: 'url' },
        },
      },
      selector: {
        pattern: RegExp(
          `(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` +
            e.source +
            ')*(?=\\s*\\{)',
        ),
        lookbehind: !0,
      },
      string: { pattern: e, greedy: !0 },
      property: {
        pattern:
          /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
        lookbehind: !0,
      },
      important: /!important\b/i,
      function: { pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i, lookbehind: !0 },
      punctuation: /[(){};:,]/,
    }),
      (a.languages.css.atrule.inside.rest = a.languages.css);
    var t = a.languages.markup;
    t && (t.tag.addInlined('style', 'css'), t.tag.addAttribute('style', 'css'));
  })(r);
}
var be = Aa,
  ye = Rr;
Rr.displayName = 'jsExtras';
Rr.aliases = [];
function Rr(r) {
  (function (a) {
    a.languages.insertBefore('javascript', 'function-variable', {
      'method-variable': {
        pattern: RegExp(
          '(\\.\\s*)' +
            a.languages.javascript['function-variable'].pattern.source,
        ),
        lookbehind: !0,
        alias: ['function-variable', 'method', 'function', 'property-access'],
      },
    }),
      a.languages.insertBefore('javascript', 'function', {
        method: {
          pattern: RegExp('(\\.\\s*)' + a.languages.javascript.function.source),
          lookbehind: !0,
          alias: ['function', 'property-access'],
        },
      }),
      a.languages.insertBefore('javascript', 'constant', {
        'known-class-name': [
          {
            pattern:
              /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,
            alias: 'class-name',
          },
          { pattern: /\b(?:[A-Z]\w*)Error\b/, alias: 'class-name' },
        ],
      });
    function e(f, x) {
      return RegExp(
        f.replace(/<ID>/g, function () {
          return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/
            .source;
        }),
        x,
      );
    }
    a.languages.insertBefore('javascript', 'keyword', {
      imports: {
        pattern: e(
          /(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/
            .source,
        ),
        lookbehind: !0,
        inside: a.languages.javascript,
      },
      exports: {
        pattern: e(
          /(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/
            .source,
        ),
        lookbehind: !0,
        inside: a.languages.javascript,
      },
    }),
      a.languages.javascript.keyword.unshift(
        { pattern: /\b(?:as|default|export|from|import)\b/, alias: 'module' },
        {
          pattern:
            /\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,
          alias: 'control-flow',
        },
        { pattern: /\bnull\b/, alias: ['null', 'nil'] },
        { pattern: /\bundefined\b/, alias: 'nil' },
      ),
      a.languages.insertBefore('javascript', 'operator', {
        spread: { pattern: /\.{3}/, alias: 'operator' },
        arrow: { pattern: /=>/, alias: 'operator' },
      }),
      a.languages.insertBefore('javascript', 'punctuation', {
        'property-access': {
          pattern: e(/(\.\s*)#?<ID>/.source),
          lookbehind: !0,
        },
        'maybe-class-name': {
          pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
          lookbehind: !0,
        },
        dom: {
          pattern:
            /\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,
          alias: 'variable',
        },
        console: { pattern: /\bconsole(?=\s*\.)/, alias: 'class-name' },
      });
    for (
      var t = [
          'function',
          'function-variable',
          'method',
          'method-variable',
          'property-access',
        ],
        o = 0;
      o < t.length;
      o++
    ) {
      var s = t[o],
        p = a.languages.javascript[s];
      a.util.type(p) === 'RegExp' &&
        (p = a.languages.javascript[s] = { pattern: p });
      var l = p.inside || {};
      (p.inside = l), (l['maybe-class-name'] = /^[A-Z][\s\S]*/);
    }
  })(r);
}
var we = ye,
  xe = Ir;
Ir.displayName = 'json';
Ir.aliases = ['webmanifest'];
function Ir(r) {
  (r.languages.json = {
    property: {
      pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
      lookbehind: !0,
      greedy: !0,
    },
    string: {
      pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
      lookbehind: !0,
      greedy: !0,
    },
    comment: { pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 },
    number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
    punctuation: /[{}[\],]/,
    operator: /:/,
    boolean: /\b(?:false|true)\b/,
    null: { pattern: /\bnull\b/, alias: 'keyword' },
  }),
    (r.languages.webmanifest = r.languages.json);
}
var Se = xe,
  qe = Or;
Or.displayName = 'graphql';
Or.aliases = [];
function Or(r) {
  (r.languages.graphql = {
    comment: /#.*/,
    description: {
      pattern:
        /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
      greedy: !0,
      alias: 'string',
      inside: {
        'language-markdown': {
          pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
          lookbehind: !0,
          inside: r.languages.markdown,
        },
      },
    },
    string: {
      pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,
      greedy: !0,
    },
    number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
    boolean: /\b(?:false|true)\b/,
    variable: /\$[a-z_]\w*/i,
    directive: { pattern: /@[a-z_]\w*/i, alias: 'function' },
    'attr-name': {
      pattern: /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
      greedy: !0,
    },
    'atom-input': { pattern: /\b[A-Z]\w*Input\b/, alias: 'class-name' },
    scalar: /\b(?:Boolean|Float|ID|Int|String)\b/,
    constant: /\b[A-Z][A-Z_\d]*\b/,
    'class-name': {
      pattern:
        /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,
      lookbehind: !0,
    },
    fragment: {
      pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
      lookbehind: !0,
      alias: 'function',
    },
    'definition-mutation': {
      pattern: /(\bmutation\s+)[a-zA-Z_]\w*/,
      lookbehind: !0,
      alias: 'function',
    },
    'definition-query': {
      pattern: /(\bquery\s+)[a-zA-Z_]\w*/,
      lookbehind: !0,
      alias: 'function',
    },
    keyword:
      /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
    operator: /[!=|&]|\.{3}/,
    'property-query': /\w+(?=\s*\()/,
    object: /\w+(?=\s*\{)/,
    punctuation: /[!(){}\[\]:=,]/,
    property: /\w+/,
  }),
    r.hooks.add('after-tokenize', function (e) {
      if (e.language !== 'graphql') return;
      var t = e.tokens.filter(function (q) {
          return (
            typeof q != 'string' && q.type !== 'comment' && q.type !== 'scalar'
          );
        }),
        o = 0;
      function s(q) {
        return t[o + q];
      }
      function p(q, E) {
        E = E || 0;
        for (var c = 0; c < q.length; c++) {
          var n = s(c + E);
          if (!n || n.type !== q[c]) return !1;
        }
        return !0;
      }
      function l(q, E) {
        for (var c = 1, n = o; n < t.length; n++) {
          var v = t[n],
            u = v.content;
          if (v.type === 'punctuation' && typeof u == 'string') {
            if (q.test(u)) c++;
            else if (E.test(u) && (c--, c === 0)) return n;
          }
        }
        return -1;
      }
      function f(q, E) {
        var c = q.alias;
        c ? Array.isArray(c) || (q.alias = c = [c]) : (q.alias = c = []),
          c.push(E);
      }
      for (; o < t.length; ) {
        var x = t[o++];
        if (x.type === 'keyword' && x.content === 'mutation') {
          var m = [];
          if (
            p(['definition-mutation', 'punctuation']) &&
            s(1).content === '('
          ) {
            o += 2;
            var d = l(/^\($/, /^\)$/);
            if (d === -1) continue;
            for (; o < d; o++) {
              var h = s(0);
              h.type === 'variable' &&
                (f(h, 'variable-input'), m.push(h.content));
            }
            o = d + 1;
          }
          if (
            p(['punctuation', 'property-query']) &&
            s(0).content === '{' &&
            (o++, f(s(0), 'property-mutation'), m.length > 0)
          ) {
            var b = l(/^\{$/, /^\}$/);
            if (b === -1) continue;
            for (var L = o; L < b; L++) {
              var A = t[L];
              A.type === 'variable' &&
                m.indexOf(A.content) >= 0 &&
                f(A, 'variable-input');
            }
          }
        }
      }
    });
}
var Ae = qe,
  Ea = Fr;
Fr.displayName = 'markup';
Fr.aliases = ['html', 'mathml', 'svg', 'xml', 'ssml', 'atom', 'rss'];
function Fr(r) {
  (r.languages.markup = {
    comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0 },
    prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: !0 },
    doctype: {
      pattern:
        /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
      greedy: !0,
      inside: {
        'internal-subset': {
          pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
          lookbehind: !0,
          greedy: !0,
          inside: null,
        },
        string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
        punctuation: /^<!|>$|[[\]]/,
        'doctype-tag': /^DOCTYPE/i,
        name: /[^\s<>'"]+/,
      },
    },
    cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0 },
    tag: {
      pattern:
        /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
      greedy: !0,
      inside: {
        tag: {
          pattern: /^<\/?[^\s>\/]+/,
          inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ },
        },
        'special-attr': [],
        'attr-value': {
          pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
          inside: {
            punctuation: [{ pattern: /^=/, alias: 'attr-equals' }, /"|'/],
          },
        },
        punctuation: /\/?>/,
        'attr-name': {
          pattern: /[^\s>\/]+/,
          inside: { namespace: /^[^\s>\/:]+:/ },
        },
      },
    },
    entity: [
      { pattern: /&[\da-z]{1,8};/i, alias: 'named-entity' },
      /&#x?[\da-f]{1,8};/i,
    ],
  }),
    (r.languages.markup.tag.inside['attr-value'].inside.entity =
      r.languages.markup.entity),
    (r.languages.markup.doctype.inside['internal-subset'].inside =
      r.languages.markup),
    r.hooks.add('wrap', function (a) {
      a.type === 'entity' &&
        (a.attributes.title = a.content.value.replace(/&amp;/, '&'));
    }),
    Object.defineProperty(r.languages.markup.tag, 'addInlined', {
      value: function (e, t) {
        var o = {};
        (o['language-' + t] = {
          pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
          lookbehind: !0,
          inside: r.languages[t],
        }),
          (o.cdata = /^<!\[CDATA\[|\]\]>$/i);
        var s = {
          'included-cdata': { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: o },
        };
        s['language-' + t] = { pattern: /[\s\S]+/, inside: r.languages[t] };
        var p = {};
        (p[e] = {
          pattern: RegExp(
            /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
              /__/g,
              function () {
                return e;
              },
            ),
            'i',
          ),
          lookbehind: !0,
          greedy: !0,
          inside: s,
        }),
          r.languages.insertBefore('markup', 'cdata', p);
      },
    }),
    Object.defineProperty(r.languages.markup.tag, 'addAttribute', {
      value: function (e, t) {
        r.languages.markup.tag.inside['special-attr'].push({
          pattern: RegExp(
            /(^|["'\s])/.source +
              '(?:' +
              e +
              ')' +
              /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
            'i',
          ),
          lookbehind: !0,
          inside: {
            'attr-name': /^[^\s=]+/,
            'attr-value': {
              pattern: /=[\s\S]+/,
              inside: {
                value: {
                  pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                  lookbehind: !0,
                  alias: [t, 'language-' + t],
                  inside: r.languages[t],
                },
                punctuation: [{ pattern: /^=/, alias: 'attr-equals' }, /"|'/],
              },
            },
          },
        });
      },
    }),
    (r.languages.html = r.languages.markup),
    (r.languages.mathml = r.languages.markup),
    (r.languages.svg = r.languages.markup),
    (r.languages.xml = r.languages.extend('markup', {})),
    (r.languages.ssml = r.languages.xml),
    (r.languages.atom = r.languages.xml),
    (r.languages.rss = r.languages.xml);
}
var Ee = Ea,
  ke = Ur;
Ur.displayName = 'markdown';
Ur.aliases = ['md'];
function Ur(r) {
  (function (a) {
    var e = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
    function t(d) {
      return (
        (d = d.replace(/<inner>/g, function () {
          return e;
        })),
        RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + '(?:' + d + ')')
      );
    }
    var o = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,
      s = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(
        /__/g,
        function () {
          return o;
        },
      ),
      p = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/
        .source;
    (a.languages.markdown = a.languages.extend('markup', {})),
      a.languages.insertBefore('markdown', 'prolog', {
        'front-matter-block': {
          pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
          lookbehind: !0,
          greedy: !0,
          inside: {
            punctuation: /^---|---$/,
            'front-matter': {
              pattern: /\S+(?:\s+\S+)*/,
              alias: ['yaml', 'language-yaml'],
              inside: a.languages.yaml,
            },
          },
        },
        blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: 'punctuation' },
        table: {
          pattern: RegExp('^' + s + p + '(?:' + s + ')*', 'm'),
          inside: {
            'table-data-rows': {
              pattern: RegExp('^(' + s + p + ')(?:' + s + ')*$'),
              lookbehind: !0,
              inside: {
                'table-data': {
                  pattern: RegExp(o),
                  inside: a.languages.markdown,
                },
                punctuation: /\|/,
              },
            },
            'table-line': {
              pattern: RegExp('^(' + s + ')' + p + '$'),
              lookbehind: !0,
              inside: { punctuation: /\||:?-{3,}:?/ },
            },
            'table-header-row': {
              pattern: RegExp('^' + s + '$'),
              inside: {
                'table-header': {
                  pattern: RegExp(o),
                  alias: 'important',
                  inside: a.languages.markdown,
                },
                punctuation: /\|/,
              },
            },
          },
        },
        code: [
          {
            pattern:
              /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
            lookbehind: !0,
            alias: 'keyword',
          },
          {
            pattern: /^```[\s\S]*?^```$/m,
            greedy: !0,
            inside: {
              'code-block': {
                pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
                lookbehind: !0,
              },
              'code-language': { pattern: /^(```).+/, lookbehind: !0 },
              punctuation: /```/,
            },
          },
        ],
        title: [
          {
            pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
            alias: 'important',
            inside: { punctuation: /==+$|--+$/ },
          },
          {
            pattern: /(^\s*)#.+/m,
            lookbehind: !0,
            alias: 'important',
            inside: { punctuation: /^#+|#+$/ },
          },
        ],
        hr: {
          pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
          lookbehind: !0,
          alias: 'punctuation',
        },
        list: {
          pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
          lookbehind: !0,
          alias: 'punctuation',
        },
        'url-reference': {
          pattern:
            /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
          inside: {
            variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: !0 },
            string:
              /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
            punctuation: /^[\[\]!:]|[<>]/,
          },
          alias: 'url',
        },
        bold: {
          pattern: t(
            /\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/
              .source,
          ),
          lookbehind: !0,
          greedy: !0,
          inside: {
            content: {
              pattern: /(^..)[\s\S]+(?=..$)/,
              lookbehind: !0,
              inside: {},
            },
            punctuation: /\*\*|__/,
          },
        },
        italic: {
          pattern: t(
            /\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/
              .source,
          ),
          lookbehind: !0,
          greedy: !0,
          inside: {
            content: {
              pattern: /(^.)[\s\S]+(?=.$)/,
              lookbehind: !0,
              inside: {},
            },
            punctuation: /[*_]/,
          },
        },
        strike: {
          pattern: t(/(~~?)(?:(?!~)<inner>)+\2/.source),
          lookbehind: !0,
          greedy: !0,
          inside: {
            content: {
              pattern: /(^~~?)[\s\S]+(?=\1$)/,
              lookbehind: !0,
              inside: {},
            },
            punctuation: /~~?/,
          },
        },
        'code-snippet': {
          pattern:
            /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
          lookbehind: !0,
          greedy: !0,
          alias: ['code', 'keyword'],
        },
        url: {
          pattern: t(
            /!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/
              .source,
          ),
          lookbehind: !0,
          greedy: !0,
          inside: {
            operator: /^!/,
            content: {
              pattern: /(^\[)[^\]]+(?=\])/,
              lookbehind: !0,
              inside: {},
            },
            variable: { pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/, lookbehind: !0 },
            url: { pattern: /(^\]\()[^\s)]+/, lookbehind: !0 },
            string: {
              pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
              lookbehind: !0,
            },
          },
        },
      }),
      ['url', 'bold', 'italic', 'strike'].forEach(function (d) {
        ['url', 'bold', 'italic', 'strike', 'code-snippet'].forEach(function (
          h,
        ) {
          d !== h &&
            (a.languages.markdown[d].inside.content.inside[h] =
              a.languages.markdown[h]);
        });
      }),
      a.hooks.add('after-tokenize', function (d) {
        if (d.language !== 'markdown' && d.language !== 'md') return;
        function h(b) {
          if (!(!b || typeof b == 'string'))
            for (var L = 0, A = b.length; L < A; L++) {
              var q = b[L];
              if (q.type !== 'code') {
                h(q.content);
                continue;
              }
              var E = q.content[1],
                c = q.content[3];
              if (
                E &&
                c &&
                E.type === 'code-language' &&
                c.type === 'code-block' &&
                typeof E.content == 'string'
              ) {
                var n = E.content
                  .replace(/\b#/g, 'sharp')
                  .replace(/\b\+\+/g, 'pp');
                n = (/[a-z][\w-]*/i.exec(n) || [''])[0].toLowerCase();
                var v = 'language-' + n;
                c.alias
                  ? typeof c.alias == 'string'
                    ? (c.alias = [c.alias, v])
                    : c.alias.push(v)
                  : (c.alias = [v]);
              }
            }
        }
        h(d.tokens);
      }),
      a.hooks.add('wrap', function (d) {
        if (d.type === 'code-block') {
          for (var h = '', b = 0, L = d.classes.length; b < L; b++) {
            var A = d.classes[b],
              q = /language-(.+)/.exec(A);
            if (q) {
              h = q[1];
              break;
            }
          }
          var E = a.languages[h];
          if (E) d.content = a.highlight(m(d.content.value), E, h);
          else if (h && h !== 'none' && a.plugins.autoloader) {
            var c =
              'md-' +
              new Date().valueOf() +
              '-' +
              Math.floor(Math.random() * 1e16);
            (d.attributes.id = c),
              a.plugins.autoloader.loadLanguages(h, function () {
                var n = document.getElementById(c);
                n &&
                  (n.innerHTML = a.highlight(n.textContent, a.languages[h], h));
              });
          }
        }
      });
    var l = RegExp(a.languages.markup.tag.pattern.source, 'gi'),
      f = { amp: '&', lt: '<', gt: '>', quot: '"' },
      x = String.fromCodePoint || String.fromCharCode;
    function m(d) {
      var h = d.replace(l, '');
      return (
        (h = h.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function (b, L) {
          if (((L = L.toLowerCase()), L[0] === '#')) {
            var A;
            return (
              L[1] === 'x'
                ? (A = parseInt(L.slice(2), 16))
                : (A = Number(L.slice(1))),
              x(A)
            );
          } else {
            var q = f[L];
            return q || b;
          }
        })),
        h
      );
    }
    a.languages.md = a.languages.markdown;
  })(r);
}
var Le = ke,
  Ne = _r;
_r.displayName = 'yaml';
_r.aliases = ['yml'];
function _r(r) {
  (function (a) {
    var e = /[*&][^\s[\]{},]+/,
      t =
        /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,
      o =
        '(?:' +
        t.source +
        '(?:[ 	]+' +
        e.source +
        ')?|' +
        e.source +
        '(?:[ 	]+' +
        t.source +
        ')?)',
      s =
        /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(
          /<PLAIN>/g,
          function () {
            return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/
              .source;
          },
        ),
      p = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
    function l(f, x) {
      x = (x || '').replace(/m/g, '') + 'm';
      var m =
        /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source
          .replace(/<<prop>>/g, function () {
            return o;
          })
          .replace(/<<value>>/g, function () {
            return f;
          });
      return RegExp(m, x);
    }
    (a.languages.yaml = {
      scalar: {
        pattern: RegExp(
          /([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(
            /<<prop>>/g,
            function () {
              return o;
            },
          ),
        ),
        lookbehind: !0,
        alias: 'string',
      },
      comment: /#.*/,
      key: {
        pattern: RegExp(
          /((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source
            .replace(/<<prop>>/g, function () {
              return o;
            })
            .replace(/<<key>>/g, function () {
              return '(?:' + s + '|' + p + ')';
            }),
        ),
        lookbehind: !0,
        greedy: !0,
        alias: 'atrule',
      },
      directive: {
        pattern: /(^[ \t]*)%.+/m,
        lookbehind: !0,
        alias: 'important',
      },
      datetime: {
        pattern: l(
          /\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/
            .source,
        ),
        lookbehind: !0,
        alias: 'number',
      },
      boolean: {
        pattern: l(/false|true/.source, 'i'),
        lookbehind: !0,
        alias: 'important',
      },
      null: {
        pattern: l(/null|~/.source, 'i'),
        lookbehind: !0,
        alias: 'important',
      },
      string: { pattern: l(p), lookbehind: !0, greedy: !0 },
      number: {
        pattern: l(
          /[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/
            .source,
          'i',
        ),
        lookbehind: !0,
      },
      tag: t,
      important: e,
      punctuation: /---|[:[\]{}\-,|>?]|\.\.\./,
    }),
      (a.languages.yml = a.languages.yaml);
  })(r);
}
var Te = Ne,
  ka = Br;
Br.displayName = 'typescript';
Br.aliases = ['ts'];
function Br(r) {
  (function (a) {
    (a.languages.typescript = a.languages.extend('javascript', {
      'class-name': {
        pattern:
          /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
        lookbehind: !0,
        greedy: !0,
        inside: null,
      },
      builtin:
        /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/,
    })),
      a.languages.typescript.keyword.push(
        /\b(?:abstract|declare|is|keyof|readonly|require)\b/,
        /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,
        /\btype\b(?=\s*(?:[\{*]|$))/,
      ),
      delete a.languages.typescript.parameter,
      delete a.languages.typescript['literal-property'];
    var e = a.languages.extend('typescript', {});
    delete e['class-name'],
      (a.languages.typescript['class-name'].inside = e),
      a.languages.insertBefore('typescript', 'function', {
        decorator: {
          pattern: /@[$\w\xA0-\uFFFF]+/,
          inside: {
            at: { pattern: /^@/, alias: 'operator' },
            function: /^[\s\S]+/,
          },
        },
        'generic-function': {
          pattern:
            /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
          greedy: !0,
          inside: {
            function:
              /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
            generic: { pattern: /<[\s\S]+/, alias: 'class-name', inside: e },
          },
        },
      }),
      (a.languages.ts = a.languages.typescript);
  })(r);
}
var $e = ka,
  De = qa,
  Ce = ka,
  Re = jr;
jr.displayName = 'tsx';
jr.aliases = [];
function jr(r) {
  r.register(De),
    r.register(Ce),
    (function (a) {
      var e = a.util.clone(a.languages.typescript);
      (a.languages.tsx = a.languages.extend('jsx', e)),
        delete a.languages.tsx.parameter,
        delete a.languages.tsx['literal-property'];
      var t = a.languages.tsx.tag;
      (t.pattern = RegExp(
        /(^|[^\w$]|(?=<\/))/.source + '(?:' + t.pattern.source + ')',
        t.pattern.flags,
      )),
        (t.lookbehind = !0);
    })(r);
}
var Ie = Re;
function Oe(r, a) {
  if (r == null) return {};
  var e = ie(r, a),
    t,
    o;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(r);
    for (o = 0; o < s.length; o++)
      (t = s[o]),
        !(a.indexOf(t) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(r, t) &&
          (e[t] = r[t]);
  }
  return e;
}
function kr(r, a) {
  (a == null || a > r.length) && (a = r.length);
  for (var e = 0, t = new Array(a); e < a; e++) t[e] = r[e];
  return t;
}
function Fe(r) {
  if (Array.isArray(r)) return kr(r);
}
function Ue(r) {
  if (
    (typeof Symbol < 'u' && r[Symbol.iterator] != null) ||
    r['@@iterator'] != null
  )
    return Array.from(r);
}
function _e(r, a) {
  if (r) {
    if (typeof r == 'string') return kr(r, a);
    var e = Object.prototype.toString.call(r).slice(8, -1);
    if (
      (e === 'Object' && r.constructor && (e = r.constructor.name),
      e === 'Map' || e === 'Set')
    )
      return Array.from(r);
    if (e === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
      return kr(r, a);
  }
}
function Be() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function je(r) {
  return Fe(r) || Ue(r) || _e(r) || Be();
}
function He(r, a, e) {
  return (
    a in r
      ? Object.defineProperty(r, a, {
          value: e,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (r[a] = e),
    r
  );
}
function rr(r) {
  for (var a = 1; a < arguments.length; a++) {
    var e = arguments[a] != null ? Object(arguments[a]) : {},
      t = Object.keys(e);
    typeof Object.getOwnPropertySymbols == 'function' &&
      t.push.apply(
        t,
        Object.getOwnPropertySymbols(e).filter(function (o) {
          return Object.getOwnPropertyDescriptor(e, o).enumerable;
        }),
      ),
      t.forEach(function (o) {
        He(r, o, e[o]);
      });
  }
  return r;
}
function Ge(r) {
  var a = r.length;
  if (a === 0 || a === 1) return r;
  if (a === 2)
    return [
      r[0],
      r[1],
      ''.concat(r[0], '.').concat(r[1]),
      ''.concat(r[1], '.').concat(r[0]),
    ];
  if (a === 3)
    return [
      r[0],
      r[1],
      r[2],
      ''.concat(r[0], '.').concat(r[1]),
      ''.concat(r[0], '.').concat(r[2]),
      ''.concat(r[1], '.').concat(r[0]),
      ''.concat(r[1], '.').concat(r[2]),
      ''.concat(r[2], '.').concat(r[0]),
      ''.concat(r[2], '.').concat(r[1]),
      ''.concat(r[0], '.').concat(r[1], '.').concat(r[2]),
      ''.concat(r[0], '.').concat(r[2], '.').concat(r[1]),
      ''.concat(r[1], '.').concat(r[0], '.').concat(r[2]),
      ''.concat(r[1], '.').concat(r[2], '.').concat(r[0]),
      ''.concat(r[2], '.').concat(r[0], '.').concat(r[1]),
      ''.concat(r[2], '.').concat(r[1], '.').concat(r[0]),
    ];
  if (a >= 4)
    return [
      r[0],
      r[1],
      r[2],
      r[3],
      ''.concat(r[0], '.').concat(r[1]),
      ''.concat(r[0], '.').concat(r[2]),
      ''.concat(r[0], '.').concat(r[3]),
      ''.concat(r[1], '.').concat(r[0]),
      ''.concat(r[1], '.').concat(r[2]),
      ''.concat(r[1], '.').concat(r[3]),
      ''.concat(r[2], '.').concat(r[0]),
      ''.concat(r[2], '.').concat(r[1]),
      ''.concat(r[2], '.').concat(r[3]),
      ''.concat(r[3], '.').concat(r[0]),
      ''.concat(r[3], '.').concat(r[1]),
      ''.concat(r[3], '.').concat(r[2]),
      ''.concat(r[0], '.').concat(r[1], '.').concat(r[2]),
      ''.concat(r[0], '.').concat(r[1], '.').concat(r[3]),
      ''.concat(r[0], '.').concat(r[2], '.').concat(r[1]),
      ''.concat(r[0], '.').concat(r[2], '.').concat(r[3]),
      ''.concat(r[0], '.').concat(r[3], '.').concat(r[1]),
      ''.concat(r[0], '.').concat(r[3], '.').concat(r[2]),
      ''.concat(r[1], '.').concat(r[0], '.').concat(r[2]),
      ''.concat(r[1], '.').concat(r[0], '.').concat(r[3]),
      ''.concat(r[1], '.').concat(r[2], '.').concat(r[0]),
      ''.concat(r[1], '.').concat(r[2], '.').concat(r[3]),
      ''.concat(r[1], '.').concat(r[3], '.').concat(r[0]),
      ''.concat(r[1], '.').concat(r[3], '.').concat(r[2]),
      ''.concat(r[2], '.').concat(r[0], '.').concat(r[1]),
      ''.concat(r[2], '.').concat(r[0], '.').concat(r[3]),
      ''.concat(r[2], '.').concat(r[1], '.').concat(r[0]),
      ''.concat(r[2], '.').concat(r[1], '.').concat(r[3]),
      ''.concat(r[2], '.').concat(r[3], '.').concat(r[0]),
      ''.concat(r[2], '.').concat(r[3], '.').concat(r[1]),
      ''.concat(r[3], '.').concat(r[0], '.').concat(r[1]),
      ''.concat(r[3], '.').concat(r[0], '.').concat(r[2]),
      ''.concat(r[3], '.').concat(r[1], '.').concat(r[0]),
      ''.concat(r[3], '.').concat(r[1], '.').concat(r[2]),
      ''.concat(r[3], '.').concat(r[2], '.').concat(r[0]),
      ''.concat(r[3], '.').concat(r[2], '.').concat(r[1]),
      ''.concat(r[0], '.').concat(r[1], '.').concat(r[2], '.').concat(r[3]),
      ''.concat(r[0], '.').concat(r[1], '.').concat(r[3], '.').concat(r[2]),
      ''.concat(r[0], '.').concat(r[2], '.').concat(r[1], '.').concat(r[3]),
      ''.concat(r[0], '.').concat(r[2], '.').concat(r[3], '.').concat(r[1]),
      ''.concat(r[0], '.').concat(r[3], '.').concat(r[1], '.').concat(r[2]),
      ''.concat(r[0], '.').concat(r[3], '.').concat(r[2], '.').concat(r[1]),
      ''.concat(r[1], '.').concat(r[0], '.').concat(r[2], '.').concat(r[3]),
      ''.concat(r[1], '.').concat(r[0], '.').concat(r[3], '.').concat(r[2]),
      ''.concat(r[1], '.').concat(r[2], '.').concat(r[0], '.').concat(r[3]),
      ''.concat(r[1], '.').concat(r[2], '.').concat(r[3], '.').concat(r[0]),
      ''.concat(r[1], '.').concat(r[3], '.').concat(r[0], '.').concat(r[2]),
      ''.concat(r[1], '.').concat(r[3], '.').concat(r[2], '.').concat(r[0]),
      ''.concat(r[2], '.').concat(r[0], '.').concat(r[1], '.').concat(r[3]),
      ''.concat(r[2], '.').concat(r[0], '.').concat(r[3], '.').concat(r[1]),
      ''.concat(r[2], '.').concat(r[1], '.').concat(r[0], '.').concat(r[3]),
      ''.concat(r[2], '.').concat(r[1], '.').concat(r[3], '.').concat(r[0]),
      ''.concat(r[2], '.').concat(r[3], '.').concat(r[0], '.').concat(r[1]),
      ''.concat(r[2], '.').concat(r[3], '.').concat(r[1], '.').concat(r[0]),
      ''.concat(r[3], '.').concat(r[0], '.').concat(r[1], '.').concat(r[2]),
      ''.concat(r[3], '.').concat(r[0], '.').concat(r[2], '.').concat(r[1]),
      ''.concat(r[3], '.').concat(r[1], '.').concat(r[0], '.').concat(r[2]),
      ''.concat(r[3], '.').concat(r[1], '.').concat(r[2], '.').concat(r[0]),
      ''.concat(r[3], '.').concat(r[2], '.').concat(r[0], '.').concat(r[1]),
      ''.concat(r[3], '.').concat(r[2], '.').concat(r[1], '.').concat(r[0]),
    ];
}
var Ar = {};
function Ve(r) {
  if (r.length === 0 || r.length === 1) return r;
  var a = r.join('.');
  return Ar[a] || (Ar[a] = Ge(r)), Ar[a];
}
function ze(r) {
  var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    e = arguments.length > 2 ? arguments[2] : void 0,
    t = r.filter(function (s) {
      return s !== 'token';
    }),
    o = Ve(t);
  return o.reduce(function (s, p) {
    return rr({}, s, e[p]);
  }, a);
}
function ta(r) {
  return r.join(' ');
}
function Me(r, a) {
  var e = 0;
  return function (t) {
    return (
      (e += 1),
      t.map(function (o, s) {
        return La({
          node: o,
          stylesheet: r,
          useInlineStyles: a,
          key: 'code-segment-'.concat(e, '-').concat(s),
        });
      })
    );
  };
}
function La(r) {
  var a = r.node,
    e = r.stylesheet,
    t = r.style,
    o = t === void 0 ? {} : t,
    s = r.useInlineStyles,
    p = r.key,
    l = a.properties,
    f = a.type,
    x = a.tagName,
    m = a.value;
  if (f === 'text') return m;
  if (x) {
    var d = Me(e, s),
      h;
    if (!s) h = rr({}, l, { className: ta(l.className) });
    else {
      var b = Object.keys(e).reduce(function (E, c) {
          return (
            c.split('.').forEach(function (n) {
              E.includes(n) || E.push(n);
            }),
            E
          );
        }, []),
        L = l.className && l.className.includes('token') ? ['token'] : [],
        A =
          l.className &&
          L.concat(
            l.className.filter(function (E) {
              return !b.includes(E);
            }),
          );
      h = rr({}, l, {
        className: ta(A) || void 0,
        style: ze(l.className, Object.assign({}, l.style, o), e),
      });
    }
    var q = d(a.children);
    return X(x, { ...h, children: q }, p);
  }
}
var Pe = function (a, e) {
    var t = a.listLanguages();
    return t.indexOf(e) !== -1;
  },
  Ze = /\n/g;
function Ye(r) {
  return r.match(Ze);
}
function We(r) {
  var a = r.lines,
    e = r.startingLineNumber,
    t = r.style;
  return a.map(function (o, s) {
    var p = s + e;
    return X(
      'span',
      {
        className: 'react-syntax-highlighter-line-number',
        style: typeof t == 'function' ? t(p) : t,
        children: ''.concat(
          p,
          `
`,
        ),
      },
      'line-'.concat(s),
    );
  });
}
function Je(r) {
  var a = r.codeString,
    e = r.codeStyle,
    t = r.containerStyle,
    o = t === void 0 ? { float: 'left', paddingRight: '10px' } : t,
    s = r.numberStyle,
    p = s === void 0 ? {} : s,
    l = r.startingLineNumber;
  return X('code', {
    style: Object.assign({}, e, o),
    children: We({
      lines: a.replace(/\n$/, '').split(`
`),
      style: p,
      startingLineNumber: l,
    }),
  });
}
function Ke(r) {
  return ''.concat(r.toString().length, '.25em');
}
function Na(r, a) {
  return {
    type: 'element',
    tagName: 'span',
    properties: {
      key: 'line-number--'.concat(r),
      className: [
        'comment',
        'linenumber',
        'react-syntax-highlighter-line-number',
      ],
      style: a,
    },
    children: [{ type: 'text', value: r }],
  };
}
function Ta(r, a, e) {
  var t = {
      display: 'inline-block',
      minWidth: Ke(e),
      paddingRight: '1em',
      textAlign: 'right',
      userSelect: 'none',
    },
    o = typeof r == 'function' ? r(a) : r,
    s = rr({}, t, o);
  return s;
}
function br(r) {
  var a = r.children,
    e = r.lineNumber,
    t = r.lineNumberStyle,
    o = r.largestLineNumber,
    s = r.showInlineLineNumbers,
    p = r.lineProps,
    l = p === void 0 ? {} : p,
    f = r.className,
    x = f === void 0 ? [] : f,
    m = r.showLineNumbers,
    d = r.wrapLongLines,
    h = typeof l == 'function' ? l(e) : l;
  if (((h.className = x), e && s)) {
    var b = Ta(t, e, o);
    a.unshift(Na(e, b));
  }
  return (
    d & m && (h.style = rr({}, h.style, { display: 'flex' })),
    { type: 'element', tagName: 'span', properties: h, children: a }
  );
}
function $a(r) {
  for (
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
      e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [],
      t = 0;
    t < r.length;
    t++
  ) {
    var o = r[t];
    if (o.type === 'text')
      e.push(br({ children: [o], className: je(new Set(a)) }));
    else if (o.children) {
      var s = a.concat(o.properties.className);
      e = e.concat($a(o.children, s));
    }
  }
  return e;
}
function Xe(r, a, e, t, o, s, p, l, f) {
  var x,
    m = $a(r.value),
    d = [],
    h = -1,
    b = 0;
  function L(u, i) {
    var g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    return br({
      children: u,
      lineNumber: i,
      lineNumberStyle: l,
      largestLineNumber: p,
      showInlineLineNumbers: o,
      lineProps: e,
      className: g,
      showLineNumbers: t,
      wrapLongLines: f,
    });
  }
  function A(u, i) {
    if (t && i && o) {
      var g = Ta(l, i, p);
      u.unshift(Na(i, g));
    }
    return u;
  }
  function q(u, i) {
    var g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    return a || g.length > 0 ? L(u, i, g) : A(u, i);
  }
  for (
    var E = function () {
      var i = m[b],
        g = i.children[0].value,
        y = Ye(g);
      if (y) {
        var w = g.split(`
`);
        w.forEach(function (S, N) {
          var R = t && d.length + s,
            I = {
              type: 'text',
              value: ''.concat(
                S,
                `
`,
              ),
            };
          if (N === 0) {
            var V = m
                .slice(h + 1, b)
                .concat(
                  br({ children: [I], className: i.properties.className }),
                ),
              j = q(V, R);
            d.push(j);
          } else if (N === w.length - 1) {
            var _ = m[b + 1] && m[b + 1].children && m[b + 1].children[0];
            if (_) {
              var J = { type: 'text', value: ''.concat(S) },
                T = br({ children: [J], className: i.properties.className });
              m.splice(b + 1, 0, T);
            } else {
              var O = [I],
                C = q(O, R, i.properties.className);
              d.push(C);
            }
          } else {
            var $ = [I],
              F = q($, R, i.properties.className);
            d.push(F);
          }
        }),
          (h = b);
      }
      b++;
    };
    b < m.length;

  )
    E();
  if (h !== m.length - 1) {
    var c = m.slice(h + 1, m.length);
    if (c && c.length) {
      var n = t && d.length + s,
        v = q(c, n);
      d.push(v);
    }
  }
  return a ? d : (x = []).concat.apply(x, d);
}
function Qe(r) {
  var a = r.rows,
    e = r.stylesheet,
    t = r.useInlineStyles;
  return a.map(function (o, s) {
    return La({
      node: o,
      stylesheet: e,
      useInlineStyles: t,
      key: 'code-segement'.concat(s),
    });
  });
}
function Da(r) {
  return r && typeof r.highlightAuto < 'u';
}
function rt(r) {
  var a = r.astGenerator,
    e = r.language,
    t = r.code,
    o = r.defaultCodeValue;
  if (Da(a)) {
    var s = Pe(a, e);
    return e === 'text'
      ? { value: o, language: 'text' }
      : s
      ? a.highlight(e, t)
      : a.highlightAuto(t);
  }
  try {
    return e && e !== 'text' ? { value: a.highlight(t, e) } : { value: o };
  } catch {
    return { value: o };
  }
}
function at(r, a) {
  return function (t) {
    var o = t.language,
      s = t.children,
      p = t.style,
      l = p === void 0 ? a : p,
      f = t.customStyle,
      x = f === void 0 ? {} : f,
      m = t.codeTagProps,
      d =
        m === void 0
          ? {
              className: o ? 'language-'.concat(o) : void 0,
              style: rr(
                {},
                l['code[class*="language-"]'],
                l['code[class*="language-'.concat(o, '"]')],
              ),
            }
          : m,
      h = t.useInlineStyles,
      b = h === void 0 ? !0 : h,
      L = t.showLineNumbers,
      A = L === void 0 ? !1 : L,
      q = t.showInlineLineNumbers,
      E = q === void 0 ? !0 : q,
      c = t.startingLineNumber,
      n = c === void 0 ? 1 : c,
      v = t.lineNumberContainerStyle,
      u = t.lineNumberStyle,
      i = u === void 0 ? {} : u,
      g = t.wrapLines,
      y = t.wrapLongLines,
      w = y === void 0 ? !1 : y,
      S = t.lineProps,
      N = S === void 0 ? {} : S,
      R = t.renderer,
      I = t.PreTag,
      V = I === void 0 ? 'pre' : I,
      j = t.CodeTag,
      _ = j === void 0 ? 'code' : j,
      J = t.code,
      T = J === void 0 ? (Array.isArray(s) ? s[0] : s) : J,
      O = t.astGenerator,
      C = Oe(t, [
        'language',
        'children',
        'style',
        'customStyle',
        'codeTagProps',
        'useInlineStyles',
        'showLineNumbers',
        'showInlineLineNumbers',
        'startingLineNumber',
        'lineNumberContainerStyle',
        'lineNumberStyle',
        'wrapLines',
        'wrapLongLines',
        'lineProps',
        'renderer',
        'PreTag',
        'CodeTag',
        'code',
        'astGenerator',
      ]);
    O = O || r;
    var $ = A
        ? X(Je, {
            containerStyle: v,
            codeStyle: d.style || {},
            numberStyle: i,
            startingLineNumber: n,
            codeString: T,
          })
        : null,
      F = l.hljs || l['pre[class*="language-"]'] || { backgroundColor: '#fff' },
      nr = Da(O) ? 'hljs' : 'prismjs',
      H = b
        ? Object.assign({}, C, { style: Object.assign({}, F, x) })
        : Object.assign({}, C, {
            className: C.className
              ? ''.concat(nr, ' ').concat(C.className)
              : nr,
            style: Object.assign({}, x),
          });
    if (!O) return Er(V, { ...H, children: [$, X(_, { ...d, children: T })] });
    ((g === void 0 && R) || w) && (g = !0), (R = R || Qe);
    var Y = [{ type: 'text', value: T }],
      z = rt({ astGenerator: O, language: o, code: T, defaultCodeValue: Y });
    z.language === null && (z.value = Y);
    var K = z.value.length + n,
      sr = Xe(z, g, N, A, E, n, K, i, w);
    return (
      w
        ? (d.style = rr({}, d.style, { whiteSpace: 'pre-wrap' }))
        : (d.style = rr({}, d.style, { whiteSpace: 'pre' })),
      X(V, {
        ...H,
        children: Er(_, {
          ...d,
          children: [
            !E && $,
            R({ rows: sr, stylesheet: l, useInlineStyles: b }),
          ],
        }),
      })
    );
  };
}
var et = nt,
  tt = Object.prototype.hasOwnProperty;
function nt() {
  for (var r = {}, a = 0; a < arguments.length; a++) {
    var e = arguments[a];
    for (var t in e) tt.call(e, t) && (r[t] = e[t]);
  }
  return r;
}
var Ca = Ra,
  Hr = Ra.prototype;
Hr.space = null;
Hr.normal = {};
Hr.property = {};
function Ra(r, a, e) {
  (this.property = r), (this.normal = a), e && (this.space = e);
}
var na = et,
  ot = Ca,
  lt = it;
function it(r) {
  for (var a = r.length, e = [], t = [], o = -1, s, p; ++o < a; )
    (s = r[o]), e.push(s.property), t.push(s.normal), (p = s.space);
  return new ot(na.apply(null, e), na.apply(null, t), p);
}
var Gr = st;
function st(r) {
  return r.toLowerCase();
}
var Ia = Oa,
  P = Oa.prototype;
P.space = null;
P.attribute = null;
P.property = null;
P.boolean = !1;
P.booleanish = !1;
P.overloadedBoolean = !1;
P.number = !1;
P.commaSeparated = !1;
P.spaceSeparated = !1;
P.commaOrSpaceSeparated = !1;
P.mustUseProperty = !1;
P.defined = !1;
function Oa(r, a) {
  (this.property = r), (this.attribute = a);
}
var Q = {},
  ct = 0;
Q.boolean = tr();
Q.booleanish = tr();
Q.overloadedBoolean = tr();
Q.number = tr();
Q.spaceSeparated = tr();
Q.commaSeparated = tr();
Q.commaOrSpaceSeparated = tr();
function tr() {
  return Math.pow(2, ++ct);
}
var Fa = Ia,
  oa = Q,
  Ua = Vr;
Vr.prototype = new Fa();
Vr.prototype.defined = !0;
var _a = [
    'boolean',
    'booleanish',
    'overloadedBoolean',
    'number',
    'commaSeparated',
    'spaceSeparated',
    'commaOrSpaceSeparated',
  ],
  vt = _a.length;
function Vr(r, a, e, t) {
  var o = -1,
    s;
  for (la(this, 'space', t), Fa.call(this, r, a); ++o < vt; )
    (s = _a[o]), la(this, s, (e & oa[s]) === oa[s]);
}
function la(r, a, e) {
  e && (r[a] = e);
}
var ia = Gr,
  ut = Ca,
  pt = Ua,
  dr = dt;
function dt(r) {
  var a = r.space,
    e = r.mustUseProperty || [],
    t = r.attributes || {},
    o = r.properties,
    s = r.transform,
    p = {},
    l = {},
    f,
    x;
  for (f in o)
    (x = new pt(f, s(t, f), o[f], a)),
      e.indexOf(f) !== -1 && (x.mustUseProperty = !0),
      (p[f] = x),
      (l[ia(f)] = f),
      (l[ia(x.attribute)] = f);
  return new ut(p, l, a);
}
var gt = dr,
  ft = gt({
    space: 'xlink',
    transform: mt,
    properties: {
      xLinkActuate: null,
      xLinkArcRole: null,
      xLinkHref: null,
      xLinkRole: null,
      xLinkShow: null,
      xLinkTitle: null,
      xLinkType: null,
    },
  });
function mt(r, a) {
  return 'xlink:' + a.slice(5).toLowerCase();
}
var ht = dr,
  bt = ht({
    space: 'xml',
    transform: yt,
    properties: { xmlLang: null, xmlBase: null, xmlSpace: null },
  });
function yt(r, a) {
  return 'xml:' + a.slice(3).toLowerCase();
}
var wt = xt;
function xt(r, a) {
  return a in r ? r[a] : a;
}
var St = wt,
  Ba = qt;
function qt(r, a) {
  return St(r, a.toLowerCase());
}
var At = dr,
  Et = Ba,
  kt = At({
    space: 'xmlns',
    attributes: { xmlnsxlink: 'xmlns:xlink' },
    transform: Et,
    properties: { xmlns: null, xmlnsXLink: null },
  }),
  zr = Q,
  Lt = dr,
  G = zr.booleanish,
  M = zr.number,
  er = zr.spaceSeparated,
  Nt = Lt({
    transform: Tt,
    properties: {
      ariaActiveDescendant: null,
      ariaAtomic: G,
      ariaAutoComplete: null,
      ariaBusy: G,
      ariaChecked: G,
      ariaColCount: M,
      ariaColIndex: M,
      ariaColSpan: M,
      ariaControls: er,
      ariaCurrent: null,
      ariaDescribedBy: er,
      ariaDetails: null,
      ariaDisabled: G,
      ariaDropEffect: er,
      ariaErrorMessage: null,
      ariaExpanded: G,
      ariaFlowTo: er,
      ariaGrabbed: G,
      ariaHasPopup: null,
      ariaHidden: G,
      ariaInvalid: null,
      ariaKeyShortcuts: null,
      ariaLabel: null,
      ariaLabelledBy: er,
      ariaLevel: M,
      ariaLive: null,
      ariaModal: G,
      ariaMultiLine: G,
      ariaMultiSelectable: G,
      ariaOrientation: null,
      ariaOwns: er,
      ariaPlaceholder: null,
      ariaPosInSet: M,
      ariaPressed: G,
      ariaReadOnly: G,
      ariaRelevant: null,
      ariaRequired: G,
      ariaRoleDescription: er,
      ariaRowCount: M,
      ariaRowIndex: M,
      ariaRowSpan: M,
      ariaSelected: G,
      ariaSetSize: M,
      ariaSort: null,
      ariaValueMax: M,
      ariaValueMin: M,
      ariaValueNow: M,
      ariaValueText: null,
      role: null,
    },
  });
function Tt(r, a) {
  return a === 'role' ? a : 'aria-' + a.slice(4).toLowerCase();
}
var ir = Q,
  $t = dr,
  Dt = Ba,
  k = ir.boolean,
  Ct = ir.overloadedBoolean,
  cr = ir.booleanish,
  D = ir.number,
  B = ir.spaceSeparated,
  mr = ir.commaSeparated,
  Rt = $t({
    space: 'html',
    attributes: {
      acceptcharset: 'accept-charset',
      classname: 'class',
      htmlfor: 'for',
      httpequiv: 'http-equiv',
    },
    transform: Dt,
    mustUseProperty: ['checked', 'multiple', 'muted', 'selected'],
    properties: {
      abbr: null,
      accept: mr,
      acceptCharset: B,
      accessKey: B,
      action: null,
      allow: null,
      allowFullScreen: k,
      allowPaymentRequest: k,
      allowUserMedia: k,
      alt: null,
      as: null,
      async: k,
      autoCapitalize: null,
      autoComplete: B,
      autoFocus: k,
      autoPlay: k,
      capture: k,
      charSet: null,
      checked: k,
      cite: null,
      className: B,
      cols: D,
      colSpan: null,
      content: null,
      contentEditable: cr,
      controls: k,
      controlsList: B,
      coords: D | mr,
      crossOrigin: null,
      data: null,
      dateTime: null,
      decoding: null,
      default: k,
      defer: k,
      dir: null,
      dirName: null,
      disabled: k,
      download: Ct,
      draggable: cr,
      encType: null,
      enterKeyHint: null,
      form: null,
      formAction: null,
      formEncType: null,
      formMethod: null,
      formNoValidate: k,
      formTarget: null,
      headers: B,
      height: D,
      hidden: k,
      high: D,
      href: null,
      hrefLang: null,
      htmlFor: B,
      httpEquiv: B,
      id: null,
      imageSizes: null,
      imageSrcSet: mr,
      inputMode: null,
      integrity: null,
      is: null,
      isMap: k,
      itemId: null,
      itemProp: B,
      itemRef: B,
      itemScope: k,
      itemType: B,
      kind: null,
      label: null,
      lang: null,
      language: null,
      list: null,
      loading: null,
      loop: k,
      low: D,
      manifest: null,
      max: null,
      maxLength: D,
      media: null,
      method: null,
      min: null,
      minLength: D,
      multiple: k,
      muted: k,
      name: null,
      nonce: null,
      noModule: k,
      noValidate: k,
      onAbort: null,
      onAfterPrint: null,
      onAuxClick: null,
      onBeforePrint: null,
      onBeforeUnload: null,
      onBlur: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onContextMenu: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFormData: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLanguageChange: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadEnd: null,
      onLoadStart: null,
      onMessage: null,
      onMessageError: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRejectionHandled: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onSecurityPolicyViolation: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onSlotChange: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnhandledRejection: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onWheel: null,
      open: k,
      optimum: D,
      pattern: null,
      ping: B,
      placeholder: null,
      playsInline: k,
      poster: null,
      preload: null,
      readOnly: k,
      referrerPolicy: null,
      rel: B,
      required: k,
      reversed: k,
      rows: D,
      rowSpan: D,
      sandbox: B,
      scope: null,
      scoped: k,
      seamless: k,
      selected: k,
      shape: null,
      size: D,
      sizes: null,
      slot: null,
      span: D,
      spellCheck: cr,
      src: null,
      srcDoc: null,
      srcLang: null,
      srcSet: mr,
      start: D,
      step: null,
      style: null,
      tabIndex: D,
      target: null,
      title: null,
      translate: null,
      type: null,
      typeMustMatch: k,
      useMap: null,
      value: cr,
      width: D,
      wrap: null,
      align: null,
      aLink: null,
      archive: B,
      axis: null,
      background: null,
      bgColor: null,
      border: D,
      borderColor: null,
      bottomMargin: D,
      cellPadding: null,
      cellSpacing: null,
      char: null,
      charOff: null,
      classId: null,
      clear: null,
      code: null,
      codeBase: null,
      codeType: null,
      color: null,
      compact: k,
      declare: k,
      event: null,
      face: null,
      frame: null,
      frameBorder: null,
      hSpace: D,
      leftMargin: D,
      link: null,
      longDesc: null,
      lowSrc: null,
      marginHeight: D,
      marginWidth: D,
      noResize: k,
      noHref: k,
      noShade: k,
      noWrap: k,
      object: null,
      profile: null,
      prompt: null,
      rev: null,
      rightMargin: D,
      rules: null,
      scheme: null,
      scrolling: cr,
      standby: null,
      summary: null,
      text: null,
      topMargin: D,
      valueType: null,
      version: null,
      vAlign: null,
      vLink: null,
      vSpace: D,
      allowTransparency: null,
      autoCorrect: null,
      autoSave: null,
      disablePictureInPicture: k,
      disableRemotePlayback: k,
      prefix: null,
      property: null,
      results: D,
      security: null,
      unselectable: null,
    },
  }),
  It = lt,
  Ot = ft,
  Ft = bt,
  Ut = kt,
  _t = Nt,
  Bt = Rt,
  jt = It([Ft, Ot, Ut, _t, Bt]),
  Ht = Gr,
  Gt = Ua,
  Vt = Ia,
  Mr = 'data',
  zt = Zt,
  Mt = /^data[-\w.:]+$/i,
  ja = /-[a-z]/g,
  Pt = /[A-Z]/g;
function Zt(r, a) {
  var e = Ht(a),
    t = a,
    o = Vt;
  return e in r.normal
    ? r.property[r.normal[e]]
    : (e.length > 4 &&
        e.slice(0, 4) === Mr &&
        Mt.test(a) &&
        (a.charAt(4) === '-' ? (t = Yt(a)) : (a = Wt(a)), (o = Gt)),
      new o(t, a));
}
function Yt(r) {
  var a = r.slice(5).replace(ja, Kt);
  return Mr + a.charAt(0).toUpperCase() + a.slice(1);
}
function Wt(r) {
  var a = r.slice(4);
  return ja.test(a)
    ? r
    : ((a = a.replace(Pt, Jt)), a.charAt(0) !== '-' && (a = '-' + a), Mr + a);
}
function Jt(r) {
  return '-' + r.toLowerCase();
}
function Kt(r) {
  return r.charAt(1).toUpperCase();
}
var Xt = Qt,
  sa = /[#.]/g;
function Qt(r, a) {
  for (var e = r || '', t = a || 'div', o = {}, s = 0, p, l, f; s < e.length; )
    (sa.lastIndex = s),
      (f = sa.exec(e)),
      (p = e.slice(s, f ? f.index : e.length)),
      p &&
        (l
          ? l === '#'
            ? (o.id = p)
            : o.className
            ? o.className.push(p)
            : (o.className = [p])
          : (t = p),
        (s += p.length)),
      f && ((l = f[0]), s++);
  return { type: 'element', tagName: t, properties: o, children: [] };
}
var Pr = {};
Pr.parse = en;
Pr.stringify = tn;
var ca = '',
  rn = ' ',
  an = /[ \t\n\r\f]+/g;
function en(r) {
  var a = String(r || ca).trim();
  return a === ca ? [] : a.split(an);
}
function tn(r) {
  return r.join(rn).trim();
}
var Zr = {};
Zr.parse = nn;
Zr.stringify = on;
var Lr = ',',
  va = ' ',
  ur = '';
function nn(r) {
  for (
    var a = [], e = String(r || ur), t = e.indexOf(Lr), o = 0, s = !1, p;
    !s;

  )
    t === -1 && ((t = e.length), (s = !0)),
      (p = e.slice(o, t).trim()),
      (p || !s) && a.push(p),
      (o = t + 1),
      (t = e.indexOf(Lr, o));
  return a;
}
function on(r, a) {
  var e = a || {},
    t = e.padLeft === !1 ? ur : va,
    o = e.padRight ? va : ur;
  return (
    r[r.length - 1] === ur && (r = r.concat(ur)), r.join(o + Lr + t).trim()
  );
}
var ln = zt,
  ua = Gr,
  sn = Xt,
  pa = Pr.parse,
  da = Zr.parse,
  cn = un,
  vn = {}.hasOwnProperty;
function un(r, a, e) {
  var t = e ? mn(e) : null;
  return o;
  function o(p, l) {
    var f = sn(p, a),
      x = Array.prototype.slice.call(arguments, 2),
      m = f.tagName.toLowerCase(),
      d;
    if (
      ((f.tagName = t && vn.call(t, m) ? t[m] : m),
      l && pn(l, f) && (x.unshift(l), (l = null)),
      l)
    )
      for (d in l) s(f.properties, d, l[d]);
    return (
      Ha(f.children, x),
      f.tagName === 'template' &&
        ((f.content = { type: 'root', children: f.children }),
        (f.children = [])),
      f
    );
  }
  function s(p, l, f) {
    var x, m, d;
    f == null ||
      f !== f ||
      ((x = ln(r, l)),
      (m = x.property),
      (d = f),
      typeof d == 'string' &&
        (x.spaceSeparated
          ? (d = pa(d))
          : x.commaSeparated
          ? (d = da(d))
          : x.commaOrSpaceSeparated && (d = pa(da(d).join(' ')))),
      m === 'style' && typeof f != 'string' && (d = fn(d)),
      m === 'className' && p.className && (d = p.className.concat(d)),
      (p[m] = gn(x, m, d)));
  }
}
function pn(r, a) {
  return typeof r == 'string' || 'length' in r || dn(a.tagName, r);
}
function dn(r, a) {
  var e = a.type;
  return r === 'input' || !e || typeof e != 'string'
    ? !1
    : W(a.children) === 'object' && 'length' in a.children
    ? !0
    : ((e = e.toLowerCase()),
      r === 'button'
        ? e !== 'menu' && e !== 'submit' && e !== 'reset' && e !== 'button'
        : 'value' in a);
}
function Ha(r, a) {
  var e, t;
  if (typeof a == 'string' || typeof a == 'number') {
    r.push({ type: 'text', value: String(a) });
    return;
  }
  if (W(a) === 'object' && 'length' in a) {
    for (e = -1, t = a.length; ++e < t; ) Ha(r, a[e]);
    return;
  }
  if (W(a) !== 'object' || !('type' in a))
    throw new Error('Expected node, nodes, or string, got `' + a + '`');
  r.push(a);
}
function gn(r, a, e) {
  var t, o, s;
  if (W(e) !== 'object' || !('length' in e)) return ga(r, a, e);
  for (o = e.length, t = -1, s = []; ++t < o; ) s[t] = ga(r, a, e[t]);
  return s;
}
function ga(r, a, e) {
  var t = e;
  return (
    r.number || r.positiveNumber
      ? !isNaN(t) && t !== '' && (t = Number(t))
      : (r.boolean || r.overloadedBoolean) &&
        typeof t == 'string' &&
        (t === '' || ua(e) === ua(a)) &&
        (t = !0),
    t
  );
}
function fn(r) {
  var a = [],
    e;
  for (e in r) a.push([e, r[e]].join(': '));
  return a.join('; ');
}
function mn(r) {
  for (var a = r.length, e = -1, t = {}, o; ++e < a; )
    (o = r[e]), (t[o.toLowerCase()] = o);
  return t;
}
var hn = jt,
  bn = cn,
  Ga = bn(hn, 'div');
Ga.displayName = 'html';
var yn = Ga,
  wn = yn,
  xn = 'Æ',
  Sn = '&',
  qn = 'Á',
  An = 'Â',
  En = 'À',
  kn = 'Å',
  Ln = 'Ã',
  Nn = 'Ä',
  Tn = '©',
  $n = 'Ç',
  Dn = 'Ð',
  Cn = 'É',
  Rn = 'Ê',
  In = 'È',
  On = 'Ë',
  Fn = '>',
  Un = 'Í',
  _n = 'Î',
  Bn = 'Ì',
  jn = 'Ï',
  Hn = '<',
  Gn = 'Ñ',
  Vn = 'Ó',
  zn = 'Ô',
  Mn = 'Ò',
  Pn = 'Ø',
  Zn = 'Õ',
  Yn = 'Ö',
  Wn = '"',
  Jn = '®',
  Kn = 'Þ',
  Xn = 'Ú',
  Qn = 'Û',
  ro = 'Ù',
  ao = 'Ü',
  eo = 'Ý',
  to = 'á',
  no = 'â',
  oo = '´',
  lo = 'æ',
  io = 'à',
  so = '&',
  co = 'å',
  vo = 'ã',
  uo = 'ä',
  po = '¦',
  go = 'ç',
  fo = '¸',
  mo = '¢',
  ho = '©',
  bo = '¤',
  yo = '°',
  wo = '÷',
  xo = 'é',
  So = 'ê',
  qo = 'è',
  Ao = 'ð',
  Eo = 'ë',
  ko = '½',
  Lo = '¼',
  No = '¾',
  To = '>',
  $o = 'í',
  Do = 'î',
  Co = '¡',
  Ro = 'ì',
  Io = '¿',
  Oo = 'ï',
  Fo = '«',
  Uo = '<',
  _o = '¯',
  Bo = 'µ',
  jo = '·',
  Ho = ' ',
  Go = '¬',
  Vo = 'ñ',
  zo = 'ó',
  Mo = 'ô',
  Po = 'ò',
  Zo = 'ª',
  Yo = 'º',
  Wo = 'ø',
  Jo = 'õ',
  Ko = 'ö',
  Xo = '¶',
  Qo = '±',
  rl = '£',
  al = '"',
  el = '»',
  tl = '®',
  nl = '§',
  ol = '­',
  ll = '¹',
  il = '²',
  sl = '³',
  cl = 'ß',
  vl = 'þ',
  ul = '×',
  pl = 'ú',
  dl = 'û',
  gl = 'ù',
  fl = '¨',
  ml = 'ü',
  hl = 'ý',
  bl = '¥',
  yl = 'ÿ',
  wl = {
    AElig: xn,
    AMP: Sn,
    Aacute: qn,
    Acirc: An,
    Agrave: En,
    Aring: kn,
    Atilde: Ln,
    Auml: Nn,
    COPY: Tn,
    Ccedil: $n,
    ETH: Dn,
    Eacute: Cn,
    Ecirc: Rn,
    Egrave: In,
    Euml: On,
    GT: Fn,
    Iacute: Un,
    Icirc: _n,
    Igrave: Bn,
    Iuml: jn,
    LT: Hn,
    Ntilde: Gn,
    Oacute: Vn,
    Ocirc: zn,
    Ograve: Mn,
    Oslash: Pn,
    Otilde: Zn,
    Ouml: Yn,
    QUOT: Wn,
    REG: Jn,
    THORN: Kn,
    Uacute: Xn,
    Ucirc: Qn,
    Ugrave: ro,
    Uuml: ao,
    Yacute: eo,
    aacute: to,
    acirc: no,
    acute: oo,
    aelig: lo,
    agrave: io,
    amp: so,
    aring: co,
    atilde: vo,
    auml: uo,
    brvbar: po,
    ccedil: go,
    cedil: fo,
    cent: mo,
    copy: ho,
    curren: bo,
    deg: yo,
    divide: wo,
    eacute: xo,
    ecirc: So,
    egrave: qo,
    eth: Ao,
    euml: Eo,
    frac12: ko,
    frac14: Lo,
    frac34: No,
    gt: To,
    iacute: $o,
    icirc: Do,
    iexcl: Co,
    igrave: Ro,
    iquest: Io,
    iuml: Oo,
    laquo: Fo,
    lt: Uo,
    macr: _o,
    micro: Bo,
    middot: jo,
    nbsp: Ho,
    not: Go,
    ntilde: Vo,
    oacute: zo,
    ocirc: Mo,
    ograve: Po,
    ordf: Zo,
    ordm: Yo,
    oslash: Wo,
    otilde: Jo,
    ouml: Ko,
    para: Xo,
    plusmn: Qo,
    pound: rl,
    quot: al,
    raquo: el,
    reg: tl,
    sect: nl,
    shy: ol,
    sup1: ll,
    sup2: il,
    sup3: sl,
    szlig: cl,
    thorn: vl,
    times: ul,
    uacute: pl,
    ucirc: dl,
    ugrave: gl,
    uml: fl,
    uuml: ml,
    yacute: hl,
    yen: bl,
    yuml: yl,
  },
  xl = {
    0: '�',
    128: '€',
    130: '‚',
    131: 'ƒ',
    132: '„',
    133: '…',
    134: '†',
    135: '‡',
    136: 'ˆ',
    137: '‰',
    138: 'Š',
    139: '‹',
    140: 'Œ',
    142: 'Ž',
    145: '‘',
    146: '’',
    147: '“',
    148: '”',
    149: '•',
    150: '–',
    151: '—',
    152: '˜',
    153: '™',
    154: 'š',
    155: '›',
    156: 'œ',
    158: 'ž',
    159: 'Ÿ',
  },
  Va = Sl;
function Sl(r) {
  var a = typeof r == 'string' ? r.charCodeAt(0) : r;
  return a >= 48 && a <= 57;
}
var ql = Al;
function Al(r) {
  var a = typeof r == 'string' ? r.charCodeAt(0) : r;
  return (a >= 97 && a <= 102) || (a >= 65 && a <= 70) || (a >= 48 && a <= 57);
}
var El = kl;
function kl(r) {
  var a = typeof r == 'string' ? r.charCodeAt(0) : r;
  return (a >= 97 && a <= 122) || (a >= 65 && a <= 90);
}
var Ll = El,
  Nl = Va,
  Tl = $l;
function $l(r) {
  return Ll(r) || Nl(r);
}
var Dl = 'Æ',
  Cl = 'Æ',
  Rl = '&',
  Il = '&',
  Ol = 'Á',
  Fl = 'Á',
  Ul = 'Ă',
  _l = 'Â',
  Bl = 'Â',
  jl = 'А',
  Hl = '𝔄',
  Gl = 'À',
  Vl = 'À',
  zl = 'Α',
  Ml = 'Ā',
  Pl = '⩓',
  Zl = 'Ą',
  Yl = '𝔸',
  Wl = '⁡',
  Jl = 'Å',
  Kl = 'Å',
  Xl = '𝒜',
  Ql = '≔',
  ri = 'Ã',
  ai = 'Ã',
  ei = 'Ä',
  ti = 'Ä',
  ni = '∖',
  oi = '⫧',
  li = '⌆',
  ii = 'Б',
  si = '∵',
  ci = 'ℬ',
  vi = 'Β',
  ui = '𝔅',
  pi = '𝔹',
  di = '˘',
  gi = 'ℬ',
  fi = '≎',
  mi = 'Ч',
  hi = '©',
  bi = '©',
  yi = 'Ć',
  wi = '⋒',
  xi = 'ⅅ',
  Si = 'ℭ',
  qi = 'Č',
  Ai = 'Ç',
  Ei = 'Ç',
  ki = 'Ĉ',
  Li = '∰',
  Ni = 'Ċ',
  Ti = '¸',
  $i = '·',
  Di = 'ℭ',
  Ci = 'Χ',
  Ri = '⊙',
  Ii = '⊖',
  Oi = '⊕',
  Fi = '⊗',
  Ui = '∲',
  _i = '”',
  Bi = '’',
  ji = '∷',
  Hi = '⩴',
  Gi = '≡',
  Vi = '∯',
  zi = '∮',
  Mi = 'ℂ',
  Pi = '∐',
  Zi = '∳',
  Yi = '⨯',
  Wi = '𝒞',
  Ji = '⋓',
  Ki = '≍',
  Xi = 'ⅅ',
  Qi = '⤑',
  rs = 'Ђ',
  as = 'Ѕ',
  es = 'Џ',
  ts = '‡',
  ns = '↡',
  os = '⫤',
  ls = 'Ď',
  is = 'Д',
  ss = '∇',
  cs = 'Δ',
  vs = '𝔇',
  us = '´',
  ps = '˙',
  ds = '˝',
  gs = '`',
  fs = '˜',
  ms = '⋄',
  hs = 'ⅆ',
  bs = '𝔻',
  ys = '¨',
  ws = '⃜',
  xs = '≐',
  Ss = '∯',
  qs = '¨',
  As = '⇓',
  Es = '⇐',
  ks = '⇔',
  Ls = '⫤',
  Ns = '⟸',
  Ts = '⟺',
  $s = '⟹',
  Ds = '⇒',
  Cs = '⊨',
  Rs = '⇑',
  Is = '⇕',
  Os = '∥',
  Fs = '↓',
  Us = '⤓',
  _s = '⇵',
  Bs = '̑',
  js = '⥐',
  Hs = '⥞',
  Gs = '↽',
  Vs = '⥖',
  zs = '⥟',
  Ms = '⇁',
  Ps = '⥗',
  Zs = '⊤',
  Ys = '↧',
  Ws = '⇓',
  Js = '𝒟',
  Ks = 'Đ',
  Xs = 'Ŋ',
  Qs = 'Ð',
  rc = 'Ð',
  ac = 'É',
  ec = 'É',
  tc = 'Ě',
  nc = 'Ê',
  oc = 'Ê',
  lc = 'Э',
  ic = 'Ė',
  sc = '𝔈',
  cc = 'È',
  vc = 'È',
  uc = '∈',
  pc = 'Ē',
  dc = '◻',
  gc = '▫',
  fc = 'Ę',
  mc = '𝔼',
  hc = 'Ε',
  bc = '⩵',
  yc = '≂',
  wc = '⇌',
  xc = 'ℰ',
  Sc = '⩳',
  qc = 'Η',
  Ac = 'Ë',
  Ec = 'Ë',
  kc = '∃',
  Lc = 'ⅇ',
  Nc = 'Ф',
  Tc = '𝔉',
  $c = '◼',
  Dc = '▪',
  Cc = '𝔽',
  Rc = '∀',
  Ic = 'ℱ',
  Oc = 'ℱ',
  Fc = 'Ѓ',
  Uc = '>',
  _c = '>',
  Bc = 'Γ',
  jc = 'Ϝ',
  Hc = 'Ğ',
  Gc = 'Ģ',
  Vc = 'Ĝ',
  zc = 'Г',
  Mc = 'Ġ',
  Pc = '𝔊',
  Zc = '⋙',
  Yc = '𝔾',
  Wc = '≥',
  Jc = '⋛',
  Kc = '≧',
  Xc = '⪢',
  Qc = '≷',
  rv = '⩾',
  av = '≳',
  ev = '𝒢',
  tv = '≫',
  nv = 'Ъ',
  ov = 'ˇ',
  lv = '^',
  iv = 'Ĥ',
  sv = 'ℌ',
  cv = 'ℋ',
  vv = 'ℍ',
  uv = '─',
  pv = 'ℋ',
  dv = 'Ħ',
  gv = '≎',
  fv = '≏',
  mv = 'Е',
  hv = 'Ĳ',
  bv = 'Ё',
  yv = 'Í',
  wv = 'Í',
  xv = 'Î',
  Sv = 'Î',
  qv = 'И',
  Av = 'İ',
  Ev = 'ℑ',
  kv = 'Ì',
  Lv = 'Ì',
  Nv = 'ℑ',
  Tv = 'Ī',
  $v = 'ⅈ',
  Dv = '⇒',
  Cv = '∬',
  Rv = '∫',
  Iv = '⋂',
  Ov = '⁣',
  Fv = '⁢',
  Uv = 'Į',
  _v = '𝕀',
  Bv = 'Ι',
  jv = 'ℐ',
  Hv = 'Ĩ',
  Gv = 'І',
  Vv = 'Ï',
  zv = 'Ï',
  Mv = 'Ĵ',
  Pv = 'Й',
  Zv = '𝔍',
  Yv = '𝕁',
  Wv = '𝒥',
  Jv = 'Ј',
  Kv = 'Є',
  Xv = 'Х',
  Qv = 'Ќ',
  ru = 'Κ',
  au = 'Ķ',
  eu = 'К',
  tu = '𝔎',
  nu = '𝕂',
  ou = '𝒦',
  lu = 'Љ',
  iu = '<',
  su = '<',
  cu = 'Ĺ',
  vu = 'Λ',
  uu = '⟪',
  pu = 'ℒ',
  du = '↞',
  gu = 'Ľ',
  fu = 'Ļ',
  mu = 'Л',
  hu = '⟨',
  bu = '←',
  yu = '⇤',
  wu = '⇆',
  xu = '⌈',
  Su = '⟦',
  qu = '⥡',
  Au = '⇃',
  Eu = '⥙',
  ku = '⌊',
  Lu = '↔',
  Nu = '⥎',
  Tu = '⊣',
  $u = '↤',
  Du = '⥚',
  Cu = '⊲',
  Ru = '⧏',
  Iu = '⊴',
  Ou = '⥑',
  Fu = '⥠',
  Uu = '↿',
  _u = '⥘',
  Bu = '↼',
  ju = '⥒',
  Hu = '⇐',
  Gu = '⇔',
  Vu = '⋚',
  zu = '≦',
  Mu = '≶',
  Pu = '⪡',
  Zu = '⩽',
  Yu = '≲',
  Wu = '𝔏',
  Ju = '⋘',
  Ku = '⇚',
  Xu = 'Ŀ',
  Qu = '⟵',
  rp = '⟷',
  ap = '⟶',
  ep = '⟸',
  tp = '⟺',
  np = '⟹',
  op = '𝕃',
  lp = '↙',
  ip = '↘',
  sp = 'ℒ',
  cp = '↰',
  vp = 'Ł',
  up = '≪',
  pp = 'М',
  dp = ' ',
  gp = 'ℳ',
  fp = '𝔐',
  mp = '∓',
  hp = '𝕄',
  bp = 'ℳ',
  yp = 'Μ',
  wp = 'Њ',
  xp = 'Ń',
  Sp = 'Ň',
  qp = 'Ņ',
  Ap = 'Н',
  Ep = '​',
  kp = '​',
  Lp = '​',
  Np = '​',
  Tp = '≫',
  $p = '≪',
  Dp = `
`,
  Cp = '𝔑',
  Rp = '⁠',
  Ip = ' ',
  Op = 'ℕ',
  Fp = '⫬',
  Up = '≢',
  _p = '≭',
  Bp = '∦',
  jp = '∉',
  Hp = '≠',
  Gp = '≂̸',
  Vp = '∄',
  zp = '≯',
  Mp = '≱',
  Pp = '≧̸',
  Zp = '≫̸',
  Yp = '≹',
  Wp = '⩾̸',
  Jp = '≵',
  Kp = '≎̸',
  Xp = '≏̸',
  Qp = '⋪',
  rd = '⧏̸',
  ad = '⋬',
  ed = '≮',
  td = '≰',
  nd = '≸',
  od = '≪̸',
  ld = '⩽̸',
  id = '≴',
  sd = '⪢̸',
  cd = '⪡̸',
  vd = '⊀',
  ud = '⪯̸',
  pd = '⋠',
  dd = '∌',
  gd = '⋫',
  fd = '⧐̸',
  md = '⋭',
  hd = '⊏̸',
  bd = '⋢',
  yd = '⊐̸',
  wd = '⋣',
  xd = '⊂⃒',
  Sd = '⊈',
  qd = '⊁',
  Ad = '⪰̸',
  Ed = '⋡',
  kd = '≿̸',
  Ld = '⊃⃒',
  Nd = '⊉',
  Td = '≁',
  $d = '≄',
  Dd = '≇',
  Cd = '≉',
  Rd = '∤',
  Id = '𝒩',
  Od = 'Ñ',
  Fd = 'Ñ',
  Ud = 'Ν',
  _d = 'Œ',
  Bd = 'Ó',
  jd = 'Ó',
  Hd = 'Ô',
  Gd = 'Ô',
  Vd = 'О',
  zd = 'Ő',
  Md = '𝔒',
  Pd = 'Ò',
  Zd = 'Ò',
  Yd = 'Ō',
  Wd = 'Ω',
  Jd = 'Ο',
  Kd = '𝕆',
  Xd = '“',
  Qd = '‘',
  rg = '⩔',
  ag = '𝒪',
  eg = 'Ø',
  tg = 'Ø',
  ng = 'Õ',
  og = 'Õ',
  lg = '⨷',
  ig = 'Ö',
  sg = 'Ö',
  cg = '‾',
  vg = '⏞',
  ug = '⎴',
  pg = '⏜',
  dg = '∂',
  gg = 'П',
  fg = '𝔓',
  mg = 'Φ',
  hg = 'Π',
  bg = '±',
  yg = 'ℌ',
  wg = 'ℙ',
  xg = '⪻',
  Sg = '≺',
  qg = '⪯',
  Ag = '≼',
  Eg = '≾',
  kg = '″',
  Lg = '∏',
  Ng = '∷',
  Tg = '∝',
  $g = '𝒫',
  Dg = 'Ψ',
  Cg = '"',
  Rg = '"',
  Ig = '𝔔',
  Og = 'ℚ',
  Fg = '𝒬',
  Ug = '⤐',
  _g = '®',
  Bg = '®',
  jg = 'Ŕ',
  Hg = '⟫',
  Gg = '↠',
  Vg = '⤖',
  zg = 'Ř',
  Mg = 'Ŗ',
  Pg = 'Р',
  Zg = 'ℜ',
  Yg = '∋',
  Wg = '⇋',
  Jg = '⥯',
  Kg = 'ℜ',
  Xg = 'Ρ',
  Qg = '⟩',
  rf = '→',
  af = '⇥',
  ef = '⇄',
  tf = '⌉',
  nf = '⟧',
  of = '⥝',
  lf = '⇂',
  sf = '⥕',
  cf = '⌋',
  vf = '⊢',
  uf = '↦',
  pf = '⥛',
  df = '⊳',
  gf = '⧐',
  ff = '⊵',
  mf = '⥏',
  hf = '⥜',
  bf = '↾',
  yf = '⥔',
  wf = '⇀',
  xf = '⥓',
  Sf = '⇒',
  qf = 'ℝ',
  Af = '⥰',
  Ef = '⇛',
  kf = 'ℛ',
  Lf = '↱',
  Nf = '⧴',
  Tf = 'Щ',
  $f = 'Ш',
  Df = 'Ь',
  Cf = 'Ś',
  Rf = '⪼',
  If = 'Š',
  Of = 'Ş',
  Ff = 'Ŝ',
  Uf = 'С',
  _f = '𝔖',
  Bf = '↓',
  jf = '←',
  Hf = '→',
  Gf = '↑',
  Vf = 'Σ',
  zf = '∘',
  Mf = '𝕊',
  Pf = '√',
  Zf = '□',
  Yf = '⊓',
  Wf = '⊏',
  Jf = '⊑',
  Kf = '⊐',
  Xf = '⊒',
  Qf = '⊔',
  rm = '𝒮',
  am = '⋆',
  em = '⋐',
  tm = '⋐',
  nm = '⊆',
  om = '≻',
  lm = '⪰',
  im = '≽',
  sm = '≿',
  cm = '∋',
  vm = '∑',
  um = '⋑',
  pm = '⊃',
  dm = '⊇',
  gm = '⋑',
  fm = 'Þ',
  mm = 'Þ',
  hm = '™',
  bm = 'Ћ',
  ym = 'Ц',
  wm = '	',
  xm = 'Τ',
  Sm = 'Ť',
  qm = 'Ţ',
  Am = 'Т',
  Em = '𝔗',
  km = '∴',
  Lm = 'Θ',
  Nm = '  ',
  Tm = ' ',
  $m = '∼',
  Dm = '≃',
  Cm = '≅',
  Rm = '≈',
  Im = '𝕋',
  Om = '⃛',
  Fm = '𝒯',
  Um = 'Ŧ',
  _m = 'Ú',
  Bm = 'Ú',
  jm = '↟',
  Hm = '⥉',
  Gm = 'Ў',
  Vm = 'Ŭ',
  zm = 'Û',
  Mm = 'Û',
  Pm = 'У',
  Zm = 'Ű',
  Ym = '𝔘',
  Wm = 'Ù',
  Jm = 'Ù',
  Km = 'Ū',
  Xm = '_',
  Qm = '⏟',
  rh = '⎵',
  ah = '⏝',
  eh = '⋃',
  th = '⊎',
  nh = 'Ų',
  oh = '𝕌',
  lh = '↑',
  ih = '⤒',
  sh = '⇅',
  ch = '↕',
  vh = '⥮',
  uh = '⊥',
  ph = '↥',
  dh = '⇑',
  gh = '⇕',
  fh = '↖',
  mh = '↗',
  hh = 'ϒ',
  bh = 'Υ',
  yh = 'Ů',
  wh = '𝒰',
  xh = 'Ũ',
  Sh = 'Ü',
  qh = 'Ü',
  Ah = '⊫',
  Eh = '⫫',
  kh = 'В',
  Lh = '⊩',
  Nh = '⫦',
  Th = '⋁',
  $h = '‖',
  Dh = '‖',
  Ch = '∣',
  Rh = '|',
  Ih = '❘',
  Oh = '≀',
  Fh = ' ',
  Uh = '𝔙',
  _h = '𝕍',
  Bh = '𝒱',
  jh = '⊪',
  Hh = 'Ŵ',
  Gh = '⋀',
  Vh = '𝔚',
  zh = '𝕎',
  Mh = '𝒲',
  Ph = '𝔛',
  Zh = 'Ξ',
  Yh = '𝕏',
  Wh = '𝒳',
  Jh = 'Я',
  Kh = 'Ї',
  Xh = 'Ю',
  Qh = 'Ý',
  rb = 'Ý',
  ab = 'Ŷ',
  eb = 'Ы',
  tb = '𝔜',
  nb = '𝕐',
  ob = '𝒴',
  lb = 'Ÿ',
  ib = 'Ж',
  sb = 'Ź',
  cb = 'Ž',
  vb = 'З',
  ub = 'Ż',
  pb = '​',
  db = 'Ζ',
  gb = 'ℨ',
  fb = 'ℤ',
  mb = '𝒵',
  hb = 'á',
  bb = 'á',
  yb = 'ă',
  wb = '∾',
  xb = '∾̳',
  Sb = '∿',
  qb = 'â',
  Ab = 'â',
  Eb = '´',
  kb = '´',
  Lb = 'а',
  Nb = 'æ',
  Tb = 'æ',
  $b = '⁡',
  Db = '𝔞',
  Cb = 'à',
  Rb = 'à',
  Ib = 'ℵ',
  Ob = 'ℵ',
  Fb = 'α',
  Ub = 'ā',
  _b = '⨿',
  Bb = '&',
  jb = '&',
  Hb = '∧',
  Gb = '⩕',
  Vb = '⩜',
  zb = '⩘',
  Mb = '⩚',
  Pb = '∠',
  Zb = '⦤',
  Yb = '∠',
  Wb = '∡',
  Jb = '⦨',
  Kb = '⦩',
  Xb = '⦪',
  Qb = '⦫',
  ry = '⦬',
  ay = '⦭',
  ey = '⦮',
  ty = '⦯',
  ny = '∟',
  oy = '⊾',
  ly = '⦝',
  iy = '∢',
  sy = 'Å',
  cy = '⍼',
  vy = 'ą',
  uy = '𝕒',
  py = '≈',
  dy = '⩰',
  gy = '⩯',
  fy = '≊',
  my = '≋',
  hy = "'",
  by = '≈',
  yy = '≊',
  wy = 'å',
  xy = 'å',
  Sy = '𝒶',
  qy = '*',
  Ay = '≈',
  Ey = '≍',
  ky = 'ã',
  Ly = 'ã',
  Ny = 'ä',
  Ty = 'ä',
  $y = '∳',
  Dy = '⨑',
  Cy = '⫭',
  Ry = '≌',
  Iy = '϶',
  Oy = '‵',
  Fy = '∽',
  Uy = '⋍',
  _y = '⊽',
  By = '⌅',
  jy = '⌅',
  Hy = '⎵',
  Gy = '⎶',
  Vy = '≌',
  zy = 'б',
  My = '„',
  Py = '∵',
  Zy = '∵',
  Yy = '⦰',
  Wy = '϶',
  Jy = 'ℬ',
  Ky = 'β',
  Xy = 'ℶ',
  Qy = '≬',
  rw = '𝔟',
  aw = '⋂',
  ew = '◯',
  tw = '⋃',
  nw = '⨀',
  ow = '⨁',
  lw = '⨂',
  iw = '⨆',
  sw = '★',
  cw = '▽',
  vw = '△',
  uw = '⨄',
  pw = '⋁',
  dw = '⋀',
  gw = '⤍',
  fw = '⧫',
  mw = '▪',
  hw = '▴',
  bw = '▾',
  yw = '◂',
  ww = '▸',
  xw = '␣',
  Sw = '▒',
  qw = '░',
  Aw = '▓',
  Ew = '█',
  kw = '=⃥',
  Lw = '≡⃥',
  Nw = '⌐',
  Tw = '𝕓',
  $w = '⊥',
  Dw = '⊥',
  Cw = '⋈',
  Rw = '╗',
  Iw = '╔',
  Ow = '╖',
  Fw = '╓',
  Uw = '═',
  _w = '╦',
  Bw = '╩',
  jw = '╤',
  Hw = '╧',
  Gw = '╝',
  Vw = '╚',
  zw = '╜',
  Mw = '╙',
  Pw = '║',
  Zw = '╬',
  Yw = '╣',
  Ww = '╠',
  Jw = '╫',
  Kw = '╢',
  Xw = '╟',
  Qw = '⧉',
  rx = '╕',
  ax = '╒',
  ex = '┐',
  tx = '┌',
  nx = '─',
  ox = '╥',
  lx = '╨',
  ix = '┬',
  sx = '┴',
  cx = '⊟',
  vx = '⊞',
  ux = '⊠',
  px = '╛',
  dx = '╘',
  gx = '┘',
  fx = '└',
  mx = '│',
  hx = '╪',
  bx = '╡',
  yx = '╞',
  wx = '┼',
  xx = '┤',
  Sx = '├',
  qx = '‵',
  Ax = '˘',
  Ex = '¦',
  kx = '¦',
  Lx = '𝒷',
  Nx = '⁏',
  Tx = '∽',
  $x = '⋍',
  Dx = '\\',
  Cx = '⧅',
  Rx = '⟈',
  Ix = '•',
  Ox = '•',
  Fx = '≎',
  Ux = '⪮',
  _x = '≏',
  Bx = '≏',
  jx = 'ć',
  Hx = '∩',
  Gx = '⩄',
  Vx = '⩉',
  zx = '⩋',
  Mx = '⩇',
  Px = '⩀',
  Zx = '∩︀',
  Yx = '⁁',
  Wx = 'ˇ',
  Jx = '⩍',
  Kx = 'č',
  Xx = 'ç',
  Qx = 'ç',
  rS = 'ĉ',
  aS = '⩌',
  eS = '⩐',
  tS = 'ċ',
  nS = '¸',
  oS = '¸',
  lS = '⦲',
  iS = '¢',
  sS = '¢',
  cS = '·',
  vS = '𝔠',
  uS = 'ч',
  pS = '✓',
  dS = '✓',
  gS = 'χ',
  fS = '○',
  mS = '⧃',
  hS = 'ˆ',
  bS = '≗',
  yS = '↺',
  wS = '↻',
  xS = '®',
  SS = 'Ⓢ',
  qS = '⊛',
  AS = '⊚',
  ES = '⊝',
  kS = '≗',
  LS = '⨐',
  NS = '⫯',
  TS = '⧂',
  $S = '♣',
  DS = '♣',
  CS = ':',
  RS = '≔',
  IS = '≔',
  OS = ',',
  FS = '@',
  US = '∁',
  _S = '∘',
  BS = '∁',
  jS = 'ℂ',
  HS = '≅',
  GS = '⩭',
  VS = '∮',
  zS = '𝕔',
  MS = '∐',
  PS = '©',
  ZS = '©',
  YS = '℗',
  WS = '↵',
  JS = '✗',
  KS = '𝒸',
  XS = '⫏',
  QS = '⫑',
  rq = '⫐',
  aq = '⫒',
  eq = '⋯',
  tq = '⤸',
  nq = '⤵',
  oq = '⋞',
  lq = '⋟',
  iq = '↶',
  sq = '⤽',
  cq = '∪',
  vq = '⩈',
  uq = '⩆',
  pq = '⩊',
  dq = '⊍',
  gq = '⩅',
  fq = '∪︀',
  mq = '↷',
  hq = '⤼',
  bq = '⋞',
  yq = '⋟',
  wq = '⋎',
  xq = '⋏',
  Sq = '¤',
  qq = '¤',
  Aq = '↶',
  Eq = '↷',
  kq = '⋎',
  Lq = '⋏',
  Nq = '∲',
  Tq = '∱',
  $q = '⌭',
  Dq = '⇓',
  Cq = '⥥',
  Rq = '†',
  Iq = 'ℸ',
  Oq = '↓',
  Fq = '‐',
  Uq = '⊣',
  _q = '⤏',
  Bq = '˝',
  jq = 'ď',
  Hq = 'д',
  Gq = 'ⅆ',
  Vq = '‡',
  zq = '⇊',
  Mq = '⩷',
  Pq = '°',
  Zq = '°',
  Yq = 'δ',
  Wq = '⦱',
  Jq = '⥿',
  Kq = '𝔡',
  Xq = '⇃',
  Qq = '⇂',
  rA = '⋄',
  aA = '⋄',
  eA = '♦',
  tA = '♦',
  nA = '¨',
  oA = 'ϝ',
  lA = '⋲',
  iA = '÷',
  sA = '÷',
  cA = '÷',
  vA = '⋇',
  uA = '⋇',
  pA = 'ђ',
  dA = '⌞',
  gA = '⌍',
  fA = '$',
  mA = '𝕕',
  hA = '˙',
  bA = '≐',
  yA = '≑',
  wA = '∸',
  xA = '∔',
  SA = '⊡',
  qA = '⌆',
  AA = '↓',
  EA = '⇊',
  kA = '⇃',
  LA = '⇂',
  NA = '⤐',
  TA = '⌟',
  $A = '⌌',
  DA = '𝒹',
  CA = 'ѕ',
  RA = '⧶',
  IA = 'đ',
  OA = '⋱',
  FA = '▿',
  UA = '▾',
  _A = '⇵',
  BA = '⥯',
  jA = '⦦',
  HA = 'џ',
  GA = '⟿',
  VA = '⩷',
  zA = '≑',
  MA = 'é',
  PA = 'é',
  ZA = '⩮',
  YA = 'ě',
  WA = 'ê',
  JA = 'ê',
  KA = '≕',
  XA = 'э',
  QA = 'ė',
  rE = 'ⅇ',
  aE = '≒',
  eE = '𝔢',
  tE = '⪚',
  nE = 'è',
  oE = 'è',
  lE = '⪖',
  iE = '⪘',
  sE = '⪙',
  cE = '⏧',
  vE = 'ℓ',
  uE = '⪕',
  pE = '⪗',
  dE = 'ē',
  gE = '∅',
  fE = '∅',
  mE = '∅',
  hE = ' ',
  bE = ' ',
  yE = ' ',
  wE = 'ŋ',
  xE = ' ',
  SE = 'ę',
  qE = '𝕖',
  AE = '⋕',
  EE = '⧣',
  kE = '⩱',
  LE = 'ε',
  NE = 'ε',
  TE = 'ϵ',
  $E = '≖',
  DE = '≕',
  CE = '≂',
  RE = '⪖',
  IE = '⪕',
  OE = '=',
  FE = '≟',
  UE = '≡',
  _E = '⩸',
  BE = '⧥',
  jE = '≓',
  HE = '⥱',
  GE = 'ℯ',
  VE = '≐',
  zE = '≂',
  ME = 'η',
  PE = 'ð',
  ZE = 'ð',
  YE = 'ë',
  WE = 'ë',
  JE = '€',
  KE = '!',
  XE = '∃',
  QE = 'ℰ',
  rk = 'ⅇ',
  ak = '≒',
  ek = 'ф',
  tk = '♀',
  nk = 'ﬃ',
  ok = 'ﬀ',
  lk = 'ﬄ',
  ik = '𝔣',
  sk = 'ﬁ',
  ck = 'fj',
  vk = '♭',
  uk = 'ﬂ',
  pk = '▱',
  dk = 'ƒ',
  gk = '𝕗',
  fk = '∀',
  mk = '⋔',
  hk = '⫙',
  bk = '⨍',
  yk = '¼',
  wk = '½',
  xk = '⅓',
  Sk = '¼',
  qk = '⅕',
  Ak = '⅙',
  Ek = '⅛',
  kk = '⅔',
  Lk = '⅖',
  Nk = '¾',
  Tk = '¾',
  $k = '⅗',
  Dk = '⅜',
  Ck = '⅘',
  Rk = '⅚',
  Ik = '⅝',
  Ok = '⅞',
  Fk = '⁄',
  Uk = '⌢',
  _k = '𝒻',
  Bk = '≧',
  jk = '⪌',
  Hk = 'ǵ',
  Gk = 'γ',
  Vk = 'ϝ',
  zk = '⪆',
  Mk = 'ğ',
  Pk = 'ĝ',
  Zk = 'г',
  Yk = 'ġ',
  Wk = '≥',
  Jk = '⋛',
  Kk = '≥',
  Xk = '≧',
  Qk = '⩾',
  r1 = '⩾',
  a1 = '⪩',
  e1 = '⪀',
  t1 = '⪂',
  n1 = '⪄',
  o1 = '⋛︀',
  l1 = '⪔',
  i1 = '𝔤',
  s1 = '≫',
  c1 = '⋙',
  v1 = 'ℷ',
  u1 = 'ѓ',
  p1 = '≷',
  d1 = '⪒',
  g1 = '⪥',
  f1 = '⪤',
  m1 = '≩',
  h1 = '⪊',
  b1 = '⪊',
  y1 = '⪈',
  w1 = '⪈',
  x1 = '≩',
  S1 = '⋧',
  q1 = '𝕘',
  A1 = '`',
  E1 = 'ℊ',
  k1 = '≳',
  L1 = '⪎',
  N1 = '⪐',
  T1 = '>',
  $1 = '>',
  D1 = '⪧',
  C1 = '⩺',
  R1 = '⋗',
  I1 = '⦕',
  O1 = '⩼',
  F1 = '⪆',
  U1 = '⥸',
  _1 = '⋗',
  B1 = '⋛',
  j1 = '⪌',
  H1 = '≷',
  G1 = '≳',
  V1 = '≩︀',
  z1 = '≩︀',
  M1 = '⇔',
  P1 = ' ',
  Z1 = '½',
  Y1 = 'ℋ',
  W1 = 'ъ',
  J1 = '↔',
  K1 = '⥈',
  X1 = '↭',
  Q1 = 'ℏ',
  rL = 'ĥ',
  aL = '♥',
  eL = '♥',
  tL = '…',
  nL = '⊹',
  oL = '𝔥',
  lL = '⤥',
  iL = '⤦',
  sL = '⇿',
  cL = '∻',
  vL = '↩',
  uL = '↪',
  pL = '𝕙',
  dL = '―',
  gL = '𝒽',
  fL = 'ℏ',
  mL = 'ħ',
  hL = '⁃',
  bL = '‐',
  yL = 'í',
  wL = 'í',
  xL = '⁣',
  SL = 'î',
  qL = 'î',
  AL = 'и',
  EL = 'е',
  kL = '¡',
  LL = '¡',
  NL = '⇔',
  TL = '𝔦',
  $L = 'ì',
  DL = 'ì',
  CL = 'ⅈ',
  RL = '⨌',
  IL = '∭',
  OL = '⧜',
  FL = '℩',
  UL = 'ĳ',
  _L = 'ī',
  BL = 'ℑ',
  jL = 'ℐ',
  HL = 'ℑ',
  GL = 'ı',
  VL = '⊷',
  zL = 'Ƶ',
  ML = '℅',
  PL = '∞',
  ZL = '⧝',
  YL = 'ı',
  WL = '∫',
  JL = '⊺',
  KL = 'ℤ',
  XL = '⊺',
  QL = '⨗',
  rN = '⨼',
  aN = 'ё',
  eN = 'į',
  tN = '𝕚',
  nN = 'ι',
  oN = '⨼',
  lN = '¿',
  iN = '¿',
  sN = '𝒾',
  cN = '∈',
  vN = '⋹',
  uN = '⋵',
  pN = '⋴',
  dN = '⋳',
  gN = '∈',
  fN = '⁢',
  mN = 'ĩ',
  hN = 'і',
  bN = 'ï',
  yN = 'ï',
  wN = 'ĵ',
  xN = 'й',
  SN = '𝔧',
  qN = 'ȷ',
  AN = '𝕛',
  EN = '𝒿',
  kN = 'ј',
  LN = 'є',
  NN = 'κ',
  TN = 'ϰ',
  $N = 'ķ',
  DN = 'к',
  CN = '𝔨',
  RN = 'ĸ',
  IN = 'х',
  ON = 'ќ',
  FN = '𝕜',
  UN = '𝓀',
  _N = '⇚',
  BN = '⇐',
  jN = '⤛',
  HN = '⤎',
  GN = '≦',
  VN = '⪋',
  zN = '⥢',
  MN = 'ĺ',
  PN = '⦴',
  ZN = 'ℒ',
  YN = 'λ',
  WN = '⟨',
  JN = '⦑',
  KN = '⟨',
  XN = '⪅',
  QN = '«',
  rT = '«',
  aT = '←',
  eT = '⇤',
  tT = '⤟',
  nT = '⤝',
  oT = '↩',
  lT = '↫',
  iT = '⤹',
  sT = '⥳',
  cT = '↢',
  vT = '⪫',
  uT = '⤙',
  pT = '⪭',
  dT = '⪭︀',
  gT = '⤌',
  fT = '❲',
  mT = '{',
  hT = '[',
  bT = '⦋',
  yT = '⦏',
  wT = '⦍',
  xT = 'ľ',
  ST = 'ļ',
  qT = '⌈',
  AT = '{',
  ET = 'л',
  kT = '⤶',
  LT = '“',
  NT = '„',
  TT = '⥧',
  $T = '⥋',
  DT = '↲',
  CT = '≤',
  RT = '←',
  IT = '↢',
  OT = '↽',
  FT = '↼',
  UT = '⇇',
  _T = '↔',
  BT = '⇆',
  jT = '⇋',
  HT = '↭',
  GT = '⋋',
  VT = '⋚',
  zT = '≤',
  MT = '≦',
  PT = '⩽',
  ZT = '⩽',
  YT = '⪨',
  WT = '⩿',
  JT = '⪁',
  KT = '⪃',
  XT = '⋚︀',
  QT = '⪓',
  r$ = '⪅',
  a$ = '⋖',
  e$ = '⋚',
  t$ = '⪋',
  n$ = '≶',
  o$ = '≲',
  l$ = '⥼',
  i$ = '⌊',
  s$ = '𝔩',
  c$ = '≶',
  v$ = '⪑',
  u$ = '↽',
  p$ = '↼',
  d$ = '⥪',
  g$ = '▄',
  f$ = 'љ',
  m$ = '≪',
  h$ = '⇇',
  b$ = '⌞',
  y$ = '⥫',
  w$ = '◺',
  x$ = 'ŀ',
  S$ = '⎰',
  q$ = '⎰',
  A$ = '≨',
  E$ = '⪉',
  k$ = '⪉',
  L$ = '⪇',
  N$ = '⪇',
  T$ = '≨',
  $$ = '⋦',
  D$ = '⟬',
  C$ = '⇽',
  R$ = '⟦',
  I$ = '⟵',
  O$ = '⟷',
  F$ = '⟼',
  U$ = '⟶',
  _$ = '↫',
  B$ = '↬',
  j$ = '⦅',
  H$ = '𝕝',
  G$ = '⨭',
  V$ = '⨴',
  z$ = '∗',
  M$ = '_',
  P$ = '◊',
  Z$ = '◊',
  Y$ = '⧫',
  W$ = '(',
  J$ = '⦓',
  K$ = '⇆',
  X$ = '⌟',
  Q$ = '⇋',
  rD = '⥭',
  aD = '‎',
  eD = '⊿',
  tD = '‹',
  nD = '𝓁',
  oD = '↰',
  lD = '≲',
  iD = '⪍',
  sD = '⪏',
  cD = '[',
  vD = '‘',
  uD = '‚',
  pD = 'ł',
  dD = '<',
  gD = '<',
  fD = '⪦',
  mD = '⩹',
  hD = '⋖',
  bD = '⋋',
  yD = '⋉',
  wD = '⥶',
  xD = '⩻',
  SD = '⦖',
  qD = '◃',
  AD = '⊴',
  ED = '◂',
  kD = '⥊',
  LD = '⥦',
  ND = '≨︀',
  TD = '≨︀',
  $D = '∺',
  DD = '¯',
  CD = '¯',
  RD = '♂',
  ID = '✠',
  OD = '✠',
  FD = '↦',
  UD = '↦',
  _D = '↧',
  BD = '↤',
  jD = '↥',
  HD = '▮',
  GD = '⨩',
  VD = 'м',
  zD = '—',
  MD = '∡',
  PD = '𝔪',
  ZD = '℧',
  YD = 'µ',
  WD = 'µ',
  JD = '∣',
  KD = '*',
  XD = '⫰',
  QD = '·',
  r0 = '·',
  a0 = '−',
  e0 = '⊟',
  t0 = '∸',
  n0 = '⨪',
  o0 = '⫛',
  l0 = '…',
  i0 = '∓',
  s0 = '⊧',
  c0 = '𝕞',
  v0 = '∓',
  u0 = '𝓂',
  p0 = '∾',
  d0 = 'μ',
  g0 = '⊸',
  f0 = '⊸',
  m0 = '⋙̸',
  h0 = '≫⃒',
  b0 = '≫̸',
  y0 = '⇍',
  w0 = '⇎',
  x0 = '⋘̸',
  S0 = '≪⃒',
  q0 = '≪̸',
  A0 = '⇏',
  E0 = '⊯',
  k0 = '⊮',
  L0 = '∇',
  N0 = 'ń',
  T0 = '∠⃒',
  $0 = '≉',
  D0 = '⩰̸',
  C0 = '≋̸',
  R0 = 'ŉ',
  I0 = '≉',
  O0 = '♮',
  F0 = '♮',
  U0 = 'ℕ',
  _0 = ' ',
  B0 = ' ',
  j0 = '≎̸',
  H0 = '≏̸',
  G0 = '⩃',
  V0 = 'ň',
  z0 = 'ņ',
  M0 = '≇',
  P0 = '⩭̸',
  Z0 = '⩂',
  Y0 = 'н',
  W0 = '–',
  J0 = '≠',
  K0 = '⇗',
  X0 = '⤤',
  Q0 = '↗',
  rC = '↗',
  aC = '≐̸',
  eC = '≢',
  tC = '⤨',
  nC = '≂̸',
  oC = '∄',
  lC = '∄',
  iC = '𝔫',
  sC = '≧̸',
  cC = '≱',
  vC = '≱',
  uC = '≧̸',
  pC = '⩾̸',
  dC = '⩾̸',
  gC = '≵',
  fC = '≯',
  mC = '≯',
  hC = '⇎',
  bC = '↮',
  yC = '⫲',
  wC = '∋',
  xC = '⋼',
  SC = '⋺',
  qC = '∋',
  AC = 'њ',
  EC = '⇍',
  kC = '≦̸',
  LC = '↚',
  NC = '‥',
  TC = '≰',
  $C = '↚',
  DC = '↮',
  CC = '≰',
  RC = '≦̸',
  IC = '⩽̸',
  OC = '⩽̸',
  FC = '≮',
  UC = '≴',
  _C = '≮',
  BC = '⋪',
  jC = '⋬',
  HC = '∤',
  GC = '𝕟',
  VC = '¬',
  zC = '¬',
  MC = '∉',
  PC = '⋹̸',
  ZC = '⋵̸',
  YC = '∉',
  WC = '⋷',
  JC = '⋶',
  KC = '∌',
  XC = '∌',
  QC = '⋾',
  rR = '⋽',
  aR = '∦',
  eR = '∦',
  tR = '⫽⃥',
  nR = '∂̸',
  oR = '⨔',
  lR = '⊀',
  iR = '⋠',
  sR = '⪯̸',
  cR = '⊀',
  vR = '⪯̸',
  uR = '⇏',
  pR = '↛',
  dR = '⤳̸',
  gR = '↝̸',
  fR = '↛',
  mR = '⋫',
  hR = '⋭',
  bR = '⊁',
  yR = '⋡',
  wR = '⪰̸',
  xR = '𝓃',
  SR = '∤',
  qR = '∦',
  AR = '≁',
  ER = '≄',
  kR = '≄',
  LR = '∤',
  NR = '∦',
  TR = '⋢',
  $R = '⋣',
  DR = '⊄',
  CR = '⫅̸',
  RR = '⊈',
  IR = '⊂⃒',
  OR = '⊈',
  FR = '⫅̸',
  UR = '⊁',
  _R = '⪰̸',
  BR = '⊅',
  jR = '⫆̸',
  HR = '⊉',
  GR = '⊃⃒',
  VR = '⊉',
  zR = '⫆̸',
  MR = '≹',
  PR = 'ñ',
  ZR = 'ñ',
  YR = '≸',
  WR = '⋪',
  JR = '⋬',
  KR = '⋫',
  XR = '⋭',
  QR = 'ν',
  rI = '#',
  aI = '№',
  eI = ' ',
  tI = '⊭',
  nI = '⤄',
  oI = '≍⃒',
  lI = '⊬',
  iI = '≥⃒',
  sI = '>⃒',
  cI = '⧞',
  vI = '⤂',
  uI = '≤⃒',
  pI = '<⃒',
  dI = '⊴⃒',
  gI = '⤃',
  fI = '⊵⃒',
  mI = '∼⃒',
  hI = '⇖',
  bI = '⤣',
  yI = '↖',
  wI = '↖',
  xI = '⤧',
  SI = 'Ⓢ',
  qI = 'ó',
  AI = 'ó',
  EI = '⊛',
  kI = 'ô',
  LI = 'ô',
  NI = 'о',
  TI = '⊝',
  $I = 'ő',
  DI = '⨸',
  CI = '⊙',
  RI = '⦼',
  II = 'œ',
  OI = '⦿',
  FI = '𝔬',
  UI = '˛',
  _I = 'ò',
  BI = 'ò',
  jI = '⧁',
  HI = '⦵',
  GI = 'Ω',
  VI = '∮',
  zI = '↺',
  MI = '⦾',
  PI = '⦻',
  ZI = '‾',
  YI = '⧀',
  WI = 'ō',
  JI = 'ω',
  KI = 'ο',
  XI = '⦶',
  QI = '⊖',
  rO = '𝕠',
  aO = '⦷',
  eO = '⦹',
  tO = '⊕',
  nO = '∨',
  oO = '↻',
  lO = 'º',
  iO = 'ℴ',
  sO = 'ℴ',
  cO = 'ª',
  vO = 'º',
  uO = '⊶',
  pO = '⩖',
  dO = '⩗',
  gO = '⩛',
  fO = 'ℴ',
  mO = 'ø',
  hO = 'ø',
  bO = '⊘',
  yO = 'õ',
  wO = 'õ',
  xO = '⊗',
  SO = '⨶',
  qO = 'ö',
  AO = 'ö',
  EO = '⌽',
  kO = '¶',
  LO = '¶',
  NO = '∥',
  TO = '⫳',
  $O = '⫽',
  DO = '∂',
  CO = 'п',
  RO = '%',
  IO = '.',
  OO = '‰',
  FO = '⊥',
  UO = '‱',
  _O = '𝔭',
  BO = 'φ',
  jO = 'ϕ',
  HO = 'ℳ',
  GO = '☎',
  VO = 'π',
  zO = '⋔',
  MO = 'ϖ',
  PO = 'ℏ',
  ZO = 'ℎ',
  YO = 'ℏ',
  WO = '+',
  JO = '⨣',
  KO = '⊞',
  XO = '⨢',
  QO = '∔',
  rF = '⨥',
  aF = '⩲',
  eF = '±',
  tF = '±',
  nF = '⨦',
  oF = '⨧',
  lF = '±',
  iF = '⨕',
  sF = '𝕡',
  cF = '£',
  vF = '£',
  uF = '≺',
  pF = '⪳',
  dF = '⪷',
  gF = '≼',
  fF = '⪯',
  mF = '≺',
  hF = '⪷',
  bF = '≼',
  yF = '⪯',
  wF = '⪹',
  xF = '⪵',
  SF = '⋨',
  qF = '≾',
  AF = '′',
  EF = 'ℙ',
  kF = '⪵',
  LF = '⪹',
  NF = '⋨',
  TF = '∏',
  $F = '⌮',
  DF = '⌒',
  CF = '⌓',
  RF = '∝',
  IF = '∝',
  OF = '≾',
  FF = '⊰',
  UF = '𝓅',
  _F = 'ψ',
  BF = ' ',
  jF = '𝔮',
  HF = '⨌',
  GF = '𝕢',
  VF = '⁗',
  zF = '𝓆',
  MF = 'ℍ',
  PF = '⨖',
  ZF = '?',
  YF = '≟',
  WF = '"',
  JF = '"',
  KF = '⇛',
  XF = '⇒',
  QF = '⤜',
  rU = '⤏',
  aU = '⥤',
  eU = '∽̱',
  tU = 'ŕ',
  nU = '√',
  oU = '⦳',
  lU = '⟩',
  iU = '⦒',
  sU = '⦥',
  cU = '⟩',
  vU = '»',
  uU = '»',
  pU = '→',
  dU = '⥵',
  gU = '⇥',
  fU = '⤠',
  mU = '⤳',
  hU = '⤞',
  bU = '↪',
  yU = '↬',
  wU = '⥅',
  xU = '⥴',
  SU = '↣',
  qU = '↝',
  AU = '⤚',
  EU = '∶',
  kU = 'ℚ',
  LU = '⤍',
  NU = '❳',
  TU = '}',
  $U = ']',
  DU = '⦌',
  CU = '⦎',
  RU = '⦐',
  IU = 'ř',
  OU = 'ŗ',
  FU = '⌉',
  UU = '}',
  _U = 'р',
  BU = '⤷',
  jU = '⥩',
  HU = '”',
  GU = '”',
  VU = '↳',
  zU = 'ℜ',
  MU = 'ℛ',
  PU = 'ℜ',
  ZU = 'ℝ',
  YU = '▭',
  WU = '®',
  JU = '®',
  KU = '⥽',
  XU = '⌋',
  QU = '𝔯',
  r_ = '⇁',
  a_ = '⇀',
  e_ = '⥬',
  t_ = 'ρ',
  n_ = 'ϱ',
  o_ = '→',
  l_ = '↣',
  i_ = '⇁',
  s_ = '⇀',
  c_ = '⇄',
  v_ = '⇌',
  u_ = '⇉',
  p_ = '↝',
  d_ = '⋌',
  g_ = '˚',
  f_ = '≓',
  m_ = '⇄',
  h_ = '⇌',
  b_ = '‏',
  y_ = '⎱',
  w_ = '⎱',
  x_ = '⫮',
  S_ = '⟭',
  q_ = '⇾',
  A_ = '⟧',
  E_ = '⦆',
  k_ = '𝕣',
  L_ = '⨮',
  N_ = '⨵',
  T_ = ')',
  $_ = '⦔',
  D_ = '⨒',
  C_ = '⇉',
  R_ = '›',
  I_ = '𝓇',
  O_ = '↱',
  F_ = ']',
  U_ = '’',
  __ = '’',
  B_ = '⋌',
  j_ = '⋊',
  H_ = '▹',
  G_ = '⊵',
  V_ = '▸',
  z_ = '⧎',
  M_ = '⥨',
  P_ = '℞',
  Z_ = 'ś',
  Y_ = '‚',
  W_ = '≻',
  J_ = '⪴',
  K_ = '⪸',
  X_ = 'š',
  Q_ = '≽',
  rB = '⪰',
  aB = 'ş',
  eB = 'ŝ',
  tB = '⪶',
  nB = '⪺',
  oB = '⋩',
  lB = '⨓',
  iB = '≿',
  sB = 'с',
  cB = '⋅',
  vB = '⊡',
  uB = '⩦',
  pB = '⇘',
  dB = '⤥',
  gB = '↘',
  fB = '↘',
  mB = '§',
  hB = '§',
  bB = ';',
  yB = '⤩',
  wB = '∖',
  xB = '∖',
  SB = '✶',
  qB = '𝔰',
  AB = '⌢',
  EB = '♯',
  kB = 'щ',
  LB = 'ш',
  NB = '∣',
  TB = '∥',
  $B = '­',
  DB = '­',
  CB = 'σ',
  RB = 'ς',
  IB = 'ς',
  OB = '∼',
  FB = '⩪',
  UB = '≃',
  _B = '≃',
  BB = '⪞',
  jB = '⪠',
  HB = '⪝',
  GB = '⪟',
  VB = '≆',
  zB = '⨤',
  MB = '⥲',
  PB = '←',
  ZB = '∖',
  YB = '⨳',
  WB = '⧤',
  JB = '∣',
  KB = '⌣',
  XB = '⪪',
  QB = '⪬',
  rj = '⪬︀',
  aj = 'ь',
  ej = '/',
  tj = '⧄',
  nj = '⌿',
  oj = '𝕤',
  lj = '♠',
  ij = '♠',
  sj = '∥',
  cj = '⊓',
  vj = '⊓︀',
  uj = '⊔',
  pj = '⊔︀',
  dj = '⊏',
  gj = '⊑',
  fj = '⊏',
  mj = '⊑',
  hj = '⊐',
  bj = '⊒',
  yj = '⊐',
  wj = '⊒',
  xj = '□',
  Sj = '□',
  qj = '▪',
  Aj = '▪',
  Ej = '→',
  kj = '𝓈',
  Lj = '∖',
  Nj = '⌣',
  Tj = '⋆',
  $j = '☆',
  Dj = '★',
  Cj = 'ϵ',
  Rj = 'ϕ',
  Ij = '¯',
  Oj = '⊂',
  Fj = '⫅',
  Uj = '⪽',
  _j = '⊆',
  Bj = '⫃',
  jj = '⫁',
  Hj = '⫋',
  Gj = '⊊',
  Vj = '⪿',
  zj = '⥹',
  Mj = '⊂',
  Pj = '⊆',
  Zj = '⫅',
  Yj = '⊊',
  Wj = '⫋',
  Jj = '⫇',
  Kj = '⫕',
  Xj = '⫓',
  Qj = '≻',
  r2 = '⪸',
  a2 = '≽',
  e2 = '⪰',
  t2 = '⪺',
  n2 = '⪶',
  o2 = '⋩',
  l2 = '≿',
  i2 = '∑',
  s2 = '♪',
  c2 = '⊃',
  v2 = '¹',
  u2 = '²',
  p2 = '³',
  d2 = '⫆',
  g2 = '⪾',
  f2 = '⫘',
  m2 = '⊇',
  h2 = '⫄',
  b2 = '⟉',
  y2 = '⫗',
  w2 = '⥻',
  x2 = '⫂',
  S2 = '⫌',
  q2 = '⊋',
  A2 = '⫀',
  E2 = '⊃',
  k2 = '⊇',
  L2 = '⫆',
  N2 = '⊋',
  T2 = '⫌',
  $2 = '⫈',
  D2 = '⫔',
  C2 = '⫖',
  R2 = '⇙',
  I2 = '⤦',
  O2 = '↙',
  F2 = '↙',
  U2 = '⤪',
  _2 = 'ß',
  B2 = 'ß',
  j2 = '⌖',
  H2 = 'τ',
  G2 = '⎴',
  V2 = 'ť',
  z2 = 'ţ',
  M2 = 'т',
  P2 = '⃛',
  Z2 = '⌕',
  Y2 = '𝔱',
  W2 = '∴',
  J2 = '∴',
  K2 = 'θ',
  X2 = 'ϑ',
  Q2 = 'ϑ',
  rH = '≈',
  aH = '∼',
  eH = ' ',
  tH = '≈',
  nH = '∼',
  oH = 'þ',
  lH = 'þ',
  iH = '˜',
  sH = '×',
  cH = '×',
  vH = '⊠',
  uH = '⨱',
  pH = '⨰',
  dH = '∭',
  gH = '⤨',
  fH = '⊤',
  mH = '⌶',
  hH = '⫱',
  bH = '𝕥',
  yH = '⫚',
  wH = '⤩',
  xH = '‴',
  SH = '™',
  qH = '▵',
  AH = '▿',
  EH = '◃',
  kH = '⊴',
  LH = '≜',
  NH = '▹',
  TH = '⊵',
  $H = '◬',
  DH = '≜',
  CH = '⨺',
  RH = '⨹',
  IH = '⧍',
  OH = '⨻',
  FH = '⏢',
  UH = '𝓉',
  _H = 'ц',
  BH = 'ћ',
  jH = 'ŧ',
  HH = '≬',
  GH = '↞',
  VH = '↠',
  zH = '⇑',
  MH = '⥣',
  PH = 'ú',
  ZH = 'ú',
  YH = '↑',
  WH = 'ў',
  JH = 'ŭ',
  KH = 'û',
  XH = 'û',
  QH = 'у',
  rG = '⇅',
  aG = 'ű',
  eG = '⥮',
  tG = '⥾',
  nG = '𝔲',
  oG = 'ù',
  lG = 'ù',
  iG = '↿',
  sG = '↾',
  cG = '▀',
  vG = '⌜',
  uG = '⌜',
  pG = '⌏',
  dG = '◸',
  gG = 'ū',
  fG = '¨',
  mG = '¨',
  hG = 'ų',
  bG = '𝕦',
  yG = '↑',
  wG = '↕',
  xG = '↿',
  SG = '↾',
  qG = '⊎',
  AG = 'υ',
  EG = 'ϒ',
  kG = 'υ',
  LG = '⇈',
  NG = '⌝',
  TG = '⌝',
  $G = '⌎',
  DG = 'ů',
  CG = '◹',
  RG = '𝓊',
  IG = '⋰',
  OG = 'ũ',
  FG = '▵',
  UG = '▴',
  _G = '⇈',
  BG = 'ü',
  jG = 'ü',
  HG = '⦧',
  GG = '⇕',
  VG = '⫨',
  zG = '⫩',
  MG = '⊨',
  PG = '⦜',
  ZG = 'ϵ',
  YG = 'ϰ',
  WG = '∅',
  JG = 'ϕ',
  KG = 'ϖ',
  XG = '∝',
  QG = '↕',
  rV = 'ϱ',
  aV = 'ς',
  eV = '⊊︀',
  tV = '⫋︀',
  nV = '⊋︀',
  oV = '⫌︀',
  lV = 'ϑ',
  iV = '⊲',
  sV = '⊳',
  cV = 'в',
  vV = '⊢',
  uV = '∨',
  pV = '⊻',
  dV = '≚',
  gV = '⋮',
  fV = '|',
  mV = '|',
  hV = '𝔳',
  bV = '⊲',
  yV = '⊂⃒',
  wV = '⊃⃒',
  xV = '𝕧',
  SV = '∝',
  qV = '⊳',
  AV = '𝓋',
  EV = '⫋︀',
  kV = '⊊︀',
  LV = '⫌︀',
  NV = '⊋︀',
  TV = '⦚',
  $V = 'ŵ',
  DV = '⩟',
  CV = '∧',
  RV = '≙',
  IV = '℘',
  OV = '𝔴',
  FV = '𝕨',
  UV = '℘',
  _V = '≀',
  BV = '≀',
  jV = '𝓌',
  HV = '⋂',
  GV = '◯',
  VV = '⋃',
  zV = '▽',
  MV = '𝔵',
  PV = '⟺',
  ZV = '⟷',
  YV = 'ξ',
  WV = '⟸',
  JV = '⟵',
  KV = '⟼',
  XV = '⋻',
  QV = '⨀',
  rz = '𝕩',
  az = '⨁',
  ez = '⨂',
  tz = '⟹',
  nz = '⟶',
  oz = '𝓍',
  lz = '⨆',
  iz = '⨄',
  sz = '△',
  cz = '⋁',
  vz = '⋀',
  uz = 'ý',
  pz = 'ý',
  dz = 'я',
  gz = 'ŷ',
  fz = 'ы',
  mz = '¥',
  hz = '¥',
  bz = '𝔶',
  yz = 'ї',
  wz = '𝕪',
  xz = '𝓎',
  Sz = 'ю',
  qz = 'ÿ',
  Az = 'ÿ',
  Ez = 'ź',
  kz = 'ž',
  Lz = 'з',
  Nz = 'ż',
  Tz = 'ℨ',
  $z = 'ζ',
  Dz = '𝔷',
  Cz = 'ж',
  Rz = '⇝',
  Iz = '𝕫',
  Oz = '𝓏',
  Fz = '‍',
  Uz = '‌',
  _z = {
    AEli: Dl,
    AElig: Cl,
    AM: Rl,
    AMP: Il,
    Aacut: Ol,
    Aacute: Fl,
    Abreve: Ul,
    Acir: _l,
    Acirc: Bl,
    Acy: jl,
    Afr: Hl,
    Agrav: Gl,
    Agrave: Vl,
    Alpha: zl,
    Amacr: Ml,
    And: Pl,
    Aogon: Zl,
    Aopf: Yl,
    ApplyFunction: Wl,
    Arin: Jl,
    Aring: Kl,
    Ascr: Xl,
    Assign: Ql,
    Atild: ri,
    Atilde: ai,
    Aum: ei,
    Auml: ti,
    Backslash: ni,
    Barv: oi,
    Barwed: li,
    Bcy: ii,
    Because: si,
    Bernoullis: ci,
    Beta: vi,
    Bfr: ui,
    Bopf: pi,
    Breve: di,
    Bscr: gi,
    Bumpeq: fi,
    CHcy: mi,
    COP: hi,
    COPY: bi,
    Cacute: yi,
    Cap: wi,
    CapitalDifferentialD: xi,
    Cayleys: Si,
    Ccaron: qi,
    Ccedi: Ai,
    Ccedil: Ei,
    Ccirc: ki,
    Cconint: Li,
    Cdot: Ni,
    Cedilla: Ti,
    CenterDot: $i,
    Cfr: Di,
    Chi: Ci,
    CircleDot: Ri,
    CircleMinus: Ii,
    CirclePlus: Oi,
    CircleTimes: Fi,
    ClockwiseContourIntegral: Ui,
    CloseCurlyDoubleQuote: _i,
    CloseCurlyQuote: Bi,
    Colon: ji,
    Colone: Hi,
    Congruent: Gi,
    Conint: Vi,
    ContourIntegral: zi,
    Copf: Mi,
    Coproduct: Pi,
    CounterClockwiseContourIntegral: Zi,
    Cross: Yi,
    Cscr: Wi,
    Cup: Ji,
    CupCap: Ki,
    DD: Xi,
    DDotrahd: Qi,
    DJcy: rs,
    DScy: as,
    DZcy: es,
    Dagger: ts,
    Darr: ns,
    Dashv: os,
    Dcaron: ls,
    Dcy: is,
    Del: ss,
    Delta: cs,
    Dfr: vs,
    DiacriticalAcute: us,
    DiacriticalDot: ps,
    DiacriticalDoubleAcute: ds,
    DiacriticalGrave: gs,
    DiacriticalTilde: fs,
    Diamond: ms,
    DifferentialD: hs,
    Dopf: bs,
    Dot: ys,
    DotDot: ws,
    DotEqual: xs,
    DoubleContourIntegral: Ss,
    DoubleDot: qs,
    DoubleDownArrow: As,
    DoubleLeftArrow: Es,
    DoubleLeftRightArrow: ks,
    DoubleLeftTee: Ls,
    DoubleLongLeftArrow: Ns,
    DoubleLongLeftRightArrow: Ts,
    DoubleLongRightArrow: $s,
    DoubleRightArrow: Ds,
    DoubleRightTee: Cs,
    DoubleUpArrow: Rs,
    DoubleUpDownArrow: Is,
    DoubleVerticalBar: Os,
    DownArrow: Fs,
    DownArrowBar: Us,
    DownArrowUpArrow: _s,
    DownBreve: Bs,
    DownLeftRightVector: js,
    DownLeftTeeVector: Hs,
    DownLeftVector: Gs,
    DownLeftVectorBar: Vs,
    DownRightTeeVector: zs,
    DownRightVector: Ms,
    DownRightVectorBar: Ps,
    DownTee: Zs,
    DownTeeArrow: Ys,
    Downarrow: Ws,
    Dscr: Js,
    Dstrok: Ks,
    ENG: Xs,
    ET: Qs,
    ETH: rc,
    Eacut: ac,
    Eacute: ec,
    Ecaron: tc,
    Ecir: nc,
    Ecirc: oc,
    Ecy: lc,
    Edot: ic,
    Efr: sc,
    Egrav: cc,
    Egrave: vc,
    Element: uc,
    Emacr: pc,
    EmptySmallSquare: dc,
    EmptyVerySmallSquare: gc,
    Eogon: fc,
    Eopf: mc,
    Epsilon: hc,
    Equal: bc,
    EqualTilde: yc,
    Equilibrium: wc,
    Escr: xc,
    Esim: Sc,
    Eta: qc,
    Eum: Ac,
    Euml: Ec,
    Exists: kc,
    ExponentialE: Lc,
    Fcy: Nc,
    Ffr: Tc,
    FilledSmallSquare: $c,
    FilledVerySmallSquare: Dc,
    Fopf: Cc,
    ForAll: Rc,
    Fouriertrf: Ic,
    Fscr: Oc,
    GJcy: Fc,
    G: Uc,
    GT: _c,
    Gamma: Bc,
    Gammad: jc,
    Gbreve: Hc,
    Gcedil: Gc,
    Gcirc: Vc,
    Gcy: zc,
    Gdot: Mc,
    Gfr: Pc,
    Gg: Zc,
    Gopf: Yc,
    GreaterEqual: Wc,
    GreaterEqualLess: Jc,
    GreaterFullEqual: Kc,
    GreaterGreater: Xc,
    GreaterLess: Qc,
    GreaterSlantEqual: rv,
    GreaterTilde: av,
    Gscr: ev,
    Gt: tv,
    HARDcy: nv,
    Hacek: ov,
    Hat: lv,
    Hcirc: iv,
    Hfr: sv,
    HilbertSpace: cv,
    Hopf: vv,
    HorizontalLine: uv,
    Hscr: pv,
    Hstrok: dv,
    HumpDownHump: gv,
    HumpEqual: fv,
    IEcy: mv,
    IJlig: hv,
    IOcy: bv,
    Iacut: yv,
    Iacute: wv,
    Icir: xv,
    Icirc: Sv,
    Icy: qv,
    Idot: Av,
    Ifr: Ev,
    Igrav: kv,
    Igrave: Lv,
    Im: Nv,
    Imacr: Tv,
    ImaginaryI: $v,
    Implies: Dv,
    Int: Cv,
    Integral: Rv,
    Intersection: Iv,
    InvisibleComma: Ov,
    InvisibleTimes: Fv,
    Iogon: Uv,
    Iopf: _v,
    Iota: Bv,
    Iscr: jv,
    Itilde: Hv,
    Iukcy: Gv,
    Ium: Vv,
    Iuml: zv,
    Jcirc: Mv,
    Jcy: Pv,
    Jfr: Zv,
    Jopf: Yv,
    Jscr: Wv,
    Jsercy: Jv,
    Jukcy: Kv,
    KHcy: Xv,
    KJcy: Qv,
    Kappa: ru,
    Kcedil: au,
    Kcy: eu,
    Kfr: tu,
    Kopf: nu,
    Kscr: ou,
    LJcy: lu,
    L: iu,
    LT: su,
    Lacute: cu,
    Lambda: vu,
    Lang: uu,
    Laplacetrf: pu,
    Larr: du,
    Lcaron: gu,
    Lcedil: fu,
    Lcy: mu,
    LeftAngleBracket: hu,
    LeftArrow: bu,
    LeftArrowBar: yu,
    LeftArrowRightArrow: wu,
    LeftCeiling: xu,
    LeftDoubleBracket: Su,
    LeftDownTeeVector: qu,
    LeftDownVector: Au,
    LeftDownVectorBar: Eu,
    LeftFloor: ku,
    LeftRightArrow: Lu,
    LeftRightVector: Nu,
    LeftTee: Tu,
    LeftTeeArrow: $u,
    LeftTeeVector: Du,
    LeftTriangle: Cu,
    LeftTriangleBar: Ru,
    LeftTriangleEqual: Iu,
    LeftUpDownVector: Ou,
    LeftUpTeeVector: Fu,
    LeftUpVector: Uu,
    LeftUpVectorBar: _u,
    LeftVector: Bu,
    LeftVectorBar: ju,
    Leftarrow: Hu,
    Leftrightarrow: Gu,
    LessEqualGreater: Vu,
    LessFullEqual: zu,
    LessGreater: Mu,
    LessLess: Pu,
    LessSlantEqual: Zu,
    LessTilde: Yu,
    Lfr: Wu,
    Ll: Ju,
    Lleftarrow: Ku,
    Lmidot: Xu,
    LongLeftArrow: Qu,
    LongLeftRightArrow: rp,
    LongRightArrow: ap,
    Longleftarrow: ep,
    Longleftrightarrow: tp,
    Longrightarrow: np,
    Lopf: op,
    LowerLeftArrow: lp,
    LowerRightArrow: ip,
    Lscr: sp,
    Lsh: cp,
    Lstrok: vp,
    Lt: up,
    Map: '⤅',
    Mcy: pp,
    MediumSpace: dp,
    Mellintrf: gp,
    Mfr: fp,
    MinusPlus: mp,
    Mopf: hp,
    Mscr: bp,
    Mu: yp,
    NJcy: wp,
    Nacute: xp,
    Ncaron: Sp,
    Ncedil: qp,
    Ncy: Ap,
    NegativeMediumSpace: Ep,
    NegativeThickSpace: kp,
    NegativeThinSpace: Lp,
    NegativeVeryThinSpace: Np,
    NestedGreaterGreater: Tp,
    NestedLessLess: $p,
    NewLine: Dp,
    Nfr: Cp,
    NoBreak: Rp,
    NonBreakingSpace: Ip,
    Nopf: Op,
    Not: Fp,
    NotCongruent: Up,
    NotCupCap: _p,
    NotDoubleVerticalBar: Bp,
    NotElement: jp,
    NotEqual: Hp,
    NotEqualTilde: Gp,
    NotExists: Vp,
    NotGreater: zp,
    NotGreaterEqual: Mp,
    NotGreaterFullEqual: Pp,
    NotGreaterGreater: Zp,
    NotGreaterLess: Yp,
    NotGreaterSlantEqual: Wp,
    NotGreaterTilde: Jp,
    NotHumpDownHump: Kp,
    NotHumpEqual: Xp,
    NotLeftTriangle: Qp,
    NotLeftTriangleBar: rd,
    NotLeftTriangleEqual: ad,
    NotLess: ed,
    NotLessEqual: td,
    NotLessGreater: nd,
    NotLessLess: od,
    NotLessSlantEqual: ld,
    NotLessTilde: id,
    NotNestedGreaterGreater: sd,
    NotNestedLessLess: cd,
    NotPrecedes: vd,
    NotPrecedesEqual: ud,
    NotPrecedesSlantEqual: pd,
    NotReverseElement: dd,
    NotRightTriangle: gd,
    NotRightTriangleBar: fd,
    NotRightTriangleEqual: md,
    NotSquareSubset: hd,
    NotSquareSubsetEqual: bd,
    NotSquareSuperset: yd,
    NotSquareSupersetEqual: wd,
    NotSubset: xd,
    NotSubsetEqual: Sd,
    NotSucceeds: qd,
    NotSucceedsEqual: Ad,
    NotSucceedsSlantEqual: Ed,
    NotSucceedsTilde: kd,
    NotSuperset: Ld,
    NotSupersetEqual: Nd,
    NotTilde: Td,
    NotTildeEqual: $d,
    NotTildeFullEqual: Dd,
    NotTildeTilde: Cd,
    NotVerticalBar: Rd,
    Nscr: Id,
    Ntild: Od,
    Ntilde: Fd,
    Nu: Ud,
    OElig: _d,
    Oacut: Bd,
    Oacute: jd,
    Ocir: Hd,
    Ocirc: Gd,
    Ocy: Vd,
    Odblac: zd,
    Ofr: Md,
    Ograv: Pd,
    Ograve: Zd,
    Omacr: Yd,
    Omega: Wd,
    Omicron: Jd,
    Oopf: Kd,
    OpenCurlyDoubleQuote: Xd,
    OpenCurlyQuote: Qd,
    Or: rg,
    Oscr: ag,
    Oslas: eg,
    Oslash: tg,
    Otild: ng,
    Otilde: og,
    Otimes: lg,
    Oum: ig,
    Ouml: sg,
    OverBar: cg,
    OverBrace: vg,
    OverBracket: ug,
    OverParenthesis: pg,
    PartialD: dg,
    Pcy: gg,
    Pfr: fg,
    Phi: mg,
    Pi: hg,
    PlusMinus: bg,
    Poincareplane: yg,
    Popf: wg,
    Pr: xg,
    Precedes: Sg,
    PrecedesEqual: qg,
    PrecedesSlantEqual: Ag,
    PrecedesTilde: Eg,
    Prime: kg,
    Product: Lg,
    Proportion: Ng,
    Proportional: Tg,
    Pscr: $g,
    Psi: Dg,
    QUO: Cg,
    QUOT: Rg,
    Qfr: Ig,
    Qopf: Og,
    Qscr: Fg,
    RBarr: Ug,
    RE: _g,
    REG: Bg,
    Racute: jg,
    Rang: Hg,
    Rarr: Gg,
    Rarrtl: Vg,
    Rcaron: zg,
    Rcedil: Mg,
    Rcy: Pg,
    Re: Zg,
    ReverseElement: Yg,
    ReverseEquilibrium: Wg,
    ReverseUpEquilibrium: Jg,
    Rfr: Kg,
    Rho: Xg,
    RightAngleBracket: Qg,
    RightArrow: rf,
    RightArrowBar: af,
    RightArrowLeftArrow: ef,
    RightCeiling: tf,
    RightDoubleBracket: nf,
    RightDownTeeVector: of,
    RightDownVector: lf,
    RightDownVectorBar: sf,
    RightFloor: cf,
    RightTee: vf,
    RightTeeArrow: uf,
    RightTeeVector: pf,
    RightTriangle: df,
    RightTriangleBar: gf,
    RightTriangleEqual: ff,
    RightUpDownVector: mf,
    RightUpTeeVector: hf,
    RightUpVector: bf,
    RightUpVectorBar: yf,
    RightVector: wf,
    RightVectorBar: xf,
    Rightarrow: Sf,
    Ropf: qf,
    RoundImplies: Af,
    Rrightarrow: Ef,
    Rscr: kf,
    Rsh: Lf,
    RuleDelayed: Nf,
    SHCHcy: Tf,
    SHcy: $f,
    SOFTcy: Df,
    Sacute: Cf,
    Sc: Rf,
    Scaron: If,
    Scedil: Of,
    Scirc: Ff,
    Scy: Uf,
    Sfr: _f,
    ShortDownArrow: Bf,
    ShortLeftArrow: jf,
    ShortRightArrow: Hf,
    ShortUpArrow: Gf,
    Sigma: Vf,
    SmallCircle: zf,
    Sopf: Mf,
    Sqrt: Pf,
    Square: Zf,
    SquareIntersection: Yf,
    SquareSubset: Wf,
    SquareSubsetEqual: Jf,
    SquareSuperset: Kf,
    SquareSupersetEqual: Xf,
    SquareUnion: Qf,
    Sscr: rm,
    Star: am,
    Sub: em,
    Subset: tm,
    SubsetEqual: nm,
    Succeeds: om,
    SucceedsEqual: lm,
    SucceedsSlantEqual: im,
    SucceedsTilde: sm,
    SuchThat: cm,
    Sum: vm,
    Sup: um,
    Superset: pm,
    SupersetEqual: dm,
    Supset: gm,
    THOR: fm,
    THORN: mm,
    TRADE: hm,
    TSHcy: bm,
    TScy: ym,
    Tab: wm,
    Tau: xm,
    Tcaron: Sm,
    Tcedil: qm,
    Tcy: Am,
    Tfr: Em,
    Therefore: km,
    Theta: Lm,
    ThickSpace: Nm,
    ThinSpace: Tm,
    Tilde: $m,
    TildeEqual: Dm,
    TildeFullEqual: Cm,
    TildeTilde: Rm,
    Topf: Im,
    TripleDot: Om,
    Tscr: Fm,
    Tstrok: Um,
    Uacut: _m,
    Uacute: Bm,
    Uarr: jm,
    Uarrocir: Hm,
    Ubrcy: Gm,
    Ubreve: Vm,
    Ucir: zm,
    Ucirc: Mm,
    Ucy: Pm,
    Udblac: Zm,
    Ufr: Ym,
    Ugrav: Wm,
    Ugrave: Jm,
    Umacr: Km,
    UnderBar: Xm,
    UnderBrace: Qm,
    UnderBracket: rh,
    UnderParenthesis: ah,
    Union: eh,
    UnionPlus: th,
    Uogon: nh,
    Uopf: oh,
    UpArrow: lh,
    UpArrowBar: ih,
    UpArrowDownArrow: sh,
    UpDownArrow: ch,
    UpEquilibrium: vh,
    UpTee: uh,
    UpTeeArrow: ph,
    Uparrow: dh,
    Updownarrow: gh,
    UpperLeftArrow: fh,
    UpperRightArrow: mh,
    Upsi: hh,
    Upsilon: bh,
    Uring: yh,
    Uscr: wh,
    Utilde: xh,
    Uum: Sh,
    Uuml: qh,
    VDash: Ah,
    Vbar: Eh,
    Vcy: kh,
    Vdash: Lh,
    Vdashl: Nh,
    Vee: Th,
    Verbar: $h,
    Vert: Dh,
    VerticalBar: Ch,
    VerticalLine: Rh,
    VerticalSeparator: Ih,
    VerticalTilde: Oh,
    VeryThinSpace: Fh,
    Vfr: Uh,
    Vopf: _h,
    Vscr: Bh,
    Vvdash: jh,
    Wcirc: Hh,
    Wedge: Gh,
    Wfr: Vh,
    Wopf: zh,
    Wscr: Mh,
    Xfr: Ph,
    Xi: Zh,
    Xopf: Yh,
    Xscr: Wh,
    YAcy: Jh,
    YIcy: Kh,
    YUcy: Xh,
    Yacut: Qh,
    Yacute: rb,
    Ycirc: ab,
    Ycy: eb,
    Yfr: tb,
    Yopf: nb,
    Yscr: ob,
    Yuml: lb,
    ZHcy: ib,
    Zacute: sb,
    Zcaron: cb,
    Zcy: vb,
    Zdot: ub,
    ZeroWidthSpace: pb,
    Zeta: db,
    Zfr: gb,
    Zopf: fb,
    Zscr: mb,
    aacut: hb,
    aacute: bb,
    abreve: yb,
    ac: wb,
    acE: xb,
    acd: Sb,
    acir: qb,
    acirc: Ab,
    acut: Eb,
    acute: kb,
    acy: Lb,
    aeli: Nb,
    aelig: Tb,
    af: $b,
    afr: Db,
    agrav: Cb,
    agrave: Rb,
    alefsym: Ib,
    aleph: Ob,
    alpha: Fb,
    amacr: Ub,
    amalg: _b,
    am: Bb,
    amp: jb,
    and: Hb,
    andand: Gb,
    andd: Vb,
    andslope: zb,
    andv: Mb,
    ang: Pb,
    ange: Zb,
    angle: Yb,
    angmsd: Wb,
    angmsdaa: Jb,
    angmsdab: Kb,
    angmsdac: Xb,
    angmsdad: Qb,
    angmsdae: ry,
    angmsdaf: ay,
    angmsdag: ey,
    angmsdah: ty,
    angrt: ny,
    angrtvb: oy,
    angrtvbd: ly,
    angsph: iy,
    angst: sy,
    angzarr: cy,
    aogon: vy,
    aopf: uy,
    ap: py,
    apE: dy,
    apacir: gy,
    ape: fy,
    apid: my,
    apos: hy,
    approx: by,
    approxeq: yy,
    arin: wy,
    aring: xy,
    ascr: Sy,
    ast: qy,
    asymp: Ay,
    asympeq: Ey,
    atild: ky,
    atilde: Ly,
    aum: Ny,
    auml: Ty,
    awconint: $y,
    awint: Dy,
    bNot: Cy,
    backcong: Ry,
    backepsilon: Iy,
    backprime: Oy,
    backsim: Fy,
    backsimeq: Uy,
    barvee: _y,
    barwed: By,
    barwedge: jy,
    bbrk: Hy,
    bbrktbrk: Gy,
    bcong: Vy,
    bcy: zy,
    bdquo: My,
    becaus: Py,
    because: Zy,
    bemptyv: Yy,
    bepsi: Wy,
    bernou: Jy,
    beta: Ky,
    beth: Xy,
    between: Qy,
    bfr: rw,
    bigcap: aw,
    bigcirc: ew,
    bigcup: tw,
    bigodot: nw,
    bigoplus: ow,
    bigotimes: lw,
    bigsqcup: iw,
    bigstar: sw,
    bigtriangledown: cw,
    bigtriangleup: vw,
    biguplus: uw,
    bigvee: pw,
    bigwedge: dw,
    bkarow: gw,
    blacklozenge: fw,
    blacksquare: mw,
    blacktriangle: hw,
    blacktriangledown: bw,
    blacktriangleleft: yw,
    blacktriangleright: ww,
    blank: xw,
    blk12: Sw,
    blk14: qw,
    blk34: Aw,
    block: Ew,
    bne: kw,
    bnequiv: Lw,
    bnot: Nw,
    bopf: Tw,
    bot: $w,
    bottom: Dw,
    bowtie: Cw,
    boxDL: Rw,
    boxDR: Iw,
    boxDl: Ow,
    boxDr: Fw,
    boxH: Uw,
    boxHD: _w,
    boxHU: Bw,
    boxHd: jw,
    boxHu: Hw,
    boxUL: Gw,
    boxUR: Vw,
    boxUl: zw,
    boxUr: Mw,
    boxV: Pw,
    boxVH: Zw,
    boxVL: Yw,
    boxVR: Ww,
    boxVh: Jw,
    boxVl: Kw,
    boxVr: Xw,
    boxbox: Qw,
    boxdL: rx,
    boxdR: ax,
    boxdl: ex,
    boxdr: tx,
    boxh: nx,
    boxhD: ox,
    boxhU: lx,
    boxhd: ix,
    boxhu: sx,
    boxminus: cx,
    boxplus: vx,
    boxtimes: ux,
    boxuL: px,
    boxuR: dx,
    boxul: gx,
    boxur: fx,
    boxv: mx,
    boxvH: hx,
    boxvL: bx,
    boxvR: yx,
    boxvh: wx,
    boxvl: xx,
    boxvr: Sx,
    bprime: qx,
    breve: Ax,
    brvba: Ex,
    brvbar: kx,
    bscr: Lx,
    bsemi: Nx,
    bsim: Tx,
    bsime: $x,
    bsol: Dx,
    bsolb: Cx,
    bsolhsub: Rx,
    bull: Ix,
    bullet: Ox,
    bump: Fx,
    bumpE: Ux,
    bumpe: _x,
    bumpeq: Bx,
    cacute: jx,
    cap: Hx,
    capand: Gx,
    capbrcup: Vx,
    capcap: zx,
    capcup: Mx,
    capdot: Px,
    caps: Zx,
    caret: Yx,
    caron: Wx,
    ccaps: Jx,
    ccaron: Kx,
    ccedi: Xx,
    ccedil: Qx,
    ccirc: rS,
    ccups: aS,
    ccupssm: eS,
    cdot: tS,
    cedi: nS,
    cedil: oS,
    cemptyv: lS,
    cen: iS,
    cent: sS,
    centerdot: cS,
    cfr: vS,
    chcy: uS,
    check: pS,
    checkmark: dS,
    chi: gS,
    cir: fS,
    cirE: mS,
    circ: hS,
    circeq: bS,
    circlearrowleft: yS,
    circlearrowright: wS,
    circledR: xS,
    circledS: SS,
    circledast: qS,
    circledcirc: AS,
    circleddash: ES,
    cire: kS,
    cirfnint: LS,
    cirmid: NS,
    cirscir: TS,
    clubs: $S,
    clubsuit: DS,
    colon: CS,
    colone: RS,
    coloneq: IS,
    comma: OS,
    commat: FS,
    comp: US,
    compfn: _S,
    complement: BS,
    complexes: jS,
    cong: HS,
    congdot: GS,
    conint: VS,
    copf: zS,
    coprod: MS,
    cop: PS,
    copy: ZS,
    copysr: YS,
    crarr: WS,
    cross: JS,
    cscr: KS,
    csub: XS,
    csube: QS,
    csup: rq,
    csupe: aq,
    ctdot: eq,
    cudarrl: tq,
    cudarrr: nq,
    cuepr: oq,
    cuesc: lq,
    cularr: iq,
    cularrp: sq,
    cup: cq,
    cupbrcap: vq,
    cupcap: uq,
    cupcup: pq,
    cupdot: dq,
    cupor: gq,
    cups: fq,
    curarr: mq,
    curarrm: hq,
    curlyeqprec: bq,
    curlyeqsucc: yq,
    curlyvee: wq,
    curlywedge: xq,
    curre: Sq,
    curren: qq,
    curvearrowleft: Aq,
    curvearrowright: Eq,
    cuvee: kq,
    cuwed: Lq,
    cwconint: Nq,
    cwint: Tq,
    cylcty: $q,
    dArr: Dq,
    dHar: Cq,
    dagger: Rq,
    daleth: Iq,
    darr: Oq,
    dash: Fq,
    dashv: Uq,
    dbkarow: _q,
    dblac: Bq,
    dcaron: jq,
    dcy: Hq,
    dd: Gq,
    ddagger: Vq,
    ddarr: zq,
    ddotseq: Mq,
    de: Pq,
    deg: Zq,
    delta: Yq,
    demptyv: Wq,
    dfisht: Jq,
    dfr: Kq,
    dharl: Xq,
    dharr: Qq,
    diam: rA,
    diamond: aA,
    diamondsuit: eA,
    diams: tA,
    die: nA,
    digamma: oA,
    disin: lA,
    div: iA,
    divid: sA,
    divide: cA,
    divideontimes: vA,
    divonx: uA,
    djcy: pA,
    dlcorn: dA,
    dlcrop: gA,
    dollar: fA,
    dopf: mA,
    dot: hA,
    doteq: bA,
    doteqdot: yA,
    dotminus: wA,
    dotplus: xA,
    dotsquare: SA,
    doublebarwedge: qA,
    downarrow: AA,
    downdownarrows: EA,
    downharpoonleft: kA,
    downharpoonright: LA,
    drbkarow: NA,
    drcorn: TA,
    drcrop: $A,
    dscr: DA,
    dscy: CA,
    dsol: RA,
    dstrok: IA,
    dtdot: OA,
    dtri: FA,
    dtrif: UA,
    duarr: _A,
    duhar: BA,
    dwangle: jA,
    dzcy: HA,
    dzigrarr: GA,
    eDDot: VA,
    eDot: zA,
    eacut: MA,
    eacute: PA,
    easter: ZA,
    ecaron: YA,
    ecir: WA,
    ecirc: JA,
    ecolon: KA,
    ecy: XA,
    edot: QA,
    ee: rE,
    efDot: aE,
    efr: eE,
    eg: tE,
    egrav: nE,
    egrave: oE,
    egs: lE,
    egsdot: iE,
    el: sE,
    elinters: cE,
    ell: vE,
    els: uE,
    elsdot: pE,
    emacr: dE,
    empty: gE,
    emptyset: fE,
    emptyv: mE,
    emsp13: hE,
    emsp14: bE,
    emsp: yE,
    eng: wE,
    ensp: xE,
    eogon: SE,
    eopf: qE,
    epar: AE,
    eparsl: EE,
    eplus: kE,
    epsi: LE,
    epsilon: NE,
    epsiv: TE,
    eqcirc: $E,
    eqcolon: DE,
    eqsim: CE,
    eqslantgtr: RE,
    eqslantless: IE,
    equals: OE,
    equest: FE,
    equiv: UE,
    equivDD: _E,
    eqvparsl: BE,
    erDot: jE,
    erarr: HE,
    escr: GE,
    esdot: VE,
    esim: zE,
    eta: ME,
    et: PE,
    eth: ZE,
    eum: YE,
    euml: WE,
    euro: JE,
    excl: KE,
    exist: XE,
    expectation: QE,
    exponentiale: rk,
    fallingdotseq: ak,
    fcy: ek,
    female: tk,
    ffilig: nk,
    fflig: ok,
    ffllig: lk,
    ffr: ik,
    filig: sk,
    fjlig: ck,
    flat: vk,
    fllig: uk,
    fltns: pk,
    fnof: dk,
    fopf: gk,
    forall: fk,
    fork: mk,
    forkv: hk,
    fpartint: bk,
    frac1: yk,
    frac12: wk,
    frac13: xk,
    frac14: Sk,
    frac15: qk,
    frac16: Ak,
    frac18: Ek,
    frac23: kk,
    frac25: Lk,
    frac3: Nk,
    frac34: Tk,
    frac35: $k,
    frac38: Dk,
    frac45: Ck,
    frac56: Rk,
    frac58: Ik,
    frac78: Ok,
    frasl: Fk,
    frown: Uk,
    fscr: _k,
    gE: Bk,
    gEl: jk,
    gacute: Hk,
    gamma: Gk,
    gammad: Vk,
    gap: zk,
    gbreve: Mk,
    gcirc: Pk,
    gcy: Zk,
    gdot: Yk,
    ge: Wk,
    gel: Jk,
    geq: Kk,
    geqq: Xk,
    geqslant: Qk,
    ges: r1,
    gescc: a1,
    gesdot: e1,
    gesdoto: t1,
    gesdotol: n1,
    gesl: o1,
    gesles: l1,
    gfr: i1,
    gg: s1,
    ggg: c1,
    gimel: v1,
    gjcy: u1,
    gl: p1,
    glE: d1,
    gla: g1,
    glj: f1,
    gnE: m1,
    gnap: h1,
    gnapprox: b1,
    gne: y1,
    gneq: w1,
    gneqq: x1,
    gnsim: S1,
    gopf: q1,
    grave: A1,
    gscr: E1,
    gsim: k1,
    gsime: L1,
    gsiml: N1,
    g: T1,
    gt: $1,
    gtcc: D1,
    gtcir: C1,
    gtdot: R1,
    gtlPar: I1,
    gtquest: O1,
    gtrapprox: F1,
    gtrarr: U1,
    gtrdot: _1,
    gtreqless: B1,
    gtreqqless: j1,
    gtrless: H1,
    gtrsim: G1,
    gvertneqq: V1,
    gvnE: z1,
    hArr: M1,
    hairsp: P1,
    half: Z1,
    hamilt: Y1,
    hardcy: W1,
    harr: J1,
    harrcir: K1,
    harrw: X1,
    hbar: Q1,
    hcirc: rL,
    hearts: aL,
    heartsuit: eL,
    hellip: tL,
    hercon: nL,
    hfr: oL,
    hksearow: lL,
    hkswarow: iL,
    hoarr: sL,
    homtht: cL,
    hookleftarrow: vL,
    hookrightarrow: uL,
    hopf: pL,
    horbar: dL,
    hscr: gL,
    hslash: fL,
    hstrok: mL,
    hybull: hL,
    hyphen: bL,
    iacut: yL,
    iacute: wL,
    ic: xL,
    icir: SL,
    icirc: qL,
    icy: AL,
    iecy: EL,
    iexc: kL,
    iexcl: LL,
    iff: NL,
    ifr: TL,
    igrav: $L,
    igrave: DL,
    ii: CL,
    iiiint: RL,
    iiint: IL,
    iinfin: OL,
    iiota: FL,
    ijlig: UL,
    imacr: _L,
    image: BL,
    imagline: jL,
    imagpart: HL,
    imath: GL,
    imof: VL,
    imped: zL,
    in: '∈',
    incare: ML,
    infin: PL,
    infintie: ZL,
    inodot: YL,
    int: WL,
    intcal: JL,
    integers: KL,
    intercal: XL,
    intlarhk: QL,
    intprod: rN,
    iocy: aN,
    iogon: eN,
    iopf: tN,
    iota: nN,
    iprod: oN,
    iques: lN,
    iquest: iN,
    iscr: sN,
    isin: cN,
    isinE: vN,
    isindot: uN,
    isins: pN,
    isinsv: dN,
    isinv: gN,
    it: fN,
    itilde: mN,
    iukcy: hN,
    ium: bN,
    iuml: yN,
    jcirc: wN,
    jcy: xN,
    jfr: SN,
    jmath: qN,
    jopf: AN,
    jscr: EN,
    jsercy: kN,
    jukcy: LN,
    kappa: NN,
    kappav: TN,
    kcedil: $N,
    kcy: DN,
    kfr: CN,
    kgreen: RN,
    khcy: IN,
    kjcy: ON,
    kopf: FN,
    kscr: UN,
    lAarr: _N,
    lArr: BN,
    lAtail: jN,
    lBarr: HN,
    lE: GN,
    lEg: VN,
    lHar: zN,
    lacute: MN,
    laemptyv: PN,
    lagran: ZN,
    lambda: YN,
    lang: WN,
    langd: JN,
    langle: KN,
    lap: XN,
    laqu: QN,
    laquo: rT,
    larr: aT,
    larrb: eT,
    larrbfs: tT,
    larrfs: nT,
    larrhk: oT,
    larrlp: lT,
    larrpl: iT,
    larrsim: sT,
    larrtl: cT,
    lat: vT,
    latail: uT,
    late: pT,
    lates: dT,
    lbarr: gT,
    lbbrk: fT,
    lbrace: mT,
    lbrack: hT,
    lbrke: bT,
    lbrksld: yT,
    lbrkslu: wT,
    lcaron: xT,
    lcedil: ST,
    lceil: qT,
    lcub: AT,
    lcy: ET,
    ldca: kT,
    ldquo: LT,
    ldquor: NT,
    ldrdhar: TT,
    ldrushar: $T,
    ldsh: DT,
    le: CT,
    leftarrow: RT,
    leftarrowtail: IT,
    leftharpoondown: OT,
    leftharpoonup: FT,
    leftleftarrows: UT,
    leftrightarrow: _T,
    leftrightarrows: BT,
    leftrightharpoons: jT,
    leftrightsquigarrow: HT,
    leftthreetimes: GT,
    leg: VT,
    leq: zT,
    leqq: MT,
    leqslant: PT,
    les: ZT,
    lescc: YT,
    lesdot: WT,
    lesdoto: JT,
    lesdotor: KT,
    lesg: XT,
    lesges: QT,
    lessapprox: r$,
    lessdot: a$,
    lesseqgtr: e$,
    lesseqqgtr: t$,
    lessgtr: n$,
    lesssim: o$,
    lfisht: l$,
    lfloor: i$,
    lfr: s$,
    lg: c$,
    lgE: v$,
    lhard: u$,
    lharu: p$,
    lharul: d$,
    lhblk: g$,
    ljcy: f$,
    ll: m$,
    llarr: h$,
    llcorner: b$,
    llhard: y$,
    lltri: w$,
    lmidot: x$,
    lmoust: S$,
    lmoustache: q$,
    lnE: A$,
    lnap: E$,
    lnapprox: k$,
    lne: L$,
    lneq: N$,
    lneqq: T$,
    lnsim: $$,
    loang: D$,
    loarr: C$,
    lobrk: R$,
    longleftarrow: I$,
    longleftrightarrow: O$,
    longmapsto: F$,
    longrightarrow: U$,
    looparrowleft: _$,
    looparrowright: B$,
    lopar: j$,
    lopf: H$,
    loplus: G$,
    lotimes: V$,
    lowast: z$,
    lowbar: M$,
    loz: P$,
    lozenge: Z$,
    lozf: Y$,
    lpar: W$,
    lparlt: J$,
    lrarr: K$,
    lrcorner: X$,
    lrhar: Q$,
    lrhard: rD,
    lrm: aD,
    lrtri: eD,
    lsaquo: tD,
    lscr: nD,
    lsh: oD,
    lsim: lD,
    lsime: iD,
    lsimg: sD,
    lsqb: cD,
    lsquo: vD,
    lsquor: uD,
    lstrok: pD,
    l: dD,
    lt: gD,
    ltcc: fD,
    ltcir: mD,
    ltdot: hD,
    lthree: bD,
    ltimes: yD,
    ltlarr: wD,
    ltquest: xD,
    ltrPar: SD,
    ltri: qD,
    ltrie: AD,
    ltrif: ED,
    lurdshar: kD,
    luruhar: LD,
    lvertneqq: ND,
    lvnE: TD,
    mDDot: $D,
    mac: DD,
    macr: CD,
    male: RD,
    malt: ID,
    maltese: OD,
    map: FD,
    mapsto: UD,
    mapstodown: _D,
    mapstoleft: BD,
    mapstoup: jD,
    marker: HD,
    mcomma: GD,
    mcy: VD,
    mdash: zD,
    measuredangle: MD,
    mfr: PD,
    mho: ZD,
    micr: YD,
    micro: WD,
    mid: JD,
    midast: KD,
    midcir: XD,
    middo: QD,
    middot: r0,
    minus: a0,
    minusb: e0,
    minusd: t0,
    minusdu: n0,
    mlcp: o0,
    mldr: l0,
    mnplus: i0,
    models: s0,
    mopf: c0,
    mp: v0,
    mscr: u0,
    mstpos: p0,
    mu: d0,
    multimap: g0,
    mumap: f0,
    nGg: m0,
    nGt: h0,
    nGtv: b0,
    nLeftarrow: y0,
    nLeftrightarrow: w0,
    nLl: x0,
    nLt: S0,
    nLtv: q0,
    nRightarrow: A0,
    nVDash: E0,
    nVdash: k0,
    nabla: L0,
    nacute: N0,
    nang: T0,
    nap: $0,
    napE: D0,
    napid: C0,
    napos: R0,
    napprox: I0,
    natur: O0,
    natural: F0,
    naturals: U0,
    nbs: _0,
    nbsp: B0,
    nbump: j0,
    nbumpe: H0,
    ncap: G0,
    ncaron: V0,
    ncedil: z0,
    ncong: M0,
    ncongdot: P0,
    ncup: Z0,
    ncy: Y0,
    ndash: W0,
    ne: J0,
    neArr: K0,
    nearhk: X0,
    nearr: Q0,
    nearrow: rC,
    nedot: aC,
    nequiv: eC,
    nesear: tC,
    nesim: nC,
    nexist: oC,
    nexists: lC,
    nfr: iC,
    ngE: sC,
    nge: cC,
    ngeq: vC,
    ngeqq: uC,
    ngeqslant: pC,
    nges: dC,
    ngsim: gC,
    ngt: fC,
    ngtr: mC,
    nhArr: hC,
    nharr: bC,
    nhpar: yC,
    ni: wC,
    nis: xC,
    nisd: SC,
    niv: qC,
    njcy: AC,
    nlArr: EC,
    nlE: kC,
    nlarr: LC,
    nldr: NC,
    nle: TC,
    nleftarrow: $C,
    nleftrightarrow: DC,
    nleq: CC,
    nleqq: RC,
    nleqslant: IC,
    nles: OC,
    nless: FC,
    nlsim: UC,
    nlt: _C,
    nltri: BC,
    nltrie: jC,
    nmid: HC,
    nopf: GC,
    no: VC,
    not: zC,
    notin: MC,
    notinE: PC,
    notindot: ZC,
    notinva: YC,
    notinvb: WC,
    notinvc: JC,
    notni: KC,
    notniva: XC,
    notnivb: QC,
    notnivc: rR,
    npar: aR,
    nparallel: eR,
    nparsl: tR,
    npart: nR,
    npolint: oR,
    npr: lR,
    nprcue: iR,
    npre: sR,
    nprec: cR,
    npreceq: vR,
    nrArr: uR,
    nrarr: pR,
    nrarrc: dR,
    nrarrw: gR,
    nrightarrow: fR,
    nrtri: mR,
    nrtrie: hR,
    nsc: bR,
    nsccue: yR,
    nsce: wR,
    nscr: xR,
    nshortmid: SR,
    nshortparallel: qR,
    nsim: AR,
    nsime: ER,
    nsimeq: kR,
    nsmid: LR,
    nspar: NR,
    nsqsube: TR,
    nsqsupe: $R,
    nsub: DR,
    nsubE: CR,
    nsube: RR,
    nsubset: IR,
    nsubseteq: OR,
    nsubseteqq: FR,
    nsucc: UR,
    nsucceq: _R,
    nsup: BR,
    nsupE: jR,
    nsupe: HR,
    nsupset: GR,
    nsupseteq: VR,
    nsupseteqq: zR,
    ntgl: MR,
    ntild: PR,
    ntilde: ZR,
    ntlg: YR,
    ntriangleleft: WR,
    ntrianglelefteq: JR,
    ntriangleright: KR,
    ntrianglerighteq: XR,
    nu: QR,
    num: rI,
    numero: aI,
    numsp: eI,
    nvDash: tI,
    nvHarr: nI,
    nvap: oI,
    nvdash: lI,
    nvge: iI,
    nvgt: sI,
    nvinfin: cI,
    nvlArr: vI,
    nvle: uI,
    nvlt: pI,
    nvltrie: dI,
    nvrArr: gI,
    nvrtrie: fI,
    nvsim: mI,
    nwArr: hI,
    nwarhk: bI,
    nwarr: yI,
    nwarrow: wI,
    nwnear: xI,
    oS: SI,
    oacut: qI,
    oacute: AI,
    oast: EI,
    ocir: kI,
    ocirc: LI,
    ocy: NI,
    odash: TI,
    odblac: $I,
    odiv: DI,
    odot: CI,
    odsold: RI,
    oelig: II,
    ofcir: OI,
    ofr: FI,
    ogon: UI,
    ograv: _I,
    ograve: BI,
    ogt: jI,
    ohbar: HI,
    ohm: GI,
    oint: VI,
    olarr: zI,
    olcir: MI,
    olcross: PI,
    oline: ZI,
    olt: YI,
    omacr: WI,
    omega: JI,
    omicron: KI,
    omid: XI,
    ominus: QI,
    oopf: rO,
    opar: aO,
    operp: eO,
    oplus: tO,
    or: nO,
    orarr: oO,
    ord: lO,
    order: iO,
    orderof: sO,
    ordf: cO,
    ordm: vO,
    origof: uO,
    oror: pO,
    orslope: dO,
    orv: gO,
    oscr: fO,
    oslas: mO,
    oslash: hO,
    osol: bO,
    otild: yO,
    otilde: wO,
    otimes: xO,
    otimesas: SO,
    oum: qO,
    ouml: AO,
    ovbar: EO,
    par: kO,
    para: LO,
    parallel: NO,
    parsim: TO,
    parsl: $O,
    part: DO,
    pcy: CO,
    percnt: RO,
    period: IO,
    permil: OO,
    perp: FO,
    pertenk: UO,
    pfr: _O,
    phi: BO,
    phiv: jO,
    phmmat: HO,
    phone: GO,
    pi: VO,
    pitchfork: zO,
    piv: MO,
    planck: PO,
    planckh: ZO,
    plankv: YO,
    plus: WO,
    plusacir: JO,
    plusb: KO,
    pluscir: XO,
    plusdo: QO,
    plusdu: rF,
    pluse: aF,
    plusm: eF,
    plusmn: tF,
    plussim: nF,
    plustwo: oF,
    pm: lF,
    pointint: iF,
    popf: sF,
    poun: cF,
    pound: vF,
    pr: uF,
    prE: pF,
    prap: dF,
    prcue: gF,
    pre: fF,
    prec: mF,
    precapprox: hF,
    preccurlyeq: bF,
    preceq: yF,
    precnapprox: wF,
    precneqq: xF,
    precnsim: SF,
    precsim: qF,
    prime: AF,
    primes: EF,
    prnE: kF,
    prnap: LF,
    prnsim: NF,
    prod: TF,
    profalar: $F,
    profline: DF,
    profsurf: CF,
    prop: RF,
    propto: IF,
    prsim: OF,
    prurel: FF,
    pscr: UF,
    psi: _F,
    puncsp: BF,
    qfr: jF,
    qint: HF,
    qopf: GF,
    qprime: VF,
    qscr: zF,
    quaternions: MF,
    quatint: PF,
    quest: ZF,
    questeq: YF,
    quo: WF,
    quot: JF,
    rAarr: KF,
    rArr: XF,
    rAtail: QF,
    rBarr: rU,
    rHar: aU,
    race: eU,
    racute: tU,
    radic: nU,
    raemptyv: oU,
    rang: lU,
    rangd: iU,
    range: sU,
    rangle: cU,
    raqu: vU,
    raquo: uU,
    rarr: pU,
    rarrap: dU,
    rarrb: gU,
    rarrbfs: fU,
    rarrc: mU,
    rarrfs: hU,
    rarrhk: bU,
    rarrlp: yU,
    rarrpl: wU,
    rarrsim: xU,
    rarrtl: SU,
    rarrw: qU,
    ratail: AU,
    ratio: EU,
    rationals: kU,
    rbarr: LU,
    rbbrk: NU,
    rbrace: TU,
    rbrack: $U,
    rbrke: DU,
    rbrksld: CU,
    rbrkslu: RU,
    rcaron: IU,
    rcedil: OU,
    rceil: FU,
    rcub: UU,
    rcy: _U,
    rdca: BU,
    rdldhar: jU,
    rdquo: HU,
    rdquor: GU,
    rdsh: VU,
    real: zU,
    realine: MU,
    realpart: PU,
    reals: ZU,
    rect: YU,
    re: WU,
    reg: JU,
    rfisht: KU,
    rfloor: XU,
    rfr: QU,
    rhard: r_,
    rharu: a_,
    rharul: e_,
    rho: t_,
    rhov: n_,
    rightarrow: o_,
    rightarrowtail: l_,
    rightharpoondown: i_,
    rightharpoonup: s_,
    rightleftarrows: c_,
    rightleftharpoons: v_,
    rightrightarrows: u_,
    rightsquigarrow: p_,
    rightthreetimes: d_,
    ring: g_,
    risingdotseq: f_,
    rlarr: m_,
    rlhar: h_,
    rlm: b_,
    rmoust: y_,
    rmoustache: w_,
    rnmid: x_,
    roang: S_,
    roarr: q_,
    robrk: A_,
    ropar: E_,
    ropf: k_,
    roplus: L_,
    rotimes: N_,
    rpar: T_,
    rpargt: $_,
    rppolint: D_,
    rrarr: C_,
    rsaquo: R_,
    rscr: I_,
    rsh: O_,
    rsqb: F_,
    rsquo: U_,
    rsquor: __,
    rthree: B_,
    rtimes: j_,
    rtri: H_,
    rtrie: G_,
    rtrif: V_,
    rtriltri: z_,
    ruluhar: M_,
    rx: P_,
    sacute: Z_,
    sbquo: Y_,
    sc: W_,
    scE: J_,
    scap: K_,
    scaron: X_,
    sccue: Q_,
    sce: rB,
    scedil: aB,
    scirc: eB,
    scnE: tB,
    scnap: nB,
    scnsim: oB,
    scpolint: lB,
    scsim: iB,
    scy: sB,
    sdot: cB,
    sdotb: vB,
    sdote: uB,
    seArr: pB,
    searhk: dB,
    searr: gB,
    searrow: fB,
    sec: mB,
    sect: hB,
    semi: bB,
    seswar: yB,
    setminus: wB,
    setmn: xB,
    sext: SB,
    sfr: qB,
    sfrown: AB,
    sharp: EB,
    shchcy: kB,
    shcy: LB,
    shortmid: NB,
    shortparallel: TB,
    sh: $B,
    shy: DB,
    sigma: CB,
    sigmaf: RB,
    sigmav: IB,
    sim: OB,
    simdot: FB,
    sime: UB,
    simeq: _B,
    simg: BB,
    simgE: jB,
    siml: HB,
    simlE: GB,
    simne: VB,
    simplus: zB,
    simrarr: MB,
    slarr: PB,
    smallsetminus: ZB,
    smashp: YB,
    smeparsl: WB,
    smid: JB,
    smile: KB,
    smt: XB,
    smte: QB,
    smtes: rj,
    softcy: aj,
    sol: ej,
    solb: tj,
    solbar: nj,
    sopf: oj,
    spades: lj,
    spadesuit: ij,
    spar: sj,
    sqcap: cj,
    sqcaps: vj,
    sqcup: uj,
    sqcups: pj,
    sqsub: dj,
    sqsube: gj,
    sqsubset: fj,
    sqsubseteq: mj,
    sqsup: hj,
    sqsupe: bj,
    sqsupset: yj,
    sqsupseteq: wj,
    squ: xj,
    square: Sj,
    squarf: qj,
    squf: Aj,
    srarr: Ej,
    sscr: kj,
    ssetmn: Lj,
    ssmile: Nj,
    sstarf: Tj,
    star: $j,
    starf: Dj,
    straightepsilon: Cj,
    straightphi: Rj,
    strns: Ij,
    sub: Oj,
    subE: Fj,
    subdot: Uj,
    sube: _j,
    subedot: Bj,
    submult: jj,
    subnE: Hj,
    subne: Gj,
    subplus: Vj,
    subrarr: zj,
    subset: Mj,
    subseteq: Pj,
    subseteqq: Zj,
    subsetneq: Yj,
    subsetneqq: Wj,
    subsim: Jj,
    subsub: Kj,
    subsup: Xj,
    succ: Qj,
    succapprox: r2,
    succcurlyeq: a2,
    succeq: e2,
    succnapprox: t2,
    succneqq: n2,
    succnsim: o2,
    succsim: l2,
    sum: i2,
    sung: s2,
    sup: c2,
    sup1: v2,
    sup2: u2,
    sup3: p2,
    supE: d2,
    supdot: g2,
    supdsub: f2,
    supe: m2,
    supedot: h2,
    suphsol: b2,
    suphsub: y2,
    suplarr: w2,
    supmult: x2,
    supnE: S2,
    supne: q2,
    supplus: A2,
    supset: E2,
    supseteq: k2,
    supseteqq: L2,
    supsetneq: N2,
    supsetneqq: T2,
    supsim: $2,
    supsub: D2,
    supsup: C2,
    swArr: R2,
    swarhk: I2,
    swarr: O2,
    swarrow: F2,
    swnwar: U2,
    szli: _2,
    szlig: B2,
    target: j2,
    tau: H2,
    tbrk: G2,
    tcaron: V2,
    tcedil: z2,
    tcy: M2,
    tdot: P2,
    telrec: Z2,
    tfr: Y2,
    there4: W2,
    therefore: J2,
    theta: K2,
    thetasym: X2,
    thetav: Q2,
    thickapprox: rH,
    thicksim: aH,
    thinsp: eH,
    thkap: tH,
    thksim: nH,
    thor: oH,
    thorn: lH,
    tilde: iH,
    time: sH,
    times: cH,
    timesb: vH,
    timesbar: uH,
    timesd: pH,
    tint: dH,
    toea: gH,
    top: fH,
    topbot: mH,
    topcir: hH,
    topf: bH,
    topfork: yH,
    tosa: wH,
    tprime: xH,
    trade: SH,
    triangle: qH,
    triangledown: AH,
    triangleleft: EH,
    trianglelefteq: kH,
    triangleq: LH,
    triangleright: NH,
    trianglerighteq: TH,
    tridot: $H,
    trie: DH,
    triminus: CH,
    triplus: RH,
    trisb: IH,
    tritime: OH,
    trpezium: FH,
    tscr: UH,
    tscy: _H,
    tshcy: BH,
    tstrok: jH,
    twixt: HH,
    twoheadleftarrow: GH,
    twoheadrightarrow: VH,
    uArr: zH,
    uHar: MH,
    uacut: PH,
    uacute: ZH,
    uarr: YH,
    ubrcy: WH,
    ubreve: JH,
    ucir: KH,
    ucirc: XH,
    ucy: QH,
    udarr: rG,
    udblac: aG,
    udhar: eG,
    ufisht: tG,
    ufr: nG,
    ugrav: oG,
    ugrave: lG,
    uharl: iG,
    uharr: sG,
    uhblk: cG,
    ulcorn: vG,
    ulcorner: uG,
    ulcrop: pG,
    ultri: dG,
    umacr: gG,
    um: fG,
    uml: mG,
    uogon: hG,
    uopf: bG,
    uparrow: yG,
    updownarrow: wG,
    upharpoonleft: xG,
    upharpoonright: SG,
    uplus: qG,
    upsi: AG,
    upsih: EG,
    upsilon: kG,
    upuparrows: LG,
    urcorn: NG,
    urcorner: TG,
    urcrop: $G,
    uring: DG,
    urtri: CG,
    uscr: RG,
    utdot: IG,
    utilde: OG,
    utri: FG,
    utrif: UG,
    uuarr: _G,
    uum: BG,
    uuml: jG,
    uwangle: HG,
    vArr: GG,
    vBar: VG,
    vBarv: zG,
    vDash: MG,
    vangrt: PG,
    varepsilon: ZG,
    varkappa: YG,
    varnothing: WG,
    varphi: JG,
    varpi: KG,
    varpropto: XG,
    varr: QG,
    varrho: rV,
    varsigma: aV,
    varsubsetneq: eV,
    varsubsetneqq: tV,
    varsupsetneq: nV,
    varsupsetneqq: oV,
    vartheta: lV,
    vartriangleleft: iV,
    vartriangleright: sV,
    vcy: cV,
    vdash: vV,
    vee: uV,
    veebar: pV,
    veeeq: dV,
    vellip: gV,
    verbar: fV,
    vert: mV,
    vfr: hV,
    vltri: bV,
    vnsub: yV,
    vnsup: wV,
    vopf: xV,
    vprop: SV,
    vrtri: qV,
    vscr: AV,
    vsubnE: EV,
    vsubne: kV,
    vsupnE: LV,
    vsupne: NV,
    vzigzag: TV,
    wcirc: $V,
    wedbar: DV,
    wedge: CV,
    wedgeq: RV,
    weierp: IV,
    wfr: OV,
    wopf: FV,
    wp: UV,
    wr: _V,
    wreath: BV,
    wscr: jV,
    xcap: HV,
    xcirc: GV,
    xcup: VV,
    xdtri: zV,
    xfr: MV,
    xhArr: PV,
    xharr: ZV,
    xi: YV,
    xlArr: WV,
    xlarr: JV,
    xmap: KV,
    xnis: XV,
    xodot: QV,
    xopf: rz,
    xoplus: az,
    xotime: ez,
    xrArr: tz,
    xrarr: nz,
    xscr: oz,
    xsqcup: lz,
    xuplus: iz,
    xutri: sz,
    xvee: cz,
    xwedge: vz,
    yacut: uz,
    yacute: pz,
    yacy: dz,
    ycirc: gz,
    ycy: fz,
    ye: mz,
    yen: hz,
    yfr: bz,
    yicy: yz,
    yopf: wz,
    yscr: xz,
    yucy: Sz,
    yum: qz,
    yuml: Az,
    zacute: Ez,
    zcaron: kz,
    zcy: Lz,
    zdot: Nz,
    zeetrf: Tz,
    zeta: $z,
    zfr: Dz,
    zhcy: Cz,
    zigrarr: Rz,
    zopf: Iz,
    zscr: Oz,
    zwj: Fz,
    zwnj: Uz,
  },
  fa = _z,
  Bz = Hz,
  jz = {}.hasOwnProperty;
function Hz(r) {
  return jz.call(fa, r) ? fa[r] : !1;
}
var ma = wl,
  ha = xl,
  Gz = Va,
  Vz = ql,
  za = Tl,
  zz = Bz,
  Mz = n3,
  Pz = {}.hasOwnProperty,
  or = String.fromCharCode,
  Zz = Function.prototype,
  ba = {
    warning: null,
    reference: null,
    text: null,
    warningContext: null,
    referenceContext: null,
    textContext: null,
    position: {},
    additional: null,
    attribute: !1,
    nonTerminated: !0,
  },
  Yz = 9,
  ya = 10,
  Wz = 12,
  Jz = 32,
  wa = 38,
  Kz = 59,
  Xz = 60,
  Qz = 61,
  r3 = 35,
  a3 = 88,
  e3 = 120,
  t3 = 65533,
  lr = 'named',
  Yr = 'hexadecimal',
  Wr = 'decimal',
  Jr = {};
Jr[Yr] = 16;
Jr[Wr] = 10;
var xr = {};
xr[lr] = za;
xr[Wr] = Gz;
xr[Yr] = Vz;
var Ma = 1,
  Pa = 2,
  Za = 3,
  Ya = 4,
  Wa = 5,
  Nr = 6,
  Ja = 7,
  ar = {};
ar[Ma] = 'Named character references must be terminated by a semicolon';
ar[Pa] = 'Numeric character references must be terminated by a semicolon';
ar[Za] = 'Named character references cannot be empty';
ar[Ya] = 'Numeric character references cannot be empty';
ar[Wa] = 'Named character references must be known';
ar[Nr] = 'Numeric character references cannot be disallowed';
ar[Ja] =
  'Numeric character references cannot be outside the permissible Unicode range';
function n3(r, a) {
  var e = {},
    t,
    o;
  a || (a = {});
  for (o in ba) (t = a[o]), (e[o] = t ?? ba[o]);
  return (
    (e.position.indent || e.position.start) &&
      ((e.indent = e.position.indent || []), (e.position = e.position.start)),
    o3(r, e)
  );
}
function o3(r, a) {
  var e = a.additional,
    t = a.nonTerminated,
    o = a.text,
    s = a.reference,
    p = a.warning,
    l = a.textContext,
    f = a.referenceContext,
    x = a.warningContext,
    m = a.position,
    d = a.indent || [],
    h = r.length,
    b = 0,
    L = -1,
    A = m.column || 1,
    q = m.line || 1,
    E = '',
    c = [],
    n,
    v,
    u,
    i,
    g,
    y,
    w,
    S,
    N,
    R,
    I,
    V,
    j,
    _,
    J,
    T,
    O,
    C,
    $;
  for (
    typeof e == 'string' && (e = e.charCodeAt(0)),
      T = F(),
      S = p ? nr : Zz,
      b--,
      h++;
    ++b < h;

  )
    if ((g === ya && (A = d[L] || 1), (g = r.charCodeAt(b)), g === wa)) {
      if (
        ((w = r.charCodeAt(b + 1)),
        w === Yz ||
          w === ya ||
          w === Wz ||
          w === Jz ||
          w === wa ||
          w === Xz ||
          w !== w ||
          (e && w === e))
      ) {
        (E += or(g)), A++;
        continue;
      }
      for (
        j = b + 1,
          V = j,
          $ = j,
          w === r3
            ? (($ = ++V),
              (w = r.charCodeAt($)),
              w === a3 || w === e3 ? ((_ = Yr), ($ = ++V)) : (_ = Wr))
            : (_ = lr),
          n = '',
          I = '',
          i = '',
          J = xr[_],
          $--;
        ++$ < h && ((w = r.charCodeAt($)), !!J(w));

      )
        (i += or(w)), _ === lr && Pz.call(ma, i) && ((n = i), (I = ma[i]));
      (u = r.charCodeAt($) === Kz),
        u && ($++, (v = _ === lr ? zz(i) : !1), v && ((n = i), (I = v))),
        (C = 1 + $ - j),
        (!u && !t) ||
          (i
            ? _ === lr
              ? (u && !I
                  ? S(Wa, 1)
                  : (n !== i && (($ = V + n.length), (C = 1 + $ - V), (u = !1)),
                    u ||
                      ((N = n ? Ma : Za),
                      a.attribute
                        ? ((w = r.charCodeAt($)),
                          w === Qz
                            ? (S(N, C), (I = null))
                            : za(w)
                            ? (I = null)
                            : S(N, C))
                        : S(N, C))),
                (y = I))
              : (u || S(Pa, C),
                (y = parseInt(i, Jr[_])),
                l3(y)
                  ? (S(Ja, C), (y = or(t3)))
                  : y in ha
                  ? (S(Nr, C), (y = ha[y]))
                  : ((R = ''),
                    i3(y) && S(Nr, C),
                    y > 65535 &&
                      ((y -= 65536),
                      (R += or((y >>> 10) | 55296)),
                      (y = 56320 | (y & 1023))),
                    (y = R + or(y))))
            : _ !== lr && S(Ya, C)),
        y
          ? (H(),
            (T = F()),
            (b = $ - 1),
            (A += $ - j + 1),
            c.push(y),
            (O = F()),
            O.offset++,
            s && s.call(f, y, { start: T, end: O }, r.slice(j - 1, $)),
            (T = O))
          : ((i = r.slice(j - 1, $)), (E += i), (A += i.length), (b = $ - 1));
    } else g === 10 && (q++, L++, (A = 0)), g === g ? ((E += or(g)), A++) : H();
  return c.join('');
  function F() {
    return { line: q, column: A, offset: b + (m.offset || 0) };
  }
  function nr(Y, z) {
    var K = F();
    (K.column += z), (K.offset += z), p.call(x, ar[Y], K, Y);
  }
  function H() {
    E && (c.push(E), o && o.call(l, E, { start: T, end: F() }), (E = ''));
  }
}
function l3(r) {
  return (r >= 55296 && r <= 57343) || r > 1114111;
}
function i3(r) {
  return (
    (r >= 1 && r <= 8) ||
    r === 11 ||
    (r >= 13 && r <= 31) ||
    (r >= 127 && r <= 159) ||
    (r >= 64976 && r <= 65007) ||
    (r & 65535) === 65535 ||
    (r & 65535) === 65534
  );
}
var Ka = { exports: {} };
(function (r) {
  var a =
    typeof window < 'u'
      ? window
      : typeof WorkerGlobalScope < 'u' && self instanceof WorkerGlobalScope
      ? self
      : {};
  /**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   */ var e = (function (t) {
    var o = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
      s = 0,
      p = {},
      l = {
        manual: t.Prism && t.Prism.manual,
        disableWorkerMessageHandler:
          t.Prism && t.Prism.disableWorkerMessageHandler,
        util: {
          encode: function c(n) {
            return n instanceof f
              ? new f(n.type, c(n.content), n.alias)
              : Array.isArray(n)
              ? n.map(c)
              : n
                  .replace(/&/g, '&amp;')
                  .replace(/</g, '&lt;')
                  .replace(/\u00a0/g, ' ');
          },
          type: function (n) {
            return Object.prototype.toString.call(n).slice(8, -1);
          },
          objId: function (n) {
            return (
              n.__id || Object.defineProperty(n, '__id', { value: ++s }), n.__id
            );
          },
          clone: function c(n, v) {
            v = v || {};
            var u, i;
            switch (l.util.type(n)) {
              case 'Object':
                if (((i = l.util.objId(n)), v[i])) return v[i];
                (u = {}), (v[i] = u);
                for (var g in n) n.hasOwnProperty(g) && (u[g] = c(n[g], v));
                return u;
              case 'Array':
                return (
                  (i = l.util.objId(n)),
                  v[i]
                    ? v[i]
                    : ((u = []),
                      (v[i] = u),
                      n.forEach(function (y, w) {
                        u[w] = c(y, v);
                      }),
                      u)
                );
              default:
                return n;
            }
          },
          getLanguage: function (n) {
            for (; n; ) {
              var v = o.exec(n.className);
              if (v) return v[1].toLowerCase();
              n = n.parentElement;
            }
            return 'none';
          },
          setLanguage: function (n, v) {
            (n.className = n.className.replace(RegExp(o, 'gi'), '')),
              n.classList.add('language-' + v);
          },
          currentScript: function () {
            if (typeof document > 'u') return null;
            if ('currentScript' in document && 1 < 2)
              return document.currentScript;
            try {
              throw new Error();
            } catch (i) {
              var n = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(i.stack) ||
                [])[1];
              if (n) {
                var v = document.getElementsByTagName('script');
                for (var u in v) if (v[u].src == n) return v[u];
              }
              return null;
            }
          },
          isActive: function (n, v, u) {
            for (var i = 'no-' + v; n; ) {
              var g = n.classList;
              if (g.contains(v)) return !0;
              if (g.contains(i)) return !1;
              n = n.parentElement;
            }
            return !!u;
          },
        },
        languages: {
          plain: p,
          plaintext: p,
          text: p,
          txt: p,
          extend: function (n, v) {
            var u = l.util.clone(l.languages[n]);
            for (var i in v) u[i] = v[i];
            return u;
          },
          insertBefore: function (n, v, u, i) {
            i = i || l.languages;
            var g = i[n],
              y = {};
            for (var w in g)
              if (g.hasOwnProperty(w)) {
                if (w == v)
                  for (var S in u) u.hasOwnProperty(S) && (y[S] = u[S]);
                u.hasOwnProperty(w) || (y[w] = g[w]);
              }
            var N = i[n];
            return (
              (i[n] = y),
              l.languages.DFS(l.languages, function (R, I) {
                I === N && R != n && (this[R] = y);
              }),
              y
            );
          },
          DFS: function c(n, v, u, i) {
            i = i || {};
            var g = l.util.objId;
            for (var y in n)
              if (n.hasOwnProperty(y)) {
                v.call(n, y, n[y], u || y);
                var w = n[y],
                  S = l.util.type(w);
                S === 'Object' && !i[g(w)]
                  ? ((i[g(w)] = !0), c(w, v, null, i))
                  : S === 'Array' &&
                    !i[g(w)] &&
                    ((i[g(w)] = !0), c(w, v, y, i));
              }
          },
        },
        plugins: {},
        highlightAll: function (n, v) {
          l.highlightAllUnder(document, n, v);
        },
        highlightAllUnder: function (n, v, u) {
          var i = {
            callback: u,
            container: n,
            selector:
              'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code',
          };
          l.hooks.run('before-highlightall', i),
            (i.elements = Array.prototype.slice.apply(
              i.container.querySelectorAll(i.selector),
            )),
            l.hooks.run('before-all-elements-highlight', i);
          for (var g = 0, y; (y = i.elements[g++]); )
            l.highlightElement(y, v === !0, i.callback);
        },
        highlightElement: function (n, v, u) {
          var i = l.util.getLanguage(n),
            g = l.languages[i];
          l.util.setLanguage(n, i);
          var y = n.parentElement;
          y && y.nodeName.toLowerCase() === 'pre' && l.util.setLanguage(y, i);
          var w = n.textContent,
            S = { element: n, language: i, grammar: g, code: w };
          function N(I) {
            (S.highlightedCode = I),
              l.hooks.run('before-insert', S),
              (S.element.innerHTML = S.highlightedCode),
              l.hooks.run('after-highlight', S),
              l.hooks.run('complete', S),
              u && u.call(S.element);
          }
          if (
            (l.hooks.run('before-sanity-check', S),
            (y = S.element.parentElement),
            y &&
              y.nodeName.toLowerCase() === 'pre' &&
              !y.hasAttribute('tabindex') &&
              y.setAttribute('tabindex', '0'),
            !S.code)
          ) {
            l.hooks.run('complete', S), u && u.call(S.element);
            return;
          }
          if ((l.hooks.run('before-highlight', S), !S.grammar)) {
            N(l.util.encode(S.code));
            return;
          }
          if (v && t.Worker) {
            var R = new Worker(l.filename);
            (R.onmessage = function (I) {
              N(I.data);
            }),
              R.postMessage(
                JSON.stringify({
                  language: S.language,
                  code: S.code,
                  immediateClose: !0,
                }),
              );
          } else N(l.highlight(S.code, S.grammar, S.language));
        },
        highlight: function (n, v, u) {
          var i = { code: n, grammar: v, language: u };
          if ((l.hooks.run('before-tokenize', i), !i.grammar))
            throw new Error(
              'The language "' + i.language + '" has no grammar.',
            );
          return (
            (i.tokens = l.tokenize(i.code, i.grammar)),
            l.hooks.run('after-tokenize', i),
            f.stringify(l.util.encode(i.tokens), i.language)
          );
        },
        tokenize: function (n, v) {
          var u = v.rest;
          if (u) {
            for (var i in u) v[i] = u[i];
            delete v.rest;
          }
          var g = new d();
          return h(g, g.head, n), m(n, g, v, g.head, 0), L(g);
        },
        hooks: {
          all: {},
          add: function (n, v) {
            var u = l.hooks.all;
            (u[n] = u[n] || []), u[n].push(v);
          },
          run: function (n, v) {
            var u = l.hooks.all[n];
            if (!(!u || !u.length)) for (var i = 0, g; (g = u[i++]); ) g(v);
          },
        },
        Token: f,
      };
    t.Prism = l;
    function f(c, n, v, u) {
      (this.type = c),
        (this.content = n),
        (this.alias = v),
        (this.length = (u || '').length | 0);
    }
    f.stringify = function c(n, v) {
      if (typeof n == 'string') return n;
      if (Array.isArray(n)) {
        var u = '';
        return (
          n.forEach(function (S) {
            u += c(S, v);
          }),
          u
        );
      }
      var i = {
          type: n.type,
          content: c(n.content, v),
          tag: 'span',
          classes: ['token', n.type],
          attributes: {},
          language: v,
        },
        g = n.alias;
      g &&
        (Array.isArray(g)
          ? Array.prototype.push.apply(i.classes, g)
          : i.classes.push(g)),
        l.hooks.run('wrap', i);
      var y = '';
      for (var w in i.attributes)
        y +=
          ' ' +
          w +
          '="' +
          (i.attributes[w] || '').replace(/"/g, '&quot;') +
          '"';
      return (
        '<' +
        i.tag +
        ' class="' +
        i.classes.join(' ') +
        '"' +
        y +
        '>' +
        i.content +
        '</' +
        i.tag +
        '>'
      );
    };
    function x(c, n, v, u) {
      c.lastIndex = n;
      var i = c.exec(v);
      if (i && u && i[1]) {
        var g = i[1].length;
        (i.index += g), (i[0] = i[0].slice(g));
      }
      return i;
    }
    function m(c, n, v, u, i, g) {
      for (var y in v)
        if (!(!v.hasOwnProperty(y) || !v[y])) {
          var w = v[y];
          w = Array.isArray(w) ? w : [w];
          for (var S = 0; S < w.length; ++S) {
            if (g && g.cause == y + ',' + S) return;
            var N = w[S],
              R = N.inside,
              I = !!N.lookbehind,
              V = !!N.greedy,
              j = N.alias;
            if (V && !N.pattern.global) {
              var _ = N.pattern.toString().match(/[imsuy]*$/)[0];
              N.pattern = RegExp(N.pattern.source, _ + 'g');
            }
            for (
              var J = N.pattern || N, T = u.next, O = i;
              T !== n.tail && !(g && O >= g.reach);
              O += T.value.length, T = T.next
            ) {
              var C = T.value;
              if (n.length > c.length) return;
              if (!(C instanceof f)) {
                var $ = 1,
                  F;
                if (V) {
                  if (((F = x(J, O, c, I)), !F || F.index >= c.length)) break;
                  var z = F.index,
                    nr = F.index + F[0].length,
                    H = O;
                  for (H += T.value.length; z >= H; )
                    (T = T.next), (H += T.value.length);
                  if (((H -= T.value.length), (O = H), T.value instanceof f))
                    continue;
                  for (
                    var Y = T;
                    Y !== n.tail && (H < nr || typeof Y.value == 'string');
                    Y = Y.next
                  )
                    $++, (H += Y.value.length);
                  $--, (C = c.slice(O, H)), (F.index -= O);
                } else if (((F = x(J, 0, C, I)), !F)) continue;
                var z = F.index,
                  K = F[0],
                  sr = C.slice(0, z),
                  ra = C.slice(z + K.length),
                  Sr = O + C.length;
                g && Sr > g.reach && (g.reach = Sr);
                var fr = T.prev;
                sr && ((fr = h(n, fr, sr)), (O += sr.length)), b(n, fr, $);
                var ee = new f(y, R ? l.tokenize(K, R) : K, j, K);
                if (((T = h(n, fr, ee)), ra && h(n, T, ra), $ > 1)) {
                  var qr = { cause: y + ',' + S, reach: Sr };
                  m(c, n, v, T.prev, O, qr),
                    g && qr.reach > g.reach && (g.reach = qr.reach);
                }
              }
            }
          }
        }
    }
    function d() {
      var c = { value: null, prev: null, next: null },
        n = { value: null, prev: c, next: null };
      (c.next = n), (this.head = c), (this.tail = n), (this.length = 0);
    }
    function h(c, n, v) {
      var u = n.next,
        i = { value: v, prev: n, next: u };
      return (n.next = i), (u.prev = i), c.length++, i;
    }
    function b(c, n, v) {
      for (var u = n.next, i = 0; i < v && u !== c.tail; i++) u = u.next;
      (n.next = u), (u.prev = n), (c.length -= i);
    }
    function L(c) {
      for (var n = [], v = c.head.next; v !== c.tail; )
        n.push(v.value), (v = v.next);
      return n;
    }
    if (!t.document)
      return (
        t.addEventListener &&
          (l.disableWorkerMessageHandler ||
            t.addEventListener(
              'message',
              function (c) {
                var n = JSON.parse(c.data),
                  v = n.language,
                  u = n.code,
                  i = n.immediateClose;
                t.postMessage(l.highlight(u, l.languages[v], v)),
                  i && t.close();
              },
              !1,
            )),
        l
      );
    var A = l.util.currentScript();
    A &&
      ((l.filename = A.src), A.hasAttribute('data-manual') && (l.manual = !0));
    function q() {
      l.manual || l.highlightAll();
    }
    if (!l.manual) {
      var E = document.readyState;
      E === 'loading' || (E === 'interactive' && A && A.defer)
        ? document.addEventListener('DOMContentLoaded', q)
        : window.requestAnimationFrame
        ? window.requestAnimationFrame(q)
        : window.setTimeout(q, 16);
    }
    return l;
  })(a);
  r.exports && (r.exports = e), typeof yr < 'u' && (yr.Prism = e);
})(Ka);
var s3 = Kr;
Kr.displayName = 'clike';
Kr.aliases = [];
function Kr(r) {
  r.languages.clike = {
    comment: [
      {
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: !0,
        greedy: !0,
      },
      { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
    ],
    string: {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: !0,
    },
    'class-name': {
      pattern:
        /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
      lookbehind: !0,
      inside: { punctuation: /[.\\]/ },
    },
    keyword:
      /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
    boolean: /\b(?:false|true)\b/,
    function: /\b\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    punctuation: /[{}[\];(),.:]/,
  };
}
var c3 = Xr;
Xr.displayName = 'javascript';
Xr.aliases = ['js'];
function Xr(r) {
  (r.languages.javascript = r.languages.extend('clike', {
    'class-name': [
      r.languages.clike['class-name'],
      {
        pattern:
          /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
        lookbehind: !0,
      },
    ],
    keyword: [
      { pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 },
      {
        pattern:
          /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: !0,
      },
    ],
    function:
      /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    number: {
      pattern: RegExp(
        /(^|[^\w$])/.source +
          '(?:' +
          (/NaN|Infinity/.source +
            '|' +
            /0[bB][01]+(?:_[01]+)*n?/.source +
            '|' +
            /0[oO][0-7]+(?:_[0-7]+)*n?/.source +
            '|' +
            /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source +
            '|' +
            /\d+(?:_\d+)*n/.source +
            '|' +
            /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/
              .source) +
          ')' +
          /(?![\w$])/.source,
      ),
      lookbehind: !0,
    },
    operator:
      /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
  })),
    (r.languages.javascript['class-name'][0].pattern =
      /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/),
    r.languages.insertBefore('javascript', 'keyword', {
      regex: {
        pattern:
          /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
        lookbehind: !0,
        greedy: !0,
        inside: {
          'regex-source': {
            pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
            lookbehind: !0,
            alias: 'language-regex',
            inside: r.languages.regex,
          },
          'regex-delimiter': /^\/|\/$/,
          'regex-flags': /^[a-z]+$/,
        },
      },
      'function-variable': {
        pattern:
          /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
        alias: 'function',
      },
      parameter: [
        {
          pattern:
            /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
          lookbehind: !0,
          inside: r.languages.javascript,
        },
        {
          pattern:
            /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
          lookbehind: !0,
          inside: r.languages.javascript,
        },
        {
          pattern:
            /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
          lookbehind: !0,
          inside: r.languages.javascript,
        },
        {
          pattern:
            /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
          lookbehind: !0,
          inside: r.languages.javascript,
        },
      ],
      constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
    }),
    r.languages.insertBefore('javascript', 'string', {
      hashbang: { pattern: /^#!.*/, greedy: !0, alias: 'comment' },
      'template-string': {
        pattern:
          /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
        greedy: !0,
        inside: {
          'template-punctuation': { pattern: /^`|`$/, alias: 'string' },
          interpolation: {
            pattern:
              /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
            lookbehind: !0,
            inside: {
              'interpolation-punctuation': {
                pattern: /^\$\{|\}$/,
                alias: 'punctuation',
              },
              rest: r.languages.javascript,
            },
          },
          string: /[\s\S]+/,
        },
      },
      'string-property': {
        pattern:
          /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
        lookbehind: !0,
        greedy: !0,
        alias: 'property',
      },
    }),
    r.languages.insertBefore('javascript', 'operator', {
      'literal-property': {
        pattern:
          /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
        lookbehind: !0,
        alias: 'property',
      },
    }),
    r.languages.markup &&
      (r.languages.markup.tag.addInlined('script', 'javascript'),
      r.languages.markup.tag.addAttribute(
        /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/
          .source,
        'javascript',
      )),
    (r.languages.js = r.languages.javascript);
}
var pr =
    (typeof globalThis > 'u' ? 'undefined' : W(globalThis)) === 'object'
      ? globalThis
      : (typeof self > 'u' ? 'undefined' : W(self)) === 'object'
      ? self
      : (typeof window > 'u' ? 'undefined' : W(window)) === 'object'
      ? window
      : W(yr) === 'object'
      ? yr
      : {},
  v3 = E3();
pr.Prism = { manual: !0, disableWorkerMessageHandler: !0 };
var u3 = wn,
  p3 = Mz,
  Xa = Ka.exports,
  d3 = Ea,
  g3 = Aa,
  f3 = s3,
  m3 = c3;
v3();
var Qr = {}.hasOwnProperty;
function Qa() {}
Qa.prototype = Xa;
var U = new Qa(),
  re = U;
U.highlight = b3;
U.register = gr;
U.alias = h3;
U.registered = y3;
U.listLanguages = w3;
gr(d3);
gr(g3);
gr(f3);
gr(m3);
U.util.encode = q3;
U.Token.stringify = x3;
function gr(r) {
  if (typeof r != 'function' || !r.displayName)
    throw new Error('Expected `function` for `grammar`, got `' + r + '`');
  U.languages[r.displayName] === void 0 && r(U);
}
function h3(r, a) {
  var e = U.languages,
    t = r,
    o,
    s,
    p,
    l;
  a && ((t = {}), (t[r] = a));
  for (o in t)
    for (
      s = t[o], s = typeof s == 'string' ? [s] : s, p = s.length, l = -1;
      ++l < p;

    )
      e[s[l]] = e[o];
}
function b3(r, a) {
  var e = Xa.highlight,
    t;
  if (typeof r != 'string')
    throw new Error('Expected `string` for `value`, got `' + r + '`');
  if (U.util.type(a) === 'Object') (t = a), (a = null);
  else {
    if (typeof a != 'string')
      throw new Error('Expected `string` for `name`, got `' + a + '`');
    if (Qr.call(U.languages, a)) t = U.languages[a];
    else throw new Error('Unknown language: `' + a + '` is not registered');
  }
  return e.call(this, r, t, a);
}
function y3(r) {
  if (typeof r != 'string')
    throw new Error('Expected `string` for `language`, got `' + r + '`');
  return Qr.call(U.languages, r);
}
function w3() {
  var r = U.languages,
    a = [],
    e;
  for (e in r) Qr.call(r, e) && W(r[e]) === 'object' && a.push(e);
  return a;
}
function x3(r, a, e) {
  var t;
  return typeof r == 'string'
    ? { type: 'text', value: r }
    : U.util.type(r) === 'Array'
    ? S3(r, a)
    : ((t = {
        type: r.type,
        content: U.Token.stringify(r.content, a, e),
        tag: 'span',
        classes: ['token', r.type],
        attributes: {},
        language: a,
        parent: e,
      }),
      r.alias && (t.classes = t.classes.concat(r.alias)),
      U.hooks.run('wrap', t),
      u3(t.tag + '.' + t.classes.join('.'), A3(t.attributes), t.content));
}
function S3(r, a) {
  for (var e = [], t = r.length, o = -1, s; ++o < t; )
    (s = r[o]), s !== '' && s !== null && s !== void 0 && e.push(s);
  for (o = -1, t = e.length; ++o < t; )
    (s = e[o]), (e[o] = U.Token.stringify(s, a, e));
  return e;
}
function q3(r) {
  return r;
}
function A3(r) {
  var a;
  for (a in r) r[a] = p3(r[a]);
  return r;
}
function E3() {
  var r = 'Prism' in pr,
    a = r ? pr.Prism : void 0;
  return e;
  function e() {
    r ? (pr.Prism = a) : delete pr.Prism, (r = void 0), (a = void 0);
  }
}
var ae = at(re, {});
ae.registerLanguage = function (r, a) {
  return re.register(a);
};
var Z = ae,
  hr = Tr.navigator,
  vr = Tr.document,
  xa = Tr.window;
Z.registerLanguage('jsextra', we);
Z.registerLanguage('jsx', fe);
Z.registerLanguage('json', Se);
Z.registerLanguage('yml', Te);
Z.registerLanguage('md', Le);
Z.registerLanguage('bash', he);
Z.registerLanguage('css', be);
Z.registerLanguage('html', Ee);
Z.registerLanguage('tsx', Ie);
Z.registerLanguage('typescript', $e);
Z.registerLanguage('graphql', Ae);
var k3 = se(2)(function (r) {
    return Object.entries(r.code || {}).reduce(function (a, e) {
      var t = Sa(e, 2),
        o = t[0],
        s = t[1];
      return Object.assign(Object.assign({}, a), ve({}, '* .'.concat(o), s));
    }, {});
  }),
  L3 = N3();
function N3() {
  var r = this;
  return hr != null && hr.clipboard
    ? function (a) {
        return hr.clipboard.writeText(a);
      }
    : function (a) {
        return te(
          r,
          void 0,
          void 0,
          regeneratorRuntime.mark(function e() {
            var t, o;
            return regeneratorRuntime.wrap(function (p) {
              for (;;)
                switch ((p.prev = p.next)) {
                  case 0:
                    (t = vr.createElement('TEXTAREA')),
                      (o = vr.activeElement),
                      (t.value = a),
                      vr.body.appendChild(t),
                      t.select(),
                      vr.execCommand('copy'),
                      vr.body.removeChild(t),
                      o.focus();
                  case 8:
                  case 'end':
                    return p.stop();
                }
            }, e);
          }),
        );
      };
}
var T3 = wr.div(
    function (r) {
      var a = r.theme;
      return {
        position: 'relative',
        overflow: 'hidden',
        color: a.color.defaultText,
      };
    },
    function (r) {
      var a = r.theme,
        e = r.bordered;
      return e
        ? {
            border: '1px solid '.concat(a.appBorderColor),
            borderRadius: a.borderRadius,
            background: a.background.content,
          }
        : {};
    },
  ),
  $3 = wr(function (r) {
    var a = r.children,
      e = r.className;
    return X(ne, { horizontal: !0, vertical: !0, className: e, children: a });
  })({ position: 'relative' }, function (r) {
    var a = r.theme;
    return k3(a);
  }),
  D3 = wr.pre(function (r) {
    var a = r.theme,
      e = r.padded;
    return {
      display: 'flex',
      justifyContent: 'flex-start',
      margin: 0,
      padding: e ? a.layoutMargin : 0,
    };
  }),
  C3 = wr.div(function (r) {
    var a = r.theme;
    return {
      flex: 1,
      paddingLeft: 2,
      paddingRight: a.layoutMargin,
      opacity: 1,
    };
  }),
  B3 = function (a) {
    var e = a.children,
      t = a.language,
      o = t === void 0 ? 'jsx' : t,
      s = a.copyable,
      p = s === void 0 ? !1 : s,
      l = a.bordered,
      f = l === void 0 ? !1 : l,
      x = a.padded,
      m = x === void 0 ? !1 : x,
      d = a.format,
      h = d === void 0 ? !0 : d,
      b = a.formatter,
      L = b === void 0 ? null : b,
      A = a.className,
      q = A === void 0 ? null : A,
      E = a.showLineNumbers,
      c = E === void 0 ? !1 : E,
      n = oe(a, [
        'children',
        'language',
        'copyable',
        'bordered',
        'padded',
        'format',
        'formatter',
        'className',
        'showLineNumbers',
      ]);
    if (typeof e != 'string' || !e.trim()) return null;
    var v = L ? L(h, e) : e.trim(),
      u = aa.useState(!1),
      i = Sa(u, 2),
      g = i[0],
      y = i[1],
      w = aa.useCallback(function (S) {
        S.preventDefault();
        var N = xa.getSelection().toString(),
          R = S.type !== 'click' && N ? N : v;
        L3(R)
          .then(function () {
            y(!0),
              xa.setTimeout(function () {
                return y(!1);
              }, 1500);
          })
          .catch(ce.error);
      }, []);
    return Er(T3, {
      bordered: f,
      padded: m,
      className: q,
      onCopyCapture: w,
      children: [
        X($3, {
          children: X(Z, {
            ...Object.assign(
              {
                padded: m || f,
                language: o,
                showLineNumbers: c,
                showInlineLineNumbers: c,
                useInlineStyles: !1,
                PreTag: D3,
                CodeTag: C3,
                lineNumberContainerStyle: {},
              },
              n,
            ),
            children: v,
          }),
        }),
        p
          ? X(le, {
              actionItems: [{ title: g ? 'Copied' : 'Copy', onClick: w }],
            })
          : null,
      ],
    });
  };
export {
  B3 as SyntaxHighlighter,
  N3 as createCopyToClipboardFunction,
  B3 as default,
};
//# sourceMappingURL=syntaxhighlighter-b07b042a-dc920671.js.map
