<p align="center"><a href="../">Taste Lab 首页</a> · <a href="../prompt/">← 切换到 Prompt Lab</a> · <strong>Agent Lab</strong></p>

<h1 align="center">Agent Lab · Agent 配置路线</h1>

<p align="center">
  <strong>安装完整文件夹，长期增强 Agent 的前端能力。</strong><br>
  A0.1–A0.3 · 完整源码与原始 ZIP · 当前版 A0.3
</p>

<p align="center">
  <a href="a0.3/taste-frontend/SKILL.md"><img alt="Agent A0.3" src="https://img.shields.io/badge/AGENT-A0.3-667f98?style=for-the-badge"></a>
  <a href="downloads/taste_frontend_A0.3_bundle.zip?raw=1"><img alt="Download Agent A0.3" src="https://img.shields.io/badge/DOWNLOAD-A0.3-bc8f6f?style=for-the-badge"></a>
  <a href="../prompt/"><img alt="Switch to Prompt Lab" src="https://img.shields.io/badge/SWITCH-PROMPT_LAB-66705f?style=for-the-badge"></a>
</p>

这里保存三套可安装的 `taste-frontend` Agent Skill。这条路线不是把 Markdown 临时附在提示词里，而是安装包含 `SKILL.md`、`references/`、`scripts/` 和样例的完整文件夹。每个版本都同时提供原始 ZIP 和完全展开、可直接审阅的源文件。

| 版本 | 包内版本 | 主要变化 | 源码 | 下载 | 自测 |
| --- | --- | --- | --- | --- | --- |
| A0.1 | `4.2-portable` | Portable foundation | [浏览完整文件夹](a0.1/taste-frontend) | [下载 ZIP](downloads/taste_frontend_A0.1_portable_bundle.zip?raw=1) | PASS |
| A0.2 | `4.3-spatial-experiment` | Spatial media reference + benchmark | [浏览完整文件夹](a0.2/taste-frontend) | [下载 ZIP](downloads/taste_frontend_A0.2_spatial_experiment_bundle.zip?raw=1) | PASS |
| **A0.3** | `4.4-composition-motion-experiment` | Composition/motion reference + handoff | **[浏览完整文件夹](a0.3/taste-frontend)** | **[下载当前版 ZIP](downloads/taste_frontend_A0.3_bundle.zip?raw=1)** | **PASS** |

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

---

<p align="center"><a href="../">← 返回路线选择</a> · <a href="../prompt/">← 切换到 Prompt Lab</a></p>
