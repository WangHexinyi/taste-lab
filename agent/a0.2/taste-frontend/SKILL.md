---
name: taste-frontend
description: Designs, builds, redesigns, and audits high-quality visual frontends using a guided research-to-render workflow. Use whenever the user asks to create or substantially modify a website, landing page, portfolio, product page, ecommerce surface, dashboard, web app, interactive web experience, frontend UI, responsive page, or visually polished HTML/CSS/JS/React interface. Also use for frontend art direction, layout, media, color, typography, depth, motion, responsive behavior, and visual QA. Do not use for backend-only, CLI-only, data-processing, infrastructure, or tiny non-visual code fixes unless frontend UX is materially involved.
license: MIT
compatibility: Portable Agent Skills format. Optional workflow/QA scripts require Node.js 20+; full browser QA additionally needs Chrome, Edge, or Chromium. The skill still works instruction-only when terminal/browser tools are unavailable.
metadata:
  version: "4.3-spatial-experiment"
  author: "TasteSkill project"
---

# Taste Frontend — Guided Design Skill

This skill is a **design director + workflow guide**, not a fixed style template.
Its job is to raise weak-model execution quality while preserving strong-model creativity.
Judge success by the rendered result.

## 0. Activation policy

### Passive activation
If this skill was auto-selected because the task matches the `description`, use it without asking the user to repeat a magic phrase.
Typical triggers include: build/design/redesign a website, frontend, landing page, portfolio, product page, web app, dashboard, ecommerce UI, interactive page, or visually polished web experience.

### Active activation
If the user explicitly says **use `taste-frontend`**, **use the Taste skill**, or equivalent wording, treat that as a direct request to activate this skill.
Do not require slash commands; client-specific command syntaxes are optional conveniences, not part of this skill.

### Scope boundary
Do not activate for backend-only, CLI-only, infrastructure-only, or non-visual maintenance tasks unless visual frontend UX is materially involved.

---

# 1. Operating contract

Use this workflow:

`UNDERSTAND -> ACQUIRE -> DIRECT -> SELECT -> BUILD -> REVIEW`

- **UNDERSTAND**: identify the real surface, audience, primary task, content, constraints, and truth status.
- **ACQUIRE**: gather facts, assets, category references, and evidence when needed.
- **DIRECT**: establish one coherent product/visual direction.
- **SELECT**: coordinate Media, Color, Type, Composition, Depth, and Motion.
- **BUILD**: implement the actual frontend and interactions.
- **REVIEW**: render, inspect, test, revise, then pass four gates.

Do not begin with favorite colors, effects, cards, fonts, or layout recipes.

## 1.1 Guided vs expert behavior

**Guided mode** is the default when execution quality is uncertain:
- use explicit internal checkpoints;
- do not silently skip blocking stages;
- use available search, image, browser, file, and code tools instead of merely describing them;
- if a gate fails, return to the responsible stage.

**Expert mode** is allowed for strong execution:
- stages may be compressed or combined;
- do not force verbose intermediate output;
- final evidence and quality gates remain mandatory.

Freedom of route does not mean freedom from evidence or quality standards.

## 1.2 Tool use is part of the workflow

If a tool can materially improve truth, media quality, implementation, or validation, use it.
Examples:
- real product/company/place/person/event -> current first-party research;
- image-dependent task -> acquire or generate appropriate media;
- mature product category -> inspect current strong category references;
- code environment with browser -> run, inspect, interact, resize, debug;
- image generation -> use only when generation is the correct medium, not as a substitute for factual evidence.

A statement such as “I researched/tested it” does not count unless the action actually occurred.

---

# 2. Portable workflow scripts

The bundled scripts are **assistant tools**, not manual user steps.
When terminal execution is available, the agent should call them itself.
Paths below are relative to this skill folder.

## 2.1 Start workflow state

At the beginning of a substantial frontend build, run:

`node scripts/taste-flow.mjs init <target>`

where `<target>` is normally `index.html` or the relevant local entry page.
This creates `.taste/state.json` in the user's workspace.

Populate that state during work rather than inventing a parallel workflow document.
Do not ask the user to edit `.taste/state.json`.

## 2.2 Pass workflow gates

After the relevant state fields are populated, run these yourself:

- `node scripts/taste-flow.mjs gate understand`
- `node scripts/taste-flow.mjs gate acquire`
- `node scripts/taste-flow.mjs gate direct`
- `node scripts/taste-flow.mjs gate build`
- `node scripts/taste-flow.mjs gate review`

If a command fails, fix the underlying work; do not bypass the gate by deleting state or fabricating values.

## 2.3 Delivery QA

Before final delivery, if Node and a browser are available, run:

`node scripts/taste-check.mjs <target> --out .taste/qa`

Then inspect the generated screenshots/report yourself.
A report is not a substitute for visual inspection.
If status is `FAIL`, repair and rerun.
If status is `PARTIAL`, complete whatever browser/visual checks are possible with the current agent tools.

After visual review, record `review.visualReviewed = true`, update QA status/report path in `.taste/state.json`, pass the review gate, then run:

`node scripts/taste-flow.mjs finish`

## 2.4 Graceful degradation

If terminal execution is unavailable, keep the same workflow internally and perform the strongest available manual/tool-based review.
Do not block the user merely because the scripts cannot run.
Do not claim script QA passed when it was not executed.

---

# 3. UNDERSTAND

Before designing, resolve internally:

- surface class;
- user goal;
- audience;
- primary user task/loop;
- real vs fictional subject;
- media dependency;
- interaction dependency;
- style intent;
- named content obligations;
- content provenance: REAL / DEMO / SHELL.

Architecture comes before decoration.
Implementation difficulty does not authorize changing the requested product into a different, easier concept.

Read `references/workflow-details.md` when the surface type, user loop, content provenance, or architecture is ambiguous.

---

# 4. ACQUIRE

Build a short research plan first.
Acquire only what materially changes design or truth.

For real-world subjects, prioritize current first-party sources for volatile facts and authentic media.
For mature product categories, benchmark behavior/architecture, not skin.
For high-media-dependency work, do not proceed to high-fidelity design without credible media evidence.

Do not deadlock in endless research. Use one main acquisition pass plus one targeted follow-up for blockers, then choose REAL / DEMO / SHELL content mode and continue.

Read `references/workflow-details.md` for detailed acquisition, freshness, benchmark, and asset-readiness rules.

---

# 5. DIRECT

Create one internal design direction before choosing implementation details.
It should resolve:

- dominant medium;
- visual thesis;
- hierarchy and density;
- color behavior;
- type behavior;
- composition behavior;
- depth behavior;
- **spatial mode and spatial role**: 2D, 2.5D interface depth, hybrid, true 3D, or pre-rendered/multi-view 3D;
- motion behavior;
- signature moment, if one is justified.

“High-end” is not a palette or font category.
Translate adjectives into relationships and design variables rather than fixed answers.

Read `references/taste-grammar.md` when interpreting style language such as premium, minimal, editorial, royal, playful, technical, quiet, cinematic, luxurious, natural, or experimental.

---

# 6. SELECT — six coordinated design engines

All six systems must respond to the same direction.
Do not optimize them independently.

1. **MEDIA** — choose the medium that credibly carries the content: official photography, documentary/editorial photography, lifestyle, macro, render, diagram, screenshot, illustration, generated concept, etc.
2. **COLOR** — derive temperature, chroma, luminance structure, contrast, surface hierarchy, and accent role from brand/product/media/context.
3. **TYPE** — assign semantic roles first, then choose type families and scale relationships.
4. **COMPOSITION** — build architecture, hierarchy, full-page rhythm, repetition budget, and mobile recomposition; alternation is not real variation.
5. **DEPTH / SPATIAL MEDIA** — choose deliberately between 2D, 2.5D, hybrid, true 3D, or pre-rendered/multi-view 3D. Use foreground/midground/background, crop, scale, overlap, material, lighting, photographic DOF, and spatial interaction; glow alone is not depth.
6. **MOTION** — use motion for state, feedback, continuity, hierarchy, navigation, storytelling, or atmosphere; wrong motion is worse than no motion.

Read `references/design-engines.md` for the full decision logic. When 3D, pseudo-3D, product rotation, WebGL/WebGPU, spatial UI, or immersive interaction is materially relevant, also read `references/spatial-media.md`.

---

# 7. Coherence pass

Before building, ask:

**Do media, color, typography, composition, depth, motion, and interaction feel like one authored world?**

If each individual choice is fashionable but their combined personality conflicts, simplify and redirect.

A high-end result usually demonstrates:
- hierarchy precision;
- asset quality;
- coherence;
- restraint;
- continuity;
- production finish.

The first viewport may be quiet, but it must not become visual vacuum. There must be a clear dominant anchor or intentional focal relationship.

---

# 8. BUILD

Preserve the chosen architecture while implementing.
Spend complexity where users can perceive value.

**Advanced spatial media are not forbidden or discouraged merely because they are technically complex.** 3D, WebGL/WebGPU, physically based materials, custom shaders, spatial interaction, and rich rendering may be the correct dominant medium for a modern high-end experience.

Sequence complexity by **role**, not by fear:
- if 3D/spatial interaction is the core way the user understands a product, material, configuration, environment, or story, prototype it early as **core media**;
- if it is optional spectacle layered on weak IA, weak assets, or weak content, finish those foundations first;
- do not substitute a flat fake object for true spatial representation when the interaction explicitly asks the user to inspect volume, form, material, or changing angles.

Use `references/spatial-media.md` to choose the correct spatial fidelity rather than defaulting either to “always 3D” or “avoid 3D”.

Critical content must **fail visible**: optional animation/enhancement failure must not permanently hide the hero, main heading, primary CTA, or essential content.

Use progressive enhancement, responsive media delivery, accessible controls, reduced-motion handling, and real mobile recomposition.

Read `references/build-review-gates.md` for implementation and delivery details.

---

# 9. REVIEW

Review the rendered artifact, not only the source code.
When tools permit:

1. launch the actual page;
2. inspect the first viewport;
3. scroll the full page;
4. interact with primary controls;
5. inspect desktop and mobile;
6. inspect console/runtime errors;
7. check broken media;
8. check reduced motion;
9. inspect screenshots for hierarchy, rhythm, media scale, template tells, and visual defects;
10. revise and rerun.

A 2,000-line page with a runtime error is not high quality.
A syntactically valid page can still fail visual QA.

---

# 10. Four blocking gates

## Gate 1 — Content / Assets
Pass only if the content mode is honest, required facets are covered, and media quality/quantity is adequate for the task.

## Gate 2 — Architecture
Pass only if the result actually functions as the requested surface/product and supports the primary user loop.

## Gate 3 — Art Direction
Pass only if hierarchy, media, color, type, composition, depth, and motion form one coherent system without semantic clichés or component soup.

## Gate 4 — Delivery
Pass only if the artifact actually runs, critical content is visible, media loads, core controls work, responsive behavior survives, and no major runtime/visual defect remains.

Read `references/build-review-gates.md` for the detailed gate criteria.

---

# 11. Anti-slop

Avoid:
- semantic clichés such as `tech -> purple/cyan glow`, `luxury -> black/gold`, `editorial -> beige + serif + fake metadata`;
- component soup;
- mechanical zig-zag section layouts;
- fake editorial labels that carry no information;
- fake screenshots, fake proof, or generated media pretending to be factual evidence;
- automatic spectacle;
- huge empty areas without a focal relationship;
- generic cards when media/content should dominate;
- tiny decorative microcopy used only to imitate “design”.

Read `references/anti-slop-content.md` when the result begins to look templated, sparse, over-decorated, or generically AI-made.

---

# 12. Final behavior

Do not dump internal workflow objects, candidate palettes, gate tables, or research notes unless the user asks.
Use them to improve the artifact.

For substantial frontend tasks, the expected behavior is:

`understand -> acquire -> direct -> select -> build -> render -> inspect -> revise -> deliver`

The skill should guide weak agents strongly and strong agents lightly, but the quality bar is the same.
