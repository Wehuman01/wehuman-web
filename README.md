<div align="center">
  <h1>wehuman-web</h1>
  <p><strong>wehuman 官网：在 AI 时代为人做工具。</strong></p>
  <p>一个静态双语站点——理念、产品、手记，外加一场安静的字符雨。</p>
  <p>
    <a href="https://www.wehuman.top/"><img src="https://img.shields.io/badge/website-www.wehuman.top-7C3AED?style=flat-square" alt="www.wehuman.top"></a>
    <img src="https://img.shields.io/badge/license-MPL--2.0-22C55E?style=flat-square" alt="License">
    <img src="https://img.shields.io/github/stars/wehuman01/wehuman-web?style=flat-square" alt="GitHub stars">
  </p>
</div>

> 👉 **[www.wehuman.top](https://www.wehuman.top/)** — 没有统计脚本，没有 cookie，页面加载零第三方请求。

## 这是什么

wehuman 的工作室官网，四个栏目：首页、理念、产品、手记。手记是从真实工作里写出来的笔记，39 篇，中英双语——英文在根路径，中文在 `/zh/`。用 [Astro](https://astro.build) 构建纯静态页面。

## 开发

```sh
npm install
npm run dev       # 开发
npm run build     # 构建到 dist/
npm run preview   # 本地预览 dist/
```

## 结构

- `src/styles/tokens.css` — 全部设计 token（明暗两套，OKLCH）
- `src/styles/global.css` — 排版与组件样式（注释里记录设计决策）
- `src/i18n/ui.ts` — 全站文案（en / zh）
- `src/scripts/` — 字符雨、首页轮换词、目录折叠、公众号弹层（vanilla JS）
- `src/views/` + `src/pages/` — 页面视图与路由（`/zh/` 镜像）
- `src/content/articles/{en,zh}/` — 手记（markdown）
- `ref/` — 设计参考资料（非站点代码）

## 设计

一套 zed.dev 式的字系：IBM Plex Serif 大标题（汉字用 Noto Serif SC）、iA Writer Quattro 正文（汉字用 Noto Sans SC）、IBM Plex Sans 标签；一种信号墨（ultramarine），发丝线与墨线做结构，零圆角、零阴影、零卡片。字体经 fontsource 自托管，页面不向第三方发请求。深浅两套模式跟随系统偏好，可手动切换并记住选择。背景是一场安静的字符雨，指针经过的地方会亮起来；首页大字末尾的名词会轮流变（humans / builders / … / you），每个词带自己的色相，明暗主题只调明度与彩度；`prefers-reduced-motion` 或省流量模式下一切为静态。

## License

[MPL-2.0](./LICENSE)
