<h1 align="center">TASTE LAB</h1>

<p align="center">
  <strong>把 AI 前端审美，从一份提示词实验，发展成两条并行路线。</strong><br>
  Prompt Lab 可以直接交给任意 AI；Agent Lab 是可安装、带脚本与参考资料的完整能力包。
</p>

<p align="center">
  <a href="https://wanghexinyi.github.io/taste-lab/"><img alt="Interactive Track Switch" src="https://img.shields.io/badge/INTERACTIVE-TRACK_SWITCH-bc8f6f?style=for-the-badge"></a>
  <a href="archive/v0.7/TasteSkillAdaptive.md"><img alt="Prompt V0.7" src="https://img.shields.io/badge/PROMPT-V0.7-66705f?style=for-the-badge"></a>
  <a href="agent/a0.3/taste-frontend/SKILL.md"><img alt="Agent A0.3" src="https://img.shields.io/badge/AGENT-A0.3-667f98?style=for-the-badge"></a>
  <a href="LICENSE"><img alt="MIT License" src="https://img.shields.io/badge/LICENSE-MIT-222222?style=for-the-badge"></a>
</p>

## 先选择你要走的路线

<table>
  <tr>
    <td width="50%" valign="top">
      <h3>Prompt Lab · 纯提示词路线</h3>
      <p><strong>无需安装。</strong>把一个 Markdown 文件与你自己的需求一起发给任意 AI，并要求它严格按文件完成任务。</p>
      <p><strong>版本：</strong>V0.0–V0.7<br><strong>证据：</strong>13 个原始 HTML<br><strong>当前版：</strong><a href="archive/v0.7/TasteSkillAdaptive.md">V0.7</a></p>
      <p><a href="#prompt-lab--纯提示词路线">查看全部提示词与动图 ↓</a></p>
    </td>
    <td width="50%" valign="top">
      <h3>Agent Lab · Agent 配置路线</h3>
      <p><strong>需要安装。</strong>每个版本都包含 SKILL.md、references、scripts 和样例，用来长期增强 Agent 的前端能力。</p>
      <p><strong>版本：</strong>A0.1–A0.3<br><strong>证据：</strong>包内自测脚本<br><strong>当前版：</strong><a href="agent/a0.3/taste-frontend/SKILL.md">A0.3</a></p>
      <p><a href="#agent-lab--agent-配置路线">查看源码与下载包 ↓</a></p>
    </td>
  </tr>
</table>

> GitHub README 不允许运行自定义 JavaScript，因此这里用双入口保持分区。真正的滑块切换已经放在 [GitHub Pages 在线展厅](https://wanghexinyi.github.io/taste-lab/) 中。

---

## Prompt Lab · 纯提示词路线

### 怎么使用

1. 下载当前推荐版 [`TasteSkillAdaptive.md`](archive/v0.7/TasteSkillAdaptive.md)，或者选择下方任一历史版本。
2. 在同一个对话中，把 Markdown 文件与你的产品需求、页面内容和技术限制一起发给 AI。
3. 明确要求 AI 完整阅读文件并把它当作执行规范，不要只总结文件。

可以直接复制：

```text
请完整阅读我附加的 Markdown 文件，并将它视为本次前端任务的设计、实现与验收规范。
请结合我接下来提供的实际需求执行；除非其中内容与我的明确要求冲突，否则严格遵守该文件中的流程、审美决策、交互和质量检查要求。
不要只总结或解释这份文件，请直接使用它完成任务，并在交付前自行检查结果。

我的具体需求：
（在这里填写页面、功能、内容、技术栈和其他限制）
```

如果平台不支持上传 Markdown，可以复制文件全文并粘贴到同一个对话。下面所有画面都由对应版本的原始 HTML 在浏览器中实际渲染；点击动图可以打开完整页面。

### V0.0 · 实验起点

**提示词：** [`TasteSkill.md`](archive/v0.0/TasteSkill.md)

V0.0 原始目录没有 HTML，因此只保留 prompt-only 起点，不用其他版本的页面冒充它的效果。

---

### V0.1 · 从固定色板走向会话派生

**提示词：** [`TasteSkill--V10.2.md`](archive/v0.1/TasteSkill--V10.2.md)

#### 审美量化实验 · Aesthetic Quantification Experiment

<a href="https://wanghexinyi.github.io/taste-lab/demos/v0.1/taste-quantification.html"><img src="docs/previews/v0.1/taste-quantification.webp" alt="V0.1 审美量化实验 HTML 动图" width="100%"></a>

**[▶ 打开完整交互 HTML](https://wanghexinyi.github.io/taste-lab/demos/v0.1/taste-quantification.html)**

---

### V0.2 · 开源基座与个人 override

**提示词：** [`OpenSkill.md`](archive/v0.2/OpenSkill.md)

#### 01 · European Physiography & Geological Wilderness

<a href="https://wanghexinyi.github.io/taste-lab/demos/v0.2/physiographia-europaea.html"><img src="docs/previews/v0.2/physiographia-europaea.webp" alt="V0.2 欧洲自然图志 HTML 动图" width="100%"></a>

**[▶ 打开完整交互 HTML](https://wanghexinyi.github.io/taste-lab/demos/v0.2/physiographia-europaea.html)**

#### 02 · NVIDIA · 智能时代的引擎

<a href="https://wanghexinyi.github.io/taste-lab/demos/v0.2/nvidia-editorial.html"><img src="docs/previews/v0.2/nvidia-editorial.webp" alt="V0.2 NVIDIA 编辑叙事 HTML 动图" width="100%"></a>

**[▶ 打开完整交互 HTML](https://wanghexinyi.github.io/taste-lab/demos/v0.2/nvidia-editorial.html)**

#### 03 · NVIDIA · Beyond Limits

<a href="https://wanghexinyi.github.io/taste-lab/demos/v0.2/nvidia-product.html"><img src="docs/previews/v0.2/nvidia-product.webp" alt="V0.2 NVIDIA 产品页 HTML 动图" width="100%"></a>

**[▶ 打开完整交互 HTML](https://wanghexinyi.github.io/taste-lab/demos/v0.2/nvidia-product.html)**

---

### V0.3 · 从视觉规则到决策架构

**提示词：** [`TASTE_SKILL_V3_SINGLE_FILE_TEST.md`](archive/v0.3/TASTE_SKILL_V3_SINGLE_FILE_TEST.md)

#### 01 · 旷野来信 · Letters from the Wild

<a href="https://wanghexinyi.github.io/taste-lab/demos/v0.3/wilderness-letters.html"><img src="docs/previews/v0.3/wilderness-letters.webp" alt="V0.3 旷野来信 HTML 动图" width="100%"></a>

**[▶ 打开完整交互 HTML](https://wanghexinyi.github.io/taste-lab/demos/v0.3/wilderness-letters.html)**

#### 02 · 行迹考 · The Cartography of Solitude

<a href="https://wanghexinyi.github.io/taste-lab/demos/v0.3/cartography-of-solitude.html"><img src="docs/previews/v0.3/cartography-of-solitude.webp" alt="V0.3 行迹考 HTML 动图" width="100%"></a>

**[▶ 打开完整交互 HTML](https://wanghexinyi.github.io/taste-lab/demos/v0.3/cartography-of-solitude.html)**

---

### V0.4 · Surface router 与功能 QA

**提示词：** [`TASTE_SKILL_V3.4_SINGLE_FILE_TEST.md`](archive/v0.4/TASTE_SKILL_V3.4_SINGLE_FILE_TEST.md)

#### MacBook Air M5 · Concept Demo

<a href="https://wanghexinyi.github.io/taste-lab/demos/v0.4/macbook-air-m5-concept.html"><img src="docs/previews/v0.4/macbook-air-m5-concept.webp" alt="V0.4 MacBook Air M5 概念页 HTML 动图" width="100%"></a>

**[▶ 打开完整交互 HTML](https://wanghexinyi.github.io/taste-lab/demos/v0.4/macbook-air-m5-concept.html)**

---

### V0.5 · 轻量工作流控制器

**提示词：** [`TASTE_SKILL_V4.1_LITE_SINGLE_FILE_TEST.md`](archive/v0.5/TASTE_SKILL_V4.1_LITE_SINGLE_FILE_TEST.md)

#### 01 · Aman Kyoto · Gemini 3.7 Flash Extended

<a href="https://wanghexinyi.github.io/taste-lab/demos/v0.5/aman-kyoto-gemini.html"><img src="docs/previews/v0.5/aman-kyoto-gemini.webp" alt="V0.5 Aman Kyoto Gemini HTML 动图" width="100%"></a>

**[▶ 打开完整交互 HTML](https://wanghexinyi.github.io/taste-lab/demos/v0.5/aman-kyoto-gemini.html)**

#### 02 · Aman Kyoto · Qwen 3.8 Max

<a href="https://wanghexinyi.github.io/taste-lab/demos/v0.5/aman-kyoto-qwen.html"><img src="docs/previews/v0.5/aman-kyoto-qwen.webp" alt="V0.5 Aman Kyoto Qwen HTML 动图" width="100%"></a>

**[▶ 打开完整交互 HTML](https://wanghexinyi.github.io/taste-lab/demos/v0.5/aman-kyoto-qwen.html)**

---

### V0.6 · 构图与动效的网页端单文件版

**提示词：** [`taste_frontend_v4_4_web_rules.md`](archive/v0.6/taste_frontend_v4_4_web_rules.md)

#### 01 · NOMAD / 27 · Gemini 3.7 Flash Extended

<a href="https://wanghexinyi.github.io/taste-lab/demos/v0.6/nomad-27-gemini.html"><img src="docs/previews/v0.6/nomad-27-gemini.webp" alt="V0.6 NOMAD 27 Gemini HTML 动图" width="100%"></a>

**[▶ 打开完整交互 HTML](https://wanghexinyi.github.io/taste-lab/demos/v0.6/nomad-27-gemini.html)**

#### 02 · NOMAD / 27 · Qwen 3.8 Max

<a href="https://wanghexinyi.github.io/taste-lab/demos/v0.6/nomad-27-qwen.html"><img src="docs/previews/v0.6/nomad-27-qwen.webp" alt="V0.6 NOMAD 27 Qwen HTML 动图" width="100%"></a>

**[▶ 打开完整交互 HTML](https://wanghexinyi.github.io/taste-lab/demos/v0.6/nomad-27-qwen.html)**

---

### V0.7 · Adaptive effort routing · Current Prompt

**提示词：** [`TasteSkillAdaptive.md`](archive/v0.7/TasteSkillAdaptive.md)

#### 01 · 在风景中辨认自己 · Gemini 3.7 Flash Extended

<a href="https://wanghexinyi.github.io/taste-lab/demos/v0.7/landscape-self-gemini.html"><img src="docs/previews/v0.7/landscape-self-gemini.webp" alt="V0.7 在风景中辨认自己 Gemini HTML 动图" width="100%"></a>

**[▶ 打开完整交互 HTML](https://wanghexinyi.github.io/taste-lab/demos/v0.7/landscape-self-gemini.html)**

#### ⭐ 重点展示 · 在风景中辨认自己 · Qwen 3.8 Max

这条预览使用 **30 FPS、约 60 秒**的高帧率双倍慢速录制，让构图、滚动衔接与页面动画得到更完整的展示。

<a href="https://wanghexinyi.github.io/taste-lab/demos/v0.7/landscape-self-qwen.html"><img src="docs/previews/v0.7/landscape-self-qwen-featured.webp" alt="V0.7 Qwen 3.8 Max 高帧率双倍慢速重点动图" width="100%"></a>

**[▶ 打开完整交互 HTML](https://wanghexinyi.github.io/taste-lab/demos/v0.7/landscape-self-qwen.html)**

---

## Agent Lab · Agent 配置路线

这条路线不是把 Markdown 临时附在提示词里，而是把完整文件夹安装为 Agent Skill。每个版本包含 `SKILL.md`、按需读取的 `references/`、自动化 `scripts/` 和测试样例。

| 版本 | 方向 | 源码 | 下载 |
| --- | --- | --- | --- |
| A0.1 · `4.2-portable` | Portable foundation | [浏览完整文件夹](agent/a0.1/taste-frontend) | [下载 ZIP](agent/downloads/taste_frontend_A0.1_portable_bundle.zip?raw=1) |
| A0.2 · `4.3-spatial-experiment` | Spatial media experiment | [浏览完整文件夹](agent/a0.2/taste-frontend) | [下载 ZIP](agent/downloads/taste_frontend_A0.2_spatial_experiment_bundle.zip?raw=1) |
| **A0.3 · `4.4-composition-motion-experiment`** | **Current · Composition & motion** | [浏览完整文件夹](agent/a0.3/taste-frontend) | [下载当前版 ZIP](agent/downloads/taste_frontend_A0.3_bundle.zip?raw=1) |

### 安装方法

1. 下载所需版本的 ZIP。
2. 完整解压，保留 `taste-frontend` 文件夹内的目录结构。
3. 在 Antigravity 中，将该文件夹放入 `.agent/skill/`，最终路径类似：

```text
.agent/skill/taste-frontend/SKILL.md
```

其他 Agent 请使用该宿主规定的 Skill 目录。三个原始包均保留便携式 `compatibility` frontmatter；测试平台为 Antigravity，不承诺所有 Agent 对扩展字段和脚本拥有完全相同的支持。

三套 Agent 版本目前没有专门制作的演示 HTML，因此这里不借用 Prompt Lab 的页面充当它们的产物。完整安装说明、源码和包内自测结果见 [`agent/README.md`](agent/README.md)。

## 项目结构

```text
archive/v0.0 ... v0.7/          Prompt Lab 的 8 代 Markdown 原稿
agent/a0.1 ... a0.3/            Agent Lab 的 3 套完整可读源码
agent/downloads/                3 个原始安装 ZIP
docs/demos/v0.0 ... v0.7/       13 个原始单文件 HTML 与 V0.0 说明页
docs/previews/v0.1 ... v0.7/    README 使用的静态图和动画预览
docs/                            带双路线切换器的 GitHub Pages 展厅
scripts/validate_repo.py         结构、包一致性、链接、媒体与敏感信息校验
```

## 开源来源与边界

V0.2 的基础正文来自 [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) 的 `skills/taste-skill/SKILL.md`，前置部分为本项目的 override。上游采用 MIT License；完整版权与许可文本保存在 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)。

演示中的品牌名称仅用于非官方概念实验。本项目与相关品牌没有隶属、授权或背书关系。外部图片、字体、图标和 CDN 资源仍受各自来源条款约束。

Bug、兼容性问题和可复现的规则冲突可以提交 Issue；安全问题请按 [SECURITY.md](SECURITY.md) 私下报告。项目主体采用 [MIT License](LICENSE)，第三方部分以 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) 为准。
