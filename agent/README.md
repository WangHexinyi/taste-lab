# Agent Lab

这里保存三套可安装的 `taste-frontend` Agent Skill。每个版本都同时提供原始 ZIP 和完全展开、可直接审阅的源文件。

| 版本 | 包内版本 | 主要变化 | 自测 |
| --- | --- | --- | --- |
| A0.1 | `4.2-portable` | Portable foundation | PASS |
| A0.2 | `4.3-spatial-experiment` | Spatial media reference + benchmark | PASS |
| **A0.3** | `4.4-composition-motion-experiment` | Composition/motion reference + handoff | **PASS** |

## Antigravity 安装

1. 从 [`downloads/`](downloads/) 下载对应 ZIP。
2. 完整解压，不要只取出 `SKILL.md`。
3. 将解压得到的 `taste-frontend` 文件夹复制到项目的 `.agent/skill/`：

```text
your-project/
└── .agent/
    └── skill/
        └── taste-frontend/
            ├── SKILL.md
            ├── references/
            ├── scripts/
            └── examples/
```

测试平台为 Antigravity。其他 Agent 的发现目录、frontmatter 白名单、Node 和浏览器能力可能不同，请按具体宿主调整安装位置。

## 发布校验

- 三个 ZIP 都已与仓库内展开源码逐文件比对。
- 三个版本的 `scripts/self-test.mjs` 均返回 `RESULT: PASS`。
- 原始包使用便携式 `compatibility` frontmatter。Codex 专用 `quick_validate.py` 不接受这个扩展字段，因此仓库原样保留它，不将 Codex 的宿主规则冒充成通用 Agent 标准。
- 目前没有专门对应三套 Agent 版本的演示 HTML；Prompt Lab 的页面不会被标成 Agent Lab 的效果。
