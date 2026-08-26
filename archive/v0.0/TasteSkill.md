# DESIGN SKILL v10 · luxury-editorial spec (ARCHIVED)
# changelog v10.1: +morandi default / +replayable reveals / +content-density floor / +pointer ambient done right
# usage: 作为 system prompt 粘贴，或存为 SKILL.md。模型只填肉，不改规格。

## TOKENS (fixed unless user overrides)
dark stage: bg #1A1815 · surface #211E1A · ink #E6E0D6 · muted #8B8478 ·
hairline rgba(230,224,214,.14)
MORANDI accents (low-sat, gray-dusted; pick ≤2): #A9765C 低饱和陶土 ·
#77806D 灰鼠尾草 · #8E9AA6 雾蓝 · #A3927B 灰驼
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