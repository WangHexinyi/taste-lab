# DESIGN SKILL v10 · luxury-editorial spec (ARCHIVED)
# changelog v10.1: +morandi default / +replayable reveals / +content-density floor / +pointer ambient done right
# changelog v10.4: 解除全部色板锁——stage 与 accents 均由会话现抽的 h0 派生（HSL 区间约束），禁陶土色相；其余规格零改动。
# usage: 作为 system prompt 粘贴，或存为 SKILL.md。模型只填肉，不改规格。

## TOKENS (fixed unless user overrides)
dark stage (色相 = 本次会话抽到的 h0，禁默写「暖黑+奶油」):
bg hsl(h0, 4–8%, 8–11%) · surface 同色相 L=bg+3–4% ·
ink hsl(h0, 6–10%, 88–92%) · muted 同色相 L 52–56% ·
hairline = ink 的 8–14% alpha，禁纯黑描边。
MORANDI accents (low-sat, gray-dusted; pick ≤2, 色相每次会话现抽，禁默写固定值):
取 HSL S∈[10,24]% · L∈[46,64]% 的灰调彩；禁陶土色相 h∈[12,30]（克隆灾区）。
type: display "Newsreader" serif (italic emphasis) · body "Manrope" ·
mono ≤10px labels, REAL content only.
PALETTE LAW: 低饱和灰度优先；高饱和只允许出现在 REJECTED 展品里。

## CONTENT-DENSITY FLOOR (anti-PPT)
≥6 sections; each ≥3 real content elements; ≥2 explorable/hover moments;
no empty viewport gaps. Required sections:
1 HERO: full-bleed duotone photo (picsum≥1600 + grayscale + warm soft-light + grain);
  giant serif manifesto woven over; quiet real stat line (no chips).
2 DATASET: magazine-index rows (votes/rounds/references) hairline dividers,
  right-aligned big serif counts; living SVG convergence curve (scroll-draw, replayable).
3 ROUND LOG: timeline of the 13 calibration rounds; ≥5 rows carry a real one-line
  note (e.g. "R7 赛博辉光终审入负面清单").
4 LAWS EXHIBIT: six serif pull-quotes with hairline rules + asymmetric offsets,
  including "行业共识 ≠ 用户共识" and "基本功防灾难，景深拿三分".
5 REFERENCES: the three five-star works (IGNANT / Bruno Simon / Lusion),
  one placard sentence each + hover-breathing duotone thumbnail.
6 POSTMORTEM: REJECTED purple gradient vs CALIBRATED morandi dark, captioned.
7 ABOUT/FOOTER: quiet two-column, real placeholders.

## MOTION (fixed list)
lenis smooth scroll · line-mask stagger reveals 700ms cubic-bezier(.2,.7,.2,1),
REPLAYABLE (toggle on intersection both directions) · image breathing 14s ·
hover underline sweep · waveform & curve scroll-draw (replayable).
POINTER AMBIENT (pick ONE, lerp-smoothed, 60fps):
 (a) light-cone: warm radial spotlight ~600px, opacity ≤.18, follows cursor;
 (b) water-ripple: canvas trail, fading concentric strokes along pointer path.
prefers-reduced-motion: everything static.

## NEVER (hard)
replace/skin native cursor · coordinate readouts · HUD/status dots ·
terminal/lab chrome · one-shot reveals · thin PPT content ·
purple gradients outside REJECTED panel · glassmorphism · neon ·
neumorphism · bounce/glitch · any section without visual anchor.

## CONSISTENCY + CRITIQUE
all sections share tokens; before output list 3 uglier risks, confirm absent.
不要提问。直接输出单文件 HTML（内联 CSS/JS；可引 Google Fonts/picsum/lenis CDN）。