<!-- Taste Frontend V4.4 Composition & Motion — WEB FALLBACK SINGLE FILE -->
<!-- For web clients that cannot install the full Agent Skill package. Scripts are intentionally not embedded/executed. -->

---
name: taste-frontend
description: Designs, builds, redesigns, and audits high-quality visual frontends using a guided research-to-render workflow. Use whenever the user asks to create or substantially modify a website, landing page, portfolio, product page, ecommerce surface, dashboard, web app, interactive web experience, frontend UI, responsive page, or visually polished HTML/CSS/JS/React interface. Also use for frontend art direction, layout, media, color, typography, depth, motion, responsive behavior, and visual QA. Do not use for backend-only, CLI-only, data-processing, infrastructure, or tiny non-visual code fixes unless frontend UX is materially involved.
license: MIT
compatibility: Portable Agent Skills format. Optional workflow/QA scripts require Node.js 20+; full browser QA additionally needs Chrome, Edge, or Chromium. The skill still works instruction-only when terminal/browser tools are unavailable.
metadata:
  version: "4.4-composition-motion-experiment"
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
Run commands from the **user project/workspace root** so `.taste/` is created beside the project. Resolve `<skill-root>` to this installed skill folder; do not assume the project itself contains `scripts/`.

## 2.1 Start workflow state

At the beginning of a substantial frontend build, run:

`node <skill-root>/scripts/taste-flow.mjs init <target>`

where `<target>` is normally `index.html` or the relevant local entry page.
This creates `.taste/state.json` in the user's workspace.

Populate that state during work rather than inventing a parallel workflow document.
Do not ask the user to edit `.taste/state.json`.

## 2.2 Pass workflow gates

After the relevant state fields are populated, run these yourself:

- `node <skill-root>/scripts/taste-flow.mjs gate understand`
- `node <skill-root>/scripts/taste-flow.mjs gate acquire`
- `node <skill-root>/scripts/taste-flow.mjs gate direct`
- `node <skill-root>/scripts/taste-flow.mjs gate build`
- `node <skill-root>/scripts/taste-flow.mjs gate review`

If a command fails, fix the underlying work; do not bypass the gate by deleting state or fabricating values.

## 2.3 Delivery QA

Before final delivery, if Node and a browser are available, run:

`node <skill-root>/scripts/taste-check.mjs <target> --out .taste/qa`

Then inspect the generated screenshots/report yourself.
A report is not a substitute for visual inspection.
If status is `FAIL`, repair and rerun.
If status is `PARTIAL`, complete whatever browser/visual checks are possible with the current agent tools.

After every QA run, synchronize the mechanical result instead of manually inventing a status:

`node <skill-root>/scripts/taste-flow.mjs qa .taste/qa/taste-report.json`

Then inspect screenshots yourself. After visual review, record `review.visualReviewed = true`, pass the review gate, then run:

`node <skill-root>/scripts/taste-flow.mjs finish`

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
- category promise: what the audience is actually buying/seeking/feeling;
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
Before translating style adjectives, resolve the **category promise**. Treat adjectives as modifiers, not the product itself.
It should resolve:

- category promise and desired audience feeling;
- dominant medium;
- visual thesis;
- hierarchy and density;
- color behavior;
- type behavior;
- composition behavior and full-page rhythm;
- depth behavior;
- **spatial mode and spatial role**: 2D, 2.5D interface depth, hybrid, true 3D, or pre-rendered/multi-view 3D;
- motion behavior, including narrative/transition continuity when the surface benefits from it;
- project-specific counter-signal against generic AI archetypes;
- signature moment, if one is justified.

“High-end” is not a palette or font category.
Translate adjectives into relationships and design variables rather than fixed answers.

Read `references/taste-grammar.md` when interpreting style language such as premium, minimal, editorial, royal, playful, technical, quiet, cinematic, luxurious, natural, or experimental.
For multi-section brand/editorial/cultural/product storytelling surfaces, also read `references/composition-motion.md`.

---

# 6. SELECT — six coordinated design engines

All six systems must respond to the same direction.
Do not optimize them independently.

1. **MEDIA** — choose the medium that credibly carries the content: official photography, documentary/editorial photography, lifestyle, macro, render, diagram, screenshot, illustration, generated concept, etc.
2. **COLOR** — derive temperature, chroma, luminance structure, contrast, surface hierarchy, and accent role from brand/product/media/context.
3. **TYPE** — assign semantic roles first, then choose type families and scale relationships.
4. **COMPOSITION** — build architecture, hierarchy, section topology, full-page rhythm, repetition budget, breakout/containment behavior, and mobile recomposition; alternation is not real variation.
5. **DEPTH / SPATIAL MEDIA** — choose deliberately between 2D, 2.5D, hybrid, true 3D, or pre-rendered/multi-view 3D. Use foreground/midground/background, crop, scale, overlap, material, lighting, photographic DOF, and spatial interaction; glow alone is not depth.
6. **MOTION** — distinguish ambient, object, state, narrative, and transition motion. Use a small coherent vocabulary for feedback, continuity, hierarchy, navigation, storytelling, or atmosphere; wrong motion is worse than no motion.

Read `references/design-engines.md` for the full decision logic. For expressive multi-section experiences, read `references/composition-motion.md`. When 3D, pseudo-3D, product rotation, WebGL/WebGPU, spatial UI, or immersive interaction is materially relevant, also read `references/spatial-media.md`.

---

# 7. Coherence pass

Before building, ask:

**Do media, color, typography, composition, depth, motion, and interaction feel like one authored world?**

If each individual choice is fashionable but their combined personality conflicts, simplify and redirect.

A high-end result usually demonstrates:
- category/product fit before style-word literalism;
- hierarchy precision;
- asset quality;
- coherence;
- restraint;
- composition rhythm;
- motion continuity where appropriate;
- continuity;
- production finish.

The first viewport may be quiet, but it must not become visual vacuum. There must be a clear dominant anchor or intentional focal relationship.
A sophisticated page should also survive static inspection: animation may elevate composition, but it must not be the only reason the page feels designed.

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
Pass only if the category promise is legible in the art direction; hierarchy, media, color, type, composition, depth, and motion form one coherent system; major sections have deliberate rhythm; and the result avoids adjective literalism, generic AI archetype clusters, and component soup.

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


---

<!-- EXPANDED REFERENCE: taste-grammar.md -->

# 1. TASTE GRAMMAR — HOW TO UNDERSTAND “HIGH-END”

## 1.1 High-end is not a style
Do not equate high-end with:
- black + gold,
- off-white + serif,
- glassmorphism,
- giant typography,
- dark tech gradients,
- WebGL,
- excessive empty space,
- tiny editorial metadata.

High-end quality is usually the result of six invariants:

1. **Hierarchy precision** — the user knows what matters first.
2. **Asset quality** — the visual/content material itself is credible and strong.
3. **Coherence** — type, color, image, spacing, motion, and material belong to one world.
4. **Restraint** — quiet areas are intentional; not everything performs.
5. **Continuity** — interaction and state changes feel causally connected.
6. **Production finish** — crop, alignment, icon optics, responsive behavior, motion physics, loading, and typography are polished.

If these six fail, decorative sophistication does not rescue the result.

## 1.2 Translate adjectives into design variables
Treat user words as signals, not answers.

Translate adjectives into relationships across:
- restraint,
- visual density,
- image/media dominance,
- typographic expression,
- spatial depth,
- motion intensity,
- materiality,
- contrast,
- asymmetry,
- editoriality,
- product clarity,
- experimentalism.

Do not literally expose numeric scores unless useful. Use the concept internally.

Example:

`premium + minimal + music product`

may imply:
- high restraint,
- medium content density,
- high product clarity,
- strong media identity,
- restrained interface color,
- subtle layered depth,
- state-driven motion,
- low decorative spectacle.

It does **not** imply black/champagne/serif.

## 1.3 Taste is a tie-breaker
When multiple solutions correctly fit the same task, prefer:
- precise hierarchy,
- confident negative space,
- strong image/type relationships,
- controlled chroma,
- optical alignment,
- material credibility,
- varied but disciplined composition,
- product-grade motion,
- one memorable moment with quiet supporting regions,
- editorial confidence without fake magazine decoration.

Explicit user references, brand truth, product utility, accessibility, and category expectations outrank this taste profile.

## 1.4 Dominant medium principle
Every strong surface should know what primarily carries its identity.

Possible dominant media:
- authentic product photography,
- editorial photography,
- illustration,
- album/cover artwork,
- typography,
- data/information,
- product UI/state,
- 3D/spatial interaction,
- motion itself.

Do not let five media families compete equally.

A useful rule:
> If every layer is trying to be the hero, there is no hero.

## 1.5 Effects must transform content
An effect earns its place when it changes how the user understands, feels, navigates, or manipulates the content.

Weak:
- pointer glow over an otherwise unchanged card,
- particles behind ordinary text,
- hover scale with no product meaning.

Stronger:
- a product rotates to reveal material details,
- album art transforms with track state,
- a story image changes crop/scale as the narrative advances,
- a 3D environment is itself the subject.

If removing an effect leaves the experience unchanged, it is probably decoration.

---


## 1.6 Advanced technology is a medium, not a style taboo
Do not equate high-end with 3D/WebGL, but do not suppress them either.

When the concept benefits from inspectable form, material response, spatial navigation, configuration, environment, or a memorable embodied interaction, **true 3D or advanced real-time rendering may be the most honest dominant medium**.

The correct question is not “is 3D too flashy?” but:
> Does spatial rendering make the subject more understandable, desirable, tactile, configurable, or memorable?

If yes, use it deliberately and execute it well. If no, do not add it merely to signal technical sophistication.

A restrained page can still contain one extremely advanced 3D moment. A technologically ambitious page can still be quiet, editorial, and luxurious.


## 1.7 Category promise outranks adjective literalism
Before translating `precise`, `experimental`, `luxury`, `natural`, `future`, or similar words, identify the audience value promised by the category.

A style adjective should change emphasis, pacing, material, contrast, or interaction character; it should not automatically replace the category with a visual stereotype.

Ask:
> If the adjective disappeared from the brief, what would this product/site still need to make the audience want, trust, understand, or feel?

That answer is the category promise. Keep it visible in the final art direction.


---

<!-- EXPANDED REFERENCE: workflow-details.md -->

# 2. PHASE A — UNDERSTAND

Do not design before deciding what the user actually asked for.

## 2.1 Internal brief object
Identify internally:

```yaml
surface_class:
goal:
audience:
primary_task:
secondary_tasks:
content_type:
real_or_fictional:
real_entities:
required_facets:
style_intent:
category_promise:
desired_user_feeling:
media_dependency:
interaction_dependency:
brand_constraints:
technical_constraints:
```

Do not print this by default.

## 2.2 Surface classifier
Choose the dominant surface:

- **PRODUCT / UTILITY APP** — users repeatedly do something: listen, search, message, edit, manage, create, organize, monitor.
- **MARKETING / CAMPAIGN** — explain, launch, persuade, build desire, communicate brand/product story.
- **EDITORIAL / PUBLICATION** — read, browse stories/media, archive, learn.
- **COMMERCE / CATALOG** — discover, compare, configure, purchase, book.
- **PORTFOLIO / SHOWCASE** — experience a body of work and understand authorship/capability.
- **IMMERSIVE / EXPERIMENTAL** — interaction/spatial behavior is itself the content.
- **HYBRID** — identify which mode dominates each region.

The word `premium`, `minimal`, `luxury`, `cinematic`, or `high-end` never changes the surface class.


## 2.2.1 Category promise
Before style translation, identify what the audience is actually buying, seeking, trusting, or wanting to feel.

Examples:
- commerce may sell desire, confidence, identity, fit, craft, or convenience;
- cultural surfaces may sell discovery, anticipation, interpretation, and belonging;
- editorial surfaces may sell viewpoint, pacing, depth, and memory;
- utility products may sell control, speed, clarity, reliability, or mastery.

Do not let one adjective from the brief replace the category promise. `Precise` is not automatically an engineering dashboard; `experimental` is not automatically particles or a lab interface.

## 2.3 Primary user loop
For task-oriented surfaces, define the shortest meaningful loop.

Examples:
- music: `discover/search -> choose -> play -> continue browsing -> manage current play`;
- commerce: `discover -> inspect -> compare/configure -> trust -> purchase`;
- editor: `open -> create/edit -> inspect -> save/export`;
- booking: `search -> evaluate -> choose slot/item -> confirm`.

If the UI does not support the primary loop, visual polish is irrelevant.

## 2.4 Coverage obligations
Every named user requirement becomes a coverage obligation.

For parallel concepts (`nature + people`, `hardware + software`, `heritage + innovation`):
- give each concrete content evidence;
- when media is central, give each visual evidence;
- do not let one facet survive only as hidden reasoning or generic copy.

## 2.4.1 Content provenance mode
Before inventing content, decide which mode applies:

- **REAL CONTENT** — user supplied the actual facts/assets, or they can be verified from authoritative sources. Preserve them.
- **DEMO CONTENT** — the user asks for a finished concept but has not supplied private/personal/project-specific data. Build a convincing demo structure, but clearly treat invented names, dates, metrics, results, awards, credentials, and project details as sample content rather than verified biography.
- **SHELL CONTENT** — exact private content is essential and cannot be inferred safely. Build the design/system with explicit replacement slots instead of fake precision.

Do not confuse “plausible for this category” with “true about this person.”
For portfolio/resume/coursework tasks, exact personal achievements, grades, dates, measurements, project outcomes, accreditation claims, and institutional verification require user data or evidence.

## 2.5 Architecture before decoration
For PRODUCT / UTILITY / COMMERCE surfaces, establish the functional shell before visual choreography.

Determine what must be persistent, searchable, browsable, contextual, stateful, or reversible.

A product app should not become a sequence of poster-like scroll sections merely because that is visually easier.

---

# 3. PHASE B — ACQUIRE

The Acquire phase answers:
> What material do I need before I can design credibly?

It may include research, image acquisition/generation, category benchmarking, and content inventory.

## 3.1 Build a research plan first
Before browsing, decide what must be learned.

Ask:
- Which facts affect the design or copy?
- Which facts are freshness-sensitive?
- Which media assets are needed?
- Which source types can prove them?
- Does this product category have mature interaction conventions worth studying?
- What is missing that must not be invented?

### Bounded acquisition — do not deadlock
Research is a means, not the deliverable.
Use the smallest evidence set that makes the next design decision credible.

Default behavior:
1. one focused research plan;
2. one evidence-gathering pass;
3. one targeted follow-up only for unresolved blockers;
4. then move forward in REAL / DEMO / SHELL mode.

Do not recursively research every plausible detail, benchmark, or visual reference.
A weak model that keeps “thinking/researching” without building has failed the workflow just as surely as a model that skips research.

## 3.2 Real-world research
For real public products, companies, people, places, events, software, technologies, or services, prefer:

1. user-provided material,
2. current official product/site pages,
3. current first-party newsroom/press/media kit/docs,
4. reputable factual sources,
5. licensed/reusable secondary media when appropriate.

Model memory is not enough for freshness-sensitive claims.

Verify current status before claiming:
- unreleased,
- discontinued,
- unavailable,
- current specs/pricing,
- current executives,
- current product generation,
- absence of official imagery.

Asset retrieval failure is not evidence of product nonexistence.

## 3.3 Category benchmark
For mature product categories, use browsing/reference tools when available to inspect at least two current strong products.

Extract **behavioral invariants**, not skins:
- information architecture,
- first-viewport task access,
- persistent regions,
- content density,
- navigation,
- search/discovery,
- current-state treatment,
- control placement,
- contextual panels,
- mobile behavior,
- empty/loading/error states.

Do not copy branding, exact layout, or palette.

## 3.4 Media acquisition logic
Choose the truth class first:

- **Evidence** — exact appearance/existence must be trusted.
- **Experience** — show what use/context feels like.
- **Material** — communicate craft, texture, finish.
- **Explanation** — explain operation/structure.
- **Emotion** — carry atmosphere or campaign feeling.
- **Imagination** — fictional/speculative/abstract content.

Then choose medium:
- official photography,
- real screenshot,
- documentary photo,
- editorial/lifestyle photography,
- macro/detail,
- technical render/diagram,
- illustration,
- generated concept,
- procedural media.

Generated media is not factual evidence.

## 3.5 Media-centric products
For music, video, photography, publishing, travel, social, or commerce, media objects are part of the product data.

A music product without convincing artwork/artist/playlist media is equivalent to a shop without product images.

If the product is fictional:
- source or generate a coherent demo media set when tools allow;
- make distinct items look distinct;
- do not use one procedural SVG/canvas language for every item unless that is the explicit concept.

## 3.6 Asset readiness test
Before Direct, ask:

- Do I have enough truth to write specific content?
- Do I have enough media to make the main visual moments credible?
- Do I know what remains unknown?
- Do I understand the product/category enough to preserve the primary user loop?

For a real multi-section visual product promotion, normally require:
- one authentic hero/overview visual;
- at least two different authentic supporting visuals when publicly available;
- verified concrete product/content facts.

Do not count logos, decorative SVGs, CSS drawings, or blank placeholders as authentic subject media.

If public authentic assets exist and tools can access them, a zero-authentic-media final render fails.

## 3.7 Stop condition
If critical evidence/assets are missing:
- keep researching when tools can resolve it;
- request the missing asset only when tools truly cannot obtain it and the asset is essential;
- otherwise clearly build a scaffold/prototype rather than pretending it is a finished high-fidelity result.

Do not silently solve missing evidence with fake precision.

---

# 4. PHASE C — DIRECT

Now define one coherent visual/product world.

## 4.1 Internal Design Direction
Create privately:

```yaml
category_promise:
desired_user_feeling:
dominant_medium:
visual_thesis:
brand_character:
hierarchy_behavior:
density_behavior:
color_behavior:
type_behavior:
composition_behavior:
composition_rhythm:
depth_behavior:
motion_behavior:
motion_vocabulary:
anti_cliche_strategy:
signature_moment:
resting_mode:
```

Do not use fixed hex values or named layout templates in this packet.

Before committing, run a literal-metaphor check: is each major visual choice revealing the product/content, or merely illustrating a word from the brief? If the latter, simplify or redirect.

For multi-section expressive surfaces, read `composition-motion.md` before finalizing composition and motion.

## 4.2 One dominant idea per viewport
Every important viewport/state gets one primary visual priority:
- media,
- product,
- content,
- task,
- diagram,
- comparison,
- interaction.

Supporting elements should reinforce rather than compete.

## 4.3 Minimal means edited, not empty
Minimalism means reducing competing signals, not deleting useful content.

For information-rich surfaces, use:
- hierarchy,
- chaptering,
- progressive disclosure,
- grouping,
- strong media scale,
- contextual panels,
- tabs/filters when functional,
- controlled density.

Blank space is not automatically luxury.

## 4.4 Editorial means relationship
Editorial quality comes from:
- sequencing,
- image scale/crop,
- rhythm,
- margins,
- asymmetry within structure,
- typography hierarchy,
- meaningful captions/context.

It does not require serif, off-white, issue numbers, PLATE labels, coordinates, or tiny pseudo-metadata.

## 4.5 Immersive means experience
Immersive quality comes from:
- a spatial/interaction thesis,
- coherent input-response behavior,
- strong material/lighting quality,
- continuity,
- legibility and fallbacks.

3D, WebGL/WebGPU, custom shaders, and spatial interaction are valid first-class media when they carry the experience. Do not avoid them merely because a simpler 2D implementation is easier.

Equally, do not paste particles, pointer glow, or a generic 3D object onto a conventional page and call it immersive. If the spatial layer is removed and the concept is unchanged, it may be decoration rather than the experience.

## 4.6 Product precision
For utility/product surfaces, high-end means:
- task access is immediate,
- current state is obvious,
- content feels inhabited,
- controls are predictable,
- layout is dense enough to be useful,
- interaction is fast and reversible,
- identity supports the product rather than replacing it.

---



---

<!-- EXPANDED REFERENCE: design-engines.md -->

# 5. PHASE D — SELECT

Select six coordinated systems from the Design Direction.
Do not decide each shelf independently.

---

## 5.1 MEDIA ENGINE

### Inputs
- truth requirement,
- dominant medium,
- subject/content,
- category expectations,
- available assets,
- desired emotional effect.

### Decide
For each major visual, determine:
- role: evidence / experience / material / explanation / emotion / imagination;
- source class;
- crop;
- scale;
- shot/view type;
- lighting/finish;
- aspect ratio;
- relationship with type and surrounding UI.

### Prefer
- authentic real media when reality is part of the value proposition;
- distinct high-quality media for distinct content;
- strong crops over tiny decorative thumbnails;
- wide/full-bleed treatment when media is the hero;
- purposeful alternate crops only when honest.

### Avoid
- fake product likenesses when official assets are available;
- tiny product image floating inside a huge empty box;
- media used merely as background texture when it should carry meaning;
- repeated generic stock style across unrelated subjects;
- procedural placeholders becoming the visual identity by accident.

### Validate
Ask:
> If the interface styling disappeared, would the media still make this subject believable and desirable?

---

## 5.2 COLOR ENGINE

### Inputs
- brand evidence,
- product/material colors,
- dominant imagery,
- audience,
- emotional intent,
- accessibility/viewing conditions.

### Decide relationships first
- warm / cool / neutral / mixed;
- low / medium / high chroma;
- soft / medium / hard contrast;
- surface hierarchy;
- text hierarchy;
- accent role;
- whether media or UI carries color.

Then choose actual colors.

### Candidate comparison
When no brand system determines the answer, privately compare 2–3 materially different relationship hypotheses.

Do not compare three near-identical palettes.

### Avoid shortcuts
Never map:
- luxury -> black/gold;
- editorial -> warm paper;
- tech -> blue/purple neon;
- wellness -> sage/beige;
- royal -> purple/gold.

These may be valid outcomes only when derived from the subject.

### Validate
Ask:
- Does the palette belong to this content/brand?
- Is it distinct from generic category styling?
- Does UI support rather than fight the imagery?
- Is contrast sufficient in real use?

---

## 5.3 TYPE ENGINE

### Inputs
- reading vs control density,
- brand character,
- language/script,
- content length,
- media dominance,
- platform constraints.

### Assign roles before fonts
Possible roles:
- display,
- body,
- UI/control,
- metadata/caption,
- numeric/data.

Not every project needs all roles.

### Decide
- personality,
- weight hierarchy,
- width/measure,
- optical size,
- line-height,
- tracking,
- language compatibility.

### Avoid
- serif as automatic luxury;
- uppercase mono microcopy everywhere;
- five type personalities competing;
- tiny text used to simulate sophistication;
- headlines so large that the product/task disappears.

### Microcopy removal test
Delete metadata/captions if removing them loses no real information, navigation, authorship, state, or context.

### Validate
Ask:
> Can the type system explain the hierarchy without relying only on huge size differences?

---

## 5.4 COMPOSITION ENGINE

For multi-section expressive surfaces, use this section together with `composition-motion.md`.

### Inputs
- surface class,
- primary user loop,
- content hierarchy,
- dominant medium,
- number/relationship of items,
- viewport behavior.

### Functional shell first
For PRODUCT / COMMERCE surfaces, establish task architecture before cinematic composition.

Examples of product regions may include:
- navigation,
- search,
- browse/discovery,
- library/catalog,
- workspace/content view,
- context/queue/inspector,
- persistent current-state controls.

Use only what the task needs.

### Relationship-to-layout mapping
- one proposition + strong asset -> dominant asset with supporting copy;
- sequential explanation -> narrative/sticky sequence;
- comparable items -> grid/table/structured comparison;
- photography-led story -> editorial sequencing and changing scale;
- technical explanation -> annotated media/diagram + supporting text;
- repeated interactive objects -> consistent product grid/list with state.

### Composition rhythm — do not confuse alternation with variation

Track scale, density, alignment, media ratio, container behavior, reading width, vertical tempo, and interactive state across the full page. A centered max-width grid may be a useful shell, but it should not become a prison for every major section.
A page needs a stable grid **and** changing visual pressure.
Do not create variety by mechanically flipping the same module left/right.
`image-left/text-right -> image-right/text-left -> repeat` for many sections is a template tell, not editorial rhythm.

Before implementation, assign major sections/items different compositional roles based on importance and evidence, for example:
- **anchor** — largest visual/content moment;
- **feature** — one project/story receives expanded treatment;
- **support** — compact secondary item;
- **index** — dense scan-friendly list/table/contact sheet;
- **break** — full-width media, quote/data band, timeline, diagram, or deliberate quiet interval;
- **compare** — two or more items shown as a relationship rather than separate cards.

Across a long page, vary at least some of these dimensions intentionally:
- media scale;
- text-to-media ratio;
- column span;
- alignment;
- density;
- crop/aspect ratio;
- grouping (single / pair / cluster / index);
- background/surface treatment only when semantically justified.

Do not vary all dimensions at once. The grid remains stable while emphasis changes.
For repeated collections, allow consistency at the data level while introducing one or two larger anchors and at least one denser overview/index treatment when the content supports it.

### Repetition budget
Three or more consecutive sections using the same composition skeleton require explicit justification.
Two mirrored variants still count as the same skeleton.
If the content hierarchy differs but the geometry does not, redesign the sequence.

### Grid before gesture
Start from alignment, column logic, spacing rhythm, and content relationships.
Then introduce asymmetry, breakout, overlap, or full bleed.

### Reading width is not media width
Keep long text readable, but allow important media/product/interactive surfaces to break out wider when appropriate.

### Anti-PPT rule
A utility surface should not default to:
`large title -> one centered object -> empty space -> next slide-like section`.

### Mobile recomposition
Do not merely scale desktop.
Re-evaluate hierarchy, navigation, media crop, persistent controls, panel order, interaction reach, and density.

### Validate
Ask:
> Does this layout look like a mature instance of its product/content category while still having its own identity?

---

## 5.5 DEPTH / SPATIAL MEDIA ENGINE

Depth should create spatial hierarchy, material credibility, continuity, or meaningful manipulation.

### Choose a spatial mode deliberately
Do not treat “2D versus 3D” as a binary quality ranking. Choose the fidelity the interaction actually needs:

1. **2D** — typography, photography, illustration, diagrams, flat UI.
2. **2.5D interface depth** — cards, panels, posters, images, or interface surfaces using perspective, parallax, tilt, layered shadows, local highlight response, and z-order.
3. **Hybrid spatial composition** — photography/video/2D media composited with 3D objects, depth layers, masks, or camera-like motion.
4. **True 3D** — actual geometry/material/camera/light representation when users need to inspect volume, material, configuration, orientation, or environment.
5. **Pre-rendered / multi-view 3D** — path-traced turntables, image sequences, rendered angles, or depth-aware composites when runtime 3D is unnecessary or too costly.

### Representation–Interaction Fidelity
The interaction must not promise more dimensional truth than the representation can support.

**Abstract interface surfaces**
- cards, dashboards, technical modules, media panels, posters, data objects;
- expressive pseudo-3D tilt/parallax is allowed when it strengthens tactility, hierarchy, or interaction feedback;
- the object does not need to pretend it has a real-world hidden backside.

**2D representations of real physical objects**
- product photos, cut-outs, screenshots, single-angle renders;
- subtle perspective, local highlight, shadow response, parallax, crop drift, or small-angle motion can be excellent;
- avoid large rotations or material claims that reveal missing geometry, impossible side surfaces, fake refraction, or inconsistent lighting.

**Inspectable physical products or environments**
- if the experience asks the user to rotate, orbit, inspect material, configure components, compare angles, or understand spatial construction, prefer true 3D, multi-view imagery, or another representation that can sustain that claim.

Ask:
> When the object moves, does the interaction enrich the illusion or expose that the representation is fake?

If it exposes the fake, either reduce the spatial claim or upgrade the asset.

### Sources of depth
Use combinations of:
- foreground / midground / background;
- scale differential;
- overlap;
- crop;
- lighting and material cues;
- real photographic depth of field;
- controlled shadow/blur;
- sticky/spatial relationships;
- parallax when content structure supports it;
- 2.5D interaction for abstract/UI surfaces;
- true 3D when form/material/spatial manipulation matters.

### True 3D quality bar
A true 3D moment should be judged by:
- silhouette and geometry quality;
- believable scale and proportions;
- material response, roughness, metalness, transmission/refraction when relevant;
- lighting/environment quality;
- camera framing and focal behavior;
- input mapping and motion damping;
- product legibility and CTA hierarchy;
- mobile/touch behavior;
- performance, loading, and fallback.

A technically complex scene with weak lighting/materials can look cheaper than a strong photograph.

### Avoid
- gradient glow pretending to be depth;
- global mouse spotlight;
- random blur blobs;
- glass panels with no material logic;
- large pseudo-3D rotation on flat physical-product art that cannot support the angle;
- 3D added only as proof that the developer knows 3D.

### Validate
Ask both:
> If the glow/blur were removed, would the spatial hierarchy still exist?

and
> Is the chosen spatial fidelity honest for what the user is being invited to inspect or manipulate?

If either answer is no, revise the spatial strategy.

Read `spatial-media.md` for the detailed 3D decision tree, rendering guidance, and fallbacks.

---

## 5.6 MOTION ENGINE

For brand/editorial/cultural/product storytelling surfaces, use this section together with `composition-motion.md`.

### First choose the role

Distinguish ambient, object, state, narrative, and transition motion. Background or object movement does not by itself create reading continuity.
Motion may provide:
- feedback,
- state change,
- continuity,
- hierarchy,
- storytelling,
- navigation,
- atmosphere.

Do not animate without a role.

### Route by surface
**PRODUCT / UTILITY:** state continuity, selection, panel transitions, loading/progress, drag/reorder, play/pause, hover/focus.

**CAMPAIGN:** product/media choreography, narrative transitions, reveal, scroll-linked explanation.

**EDITORIAL:** restrained reveals, image sequencing, typographic cadence, navigation continuity.

**IMMERSIVE:** continuous input-response, spatial/material transformation, controlled camera/world behavior.

### Motion character
Choose a coherent physical language:
- crisp / engineered,
- soft / editorial,
- elastic / playful,
- cinematic / weighted,
- fluid / continuous,
- mechanical / precise.

Do not mix several unrelated motion languages.

### Content-coupled motion
Prefer animation that changes the content or state itself.
Avoid effects that merely decorate containers.

### Narrative continuity baseline
For expressive multi-section surfaces, default to a restrained narrative/transition motion baseline unless the category calls for stillness. Do not reduce this to one universal fade-up recipe; select a small motion vocabulary that fits the content.

### Wrong motion is worse than no motion
Remove any motion that:
- distracts from the primary task,
- feels like a flashlight or cursor gimmick,
- makes content harder to read,
- lowers perceived quality,
- exists only because a library/template makes it easy.

### Replay behavior
Decorative viewport reveals may replay after fully exiting and re-entering.
Semantic completion/progress/state changes should normally remain stateful rather than replaying.

### Validate
Ask:
> Does the interaction feel better because motion exists, or merely busier?

---

# 6. COHERENCE PASS

Before implementation, check the six systems as one composition.

Ask:
- Does the media quality match the typography ambition?
- Does the palette belong to the media/material?
- Does the composition support the primary task/message?
- Does depth reinforce hierarchy?
- Does motion use the same physical character as the visual system?
- Does every major effect have a role?
- Does the page/app still have quiet regions?

Remove before adding.

Common symptoms of incoherence:
- editorial type + SaaS cards + cyberpunk glow;
- luxury palette + cheap procedural media;
- Apple-like minimal layout + gaming motion;
- immersive background + ordinary product grid fighting for attention;
- beautiful hero + generic repeated sections.

If the systems feel borrowed from different websites, return to Direct.

---



---

<!-- EXPANDED REFERENCE: composition-motion.md -->

# COMPOSITION & MOTION GRAMMAR

Use this reference when the task is a multi-section marketing, editorial, portfolio, cultural, commerce, or immersive surface where full-page rhythm and motion continuity materially affect perceived quality.

The purpose is not to force unusual layouts or animation everywhere. It is to prevent a competent implementation from collapsing into a repeated container/grid/card skeleton with disconnected effects.

---

# 1. CATEGORY PROMISE BEFORE ADJECTIVE LITERALISM

Before turning style words into visuals, identify the **category promise**: what the audience is actually buying, seeking, trusting, or wanting to feel.

Examples:
- fragrance -> desire, identity, ritual, tactility, distinction;
- writing instrument -> touch, craft, ownership, longevity, expression;
- cultural festival -> discovery, anticipation, energy, authorship, belonging;
- hotel -> place, hospitality, privacy, sensory escape, trust;
- technical tool -> control, legibility, precision, confidence, speed;
- publication -> reading, discovery, viewpoint, pacing, memory.

Brief adjectives are modifiers, not the product itself.

Translate them through the category promise instead of literally illustrating them:
- `precision` does not automatically mean grid + mono + telemetry;
- `experimental` does not automatically mean particles + lab UI;
- `luxury` does not automatically mean black + gold or beige + serif;
- `future` does not automatically mean cyan/purple glow;
- `natural` does not automatically mean sage green and organic blobs;
- `royal` does not automatically mean crowns, burgundy, and gold trim.

If the user explicitly requests a radical reinterpretation, the category promise may be challenged. Otherwise it should remain the anchor.

## 1.1 Literal-metaphor test
For every strong visual metaphor, ask:

> Is this revealing a useful property of the product/content, or merely illustrating a word from the brief?

If it only illustrates a word, reduce or replace it.

---

# 2. ANTI-AI ARCHETYPE FIREWALL

Many individually valid choices become generic when they appear as a familiar cluster.

Common clusters include:

### Dark engineering AI
- near-black canvas;
- technical grid/noise;
- mono micro-labels;
- cyan/orange status accents;
- HUD-like telemetry;
- repeated bordered metric panels.

### Beige editorial AI
- warm paper background;
- oversized serif headline;
- tiny all-caps mono labels;
- endless image/text alternation;
- fake issue/archive metadata.

### Gradient SaaS AI
- navy/purple gradient;
- glow blobs;
- glass cards;
- pill badges;
- three feature cards;
- centered hero with two CTAs.

### Luxury cliché AI
- black + gold;
- centered serif wordmark;
- excessive negative space;
- thin hairline borders;
- pseudo-poetic copy with weak product evidence.

These ingredients are not banned. The **cluster** is the risk.

When a direction resembles a known cluster:
1. justify why the category promise needs it;
2. identify at least one strong counter-signal specific to this project;
3. remove decorative elements that do not carry category-specific meaning.

A project should be recognizable from its content and spatial behavior even if the logo is hidden.

---

# 3. COMPOSITION RHYTHM ENGINE

Composition is the relationship of scale, density, alignment, media, whitespace, and sequence across the entire experience.

A grid is a construction system, not the composition itself.

## 3.1 Rhythm dimensions
Track variation across these dimensions:
- **scale** — intimate / normal / oversized / full-bleed;
- **density** — sparse / conversational / dense / index-like;
- **alignment** — centered / edge-anchored / asymmetric / distributed;
- **media ratio** — text-led / balanced / media-led / spatial-object-led;
- **container behavior** — contained / breakout / edge-to-edge / overlapping;
- **reading width** — narrow / standard / wide / split;
- **vertical tempo** — compressed / normal / breathing / cinematic;
- **state** — static / sticky / transformed / interactive.

Do not try to maximize variation. Build a deliberate rhythm.

## 3.2 Section topology
Useful section roles include:
- **ANCHOR** — one dominant visual idea or task;
- **STORY** — authored narrative with controlled reading width;
- **FIELD** — immersive media or spatial scene;
- **INDEX** — dense comparison, catalog, schedule, or list;
- **DETAIL** — material/specification/process close-up;
- **PAIR** — two ideas or media in tension;
- **SEQUENCE** — sticky or step-driven transformation;
- **BREAK** — deliberate reset, quiet pause, or dramatic chapter change;
- **ACTION** — configuration, booking, purchase, sign-up, or primary task.

Do not expose these labels to the user by default. They are design reasoning tools.

## 3.3 Repetition budget
Repetition is desirable when it creates identity or learnability, but repeated skeletons become template-like.

For expressive multi-section sites:
- do not let more than two adjacent major sections use the same topology unless the repetition is itself the concept;
- avoid repeating the same max-width container + heading + grid + bordered-card formula throughout the page;
- mirroring a 7/5 split is not meaningful variation;
- do not give every item equal visual weight when content importance differs.

For utility/product apps, stable shells and repeated patterns may be correct. Do not destabilize task-oriented interfaces merely to look artistic.

## 3.4 Container-prison test
Ask:

> If every section boundary and max-width wrapper were visible as boxes, would the page look like stacked Figma frames?

If yes, introduce justified breakout, overlap, crop, edge anchoring, scale shift, or section topology change.

Do not break the grid randomly. Break it because the content relationship demands a different spatial behavior.

## 3.5 Static-frame quality
Before motion is considered, capture a screenshot of at least three major states/sections.

Each should still feel composed and high quality when frozen.

Motion may elevate composition; it must not rescue weak static art direction.

---

# 4. MOTION GRAMMAR

Motion should form a coherent language, not a bag of effects.

Separate five roles:

1. **AMBIENT MOTION** — persistent atmosphere: water, light, grain, particles, subtle environment drift.
2. **OBJECT MOTION** — an object rotates, assembles, unfolds, opens, responds, or changes material.
3. **STATE MOTION** — hover, selection, tabs, drawers, configuration, loading, feedback.
4. **NARRATIVE MOTION** — content enters, leaves, reorders, reveals, or changes emphasis as reading progresses.
5. **TRANSITION MOTION** — one chapter/state/page becomes another with continuity.

Ambient or object motion does not substitute for narrative continuity.

## 4.1 Motion continuity baseline
For multi-section brand/editorial/cultural/product storytelling surfaces, provide a restrained but perceptible narrative motion baseline unless motion would harm the category.

This does **not** mean every section uses the same fade-up.

Choose a small vocabulary, for example:
- opacity crossfade;
- mask/clip reveal;
- scale settle;
- depth arrival;
- image aperture/crop shift;
- text stagger;
- parallax separation;
- sticky transformation;
- camera push/orbit;
- layout morph;
- object assembly/disassembly;
- material/light transition;
- horizontal drift;
- chapter crossfade.

Usually 1–3 primary motion behaviors are enough to create authorship.

## 4.2 Scroll behavior
For scroll-driven content:
- animate relationships, not every node;
- use the section's content logic to decide what moves first and why;
- preserve readable resting states;
- avoid scroll-jacking unless the experience truly depends on controlled sequencing;
- support reverse scrolling sensibly;
- where appropriate, reveals should replay or remain logically reversible rather than working only once by accident.

A good reveal can be nearly invisible: 8–20px translation, a modest mask, opacity shift, or media crop change may be enough.

## 4.3 Choreography hierarchy
Motion should respect visual hierarchy:
- dominant anchor moves with the strongest or longest temporal emphasis;
- supporting copy follows;
- metadata and decoration move least;
- multiple simultaneous effects should not compete for attention.

Do not give every element a different easing or animation concept.

## 4.4 Motion character
Choose a motion character consistent with the project:
- precise / mechanical;
- soft / atmospheric;
- editorial / measured;
- elastic / playful;
- cinematic / slow;
- tactile / spring-damped;
- abrupt / performative.

Then use compatible duration, distance, easing, and inertia.

## 4.5 Reduced-motion integrity
`prefers-reduced-motion` should remove or simplify motion without destroying hierarchy, content visibility, or task flow.

The reduced-motion experience must still look intentionally composed.

---

# 5. CATEGORY-SPECIFIC COUNTER-SIGNAL

To reduce generic AI styling, establish at least one visual behavior that could plausibly belong to this project and not hundreds of unrelated ones.

Possible sources:
- actual material/process behavior;
- editorial relationship unique to the content;
- brand-specific navigation behavior;
- product construction;
- a real interaction loop;
- distinctive photography direction;
- typography derived from actual language/content constraints;
- a motion behavior tied to subject matter.

A counter-signal is not a novelty effect. It is evidence of authorship.

---

# 6. COMPOSITION + MOTION REVIEW

Before final delivery, inspect the rendered experience and ask:

### Category
- Does the page sell the category promise, or merely illustrate adjectives?
- Would the art direction still make sense if style buzzwords were removed?

### Composition
- Are major sections meaningfully different in scale, density, alignment, or topology?
- Is the page trapped in one centered max-width container?
- Is visual importance differentiated, or is every section/module equal weight?
- Do static screenshots look intentionally composed without animation?

### Motion
- Is there narrative/transition continuity where the surface benefits from it?
- Are motion roles clear, or are background/object effects doing all the work?
- Does one coherent motion vocabulary recur across the experience?
- Is reverse/replay behavior sensible?
- Does reduced motion preserve a strong static composition?

### Anti-AI
- Does the project fall into a familiar AI archetype cluster?
- Which project-specific counter-signal prevents that?

If these questions expose a generic template, revise the Direct/Select stages rather than decorating the existing skeleton harder.


---

<!-- EXPANDED REFERENCE: spatial-media.md -->

# Spatial Media & 3D — Decision and Execution Guide

This reference exists to prevent two opposite failures:

1. **fake spatiality** — flat assets are pushed into large pseudo-3D motion that exposes their lack of geometry or material truth;
2. **technical timidity** — the agent avoids true 3D/WebGL/spatial rendering even when the product or concept clearly benefits from it.

The goal is not “more 3D”. The goal is the **right spatial fidelity**.

**Stable policy:** be 3D-neutral and opportunity-aware. Do not chase 3D for novelty and do not avoid it because it is difficult. If spatial value is real and credible fidelity is achievable, true 3D is a first-class medium.

---

## 1. Treat 3D as a first-class design medium

3D is not merely an effect category. It can be the dominant medium, just like photography, typography, video, illustration, or product UI.

Strong reasons to choose true 3D include:
- the user needs to inspect form from changing angles;
- material response is central to desire or understanding;
- the product is configurable or modular;
- assembly, mechanism, interior structure, or component relationship matters;
- spatial environment is itself the story;
- depth/scale/orbit is the signature interaction;
- a simple geometric object can be modeled convincingly in the available time/tooling;
- the user's reference or brief clearly rewards advanced spatial interaction.

Do not reject true 3D simply because it is harder than CSS.

---

## 2. Spatial-mode ladder

Choose one primary mode and optional supporting modes.

### Mode A — 2D
Use when identity is carried by photography, typography, illustration, information, or product UI rather than spatial manipulation.

### Mode B — 2.5D interface depth
Use perspective, tilt, layered transforms, parallax, light response, and depth shadows on abstract interface surfaces.

Excellent candidates:
- technical modules;
- dashboards;
- feature cards;
- posters;
- media panels;
- diagrams;
- UI windows;
- data objects.

These surfaces may be flat by nature; pseudo-3D interaction can still create legitimate tactile feedback.

### Mode C — Hybrid spatial composition
Combine 2D media and true spatial layers:
- a real product render floating over editorial photography;
- 3D type/object plus 2D content;
- depth-mapped photography;
- foreground 3D particles constrained to a meaningful physical/material system;
- camera movement linking rendered object and page narrative.

### Mode D — True runtime 3D
Use actual geometry, materials, camera, and lighting when users are invited to inspect or manipulate volume.

### Mode E — Pre-rendered / multi-view 3D
Use offline-rendered turntables, image sequences, rendered angle sets, or path-traced stills when runtime 3D is unnecessary, too costly, or unsupported.

---

## 3. Representation–Interaction Fidelity

The interaction should not claim more dimensional truth than the representation can sustain.

### Abstract UI object
A flat UI card can tilt strongly because it is not pretending to be a hidden three-dimensional consumer product.

Allowed when coherent:
- `rotateX/rotateY`;
- perspective;
- parallax layers;
- light-follow response;
- z-separation;
- magnetic movement;
- spring/damping.

### Physical object represented by a single 2D image/render
Allowed:
- subtle camera drift;
- local light response;
- small-angle tilt;
- shadow movement;
- foreground/background parallax;
- crop/scale motion.

Risky:
- large yaw/pitch rotation;
- fake side surfaces;
- fake glass refraction inconsistent with the image;
- lighting that changes as if geometry existed when it does not.

### Physical object whose form/material is the experience
Prefer:
- real 3D geometry;
- a high-quality GLB/GLTF or equivalent asset;
- procedural geometry when the object is simple enough;
- multi-angle product imagery;
- turntable sequence;
- pre-rendered path-traced views.

Decision question:
> When movement begins, does the interaction increase credibility or reveal the trick?

If it reveals the trick, lower the spatial claim or upgrade the asset.

---

## 4. 3D opportunity scan during DIRECT

Before settling on a purely 2D art direction, ask:

- Is the subject a physical product with meaningful form/material?
- Would rotation, orbit, exploded view, configuration, assembly, or spatial comparison improve understanding?
- Is there a simple procedural geometry route?
- Is a credible model already available or obtainable?
- Would one strong 3D signature moment outperform many decorative 2D effects?
- Does the target device/browser support it with a graceful fallback?

If several answers are yes, true 3D should be considered seriously rather than automatically deferred.

---

## 5. Quality bar for true 3D

A high-end 3D result depends more on art direction than polygon count.

Prioritize:
1. **Geometry / silhouette** — proportions and recognizable form.
2. **Materials** — roughness, metalness, transmission, clearcoat, anisotropy, subsurface or refraction only when materially relevant.
3. **Lighting** — environment, key/fill/rim, reflections, contrast, and product readability.
4. **Camera** — focal length, framing, orbit constraints, composition, and transition to surrounding UI.
5. **Interaction** — damping, inertia, pointer/touch mapping, limits, discoverability.
6. **Integration** — typography and CTA must still belong to the same composition.
7. **Performance** — loading, DPR, texture sizes, geometry complexity, offscreen pausing.
8. **Fallback** — poster image, pre-rendered turntable, or strong static product render.

A bad 3D model with flat lighting is not more premium than excellent photography.

---

## 6. Rendering ambition

Use physically based rendering and credible lighting/material response when appropriate.

Possible implementation families include, depending on the host stack and available tools:
- CSS 3D / DOM transforms for 2.5D UI;
- SVG/Canvas for graphic spatial systems;
- WebGL/WebGPU for real-time rendering;
- a mature scene graph / 3D framework when available;
- web-native model viewers for product inspection;
- generated or acquired GLB/GLTF assets;
- procedural geometry;
- pre-rendered multi-angle or turntable sequences.

Do not install a heavy framework only to rotate one rectangle. Do not avoid a mature 3D framework when the experience genuinely requires a scene, materials, camera, lighting, and input handling.

### About ray tracing / path tracing
Do not use “ray tracing” as a marketing label for bloom, gradients, or ordinary reflections.

For the web target:
- physically based materials + environment lighting are a strong baseline;
- use real-time path tracing / advanced ray-based rendering only when the available runtime can support it responsibly;
- otherwise use offline/path-traced product renders, baked reflections, lightmaps, or progressive enhancement to achieve high-end material fidelity.

The visual claim must match the actual rendering method.

---

## 7. Mobile and fallback

If runtime 3D is used:
- cap device pixel ratio when needed;
- simplify geometry/materials on constrained devices;
- reduce texture resolution appropriately;
- pause rendering when offscreen;
- avoid continuous high-cost animation when no interaction is occurring;
- provide touch orbit/drag behavior;
- preserve the primary CTA outside the canvas when sensible;
- respect reduced motion;
- provide a credible static fallback.

Do not make the entire product inaccessible because a 3D engine fails to initialize.

---

## 8. Review questions

Before delivery, inspect the rendered scene and ask:
- Is 3D solving a content/product problem or merely signaling technical ambition?
- Does the object look more convincing while moving than while static?
- Are material and lighting quality sufficient for the category?
- Does the 3D moment dominate too much of the page?
- Does the rest of the layout remain composed rather than becoming a shell around a demo scene?
- Is the fallback still visually authored?
- Are 2.5D interactions on flat UI surfaces adding tactility without confusing them with real objects?

The ideal system can use **true 3D where spatial truth matters** and **2.5D where tactile interface depth is enough**.


---

<!-- EXPANDED REFERENCE: build-review-gates.md -->

# 7. PHASE E — BUILD

## 7.1 Preserve architecture
Implementation must preserve:
- surface class,
- primary user loop,
- required content facets,
- asset truth,
- design direction.

Do not let technical convenience rewrite the concept.

## 7.2 Complexity ROI and spatial ambition
Do not suppress advanced media merely because implementation is harder. Decide whether the complexity is **core media** or **optional spectacle**.

If 3D/spatial rendering is central to inspecting a product, understanding material/form, configuring an object, navigating an environment, or delivering the signature experience, prototype it early enough to shape the composition. Treat it like photography or video, not as a late decorative effect.

If the shader/physics/3D system is optional and architecture, media, hierarchy, controls, or responsiveness are still weak, fix those foundations first.

Code volume is not quality.
A 300-line polished product can outperform a 2500-line broken experience, but a high-quality real-time 3D system can also be justified when it carries perceptible user value.

For real physical products, verify representation–interaction fidelity: do not invite large-angle inspection of a flat approximation that cannot reveal credible geometry or material behavior.

## 7.3 Progressive enhancement
Critical content and controls should remain usable if optional animation/visual effects fail.

Do not hide essential content before confirming the animation runtime initialized successfully.

Decorative failure must degrade to a good static state.

## 7.4 Control quality
For buttons and controls:
- stable hit boxes;
- optical, not only mathematical, centering;
- SVG with explicit viewBox and `display:block`;
- consistent icon stroke/fill weight;
- sufficient touch target;
- visible hover/focus/pressed/disabled states when relevant.

Play triangles often require slight optical correction to the right even inside geometrically centered containers.

## 7.5 Media delivery
For raster media:
- reserve dimensions/aspect ratio to prevent layout shift;
- use responsive sources/sizes when appropriate;
- lazy-load below the fold;
- prioritize true LCP media;
- use deliberate mobile crops;
- verify remote assets actually load.

Do not optimize away visible quality.

## 7.6 Accessibility and reduced motion
Maintain:
- semantic controls,
- keyboard/focus access,
- readable contrast,
- meaningful alt text where applicable,
- reduced-motion fallback,
- non-motion equivalent for important state/information.

Accessibility is part of production finish.

---

# 8. PHASE F — REVIEW

The model must not self-certify from code alone when rendering/testing tools exist.

Use the best available loop:

`RUN -> RENDER -> INTERACT -> INSPECT -> REVISE`

## 8.0 External QA hook (optional, preferred when available)
When the bundled checker is available, treat it as the mechanical delivery checker for the final frontend. Run it from the user project root with the installed Skill path resolved:

`node <skill-root>/scripts/taste-check.mjs <entry-html-or-url> --out .taste/qa`

Then synchronize the report into workflow state:

`node <skill-root>/scripts/taste-flow.mjs qa .taste/qa/taste-report.json`

- `FAIL` is blocking: fix the reported problem and run the checker again.
- `WARN` requires judgment but is not automatically blocking.
- `PASS` only covers mechanical delivery quality; it does **not** replace visual/art-direction judgment.
- If the checker is absent or cannot run in the current platform, continue with the browser review below.

This hook must never change the requested design direction or turn the task into a tooling exercise.

## 8.1 Browser verification
When a browser/runtime is available:
- load the actual result;
- inspect the first viewport;
- scroll/browse the full surface;
- click primary controls;
- test primary user loop;
- resize to mobile/narrow width;
- inspect console/runtime errors;
- verify images/media load;
- verify hover/focus/active states;
- inspect at least one deep state, not only the hero.

Do not declare completion before this pass.

## 8.2 Visual screenshot review
Evaluate the rendered result, not only DOM/CSS correctness.

Ask:
- Is there a clear focal anchor?
- Is important media too small or missing?
- Does the first viewport feel empty without purpose?
- Is layout density appropriate to the surface class?
- Does the art direction express the category promise rather than literally illustrating adjectives?
- Do controls look optically aligned?
- Is there obvious AI-template styling?
- Are multiple sections repeating the same composition?
- Is the experience trapped in one centered max-width/container skeleton?
- Do static screenshots still look authored without motion?
- Is the “variation” only left/right mirroring of one skeleton?
- Is there a deliberate rhythm of anchor / support / index / break rather than equal-weight modules?
- Does the interface look inhabited with real/convincing content?
- Do motion and depth improve the experience?
- On expressive multi-section surfaces, is there narrative/transition continuity in addition to ambient/object motion?
- Does the motion vocabulary feel coherent rather than effect-by-effect?
- Does this look competitive with strong products/sites in its category?

If the answer is no, revise.

---

# 9. FOUR BLOCKING GATES

These are the only final gates. Keep them strict.

## GATE 1 — CONTENT / ASSETS
Pass only if:
- named requirements are visibly covered;
- real facts are verified when necessary;
- freshness-sensitive claims were checked;
- required media is credible and actually loads;
- generated media is correctly labeled by truth role;
- personal/private/project-specific claims follow REAL / DEMO / SHELL provenance mode;
- no fake precision or invented evidence is presented as real;
- content is specific enough to avoid slogan-only emptiness.

Typical failure:
- real product promotion with no real product imagery despite accessible official assets.

## GATE 2 — ARCHITECTURE
Pass only if:
- the correct surface class was preserved;
- the primary user loop is supported;
- mature product-category expectations were considered when relevant;
- first viewport makes the next action/content/state understandable;
- mobile architecture remains usable;
- implementation did not mutate the user's requested product.

Typical failure:
- online music product turned into a static listening-room exhibition.

## GATE 3 — ART DIRECTION
Pass only if:
- one dominant medium/idea is clear;
- media, color, type, composition, depth, and motion belong to one visual world;
- hierarchy is precise;
- visual quality does not rely on clichés, adjective literalism, or generic AI styling;
- the category promise is visible in the art direction;
- major sections have deliberate composition rhythm rather than repeated container/card skeletons;
- motion roles are coherent, with narrative/transition continuity where the surface benefits from it;
- decorative details do not outnumber meaningful details;
- motion/depth have roles;
- the result feels intentional at both macro and micro scale.

Typical failure:
- dark background + gradient glow + tiny mono labels used as a shortcut for premium technology.

## GATE 4 — DELIVERY
Pass only if:
- code parses/runs;
- primary interactions work;
- no critical console/runtime error remains;
- critical content stays visible when optional effects fail;
- responsive behavior is credible;
- reduced-motion/accessibility fallback exists where relevant;
- controls/icons are visually finished;
- final render was inspected when tools allow.

Typical failure:
- 2000 lines of code with one syntax error that hides the whole page.

If any gate fails, revise before presenting the work as finished.

---



---

<!-- EXPANDED REFERENCE: anti-slop-content.md -->

# 10. ANTI-SLOP RULES

These are broad failure detectors, not a design style.

## 10.1 Avoid semantic visual clichés
Do not default to:
- AI purple/blue gradients for technology;
- black/gold for luxury;
- beige/serif for editorial;
- sage for wellness;
- generic dark glass cards for premium apps.

Use them only when derived from real context.


## 10.1.1 Avoid AI archetype clusters
Do not judge choices only one-by-one. Familiar combinations can create a strong AI-template smell even when each ingredient is valid.

Watch for clusters such as:
- dark engineering: black canvas + grid/noise + mono micro-labels + HUD metrics + cyan/orange accents;
- beige editorial: paper beige + oversized serif + tiny all-caps labels + endless image/text alternation;
- gradient SaaS: purple/navy glow + glass cards + pills + centered hero + three feature cards;
- luxury cliché: black/gold or empty beige + centered serif + hairlines + pseudo-poetic copy.

These are not banned palettes or components. If a project approaches one of these clusters, justify it through the category promise and introduce at least one project-specific counter-signal.

## 10.2 Avoid component soup
Do not fill pages with:
- identical cards,
- excessive pills,
- badges without information value,
- repeated icon-text-feature rows,
- floating glass panels,
- generic dashboard boxes.

A card is not a default container.
If removing the card background/border does not damage grouping, interaction, or comprehension, consider removing it.

Structure should emerge from content relationships.

## 10.2.1 Avoid zig-zag automation
Do not let a single max-width container, 12-column grid, or bordered-panel grammar repeat through the whole page merely because it is easy to implement. Stable shells are appropriate for utility products; expressive surfaces need deliberate changes in topology, scale, density, or media behavior.
Do not use endless alternating image/text rows as a substitute for composition.
Mirroring the same 7/5 split is repetition, not variety.
Use hierarchy to decide which items deserve wide media, compact index treatment, pairing, clustering, technical annotation, or a deliberate section break.

## 10.3 Avoid fake editorialism
Remove:
- VOL. XX,
- PLATE XX,
- FIELD NOTE,
- fake coordinates,
- pseudo timestamps,
- fake archival IDs,
- meaningless captions,

unless they communicate real information, navigation, state, authorship, or context.

## 10.4 Avoid fake interfaces and fake evidence
Do not fabricate:
- product screenshots,
- testimonials,
- awards,
- customer logos,
- performance charts,
- prices/specs,
- exact statistics,
- real-world product forms.

Mock functional data may be used for fictional/demo products when clearly part of a prototype.

## 10.5 Avoid automatic spectacle — without becoming technically timid
Do not add by default:
- pointer spotlight,
- magnetic buttons,
- shader backgrounds,
- parallax,
- particle systems,
- 3D,
- marquee,
- scroll-jacking.

But “not automatic” does **not** mean “avoid advanced techniques”. If 3D, spatial rendering, shaders, or real-time interaction are the best medium for the concept, product, or signature moment, use them confidently and execute them to a high technical and visual standard.

The failure modes are both:
- **spectacle without purpose**, and
- **timidity that flattens a spatial opportunity into generic 2D UI**.

Prove the technique supports the Design Direction and primary experience, then commit to the appropriate fidelity.

## 10.6 Avoid empty luxury
Large negative space must serve one of:
- focal emphasis,
- reading rhythm,
- media scale,
- spatial tension,
- interaction state.

If it only makes the page look expensive, it is probably wasted space.

---

# 11. CONTENT QUALITY

## 11.1 Richness comes from dimensions
Content becomes substantial through useful dimensions, not longer paragraphs.

Possible dimensions:
- what it is,
- why it matters,
- how it works,
- history/context,
- use cases,
- comparison,
- proof,
- specification,
- material/process,
- people/authorship,
- limitations,
- next action.

Choose those appropriate to the brief.

## 11.2 Copy register
Match the surface:
- product UI -> concise, state/action-oriented;
- campaign -> clear proposition + proof + desire;
- editorial -> authored, contextual, readable;
- technical -> precise, concrete, non-hype;
- premium -> confident and restrained, not pseudo-poetic by default.

Avoid repeating generic claims such as:
`powerful`, `seamless`, `innovative`, `future`, `immersive`, `premium`
without evidence or concrete meaning.

---

