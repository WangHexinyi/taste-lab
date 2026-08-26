# Taste Lab

> 一份仍在生长的 AI 前端审美实验：保留五代 Skill 的决策变化，也保留每次迭代留下的可运行 HTML 证据。

[![License: MIT](https://img.shields.io/badge/License-MIT-111111.svg)](LICENSE)
[![Current: V0.4](https://img.shields.io/badge/current-V0.4-66705f.svg)](skills/design-taste-frontend/SKILL.md)
[![Gallery](https://img.shields.io/badge/GitHub%20Pages-live-bc8f6f.svg)](https://wanghexinyi.github.io/taste-lab/)

Taste Lab explores a simple question: can an AI frontend assistant make decisions from product truth, interaction needs, content, media and art direction instead of falling back to a fixed visual recipe?

## 直接体验

- [打开五代演进展厅](https://wanghexinyi.github.io/taste-lab/)
- [阅读当前推荐版 V0.4](skills/design-taste-frontend/SKILL.md)
- [查看全部原始版本快照](archive/README.md)

演示是独立 HTML，可直接打开。部分页面依赖 Google Fonts、Unsplash、Lorem Picsum、Tailwind CDN 或其他公开 CDN，离线时外部字体、图片或脚本可能无法加载。

## 安装当前 Skill

支持 Agent Skills 安装器的环境可以运行：

```bash
npx skills add https://github.com/WangHexinyi/taste-lab --skill design-taste-frontend
```

也可以手动复制 [`skills/design-taste-frontend`](skills/design-taste-frontend) 到你的 Agent Skills 目录。Skill 会保持可被自动发现；需要时也可以显式调用 `$design-taste-frontend`。

## 五代演进

| 版本 | 核心变化 | 原始 HTML | 状态 |
| --- | --- | ---: | --- |
| V0.0 | 从个人审美出发的 luxury-editorial 固定规格 | 0 | Prompt-only archive |
| V0.1 | 从固定色板走向会话派生色相，保留编辑感 | 1 | Archive |
| V0.2 | 基于 MIT 开源项目 Taste Skill 叠加个人 override | 3 | Archive + upstream attribution |
| V0.3 | 从视觉规则重构为完整的决策架构 | 2 | Archive |
| V0.4 | 加入 surface router、交互契约、功能 QA 与 render check | 1 | Current |

V0.0 原始目录中没有 HTML 文件，因此展厅明确标记为 prompt-only，不把其他版本的页面冒充成它的产物。

## 仓库结构

```text
skills/design-taste-frontend/   当前可安装 Skill
archive/v0.0 ... v0.4/         五代原始 Markdown 快照
docs/                           GitHub Pages 展厅与 7 个原始 HTML 演示
scripts/validate_repo.py        零依赖仓库结构与链接校验
.github/                        CI、Issue 表单、PR 模板与维护配置
```

历史快照保持原样，便于比较真实演进；新的正式迭代只修改当前 Skill，并通过版本发布沉淀到 archive。

## 开源来源与边界

V0.2 的基础正文来自 [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) 的 `skills/taste-skill/SKILL.md`，在发布核验时与上游版本正文逐字一致，前置部分为本项目的 override。上游采用 MIT License；版权与完整许可文本保存在 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)。

演示中出现的 Apple、NVIDIA 等名称仅用于非官方概念实验；本项目与相关品牌没有隶属、授权或背书关系。图片、字体、图标和 CDN 资源仍受各自来源条款约束。

## 参与项目

请先阅读 [CONTRIBUTING.md](CONTRIBUTING.md)。Bug、兼容性问题和规则冲突可以提交 Issue；尚未收敛的审美讨论更适合放在 Discussions。安全问题请按 [SECURITY.md](SECURITY.md) 私下报告。

项目主体采用 [MIT License](LICENSE)。第三方部分以 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) 为准。
