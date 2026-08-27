---
name: taste-frontend-adaptive
description: Design, build, redesign, or audit visually substantial websites and frontend product surfaces with an adaptive brief-to-review workflow. Use for landing pages, portfolios, ecommerce, dashboards, web apps, interactive experiences, responsive UI, and material art-direction changes. Do not activate for backend-only work, CLI work, or tiny non-visual fixes.
license: MIT
metadata:
  version: "1.0.0"
  lineage: "Adapted from taste-frontend 4.2-portable"
---

# Taste Frontend Adaptive

Produce a coherent, usable, production-finished frontend without forcing every task through the same amount of process. Judge the rendered result when rendering is available.

The essential loop is:

`ROUTE EFFORT → FRAME → ACQUIRE IF NEEDED → DIRECT → BUILD → REVIEW`

Architecture, truth, and the primary user loop outrank decoration. Do not replace the requested product with an easier visual concept.

## 1. Route effort before doing work

Choose one mode internally. If uncertain, use **Standard**. Start light and promote only when a real blocker or risk justifies it.

### Patch

Use when the skill is explicitly invoked for a small visual change, or when the existing architecture and art direction are established and the request affects one component, state, viewport issue, or tightly bounded visual defect.

Workflow:

`inspect affected context → edit → targeted render/check → deliver`

Do not research competitors, create workflow state, restate the design system, or audit the whole product unless the change exposes a broader defect.

### Standard — default

Use for a new single page or surface, a substantial redesign, or a meaningful interaction flow with moderate content, media, or responsive requirements.

Workflow:

`compact brief → conditional acquisition → one direction → build primary loop → desktop/mobile review → focused revision → deliver`

### Deep

Use only when at least one condition materially applies:

- the user explicitly requests extensive art direction, exploration, or a launch-quality showcase;
- authentic media is central to the value proposition and must be sourced or generated;
- the work spans several connected surfaces or a new design system;
- the subject is real and claims, assets, or current product behavior require careful evidence;
- the category or interaction model is unfamiliar enough that benchmarking could change the architecture;
- failure has unusually high reputational, commercial, accessibility, or operational cost.

Adjectives such as “premium,” “modern,” or “beautiful” do not alone trigger Deep mode.

Deep mode may use the full `UNDERSTAND → ACQUIRE → DIRECT → SELECT → BUILD → REVIEW` sequence, but it still should not create state files, reports, or auxiliary documents unless they prevent repeated work or the user asked for them.

## 2. Frame the task compactly

Before designing, resolve these facts internally:

- surface class: product, marketing, editorial, commerce, portfolio, immersive, or hybrid;
- primary task or message;
- audience and usage context;
- required content and states;
- truth mode: **REAL**, **DEMO**, or **SHELL**;
- media and interaction dependency;
- existing brand/design constraints;
- technical and delivery constraints.

For task-oriented surfaces, define the shortest meaningful loop, such as:

`search → compare → choose → confirm`

If the interface does not support that loop, visual polish does not rescue it.

Do not print the internal brief unless the user asks for design reasoning.

## 3. Acquire only when it changes the result

Research or acquire assets only when at least one trigger applies:

- a current public fact, real product, person, place, price, specification, or claim must be accurate;
- the user supplied or referenced a particular URL, design, product, or asset;
- authentic media is visually central and not already available;
- an unfamiliar mature category has conventions that could change the primary loop, information architecture, or control placement;
- missing evidence would otherwise force fake precision.

Use one focused acquisition pass and at most one targeted follow-up for unresolved blockers. Benchmark behavior and architecture, not visual skin. Prefer current first-party sources for volatile facts and authentic subject media.

Skip acquisition when the task is fictional, low-media, well specified, and category knowledge is sufficient. Label invented names, prices, metrics, testimonials, availability, and results as demo content. Use explicit replacement slots when private facts are essential and unavailable.

Do not proceed to a high-fidelity, media-led result without credible media. Generated media may carry imagination or atmosphere, never factual evidence.

## 4. Set one direction before implementation

Write one private direction sentence:

> Make **[surface]** feel **[character]** through **[dominant medium and relationships]**; prioritize **[primary task/message]**; avoid **[specific failure mode]**.

Coordinate only the systems that materially affect this task:

- **Media:** truth role, source, crop, scale, and relationship to content.
- **Color:** temperature, chroma, contrast, surface hierarchy, and accent role before hex values.
- **Type:** semantic roles, reading/control density, hierarchy, measure, and script support before font selection.
- **Composition:** functional shell, focal anchor, information rhythm, repetition budget, and genuine mobile recomposition.
- **Depth:** overlap, crop, scale, material, lighting, and surface hierarchy; glow alone is not depth.
- **Motion:** feedback, state continuity, hierarchy, navigation, or storytelling; remove motion with no content or state role.

Not every system needs equal elaboration. For Patch mode, preserve the existing direction unless the user explicitly requests a change.

Before building, check coherence once: the medium, color, type, layout, depth, motion, and interaction must feel like one authored product rather than borrowed parts from several fashionable sites.

## 5. Avoid common synthetic design failures

Reject shortcuts that are not derived from the subject:

- technology automatically becoming purple/cyan glow;
- luxury automatically becoming black/gold;
- editorial automatically becoming beige, serif, and fake metadata;
- generic glass cards, particles, pointer spotlights, or decorative dashboards;
- repeated card grids when content relationships call for a map, table, sequence, index, or dominant media;
- mechanical image-left/image-right alternation presented as composition variety;
- huge empty areas without a focal relationship;
- fake awards, customers, screenshots, reviews, measurements, or proof;
- controls that appear interactive but do nothing.

Use effects only when they improve understanding, state, navigation, manipulation, or emotional continuity.

## 6. Build invariants

Preserve these across all modes:

- the requested surface class and primary user loop;
- honest REAL/DEMO/SHELL content provenance;
- immediate access to the primary task or message in the first useful viewport;
- semantic controls, visible focus, sufficient contrast, useful touch targets, and keyboard access;
- critical content that remains visible when optional animation or enhancement fails;
- responsive behavior that recomposes hierarchy and control order instead of merely shrinking desktop;
- reduced-motion handling when motion exists;
- no dead primary controls or broken media;
- complexity spent where users can perceive value.

Do not build elaborate shaders, 3D, physics, animation systems, or infrastructure while information architecture, media, controls, readability, or responsive behavior remains weak.

## 7. Review proportionally

Review the artifact rather than self-certifying from source code when rendering tools are available.

### Patch review

- inspect the changed state at the affected viewport;
- exercise the changed interaction;
- check for a new console/runtime error or obvious regression;
- stop when the requested change is verified.

### Standard review

- load and inspect the first viewport;
- complete the primary user loop and inspect one deeper state;
- inspect desktop and mobile layouts;
- check console/runtime errors and broken media;
- verify keyboard focus and reduced-motion behavior when relevant;
- inspect hierarchy, density, alignment, repetition, and template-like styling;
- make one focused revision pass and rerun the affected checks; continue only while a blocking defect remains.

### Deep review

Run the Standard review plus full-page rhythm, content/asset truth, key intermediate widths, error/empty/loading states when relevant, and additional revision only for observed defects.

### Browser capability boundary

Preflight browser availability once.

- Use an existing compatible browser or project-provided QA path.
- Do not download or install a browser solely to satisfy this skill unless the user requested it or the project already authorizes dependency installation.
- If browser rendering is unavailable after one capability check, perform the strongest static checks available: parsing, type/lint/build checks, selector/asset validation, responsive-rule inspection, accessibility signals, and contrast checks.
- Record browser-dependent QA as **PARTIAL** and name the unverified areas. Do not switch repeatedly among browser surfaces, attempt policy workarounds, or claim visual review passed.

One authoritative success signal is enough. Do not repeat equivalent checks merely to make the process look thorough.

## 8. Two quality gates

### Ready-to-build gate

Proceed when:

- the primary task/message and required facets are clear;
- truth mode is honest and essential assets are ready or explicitly scaffolded;
- the architecture matches the requested surface;
- one coherent direction has been chosen.

### Delivery gate

Deliver when:

- the artifact builds or parses;
- the primary loop and controls work to the extent verified;
- critical content is visible without optional effects;
- responsive and accessibility requirements are credibly handled;
- no known major runtime, media, or visual defect remains;
- QA limitations are stated precisely when rendering was unavailable.

A `PARTIAL` browser result may still be delivered when static validation passes and the limitation is environmental, but it must not be described as a full visual pass.

## 9. Delivery behavior

Lead with the result. Briefly report:

- what was built or changed;
- what was actually verified;
- any material limitation or remaining risk.

Do not expose internal briefs, candidate palettes, mode routing, research notes, or gate ceremony unless the user asks. Do not create extra reports, screenshots, or documentation unless they help the user use or evaluate the requested artifact.
