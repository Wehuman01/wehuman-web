/** Site copy. Written to be read, not scanned. One voice: plainspoken,
 *  first-person, honest about boundaries. No marketing verbs.
 *  Homepage stays an index — section content lives on its own page. */

export type Locale = 'en' | 'zh';

export const locales: Locale[] = ['en', 'zh'];

export const ORG = 'https://github.com/wehuman01';

const en = {
  htmlLang: 'en',
  masthead: {
    line: 'a small studio · est. 2026',
    nav: {
      main: 'main',
      product: 'product',
      articles: 'articles',
      philosophy: 'philosophy',
      github: 'GitHub ↗',
    },
  },
  meta: {
    home: { title: 'wehuman', description: 'Building tools for humans in the AI age. AI tools that protect attention, creativity, and human choice.' },
    philosophy: { title: 'philosophy — wehuman', description: 'AI should make us more human: more creative, more focused, freer to work on what matters.' },
    product: { title: 'product — wehuman', description: 'A family of tools: keep agent sessions, keep coding-plan windows warm, share AI capability without sharing keys.' },
    articles: { title: 'articles — wehuman', description: 'Field notes on human-first tooling, local-first AI infrastructure, and honest trust boundaries.' },
  },
  home: {
    display: ['Building tools', 'in the AI age', 'for humans'],
    // the noun after the prefix cycles through the hero (scramble effect);
    // display[rotateLine] must equal rotatePrefix + rotate[0].word.
    // hue is the word's own ink (OKLCH); lightness/chroma live in tokens.css per theme.
    rotateLine: 2,
    rotatePrefix: 'for ',
    rotate: [
      { word: 'humans', hue: 264 },
      { word: 'builders', hue: 220 },
      { word: 'makers', hue: 165 },
      { word: 'thinkers', hue: 300 },
      { word: 'artists', hue: 350 },
      { word: 'teachers', hue: 85 },
      { word: 'you', hue: 30 },
    ],
    lede: 'It should make us more human — more creative, more focused, freer. A small studio: a family of tools, and a notebook.',
    cta: 'Explore our products',
  },
  product: {
    display: 'a family of tools, one stance',
    lede: 'All of them do the same thing: the machine carries the repetition, the person keeps the controls.',
    groups: [
      {
        label: 'cli tools',
        records: [
          {
            name: 'awewarm',
            intro: 'Coding-plan windows run on a clock: use the plan and a five-hour window opens; stay away and it goes cold. awewarm fires one minimal scheduled request, so the next window is always already open when you return.',
            boundaries: [
              'Schedule and keys live in local files; a server only enters the picture if you delegate a connection to one.',
              'The boundary is explicit: one small request — “Reply with exactly: ok” — at a planned time, nothing more.',
            ],
            repo: 'https://github.com/wehuman01/awewarm',
            site: 'https://awewarm.wehuman.top/',
            meta: ['two scheduling modes', 'local-first', 'explicit boundaries'],
          },
          {
            name: 'aweshare',
            intro: 'A local-first relay for AI capability. A friend shares an idle local model or an authorized subscription; you point an ordinary OpenAI / Anthropic SDK at the hub and call it by alias — peng/qwen, say. Upstream keys are injected at call time, on the provider’s machine, and never travel.',
            boundaries: [
              'Stated plainly: prompts and responses pass the trusted hub in cleartext — not end-to-end encryption.',
              'Everyone still honours the upstream services’ terms.',
              'The hub can be yours (aweshare hub serve); either way, keys stay home.',
            ],
            repo: 'https://github.com/wehuman01/aweshare',
            site: 'https://aweshare.wehuman.top/',
            meta: ['local models', 'self-hosted hub', 'standard SDKs'],
          },
        ],
        briefs: [
          {
            name: 'aweskill',
            intro: 'A CLI-first skill package manager that AI agents can operate themselves: install, update and bundle skills across Claude Code, Codex, Cursor and more.',
            repo: 'https://github.com/Webioinfo01/aweskill',
            site: 'https://aweskill.wehuman.top/',
          },
          {
            name: 'aweswitch',
            intro: 'A tiny local launcher for agent profiles: start different sessions with different API endpoints, tokens and models, without rewriting global config.',
            repo: 'https://github.com/Webioinfo01/aweswitch',
            site: '',
          },
          {
            name: 'awerouter',
            intro: 'A transparent same-protocol proxy that routes coding-agent requests by structural signals — cheap, fast tasks to Flash, hard decisions to Pro.',
            repo: 'https://github.com/mugpeng/awerouter',
            site: '',
          },
          {
            name: 'aweshelf',
            intro: 'Bookmark, categorize, and restore AI coding sessions; pairs with aweswitch to save profiles and launch with one command.',
            repo: 'https://github.com/Webioinfo01/aweshelf',
            site: '',
          },
          {
            name: 'awescholar',
            intro: 'Scientific literature discovery and curation that AI agents can operate: search, annotate, filter, report — or just run the CLI yourself.',
            repo: 'https://github.com/wehuman01/awescholar',
            site: '',
          },
          {
            name: 'awecompress',
            intro: 'Context compression for long coding-agent sessions: once history crosses a token threshold, the oldest whole turns freeze into one cached summary — standalone proxy, or a flag inside awerouter.',
            repo: 'https://github.com/wehuman01/awecompress',
            site: '',
          },
          {
            name: 'awehitch',
            intro: 'Hitch the ChatGPT web subscription you already pay for onto any coding agent as its planning and review brain — read-only MCP, no API keys, execution stays local.',
            repo: 'https://github.com/wehuman01/awehitch',
            site: '',
          },
          {
            name: 'awecontrib',
            intro: 'One verify entry per repo, one version truth per repo. Local and CI run the same command so they cannot drift.',
            repo: 'https://github.com/wehuman01/awecontrib',
            site: '',
          },
        ],
      },
      {
        label: 'desktop apps',
        records: [
          {
            name: 'awedot',
            intro: 'When attention moves on, an agent session should not vanish with it. awedot — a floating orb at your screen edge — bookmarks the session you are in with one click and resumes it later in your terminal, original API profile intact. It finds sessions on disk across Claude Code, Codex, OpenCode and more, and reaches remote servers over SSH.',
            boundaries: [
              'Sessions stay on your machine; awedot is a local index, not a cloud.',
              'Restores are explicit — nothing auto-resumes.',
            ],
            repo: 'https://github.com/mugpeng/awedot',
            site: 'https://awedot.wehuman.top/',
            meta: ['session bookmarks', 'one-click resume', 'multi-agent'],
          },
          {
            name: 'awefork',
            intro: 'A desktop workbench that turns agent sessions into a tree: pick any past turn, fork a branch from it, and keep exploring in parallel. Read-only projection of real sessions, native fork API, no storage lock-in.',
            boundaries: [
              'Sessions stay on your machine; awefork only projects them and records fork lineage.',
              'Every branch it creates is a plain native session you can keep using in the agent itself.',
              'Supports opencode today; other backends are adapter-driven, not storage hacks.',
            ],
            repo: 'https://github.com/wehuman01/awefork',
            site: '',
            meta: ['node-level fork', 'session tree', 'local desktop'],
          },
        ],
        briefs: [],
      },
      {
        label: 'websites',
        records: [
          {
            name: 'eggx',
            intro: 'Free AI coding credits appear and vanish every week, and most “freebie roundups” rot because nobody re-checks them. eggx answers one question — what can you claim right now? Every offer is a small conclusion carrying four pieces of evidence: an official source, a credibility label, the real limits, and the date it was last verified.',
            boundaries: [
              'Free ≠ unlimited: an unpublished limit stays “undisclosed” — never guessed into “unlimited”.',
              'Every offer is labelled official-verified or community-reported; a third-party source can suggest an entry but never serve as the only evidence.',
              'Expired offers are archived, not deleted — the audit trail stays public.',
            ],
            repo: 'https://github.com/wehuman01/eggx',
            site: 'https://eggx.wehuman.top/',
            meta: ['three sections', 'bilingual', 'agent APIs'],
          },
        ],
        briefs: [],
      },
    ],
    back: '← back to the front page',
  },
  philosophy: {
    display: 'the point of a tool',
    sections: [
      {
        head: 'agency',
        body: [
          'AI should enlarge a person’s agency, not reshape life around yet another tool. Who initiates, who interrupts, who decides something is finished — those moments belong to the person.',
        ],
      },
      {
        head: 'between intent and action',
        body: [
          'Most attention is lost between intending and starting. That is where we work: keep the thread, prepare ahead, don’t interrupt, don’t take the controls.',
        ],
      },
      {
        head: 'what a good tool owes you',
        body: [
          'Quiet handling of repetition and complexity. Boundaries shown honestly, including the ones it can’t fix. It stays explainable; the important choices stay with you.',
        ],
      },
      {
        head: 'how we measure',
        body: [
          'Afterwards, does a person have more attention, more creativity, more room to choose? Every tool we keep has to answer yes. The rest gets changed, or retired.',
        ],
      },
    ],
    back: '← back to the front page',
  },
  sections: {
    label: 'contents',
    navLabel: 'sections',
    expandAll: 'expand all',
    collapseAll: 'collapse all',
    toIndex: '↑ back to contents',
  },
  articles: {
    display: 'field notes',
    lede: 'Notes written from real work.',
    back: '← all articles',
  },
  article: {
    back: '← all articles',
    published: 'published',
    tags: 'tags',
  },
  colophon: {
    motto: 'The machine repeats. The person decides.',
    dense: `Source on <a href="${ORG}">GitHub</a> — issues welcome. Our sister studio <a href="https://www.webioinfo.top/">webioinfo</a> lets AI be your dev team. © 2026 wehuman.`,
    github: 'GitHub ↗',
    email: 'peng@wehuman.top',
    wechat: 'WeChat 公众号',
    wechatAria: 'WeChat Official Account QR code',
  },
};

const zh = {
  htmlLang: 'zh-CN',
  masthead: {
    line: '一个小团队 · 始于 2026',
    nav: {
      main: '首页',
      product: '产品',
      articles: '文章',
      philosophy: '理念',
      github: 'GitHub ↗',
    },
  },
  meta: {
    home: { title: 'wehuman', description: '在 AI 时代为人做工具。我们做保护注意力、创造力与人的选择的 AI 工具。' },
    philosophy: { title: '理念 — wehuman', description: 'AI 应该让我们更像人：更有创造力、更专注，也更自由地去做重要的事。' },
    product: { title: '产品 — wehuman', description: '一族工具：留住 agent 会话、给 coding-plan 窗口保温、不交出密钥地共享 AI 能力。' },
    articles: { title: '文章 — wehuman', description: '关于以人为本的工具、本地优先 AI 基础设施与诚实信任边界的笔记。' },
  },
  home: {
    display: ['在 AI 时代', '做工具', '给人'],
    // 同英文：display[rotateLine] 必须等于 rotatePrefix + rotate[0].word
    rotateLine: 2,
    rotatePrefix: '给',
    rotate: [
      { word: '人', hue: 264 },
      { word: '建造者', hue: 220 },
      { word: '手艺人', hue: 165 },
      { word: '思考者', hue: 300 },
      { word: '艺术家', hue: 350 },
      { word: '老师', hue: 85 },
      { word: '你', hue: 30 },
    ],
    lede: '它应该让我们更像人——更有创造力、更专注，也更自由。我们是一个小团队：一族工具，一本手记。',
    cta: '探索产品',
  },
  product: {
    display: '一族工具，一个立场',
    lede: '它们都在做同一件事：机器承担重复，控制权留在人手里。',
    groups: [
      {
        label: '命令行工具',
        records: [
          {
            name: 'awewarm',
            intro: 'Coding-plan 的窗口跟着时钟走：用一次，五小时的窗口打开；人一走开，它就凉了。awewarm 按计划发一次极小的请求，让下一个窗口在你回来之前就已经是热的。',
            boundaries: [
              '日程和密钥都在本地文件里；只有当你把某个连接托付给一台常开的服务器，服务器才会进场。',
              '边界说得明白：计划时间里一次极小的请求——让它回复一个 ok——仅此而已。',
            ],
            repo: 'https://github.com/wehuman01/awewarm',
            site: 'https://awewarm.wehuman.top/',
            meta: ['两种调度模式', '本地优先', '明确的边界'],
          },
          {
            name: 'aweshare',
            intro: '本地优先的能力中继。朋友共享闲置的本地模型或授权过的订阅；你把普通的 OpenAI / Anthropic SDK 指向 hub，按别名调用——比如 peng/qwen。上游密钥在调用那一刻、在提供者的机器上注入，从不出门。',
            boundaries: [
              '明说：提示词与响应以明文经过受信任的 hub，不是端到端加密。',
              '各方仍需遵守上游服务的条款。',
              'hub 可以自建（aweshare hub serve）；无论哪种，密钥都留在家里。',
            ],
            repo: 'https://github.com/wehuman01/aweshare',
            site: 'https://aweshare.wehuman.top/',
            meta: ['本地模型', '自托管 hub', '标准 SDK'],
          },
        ],
        briefs: [
          {
            name: 'aweskill',
            intro: 'CLI 优先的技能包管理器，AI agent 能自己操作：在 Claude Code、Codex、Cursor 等 agent 里安装、更新、打包技能。',
            repo: 'https://github.com/Webioinfo01/aweskill',
            site: 'https://aweskill.wehuman.top/',
          },
          {
            name: 'aweswitch',
            intro: '一个小小的本地启动器：用不同的 API 端点、令牌和模型启动不同的 agent 会话，不用改全局配置。',
            repo: 'https://github.com/Webioinfo01/aweswitch',
            site: '',
          },
          {
            name: 'awerouter',
            intro: '同协议的透明代理，按结构信号分流 coding-agent 的请求——便宜快的活交给 Flash，难的决策留给 Pro。',
            repo: 'https://github.com/mugpeng/awerouter',
            site: '',
          },
          {
            name: 'aweshelf',
            intro: '收藏、分类、恢复 AI coding session；与 aweswitch 搭配，保存配置、一条命令启动。',
            repo: 'https://github.com/Webioinfo01/aweshelf',
            site: '',
          },
          {
            name: 'awescholar',
            intro: '交给 AI agent 操作的科研文献发现与整理：搜索、标注、筛选、出报告——自己在 CLI 里跑也行。',
            repo: 'https://github.com/wehuman01/awescholar',
            site: '',
          },
          {
            name: 'awecompress',
            intro: '长会话的上下文压缩：历史超过 token 门限后，最旧的整轮对话冻成一份缓存摘要——可独立代理，也可作为 awerouter 的一个开关。',
            repo: 'https://github.com/wehuman01/awecompress',
            site: '',
          },
          {
            name: 'awehitch',
            intro: '把已付费的 ChatGPT 网页订阅挂到任意编码 agent 上当规划与审查外脑——只读 MCP，不用 API Key，执行权留在本地。',
            repo: 'https://github.com/wehuman01/awehitch',
            site: '',
          },
          {
            name: 'awecontrib',
            intro: '每个仓库一条 verify 命令、一处版本真相。本地和 CI 跑同一条命令，不会再漂移。',
            repo: 'https://github.com/wehuman01/awecontrib',
            site: '',
          },
        ],
      },
      {
        label: '桌面应用',
        records: [
          {
            name: 'awedot',
            intro: '注意力移开的时候，agent session 不该跟着消失。awedot 是屏幕边缘的一颗悬浮球：一键收藏当前会话，之后一键恢复到你自己的终端——API 配置还是当初那份。会话从本地磁盘发现，Claude Code、Codex、OpenCode 都算，SSH 还能把远程服务器接进来。',
            boundaries: [
              'session 留在你自己的机器上；awedot 是本地索引，不是云。',
              '恢复是显式的，没有东西自动续跑。',
            ],
            repo: 'https://github.com/mugpeng/awedot',
            site: 'https://awedot.wehuman.top/',
            meta: ['会话书签', '一键恢复', '多 Agent'],
          },
          {
            name: 'awefork',
            intro: '把 agent 会话变成一棵树的桌面工作台：任选历史轮次，从那里分叉，并行推进多条探索。真实会话的只读投影，走原生 fork API，不碰存储。',
            boundaries: [
              '会话留在你自己的机器上；awefork 只做投影，并记录分叉血缘。',
              '它创建的每条分支都是原生会话，随时可拿回 agent 本体继续用。',
              '当前主打 opencode；其他后端走适配器，不是存储层的发明。',
            ],
            repo: 'https://github.com/wehuman01/awefork',
            site: '',
            meta: ['节点级分叉', '会话树', '本地桌面'],
          },
        ],
        briefs: [],
      },
      {
        label: '网站',
        records: [
          {
            name: 'eggx',
            intro: '免费的 AI 编码额度每周都在出现和消失，大多数“免费资源大全”没人复查，慢慢就烂掉了。eggx 只回答一个问题：现在有什么可以领？每条羊毛都是一个小结论，带四样证据：官方来源、可信度标签、真实限额、最后核实日期。',
            boundaries: [
              '免费 ≠ 无限：没公布的限额就一直写“未公布”，从不推测成“无限”。',
              '每条羊毛都带可信度标签——官方核实的，还是社区消息待二次确认的；第三方来源只能引导收录，不能作为唯一依据。',
              '过期只归档，不删除，公开的核实轨迹留得住。',
            ],
            repo: 'https://github.com/wehuman01/eggx',
            site: 'https://eggx.wehuman.top/',
            meta: ['三种羊毛', '双语', 'Agent 接口'],
          },
        ],
        briefs: [],
      },
    ],
    back: '← 回到首页',
  },
  philosophy: {
    display: '工具的意义',
    sections: [
      {
        head: '能动性',
        body: [
          'AI 应该扩大人的能动性，而不是让生活去适应又一个工具。谁发起、谁打断、谁决定一件事算不算完成——这些时刻留在人手里。',
        ],
      },
      {
        head: '意图与行动之间',
        body: [
          '大部分注意力流失在“打算做”和“开始做”之间。我们就在这条缝里工作：留住思路、提前准备、不打断，也不拿走控制权。',
        ],
      },
      {
        head: '好工具欠你什么',
        body: [
          '安静地承担重复与复杂；诚实地暴露边界，包括修不了的那些；保持可解释；把重要的选择留给你。',
        ],
      },
      {
        head: '我们怎么衡量',
        body: [
          '用过之后，人是否拥有更多注意力、创造力和选择的空间？每个工具都要能回答“是”；答不上来的，就改，或者停。',
        ],
      },
    ],
    back: '← 回到首页',
  },
  sections: {
    label: '目录',
    navLabel: '目录导航',
    expandAll: '全部展开',
    collapseAll: '全部收起',
    toIndex: '↑ 回到目录',
  },
  articles: {
    display: '手记',
    lede: '从真实工作里写出来的笔记。',
    back: '← 全部文章',
  },
  article: {
    back: '← 全部文章',
    published: '发表于',
    tags: '标签',
  },
  colophon: {
    motto: '机器负责重复，人负责决定。',
    dense: `源码在 <a href="${ORG}">GitHub</a>，欢迎 issue。姊妹团队 <a href="https://www.webioinfo.top/">webioinfo</a>——让 AI 成为你的开发团队。© 2026 wehuman。`,
    github: 'GitHub ↗',
    email: 'peng@wehuman.top',
    wechat: '公众号',
    wechatAria: '微信公众号二维码',
  },
};

export const ui = { en, zh };
export type Copy = typeof en;
