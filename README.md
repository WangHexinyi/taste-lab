<h1 align="center">TASTE LAB</h1>

<p align="center">
  <strong>把 AI 前端审美，从一份提示词实验，发展成两条独立路线。</strong><br>
  先选择路线，再进入对应的独立页面；两条路线不再上下堆叠在同一个 README 中。
</p>

<p align="center">
  <a href="https://wanghexinyi.github.io/taste-lab/"><img alt="Interactive Track Switch" src="https://img.shields.io/badge/INTERACTIVE-TRACK_SWITCH-bc8f6f?style=for-the-badge"></a>
  <a href="prompt/"><img alt="Prompt Lab" src="https://img.shields.io/badge/OPEN-PROMPT_LAB-66705f?style=for-the-badge"></a>
  <a href="agent/"><img alt="Agent Lab" src="https://img.shields.io/badge/OPEN-AGENT_LAB-667f98?style=for-the-badge"></a>
  <a href="LICENSE"><img alt="MIT License" src="https://img.shields.io/badge/LICENSE-MIT-222222?style=for-the-badge"></a>
</p>

## 选择一个独立页面

<table>
  <tr>
    <td width="50%" valign="top">
      <h3>Prompt Lab · 纯提示词路线</h3>
      <p><strong>无需安装。</strong>把一个 Markdown 文件与你自己的需求一起发给任意 AI，并要求它严格按文件完成任务。</p>
      <p><strong>版本：</strong>V0.0–V0.7<br><strong>证据：</strong>13 个原始 HTML<br><strong>当前版：</strong>V0.7</p>
      <p><strong><a href="prompt/">进入 Prompt Lab 独立页面 →</a></strong></p>
    </td>
    <td width="50%" valign="top">
      <h3>Agent Lab · Agent 配置路线</h3>
      <p><strong>需要安装。</strong>每个版本都包含 SKILL.md、references、scripts 和样例，用来长期增强 Agent 的前端能力。</p>
      <p><strong>版本：</strong>A0.1–A0.3<br><strong>证据：</strong>包内自测脚本<br><strong>当前版：</strong>A0.3</p>
      <p><strong><a href="agent/">进入 Agent Lab 独立页面 →</a></strong></p>
    </td>
  </tr>
</table>

> GitHub 仓库内使用两个独立 Markdown 页面完成切换；需要带动效的标签切换时，请打开 [GitHub Pages 在线展厅](https://wanghexinyi.github.io/taste-lab/)。

## 项目结构

```text
prompt/                          Prompt Lab 独立展示页
archive/v0.0 ... v0.7/          Prompt Lab 的 8 代 Markdown 原稿
agent/                           Agent Lab 独立展示页
agent/a0.1 ... a0.3/            Agent Lab 的 3 套完整可读源码
agent/downloads/                3 个原始安装 ZIP
docs/demos/v0.0 ... v0.7/       13 个原始单文件 HTML 与 V0.0 说明页
docs/previews/v0.1 ... v0.7/    Prompt Lab 使用的静态图和动画预览
docs/                            带双路线切换器的 GitHub Pages 展厅
scripts/validate_repo.py         结构、包一致性、链接、媒体与敏感信息校验
```

## 开源来源与边界

V0.2 的基础正文来自 [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) 的 `skills/taste-skill/SKILL.md`，前置部分为本项目的 override。上游采用 MIT License；完整版权与许可文本保存在 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)。

演示中的品牌名称仅用于非官方概念实验。本项目与相关品牌没有隶属、授权或背书关系。外部图片、字体、图标和 CDN 资源仍受各自来源条款约束。

Bug、兼容性问题和可复现的规则冲突可以提交 Issue；安全问题请按 [SECURITY.md](SECURITY.md) 私下报告。项目主体采用 [MIT License](LICENSE)，第三方部分以 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) 为准。
