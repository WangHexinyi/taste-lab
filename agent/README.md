<p align="center"><a href="https://github.com/WangHexinyi/taste-lab">Taste Lab 首页</a> · <a href="https://github.com/WangHexinyi/taste-lab/tree/main/prompt">← 切换到 Prompt Lab</a> · <strong>Agent Lab</strong></p>

<h1 align="center">Agent Lab · Agent 配置路线</h1>

<p align="center">
  <strong>安装完整文件夹，长期增强 Agent 的前端能力。</strong><br>
  A0.1–A0.3 · 完整源码与原始 ZIP · 当前版 A0.3
</p>

<p align="center">
  <a href="a0.3/taste-frontend/SKILL.md"><img alt="Agent A0.3" src="https://img.shields.io/badge/AGENT-A0.3-667f98?style=for-the-badge"></a>
  <a href="downloads/taste_frontend_A0.3_bundle.zip?raw=1"><img alt="Download Agent A0.3" src="https://img.shields.io/badge/DOWNLOAD-A0.3-bc8f6f?style=for-the-badge"></a>
  <a href="https://github.com/WangHexinyi/taste-lab/tree/main/prompt"><img alt="Switch to Prompt Lab" src="https://img.shields.io/badge/SWITCH-PROMPT_LAB-66705f?style=for-the-badge"></a>
</p>

这里保存三套可安装的 `taste-frontend` Agent Skill。这条路线不是把 Markdown 临时附在提示词里，而是安装包含 `SKILL.md`、`references/`、`scripts/` 和样例的完整文件夹。每个版本都同时提供原始 ZIP 和完全展开、可直接审阅的源文件。

| 版本 | 包内版本 | 主要变化 | 源码 | 下载 | 自测 |
| --- | --- | --- | --- | --- | --- |
| A0.1 | `4.2-portable` | Portable foundation | [浏览完整文件夹](a0.1/taste-frontend) | [下载 ZIP](downloads/taste_frontend_A0.1_portable_bundle.zip?raw=1) | PASS |
| A0.2 | `4.3-spatial-experiment` | Spatial media reference + benchmark | [浏览完整文件夹](a0.2/taste-frontend) | [下载 ZIP](downloads/taste_frontend_A0.2_spatial_experiment_bundle.zip?raw=1) | PASS |
| **A0.3** | `4.4-composition-motion-experiment` | Composition/motion reference + handoff | **[浏览完整文件夹](a0.3/taste-frontend)** | **[下载当前版 ZIP](downloads/taste_frontend_A0.3_bundle.zip?raw=1)** | **PASS** |

## 通用安装

1. 从 [`downloads/`](downloads/) 下载对应 ZIP。
2. 完整解压，不要只取出 `SKILL.md`。
3. 根据当前 Agent、IDE 或 CLI 的官方说明找到其 Skills 目录，将解压得到的 `taste-frontend` 文件夹完整放入其中：

```text
<skills-directory>/
└── taste-frontend/
    ├── SKILL.md
    ├── references/
    ├── scripts/
    └── examples/
```

不同宿主的 Skills 发现目录可能位于项目级或用户级位置，frontmatter 白名单、Node 和浏览器能力也可能不同。这里不指定某个产品的专用路径，请以当前宿主的官方安装说明为准，并保留包内完整目录结构。

## 发布校验

- 三个 ZIP 都已与仓库内展开源码逐文件比对。
- 三个版本的 `scripts/self-test.mjs` 均返回 `RESULT: PASS`。
- 原始包使用便携式 `compatibility` frontmatter。不同宿主对扩展字段的白名单可能不同，仓库保留原始元数据，不将任一宿主的规则冒充成通用 Agent 标准。
- 目前没有专门对应三套 Agent 版本的演示 HTML；Prompt Lab 的页面不会被标成 Agent Lab 的效果。

---

<p align="center"><a href="https://github.com/WangHexinyi/taste-lab">← 返回路线选择</a> · <a href="https://github.com/WangHexinyi/taste-lab/tree/main/prompt">← 切换到 Prompt Lab</a></p>
